import{m as X,_ as C}from"./store-287816c0.js";import{a as I}from"./axios-4a70c6fc.js";import{a as M,c as k,u as G,o as S}from"./index-1a72affc.js";const f={bsc:"https://api.bscscan.com",ftm:"https://api.ftmscan.com",metis:"https://andromeda-explorer.metis.io",avax:"https://api.snowtrace.io",matic:"https://api.polygonscan.com",arb:"https://api.arbiscan.io",op:"https://api-optimistic.etherscan.io",eth:"https://api.etherscan.io"},T={bsc:["IHA6XUNGC9A8CS1EVB4ZKMMNCEVWQYWGNF","35GX1RBQBNKDSS2QFF8YZ9IJ4MUPD8FBV4","KD21NU93H2696XZGUE6IIZX291V2291WBZ"],ftm:["7NS7WM87WNYTDWXFRUP1QFVEGEMEWWTT1R","JUEKUR5XBG5Z4WQUV71IZHJCPGVWADGHY3","YCTIQFTS8AXJQVE84CYY2FSGU9JYHWTEMN"],metis:[""],avax:["XZVMR1A53KHXIEZV2X5QYZ2GSYFDDHUGVS","PX4ZC7BFCMF51E7DC7JKDWERHYCW8JNPM7","B4XCRBZYZX26NGZG1XJB7UIDGDWF8TYSHT"],matic:["5N7B38PZTENUK44XDF3WUPFFN68ICZ87Y3","SIKU51V7YGAYUZF8HJ7R5FE6WHBP4Z6VEI","SMIPK99XJR9IXRSSCDHWJB8CT4YKTKJC4E"],arb:["FTAT7G2F45P8VNVQG66SGF7T4TS6R2QFGY","MXKDX8ZX8H5P34WFXFZF1YEPA6X6DDIV5R","WBCVFF7GVC4XJZFMS3EZJVVPMAH14IT7SU"],op:["C8JSVBMBI2NBBYWUJ99ZR2QCQ8GB33NFGB"],eth:["FPFT5EGK6F4JS97IA4E8SI24UN559W53VI","XHSCQN5JZHT4WY1JCATJTN4IDGX2PU6WHH","ADX2IDIUKD57WAM1GN6YA9E9Y9R3W5CXMC"]};let n={};async function W(t){const r=Object.keys(f).map(async e=>{const a=f[e],p=T[e],F=Math.floor(Math.random()*p.length);let m=p[F],u=0;t=t.toLowerCase();let i;m===null?i=`${a}/api?module=account&action=txlist&address=${t}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc`:i=`${a}/api?module=account&action=txlist&address=${t}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=${m}`;const o=await I.get(i);for(let s=0;s<o.data.result.length;s++){const x=o.data.result[s].input.slice(0,10);o.data.result[s].from===t&&o.data.result[s].txreceipt_status==="1"&&["0x9fbf10fc","0x1114cd2a","0xc858f5f9","0x76a9099a","0x2e15238c","0xae30f6ee","0xc45dec27","0x2cdf0b95","0x879762e2","0x656f3d64","0x51905636","0xad660825","0xfe359a0d","0xca23bb4c","0x00000005"].includes(x)&&(u+=1)}return{net:e,tx:u}}),l=await Promise.all(r);let c=0;return l.forEach(({net:e,tx:a})=>{c+=a,n[e]=a}),n.total=c,n}const Z=X("layerzero",async t=>Object.assign({},await W(t))),d=M({__name:"LayerZeroView",setup(t){const r=[{title:"#",align:"center",key:"#"},{title:"别名",align:"center",key:"_alias",custom:!0},{title:"地址",align:"center",key:"key"},{title:"ETH",align:"center",key:"eth",sort:!0},{title:"MATIC",align:"center",key:"matic",sort:!0},{title:"BSC",align:"center",key:"bsc",sort:!0},{title:"ARB",align:"center",key:"arb",sort:!0},{title:"OP",align:"center",key:"op",sort:!0},{title:"AVAX",align:"center",key:"avax",sort:!0},{title:"FTM",align:"center",key:"ftm",sort:!0},{title:"METIS",align:"center",key:"metis",sort:!0},{title:"合计",align:"center",key:"total",sort:!0}];return(l,c)=>(S(),k(C,{columns:r,store:G(Z)()},null,8,["store"]))}});export{d as default};
