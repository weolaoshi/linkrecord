import{m as S,_ as T}from"./store-e264e580.js";import{a as k}from"./axios-4a70c6fc.js";import{a as F,d as v,c as w,u as I,o as z}from"./index-73ef8cad.js";import{g as t,b as o,a as l}from"./global-9c3e8356.js";async function G(r){let s=0,c,e;const n="https://starkscan.stellate.sh/",a={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},_={query:`query TransactionsTableQuery(
  $first: Int!
  $after: String
  $input: TransactionsInput!
) {
  ...TransactionsTablePaginationFragment_transactions_2DAjA4
}

fragment TransactionsTableExpandedItemFragment_transaction on Transaction {
  entry_point_selector_name
  calldata_decoded
  entry_point_selector
  calldata
  initiator_address
  initiator_identifier
  main_calls {
    selector
    selector_name
    calldata_decoded
    selector_identifier
    calldata
    contract_address
    contract_identifier
    id
  }
}

fragment TransactionsTablePaginationFragment_transactions_2DAjA4 on Query {
  transactions(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...TransactionsTableRowFragment_transaction
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment TransactionsTableRowFragment_transaction on Transaction {
  id
  transaction_hash
  block_number
  transaction_status
  transaction_type
  timestamp
  initiator_address
  initiator_identifier
  initiator {
    is_social_verified
    id
  }
  main_calls {
    selector_identifier
    id
  }
  ...TransactionsTableExpandedItemFragment_transaction
}
`,variables:{first:30,after:null,input:{initiator_address:r,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}},d=await k.post(n,_,{headers:a});s+=d.data.data.transactions.edges.length,c=d.data.data.transactions.pageInfo.hasNextPage;const m=d.data.data.transactions.edges[0].node.timestamp,C=new Date(m*1e3);if(c===!0)for(e=d.data.data.transactions.pageInfo.endCursor;c;){_.variables.after=e;const g=await k.post(n,_,{headers:a});c=g.data.data.transactions.pageInfo.hasNextPage,e=g.data.data.transactions.pageInfo.endCursor,s+=g.data.data.transactions.edges.length}return{tx:s,last_tx_datetime:C}}async function D(r){const s="https://starkscan.stellate.sh/",c={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},e={query:`query ContractPageQuery(
  $input: ContractInput!
) {
  contract(input: $input) {
    contract_address
    is_starknet_class_code_verified
    implementation_type
    ...ContractPageOverviewTabFragment_contract
    ...ContractPageClassCodeHistoryTabFragment_contract
    ...ContractFunctionReadWriteTabFragment_contract
    id
  }
}

fragment ContractFunctionReadCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractFunctionReadWriteTabFragment_contract on Contract {
  contract_address
  starknet_class {
    ...ContractFunctionReadCallsFragment_starknetClass
    ...ContractFunctionWriteCallsFragment_starknetClass
    id
  }
}

fragment ContractFunctionWriteCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractPageClassCodeHistoryTabFragment_contract on Contract {
  contract_address
  starknet_class {
    is_code_verified
    id
  }
  ...ContractPageCodeSubTabFragment_contract
}

fragment ContractPageCodeSubTabFragment_contract on Contract {
  starknet_class {
    class_hash
    ...StarknetClassCodeTabFragment_starknetClass
    id
  }
}

fragment ContractPageOverviewTabClassHashPlacedAtItemFragment_contract on Contract {
  deployed_at_transaction_hash
  class_hash_placed_at_transaction_hash
  class_hash_placed_at_timestamp
}

fragment ContractPageOverviewTabEthBalanceItemFragment_contract on Contract {
  eth_balance {
    balance_display
    id
  }
}

fragment ContractPageOverviewTabFragment_contract on Contract {
  contract_address
  class_hash
  name_tag
  is_social_verified
  deployed_by_contract_address
  deployed_by_contract_identifier
  deployed_at_transaction_hash
  deployed_at_timestamp
  ...ContractPageOverviewTabEthBalanceItemFragment_contract
  ...ContractPageOverviewTabTypeItemFragment_contract
  ...ContractPageOverviewTabStarknetIDItemFragment_contract
  starknet_class {
    ...StarknetClassVersionItemFragment_starknetClass
    id
  }
  ...ContractPageOverviewTabClassHashPlacedAtItemFragment_contract
}

fragment ContractPageOverviewTabStarknetIDItemFragment_contract on Contract {
  starknet_id {
    domain
  }
}

fragment ContractPageOverviewTabTypeItemFragment_contract on Contract {
  implementation_type
  starknet_class {
    type
    id
  }
}

fragment StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
  bytecode
  sierra_program
}

fragment StarknetClassCodeTabFragment_starknetClass on StarknetClass {
  ...StarknetClassCodeTabVerifiedItemFragment_starknetClass
  ...StarknetClassCodeTabSourceCodeItemFragment_starknetClass
  ...StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass
}

fragment StarknetClassCodeTabSourceCodeItemFragment_starknetClass on StarknetClass {
  class_hash
  verified {
    source_code
  }
}

fragment StarknetClassCodeTabVerifiedItemFragment_starknetClass on StarknetClass {
  is_code_verified
  verified {
    name
    source_code
    verified_at_timestamp
  }
}

fragment StarknetClassVersionItemFragment_starknetClass on StarknetClass {
  is_cairo_one
}
`,variables:{input:{contract_address:r}}},n=await k.post(s,e,{headers:c}),a=n.data.data.contract.eth_balance.balance_display,_=n.data.data.contract.starknet_id?n.data.data.contract.starknet_id.domain:"null",d=F(new Date(n.data.data.contract.deployed_at_timestamp*1e3));return{eth_balance:parseFloat(a).toFixed(3),stark_id:_==="null"?"":_,create_time:d.format("YYYY-MM-DD HH:mm:ss")}}async function E(r){const s="https://starkscan.stellate.sh/",c={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},e={query:`query ERC20TransferEventsTableQuery(
  $first: Int!
  $after: String
  $input: ERC20TransferEventsInput!
) {
  ...ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4
}

fragment ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4 on Query {
  erc20TransferEvents(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...ERC20TransferEventsTableRowFragment_erc20TransferEvent
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ERC20TransferEventsTableRowFragment_erc20TransferEvent on ERC20TransferEvent {
  id
  transaction_hash
  from_address
  from_erc20_identifier
  from_contract {
    is_social_verified
    id
  }
  transfer_from_address
  transfer_from_identifier
  transfer_from_contract {
    is_social_verified
    id
  }
  transfer_to_address
  transfer_to_identifier
  transfer_to_contract {
    is_social_verified
    id
  }
  transfer_amount
  transfer_amount_display
  timestamp
  main_call {
    selector_identifier
    id
  }
}
`,variables:{first:30,after:null,input:{transfer_from_or_to_address:r,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let n={},a={},_=null,d;do{let m=await k.post(s,e,{headers:c});d=m.data.data.erc20TransferEvents.pageInfo.hasNextPage,d===!1?_=null:_=m.data.data.erc20TransferEvents.pageInfo.endCursor;let C=m.data.data.erc20TransferEvents.edges;for(const g of C){const u=g.node;u.transaction_hash;const f=u.transfer_amount_display,b=u.transfer_from_address;u.timestamp,u.transfer_to_identifier;const y=u.main_call?u.main_call.selector_identifier:null;if(b==="0x0000000000000000000000000000000000000000000000000000000000000000"&&y==="handle_deposit"){const i=u.from_erc20_identifier;if(i in n){const p=n[i].amount+=parseFloat(f),h=n[i].count+=1;n[i]={amount:p,count:h}}else n[i]={amount:parseFloat(f),count:1}}else if(b===r&&y==="initiate_withdraw"){const i=u.from_erc20_identifier;if(i in a){const p=a[i].amount+=parseFloat(f),h=a[i].count+=1;a[i]={amount:p,count:h}}else a[i]={amount:parseFloat(f),count:1}}}e.variables.after=_}while(d===!0);return{l1_to_l2_eth_amount:n["StarkGate: ETH"]?parseFloat(n["StarkGate: ETH"].amount):0,l1_to_l2_eth_count:n["StarkGate: ETH"]?n["StarkGate: ETH"].count:0,l1_to_l2_usdc_amount:n["StarkGate: USDC"]?parseFloat(n["StarkGate: USDC"].amount):0,l1_to_l2_usdc_count:n["StarkGate: USDC"]?n["StarkGate: USDC"].count:0,l1_to_l2_usdt_amount:n["StarkGate: USDT"]?parseFloat(n["StarkGate: USDT"].amount):0,l1_to_l2_usdt_count:n["StarkGate: USDT"]?n["StarkGate: USDT"].count:0,l1_to_l2_dai_amount:n["StarkGate: DAI"]?parseFloat(n["StarkGate: DAI"].amount):0,l1_to_l2_dai_count:n["StarkGate: DAI"]?n["StarkGate: DAI"].count:0,l1_to_l2_wbtc_amount:n["StarkGate: WBTC"]?parseFloat(n["StarkGate: WBTC"].amount):0,l1_to_l2_wbtc_count:n["StarkGate: WBTC"]?n["StarkGate: WBTC"].count:0,l2_to_l1_eth_amount:a["StarkGate: ETH"]?parseFloat(a["StarkGate: ETH"].amount):0,l2_to_l1_eth_count:a["StarkGate: ETH"]?a["StarkGate: ETH"].count:0,l2_to_l1_usdc_amount:a["StarkGate: USDC"]?parseFloat(a["StarkGate: USDC"].amount):0,l2_to_l1_usdc_count:a["StarkGate: USDC"]?a["StarkGate: USDC"].count:0,l2_to_l1_usdt_amount:a["StarkGate: USDT"]?parseFloat(a["StarkGate: USDT"].amount):0,l2_to_l1_usdt_count:a["StarkGate: USDT"]?a["StarkGate: USDT"].count:0,l2_to_l1_dai_amount:a["StarkGate: DAI"]?parseFloat(a["StarkGate: DAI"].amount):0,l2_to_l1_dai_count:a["StarkGate: DAI"]?a["StarkGate: DAI"].count:0,l2_to_l1_wbtc_amount:a["StarkGate: WBTC"]?parseFloat(a["StarkGate: WBTC"].amount):0,l2_to_l1_wbtc_count:a["StarkGate: WBTC"]?a["StarkGate: WBTC"].count:0}}async function P(r){try{let s=".";return r.length>=8?(s=r.substring(2,4)+".."+r.substring(r.length-4),{address_trim:s,coming:"开发中"}):{address_trim:r,coming:"开发中"}}catch(s){return console.log("common_get_trim_address() exception. addr is "+r),console.log(s),{address_trim:r,coming:"开发中"}}}const x=S("stark",async r=>Object.assign({},...await Promise.all([P(r),G(r),D(r),E(r)]))),B=v({__name:"StarkView",setup(r){const s=[{title:"基本信息",align:"center",header_style:{backgroundColor:t.color1,fontSize:o.size1},children:[{title:"#",align:"center",key:"#",width:l.no,header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1}},{title:"别名",align:"left",key:"_alias",width:l.alias,custom:!0,header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1}},{title:"地址",align:"left",key:"address_trim",width:l.address,sort:!0,url:"https://starkscan.co/contract/{key}",header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1,textDecoration:"underline"}},{title:"创建时间",align:"center",key:"create_time",type:"datetime",width:l.datetime,sort:!0,header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1}},{title:"StarkID",align:"left",key:"stark_id",width:l.alias,header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1}}]},{title:"余额",align:"center",header_style:{backgroundColor:t.color2,fontSize:o.size1},children:[{title:"ETH",align:"center",key:"eth_balance",width:l.balance,sort:!0,header_style:{backgroundColor:t.color2,fontSize:o.size2},cell_style:{backgroundColor:t.color2}},{title:"其他",align:"center",key:"coming",width:l.balance+50,sort:!0,header_style:{backgroundColor:t.color2,fontSize:o.size2},cell_style:{backgroundColor:t.color2}}]},{title:"交互",align:"center",header_style:{backgroundColor:t.color1,fontSize:o.size1},children:[{title:"最后",align:"center",key:"last_tx_datetime",type:"datetime",width:l.datetime,url:"https://starkscan.co/contract/{key}#transactions",sort:!0,header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1,textDecoration:"underline"}},{title:"TX",align:"center",key:"tx",sort:!0,width:l.tx,header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1,textDecoration:"underline"},url:"https://starkscan.co/contract/{key}#transactions"},{title:"活跃月周日",align:"center",key:"coming",sort:!0,header_style:{backgroundColor:t.color1,fontSize:o.size2},cell_style:{backgroundColor:t.color1}}]},{title:"官方桥",align:"center",header_style:{backgroundColor:t.color2,fontSize:o.size1},children:[{title:"入ETH次数",align:"center",key:"l1_to_l2_eth_count",width:l.tx+50,sort:!0,header_style:{backgroundColor:t.color2,fontSize:o.size2},cell_style:function(c,e){try{return e&&e.l1_to_l2_eth_count==0?{backgroundColor:t.color2,color:t.color2}:{backgroundColor:t.color2}}catch{return{backgroundColor:t.color2}}}},{title:"出ETH次数",align:"center",key:"l2_to_l1_eth_count",width:l.tx+50,sort:!0,header_style:{backgroundColor:t.color2,fontSize:o.size2},cell_style:function(c,e){try{return e&&e.l2_to_l1_eth_count==0?{backgroundColor:t.color2,color:t.color2}:{backgroundColor:t.color2}}catch{return{backgroundColor:t.color2}}}},{title:"入ETH金额",align:"center",key:"l1_to_l2_eth_amount",sort:!0,width:l.balance+50,header_style:{backgroundColor:t.color2,fontSize:o.size2},cell_style:function(c,e){try{return e&&e.l1_to_l2_eth_amount==0?{backgroundColor:t.color2,color:t.color2}:{backgroundColor:t.color2}}catch{return{backgroundColor:t.color2}}}},{title:"出ETH金额",align:"center",key:"l2_to_l1_eth_amount",width:l.balance+50,sort:!0,header_style:{backgroundColor:t.color2,fontSize:o.size2},cell_style:function(c,e){try{return e&&e.l2_to_l1_eth_amount==0?{backgroundColor:t.color2,color:t.color1}:{backgroundColor:t.color2}}catch{return{backgroundColor:t.color2}}}}]}];return(c,e)=>(z(),w(T,{columns:s,store:I(x)(),"key-label":"账号","page-size":10},null,8,["store"]))}});export{B as default};
