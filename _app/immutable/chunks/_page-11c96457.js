import{e as s}from"./index-1885ff30.js";const r=async({fetch:t})=>{const o=await t("/api/posts");if(o.status>=500)throw s(500,"Error loading posts");return{posts:await o.json()}},n=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{n as _,r as l};
