import{m as W,_ as V}from"./store-fce7011d.js";import{a as i}from"./axios-4a70c6fc.js";import{d as P,a as G,c as Q,u as z,o as Z}from"./index-cb2d39ae.js";import{f as N}from"./units-78654110.js";const w={ethereum:"https://eth.llamarpc.com",optimism:"https://optimism-mainnet.public.blastapi.io",arbitrum:"https://rpc.ankr.com/arbitrum",polygon:"https://polygon-bor.publicnode.com",bsc:"https://bscrpc.com"},y=[];y.push("M21Z95E7NFCEY7SIB1M5QBQ4PEWVCIA14Q","MFI4KXA9YZN68YF2H15EJC1T6RI77ACK68","JZ2KMRXP9NBJN1UJPWST6BHVYE1N594DXN");y.push("S6T18NBGYTUH9EGK6YTKWUBTKGPX7HZUAN","BB24D2HX8K1XFQWCND2JCH18HVDJRQK7NT","NE4XKHVPIX1TZ4HU5KPTE6EWFP5BXUCU57");const k=[];k.push("IWYIQ1STMBJPRD6Q22T7VT4S1DP2QE3RUI","RD1VT95VZMMVC783SX7RR65GZCYBH7A5UH","6HKKR4RRGSC8YMMJCNTPHJU7CCAFFGE8W1");k.push("T7DYIZHU8WVI37CNNHQPXYF3N3R74B2CVK","ZC1A5RMBJ4AN8RAC3UB71WRBBG9BRVUJMH","81NDCZ2KDCTZUZVR972QJ5KPZNGBKPAQ2R");const C=[];C.push("JFKSZ6D787KZ7M3ZS1X88HKBN7H6NMSYHN","QNZ8PY5D9H5WUEJEUX1CQ5RF4RYAC6IKJX","P8CARI44DZNG39FP2R352IGV7ZJUR7G3X5");C.push("RAXUB164BIXPV2A2KRH1E81WP9SZB1B83F","V92PSQNFE3MAQ7WUS2YECN97ZIXN5DSD7A","DWRY56T1RIUM2MJYH4QTJQMJYK95WDSFFS");const f=[];f.push("FY5M9EBMDJAUY2YF9Y9SXWSGGZQ867GG1G","H2XQ83VBY36R32GT765SSNAG98CP6RMPRK","ZXXU9G4F7R2BAXZ2BGG8YCNFK24F9F5DJP");f.push("BR8QDGJXSAFRN5JMPFK7Y7V55JQ34U3FJ4s","C964RQ1V93FI81M8MGKPD4W3KTSHTY7Z6J","TAFKPV73YTQKBPGW8KWVR9E4IYYI3AWFDP");const x=[];x.push("PAYMVXA56BN7H76PZYQ7QIHPXJCGUEWHCX","Y6FJIKCXNT159F41Q16VJ5T9QCJTBSG5WK","PAYMVXA56BN7H76PZYQ7QIHPXJCGUEWHCX");x.push("BGKJ5W53YWEC9IKK6P4439FBQACMU3V9QI","INW733IDV12S1Y99WXIM8A7JHSRVJT5T3G","531M28SEURFTSW4GR8YNGWWF5AHWU1MMRA");const v=[];v.push("6WEVZ2C19ASZ2FH8DUP82JZ6ZKDVYNNZQK","Q52GXXEV93DI5HHFJX7F6MW9VDNF2MMT9F","	QD6XVST5AXSGFVEH3QSAE4ATJJAYUMFK9Q");v.push("GP2J7PQ9GAWIXSR362QPPJY2WVRIGUSHDM","W5KANQ76WA2AP48TVY6SMB7JFSYNP1HJV3","	NSG8CUMI3IFCDCTNUUEVECJXTKVZW21WFA");function U(){const e=Math.floor(Math.random()*k.length);return k[e]}function h(){const e=Math.floor(Math.random()*y.length);return y[e]}function H(){const e=Math.floor(Math.random()*C.length);return C[e]}function I(){const e=Math.floor(Math.random()*f.length);return f[e]}function K(){const e=Math.floor(Math.random()*x.length);return x[e]}function R(){const e=Math.floor(Math.random()*v.length);return v[e]}async function q(e,t){try{let a=w[t];if(!a)return"Error: Invalid Network Name";let l=(await i.post(a,{jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:1})).data.result,n="0x..";return e.length>=4&&(n=n+e.substring(e.length-4)),l=parseInt(l,16)/10**18,l=l.toFixed(2),{eth_balance:l,address_trim:n}}catch(a){return console.log("evm_getEthBalance() exception:"+a),{eth_balance:0,address_trim:"err"}}}async function O(e,t){try{let a=w[t];if(!a)return"Error: Invalid Network Name";const l=(await i.post(a,{jsonrpc:"2.0",method:"eth_getTransactionCount",params:[e,"latest"],id:1})).data.result;return{eth_tx:parseInt(l,16)}}catch(a){return console.log("evm_getTxCount() exception:"+a),{eth_tx:"err"}}}async function L(e){try{const t="https://api.etherscan.io/api/",a=await i.get(t,{params:{module:"account",action:"tokenbalance",contractaddress:"0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85",address:e,tag:"latest",apikey:U()}});return a.data.message.localeCompare("OK")==0?{eth_main_ens:a.data.result}:{eth_main_ens:a.data.message}}catch(t){return console.log("evm_eth_nft_ens exception, add:"+e),console.log(t),{eth_main_ens:"err"}}}async function D(e){try{const t="https://api.arbiscan.io/api/",a=await i.get(t,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:h()}});let o=0;if(a.data.result.length>0){let l=a.data.result[0].balance;o=parseInt(l)/10**18}else o=0;return{arb_eth_balance:o.toFixed(2)}}catch(t){return console.log("add:"+e),console.log(t),{arb_eth_balance:"err"}}}async function j(e){try{let t=0,a=0,o=1,l=null,n=100;do{const c="https://api.arbiscan.io/api/",r=await i.get(c,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"latest",page:o,offset:n,sort:"desc",apikey:h()}});if(t=r.data.result.length,a==0&&t>0){const s=r.data.result[0].timeStamp;l=new Date(s*1e3)}a=a+t,o++}while(t>0&&o<n);return{arb_tx:a,arb_last_datetime:l}}catch(t){return console.log("add:"+e),console.log(t),{arb_tx:"err",arb_last_datetime:"err"}}}async function $(e){let t="arb",a="0x912CE59144191C1204E64559FE8253a0e49E6548";try{const o="https://api.arbiscan.io/api/";let n=(await i.get(o,{params:{module:"account",action:"tokenbalance",address:e,contractaddress:a,apikey:h()}})).data.result;return n=parseInt(n)/10**18,n=n.toFixed(2),{arb_token_balance:t+" "+n.toString()}}catch(o){return console.log("evm_arb_get_token_balance() add:"+e),console.log(o),{arb_tx:"err",arb_last_datetime:"err"}}}async function ee(e){try{const t="https://api-nova.arbiscan.io/api",a=await i.get(t,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:h()}});let o=0;if(a.data.result.length>0){let l=a.data.result[0].balance;o=parseInt(l)/10**18}else o=0;return{arb_nova_eth_balance:o.toFixed(2)}}catch(t){return console.log("evm_arb_nova_getEthBalance. add:"+e),console.log(t),{arb_nova_eth_balance:"err"}}}async function te(e){try{let t=0,a=0,o=1,l=null,n=100;do{const c="https://api-nova.arbiscan.io/api/",r=await i.get(c,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:o,offset:n,sort:"desc",apikey:h()}});if(t=r.data.result.length,a==0&&t>0){const s=r.data.result[0].timeStamp;l=new Date(s*1e3)}a=a+t,o++}while(t>0&&o<n);return{arb_nova_tx:a,arb_nova_last_datetime:l}}catch(t){return console.log("evm_arb_nova_get_tx_lastdate. add:"+e),console.log(t),{arb_nova_tx:"err",arb_nova_last_datetime:"err"}}}async function ae(e){try{const t="https://optimistic.etherscan.io/api/",a=await i.get(t,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:K()}});let o=111111;if(a.data.result.length>0){let l=a.data.result[0].balance;o=parseInt(l)/10**18}else o=0;return console.log("float_eth_balance: "+o),{op_eth_balance:o.toFixed(2)}}catch(t){return console.log("evm_op_getEthBalance(). add:"+e),console.log(t),{op_eth_balance:"Net-Err"}}}async function oe(e){try{let t=0,a=0,o=1,l=null,n=100;do{const c="https://optimistic.etherscan.io/api/",r=await i.get(c,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:o,offset:n,sort:"desc",apikey:K()}});if(r.data.message.localeCompare("OK")==0){if(t=r.data.result.length,a==0&&t>0){const s=r.data.result[0].timeStamp;l=new Date(s*1e3)}a=a+t,o++}else return{op_tx:r.data.message,op_last_datetime:null}}while(t>0&&o<n);return{op_tx:a,op_last_datetime:l}}catch(t){return console.log("evm_op_get_tx_lastdate. add:"+e),console.log(t),{op_tx:"Net-Error",op_last_datetime:null}}}async function le(e){let t="https://zksync2-mainnet-explorer.zksync.io/address/"+e;const a=await i.get(t);let o,l;return"0x0000000000000000000000000000000000000000"in a.data.info.balances?(l=parseInt(a.data.info.balances["0x0000000000000000000000000000000000000000"].balance,16)/10**18,l=l.toFixed(2)):l=0,o=a.data.info.sealedNonce,{zkse_balance:l,zkse_tx:o}}async function ne(e){let t="https://api.zksync.io/jsrpc";const a=await i.post(t,{id:1,jsonrpc:"2.0",method:"account_info",params:[e]});let o;"ETH"in a.data.result.committed.balances?(o=a.data.result.committed.balances.ETH/10**18,o=o.toFixed(2)):o=0;let l=a.data.result.committed.nonce;return{lite_eth_balance:o,zks_tx:l}}async function re(e){const t="https://zksync2-mainnet-explorer.zksync.io/transactions",a=await i.get(t,{params:{limit:5,direction:"older",accountAddress:e}});return a.data.total===0?{last_tx_datetime:"无交易"}:{last_tx_datetime:a.data.list[0].receivedAt}}async function se(e){let t=null,a=100,o=0,l=0,n=new Set,c=new Set,r=new Set,s=0;do{let b="https://api.zksync.io/api/v0.1/account/"+e+"/history/"+o.toString()+"/"+a.toString();const p=await i.get(b,{});if(s++,s>1e3)break;l=p.data.length,o+=l;for(const d of p.data){const m=P(d.created_at);n.add(m.format("YYYY-MM-DD")),c.add(m.format("YYYY-ww")),r.add(m.format("YYYY-MM")),t==null&&(t=d.created_at)}}while(l>0);return n.size,c.size,r.size,{lite_unique_stat:r.size.toString()+"-"+c.size.toString()+"-"+n.size.toString(),lite_jiaoyi_jine:"Coming",lite_LastDate_lite:t}}async function ce(e){const t="https://zksync2-mainnet-explorer.zksync.io/transactions";let a=0,o=new Set,l=new Set,n=new Set,c=new Set,r=0,s=0,_=0,u=0,b=0,p=null,d=null,m=100,F=0;do{const M=await i.get(t,{params:{limit:m,direction:"older",accountAddress:e,fromBlockNumber:d,fromTxIndex:p,offset:b}});F=M.data.total,b+=F;for(const g of M.data.list){d=g.blockNumber,p=g.indexInBlock;const S=P(g.receivedAt);if(a+=parseInt(g.fee,16)/10**18,o.add(g.data.contractAddress),l.add(S.format("YYYY-MM-DD")),n.add(S.format("YYYY-ww")),c.add(S.format("YYYY-MM")),g.isL1Originated===!0){r++;const T=N(g.data.value);s+=parseFloat(T)}else if(g.data.contractAddress==="0x000000000000000000000000000000000000800a"){_++;const T=N(g.data.value);u+=parseFloat(T)}}}while(F>=m);const J=o.size,E=l.size,B=n.size,Y=c.size,X=Y.toString()+"-"+B.toString()+"-"+E.toString();return{total_fee:a.toFixed(4),unique_contracts_count:J,era_unique_stat:X,unique_days_count:E,unique_weeks_count:B,unique_months_count:Y,l1_to_l2_count:r,l1_to_l2_amount:s,l2_to_l1_count:_,l2_to_l1_amount:u}}async function ie(e){try{const t="https://api.polygonscan.com/api",a=await i.get(t,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:H()}});if(a.data.message.localeCompare("OK")==0){let o=0;if(a.data.result.length>0){let l=a.data.result[0].balance;o=parseInt(l)/10**18}else o=0;return{pol_matic_balance:o.toFixed(2)}}else return{pol_matic_balance:a.data.result}}catch(t){return console.log("evm_polygon_getMaticBalance(). add:"+e),console.log(t),{pol_matic_balance:"Net-Err"}}}async function _e(e){try{const t="https://api.polygonscan.com/api",a=await i.get(t,{params:{module:"account",action:"tokenbalance",contractaddress:"0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",address:e,tag:"latest",apikey:H()}});return a.data.message.localeCompare("OK")==0?{pol_lens:a.data.result}:{pol_lens:a.data.result}}catch(t){return console.log("evm_pol_nft_lens exception, add:"+e),console.log(t),{pol_lens:"err"}}}async function ue(e){try{const t="https://api.bscscan.com/api",a=await i.get(t,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:I()}});if(a.data.message.localeCompare("OK")==0){let o=0;if(a.data.result.length>0){let l=a.data.result[0].balance;o=parseInt(l)/10**18}else o=0;return{bsc_bnb_balance:o.toFixed(2)}}else return{bsc_bnb_balance:a.data.result}}catch(t){return console.log("evm_bsc_getBnbBalance(). add:"+e),console.log(t),{bsc_bnb_balance:"Net-Err"}}}async function de(e){try{let t=0,a=0,o=1,l=null,n=200;do{const c="https://api.bscscan.com/api",r=await i.get(c,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:o,offset:n,sort:"desc",apikey:I()}});if(r.data.message.localeCompare("OK")==0){if(t=r.data.result.length,a==0&&t>0){const s=r.data.result[0].timeStamp;l=new Date(s*1e3)}a=a+t,o++}else{if(r.data.message.localeCompare("No transactions found")==0)break;return{bsc_tx:"-",bsc_last_datetime:r.data.result}}}while(t>0&&o<n);return{bsc_tx:a,bsc_last_datetime:l}}catch(t){return console.log("evm_bsc_get_tx_lastdate() exception. add:"+e),console.log(t),{bsc_tx:"err",bsc_last_datetime:"err"}}}async function ge(e){try{const t="https://api.snowtrace.io/api",a=await i.get(t,{params:{module:"account",action:"balancemulti",address:e,tag:"latest",apikey:R()}});if(a.data.message.localeCompare("OK")==0){let o=0;if(a.data.result.length>0){let l=a.data.result[0].balance;o=parseInt(l)/10**18}else o=0;return{avax_avax_balance:o.toFixed(2)}}else return{avax_avax_balance:a.data.result}}catch(t){return console.log("evm_avax_getAvaxBalance() exception. add:"+e),console.log(t),{avax_avax_balance:"Net-Err"}}}async function pe(e){try{let t=0,a=0,o=1,l=null,n=200;do{const c="https://api.snowtrace.io/api",r=await i.get(c,{params:{module:"account",action:"txlist",address:e,startblock:"0",endblock:"99999999",page:o,offset:n,sort:"desc",apikey:R()}});if(r.data.message.localeCompare("OK")==0){if(t=r.data.result.length,a==0&&t>0){const s=r.data.result[0].timeStamp;l=new Date(s*1e3)}a=a+t,o++}else{if(r.data.message.localeCompare("No transactions found")==0)break;return{avax_tx:r.data.result,avax_last_datetime:null}}}while(t>0&&o<n);return{avax_tx:a,avax_last_datetime:l}}catch(t){return console.log("evm_avax_get_tx_lastdate() exception. add:"+e),console.log(t),{avax_tx:"err",avax_last_datetime:"err"}}}const A=W("evm",async e=>Object.assign({},...await Promise.all([q(e,"ethereum"),O(e,"ethereum"),L(e),D(e),ne(e),le(e),ce(e),se(e),re(e),D(e),j(e),ee(e),ie(e),_e(e),ue(e),de(e),ge(e),pe(e),te(e),ae(e),oe(e),$(e)]))),ke=G({__name:"EvmView",setup(e){A();let t="#99CC99",a="#FFFF99",o="#99CC99",l="#FFFF99",n="#99CC99",c="#FFFF99",r="#99CC99",s="#FFFF99",_="#99CC99",u="#FFFF99";const b=[{title:"账号",align:"center",header_style:{backgroundColor:t,fontSize:"20px"},children:[{title:"#",align:"left",key:"#",width:50,header_style:{backgroundColor:t},cell_style:{backgroundColor:t}},{title:"别名",align:"left",key:"_alias",custom:!0,header_style:{backgroundColor:t},cell_style:{backgroundColor:t}},{title:"地址",align:"left",key:"address_trim",sort:!0,url:"https://debank.com/profile/{key}",header_style:{backgroundColor:t},cell_style:{backgroundColor:t,textDecoration:"underline"}}]},{title:"ETH主网",align:"center",header_style:{backgroundColor:a,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"eth_balance",header_style:{backgroundColor:a},cell_style:{backgroundColor:a}},{title:"交易次数",align:"center",key:"eth_tx",url:"https://etherscan.io/address/{key}",sort:!0,header_style:{backgroundColor:a},cell_style:{backgroundColor:a,textDecoration:"underline"}},{title:"ENS",align:"center",key:"eth_main_ens",sort:!0,header_style:{backgroundColor:a},cell_style:{backgroundColor:a}}]},{title:"ARB-1",align:"center",header_style:{backgroundColor:o,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"arb_eth_balance",header_style:{backgroundColor:o},cell_style:{backgroundColor:o}},{title:"最后",align:"center",key:"arb_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:o},cell_style:{backgroundColor:o}},{title:"交互次数",align:"center",key:"arb_tx",url:"https://arbiscan.io/address/{key}",sort:!0,header_style:{backgroundColor:o},cell_style:{backgroundColor:o,textDecoration:"underline"}},{title:"Token",align:"center",key:"arb_token_balance",sort:!0,header_style:{backgroundColor:t},cell_style:{backgroundColor:o}}]},{title:"ARB-Nova",align:"center",header_style:{backgroundColor:l,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"arb_nova_eth_balance",header_style:{backgroundColor:l},cell_style:{backgroundColor:l}},{title:"最后",align:"center",key:"arb_nova_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:l},cell_style:{backgroundColor:l}},{title:"交互次数",align:"center",key:"arb_nova_tx",url:"https://nova.arbiscan.io/address/{key}",sort:!0,header_style:{backgroundColor:l},cell_style:{backgroundColor:l,textDecoration:"underline"}}]},{title:"OP",align:"center",header_style:{backgroundColor:o,fontSize:"20px"},children:[{title:"ETH",align:"center",sort:!0,key:"op_eth_balance",header_style:{backgroundColor:n},cell_style:{backgroundColor:n}},{title:"最后",align:"center",key:"op_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:n},cell_style:{backgroundColor:n}},{title:"交互次数",align:"center",key:"op_tx",url:"https://nova.arbiscan.io/address/{key}",sort:!0,header_style:{backgroundColor:n},cell_style:{backgroundColor:n,textDecoration:"underline"}}]},{title:"zkSyncEra",align:"center",header_style:{backgroundColor:c,fontSize:"20px"},children:[{title:"ETH",align:"center",key:"zkse_balance",sort:!0,header_style:{backgroundColor:c},cell_style:{backgroundColor:c}},{title:"最后交易",align:"center",key:"last_tx_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:c},cell_style:{backgroundColor:c}},{title:"交易次数",align:"center",key:"zkse_tx",url:"https://explorer.zksync.io/address/{key}",sort:!0,header_style:{backgroundColor:n},cell_style:{backgroundColor:c,textDecoration:"underline"}}]},{title:"zkSyncLite",header_style:{backgroundColor:r,fontSize:"20px"},children:[{title:"ETH",align:"center",key:"lite_eth_balance",header_style:{backgroundColor:r},cell_style:{backgroundColor:r}},{title:"最后交易",align:"center",key:"lite_LastDate_lite",type:"datetime",sort:!0,header_style:{backgroundColor:r},cell_style:{backgroundColor:r}},{title:"交易次数",align:"center",key:"zks_tx",url:"https://zkscan.io/explorer/accounts/{key}",sort:!0,header_style:{backgroundColor:r},cell_style:{backgroundColor:r,textDecoration:"underline"}}]},{title:"Polygon",header_style:{backgroundColor:s,fontSize:"20px"},children:[{title:"Matic",align:"center",key:"pol_matic_balance",header_style:{backgroundColor:s},cell_style:{backgroundColor:s}},{title:"Lens",align:"center",key:"pol_lens",header_style:{backgroundColor:s},cell_style:function(p,d){try{return d&&d.pol_lens==0?{backgroundColor:s,olor:s}:{backgroundColor:s}}catch{return{backgroundColor:s}}}}]},{title:"BSC",header_style:{backgroundColor:_,fontSize:"20px"},children:[{title:"BNB",align:"center",key:"bsc_bnb_balance",header_style:{backgroundColor:_},cell_style:{backgroundColor:_}},{title:"最后交易",align:"center",key:"bsc_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:_},cell_style:{backgroundColor:_}},{title:"交易次数",align:"center",key:"bsc_tx",url:"https://bscscan.com/address/{key}",sort:!0,header_style:{backgroundColor:_},cell_style:{backgroundColor:_,textDecoration:"underline"}}]},{title:"AVAX",header_style:{backgroundColor:u,fontSize:"20px"},children:[{title:"AVAX",align:"center",key:"avax_avax_balance",header_style:{backgroundColor:u},cell_style:{backgroundColor:u}},{title:"最后交易",align:"center",key:"avax_last_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:u},cell_style:{backgroundColor:u}},{title:"交易次数",align:"center",key:"avax_tx",url:"https://snowtrace.io/address/{key}",sort:!0,header_style:{backgroundColor:u},cell_style:{backgroundColor:u,textDecoration:"underline"}}]}];return(p,d)=>(Z(),Q(V,{columns:b,store:z(A)()},null,8,["store"]))}});export{ke as default};
