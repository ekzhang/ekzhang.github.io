import{_ as g,$ as u}from"./index.5437a47d.js";function x(n){const t=n-1;return t*t*t+1}function S(n,{delay:t=0,duration:o=400,easing:s=g}={}){const c=+getComputedStyle(n).opacity;return{delay:t,duration:o,easing:s,css:a=>`opacity: ${a*c}`}}function U(n,{delay:t=0,duration:o=400,easing:s=x,x:c=0,y:a=0,opacity:f=0}={}){const r=getComputedStyle(n),e=+r.opacity,y=r.transform==="none"?"":r.transform,p=e*(1-f),[l,m]=u(c),[$,d]=u(a);return{delay:t,duration:o,easing:s,css:(i,_)=>`
			transform: ${y} translate(${(1-i)*l}${m}, ${(1-i)*$}${d});
			opacity: ${e-p*_}`}}export{S as a,U as f};
