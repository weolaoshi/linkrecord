import{m as Y,R as N}from"./store-245bf6d7.js";import{a as _}from"./axios-4a70c6fc.js";import{e as P,a as X,b as V,z as K,c as A,d as W,f as B}from"./zksync-fb08339f.js";import{g as t,a as n}from"./global-7368f992.js";import{d as Q,c as I,u as J,o as G}from"./index-8bcb9efb.js";const u=[];u.push("6WEVZ2C19ASZ2FH8DUP82JZ6ZKDVYNNZQK","Q52GXXEV93DI5HHFJX7F6MW9VDNF2MMT9F","QD6XVST5AXSGFVEH3QSAE4ATJJAYUMFK9Q");u.push("GP2J7PQ9GAWIXSR362QPPJY2WVRIGUSHDM","W5KANQ76WA2AP48TVY6SMB7JFSYNP1HJV3","NSG8CUMI3IFCDCTNUUEVECJXTKVZW21WFA");u.push("NQU9TJM3FJQCJXJ9XN5YQ4AQJVDXGH7IW3","345VHCFEGJ4UR3SRRD1PDYUEBKZHYYDKZP","WX8HVZWXMEQKSQUY5AX3GV4U6B1CZP25M4");u.push("17MEW7QCFJPI9ZYG4QTAR3ZMHGCY32MI91","95JDE36SGTX5SYXD9FM6165YVYQ8QE6EWS","4HIIZP4JSCWCI9B6T9AW5XDKN2YVUC6FGR");let x="https://api.snowtrace.io/api";function f(){const e=Math.floor(Math.random()*u.length);return u[e]}async function H(e){try{const a=x,o=await _.get(a,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:f()}});if(o.data.message.localeCompare("OK")==0){let l=0;if(o.data.result.length>0){let r=o.data.result[0].balance;l=parseInt(r)/10**18}else l=0;return{avax_avax_balance:l.toFixed(2)}}else return{avax_avax_balance:o.data.result}}catch(a){return console.log("evm_avax_getAvaxBalance() exception. add:"+e),console.log(a),{avax_avax_balance:"Net-Err"}}}async function R(e){try{let a=0,o=0,l=1,r=null,s=200;do{const i=x,c=await _.get(i,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:l,offset:s,sort:"desc",apikey:f()}});if(c.data.message.localeCompare("OK")==0){if(a=c.data.result.length,o==0&&a>0){const d=c.data.result[0].timeStamp;r=new Date(d*1e3)}o=o+a,l++}else{if(c.data.message.localeCompare("No transactions found")==0)break;return{avax_tx:c.data.result,avax_last_datetime:null}}}while(a>0&&l<s);return{avax_tx:o,avax_last_datetime:r}}catch(a){return console.log("evm_avax_get_tx_lastdate() exception. add:"+e),console.log(a),{avax_tx:"err",avax_last_datetime:"err"}}}function U(e){try{let a=".";return e.length>=8?(a=e.substring(2,4)+".."+e.substring(e.length-4),{address_trim:a}):{address_trim:e}}catch(a){return console.log("common_get_trim_address() exception. addr is "+e),console.log(a),{address_trim:e}}}function w(){return{coming:"开发中",coming1:"开发中",coming2:"开发中",coming3:"开发中",coming4:"开发中",coming5:"开发中"}}const g=[];g.push("PAYMVXA56BN7H76PZYQ7QIHPXJCGUEWHCX","Y6FJIKCXNT159F41Q16VJ5T9QCJTBSG5WK","PAYMVXA56BN7H76PZYQ7QIHPXJCGUEWHCX");g.push("BGKJ5W53YWEC9IKK6P4439FBQACMU3V9QI","INW733IDV12S1Y99WXIM8A7JHSRVJT5T3G","531M28SEURFTSW4GR8YNGWWF5AHWU1MMRA");g.push("APSZPV3P5YNNPZ1PPCC2YXQBMQ5XRTNWJB","P57ZUQC6JYV9VVE8QRAWVSFWC5KEFSA1QK","GBE9QGUC5DNKEZUZZHKEUQVIXKVEXD3NVU");g.push("EY63WRUEW558TAMCFWVMR2M96TD52X4WCK","YWJMT466YVETD8Q3S1YIQX9AG1R151TIFT","RAWH79CJ8NDK9DURQPW1JU2J27IBF7WU6G");let E="https://optimistic.etherscan.io/api/";function S(){const e=Math.floor(Math.random()*g.length);return g[e]}async function Z(e){try{const a=E,o=await _.get(a,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:S()}});let l=111111;if(o.data.result.length>0){let r=o.data.result[0].balance;l=parseInt(r)/10**18}else l=0;return{op_eth_balance:l.toFixed(2)}}catch(a){return console.log("evm_op_getEthBalance(). add:"+e),console.log(a),{op_eth_balance:"Net-Err"}}}async function z(e){try{let a=0,o=0,l=1,r=null,s=100;do{const i=E,c=await _.get(i,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:l,offset:s,sort:"desc",apikey:S()}});if(c.data.message.localeCompare("OK")==0){if(a=c.data.result.length,o==0&&a>0){const d=c.data.result[0].timeStamp;r=new Date(d*1e3)}o=o+a,l++}else return{op_tx:c.data.message,op_last_datetime:null}}while(a>0&&l<s);return{op_tx:o,op_last_datetime:r}}catch(a){return console.log("evm_op_get_tx_lastdate exception. add:"+e),console.log(a),{op_tx:"Net-Error",op_last_datetime:null}}}const b=[];b.push("JFKSZ6D787KZ7M3ZS1X88HKBN7H6NMSYHN","QNZ8PY5D9H5WUEJEUX1CQ5RF4RYAC6IKJX","P8CARI44DZNG39FP2R352IGV7ZJUR7G3X5");b.push("RAXUB164BIXPV2A2KRH1E81WP9SZB1B83F","V92PSQNFE3MAQ7WUS2YECN97ZIXN5DSD7A","DWRY56T1RIUM2MJYH4QTJQMJYK95WDSFFS");b.push("1X2SN2H6YWFVSYZ17DHATHY5NYCSK7BFHF","WIVKS1MV8E2Q8XVFJEEJCCKRYUPWA14K7S","IW8JUJRRRVH2XVGYDF25269HM1VWGRTVU5");b.push("6MDC9AUAWKMWV2I4EB8C5WA35FD4BQ23MC","RD7NBKQPCXCTZRYQM5UESW34HV8MCMVA6M","496HD4VG6PGFKS17Z8M92A6EU96I69RNDH");let v="https://api.polygonscan.com/api";function T(){const e=Math.floor(Math.random()*b.length);return b[e]}async function O(e){try{const a=v,o=await _.get(a,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:T()}});if(o.data.message.localeCompare("OK")==0){let l=0;if(o.data.result.length>0){let r=o.data.result[0].balance;l=parseInt(r)/10**18}else l=0;return{pol_matic_balance:l.toFixed(2)}}else return{pol_matic_balance:o.data.result}}catch(a){return console.log("evm_polygon_getMaticBalance(). add:"+e),console.log(a),{pol_matic_balance:"Net-Err"}}}async function L(e){try{const a=v,o=await _.get(a,{params:{module:"account",action:"tokenbalance",contractaddress:"0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",address:e,tag:"latest",apikey:T()}});return o.data.message.localeCompare("OK")==0?{pol_lens:o.data.result}:{pol_lens:o.data.result}}catch(a){return console.log("evm_pol_nft_lens exception, add:"+e),console.log(a),{pol_lens:"err"}}}let F="https://api.bscscan.com/api";const h=[];h.push("FY5M9EBMDJAUY2YF9Y9SXWSGGZQ867GG1G","H2XQ83VBY36R32GT765SSNAG98CP6RMPRK","ZXXU9G4F7R2BAXZ2BGG8YCNFK24F9F5DJP");h.push("BR8QDGJXSAFRN5JMPFK7Y7V55JQ34U3FJ4s","C964RQ1V93FI81M8MGKPD4W3KTSHTY7Z6J","TAFKPV73YTQKBPGW8KWVR9E4IYYI3AWFDP");h.push("SIJ1ITMMTKNY67JKD6PESZ47N6SGIFG3C2","8IH3SEGEMVSYS2ZJJGZUI9EBEKM1W6EQMR","NVQBIWI243DW31233A731EGEVY9I6YNP9B");h.push("3UW5UQJTABKAKGSI4KK7A691IVTGNBB6ZU","IP3KUCWDYEQPSZEDUU1Q9CF22YIDQM4JQX","J6C1BZJMKI5MFKHXQN3E68RAYDG6XYFKVI");function D(){const e=Math.floor(Math.random()*h.length);return h[e]}async function j(e){try{const a=F,o=await _.get(a,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:D()}});if(o.data.message.localeCompare("OK")==0){let l=0;if(o.data.result.length>0){let r=o.data.result[0].balance;l=parseInt(r)/10**18}else l=0;return{bsc_bnb_balance:l.toFixed(2)}}else return{bsc_bnb_balance:o.data.result}}catch(a){return console.log("evm_bsc_getBnbBalance(). add:"+e),console.log(a),{bsc_bnb_balance:"Net-Err"}}}async function q(e){try{let a=0,o=0,l=1,r=null,s=200;do{const i=F,c=await _.get(i,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:l,offset:s,sort:"desc",apikey:D()}});if(c.data.message.localeCompare("OK")==0){if(a=c.data.result.length,o==0&&a>0){const d=c.data.result[0].timeStamp;r=new Date(d*1e3)}o=o+a,l++}else{if(c.data.message.localeCompare("No transactions found")==0)break;return{bsc_tx:"-",bsc_last_datetime:c.data.result}}}while(a>0&&l<s);return{bsc_tx:o,bsc_last_datetime:r}}catch(a){return console.log("evm_bsc_get_tx_lastdate() exception. add:"+e),console.log(a),{bsc_tx:"err",bsc_last_datetime:"err"}}}_.defaults.timeout=1e4;let m="NetErr";const p=[];p.push("M21Z95E7NFCEY7SIB1M5QBQ4PEWVCIA14Q","MFI4KXA9YZN68YF2H15EJC1T6RI77ACK68","JZ2KMRXP9NBJN1UJPWST6BHVYE1N594DXN");p.push("S6T18NBGYTUH9EGK6YTKWUBTKGPX7HZUAN","BB24D2HX8K1XFQWCND2JCH18HVDJRQK7NT","NE4XKHVPIX1TZ4HU5KPTE6EWFP5BXUCU57");p.push("6DXT4Y372WZV8DCER46NFFT2YZSTSYNHQ7","6D4G496YWR1N387JCW4V6QJ2I5HD6V3IYW","N623F4X5Z2UHGBR1A8895XMZIAKJY4YAJM");p.push("PQ2I2KVM9DBQG3NZJA3TV9XNC9N5T99R53","XVYREF2F1G7PVC79FEMQWPYAE6SVMR8GIT","TDMIPID6PWPSHVMSBRDDRGYTAPUNNXYTTS");let k="https://api.arbiscan.io/api/",M="https://api-nova.arbiscan.io/api";function y(){const e=Math.floor(Math.random()*p.length);return p[e]}async function $(e){try{const a=k,o=await _.get(a,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:y()}});if(o.data.message.localeCompare("OK")==0){let l=0;if(o.data.result.length>0){let r=o.data.result[0].balance;l=parseInt(r)/10**18}else l=0;return l==0?{arb_eth_balance:0}:{arb_eth_balance:l.toFixed(2)}}else return{arb_eth_balance:o.data.message}}catch(a){return console.log("evm_arb_getEthBalance（） exception add:"+e),console.log(a),{arb_eth_balance:m}}}async function ee(e){try{let a=0,o=0,l=1,r=null,s=100;do{const i=k,c=await _.get(i,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"latest",page:l,offset:s,sort:"desc",apikey:y()}});if(a=c.data.result.length,o==0&&a>0){const d=c.data.result[0].timeStamp;r=new Date(d*1e3)}o=o+a,l++}while(a>0&&l<s);return{arb_tx:o,arb_last_datetime:r}}catch(a){return console.log("evm_arb_get_tx_lastdate () exception, add:"+e),console.log(a),{arb_tx:m,arb_last_datetime:null}}}async function te(e){let a="0x912CE59144191C1204E64559FE8253a0e49E6548";try{const o=k;let r=(await _.get(o,{params:{module:"account",action:"tokenbalance",address:e,contractaddress:a,apikey:y()}})).data.result;return r=parseInt(r)/10**18,r>0&&(r=r.toFixed(2)),{arb_token_balance:r.toString()}}catch(o){return console.log("evm_arb_get_token_balance() exeption add:"+e),console.log(o),{arb_token_balance:m}}}async function ae(e){try{const a=M,o=await _.get(a,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:y()}});let l=0;if(o.data.result.length>0){let r=o.data.result[0].balance;l=parseInt(r)/10**18}else l=0;return{arb_nova_eth_balance:l.toFixed(2)}}catch(a){return console.log("evm_arb_nova_getEthBalance() exception add:"+e),console.log(a),{arb_nova_eth_balance:m}}}async function oe(e){try{let a=0,o=0,l=1,r=null,s=100;do{const i=M,c=await _.get(i,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:l,offset:s,sort:"desc",apikey:y()}});if(a=c.data.result.length,o==0&&a>0){const d=c.data.result[0].timeStamp;r=new Date(d*1e3)}o=o+a,l++}while(a>0&&l<s);return{arb_nova_tx:o,arb_nova_last_datetime:r}}catch(a){return console.log("evm_arb_nova_get_tx_lastdate() exception. add:"+e),console.log(a),{arb_nova_tx:m,arb_nova_last_datetime:null}}}const C=Y("evm",async e=>Object.assign({},...await Promise.all([P(e,"ethereum"),X(e,"ethereum"),V(e),$(e),ee(e),te(e),ae(e),oe(e),O(e),L(e),j(e),q(e),H(e),R(e),K(e),A(e),W(e),B(e),U(e),w(),Z(e),z(e)]))),_e=Q({__name:"EvmView",setup(e){C();const a=[{title:"账号",align:"center",key:"account",header_style:{backgroundColor:t.color1,fontSize:"20px"},children:[{title:"#",align:"left",key:"#",width:n.no,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"别名",align:"left",key:"_alias",custom:!0,width:n.alias,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"地址",align:"left",key:"address_trim",sort:!0,width:n.address,url:"https://debank.com/profile/{key}",header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1,textDecoration:"underline"}}]},{title:"ETH主网",align:"center",key:"ethmain",header_style:{backgroundColor:t.color2,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"eth_balance",width:n.balance,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"TX",align:"center",key:"eth_tx",width:n.tx,url:"https://etherscan.io/address/{key}",sort:!0,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2,textDecoration:"underline"}},{title:"ENS",align:"center",key:"eth_main_ens",width:n.tx,sort:!0,header_style:{backgroundColor:t.color2},cell_style:function(o,l){try{return l&&l.eth_main_ens==0?{backgroundColor:t.color2,color:t.color2}:{backgroundColor:t.color2}}catch{return{backgroundColor:t.color2}}}}]},{title:"ARB-1",align:"center",key:"arb1",header_style:{backgroundColor:t.color1,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"arb_eth_balance",width:n.balance,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"最后",align:"center",key:"arb_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"TX",align:"center",key:"arb_tx",width:n.tx,url:"https://arbiscan.io/address/{key}",sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1,textDecoration:"underline"}},{title:"ARB",align:"center",key:"arb_token_balance",sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}}]},{title:"ARB-Nova",align:"center",key:"arbnova",header_style:{backgroundColor:t.color2,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"arb_nova_eth_balance",width:n.balance,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"最后",align:"center",key:"arb_nova_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"TX",align:"center",key:"arb_nova_tx",url:"https://nova.arbiscan.io/address/{key}",sort:!0,width:n.tx,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2,textDecoration:"underline"}}]},{title:"OP",align:"center",key:"op",header_style:{backgroundColor:t.color1,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"op_eth_balance",width:n.balance,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"最后",align:"center",key:"op_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"TX",align:"center",key:"op_tx",url:"https://nova.arbiscan.io/address/{key}",width:n.tx,sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1,textDecoration:"underline"}}]},{title:"zkSyncEra",align:"center",key:"zkSyncEra",header_style:{backgroundColor:t.color2,fontSize:"20px"},children:[{title:"ETH",align:"center",key:"zksync_era_eth_balance",width:n.balance,sort:!0,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"最后",align:"center",key:"zksync_era_lastdatetime",type:"datetime",sort:!0,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"TX",align:"center",key:"zksync_era_tx",url:"https://explorer.zksync.io/address/{key}",width:n.tx,sort:!0,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2,textDecoration:"underline"}}]},{title:"zkSyncLite",key:"zksynclite",header_style:{backgroundColor:t.color1,fontSize:"20px"},children:[{title:"ETH",align:"center",key:"zksync_lite_eth_balance",width:n.balance,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"最后",align:"center",key:"zksync_lite_lastdate",type:"datetime",width:n.datetime,sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"TX",align:"center",key:"zks_lite_tx",url:"https://zkscan.io/explorer/accounts/{key}",width:n.tx,sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1,textDecoration:"underline"}}]},{title:"Polygon",key:"polygon",header_style:{backgroundColor:t.color2,fontSize:"20px"},children:[{title:"Matic",align:"center",key:"pol_matic_balance",width:n.balance,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"Lens",align:"center",key:"pol_lens",width:n.tx,header_style:{backgroundColor:t.color2},cell_style:function(o,l){try{return l&&l.pol_lens==0?{backgroundColor:t.color2,color:t.color2}:{backgroundColor:t.color2}}catch{return{backgroundColor:t.color2}}}}]},{title:"BSC",key:"bsc",header_style:{backgroundColor:t.color1,fontSize:"20px"},children:[{title:"BNB",align:"center",key:"bsc_bnb_balance",width:n.balance,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"最后",align:"center",key:"bsc_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1}},{title:"TX",align:"center",key:"bsc_tx",url:"https://bscscan.com/address/{key}",width:n.tx,sort:!0,header_style:{backgroundColor:t.color1},cell_style:{backgroundColor:t.color1,textDecoration:"underline"}}]},{title:"AVAX",key:"avax",header_style:{backgroundColor:t.color2,fontSize:"20px"},children:[{title:"AVAX",align:"center",key:"avax_avax_balance",width:n.balance,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"最后",align:"center",key:"avax_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2}},{title:"TX",align:"center",key:"avax_tx",url:"https://snowtrace.io/address/{key}",width:n.tx,sort:!0,header_style:{backgroundColor:t.color2},cell_style:{backgroundColor:t.color2,textDecoration:"underline"}}]}];return(o,l)=>(G(),I(N,{columns:a,store:J(C)(),"key-label":"账号","page-size":10},null,8,["store"]))}});export{_e as default};
