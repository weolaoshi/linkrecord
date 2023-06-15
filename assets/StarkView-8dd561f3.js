import{m as S,_ as b}from"./store-1c566707.js";import{a as m}from"./axios-4a70c6fc.js";import{d as h,a as y,c as T,u as F,o as v}from"./index-9458545f.js";async function I(e){let n=0,o,r;const t="https://starkscan.stellate.sh/",a={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},s={query:`query TransactionsTableQuery(
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
`,variables:{first:30,after:null,input:{initiator_address:e,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}},c=await m.post(t,s,{headers:a});n+=c.data.data.transactions.edges.length,o=c.data.data.transactions.pageInfo.hasNextPage;const _=c.data.data.transactions.edges[0].node.timestamp,f=new Date(_*1e3);if(o===!0)for(r=c.data.data.transactions.pageInfo.endCursor;o;){s.variables.after=r;const d=await m.post(t,s,{headers:a});o=d.data.data.transactions.pageInfo.hasNextPage,r=d.data.data.transactions.pageInfo.endCursor,n+=d.data.data.transactions.edges.length}return{tx:n,last_tx_datetime:f}}async function x(e){let n="0x..";return e.length>=4&&(n=n+e.substring(e.length-4)),{address_trim:n}}async function G(e){const n="https://starkscan.stellate.sh/",o={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},r={query:`query ContractPageQuery(
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
`,variables:{input:{contract_address:e}}},t=await m.post(n,r,{headers:o}),a=t.data.data.contract.eth_balance.balance_display,s=t.data.data.contract.starknet_id?t.data.data.contract.starknet_id.domain:"null",c=h(new Date(t.data.data.contract.deployed_at_timestamp*1e3));return{eth_balance:parseFloat(a).toFixed(3),stark_id:s==="null"?"无":s,create_time:c.format("YYYY-MM-DD HH:mm:ss")}}async function E(e){const n="https://starkscan.stellate.sh/",o={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},r={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:30,after:null,input:{transfer_from_or_to_address:e,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let t={},a={},s=null,c;do{let _=await m.post(n,r,{headers:o});c=_.data.data.erc20TransferEvents.pageInfo.hasNextPage,c===!1?s=null:s=_.data.data.erc20TransferEvents.pageInfo.endCursor;let f=_.data.data.erc20TransferEvents.edges;for(const d of f){const i=d.node;i.transaction_hash;const u=i.transfer_amount_display,k=i.transfer_from_address;i.timestamp,i.transfer_to_identifier;const p=i.main_call?i.main_call.selector_identifier:null;if(k==="0x0000000000000000000000000000000000000000000000000000000000000000"&&p==="handle_deposit"){const l=i.from_erc20_identifier;if(l in t){const g=t[l].amount+=parseFloat(u),C=t[l].count+=1;t[l]={amount:g,count:C}}else t[l]={amount:parseFloat(u),count:1}}else if(k===e&&p==="initiate_withdraw"){const l=i.from_erc20_identifier;if(l in a){const g=a[l].amount+=parseFloat(u),C=a[l].count+=1;a[l]={amount:g,count:C}}else a[l]={amount:parseFloat(u),count:1}}}r.variables.after=s}while(c===!0);return{l1_to_l2_eth_amount:t["StarkGate: ETH"]?parseFloat(t["StarkGate: ETH"].amount):0,l1_to_l2_eth_count:t["StarkGate: ETH"]?t["StarkGate: ETH"].count:0,l1_to_l2_usdc_amount:t["StarkGate: USDC"]?parseFloat(t["StarkGate: USDC"].amount):0,l1_to_l2_usdc_count:t["StarkGate: USDC"]?t["StarkGate: USDC"].count:0,l1_to_l2_usdt_amount:t["StarkGate: USDT"]?parseFloat(t["StarkGate: USDT"].amount):0,l1_to_l2_usdt_count:t["StarkGate: USDT"]?t["StarkGate: USDT"].count:0,l1_to_l2_dai_amount:t["StarkGate: DAI"]?parseFloat(t["StarkGate: DAI"].amount):0,l1_to_l2_dai_count:t["StarkGate: DAI"]?t["StarkGate: DAI"].count:0,l1_to_l2_wbtc_amount:t["StarkGate: WBTC"]?parseFloat(t["StarkGate: WBTC"].amount):0,l1_to_l2_wbtc_count:t["StarkGate: WBTC"]?t["StarkGate: WBTC"].count:0,l2_to_l1_eth_amount:a["StarkGate: ETH"]?parseFloat(a["StarkGate: ETH"].amount):0,l2_to_l1_eth_count:a["StarkGate: ETH"]?a["StarkGate: ETH"].count:0,l2_to_l1_usdc_amount:a["StarkGate: USDC"]?parseFloat(a["StarkGate: USDC"].amount):0,l2_to_l1_usdc_count:a["StarkGate: USDC"]?a["StarkGate: USDC"].count:0,l2_to_l1_usdt_amount:a["StarkGate: USDT"]?parseFloat(a["StarkGate: USDT"].amount):0,l2_to_l1_usdt_count:a["StarkGate: USDT"]?a["StarkGate: USDT"].count:0,l2_to_l1_dai_amount:a["StarkGate: DAI"]?parseFloat(a["StarkGate: DAI"].amount):0,l2_to_l1_dai_count:a["StarkGate: DAI"]?a["StarkGate: DAI"].count:0,l2_to_l1_wbtc_amount:a["StarkGate: WBTC"]?parseFloat(a["StarkGate: WBTC"].amount):0,l2_to_l1_wbtc_count:a["StarkGate: WBTC"]?a["StarkGate: WBTC"].count:0}}const D=S("stark",async e=>Object.assign({},...await Promise.all([x(e),I(e),G(e),E(e)]))),A=y({__name:"StarkView",setup(e){let n="#99CC99",o="#FFFF99",r="#99CC99",t="#FFFF99";const a=[{title:"基本信息",align:"center",header_style:{backgroundColor:n,fontSize:"20px"},children:[{title:"#",align:"center",key:"#",width:35,header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}},{title:"别名",align:"left",key:"_alias",custom:!0,header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}},{title:"地址",align:"left",key:"address_trim",sort:!0,url:"https://starkscan.co/contract/{key}",header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n,textDecoration:"underline"}},{title:"创建时间",align:"center",key:"create_time",type:"datetime",sort:!0,header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}},{title:"StarkID",align:"left",key:"stark_id",header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}}]},{title:"余额",align:"center",header_style:{backgroundColor:o,fontSize:"20px"},children:[{title:"ETH",align:"center",key:"eth_balance",sort:!0,header_style:{backgroundColor:o,fontSize:"20px"},cell_style:{backgroundColor:o}}]},{title:"交互",align:"center",header_style:{backgroundColor:r,fontSize:"20px"},children:[{title:"最后交易",align:"center",key:"last_tx_datetime",type:"datetime",sort:!0,header_style:{backgroundColor:r,fontSize:"20px"},cell_style:{backgroundColor:"black",color:"white"}},{title:"交易次数",align:"center",key:"tx",sort:!0,header_style:{backgroundColor:r,fontSize:"20px"},cell_style:{backgroundColor:r,textDecoration:"underline"},url:"https://starkscan.co/contract/{key}#transactions"},{title:"活跃月周日",align:"center",key:"tx",sort:!0,header_style:{backgroundColor:r,fontSize:"20px"},cell_style:{backgroundColor:r}}]},{title:"官方桥跨链Tx数",align:"center",header_style:{backgroundColor:t,fontSize:"20px"},children:[{title:"入ETH次数",align:"center",key:"l1_to_l2_eth_count",sort:!0,header_style:{backgroundColor:t,fontSize:"20px"},cell_style:{backgroundColor:t}},{title:"出ETH次数",align:"center",key:"l2_to_l1_eth_count",sort:!0,header_style:{backgroundColor:t,fontSize:"20px"},cell_style:{backgroundColor:t}},{title:"入ETH金额",align:"center",key:"l1_to_l2_eth_amount",sort:!0,header_style:{backgroundColor:t,fontSize:"20px"},cell_style:{backgroundColor:t}},{title:"出ETH金额",align:"center",key:"l2_to_l1_eth_amount",sort:!0,header_style:{backgroundColor:t,fontSize:"20px"},cell_style:{backgroundColor:t}}]}];return(s,c)=>(v(),T(b,{columns:a,store:F(D)()},null,8,["store"]))}});export{A as default};
