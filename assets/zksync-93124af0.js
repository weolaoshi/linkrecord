var Dt=Object.defineProperty;var Rt=(e,t,n)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var lt=(e,t,n)=>(Rt(e,typeof t!="symbol"?t+"":t,n),n),ct=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var o=(e,t,n)=>(ct(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},et=(e,t,n,r)=>(ct(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var _=(e,t,n)=>(ct(e,t,"access private method"),n);import{a as E}from"./axios-4a70c6fc.js";import{a as Ct}from"./index-c3c41919.js";const At={ethereum:"https://eth.llamarpc.com",optimism:"https://optimism-mainnet.public.blastapi.io",arbitrum:"https://rpc.ankr.com/arbitrum",polygon:"https://polygon-bor.publicnode.com",bsc:"https://bscrpc.com"},q=[];q.push("IWYIQ1STMBJPRD6Q22T7VT4S1DP2QE3RUI","RD1VT95VZMMVC783SX7RR65GZCYBH7A5UH","6HKKR4RRGSC8YMMJCNTPHJU7CCAFFGE8W1");q.push("T7DYIZHU8WVI37CNNHQPXYF3N3R74B2CVK","ZC1A5RMBJ4AN8RAC3UB71WRBBG9BRVUJMH","81NDCZ2KDCTZUZVR972QJ5KPZNGBKPAQ2R");q.push("X1IAZD278YRMKXW29NHIIYYP571J5CC89V","U6AAMMPZ6MS2Q226NNIE6V7K6FM4UT9JSU","AR4UQKZ1QJKQHS6TKM1R6DJIPAYV7XA2XP");q.push("YZRHRR2SER84P47WINZ1EXQJP4HRZ1H2W5","6QGXQN4BZNKYEBK2TCRMS81V9K5CCZ6I49","MERBNJ59B5ARF5P8EFE54DEU33ESXCZRN7");function vt(){const e=Math.floor(Math.random()*q.length);return q[e]}async function te(e,t){try{let n=At[t];if(!n)return"Error: Invalid Network Name";let s=(await E.post(n,{jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:1})).data.result;return s=parseInt(s,16)/10**18,s=s.toFixed(2),{eth_balance:s}}catch(n){return console.log("evm_getEthBalance() exception:"+n),{eth_balance:0}}}async function ee(e,t){try{let n=At[t];if(!n)return"Error: Invalid Network Name";const s=(await E.post(n,{jsonrpc:"2.0",method:"eth_getTransactionCount",params:[e,"latest"],id:1})).data.result;return{eth_tx:parseInt(s,16)}}catch(n){return console.log("evm_getTxCount() exception:"+n),{eth_tx:"NetErr"}}}async function ne(e){try{const t="https://api.etherscan.io/api/",n=await E.get(t,{params:{module:"account",action:"tokenbalance",contractaddress:"0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85",address:e,tag:"latest",apikey:vt()}});return n.data.message.localeCompare("OK")==0?{eth_main_ens:n.data.result}:{eth_main_ens:n.data.result}}catch(t){return console.log("evm_eth_nft_ens() exception, add:"+e),console.log(t),{eth_main_ens:"NetErr"}}}const Mt="6.4.0";function Lt(e,t,n){const r=t.split("|").map(i=>i.trim());for(let i=0;i<r.length;i++)switch(t){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof e===t)return}const s=new Error(`invalid value for type ${t}`);throw s.code="INVALID_ARGUMENT",s.argument=`value.${n}`,s.value=e,s}function Et(e,t,n){for(let r in t){let s=t[r];const i=n?n[r]:null;i&&Lt(s,i,r),Object.defineProperty(e,r,{enumerable:!0,value:s,writable:!1})}}function v(e){if(e==null)return"null";if(Array.isArray(e))return"[ "+e.map(v).join(", ")+" ]";if(e instanceof Uint8Array){const t="0123456789abcdef";let n="0x";for(let r=0;r<e.length;r++)n+=t[e[r]>>4],n+=t[e[r]&15];return n}if(typeof e=="object"&&typeof e.toJSON=="function")return v(e.toJSON());switch(typeof e){case"boolean":case"symbol":return e.toString();case"bigint":return BigInt(e).toString();case"number":return e.toString();case"string":return JSON.stringify(e);case"object":{const t=Object.keys(e);return t.sort(),"{ "+t.map(n=>`${v(n)}: ${v(e[n])}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function Yt(e,t,n){{const s=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${v(n)}`);for(const i in n){const a=n[i];s.push(i+"="+v(a))}}s.push(`code=${t}`),s.push(`version=${Mt}`),s.length&&(e+=" ("+s.join(", ")+")")}let r;switch(t){case"INVALID_ARGUMENT":r=new TypeError(e);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":r=new RangeError(e);break;default:r=new Error(e)}return Et(r,{code:t}),n&&Object.assign(r,n),r}function b(e,t,n,r){if(!e)throw Yt(t,n,r)}function m(e,t,n,r){b(e,t,"INVALID_ARGUMENT",{argument:n,value:r})}["NFD","NFC","NFKD","NFKC"].reduce((e,t)=>{try{if("test".normalize(t)!=="test")throw new Error("bad");if(t==="NFD"){const n=String.fromCharCode(233).normalize("NFD"),r=String.fromCharCode(101,769);if(n!==r)throw new Error("broken")}e.push(t)}catch{}return e},[]);function Zt(e,t,n){if(n==null&&(n=""),e!==t){let r=n,s="new";n&&(r+=".",s+=" "+n),b(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:s})}}function qt(e,t,n){if(e instanceof Uint8Array)return n?new Uint8Array(e):e;if(typeof e=="string"&&e.match(/^0x([0-9a-f][0-9a-f])*$/i)){const r=new Uint8Array((e.length-2)/2);let s=2;for(let i=0;i<r.length;i++)r[i]=parseInt(e.substring(s,s+2),16),s+=2;return r}m(!1,"invalid BytesLike value",t||"value",e)}function Kt(e,t){return qt(e,t,!1)}const It=BigInt(0),M=BigInt(1),L=9007199254740991;function _t(e,t){const n=Nt(e,"value"),r=BigInt(nt(t,"width"));if(b(n>>r===It,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:e}),n>>r-M){const s=(M<<r)-M;return-((~n&s)+M)}return n}function wt(e,t){const n=Nt(e,"value"),r=BigInt(nt(t,"bits"));return n&(M<<r)-M}function gt(e,t){switch(typeof e){case"bigint":return e;case"number":return m(Number.isInteger(e),"underflow",t||"value",e),m(e>=-L&&e<=L,"overflow",t||"value",e),BigInt(e);case"string":try{if(e==="")throw new Error("empty string");return e[0]==="-"&&e[1]!=="-"?-BigInt(e.substring(1)):BigInt(e)}catch(n){m(!1,`invalid BigNumberish string: ${n.message}`,t||"value",e)}}m(!1,"invalid BigNumberish value",t||"value",e)}function Nt(e,t){const n=gt(e,t);return b(n>=It,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:e}),n}const xt="0123456789abcdef";function Pt(e){if(e instanceof Uint8Array){let t="0x0";for(const n of e)t+=xt[n>>4],t+=xt[n&15];return BigInt(t)}return gt(e)}function nt(e,t){switch(typeof e){case"bigint":return m(e>=-L&&e<=L,"overflow",t||"value",e),Number(e);case"number":return m(Number.isInteger(e),"underflow",t||"value",e),m(e>=-L&&e<=L,"overflow",t||"value",e),e;case"string":try{if(e==="")throw new Error("empty string");return nt(BigInt(e),t)}catch(n){m(!1,`invalid numeric string: ${n.message}`,t||"value",e)}}m(!1,"invalid numeric value",t||"value",e)}const Vt=BigInt(-1),y=BigInt(0),Y=BigInt(1),Ht=BigInt(5),R={};let Z="0000";for(;Z.length<80;)Z+=Z;function B(e){let t=Z;for(;t.length<e;)t+=t;return BigInt("1"+t.substring(0,e))}function $(e,t,n){const r=BigInt(t.width);if(t.signed){const s=Y<<r-Y;b(n==null||e>=-s&&e<s,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:e}),e>y?e=_t(wt(e,r),r):e=-_t(wt(-e,r),r)}else{const s=Y<<r;b(n==null||e>=0&&e<s,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:e}),e=(e%s+s)%s&s-Y}return e}function ut(e){typeof e=="number"&&(e=`fixed128x${e}`);let t=!0,n=128,r=18;if(typeof e=="string"){if(e!=="fixed")if(e==="ufixed")t=!1;else{const i=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);m(i,"invalid fixed format","format",e),t=i[1]!=="u",n=parseInt(i[2]),r=parseInt(i[3])}}else if(e){const i=e,a=(l,f,g)=>i[l]==null?g:(m(typeof i[l]===f,"invalid fixed format ("+l+" not "+f+")","format."+l,i[l]),i[l]);t=a("signed","boolean",t),n=a("width","number",n),r=a("decimals","number",r)}m(n%8===0,"invalid FixedNumber width (not byte aligned)","format.width",n),m(r<=80,"invalid FixedNumber decimals (too large)","format.decimals",r);const s=(t?"":"u")+"fixed"+String(n)+"x"+String(r);return{signed:t,width:n,decimals:r,name:s}}function $t(e,t){let n="";e<y&&(n="-",e*=Vt);let r=e.toString();if(t===0)return n+r;for(;r.length<=t;)r=Z+r;const s=r.length-t;for(r=r.substring(0,s)+"."+r.substring(s);r[0]==="0"&&r[1]!==".";)r=r.substring(1);for(;r[r.length-1]==="0"&&r[r.length-2]!==".";)r=r.substring(0,r.length-1);return n+r}var k,u,h,A,U,w,C,j,ft,J,mt,O,pt,Q,ht;const N=class{constructor(t,n,r){x(this,A);x(this,w);x(this,j);x(this,J);x(this,O);x(this,Q);lt(this,"format");x(this,k,void 0);x(this,u,void 0);x(this,h,void 0);lt(this,"_value");Zt(t,R,"FixedNumber"),et(this,u,n),et(this,k,r);const s=$t(n,r.decimals);Et(this,{format:r.name,_value:s}),et(this,h,B(r.decimals))}get signed(){return o(this,k).signed}get width(){return o(this,k).width}get decimals(){return o(this,k).decimals}get value(){return o(this,u)}addUnsafe(t){return _(this,j,ft).call(this,t)}add(t){return _(this,j,ft).call(this,t,"add")}subUnsafe(t){return _(this,J,mt).call(this,t)}sub(t){return _(this,J,mt).call(this,t,"sub")}mulUnsafe(t){return _(this,O,pt).call(this,t)}mul(t){return _(this,O,pt).call(this,t,"mul")}mulSignal(t){_(this,A,U).call(this,t);const n=o(this,u)*o(t,u);return b(n%o(this,h)===y,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),_(this,w,C).call(this,n/o(this,h),"mulSignal")}divUnsafe(t){return _(this,Q,ht).call(this,t)}div(t){return _(this,Q,ht).call(this,t,"div")}divSignal(t){b(o(t,u)!==y,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),_(this,A,U).call(this,t);const n=o(this,u)*o(this,h);return b(n%o(t,u)===y,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),_(this,w,C).call(this,n/o(t,u),"divSignal")}cmp(t){let n=this.value,r=t.value;const s=this.decimals-t.decimals;return s>0?r*=B(s):s<0&&(n*=B(-s)),n<r||n>r?-1:0}eq(t){return this.cmp(t)===0}lt(t){return this.cmp(t)<0}lte(t){return this.cmp(t)<=0}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=o(this,u);return o(this,u)<y&&(t-=o(this,h)-Y),t=o(this,u)/o(this,h)*o(this,h),_(this,w,C).call(this,t,"floor")}ceiling(){let t=o(this,u);return o(this,u)>y&&(t+=o(this,h)-Y),t=o(this,u)/o(this,h)*o(this,h),_(this,w,C).call(this,t,"ceiling")}round(t){if(t==null&&(t=0),t>=this.decimals)return this;const n=this.decimals-t,r=Ht*B(n-1);let s=this.value+r;const i=B(n);return s=s/i*i,$(s,o(this,k),"round"),new N(R,s,o(this,k))}isZero(){return o(this,u)===y}isNegative(){return o(this,u)<y}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return N.fromString(this.toString(),t)}static fromValue(t,n,r){n==null&&(n=0);const s=ut(r);let i=gt(t,"value");const a=n-s.decimals;if(a>0){const l=B(a);b(i%l===y,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),i/=l}else a<0&&(i*=B(-a));return $(i,s,"fromValue"),new N(R,i,s)}static fromString(t,n){const r=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);m(r&&r[2].length+r[3].length>0,"invalid FixedNumber string value","value",t);const s=ut(n);let i=r[2]||"0",a=r[3]||"";for(;a.length<s.decimals;)a+=Z;b(a.substring(s.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),a=a.substring(0,s.decimals);const l=BigInt(r[1]+i+a);return $(l,s,"fromString"),new N(R,l,s)}static fromBytes(t,n){let r=Pt(Kt(t,"value"));const s=ut(n);return s.signed&&(r=_t(r,s.width)),$(r,s,"fromBytes"),new N(R,r,s)}};let dt=N;k=new WeakMap,u=new WeakMap,h=new WeakMap,A=new WeakSet,U=function(t){m(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)},w=new WeakSet,C=function(t,n){return t=$(t,o(this,k),n),new N(R,t,o(this,k))},j=new WeakSet,ft=function(t,n){return _(this,A,U).call(this,t),_(this,w,C).call(this,o(this,u)+o(t,u),n)},J=new WeakSet,mt=function(t,n){return _(this,A,U).call(this,t),_(this,w,C).call(this,o(this,u)-o(t,u),n)},O=new WeakSet,pt=function(t,n){return _(this,A,U).call(this,t),_(this,w,C).call(this,o(this,u)*o(t,u)/o(this,h),n)},Q=new WeakSet,ht=function(t,n){return b(o(t,u)!==y,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),_(this,A,U).call(this,t),_(this,w,C).call(this,o(this,u)*o(this,h)/o(t,u),n)};const jt=["wei","kwei","mwei","gwei","szabo","finney","ether"];function Jt(e,t){let n=18;if(typeof t=="string"){const r=jt.indexOf(t);m(r>=0,"invalid unit","unit",t),n=3*r}else t!=null&&(n=nt(t,"unit"));return dt.fromValue(e,n,{decimals:n}).toString()}function zt(e){return Jt(e,18)}const p=[];p.push("izumi-swap 0x9606eC131EeC0F84c95D82c9a63959F2331cF2aC");p.push("izumi_lp 0x936c9A1B8f88BFDbd5066ad08e5d773BC82EB15F");p.push("izumi-order 0x8b9D7D609a83B2f69D2135786a7D230043AF7283");p.push("spacefi-swap 0xbE7D1FD1f6748bbDefC4fbaCafBb11C6Fc506d1d");p.push("common-unlock-usdc 0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4");p.push("syncswap-swap 0x2da10A1e27bF85cEdD8FFb1AbBe97e53391C0295");p.push("mute-swap 0x8B791913eB07C32779a16750e3868aA8495F5964");p.push("onchaintrade-swap 0x6219F06135b79705d34f5261852E9F6B98821E1f");p.push("velocore-swap 0xd999E16e68476bC749A28FC14a0c3b6d7073F50c");p.push("maverick-swap 0x39E098A153Ad69834a9Dac32f0FCa92066aD03f4");p.push("orbiter-bridge 0xE4eDb277e41dc89aB076a1F049f4a3EfA700bCE8");p.push("openocean-swap 0x36A1aCbbCAfca2468b85011DDD16E7Cb4d673230");function Ft(e,t){let n=p.length,r=0,s="",i="";for(r=0;r<n;r++)if(s=p[r].split(" ")[0],i=p[r].split(" ")[1],e.toUpperCase().localeCompare(i.toUpperCase())==0)return s;for(r=0;r<n;r++)s=p[r].split(" ")[0],i=p[r].split(" ")[1];return""}function z(e,t,n){let r=Ft(e);return!!(r.length>0&&r.toUpperCase().includes(n.toUpperCase()))}function Ot(e,t){try{let n=parseInt(t,10),r=0,s="Unknown";return e.toString().localeCompare("0")==0?(s="ETH",r=1740*n/10**18):e.toString().localeCompare("2")==0?(s="USDC",r=1*n/10**6):e.toString().localeCompare("4")==0?(s="USDT",r=1*n/10**6):e.toString().localeCompare("15")==0?(s="WBTC",r=27e4*n/10**8):e.toString().localeCompare("173")==0?(s="ZZ",r=.2*n/10**18):e.toString().localeCompare("10")==0?(s="LINK",r=5*n/10**18):r=0,r}catch(n){return console.log("zksync_lite_get_token_volume_by_id() exception, tokenid: "+e+", balance: "+t),console.log(n),0}}async function re(e){try{let t=".";return e.length>=8?(t=e.substring(2,4)+".."+e.substring(e.length-4),{address_trim:t,link:"go",link1:"go",lin2:"go",link3:"go"}):{address_trim:e,link:"go",link1:"go",lin2:"go",link3:"go"}}catch(t){return console.log("common_get_trim_address() exception. addr is "+e),console.log(t),{address_trim:e,link:"go",link1:"go",lin2:"go",link3:"go"}}}async function se(e){try{let t="https://zksync2-mainnet-explorer.zksync.io/address/"+e;const n=await E.get(t);let r,s,i,a="0x0000000000000000000000000000000000000000";a in n.data.info.balances?(s=parseInt(n.data.info.balances[a].balance,16)/10**18,s=s.toFixed(2)):s=0;let l="0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4";return l in n.data.info.balances?(i=parseInt(n.data.info.balances[l].balance,16)/10**6,i=i.toFixed(2)):i=0,r=n.data.info.sealedNonce,{zksync_era_tx:r,zksync_era_eth_balance:s,zksync_era_usdc_balance:i}}catch(t){return console.log("zksync_era_get_tx_eth_usdc_balance() exception. add:"+e),console.log(t),{zksync_era_tx:"Err",zksync_era_eth_balance:0,zksync_era_usdc_balance:0}}}async function ie(e){try{let t="https://zksync2-mainnet.zkscan.io/api?module=account&action=tokenlist&address="+e;const n=await E.get(t);let r="",s=0,i=0;if(n.data.message.localeCompare("OK")==0){for(const a of n.data.result)if(a.symbol!=null){if(a.symbol.localeCompare("ETH")==0||a.symbol.localeCompare("USDC")==0)continue;if(a.symbol.localeCompare("ZAT")==0){let l=parseInt(a.decimals,10);s=parseInt(a.balance,10)/10**l,s=parseFloat(s.toFixed(0))}else if(a.symbol.localeCompare("KATC")==0)i=a.balance;else{let l=parseInt(a.decimals,10),f=parseInt(a.balance,10)/10**l;r.length>0&&(r=r+" "),r+=a.symbol+" "+f}}return{zksync_other_token_list:r,zksync_era_token_zat:s,zksync_era_token_katc:i}}else return n.data.message.localeCompare("No tokens found")==0?{zksync_other_token_list:"未开通ERA",zksync_era_token_zat:0,zksync_era_token_katc:0}:{zksync_other_token_list:n.data.message,zksync_era_token_zat:"Err",zksync_era_token_katc:"Err"}}catch(t){return console.log("zksync_era_get_token_list() exception. add:"+e),console.log(t),{zksync_other_token_list:"外部接口不稳"}}}async function ae(e){try{let t="https://api.zksync.io/jsrpc";const n=await E.post(t,{id:1,jsonrpc:"2.0",method:"account_info",params:[e]});let r;"ETH"in n.data.result.committed.balances?(r=n.data.result.committed.balances.ETH/10**18,r=r.toFixed(2)):r=0;let s;"USDC"in n.data.result.committed.balances?(s=n.data.result.committed.balances.USDC/10**6,s=s.toFixed(2)):s=0;let i;"ZZ"in n.data.result.committed.balances?(i=n.data.result.committed.balances.ZZ/10**18,i=i.toFixed(2)):i=0;let a="",l;"USDT"in n.data.result.committed.balances&&(l=n.data.result.committed.balances.USDT/10**7,l=l.toFixed(2),a+="USDT "+l+",");let f;"LINK"in n.data.result.committed.balances&&(f=n.data.result.committed.balances.LINK/10**18,f=f.toFixed(2),a+="LINK "+f+",");let g;return"DAI"in n.data.result.committed.balances&&(g=n.data.result.committed.balances.DAI/10**7,g=g.toFixed(2),a+="DAI "+f+","),{zks_lite_tx:n.data.result.committed.nonce,zksync_lite_eth_balance:r,zksync_lite_usdc_balance:s,zksync_lite_zz_balance:i,zksync_list_other_tokens:a}}catch(t){return console.log("zksync_lite_get_token_list(). add:"+e),console.log(t),{zks_lite_tx:"Err",zksync_lite_eth_balance:"Err",zksync_lite_usdc_balance:"Err",zksync_lite_zz_balance:"Err",zksync_list_other_tokens:"Err"}}}async function oe(e){try{const t="https://zksync2-mainnet-explorer.zksync.io/transactions",n=await E.get(t,{params:{limit:5,direction:"older",accountAddress:e}});return n.data.total===0?{zksync_era_lastdatetime:null}:{zksync_era_lastdatetime:n.data.list[0].receivedAt}}catch(t){return console.log("zksync_era_get_lastdatetime(). add:"+e),console.log(t),{zksync_era_lastdatetime:null}}}async function le(e){try{let t=null,n=100,r=0,s=0,i=0,a=new Set,l=new Set,f=new Set,g=0,I=0,T=0,F=0,K=0,W=0,S=0;do{let tt="https://api.zksync.io/api/v0.1/account/"+e+"/history/"+r.toString()+"/"+n.toString();const H=await E.get(tt,{});if(S++,S>1e3)break;s=H.data.length,r+=s;for(const d of H.data){const D=Ct(d.created_at);a.add(D.format("YYYY-MM-DD")),l.add(D.format("YYYY-ww")),f.add(D.format("YYYY-MM")),d.tx.type.localeCompare("Deposit")==0&&(g++,d.tx.priority_op.token.localeCompare("ETH")==0&&(I+=parseInt(d.tx.priority_op.amount,10))),d.tx.type.localeCompare("Withdraw")==0&&(T++,d.tx.priority_op.token.localeCompare("ETH")==0&&(F+=parseInt(d.tx.priority_op.amount,10))),d.tx!=null&&d.tx.fee!=null&&d.tx.token!=null&&d.tx.fee.localeCompare("0")!=0,d.tx.type.localeCompare("Swap")==0&&(K+=Ot(d.tx.orders[0].tokenSell,d.tx.orders[0].ratio[0])),t==null&&(t=d.created_at)}}while(s>0);const G=a.size,rt=l.size,st=f.size,X=f.size.toString()+"-"+l.size.toString()+"-"+a.size.toString();I=I/10**18;let P="";g>0&&(P=g.toString()+"-"+I.toString()),F=F/10**18;let V="";return T>0&&(V=T.toString()+"-"+F.toString()),{lite_unique_stat:X,zksync_lite_lastdate:t,zksync_lite_l1_2_l2:P,zksync_lite_l2_2_l1:V,zksync_lite_swap_volume:K.toFixed(0),zksync_litet_fee_total:W.toFixed(2)}}catch(t){return console.log("zksync_lite_get_tx_stat(). add:"+e),console.log(t),{lite_unique_stat:"Err",zksync_lite_lastdate:null,zksync_lite_l1_2_l2:0,zksync_lite_l2_2_l1:0,zksync_lite_swap_volume:0,zksync_litet_fee_total:0}}}async function ce(e){try{const t="https://zksync2-mainnet-explorer.zksync.io/transactions";let n=0,r=new Set,s=new Set,i=new Set,a=new Set,l=0,f=0,g=0,I=0,T=100,F=0,K=null,W=null,S="",G="",rt=0,st=0,X=0,P=0,V=0,tt=0,H=0,d=0,D=0,it=0;do{const kt=await E.get(t,{params:{limit:T,direction:"older",accountAddress:e,fromBlockNumber:W,fromTxIndex:K,offset:F}});it=kt.data.total,F+=it;for(const c of kt.data.list){W=c.blockNumber,K=c.indexInBlock,z(c.data.contractAddress,c.data.from_address,"syncswap")&&rt++,z(c.data.contractAddress,c.data.from_address,"izumi")&&X++,z(c.data.contractAddress,c.data.from_address,"spacefi")&&P++,z(c.data.contractAddress,c.data.from_address,"mute")&&st++,z(c.data.contractAddress,c.data.from_address,"onchaintrade")&&V++,z(c.data.contractAddress,c.data.from_address,"velocore")&&tt++,z(c.data.contractAddress,c.data.from_address,"orbiter")&&H++,z(c.data.contractAddress,c.data.from_address,"openocean")&&d++,z(c.data.contractAddress,c.data.from_address,"maverick")&&D++,G=Ft(c.data.contractAddress,c.data.from_address),S.length>0?S=S+" "+G:S=G;const at=Ct(c.receivedAt);if(n+=parseInt(c.fee,16)/10**18,r.add(c.data.contractAddress),s.add(at.format("YYYY-MM-DD")),i.add(at.format("YYYY-ww")),a.add(at.format("YYYY-MM")),c.isL1Originated===!0){l++;const ot=zt(c.data.value);f+=parseFloat(ot)}else if(c.data.contractAddress==="0x000000000000000000000000000000000000800a"){g++;const ot=zt(c.data.value);I+=parseFloat(ot)}}}while(it>=T);const St=r.size,Bt=s.size,Ut=i.size,Tt=a.size.toString()+"-"+Ut.toString()+"-"+Bt.toString();let bt="";l>0&&(bt=l+"-"+f);let yt="";return g>0&&(yt=g+"-"+I),{total_fee:n.toFixed(4),unique_contracts_count:St,era_unique_stat:Tt,zksync_era_bridge_l1_to_l2:bt,zksync_era_bridge_l2_to_l1:yt,n_app_syncswap:rt,n_app_mute:st,n_app_izumi:X,n_app_spacefi:P,n_app_onchaintrade:V,n_app_velocore:tt,n_app_orbiter:H,n_app_openocean:d,n_app_maverick:D}}catch(t){return console.log("zksync_lite_get_tx_stat(). add:"+e),console.log(t),{total_fee:"Err",unique_contracts_count:"Err",era_unique_stat:"Err",zksync_era_bridge_l1_to_l2:"Err",zksync_era_bridge_l2_to_l1:"Err",n_app_syncswap:0,n_app_mute:0,n_app_izumi:0,n_app_spacefi:0,n_app_onchaintrade:0,n_app_velocore:0,n_app_orbiter:0,n_app_openocean:0,n_app_maverick:0}}}export{ee as a,ne as b,oe as c,le as d,te as e,ae as f,re as g,ie as h,ce as i,se as z};