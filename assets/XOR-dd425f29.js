const d={config:{name:"XOR",type:"library",targetVer:"1.0.0-indev.0"},init:(r,t,n)=>{},data:{encode:r=>encodeURIComponent(r.toString().split("").map((t,n)=>{let e;return n%2===0?e=!1:e=!0,e?String.fromCharCode(t.charCodeAt(0)^2):t}).join("")),decode:r=>{const[t,...n]=r.split("?");return decodeURIComponent(t).split("").map((e,i)=>{let o;return i%2===0?o=!1:o=!0,o?String.fromCharCode(e.charCodeAt(0)^2):e}).join("")+(n.length>0?`?${n.join("?")}`:"")}}};export{d as default};