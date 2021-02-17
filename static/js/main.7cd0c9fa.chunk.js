(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{114:function(e,t,n){},232:function(e,t,n){},234:function(e,t,n){},238:function(e,t){},240:function(e,t){},282:function(e,t){},283:function(e,t){},414:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){"use strict";n.r(t);var c=n(26),a=n.n(c),s=n(214),i=n.n(s),o=(n(232),n(2));var l=function(){return Object(o.jsx)("nav",{className:"header",children:Object(o.jsx)("h1",{className:"title",children:"Make your Resume"})})},r=n(84),d=n(87),u=n(215),j=n(106),h=n(107),b=n(42),x=n(111),m=n(110),f={contact:{name:"",address:"",city:"",state:"",zip:"",email:"",phone:"",website:""},education:[{degree:"",program:"",university:"",start:"",end:""}],work:[{title:"",company:"",start:"",end:"",bullets:"\u2022 "}],skills:["","","",""]};function O(e){return"email"===e?"email":"zip"===e?"number":"start"===e||"end"===e?"date":"text"}function p(e){switch(e){case"name":return"John Doe";case"address":return"123 Sesame Street";case"city":return"Brownsville";case"state":return"TX";case"zip":return"12345";case"email":return"johndoe@gmail.com";case"phone":return"123-456-7890";case"website":return"somesite.com";case"degree":return"Computer Engineering";case"program":return"Engineering";case"university":return"UTRGV";case"title":return"CEO";case"company":return"Google";case"bullets":return"Summarize your experience and responsabilities in bullets.";case"skill":return"Amazing skill";default:return null}}function g(e){return"university"===e||"name"===e||"address"===e||"bullets"===e?"input-container two-cols":"input-container"}n(234);var v=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).handleChange=c.handleChange.bind(Object(b.a)(c)),c.handleKeyPress=c.handleKeyPress.bind(Object(b.a)(c)),c}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=this.props,n=t.section,c=t.handleChange,a=t.index,s=e.target,i=s.name,o=s.value,l=s.checked;c(n,i,"end"===i&&l?"present":o,a)}},{key:"handleKeyPress",value:function(e){var t=this.props,n=t.section,c=t.handleChange,a=t.index,s=e.target,i=s.name,o=s.value;"Enter"===e.key&&e.preventDefault(),c(n,i,o,a,e.key)}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.name,c="skill"===n?"":n[0].toUpperCase()+n.slice(1);return"bullets"===n?Object(o.jsxs)("div",{className:g(n),children:[Object(o.jsx)("label",{className:"input-label",children:c}),Object(o.jsx)("textarea",{className:"input-textarea",value:t,name:n,onKeyPress:this.handleKeyPress,onChange:this.handleChange,placeholder:p(n)})]}):"end"===n?Object(o.jsxs)("div",{className:g(n),children:[Object(o.jsxs)("div",{className:"end-div",children:[Object(o.jsx)("label",{className:"input-label",children:c}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",name:"end",onChange:this.handleChange}),Object(o.jsx)("label",{className:"input-label",children:"Present"})]})]}),Object(o.jsx)("input",{className:"input-box",type:"present"===t?"text":O(n),readOnly:"present"===t,value:"on"===t?"":t,name:n,onChange:this.handleChange,placeholder:p(n)})]}):Object(o.jsxs)("div",{className:g(n),children:[Object(o.jsx)("label",{className:"input-label",children:c}),Object(o.jsx)("input",{className:"input-box",type:O(n),value:t,name:n,onChange:this.handleChange,placeholder:p(n)})]})}}]),n}(c.Component);var k=function(e){var t=e.back,n=e.next,c=e.changeMode;return Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{className:"button",onClick:function(){return c(t)},children:t}),Object(o.jsx)("button",{className:"button",onClick:function(){return c(n)},children:n})]})};var y=function(e){var t=e.changeMode,n=e.handleChange,c=e.contact,a=Object.entries(c).map((function(e){return Object(o.jsx)(v,{section:"contact",value:e[1],name:e[0],handleChange:n},e[0])}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"section-container",children:a}),Object(o.jsx)(k,{back:"Start",next:"Education",changeMode:t})]})};n(114);var C=function(e){var t=e.addEducation,n=e.deleteEducation,c=e.handleChange,a=e.education,s=e.changeMode,i=a.map((function(e,t){return Object.entries(e).map((function(e){return Object(o.jsx)(v,{section:"education",index:t,value:e[1],name:e[0],handleChange:c},t+e[0])}))})).map((function(e,t){return 0===t?Object(o.jsx)("div",{className:"extradiv two-cols",children:e},"education"+t):Object(o.jsxs)("div",{className:"extradiv two-cols",children:[Object(o.jsx)("button",{className:"btn delete-btn two-cols",onClick:function(){return n("education",t)},children:Object(o.jsx)("span",{className:"material-icons",children:"clear"})}),e]},"education"+t)}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"section-container",children:[i,Object(o.jsx)("button",{className:"btn add-btn two-cols",onClick:function(){return t("education")},children:Object(o.jsx)("span",{className:"material-icons",children:"add"})})]}),Object(o.jsx)(k,{back:"Contact",next:"Work",changeMode:s})]})};var N=function(e){var t=e.addWork,n=e.deleteWork,c=e.handleChange,a=e.work,s=e.changeMode,i=a.map((function(e,t){return Object.entries(e).map((function(e){return Object(o.jsx)(v,{section:"work",index:t,value:e[1],name:e[0],handleChange:c},t+e[0])}))})).map((function(e,t){return 0===t?Object(o.jsx)("div",{className:"extradiv two-cols",children:e},"work"+t):Object(o.jsxs)("div",{className:"extradiv two-cols",children:[Object(o.jsx)("button",{className:"btn delete-btn two-cols",onClick:function(){return n("work",t)},children:Object(o.jsx)("span",{className:"material-icons",children:"clear"})}),e]},"work"+t)}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"section-container",children:[i,Object(o.jsx)("button",{className:"btn add-btn two-cols",onClick:function(){return t("work")},children:Object(o.jsx)("span",{className:"material-icons",children:"add"})})]}),Object(o.jsx)(k,{back:"Education",next:"Skills",changeMode:s})]})};var w=function(e){var t=e.addSkill,n=e.deleteSkill,c=e.handleChange,a=e.skills,s=e.changeMode,i=a.map((function(e,t){return Object(o.jsxs)("div",{className:"skills-div",children:[Object(o.jsx)(v,{section:"skills",index:t,value:e,name:"skill",handleChange:c}),Object(o.jsx)("button",{className:"btn delete-btn",onClick:function(){return n("skills",t)},children:Object(o.jsx)("span",{className:"material-icons",children:"clear"})})]},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"section-container",children:[i,Object(o.jsx)("button",{className:"btn add-btn skills-btn two-cols",onClick:function(){return t("skills")},children:"Add Skill"})]}),Object(o.jsx)(k,{back:"Work",next:"Preview",changeMode:s})]})},S=n(12),T=n.p+"static/media/Roboto-Regular.03523cf5.ttf",M=n.p+"static/media/Roboto-Bold.4f39c579.ttf";S.b.register({family:"Roboto",fonts:[{src:T},{src:M,fontStyle:"bold"}]});var E="3d3d3d",z=S.e.create({body:{paddingTop:35,paddingBottom:35,paddingHorizontal:35},name:{fontSize:25,fontFamily:"Roboto",color:"darkblue"},contact:{position:"absolute",top:35,right:35},contactText:{fontFamily:"Roboto",alignSelf:"flex-end",fontSize:12,color:E,paddingBottom:1},education:{fontFamily:"Roboto",paddingTop:60,fontSize:16,color:"darkblue"},work:{fontFamily:"Roboto",paddingTop:15,fontSize:16,color:"darkblue"},skills:{fontFamily:"Roboto",paddingTop:15,fontSize:16,color:"darkblue",width:"100%"},sectionContainer:{paddingTop:5,color:E},sectionText:{color:E,fontFamily:"Roboto",fontSize:12,paddingBottom:1},sectionTextBullets:{paddingTop:5,fontSize:12,fontFamily:"Roboto"},sectionTextBold:{fontFamily:"Roboto",fontSize:12,fontStyle:"bold",paddingBottom:1},skillsText:{fontFamily:"Roboto",fontSize:12,color:E,paddingTop:5},sectionTextBoldBig:{fontFamily:"Roboto",fontSize:14,fontStyle:"bold",paddingBottom:1},flexContainer:{display:"flex",flexDirection:"row",alignItems:"center"},flexContainerWrap:{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}});function R(e,t){var n=e.split("-");if("present"!==t){var c=t.split("-");return"".concat(n[1],"/").concat(n[0]," - ").concat(c[1],"/ ").concat(c[0])}return"".concat(n[1],"/").concat(n[0]," - Present")}function B(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!0;if(t)e.forEach((function(e){""!==e&&(n=!1)}));else{var c=Object.values(e);c.forEach((function(e){""!==e&&"\u2022 "!==e&&(n=!1)}))}return n}function I(e){var t=[];return t.push([]),t.push([]),t.push([]),e.forEach((function(e,n){(n+3)%3===0?t[0].push(e):(n+3)%3===1?t[1].push(e):t[2].push(e)})),Object(o.jsx)(S.g,{style:z.flexContainerWrap,children:t.map((function(e,t){return Object(o.jsx)(S.g,{style:{display:"table-column"},children:e.map((function(e,t){return Object(o.jsx)(S.f,{style:z.skillsText,children:e},"text"+t)}))},"col"+t)}))})}var W=function(e){var t=e.contact,n=e.education,c=e.work,a=e.skills;return Object(o.jsx)(S.a,{children:Object(o.jsxs)(S.d,{style:z.body,children:[Object(o.jsx)(S.f,{style:z.name,children:t.name}),Object(o.jsxs)(S.g,{style:z.contact,children:[Object(o.jsx)(S.f,{style:z.contactText,children:t.address}),Object(o.jsx)(S.f,{style:z.contactText,children:"".concat(t.city,", ").concat(t.state," ").concat(t.zip)}),Object(o.jsx)(S.f,{style:z.contactText,children:t.phone}),Object(o.jsx)(S.f,{style:z.contactText,children:t.email}),Object(o.jsx)(S.f,{style:z.contactText,children:t.website})]}),B(n[0])?Object(o.jsx)(S.f,{}):Object(o.jsxs)(S.g,{style:z.education,children:[Object(o.jsx)(S.f,{children:"Education"}),Object(o.jsx)(S.g,{style:z.flexContainerWrap,children:n.map((function(e,t){return Object(o.jsxs)(S.g,{style:z.sectionContainer,children:[Object(o.jsx)(S.f,{style:z.sectionText,children:e.degree}),Object(o.jsx)(S.f,{style:z.sectionTextBold,children:e.program}),Object(o.jsx)(S.f,{style:z.sectionText,children:e.university}),Object(o.jsx)(S.f,{style:z.sectionText,children:R(e.start,e.end)})]},"education"+t)}))})]}),B(c[0])?Object(o.jsx)(S.f,{}):Object(o.jsxs)(S.g,{style:z.work,children:[Object(o.jsx)(S.f,{children:"Work"}),c.map((function(e,t){return Object(o.jsxs)(S.g,{style:z.sectionContainer,children:[Object(o.jsxs)(S.g,{style:z.flexContainer,children:[Object(o.jsx)(S.f,{style:z.sectionTextBoldBig,children:(n=e.title,c=e.company,"".concat(n," - ").concat(c,"  "))}),Object(o.jsx)(S.f,{style:z.sectionText,children:R(e.start,e.end)})]}),Object(o.jsx)(S.f,{style:z.sectionTextBullets,children:e.bullets})]},"work"+t);var n,c}))]}),B(a,!0)?Object(o.jsx)(S.f,{}):Object(o.jsxs)(S.g,{style:z.skills,children:[Object(o.jsx)(S.f,{children:"Skills"}),I(a)]})]})})};function F(e){return e.split("\n").concat("").map((function(e){return"\u2022"!==e[0]?"".concat("\u2022"," ").concat(e):e})).join("\n")}n(414);var P=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={mode:"Start",contact:f.contact,education:f.education,work:f.work,skills:f.skills},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.addItem=e.addItem.bind(Object(b.a)(e)),e.deleteItem=e.deleteItem.bind(Object(b.a)(e)),e.changeMode=e.changeMode.bind(Object(b.a)(e)),e}return Object(h.a)(n,[{key:"handleChange",value:function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";this.setState((function(s){if("contact"===e){var i=Object(u.a)({},s[e]);return i[t]=n,{contact:i}}if("skills"===e){var o=Object(d.a)(s.skills);return o[c]=n,{skills:o}}var l=Object(d.a)(s[e]);return l[c][t]="Enter"===a?F(n):n,Object(r.a)({},e,l)}))}},{key:"addItem",value:function(e){this.setState((function(t){return"education"===e?{education:t.education.concat({degree:"",program:"",university:"",start:"",end:""})}:"work"===e?{work:t.work.concat({title:"",company:"",start:"",end:"",bullets:"\u2022 "})}:{skills:t.skills.concat("")}}))}},{key:"deleteItem",value:function(e,t){this.setState((function(n){var c=n[e],a=[].concat(Object(d.a)(c.slice(0,t)),Object(d.a)(c.slice(t+1)));return Object(r.a)({},e,a)}))}},{key:"changeMode",value:function(e){this.setState({mode:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.mode,c=t.contact,a=t.education,s=t.work,i=t.skills;return"Start"===n?Object(o.jsx)("div",{className:"body-info",children:Object(o.jsx)("button",{className:"start-btn",onClick:function(){return e.changeMode("Contact")},children:"START"})}):"Contact"===n?Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Contact Information"}),Object(o.jsx)(y,{contact:c,handleChange:this.handleChange,changeMode:this.changeMode})]}):"Education"===n?Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Education"}),Object(o.jsx)(C,{education:a,handleChange:this.handleChange,addEducation:this.addItem,deleteEducation:this.deleteItem,changeMode:this.changeMode})]}):"Work"===n?Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Work Experience"}),Object(o.jsx)(N,{work:s,handleChange:this.handleChange,addWork:this.addItem,deleteWork:this.deleteItem,changeMode:this.changeMode})]}):"Skills"===n?Object(o.jsxs)("div",{className:"body-info",children:[Object(o.jsx)("h1",{className:"section-title",children:"Add Skills"}),Object(o.jsx)(w,{skills:i,handleChange:this.handleChange,addSkill:this.addItem,deleteSkill:this.deleteItem,changeMode:this.changeMode})]}):"Preview"===n?Object(o.jsxs)("div",{className:"preview",children:[Object(o.jsx)(S.c,{width:"900px",height:"750px",children:Object(o.jsx)(W,{contact:c,education:a,work:s,skills:i})}),Object(o.jsx)("div",{className:"buttons",children:Object(o.jsx)("button",{className:"button",onClick:function(){return e.changeMode("Skills")},children:"Skills"})})]}):void 0}}]),n}(c.Component);n(415);var A=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(P,{})]})};n(416);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root"))}},[[417,1,2]]]);
//# sourceMappingURL=main.7cd0c9fa.chunk.js.map