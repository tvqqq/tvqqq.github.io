(self.webpackChunktvqqq_github_io=self.webpackChunktvqqq_github_io||[]).push([[230],{1564:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});n(278);var l=n(1321),a=n(7294),i=n(3826),r=n(2447),c=(n(9655),n(3148)),o=(n(1415),n(6452)),m=function(e){var t=e.img,n=e.textH4,l=e.textH3,i=e.alt,r=e.height,c=e.width;return a.createElement("div",{className:"about-module--aboutTile--1d9Ih"},a.createElement("div",{className:"about-module--aboutBlock--2tZJ_"},a.createElement("img",{src:"../"+t,height:r||100,width:c||100,alt:i||""})),a.createElement("div",{className:"textCenter about-module--mrTp26PX--h36d-"},a.createElement("h4",null,n||""),a.createElement("h3",null,l||"")))},s=(n(7384),n(9273)),u=(n(2323),n(1902)),d=n(9519),g=n(8014),p=function(){var e=u.Z.Text,t="TatViQuyen-CV.pdf",n=(0,a.useState)(0),l=n[0],i=n[1];return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(s.Z,{type:"dashed",size:"large",shape:"round",onClick:function(){window.open(t,"_blank"),fetch("https://sam2.tatviquyen.name.vn/cv/visitors").then((function(e){return e.json()})).then((function(e){i(e.cv_visitors),setTimeout((function(){i(0)}),3e3)}))}},t," ",a.createElement(d.G,{icon:g.Xjp}),l>0&&a.createElement(e,{code:!0},"(",l,")")),a.createElement("div",null,a.createElement("i",null,a.createElement("small",null,"(Click on my CV for more details)")))))},E=(n(6491),n(2122)),f=n(6156),h=n(5900),v=n.n(h),x=n(83),b=n(2525),y=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},C=function(e){var t,n,l=e.prefixCls,i=e.className,r=e.color,c=void 0===r?"blue":r,o=e.dot,m=e.pending,s=void 0!==m&&m,u=(e.position,e.label),d=e.children,g=y(e,["prefixCls","className","color","dot","pending","position","label","children"]),p=(0,a.useContext(b.E_).getPrefixCls)("timeline",l),h=v()((t={},(0,f.Z)(t,"".concat(p,"-item"),!0),(0,f.Z)(t,"".concat(p,"-item-pending"),s),t),i),x=v()((n={},(0,f.Z)(n,"".concat(p,"-item-head"),!0),(0,f.Z)(n,"".concat(p,"-item-head-custom"),!!o),(0,f.Z)(n,"".concat(p,"-item-head-").concat(c),!0),n));return a.createElement("li",(0,E.Z)({},g,{className:h}),u&&a.createElement("div",{className:"".concat(p,"-item-label")},u),a.createElement("div",{className:"".concat(p,"-item-tail")}),a.createElement("div",{className:x,style:{borderColor:/blue|red|green|gray/.test(c||"")?void 0:c}},o),a.createElement("div",{className:"".concat(p,"-item-content")},d))},Z=n(4221),N=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},w=function(e){var t,n=a.useContext(b.E_),l=n.getPrefixCls,i=n.direction,r=e.prefixCls,c=e.pending,o=void 0===c?null:c,m=e.pendingDot,s=e.children,u=e.className,d=e.reverse,g=void 0!==d&&d,p=e.mode,h=void 0===p?"":p,y=N(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),w=l("timeline",r),k="boolean"==typeof o?null:o,O=o?a.createElement(C,{pending:!!o,dot:m||a.createElement(x.Z,null)},k):null,H=a.Children.toArray(s);H.push(O),g&&H.reverse();var I=function(e,t){return"alternate"===h?"right"===e.props.position?"".concat(w,"-item-right"):"left"===e.props.position?"".concat(w,"-item-left"):"".concat(w,t%2==0?"-item-left":"-item-right"):"left"===h?"".concat(w,"-item-left"):"right"===h||"right"===e.props.position?"".concat(w,"-item-right"):""},W=H.filter((function(e){return!!e})),G=a.Children.count(W),z="".concat(w,"-item-last"),T=a.Children.map(W,(function(e,t){var n=t===G-2?z:"",l=t===G-1?z:"";return(0,Z.Tm)(e,{className:v()([e.props.className,!g&&o?n:l,I(e,t)])})})),j=H.some((function(e){var t;return!!(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.label)})),q=v()(w,(t={},(0,f.Z)(t,"".concat(w,"-pending"),!!o),(0,f.Z)(t,"".concat(w,"-reverse"),!!g),(0,f.Z)(t,"".concat(w,"-").concat(h),!!h&&!j),(0,f.Z)(t,"".concat(w,"-label"),j),(0,f.Z)(t,"".concat(w,"-rtl"),"rtl"===i),t),u);return a.createElement("ul",(0,E.Z)({},y,{className:q}),T)};w.Item=C;var k=w,O=n(7190),H="home-module--stacks--2eHfx",I="home-module--stackHeader--3FjLI",W=function(){return a.createElement(a.Fragment,null,a.createElement("strong",{className:I},"My Certificates"),a.createElement("br",null),a.createElement("i",null,"To be coming soon!"))},G=function(){var e=u.Z.Text;return a.createElement(a.Fragment,null,a.createElement("div",{className:"box"},a.createElement("h1",{className:"titleSeparate"},"Stacks"),a.createElement(k,{pending:a.createElement(W,null)},a.createElement(k.Item,null,a.createElement(e,{strong:!0,className:I},"Programming Stacks"),a.createElement("br",null),a.createElement("div",{className:H},a.createElement(d.G,{icon:O.r1q,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.vNK,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.TM9,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.GJX,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.Gu1,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.DTC,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.iEy,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.af7,size:"2x",fixedWidth:!0}))),a.createElement(k.Item,null,a.createElement(e,{strong:!0,className:I},"DevOps"),a.createElement("br",null),a.createElement("div",{className:H},a.createElement(d.G,{icon:O._yj,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.qJE,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.XWM,size:"2x",fixedWidth:!0}),a.createElement(d.G,{icon:O.zhw,size:"2x",fixedWidth:!0}))))))},z=n(8514),T=n.n(z),j=n(8814),q="My name is Quyen Tat. I'm a web developer about 3+ experience years. I am obsessed about Web Development and I like to experiment with different web technologies. Currently I work mostly with Cloud services on AWS. I am interesting in how cloud computing operates to build a high-performance and scalable application.",P='I\'m a self taught programmer so I spend my time on learning new stacks, "googling" and solving problems to create awesome works. I build this blog for sharing my knowledge about tech stacks I learn, also a simple place to keep things.',S="Almost posts in my blog are Vietnamese. I am still improving my English to be better and hope could make some English articles soon. 😉",_=function(){var e,t=T().siteTitle+" - "+T().siteDescription,n=q+" "+(null!==(e=P)&&""!==e&&(e=e.toString()).replace(/(<([^>]+)>)/gi,""));return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(j.Z,{title:t,description:n,path:"",keywords:["quyentat","tatviquyen","tvq"]}),a.createElement("h1",{className:"titleSeparate"},"Hello World 👋󠁧󠁢󠁥󠁮󠁧"),a.createElement("p",null,q),a.createElement("p",null,P),a.createElement("p",null,S)),a.createElement(c.Z,{gutter:[20,20]},a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/location.png",alt:"location image",textH4:"Born and bought up in",textH3:"HCMC, Vietnam 🇻🇳"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/coffee.png",alt:"coffee image",textH4:"Crush Coffee",textH3:"Turn Coffee into Code"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/cloud.png",alt:"cloud image",textH4:"Love Cloud (computing)",textH3:"Build things with ☁️"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/music.png",alt:"music image",textH4:"Feel the beat",textH3:"Indie & Lofi"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/finance.png",alt:"personal finance image",textH4:"A Prosperous Life",textH3:"is my 🎯"})),a.createElement(o.Z,{xs:24,sm:24,md:12,lg:8},a.createElement(m,{img:"images/travel.png",alt:"travel image",textH4:"Travelling",textH3:"makes me feel 😊"}))),a.createElement(G,null),a.createElement(p,null))},F=function(){return a.createElement(l.Z,{className:"outerPadding"},a.createElement(l.Z,{className:"container"},a.createElement(i.Z,null),a.createElement(r.Z,null,a.createElement(a.Fragment,null,a.createElement(_,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-47bb2ed3c2df7a066b39.js.map