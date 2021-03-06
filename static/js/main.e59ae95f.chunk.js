(this["webpackJsonpjob-board"]=this["webpackJsonpjob-board"]||[]).push([[0],{13:function(e,o,t){},15:function(e,o,t){"use strict";t.r(o);var a=t(1),l=t.n(a),n=t(7),s=t.n(n),r=(t(13),t(2)),i=t(6),c=t(0),d=function(e){var o=e.job,t=o.logo,a=o.company,l=o.isNew,n=o.featured,s=o.position,i=o.role,d=o.level,g=o.postedAt,u=o.contract,p=o.location,m=o.languages,b=o.tools,f=e.handleTagClick,j=[i,d];return m&&j.push.apply(j,Object(r.a)(m)),b&&j.push.apply(j,Object(r.a)(b)),Object(c.jsxs)("div",{className:"flex flex-col bg-white shadow-md my-16 mx-8 p-5 rounded ".concat(n&&"border-l-4 border-indigo-300 border-solid"," lg:flex-row lg:my-4"),children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:"-mt-12 mb-4 w-20 h-20 lg:mt-0 lg:h-24 lg:w-24 lg:my-0",src:t,alt:a})}),Object(c.jsxs)("div",{className:"flex flex-col justify-between ml-3",children:[Object(c.jsxs)("h3",{className:"font-bold text-md text-indigo-400",children:["  ",a,l&&Object(c.jsx)("span",{className:"bg-indigo-400 text-indigo-100 font-bold p-2 rounded-full m-1 uppercase text-xs",children:"NEW"}),n&&Object(c.jsx)("span",{className:"bg-yellow-400 text-indigo-100 font-bold p-2 rounded-full m-1 uppercase text-xs",children:"FEATURED"})]}),Object(c.jsx)("h2",{className:"font-bold text-lg my-3",children:s}),Object(c.jsxs)("p",{className:"text-sm text-gray-700",children:[g," \xb7 ",u," \xb7 ",p]})]}),Object(c.jsx)("div",{className:"flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0",children:j?j.map((function(e){return Object(c.jsx)("span",{onClick:function(){return f(e)},className:"cursor-pointer text-indigo-400 bg-indigo-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0",children:e})})):""})]})},g=t(8);var u=function(){var e=Object(a.useState)([]),o=Object(i.a)(e,2),t=o[0],l=o[1],n=Object(a.useState)([]),s=Object(i.a)(n,2),u=s[0],p=s[1];Object(a.useEffect)((function(){return l(g)}),[]);var m=function(e){u.includes(e)||p([].concat(Object(r.a)(u),[e]))},b=t.filter((function(e){var o=e.role,t=e.level,a=e.tools,l=e.languages;if(0===u.length)return!0;var n=[o,t];return l&&n.push.apply(n,Object(r.a)(l)),a&&n.push.apply(n,Object(r.a)(a)),u.every((function(e){return n.includes(e)}))}));return console.log(t),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{className:"bg-indigo-100 mb-12",children:Object(c.jsx)("img",{className:"w-full",src:"https://mitchellzilberg.github.io/job-board-app/images/bg-header-desktop.svg",alt:"bg-img"})}),Object(c.jsxs)("div",{className:"container m-auto",children:[u.length>0&&Object(c.jsxs)("div",{className:"flex bg-white shadow-md -my-20 mb-16 mx-8 p-5 rounded z-10 relative",children:[u.map((function(e){return Object(c.jsx)("span",{className:"cursor-pointer mr-4 mb-4 p-2 font-bold roundedlgm:mb-0",onClick:function(){return o=e,void p(u.filter((function(e){return e!==o})));var o},children:Object(c.jsxs)("span",{className:"cursor-pointer text-indigo-400 bg-indigo-100 font-bold",children:["x ",e]})})})),Object(c.jsx)("button",{onClick:function(){p([])},className:"font-bold text-gray-700 ml-auto",children:"Clear"})]}),0===t.length?Object(c.jsx)("p",{children:"Fetching jobs..."}):b.map((function(e){return Object(c.jsx)(d,{job:e,handleTagClick:m},e.id)}))]})]})};s.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"/images/photosnap.svg","isNew":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"/images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"/images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"/images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"/images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"/images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"/images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"/images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"/images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"/images/the-air-filter-company.svg","isNew":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.e59ae95f.chunk.js.map