(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),s=a(4),i=a(5),b=a(8),o=a(7),r=a(1),l=a.n(r),d=(a(13),a(0)),u=function(t){var e=t.tabs,a=t.tabId,n=t.chooseSelectedTab,c=e.find((function(t){return t.id===a}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"Tabs__list",children:e.map((function(t){return Object(d.jsx)("li",{className:"Tabs__element",children:Object(d.jsx)("button",{type:"button",className:a===t.id?"Tabs__button Tabs__button--active":"Tabs__button",onClick:function(){return n(t)},children:t.title})},t.id)}))}),Object(d.jsx)("div",{className:"Tabs__task",children:null===c||void 0===c?void 0:c.content})]})},j=(a(15),[{id:"tab-1",title:"Tab 1",content:"FE_OCT21 is the best team ever"},{id:"tab-2",title:"Tab 2",content:"Approve a task"},{id:"tab-3",title:"Tab 3",content:"Do not reject a task"}]),h=function(t){Object(b.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:j[0]},t.chooseSelectedTab=function(e){t.state.selectedTab.id!==e.id&&t.setState({selectedTab:j.find((function(t){return t.id===e.id}))})},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__title",children:"Selected tab is ".concat(this.state.selectedTab.title)}),Object(d.jsx)(u,{tabs:j,tabId:this.state.selectedTab.id,chooseSelectedTab:this.chooseSelectedTab})]})}}]),a}(l.a.Component),T=h;c.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.df209a2e.chunk.js.map