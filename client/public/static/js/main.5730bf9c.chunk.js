(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(72)},43:function(e,t,n){},44:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),s=n.n(o),l=(n(43),n(17)),i=n(3),c=n(4),u=n(6),m=n(5),g=n(7),h=(n(44),n(45),n(13)),p=n(19),d=n.n(p),f=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,n){return t.service.post("/auth/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/auth/login",{username:e,password:n}).then(function(e){return e.data})},this.currentUser=function(){return t.service.get("/auth/getcurrentuser").then(function(e){return e.data})},this.logout=function(){return t.service.post("/auth/logout",{}).then(function(e){return e.data})};var n=d.a.create({baseURL:"/api",withCredentials:!0});this.service=n},v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.tryToSignUp=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.signup(t,a).then(function(){n.props.toggleForm("signup"),n.props.getUser()})},n.state={usernameInput:"",passwordInput:""},n.service=new f,n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.tryToSignUp},r.a.createElement("h3",null,"Signup For An Account"),r.a.createElement("legend",null,"Username"),r.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("legend",null,"Password"),r.a.createElement("input",{value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("button",null,"Submit"))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.tryToLogin=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.login(t,a).then(function(){n.props.toggleForm("login"),n.props.getUser()})},n.state={usernameInput:"",passwordInput:""},n.service=new f,n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.tryToLogin},r.a.createElement("h3",null,"Login"),r.a.createElement("legend",null,"Username"),r.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("legend",null,"Password"),r.a.createElement("input",{value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("button",null,"Submit"))}}]),t}(a.Component),E=n(11),y=(n(62),n(14)),C=n(15);var S=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-custom bg-custom py-0"},r.a.createElement(E.c,{to:"/",className:"navbar-brand",href:"#"},r.a.createElement("img",{src:"/images/sarfcastlogo.png",alt:"sarfcast brand logo",height:"42",width:"42"}),"SarfCast"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.c,{to:"/",className:"nav-link",href:"#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.c,{to:"/",className:"nav-link",href:"#"},"Profile")))),r.a.createElement("div",{className:"right-nav-links"},r.a.createElement("ul",{className:"navbar-nav"},!e.theUser&&r.a.createElement("span",null,r.a.createElement("button",{className:"btn btn-custom ml-3 my-2",onClick:function(){return e.toggleForm("login")}}," Login ",r.a.createElement(y.a,{icon:C.d})),r.a.createElement("button",{className:"btn btn-custom ml-3 my-2",onClick:function(){return e.toggleForm("signup")}},"Sign Up ",r.a.createElement(y.a,{icon:C.e}))),e.theUser&&r.a.createElement("span",null,r.a.createElement("button",{className:"btn btn-custom",onClick:function(){e.userLogOut().then(function(){e.getUser()})}},"Log Out ",r.a.createElement(y.a,{icon:C.c})),r.a.createElement("span",null,"Hello, ",e.theUser.username)))))},O=(n(69),n(70),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={listOpen:!1,headerTitle:n.props.title},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleClickOutside",value:function(){this.setState({listOpen:!1})}},{key:"toggleList",value:function(){this.setState(function(e){return{listOpen:!e.listOpen}})}},{key:"handleCountyNameClick",value:function(e){console.log(e.target.value),console.log(this.props)}},{key:"render",value:function(){var e=this,t=this.props.dropDownCounties,n=this.state,a=n.listOpen,o=n.headerTitle;return r.a.createElement("div",{className:"dd-wrapper"},r.a.createElement("div",{className:"dd-header",onClick:function(){return e.toggleList()}},r.a.createElement("div",{className:"dd-header-title"},o,a?r.a.createElement(y.a,{icon:C.b,size:"2x"}):r.a.createElement(y.a,{icon:C.a,size:"2x"}))),a&&r.a.createElement("ul",{className:"dd-list"},t.map(function(t,n){return r.a.createElement(E.b,{to:"/region/".concat(t),onClick:e.handleCountyNameClick,key:n,className:"dropdown-link"},r.a.createElement("li",{className:"dd-list-item"},t))})))}}]),t}(r.a.Component)),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-component"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,{title:"Select County",dropDownCounties:this.props.dropDownCounties,dataFromChild:this.props.dataFromChild})),r.a.createElement("div",{className:"ocean"},r.a.createElement("div",{className:"wave"}),r.a.createElement("div",{className:"wave"}))))}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"displayAllRegionalSurfBreaks",value:function(){var e=this;return this.props.allRegionalSurfBreaks.map(function(t){return r.a.createElement("div",{key:t._id},r.a.createElement(E.b,{to:"/region/".concat(e.props.theCounty,"/").concat(t.spot_id)},t.spot_name))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"All The SurfBreaks for ",this.props.theCounty,":"),this.displayAllRegionalSurfBreaks())}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).displayASingleSurfBreak=function(){console.table(n.props.allRegionalSurfBreaks),console.log(n.props.allRegionalSurfBreaks)},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to the Detailed surf break page"),this.displayASingleSurfBreak())}}]),t}(a.Component),N=(n(71),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getCurrentlyLoggedInUser=function(){n.service.currentUser().then(function(e){n.setState({currentlyLoggedIn:e})}).catch(function(){n.setState({currentlyLoggedIn:null})})},n.toggleForm=function(e){var t;t="signup"===e?"signupShowing":"loginShowing",n.setState(Object(l.a)({},t,!n.state[t]))},n.getAllRegionalSurfBreaks=function(){d.a.get("".concat("/api'","/region/").concat(n.state.theCounty)).then(function(e){n.setState({validSurfBreaks:e.data,ready:!0}),console.log(n.state.validSurfBreaks)})},n.dataFromChild=function(e){var t=e;n.setState({theCounty:t})},n.state={currentlyLoggedIn:null,signupShowing:!1,loginShowing:!1,allTheCounties:["Marin","San Francisco","Monterey","Santa Cruz","San Mateo","Los Angeles","San Luis Obispo","Santa Barbara","San Diego","Orange County","Ventura"],dropDownCounties:["Marin","San Francisco","Monterey","Santa Cruz","San Mateo","Los Angeles","San Luis Obispo","Santa Barbara","San Diego","Orange County","Ventura"],theCounty:"",validSurfBreaks:[],theSurfBreak:"Carmel Beach",ready:!1},n.service=new f,n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getCurrentlyLoggedInUser(),this.getAllRegionalSurfBreaks()}},{key:"render",value:function(){var e=this;return console.log("This is my state",this.state),r.a.createElement("div",null,r.a.createElement(S,{theUser:this.state.currentlyLoggedIn,userLogOut:function(){return e.service.logout()},toggleForm:this.toggleForm,getUser:this.getCurrentlyLoggedInUser}),this.state.signupShowing&&r.a.createElement(v,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),this.state.loginShowing&&r.a.createElement(b,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(k,Object.assign({},t,{theCounty:e.state.theCounty,allTheCounties:e.state.allTheCounties,dropDownCounties:e.state.dropDownCounties,ready:e.state.ready,dataFromChild:e.dataFromChild}))}}),r.a.createElement(h.a,{exact:!0,path:"/region/:region",render:function(t){return r.a.createElement(w,Object.assign({},t,{allRegionalSurfBreaks:e.state.validSurfBreaks,theCounty:e.state.theCounty,ready:e.state.ready}))}}),r.a.createElement(h.a,{exact:!0,path:"/region/".concat(this.state.theCounty,"/:spotID"),render:function(t){return r.a.createElement(j,Object.assign({},t,{allRegionalSurfBreaks:e.state.validSurfBreaks,theCounty:e.state.theCounty,ready:e.state.ready}))}})))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.5730bf9c.chunk.js.map