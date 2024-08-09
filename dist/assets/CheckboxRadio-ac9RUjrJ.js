import{_ as e}from"./UicCode-BOUz532x.js";import{c as n,a,b as l,w as c,d as s,e as p,o as t,t as i}from"./index-__zBq0ud.js";const d={class:"uic-body"},b=s("h1",{class:"uic-title"},"Checkbox / Radio",-1),o=s("h2",{class:"uic-title"},"Checkbox",-1),u=p('<div class="uic-preview"><div class="input-checkgroup"><label class="input-check"><input type="checkbox"> <span class="label">checkbox</span></label> <label class="input-check"><input type="checkbox" checked> <span class="label">체크박스 checked</span></label> <label class="input-check"><input type="checkbox" disabled> <span class="label">체크박스 disabled</span></label> <label class="input-check"><input type="checkbox" checked disabled> <span class="label">체크박스 checked disabled</span></label></div></div>',1),h=s("h2",{class:"uic-title"},"Radio",-1),r=p('<div class="uic-preview"><div class="input-checkgroup"><label class="input-radio"><input type="radio" name="radio1"> <span class="label">radio</span></label> <label class="input-radio"><input type="radio" name="radio1" checked> <span class="label">라디오 checked</span></label> <label class="input-radio"><input type="radio" name="radio2" disabled> <span class="label">라디오 disabled</span></label> <label class="input-radio"><input type="radio" name="radio2" checked disabled> <span class="label">라디오 checked disabled</span></label></div></div>',1),k=s("h2",{class:"uic-title"},"Switch",-1),v=p('<div class="uic-preview"><div class="input-checkgroup"><label class="input-switch"><input type="checkbox" aria-label="switch"> <span class="lever"></span></label> <label class="input-switch"><input type="checkbox" checked> <span class="lever"></span> <span class="label">switch checked</span></label> <label class="input-switch"><input type="checkbox" disabled> <span class="lever"></span> <span class="label">switch disabled</span></label> <label class="input-switch"><input type="checkbox" checked disabled> <span class="lever"></span> <span class="label">switch checked disabled</span></label></div></div>',1),_=s("h2",{class:"uic-title"},"Button",-1),x=s("div",{class:"uic-preview"},`
      preview
    `,-1),y=s("h2",{class:"uic-title"},"Check Group",-1),w=s("div",{class:"uic-desc"},`
      기본 수직 방향으로 정렬.
    `,-1),m=p('<div class="uic-preview"><div class="input-checkgroup"><label class="input-check"><input type="checkbox" checked> <span class="label">checkbox</span></label> <label class="input-check"><input type="checkbox"> <span class="label">checkbox</span></label></div> <div class="input-checkgroup"><label class="input-radio"><input type="radio" name="radio3" checked> <span class="label">radio</span></label> <label class="input-radio"><input type="radio" name="radio3"> <span class="label">radio</span></label></div> <div class="input-checkgroup"><label class="input-switch"><input type="checkbox" checked> <span class="lever"></span></label> <label class="input-switch"><input type="checkbox"> <span class="lever"></span> <span class="label">switch</span></label></div></div>',1),g=s("div",{class:"uic-desc"},[s("code",null,".inline"),a(` 클래스 추가 시 수평 방향 정렬.
    `)],-1),f=p('<div class="uic-preview"><div class="input-checkgroup inline"><label class="input-check"><input type="checkbox" checked> <span class="label">checkbox</span></label> <label class="input-check"><input type="checkbox"> <span class="label">checkbox</span></label> <label class="input-check"><input type="checkbox"> <span class="label">checkbox</span></label></div> <div class="input-checkgroup inline"><label class="input-radio"><input type="radio" name="radio4" checked> <span class="label">radio</span></label> <label class="input-radio"><input type="radio" name="radio4"> <span class="label">radio</span></label> <label class="input-radio"><input type="radio" name="radio4"> <span class="label">radio</span></label></div> <div class="input-checkgroup inline"><label class="input-switch"><input type="checkbox" checked> <span class="lever"></span> <span class="label">switch</span></label> <label class="input-switch"><input type="checkbox"> <span class="lever"></span> <span class="label">switch</span></label></div></div>',1),C=s("h2",{class:"uic-title"},"Reverse",-1),B=s("div",{class:"uic-desc"},[a(`
      개별 체크요소의 `),s("code",null,".reverse"),a(` 클래스 추가 시 라벨 위치 반대.
    `)],-1),N=p('<div class="uic-preview"><div class="input-checkgroup"><label class="input-check reverse"><input type="checkbox"> <span class="label">checkbox</span></label> <label class="input-radio reverse"><input type="radio"> <span class="label">radio</span></label> <label class="input-switch reverse"><input type="checkbox"> <span class="lever"></span> <span class="label">switch</span></label></div></div>',1),R=s("div",{class:"uic-desc"},[a(`
      .input-checkgroup의 `),s("code",null,".reverse"),a(` 클래스 추가 시 라벨 위치, 정렬 반대.
    `)],-1),V={class:"uic-preview"},S=p('<div class="input-checkgroup reverse"><label class="input-check"><input type="checkbox"> <span class="label">checkbox</span></label> <label class="input-radio"><input type="radio"> <span class="label">radio</span></label> <label class="input-switch"><input type="checkbox"> <span class="lever"></span> <span class="label">switch</span></label></div>',1),j={__name:"CheckboxRadio",setup(D){return(E,G)=>(t(),n("div",d,[b,a(),o,a(),u,a(),l(e,null,{default:c(()=>[a(i(`
        <label class="input-check">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>
        <label class="input-check">
          <input type="checkbox" checked>
          <span class="label">체크박스 checked</span>
        </label>
        <label class="input-check">
          <input type="checkbox" disabled>
          <span class="label">체크박스 disabled</span>
        </label>
        <label class="input-check">
          <input type="checkbox" checked disabled>
          <span class="label">체크박스 checked disabled</span>
        </label>
      `))]),_:1}),a(),h,a(),r,a(),l(e,null,{default:c(()=>[a(i(`
        <label class="input-radio">
          <input type="radio" name="radio1">
          <span class="label">radio</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio1" checked>
          <span class="label">라디오 checked</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio2" disabled>
          <span class="label">라디오 disabled</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio2" checked disabled>
          <span class="label">라디오 checked disabled</span>
        </label>
      `))]),_:1}),a(),k,a(),v,a(),l(e,null,{default:c(()=>[a(i(`
        <label class="input-switch">
          <input type="checkbox" aria-label="switch">
          <span class="lever"></span>
        </label>
        <label class="input-switch">
          <input type="checkbox" checked>
          <span class="lever"></span>
          <span class="label">switch checked</span>
        </label>
        <label class="input-switch">
          <input type="checkbox" disabled>
          <span class="lever"></span>
          <span class="label">switch disabled</span>
        </label>
        <label class="input-switch">
          <input type="checkbox" checked disabled>
          <span class="lever"></span>
          <span class="label">switch checked disabled</span>
        </label>
      `))]),_:1}),a(),_,a(),x,a(),l(e,null,{default:c(()=>[a(i(`
      code...
      `))]),_:1}),a(),y,a(),w,a(),m,a(),l(e,null,{default:c(()=>[a(i(`
      <div class="input-checkgroup">
        checkbox, radio, switch ...
      </div>
    `))]),_:1}),a(),g,a(),f,a(),l(e,null,{default:c(()=>[a(i(`
        <div class="input-checkgroup inline">
          checkbox, radio, switch ...
        </div>
      `))]),_:1}),a(),C,a(),B,a(),N,a(),l(e,null,{default:c(()=>[a(i(`
        <div class="input-checkgroup">
          <label class="input-check reverse">
            ...
          </label>
          <label class="input-radio reverse">
            ...
          </label>
          <label class="input-switch reverse">
            ...
          </label>
        </div>
      `))]),_:1}),a(),R,a(),s("div",V,[S,a(),l(e,null,{default:c(()=>[a(i(`
        <div class="input-checkgroup reverse">
          <label class="input-check">
            ...
          </label>
          <label class="input-radio">
            ...
          </label>
          <label class="input-switch">
            ...
          </label>
        </div>
      `))]),_:1})])]))}};export{j as default};
