import{s as p,g as $,r as U,j as e,v as oe,w as ae,x as Le,u as Ie,b as De,d as Te,o as $e}from"./index-c3d3584f.js";import{c as Ne,a as xe,b as re,d as Re,u as Be,B as Me}from"./Button-ecdb4be8.js";import{S as We,t as qe,f as Ge,C as ze}from"./DaySwitch.styled-32ed5a18.js";import{C as Ue}from"./ContainerStyled-bb0b3bf9.js";import{C as Ve,P as He,a as Ye,U as Xe,I as Q,b as Je,c as Ke,N as Qe,d as Ze,e as et,S as ye,T as je,D as we,A as tt,L as rt}from"./UserCards.styled-8737c99f.js";import{s as Z}from"./sprite-b584189e.js";import"./createClass-d5c517a3.js";const nt=p.form`
    padding-top: 18px;
    
@media screen and (min-width: 768px) {
    padding-top: 38px;
        
}
@media screen and (min-width: 1440px) {
    padding-top: 32px;
        
}
`,it=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,ot=p.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 20px;
@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
}

`,de=p.div`
width: 100%;

`,at=p.label`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    
    color: #efede8;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${$.title};
    border-radius: 12px;
    padding: 13px;
    font-size: 14px;
    line-height: 1.29;
    &:hover,
    &:focus {
        border-color: rgba(230, 83, 60, 1);
    }

    &:active{
        /* background-color: inherit; */
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      
    }
`;p.span`
    display: flex;
    align-items: center;
`;const be=p.div`
    display: flex;
    gap: 14px;
    align-items: flex-end;
@media screen and (min-width: 768px) {
    width: 345px;
}
`;p.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media screen and (min-width: 375px) {
        justify-content: flex-start;
        gap: 20px;
    }
    `;p.div`
    display: flex;
    gap: 4px;
    @media screen and (min-width: 375px) {
        gap: 8px;
    }
`;const st=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,ue=p.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${$.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,he=p.input`
     outline: 0;
    outline-offset: 0;
    color: #efede8;
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${$.title};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
    &:hover,
    &:focus {
        border-color: rgba(230, 83, 60, 1);
    }

    &:active{
        background-color: inherit;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      
    }
`,lt=p.span`
    display: flex;
    align-items: center;
    color: ${$.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${t=>t.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,ct=p.span`
    display: block;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${$.titleCards};
    margin-bottom: 4px;
`;p.label`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;

`;p.input`
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
`;p.svg`
    fill: #000000;
    stroke: currentColor;   
`;const dt=p.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,Fe=p.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,ut=p.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,I=p.div`
  /* margin-bottom: 20px; */

`,D=p.label`
    position: relative;
    /* margin-left: 32px; */
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
 
    
`,O=p.span`

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(99, 99, 102, 1);
  border-radius: 50%;

  &::before{
      content: "";
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }
@media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    &::before{
        width: 10px;
        height: 10px;
        margin: auto;
    }

}

  `,T=p.input`
      display: none;
    &:checked + ${O}{
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-color: ${$.bgSecondary};
        &::before{

            background-color: ${$.bgSecondary};
            transform: translate(-50%, -50%) scale(1);
        }
    }
`,ee=p.span`
    position: relative;
    margin-left: 32px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${$.withe};
@media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
}
`;p.div`
    width: 100%;
    display: flex;
    gap: 9px;
    `;const ne=p.span`
    margin-left: 32px;
    display: block;
    width: 260px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${$.withe};
    @media screen and (min-width: 768px) {
        width: 100%;
    }
    
    `;p.input`
    background-color: rgba(0,0,0,1);
    /* width: 100px; */
    border: none;
    color: ${$.withe}; 
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0em;
    text-align: left;

