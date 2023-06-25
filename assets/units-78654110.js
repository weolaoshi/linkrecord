var Y=Object.defineProperty;var tt=(i,t,r)=>t in i?Y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;var M=(i,t,r)=>(tt(i,typeof t!="symbol"?t+"":t,r),r),k=(i,t,r)=>{if(!t.has(i))throw TypeError("Cannot "+r)};var s=(i,t,r)=>(k(i,t,"read from private field"),r?r.call(i):t.get(i)),b=(i,t,r)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,r)},$=(i,t,r,e)=>(k(i,t,"write to private field"),e?e.call(i,r):t.set(i,r),r);var u=(i,t,r)=>(k(i,t,"access private method"),r);const it="6.4.0";function rt(i,t,r){const e=t.split("|").map(o=>o.trim());for(let o=0;o<e.length;o++)switch(t){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof i===t)return}const n=new Error(`invalid value for type ${t}`);throw n.code="INVALID_ARGUMENT",n.argument=`value.${r}`,n.value=i,n}function H(i,t,r){for(let e in t){let n=t[e];const o=r?r[e]:null;o&&rt(n,o,e),Object.defineProperty(i,e,{enumerable:!0,value:n,writable:!1})}}function E(i){if(i==null)return"null";if(Array.isArray(i))return"[ "+i.map(E).join(", ")+" ]";if(i instanceof Uint8Array){const t="0123456789abcdef";let r="0x";for(let e=0;e<i.length;e++)r+=t[i[e]>>4],r+=t[i[e]&15];return r}if(typeof i=="object"&&typeof i.toJSON=="function")return E(i.toJSON());switch(typeof i){case"boolean":case"symbol":return i.toString();case"bigint":return BigInt(i).toString();case"number":return i.toString();case"string":return JSON.stringify(i);case"object":{const t=Object.keys(i);return t.sort(),"{ "+t.map(r=>`${E(r)}: ${E(i[r])}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function et(i,t,r){{const n=[];if(r){if("message"in r||"code"in r||"name"in r)throw new Error(`value will overwrite populated values: ${E(r)}`);for(const o in r){const c=r[o];n.push(o+"="+E(c))}}n.push(`code=${t}`),n.push(`version=${it}`),n.length&&(i+=" ("+n.join(", ")+")")}let e;switch(t){case"INVALID_ARGUMENT":e=new TypeError(i);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":e=new RangeError(i);break;default:e=new Error(i)}return H(e,{code:t}),r&&Object.assign(e,r),e}function g(i,t,r,e){if(!i)throw et(t,r,e)}function l(i,t,r,e){g(i,t,"INVALID_ARGUMENT",{argument:r,value:e})}["NFD","NFC","NFKD","NFKC"].reduce((i,t)=>{try{if("test".normalize(t)!=="test")throw new Error("bad");if(t==="NFD"){const r=String.fromCharCode(233).normalize("NFD"),e=String.fromCharCode(101,769);if(r!==e)throw new Error("broken")}i.push(t)}catch{}return i},[]);function nt(i,t,r){if(r==null&&(r=""),i!==t){let e=r,n="new";r&&(e+=".",n+=" "+r),g(!1,`private constructor; use ${e}from* methods`,"UNSUPPORTED_OPERATION",{operation:n})}}function st(i,t,r){if(i instanceof Uint8Array)return r?new Uint8Array(i):i;if(typeof i=="string"&&i.match(/^0x([0-9a-f][0-9a-f])*$/i)){const e=new Uint8Array((i.length-2)/2);let n=2;for(let o=0;o<e.length;o++)e[o]=parseInt(i.substring(n,n+2),16),n+=2;return e}l(!1,"invalid BytesLike value",t||"value",i)}function ot(i,t){return st(i,t,!1)}const X=BigInt(0),x=BigInt(1),F=9007199254740991;function O(i,t){const r=Q(i,"value"),e=BigInt(v(t,"width"));if(g(r>>e===X,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:i}),r>>e-x){const n=(x<<e)-x;return-((~r&n)+x)}return r}function K(i,t){const r=Q(i,"value"),e=BigInt(v(t,"bits"));return r&(x<<e)-x}function J(i,t){switch(typeof i){case"bigint":return i;case"number":return l(Number.isInteger(i),"underflow",t||"value",i),l(i>=-F&&i<=F,"overflow",t||"value",i),BigInt(i);case"string":try{if(i==="")throw new Error("empty string");return i[0]==="-"&&i[1]!=="-"?-BigInt(i.substring(1)):BigInt(i)}catch(r){l(!1,`invalid BigNumberish string: ${r.message}`,t||"value",i)}}l(!1,"invalid BigNumberish value",t||"value",i)}function Q(i,t){const r=J(i,t);return g(r>=X,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:i}),r}const q="0123456789abcdef";function ft(i){if(i instanceof Uint8Array){let t="0x0";for(const r of i)t+=q[r>>4],t+=q[r&15];return BigInt(t)}return J(i)}function v(i,t){switch(typeof i){case"bigint":return l(i>=-F&&i<=F,"overflow",t||"value",i),Number(i);case"number":return l(Number.isInteger(i),"underflow",t||"value",i),l(i>=-F&&i<=F,"overflow",t||"value",i),i;case"string":try{if(i==="")throw new Error("empty string");return v(BigInt(i),t)}catch(r){l(!1,`invalid numeric string: ${r.message}`,t||"value",i)}}l(!1,"invalid numeric value",t||"value",i)}const ut=BigInt(-1),d=BigInt(0),S=BigInt(1),ct=BigInt(5),B={};let A="0000";for(;A.length<80;)A+=A;function U(i){let t=A;for(;t.length<i;)t+=t;return BigInt("1"+t.substring(0,i))}function T(i,t,r){const e=BigInt(t.width);if(t.signed){const n=S<<e-S;g(r==null||i>=-n&&i<n,"overflow","NUMERIC_FAULT",{operation:r,fault:"overflow",value:i}),i>d?i=O(K(i,e),e):i=-O(K(-i,e),e)}else{const n=S<<e;g(r==null||i>=0&&i<n,"overflow","NUMERIC_FAULT",{operation:r,fault:"overflow",value:i}),i=(i%n+n)%n&n-S}return i}function V(i){typeof i=="number"&&(i=`fixed128x${i}`);let t=!0,r=128,e=18;if(typeof i=="string"){if(i!=="fixed")if(i==="ufixed")t=!1;else{const o=i.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);l(o,"invalid fixed format","format",i),t=o[1]!=="u",r=parseInt(o[2]),e=parseInt(o[3])}}else if(i){const o=i,c=(h,Z,W)=>o[h]==null?W:(l(typeof o[h]===Z,"invalid fixed format ("+h+" not "+Z+")","format."+h,o[h]),o[h]);t=c("signed","boolean",t),r=c("width","number",r),e=c("decimals","number",e)}l(r%8===0,"invalid FixedNumber width (not byte aligned)","format.width",r),l(e<=80,"invalid FixedNumber decimals (too large)","format.decimals",e);const n=(t?"":"u")+"fixed"+String(r)+"x"+String(e);return{signed:t,width:r,decimals:e,name:n}}function lt(i,t){let r="";i<d&&(r="-",i*=ut);let e=i.toString();if(t===0)return r+e;for(;e.length<=t;)e=A+e;const n=e.length-t;for(e=e.substring(0,n)+"."+e.substring(n);e[0]==="0"&&e[1]!==".";)e=e.substring(1);for(;e[e.length-1]==="0"&&e[e.length-2]!==".";)e=e.substring(0,e.length-1);return r+e}var m,f,a,N,y,w,p,R,j,C,z,L,P,_,G;const I=class{constructor(t,r,e){b(this,N);b(this,w);b(this,R);b(this,C);b(this,L);b(this,_);M(this,"format");b(this,m,void 0);b(this,f,void 0);b(this,a,void 0);M(this,"_value");nt(t,B,"FixedNumber"),$(this,f,r),$(this,m,e);const n=lt(r,e.decimals);H(this,{format:e.name,_value:n}),$(this,a,U(e.decimals))}get signed(){return s(this,m).signed}get width(){return s(this,m).width}get decimals(){return s(this,m).decimals}get value(){return s(this,f)}addUnsafe(t){return u(this,R,j).call(this,t)}add(t){return u(this,R,j).call(this,t,"add")}subUnsafe(t){return u(this,C,z).call(this,t)}sub(t){return u(this,C,z).call(this,t,"sub")}mulUnsafe(t){return u(this,L,P).call(this,t)}mul(t){return u(this,L,P).call(this,t,"mul")}mulSignal(t){u(this,N,y).call(this,t);const r=s(this,f)*s(t,f);return g(r%s(this,a)===d,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),u(this,w,p).call(this,r/s(this,a),"mulSignal")}divUnsafe(t){return u(this,_,G).call(this,t)}div(t){return u(this,_,G).call(this,t,"div")}divSignal(t){g(s(t,f)!==d,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),u(this,N,y).call(this,t);const r=s(this,f)*s(this,a);return g(r%s(t,f)===d,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),u(this,w,p).call(this,r/s(t,f),"divSignal")}cmp(t){let r=this.value,e=t.value;const n=this.decimals-t.decimals;return n>0?e*=U(n):n<0&&(r*=U(-n)),r<e||r>e?-1:0}eq(t){return this.cmp(t)===0}lt(t){return this.cmp(t)<0}lte(t){return this.cmp(t)<=0}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=s(this,f);return s(this,f)<d&&(t-=s(this,a)-S),t=s(this,f)/s(this,a)*s(this,a),u(this,w,p).call(this,t,"floor")}ceiling(){let t=s(this,f);return s(this,f)>d&&(t+=s(this,a)-S),t=s(this,f)/s(this,a)*s(this,a),u(this,w,p).call(this,t,"ceiling")}round(t){if(t==null&&(t=0),t>=this.decimals)return this;const r=this.decimals-t,e=ct*U(r-1);let n=this.value+e;const o=U(r);return n=n/o*o,T(n,s(this,m),"round"),new I(B,n,s(this,m))}isZero(){return s(this,f)===d}isNegative(){return s(this,f)<d}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return I.fromString(this.toString(),t)}static fromValue(t,r,e){r==null&&(r=0);const n=V(e);let o=J(t,"value");const c=r-n.decimals;if(c>0){const h=U(c);g(o%h===d,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),o/=h}else c<0&&(o*=U(-c));return T(o,n,"fromValue"),new I(B,o,n)}static fromString(t,r){const e=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);l(e&&e[2].length+e[3].length>0,"invalid FixedNumber string value","value",t);const n=V(r);let o=e[2]||"0",c=e[3]||"";for(;c.length<n.decimals;)c+=A;g(c.substring(n.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),c=c.substring(0,n.decimals);const h=BigInt(e[1]+o+c);return T(h,n,"fromString"),new I(B,h,n)}static fromBytes(t,r){let e=ft(ot(t,"value"));const n=V(r);return n.signed&&(e=O(e,n.width)),T(e,n,"fromBytes"),new I(B,e,n)}};let D=I;m=new WeakMap,f=new WeakMap,a=new WeakMap,N=new WeakSet,y=function(t){l(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)},w=new WeakSet,p=function(t,r){return t=T(t,s(this,m),r),new I(B,t,s(this,m))},R=new WeakSet,j=function(t,r){return u(this,N,y).call(this,t),u(this,w,p).call(this,s(this,f)+s(t,f),r)},C=new WeakSet,z=function(t,r){return u(this,N,y).call(this,t),u(this,w,p).call(this,s(this,f)-s(t,f),r)},L=new WeakSet,P=function(t,r){return u(this,N,y).call(this,t),u(this,w,p).call(this,s(this,f)*s(t,f)/s(this,a),r)},_=new WeakSet,G=function(t,r){return g(s(t,f)!==d,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),u(this,N,y).call(this,t),u(this,w,p).call(this,s(this,f)*s(this,a)/s(t,f),r)};const at=["wei","kwei","mwei","gwei","szabo","finney","ether"];function ht(i,t){let r=18;if(typeof t=="string"){const e=at.indexOf(t);l(e>=0,"invalid unit","unit",t),r=3*e}else t!=null&&(r=v(t,"unit"));return D.fromValue(i,r,{decimals:r}).toString()}function dt(i){return ht(i,18)}export{dt as f};
