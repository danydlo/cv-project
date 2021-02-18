(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{141:function(e,t,n){},230:function(e,t,n){},235:function(e,t){},237:function(e,t){},279:function(e,t){},280:function(e,t){},411:function(e,t,n){},412:function(e,t,n){},413:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var c=n(26),a=n.n(c),s=n(213),i=n.n(s),o=(n(230),n(2));var l=function(){return Object(o.jsx)("nav",{className:"header",children:Object(o.jsx)("h1",{className:"title",children:"Make your Resume"})})},r=n(72),d=n(88),j=n(54),u=n(155),b=n(12);function h(e){return"email"===e?"email":"zip"===e?"number":"start"===e||"end"===e?"date":"text"}function x(e){switch(e){case"name":return"John Doe";case"address":return"123 Sesame Street";case"city":return"Brownsville";case"state":return"TX";case"zip":return"12345";case"email":return"johndoe@gmail.com";case"phone":return"123-456-7890";case"website":return"somesite.com";case"degree":return"Computer Engineering";case"program":return"Engineering";case"university":return"UTRGV";case"title":return"CEO";case"company":return"Google";case"bullets":return"Summarize your experience and responsabilities in bullets.";case"skill":return"Amazing skill";default:return null}}function f(e){return"university"===e||"name"===e||"address"===e||"bullets"===e?"input-container two-cols":"input-container"}n(411);var m=function(e){var t=e.value,n=e.name,c=e.section,a=e.handleChange,s=e.index,i="skill"===n?"":n[0].toUpperCase()+n.slice(1),l=function(e){var t=e.target,n=t.name,i=t.value,o=t.checked;a(c,n,"end"===n&&o?"present":i,s)};return"bullets"===n?Object(o.jsxs)("div",{className:f(n),children:[Object(o.jsx)("label",{className:"input-label",children:i}),Object(o.jsx)("textarea",{className:"input-textarea",value:t,name:n,onKeyPress:function(e){var t=e.target,n=t.name,i=t.value;"Enter"===e.key&&e.preventDefault(),a(c,n,i,s,e.key)},onChange:l,placeholder:x(n)})]}):"end"===n?Object(o.jsxs)("div",{className:f(n),children:[Object(o.jsxs)("div",{className:"end-div",children:[Object(o.jsx)("label",{className:"input-label",children:i}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",name:"end",onChange:l}),Object(o.jsx)("label",{className:"input-label",children:"Present"})]})]}),Object(o.jsx)("input",{className:"input-box",type:"present"===t?"text":h(n),readOnly:"present"===t,value:"on"===t?"":t,name:n,onChange:l,placeholder:x(n)})]}):Object(o.jsxs)("div",{className:f(n),children:[Object(o.jsx)("label",{className:"input-label",children:i}),Object(o.jsx)("input",{className:"input-box",type:h(n),value:t,name:n,onChange:l,placeholder:x(n)})]})};var O=function(e){var t=e.back,n=e.next,c=e.changeMode;return Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{className:"button",onClick:function(){return c(t)},children:t}),Object(o.jsx)("button",{className:"button",onClick:function(){return c(n)},children:n})]})};var p=function(e){var t=e.changeMode,n=e.handleChange,c=e.contact,a=Object.entries(c).map((function(e){return Object(o.jsx)(m,{section:"contact",value:e[1],name:e[0],handleChange:n},e[0])}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"section-container",children:a}),Object(o.jsx)(O,{back:"Start",next:"Education",changeMode:t})]})};n(141);var v=function(e){var t=e.addEducation,n=e.deleteEducation,c=e.handleChange,a=e.education,s=e.changeMode,i=a.map((function(e,t){return Object.entries(e).map((function(e){return Object(o.jsx)(m,{section:"education",index:t,value:e[1],name:e[0],handleChange:c},t+e[0])}))})).map((function(e,t){return 0===t?Object(o.jsx)("div",{className:"extradiv two-cols",children:e},"education"+t):Object(o.jsxs)("div",{className:"extradiv two-cols",children:[Object(o.jsx)("button",{className:"btn delete-btn two-cols",onClick:function(){return n("education",t)},children:Object(o.jsx)("span",{className:"material-icons",children:"clear"})}),e]},"education"+t)}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"section-container",children:[i,Object(o.jsx)("button",{className:"btn add-btn two-cols",onClick:function(){return t("education")},children:Object(o.jsx)("span",{className:"material-icons",children:"add"})})]}),Object(o.jsx)(O,{back:"Contact",next:"Work",changeMode:s})]})};var k=function(e){var t=e.addWork,n=e.deleteWork,c=e.handleChange,a=e.work,s=e.changeMode,i=a.map((function(e,t){return Object.entries(e).map((function(e){return Object(o.jsx)(m,{section:"work",index:t,value:e[1],name:e[0],handleChange:c},t+e[0])}))})).map((function(e,t){return 0===t?Object(o.jsx)("div",{className:"extradiv two-cols",children:e},"work"+t):Object(o.jsxs)("div",{className:"extradiv two-cols",children:[Object(o.jsx)("button",{className:"btn delete-btn two-cols",onClick:function(){return n("work",t)},children:Object(o.jsx)("span",{className:"material-icons",children:"clear"})}),e]},"work"+t)}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"section-container",children:[i,Object(o.jsx)("button",{className:"btn add-btn two-cols",onClick:function(){return t("work")},children:Object(o.jsx)("span",{className:"material-icons",children:"add"})})]}),Object(o.jsx)(O,{back:"Education",next:"Skills",changeMode:s})]})};var g=function(e){var t=e.addSkill,n=e.deleteSkill,c=e.handleChange,a=e.skills,s=e.changeMode,i=a.map((function(e,t){return Object(o.jsxs)("div",{className:"skills-div",children:[Object(o.jsx)(m,{section:"skills",index:t,value:e,name:"skill",handleChange:c}),Object(o.jsx)("button",{className:"btn delete-btn",onClick:function(){return n("skills",t)},children:Object(o.jsx)("span",{className:"material-icons",children:"clear"})})]},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"section-container",children:[i,Object(o.jsx)("button",{className:"btn add-btn skills-btn two-cols",onClick:function(){return t("skills")},children:"Add Skill"})]}),Object(o.jsx)(O,{back:"Work",next:"Preview",changeMode:s})]})},y=n.p+"static/media/Roboto-Regular.03523cf5.ttf",N=n.p+"static/media/Roboto-Bold.4f39c579.ttf";b.b.register({family:"Roboto",fonts:[{src:y},{src:N,fontStyle:"bold"}]});var C="3d3d3d",w=b.e.create({body:{paddingTop:35,paddingBottom:35,paddingHorizontal:35},name:{fontSize:25,fontFamily:"Roboto",color:"darkblue"},contact:{position:"absolute",top:35,right:35},contactText:{fontFamily:"Roboto",alignSelf:"flex-end",fontSize:12,color:C,paddingBottom:1},education:{fontFamily:"Roboto",paddingTop:60,fontSize:16,color:"darkblue"},work:{fontFamily:"Roboto",paddingTop:15,fontSize:16,color:"darkblue"},skills:{fontFamily:"Roboto",paddingTop:15,fontSize:16,color:"darkblue",width:"100%"},sectionContainer:{paddingTop:5,color:C},sectionText:{color:C,fontFamily:"Roboto",fontSize:12,paddingBottom:1},sectionTextBullets:{paddingTop:5,fontSize:12,fontFamily:"Roboto"},sectionTextBold:{fontFamily:"Roboto",fontSize:12,fontStyle:"bold",paddingBottom:1},skillsText:{fontFamily:"Roboto",fontSize:12,color:C,paddingTop:5},sectionTextBoldBig:{fontFamily:"Roboto",fontSize:14,fontStyle:"bold",paddingBottom:1},flexContainer:{display:"flex",flexDirection:"row",alignItems:"center"},flexContainerWrap:{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}});function S(e,t){var n=e.split("-");if("present"!==t){var c=t.split("-");return"".concat(n[1],"/").concat(n[0]," - ").concat(c[1],"/ ").concat(c[0])}return"".concat(n[1],"/").concat(n[0]," - Present")}function T(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!0;if(t)e.forEach((function(e){""!==e&&(n=!1)}));else{var c=Object.values(e);c.forEach((function(e){""!==e&&"\u2022 "!==e&&(n=!1)}))}return n}function E(e){var t=[];return t.push([]),t.push([]),t.push([]),e.forEach((function(e,n){(n+3)%3===0?t[0].push(e):(n+3)%3===1?t[1].push(e):t[2].push(e)})),Object(o.jsx)(b.g,{style:w.flexContainerWrap,children:t.map((function(e,t){return Object(o.jsx)(b.g,{style:{display:"table-column"},children:e.map((function(e,t){return Object(o.jsx)(b.f,{style:w.skillsText,children:e},"text"+t)}))},"col"+t)}))})}var z=function(e){var t=e.contact,n=e.education,c=e.work,a=e.skills;return Object(o.jsx)(b.a,{children:Object(o.jsxs)(b.d,{style:w.body,children:[Object(o.jsx)(b.f,{style:w.name,children:t.name}),Object(o.jsxs)(b.g,{style:w.contact,children:[Object(o.jsx)(b.f,{style:w.contactText,children:t.address}),Object(o.jsx)(b.f,{style:w.contactText,children:"".concat(t.city,", ").concat(t.state," ").concat(t.zip)}),Object(o.jsx)(b.f,{style:w.contactText,children:t.phone}),Object(o.jsx)(b.f,{style:w.contactText,children:t.email}),Object(o.jsx)(b.f,{style:w.contactText,children:t.website})]}),T(n[0])?Object(o.jsx)(b.f,{}):Object(o.jsxs)(b.g,{style:w.education,children:[Object(o.jsx)(b.f,{children:"Education"}),Object(o.jsx)(b.g,{style:w.flexContainerWrap,children:n.map((function(e,t){return Object(o.jsxs)(b.g,{style:w.sectionContainer,children:[Object(o.jsx)(b.f,{style:w.sectionText,children:e.degree}),Object(o.jsx)(b.f,{style:w.sectionTextBold,children:e.program}),Object(o.jsx)(b.f,{style:w.sectionText,children:e.university}),Object(o.jsx)(b.f,{style:w.sectionText,children:S(e.start,e.end)})]},"education"+t)}))})]}),T(c[0])?Object(o.jsx)(b.f,{}):Object(o.jsxs)(b.g,{style:w.work,children:[Object(o.jsx)(b.f,{children:"Work"}),c.map((function(e,t){return Object(o.jsxs)(b.g,{style:w.sectionContainer,children:[Object(o.jsxs)(b.g,{style:w.flexContainer,children:[Object(o.jsx)(b.f,{style:w.sectionTextBoldBig,children:(n=e.title,c=e.company,"".concat(n," - ").concat(c,"  "))}),Object(o.jsx)(b.f,{style:w.sectionText,children:S(e.start,e.end)})]}),Object(o.jsx)(b.f,{style:w.sectionTextBullets,children:e.bullets})]},"work"+t);var n,c}))]}),T(a,!0)?Object(o.jsx)(b.f,{}):Object(o.jsxs)(b.g,{style:w.skills,children:[Object(o.jsx)(b.f,{children:"Skills"}),E(a)]})]})})},R={name:"",address:"",city:"",state:"",zip:"",email:"",phone:"",website:""},B=[{degree:"",program:"",university:"",start:"",end:""}],M=[{title:"",company:"",start:"",end:"",bullets:"\u2022 "}],W=["","","",""];function F(e){return e.split("\n").concat("").map((function(e){return"\u2022"!==e[0]?"".concat("\u2022"," ").concat(e):e})).join("\n")}n(412);var A=function(){var e=Object(c.useState)("Start"),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({contact:R,education:B,work:M,skills:W}),i=Object(u.a)(s,2),l=i[0],h=i[1],x=null,f=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=null;"contact"===e?(s=Object(j.a)({},l[e]))[t]=n:"skills"===e?(s=Object(d.a)(l[e]))[c]=n:(s=Object(d.a)(l[e]))[c][t]="Enter"===a?F(n):n,h((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(r.a)({},e,s))}))},m=function(e){var t=null;t="education"===e?l[e].concat({degree:"",program:"",university:"",start:"",end:""}):"work"===e?l[e].concat({title:"",company:"",start:"",end:"",bullets:"\u2022 "}):l[e].concat(""),h((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(r.a)({},e,t))}))},O=function(e,t){var n=l[e],c=[].concat(Object(d.a)(n.slice(0,t)),Object(d.a)(n.slice(t+1)));h((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(r.a)({},e,c))}))},y=function(e){return a(e)};return"Start"===n?x=Object(o.jsx)("div",{className:"body-info",children:Object(o.jsx)("button",{className:"start-btn",onClick:function(){return y("Contact")},children:"START"})}):"Contact"===n?x=Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Contact Information"}),Object(o.jsx)(p,{contact:l.contact,handleChange:f,changeMode:y})]}):"Education"===n?x=Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Education"}),Object(o.jsx)(v,{education:l.education,handleChange:f,addEducation:m,deleteEducation:O,changeMode:y})]}):"Work"===n?x=Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Work Experience"}),Object(o.jsx)(k,{work:l.work,handleChange:f,addWork:m,deleteWork:O,changeMode:y})]}):"Skills"===n?x=Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Add Skills"}),Object(o.jsx)(g,{skills:l.skills,handleChange:f,addSkill:m,deleteSkill:O,changeMode:y})]}):"Preview"===n&&(x=Object(o.jsxs)("div",{className:"preview",children:[Object(o.jsx)(b.c,{width:"900px",height:"750px",children:Object(o.jsx)(z,{contact:l.contact,education:l.education,work:l.work,skills:l.skills})}),Object(o.jsx)("div",{className:"buttons",children:Object(o.jsx)("button",{className:"button",onClick:function(){return y("Skills")},children:"Skills"})})]})),x};n(413);var P=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(A,{})]})};n(414);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root"))}},[[415,1,2]]]);
//# sourceMappingURL=main.e4f283cf.chunk.js.map