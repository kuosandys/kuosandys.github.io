import{S as w,i as x,s as N,a as k,k as d,r as _,e as $,F as P,h as n,c as E,l as m,m as b,u as h,b as p,D as y,v as q,n as S,J as C}from"../chunks/index.709a4b0d.js";import{s as D}from"../chunks/singletons.aebd850a.js";const F=()=>{const a=D;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},H={subscribe(a){return F().page.subscribe(a)}};function J(a){let e,o;return{c(){e=d("p"),o=_("Something went unexpectedly wrong.")},l(t){e=m(t,"P",{});var r=b(e);o=h(r,"Something went unexpectedly wrong."),r.forEach(n)},m(t,r){p(t,e,r),y(e,o)},d(t){t&&n(e)}}}function j(a){let e,o;return{c(){e=d("p"),o=_("Not found.")},l(t){e=m(t,"P",{});var r=b(e);o=h(r,"Not found."),r.forEach(n)},m(t,r){p(t,e,r),y(e,o)},d(t){t&&n(e)}}}function z(a){let e,o,t=a[0].status+"",r,l,u;function v(s,i){return s[0].status===404?j:J}let f=v(a),c=f(a);return{c(){e=k(),o=d("h1"),r=_(t),l=k(),c.c(),u=$(),this.h()},l(s){P("svelte-1rhhcye",document.head).forEach(n),e=E(s),o=m(s,"H1",{});var g=b(o);r=h(g,t),g.forEach(n),l=E(s),c.l(s),u=$(),this.h()},h(){document.title="made you look | error"},m(s,i){p(s,e,i),p(s,o,i),y(o,r),p(s,l,i),c.m(s,i),p(s,u,i)},p(s,[i]){i&1&&t!==(t=s[0].status+"")&&q(r,t),f!==(f=v(s))&&(c.d(1),c=f(s),c&&(c.c(),c.m(u.parentNode,u)))},i:S,o:S,d(s){s&&n(e),s&&n(o),s&&n(l),c.d(s),s&&n(u)}}}function A(a,e,o){var r;let t;return C(a,H,l=>o(0,t=l)),console.error(`${t.status}: ${(r=t.error)==null?void 0:r.message}`),[t]}let I=class extends w{constructor(e){super(),x(this,e,A,z,N,{})}};export{I as default};
