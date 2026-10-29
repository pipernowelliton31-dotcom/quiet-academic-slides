#!/usr/bin/env python3
"""Basic QA for an editable academic slide deck.
Requires python-pptx. Render pages separately for visual inspection.
"""
import argparse
import json
import re
from collections import Counter
from pathlib import Path
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE_TYPE

BAD = ('\ufffd', '\u25a1', '\u25af')
def shapes_recursive(shapes):
    for sh in shapes:
        yield sh
        if sh.shape_type == MSO_SHAPE_TYPE.GROUP:
            yield from shapes_recursive(sh.shapes)

def audit(path):
    p=Presentation(str(path))
    w,h=p.slide_width,p.slide_height
    fonts=Counter();errors=[];warnings=[]
    for i,slide in enumerate(p.slides,1):
        for sh in shapes_recursive(slide.shapes):
            if min(sh.left,sh.top)<-5000 or sh.left+sh.width>w+5000 or sh.top+sh.height>h+5000:
                errors.append(f'Slide {i}: off-canvas object {sh.name}')
            if sh.has_text_frame:
                if any(x in sh.text for x in BAD):
                    errors.append(f'Slide {i}: suspicious character in {sh.name}')
                for para in sh.text_frame.paragraphs:
                    for run in para.runs:
                        if not run.text.strip():continue
                        font=run.font.name or '(theme)'
                        fonts[font]+=1
                        if any(x in font.lower() for x in ('variable','noto serif display')):
                            warnings.append(f'Slide {i}: risky font {font}')
                        if run.font.size and run.font.size.pt<9:
                            warnings.append(f'Slide {i}: small font {run.font.size.pt:.1f} pt')
    return {'slides':len(p.slides),'errors':errors,'warnings':warnings,'fonts':dict(fonts),
            'status':'FAIL' if errors else 'REVIEW' if warnings else 'PASS'}

def main():
    a=argparse.ArgumentParser()
    a.add_argument('pptx',type=Path)
    a.add_argument('--json',type=Path)
    a.add_argument('--strict',action='store_true')
    args=a.parse_args()
    result=audit(args.pptx)
    print(json.dumps(result,indent=2,ensure_ascii=False))
    if args.json:args.json.write_text(json.dumps(result,indent=2),encoding='utf-8')
    return int(bool(args.strict and result['errors']))
if __name__=='__main__':raise SystemExit(main())
