"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5206],{40465:function(e,i,n){n.d(i,{mQ:function(){return x},ck:function(){return N},__:function(){return _},NN:function(){return S},BA:function(){return h},Rp:function(){return b},ms:function(){return Y}});var t=n(87462),a=n(63366),r=n(15007),o=n(75900),s=n.n(o),l=n(12036),c=n(77158),m=n(72390),d=["orientation","isQuiet","children","className","onFontsReady"],u=["elementType","isSelected","className","children","icon","label"],p=["elementType","icon","isSelected","className","children","iconSize"],v=["className"],f=["elementType","isHidden","className","children"],g=["theme","orientation","className"];var h=function(e,i){e.current.style.transform="translate("+i.current.offsetLeft+"px, 0px)",e.current.style.width=i.current.offsetWidth+"px"},b=function(e,i){e.current.style.transition=i?"":"none"},y="480px",w=function(e){var i;return"img"===(null==e||null===(i=e.props)||void 0===i?void 0:i.mdxType)?(0,r.cloneElement)(e,{loading:"eager"}):e},z=function(e){var i=e.image,n=void 0===i?"":i,t=e.styles,a=void 0===t?"":t;return n?(0,r.cloneElement)(n,{children:(0,m.ve)(n.props.children,w),css:(0,l.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",a,";","")}):null},Z=function(e){var i=e.icon,n=e.styles;return i?(0,r.cloneElement)(i,{alt:"",css:(0,l.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",n,";","")}):null},x=(0,r.forwardRef)((function(e,i){var n=e.orientation,o=void 0===n?"horizontal":n,c=e.isQuiet,m=void 0===c||c,u=e.children,p=e.className,v=e.onFontsReady,f=(0,a.Z)(e,d);return(0,r.useEffect)((function(){document.fonts.ready.then((function(){v&&v()}))}),[v]),(0,l.tZ)("div",(0,t.Z)({ref:i},f,{role:"tablist","aria-orientation":o,className:s()(p,"spectrum-Tabs","spectrum-Tabs--"+o,{"spectrum-Tabs--quiet":m})}),u)})),N=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.isSelected,m=void 0!==o&&o,d=e.className,p=e.children,v=e.icon,f=e.label,g=(0,a.Z)(e,u),h=r,b=(0,c.ZP)();return(0,l.tZ)(h,(0,t.Z)({},g,{ref:i,role:"tab","aria-selected":m,"aria-controls":b,className:s()(d,"spectrum-Tabs-item",{"is-selected":m})}),v?(0,l.tZ)(k,{icon:v,isSelected:m}):null,f?(0,l.tZ)(_,null," ",f," "):null,p)})),T={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},k=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.icon,c=e.isSelected,m=e.className,d=(e.children,e.iconSize),u=void 0===d?"xl":d,v=(0,a.Z)(e,p),f=r;return(0,l.tZ)(f,(0,t.Z)({},v,{ref:i,className:s()(m,"spectrum-Icon",{"is-selected":c}),css:T}),o?function(e,i,n){var t,a,r;return"img"===(null==e||null===(t=e.props)||void 0===t||null===(a=t.children)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.mdxType)?(0,l.tZ)(z,{image:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+n)}):(0,l.tZ)(Z,{icon:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+n)})}(o,m,u):null)})),R={name:"pwo431",styles:"transition-property:transform,width"},S=(0,r.forwardRef)((function(e,i){var n=e.className,r=(0,a.Z)(e,v);return(0,l.tZ)("div",(0,t.Z)({},r,{ref:i,className:s()(n,"spectrum-Tabs-selectionIndicator"),css:R}))})),_=function(e){var i=e.children;return(0,l.tZ)("span",{className:"spectrum-Tabs-itemLabel"},i)},I=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.isHidden,c=e.className,m=e.children,d=(0,a.Z)(e,f),u=r;return(0,l.tZ)(u,(0,t.Z)({},d,{ref:i,hidden:o,className:s()(c)}),m)})),M={name:"1v2o2zd",styles:"background:var(--spectrum-global-color-gray-100);max-width:100%;margin:0;padding-bottom:calc(var(--spectrum-global-dimension-size-1250) + var(--spectrum-global-dimension-size-250))"},Y=function(e){var i=e.theme,n=void 0===i?"light":i,t=e.orientation,o=void 0===t?"horizontal":t,d=e.className,u=(0,a.Z)(e,g),p=(0,r.useState)([])[0],v=(0,r.useRef)(null),f=(0,r.useState)({tab:0}),b=f[0],w=f[1],z=Object.keys(u).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,i){var n,t;return{heading:(null==u||null===(n=u["heading"+i])||void 0===n||null===(t=n.props)||void 0===t?void 0:t.children)||(null==u?void 0:u.heading),content:(null==u?void 0:u["content"+i])||(null==u?void 0:u.content),image:(null==u?void 0:u["image"+i])||(null==u?void 0:u.image)}})),Z=function(e){void 0===e&&(e=b.tab);var i=p.filter((function(e){return null==e?void 0:e.current}))[e];h(v,i)};return(0,l.tZ)("section",{className:s()(d,"tabsBlock spectrum--"+n),css:M},(0,l.tZ)("div",{css:(0,l.iv)("display:","vertical"===o?"inline-flex":"",";@media only screen and (min-width: ",m.LU,"){max-width:",m.Av,";margin:0 auto!important;}@media only screen and (max-width: ",y,"){flex-direction:column;}","")},(0,l.tZ)("div",{css:(0,l.iv)("display:","vertical"===o?"grid":"initial",";position:relative;grid-template-columns:300px calc(100% - 300px);margin-top:var(--spectrum-global-dimension-size-300);width:",(0,m.MY)(12),"!important;@media only screen and (max-width: ",y,"){display:initial!important;width:",(0,m.MY)(2.5),"!important;}@media only screen and (device-width: ",m.q9,"){width:",(0,m.MY)(6.4),"!important;}@media only screen and (device-width: ",m.LU,"){width:",(0,m.MY)(8),"!important;}","")},(null==z?void 0:z.length)>0?(0,l.tZ)(x,{orientation:o,isQuiet:!0,onFontsReady:Z},z.map((function(e,i){var n=(0,r.createRef)();p.push(n);var t=b.tab===i,a=(0,c.ZP)();return(0,l.tZ)(N,{className:"tabItem",key:"tabItem_"+i,tabIndex:0,ref:n,isSelected:t,"aria-controls":a,label:(0,l.tZ)("b",null,e.heading),icon:e.image,onClick:function(){w({tab:i}),Z(i)},css:(0,l.iv)("text-align:left;white-space:normal;width:calc(\n                        var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600)\n                      )!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===o?"2.4rem !important":"0rem",";display:flex!important;padding:var(--spectrum-global-dimension-size-125)!important;height:auto!important;line-height:initial;.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;}@media only screen and (max-width: ",y,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (min-width: ",m.LU,"){width:calc(\n                          var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-750)\n                        )!important;left:var(--spectrum-global-dimension-size-250)!important;}","")})})),(0,l.tZ)(S,{ref:v})):null,(null==z?void 0:z.length)>0?z.map((function(e,i){var n=b.tab===i;return(0,l.tZ)(I,{key:"tabView_"+i,className:"tabView",isHidden:!n,css:(0,l.iv)("text-align:left;padding:0 0 var(--spectrum-global-dimension-size-100) 0!important;max-width:",(0,m.MY)(8.5),"!important;@media only screen and (max-width: ",y,"){padding-left:inherit!important;max-width:",(0,m.MY)(3),"!important;}@media only screen and (device-width: ",m.q9,"){max-width:",(0,m.MY)(3.5),"!important;}@media only screen and (device-width: ",m.LU,"){max-width:",(0,m.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},e.content?e.content:null)})):null)))}}}]);
//# sourceMappingURL=3f943334-9827504cfa2e4c5d2136.js.map