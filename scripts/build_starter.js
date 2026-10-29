#!/usr/bin/env node
/**
 * Generate a seven-page, editable structural starter using native PowerPoint
 * shapes/text. This is a layout aid, not a fixed content template.
 * Usage: node build_starter.js path/to/starter.pptx
 */
const path = require('path');
const pptxgen = require('pptxgenjs');
const tokens = require('../assets/style-tokens.json');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Quiet Academic Slides';
pptx.subject = 'Editable academic editorial layout starter';
pptx.title = 'Quiet Academic Slides starter';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: tokens.typography.display,
  bodyFontFace: tokens.typography.body,
  lang: 'en-US'
};
const C=tokens.colors;
const S = pptx.ShapeType;
const W=13.3333333333, H=7.5;
const F_TITLE=tokens.typography.display, F_BODY=tokens.typography.body;
const output=path.resolve(process.argv[2]||path.join(__dirname,'../assets/quiet-academic-starter.pptx'));

function addSlide() { const s=pptx.addSlide(); s.background={color:C.paper}; return s; }
function t(slide, str, x,y,w,h, opt={}) {
  slide.addText(str, {
    x,y,w,h, fontFace: F_BODY, fontSize:16, color:C.ink,
    breakLine:false, margin:0, valign:'mid',
    ...opt
  });
}
function line(slide,x1,y1,x2,y2,color=C.rule,width=0.8,arr=false){
  const props={x:x1,y:y1,w:x2-x1,h:y2-y1,
    line:{color,width, ...(arr?{endArrowType:'triangle'}:{})}};
  slide.addShape(S.line, props);
}
function rect(slide,x,y,w,h,color=C.faint_green,lineColor=null){
  slide.addShape(S.rect,{x,y,w,h,fill:{color},line:{color:lineColor||color,width:0.5}});
}
function circle(slide,x,y,r,color){
  slide.addShape(S.ellipse,{x,y,w:r*2,h:r*2,fill:{color},line:{color,width:0.5}});
}
function sectionHead(slide,n,title,num){
  t(slide,n,.58,.34,.40,.29,{fontSize:11.4,bold:true,color:C.sage,charSpacing:2});
  line(slide,.98,.47,1.46,.47,C.rule,0.8);
  t(slide,title,1.63,.23,10.9,.66,{fontFace:F_TITLE,fontSize:29});
  t(slide,String(num).padStart(2,'0'),12.39,7.12,.33,.17,{fontSize:8.5,color:C.body_muted});
}
function ph(slide,txt,x,y,w,h,fill=C.faint_green,opt={}){
  rect(slide,x,y,w,h,fill);
  t(slide,txt,x+.16,y+.12,w-.32,h-.24,{fontSize:14,color:C.body_muted,align:'center',...opt});
}
function arrow(slide,x1,y1,x2,y2,color=C.rule){line(slide,x1,y1,x2,y2,color,1.0,true);}

// 1. Editorial hero: image placeholder is intentionally native and replaceable.
{
  const s=addSlide();
  rect(s,5.45,0,W-5.45,H,C.faint_green);
  rect(s,5.85,.54,W-6.5,6.43,C.light_sage);
  t(s,'[Hero visual]',7.3,3.06,4.0,.55,{fontFace:F_TITLE,fontSize:27,color:C.body_muted,align:'center'});
  line(s,.78,.56,1.24,.56,C.sage,1.2);
  t(s,'Understanding\nChange',.74,1.37,4.5,1.7,{fontFace:F_TITLE,fontSize:46,breakLine:false});
  t(s,'A calm, evidence-led research presentation',.78,3.33,4.55,.6,{fontSize:18.5});
  line(s,.78,4.1,4.8,4.1,C.rule,.7);
  t(s,'What can careful analysis reveal?',.78,4.33,4.45,.76,{fontFace:F_TITLE,fontSize:20,italic:true});
  t(s,'Presenter: [Name]\nDepartment: [Unit]\nDate: [Date]',.78,6.10,4.25,.80,{fontSize:12.5,breakLine:false,color:C.ink});
}

// 2. A three-question architecture.
{
  const s=addSlide();
  t(s,'Three questions',.68,.42,11.9,.75,{fontFace:F_TITLE,fontSize:37});
  line(s,1.11,3.54,12.23,3.54,C.rule,1);
  const xs=[2.25,6.67,11.07],N=['01','02','03'];
  const question=['What is changing?','Why does it change?','What can we validate?'];
  const hint=['Define the phenomenon.','Explain the mechanism.','Test the evidence.'];
  xs.forEach((x,i)=>{
    const clr=[C.sage,C.powder_blue,C.sage][i];
    circle(s,x-.095,3.44,.095,clr);
    t(s,N[i],x-1.65,2.18,3.30,.54,{fontSize:34,bold:true,color:clr,align:'center'});
    t(s,question[i],x-1.8,4.14,3.6,.84,{fontSize:23,align:'center',breakLine:false});
    t(s,hint[i],x-1.65,5.58,3.3,.34,{fontSize:13,color:C.body_muted,align:'center'});
  });
  t(s,'02',12.39,7.12,.31,.16,{fontSize:8.5,color:C.body_muted});
}

