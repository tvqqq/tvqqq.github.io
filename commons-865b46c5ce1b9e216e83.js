(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Qp6":function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return T})),r.d(t,"b",(function(){return E}));var n=r("q1tI"),a=r.n(n),i=r("TJpk"),o=r("Wbzz"),s=r("9eSz"),l=r.n(s),c=r("N0cg"),u=r.n(c),d=(r("Vl0y"),function(e){var t=e.data,r=e.children,n=e.bodyClass,s=e.isHome,c=u.a;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Helmet,null,a.a.createElement("html",{lang:u.a.language}),a.a.createElement("body",{className:n})),a.a.createElement("div",{className:"viewport"},a.a.createElement("div",{className:"viewport-top"},a.a.createElement("header",{className:"site-head "+(s?"home":"")},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"site-mast"},a.a.createElement("div",{className:s?"site-mast-left":"site-mast-left-flex"},s?null:a.a.createElement("nav",{className:"site-nav"},a.a.createElement("div",{className:"site-nav-left"},a.a.createElement(o.a,{to:"/"},u.a.logo?a.a.createElement("img",{className:"site-logo not-home",src:u.a.logo,alt:u.a.siteTitleMeta}):a.a.createElement(l.a,{fixed:t.file.childImageSharp.fixed,alt:c.title})),a.a.createElement(E,{data:u.a.navigation,navClass:"site-nav-item"}))))),s?a.a.createElement("div",{className:"site-banner"},a.a.createElement(o.a,{to:"/"},u.a.logo?a.a.createElement("img",{className:"site-logo",src:u.a.logo,alt:u.a.siteTitleMeta}):a.a.createElement(l.a,{fixed:t.file.childImageSharp.fixed,alt:c.title})),a.a.createElement("h1",{className:"site-banner-title"},u.a.siteTitleMeta),a.a.createElement("p",{className:"site-banner-desc"},u.a.siteDescriptionMeta)):null,s?a.a.createElement("nav",{className:"site-nav"},a.a.createElement("div",{className:"site-nav-left"},a.a.createElement(E,{data:u.a.navigation,navClass:"site-nav-item"})),a.a.createElement("div",{className:"site-nav-right"})):null)),a.a.createElement("main",{className:"site-main"},r)),a.a.createElement("div",{className:"viewport-bottom"},a.a.createElement("footer",{className:"site-foot"},a.a.createElement("div",{className:"site-foot-nav container"},a.a.createElement("div",{className:"site-foot-nav-left"},"© ",a.a.createElement(o.a,{to:"/"},u.a.siteTitleMeta)),a.a.createElement("div",{className:"site-foot-nav-right"},a.a.createElement("a",{href:"https://github.com/tvqqq",className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/github.svg",alt:"Github"})),a.a.createElement("a",{href:"https://www.linkedin.com/in/tvq",className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/linkedin.svg",alt:"LinkedIn"}))))))))}),f=function(e){return a.a.createElement(o.b,{query:"2219164485",render:function(t){return a.a.createElement(d,Object.assign({data:t},e))}})},p=function(e){var t=e.post,r="/"+t.frontmatter.slug+"/";return a.a.createElement(o.a,{to:r,className:"post-card"},a.a.createElement("header",{className:"post-card-header"},t.frontmatter.feature_image&&t.frontmatter.feature_image.childImageSharp&&a.a.createElement(l.a,{fluid:t.frontmatter.feature_image.childImageSharp.fluid,alt:t.frontmatter.title})),a.a.createElement("div",{className:"post-card-content"},t.frontmatter.tags&&a.a.createElement("span",{className:"post-card-tags"},a.a.createElement(o.a,{to:"/tag/"+t.frontmatter.tags[0].frontmatter.slug},t.frontmatter.tags[0].frontmatter.name)),a.a.createElement("h2",{className:"post-card-title"},t.frontmatter.title),a.a.createElement("section",{className:"post-card-excerpt"},t.excerpt),a.a.createElement("footer",{className:"post-card-footer"},a.a.createElement("div",{className:"post-card-footer-left"},a.a.createElement("time",{className:"post-full-meta-date postcard",dateTime:"{post.frontmatter.date}"},t.frontmatter.date)))))},T=function(e){var t=e.pageContext,r=t.previousPagePath,n=t.nextPagePath,i=t.humanPageNumber,s=t.numberOfPages;return a.a.createElement("nav",{className:"pagination",role:"navigation"},a.a.createElement("div",null,r&&a.a.createElement(o.a,{to:r,rel:"prev"},"Previous")),s>1&&a.a.createElement("div",{className:"pagination-location"},"Page ",i," of ",s),a.a.createElement("div",null,n&&a.a.createElement(o.a,{to:n,rel:"next"},"Next")))},m=function(e){var t=e.data,r=e.navClass;return a.a.createElement(a.a.Fragment,null,t.map((function(e,t){return e.url.match(/^\s?http(s?)/gi)?a.a.createElement("a",{className:r,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):a.a.createElement(o.a,{className:r,to:e.url,key:t},e.label)})))};m.defaultProps={navClass:"site-nav-item"};var E=m},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function d(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var s=a.prototype;return s.shouldComponentUpdate=function(e){return!o(e,this.props)},s.componentWillMount=function(){u.push(this),d()},s.componentDidUpdate=function(){d()},s.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},s.render=function(){return i.createElement(n,this.props)},a}(a.Component);return s(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(f,"canUseDOM",l),f}}},"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("VbXa")),o=n(r("PJYZ")),s=n(r("8OQS")),l=n(r("pVnL")),c=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=d(e),r=t.fluid?t.fluid.src:t.fixed.src;return f[r]||!1},T="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,E=m&&window.IntersectionObserver,h=new WeakMap;var g=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),h.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),h.set(e,t)),function(){r.unobserve(e),h.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+r+a+t+o+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:n,src:a},f,{onLoad:o,onError:u,ref:t,loading:d,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));S.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var b=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&p(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!T&&E&&!t.critical&&!r.seenBefore;var n=t.critical||m&&(T||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=g(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=t.fluid?t.fluid.src:t.fixed.src,f[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,T=e.fluid,m=e.fixed,E=e.backgroundColor,h=e.durationFadeIn,g=e.Tag,b=e.itemProp,y=e.loading,v=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:v?1:0,transition:_?"opacity "+h+"ms":"none"},s),N="boolean"==typeof E?"lightgray":E,O={transitionDelay:h+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},_&&O,s,f),I={title:t,alt:this.state.isVisible?"":r,style:P,className:p};if(T){var M=T;return c.default.createElement(g,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(g,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),N&&c.default.createElement(g,{title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&O)}),M.base64&&c.default.createElement(S,(0,l.default)({src:M.base64},I)),M.tracedSVG&&c.default.createElement(S,(0,l.default)({src:M.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,M.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),c.default.createElement(S,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:y})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:r,title:t,loading:y},M))}}))}if(m){var w=m,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:w.width,height:w.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(g,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(w.srcSet)},N&&c.default.createElement(g,{title:t,style:(0,l.default)({backgroundColor:N,width:w.width,opacity:this.state.imgLoaded?0:1,height:w.height},_&&O)}),w.base64&&c.default.createElement(S,(0,l.default)({src:w.base64},I)),w.tracedSVG&&c.default.createElement(S,(0,l.default)({src:w.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,w.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:w.srcSetWebp,sizes:w.sizes}),c.default.createElement(S,{alt:r,title:t,width:w.width,height:w.height,sizes:w.sizes,src:w.src,crossOrigin:this.props.crossOrigin,srcSet:w.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:y})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:r,title:t,loading:y},w))}}))}return null},t}(c.default.Component);b.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var y=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),v=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});b.propTypes={resolutions:y,sizes:v,fixed:y,fluid:v,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var _=b;t.default=_},Gytx:function(e,t){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(a=r?r.call(n,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},N0cg:function(e,t){e.exports={siteUrl:"https://quyentat.github.io",postsPerPage:12,siteTitleMeta:"Quyen Tat",siteDescriptionMeta:"Making the life much simpler and happier 🌟",siteTwitterHandle:"",siteFacebookHandle:"",language:"en",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"Quyen Tat",siteIcon:"/images/logo.png",backgroundColor:"#e9e9e9",themeColor:"#15171A",cover_image:"/images/default_cover.png",logo:"/images/logo.png",navigation:[{label:"Home",url:"/"},{label:"About",url:"/about"}],googleAnalyticsId:"262178815",disqusShortname:""}},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),s=d(r("8+s/")),l=d(r("bmMU")),c=r("v1p5"),u=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,h,g=(0,s.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),A=(m=g,h=E=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=s,t.titleAttributes=n({},o),t));case u.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case u.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),s=(0,c.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},Vl0y:function(e,t,r){},bmMU:function(e,t,r){"use strict";var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,l,c,u=n(t),d=n(r);if(u&&d){if((l=t.length)!=r.length)return!1;for(s=l;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,m=r instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==r.toString();var E=a(t);if((l=E.length)!==a(r).length)return!1;for(s=l;0!=s--;)if(!i.call(r,E[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=l;0!=s--;)if(!("_owner"===(c=E[s])&&t.$$typeof||e(t[c],r[c])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("RUBk"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("RUBk"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=l(r("q1tI")),o=l(r("YVoz")),s=r("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var c,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,s.TAG_NAMES.TITLE),r=E(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return E(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},m=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),l=0;l<i.length;l++){var c=i[l],u=(0,o.default)({},a[c],n[c]);a[c]=u}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},h=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){h(e)}),0)}),g=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},y=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;N(s.TAG_NAMES.BODY,n),N(s.TAG_NAMES.HTML,a),R(f,p);var T={baseTag:O(s.TAG_NAMES.BASE,r),linkTags:O(s.TAG_NAMES.LINK,i),metaTags:O(s.TAG_NAMES.META,o),noscriptTags:O(s.TAG_NAMES.NOSCRIPT,l),scriptTags:O(s.TAG_NAMES.SCRIPT,u),styleTags:O(s.TAG_NAMES.STYLE,d)},m={},E={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(E[e]=T[e].oldTags)})),t&&t(),c(e,m,E)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),N(s.TAG_NAMES.TITLE,t)},N=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var d=i.indexOf(c);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},O=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,a=I(r,n),[i.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),i=_(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+u(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){y&&S(y),e.defer?y=A((function(){v(e,(function(){y=null}))})):(v(e),y=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:M(s.TAG_NAMES.BASE,t,n),bodyAttributes:M(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(s.ATTRIBUTE_NAMES.HTML,a,n),link:M(s.TAG_NAMES.LINK,i,n),meta:M(s.TAG_NAMES.META,o,n),noscript:M(s.TAG_NAMES.NOSCRIPT,l,n),script:M(s.TAG_NAMES.SCRIPT,c,n),style:M(s.TAG_NAMES.STYLE,u,n),title:M(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:E(e,s.HELMET_PROPS.DEFER),encode:E(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=commons-865b46c5ce1b9e216e83.js.map