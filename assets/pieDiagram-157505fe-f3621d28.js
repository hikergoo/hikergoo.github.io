import{ap as it,c as U,s as gt,g as dt,v as mt,x as _t,a as vt,b as bt,m as kt,j as xt,l as B,z as St,h as nt,i as wt,aq as At}from"./mermaid.core-57183705.js";import{i as Et}from"./init-77b53fdd.js";import{a as Dt}from"./array-9f3ba611.js";import{c as z}from"./path-53f90ab3.js";import{a as lt}from"./arc-ad99456e.js";import"./app-fe0c01b1.js";import"./commonjsHelpers-042e6b4d.js";class ct extends Map{constructor(s,l=It){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:l}}),s!=null)for(const[o,p]of s)this.set(o,p)}get(s){return super.get(ot(this,s))}has(s){return super.has(ot(this,s))}set(s,l){return super.set($t(this,s),l)}delete(s){return super.delete(Tt(this,s))}}function ot({_intern:t,_key:s},l){const o=s(l);return t.has(o)?t.get(o):l}function $t({_intern:t,_key:s},l){const o=s(l);return t.has(o)?t.get(o):(t.set(o,l),l)}function Tt({_intern:t,_key:s},l){const o=s(l);return t.has(o)&&(l=t.get(o),t.delete(o)),l}function It(t){return t!==null&&typeof t=="object"?t.valueOf():t}const ht=Symbol("implicit");function ut(){var t=new ct,s=[],l=[],o=ht;function p(g){let h=t.get(g);if(h===void 0){if(o!==ht)return o;t.set(g,h=s.push(g)-1)}return l[h%l.length]}return p.domain=function(g){if(!arguments.length)return s.slice();s=[],t=new ct;for(const h of g)t.has(h)||t.set(h,s.push(h)-1);return p},p.range=function(g){return arguments.length?(l=Array.from(g),p):l.slice()},p.unknown=function(g){return arguments.length?(o=g,p):o},p.copy=function(){return ut(s,l).unknown(o)},Et.apply(p,arguments),p}function Vt(t,s){return s<t?-1:s>t?1:s>=t?0:NaN}function Pt(t){return t}function Ot(){var t=Pt,s=Vt,l=null,o=z(0),p=z(it),g=z(0);function h(c){var d,y=(c=Dt(c)).length,w,L,N=0,x=new Array(y),A=new Array(y),T=+o.apply(this,arguments),D=Math.min(it,Math.max(-it,p.apply(this,arguments)-T)),W,C=Math.min(Math.abs(D)/y,g.apply(this,arguments)),I=C*(D<0?-1:1),v;for(d=0;d<y;++d)(v=A[x[d]=d]=+t(c[d],d,c))>0&&(N+=v);for(s!=null?x.sort(function(E,b){return s(A[E],A[b])}):l!=null&&x.sort(function(E,b){return l(c[E],c[b])}),d=0,L=N?(D-y*I)/N:0;d<y;++d,T=W)w=x[d],v=A[w],W=T+(v>0?v*L:0)+I,A[w]={data:c[w],index:d,value:v,startAngle:T,endAngle:W,padAngle:C};return A}return h.value=function(c){return arguments.length?(t=typeof c=="function"?c:z(+c),h):t},h.sortValues=function(c){return arguments.length?(s=c,l=null,h):s},h.sort=function(c){return arguments.length?(l=c,s=null,h):l},h.startAngle=function(c){return arguments.length?(o=typeof c=="function"?c:z(+c),h):o},h.endAngle=function(c){return arguments.length?(p=typeof c=="function"?c:z(+c),h):p},h.padAngle=function(c){return arguments.length?(g=typeof c=="function"?c:z(+c),h):g},h}var rt=function(){var t=function(b,e,i,a){for(i=i||{},a=b.length;a--;i[b[a]]=e);return i},s=[1,4],l=[1,5],o=[1,6],p=[1,7],g=[1,9],h=[1,11,13,15,17,19,20,26,27,28,29],c=[2,5],d=[1,6,11,13,15,17,19,20,26,27,28,29],y=[26,27,28],w=[2,8],L=[1,18],N=[1,19],x=[1,20],A=[1,21],T=[1,22],D=[1,23],W=[1,28],C=[6,26,27,28,29],I={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(e,i,a,n,u,r,f){var m=r.length-1;switch(u){case 4:n.setShowData(!0);break;case 7:this.$=r[m-1];break;case 9:n.addSection(r[m-1],n.cleanupValue(r[m]));break;case 10:this.$=r[m].trim(),n.setDiagramTitle(this.$);break;case 11:this.$=r[m].trim(),n.setAccTitle(this.$);break;case 12:case 13:this.$=r[m].trim(),n.setAccDescription(this.$);break;case 14:n.addSection(r[m].substr(8)),this.$=r[m].substr(8);break;case 21:n.parseDirective("%%{","open_directive");break;case 22:n.parseDirective(r[m],"type_directive");break;case 23:r[m]=r[m].trim().replace(/'/g,'"'),n.parseDirective(r[m],"arg_directive");break;case 24:n.parseDirective("}%%","close_directive","pie");break}},table:[{3:1,4:2,5:3,6:s,21:8,26:l,27:o,28:p,29:g},{1:[3]},{3:10,4:2,5:3,6:s,21:8,26:l,27:o,28:p,29:g},{3:11,4:2,5:3,6:s,21:8,26:l,27:o,28:p,29:g},t(h,c,{7:12,8:[1,13]}),t(d,[2,18]),t(d,[2,19]),t(d,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},t(y,w,{21:8,9:16,10:17,5:24,1:[2,3],11:L,13:N,15:x,17:A,19:T,20:D,29:g}),t(h,c,{7:25}),{23:26,24:[1,27],32:W},t([24,32],[2,22]),t(h,[2,6]),{4:29,26:l,27:o,28:p},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},t(y,[2,13]),t(y,[2,14]),t(y,[2,15]),t(y,w,{21:8,9:16,10:17,5:24,1:[2,4],11:L,13:N,15:x,17:A,19:T,20:D,29:g}),t(C,[2,16]),{25:34,31:[1,35]},t(C,[2,24]),t(h,[2,7]),t(y,[2,9]),t(y,[2,10]),t(y,[2,11]),t(y,[2,12]),{23:36,32:W},{32:[2,23]},t(C,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(e,i){if(i.recoverable)this.trace(e);else{var a=new Error(e);throw a.hash=i,a}},parse:function(e){var i=this,a=[0],n=[],u=[null],r=[],f=this.table,m="",F=0,q=0,Q=2,G=1,ft=r.slice.call(arguments,1),_=Object.create(this.lexer),M={yy:{}};for(var X in this.yy)Object.prototype.hasOwnProperty.call(this.yy,X)&&(M.yy[X]=this.yy[X]);_.setInput(e,M.yy),M.yy.lexer=_,M.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var Z=_.yylloc;r.push(Z);var pt=_.options&&_.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function yt(){var P;return P=n.pop()||_.lex()||G,typeof P!="number"&&(P instanceof Array&&(n=P,P=n.pop()),P=i.symbols_[P]||P),P}for(var k,j,S,tt,R={},H,V,at,J;;){if(j=a[a.length-1],this.defaultActions[j]?S=this.defaultActions[j]:((k===null||typeof k>"u")&&(k=yt()),S=f[j]&&f[j][k]),typeof S>"u"||!S.length||!S[0]){var et="";J=[];for(H in f[j])this.terminals_[H]&&H>Q&&J.push("'"+this.terminals_[H]+"'");_.showPosition?et="Parse error on line "+(F+1)+`:
`+_.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[k]||k)+"'":et="Parse error on line "+(F+1)+": Unexpected "+(k==G?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(et,{text:_.match,token:this.terminals_[k]||k,line:_.yylineno,loc:Z,expected:J})}if(S[0]instanceof Array&&S.length>1)throw new Error("Parse Error: multiple actions possible at state: "+j+", token: "+k);switch(S[0]){case 1:a.push(k),u.push(_.yytext),r.push(_.yylloc),a.push(S[1]),k=null,q=_.yyleng,m=_.yytext,F=_.yylineno,Z=_.yylloc;break;case 2:if(V=this.productions_[S[1]][1],R.$=u[u.length-V],R._$={first_line:r[r.length-(V||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(V||1)].first_column,last_column:r[r.length-1].last_column},pt&&(R._$.range=[r[r.length-(V||1)].range[0],r[r.length-1].range[1]]),tt=this.performAction.apply(R,[m,q,F,M.yy,S[1],u,r].concat(ft)),typeof tt<"u")return tt;V&&(a=a.slice(0,-1*V*2),u=u.slice(0,-1*V),r=r.slice(0,-1*V)),a.push(this.productions_[S[1]][0]),u.push(R.$),r.push(R._$),at=f[a[a.length-2]][a[a.length-1]],a.push(at);break;case 3:return!0}}return!0}},v=function(){var b={EOF:1,parseError:function(i,a){if(this.yy.parser)this.yy.parser.parseError(i,a);else throw new Error(i)},setInput:function(e,i){return this.yy=i||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var i=e.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var i=e.length,a=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===n.length?this.yylloc.first_column:0)+n[n.length-a.length].length-a[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),i=new Array(e.length+1).join("-");return e+this.upcomingInput()+`
`+i+"^"},test_match:function(e,i){var a,n,u;if(this.options.backtrack_lexer&&(u={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(u.yylloc.range=this.yylloc.range.slice(0))),n=e[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],a=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var r in u)this[r]=u[r];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,i,a,n;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),r=0;r<u.length;r++)if(a=this._input.match(this.rules[u[r]]),a&&(!i||a[0].length>i[0].length)){if(i=a,n=r,this.options.backtrack_lexer){if(e=this.test_match(a,u[r]),e!==!1)return e;if(this._backtrack){i=!1;continue}else return!1}else if(!this.options.flex)break}return i?(e=this.test_match(i,u[n]),e!==!1?e:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,a,n,u){switch(n){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:break;case 6:break;case 7:return 26;case 8:break;case 9:break;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 20:this.popState();break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};return b}();I.lexer=v;function E(){this.yy={}}return E.prototype=I,I.Parser=E,new E}();rt.parser=rt;const Lt=rt;let K={},st=!1;const Nt=function(t,s,l){kt.parseDirective(this,t,s,l)},Wt=function(t,s){t=xt.sanitizeText(t,U()),K[t]===void 0&&(K[t]=s,B.debug("Added new section :",t))},Ct=()=>K,Ft=function(t){st=t},Mt=function(){return st},jt=function(t){return t.substring(0,1)===":"&&(t=t.substring(1).trim()),Number(t.trim())},zt=function(){K={},st=!1,St()},Rt={parseDirective:Nt,getConfig:()=>U().pie,addSection:Wt,getSections:Ct,cleanupValue:jt,clear:zt,setAccTitle:gt,getAccTitle:dt,setDiagramTitle:mt,getDiagramTitle:_t,setShowData:Ft,getShowData:Mt,getAccDescription:vt,setAccDescription:bt},Yt=t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,Bt=Yt;let $=U(),O;const Y=450,Ut=(t,s,l,o)=>{var p;try{$=U(),B.debug(`Rendering info diagram
`+t);const v=U().securityLevel;let E;v==="sandbox"&&(E=nt("#i"+s));const b=v==="sandbox"?nt(E.nodes()[0].contentDocument.body):nt("body"),e=v==="sandbox"?E.nodes()[0].contentDocument:document;o.db.clear(),o.parser.parse(t),B.debug("Parsed info diagram");const i=e.getElementById(s);O=i.parentElement.offsetWidth,O===void 0&&(O=1200),$.useWidth!==void 0&&(O=$.useWidth),$.pie.useWidth!==void 0&&(O=$.pie.useWidth);const a=b.select("#"+s);wt(a,Y,O,$.pie.useMaxWidth),i.setAttribute("viewBox","0 0 "+O+" "+Y);var g=40,h=18,c=4,d=Math.min(O,Y)/2-g,y=a.append("g").attr("transform","translate("+O/2+","+Y/2+")"),w=o.db.getSections(),L=0;Object.keys(w).forEach(function(f){L+=w[f]});const n=$.themeVariables;var N=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];const u=((p=$.pie)==null?void 0:p.textPosition)??.75;let[r]=At(n.pieOuterStrokeWidth);r??(r=2);var x=ut().range(N),A=Object.entries(w).map(function(f,m){return{order:m,name:f[0],value:f[1]}}),T=Ot().value(function(f){return f.value}).sort(function(f,m){return f.order-m.order}),D=T(A),W=lt().innerRadius(0).outerRadius(d),C=lt().innerRadius(d*u).outerRadius(d*u);y.append("circle").attr("cx",0).attr("cy",0).attr("r",d+r/2).attr("class","pieOuterCircle"),y.selectAll("mySlices").data(D).enter().append("path").attr("d",W).attr("fill",function(f){return x(f.data.name)}).attr("class","pieCircle"),y.selectAll("mySlices").data(D).enter().append("text").text(function(f){return(f.data.value/L*100).toFixed(0)+"%"}).attr("transform",function(f){return"translate("+C.centroid(f)+")"}).style("text-anchor","middle").attr("class","slice"),y.append("text").text(o.db.getDiagramTitle()).attr("x",0).attr("y",-(Y-50)/2).attr("class","pieTitleText");var I=y.selectAll(".legend").data(x.domain()).enter().append("g").attr("class","legend").attr("transform",function(f,m){const F=h+c,q=F*x.domain().length/2,Q=12*h,G=m*F-q;return"translate("+Q+","+G+")"});I.append("rect").attr("width",h).attr("height",h).style("fill",x).style("stroke",x),I.data(D).append("text").attr("x",h+c).attr("y",h-c).text(function(f){return o.db.getShowData()||$.showData||$.pie.showData?f.data.name+" ["+f.data.value+"]":f.data.name})}catch(v){B.error("Error while rendering info diagram"),B.error(v)}},qt={draw:Ut},te={parser:Lt,db:Rt,renderer:qt,styles:Bt};export{te as diagram};
