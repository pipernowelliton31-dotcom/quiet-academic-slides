// Editable academic PowerPoint starter. Requires npm install pptxgenjs.
// Usage: node scripts/build_starter.js output.pptx
const pptxgen=require('pptxgenjs');
const p=new pptxgen();
p.layout='LAYOUT_WIDE';
p.author='Quiet Academic Slides';
p.subject='Editable presentation layouts';
p.theme={headFontFace:'Palatino Linotype',bodyFontFace:'Lato',lang:'en-US'};
const paper='FAF8F3',ink='19392F',sage='728D73',blue='88AABD',rule='C6CECA';
const title=(s,t)=>s.addText(t,{x:.7,y:.35,w:11.8,h:.75,fontFace:'Palatino Linotype',fontSize:30,color:ink,margin:0,breakLine:false});
const slide=()=>{let s=p.addSlide();s.background={color:paper};return s;};
const txt=(s,t,x,y,w,h,fs=16,col=ink)=>s.addText(t,{x,y,w,h,fontFace:'Lato',fontSize:fs,color:col,margin:0,breakLine:false});
const line=(s,x,y,w)=>s.addShape(p.ShapeType.line,{x,y,w,h:0,line:{color:rule,width:1}});
let s=slide();title(s,'A question worth asking');txt(s,'One precise intellectual hook',.8,1.9,5.5,.6,20);s.addShape(p.ShapeType.rect,{x:7,y:1.4,w:5,h:4.8,line:{color:rule},fill:{color:'EAF0E7'}});txt(s,'Hero visual',8.2,3.5,3,.5,20);
s=slide();title(s,'Three questions');line(s,1,3.5,11);
['01','02','03'].forEach((v,i)=>{let x=1+i*4;txt(s,v,x,2.3,2,.5,32,[sage,blue,'C96958'][i]);txt(s,['Understand','Investigate','Conclude'][i],x,4.0,3.6,.8,22);});
s=slide();title(s,'Two processes, one comparison');line(s,6.6,1.7,0);txt(s,'SOURCE',.8,1.6,4,.5,14,sage);txt(s,'RESPONSE',7.0,1.6,4,.5,14,blue);txt(s,'Known transformation',.8,2.5,5,1,21);txt(s,'Model or alternative',7,2.5,5,1,21);line(s,.8,4.2,11.5);
s=slide();title(s,'How the process unfolds');line(s,1.2,3.9,10.8);['START','TRANSFORM','UPDATE','RESULT'].forEach((v,i)=>{let x=1+i*3.2; s.addShape(p.ShapeType.ellipse,{x,y:3.78,w:.25,h:.25,line:{color:sage},fill:{color:sage}});txt(s,v,x,4.35,2.6,.35,14);});
s=slide();title(s,'Relationships in context');for(let r=0;r<4;r++)for(let c=0;c<4;c++)s.addShape(p.ShapeType.rect,{x:1.3+c*.67,y:2+r*.67,w:.61,h:.61,line:{color:paper},fill:{color:(r+c)%2?'A5BAA0':'CDDDDF'}});txt(s,'Input relationships',1.3,5.2,4,.45,18);txt(s,'Transformation → Output',6.1,3.15,6,.7,22);
s=slide();title(s,'An open question');txt(s,'What remains unknown?',.8,2.1,5,1.2,28);txt(s,'Evidence or experiment',7.3,2.4,4.7,.8,20);
s=slide();title(s,'Thank you');txt(s,'Structure communicates.',.8,2.1,5,1,27);txt(s,'A quiet closing thought',.8,4,5,.7,17);
p.writeFile({fileName:process.argv[2]||'quiet-academic-starter.pptx'});