// 3. Two-lane mechanism with known and inferred paths plus an explicit compare bar.
{
  const s=addSlide(); sectionHead(s,'01','Understanding the mechanism',3);
  t(s,'KNOWN TRANSFORMATION',.73,1.27,5.4,.31,{fontSize:14,bold:true,color:C.sage,charSpacing:1.8});
  t(s,'LEARNED RESPONSE',7.05,1.27,5.4,.31,{fontSize:14,bold:true,color:C.powder_blue,charSpacing:1.6});
  line(s,6.69,1.36,6.69,5.34,C.rule,.8);
  const x=[.76,2.17,3.58,4.99];
  for (let j=0;j<4;j++) {
    const fills=[C.faint_green,C.light_sage,C.muted_sage,C.mist_blue];
    rect(s,x[j],2.02,1.08,1.05,fills[j]);
    if(j<3)arrow(s,x[j]+1.13,2.54,x[j]+1.32,2.54);
  }
  t(s,'Input',.87,3.16,.95,.32,{fontSize:12,color:C.body_muted});
  t(s,'Transformed state',4.12,3.16,1.7,.32,{fontSize:12,color:C.body_muted,align:'center'});
  ph(s,'[Observed state]',7.13,2.02,1.27,1.05,C.mist_blue,{fontSize:11});
  arrow(s,8.47,2.54,8.72,2.54);
  ph(s,'[Model / estimate]',8.83,2.19,2.16,.72,C.faint_blue,{fontSize:13,color:C.ink});
  arrow(s,11.10,2.54,11.28,2.54);
  ph(s,'[Result]',11.38,2.02,1.28,1.05,C.faint_green,{fontSize:12});
  t(s,'[Known forward relation]',1.08,4.20,5.0,.62,{fontFace:F_TITLE,fontSize:23,italic:true});
  t(s,'[Prediction or reconstruction equation]',7.18,4.20,5.45,.62,{fontFace:F_TITLE,fontSize:20,italic:true});
  line(s,.77,5.54,12.55,5.54,C.rule,.8);
  t(s,'COMPARE EVIDENCE',.79,6.05,2.35,.48,{fontSize:14,bold:true,color:C.ink});
  t(s,'[Known target]',3.30,6.08,2.5,.42,{fontSize:17,color:C.sage,align:'center'});
  arrow(s,5.94,6.27,6.17,6.27);
  t(s,'[Error / objective]',6.25,6.06,2.75,.47,{fontFace:F_TITLE,fontSize:21,align:'center'});
  line(s,9.23,6.27,9.46,6.27,C.powder_blue,1,true);
  t(s,'[Model estimate]',9.57,6.08,2.61,.42,{fontSize:17,color:C.powder_blue,align:'center'});
}

// 4. Sequential evidence/state update page.
{
  const s=addSlide(); sectionHead(s,'02','Tracing the transition',4);
  t(s,'[Transition equation or invariant]',.85,1.35,11.7,.70,{fontFace:F_TITLE,fontSize:26,italic:true,align:'center'});
  ph(s,'[Initial state]',.85,2.66,2.25,2.20,C.mist_blue);
  ph(s,'[Final state]',10.25,2.66,2.25,2.20,C.light_sage);
  line(s,3.32,3.76,10.01,3.76,C.rule,1.4,true);
  [4.12,6.56,8.99].forEach((x,i)=>{
    circle(s,x-.19,3.57,.19,[C.sage,C.powder_blue,C.sage][i]);
    t(s,String(i+1),x-.19,3.60,.37,.22,{fontSize:14,bold:true,color:C.paper,align:'center'});
    t(s,['OBSERVE','UPDATE','REPEAT'][i],x-1.04,4.27,2.08,.3,{fontSize:13,bold:true,color:C.body_muted,align:'center'});
  });
  t(s,'[State at t]',.85,5.20,2.25,.41,{fontFace:F_TITLE,fontSize:22,italic:true,align:'center'});
  t(s,'[State at t + 1]',10.25,5.20,2.25,.41,{fontFace:F_TITLE,fontSize:22,italic:true,align:'center'});
}

