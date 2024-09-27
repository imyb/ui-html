const _=s=>{const u=Array.isArray(s)?s:[s],D=[];u.forEach(m=>{const S=getComputedStyle(m).transitionProperty.split(","),A=getComputedStyle(m).transitionDuration.split(","),o=getComputedStyle(m).transitionDelay.split(",");S.forEach((n,i)=>{const l=S[i].trim(),d=parseFloat(A[i].trim()),L=parseFloat(o[i].trim()),e=d+L;D.push({element:m,propertyName:l,duration:d,delay:L,totalTime:e})})});const C=Math.max(...D.map(m=>m.totalTime)),y=D.filter(m=>m.totalTime==C)[0];if(C)return y};Element.prototype.onTransitionComplete=function(s){const u=this,D=_([u]),C=y=>{y.propertyName!==D.propertyName||y.target!==D.element||(s(),u.removeEventListener("transitionend",C))};D?u.addEventListener("transitionend",C):s()};Element.prototype.focusTrap=function(s){const u=this,D=m=>{if(m.key!=="Tab")return;const S=u.querySelectorAll("a, area, input, select, textarea, button, iframe, object, embed, [tabindex], [contenteditable]"),A=[];S.forEach(i=>{!i.hasAttribute("disabled")&&i.tabIndex>=0&&getComputedStyle(i).visibility!=="hidden"&&A.push(i)});const o=A[0],n=A[A.length-1];m.shiftKey?document.activeElement===o&&(m.preventDefault(),n.focus()):document.activeElement===n&&(m.preventDefault(),o.focus())},C=()=>{u.addEventListener("keydown",D)},y=()=>{u.removeEventListener("keydown",D)};switch(s){case"lock":C();break;case"unlock":y();break}};const M=function(){const s={TABNAV:'[data-ui="tabnav"]',TABLIST:'[role="tablist"]',TAB:'[role="tab"]',TABPANEL:'[role="tabpanel"]'},u=e=>{o(e.target)},D=e=>{l(e)},C=e=>{d(e)},y=()=>{document.querySelectorAll(s.TABNAV).length&&document.querySelectorAll(s.TABNAV).forEach(e=>{m(e)})},m=e=>{if(typeof e=="string"&&(e=document.querySelector(e)),!e||e.dataset.ui!=="tabnav"){console.error("tabNav : 유효한 DOM 요소인지 확인",e);return}e.config=e.config||{init:!1},!e.config.init&&(e.querySelectorAll(s.TAB).forEach(g=>{S(g)}),e.addEventListener("keydown",D),e.addEventListener("focusout",C),e.config.init=!0)},S=e=>{if(typeof e=="string"&&(e=document.querySelector(e)),!e||e.getAttribute("role")!=="tab"){console.error("tab : 유효한 DOM 요소인지 확인",e);return}if(e.config=e.config||{init:!1},e.config.init)return;const g=e.dataset.name,t=e.parentNode,a=A(e),c=t.classList.contains("is-active");a||console.warn(`연결 된 ${s.TABPANEL} 요소 없음`,e),g&&a&&(e.id||(e.id="___TAB___"+g),a.id||(a.id="___TABPANEL___"+g),e.setAttribute("aria-controls",a.id),a.setAttribute("aria-labelledby",e.id)),c?n(e):i(e),e.addEventListener("click",u),e.config.init=!0},A=e=>document.querySelector(`${s.TABPANEL}[data-name="${e.dataset.name}"]`),o=e=>{if(typeof e=="string"&&(e=document.querySelector(e)),!e||e.getAttribute("role")!=="tab"){console.error("tab : 유효한 DOM 요소인지 확인",e);return}const g=e.closest(s.TABLIST),t=e.parentNode,a=A(e),c=t.classList.contains("is-active"),r=e.hasAttribute("disabled");if(!g){console.error(`${s.TABLIST} : 유효한 DOM 요소인지 확인`,g);return}c||r||(a||console.warn(`연결 된 ${s.TABPANEL} 요소 없음`,e),n(e),L(e),g.querySelectorAll(s.TAB).forEach(p=>{p!==e&&i(p)}))},n=e=>{const g=e.parentNode,t=A(e);e.tabIndex=0,e.setAttribute("aria-selected",!0),g.classList.add("is-active"),t&&(t.classList.add("is-active"),t.setAttribute("aria-hidden",!1))},i=e=>{const g=e.parentNode,t=A(e);e.tabIndex=-1,e.setAttribute("aria-selected",!1),g.classList.remove("is-active"),t&&(t.classList.remove("is-active"),t.setAttribute("aria-hidden",!0))},l=e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();const g=e.target,t=g.closest(s.TABLIST),a=g.parentNode,c=t&&Array.from(t.children),r=t&&c.filter(O=>!O.firstElementChild.hasAttribute("disabled"));if(!t){console.error(`${s.TABLIST} : 유효한 DOM 요소인지 확인`,t);return}let p=r.indexOf(a),E=0;e.key==="ArrowRight"&&(E=p+1,E>=r.length&&(E=0)),e.key==="ArrowLeft"&&(E=p-1,E<0&&(E=r.length-1)),r[E].firstElementChild.focus(),r[E].firstElementChild.tabIndex=0,r.forEach((O,b)=>{b!==E&&(O.firstElementChild.tabIndex=-1)})}},d=e=>{const g=e.currentTarget;g.contains(e.relatedTarget)||g.querySelectorAll(s.TAB).forEach(t=>{t.getAttribute("aria-selected")==="true"?t.tabIndex=0:t.tabIndex=-1})},L=e=>{const g=e.closest(s.TABNAV),t=e.closest(s.TABLIST),a=e.parentNode;if(g.clientWidth>=t.offsetWidth)return;const c=a.offsetWidth+parseFloat(window.getComputedStyle(a).marginLeft)+parseFloat(window.getComputedStyle(a).marginRight),p=a.offsetLeft-parseFloat(window.getComputedStyle(a).marginLeft)-g.clientWidth/2+c/2;g.scrollTo({left:p,behavior:"smooth"})};return{init:y,setupTab:S,setupTabNav:m,change:o}},w=function(){const s={ACCORDION:'[data-ui="accordion"]',ACCORDION_ITEM:'[data-accordion="item"]',ACCORDION_TRIGGER:'[data-accordion="trigger"]',ACCORDION_PANEL:'[data-accordion="panel"]'},u=o=>{m(o.target)},D=()=>{document.querySelectorAll(s.ACCORDION).length&&document.querySelectorAll(s.ACCORDION).forEach(o=>{C(o)})},C=o=>{if(typeof o=="string"&&(o=document.querySelector(o)),!o||o.dataset.ui!=="accordion"){console.error("accordion : 유효한 DOM 요소인지 확인",o);return}o.config=o.config||{init:!1},!o.config.init&&(o.querySelectorAll(s.ACCORDION_TRIGGER).forEach(n=>{y(n)}),o.config.init=!0)},y=o=>{if(typeof o=="string"&&(o=document.querySelector(o)),!o||o.dataset.accordion!=="trigger"){console.error("accordionTrigger : 유효한 DOM 요소인지 확인",o);return}if(o.config=o.config||{init:!1},o.config.init)return;o.closest(s.ACCORDION);const n=o.closest(s.ACCORDION_ITEM),i=n&&n.querySelector(s.ACCORDION_PANEL),l=n&&n.classList.contains("is-active"),d=n&&n.classList.contains("is-disabled"),L=o.dataset.name;if(!n){console.error(`${s.ACCORDION_ITEM} : 유효한 DOM 요소인지 확인`);return}i||console.warn(`연결 된 ${s.ACCORDION_PANEL} 요소 없음`,o),i&&(o.id||(o.id="___ACCORDION_TRIGGER___"+L),i.id||(i.id="___ACCORDION_PANEL___"+L),o.setAttribute("aria-controls",i.id),i.setAttribute("aria-labelledby",o.id),d&&(o.disabled=!0),l?S(o):A(o)),o.addEventListener("click",u),o.config.init=!0},m=o=>{o.closest(s.ACCORDION);const n=o.closest(s.ACCORDION_ITEM);n&&n.querySelector(s.ACCORDION_PANEL),n&&n.classList.contains("is-disabled"),n&&n.classList.contains("is-active")?A(o):S(o)},S=o=>{if(typeof o=="string"&&(o=document.querySelector(o)),!o||o.dataset.accordion!=="trigger"){console.error("accordionTrigger : 유효한 DOM 요소인지 확인",o);return}const n=o.closest(s.ACCORDION),i=o.closest(s.ACCORDION_ITEM),l=i&&i.querySelector(s.ACCORDION_PANEL),d=i&&i.classList.contains("is-disabled"),L=i&&i.classList.contains("is-active"),e=l&&l.firstElementChild,g=l?e.offsetHeight+parseFloat(window.getComputedStyle(e).marginTop)+parseFloat(window.getComputedStyle(e).marginBottom):0;if(!i){console.error(`${s.ACCORDION_ITEM} : 유효한 DOM 요소인지 확인`);return}if(!l){console.warn(`연결 된 ${s.ACCORDION_PANEL} 요소 없음`,o);return}d&&!L||(i.classList.add("is-active"),o.setAttribute("aria-expanded",!0),l&&(l.setAttribute("aria-hidden",!1),l.style.maxHeight=g+"px"),!d&&n.dataset.type!=="toggle"&&n.querySelectorAll(s.ACCORDION_TRIGGER).forEach(t=>{t!==o&&A(t)}))},A=o=>{if(typeof o=="string"&&(o=document.querySelector(o)),!o||o.dataset.accordion!=="trigger"){console.error("accordionTrigger : 유효한 DOM 요소인지 확인",o);return}o.closest(s.ACCORDION);const n=o.closest(s.ACCORDION_ITEM),i=n&&n.querySelector(s.ACCORDION_PANEL),l=n&&n.classList.contains("is-disabled"),d=n&&n.classList.contains("is-active");n&&i&&(l&&d||(n.classList.remove("is-active"),o.setAttribute("aria-expanded",!1),i&&(i.setAttribute("aria-hidden",!0),i.style.maxHeight="")))};return{init:D,open:S,close:A}},P=()=>{const s={DROPDOWN:'[data-ui="dropdown"]',DROPDOWN_TOGGLE:'[data-dropdown="toggle"]',DROPDOWN_MENU:'[data-dropdown="menu"]',DROPDOWN_MENUITEM:".dropdown-item"};let u={};const D=t=>{const a=t.target.closest(s.DROPDOWN);o(a)},C=t=>{document.querySelectorAll(s.DROPDOWN).forEach(a=>{if(a.config&&!a.config.init)return;const c=a.querySelector(s.DROPDOWN_TOGGLE),r=a.querySelector(s.DROPDOWN_MENU);c.getAttribute("aria-expanded")=="true"&&(c.contains(t.target)||r.contains(t.target)||u.open&&u.open===a&&u.activeElement===document.activeElement||u.close&&u.close!==a&&u.activeElement===document.activeElement||i(a))})},y=()=>{document.querySelectorAll(s.DROPDOWN).forEach(t=>{t.config&&!t.config.init||!(t.querySelector(s.DROPDOWN_TOGGLE).getAttribute("aria-expanded")=="true")||l(t,t.state.direction)})},m=t=>{g(t)},S=()=>{document.querySelectorAll(s.DROPDOWN).length&&document.querySelectorAll(s.DROPDOWN).forEach(t=>{A(t)})},A=t=>{if(typeof t=="string"&&(t=document.querySelector(t)),!t||t.dataset.ui!=="dropdown"){console.error("dropdown : 유효한 DOM 요소인지 확인",t);return}if(t.config=t.config||{init:!1,direction:{}},t.config.init)return;t.config.direction={down:!0,up:!1,left:!1,right:!1,center:!1,alignstart:!0,alignend:!1,full:!1},t.dataset.direction&&t.dataset.direction.split(",").forEach(r=>{r=r.trim(),t.config.direction.hasOwnProperty(r)&&(t.config.direction[r]=!0,t.config.direction.down=!t.config.direction.up,t.config.direction.alignstart=!t.config.direction.alignend,t.config.direction.center&&(t.config.direction.left=!1,t.config.direction.right=!1,t.config.direction.alignstart=!1,t.config.direction.alignend=!1,t.config.direction.full=!1),t.config.direction.full&&(t.config.direction.left=!1,t.config.direction.right=!1,t.config.direction.center=!1,t.config.direction.alignstart=!1,t.config.direction.alignend=!1))}),t.state=t.state||{},t.state.direction=Object.assign({},t.config.direction);const a=t.querySelector(s.DROPDOWN_TOGGLE),c=t.querySelector(s.DROPDOWN_MENU);if(!a){console.error(`${s.DROPDOWN_TOGGLE} : 유효한 DOM 요소인지 확인`,t);return}if(!c){console.error(`${s.DROPDOWN_MENU} : 유효한 DOM 요소인지 확인`,t);return}a.setAttribute("aria-expanded",!1),c.setAttribute("aria-hidden",!0),a.addEventListener("click",D),t.removeEventListener("keydown",m),t.addEventListener("keydown",m),t.config.init=!0},o=(t,a)=>{if(typeof t=="string"&&(t=document.querySelector(t)),!t||t.dataset.ui!=="dropdown"){console.error("dropdown : 유효한 DOM 요소인지 확인",t);return}const c=t.querySelector(s.DROPDOWN_TOGGLE);t.querySelector(s.DROPDOWN_MENU);const r=c.getAttribute("aria-expanded")=="true";a?(u.activeElement=document.activeElement,a==="open"?(u.open=t,u.close=null,n(u.open)):(u.open=null,u.close=t,i(u.close))):(u={},r?i(t):n(t))},n=t=>{const a=t.querySelector(s.DROPDOWN_TOGGLE),c=t.querySelector(s.DROPDOWN_MENU);if(a.getAttribute("aria-expanded")=="true")return;Object.keys(t.config.direction).forEach(O=>{t.config.direction[O]&&t.classList.add(`drop-${O}`)}),t.state.menuWidth=c.offsetWidth,t.state.menuHeight=c.offsetHeight,l(t,t.config.direction),t.classList.add("is-expanded"),a.setAttribute("aria-expanded",!0),c.setAttribute("aria-hidden",!1);const p=()=>{t.removeEventListener("transitionend",p)};t.addEventListener("transitionend",p),Array.from(document.querySelectorAll(s.DROPDOWN)).filter(O=>O.classList.contains("is-expanded")).length&&(document.addEventListener("click",C),window.addEventListener("scroll",y),window.addEventListener("resize",y))},i=t=>{const a=t.querySelector(s.DROPDOWN_TOGGLE),c=t.querySelector(s.DROPDOWN_MENU);if(!(a.getAttribute("aria-expanded")=="true"))return;t.classList.remove("is-expanded");const p=()=>{a.setAttribute("aria-expanded",!1),c.setAttribute("aria-hidden",!0),Object.keys(t.config.direction).forEach(O=>{t.classList.remove(`drop-${O}`)}),c.style.transform="",c.style.right="",t.removeEventListener("transitionend",p)};t.addEventListener("transitionend",p),Array.from(document.querySelectorAll(s.DROPDOWN)).filter(O=>O.classList.contains("is-expanded")).length||(document.removeEventListener("click",C),window.removeEventListener("scroll",y),window.removeEventListener("resize",y))},l=(t,a)=>{t.querySelector(s.DROPDOWN_TOGGLE);const c=t.querySelector(s.DROPDOWN_MENU),r=Object.assign({},a),p=d(t,r);Object.keys(p).forEach(h=>{t.classList.toggle(`drop-${h}`,p[h])});const E=L(t,p),O=E.translateX,b=E.translateY,f=E.positionRight;c.style.transform=`translate(${O}, ${b})`,c.style.right=`${f}`,t.state.direction=p},d=(t,a)=>{const c=t.config.direction,r=a,p=t.querySelector(s.DROPDOWN_TOGGLE),E=t.querySelector(s.DROPDOWN_MENU);let O=document.documentElement.clientWidth,b=window.innerHeight,f=e(p),h=e(E);h.width=t.state.menuWidth,h.height=t.state.menuHeight,r.left=c.left,r.right=c.right,r.alignend=c.alignend,r.alignstart=c.alignstart,r.center=c.center,r.full=c.full;const R=(v,I)=>{I&&(r.up=!0,r.down=!1),v&&(r.up=!1,r.down=!0),!I&&!v&&(r.down=c.down,r.up=c.up),I&&v&&(r.down=c.down,r.up=c.up)};if(r.down||r.up){let v=f.bottom+h.height>b,I=f.top-h.height<0,T=f.left<h.width-f.width,N=O-f.right<h.width-f.width;R(I,v),N&&!T&&(console.log("UP/DOWN : rightOut && !leftOut"),r.alignend=!0,r.alignstart=!1),T&&!N&&(console.log("UP/DOWN : leftOut && !rightOut"),r.alignend=!1,r.alignstart=!0),T&&N&&(console.log("UP/DOWN : leftOut && rightOut"),r.center=!0),!N&&!T&&console.log("UP/DOWN : left/right In")}if(r.left||r.right){let v=f.top+h.height>b,I=f.bottom-h.height<0,T=f.left<h.width,N=O-f.right<h.width;R(I,v),T&&!N&&(console.log("LEFT/RIGHT : leftOut"),r.left=!1,r.right=!0,r.alignend=!1,r.alignstart=!1),N&&!T&&(console.log("LEFT/RIGHT : rightOut"),r.left=!0,r.right=!1,r.alignend=!1,r.alignstart=!1),T&&N&&(console.log("LEFT/RIGHT : leftOut && rightOut"),r.left=!1,r.right=!1),!T&&!N&&console.log("LEFT/RIGHT : left/right In")}if(r.center){let v=f.bottom+h.height>b,I=f.top-h.height<0,T=f.left+(f.width-h.width)/2<0,N=f.right-(f.width-h.width)/2>O;R(I,v),N&&!T&&(console.log("CENTER : rightOut && !leftOut"),r.alignend=!0,r.alignstart=!1),T&&!N&&(console.log("CENTER : leftOut && !rightOut"),r.alignend=!1,r.alignstart=!0),!N&&!T&&(console.log("CENTER : left/right In"),r.alignend=!1,r.alignstart=!1),T&&N&&(console.log("CENTER : leftOut && rightOut"),r.alignend=!1,r.alignstart=!1,r.full=!0)}if(r.alignend||r.alignstart){let v=f.bottom+h.height>b,I=f.top-h.height<0,T=f.left<h.width-f.width,N=O-f.right<h.width-f.width;R(I,v),N&&!T&&(console.log("ALIGN : rightOut"),r.alignend=!0,r.alignstart=!1,r.center=!1),T&&!N&&(console.log("ALIGN : leftOut"),r.alignend=!1,r.alignstart=!0,r.center=!1),T&&N&&(console.log("ALIGN : leftOut && rightOut"),r.alignend=!1,r.alignstart=!1,r.center=!1,r.full=!0),!N&&!T&&(console.log("ALIGN : left/right In"),r.center=!1)}return r.full&&(r.center=!1),r},L=(t,a)=>{const c=a,r=t.querySelector(s.DROPDOWN_TOGGLE),p=t.querySelector(s.DROPDOWN_MENU);let E=document.documentElement.clientWidth,O=e(r),b=e(p),f=0,h=0,R="";return(c.left||c.right)&&(c.left&&(f="-100%"),c.right&&(f=O.width+"px"),c.up&&(h=O.height+"px"),c.down&&(h=-O.height+"px")),c.center&&(f="-50%"),c.alignend&&(f=O.width-b.width+"px"),c.full&&(f=-O.left+"px",h=0,R=O.width-E+"px"),{translateX:f,translateY:h,positionRight:R}},e=t=>{const a={};return a.width=t.offsetWidth,a.height=t.offsetHeight,a.outerWidth=t.offsetWidth+parseFloat(window.getComputedStyle(t).marginLeft)+parseFloat(window.getComputedStyle(t).marginRight),a.outerHeight=t.offsetHeight+parseFloat(window.getComputedStyle(t).marginTop)+parseFloat(window.getComputedStyle(t).marginBottom),a.left=t.getBoundingClientRect().left,a.right=t.getBoundingClientRect().right,a.top=t.getBoundingClientRect().top,a.bottom=t.getBoundingClientRect().bottom,a},g=t=>{const a=t.target.closest(s.DROPDOWN),c=a.querySelector(s.DROPDOWN_TOGGLE),p=a.querySelector(s.DROPDOWN_MENU).querySelectorAll(s.DROPDOWN_MENUITEM),E=Array.from(p).filter(h=>!h.hasAttribute("disabled")),O=E[0],b=E[E.length-1];let f=E.indexOf(document.activeElement);t.key==="ArrowDown"&&(t.preventDefault(),f<0?(n(a),O.focus()):f<E.length-1&&(f++,E[f].focus())),t.key==="ArrowUp"&&(t.preventDefault(),f<0?(n(a),b.focus()):f>0&&(f--,E[f].focus())),t.key==="Tab"&&(t.target===c&&t.shiftKey||t.target===b&&!t.shiftKey)&&i(a),t.key==="Escape"&&(i(a),c.focus())};return{init:S,setup:A,toggle:o}},q=function(){const s={POTAL:"#app",MODAL:'[data-ui="modal"]',MODAL_CLOSE:'[data-modal="close"]',MODAL_LABEL:'[data-modal="label"]'},u=n=>{const i=n.target.closest(s.MODAL);o(i)},D=n=>{const i=n.target.closest(s.MODAL);if(!i.querySelector(".modal-window").contains(n.target)){if(i.classList.contains("lock")){y(i);return}o(i)}},C=n=>{const i=n.target.closest(s.MODAL);n.key==="Escape"&&(i.classList.contains("lock")?y(i):o(i))},y=n=>{n.classList.add("lockShake");const i=()=>{n.classList.remove("lockShake"),n.removeEventListener("animationend",i)};n.addEventListener("animationend",i)},m=()=>window.innerWidth-document.documentElement.clientWidth,S=()=>{let n=[];return document.querySelectorAll(s.MODAL).forEach(i=>{i.classList.contains("is-open")&&n.push(i)}),n},A=n=>{if(typeof n=="string"&&(n=document.querySelector(n)),!n||n.dataset.ui!=="modal"){console.error("modal : 유효한 DOM 요소인지 확인",n);return}n.state=n.state||{},n.state.activeElement=document.activeElement;const i=n.querySelector(s.MODAL_LABEL),l=n.classList.contains("is-open"),d=m();l||(document.querySelector(s.POTAL).insertAdjacentElement("beforeend",n),i&&!i.id&&(i.id="__MODAL_LABEL__"+n.id),n.setAttribute("role","dialog"),n.setAttribute("aria-modal",!0),n.setAttribute("aria-labelledby",i.id),n.tabIndex=-1,n.classList.add("is-show"),n.offsetHeight,n.classList.add("is-open"),document.body.classList.add("modal-open"),document.body.style.overflow="hidden",d&&(document.body.style.paddingRight=d+"px"),n.focus(),n.focusTrap("lock"),n.dispatchEvent(new CustomEvent("modal:open")),n.onTransitionComplete(()=>{n.dispatchEvent(new CustomEvent("modal:opened"))}),n.querySelectorAll(s.MODAL_CLOSE).forEach(L=>{L.addEventListener("click",u)}),n.addEventListener("click",D),n.addEventListener("keydown",C))},o=n=>{if(typeof n=="string"&&(n=document.querySelector(n)),!n||n.dataset.ui!=="modal"){console.error("modal : 유효한 DOM 요소인지 확인",n);return}n.state=n.state||{},n.classList.contains("is-open")&&(n.classList.remove("is-open"),n.focusTrap("unlock"),n.state.activeElement.focus(),n.dispatchEvent(new CustomEvent("modal:close")),n.onTransitionComplete(()=>{n.classList.remove("is-show"),n.dispatchEvent(new CustomEvent("modal:closed")),S().length||(document.body.style.overflow="",document.body.style.paddingRight="",document.body.classList.remove("modal-open"))}),n.querySelectorAll(s.MODAL_CLOSE).forEach(l=>{l.removeEventListener("click",u)}),n.removeEventListener("click",D),n.removeEventListener("keydown",C))};return{open:A,close:o}},x=()=>{const s={TOAST:'[data-ui="toast"]',TOAST_CONTAINER:'[data-toast="container"]',TOAST_CLOSE:'[data-toast="close"]'},u=[],D=i=>{const l=i.target.closest(s.TOAST);A(l)},C=()=>{const i=document.querySelector(s.TOAST_CONTAINER);if(i)return i;const l=document.createElement("div");return l.dataset.toast="container",l.classList.add("toast-container"),l.tabIndex=-1,document.body.insertAdjacentElement("beforeend",l),l},y=(i,l)=>{const d=document.createElement("div"),L=`
      <div class="toast-window">
        <div class="toast-msg">${i}</div>
          <button type="button" class="toast-close" data-toast="close" aria-label="close"></button>
      </div>
    `;return d.dataset.ui="toast",d.classList.add("toast"),l.stack&&d.classList.add("is-stack"),l.addClass&&d.classList.add(l.addClass),d.setAttribute("role","alret"),d.setAttribute("aria-live","assertive"),d.setAttribute("aria-atomic",!0),d.tabIndex=0,d.insertAdjacentHTML("beforeend",L),l.addClose||d.querySelector(s.TOAST_CLOSE).remove(),d},m=()=>{const i=[];return document.querySelectorAll(s.TOAST).forEach(l=>{l.classList.contains("is-open")&&i.push(l)}),i},S=()=>{m().forEach(l=>{A(l)})},A=i=>{if(!i){S();return}i.isImmediate=!0,o(i)},o=i=>{const l=i.closest(s.TOAST_CONTAINER),d=u.indexOf(i);i.timer=null,!i.requstClose&&(d!==0&&!i.isImmediate||(i.requstClose=!0,i.style.maxHeight=0,i.classList.remove("is-open"),i.isImmediate&&u.splice(d,1),i.onTransitionComplete(()=>{i.isImmediate||u.splice(d,1);const L=u[d];L&&!L.timer&&!i.isImmediate&&o(L),i.remove(),l&&!u.length&&l.remove(),i.config.onClosed&&typeof i.config.onClosed=="function"&&i.config.onClosed(),i.querySelectorAll(s.TOAST_CLOSE).forEach(e=>{e.addEventListener("click",D)})})))};return{open:(i,l)=>{l=Object.assign({},{addClass:"",addClose:!1,stack:!1,timeout:5e3,onOpened:function(){},onClosed:function(){}},l);const L=C(),e=y(i,l);e.config=e.config||{},e.timer=null,e.activeElement=document.activeElement,e.isImmediate=!1,e.config=Object.assign({},l),L.insertAdjacentElement("beforeend",e),u.push(e),e.offsetHeight,e.classList.add("is-open"),e.style.maxHeight=e.offsetHeight+"px",e.onTransitionComplete(()=>{e.config.onOpened&&typeof e.config.onOpened=="function"&&e.config.onOpened()}),e.config.stack||m().forEach(t=>{t!==e&&A(t)}),e.timer=setTimeout(()=>{o(e)},e.config.timeout),e.querySelectorAll(s.TOAST_CLOSE).forEach(g=>{g.addEventListener("click",D)})},close:A,closeAll:S}},k=M(),W=w(),G=P(),B=q(),H=x();export{W as a,H as b,G as d,B as m,k as t};
