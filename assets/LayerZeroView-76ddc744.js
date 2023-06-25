import{m as P,_ as R}from"./store-7f5809bf.js";import{a as T}from"./axios-4a70c6fc.js";import{a as W,c as N,u as p,o as Q}from"./index-d6ef5c64.js";const J={bsc:"https://api.bscscan.com",ftm:"https://api.ftmscan.com",metis:"https://andromeda-explorer.metis.io",avax:"https://api.snowtrace.io",matic:"https://api.polygonscan.com",arb:"https://api.arbiscan.io",op:"https://api-optimistic.etherscan.io",eth:"https://api.etherscan.io"},S={bsc:["FY5M9EBMDJAUY2YF9Y9SXWSGGZQ867GG1G","H2XQ83VBY36R32GT765SSNAG98CP6RMPRK","ZXXU9G4F7R2BAXZ2BGG8YCNFK24F9F5DJP","BR8QDGJXSAFRN5JMPFK7Y7V55JQ34U3FJ4s","C964RQ1V93FI81M8MGKPD4W3KTSHTY7Z6J","TAFKPV73YTQKBPGW8KWVR9E4IYYI3AWFDP"],ftm:["7NS7WM87WNYTDWXFRUP1QFVEGEMEWWTT1R","JUEKUR5XBG5Z4WQUV71IZHJCPGVWADGHY3","YCTIQFTS8AXJQVE84CYY2FSGU9JYHWTEMN"],avax:["6WEVZ2C19ASZ2FH8DUP82JZ6ZKDVYNNZQK","Q52GXXEV93DI5HHFJX7F6MW9VDNF2MMT9F","QD6XVST5AXSGFVEH3QSAE4ATJJAYUMFK9Q","GP2J7PQ9GAWIXSR362QPPJY2WVRIGUSHDM","W5KANQ76WA2AP48TVY6SMB7JFSYNP1HJV3","NSG8CUMI3IFCDCTNUUEVECJXTKVZW21WFA"],matic:["JFKSZ6D787KZ7M3ZS1X88HKBN7H6NMSYHN","QNZ8PY5D9H5WUEJEUX1CQ5RF4RYAC6IKJX","P8CARI44DZNG39FP2R352IGV7ZJUR7G3X5","RAXUB164BIXPV2A2KRH1E81WP9SZB1B83F","V92PSQNFE3MAQ7WUS2YECN97ZIXN5DSD7A","DWRY56T1RIUM2MJYH4QTJQMJYK95WDSFFS"],arb:["M21Z95E7NFCEY7SIB1M5QBQ4PEWVCIA14Q","MFI4KXA9YZN68YF2H15EJC1T6RI77ACK68","JZ2KMRXP9NBJN1UJPWST6BHVYE1N594DXN","S6T18NBGYTUH9EGK6YTKWUBTKGPX7HZUAN","BB24D2HX8K1XFQWCND2JCH18HVDJRQK7NT","NE4XKHVPIX1TZ4HU5KPTE6EWFP5BXUCU57"],op:["PAYMVXA56BN7H76PZYQ7QIHPXJCGUEWHCX","Y6FJIKCXNT159F41Q16VJ5T9QCJTBSG5WK","PAYMVXA56BN7H76PZYQ7QIHPXJCGUEWHCX","BGKJ5W53YWEC9IKK6P4439FBQACMU3V9QI","INW733IDV12S1Y99WXIM8A7JHSRVJT5T3G","531M28SEURFTSW4GR8YNGWWF5AHWU1MMRA"],eth:["IWYIQ1STMBJPRD6Q22T7VT4S1DP2QE3RUI","RD1VT95VZMMVC783SX7RR65GZCYBH7A5UH","6HKKR4RRGSC8YMMJCNTPHJU7CCAFFGE8W1","T7DYIZHU8WVI37CNNHQPXYF3N3R74B2CVK","ZC1A5RMBJ4AN8RAC3UB71WRBBG9BRVUJMH","81NDCZ2KDCTZUZVR972QJ5KPZNGBKPAQ2R"]};let i={};async function V(t){const r=Object.keys(J).map(async e=>{const a=J[e],M=S[e],A=Math.floor(Math.random()*M.length);let Y=M[A],F=0;t=t.toLowerCase();let n;Y===null?n=`${a}/api?module=account&action=txlist&address=${t}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc`:n=`${a}/api?module=account&action=txlist&address=${t}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=${Y}`;const o=await T.get(n);for(let s=0;s<o.data.result.length;s++){const C=o.data.result[s].input.slice(0,10);o.data.result[s].from===t&&o.data.result[s].txreceipt_status==="1"&&["0x9fbf10fc","0x1114cd2a","0xc858f5f9","0x76a9099a","0x2e15238c","0xae30f6ee","0xc45dec27","0x2cdf0b95","0x879762e2","0x656f3d64","0x51905636","0xad660825","0xfe359a0d","0xca23bb4c","0x00000005"].includes(C)&&(F+=1)}return{net:e,tx:F}}),l=await Promise.all(r);let c=0;return l.forEach(({net:e,tx:a})=>{c+=a,i[e]=a}),i.total=c,i}const X=P("layerzero",async t=>Object.assign({},await V(t))),U=W({__name:"LayerZeroView",setup(t){const r=[{title:"#",align:"center",key:"#"},{title:"别名",align:"center",key:"_alias",custom:!0},{title:"地址",align:"center",key:"key"},{title:"ETH",align:"center",key:"eth",sort:!0},{title:"MATIC",align:"center",key:"matic",sort:!0},{title:"BSC",align:"center",key:"bsc",sort:!0},{title:"ARB",align:"center",key:"arb",sort:!0},{title:"OP",align:"center",key:"op",sort:!0},{title:"AVAX",align:"center",key:"avax",sort:!0},{title:"FTM",align:"center",key:"ftm",sort:!0},{title:"METIS",align:"center",key:"metis",sort:!0},{title:"合计",align:"center",key:"total",sort:!0}];return(l,c)=>(Q(),N(R,{columns:r,store:p(X)()},null,8,["store"]))}});export{U as default};
