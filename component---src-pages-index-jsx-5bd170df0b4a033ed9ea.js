"use strict";(self.webpackChunktvqqq_github_io=self.webpackChunktvqqq_github_io||[]).push([[230],{2955:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});n(6304);var l=n(1321),a=n(7294),r=n(562),i=n(2511),c=(n(9655),n(3148)),o=(n(1415),n(6452)),m=function(e){var t=e.img,n=e.textH4,l=e.textH3,r=e.alt,i=e.height,c=e.width;return a.createElement("div",{className:"about-module--aboutTile--1d9Ih"},a.createElement("div",{className:"about-module--aboutBlock--2tZJ_"},a.createElement("img",{src:"../"+t,height:i||100,width:c||100,alt:r||""})),a.createElement("div",{className:"textCenter about-module--mrTp26PX--h36d-"},a.createElement("h4",null,n||""),a.createElement("h3",null,l||"")))},s=(n(5168),n(7462)),u=n(4942),d=n(5900),p=n.n(d),g=n(83),f=n(2525),E=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},h=function(e){var t,n,l=e.prefixCls,r=e.className,i=e.color,c=void 0===i?"blue":i,o=e.dot,m=e.pending,d=void 0!==m&&m,g=(e.position,e.label),h=e.children,v=E(e,["prefixCls","className","color","dot","pending","position","label","children"]),x=(0,a.useContext(f.E_).getPrefixCls)("timeline",l),b=p()((t={},(0,u.Z)(t,"".concat(x,"-item"),!0),(0,u.Z)(t,"".concat(x,"-item-pending"),d),t),r),y=p()((n={},(0,u.Z)(n,"".concat(x,"-item-head"),!0),(0,u.Z)(n,"".concat(x,"-item-head-custom"),!!o),(0,u.Z)(n,"".concat(x,"-item-head-").concat(c),!0),n));return a.createElement("li",(0,s.Z)({},v,{className:b}),g&&a.createElement("div",{className:"".concat(x,"-item-label")},g),a.createElement("div",{className:"".concat(x,"-item-tail")}),a.createElement("div",{className:y,style:{borderColor:/blue|red|green|gray/.test(c||"")?void 0:c}},o),a.createElement("div",{className:"".concat(x,"-item-content")},h))},v=n(4221),x=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},b=function(e){var t,n=a.useContext(f.E_),l=n.getPrefixCls,r=n.direction,i=e.prefixCls,c=e.pending,o=void 0===c?null:c,m=e.pendingDot,d=e.children,E=e.className,b=e.reverse,y=void 0!==b&&b,w=e.mode,Z=void 0===w?"":w,C=x(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),N=l("timeline",i),k="boolean"==typeof o?null:o,I=o?a.createElement(h,{pending:!!o,dot:m||a.createElement(g.Z,null)},k):null,O=a.Children.toArray(d);O.push(I),y&&O.reverse();var H=function(e,t){return"alternate"===Z?"right"===e.props.position?"".concat(N,"-item-right"):"left"===e.props.position?"".concat(N,"-item-left"):"".concat(N,t%2==0?"-item-left":"-item-right"):"left"===Z?"".concat(N,"-item-left"):"right"===Z||"right"===e.props.position?"".concat(N,"-item-right"):""},W=O.filter((function(e){return!!e})),T=a.Children.count(W),G="".concat(N,"-item-last"),S=a.Children.map(W,(function(e,t){var n=t===T-2?G:"",l=t===T-1?G:"";return(0,v.Tm)(e,{className:p()([e.props.className,!y&&o?n:l,H(e,t)])})})),j=O.some((function(e){var t;return!!(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.label)})),q=p()(N,(t={},(0,u.Z)(t,"".concat(N,"-pending"),!!o),(0,u.Z)(t,"".concat(N,"-reverse"),!!y),(0,u.Z)(t,"".concat(N,"-").concat(Z),!!Z&&!j),(0,u.Z)(t,"".concat(N,"-label"),j),(0,u.Z)(t,"".concat(N,"-rtl"),"rtl"===r),t),E);return a.createElement("ul",(0,s.Z)({},C,{className:q}),S)};b.Item=h;var y=b,w=(n(2555),n(1902)),Z=n(9519),C=n(7190),N="home-module--stacks--2eHfx",k="home-module--stackHeader--3FjLI",I=(n(4399),n(9273)),O=n(8014),H=function(){var e=w.Z.Text,t="TatViQuyen-CV.pdf",n=(0,a.useState)(0),l=n[0],r=n[1];return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(I.Z,{type:"dashed",size:"large",shape:"round",onClick:function(){window.open(t,"_blank"),fetch("https://sam2.tatviquyen.name.vn/cv/visitors").then((function(e){return e.json()})).then((function(e){r(e.cv_visitors),setTimeout((function(){r(0)}),3e3)}))}},t," ",a.createElement(Z.G,{icon:O.Xjp}),l>0&&a.createElement(e,{code:!0},"(",l,")"))))},W=function(){var e=w.Z.Text,t=a.createElement(g.Z,{spin:!0});return a.createElement(a.Fragment,null,a.createElement("div",{className:"box"},a.createElement("h1",{className:"titleSeparate"},"Stacks"),a.createElement(y,null,a.createElement(y.Item,null,a.createElement(e,{strong:!0,className:k},"Programming Stacks"),a.createElement("br",null),a.createElement("div",{className:N},a.createElement(Z.G,{icon:C.r1q,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.vNK,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.TM9,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.GJX,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.Gu1,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.DTC,size:"2x",fixedWidth:!0}))),a.createElement(y.Item,null,a.createElement(e,{strong:!0,className:k},"DevOps"),a.createElement("br",null),a.createElement("div",{className:N},a.createElement(Z.G,{icon:C._yj,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.qJE,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.XWM,size:"2x",fixedWidth:!0}),a.createElement(Z.G,{icon:C.zhw,size:"2x",fixedWidth:!0}))),a.createElement(y.Item,{dot:t},a.createElement(e,{strong:!0,className:k},"Certificates"),a.createElement("br",null),a.createElement("a",{href:"https://www.credly.com/badges/363949db-e7ad-4ce3-97a6-635705442c0d/public_url",target:"_blank",rel:"noreferrer"},a.createElement("img",{src:"../../certificates/aws-certified-solutions-architect-associate.png",width:"160px",alt:"AWS-SAA"}))),a.createElement(y.Item,{style:{marginTop:15}},a.createElement(e,{strong:!0,className:k,style:{marginBottom:5,display:"block"}},"CV / Resume"),a.createElement(H,null)))))},T=n(8514),G=n.n(T),S=n(8814),j="My name is Quyen Tat. I'm a web developer about 3+ experience years. I am obsessed about Web Development and I like to experiment with different web technologies. Currently I work mostly with Cloud services on AWS. I am interesting in how cloud computing operates to build a high-performance and scalable application.",q='I\'m a self taught programmer so I spend my time on learning new stacks, "googling" and solving problems to create awesome works. I build this blog for sharing my knowledge about tech stacks I learn, also a simple place to keep things.',z="Almost posts in my blog are Vietnamese. I am still improving my English to be better and hope could make some English articles soon. 😉",P=function(){var e,t=G().siteTitle+" - "+G().siteDescription,n=j+" "+(null!==(e=q)&&""!==e&&(e=e.toString()).replace(/(<([^>]+)>)/gi,""));return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(S.Z,{title:t,description:n,path:"",keywords:["quyentat","tatviquyen","tvq"]}),a.createElement("h1",{className:"titleSeparate"},"Hello World 👋󠁧󠁢󠁥󠁮󠁧"),a.createElement("p",null,j),a.createElement("p",null,q),a.createElement("p",null,z)),a.createElement(c.Z,{gutter:[20,20]},a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/location.png",alt:"location image",textH4:"Born and bought up in",textH3:"HCMC, Vietnam 🇻🇳"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/coffee.png",alt:"coffee image",textH4:"Crush Coffee",textH3:"Turn Coffee into Code"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/cloud.png",alt:"cloud image",textH4:"Love Cloud (computing)",textH3:"Build things with ☁️"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/music.png",alt:"music image",textH4:"Feel the beat",textH3:"Indie & Lofi"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/finance.png",alt:"personal finance image",textH4:"A Prosperous Life",textH3:"is my 🎯"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/travel.png",alt:"travel image",textH4:"Travelling",textH3:"makes me feel 😊"}))),a.createElement(W,null))},_=function(){return a.createElement(l.Z,{className:"outerPadding"},a.createElement(l.Z,{className:"container"},a.createElement(r.Z,null),a.createElement(i.Z,null,a.createElement(a.Fragment,null,a.createElement(P,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-5bd170df0b4a033ed9ea.js.map