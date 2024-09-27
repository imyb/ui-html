import{_ as e}from"./UicCode-ijl5b0wP.js";import{b as d}from"./ui-BdNg3r52.js";import{h as _,c as r,a as t,d as s,b as n,w as l,o as v,t as a}from"./index-DkDP9Cbu.js";const b={class:"uic-body"},f=s("h1",{class:"uic-title"},"Toast",-1),C=s("h2",{class:"uic-title"},"Default",-1),h={class:"uic-preview"},m=s("h2",{class:"uic-title"},"Add Class",-1),k={class:"uic-preview"},g=s("h2",{class:"uic-title"},"Add Close",-1),y={class:"uic-preview"},w=s("h2",{class:"uic-title"},"Timeout",-1),A=s("div",{class:"uic-desc"},[t(`
      토스트 닫는 시간`),s("br"),t(`
      default : 5000
    `)],-1),$={class:"uic-preview"},j=s("h2",{class:"uic-title"},"Stack",-1),T=s("div",{class:"uic-desc"},`
      토스트 쌓기
    `,-1),x={class:"uic-preview"},B=s("h2",{class:"uic-title"},"Close All",-1),N={class:"uic-preview"},O=s("h2",{class:"uic-title"},"Event",-1),V={class:"uic-preview"},q={__name:"Toast",setup(D){const i=(u,o)=>{d.open(u,o)},p=()=>{d.closeAll()};return _(()=>{d.closeAll()}),(u,o)=>(v(),r("div",b,[f,t(),C,t(),s("div",h,[s("button",{type:"button",class:"btn outline",onClick:o[0]||(o[0]=c=>i("토스트 메세지 입니다."))},"open toast")]),t(),n(e,{lang:"javascript"},{default:l(()=>[t(a(`
      toast.open('토스트 메세지 입니다.');

      // 옵션
      toast.open('토스트 메세지 입니다.' {
        addClass: '',   // class추가
        addClose: false, // 닫기버튼
        stack: false,   // 토스트 쌓기
        timeout: 5000,  // 토스트 닫히는 시간
        onOpened: function() {}, // 열린 후 콜백
        onClosed: function() {}, // 닫힌 후 콜백
      });
      `))]),_:1}),t(),m,t(),s("div",k,[s("button",{type:"button",class:"btn outline",onClick:o[1]||(o[1]=c=>i("토스트 메세지 입니다. type2",{addClass:"type2"}))},"open toast")]),t(),n(e,{lang:"javascript"},{default:l(()=>[t(a(`
      toast.open('토스트 메세지 입니다.', {
        addClass: 'type2'
      });
      `))]),_:1}),t(),g,t(),s("div",y,[s("button",{type:"button",class:"btn outline",onClick:o[2]||(o[2]=c=>i("토스트 메세지 입니다.",{addClose:!0}))},"open toast")]),t(),n(e,{lang:"javascript"},{default:l(()=>[t(a(`
      toast.open('토스트 메세지 입니다.', {
        addClose: true
      });
      `))]),_:1}),t(),w,t(),A,t(),s("div",$,[s("button",{type:"button",class:"btn outline",onClick:o[3]||(o[3]=c=>i("토스트 메세지 입니다.",{timeout:1e3}))},"open toast")]),t(),n(e,{lang:"javascript"},{default:l(()=>[t(a(`
      toast.open('토스트 메세지 입니다.', {
        timeout: 1000,
      });
      `))]),_:1}),t(),j,t(),T,t(),s("div",x,[s("button",{type:"button",class:"btn outline",onClick:o[4]||(o[4]=c=>i("토스트 메세지 입니다.",{stack:!0,addClose:!0}))},"open toast")]),t(),n(e,{lang:"javascript"},{default:l(()=>[t(a(`
      toast.open('토스트 메세지 입니다.', {
        stack: true
      });
      `))]),_:1}),t(),B,t(),s("div",N,[s("button",{type:"button",class:"btn outline",onClick:o[5]||(o[5]=c=>p())},"close Toast All")]),t(),n(e,{lang:"javascript"},{default:l(()=>[t(a(`
      toast.closeAll();
      `))]),_:1}),t(),O,t(),s("div",V,[s("button",{type:"button",class:"btn outline",onClick:o[6]||(o[6]=c=>i("토스트 메세지 입니다.",{onOpened:function(){console.log("opened")},onClosed:function(){console.log("closed")},addClose:!1}))},"open toast")]),t(),n(e,{lang:"javascript"},{default:l(()=>[t(a(`
      toast.open('토스트 메세지 입니다.' {
        onOpened: function() {
          console.log('opened')
        },
        onClosed: function() {
          console.log('closed')
        },
      });
      `))]),_:1})]))}};export{q as default};