`;const ht=Ne().shape({name:xe().required("Name is required"),height:re().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:re().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:re().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:Re().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:re().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:xe().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:re().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),pt=()=>{const[t,o]=U.useState(Date.now()),i=Be({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:t,blood:"",sex:"",levelActivity:""},validationSchema:ht,onSubmit:async(s,l)=>{await new Promise(u=>setTimeout(u,1e3)),console.log("data",s),l.resetForm()}});return e.jsx("div",{children:e.jsxs(nt,{onSubmit:i.handleSubmit,children:[e.jsx(ue,{htmlFor:"name",children:"Basic info"}),e.jsxs(it,{children:[e.jsx(he,{name:"name",type:"text",id:"name",onChange:i.handleChange,value:i.values.name}),e.jsx(lt,{children:"example@example.com"})]}),e.jsxs(ot,{children:[e.jsxs(be,{children:[e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"Height",children:"Height"}),e.jsx(he,{name:"height",type:"number",onChange:i.handleChange,value:i.values.height,placeholder:"0"})]}),e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(he,{name:"currentWeight",type:"number",onChange:i.handleChange,value:i.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(be,{children:[e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(he,{name:"desiredWeight",type:"number",onChange:i.handleChange,value:i.values.desiredWeight,placeholder:"0"})]}),e.jsx(de,{children:e.jsx(We,{children:e.jsx(at,{children:e.jsx(qe,{selected:t,onChange:s=>{o(s),i.setFieldValue("birthday",Ge(s,"yyyy-MM-dd"))},customInput:e.jsx(ze,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1)})})})})]})]}),e.jsx(ct,{children:"Blood"}),e.jsxs(dt,{children:[e.jsxs(Fe,{children:[e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:i.handleChange,value:"1"}),e.jsx(O,{}),e.jsx(ee,{children:"1"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:i.handleChange,value:"2"}),e.jsx(O,{}),e.jsx(ee,{children:"2"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:i.handleChange,value:"3"}),e.jsx(O,{}),e.jsx(ee,{children:"3"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:i.handleChange,value:"4"}),e.jsx(O,{}),e.jsx(ee,{children:"4"})]})})]}),e.jsx(Fe,{children:e.jsxs(ut,{children:[e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"sex",type:"radio",onChange:i.handleChange,value:"male"}),e.jsx(O,{}),e.jsx(ee,{children:"Male"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"sex",type:"radio",onChange:i.handleChange,value:"female"}),e.jsx(O,{}),e.jsx(ee,{children:"Female"})]})})]})})]}),e.jsxs(st,{children:[e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:i.handleChange,value:"1"}),e.jsx(O,{}),e.jsx(ne,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:i.handleChange,value:"2"}),e.jsx(O,{}),e.jsx(ne,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:i.handleChange,value:"3"}),e.jsx(O,{}),e.jsx(ne,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:i.handleChange,value:"4"}),e.jsx(O,{}),e.jsx(ne,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(I,{children:e.jsxs(D,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:i.handleChange,value:"5"}),e.jsx(O,{}),e.jsx(ne,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(Me,{type:"submit",text:"Save"})]})})},ft=p.h2`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;

  color: ${$.withe};
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,mt=({text:t,className:o})=>e.jsx(ft,{className:o,children:t}),gt=p.div`
  ${Ue};
  padding-top: 101px;
  padding-bottom: 66px;
  @media (min-width: 768px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
  @media (min-width: 1440px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
`,vt=p.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`;function H(){H=function(){return t};var t={},o=Object.prototype,i=o.hasOwnProperty,s=Object.defineProperty||function(n,r,a){n[r]=a.value},l=typeof Symbol=="function"?Symbol:{},u=l.iterator||"@@iterator",m=l.asyncIterator||"@@asyncIterator",g=l.toStringTag||"@@toStringTag";function h(n,r,a){return Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{h({},"")}catch{h=function(r,a,d){return r[a]=d}}function C(n,r,a,d){var c=r&&r.prototype instanceof b?r:b,f=Object.create(c.prototype),v=new _(d||[]);return s(f,"_invoke",{value:le(n,a,v)}),f}function S(n,r,a){try{return{type:"normal",arg:n.call(r,a)}}catch(d){return{type:"throw",arg:d}}}t.wrap=C;var y={};function b(){}function E(){}function P(){}var Y={};h(Y,u,function(){return this});var te=Object.getPrototypeOf,W=te&&te(te(J([])));W&&W!==o&&i.call(W,u)&&(Y=W);var N=P.prototype=b.prototype=Object.create(Y);function se(n){["next","throw","return"].forEach(function(r){h(n,r,function(a){return this._invoke(r,a)})})}function R(n,r){function a(c,f,v,F){var j=S(n[c],n,f);if(j.type!=="throw"){var k=j.arg,L=k.value;return L&&typeof L=="object"&&i.call(L,"__await")?r.resolve(L.__await).then(function(x){a("next",x,v,F)},function(x){a("throw",x,v,F)}):r.resolve(L).then(function(x){k.value=x,v(k)},function(x){return a("throw",x,v,F)})}F(j.arg)}var d;s(this,"_invoke",{value:function(c,f){function v(){return new r(function(F,j){a(c,f,F,j)})}return d=d?d.then(v,v):v()}})}function le(n,r,a){var d="suspendedStart";return function(c,f){if(d==="executing")throw new Error("Generator is already running");if(d==="completed"){if(c==="throw")throw f;return V()}for(a.method=c,a.arg=f;;){var v=a.delegate;if(v){var F=ce(v,a);if(F){if(F===y)continue;return F}}if(a.method==="next")a.sent=a._sent=a.arg;else if(a.method==="throw"){if(d==="suspendedStart")throw d="completed",a.arg;a.dispatchException(a.arg)}else a.method==="return"&&a.abrupt("return",a.arg);d="executing";var j=S(n,r,a);if(j.type==="normal"){if(d=a.done?"completed":"suspendedYield",j.arg===y)continue;return{value:j.arg,done:a.done}}j.type==="throw"&&(d="completed",a.method="throw",a.arg=j.arg)}}}function ce(n,r){var a=r.method,d=n.iterator[a];if(d===void 0)return r.delegate=null,a==="throw"&&n.iterator.return&&(r.method="return",r.arg=void 0,ce(n,r),r.method==="throw")||a!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),y;var c=S(d,n.iterator,r.arg);if(c.type==="throw")return r.method="throw",r.arg=c.arg,r.delegate=null,y;var f=c.arg;return f?f.done?(r[n.resultName]=f.value,r.next=n.nextLoc,r.method!=="return"&&(r.method="next",r.arg=void 0),r.delegate=null,y):f:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function X(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function q(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function _(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(X,this),this.reset(!0)}function J(n){if(n){var r=n[u];if(r)return r.call(n);if(typeof n.next=="function")return n;if(!isNaN(n.length)){var a=-1,d=function c(){for(;++a<n.length;)if(i.call(n,a))return c.value=n[a],c.done=!1,c;return c.value=void 0,c.done=!0,c};return d.next=d}}return{next:V}}function V(){return{value:void 0,done:!0}}return E.prototype=P,s(N,"constructor",{value:P,configurable:!0}),s(P,"constructor",{value:E,configurable:!0}),E.displayName=h(P,g,"GeneratorFunction"),t.isGeneratorFunction=function(n){var r=typeof n=="function"&&n.constructor;return!!r&&(r===E||(r.displayName||r.name)==="GeneratorFunction")},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,P):(n.__proto__=P,h(n,g,"GeneratorFunction")),n.prototype=Object.create(N),n},t.awrap=function(n){return{__await:n}},se(R.prototype),h(R.prototype,m,function(){return this}),t.AsyncIterator=R,t.async=function(n,r,a,d,c){c===void 0&&(c=Promise);var f=new R(C(n,r,a,d),c);return t.isGeneratorFunction(r)?f:f.next().then(function(v){return v.done?v.value:f.next()})},se(N),h(N,g,"Generator"),h(N,u,function(){return this}),h(N,"toString",function(){return"[object Generator]"}),t.keys=function(n){var r=Object(n),a=[];for(var d in r)a.push(d);return a.reverse(),function c(){for(;a.length;){var f=a.pop();if(f in r)return c.value=f,c.done=!1,c}return c.done=!0,c}},t.values=J,_.prototype={constructor:_,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!n)for(var r in this)r.charAt(0)==="t"&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function a(j,k){return f.type="throw",f.arg=n,r.next=j,k&&(r.method="next",r.arg=void 0),!!k}for(var d=this.tryEntries.length-1;d>=0;--d){var c=this.tryEntries[d],f=c.completion;if(c.tryLoc==="root")return a("end");if(c.tryLoc<=this.prev){var v=i.call(c,"catchLoc"),F=i.call(c,"finallyLoc");if(v&&F){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(v){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!F)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(n,r){for(var a=this.tryEntries.length-1;a>=0;--a){var d=this.tryEntries[a];if(d.tryLoc<=this.prev&&i.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var c=d;break}}c&&(n==="break"||n==="continue")&&c.tryLoc<=r&&r<=c.finallyLoc&&(c=null);var f=c?c.completion:{};return f.type=n,f.arg=r,c?(this.method="next",this.next=c.finallyLoc,y):this.complete(f)},complete:function(n,r){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&r&&(this.next=r),y},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.finallyLoc===n)return this.complete(a.completion,a.afterLoc),q(a),y}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc===n){var d=a.completion;if(d.type==="throw"){var c=d.arg;q(a)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,a){return this.delegate={iterator:J(n),resultName:r,nextLoc:a},this.method==="next"&&(this.arg=void 0),y}},t}function Ce(t,o,i,s,l,u,m){try{var g=t[u](m),h=g.value}catch(C){i(C);return}g.done?o(h):Promise.resolve(h).then(s,l)}function me(t){return function(){var o=this,i=arguments;return new Promise(function(s,l){var u=t.apply(o,i);function m(h){Ce(u,s,l,m,g,"next",h)}function g(h){Ce(u,s,l,m,g,"throw",h)}m(void 0)})}}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},ie.apply(this,arguments)}function Ee(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,ge(t,o)}function ge(t,o){return ge=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,l){return s.__proto__=l,s},ge(t,o)}function xt(t){if(t==null)throw new TypeError("Cannot destructure "+t)}var yt=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function pe(t,o){var i=jt(t);if(typeof i.path!="string"){var s=t.webkitRelativePath;Object.defineProperty(i,"path",{value:typeof o=="string"?o:typeof s=="string"&&s.length>0?s:t.name,writable:!1,configurable:!1,enumerable:!0})}return i}function jt(t){var o=t.name,i=o&&o.lastIndexOf(".")!==-1;if(i&&!t.type){var s=o.split(".").pop().toLowerCase(),l=yt.get(s);l&&Object.defineProperty(t,"type",{value:l,writable:!1,configurable:!1,enumerable:!0})}return t}var wt=[".DS_Store","Thumbs.db"];function bt(t){return oe(this,void 0,void 0,function(){return ae(this,function(o){return[2,Ft(t)&&t.dataTransfer?Pt(t.dataTransfer,t.type):Ct(t)]})})}function Ft(t){return!!t.dataTransfer}function Ct(t){var o=St(t.target)?t.target.files?ve(t.target.files):[]:[];return o.map(function(i){return pe(i)})}function St(t){return t!==null}function Pt(t,o){return oe(this,void 0,void 0,function(){var i,s;return ae(this,function(l){switch(l.label){case 0:return t.items?(i=ve(t.items).filter(function(u){return u.kind==="file"}),o!=="drop"?[2,i]:[4,Promise.all(i.map(Et))]):[3,2];case 1:return s=l.sent(),[2,Se(_e(s))];case 2:return[2,Se(ve(t.files).map(function(u){return pe(u)}))]}})})}function Se(t){return t.filter(function(o){return wt.indexOf(o.name)===-1})}function ve(t){for(var o=[],i=0;i<t.length;i++){var s=t[i];o.push(s)}return o}function Et(t){if(typeof t.webkitGetAsEntry!="function")return Pe(t);var o=t.webkitGetAsEntry();return o&&o.isDirectory?ke(o):Pe(t)}function _e(t){return t.reduce(function(o,i){return Le(o,Array.isArray(i)?_e(i):[i])},[])}function Pe(t){var o=t.getAsFile();if(!o)return Promise.reject(t+" is not a File");var i=pe(o);return Promise.resolve(i)}function _t(t){return oe(this,void 0,void 0,function(){return ae(this,function(o){return[2,t.isDirectory?ke(t):kt(t)]})})}function ke(t){var o=t.createReader();return new Promise(function(i,s){var l=[];function u(){var m=this;o.readEntries(function(g){return oe(m,void 0,void 0,function(){var h,C,S;return ae(this,function(y){switch(y.label){case 0:if(g.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(l)];case 2:return h=y.sent(),i(h),[3,4];case 3:return C=y.sent(),s(C),[3,4];case 4:return[3,6];case 5:S=Promise.all(g.map(_t)),l.push(S),u(),y.label=6;case 6:return[2]}})})},function(g){s(g)})}u()})}function kt(t){return oe(this,void 0,void 0,function(){return ae(this,function(o){return[2,new Promise(function(i,s){t.file(function(l){var u=pe(l,t.fullPath);i(u)},function(l){s(l)})})]})})}function At(t,o,i,s){var l=document.createElement("input");l.style.display="none",document.body.appendChild(l),l.type="file",t!=="*"&&(l.accept=t),l.multiple=o,l.addEventListener("change",function(u){i(u),document.body.removeChild(l)}),s&&s(l),l.dispatchEvent(new MouseEvent("click"))}var Ot=function(o){var i=o.onFilesSelected,s=o.onFilesSuccessfullySelected,l=o.onFilesRejected,u=o.onClear,m=o.validators,g=function(b){i==null||i(b),m==null||m.forEach(function(E){E.onFilesSelected(b)})},h=function(b){s==null||s(b),m==null||m.forEach(function(E){E.onFilesSuccessfullySelected(b)})},C=function(b){l==null||l(b),m==null||m.forEach(function(E){E.onFilesRejected(b)})},S=function(){u==null||u(),m==null||m.forEach(function(b){b.onClear==null||b.onClear()})};return{onFilesSelected:g,onFilesSuccessfullySelected:h,onFilesRejected:C,onClear:S}};function Lt(t){var o=t.accept,i=o===void 0?"*":o,s=t.multiple,l=s===void 0?!0:s,u=t.readAs,m=u===void 0?"Text":u,g=t.readFilesContent,h=g===void 0?!0:g,C=t.validators,S=C===void 0?[]:C,y=t.initializeWithCustomParameters,b=U.useState([]),E=b[0],P=b[1],Y=U.useState([]),te=Y[0],W=Y[1],N=U.useState([]),se=N[0],R=N[1],le=U.useState(!1),ce=le[0],X=le[1],q=Ot(t),_=q.onFilesSelected,J=q.onFilesSuccessfullySelected,V=q.onFilesRejected,n=q.onClear,r=U.useCallback(function(){P([]),W([]),R([])},[]),a=U.useCallback(function(){r(),n==null||n()},[r,n]),d=function(v){return new Promise(function(){var F=me(H().mark(function j(k,L){var x,B,K;return H().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:x=new FileReader,B=x["readAs"+m],B.call(x,v),K=function(w){var A=ie({},(xt(w),w));L(ie({},A))},x.onload=me(H().mark(function fe(){return H().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",Promise.all(S.map(function(M){return M.validateAfterParsing(t,v,x).catch(function(Oe){return Promise.reject(K(Oe))})})).then(function(){return k(ie({},v,{content:x.result,name:v.name,lastModified:v.lastModified}))}).catch(function(){}));case 1:case"end":return A.stop()}},fe)})),x.onerror=function(){K({name:"FileReaderError",readerError:x.error,causedByFile:v})};case 6:case"end":return z.stop()}},j)}));return function(j,k){return F.apply(this,arguments)}}())},c=function(){var v=i instanceof Array?i.join(","):i;At(v,l,function(){var F=me(H().mark(function j(k){var L,x,B,K,G,z;return H().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r(),L=k.target,x=L.files?Array.from(L.files):[],X(!0),w.next=6,Promise.all(S.map(function(A){return A.validateBeforeParsing(t,x).catch(function(M){return Array.isArray(M)?M:[M]})}));case 6:if(B=w.sent.flat(1).filter(Boolean),P(x),R(B),!B.length){w.next=15;break}return X(!1),P([]),V==null||V({errors:B}),_==null||_({errors:B}),w.abrupt("return");case 15:if(h){w.next=19;break}return X(!1),_==null||_({plainFiles:x,filesContent:[]}),w.abrupt("return");case 19:return w.next=21,bt(k);case 21:return K=w.sent,G=[],w.next=25,Promise.all(K.map(function(A){return d(A).catch(function(M){G.push.apply(G,Array.isArray(M)?M:[M])})}));case 25:if(z=w.sent,X(!1),!G.length){w.next=34;break}return P([]),W([]),R(function(A){return[].concat(A,G)}),V==null||V({errors:G}),_==null||_({errors:B.concat(G)}),w.abrupt("return");case 34:W(z),P(x),R([]),J==null||J({filesContent:z,plainFiles:x}),_==null||_({plainFiles:x,filesContent:z});case 39:case"end":return w.stop()}},j)}));return function(j){return F.apply(this,arguments)}}(),y)};return{openFilePicker:c,filesContent:te,errors:se,loading:ce,plainFiles:E,clear:a}}var Ae=function(){function t(){this.invokerHookId=void 0}var o=t.prototype;return o.onFilesSelected=function(s){},o.onFilesSuccessfullySelected=function(s){},o.onFilesRejected=function(s){},o.onClear=function(){},o.onFileRemoved=function(s,l){},t}(),It=function(t){Ee(o,t);function o(s){var l;return l=t.call(this)||this,l.limitAmountOfFilesConfig=void 0,l.limitAmountOfFilesConfig=s,l}var i=o.prototype;return i.validateBeforeParsing=function(l,u){var m=this.limitAmountOfFilesConfig,g=m.min,h=m.max;return h&&u.length>h?Promise.reject({name:"FileAmountLimitError",reason:"MAX_AMOUNT_OF_FILES_EXCEEDED"}):g&&u.length<g?Promise.reject({name:"FileAmountLimitError",reason:"MIN_AMOUNT_OF_FILES_NOT_REACHED"}):Promise.resolve()},i.validateAfterParsing=function(){return Promise.resolve()},o}(Ae),Dt=function(t){Ee(o,t);function o(s){var l;return l=t.call(this)||this,l.acceptedFileExtensions=void 0,l.acceptedFileExtensions=s,l}var i=o.prototype;return i.validateBeforeParsing=function(l,u){var m=this,g=u.reduce(function(h,C){var S=C.name.split(".").pop();return S?m.acceptedFileExtensions.includes(S)?h:[].concat(h,[{name:"FileTypeError",reason:"FILE_TYPE_NOT_ACCEPTED",causedByFile:C}]):[].concat(h,[{name:"FileTypeError",reason:"FILE_EXTENSION_NOT_FOUND",causedByFile:C}])},[]);return g.length>0?Promise.reject(g):Promise.resolve()},i.validateAfterParsing=function(l,u,m){return Promise.resolve()},o}(Ae);const Tt=()=>{const t=Ie(De.getUserName),[o,i]=U.useState(null),s=Te(),{openFilePicker:l}=Lt({readAs:"DataURL",accept:"image/*",multiple:!0,validators:[new It({max:1}),new Dt(["jpg"])],onFilesSuccessfullySelected:({filesContent:m})=>{const g=m[0].content;i(g),new FormData().append("avatar",g)}}),u=()=>{s($e.logOut())};return e.jsxs(Ve,{children:[e.jsx(He,{children:e.jsxs(Ye,{children:[o?e.jsx(Xe,{src:o,alt:"Avatar"}):e.jsx(Q,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${Z}#icon-user`})}),e.jsx("div",{children:e.jsx(Je,{onClick:()=>l(),children:e.jsx(Q,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${Z}#icon-check_mark`})})})})]})}),e.jsxs(Ke,{children:[e.jsx(Qe,{children:t}),e.jsx(Ze,{children:"User"})]}),e.jsxs(et,{children:[e.jsxs(ye,{children:[e.jsxs(je,{children:[e.jsx(Q,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${Z}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(we,{children:"0"})]}),e.jsxs(ye,{children:[e.jsxs(je,{children:[" ",e.jsx(Q,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${Z}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(we,{children:"0 min"})]})]}),e.jsxs(tt,{children:[e.jsxs("div",{children:[" ",e.jsx(Q,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${Z}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(rt,{type:"button",onClick:u,children:["Logout"," ",e.jsx(Q,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${Z}#icon-logout`})})]})]})},Gt=()=>e.jsxs(gt,{children:[e.jsx(mt,{text:"Profile Settings"}),e.jsxs(vt,{children:[e.jsx(Tt,{}),e.jsx(pt,{})]})]});export{Gt as default};