// 5. Many-to-many relationship matrix + processing path + output.
{
  const s=addSlide(); sectionHead(s,'03','Relationships guide the result',5);
  t(s,'Prompt:  "[Instruction or condition]"',.73,1.12,7.9,.47,{fontFace:F_TITLE,fontSize:24,italic:true});
  t(s,'INPUT FEATURES',2.20,1.92,3.0,.24,{fontSize:12,bold:true,color:C.powder_blue,align:'center',charSpacing:1.4});
  const cx=2.60, cy=2.55, step=.52, cell=.45;
  for(let c=0;c<4;c++) t(s,['A','B','C','D'][c],cx+c*step,2.27,cell,.19,{fontSize:10.6,align:'center'});
  for(let r=0;r<4;r++){
    circle(s,1.87,cy+r*step+.17,.08,C.sage);
    line(s,2.02,cy+r*step+.25,cx-.12,cy+r*step+.25,C.rule,.8,true);
    for(let c=0;c<4;c++){
      rect(s,cx+c*step,cy+r*step,cell,cell,
        [C.mist_blue,C.muted_sage,C.light_sage,C.faint_blue,C.powder_blue][(r+2*c)%5]);
    }
  }
  t(s,'[Relation scores]',5.02,3.35,2.72,.72,{fontSize:16,align:'center'});
  arrow(s,4.83,3.69,5.00,3.69);
  // These relation scores condition the transformation; they are not the final output.
  line(s,6.20,4.10,6.20,5.50,C.sage,.8);
  line(s,6.20,5.50,3.62,5.50,C.sage,.8);
  arrow(s,3.62,5.50,3.62,5.74,C.sage);
  ph(s,'[Output visual]',9.05,2.14,3.36,2.65,C.faint_green);
  t(s,'OUTPUT',10.13,1.85,1.2,.26,{fontSize:12,bold:true,color:C.body_muted,align:'center'});
  t(s,'[Current state]',.75,5.83,1.36,.5,{fontFace:F_TITLE,fontSize:21});
  arrow(s,2.25,6.07,2.52,6.07);
  ph(s,'[Transformation]',2.61,5.81,2.07,.50,C.faint_blue,{fontSize:13,color:C.ink});
  arrow(s,4.79,6.07,5.13,6.07);
  ph(s,'[Update]',5.22,5.81,1.27,.50,C.faint_green,{fontSize:13,color:C.ink});
  arrow(s,6.61,6.07,6.92,6.07);
  t(s,'[Next state]',7.03,5.83,1.57,.5,{fontFace:F_TITLE,fontSize:21});
  line(s,9.06,6.07,9.41,6.07,C.rule,.9,true);
  ph(s,'[Output map]',9.51,5.81,2.16,.50,C.faint_green,{fontSize:13,color:C.ink});
  arrow(s,10.57,5.72,10.57,4.94,C.sage);
}

// 6. Open question + authentic evidence spaces.
{
  const s=addSlide();
  t(s,'An open question',.72,.42,11.0,.72,{fontFace:F_TITLE,fontSize:37});
  t(s,'QUESTION FOR FUTURE WORK',.72,1.67,3.8,.28,{fontSize:13,color:C.sage,bold:true});
  t(s,'What remains\nunexplained?',.73,2.20,3.95,1.84,{fontFace:F_TITLE,fontSize:30});
  t(s,'[A concise research or decision mission in one or two sentences.]',.74,5.27,3.88,.82,{fontSize:17,color:C.body_muted});
  line(s,4.90,1.36,4.90,6.75,C.rule,.9);
  t(s,'EXISTING EVIDENCE',5.41,1.54,6.95,.3,{fontSize:13,bold:true,color:C.body_muted});
  ph(s,'[Prior work, benchmark, or figure]',5.41,1.94,7.10,1.89,C.faint_blue);
  t(s,'CURRENT FINDINGS',5.41,4.16,6.95,.30,{fontSize:13,bold:true,color:C.body_muted});
  ph(s,'[Our experiment, comparison, or observation]',5.41,4.54,7.10,1.77,C.faint_green);
  t(s,'06',12.39,7.12,.32,.16,{fontSize:8.5,color:C.body_muted});
}

// 7. Returning close with mirrored hero field and a genuine final statement.
{
  const s=addSlide();
  rect(s,5.45,0,W-5.45,H,C.faint_green);
  rect(s,5.83,.53,W-6.48,6.42,C.light_sage);
  t(s,'[Closing visual]',7.35,3.02,3.95,.62,{fontFace:F_TITLE,fontSize:27,color:C.body_muted,align:'center'});
  line(s,.78,.56,1.24,.56,C.sage,1.2);
  t(s,'Thank you',.75,1.47,4.8,.88,{fontFace:F_TITLE,fontSize:48});
  t(s,'[One lasting idea]\n[one concise insight]',.78,3.12,4.7,1.20,{fontFace:F_TITLE,fontSize:30});
  line(s,.80,4.77,5.10,4.77,C.rule,.7);
  ['LEARN','CONNECT','APPLY'].forEach((v,i)=> t(s,v,.80+i*1.50,4.93,1.35,.30,{fontSize:12.5,bold:true,color:C.sage,align:'center'}));
  t(s,'Presenter: [Name]\nDate: [Date]',.80,6.10,4.0,.7,{fontSize:13,color:C.ink});
}

// Out-of-bounds checker is intentionally lightweight; render and inspect as a
// separate mandatory quality gate (see references/story-and-qa.md).
let helpers;
try { helpers = require('/home/oai/skills/slides/pptxgenjs_helpers'); } catch (_) {}
if (helpers && helpers.warnIfSlideElementsOutOfBounds) {
  for(const slide of pptx._slides) helpers.warnIfSlideElementsOutOfBounds(slide,pptx);
}
pptx.writeFile({fileName:output}).then(()=>console.log(`Wrote ${output}`)).catch(err=>{console.error(err);process.exit(1);});
