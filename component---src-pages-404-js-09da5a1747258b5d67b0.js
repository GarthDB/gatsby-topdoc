(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(137),c=n(138),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(s.a,{location:this.props.location},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=u},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(133),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(135),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(136))&&a.default||a},136:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(47),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},137:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(134),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?o.a.createElement("h1",null,o.a.createElement(s.Link,{to:"/"},a)):o.a.createElement("h3",null,o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",null,e,r)},t}(o.a.Component);t.a=c},138:function(e,t,n){"use strict";var a=n(139),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(140),u=n.n(c),l=n(134);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},bodyAttributes:{class:"spectrum spectrum--light"},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"stylesheet",href:Object(l.withPrefix)("css/docs.css")}),i.a.createElement("link",{rel:"stylesheet",href:Object(l.withPrefix)("spectrum-light.css")}),i.a.createElement("link",{rel:"stylesheet",href:Object(l.withPrefix)("css/vendor/prism.css"),"data-prism":!0}))},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},139:function(e){e.exports={data:{site:{siteMetadata:{title:"Spectrum CSS",description:"The standard CSS implementation of the Spectrum design language.",author:"Garth Braithwaite"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-09da5a1747258b5d67b0.js.map