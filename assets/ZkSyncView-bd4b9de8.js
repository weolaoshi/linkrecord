import{m as s,_ as u}from"./store-a2ea5472.js";import{g as d,e as _,a as k,z as y,h as g,i as z,f as b,d as h,c as C}from"./zksync-2b946a6f.js";import{g as e,b as o,a as t}from"./global-9c3e8356.js";import{d as f,c as S,u as p,o as m}from"./index-004acf52.js";import"./axios-4a70c6fc.js";const a=s("zksync",async l=>Object.assign({},...await Promise.all([d(l),_(l,"ethereum"),k(l,"ethereum"),y(l),g(l),z(l),b(l),h(l),C(l)]))),H=f({__name:"ZkSyncView",setup(l){a();const i=[{title:"账号",align:"center",key:"account",header_style:{backgroundColor:e.color1,fontSize:o.size1},children:[{title:"#",align:"left",key:"#",width:t.no,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1}},{title:"别名",align:"left",key:"_alias",width:t.alias,custom:!0,header_style:{backgroundColor:e.color1,fontSize:o.size2},cell_style:{backgroundColor:e.color1}},{title:"地址",align:"left",key:"address_trim",width:t.address,ellipsis:!0,header_style:{backgroundColor:e.color1,fontSize:o.size2},url:"https://debank.com/profile/{key}",cell_style:{backgroundColor:e.color1,textDecoration:"underline"}}]},{title:"ETH主网",align:"center",key:"ethmain",header_style:{backgroundColor:e.color2,fontSize:o.size1},children:[{title:"ETH",align:"center",sort:!0,key:"eth_balance",url:"https://etherscan.io/address/{key}",width:t.balance,header_style:{backgroundColor:e.color2,fontSize:o.size2},cell_style:{backgroundColor:e.color2,textDecoration:"underline"}},{title:"TX",align:"center",key:"eth_tx",url:"https://etherscan.io/address/{key}",sort:!0,width:t.tx,header_style:{backgroundColor:e.color2,fontSize:o.size2},cell_style:function(c,r){try{return r&&r.eth_tx<1?{backgroundColor:e.color2,color:e.color2}:{backgroundColor:e.color2,textDecoration:"underline"}}catch{return{backgroundColor:e.color2,textDecoration:"underline"}}}}]},{title:"ZkSyncEra",align:"center",key:"zksyncEra",header_style:{backgroundColor:e.color1,fontSize:o.size1},children:[{title:"交互",align:"center",key:"zksyncera_jiaohu",header_style:{backgroundColor:e.color1,fontSize:o.size2},children:[{title:"最后",align:"center",key:"zksync_era_lastdatetime",url:"https://explorer.zksync.io/address/{key}",type:"datetime",sort:!0,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1,textDecoration:"underline"}},{title:"TX",align:"center",key:"zksync_era_tx",url:"https://explorer.zksync.io/address/{key}",sort:!0,width:t.tx,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zksync_era_tx<1?{backgroundColor:e.color1,color:e.color1}:{backgroundColor:e.color1,textDecoration:"underline"}}catch{return{backgroundColor:e.color1,textDecoration:"underline"}}}}]},{title:"代币",align:"center",key:"zksyncera_token",header_style:{backgroundColor:e.color1,fontSize:o.size2},children:[{title:"ETH",align:"center",key:"zksync_era_eth_balance",sort:!0,width:t.balance,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zksync_era_eth_balance==0?{backgroundColor:e.color1,color:e.color1}:{backgroundColor:e.color1}}catch{return{backgroundColor:e.color1}}}},{title:"USDC",align:"center",key:"zksync_era_usdc_balance",sort:!0,width:t.balance,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zksync_era_usdc_balance==0?{backgroundColor:e.color1,color:e.color1}:{backgroundColor:e.color1}}catch{return{backgroundColor:e.color1}}}},{title:"其他代币",align:"center",key:"zksync_other_token_list",width:100,url:"https://zksync2-mainnet.zkscan.io/api?module=account&action=tokenlist&address={key}",header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1,textDecoration:"underline"}}]},{title:"官方桥",align:"center",key:"zksyncera_bridge",header_style:{backgroundColor:e.color1,fontSize:o.size2},children:[{title:"入 次数-ETH",align:"center",key:"zksync_era_bridge_l1_to_l2",width:100,sort:!0,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1}},{title:"出 次数-ETH",align:"center",key:"zksync_era_bridge_l2_to_l1",width:100,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1}}]},{title:"活跃统计",key:"alivestat",header_style:{backgroundColor:e.color1,fontSize:o.size2},children:[{title:"活跃月周日",align:"center",key:"era_unique_stat",header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1}},{title:"合约",align:"center",key:"unique_contracts_count",sort:!0,width:t.tx,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1}},{title:"手续费",align:"center",key:"total_fee",sort:!0,header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1}}]}]},{title:"ZkSyncLite",key:"ZkSyncLite",header_style:{backgroundColor:e.color2,fontSize:o.size1},children:[{title:"交互",align:"center",key:"zksynclite_jiaohu",header_style:{backgroundColor:e.color2,fontSize:o.size2},children:[{title:"最后",align:"center",key:"zksync_lite_lastdate",type:"datetime",sort:!0,url:"https://zkscan.io/explorer/accounts/{key}",header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:{backgroundColor:e.color2,textDecoration:"underline"}},{title:"TX",align:"center",key:"zks_lite_tx",url:"https://zkscan.io/explorer/accounts/{key}",sort:!0,width:t.tx,header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zks_tx==0?{backgroundColor:e.color2,color:e.color2}:{backgroundColor:e.color2}}catch{return{backgroundColor:e.color2}}}}]},{title:"代币",align:"center",key:"zksynclite_token",header_style:{backgroundColor:e.color2,fontSize:o.size2},children:[{title:"ETH",align:"center",key:"zksync_lite_eth_balance",width:t.balance,sort:!0,header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zksync_lite_eth_balance==0?{backgroundColor:e.color2,color:e.color2}:{backgroundColor:e.color2}}catch{return{backgroundColor:e.color2}}}},{title:"USDC",align:"center",key:"zksync_lite_usdc_balance",width:t.balance,sort:!0,header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zksync_lite_usdc_balance==0?{backgroundColor:e.color2,color:e.color2}:{backgroundColor:e.color2}}catch{return{backgroundColor:e.color2}}}},{title:"ZZ",align:"center",key:"zksync_lite_zz_balance",width:t.balance,sort:!0,header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zksync_lite_zz_balance==0?{backgroundColor:e.color2,color:e.color2}:{backgroundColor:e.color2}}catch{return{backgroundColor:e.color2}}}},{title:"其他代币",align:"center",key:"zksync_list_other_tokens",width:100,header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:{backgroundColor:e.color2}}]},{title:"官方桥",align:"center",key:"zksynclite_bridge",header_style:{backgroundColor:e.color2,fontSize:o.size2},children:[{title:"入 次数-ETH",align:"center",key:"zksync_lite_l1_2_l2",header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:{backgroundColor:e.color2}},{title:"出 次数-ETH",align:"center",key:"zksync_lite_l2_2_l1",url:"https://zkscan.io/explorer/accounts/{key}",sort:!0,header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:{backgroundColor:e.color2}}]},{title:"活跃统计",align:"center",key:"zksynclite_alive_stat",header_style:{backgroundColor:e.color2,fontSize:o.size2},children:[{title:"活跃月周日",align:"center",key:"lite_unique_stat",header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.lite_unique_stat.localeCompare("0-0-0")==0?{backgroundColor:e.color2,color:e.color2}:{backgroundColor:e.color2}}catch{return{backgroundColor:e.color2}}}},{title:"SWAP金额",align:"center",key:"zksync_lite_swap_volume",url:"https://zkscan.io/explorer/accounts/{key}",sort:!0,header_style:{backgroundColor:e.color2,fontSize:o.size3},cell_style:function(c,r){try{return r&&r.zksync_lite_swap_volume==0?{backgroundColor:e.color2,color:e.color2}:{backgroundColor:e.color2}}catch{return{backgroundColor:e.color2}}}}]}]},{title:"第3方分析",key:"three",header_style:{backgroundColor:e.color1,fontSize:o.size1},children:[{title:"byfishh",align:"center",key:"link",url:"https://byfishh.github.io/zk-flow/?address={key}",header_style:{backgroundColor:e.color1,fontSize:o.size3},cell_style:{backgroundColor:e.color1,textDecoration:"underline"}}]}];return(c,r)=>(m(),S(u,{columns:i,store:p(a)(),"key-label":"账号","page-size":10},null,8,["store"]))}});export{H as default};
