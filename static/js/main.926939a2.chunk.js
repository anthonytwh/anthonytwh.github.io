(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(27),c=a.n(o),r=a(25),i=(a(66),a(11)),s=a(12),m=a(14),u=a(13),d=a(15),E=a(18),h=a.n(E),b=a(111),p=a(112),f=a(113),y=a(114),g=(a(21),a(8)),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).click=function(e){window.location=e;var t=e.replace("/#","");t&&console.log("Jump to ",t)},a.scrollToMyRef=function(){return window.scrollTo(0,a.clickref)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount")}},{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"componentWillUpdate",value:function(){console.log("componentWillUpdate")}},{key:"render",value:function(){var e=this;return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(b.a,{className:"Header-header",light:!0,expand:"md"},l.a.createElement(p.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,null,l.a.createElement(y.a,null,l.a.createElement(r.b,{className:"Header-link",onClick:function(){return e.click("/#about")}}," About "))),l.a.createElement(f.a,null,l.a.createElement(y.a,null,l.a.createElement(r.b,{to:"/#contact",className:"Header-link",onClick:function(){return e.click("/#contact")}}," Contact ")))))))}}]),t}(n.Component),v=a(115),w=a(116),x=a(17),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isMobile:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.media({minWidth:1200},function(){e.setState({isMobile:!1})}),this.props.media({maxWidth:1200},function(){e.setState({isMobile:!0})})}},{key:"render",value:function(){var e=this.state.isMobile;return l.a.createElement("div",null,e?l.a.createElement(v.a,null,l.a.createElement(w.a,{className:"Footer",id:"contact"},l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://github.com/anthonytwh"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.a,size:"sm"}))),l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://www.linkedin.com/in/anthony-tam/"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.c,size:"sm"}))),l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://www.instagram.com/anthonyclimbs/"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.b,size:"sm"}))),l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://medium.com/@AnthonyTam"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.d,size:"sm"})))),l.a.createElement(w.a,{className:"Footer-foot-mobile"},"\xa9 2020 anthonyt.ca")):l.a.createElement(v.a,null,l.a.createElement(w.a,{className:"Footer",id:"contact"},l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://github.com/anthonytwh"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.a,size:"lg"}))),l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://www.linkedin.com/in/anthony-tam/"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.c,size:"lg"}))),l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://www.instagram.com/anthonyclimbs/"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.b,size:"lg"}))),l.a.createElement(v.a,{xs:{size:"3"}},l.a.createElement("a",{href:"https://medium.com/@AnthonyTam"},l.a.createElement(g.a,{className:"Footer-icons",icon:x.d,size:"lg"})))),l.a.createElement(w.a,{className:"Footer-foot"},"\xa9 2020 anthonyt.ca")))}}]),t}(n.Component),P=h()(M),k=a(23),C=a(117),j=a(40),A=a.n(j),O=a(20),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).click=function(e){window.location=e;var t=e.replace("/#","");t&&console.log("Jump to ",t)},a.about=Object(n.createRef)(),a.toggleModal=a.toggleModal.bind(Object(k.a)(a)),a.state={currOpacity:1,showModal:!1,isMobile:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.media({minWidth:1200},function(){e.setState({isMobile:!1})}),this.props.media({maxWidth:1200},function(){e.setState({isMobile:!0})}),window.onscroll=function(){if(window.scrollY<750&&e.setState({currOpacity:1}),750<=window.scrollY){var t=(200-(25*Math.ceil(window.scrollY/25)-750))/200;e.setState({currOpacity:t})}}}},{key:"toggleModal",value:function(){this.setState({showModal:!this.state.showModal})}},{key:"render",value:function(){var e=this,t=this.state.isMobile,a=Math.min(this.state.currOpacity,1);return l.a.createElement("div",null,t?l.a.createElement("div",{className:"Main"},l.a.createElement(C.a,{className:"Main-jumbo"},l.a.createElement(w.a,{className:"Main-heading"},l.a.createElement(v.a,null,l.a.createElement("h1",{className:"Main-title-mobile"}," Anthony Tam "),l.a.createElement("p",{className:"Main-subtitle-mobile"}," Data Science, Cyber Security, Software Development "))),l.a.createElement(w.a,{className:"Main-body-mobile"},l.a.createElement(v.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/anthony-tam/"},l.a.createElement(g.a,{className:"Main-icons-mobile",icon:x.c,size:"2x"}))),l.a.createElement(v.a,null,l.a.createElement("a",{href:"https://github.com/anthonytwh"},l.a.createElement(g.a,{className:"Main-icons-mobile",icon:x.a,size:"2x"}))),l.a.createElement(v.a,null,l.a.createElement("a",{href:A.a},l.a.createElement(g.a,{className:"Main-icons-mobile",icon:O.c,size:"2x"}))),l.a.createElement(v.a,null,l.a.createElement("a",{href:"mailto:contact@anthonyt.ca"},l.a.createElement(g.a,{className:"Main-icons-mobile",icon:O.b,size:"2x"}))))),l.a.createElement("span",{className:"Main-arrow",style:{opacity:a}},l.a.createElement(g.a,{className:"Main-arrow-icon",onClick:function(){return e.click("/#about")},icon:O.a,size:"2x"}))):l.a.createElement("div",{className:"Main"},l.a.createElement(C.a,{className:"Main-jumbo"},l.a.createElement(w.a,{className:"Main-heading"},l.a.createElement(v.a,null,l.a.createElement("h1",{className:"Main-title"}," Anthony Tam "),l.a.createElement("p",{className:"Main-subtitle"}," Data Science, Cyber Security, Software Development "))),l.a.createElement(w.a,{className:"Main-body"},l.a.createElement(v.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/anthony-tam/"},l.a.createElement(g.a,{className:"Main-icons",icon:x.c,size:"3x"}))),l.a.createElement(v.a,null,l.a.createElement("a",{href:"https://github.com/anthonytwh"},l.a.createElement(g.a,{className:"Main-icons",icon:x.a,size:"3x"}))),l.a.createElement(v.a,null,l.a.createElement("a",{href:A.a},l.a.createElement(g.a,{className:"Main-icons-mobile",icon:O.c,size:"3x"}))),l.a.createElement(v.a,null,l.a.createElement("a",{href:"mailto:contact@anthonyt.ca"},l.a.createElement(g.a,{className:"Main-icons",icon:O.b,size:"3x"}))))),l.a.createElement("span",{className:"Main-arrow",style:{opacity:a}},l.a.createElement(g.a,{className:"Main-arrow-icon",onClick:function(){return e.click("/#about")},icon:O.a,size:"3x"}))))}}]),t}(n.Component),T=h()(S),I=a(118),D=a(119),z=a(120),W=a(121),F=a(122),R=a(123),B=a(3),G=a.n(B),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggleTab=a.toggleTab.bind(Object(k.a)(a)),a.state={activeTab:"1",isMobile:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.media({minWidth:1440},function(){e.setState({isMobile:!1})}),this.props.media({maxWidth:1440},function(){e.setState({isMobile:!0})})}},{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.state.isMobile;return l.a.createElement("div",null,t?l.a.createElement("div",null,l.a.createElement(w.a,{className:"About-title-row",id:"about",ref:this.about},l.a.createElement(I.a,{className:"About-title-mobile"}," ",l.a.createElement("h1",null,"$whoami")," ")),l.a.createElement(w.a,{className:"About-content-upper-row-mobile"},l.a.createElement(D.a,{className:"About-toast-mobile"},l.a.createElement(z.a,{className:"About-animate-mobile"},l.a.createElement("span",null," ",l.a.createElement("p",null," Software Development ")),l.a.createElement("span",null," ",l.a.createElement("p",null," Data Science ")),l.a.createElement("span",null," ",l.a.createElement("p",null," Cyber Security")),l.a.createElement("span",null," ",l.a.createElement("p",null," Product Design "))),l.a.createElement(W.a,{className:"About-body"},"Anthony is a Lead Security Developer at Darktrace, a high-growth cyber security company using AI and machine learning to detect and respond to anomalous threats and real-time attacks.",l.a.createElement("br",null),l.a.createElement("br",null),"He leads the threat model development team in North America, working in research and development to expand threat detection capabilities in the network, cloud, and SaaS platforms. He also supports consultancy efforts and technical sales operations as a subjet matter expert.",l.a.createElement("br",null),l.a.createElement("br",null),"Anthony is always happy to connect about new or exciting opportunities, or anything tech!"))),l.a.createElement(w.a,{className:"About-content-lower-row-mobile"},l.a.createElement(v.a,{className:"Portfolio-Center-Col-Mobile"},l.a.createElement(p.a,{className:"Portfolio-BadgeNav-mobile"},l.a.createElement(f.a,{className:"Portfolio-badge-mobile",id:"Employment"},l.a.createElement(y.a,{className:G()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},l.a.createElement("p",null," Experience ")," ")),l.a.createElement(f.a,{className:"Portfolio-badge-mobile",id:"Education"},l.a.createElement(y.a,{className:G()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},l.a.createElement("p",null," Education ")))),l.a.createElement(F.a,{activeTab:this.state.activeTab},l.a.createElement(R.a,{tabId:"1"},1==this.state.activeTab?l.a.createElement(I.a,{className:"Portfolio-card-mobile"},l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-header-mobile"}," Darktrace "),l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"left",color:"lightgrey"}}," Lead Model Developer ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"right",color:"lightgrey"}}," Toronto/Remote, 2019 - present "))),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Research and develop models to detect adversarial attacks in enterprise networks, cloud, and saas environments."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Develop and maintain analytical tools and infrastructure (full-stack) for data analysis/research and development."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Maintainer of the Darktrace Python library, a closed-source library for a simple python interface with Darktrace REST API."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Work closely with product development teams to resolve issues, provide feedback and general feature improvements."))),l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"left",color:"lightgrey"}}," Cyber Threat Analyst ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"right",color:"lightgrey"}}," Toronto, 2018 - 2019"))),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Lead analyst in Canada, supporting strategic accounts and pre/post-sale engagements as a subject matter Expert."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Investigated active threats and live compromises in customer environments, compiling highly-detailed threat reports for executives and technical clients."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Contributed hundreds of IOC's to the internal threat intel repository through research and post-morten investigations."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}}," \u2022 Presented at customer events, providing knowledge and expertise of the Darktrace product to clients."))),l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"left",color:"lightgrey"}}," Cyber Security Engineer ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"right",color:"lightgrey"}}," Toronto, 2017 - 2018 "))),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}},"  \u2022 Managed Darktrace enterprise integrations for customers in network, virtual and cloud environments."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}},"  \u2022 Traveled weekly to lead onsite technical integrations with the customer security teams, managers and executives."),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"5%"}},"  \u2022 Contributed to over 30% growth of the Canadian customer base from proof-of-value customer trials in one year.")))):null),l.a.createElement(R.a,{tabId:"2"},2==this.state.activeTab?l.a.createElement(I.a,{className:"Portfolio-card-mobile"},l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-header-mobile"}," McMaster University"),l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"left",color:"lightgrey"}}," Bachelor of Engineering & Management ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"right",color:"lightgrey"}}," Hamilton ON, 2012 - 2017 "))),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"1em"}}," \u2022 Engineering and business management minor with a specilization in robotics and design. "))),l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-header-mobile"}," Nanyang Technological University "),l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"left",color:"lightgrey"}}," International Exchange Program ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textAlign:"right",color:"lightgrey"}}," Singapore SG, 2014 - 2015 "))),l.a.createElement("p",{className:"Portfolio-body-mobile",style:{textIndent:"1em"}}," \u2022 Mostly traveled, sometimes studied, and had an awesome time. ")))):null))))):l.a.createElement("div",null,l.a.createElement(w.a,{className:"About-title-row",id:"about",ref:this.about},l.a.createElement(I.a,{className:"About-title"}," ",l.a.createElement("h1",null,"$whoami")," ")),l.a.createElement(w.a,{className:"About-content-row"},l.a.createElement(v.a,{xs:"5"},l.a.createElement(D.a,{className:"About-toast"},l.a.createElement(z.a,{className:"About-animate"},l.a.createElement("span",null," ",l.a.createElement("p",null," Software Development ")),l.a.createElement("span",null," ",l.a.createElement("p",null," Data Science ")),l.a.createElement("span",null," ",l.a.createElement("p",null," Cyber Security")),l.a.createElement("span",null," ",l.a.createElement("p",null," Product Design "))),l.a.createElement(W.a,{className:"About-body"},"Anthony is a Lead Security Developer at Darktrace, a high-growth cyber security company using artificial intelligence (AI) and machine learning (ML) to detect and respond to anomalous threats and real-time attacks.",l.a.createElement("br",null),l.a.createElement("br",null),"He leads the threat model development team in North America, working in research and development to expand threat detection capabilities in the network, cloud, and SaaS platforms. He also supports consultancy efforts and technical sales operations as a subjet matter expert.",l.a.createElement("br",null),l.a.createElement("br",null),"Anthony is always happy to connect about new or exciting opportunities, or anything tech!"))),l.a.createElement(v.a,{xs:"auto"},l.a.createElement(p.a,{className:"Portfolio-BadgeNav"},l.a.createElement(f.a,{className:"Portfolio-badge",id:"Employment"},l.a.createElement(y.a,{className:G()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},l.a.createElement("p",null," Experience ")," ")),l.a.createElement(f.a,{className:"Portfolio-badge",id:"Education"},l.a.createElement(y.a,{className:G()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},l.a.createElement("p",null," Education ")))),l.a.createElement(F.a,{activeTab:this.state.activeTab},l.a.createElement(R.a,{tabId:"1"},1==this.state.activeTab?l.a.createElement(I.a,{className:"Portfolio-card"},l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-header"}," Darktrace "),l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"left",color:"lightgrey"}}," Lead Model Developer ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"right",color:"lightgrey"}}," Toronto/Remote, 2019 - present "))),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Research and develop models to detect adversarial attacks in enterprise networks, cloud, and saas environments."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Develop and maintain analytical tools and infrastructure (full-stack) for data analysis/research and development."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Maintainer of the Darktrace Python library, a closed-source library for integration with Darktrace REST API."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Work closely with product development teams to resolve issues, provide feedback and general feature improvements."))),l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"left",color:"lightgrey"}}," Cyber Threat Analyst ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"right",color:"lightgrey"}}," Toronto, 2018 - 2019"))),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Lead analyst in Canada, supporting strategic accounts and pre/post-sale engagements as a subject matter Expert."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Investigated active threats and live compromises in customer environments, compiling highly-detailed threat reports for executives and technical clients."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Contributed hundreds of IOC's to the internal threat intel repository through research and post-morten investigations."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}}," \u2022 Presented at customer events, providing knowledge and expertise of the Darktrace product to clients."))),l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"left",color:"lightgrey"}}," Cyber Security Engineer ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"right",color:"lightgrey"}}," Toronto, 2017 - 2018 "))),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}},"  \u2022 Managed Darktrace enterprise integrations for customers in network, virtual and cloud environments."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}},"  \u2022 Traveled weekly to lead onsite technical integrations with the customer security teams, managers and executives."),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"5%"}},"  \u2022 Contributed to over 30% growth of the Canadian customer base from proof-of-value customer trials in one year.")))):null),l.a.createElement(R.a,{tabId:"2"},2==this.state.activeTab?l.a.createElement(I.a,{className:"Portfolio-card"},l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-header"}," McMaster University"),l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"left",color:"lightgrey"}}," Bachelor of Engineering & Management ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"right",color:"lightgrey"}}," Hamilton ON, 2012 - 2017 "))),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"1em"}}," \u2022 Engineering and business management minor with a specilization in robotics and design. "))),l.a.createElement(w.a,{className:"Portfolio-row"},l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-header"}," Nanyang Technological University "),l.a.createElement(w.a,null,l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"left",color:"lightgrey"}}," International Exchange Program ")),l.a.createElement(v.a,null,l.a.createElement("p",{className:"Portfolio-body",style:{textAlign:"right",color:"lightgrey"}}," Singapore SG, 2014 - 2015 "))),l.a.createElement("p",{className:"Portfolio-body",style:{textIndent:"1em"}}," \u2022 Mostly traveled, sometimes studied, and had an awesome time. ")))):null))))))}}]),t}(n.Component),L=h()(H),U=a(124),J=a(125),_=a(131),Y=a(126),$=a(127),Q=(n.Component,a(128)),q=a(129),K=a(130),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(k.a)(a)),a.state={popoverOpen:!1,isMobile:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.media({minWidth:1440},function(){e.setState({isMobile:!1})}),this.props.media({maxWidth:1440},function(){e.setState({isMobile:!0})})}},{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.state.isMobile;return l.a.createElement("div",null,e?l.a.createElement(I.a,{className:"Contact-mobile"},l.a.createElement(Q.a,{className:"Contact-form",method:"POST",action:"https://formspree.io/contact@anthonyt.ca"},l.a.createElement(w.a,{form:!0},l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-honey",type:"text",name:"_gotcha",id:"pre-text",placeholder:"Text"})),l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input-mobile",type:"name",name:"name",id:"contactName",placeholder:"Name"}))),l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input-mobile",type:"email",name:"email",id:"contactEmail",placeholder:"Email"})))),l.a.createElement(w.a,{form:!0},l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input-mobile",type:"subject",name:"subject",id:"contactSubject",placeholder:"Subject"})))),l.a.createElement(w.a,{form:!0},l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input-mobile",type:"textarea",name:"message",id:"contactMessage",placeholder:"Message"})))),l.a.createElement(w.a,{form:!0},l.a.createElement(v.a,null,l.a.createElement("br",null),l.a.createElement(J.a,{className:"Contact-button-mobile",type:"submit"}," Send "))))):l.a.createElement(I.a,{className:"Contact"},l.a.createElement(Q.a,{className:"Contact-form",method:"POST",action:"https://formspree.io/contact@anthonyt.ca"},l.a.createElement(w.a,{form:!0},l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-honey",type:"text",name:"_gotcha",id:"pre-text",placeholder:"Text"})),l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input",type:"name",name:"name",id:"contactName",placeholder:"Name"}))),l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input",type:"email",name:"email",id:"contactEmail",placeholder:"Email"})))),l.a.createElement(w.a,{form:!0},l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input",type:"subject",name:"subject",id:"contactSubject",placeholder:"Subject"})))),l.a.createElement(w.a,{form:!0},l.a.createElement(v.a,null,l.a.createElement(q.a,null,l.a.createElement(K.a,{className:"Contact-input",type:"textarea",name:"message",id:"contactMessage",placeholder:"Message"})))),l.a.createElement(w.a,{form:!0},l.a.createElement(v.a,null,l.a.createElement("br",null),l.a.createElement(J.a,{className:"Contact-button",type:"submit"}," Send "))))))}}]),t}(n.Component),X=h()(V),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).clickref=Object(n.createRef)(),a.state={isMobile:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.media({minWidth:1440},function(){e.setState({isMobile:!1})}),this.props.media({maxWidth:1440},function(){e.setState({isMobile:!0})})}},{key:"render",value:function(){var e=this.state.isMobile;return l.a.createElement("div",null,e?l.a.createElement(w.a,{className:"Contact-row-mobile"},l.a.createElement(U.a,{className:"Portfolio-mobile",id:"contact",ref:this.clickref},l.a.createElement(I.a,{className:"Contact-badge-mobile",id:"ContactMe"}," ",l.a.createElement("h1",null," Contact ")," "),l.a.createElement(X,null))):l.a.createElement(w.a,{className:"Contact-row"},l.a.createElement(U.a,{className:"Portfolio",id:"contact",ref:this.clickref},l.a.createElement(I.a,{className:"Contact-badge",id:"ContactMe"}," ",l.a.createElement("h1",null," Contact ")," "),l.a.createElement(X,null))))}}]),t}(n.Component),ee=h()(Z),te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isMobile:!1,isTablet:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.media({minWidth:768},function(){e.setState({isTablet:!1}),console.log("Render for desktop.")}),this.props.media({maxWidth:768},function(){e.setState({isTablet:!0}),console.log("Render for tablet.")}),this.props.media({minWidth:320},function(){e.setState({isMobile:!1}),console.log("Render too small for mobile.")}),this.props.media({maxWidth:767},function(){e.setState({isMobile:!0}),console.log("Render for mobile.")})}},{key:"render",value:function(){var e=this.state.isMobile,t=this.state.isTablet;return l.a.createElement(r.a,null,e?l.a.createElement("div",{className:"Global-mobile"},l.a.createElement("div",{className:"BG-1"},l.a.createElement("div",{className:"Main"},l.a.createElement(T,null)),l.a.createElement("div",{className:"About"},l.a.createElement(L,null))),l.a.createElement("div",{className:"BG-2"},l.a.createElement("div",{className:"Portfolio"},l.a.createElement(ee,null))),l.a.createElement("div",{className:"Footer-mobile"},l.a.createElement(P,null))):t?l.a.createElement("div",{className:"Global"},l.a.createElement("div",{className:"BG-1"},l.a.createElement("div",{className:"Main"},l.a.createElement(T,null)),l.a.createElement("div",{className:"About"},l.a.createElement(L,null))),l.a.createElement("div",{className:"BG-2"},l.a.createElement("div",{className:"Portfolio"},l.a.createElement(ee,null))),l.a.createElement("div",{className:"Footer"},l.a.createElement(P,null))):l.a.createElement("div",{className:"Global"},l.a.createElement("div",{className:"BG-1"},l.a.createElement("div",{className:"Header"},l.a.createElement(N,null)),l.a.createElement("div",{className:"Main"},l.a.createElement(T,null)),l.a.createElement("div",{className:"About"},l.a.createElement(L,null))),l.a.createElement("div",{className:"BG-2"},l.a.createElement("div",{className:"Portfolio"},l.a.createElement(ee,null))),l.a.createElement("div",{className:"Footer"},l.a.createElement(P,null))))}}]),t}(n.Component),ae=h()(te),ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(r.a,null,l.a.createElement(ae,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ne?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):le(e)})}}()},21:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/AnthonyTam_Resume_public.a2bbe1a0.pdf"},61:function(e,t,a){e.exports=a(109)}},[[61,1,2]]]);
//# sourceMappingURL=main.926939a2.chunk.js.map