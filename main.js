import{a as G,c as j}from"./chunk-E5KB4XTI.js";import"./chunk-GI7LLYGM.js";import{a as K,b as X,c as b,d as M,e as Y,f as B}from"./chunk-WLUXLVSZ.js";typeof globalThis>"u"&&(window.globalThis=window);var J="fresh-partial",P="f-partial",I="f-loading",E="f-client-nav",W="data-fresh-key",L="data-current",_="data-ancestor";function v(t,e){let n=new URL(e,"http://localhost").pathname;return n!=="/"&&n.endsWith("/")&&(n=n.slice(0,-1)),t!=="/"&&t.endsWith("/")&&(t=t.slice(0,-1)),t===n?2:t.startsWith(n+"/")||n==="/"?1:0}function Q(t,e){let n=t.props,o=n.href;if(typeof o=="string"&&o.startsWith("/")){let i=v(e,o);i===2?(n[L]="true",n["aria-current"]="page"):i===1&&(n[_]="true",n["aria-current"]="true")}}function de(t,e,n){let o=t.__k={_frshRootFrag:!0,nodeType:1,parentNode:t,nextSibling:null,get firstChild(){let i=e.nextSibling;return i===n?null:i},get childNodes(){let i=[],s=e.nextSibling;for(;s!==null&&s!==n;)i.push(s),s=s.nextSibling;return i},insertBefore(i,s){t.insertBefore(i,s!=null?s:n)},appendChild(i){t.insertBefore(i,n)},removeChild(i){t.removeChild(i)},contains(i){if(i===null)return!1;let s=o.childNodes;for(let r=0;r<s.length;r++)if(s[r].contains(i))return!0;return!1}};return o}function ne(t){return t.nodeType===Node.COMMENT_NODE}function ce(t){return t.nodeType===Node.TEXT_NODE}function re(t){return t.nodeType===Node.ELEMENT_NODE&&!("_frshRootFrag"in t)}function Le(t,e){let n=[];U(t,e,[],[b(M,null)],document.body,n);for(let o=0;o<n.length;o++){let{vnode:i,rootFragment:s}=n[o],r=()=>{B(i,s)};"scheduler"in window?scheduler.postTask(r):setTimeout(r,0)}}function oe(t){return t.children}oe.displayName="PreactServerComponent";function S(t,e){let n=t.props;n.children==null?n.children=e:Array.isArray(n.children)?n.children.push(e):n.children=[n.children,e]}var z=class extends Y{componentDidMount(){ie.set(this.props.name,this)}render(){return this.props.children}};var Z=!1,ie=new Map;function $(t){let{startNode:e,endNode:n}=t,o=n.parentNode;if(!Z&&e!==null&&e.nodeType===Node.COMMENT_NODE){let i=new Text("");t.startNode=i,o.insertBefore(i,e),e.remove()}if(!Z&&n!==null&&n.nodeType===Node.COMMENT_NODE){let i=new Text("");t.endNode=i,o.insertBefore(i,n),n.remove()}}function k(t,e,n,o,i,s){let[r,l]=i.slice(6).split(":"),a="#frsh-slot-".concat(r,"-").concat(l,"-children"),d=document.querySelector(a);if(d!==null){n.push({kind:1,endNode:null,startNode:null,text:i.slice(1)});let c=d.content.cloneNode(!0);U(t,e,n,o,c,s),n.pop()}}function U(t,e,n,o,i,s){let r=i;for(;r!==null;){let l=n.length>0?n[n.length-1]:null;if(ne(r)){let a=r.data;if(a.startsWith("!--")&&(a=a.slice(3,-2)),a.startsWith("frsh-slot"))n.push({startNode:r,text:a,endNode:null,kind:1}),o.push(b(oe,{id:a}));else if(a.startsWith("frsh-partial")){let[d,c,f,m]=a.split(":");n.push({startNode:r,text:c,endNode:null,kind:2}),o.push(b(z,{name:c,key:m,mode:+f}))}else if(a.startsWith("frsh-key:")){let d=a.slice(9);o.push(b(M,{key:d}))}else if(a.startsWith("/frsh-key:")){let d=o.pop(),c=o[o.length-1];S(c,d),r=r.nextSibling;continue}else if(l!==null&&(a.startsWith("/frsh")||l.text===a)){if(l.endNode=r,n.pop(),l.kind===1){let d=o.pop(),c=o[o.length-1];c.props.children=d,$(l),r=l.endNode.nextSibling;continue}else if(l!==null&&(l.kind===0||l.kind===2))if(n.length===0){let d=o[o.length-1];d.props.children==null&&k(t,e,n,o,a,s),o.pop();let c=r.parentNode;$(l);let f=de(c,l.startNode,l.endNode);s.push({vnode:d,marker:l,rootFragment:f}),r=l.endNode.nextSibling;continue}else{let d=o[o.length-1];d&&d.props.children==null?(k(t,e,n,o,a,s),d.props.children==null&&o.pop()):o.pop(),l.endNode=r,$(l);let c=o[o.length-1];S(c,d),r=l.endNode.nextSibling;continue}}else if(a.startsWith("frsh")){let[d,c,f]=a.slice(5).split(":"),m=e[Number(c)];n.push({startNode:r,endNode:null,text:a,kind:0});let g=b(t[d],m);f&&(g.key=f),o.push(g)}}else if(ce(r)){let a=o[o.length-1];l!==null&&(l.kind===1||l.kind===2)&&S(a,r.data)}else{let a=o[o.length-1];if(re(r))if(l!==null&&(l.kind===1||l.kind===2)){let c={children:r.childNodes.length<=1?null:[]},f=!1;for(let g=0;g<r.attributes.length;g++){let y=r.attributes[g];if(y.nodeName===W){f=!0,c.key=y.nodeValue;continue}else if(y.nodeName===I){let C=y.nodeValue,h=e[Number(C)][I].value;r._freshIndicator=h}c[y.nodeName]=typeof r[y.nodeName]=="boolean"?!0:y.nodeValue}f&&r.removeAttribute(W);let m=b(r.localName,c);S(a,m),o.push(m)}else{let d=r.getAttribute(I);if(d!==null){let c=e[Number(d)][I].value;r._freshIndicator=c}}r.firstChild&&r.nodeName!=="SCRIPT"&&U(t,e,n,o,r.firstChild,s),l!==null&&l.kind!==0&&o.pop()}r!==null&&(r=r.nextSibling)}}var ue="Unable to process partial response.";async function V(t,e={}){e.redirect="follow",t.searchParams.set(J,"true");let n=await fetch(t,e);await fe(n)}function se(t){document.querySelectorAll("a").forEach(e=>{let n=v(t.pathname,e.href);n===2?(e.setAttribute(L,"true"),e.setAttribute("aria-current","page"),e.removeAttribute(_)):n===1?(e.setAttribute(_,"true"),e.setAttribute("aria-current","true"),e.removeAttribute(L)):(e.removeAttribute(L),e.removeAttribute(_),e.removeAttribute("aria-current"))})}function le(t,e,n,o){var l;let i=null,s=o.firstChild,r=0;for(;s!==null;){if(ne(s)){let a=s.data;if(a.startsWith("frsh-partial"))i=s,r++;else if(a.startsWith("/frsh-partial")){r--;let d={_frshRootFrag:!0,nodeType:1,nextSibling:null,firstChild:i,parentNode:o,get childNodes(){let c=[i],f=i;for(;(f=f.nextSibling)!==null;)c.push(f);return c}};U(e,(l=n[0])!=null?l:[],[],[b(M,null)],d,t)}}else r===0&&re(s)&&le(t,e,n,s);s=s.nextSibling}}var F=class extends Error{};async function fe(t){var y,C;let e=t.headers.get("Content-Type"),n=t.headers.get("X-Fresh-UUID");if(e!=="text/html; charset=utf-8")throw new Error(ue);let o=await t.text(),i=new DOMParser().parseFromString(o,"text/html"),s=[],r={},l=i.getElementById("__FRSH_PARTIAL_DATA_".concat(n)),a=null;l!==null&&(a=JSON.parse(l.textContent),s.push(...Array.from(Object.entries(a.islands)).map(async h=>{let p=await import("".concat(h[1].url));r[h[0]]=p[h[1].export]})));let d=(y=i.getElementById("__FRSH_STATE_".concat(n)))==null?void 0:y.textContent,c=[[],[]],f;a!==null&&a.signals!==null&&s.push(import(a.signals).then(h=>{f=h.signal}));let m;d&&a&&a.deserializer!==null&&s.push(import(a.deserializer).then(h=>m=h.deserialize)),await Promise.all(s),d&&(c=m?m(d,f):(C=JSON.parse(d))==null?void 0:C.v);let g=[];if(le(g,r,c,i.body),g.length===0)throw new F("Found no partials in HTML response. Please make sure to render at least one partial. Requested url: ".concat(t.url));i.title&&(document.title=i.title),Array.from(i.head.childNodes).forEach(h=>{let p=h;if(p.nodeName!=="TITLE"){if(p.nodeName==="META"){let u=p;if(u.hasAttribute("charset"))return;let T=u.name;if(T!==""){let A=document.head.querySelector('meta[name="'.concat(T,'"]'));A!==null?A.content!==u.content&&(A.content=u.content):document.head.appendChild(u)}else{let A=p.getAttribute("property"),N=document.head.querySelector('meta[property="'.concat(A,'"]'));N!==null?N.content!==u.content&&(N.content=u.content):document.head.appendChild(u)}}else if(p.nodeName==="LINK"){let u=p;if(u.rel==="modulepreload")return;u.rel==="stylesheet"&&Array.from(document.head.querySelectorAll("link")).find(A=>A.href===u.href)===void 0&&document.head.appendChild(u)}else if(p.nodeName==="SCRIPT"){if(p.src==="".concat(G,"/refresh.js"))return}else if(p.nodeName==="STYLE"){let u=p;u.id===""&&document.head.appendChild(u)}}});for(let h=0;h<g.length;h++){let{vnode:p,marker:u}=g[h],T=ie.get(u.text);if(!T)console.warn('Partial "'.concat(u.text,'" not found. Skipping...'));else{let A=p.props.mode,N=p.props.children;if(A===0)T.props.children=N;else{let O=T.props.children,x=Array.isArray(O)?O:[O];if(A===1)x.push(N);else{X(N)||(N=b(M,null,N)),N.key==null&&(N.key=x.length);let q=T.__v.__k;if(Array.isArray(q))for(let R=0;R<q.length;R++){let w=q[R];if(w.key==null)w.key=R;else break}for(let R=0;R<x.length;R++){let w=x[R];if(w.key==null)w.key=R;else break}x.unshift(N)}T.props.children=x}T.setState({})}}}var ee=K.vnode;K.vnode=t=>{if(j(t),typeof t.type=="string"&&(t.type==="a"&&Q(t,location.pathname),E in t.props)){let e=t.props[E];typeof e=="boolean"&&(t.props[E]=String(e))}ee&&ee(t)};function H(t){if(t===null)return document.querySelector("[".concat(E,'="true"]'))!==null;let e=t.closest("[".concat(E,"]"));return e===null?!1:e.getAttribute(E)==="true"}var te,D=((te=history.state)==null?void 0:te.index)||0;if(!history.state){let t={index:D,scrollX,scrollY};history.replaceState(t,document.title)}function ae(t){if(t.href!==globalThis.location.href){let e={index:D,scrollX:globalThis.scrollX,scrollY:globalThis.scrollY};history.replaceState({...e},"",location.href),D++,e.scrollX=0,e.scrollY=0,history.pushState(e,"",t.href)}}document.addEventListener("click",async t=>{var n;let e=t.target;if(e&&(e instanceof HTMLElement||e instanceof SVGElement)){let o=e;if(e.nodeName!=="A"&&(e=e.closest("a")),e===null&&(e=o.closest("button")),e&&e instanceof HTMLAnchorElement&&e.href&&(!e.target||e.target==="_self")&&e.origin===location.origin&&t.button===0&&!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button)&&!t.defaultPrevented){let i=e.getAttribute(P);if((n=e.getAttribute("href"))!=null&&n.startsWith("#")||!H(e))return;let s=e._freshIndicator;s!==void 0&&(s.value=!0),t.preventDefault();let r=new URL(e.href);try{ae(r);let l=new URL(i||r.href,location.href);await V(l),se(r),scrollTo({left:0,top:0,behavior:"instant"})}finally{s!==void 0&&(s.value=!1)}}else if(e&&e instanceof HTMLButtonElement&&(e.type!=="submit"||e.form===null)){let i=e.getAttribute(P);if(i===null||!H(e))return;let s=new URL(i,location.href);await V(s)}}});addEventListener("popstate",async t=>{var i,s,r;if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}let e=history.state;if(D=(i=e.index)!=null?i:D+1,!H(null)){location.reload();return}history.scrollRestoration&&(history.scrollRestoration="manual");let o=new URL(location.href,location.origin);try{await V(o),se(o),scrollTo({left:(s=e.scrollX)!=null?s:0,top:(r=e.scrollY)!=null?r:0,behavior:"instant"})}catch(l){if(l instanceof F){location.reload();return}throw l}});document.addEventListener("submit",async t=>{var n,o,i,s,r,l,a,d;let e=t.target;if(e!==null&&e instanceof HTMLFormElement&&!t.defaultPrevented){if(!H(e)||t.submitter!==null&&!H(t.submitter))return;let c=(i=(o=(n=t.submitter)==null?void 0:n.getAttribute("formmethod"))==null?void 0:o.toLowerCase())!=null?i:e.method.toLowerCase();if(c!=="get"&&c!=="post"&&c!=="dialog")return;let f=(d=(a=(l=(s=t.submitter)==null?void 0:s.getAttribute(P))!=null?l:(r=t.submitter)==null?void 0:r.getAttribute("formaction"))!=null?a:e.getAttribute(P))!=null?d:e.action;if(f!==""){t.preventDefault();let m=new URL(f,location.href),g;c==="get"?new URLSearchParams(new FormData(e)).forEach((C,h)=>m.searchParams.set(h,C)):g={body:new FormData(e),method:c},ae(m),await V(m,g)}}});export{fe as applyPartials,Le as revive};
