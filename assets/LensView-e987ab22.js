import{m as Lu,_ as ju}from"./store-974ab423.js";import{g as qn,b as It,a as Uu,c as Vu,u as Bu,o as Gu}from"./index-5ef9b504.js";function Hu(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const Er={parse:JSON.parse,stringify:JSON.stringify};var Zu=function(e){var n=e.uri,r=e.name,a=e.type;this.uri=n,this.name=r,this.type=a},Wu=Zu,Do=function(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob||e instanceof Wu};const zu=qn(Do);var Yu=Do,Ju=function t(e,n,r){n===void 0&&(n=""),r===void 0&&(r=Yu);var a,i=new Map;function o(c,f){var p=i.get(f);p?p.push.apply(p,c):i.set(f,c)}if(r(e))a=null,o([n],e);else{var s=n?n+".":"";if(typeof FileList<"u"&&e instanceof FileList)a=Array.prototype.map.call(e,function(c,f){return o([""+s+f],c),null});else if(Array.isArray(e))a=e.map(function(c,f){var p=t(c,""+s+f,r);return p.files.forEach(o),p.clone});else if(e&&e.constructor===Object){a={};for(var u in e){var l=t(e[u],""+s+u,r);l.files.forEach(o),a[u]=l.clone}}else a=e}return{clone:a,files:i}};const Qu=qn(Ju);var Xu=typeof self=="object"?self.FormData:window.FormData;const Ku=qn(Xu),el=t=>zu(t)||t!==null&&typeof t=="object"&&typeof t.pipe=="function",tl=(t,e,n,r=Er)=>{const{clone:a,files:i}=Qu({query:t,variables:e,operationName:n},"",el);if(i.size===0){if(!Array.isArray(t))return r.stringify(a);if(typeof e<"u"&&!Array.isArray(e))throw new Error("Cannot create request body with given variable type, array expected");const c=t.reduce((f,p,h)=>(f.push({query:p,variables:e?e[h]:void 0}),f),[]);return r.stringify(c)}const o=typeof FormData>"u"?Ku:FormData,s=new o;s.append("operations",r.stringify(a));const u={};let l=0;return i.forEach(c=>{u[++l]=c}),s.append("map",r.stringify(u)),l=0,i.forEach((c,f)=>{s.append(`${++l}`,f)}),s},nl=t=>t.toUpperCase(),rl=t=>{const e={};return t.forEach((n,r)=>{e[r]=n}),e},al=(t,e,n)=>t.document?t:{document:t,variables:e,requestHeaders:n,signal:void 0},il=(t,e,n)=>t.query?t:{query:t,variables:e,requestHeaders:n,signal:void 0},sl=(t,e)=>t.documents?t:{documents:t,requestHeaders:e,signal:void 0};function ln(t,e){if(!!!t)throw new Error(e)}function ol(t){return typeof t=="object"&&t!==null}function ul(t,e){if(!!!t)throw new Error(e??"Unexpected invariant triggered.")}const ll=/\r\n|[\n\r]/g;function Xn(t,e){let n=0,r=1;for(const a of t.body.matchAll(ll)){if(typeof a.index=="number"||ul(!1),a.index>=e)break;n=a.index+a[0].length,r+=1}return{line:r,column:e+1-n}}function cl(t){return No(t.source,Xn(t.source,t.start))}function No(t,e){const n=t.locationOffset.column-1,r="".padStart(n)+t.body,a=e.line-1,i=t.locationOffset.line-1,o=e.line+i,s=e.line===1?n:0,u=e.column+s,l=`${t.name}:${o}:${u}
`,c=r.split(/\r\n|[\n\r]/g),f=c[a];if(f.length>120){const p=Math.floor(u/80),h=u%80,v=[];for(let T=0;T<f.length;T+=80)v.push(f.slice(T,T+80));return l+$r([[`${o} |`,v[0]],...v.slice(1,p+1).map(T=>["|",T]),["|","^".padStart(h)],["|",v[p+1]]])}return l+$r([[`${o-1} |`,c[a-1]],[`${o} |`,f],["|","^".padStart(u)],[`${o+1} |`,c[a+1]]])}function $r(t){const e=t.filter(([r,a])=>a!==void 0),n=Math.max(...e.map(([r])=>r.length));return e.map(([r,a])=>r.padStart(n)+(a?" "+a:"")).join(`
`)}function fl(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class Sr extends Error{constructor(e,...n){var r,a,i;const{nodes:o,source:s,positions:u,path:l,originalError:c,extensions:f}=fl(n);super(e),this.name="GraphQLError",this.path=l??void 0,this.originalError=c??void 0,this.nodes=Mr(Array.isArray(o)?o:o?[o]:void 0);const p=Mr((r=this.nodes)===null||r===void 0?void 0:r.map(v=>v.loc).filter(v=>v!=null));this.source=s??(p==null||(a=p[0])===null||a===void 0?void 0:a.source),this.positions=u??(p==null?void 0:p.map(v=>v.start)),this.locations=u&&s?u.map(v=>Xn(s,v)):p==null?void 0:p.map(v=>Xn(v.source,v.start));const h=ol(c==null?void 0:c.extensions)?c==null?void 0:c.extensions:void 0;this.extensions=(i=f??h)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),c!=null&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Sr):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+=`

`+cl(n.loc));else if(this.source&&this.locations)for(const n of this.locations)e+=`

`+No(this.source,n);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function Mr(t){return t===void 0||t.length===0?void 0:t}function pe(t,e,n){return new Sr(`Syntax Error: ${n}`,{source:t,positions:[e]})}class dl{constructor(e,n,r){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Io{constructor(e,n,r,a,i,o){this.kind=e,this.start=n,this.end=r,this.line=a,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Po={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},pl=new Set(Object.keys(Po));function Fr(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&pl.has(e)}var pt;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(pt||(pt={}));var Kn;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Kn||(Kn={}));var B;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(B||(B={}));function er(t){return t===9||t===32}function Rt(t){return t>=48&&t<=57}function Oo(t){return t>=97&&t<=122||t>=65&&t<=90}function Ao(t){return Oo(t)||t===95}function hl(t){return Oo(t)||Rt(t)||t===95}function ml(t){var e;let n=Number.MAX_SAFE_INTEGER,r=null,a=-1;for(let o=0;o<t.length;++o){var i;const s=t[o],u=vl(s);u!==s.length&&(r=(i=r)!==null&&i!==void 0?i:o,a=o,o!==0&&u<n&&(n=u))}return t.map((o,s)=>s===0?o:o.slice(n)).slice((e=r)!==null&&e!==void 0?e:0,a+1)}function vl(t){let e=0;for(;e<t.length&&er(t.charCodeAt(e));)++e;return e}function gl(t,e){const n=t.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),a=r.length===1,i=r.length>1&&r.slice(1).every(h=>h.length===0||er(h.charCodeAt(0))),o=n.endsWith('\\"""'),s=t.endsWith('"')&&!o,u=t.endsWith("\\"),l=s||u,c=!(e!=null&&e.minimize)&&(!a||t.length>70||l||i||o);let f="";const p=a&&er(t.charCodeAt(0));return(c&&!p||i)&&(f+=`
`),f+=n,(c||l)&&(f+=`
`),'"""'+f+'"""'}var D;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(D||(D={}));class yl{constructor(e){const n=new Io(D.SOF,0,0,0,0);this.source=e,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==D.EOF)do if(e.next)e=e.next;else{const n=_l(this,e.end);e.next=n,n.prev=e,e=n}while(e.kind===D.COMMENT);return e}}function wl(t){return t===D.BANG||t===D.DOLLAR||t===D.AMP||t===D.PAREN_L||t===D.PAREN_R||t===D.SPREAD||t===D.COLON||t===D.EQUALS||t===D.AT||t===D.BRACKET_L||t===D.BRACKET_R||t===D.BRACE_L||t===D.PIPE||t===D.BRACE_R}function bt(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function xn(t,e){return Ro(t.charCodeAt(e))&&$o(t.charCodeAt(e+1))}function Ro(t){return t>=55296&&t<=56319}function $o(t){return t>=56320&&t<=57343}function rt(t,e){const n=t.source.body.codePointAt(e);if(n===void 0)return D.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function ue(t,e,n,r,a){const i=t.line,o=1+n-t.lineStart;return new Io(e,n,r,i,o,a)}function _l(t,e){const n=t.source.body,r=n.length;let a=e;for(;a<r;){const i=n.charCodeAt(a);switch(i){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++t.line,t.lineStart=a;continue;case 13:n.charCodeAt(a+1)===10?a+=2:++a,++t.line,t.lineStart=a;continue;case 35:return bl(t,a);case 33:return ue(t,D.BANG,a,a+1);case 36:return ue(t,D.DOLLAR,a,a+1);case 38:return ue(t,D.AMP,a,a+1);case 40:return ue(t,D.PAREN_L,a,a+1);case 41:return ue(t,D.PAREN_R,a,a+1);case 46:if(n.charCodeAt(a+1)===46&&n.charCodeAt(a+2)===46)return ue(t,D.SPREAD,a,a+3);break;case 58:return ue(t,D.COLON,a,a+1);case 61:return ue(t,D.EQUALS,a,a+1);case 64:return ue(t,D.AT,a,a+1);case 91:return ue(t,D.BRACKET_L,a,a+1);case 93:return ue(t,D.BRACKET_R,a,a+1);case 123:return ue(t,D.BRACE_L,a,a+1);case 124:return ue(t,D.PIPE,a,a+1);case 125:return ue(t,D.BRACE_R,a,a+1);case 34:return n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34?Dl(t,a):Tl(t,a)}if(Rt(i)||i===45)return kl(t,a,i);if(Ao(i))return Nl(t,a);throw pe(t.source,a,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:bt(i)||xn(n,a)?`Unexpected character: ${rt(t,a)}.`:`Invalid character: ${rt(t,a)}.`)}return ue(t,D.EOF,r,r)}function bl(t,e){const n=t.source.body,r=n.length;let a=e+1;for(;a<r;){const i=n.charCodeAt(a);if(i===10||i===13)break;if(bt(i))++a;else if(xn(n,a))a+=2;else break}return ue(t,D.COMMENT,e,a,n.slice(e+1,a))}function kl(t,e,n){const r=t.source.body;let a=e,i=n,o=!1;if(i===45&&(i=r.charCodeAt(++a)),i===48){if(i=r.charCodeAt(++a),Rt(i))throw pe(t.source,a,`Invalid number, unexpected digit after 0: ${rt(t,a)}.`)}else a=Wn(t,a,i),i=r.charCodeAt(a);if(i===46&&(o=!0,i=r.charCodeAt(++a),a=Wn(t,a,i),i=r.charCodeAt(a)),(i===69||i===101)&&(o=!0,i=r.charCodeAt(++a),(i===43||i===45)&&(i=r.charCodeAt(++a)),a=Wn(t,a,i),i=r.charCodeAt(a)),i===46||Ao(i))throw pe(t.source,a,`Invalid number, expected digit but got: ${rt(t,a)}.`);return ue(t,o?D.FLOAT:D.INT,e,a,r.slice(e,a))}function Wn(t,e,n){if(!Rt(n))throw pe(t.source,e,`Invalid number, expected digit but got: ${rt(t,e)}.`);const r=t.source.body;let a=e+1;for(;Rt(r.charCodeAt(a));)++a;return a}function Tl(t,e){const n=t.source.body,r=n.length;let a=e+1,i=a,o="";for(;a<r;){const s=n.charCodeAt(a);if(s===34)return o+=n.slice(i,a),ue(t,D.STRING,e,a+1,o);if(s===92){o+=n.slice(i,a);const u=n.charCodeAt(a+1)===117?n.charCodeAt(a+2)===123?El(t,a):Sl(t,a):Cl(t,a);o+=u.value,a+=u.size,i=a;continue}if(s===10||s===13)break;if(bt(s))++a;else if(xn(n,a))a+=2;else throw pe(t.source,a,`Invalid character within String: ${rt(t,a)}.`)}throw pe(t.source,a,"Unterminated string.")}function El(t,e){const n=t.source.body;let r=0,a=3;for(;a<12;){const i=n.charCodeAt(e+a++);if(i===125){if(a<5||!bt(r))break;return{value:String.fromCodePoint(r),size:a}}if(r=r<<4|Pt(i),r<0)break}throw pe(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+a)}".`)}function Sl(t,e){const n=t.source.body,r=qr(n,e+2);if(bt(r))return{value:String.fromCodePoint(r),size:6};if(Ro(r)&&n.charCodeAt(e+6)===92&&n.charCodeAt(e+7)===117){const a=qr(n,e+8);if($o(a))return{value:String.fromCodePoint(r,a),size:12}}throw pe(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+6)}".`)}function qr(t,e){return Pt(t.charCodeAt(e))<<12|Pt(t.charCodeAt(e+1))<<8|Pt(t.charCodeAt(e+2))<<4|Pt(t.charCodeAt(e+3))}function Pt(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Cl(t,e){const n=t.source.body;switch(n.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw pe(t.source,e,`Invalid character escape sequence: "${n.slice(e,e+2)}".`)}function Dl(t,e){const n=t.source.body,r=n.length;let a=t.lineStart,i=e+3,o=i,s="";const u=[];for(;i<r;){const l=n.charCodeAt(i);if(l===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){s+=n.slice(o,i),u.push(s);const c=ue(t,D.BLOCK_STRING,e,i+3,ml(u).join(`
`));return t.line+=u.length-1,t.lineStart=a,c}if(l===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){s+=n.slice(o,i),o=i+1,i+=4;continue}if(l===10||l===13){s+=n.slice(o,i),u.push(s),l===13&&n.charCodeAt(i+1)===10?i+=2:++i,s="",o=i,a=i;continue}if(bt(l))++i;else if(xn(n,i))i+=2;else throw pe(t.source,i,`Invalid character within String: ${rt(t,i)}.`)}throw pe(t.source,i,"Unterminated string.")}function Nl(t,e){const n=t.source.body,r=n.length;let a=e+1;for(;a<r;){const i=n.charCodeAt(a);if(hl(i))++a;else break}return ue(t,D.NAME,e,a,n.slice(e,a))}const Il=10,Mo=2;function Fo(t){return Ln(t,[])}function Ln(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return Pl(t,e);default:return String(t)}}function Pl(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const n=[...e,t];if(Ol(t)){const r=t.toJSON();if(r!==t)return typeof r=="string"?r:Ln(r,n)}else if(Array.isArray(t))return Rl(t,n);return Al(t,n)}function Ol(t){return typeof t.toJSON=="function"}function Al(t,e){const n=Object.entries(t);return n.length===0?"{}":e.length>Mo?"["+$l(t)+"]":"{ "+n.map(([a,i])=>a+": "+Ln(i,e)).join(", ")+" }"}function Rl(t,e){if(t.length===0)return"[]";if(e.length>Mo)return"[Array]";const n=Math.min(Il,t.length),r=t.length-n,a=[];for(let i=0;i<n;++i)a.push(Ln(t[i],e));return r===1?a.push("... 1 more item"):r>1&&a.push(`... ${r} more items`),"["+a.join(", ")+"]"}function $l(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}const Ml=function(e,n){return e instanceof n};class qo{constructor(e,n="GraphQL request",r={line:1,column:1}){typeof e=="string"||ln(!1,`Body must be a string. Received: ${Fo(e)}.`),this.body=e,this.name=n,this.locationOffset=r,this.locationOffset.line>0||ln(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ln(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Fl(t){return Ml(t,qo)}function xo(t,e){return new ql(t,e).parseDocument()}class ql{constructor(e,n={}){const r=Fl(e)?e:new qo(e);this._lexer=new yl(r),this._options=n,this._tokenCounter=0}parseName(){const e=this.expectToken(D.NAME);return this.node(e,{kind:B.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:B.DOCUMENT,definitions:this.many(D.SOF,this.parseDefinition,D.EOF)})}parseDefinition(){if(this.peek(D.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),n=e?this._lexer.lookahead():this._lexer.token;if(n.kind===D.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw pe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(D.BRACE_L))return this.node(e,{kind:B.OPERATION_DEFINITION,operation:pt.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(D.NAME)&&(r=this.parseName()),this.node(e,{kind:B.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(D.NAME);switch(e.value){case"query":return pt.QUERY;case"mutation":return pt.MUTATION;case"subscription":return pt.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(D.PAREN_L,this.parseVariableDefinition,D.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:B.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(D.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(D.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(D.DOLLAR),this.node(e,{kind:B.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:B.SELECTION_SET,selections:this.many(D.BRACE_L,this.parseSelection,D.BRACE_R)})}parseSelection(){return this.peek(D.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,n=this.parseName();let r,a;return this.expectOptionalToken(D.COLON)?(r=n,a=this.parseName()):a=n,this.node(e,{kind:B.FIELD,alias:r,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(D.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const n=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(D.PAREN_L,n,D.PAREN_R)}parseArgument(e=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(n,{kind:B.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(D.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(D.NAME)?this.node(e,{kind:B.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:B.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:B.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:B.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const n=this._lexer.token;switch(n.kind){case D.BRACKET_L:return this.parseList(e);case D.BRACE_L:return this.parseObject(e);case D.INT:return this.advanceLexer(),this.node(n,{kind:B.INT,value:n.value});case D.FLOAT:return this.advanceLexer(),this.node(n,{kind:B.FLOAT,value:n.value});case D.STRING:case D.BLOCK_STRING:return this.parseStringLiteral();case D.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:B.BOOLEAN,value:!0});case"false":return this.node(n,{kind:B.BOOLEAN,value:!1});case"null":return this.node(n,{kind:B.NULL});default:return this.node(n,{kind:B.ENUM,value:n.value})}case D.DOLLAR:if(e)if(this.expectToken(D.DOLLAR),this._lexer.token.kind===D.NAME){const r=this._lexer.token.value;throw pe(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:B.STRING,value:e.value,block:e.kind===D.BLOCK_STRING})}parseList(e){const n=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:B.LIST,values:this.any(D.BRACKET_L,n,D.BRACKET_R)})}parseObject(e){const n=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:B.OBJECT,fields:this.any(D.BRACE_L,n,D.BRACE_R)})}parseObjectField(e){const n=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(n,{kind:B.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){const n=[];for(;this.peek(D.AT);)n.push(this.parseDirective(e));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const n=this._lexer.token;return this.expectToken(D.AT),this.node(n,{kind:B.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let n;if(this.expectOptionalToken(D.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(D.BRACKET_R),n=this.node(e,{kind:B.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(D.BANG)?this.node(e,{kind:B.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:B.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(D.STRING)||this.peek(D.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),a=this.many(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);return this.node(e,{kind:B.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:a})}parseOperationTypeDefinition(){const e=this._lexer.token,n=this.parseOperationType();this.expectToken(D.COLON);const r=this.parseNamedType();return this.node(e,{kind:B.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),a=this.parseConstDirectives();return this.node(e,{kind:B.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:a})}parseObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),a=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:B.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:a,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(D.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseFieldDefinition,D.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,n=this.parseDescription(),r=this.parseName(),a=this.parseArgumentDefs();this.expectToken(D.COLON);const i=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(e,{kind:B.FIELD_DEFINITION,description:n,name:r,arguments:a,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(D.PAREN_L,this.parseInputValueDef,D.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(D.COLON);const a=this.parseTypeReference();let i;this.expectOptionalToken(D.EQUALS)&&(i=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(e,{kind:B.INPUT_VALUE_DEFINITION,description:n,name:r,type:a,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),a=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:B.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:a,directives:i,fields:o})}parseUnionTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),a=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:B.UNION_TYPE_DEFINITION,description:n,name:r,directives:a,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(D.EQUALS)?this.delimitedMany(D.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),a=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:B.ENUM_TYPE_DEFINITION,description:n,name:r,directives:a,values:i})}parseEnumValuesDefinition(){return this.optionalMany(D.BRACE_L,this.parseEnumValueDefinition,D.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(e,{kind:B.ENUM_VALUE_DEFINITION,description:n,name:r,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw pe(this._lexer.source,this._lexer.token.start,`${on(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),a=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:B.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:a,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseInputValueDef,D.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===D.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:B.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(e,{kind:B.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&a.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:B.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:a,fields:i})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&a.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:B.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:a,fields:i})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:B.UNION_TYPE_EXTENSION,name:n,directives:r,types:a})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:B.ENUM_TYPE_EXTENSION,name:n,directives:r,values:a})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:B.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:a})}parseDirectiveDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(D.AT);const r=this.parseName(),a=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(e,{kind:B.DIRECTIVE_DEFINITION,description:n,name:r,arguments:a,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(D.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(Kn,n.value))return n;throw this.unexpected(e)}node(e,n){return this._options.noLocation!==!0&&(n.loc=new dl(e,this._lexer.lastToken,this._lexer.source)),n}peek(e){return this._lexer.token.kind===e}expectToken(e){const n=this._lexer.token;if(n.kind===e)return this.advanceLexer(),n;throw pe(this._lexer.source,n.start,`Expected ${Lo(e)}, found ${on(n)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const n=this._lexer.token;if(n.kind===D.NAME&&n.value===e)this.advanceLexer();else throw pe(this._lexer.source,n.start,`Expected "${e}", found ${on(n)}.`)}expectOptionalKeyword(e){const n=this._lexer.token;return n.kind===D.NAME&&n.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const n=e??this._lexer.token;return pe(this._lexer.source,n.start,`Unexpected ${on(n)}.`)}any(e,n,r){this.expectToken(e);const a=[];for(;!this.expectOptionalToken(r);)a.push(n.call(this));return a}optionalMany(e,n,r){if(this.expectOptionalToken(e)){const a=[];do a.push(n.call(this));while(!this.expectOptionalToken(r));return a}return[]}many(e,n,r){this.expectToken(e);const a=[];do a.push(n.call(this));while(!this.expectOptionalToken(r));return a}delimitedMany(e,n){this.expectOptionalToken(e);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(e));return r}advanceLexer(){const{maxTokens:e}=this._options,n=this._lexer.advance();if(e!==void 0&&n.kind!==D.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw pe(this._lexer.source,n.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function on(t){const e=t.value;return Lo(t.kind)+(e!=null?` "${e}"`:"")}function Lo(t){return wl(t)?`"${t}"`:t}function xl(t){return`"${t.replace(Ll,jl)}"`}const Ll=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function jl(t){return Ul[t.charCodeAt(0)]}const Ul=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Vl=Object.freeze({});function Bl(t,e,n=Po){const r=new Map;for(const I of Object.values(B))r.set(I,Gl(e,I));let a,i=Array.isArray(t),o=[t],s=-1,u=[],l=t,c,f;const p=[],h=[];do{s++;const I=s===o.length,L=I&&u.length!==0;if(I){if(c=h.length===0?void 0:p[p.length-1],l=f,f=h.pop(),L)if(i){l=l.slice();let J=0;for(const[ye,se]of u){const Ie=ye-J;se===null?(l.splice(Ie,1),J++):l[Ie]=se}}else{l=Object.defineProperties({},Object.getOwnPropertyDescriptors(l));for(const[J,ye]of u)l[J]=ye}s=a.index,o=a.keys,u=a.edits,i=a.inArray,a=a.prev}else if(f){if(c=i?s:o[s],l=f[c],l==null)continue;p.push(c)}let k;if(!Array.isArray(l)){var v,T;Fr(l)||ln(!1,`Invalid AST Node: ${Fo(l)}.`);const J=I?(v=r.get(l.kind))===null||v===void 0?void 0:v.leave:(T=r.get(l.kind))===null||T===void 0?void 0:T.enter;if(k=J==null?void 0:J.call(e,l,c,f,p,h),k===Vl)break;if(k===!1){if(!I){p.pop();continue}}else if(k!==void 0&&(u.push([c,k]),!I))if(Fr(k))l=k;else{p.pop();continue}}if(k===void 0&&L&&u.push([c,l]),I)p.pop();else{var P;a={inArray:i,index:s,keys:o,edits:u,prev:a},i=Array.isArray(l),o=i?l:(P=n[l.kind])!==null&&P!==void 0?P:[],s=-1,u=[],f&&h.push(f),f=l}}while(a!==void 0);return u.length!==0?u[u.length-1][1]:t}function Gl(t,e){const n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function A(t){return Bl(t,Zl)}const Hl=80,Zl={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>F(t.definitions,`

`)},OperationDefinition:{leave(t){const e=Q("(",F(t.variableDefinitions,", "),")"),n=F([t.operation,F([t.name,e]),F(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:r})=>t+": "+e+Q(" = ",n)+Q(" ",F(r," "))},SelectionSet:{leave:({selections:t})=>Pe(t)},Field:{leave({alias:t,name:e,arguments:n,directives:r,selectionSet:a}){const i=Q("",t,": ")+e;let o=i+Q("(",F(n,", "),")");return o.length>Hl&&(o=i+Q(`(
`,cn(F(n,`
`)),`
)`)),F([o,F(r," "),a]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+Q(" ",F(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>F(["...",Q("on ",t),F(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:r,selectionSet:a})=>`fragment ${t}${Q("(",F(n,", "),")")} on ${e} ${Q("",F(r," ")," ")}`+a},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?gl(t):xl(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+F(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+F(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+Q("(",F(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>Q("",t,`
`)+F(["schema",F(e," "),Pe(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>Q("",t,`
`)+F(["scalar",e,F(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:a})=>Q("",t,`
`)+F(["type",e,Q("implements ",F(n," & ")),F(r," "),Pe(a)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:r,directives:a})=>Q("",t,`
`)+e+(xr(n)?Q(`(
`,cn(F(n,`
`)),`
)`):Q("(",F(n,", "),")"))+": "+r+Q(" ",F(a," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:r,directives:a})=>Q("",t,`
`)+F([e+": "+n,Q("= ",r),F(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:a})=>Q("",t,`
`)+F(["interface",e,Q("implements ",F(n," & ")),F(r," "),Pe(a)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:r})=>Q("",t,`
`)+F(["union",e,F(n," "),Q("= ",F(r," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:r})=>Q("",t,`
`)+F(["enum",e,F(n," "),Pe(r)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>Q("",t,`
`)+F([e,F(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:r})=>Q("",t,`
`)+F(["input",e,F(n," "),Pe(r)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,repeatable:r,locations:a})=>Q("",t,`
`)+"directive @"+e+(xr(n)?Q(`(
`,cn(F(n,`
`)),`
)`):Q("(",F(n,", "),")"))+(r?" repeatable":"")+" on "+F(a," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>F(["extend schema",F(t," "),Pe(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>F(["extend scalar",t,F(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>F(["extend type",t,Q("implements ",F(e," & ")),F(n," "),Pe(r)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>F(["extend interface",t,Q("implements ",F(e," & ")),F(n," "),Pe(r)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>F(["extend union",t,F(e," "),Q("= ",F(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>F(["extend enum",t,F(e," "),Pe(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>F(["extend input",t,F(e," "),Pe(n)]," ")}};function F(t,e=""){var n;return(n=t==null?void 0:t.filter(r=>r).join(e))!==null&&n!==void 0?n:""}function Pe(t){return Q(`{
`,cn(F(t,`
`)),`
}`)}function Q(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function cn(t){return Q("  ",t.replace(/\n/g,`
  `))}function xr(t){var e;return(e=t==null?void 0:t.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}const Lr=t=>{var r,a;let e;const n=t.definitions.filter(i=>i.kind==="OperationDefinition");return n.length===1&&(e=(a=(r=n[0])==null?void 0:r.name)==null?void 0:a.value),e},zn=t=>{if(typeof t=="string"){let n;try{const r=xo(t);n=Lr(r)}catch{}return{query:t,operationName:n}}const e=Lr(t);return{query:A(t),operationName:e}};class Ot extends Error{constructor(e,n){const r=`${Ot.extractMessage(e)}: ${JSON.stringify({response:e,request:n})}`;super(r),Object.setPrototypeOf(this,Ot.prototype),this.response=e,this.request=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ot)}static extractMessage(e){var n,r;return((r=(n=e.errors)==null?void 0:n[0])==null?void 0:r.message)??`GraphQL Error (Code: ${e.status})`}}var tr={exports:{}};(function(t,e){var n=typeof self<"u"?self:It,r=function(){function i(){this.fetch=!1,this.DOMException=n.DOMException}return i.prototype=n,new i}();(function(i){(function(o){var s={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function u(m){return m&&DataView.prototype.isPrototypeOf(m)}if(s.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(m){return m&&l.indexOf(Object.prototype.toString.call(m))>-1};function f(m){if(typeof m!="string"&&(m=String(m)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(m))throw new TypeError("Invalid character in header field name");return m.toLowerCase()}function p(m){return typeof m!="string"&&(m=String(m)),m}function h(m){var b={next:function(){var _=m.shift();return{done:_===void 0,value:_}}};return s.iterable&&(b[Symbol.iterator]=function(){return b}),b}function v(m){this.map={},m instanceof v?m.forEach(function(b,_){this.append(_,b)},this):Array.isArray(m)?m.forEach(function(b){this.append(b[0],b[1])},this):m&&Object.getOwnPropertyNames(m).forEach(function(b){this.append(b,m[b])},this)}v.prototype.append=function(m,b){m=f(m),b=p(b);var _=this.map[m];this.map[m]=_?_+", "+b:b},v.prototype.delete=function(m){delete this.map[f(m)]},v.prototype.get=function(m){return m=f(m),this.has(m)?this.map[m]:null},v.prototype.has=function(m){return this.map.hasOwnProperty(f(m))},v.prototype.set=function(m,b){this.map[f(m)]=p(b)},v.prototype.forEach=function(m,b){for(var _ in this.map)this.map.hasOwnProperty(_)&&m.call(b,this.map[_],_,this)},v.prototype.keys=function(){var m=[];return this.forEach(function(b,_){m.push(_)}),h(m)},v.prototype.values=function(){var m=[];return this.forEach(function(b){m.push(b)}),h(m)},v.prototype.entries=function(){var m=[];return this.forEach(function(b,_){m.push([_,b])}),h(m)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function T(m){if(m.bodyUsed)return Promise.reject(new TypeError("Already read"));m.bodyUsed=!0}function P(m){return new Promise(function(b,_){m.onload=function(){b(m.result)},m.onerror=function(){_(m.error)}})}function I(m){var b=new FileReader,_=P(b);return b.readAsArrayBuffer(m),_}function L(m){var b=new FileReader,_=P(b);return b.readAsText(m),_}function k(m){for(var b=new Uint8Array(m),_=new Array(b.length),R=0;R<b.length;R++)_[R]=String.fromCharCode(b[R]);return _.join("")}function J(m){if(m.slice)return m.slice(0);var b=new Uint8Array(m.byteLength);return b.set(new Uint8Array(m)),b.buffer}function ye(){return this.bodyUsed=!1,this._initBody=function(m){this._bodyInit=m,m?typeof m=="string"?this._bodyText=m:s.blob&&Blob.prototype.isPrototypeOf(m)?this._bodyBlob=m:s.formData&&FormData.prototype.isPrototypeOf(m)?this._bodyFormData=m:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)?this._bodyText=m.toString():s.arrayBuffer&&s.blob&&u(m)?(this._bodyArrayBuffer=J(m.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(m)||c(m))?this._bodyArrayBuffer=J(m):this._bodyText=m=Object.prototype.toString.call(m):this._bodyText="",this.headers.get("content-type")||(typeof m=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var m=T(this);if(m)return m;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?T(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(I)}),this.text=function(){var m=T(this);if(m)return m;if(this._bodyBlob)return L(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(k(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(we)}),this.json=function(){return this.text().then(JSON.parse)},this}var se=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Ie(m){var b=m.toUpperCase();return se.indexOf(b)>-1?b:m}function oe(m,b){b=b||{};var _=b.body;if(m instanceof oe){if(m.bodyUsed)throw new TypeError("Already read");this.url=m.url,this.credentials=m.credentials,b.headers||(this.headers=new v(m.headers)),this.method=m.method,this.mode=m.mode,this.signal=m.signal,!_&&m._bodyInit!=null&&(_=m._bodyInit,m.bodyUsed=!0)}else this.url=String(m);if(this.credentials=b.credentials||this.credentials||"same-origin",(b.headers||!this.headers)&&(this.headers=new v(b.headers)),this.method=Ie(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.signal=b.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&_)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(_)}oe.prototype.clone=function(){return new oe(this,{body:this._bodyInit})};function we(m){var b=new FormData;return m.trim().split("&").forEach(function(_){if(_){var R=_.split("="),q=R.shift().replace(/\+/g," "),j=R.join("=").replace(/\+/g," ");b.append(decodeURIComponent(q),decodeURIComponent(j))}}),b}function Ne(m){var b=new v,_=m.replace(/\r?\n[\t ]+/g," ");return _.split(/\r?\n/).forEach(function(R){var q=R.split(":"),j=q.shift().trim();if(j){var X=q.join(":").trim();b.append(j,X)}}),b}ye.call(oe.prototype);function ee(m,b){b||(b={}),this.type="default",this.status=b.status===void 0?200:b.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in b?b.statusText:"OK",this.headers=new v(b.headers),this.url=b.url||"",this._initBody(m)}ye.call(ee.prototype),ee.prototype.clone=function(){return new ee(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},ee.error=function(){var m=new ee(null,{status:0,statusText:""});return m.type="error",m};var w=[301,302,303,307,308];ee.redirect=function(m,b){if(w.indexOf(b)===-1)throw new RangeError("Invalid status code");return new ee(null,{status:b,headers:{location:m}})},o.DOMException=i.DOMException;try{new o.DOMException}catch{o.DOMException=function(b,_){this.message=b,this.name=_;var R=Error(b);this.stack=R.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function g(m,b){return new Promise(function(_,R){var q=new oe(m,b);if(q.signal&&q.signal.aborted)return R(new o.DOMException("Aborted","AbortError"));var j=new XMLHttpRequest;function X(){j.abort()}j.onload=function(){var fe={status:j.status,statusText:j.statusText,headers:Ne(j.getAllResponseHeaders()||"")};fe.url="responseURL"in j?j.responseURL:fe.headers.get("X-Request-URL");var _e="response"in j?j.response:j.responseText;_(new ee(_e,fe))},j.onerror=function(){R(new TypeError("Network request failed"))},j.ontimeout=function(){R(new TypeError("Network request failed"))},j.onabort=function(){R(new o.DOMException("Aborted","AbortError"))},j.open(q.method,q.url,!0),q.credentials==="include"?j.withCredentials=!0:q.credentials==="omit"&&(j.withCredentials=!1),"responseType"in j&&s.blob&&(j.responseType="blob"),q.headers.forEach(function(fe,_e){j.setRequestHeader(_e,fe)}),q.signal&&(q.signal.addEventListener("abort",X),j.onreadystatechange=function(){j.readyState===4&&q.signal.removeEventListener("abort",X)}),j.send(typeof q._bodyInit>"u"?null:q._bodyInit)})}return g.polyfill=!0,i.fetch||(i.fetch=g,i.Headers=v,i.Request=oe,i.Response=ee),o.Headers=v,o.Request=oe,o.Response=ee,o.fetch=g,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var a=r;e=a.fetch,e.default=a.fetch,e.fetch=a.fetch,e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response,t.exports=e})(tr,tr.exports);var yn=tr.exports;const fn=qn(yn),Wl=Hu({__proto__:null,default:fn},[yn]),ft=t=>{let e={};return t&&(typeof Headers<"u"&&t instanceof Headers||Wl&&yn.Headers&&t instanceof yn.Headers?e=rl(t):Array.isArray(t)?t.forEach(([n,r])=>{n&&r!==void 0&&(e[n]=r)}):e=t),e},jr=t=>t.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),zl=t=>{if(!Array.isArray(t.query)){const r=t,a=[`query=${encodeURIComponent(jr(r.query))}`];return t.variables&&a.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&a.push(`operationName=${encodeURIComponent(r.operationName)}`),a.join("&")}if(typeof t.variables<"u"&&!Array.isArray(t.variables))throw new Error("Cannot create query with given variable type, array expected");const e=t,n=t.query.reduce((r,a,i)=>(r.push({query:jr(a),variables:e.variables?e.jsonSerializer.stringify(e.variables[i]):void 0}),r),[]);return`query=${encodeURIComponent(e.jsonSerializer.stringify(n))}`},Yl=t=>async e=>{const{url:n,query:r,variables:a,operationName:i,fetch:o,fetchOptions:s,middleware:u}=e,l={...e.headers};let c="",f;t==="POST"?(f=tl(r,a,i,s.jsonSerializer),typeof f=="string"&&(l["Content-Type"]="application/json")):c=zl({query:r,variables:a,operationName:i,jsonSerializer:s.jsonSerializer??Er});const p={method:t,headers:l,body:f,...s};let h=n,v=p;if(u){const T=await Promise.resolve(u({...p,url:n,operationName:i,variables:a})),{url:P,...I}=T;h=P,v=I}return c&&(h=`${h}?${c}`),await o(h,v)};class Ee{constructor(e,n={}){this.url=e,this.requestConfig=n,this.rawRequest=async(...r)=>{const[a,i,o]=r,s=il(a,i,o),{headers:u,fetch:l=fn,method:c="POST",requestMiddleware:f,responseMiddleware:p,...h}=this.requestConfig,{url:v}=this;s.signal!==void 0&&(h.signal=s.signal);const{operationName:T}=zn(s.query);return Yn({url:v,query:s.query,variables:s.variables,headers:{...ft(Jn(u)),...ft(s.requestHeaders)},operationName:T,fetch:l,method:c,fetchOptions:h,middleware:f}).then(P=>(p&&p(P),P)).catch(P=>{throw p&&p(P),P})}}async request(e,...n){const[r,a]=n,i=al(e,r,a),{headers:o,fetch:s=fn,method:u="POST",requestMiddleware:l,responseMiddleware:c,...f}=this.requestConfig,{url:p}=this;i.signal!==void 0&&(f.signal=i.signal);const{query:h,operationName:v}=zn(i.document);return Yn({url:p,query:h,variables:i.variables,headers:{...ft(Jn(o)),...ft(i.requestHeaders)},operationName:v,fetch:s,method:u,fetchOptions:f,middleware:l}).then(T=>(c&&c(T),T.data)).catch(T=>{throw c&&c(T),T})}batchRequests(e,n){const r=sl(e,n),{headers:a,...i}=this.requestConfig;r.signal!==void 0&&(i.signal=r.signal);const o=r.documents.map(({document:u})=>zn(u).query),s=r.documents.map(({variables:u})=>u);return Yn({url:this.url,query:o,variables:s,headers:{...ft(Jn(a)),...ft(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??fn,method:this.requestConfig.method||"POST",fetchOptions:i,middleware:this.requestConfig.requestMiddleware}).then(u=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u.data)).catch(u=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u})}setHeaders(e){return this.requestConfig.headers=e,this}setHeader(e,n){const{headers:r}=this.requestConfig;return r?r[e]=n:this.requestConfig.headers={[e]:n},this}setEndpoint(e){return this.url=e,this}}const Yn=async t=>{const{query:e,variables:n,fetchOptions:r}=t,a=Yl(nl(t.method??"post")),i=Array.isArray(t.query),o=await a(t),s=await Jl(o,r.jsonSerializer??Er),u=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,l=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(o.ok&&l&&u){const{errors:c,...f}=(Array.isArray(s),s),p=r.errorPolicy==="ignore"?f:s;return{...i?{data:p}:p,headers:o.headers,status:o.status}}else{const c=typeof s=="string"?{error:s}:s;throw new Ot({...c,status:o.status,headers:o.headers},{query:e,variables:n})}},Jl=async(t,e)=>{let n;return t.headers.forEach((r,a)=>{a.toLowerCase()==="content-type"&&(n=r)}),n&&(n.toLowerCase().startsWith("application/json")||n.toLowerCase().startsWith("application/graphql+json")||n.toLowerCase().startsWith("application/graphql-response+json"))?e.parse(await t.text()):t.text()},Jn=t=>typeof t=="function"?t():t;var wn=function(){return wn=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},wn.apply(this,arguments)},dn=new Map,nr=new Map,jo=!0,_n=!1;function Uo(t){return t.replace(/[\s,]+/g," ").trim()}function Ql(t){return Uo(t.source.body.substring(t.start,t.end))}function Xl(t){var e=new Set,n=[];return t.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var a=r.name.value,i=Ql(r.loc),o=nr.get(a);o&&!o.has(i)?jo&&console.warn("Warning: fragment with name "+a+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||nr.set(a,o=new Set),o.add(i),e.has(i)||(e.add(i),n.push(r))}else n.push(r)}),wn(wn({},t),{definitions:n})}function Kl(t){var e=new Set(t.definitions);e.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(a){var i=r[a];i&&typeof i=="object"&&e.add(i)})});var n=t.loc;return n&&(delete n.startToken,delete n.endToken),t}function ec(t){var e=Uo(t);if(!dn.has(e)){var n=xo(t,{experimentalFragmentVariables:_n,allowLegacyFragmentVariables:_n});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");dn.set(e,Kl(Xl(n)))}return dn.get(e)}function vt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];typeof t=="string"&&(t=[t]);var r=t[0];return e.forEach(function(a,i){a&&a.kind==="Document"?r+=a.loc.source.body:r+=a,r+=t[i+1]}),ec(r)}function tc(){dn.clear(),nr.clear()}function nc(){jo=!1}function rc(){_n=!0}function ac(){_n=!1}var Dt={gql:vt,resetCaches:tc,disableFragmentWarnings:nc,enableExperimentalFragmentVariables:rc,disableExperimentalFragmentVariables:ac};(function(t){t.gql=Dt.gql,t.resetCaches=Dt.resetCaches,t.disableFragmentWarnings=Dt.disableFragmentWarnings,t.enableExperimentalFragmentVariables=Dt.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=Dt.disableExperimentalFragmentVariables})(vt||(vt={}));vt.default=vt;const S=vt;/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var ht=9e15,Ke=1e9,rr="0123456789abcdef",bn="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",kn="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",ar={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-ht,maxE:ht,crypto:!1},Vo,Ve,Z=!0,jn="[DecimalError] ",Ye=jn+"Invalid argument: ",Bo=jn+"Precision limit exceeded",Go=jn+"crypto unavailable",Ho="[object Decimal]",ve=Math.floor,de=Math.pow,ic=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,sc=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,oc=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Zo=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Re=1e7,V=7,uc=9007199254740991,lc=bn.length-1,ir=kn.length-1,N={toStringTag:Ho};N.absoluteValue=N.abs=function(){var t=new this.constructor(this);return t.s<0&&(t.s=1),x(t)};N.ceil=function(){return x(new this.constructor(this),this.e+1,2)};N.clampedTo=N.clamp=function(t,e){var n,r=this,a=r.constructor;if(t=new a(t),e=new a(e),!t.s||!e.s)return new a(NaN);if(t.gt(e))throw Error(Ye+e);return n=r.cmp(t),n<0?t:r.cmp(e)>0?e:new a(r)};N.comparedTo=N.cmp=function(t){var e,n,r,a,i=this,o=i.d,s=(t=new i.constructor(t)).d,u=i.s,l=t.s;if(!o||!s)return!u||!l?NaN:u!==l?u:o===s?0:!o^u<0?1:-1;if(!o[0]||!s[0])return o[0]?u:s[0]?-l:0;if(u!==l)return u;if(i.e!==t.e)return i.e>t.e^u<0?1:-1;for(r=o.length,a=s.length,e=0,n=r<a?r:a;e<n;++e)if(o[e]!==s[e])return o[e]>s[e]^u<0?1:-1;return r===a?0:r>a^u<0?1:-1};N.cosine=N.cos=function(){var t,e,n=this,r=n.constructor;return n.d?n.d[0]?(t=r.precision,e=r.rounding,r.precision=t+Math.max(n.e,n.sd())+V,r.rounding=1,n=cc(r,Qo(r,n)),r.precision=t,r.rounding=e,x(Ve==2||Ve==3?n.neg():n,t,e,!0)):new r(1):new r(NaN)};N.cubeRoot=N.cbrt=function(){var t,e,n,r,a,i,o,s,u,l,c=this,f=c.constructor;if(!c.isFinite()||c.isZero())return new f(c);for(Z=!1,i=c.s*de(c.s*c,1/3),!i||Math.abs(i)==1/0?(n=me(c.d),t=c.e,(i=(t-n.length+1)%3)&&(n+=i==1||i==-2?"0":"00"),i=de(n,1/3),t=ve((t+1)/3)-(t%3==(t<0?-1:2)),i==1/0?n="5e"+t:(n=i.toExponential(),n=n.slice(0,n.indexOf("e")+1)+t),r=new f(n),r.s=c.s):r=new f(i.toString()),o=(t=f.precision)+3;;)if(s=r,u=s.times(s).times(s),l=u.plus(c),r=ne(l.plus(c).times(s),l.plus(u),o+2,1),me(s.d).slice(0,o)===(n=me(r.d)).slice(0,o))if(n=n.slice(o-3,o+1),n=="9999"||!a&&n=="4999"){if(!a&&(x(s,t+1,0),s.times(s).times(s).eq(c))){r=s;break}o+=4,a=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(x(r,t+1,1),e=!r.times(r).times(r).eq(c));break}return Z=!0,x(r,t,f.rounding,e)};N.decimalPlaces=N.dp=function(){var t,e=this.d,n=NaN;if(e){if(t=e.length-1,n=(t-ve(this.e/V))*V,t=e[t],t)for(;t%10==0;t/=10)n--;n<0&&(n=0)}return n};N.dividedBy=N.div=function(t){return ne(this,new this.constructor(t))};N.dividedToIntegerBy=N.divToInt=function(t){var e=this,n=e.constructor;return x(ne(e,new n(t),0,1,1),n.precision,n.rounding)};N.equals=N.eq=function(t){return this.cmp(t)===0};N.floor=function(){return x(new this.constructor(this),this.e+1,3)};N.greaterThan=N.gt=function(t){return this.cmp(t)>0};N.greaterThanOrEqualTo=N.gte=function(t){var e=this.cmp(t);return e==1||e===0};N.hyperbolicCosine=N.cosh=function(){var t,e,n,r,a,i=this,o=i.constructor,s=new o(1);if(!i.isFinite())return new o(i.s?1/0:NaN);if(i.isZero())return s;n=o.precision,r=o.rounding,o.precision=n+Math.max(i.e,i.sd())+4,o.rounding=1,a=i.d.length,a<32?(t=Math.ceil(a/3),e=(1/Vn(4,t)).toString()):(t=16,e="2.3283064365386962890625e-10"),i=gt(o,1,i.times(e),new o(1),!0);for(var u,l=t,c=new o(8);l--;)u=i.times(i),i=s.minus(u.times(c.minus(u.times(c))));return x(i,o.precision=n,o.rounding=r,!0)};N.hyperbolicSine=N.sinh=function(){var t,e,n,r,a=this,i=a.constructor;if(!a.isFinite()||a.isZero())return new i(a);if(e=i.precision,n=i.rounding,i.precision=e+Math.max(a.e,a.sd())+4,i.rounding=1,r=a.d.length,r<3)a=gt(i,2,a,a,!0);else{t=1.4*Math.sqrt(r),t=t>16?16:t|0,a=a.times(1/Vn(5,t)),a=gt(i,2,a,a,!0);for(var o,s=new i(5),u=new i(16),l=new i(20);t--;)o=a.times(a),a=a.times(s.plus(o.times(u.times(o).plus(l))))}return i.precision=e,i.rounding=n,x(a,e,n,!0)};N.hyperbolicTangent=N.tanh=function(){var t,e,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+7,r.rounding=1,ne(n.sinh(),n.cosh(),r.precision=t,r.rounding=e)):new r(n.s)};N.inverseCosine=N.acos=function(){var t,e=this,n=e.constructor,r=e.abs().cmp(1),a=n.precision,i=n.rounding;return r!==-1?r===0?e.isNeg()?Oe(n,a,i):new n(0):new n(NaN):e.isZero()?Oe(n,a+4,i).times(.5):(n.precision=a+6,n.rounding=1,e=e.asin(),t=Oe(n,a+4,i).times(.5),n.precision=a,n.rounding=i,t.minus(e))};N.inverseHyperbolicCosine=N.acosh=function(){var t,e,n=this,r=n.constructor;return n.lte(1)?new r(n.eq(1)?0:NaN):n.isFinite()?(t=r.precision,e=r.rounding,r.precision=t+Math.max(Math.abs(n.e),n.sd())+4,r.rounding=1,Z=!1,n=n.times(n).minus(1).sqrt().plus(n),Z=!0,r.precision=t,r.rounding=e,n.ln()):new r(n)};N.inverseHyperbolicSine=N.asinh=function(){var t,e,n=this,r=n.constructor;return!n.isFinite()||n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+2*Math.max(Math.abs(n.e),n.sd())+6,r.rounding=1,Z=!1,n=n.times(n).plus(1).sqrt().plus(n),Z=!0,r.precision=t,r.rounding=e,n.ln())};N.inverseHyperbolicTangent=N.atanh=function(){var t,e,n,r,a=this,i=a.constructor;return a.isFinite()?a.e>=0?new i(a.abs().eq(1)?a.s/0:a.isZero()?a:NaN):(t=i.precision,e=i.rounding,r=a.sd(),Math.max(r,t)<2*-a.e-1?x(new i(a),t,e,!0):(i.precision=n=r-a.e,a=ne(a.plus(1),new i(1).minus(a),n+t,1),i.precision=t+4,i.rounding=1,a=a.ln(),i.precision=t,i.rounding=e,a.times(.5))):new i(NaN)};N.inverseSine=N.asin=function(){var t,e,n,r,a=this,i=a.constructor;return a.isZero()?new i(a):(e=a.abs().cmp(1),n=i.precision,r=i.rounding,e!==-1?e===0?(t=Oe(i,n+4,r).times(.5),t.s=a.s,t):new i(NaN):(i.precision=n+6,i.rounding=1,a=a.div(new i(1).minus(a.times(a)).sqrt().plus(1)).atan(),i.precision=n,i.rounding=r,a.times(2)))};N.inverseTangent=N.atan=function(){var t,e,n,r,a,i,o,s,u,l=this,c=l.constructor,f=c.precision,p=c.rounding;if(l.isFinite()){if(l.isZero())return new c(l);if(l.abs().eq(1)&&f+4<=ir)return o=Oe(c,f+4,p).times(.25),o.s=l.s,o}else{if(!l.s)return new c(NaN);if(f+4<=ir)return o=Oe(c,f+4,p).times(.5),o.s=l.s,o}for(c.precision=s=f+10,c.rounding=1,n=Math.min(28,s/V+2|0),t=n;t;--t)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(Z=!1,e=Math.ceil(s/V),r=1,u=l.times(l),o=new c(l),a=l;t!==-1;)if(a=a.times(u),i=o.minus(a.div(r+=2)),a=a.times(u),o=i.plus(a.div(r+=2)),o.d[e]!==void 0)for(t=e;o.d[t]===i.d[t]&&t--;);return n&&(o=o.times(2<<n-1)),Z=!0,x(o,c.precision=f,c.rounding=p,!0)};N.isFinite=function(){return!!this.d};N.isInteger=N.isInt=function(){return!!this.d&&ve(this.e/V)>this.d.length-2};N.isNaN=function(){return!this.s};N.isNegative=N.isNeg=function(){return this.s<0};N.isPositive=N.isPos=function(){return this.s>0};N.isZero=function(){return!!this.d&&this.d[0]===0};N.lessThan=N.lt=function(t){return this.cmp(t)<0};N.lessThanOrEqualTo=N.lte=function(t){return this.cmp(t)<1};N.logarithm=N.log=function(t){var e,n,r,a,i,o,s,u,l=this,c=l.constructor,f=c.precision,p=c.rounding,h=5;if(t==null)t=new c(10),e=!0;else{if(t=new c(t),n=t.d,t.s<0||!n||!n[0]||t.eq(1))return new c(NaN);e=t.eq(10)}if(n=l.d,l.s<0||!n||!n[0]||l.eq(1))return new c(n&&!n[0]?-1/0:l.s!=1?NaN:n?0:1/0);if(e)if(n.length>1)i=!0;else{for(a=n[0];a%10===0;)a/=10;i=a!==1}if(Z=!1,s=f+h,o=We(l,s),r=e?Tn(c,s+10):We(t,s),u=ne(o,r,s,1),$t(u.d,a=f,p))do if(s+=10,o=We(l,s),r=e?Tn(c,s+10):We(t,s),u=ne(o,r,s,1),!i){+me(u.d).slice(a+1,a+15)+1==1e14&&(u=x(u,f+1,0));break}while($t(u.d,a+=10,p));return Z=!0,x(u,f,p)};N.minus=N.sub=function(t){var e,n,r,a,i,o,s,u,l,c,f,p,h=this,v=h.constructor;if(t=new v(t),!h.d||!t.d)return!h.s||!t.s?t=new v(NaN):h.d?t.s=-t.s:t=new v(t.d||h.s!==t.s?h:NaN),t;if(h.s!=t.s)return t.s=-t.s,h.plus(t);if(l=h.d,p=t.d,s=v.precision,u=v.rounding,!l[0]||!p[0]){if(p[0])t.s=-t.s;else if(l[0])t=new v(h);else return new v(u===3?-0:0);return Z?x(t,s,u):t}if(n=ve(t.e/V),c=ve(h.e/V),l=l.slice(),i=c-n,i){for(f=i<0,f?(e=l,i=-i,o=p.length):(e=p,n=c,o=l.length),r=Math.max(Math.ceil(s/V),o)+2,i>r&&(i=r,e.length=1),e.reverse(),r=i;r--;)e.push(0);e.reverse()}else{for(r=l.length,o=p.length,f=r<o,f&&(o=r),r=0;r<o;r++)if(l[r]!=p[r]){f=l[r]<p[r];break}i=0}for(f&&(e=l,l=p,p=e,t.s=-t.s),o=l.length,r=p.length-o;r>0;--r)l[o++]=0;for(r=p.length;r>i;){if(l[--r]<p[r]){for(a=r;a&&l[--a]===0;)l[a]=Re-1;--l[a],l[r]+=Re}l[r]-=p[r]}for(;l[--o]===0;)l.pop();for(;l[0]===0;l.shift())--n;return l[0]?(t.d=l,t.e=Un(l,n),Z?x(t,s,u):t):new v(u===3?-0:0)};N.modulo=N.mod=function(t){var e,n=this,r=n.constructor;return t=new r(t),!n.d||!t.s||t.d&&!t.d[0]?new r(NaN):!t.d||n.d&&!n.d[0]?x(new r(n),r.precision,r.rounding):(Z=!1,r.modulo==9?(e=ne(n,t.abs(),0,3,1),e.s*=t.s):e=ne(n,t,0,r.modulo,1),e=e.times(t),Z=!0,n.minus(e))};N.naturalExponential=N.exp=function(){return sr(this)};N.naturalLogarithm=N.ln=function(){return We(this)};N.negated=N.neg=function(){var t=new this.constructor(this);return t.s=-t.s,x(t)};N.plus=N.add=function(t){var e,n,r,a,i,o,s,u,l,c,f=this,p=f.constructor;if(t=new p(t),!f.d||!t.d)return!f.s||!t.s?t=new p(NaN):f.d||(t=new p(t.d||f.s===t.s?f:NaN)),t;if(f.s!=t.s)return t.s=-t.s,f.minus(t);if(l=f.d,c=t.d,s=p.precision,u=p.rounding,!l[0]||!c[0])return c[0]||(t=new p(f)),Z?x(t,s,u):t;if(i=ve(f.e/V),r=ve(t.e/V),l=l.slice(),a=i-r,a){for(a<0?(n=l,a=-a,o=c.length):(n=c,r=i,o=l.length),i=Math.ceil(s/V),o=i>o?i+1:o+1,a>o&&(a=o,n.length=1),n.reverse();a--;)n.push(0);n.reverse()}for(o=l.length,a=c.length,o-a<0&&(a=o,n=c,c=l,l=n),e=0;a;)e=(l[--a]=l[a]+c[a]+e)/Re|0,l[a]%=Re;for(e&&(l.unshift(e),++r),o=l.length;l[--o]==0;)l.pop();return t.d=l,t.e=Un(l,r),Z?x(t,s,u):t};N.precision=N.sd=function(t){var e,n=this;if(t!==void 0&&t!==!!t&&t!==1&&t!==0)throw Error(Ye+t);return n.d?(e=Wo(n.d),t&&n.e+1>e&&(e=n.e+1)):e=NaN,e};N.round=function(){var t=this,e=t.constructor;return x(new e(t),t.e+1,e.rounding)};N.sine=N.sin=function(){var t,e,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+Math.max(n.e,n.sd())+V,r.rounding=1,n=dc(r,Qo(r,n)),r.precision=t,r.rounding=e,x(Ve>2?n.neg():n,t,e,!0)):new r(NaN)};N.squareRoot=N.sqrt=function(){var t,e,n,r,a,i,o=this,s=o.d,u=o.e,l=o.s,c=o.constructor;if(l!==1||!s||!s[0])return new c(!l||l<0&&(!s||s[0])?NaN:s?o:1/0);for(Z=!1,l=Math.sqrt(+o),l==0||l==1/0?(e=me(s),(e.length+u)%2==0&&(e+="0"),l=Math.sqrt(e),u=ve((u+1)/2)-(u<0||u%2),l==1/0?e="5e"+u:(e=l.toExponential(),e=e.slice(0,e.indexOf("e")+1)+u),r=new c(e)):r=new c(l.toString()),n=(u=c.precision)+3;;)if(i=r,r=i.plus(ne(o,i,n+2,1)).times(.5),me(i.d).slice(0,n)===(e=me(r.d)).slice(0,n))if(e=e.slice(n-3,n+1),e=="9999"||!a&&e=="4999"){if(!a&&(x(i,u+1,0),i.times(i).eq(o))){r=i;break}n+=4,a=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(x(r,u+1,1),t=!r.times(r).eq(o));break}return Z=!0,x(r,u,c.rounding,t)};N.tangent=N.tan=function(){var t,e,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+10,r.rounding=1,n=n.sin(),n.s=1,n=ne(n,new r(1).minus(n.times(n)).sqrt(),t+10,0),r.precision=t,r.rounding=e,x(Ve==2||Ve==4?n.neg():n,t,e,!0)):new r(NaN)};N.times=N.mul=function(t){var e,n,r,a,i,o,s,u,l,c=this,f=c.constructor,p=c.d,h=(t=new f(t)).d;if(t.s*=c.s,!p||!p[0]||!h||!h[0])return new f(!t.s||p&&!p[0]&&!h||h&&!h[0]&&!p?NaN:!p||!h?t.s/0:t.s*0);for(n=ve(c.e/V)+ve(t.e/V),u=p.length,l=h.length,u<l&&(i=p,p=h,h=i,o=u,u=l,l=o),i=[],o=u+l,r=o;r--;)i.push(0);for(r=l;--r>=0;){for(e=0,a=u+r;a>r;)s=i[a]+h[r]*p[a-r-1]+e,i[a--]=s%Re|0,e=s/Re|0;i[a]=(i[a]+e)%Re|0}for(;!i[--o];)i.pop();return e?++n:i.shift(),t.d=i,t.e=Un(i,n),Z?x(t,f.precision,f.rounding):t};N.toBinary=function(t,e){return Cr(this,2,t,e)};N.toDecimalPlaces=N.toDP=function(t,e){var n=this,r=n.constructor;return n=new r(n),t===void 0?n:(Se(t,0,Ke),e===void 0?e=r.rounding:Se(e,0,8),x(n,t+n.e+1,e))};N.toExponential=function(t,e){var n,r=this,a=r.constructor;return t===void 0?n=Le(r,!0):(Se(t,0,Ke),e===void 0?e=a.rounding:Se(e,0,8),r=x(new a(r),t+1,e),n=Le(r,!0,t+1)),r.isNeg()&&!r.isZero()?"-"+n:n};N.toFixed=function(t,e){var n,r,a=this,i=a.constructor;return t===void 0?n=Le(a):(Se(t,0,Ke),e===void 0?e=i.rounding:Se(e,0,8),r=x(new i(a),t+a.e+1,e),n=Le(r,!1,t+r.e+1)),a.isNeg()&&!a.isZero()?"-"+n:n};N.toFraction=function(t){var e,n,r,a,i,o,s,u,l,c,f,p,h=this,v=h.d,T=h.constructor;if(!v)return new T(h);if(l=n=new T(1),r=u=new T(0),e=new T(r),i=e.e=Wo(v)-h.e-1,o=i%V,e.d[0]=de(10,o<0?V+o:o),t==null)t=i>0?e:l;else{if(s=new T(t),!s.isInt()||s.lt(l))throw Error(Ye+s);t=s.gt(e)?i>0?e:l:s}for(Z=!1,s=new T(me(v)),c=T.precision,T.precision=i=v.length*V*2;f=ne(s,e,0,1,1),a=n.plus(f.times(r)),a.cmp(t)!=1;)n=r,r=a,a=l,l=u.plus(f.times(a)),u=a,a=e,e=s.minus(f.times(a)),s=a;return a=ne(t.minus(n),r,0,1,1),u=u.plus(a.times(l)),n=n.plus(a.times(r)),u.s=l.s=h.s,p=ne(l,r,i,1).minus(h).abs().cmp(ne(u,n,i,1).minus(h).abs())<1?[l,r]:[u,n],T.precision=c,Z=!0,p};N.toHexadecimal=N.toHex=function(t,e){return Cr(this,16,t,e)};N.toNearest=function(t,e){var n=this,r=n.constructor;if(n=new r(n),t==null){if(!n.d)return n;t=new r(1),e=r.rounding}else{if(t=new r(t),e===void 0?e=r.rounding:Se(e,0,8),!n.d)return t.s?n:t;if(!t.d)return t.s&&(t.s=n.s),t}return t.d[0]?(Z=!1,n=ne(n,t,0,e,1).times(t),Z=!0,x(n)):(t.s=n.s,n=t),n};N.toNumber=function(){return+this};N.toOctal=function(t,e){return Cr(this,8,t,e)};N.toPower=N.pow=function(t){var e,n,r,a,i,o,s=this,u=s.constructor,l=+(t=new u(t));if(!s.d||!t.d||!s.d[0]||!t.d[0])return new u(de(+s,l));if(s=new u(s),s.eq(1))return s;if(r=u.precision,i=u.rounding,t.eq(1))return x(s,r,i);if(e=ve(t.e/V),e>=t.d.length-1&&(n=l<0?-l:l)<=uc)return a=zo(u,s,n,r),t.s<0?new u(1).div(a):x(a,r,i);if(o=s.s,o<0){if(e<t.d.length-1)return new u(NaN);if(t.d[e]&1||(o=1),s.e==0&&s.d[0]==1&&s.d.length==1)return s.s=o,s}return n=de(+s,l),e=n==0||!isFinite(n)?ve(l*(Math.log("0."+me(s.d))/Math.LN10+s.e+1)):new u(n+"").e,e>u.maxE+1||e<u.minE-1?new u(e>0?o/0:0):(Z=!1,u.rounding=s.s=1,n=Math.min(12,(e+"").length),a=sr(t.times(We(s,r+n)),r),a.d&&(a=x(a,r+5,1),$t(a.d,r,i)&&(e=r+10,a=x(sr(t.times(We(s,e+n)),e),e+5,1),+me(a.d).slice(r+1,r+15)+1==1e14&&(a=x(a,r+1,0)))),a.s=o,Z=!0,u.rounding=i,x(a,r,i))};N.toPrecision=function(t,e){var n,r=this,a=r.constructor;return t===void 0?n=Le(r,r.e<=a.toExpNeg||r.e>=a.toExpPos):(Se(t,1,Ke),e===void 0?e=a.rounding:Se(e,0,8),r=x(new a(r),t,e),n=Le(r,t<=r.e||r.e<=a.toExpNeg,t)),r.isNeg()&&!r.isZero()?"-"+n:n};N.toSignificantDigits=N.toSD=function(t,e){var n=this,r=n.constructor;return t===void 0?(t=r.precision,e=r.rounding):(Se(t,1,Ke),e===void 0?e=r.rounding:Se(e,0,8)),x(new r(n),t,e)};N.toString=function(){var t=this,e=t.constructor,n=Le(t,t.e<=e.toExpNeg||t.e>=e.toExpPos);return t.isNeg()&&!t.isZero()?"-"+n:n};N.truncated=N.trunc=function(){return x(new this.constructor(this),this.e+1,1)};N.valueOf=N.toJSON=function(){var t=this,e=t.constructor,n=Le(t,t.e<=e.toExpNeg||t.e>=e.toExpPos);return t.isNeg()?"-"+n:n};function me(t){var e,n,r,a=t.length-1,i="",o=t[0];if(a>0){for(i+=o,e=1;e<a;e++)r=t[e]+"",n=V-r.length,n&&(i+=He(n)),i+=r;o=t[e],r=o+"",n=V-r.length,n&&(i+=He(n))}else if(o===0)return"0";for(;o%10===0;)o/=10;return i+o}function Se(t,e,n){if(t!==~~t||t<e||t>n)throw Error(Ye+t)}function $t(t,e,n,r){var a,i,o,s;for(i=t[0];i>=10;i/=10)--e;return--e<0?(e+=V,a=0):(a=Math.ceil((e+1)/V),e%=V),i=de(10,V-e),s=t[a]%i|0,r==null?e<3?(e==0?s=s/100|0:e==1&&(s=s/10|0),o=n<4&&s==99999||n>3&&s==49999||s==5e4||s==0):o=(n<4&&s+1==i||n>3&&s+1==i/2)&&(t[a+1]/i/100|0)==de(10,e-2)-1||(s==i/2||s==0)&&(t[a+1]/i/100|0)==0:e<4?(e==0?s=s/1e3|0:e==1?s=s/100|0:e==2&&(s=s/10|0),o=(r||n<4)&&s==9999||!r&&n>3&&s==4999):o=((r||n<4)&&s+1==i||!r&&n>3&&s+1==i/2)&&(t[a+1]/i/1e3|0)==de(10,e-3)-1,o}function pn(t,e,n){for(var r,a=[0],i,o=0,s=t.length;o<s;){for(i=a.length;i--;)a[i]*=e;for(a[0]+=rr.indexOf(t.charAt(o++)),r=0;r<a.length;r++)a[r]>n-1&&(a[r+1]===void 0&&(a[r+1]=0),a[r+1]+=a[r]/n|0,a[r]%=n)}return a.reverse()}function cc(t,e){var n,r,a;if(e.isZero())return e;r=e.d.length,r<32?(n=Math.ceil(r/3),a=(1/Vn(4,n)).toString()):(n=16,a="2.3283064365386962890625e-10"),t.precision+=n,e=gt(t,1,e.times(a),new t(1));for(var i=n;i--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return t.precision-=n,e}var ne=function(){function t(r,a,i){var o,s=0,u=r.length;for(r=r.slice();u--;)o=r[u]*a+s,r[u]=o%i|0,s=o/i|0;return s&&r.unshift(s),r}function e(r,a,i,o){var s,u;if(i!=o)u=i>o?1:-1;else for(s=u=0;s<i;s++)if(r[s]!=a[s]){u=r[s]>a[s]?1:-1;break}return u}function n(r,a,i,o){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*o+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,o,s,u){var l,c,f,p,h,v,T,P,I,L,k,J,ye,se,Ie,oe,we,Ne,ee,w,g=r.constructor,m=r.s==a.s?1:-1,b=r.d,_=a.d;if(!b||!b[0]||!_||!_[0])return new g(!r.s||!a.s||(b?_&&b[0]==_[0]:!_)?NaN:b&&b[0]==0||!_?m*0:m/0);for(u?(h=1,c=r.e-a.e):(u=Re,h=V,c=ve(r.e/h)-ve(a.e/h)),ee=_.length,we=b.length,I=new g(m),L=I.d=[],f=0;_[f]==(b[f]||0);f++);if(_[f]>(b[f]||0)&&c--,i==null?(se=i=g.precision,o=g.rounding):s?se=i+(r.e-a.e)+1:se=i,se<0)L.push(1),v=!0;else{if(se=se/h+2|0,f=0,ee==1){for(p=0,_=_[0],se++;(f<we||p)&&se--;f++)Ie=p*u+(b[f]||0),L[f]=Ie/_|0,p=Ie%_|0;v=p||f<we}else{for(p=u/(_[0]+1)|0,p>1&&(_=t(_,p,u),b=t(b,p,u),ee=_.length,we=b.length),oe=ee,k=b.slice(0,ee),J=k.length;J<ee;)k[J++]=0;w=_.slice(),w.unshift(0),Ne=_[0],_[1]>=u/2&&++Ne;do p=0,l=e(_,k,ee,J),l<0?(ye=k[0],ee!=J&&(ye=ye*u+(k[1]||0)),p=ye/Ne|0,p>1?(p>=u&&(p=u-1),T=t(_,p,u),P=T.length,J=k.length,l=e(T,k,P,J),l==1&&(p--,n(T,ee<P?w:_,P,u))):(p==0&&(l=p=1),T=_.slice()),P=T.length,P<J&&T.unshift(0),n(k,T,J,u),l==-1&&(J=k.length,l=e(_,k,ee,J),l<1&&(p++,n(k,ee<J?w:_,J,u))),J=k.length):l===0&&(p++,k=[0]),L[f++]=p,l&&k[0]?k[J++]=b[oe]||0:(k=[b[oe]],J=1);while((oe++<we||k[0]!==void 0)&&se--);v=k[0]!==void 0}L[0]||L.shift()}if(h==1)I.e=c,Vo=v;else{for(f=1,p=L[0];p>=10;p/=10)f++;I.e=f+c*h-1,x(I,s?i+I.e+1:i,o,v)}return I}}();function x(t,e,n,r){var a,i,o,s,u,l,c,f,p,h=t.constructor;e:if(e!=null){if(f=t.d,!f)return t;for(a=1,s=f[0];s>=10;s/=10)a++;if(i=e-a,i<0)i+=V,o=e,c=f[p=0],u=c/de(10,a-o-1)%10|0;else if(p=Math.ceil((i+1)/V),s=f.length,p>=s)if(r){for(;s++<=p;)f.push(0);c=u=0,a=1,i%=V,o=i-V+1}else break e;else{for(c=s=f[p],a=1;s>=10;s/=10)a++;i%=V,o=i-V+a,u=o<0?0:c/de(10,a-o-1)%10|0}if(r=r||e<0||f[p+1]!==void 0||(o<0?c:c%de(10,a-o-1)),l=n<4?(u||r)&&(n==0||n==(t.s<0?3:2)):u>5||u==5&&(n==4||r||n==6&&(i>0?o>0?c/de(10,a-o):0:f[p-1])%10&1||n==(t.s<0?8:7)),e<1||!f[0])return f.length=0,l?(e-=t.e+1,f[0]=de(10,(V-e%V)%V),t.e=-e||0):f[0]=t.e=0,t;if(i==0?(f.length=p,s=1,p--):(f.length=p+1,s=de(10,V-i),f[p]=o>0?(c/de(10,a-o)%de(10,o)|0)*s:0),l)for(;;)if(p==0){for(i=1,o=f[0];o>=10;o/=10)i++;for(o=f[0]+=s,s=1;o>=10;o/=10)s++;i!=s&&(t.e++,f[0]==Re&&(f[0]=1));break}else{if(f[p]+=s,f[p]!=Re)break;f[p--]=0,s=1}for(i=f.length;f[--i]===0;)f.pop()}return Z&&(t.e>h.maxE?(t.d=null,t.e=NaN):t.e<h.minE&&(t.e=0,t.d=[0])),t}function Le(t,e,n){if(!t.isFinite())return Jo(t);var r,a=t.e,i=me(t.d),o=i.length;return e?(n&&(r=n-o)>0?i=i.charAt(0)+"."+i.slice(1)+He(r):o>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(t.e<0?"e":"e+")+t.e):a<0?(i="0."+He(-a-1)+i,n&&(r=n-o)>0&&(i+=He(r))):a>=o?(i+=He(a+1-o),n&&(r=n-a-1)>0&&(i=i+"."+He(r))):((r=a+1)<o&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-o)>0&&(a+1===o&&(i+="."),i+=He(r))),i}function Un(t,e){var n=t[0];for(e*=V;n>=10;n/=10)e++;return e}function Tn(t,e,n){if(e>lc)throw Z=!0,n&&(t.precision=n),Error(Bo);return x(new t(bn),e,1,!0)}function Oe(t,e,n){if(e>ir)throw Error(Bo);return x(new t(kn),e,n,!0)}function Wo(t){var e=t.length-1,n=e*V+1;if(e=t[e],e){for(;e%10==0;e/=10)n--;for(e=t[0];e>=10;e/=10)n++}return n}function He(t){for(var e="";t--;)e+="0";return e}function zo(t,e,n,r){var a,i=new t(1),o=Math.ceil(r/V+4);for(Z=!1;;){if(n%2&&(i=i.times(e),Vr(i.d,o)&&(a=!0)),n=ve(n/2),n===0){n=i.d.length-1,a&&i.d[n]===0&&++i.d[n];break}e=e.times(e),Vr(e.d,o)}return Z=!0,i}function Ur(t){return t.d[t.d.length-1]&1}function Yo(t,e,n){for(var r,a=new t(e[0]),i=0;++i<e.length;)if(r=new t(e[i]),r.s)a[n](r)&&(a=r);else{a=r;break}return a}function sr(t,e){var n,r,a,i,o,s,u,l=0,c=0,f=0,p=t.constructor,h=p.rounding,v=p.precision;if(!t.d||!t.d[0]||t.e>17)return new p(t.d?t.d[0]?t.s<0?0:1/0:1:t.s?t.s<0?0:t:0/0);for(e==null?(Z=!1,u=v):u=e,s=new p(.03125);t.e>-2;)t=t.times(s),f+=5;for(r=Math.log(de(2,f))/Math.LN10*2+5|0,u+=r,n=i=o=new p(1),p.precision=u;;){if(i=x(i.times(t),u,1),n=n.times(++c),s=o.plus(ne(i,n,u,1)),me(s.d).slice(0,u)===me(o.d).slice(0,u)){for(a=f;a--;)o=x(o.times(o),u,1);if(e==null)if(l<3&&$t(o.d,u-r,h,l))p.precision=u+=10,n=i=s=new p(1),c=0,l++;else return x(o,p.precision=v,h,Z=!0);else return p.precision=v,o}o=s}}function We(t,e){var n,r,a,i,o,s,u,l,c,f,p,h=1,v=10,T=t,P=T.d,I=T.constructor,L=I.rounding,k=I.precision;if(T.s<0||!P||!P[0]||!T.e&&P[0]==1&&P.length==1)return new I(P&&!P[0]?-1/0:T.s!=1?NaN:P?0:T);if(e==null?(Z=!1,c=k):c=e,I.precision=c+=v,n=me(P),r=n.charAt(0),Math.abs(i=T.e)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)T=T.times(t),n=me(T.d),r=n.charAt(0),h++;i=T.e,r>1?(T=new I("0."+n),i++):T=new I(r+"."+n.slice(1))}else return l=Tn(I,c+2,k).times(i+""),T=We(new I(r+"."+n.slice(1)),c-v).plus(l),I.precision=k,e==null?x(T,k,L,Z=!0):T;for(f=T,u=o=T=ne(T.minus(1),T.plus(1),c,1),p=x(T.times(T),c,1),a=3;;){if(o=x(o.times(p),c,1),l=u.plus(ne(o,new I(a),c,1)),me(l.d).slice(0,c)===me(u.d).slice(0,c))if(u=u.times(2),i!==0&&(u=u.plus(Tn(I,c+2,k).times(i+""))),u=ne(u,new I(h),c,1),e==null)if($t(u.d,c-v,L,s))I.precision=c+=v,l=o=T=ne(f.minus(1),f.plus(1),c,1),p=x(T.times(T),c,1),a=s=1;else return x(u,I.precision=k,L,Z=!0);else return I.precision=k,u;u=l,a+=2}}function Jo(t){return String(t.s*t.s/0)}function or(t,e){var n,r,a;for((n=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(n<0&&(n=r),n+=+e.slice(r+1),e=e.substring(0,r)):n<0&&(n=e.length),r=0;e.charCodeAt(r)===48;r++);for(a=e.length;e.charCodeAt(a-1)===48;--a);if(e=e.slice(r,a),e){if(a-=r,t.e=n=n-r-1,t.d=[],r=(n+1)%V,n<0&&(r+=V),r<a){for(r&&t.d.push(+e.slice(0,r)),a-=V;r<a;)t.d.push(+e.slice(r,r+=V));e=e.slice(r),r=V-e.length}else r-=a;for(;r--;)e+="0";t.d.push(+e),Z&&(t.e>t.constructor.maxE?(t.d=null,t.e=NaN):t.e<t.constructor.minE&&(t.e=0,t.d=[0]))}else t.e=0,t.d=[0];return t}function fc(t,e){var n,r,a,i,o,s,u,l,c;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Zo.test(e))return or(t,e)}else if(e==="Infinity"||e==="NaN")return+e||(t.s=NaN),t.e=NaN,t.d=null,t;if(sc.test(e))n=16,e=e.toLowerCase();else if(ic.test(e))n=2;else if(oc.test(e))n=8;else throw Error(Ye+e);for(i=e.search(/p/i),i>0?(u=+e.slice(i+1),e=e.substring(2,i)):e=e.slice(2),i=e.indexOf("."),o=i>=0,r=t.constructor,o&&(e=e.replace(".",""),s=e.length,i=s-i,a=zo(r,new r(n),i,i*2)),l=pn(e,n,Re),c=l.length-1,i=c;l[i]===0;--i)l.pop();return i<0?new r(t.s*0):(t.e=Un(l,c),t.d=l,Z=!1,o&&(t=ne(t,a,s*4)),u&&(t=t.times(Math.abs(u)<54?de(2,u):yt.pow(2,u))),Z=!0,t)}function dc(t,e){var n,r=e.d.length;if(r<3)return e.isZero()?e:gt(t,2,e,e);n=1.4*Math.sqrt(r),n=n>16?16:n|0,e=e.times(1/Vn(5,n)),e=gt(t,2,e,e);for(var a,i=new t(5),o=new t(16),s=new t(20);n--;)a=e.times(e),e=e.times(i.plus(a.times(o.times(a).minus(s))));return e}function gt(t,e,n,r,a){var i,o,s,u,l=t.precision,c=Math.ceil(l/V);for(Z=!1,u=n.times(n),s=new t(r);;){if(o=ne(s.times(u),new t(e++*e++),l,1),s=a?r.plus(o):r.minus(o),r=ne(o.times(u),new t(e++*e++),l,1),o=s.plus(r),o.d[c]!==void 0){for(i=c;o.d[i]===s.d[i]&&i--;);if(i==-1)break}i=s,s=r,r=o,o=i}return Z=!0,o.d.length=c+1,o}function Vn(t,e){for(var n=t;--e;)n*=t;return n}function Qo(t,e){var n,r=e.s<0,a=Oe(t,t.precision,1),i=a.times(.5);if(e=e.abs(),e.lte(i))return Ve=r?4:1,e;if(n=e.divToInt(a),n.isZero())Ve=r?3:2;else{if(e=e.minus(n.times(a)),e.lte(i))return Ve=Ur(n)?r?2:3:r?4:1,e;Ve=Ur(n)?r?1:4:r?3:2}return e.minus(a).abs()}function Cr(t,e,n,r){var a,i,o,s,u,l,c,f,p,h=t.constructor,v=n!==void 0;if(v?(Se(n,1,Ke),r===void 0?r=h.rounding:Se(r,0,8)):(n=h.precision,r=h.rounding),!t.isFinite())c=Jo(t);else{for(c=Le(t),o=c.indexOf("."),v?(a=2,e==16?n=n*4-3:e==8&&(n=n*3-2)):a=e,o>=0&&(c=c.replace(".",""),p=new h(1),p.e=c.length-o,p.d=pn(Le(p),10,a),p.e=p.d.length),f=pn(c,10,a),i=u=f.length;f[--u]==0;)f.pop();if(!f[0])c=v?"0p+0":"0";else{if(o<0?i--:(t=new h(t),t.d=f,t.e=i,t=ne(t,p,n,r,0,a),f=t.d,i=t.e,l=Vo),o=f[n],s=a/2,l=l||f[n+1]!==void 0,l=r<4?(o!==void 0||l)&&(r===0||r===(t.s<0?3:2)):o>s||o===s&&(r===4||l||r===6&&f[n-1]&1||r===(t.s<0?8:7)),f.length=n,l)for(;++f[--n]>a-1;)f[n]=0,n||(++i,f.unshift(1));for(u=f.length;!f[u-1];--u);for(o=0,c="";o<u;o++)c+=rr.charAt(f[o]);if(v){if(u>1)if(e==16||e==8){for(o=e==16?4:3,--u;u%o;u++)c+="0";for(f=pn(c,a,e),u=f.length;!f[u-1];--u);for(o=1,c="1.";o<u;o++)c+=rr.charAt(f[o])}else c=c.charAt(0)+"."+c.slice(1);c=c+(i<0?"p":"p+")+i}else if(i<0){for(;++i;)c="0"+c;c="0."+c}else if(++i>u)for(i-=u;i--;)c+="0";else i<u&&(c=c.slice(0,i)+"."+c.slice(i))}c=(e==16?"0x":e==2?"0b":e==8?"0o":"")+c}return t.s<0?"-"+c:c}function Vr(t,e){if(t.length>e)return t.length=e,!0}function pc(t){return new this(t).abs()}function hc(t){return new this(t).acos()}function mc(t){return new this(t).acosh()}function vc(t,e){return new this(t).plus(e)}function gc(t){return new this(t).asin()}function yc(t){return new this(t).asinh()}function wc(t){return new this(t).atan()}function _c(t){return new this(t).atanh()}function bc(t,e){t=new this(t),e=new this(e);var n,r=this.precision,a=this.rounding,i=r+4;return!t.s||!e.s?n=new this(NaN):!t.d&&!e.d?(n=Oe(this,i,1).times(e.s>0?.25:.75),n.s=t.s):!e.d||t.isZero()?(n=e.s<0?Oe(this,r,a):new this(0),n.s=t.s):!t.d||e.isZero()?(n=Oe(this,i,1).times(.5),n.s=t.s):e.s<0?(this.precision=i,this.rounding=1,n=this.atan(ne(t,e,i,1)),e=Oe(this,i,1),this.precision=r,this.rounding=a,n=t.s<0?n.minus(e):n.plus(e)):n=this.atan(ne(t,e,i,1)),n}function kc(t){return new this(t).cbrt()}function Tc(t){return x(t=new this(t),t.e+1,2)}function Ec(t,e,n){return new this(t).clamp(e,n)}function Sc(t){if(!t||typeof t!="object")throw Error(jn+"Object expected");var e,n,r,a=t.defaults===!0,i=["precision",1,Ke,"rounding",0,8,"toExpNeg",-ht,0,"toExpPos",0,ht,"maxE",0,ht,"minE",-ht,0,"modulo",0,9];for(e=0;e<i.length;e+=3)if(n=i[e],a&&(this[n]=ar[n]),(r=t[n])!==void 0)if(ve(r)===r&&r>=i[e+1]&&r<=i[e+2])this[n]=r;else throw Error(Ye+n+": "+r);if(n="crypto",a&&(this[n]=ar[n]),(r=t[n])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[n]=!0;else throw Error(Go);else this[n]=!1;else throw Error(Ye+n+": "+r);return this}function Cc(t){return new this(t).cos()}function Dc(t){return new this(t).cosh()}function Xo(t){var e,n,r;function a(i){var o,s,u,l=this;if(!(l instanceof a))return new a(i);if(l.constructor=a,Br(i)){l.s=i.s,Z?!i.d||i.e>a.maxE?(l.e=NaN,l.d=null):i.e<a.minE?(l.e=0,l.d=[0]):(l.e=i.e,l.d=i.d.slice()):(l.e=i.e,l.d=i.d?i.d.slice():i.d);return}if(u=typeof i,u==="number"){if(i===0){l.s=1/i<0?-1:1,l.e=0,l.d=[0];return}if(i<0?(i=-i,l.s=-1):l.s=1,i===~~i&&i<1e7){for(o=0,s=i;s>=10;s/=10)o++;Z?o>a.maxE?(l.e=NaN,l.d=null):o<a.minE?(l.e=0,l.d=[0]):(l.e=o,l.d=[i]):(l.e=o,l.d=[i]);return}else if(i*0!==0){i||(l.s=NaN),l.e=NaN,l.d=null;return}return or(l,i.toString())}else if(u!=="string")throw Error(Ye+i);return(s=i.charCodeAt(0))===45?(i=i.slice(1),l.s=-1):(s===43&&(i=i.slice(1)),l.s=1),Zo.test(i)?or(l,i):fc(l,i)}if(a.prototype=N,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.EUCLID=9,a.config=a.set=Sc,a.clone=Xo,a.isDecimal=Br,a.abs=pc,a.acos=hc,a.acosh=mc,a.add=vc,a.asin=gc,a.asinh=yc,a.atan=wc,a.atanh=_c,a.atan2=bc,a.cbrt=kc,a.ceil=Tc,a.clamp=Ec,a.cos=Cc,a.cosh=Dc,a.div=Nc,a.exp=Ic,a.floor=Pc,a.hypot=Oc,a.ln=Ac,a.log=Rc,a.log10=Mc,a.log2=$c,a.max=Fc,a.min=qc,a.mod=xc,a.mul=Lc,a.pow=jc,a.random=Uc,a.round=Vc,a.sign=Bc,a.sin=Gc,a.sinh=Hc,a.sqrt=Zc,a.sub=Wc,a.sum=zc,a.tan=Yc,a.tanh=Jc,a.trunc=Qc,t===void 0&&(t={}),t&&t.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<r.length;)t.hasOwnProperty(n=r[e++])||(t[n]=this[n]);return a.config(t),a}function Nc(t,e){return new this(t).div(e)}function Ic(t){return new this(t).exp()}function Pc(t){return x(t=new this(t),t.e+1,3)}function Oc(){var t,e,n=new this(0);for(Z=!1,t=0;t<arguments.length;)if(e=new this(arguments[t++]),e.d)n.d&&(n=n.plus(e.times(e)));else{if(e.s)return Z=!0,new this(1/0);n=e}return Z=!0,n.sqrt()}function Br(t){return t instanceof yt||t&&t.toStringTag===Ho||!1}function Ac(t){return new this(t).ln()}function Rc(t,e){return new this(t).log(e)}function $c(t){return new this(t).log(2)}function Mc(t){return new this(t).log(10)}function Fc(){return Yo(this,arguments,"lt")}function qc(){return Yo(this,arguments,"gt")}function xc(t,e){return new this(t).mod(e)}function Lc(t,e){return new this(t).mul(e)}function jc(t,e){return new this(t).pow(e)}function Uc(t){var e,n,r,a,i=0,o=new this(1),s=[];if(t===void 0?t=this.precision:Se(t,1,Ke),r=Math.ceil(t/V),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));i<r;)a=e[i],a>=429e7?e[i]=crypto.getRandomValues(new Uint32Array(1))[0]:s[i++]=a%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(r*=4);i<r;)a=e[i]+(e[i+1]<<8)+(e[i+2]<<16)+((e[i+3]&127)<<24),a>=214e7?crypto.randomBytes(4).copy(e,i):(s.push(a%1e7),i+=4);i=r/4}else throw Error(Go);else for(;i<r;)s[i++]=Math.random()*1e7|0;for(r=s[--i],t%=V,r&&t&&(a=de(10,V-t),s[i]=(r/a|0)*a);s[i]===0;i--)s.pop();if(i<0)n=0,s=[0];else{for(n=-1;s[0]===0;n-=V)s.shift();for(r=1,a=s[0];a>=10;a/=10)r++;r<V&&(n-=V-r)}return o.e=n,o.d=s,o}function Vc(t){return x(t=new this(t),t.e+1,this.rounding)}function Bc(t){return t=new this(t),t.d?t.d[0]?t.s:0*t.s:t.s||NaN}function Gc(t){return new this(t).sin()}function Hc(t){return new this(t).sinh()}function Zc(t){return new this(t).sqrt()}function Wc(t,e){return new this(t).sub(e)}function zc(){var t=0,e=arguments,n=new this(e[t]);for(Z=!1;n.s&&++t<e.length;)n=n.plus(e[t]);return Z=!0,x(n,this.precision,this.rounding)}function Yc(t){return new this(t).tan()}function Jc(t){return new this(t).tanh()}function Qc(t){return x(t=new this(t),t.e+1,1)}N[Symbol.for("nodejs.util.inspect.custom")]=N.toString;N[Symbol.toStringTag]="Decimal";var yt=N.constructor=Xo(ar);bn=new yt(bn);kn=new yt(kn);function Xc(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Kc(t){var e=Xc(t,"string");return typeof e=="symbol"?e:String(e)}function Gr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Kc(r.key),r)}}function Kt(t,e,n){return e&&Gr(t.prototype,e),n&&Gr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function en(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mt(t,e){return Mt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Mt(t,e)}function Ko(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Mt(t,e)}function Ft(t){return Ft=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ft(t)}function eu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ef(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tf(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ef(t)}function tu(t){var e=eu();return function(){var r=Ft(t),a;if(e){var i=Ft(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return tf(this,a)}}function nf(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function hn(t,e,n){return eu()?hn=Reflect.construct.bind():hn=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),l=new u;return o&&Mt(l,o.prototype),l},hn.apply(null,arguments)}function ur(t){var e=typeof Map=="function"?new Map:void 0;return ur=function(r){if(r===null||!nf(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,a)}function a(){return hn(r,arguments,Ft(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Mt(a,r)},ur(t)}var nu=function(t){Ko(n,t);var e=tu(n);function n(r){return en(this,n),e.call(this,"InvariantError: ".concat(r))}return Kt(n)}(ur(Error));function qt(t,e){if(!t)throw new nu(e)}yt.clone({precision:32,toExpPos:18,toExpNeg:-19,rounding:yt.ROUND_HALF_CEIL});function lr(t){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lr(t)}var Hr;(function(t){t.ETHEREUM="ethereum",t.POLYGON="polygon"})(Hr||(Hr={}));var Zr;(function(t){t[t.NATIVE=0]="NATIVE",t[t.ERC20=1]="ERC20",t[t.FIAT=2]="FIAT"})(Zr||(Zr={}));var Wr;(function(t){t.ETH="ETH",t.MATIC="MATIC",t.USD="USD",t.USDC="USDC"})(Wr||(Wr={}));var zr;(function(t){t[t.ETHER=0]="ETHER",t[t.MATIC=1]="MATIC"})(zr||(zr={}));function rf(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ru=rf,af=typeof It=="object"&&It&&It.Object===Object&&It,sf=af,of=sf,uf=typeof self=="object"&&self&&self.Object===Object&&self,lf=of||uf||Function("return this")(),Dr=lf,cf=Dr,ff=cf.Symbol,Nr=ff,Yr=Nr,au=Object.prototype,df=au.hasOwnProperty,pf=au.toString,Nt=Yr?Yr.toStringTag:void 0;function hf(t){var e=df.call(t,Nt),n=t[Nt];try{t[Nt]=void 0;var r=!0}catch{}var a=pf.call(t);return r&&(e?t[Nt]=n:delete t[Nt]),a}var mf=hf,vf=Object.prototype,gf=vf.toString;function yf(t){return gf.call(t)}var wf=yf,Jr=Nr,_f=mf,bf=wf,kf="[object Null]",Tf="[object Undefined]",Qr=Jr?Jr.toStringTag:void 0;function Ef(t){return t==null?t===void 0?Tf:kf:Qr&&Qr in Object(t)?_f(t):bf(t)}var Sf=Ef,Cf=Sf,Df=ru,Nf="[object AsyncFunction]",If="[object Function]",Pf="[object GeneratorFunction]",Of="[object Proxy]";function Af(t){if(!Df(t))return!1;var e=Cf(t);return e==If||e==Pf||e==Nf||e==Of}var Rf=Af,$f=Dr,Mf=$f["__core-js_shared__"],Ff=Mf,Qn=Ff,Xr=function(){var t=/[^.]+$/.exec(Qn&&Qn.keys&&Qn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function qf(t){return!!Xr&&Xr in t}var xf=qf,Lf=Function.prototype,jf=Lf.toString;function Uf(t){if(t!=null){try{return jf.call(t)}catch{}try{return t+""}catch{}}return""}var Vf=Uf,Bf=Rf,Gf=xf,Hf=ru,Zf=Vf,Wf=/[\\^$.*+?()[\]{}|]/g,zf=/^\[object .+?Constructor\]$/,Yf=Function.prototype,Jf=Object.prototype,Qf=Yf.toString,Xf=Jf.hasOwnProperty,Kf=RegExp("^"+Qf.call(Xf).replace(Wf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ed(t){if(!Hf(t)||Gf(t))return!1;var e=Bf(t)?Kf:zf;return e.test(Zf(t))}var td=ed;function nd(t,e){return t==null?void 0:t[e]}var rd=nd,ad=td,id=rd;function sd(t,e){var n=id(t,e);return ad(n)?n:void 0}var iu=sd,od=iu,ud=od(Object,"create"),Bn=ud,Kr=Bn;function ld(){this.__data__=Kr?Kr(null):{},this.size=0}var cd=ld;function fd(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var dd=fd,pd=Bn,hd="__lodash_hash_undefined__",md=Object.prototype,vd=md.hasOwnProperty;function gd(t){var e=this.__data__;if(pd){var n=e[t];return n===hd?void 0:n}return vd.call(e,t)?e[t]:void 0}var yd=gd,wd=Bn,_d=Object.prototype,bd=_d.hasOwnProperty;function kd(t){var e=this.__data__;return wd?e[t]!==void 0:bd.call(e,t)}var Td=kd,Ed=Bn,Sd="__lodash_hash_undefined__";function Cd(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ed&&e===void 0?Sd:e,this}var Dd=Cd,Nd=cd,Id=dd,Pd=yd,Od=Td,Ad=Dd;function kt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=Nd;kt.prototype.delete=Id;kt.prototype.get=Pd;kt.prototype.has=Od;kt.prototype.set=Ad;var Rd=kt;function $d(){this.__data__=[],this.size=0}var Md=$d;function Fd(t,e){return t===e||t!==t&&e!==e}var qd=Fd,xd=qd;function Ld(t,e){for(var n=t.length;n--;)if(xd(t[n][0],e))return n;return-1}var Gn=Ld,jd=Gn,Ud=Array.prototype,Vd=Ud.splice;function Bd(t){var e=this.__data__,n=jd(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Vd.call(e,n,1),--this.size,!0}var Gd=Bd,Hd=Gn;function Zd(t){var e=this.__data__,n=Hd(e,t);return n<0?void 0:e[n][1]}var Wd=Zd,zd=Gn;function Yd(t){return zd(this.__data__,t)>-1}var Jd=Yd,Qd=Gn;function Xd(t,e){var n=this.__data__,r=Qd(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var Kd=Xd,ep=Md,tp=Gd,np=Wd,rp=Jd,ap=Kd;function Tt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Tt.prototype.clear=ep;Tt.prototype.delete=tp;Tt.prototype.get=np;Tt.prototype.has=rp;Tt.prototype.set=ap;var ip=Tt,sp=iu,op=Dr,up=sp(op,"Map"),lp=up,ea=Rd,cp=ip,fp=lp;function dp(){this.size=0,this.__data__={hash:new ea,map:new(fp||cp),string:new ea}}var pp=dp;function hp(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var mp=hp,vp=mp;function gp(t,e){var n=t.__data__;return vp(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Hn=gp,yp=Hn;function wp(t){var e=yp(this,t).delete(t);return this.size-=e?1:0,e}var _p=wp,bp=Hn;function kp(t){return bp(this,t).get(t)}var Tp=kp,Ep=Hn;function Sp(t){return Ep(this,t).has(t)}var Cp=Sp,Dp=Hn;function Np(t,e){var n=Dp(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var Ip=Np,Pp=pp,Op=_p,Ap=Tp,Rp=Cp,$p=Ip;function Et(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Et.prototype.clear=Pp;Et.prototype.delete=Op;Et.prototype.get=Ap;Et.prototype.has=Rp;Et.prototype.set=$p;var Mp=Et,su=Mp,Fp="Expected a function";function Ir(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Fp);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Ir.Cache||su),n}Ir.Cache=su;var qp=Ir,xp=qp,Lp=500;function jp(t){var e=xp(t,function(r){return n.size===Lp&&n.clear(),r}),n=e.cache;return e}var Up=jp,Vp=Up,Bp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gp=/\\(\\)?/g;Vp(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Bp,function(n,r,a,i){e.push(a?i.replace(Gp,"$1"):r||n)}),e});var ta=Nr,na=ta?ta.prototype:void 0;na&&na.toString;var En=function(){function t(){en(this,t)}return Kt(t,null,[{key:"toUnix",value:function(n){return n instanceof Date?n.getTime():typeof n=="string"?new Date(n).getTime():n}},{key:"toISOString",value:function(n){return typeof n=="string"||typeof n=="number"?new Date(n).toISOString():n.toISOString()}},{key:"unix",value:function(){return Date.now()}},{key:"unixInSeconds",value:function(){return this.unix()/1e3}},{key:"hoursToMs",value:function(n){return this.minutesToMs(n*60)}},{key:"minutesToMs",value:function(n){return n*6*10*1e3}},{key:"secondsToMs",value:function(n){return n*1e3}}]),t}(),Hp=function(){function t(e){en(this,t),this.value=e}return Kt(t,[{key:"isSuccess",value:function(){return!0}},{key:"isFailure",value:function(){return!1}},{key:"unwrap",value:function(){return this.value}}]),t}(),Zp=function(){function t(e){en(this,t),this.error=e}return Kt(t,[{key:"isSuccess",value:function(){return!1}},{key:"isFailure",value:function(){return!0}},{key:"unwrap",value:function(){throw this.error}}]),t}();function cr(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return new Hp(t)}var Sn=function(e){return new Zp(e)};function ra(t){if(!(t instanceof Error))throw new nu("Invalid error type. Received ".concat(lr(t),", expected instance of Error"))}function ke(){ke=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(w,g,m){w[g]=m.value},a=typeof Symbol=="function"?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(w,g,m){return Object.defineProperty(w,g,{value:m,enumerable:!0,configurable:!0,writable:!0}),w[g]}try{u({},"")}catch{u=function(g,m,b){return g[m]=b}}function l(w,g,m,b){var _=g&&g.prototype instanceof p?g:p,R=Object.create(_.prototype),q=new we(b||[]);return r(R,"_invoke",{value:ye(w,m,q)}),R}function c(w,g,m){try{return{type:"normal",arg:w.call(g,m)}}catch(b){return{type:"throw",arg:b}}}t.wrap=l;var f={};function p(){}function h(){}function v(){}var T={};u(T,i,function(){return this});var P=Object.getPrototypeOf,I=P&&P(P(Ne([])));I&&I!==e&&n.call(I,i)&&(T=I);var L=v.prototype=p.prototype=Object.create(T);function k(w){["next","throw","return"].forEach(function(g){u(w,g,function(m){return this._invoke(g,m)})})}function J(w,g){function m(_,R,q,j){var X=c(w[_],w,R);if(X.type!=="throw"){var fe=X.arg,_e=fe.value;return _e&&typeof _e=="object"&&n.call(_e,"__await")?g.resolve(_e.__await).then(function(be){m("next",be,q,j)},function(be){m("throw",be,q,j)}):g.resolve(_e).then(function(be){fe.value=be,q(fe)},function(be){return m("throw",be,q,j)})}j(X.arg)}var b;r(this,"_invoke",{value:function(_,R){function q(){return new g(function(j,X){m(_,R,j,X)})}return b=b?b.then(q,q):q()}})}function ye(w,g,m){var b="suspendedStart";return function(_,R){if(b==="executing")throw new Error("Generator is already running");if(b==="completed"){if(_==="throw")throw R;return ee()}for(m.method=_,m.arg=R;;){var q=m.delegate;if(q){var j=se(q,m);if(j){if(j===f)continue;return j}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(b==="suspendedStart")throw b="completed",m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);b="executing";var X=c(w,g,m);if(X.type==="normal"){if(b=m.done?"completed":"suspendedYield",X.arg===f)continue;return{value:X.arg,done:m.done}}X.type==="throw"&&(b="completed",m.method="throw",m.arg=X.arg)}}}function se(w,g){var m=g.method,b=w.iterator[m];if(b===void 0)return g.delegate=null,m==="throw"&&w.iterator.return&&(g.method="return",g.arg=void 0,se(w,g),g.method==="throw")||m!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+m+"' method")),f;var _=c(b,w.iterator,g.arg);if(_.type==="throw")return g.method="throw",g.arg=_.arg,g.delegate=null,f;var R=_.arg;return R?R.done?(g[w.resultName]=R.value,g.next=w.nextLoc,g.method!=="return"&&(g.method="next",g.arg=void 0),g.delegate=null,f):R:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,f)}function Ie(w){var g={tryLoc:w[0]};1 in w&&(g.catchLoc=w[1]),2 in w&&(g.finallyLoc=w[2],g.afterLoc=w[3]),this.tryEntries.push(g)}function oe(w){var g=w.completion||{};g.type="normal",delete g.arg,w.completion=g}function we(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(Ie,this),this.reset(!0)}function Ne(w){if(w){var g=w[i];if(g)return g.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var m=-1,b=function _(){for(;++m<w.length;)if(n.call(w,m))return _.value=w[m],_.done=!1,_;return _.value=void 0,_.done=!0,_};return b.next=b}}return{next:ee}}function ee(){return{value:void 0,done:!0}}return h.prototype=v,r(L,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(w){var g=typeof w=="function"&&w.constructor;return!!g&&(g===h||(g.displayName||g.name)==="GeneratorFunction")},t.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,v):(w.__proto__=v,u(w,s,"GeneratorFunction")),w.prototype=Object.create(L),w},t.awrap=function(w){return{__await:w}},k(J.prototype),u(J.prototype,o,function(){return this}),t.AsyncIterator=J,t.async=function(w,g,m,b,_){_===void 0&&(_=Promise);var R=new J(l(w,g,m,b),_);return t.isGeneratorFunction(g)?R:R.next().then(function(q){return q.done?q.value:R.next()})},k(L),u(L,s,"Generator"),u(L,i,function(){return this}),u(L,"toString",function(){return"[object Generator]"}),t.keys=function(w){var g=Object(w),m=[];for(var b in g)m.push(b);return m.reverse(),function _(){for(;m.length;){var R=m.pop();if(R in g)return _.value=R,_.done=!1,_}return _.done=!0,_}},t.values=Ne,we.prototype={constructor:we,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(oe),!w)for(var g in this)g.charAt(0)==="t"&&n.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=void 0)},stop:function(){this.done=!0;var w=this.tryEntries[0].completion;if(w.type==="throw")throw w.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var g=this;function m(X,fe){return R.type="throw",R.arg=w,g.next=X,fe&&(g.method="next",g.arg=void 0),!!fe}for(var b=this.tryEntries.length-1;b>=0;--b){var _=this.tryEntries[b],R=_.completion;if(_.tryLoc==="root")return m("end");if(_.tryLoc<=this.prev){var q=n.call(_,"catchLoc"),j=n.call(_,"finallyLoc");if(q&&j){if(this.prev<_.catchLoc)return m(_.catchLoc,!0);if(this.prev<_.finallyLoc)return m(_.finallyLoc)}else if(q){if(this.prev<_.catchLoc)return m(_.catchLoc,!0)}else{if(!j)throw new Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return m(_.finallyLoc)}}}},abrupt:function(w,g){for(var m=this.tryEntries.length-1;m>=0;--m){var b=this.tryEntries[m];if(b.tryLoc<=this.prev&&n.call(b,"finallyLoc")&&this.prev<b.finallyLoc){var _=b;break}}_&&(w==="break"||w==="continue")&&_.tryLoc<=g&&g<=_.finallyLoc&&(_=null);var R=_?_.completion:{};return R.type=w,R.arg=g,_?(this.method="next",this.next=_.finallyLoc,f):this.complete(R)},complete:function(w,g){if(w.type==="throw")throw w.arg;return w.type==="break"||w.type==="continue"?this.next=w.arg:w.type==="return"?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):w.type==="normal"&&g&&(this.next=g),f},finish:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.finallyLoc===w)return this.complete(m.completion,m.afterLoc),oe(m),f}},catch:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.tryLoc===w){var b=m.completion;if(b.type==="throw"){var _=b.arg;oe(m)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(w,g,m){return this.delegate={iterator:Ne(w),resultName:g,nextLoc:m},this.method==="next"&&(this.arg=void 0),f}},t}function aa(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(l){n(l);return}s.done?e(u):Promise.resolve(u).then(r,a)}function tt(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(u){aa(i,r,a,o,s,"next",u)}function s(u){aa(i,r,a,o,s,"throw",u)}o(void 0)})}}var K;(function(t){t.assertEqual=a=>a;function e(a){}t.assertIs=e;function n(a){throw new Error}t.assertNever=n,t.arrayToEnum=a=>{const i={};for(const o of a)i[o]=o;return i},t.getValidEnumValues=a=>{const i=t.objectKeys(a).filter(s=>typeof a[a[s]]!="number"),o={};for(const s of i)o[s]=a[s];return t.objectValues(o)},t.objectValues=a=>t.objectKeys(a).map(function(i){return a[i]}),t.objectKeys=typeof Object.keys=="function"?a=>Object.keys(a):a=>{const i=[];for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&i.push(o);return i},t.find=(a,i)=>{for(const o of a)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?a=>Number.isInteger(a):a=>typeof a=="number"&&isFinite(a)&&Math.floor(a)===a;function r(a,i=" | "){return a.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(a,i)=>typeof i=="bigint"?i.toString():i})(K||(K={}));var fr;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(fr||(fr={}));const $=K.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ze=t=>{switch(typeof t){case"undefined":return $.undefined;case"string":return $.string;case"number":return isNaN(t)?$.nan:$.number;case"boolean":return $.boolean;case"function":return $.function;case"bigint":return $.bigint;case"symbol":return $.symbol;case"object":return Array.isArray(t)?$.array:t===null?$.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?$.promise:typeof Map<"u"&&t instanceof Map?$.map:typeof Set<"u"&&t instanceof Set?$.set:typeof Date<"u"&&t instanceof Date?$.date:$.object;default:return $.unknown}},O=K.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Wp=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class $e extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},a=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(a);else if(o.code==="invalid_return_type")a(o.returnTypeError);else if(o.code==="invalid_arguments")a(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let s=r,u=0;for(;u<o.path.length;){const l=o.path[u];u===o.path.length-1?(s[l]=s[l]||{_errors:[]},s[l]._errors.push(n(o))):s[l]=s[l]||{_errors:[]},s=s[l],u++}}};return a(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,K.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const a of this.issues)a.path.length>0?(n[a.path[0]]=n[a.path[0]]||[],n[a.path[0]].push(e(a))):r.push(e(a));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}$e.create=t=>new $e(t);const xt=(t,e)=>{let n;switch(t.code){case O.invalid_type:t.received===$.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case O.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,K.jsonStringifyReplacer)}`;break;case O.unrecognized_keys:n=`Unrecognized key(s) in object: ${K.joinValues(t.keys,", ")}`;break;case O.invalid_union:n="Invalid input";break;case O.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${K.joinValues(t.options)}`;break;case O.invalid_enum_value:n=`Invalid enum value. Expected ${K.joinValues(t.options)}, received '${t.received}'`;break;case O.invalid_arguments:n="Invalid function arguments";break;case O.invalid_return_type:n="Invalid function return type";break;case O.invalid_date:n="Invalid date";break;case O.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:K.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case O.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case O.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case O.custom:n="Invalid input";break;case O.invalid_intersection_types:n="Intersection results could not be merged";break;case O.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case O.not_finite:n="Number must be finite";break;default:n=e.defaultError,K.assertNever(t)}return{message:n}};let ou=xt;function zp(t){ou=t}function Cn(){return ou}const Dn=t=>{const{data:e,path:n,errorMaps:r,issueData:a}=t,i=[...n,...a.path||[]],o={...a,path:i};let s="";const u=r.filter(l=>!!l).slice().reverse();for(const l of u)s=l(o,{data:e,defaultError:s}).message;return{...a,path:i,message:a.message||s}},Yp=[];function M(t,e){const n=Dn({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Cn(),xt].filter(r=>!!r)});t.common.issues.push(n)}class ge{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const a of n){if(a.status==="aborted")return W;a.status==="dirty"&&e.dirty(),r.push(a.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const a of n)r.push({key:await a.key,value:await a.value});return ge.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const a of n){const{key:i,value:o}=a;if(i.status==="aborted"||o.status==="aborted")return W;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||a.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}}const W=Object.freeze({status:"aborted"}),uu=t=>({status:"dirty",value:t}),Te=t=>({status:"valid",value:t}),dr=t=>t.status==="aborted",pr=t=>t.status==="dirty",Nn=t=>t.status==="valid",In=t=>typeof Promise<"u"&&t instanceof Promise;var U;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(U||(U={}));class je{constructor(e,n,r,a){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=a}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const ia=(t,e)=>{if(Nn(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new $e(t.common.issues);return this._error=n,this._error}}};function z(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:a}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:a}:{errorMap:(o,s)=>o.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:r??s.defaultError}:{message:n??s.defaultError},description:a}}class Y{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ze(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Ze(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ge,ctx:{common:e.parent.common,data:e.data,parsedType:Ze(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(In(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const a={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ze(e)},i=this._parseSync({data:e,path:a.path,parent:a});return ia(a,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ze(e)},a=this._parse({data:e,path:r.path,parent:r}),i=await(In(a)?a:Promise.resolve(a));return ia(r,i)}refine(e,n){const r=a=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(a):n;return this._refinement((a,i)=>{const o=e(a),s=()=>i.addIssue({code:O.custom,...r(a)});return typeof Promise<"u"&&o instanceof Promise?o.then(u=>u?!0:(s(),!1)):o?!0:(s(),!1)})}refinement(e,n){return this._refinement((r,a)=>e(r)?!0:(a.addIssue(typeof n=="function"?n(r,a):n),!1))}_refinement(e){return new Fe({schema:this,typeName:G.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Be.create(this,this._def)}nullable(){return st.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Me.create(this,this._def)}promise(){return _t.create(this,this._def)}or(e){return Vt.create([this,e],this._def)}and(e){return Bt.create(this,e,this._def)}transform(e){return new Fe({...z(this._def),schema:this,typeName:G.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new zt({...z(this._def),innerType:this,defaultValue:n,typeName:G.ZodDefault})}brand(){return new cu({typeName:G.ZodBranded,type:this,...z(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Rn({...z(this._def),innerType:this,catchValue:n,typeName:G.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return tn.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Jp=/^c[^\s-]{8,}$/i,Qp=/^[a-z][a-z0-9]*$/,Xp=/[0-9A-HJKMNP-TV-Z]{26}/,Kp=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,eh=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,th=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,nh=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,rh=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,ah=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function ih(t,e){return!!((e==="v4"||!e)&&nh.test(t)||(e==="v6"||!e)&&rh.test(t))}class Ae extends Y{constructor(){super(...arguments),this._regex=(e,n,r)=>this.refinement(a=>e.test(a),{validation:n,code:O.invalid_string,...U.errToObj(r)}),this.nonempty=e=>this.min(1,U.errToObj(e)),this.trim=()=>new Ae({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Ae({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Ae({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==$.string){const i=this._getOrReturnCtx(e);return M(i,{code:O.invalid_type,expected:$.string,received:i.parsedType}),W}const r=new ge;let a;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:O.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:O.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,s=e.data.length<i.value;(o||s)&&(a=this._getOrReturnCtx(e,a),o?M(a,{code:O.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):s&&M(a,{code:O.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")eh.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"email",code:O.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")th.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"emoji",code:O.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Kp.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"uuid",code:O.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Jp.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"cuid",code:O.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")Qp.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"cuid2",code:O.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")Xp.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"ulid",code:O.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{a=this._getOrReturnCtx(e,a),M(a,{validation:"url",code:O.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"regex",code:O.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(a=this._getOrReturnCtx(e,a),M(a,{code:O.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(a=this._getOrReturnCtx(e,a),M(a,{code:O.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(a=this._getOrReturnCtx(e,a),M(a,{code:O.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?ah(i).test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{code:O.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?ih(e.data,i.version)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"ip",code:O.invalid_string,message:i.message}),r.dirty()):K.assertNever(i);return{status:r.value,value:e.data}}_addCheck(e){return new Ae({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...U.errToObj(e)})}url(e){return this._addCheck({kind:"url",...U.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...U.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...U.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...U.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...U.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...U.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...U.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...U.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...U.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...U.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...U.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...U.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...U.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...U.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...U.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Ae.create=t=>{var e;return new Ae({checks:[],typeName:G.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...z(t)})};function sh(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,a=n>r?n:r,i=parseInt(t.toFixed(a).replace(".","")),o=parseInt(e.toFixed(a).replace(".",""));return i%o/Math.pow(10,a)}class Je extends Y{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==$.number){const i=this._getOrReturnCtx(e);return M(i,{code:O.invalid_type,expected:$.number,received:i.parsedType}),W}let r;const a=new ge;for(const i of this._def.checks)i.kind==="int"?K.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:O.invalid_type,expected:"integer",received:"float",message:i.message}),a.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:O.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),a.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:O.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),a.dirty()):i.kind==="multipleOf"?sh(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),M(r,{code:O.not_multiple_of,multipleOf:i.value,message:i.message}),a.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:O.not_finite,message:i.message}),a.dirty()):K.assertNever(i);return{status:a.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,U.toString(n))}gt(e,n){return this.setLimit("min",e,!1,U.toString(n))}lte(e,n){return this.setLimit("max",e,!0,U.toString(n))}lt(e,n){return this.setLimit("max",e,!1,U.toString(n))}setLimit(e,n,r,a){return new Je({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:U.toString(a)}]})}_addCheck(e){return new Je({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:U.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:U.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:U.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:U.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:U.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:U.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:U.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:U.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:U.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&K.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Je.create=t=>new Je({checks:[],typeName:G.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...z(t)});class Qe extends Y{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==$.bigint){const i=this._getOrReturnCtx(e);return M(i,{code:O.invalid_type,expected:$.bigint,received:i.parsedType}),W}let r;const a=new ge;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:O.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),a.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:O.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),a.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),M(r,{code:O.not_multiple_of,multipleOf:i.value,message:i.message}),a.dirty()):K.assertNever(i);return{status:a.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,U.toString(n))}gt(e,n){return this.setLimit("min",e,!1,U.toString(n))}lte(e,n){return this.setLimit("max",e,!0,U.toString(n))}lt(e,n){return this.setLimit("max",e,!1,U.toString(n))}setLimit(e,n,r,a){return new Qe({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:U.toString(a)}]})}_addCheck(e){return new Qe({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:U.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:U.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:U.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:U.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:U.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Qe.create=t=>{var e;return new Qe({checks:[],typeName:G.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...z(t)})};class Lt extends Y{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==$.boolean){const r=this._getOrReturnCtx(e);return M(r,{code:O.invalid_type,expected:$.boolean,received:r.parsedType}),W}return Te(e.data)}}Lt.create=t=>new Lt({typeName:G.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...z(t)});class at extends Y{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==$.date){const i=this._getOrReturnCtx(e);return M(i,{code:O.invalid_type,expected:$.date,received:i.parsedType}),W}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return M(i,{code:O.invalid_date}),W}const r=new ge;let a;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:O.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:O.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):K.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new at({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:U.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:U.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}at.create=t=>new at({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:G.ZodDate,...z(t)});class Pn extends Y{_parse(e){if(this._getType(e)!==$.symbol){const r=this._getOrReturnCtx(e);return M(r,{code:O.invalid_type,expected:$.symbol,received:r.parsedType}),W}return Te(e.data)}}Pn.create=t=>new Pn({typeName:G.ZodSymbol,...z(t)});class jt extends Y{_parse(e){if(this._getType(e)!==$.undefined){const r=this._getOrReturnCtx(e);return M(r,{code:O.invalid_type,expected:$.undefined,received:r.parsedType}),W}return Te(e.data)}}jt.create=t=>new jt({typeName:G.ZodUndefined,...z(t)});class Ut extends Y{_parse(e){if(this._getType(e)!==$.null){const r=this._getOrReturnCtx(e);return M(r,{code:O.invalid_type,expected:$.null,received:r.parsedType}),W}return Te(e.data)}}Ut.create=t=>new Ut({typeName:G.ZodNull,...z(t)});class wt extends Y{constructor(){super(...arguments),this._any=!0}_parse(e){return Te(e.data)}}wt.create=t=>new wt({typeName:G.ZodAny,...z(t)});class nt extends Y{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Te(e.data)}}nt.create=t=>new nt({typeName:G.ZodUnknown,...z(t)});class Ge extends Y{_parse(e){const n=this._getOrReturnCtx(e);return M(n,{code:O.invalid_type,expected:$.never,received:n.parsedType}),W}}Ge.create=t=>new Ge({typeName:G.ZodNever,...z(t)});class On extends Y{_parse(e){if(this._getType(e)!==$.undefined){const r=this._getOrReturnCtx(e);return M(r,{code:O.invalid_type,expected:$.void,received:r.parsedType}),W}return Te(e.data)}}On.create=t=>new On({typeName:G.ZodVoid,...z(t)});class Me extends Y{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),a=this._def;if(n.parsedType!==$.array)return M(n,{code:O.invalid_type,expected:$.array,received:n.parsedType}),W;if(a.exactLength!==null){const o=n.data.length>a.exactLength.value,s=n.data.length<a.exactLength.value;(o||s)&&(M(n,{code:o?O.too_big:O.too_small,minimum:s?a.exactLength.value:void 0,maximum:o?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),r.dirty())}if(a.minLength!==null&&n.data.length<a.minLength.value&&(M(n,{code:O.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),r.dirty()),a.maxLength!==null&&n.data.length>a.maxLength.value&&(M(n,{code:O.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,s)=>a.type._parseAsync(new je(n,o,n.path,s)))).then(o=>ge.mergeArray(r,o));const i=[...n.data].map((o,s)=>a.type._parseSync(new je(n,o,n.path,s)));return ge.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new Me({...this._def,minLength:{value:e,message:U.toString(n)}})}max(e,n){return new Me({...this._def,maxLength:{value:e,message:U.toString(n)}})}length(e,n){return new Me({...this._def,exactLength:{value:e,message:U.toString(n)}})}nonempty(e){return this.min(1,e)}}Me.create=(t,e)=>new Me({type:t,minLength:null,maxLength:null,exactLength:null,typeName:G.ZodArray,...z(e)});function dt(t){if(t instanceof ie){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=Be.create(dt(r))}return new ie({...t._def,shape:()=>e})}else return t instanceof Me?new Me({...t._def,type:dt(t.element)}):t instanceof Be?Be.create(dt(t.unwrap())):t instanceof st?st.create(dt(t.unwrap())):t instanceof Ue?Ue.create(t.items.map(e=>dt(e))):t}class ie extends Y{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=K.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==$.object){const l=this._getOrReturnCtx(e);return M(l,{code:O.invalid_type,expected:$.object,received:l.parsedType}),W}const{status:r,ctx:a}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),s=[];if(!(this._def.catchall instanceof Ge&&this._def.unknownKeys==="strip"))for(const l in a.data)o.includes(l)||s.push(l);const u=[];for(const l of o){const c=i[l],f=a.data[l];u.push({key:{status:"valid",value:l},value:c._parse(new je(a,f,a.path,l)),alwaysSet:l in a.data})}if(this._def.catchall instanceof Ge){const l=this._def.unknownKeys;if(l==="passthrough")for(const c of s)u.push({key:{status:"valid",value:c},value:{status:"valid",value:a.data[c]}});else if(l==="strict")s.length>0&&(M(a,{code:O.unrecognized_keys,keys:s}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const c of s){const f=a.data[c];u.push({key:{status:"valid",value:c},value:l._parse(new je(a,f,a.path,c)),alwaysSet:c in a.data})}}return a.common.async?Promise.resolve().then(async()=>{const l=[];for(const c of u){const f=await c.key;l.push({key:f,value:await c.value,alwaysSet:c.alwaysSet})}return l}).then(l=>ge.mergeObjectSync(r,l)):ge.mergeObjectSync(r,u)}get shape(){return this._def.shape()}strict(e){return U.errToObj,new ie({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var a,i,o,s;const u=(o=(i=(a=this._def).errorMap)===null||i===void 0?void 0:i.call(a,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(s=U.errToObj(e).message)!==null&&s!==void 0?s:u}:{message:u}}}:{}})}strip(){return new ie({...this._def,unknownKeys:"strip"})}passthrough(){return new ie({...this._def,unknownKeys:"passthrough"})}extend(e){return new ie({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ie({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:G.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ie({...this._def,catchall:e})}pick(e){const n={};return K.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new ie({...this._def,shape:()=>n})}omit(e){const n={};return K.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new ie({...this._def,shape:()=>n})}deepPartial(){return dt(this)}partial(e){const n={};return K.objectKeys(this.shape).forEach(r=>{const a=this.shape[r];e&&!e[r]?n[r]=a:n[r]=a.optional()}),new ie({...this._def,shape:()=>n})}required(e){const n={};return K.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Be;)i=i._def.innerType;n[r]=i}}),new ie({...this._def,shape:()=>n})}keyof(){return lu(K.objectKeys(this.shape))}}ie.create=(t,e)=>new ie({shape:()=>t,unknownKeys:"strip",catchall:Ge.create(),typeName:G.ZodObject,...z(e)});ie.strictCreate=(t,e)=>new ie({shape:()=>t,unknownKeys:"strict",catchall:Ge.create(),typeName:G.ZodObject,...z(e)});ie.lazycreate=(t,e)=>new ie({shape:t,unknownKeys:"strip",catchall:Ge.create(),typeName:G.ZodObject,...z(e)});class Vt extends Y{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function a(i){for(const s of i)if(s.result.status==="valid")return s.result;for(const s of i)if(s.result.status==="dirty")return n.common.issues.push(...s.ctx.common.issues),s.result;const o=i.map(s=>new $e(s.ctx.common.issues));return M(n,{code:O.invalid_union,unionErrors:o}),W}if(n.common.async)return Promise.all(r.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(a);{let i;const o=[];for(const u of r){const l={...n,common:{...n.common,issues:[]},parent:null},c=u._parseSync({data:n.data,path:n.path,parent:l});if(c.status==="valid")return c;c.status==="dirty"&&!i&&(i={result:c,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const s=o.map(u=>new $e(u));return M(n,{code:O.invalid_union,unionErrors:s}),W}}get options(){return this._def.options}}Vt.create=(t,e)=>new Vt({options:t,typeName:G.ZodUnion,...z(e)});const mn=t=>t instanceof Ht?mn(t.schema):t instanceof Fe?mn(t.innerType()):t instanceof Zt?[t.value]:t instanceof Xe?t.options:t instanceof Wt?Object.keys(t.enum):t instanceof zt?mn(t._def.innerType):t instanceof jt?[void 0]:t instanceof Ut?[null]:null;class Zn extends Y{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.object)return M(n,{code:O.invalid_type,expected:$.object,received:n.parsedType}),W;const r=this.discriminator,a=n.data[r],i=this.optionsMap.get(a);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(M(n,{code:O.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),W)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const a=new Map;for(const i of n){const o=mn(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const s of o){if(a.has(s))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);a.set(s,i)}}return new Zn({typeName:G.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:a,...z(r)})}}function hr(t,e){const n=Ze(t),r=Ze(e);if(t===e)return{valid:!0,data:t};if(n===$.object&&r===$.object){const a=K.objectKeys(e),i=K.objectKeys(t).filter(s=>a.indexOf(s)!==-1),o={...t,...e};for(const s of i){const u=hr(t[s],e[s]);if(!u.valid)return{valid:!1};o[s]=u.data}return{valid:!0,data:o}}else if(n===$.array&&r===$.array){if(t.length!==e.length)return{valid:!1};const a=[];for(let i=0;i<t.length;i++){const o=t[i],s=e[i],u=hr(o,s);if(!u.valid)return{valid:!1};a.push(u.data)}return{valid:!0,data:a}}else return n===$.date&&r===$.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Bt extends Y{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),a=(i,o)=>{if(dr(i)||dr(o))return W;const s=hr(i.value,o.value);return s.valid?((pr(i)||pr(o))&&n.dirty(),{status:n.value,value:s.data}):(M(r,{code:O.invalid_intersection_types}),W)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>a(i,o)):a(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Bt.create=(t,e,n)=>new Bt({left:t,right:e,typeName:G.ZodIntersection,...z(n)});class Ue extends Y{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.array)return M(r,{code:O.invalid_type,expected:$.array,received:r.parsedType}),W;if(r.data.length<this._def.items.length)return M(r,{code:O.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),W;!this._def.rest&&r.data.length>this._def.items.length&&(M(r,{code:O.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((o,s)=>{const u=this._def.items[s]||this._def.rest;return u?u._parse(new je(r,o,r.path,s)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>ge.mergeArray(n,o)):ge.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new Ue({...this._def,rest:e})}}Ue.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ue({items:t,typeName:G.ZodTuple,rest:null,...z(e)})};class Gt extends Y{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.object)return M(r,{code:O.invalid_type,expected:$.object,received:r.parsedType}),W;const a=[],i=this._def.keyType,o=this._def.valueType;for(const s in r.data)a.push({key:i._parse(new je(r,s,r.path,s)),value:o._parse(new je(r,r.data[s],r.path,s))});return r.common.async?ge.mergeObjectAsync(n,a):ge.mergeObjectSync(n,a)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof Y?new Gt({keyType:e,valueType:n,typeName:G.ZodRecord,...z(r)}):new Gt({keyType:Ae.create(),valueType:e,typeName:G.ZodRecord,...z(n)})}}class An extends Y{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.map)return M(r,{code:O.invalid_type,expected:$.map,received:r.parsedType}),W;const a=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([s,u],l)=>({key:a._parse(new je(r,s,r.path,[l,"key"])),value:i._parse(new je(r,u,r.path,[l,"value"]))}));if(r.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const u of o){const l=await u.key,c=await u.value;if(l.status==="aborted"||c.status==="aborted")return W;(l.status==="dirty"||c.status==="dirty")&&n.dirty(),s.set(l.value,c.value)}return{status:n.value,value:s}})}else{const s=new Map;for(const u of o){const l=u.key,c=u.value;if(l.status==="aborted"||c.status==="aborted")return W;(l.status==="dirty"||c.status==="dirty")&&n.dirty(),s.set(l.value,c.value)}return{status:n.value,value:s}}}}An.create=(t,e,n)=>new An({valueType:e,keyType:t,typeName:G.ZodMap,...z(n)});class it extends Y{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.set)return M(r,{code:O.invalid_type,expected:$.set,received:r.parsedType}),W;const a=this._def;a.minSize!==null&&r.data.size<a.minSize.value&&(M(r,{code:O.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),n.dirty()),a.maxSize!==null&&r.data.size>a.maxSize.value&&(M(r,{code:O.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),n.dirty());const i=this._def.valueType;function o(u){const l=new Set;for(const c of u){if(c.status==="aborted")return W;c.status==="dirty"&&n.dirty(),l.add(c.value)}return{status:n.value,value:l}}const s=[...r.data.values()].map((u,l)=>i._parse(new je(r,u,r.path,l)));return r.common.async?Promise.all(s).then(u=>o(u)):o(s)}min(e,n){return new it({...this._def,minSize:{value:e,message:U.toString(n)}})}max(e,n){return new it({...this._def,maxSize:{value:e,message:U.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}it.create=(t,e)=>new it({valueType:t,minSize:null,maxSize:null,typeName:G.ZodSet,...z(e)});class mt extends Y{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.function)return M(n,{code:O.invalid_type,expected:$.function,received:n.parsedType}),W;function r(s,u){return Dn({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Cn(),xt].filter(l=>!!l),issueData:{code:O.invalid_arguments,argumentsError:u}})}function a(s,u){return Dn({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Cn(),xt].filter(l=>!!l),issueData:{code:O.invalid_return_type,returnTypeError:u}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof _t?Te(async(...s)=>{const u=new $e([]),l=await this._def.args.parseAsync(s,i).catch(p=>{throw u.addIssue(r(s,p)),u}),c=await o(...l);return await this._def.returns._def.type.parseAsync(c,i).catch(p=>{throw u.addIssue(a(c,p)),u})}):Te((...s)=>{const u=this._def.args.safeParse(s,i);if(!u.success)throw new $e([r(s,u.error)]);const l=o(...u.data),c=this._def.returns.safeParse(l,i);if(!c.success)throw new $e([a(l,c.error)]);return c.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new mt({...this._def,args:Ue.create(e).rest(nt.create())})}returns(e){return new mt({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new mt({args:e||Ue.create([]).rest(nt.create()),returns:n||nt.create(),typeName:G.ZodFunction,...z(r)})}}class Ht extends Y{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Ht.create=(t,e)=>new Ht({getter:t,typeName:G.ZodLazy,...z(e)});class Zt extends Y{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return M(n,{received:n.data,code:O.invalid_literal,expected:this._def.value}),W}return{status:"valid",value:e.data}}get value(){return this._def.value}}Zt.create=(t,e)=>new Zt({value:t,typeName:G.ZodLiteral,...z(e)});function lu(t,e){return new Xe({values:t,typeName:G.ZodEnum,...z(e)})}class Xe extends Y{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return M(n,{expected:K.joinValues(r),received:n.parsedType,code:O.invalid_type}),W}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return M(n,{received:n.data,code:O.invalid_enum_value,options:r}),W}return Te(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Xe.create(e)}exclude(e){return Xe.create(this.options.filter(n=>!e.includes(n)))}}Xe.create=lu;class Wt extends Y{_parse(e){const n=K.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==$.string&&r.parsedType!==$.number){const a=K.objectValues(n);return M(r,{expected:K.joinValues(a),received:r.parsedType,code:O.invalid_type}),W}if(n.indexOf(e.data)===-1){const a=K.objectValues(n);return M(r,{received:r.data,code:O.invalid_enum_value,options:a}),W}return Te(e.data)}get enum(){return this._def.values}}Wt.create=(t,e)=>new Wt({values:t,typeName:G.ZodNativeEnum,...z(e)});class _t extends Y{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.promise&&n.common.async===!1)return M(n,{code:O.invalid_type,expected:$.promise,received:n.parsedType}),W;const r=n.parsedType===$.promise?n.data:Promise.resolve(n.data);return Te(r.then(a=>this._def.type.parseAsync(a,{path:n.path,errorMap:n.common.contextualErrorMap})))}}_t.create=(t,e)=>new _t({type:t,typeName:G.ZodPromise,...z(e)});class Fe extends Y{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===G.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),a=this._def.effect||null;if(a.type==="preprocess"){const o=a.transform(r.data);return r.common.async?Promise.resolve(o).then(s=>this._def.schema._parseAsync({data:s,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}const i={addIssue:o=>{M(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),a.type==="refinement"){const o=s=>{const u=a.refinement(s,i);if(r.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?W:(s.status==="dirty"&&n.dirty(),o(s.value),{status:n.value,value:s.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>s.status==="aborted"?W:(s.status==="dirty"&&n.dirty(),o(s.value).then(()=>({status:n.value,value:s.value}))))}if(a.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Nn(o))return o;const s=a.transform(o.value,i);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:s}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Nn(o)?Promise.resolve(a.transform(o.value,i)).then(s=>({status:n.value,value:s})):o);K.assertNever(a)}}Fe.create=(t,e,n)=>new Fe({schema:t,typeName:G.ZodEffects,effect:e,...z(n)});Fe.createWithPreprocess=(t,e,n)=>new Fe({schema:e,effect:{type:"preprocess",transform:t},typeName:G.ZodEffects,...z(n)});class Be extends Y{_parse(e){return this._getType(e)===$.undefined?Te(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Be.create=(t,e)=>new Be({innerType:t,typeName:G.ZodOptional,...z(e)});class st extends Y{_parse(e){return this._getType(e)===$.null?Te(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}st.create=(t,e)=>new st({innerType:t,typeName:G.ZodNullable,...z(e)});class zt extends Y{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===$.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}zt.create=(t,e)=>new zt({innerType:t,typeName:G.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...z(e)});class Rn extends Y{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},a=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return In(a)?a.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new $e(r.common.issues)},input:r.data})})):{status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new $e(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Rn.create=(t,e)=>new Rn({innerType:t,typeName:G.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...z(e)});class $n extends Y{_parse(e){if(this._getType(e)!==$.nan){const r=this._getOrReturnCtx(e);return M(r,{code:O.invalid_type,expected:$.nan,received:r.parsedType}),W}return{status:"valid",value:e.data}}}$n.create=t=>new $n({typeName:G.ZodNaN,...z(t)});const oh=Symbol("zod_brand");class cu extends Y{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class tn extends Y{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?W:i.status==="dirty"?(n.dirty(),uu(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const a=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?W:a.status==="dirty"?(n.dirty(),{status:"dirty",value:a.value}):this._def.out._parseSync({data:a.value,path:r.path,parent:r})}}static create(e,n){return new tn({in:e,out:n,typeName:G.ZodPipeline})}}const fu=(t,e={},n)=>t?wt.create().superRefine((r,a)=>{var i,o;if(!t(r)){const s=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,u=(o=(i=s.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,l=typeof s=="string"?{message:s}:s;a.addIssue({code:"custom",...l,fatal:u})}}):wt.create(),uh={object:ie.lazycreate};var G;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(G||(G={}));const lh=(t,e={message:`Input not instance of ${t.name}`})=>fu(n=>n instanceof t,e),du=Ae.create,pu=Je.create,ch=$n.create,fh=Qe.create,hu=Lt.create,dh=at.create,ph=Pn.create,hh=jt.create,mh=Ut.create,vh=wt.create,gh=nt.create,yh=Ge.create,wh=On.create,_h=Me.create,bh=ie.create,kh=ie.strictCreate,Th=Vt.create,Eh=Zn.create,Sh=Bt.create,Ch=Ue.create,Dh=Gt.create,Nh=An.create,Ih=it.create,Ph=mt.create,Oh=Ht.create,Ah=Zt.create,Rh=Xe.create,$h=Wt.create,Mh=_t.create,sa=Fe.create,Fh=Be.create,qh=st.create,xh=Fe.createWithPreprocess,Lh=tn.create,jh=()=>du().optional(),Uh=()=>pu().optional(),Vh=()=>hu().optional(),Bh={string:t=>Ae.create({...t,coerce:!0}),number:t=>Je.create({...t,coerce:!0}),boolean:t=>Lt.create({...t,coerce:!0}),bigint:t=>Qe.create({...t,coerce:!0}),date:t=>at.create({...t,coerce:!0})},Gh=W;var ze=Object.freeze({__proto__:null,defaultErrorMap:xt,setErrorMap:zp,getErrorMap:Cn,makeIssue:Dn,EMPTY_PATH:Yp,addIssueToContext:M,ParseStatus:ge,INVALID:W,DIRTY:uu,OK:Te,isAborted:dr,isDirty:pr,isValid:Nn,isAsync:In,get util(){return K},get objectUtil(){return fr},ZodParsedType:$,getParsedType:Ze,ZodType:Y,ZodString:Ae,ZodNumber:Je,ZodBigInt:Qe,ZodBoolean:Lt,ZodDate:at,ZodSymbol:Pn,ZodUndefined:jt,ZodNull:Ut,ZodAny:wt,ZodUnknown:nt,ZodNever:Ge,ZodVoid:On,ZodArray:Me,ZodObject:ie,ZodUnion:Vt,ZodDiscriminatedUnion:Zn,ZodIntersection:Bt,ZodTuple:Ue,ZodRecord:Gt,ZodMap:An,ZodSet:it,ZodFunction:mt,ZodLazy:Ht,ZodLiteral:Zt,ZodEnum:Xe,ZodNativeEnum:Wt,ZodPromise:_t,ZodEffects:Fe,ZodTransformer:Fe,ZodOptional:Be,ZodNullable:st,ZodDefault:zt,ZodCatch:Rn,ZodNaN:$n,BRAND:oh,ZodBranded:cu,ZodPipeline:tn,custom:fu,Schema:Y,ZodSchema:Y,late:uh,get ZodFirstPartyTypeKind(){return G},coerce:Bh,any:vh,array:_h,bigint:fh,boolean:hu,date:dh,discriminatedUnion:Eh,effect:sa,enum:Rh,function:Ph,instanceof:lh,intersection:Sh,lazy:Oh,literal:Ah,map:Nh,nan:ch,nativeEnum:$h,never:yh,null:mh,nullable:qh,number:pu,object:bh,oboolean:Vh,onumber:Uh,optional:Fh,ostring:jh,pipeline:Lh,preprocess:xh,promise:Mh,record:Dh,set:Ih,strictObject:kh,string:du,symbol:ph,transformer:sa,tuple:Ch,undefined:hh,union:Th,unknown:gh,void:wh,NEVER:Gh,ZodIssueCode:O,quotelessJson:Wp,ZodError:$e});function Hh(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function mu(t){var e=Hh(t,"string");return typeof e=="symbol"?e:String(e)}function oa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,mu(r.key),r)}}function nn(t,e,n){return e&&oa(t.prototype,e),n&&oa(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Yt(t,e){return Yt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yt(t,e)}function vu(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Yt(t,e)}function Jt(t){return Jt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Jt(t)}function gu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zh(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pr(t)}function yu(t){var e=gu();return function(){var r=Jt(t),a;if(e){var i=Jt(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Zh(this,a)}}function Wh(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function vn(t,e,n){return gu()?vn=Reflect.construct.bind():vn=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),l=new u;return o&&Yt(l,o.prototype),l},vn.apply(null,arguments)}function Mn(t){var e=typeof Map=="function"?new Map:void 0;return Mn=function(r){if(r===null||!Wh(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,a)}function a(){return vn(r,arguments,Jt(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Yt(a,r)},Mn(t)}function Or(t,e,n){return e=mu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ua=function(t){vu(n,t);var e=yu(n);function n(r,a){var i;return rn(this,n),i=e.call(this,"Schema mismatch for ".concat(r," with errors: ").concat(a)),Or(Pr(i),"name","SchemaMismatchError"),i}return nn(n)}(Mn(Error)),zh=function(t){vu(n,t);var e=yu(n);function n(r,a,i){var o;return rn(this,n),o=e.call(this,"No migration path for schema ".concat(r," from version ").concat(a," to ").concat(i)),Or(Pr(o),"name","NoMigrationPathError"),o}return nn(n)}(Mn(Error)),Yh=ze.object({version:ze.number().int().positive(),createdAt:ze.number().int().positive(),updatedAt:ze.number().int().positive()}).strict(),Jh=function(){function t(e,n){rn(this,t),Or(this,"version",1),this.key=e,this.schema=n}return nn(t,[{key:"process",value:function(){var e=tt(ke().mark(function r(a){var i,o;return ke().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=this.parseStorageItem(a),o=this.migrate(i),u.abrupt("return",Promise.resolve({data:o,metadata:i.metadata}));case 3:case"end":return u.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"migrate",value:function(n){var r=n.metadata.version;if(this.version!==r)throw new zh(this.key,r,this.version);return this.parseData(n.data)}},{key:"parseStorageItem",value:function(n){try{return ze.object({data:ze.unknown(),metadata:Yh}).strict().parse(n)}catch(r){throw ra(r),new ua(this.key,r.message)}}},{key:"parseData",value:function(n){try{var r=this.schema.parse(n);return r}catch(a){throw ra(a),new ua(this.key,a.message)}}}]),t}(),Qh=function(){function t(e,n){rn(this,t),this.schema=e,this.provider=n}return nn(t,[{key:"get",value:function(){var e=tt(ke().mark(function r(){var a,i;return ke().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.getWithMetadata();case 2:return i=s.sent,s.abrupt("return",(a=i==null?void 0:i.data)!==null&&a!==void 0?a:null);case 4:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"reset",value:function(){var e=tt(ke().mark(function r(){return ke().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.provider.removeItem(this.getStorageKey());case 2:case"end":return i.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"set",value:function(){var e=tt(ke().mark(function r(a){var i,o,s,u,l;return ke().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,this.getWithMetadata();case 2:return o=f.sent,s={createdAt:(i=o==null?void 0:o.metadata.createdAt)!==null&&i!==void 0?i:Date.now(),updatedAt:Date.now(),version:this.schema.version},u={data:a,metadata:s},l=JSON.stringify(u),f.next=8,this.provider.setItem(this.getStorageKey(),l);case 8:case"end":return f.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"subscribe",value:function(n){var r=this;return"subscribe"in this.provider?this.provider.subscribe(this.getStorageKey(),function(){var a=tt(ke().mark(function i(o,s){var u,l;return ke().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!o){f.next=6;break}return f.next=3,r.parse(o);case 3:f.t0=f.sent,f.next=7;break;case 6:f.t0={data:null};case 7:if(u=f.t0,!s){f.next=14;break}return f.next=11,r.parse(s);case 11:f.t1=f.sent,f.next=15;break;case 14:f.t1={data:null};case 15:l=f.t1,n(u.data,l.data);case 17:case"end":return f.stop()}},i)}));return function(i,o){return a.apply(this,arguments)}}()):{unsubscribe:function(){}}}},{key:"getWithMetadata",value:function(){var e=tt(ke().mark(function r(){var a;return ke().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.provider.getItem(this.getStorageKey());case 2:if(a=o.sent,a!==null){o.next=5;break}return o.abrupt("return",null);case 5:return o.abrupt("return",this.parse(a));case 6:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"parse",value:function(){var e=tt(ke().mark(function r(a){var i;return ke().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=JSON.parse(a),s.abrupt("return",this.schema.process(i));case 2:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"getStorageKey",value:function(){return this.schema.key}}],[{key:"createForSchema",value:function(n,r){return new t(n,r)}}]),t}(),Xh=function(){function t(){rn(this,t),this.store=new Map}return nn(t,[{key:"getItem",value:function(n){var r;return(r=this.store.get(n))!==null&&r!==void 0?r:null}},{key:"setItem",value:function(n,r){this.store.set(n,r)}},{key:"removeItem",value:function(n){this.store.delete(n)}}]),t}();function mr(t){this.message=t}mr.prototype=new Error,mr.prototype.name="InvalidCharacterError";var la=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new mr("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,i=0,o="";r=e.charAt(i++);~r&&(n=a%4?64*n+r:r,a++%4)?o+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return o};function Kh(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(n){return decodeURIComponent(la(n).replace(/(.)/g,function(r,a){var i=a.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(e)}catch{return la(e)}}function Fn(t){this.message=t}function ca(t,e){if(typeof t!="string")throw new Fn("Invalid token specified");var n=(e=e||{}).header===!0?0:1;try{return JSON.parse(Kh(t.split(".")[n]))}catch(r){throw new Fn("Invalid token specified: "+r.message)}}Fn.prototype=new Error,Fn.prototype.name="InvalidTokenError";function re(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function em(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wu(t){var e=em(t,"string");return typeof e=="symbol"?e:String(e)}function fa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,wu(r.key),r)}}function ae(t,e,n){return e&&fa(t.prototype,e),n&&fa(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(){d=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(w,g,m){w[g]=m.value},a=typeof Symbol=="function"?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(w,g,m){return Object.defineProperty(w,g,{value:m,enumerable:!0,configurable:!0,writable:!0}),w[g]}try{u({},"")}catch{u=function(g,m,b){return g[m]=b}}function l(w,g,m,b){var _=g&&g.prototype instanceof p?g:p,R=Object.create(_.prototype),q=new we(b||[]);return r(R,"_invoke",{value:ye(w,m,q)}),R}function c(w,g,m){try{return{type:"normal",arg:w.call(g,m)}}catch(b){return{type:"throw",arg:b}}}t.wrap=l;var f={};function p(){}function h(){}function v(){}var T={};u(T,i,function(){return this});var P=Object.getPrototypeOf,I=P&&P(P(Ne([])));I&&I!==e&&n.call(I,i)&&(T=I);var L=v.prototype=p.prototype=Object.create(T);function k(w){["next","throw","return"].forEach(function(g){u(w,g,function(m){return this._invoke(g,m)})})}function J(w,g){function m(_,R,q,j){var X=c(w[_],w,R);if(X.type!=="throw"){var fe=X.arg,_e=fe.value;return _e&&typeof _e=="object"&&n.call(_e,"__await")?g.resolve(_e.__await).then(function(be){m("next",be,q,j)},function(be){m("throw",be,q,j)}):g.resolve(_e).then(function(be){fe.value=be,q(fe)},function(be){return m("throw",be,q,j)})}j(X.arg)}var b;r(this,"_invoke",{value:function(_,R){function q(){return new g(function(j,X){m(_,R,j,X)})}return b=b?b.then(q,q):q()}})}function ye(w,g,m){var b="suspendedStart";return function(_,R){if(b==="executing")throw new Error("Generator is already running");if(b==="completed"){if(_==="throw")throw R;return ee()}for(m.method=_,m.arg=R;;){var q=m.delegate;if(q){var j=se(q,m);if(j){if(j===f)continue;return j}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(b==="suspendedStart")throw b="completed",m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);b="executing";var X=c(w,g,m);if(X.type==="normal"){if(b=m.done?"completed":"suspendedYield",X.arg===f)continue;return{value:X.arg,done:m.done}}X.type==="throw"&&(b="completed",m.method="throw",m.arg=X.arg)}}}function se(w,g){var m=g.method,b=w.iterator[m];if(b===void 0)return g.delegate=null,m==="throw"&&w.iterator.return&&(g.method="return",g.arg=void 0,se(w,g),g.method==="throw")||m!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+m+"' method")),f;var _=c(b,w.iterator,g.arg);if(_.type==="throw")return g.method="throw",g.arg=_.arg,g.delegate=null,f;var R=_.arg;return R?R.done?(g[w.resultName]=R.value,g.next=w.nextLoc,g.method!=="return"&&(g.method="next",g.arg=void 0),g.delegate=null,f):R:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,f)}function Ie(w){var g={tryLoc:w[0]};1 in w&&(g.catchLoc=w[1]),2 in w&&(g.finallyLoc=w[2],g.afterLoc=w[3]),this.tryEntries.push(g)}function oe(w){var g=w.completion||{};g.type="normal",delete g.arg,w.completion=g}function we(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(Ie,this),this.reset(!0)}function Ne(w){if(w){var g=w[i];if(g)return g.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var m=-1,b=function _(){for(;++m<w.length;)if(n.call(w,m))return _.value=w[m],_.done=!1,_;return _.value=void 0,_.done=!0,_};return b.next=b}}return{next:ee}}function ee(){return{value:void 0,done:!0}}return h.prototype=v,r(L,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(w){var g=typeof w=="function"&&w.constructor;return!!g&&(g===h||(g.displayName||g.name)==="GeneratorFunction")},t.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,v):(w.__proto__=v,u(w,s,"GeneratorFunction")),w.prototype=Object.create(L),w},t.awrap=function(w){return{__await:w}},k(J.prototype),u(J.prototype,o,function(){return this}),t.AsyncIterator=J,t.async=function(w,g,m,b,_){_===void 0&&(_=Promise);var R=new J(l(w,g,m,b),_);return t.isGeneratorFunction(g)?R:R.next().then(function(q){return q.done?q.value:R.next()})},k(L),u(L,s,"Generator"),u(L,i,function(){return this}),u(L,"toString",function(){return"[object Generator]"}),t.keys=function(w){var g=Object(w),m=[];for(var b in g)m.push(b);return m.reverse(),function _(){for(;m.length;){var R=m.pop();if(R in g)return _.value=R,_.done=!1,_}return _.done=!0,_}},t.values=Ne,we.prototype={constructor:we,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(oe),!w)for(var g in this)g.charAt(0)==="t"&&n.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=void 0)},stop:function(){this.done=!0;var w=this.tryEntries[0].completion;if(w.type==="throw")throw w.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var g=this;function m(X,fe){return R.type="throw",R.arg=w,g.next=X,fe&&(g.method="next",g.arg=void 0),!!fe}for(var b=this.tryEntries.length-1;b>=0;--b){var _=this.tryEntries[b],R=_.completion;if(_.tryLoc==="root")return m("end");if(_.tryLoc<=this.prev){var q=n.call(_,"catchLoc"),j=n.call(_,"finallyLoc");if(q&&j){if(this.prev<_.catchLoc)return m(_.catchLoc,!0);if(this.prev<_.finallyLoc)return m(_.finallyLoc)}else if(q){if(this.prev<_.catchLoc)return m(_.catchLoc,!0)}else{if(!j)throw new Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return m(_.finallyLoc)}}}},abrupt:function(w,g){for(var m=this.tryEntries.length-1;m>=0;--m){var b=this.tryEntries[m];if(b.tryLoc<=this.prev&&n.call(b,"finallyLoc")&&this.prev<b.finallyLoc){var _=b;break}}_&&(w==="break"||w==="continue")&&_.tryLoc<=g&&g<=_.finallyLoc&&(_=null);var R=_?_.completion:{};return R.type=w,R.arg=g,_?(this.method="next",this.next=_.finallyLoc,f):this.complete(R)},complete:function(w,g){if(w.type==="throw")throw w.arg;return w.type==="break"||w.type==="continue"?this.next=w.arg:w.type==="return"?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):w.type==="normal"&&g&&(this.next=g),f},finish:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.finallyLoc===w)return this.complete(m.completion,m.afterLoc),oe(m),f}},catch:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.tryLoc===w){var b=m.completion;if(b.type==="throw"){var _=b.arg;oe(m)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(w,g,m){return this.delegate={iterator:Ne(w),resultName:g,nextLoc:m},this.method==="next"&&(this.arg=void 0),f}},t}function da(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(l){n(l);return}s.done?e(u):Promise.resolve(u).then(r,a)}function y(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(u){da(i,r,a,o,s,"next",u)}function s(u){da(i,r,a,o,s,"throw",u)}o(void 0)})}}function qe(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Qt(t,e){return Qt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qt(t,e)}function an(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Qt(t,e)}function Xt(t){return Xt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xt(t)}function _u(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tm(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qe(t)}function sn(t){var e=_u();return function(){var r=Xt(t),a;if(e){var i=Xt(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return tm(this,a)}}function nm(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function gn(t,e,n){return _u()?gn=Reflect.construct.bind():gn=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),l=new u;return o&&Qt(l,o.prototype),l},gn.apply(null,arguments)}function ot(t){var e=typeof Map=="function"?new Map:void 0;return ot=function(r){if(r===null||!nm(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,a)}function a(){return gn(r,arguments,Xt(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Qt(a,r)},ot(t)}function xe(t,e,n){return e=wu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var bu=function(t){an(n,t);var e=sn(n);function n(){var r;re(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),xe(qe(r),"name","NotAuthenticatedError"),xe(qe(r),"message","Not Authenticated"),r}return ae(n)}(ot(Error)),rm=function(t){an(n,t);var e=sn(n);function n(){var r;re(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),xe(qe(r),"name","CredentialsExpiredError"),xe(qe(r),"message","Authentication credentials are expired"),r}return ae(n)}(ot(Error));function pa(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pa(Object(n),!0).forEach(function(r){xe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pa(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function C(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var ha,ma,va,ga,am=S(ha||(ha=C([`
  query AuthChallenge($address: EthereumAddress!) {
    result: challenge(request: { address: $address }) {
      text
    }
  }
`]))),im=S(ma||(ma=C([`
  query AuthVerify($accessToken: Jwt!) {
    result: verify(request: { accessToken: $accessToken })
  }
`]))),sm=S(va||(va=C([`
  mutation AuthAuthenticate($address: EthereumAddress!, $signature: Signature!) {
    result: authenticate(request: { address: $address, signature: $signature }) {
      accessToken
      refreshToken
    }
  }
`]))),om=S(ga||(ga=C([`
  mutation AuthRefresh($refreshToken: Jwt!) {
    result: refresh(request: { refreshToken: $refreshToken }) {
      accessToken
      refreshToken
    }
  }
`]))),um=function(e,n,r){return e()},lm=A(am),cm=A(im),fm=A(sm),dm=A(om);function pm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:um;return{AuthChallenge:function(r,a){return e(function(i){return t.rawRequest(lm,r,E(E({},a),i))},"AuthChallenge","query")},AuthVerify:function(r,a){return e(function(i){return t.rawRequest(cm,r,E(E({},a),i))},"AuthVerify","query")},AuthAuthenticate:function(r,a){return e(function(i){return t.rawRequest(fm,r,E(E({},a),i))},"AuthAuthenticate","mutation")},AuthRefresh:function(r,a){return e(function(i){return t.rawRequest(dm,r,E(E({},a),i))},"AuthRefresh","mutation")}}}var hm=function(t){an(n,t);var e=sn(n);function n(){var r;re(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),xe(qe(r),"name","ClockSkewedError"),xe(qe(r),"message","Your system clock is skewed compared to the API clock"),r}return ae(n)}(ot(Error)),ya=En.secondsToMs(30),mm=En.secondsToMs(10),vr=function(){function t(e,n){re(this,t),this.accessToken=e,this.refreshToken=n}return ae(t,[{key:"checkClock",value:function(){var n=ca(this.refreshToken);if(qt(n.iat,"Issued at date should be provided by JWT token"),Math.abs(En.secondsToMs(n.iat)-Date.now())>mm)throw new hm}},{key:"canRefresh",value:function(){var n=Date.now(),r=this.getTokenExpTimestamp(this.refreshToken);return n<r-ya}},{key:"shouldRefresh",value:function(){var n=this.accessToken;if(!n)return!0;var r=Date.now(),a=this.getTokenExpTimestamp(n);return r>=a-ya}},{key:"getTokenExpTimestamp",value:function(n){var r=ca(n);return qt(r.exp,"Exp date should be provided by JWT token"),En.secondsToMs(r.exp)}}]),t}(),vm=function(){function t(e){re(this,t);var n=new Ee(e.environment.gqlEndpoint);this.sdk=pm(n)}return ae(t,[{key:"challenge",value:function(){var e=y(d().mark(function r(a){var i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.sdk.AuthChallenge({address:a});case 2:return i=s.sent,s.abrupt("return",i.data.result.text);case 4:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"verify",value:function(){var e=y(d().mark(function r(a){var i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.sdk.AuthVerify({accessToken:a});case 2:return i=s.sent,s.abrupt("return",i.data.result);case 4:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"authenticate",value:function(){var e=y(d().mark(function r(a,i){var o,s,u,l,c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.sdk.AuthAuthenticate({address:a,signature:i});case 2:return o=p.sent,s=o.data.result,u=s.accessToken,l=s.refreshToken,c=new vr(u,l),c.checkClock(),p.abrupt("return",c);case 7:case"end":return p.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"refresh",value:function(){var e=y(d().mark(function r(a){var i,o,s,u,l;return d().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,this.sdk.AuthRefresh({refreshToken:a});case 2:return i=f.sent,o=i.data.result,s=o.accessToken,u=o.refreshToken,l=new vr(s,u),l.checkClock(),f.abrupt("return",l);case 7:case"end":return f.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),gm=ze.object({refreshToken:ze.string()}),ym=function(){function t(e,n){re(this,t);var r=new Jh("lens.".concat(n,".credentials"),gm);this.refreshTokenStorage=Qh.createForSchema(r,e)}return ae(t,[{key:"set",value:function(){var e=y(d().mark(function r(a){var i,o;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=a.accessToken,o=a.refreshToken,this.accessToken=i,u.next=4,this.refreshTokenStorage.set({refreshToken:o});case 4:case"end":return u.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"get",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.getRefreshToken();case 2:if(a=s.sent,a){s.next=5;break}return s.abrupt("return",null);case 5:return i=this.accessToken,s.abrupt("return",new vr(i,a));case 7:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"reset",value:function(){var e=y(d().mark(function r(){return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return this.accessToken=void 0,i.next=3,this.refreshTokenStorage.reset();case 3:case"end":return i.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"subscribe",value:function(n){throw new Error("Method not implemented.")}},{key:"getRefreshToken",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.refreshTokenStorage.get();case 2:return i=s.sent,s.abrupt("return",(a=i==null?void 0:i.refreshToken)!==null&&a!==void 0?a:null);case 4:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()}]),t}(),wm=function(){function t(e){re(this,t),this.api=new vm(e),this.storage=new ym(e.storage||new Xh,e.environment.name)}return ae(t,[{key:"generateChallenge",value:function(){var e=y(d().mark(function r(a){return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",this.api.challenge(a));case 1:case"end":return o.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"authenticate",value:function(){var e=y(d().mark(function r(a,i){var o;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.api.authenticate(a,i);case 2:return o=u.sent,u.next=5,this.storage.set(o);case 5:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"isAuthenticated",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.storage.get();case 2:if(a=s.sent,a){s.next=5;break}return s.abrupt("return",!1);case 5:if(a.shouldRefresh()){s.next=7;break}return s.abrupt("return",!0);case 7:if(!a.canRefresh()){s.next=14;break}return s.next=10,this.api.refresh(a.refreshToken);case 10:return i=s.sent,s.next=13,this.storage.set(i);case 13:return s.abrupt("return",!0);case 14:return s.abrupt("return",!1);case 15:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"getRequestHeader",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.storage.get();case 2:if(a=s.sent,a){s.next=5;break}return s.abrupt("return",Sn(new bu));case 5:if(a.shouldRefresh()){s.next=7;break}return s.abrupt("return",cr(this.buildHeader(a.accessToken)));case 7:if(!a.canRefresh()){s.next=14;break}return s.next=10,this.api.refresh(a.refreshToken);case 10:return i=s.sent,s.next=13,this.storage.set(i);case 13:return s.abrupt("return",cr(this.buildHeader(i.accessToken)));case 14:return s.abrupt("return",Sn(new rm));case 15:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"buildHeader",value:function(n){return{authorization:"Bearer ".concat(n||"")}}}]),t}();function le(t,e){return gr.apply(this,arguments)}function gr(){return gr=y(d().mark(function t(e,n){var r;return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(n);case 2:return r=i.sent,i.t0=function(){return y(d().mark(function s(){var u;return d().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!r.pageInfo.next){c.next=6;break}return c.next=3,le(e,E(E({},n),{},{cursor:r.pageInfo.next}));case 3:return u=c.sent,r=u,c.abrupt("return",u);case 6:return c.abrupt("return",null);case 7:case"end":return c.stop()}},s)}))()},i.t1=function(){return y(d().mark(function s(){var u;return d().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!r.pageInfo.prev){c.next=6;break}return c.next=3,le(e,E(E({},n),{},{cursor:r.pageInfo.prev}));case 3:return u=c.sent,r=u,c.abrupt("return",u);case 6:return c.abrupt("return",null);case 7:case"end":return c.stop()}},s)}))()},i.abrupt("return",{get pageInfo(){return r.pageInfo},get items(){return r.items},next:i.t0,prev:i.t1});case 6:case"end":return i.stop()}},t)})),gr.apply(this,arguments)}function _m(t){return yr.apply(this,arguments)}function yr(){return yr=y(d().mark(function t(e){var n;return d().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",{});case 2:return a.next=4,e.getRequestHeader();case 4:if(n=a.sent,!n.isFailure()){a.next=7;break}return a.abrupt("return",{});case 7:return a.abrupt("return",n.value);case 8:case"end":return a.stop()}},t)})),yr.apply(this,arguments)}function te(t,e){return wr.apply(this,arguments)}function wr(){return wr=y(d().mark(function t(e,n){var r;return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_m(e);case 2:return r=i.sent,i.abrupt("return",n(r));case 4:case"end":return i.stop()}},t)})),wr.apply(this,arguments)}function H(t,e){return _r.apply(this,arguments)}function _r(){return _r=y(d().mark(function t(e,n){var r,a;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e){o.next=2;break}return o.abrupt("return",Sn(new bu));case 2:return o.next=4,e.getRequestHeader();case 4:if(r=o.sent,!r.isFailure()){o.next=7;break}return o.abrupt("return",Sn(r.error));case 7:return o.next=9,n(r.value);case 9:return a=o.sent,o.abrupt("return",cr(a));case 11:case"end":return o.stop()}},t)})),_r.apply(this,arguments)}var bm=1e3,km=20;function ku(t){return br.apply(this,arguments)}function br(){return br=y(d().mark(function t(e){var n,r,a,i,o,s,u,l,c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return n=e.fn,r=e.validate,a=e.onMaxAttempts,i=e.interval,o=i===void 0?bm:i,s=e.maxAttempts,u=s===void 0?km:s,l=0,c=function(){var h=y(d().mark(function v(T,P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,n();case 2:if(I=k.sent,l++,!r(I)){k.next=8;break}return k.abrupt("return",T(I));case 8:if(!(u&&l===u)){k.next=12;break}return k.abrupt("return",P(a()));case 12:setTimeout(c,o,T,P);case 13:case"end":return k.stop()}},v)}));return function(T,P){return h.apply(this,arguments)}}(),p.abrupt("return",new Promise(c));case 4:case"end":return p.stop()}},t)})),br.apply(this,arguments)}var wa,_a,ba,ka,Ta,Ea,Sa,Ca,Da,Na,Ia,Pa,Oa,Aa,Ra,$a,Ma,Fa,qa,xa,La,ja,Ua,Va,Ba,Ga,Ha,Za,Wa,za,Ya,Ja,Qa,Xa,Ka,St=S(wa||(wa=C([`
  fragment EIP712TypedDataDomain on EIP712TypedDataDomain {
    name
    chainId
    version
    verifyingContract
  }
`]))),Ar=S(_a||(_a=C([`
  fragment Erc20 on Erc20 {
    __typename
    name
    symbol
    decimals
    address
  }
`]))),Tm=S(ba||(ba=C([`
  fragment Erc20Amount on Erc20Amount {
    __typename
    asset {
      ...Erc20
    }
    value
  }
  `,`
`])),Ar),Em=S(ka||(ka=C([`
  fragment Media on Media {
    __typename
    url
    mimeType
  }
`]))),Tu=S(Ta||(Ta=C([`
  fragment MediaSet on MediaSet {
    __typename
    original {
      ...Media
    }
  }
  `,`
`])),Em),et=S(Ea||(Ea=C([`
  fragment ModuleFeeAmount on ModuleFeeAmount {
    __typename
    asset {
      ...Erc20
    }
    value
  }
  `,`
`])),Ar),Sm=S(Sa||(Sa=C([`
  fragment FeeFollowModuleSettings on FeeFollowModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    contractAddress
    recipient
  }
  `,`
`])),et),Cm=S(Ca||(Ca=C([`
  fragment ProfileFollowModuleSettings on ProfileFollowModuleSettings {
    __typename
    contractAddress
  }
`]))),Dm=S(Da||(Da=C([`
  fragment RevertFollowModuleSettings on RevertFollowModuleSettings {
    __typename
    contractAddress
  }
`]))),Nm=S(Na||(Na=C([`
  fragment UnknownFollowModuleSettings on UnknownFollowModuleSettings {
    __typename
    contractAddress
  }
`]))),Im=S(Ia||(Ia=C([`
  fragment Attribute on Attribute {
    __typename
    displayType
    key
    value
  }
`]))),ce=S(Pa||(Pa=C([`
  fragment Profile on Profile {
    __typename
    id
    name
    bio
    handle
    ownedBy
    interests
    picture {
      ... on NftImage {
        __typename
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        ...MediaSet
      }
    }
    coverPicture {
      ... on NftImage {
        __typename
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        ...MediaSet
      }
    }
    stats {
      __typename
      totalFollowers
      totalFollowing
      totalPosts
    }
    followModule {
      ... on FeeFollowModuleSettings {
        ...FeeFollowModuleSettings
      }
      ... on ProfileFollowModuleSettings {
        ...ProfileFollowModuleSettings
      }
      ... on RevertFollowModuleSettings {
        ...RevertFollowModuleSettings
      }
      ... on UnknownFollowModuleSettings {
        ...UnknownFollowModuleSettings
      }
    }
    attributes {
      ...Attribute
    }
    dispatcher {
      address
      canUseRelay
    }
    isDefault
    isFollowedByMe(isFinalisedOnChain: true)
    isFollowing(who: $observerId)
  }
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
`])),Tu,Sm,Cm,Dm,Nm,Im),Eu=S(Oa||(Oa=C([`
  fragment MirrorBase on Mirror {
    __typename
    id
    createdAt
    profile {
      ...Profile
    }
    hidden
  }
  `,`
`])),ce),Su=S(Aa||(Aa=C([`
  fragment SimplePublicationStats on PublicationStats {
    __typename
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
    totalUpvotes
    totalDownvotes
  }
`]))),Pm=S(Ra||(Ra=C([`
  fragment MetadataAttributeOutput on MetadataAttributeOutput {
    __typename
    traitType
    value
  }
`]))),Cu=S($a||($a=C([`
  fragment Metadata on MetadataOutput {
    __typename
    name
    description
    mainContentFocus
    content
    media {
      ...MediaSet
    }
    attributes {
      ...MetadataAttributeOutput
    }
  }
  `,`
  `,`
`])),Tu,Pm),Ct=S(Ma||(Ma=C([`
  fragment Wallet on Wallet {
    __typename
    address
    defaultProfile {
      ...Profile
    }
  }
  `,`
`])),ce),Du=S(Fa||(Fa=C([`
  fragment FreeCollectModuleSettings on FreeCollectModuleSettings {
    __typename
    contractAddress
    followerOnly
  }
`]))),Nu=S(qa||(qa=C([`
  fragment FeeCollectModuleSettings on FeeCollectModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    contractAddress
    followerOnly
    recipient
    referralFee
  }
  `,`
`])),et),Iu=S(xa||(xa=C([`
  fragment LimitedFeeCollectModuleSettings on LimitedFeeCollectModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    collectLimit
    contractAddress
    followerOnly
    recipient
    referralFee
  }
  `,`
`])),et),Pu=S(La||(La=C([`
  fragment LimitedTimedFeeCollectModuleSettings on LimitedTimedFeeCollectModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    collectLimit
    contractAddress
    followerOnly
    endTimestamp
    recipient
    referralFee
  }
  `,`
`])),et),Ou=S(ja||(ja=C([`
  fragment RevertCollectModuleSettings on RevertCollectModuleSettings {
    __typename
    contractAddress
  }
`]))),Au=S(Ua||(Ua=C([`
  fragment TimedFeeCollectModuleSettings on TimedFeeCollectModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    contractAddress
    followerOnly
    endTimestamp
    recipient
    referralFee
  }
  `,`
`])),et),Ru=S(Va||(Va=C([`
  fragment MultirecipientFeeCollectModuleSettings on MultirecipientFeeCollectModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    collectLimitOptional: collectLimit
    contractAddress
    followerOnly
    endTimestampOptional: endTimestamp
    recipients {
      recipient
      split
    }
    referralFee
  }
  `,`
`])),et),$u=S(Ba||(Ba=C([`
  fragment ERC4626FeeCollectModuleSettings on ERC4626FeeCollectModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    collectLimitOptional: collectLimit
    contractAddress
    followerOnly
    endTimestampOptional: endTimestamp
    recipient
    referralFee
    vault
  }
  `,`
`])),et),Mu=S(Ga||(Ga=C([`
  fragment AaveFeeCollectModuleSettings on AaveFeeCollectModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    collectLimitOptional: collectLimit
    contractAddress
    followerOnly
    endTimestampOptional: endTimestamp
    recipient
    referralFee
  }
  `,`
`])),et),Ce=S(Ha||(Ha=C([`
  fragment Post on Post {
    __typename
    id
    stats {
      ...SimplePublicationStats
    }
    metadata {
      ...Metadata
    }
    profile {
      ...Profile
    }
    collectedBy {
      ...Wallet
    }
    collectModule {
      __typename
      ... on FreeCollectModuleSettings {
        ...FreeCollectModuleSettings
      }
      ... on FeeCollectModuleSettings {
        ...FeeCollectModuleSettings
      }
      ... on LimitedFeeCollectModuleSettings {
        ...LimitedFeeCollectModuleSettings
      }
      ... on LimitedTimedFeeCollectModuleSettings {
        ...LimitedTimedFeeCollectModuleSettings
      }
      ... on RevertCollectModuleSettings {
        ...RevertCollectModuleSettings
      }
      ... on TimedFeeCollectModuleSettings {
        ...TimedFeeCollectModuleSettings
      }
      ... on MultirecipientFeeCollectModuleSettings {
        ...MultirecipientFeeCollectModuleSettings
      }
      ... on ERC4626FeeCollectModuleSettings {
        ...ERC4626FeeCollectModuleSettings
      }
      ... on AaveFeeCollectModuleSettings {
        ...AaveFeeCollectModuleSettings
      }
    }
    referenceModule {
      __typename
      ... on FollowOnlyReferenceModuleSettings {
        contractAddress
      }
    }
    collectNftAddress
    createdAt
    hidden
    isGated
    reaction(request: { profileId: $observerId })
    hasCollectedByMe(isFinalisedOnChain: true)
    canComment(profileId: $observerId) {
      result
    }
    canMirror(profileId: $observerId) {
      result
    }
    mirrors(by: $observerId)
  }
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
`])),Su,Cu,ce,Ct,Du,Nu,Iu,Pu,Ou,Au,Ru,$u,Mu),Om=S(Za||(Za=C([`
  fragment CommentBase on Comment {
    __typename
    id
    stats {
      ...SimplePublicationStats
    }
    metadata {
      ...Metadata
    }
    profile {
      ...Profile
    }
    collectedBy {
      ...Wallet
    }
    collectModule {
      __typename
      ... on FreeCollectModuleSettings {
        ...FreeCollectModuleSettings
      }
      ... on FeeCollectModuleSettings {
        ...FeeCollectModuleSettings
      }
      ... on LimitedFeeCollectModuleSettings {
        ...LimitedFeeCollectModuleSettings
      }
      ... on LimitedTimedFeeCollectModuleSettings {
        ...LimitedTimedFeeCollectModuleSettings
      }
      ... on RevertCollectModuleSettings {
        ...RevertCollectModuleSettings
      }
      ... on TimedFeeCollectModuleSettings {
        ...TimedFeeCollectModuleSettings
      }
      ... on MultirecipientFeeCollectModuleSettings {
        ...MultirecipientFeeCollectModuleSettings
      }
      ... on ERC4626FeeCollectModuleSettings {
        ...ERC4626FeeCollectModuleSettings
      }
      ... on AaveFeeCollectModuleSettings {
        ...AaveFeeCollectModuleSettings
      }
    }
    referenceModule {
      __typename
      ... on FollowOnlyReferenceModuleSettings {
        contractAddress
      }
    }
    collectNftAddress
    createdAt
    hidden
    isGated
    reaction(request: { profileId: $observerId })
    hasCollectedByMe(isFinalisedOnChain: true)
    canComment(profileId: $observerId) {
      result
    }
    canMirror(profileId: $observerId) {
      result
    }
    mirrors(by: $observerId)
  }
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
`])),Su,Cu,ce,Ct,Du,Nu,Iu,Pu,Ou,Au,Ru,$u,Mu),De=S(Wa||(Wa=C([`
  fragment Comment on Comment {
    __typename
    ...CommentBase
    commentOn {
      ... on Post {
        ...Post
      }
      ... on Mirror {
        ...MirrorBase
      }
      ... on Comment {
        ...CommentBase
      }
    }
    mainPost {
      ... on Post {
        ...Post
      }
      ... on Mirror {
        ...MirrorBase
      }
    }
  }
  `,`
  `,`
  `,`
`])),Om,Ce,Eu),ut=S(za||(za=C([`
  fragment Mirror on Mirror {
    __typename
    ...MirrorBase
    mirrorOf {
      ... on Post {
        ...Post
      }
      ... on Comment {
        ...Comment
      }
    }
  }
  `,`
  `,`
  `,`
`])),Eu,Ce,De),he=S(Ya||(Ya=C([`
  fragment CommonPaginatedResultInfo on PaginatedResultInfo {
    __typename
    prev
    next
    totalCount
  }
`]))),Am=S(Ja||(Ja=C([`
  fragment Following on Following {
    __typename
    profile {
      ...Profile
    }
  }
  `,`
`])),ce),Rm=S(Qa||(Qa=C([`
  fragment Follower on Follower {
    __typename
    wallet {
      ...Wallet
    }
  }
  `,`
`])),Ct),lt=S(Xa||(Xa=C([`
  fragment RelayerResult on RelayerResult {
    __typename
    txHash
    txId
  }
`]))),ct=S(Ka||(Ka=C([`
  fragment RelayError on RelayError {
    __typename
    reason
  }
`]))),ei,ti,$m=S(ei||(ei=C([`
  query ExplorePublications($request: ExplorePublicationRequest!, $observerId: ProfileId) {
    result: explorePublications(request: $request) {
      items {
        ... on Post {
          ...Post
        }
        ... on Mirror {
          ...Mirror
        }
        ... on Comment {
          ...Comment
        }
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
  `,`
  `,`
`])),Ce,ut,De,he),Mm=S(ti||(ti=C([`
  query ExploreProfiles($request: ExploreProfilesRequest!, $observerId: ProfileId) {
    result: exploreProfiles(request: $request) {
      items {
        ...Profile
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),ce,he),Fm=function(e,n,r){return e()},qm=A($m),xm=A(Mm);function Lm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fm;return{ExplorePublications:function(r,a){return e(function(i){return t.rawRequest(qm,r,E(E({},a),i))},"ExplorePublications","query")},ExploreProfiles:function(r,a){return e(function(i){return t.rawRequest(xm,r,E(E({},a),i))},"ExploreProfiles","query")}}}var jm=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Lm(r),this.authentication=n}return ae(t,[{key:"publications",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ExplorePublications({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"profiles",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ExploreProfiles({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),ni,ri,ai,ii,si,oi,ui,Um=S(ni||(ni=C([`
  fragment ElectedMirror on ElectedMirror {
    __typename
    mirrorId
    profile {
      ...Profile
    }
    timestamp
  }
  `,`
`])),ce),Vm=S(ri||(ri=C([`
  fragment MirrorEvent on MirrorEvent {
    __typename
    profile {
      ...Profile
    }
    timestamp
  }
  `,`
`])),ce),Bm=S(ai||(ai=C([`
  fragment CollectedEvent on CollectedEvent {
    __typename
    profile {
      ...Profile
    }
    timestamp
  }
  `,`
`])),ce),Gm=S(ii||(ii=C([`
  fragment ReactionEvent on ReactionEvent {
    __typename
    profile {
      ...Profile
    }
    reaction
    timestamp
  }
  `,`
`])),ce),Hm=S(si||(si=C([`
  fragment FeedItem on FeedItem {
    __typename
    root {
      ... on Post {
        ...Post
      }
      ... on Comment {
        ...Comment
      }
    }
    comments {
      ...Comment
    }
    electedMirror {
      ...ElectedMirror
    }
    mirrors {
      ...MirrorEvent
    }
    collects {
      ...CollectedEvent
    }
    reactions {
      ...ReactionEvent
    }
  }
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
`])),Ce,De,Um,Vm,Bm,Gm),Zm=S(oi||(oi=C([`
  query Feed($request: FeedRequest!, $observerId: ProfileId) {
    result: feed(request: $request) {
      items {
        ...FeedItem
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),Hm,he),Wm=S(ui||(ui=C([`
  query FeedHighlights($request: FeedHighlightsRequest!, $observerId: ProfileId) {
    result: feedHighlights(request: $request) {
      items {
        ... on Post {
          ...Post
        }
        ... on Mirror {
          ...Mirror
        }
        ... on Comment {
          ...Comment
        }
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
  `,`
  `,`
`])),Ce,ut,De,he),zm=function(e,n,r){return e()},Ym=A(Zm),Jm=A(Wm);function Qm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zm;return{Feed:function(r,a){return e(function(i){return t.rawRequest(Ym,r,E(E({},a),i))},"Feed","query")},FeedHighlights:function(r,a){return e(function(i){return t.rawRequest(Jm,r,E(E({},a),i))},"FeedHighlights","query")}}}var Xm=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Qm(r),this.authentication=n}return ae(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Feed({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"fetchHighlights",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.FeedHighlights({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),li,ci,fi,di,pi,hi,mi,Km=S(li||(li=C([`
  fragment ModuleInfo on ModuleInfo {
    __typename
    name
    type
  }
`]))),ev=S(ci||(ci=C([`
  fragment EnabledModule on EnabledModule {
    __typename
    moduleName
    contractAddress
    inputParams {
      ...ModuleInfo
    }
    redeemParams {
      ...ModuleInfo
    }
    returnDataParams: returnDataParms {
      ...ModuleInfo
    }
  }
  `,`
`])),Km),tv=S(fi||(fi=C([`
  fragment EnabledModules on EnabledModules {
    __typename
    collectModules {
      ...EnabledModule
    }
    followModules {
      ...EnabledModule
    }
    referenceModules {
      ...EnabledModule
    }
  }
  `,`
`])),ev),nv=S(di||(di=C([`
  query EnabledModules {
    result: enabledModules {
      ...EnabledModules
    }
  }
  `,`
`])),tv),rv=S(pi||(pi=C([`
  query EnabledModuleCurrencies {
    result: enabledModuleCurrencies {
      ...Erc20
    }
  }
  `,`
`])),Ar),av=S(hi||(hi=C([`
  query ApprovedModuleAllowanceAmount($request: ApprovedModuleAllowanceAmountRequest!) {
    result: approvedModuleAllowanceAmount(request: $request) {
      currency
      module
      contractAddress
      allowance
    }
  }
`]))),iv=S(mi||(mi=C([`
  query GenerateModuleCurrencyApprovalData($request: GenerateModuleCurrencyApprovalDataRequest!) {
    result: generateModuleCurrencyApprovalData(request: $request) {
      to
      from
      data
    }
  }
`]))),sv=function(e,n,r){return e()},ov=A(nv),uv=A(rv),lv=A(av),cv=A(iv);function fv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sv;return{EnabledModules:function(r,a){return e(function(i){return t.rawRequest(ov,r,E(E({},a),i))},"EnabledModules","query")},EnabledModuleCurrencies:function(r,a){return e(function(i){return t.rawRequest(uv,r,E(E({},a),i))},"EnabledModuleCurrencies","query")},ApprovedModuleAllowanceAmount:function(r,a){return e(function(i){return t.rawRequest(lv,r,E(E({},a),i))},"ApprovedModuleAllowanceAmount","query")},GenerateModuleCurrencyApprovalData:function(r,a){return e(function(i){return t.rawRequest(cv,r,E(E({},a),i))},"GenerateModuleCurrencyApprovalData","query")}}}var dv=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=fv(r),this.authentication=n}return ae(t,[{key:"fetchEnabledCurrencies",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",H(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.EnabledModuleCurrencies({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"fetchEnabled",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",H(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.EnabledModules({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"approvedAllowanceAmount",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ApprovedModuleAllowanceAmount({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"generateCurrencyApprovalData",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.GenerateModuleCurrencyApprovalData({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),vi,gi,yi,wi,_i,bi,ki,Ti,Ei,Si,Fu=S(vi||(vi=C([`
  fragment Nft on NFT {
    __typename
    contractName
    contractAddress
    symbol
    tokenId
    owners {
      amount
      address
    }
    name
    description
    contentURI
    originalContent {
      uri
      animatedUrl
      metaType
    }
    chainId
    collectionName
    ercType
  }
`]))),pv=S(gi||(gi=C([`
  fragment NftGallery on NftGallery {
    id
    name
    profileId
    createdAt
    updatedAt
    items {
      ...Nft
    }
  }
  `,`
`])),Fu),hv=S(yi||(yi=C([`
  query Nfts($request: NFTsRequest!) {
    result: nfts(request: $request) {
      items {
        ...Nft
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),Fu,he),mv=S(wi||(wi=C([`
  query NftOwnershipChallenge($request: NftOwnershipChallengeRequest!) {
    result: nftOwnershipChallenge(request: $request) {
      id
      text
      timeout
    }
  }
`]))),vv=S(_i||(_i=C([`
  query ProfileGalleries($request: NftGalleriesRequest!) {
    result: nftGalleries(request: $request) {
      ...NftGallery
    }
  }
  `,`
`])),pv),gv=S(bi||(bi=C([`
  mutation CreateNFTGallery($request: NftGalleryCreateRequest!) {
    result: createNftGallery(request: $request)
  }
`]))),yv=S(ki||(ki=C([`
  mutation UpdateNFTGalleryInfo($request: NftGalleryUpdateInfoRequest!) {
    updateNftGalleryInfo(request: $request)
  }
`]))),wv=S(Ti||(Ti=C([`
  mutation UpdateNFTGalleryOrder($request: NftGalleryUpdateItemOrderRequest!) {
    updateNftGalleryOrder(request: $request)
  }
`]))),_v=S(Ei||(Ei=C([`
  mutation UpdateNFTGalleryItems($request: NftGalleryUpdateItemsRequest!) {
    updateNftGalleryItems(request: $request)
  }
`]))),bv=S(Si||(Si=C([`
  mutation DeleteNFTGallery($request: NftGalleryDeleteRequest!) {
    deleteNftGallery(request: $request)
  }
`]))),kv=function(e,n,r){return e()},Tv=A(hv),Ev=A(mv),Sv=A(vv),Cv=A(gv),Dv=A(yv),Nv=A(wv),Iv=A(_v),Pv=A(bv);function Ov(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:kv;return{Nfts:function(r,a){return e(function(i){return t.rawRequest(Tv,r,E(E({},a),i))},"Nfts","query")},NftOwnershipChallenge:function(r,a){return e(function(i){return t.rawRequest(Ev,r,E(E({},a),i))},"NftOwnershipChallenge","query")},ProfileGalleries:function(r,a){return e(function(i){return t.rawRequest(Sv,r,E(E({},a),i))},"ProfileGalleries","query")},CreateNFTGallery:function(r,a){return e(function(i){return t.rawRequest(Cv,r,E(E({},a),i))},"CreateNFTGallery","mutation")},UpdateNFTGalleryInfo:function(r,a){return e(function(i){return t.rawRequest(Dv,r,E(E({},a),i))},"UpdateNFTGalleryInfo","mutation")},UpdateNFTGalleryOrder:function(r,a){return e(function(i){return t.rawRequest(Nv,r,E(E({},a),i))},"UpdateNFTGalleryOrder","mutation")},UpdateNFTGalleryItems:function(r,a){return e(function(i){return t.rawRequest(Iv,r,E(E({},a),i))},"UpdateNFTGalleryItems","mutation")},DeleteNFTGallery:function(r,a){return e(function(i){return t.rawRequest(Pv,r,E(E({},a),i))},"DeleteNFTGallery","mutation")}}}var Av=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Ov(r),this.authentication=n}return ae(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",le(function(){var h=y(d().mark(function v(T){var P;return d().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,i.sdk.Nfts({request:T},c);case 2:return P=L.sent,L.abrupt("return",P.data.result);case 4:case"end":return L.stop()}},v)}));return function(v){return h.apply(this,arguments)}}(),a));case 1:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"ownershipChallenge",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.NftOwnershipChallenge({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"fetchGalleries",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProfileGalleries({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createGallery",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateNFTGallery({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"updateGalleryInfo",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.UpdateNFTGalleryInfo({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"updateGalleryItems",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.UpdateNFTGalleryItems({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"updateGalleryOrder",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.UpdateNFTGalleryOrder({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"deleteGallery",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.DeleteNFTGallery({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),Ci,Rv=S(Ci||(Ci=C([`
  query UserSigNonces {
    result: userSigNonces {
      lensHubOnChainSigNonce
      peripheryOnChainSigNonce
    }
  }
`]))),$v=function(e,n,r){return e()},Mv=A(Rv);function Fv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$v;return{UserSigNonces:function(r,a){return e(function(i){return t.rawRequest(Mv,r,E(E({},a),i))},"UserSigNonces","query")}}}var qv=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Fv(r),this.authentication=n}return ae(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",H(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.UserSigNonces({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()}]),t}(),Di,Ni,Ii,Pi,Oi,Ai,Ri,xv=S(Di||(Di=C([`
  fragment NewFollowerNotification on NewFollowerNotification {
    __typename
    notificationId
    createdAt
    isFollowedByMe
    wallet {
      ...Wallet
    }
  }
  `,`
`])),Ct),Lv=S(Ni||(Ni=C([`
  fragment NewCollectNotification on NewCollectNotification {
    __typename
    notificationId
    createdAt
    wallet {
      ...Wallet
    }
    collectedPublication {
      ... on Post {
        ...Post
      }
      ... on Mirror {
        ...Mirror
      }
      ... on Comment {
        ...Comment
      }
    }
  }
  `,`
  `,`
  `,`
  `,`
`])),Ct,Ce,ut,De),jv=S(Ii||(Ii=C([`
  fragment NewMirrorNotification on NewMirrorNotification {
    __typename
    notificationId
    createdAt
    profile {
      ...Profile
    }
    publication {
      ... on Post {
        ...Post
      }
      ... on Comment {
        ...Comment
      }
    }
  }
  `,`
  `,`
  `,`
`])),ce,Ce,De),Uv=S(Pi||(Pi=C([`
  fragment NewCommentNotification on NewCommentNotification {
    __typename
    notificationId
    createdAt
    profile {
      ...Profile
    }
    comment {
      ...Comment
    }
  }
  `,`
  `,`
`])),ce,De),Vv=S(Oi||(Oi=C([`
  fragment NewMentionNotification on NewMentionNotification {
    __typename
    notificationId
    createdAt
    mentionPublication {
      ... on Post {
        ...Post
      }
      ... on Comment {
        ...Comment
      }
    }
  }
  `,`
  `,`
`])),Ce,De),Bv=S(Ai||(Ai=C([`
  fragment NewReactionNotification on NewReactionNotification {
    __typename
    notificationId
    createdAt
    profile {
      ...Profile
    }
    reaction
    publication {
      ... on Post {
        ...Post
      }
      ... on Comment {
        ...Comment
      }
      ... on Mirror {
        ...Mirror
      }
    }
  }
  `,`
  `,`
  `,`
  `,`
`])),ce,Ce,De,ut),Gv=S(Ri||(Ri=C([`
  query Notifications($request: NotificationRequest!, $observerId: ProfileId) {
    result: notifications(request: $request) {
      items {
        ... on NewFollowerNotification {
          ...NewFollowerNotification
        }
        ... on NewMirrorNotification {
          ...NewMirrorNotification
        }
        ... on NewCollectNotification {
          ...NewCollectNotification
        }
        ... on NewCommentNotification {
          ...NewCommentNotification
        }
        ... on NewMentionNotification {
          ...NewMentionNotification
        }
        ... on NewReactionNotification {
          ...NewReactionNotification
        }
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
`])),xv,jv,Lv,Uv,Vv,Bv,he),Hv=function(e,n,r){return e()},Zv=A(Gv);function Wv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hv;return{Notifications:function(r,a){return e(function(i){return t.rawRequest(Zv,r,E(E({},a),i))},"Notifications","query")}}}var zv=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Wv(r),this.authentication=n}return ae(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Notifications({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),$i,Mi,Fi,qi,xi,Li,ji,Ui,Vi,Bi,Gi,Hi,Zi,Wi,zi,Yi,Ji,Qi,Xi,Ki,es,ts,ns,rs,as,is,ss,Yv=S($i||($i=C([`
  fragment ProfileStats on ProfileStats {
    __typename
    totalCollects
    totalComments
    totalFollowers
    totalFollowing
    totalMirrors
    totalPosts
    totalPublications
    commentsTotal(forSources: $sources)
    postsTotal(forSources: $sources)
    mirrorsTotal(forSources: $sources)
    publicationsTotal(forSources: $sources)
  }
`]))),Jv=S(Mi||(Mi=C([`
  query Profile($request: SingleProfileQueryRequest!, $observerId: ProfileId) {
    result: profile(request: $request) {
      ...Profile
    }
  }
  `,`
`])),ce),Qv=S(Fi||(Fi=C([`
  query ProfileStats($request: SingleProfileQueryRequest!, $sources: [Sources!]!) {
    result: profile(request: $request) {
      stats {
        ...ProfileStats
      }
    }
  }
  `,`
`])),Yv),Xv=S(qi||(qi=C([`
  query Profiles($request: ProfileQueryRequest!, $observerId: ProfileId) {
    result: profiles(request: $request) {
      items {
        ...Profile
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),ce,he),Kv=S(xi||(xi=C([`
  query RecommendedProfiles($options: RecommendedProfileOptions!, $observerId: ProfileId) {
    result: recommendedProfiles(options: $options) {
      ...Profile
    }
  }
  `,`
`])),ce),eg=S(Li||(Li=C([`
  query MutualFollowersProfiles(
    $request: MutualFollowersProfilesQueryRequest!
    $observerId: ProfileId
  ) {
    result: mutualFollowersProfiles(request: $request) {
      items {
        ...Profile
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),ce,he),tg=S(ji||(ji=C([`
  query DoesFollow($request: DoesFollowRequest!) {
    result: doesFollow(request: $request) {
      follows
      followerAddress
      profileId
      isFinalisedOnChain
      __typename
    }
  }
`]))),ng=S(Ui||(Ui=C([`
  query Following($request: FollowingRequest!, $observerId: ProfileId) {
    result: following(request: $request) {
      items {
        ...Following
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),Am,he),rg=S(Vi||(Vi=C([`
  query Followers($request: FollowersRequest!, $observerId: ProfileId) {
    result: followers(request: $request) {
      items {
        ...Follower
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),Rm,he),ag=S(Bi||(Bi=C([`
  query FollowerNftOwnedTokenIds($request: FollowerNftOwnedTokenIdsRequest!) {
    result: followerNftOwnedTokenIds(request: $request) {
      __typename
      followerNftAddress
      tokensIds
    }
  }
`]))),ig=S(Gi||(Gi=C([`
  query PendingApprovalFollows($request: PendingApprovalFollowsRequest!, $observerId: ProfileId) {
    result: pendingApprovalFollows(request: $request) {
      items {
        ...Profile
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),ce,he),sg=S(Hi||(Hi=C([`
  query ProfileInterests {
    result: profileInterests
  }
`]))),og=S(Zi||(Zi=C([`
  mutation CreateProfile($request: CreateProfileRequest!) {
    result: createProfile(request: $request) {
      ... on RelayerResult {
        ...RelayerResult
      }
      ... on RelayError {
        ...RelayError
      }
    }
  }
  `,`
  `,`
`])),lt,ct),ug=S(Wi||(Wi=C([`
  mutation CreateBurnProfileTypedData($request: BurnProfileRequest!, $options: TypedDataOptions) {
    result: createBurnProfileTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          BurnWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
  }
`]))),lg=S(zi||(zi=C([`
  mutation CreateSetDefaultProfileTypedData(
    $request: CreateSetDefaultProfileRequest!
    $options: TypedDataOptions
  ) {
    result: createSetDefaultProfileTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          SetDefaultProfileWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          wallet
          profileId
        }
      }
    }
  }
`]))),cg=S(Yi||(Yi=C([`
  mutation CreateSetProfileImageURITypedData(
    $request: UpdateProfileImageRequest!
    $options: TypedDataOptions
  ) {
    result: createSetProfileImageURITypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          SetProfileImageURIWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          imageURI
        }
      }
    }
  }
`]))),fg=S(Ji||(Ji=C([`
  mutation CreateSetProfileImageURIViaDispatcher($request: UpdateProfileImageRequest!) {
    result: createSetProfileImageURIViaDispatcher(request: $request) {
      __typename
      ... on RelayerResult {
        ...RelayerResult
      }
      ... on RelayError {
        ...RelayError
      }
    }
  }
  `,`
  `,`
`])),lt,ct),dg=S(Qi||(Qi=C([`
  mutation CreateSetProfileMetadataTypedData(
    $request: CreatePublicSetProfileMetadataURIRequest!
    $options: TypedDataOptions
  ) {
    result: createSetProfileMetadataTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          SetProfileMetadataURIWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          metadata
        }
      }
    }
  }
`]))),pg=S(Xi||(Xi=C([`
  mutation CreateSetProfileMetadataViaDispatcher(
    $request: CreatePublicSetProfileMetadataURIRequest!
  ) {
    result: createSetProfileMetadataViaDispatcher(request: $request) {
      __typename
      ... on RelayerResult {
        ...RelayerResult
      }
      ... on RelayError {
        ...RelayError
      }
    }
  }
  `,`
  `,`
`])),lt,ct),hg=S(Ki||(Ki=C([`
  mutation CreateSetDispatcherTypedData(
    $request: SetDispatcherRequest!
    $options: TypedDataOptions
  ) {
    result: createSetDispatcherTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          SetDispatcherWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          dispatcher
        }
      }
    }
  }
`]))),mg=S(es||(es=C([`
  mutation CreateFollowTypedData($request: FollowRequest!, $options: TypedDataOptions) {
    result: createFollowTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          FollowWithSig {
            name
            type
          }
        }
        domain {
          ...EIP712TypedDataDomain
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
  }
  `,`
`])),St),vg=S(ts||(ts=C([`
  mutation CreateUnfollowTypedData($request: UnfollowRequest!, $options: TypedDataOptions) {
    result: createUnfollowTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          BurnWithSig {
            name
            type
          }
        }
        domain {
          ...EIP712TypedDataDomain
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
  }
  `,`
`])),St),gg=S(ns||(ns=C([`
  mutation CreateSetFollowModuleTypedData(
    $request: CreateSetFollowModuleRequest!
    $options: TypedDataOptions
  ) {
    result: createSetFollowModuleTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          SetFollowModuleWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          followModule
          followModuleInitData
        }
      }
    }
  }
`]))),yg=S(rs||(rs=C([`
  mutation CreateSetFollowNFTUriTypedData(
    $request: CreateSetFollowNFTUriRequest!
    $options: TypedDataOptions
  ) {
    result: createSetFollowNFTUriTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          SetFollowNFTURIWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          profileId
          deadline
          followNFTURI
        }
      }
    }
  }
`]))),wg=S(as||(as=C([`
  mutation AddProfileInterest($request: AddProfileInterestsRequest!) {
    addProfileInterests(request: $request)
  }
`]))),_g=S(is||(is=C([`
  mutation RemoveProfileInterest($request: RemoveProfileInterestsRequest!) {
    removeProfileInterests(request: $request)
  }
`]))),bg=S(ss||(ss=C([`
  mutation DismissRecommendedProfiles($request: DismissRecommendedProfilesRequest!) {
    dismissRecommendedProfiles(request: $request)
  }
`]))),kg=function(e,n,r){return e()},Tg=A(Jv),Eg=A(Qv),Sg=A(Xv),Cg=A(Kv),Dg=A(eg),Ng=A(tg),Ig=A(ng),Pg=A(rg),Og=A(ag),Ag=A(ig),Rg=A(sg),$g=A(og),Mg=A(ug),Fg=A(lg),qg=A(cg),xg=A(fg),Lg=A(dg),jg=A(pg),Ug=A(hg),Vg=A(mg),Bg=A(vg),Gg=A(gg),Hg=A(yg),Zg=A(wg),Wg=A(_g),zg=A(bg);function Yg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:kg;return{Profile:function(r,a){return e(function(i){return t.rawRequest(Tg,r,E(E({},a),i))},"Profile","query")},ProfileStats:function(r,a){return e(function(i){return t.rawRequest(Eg,r,E(E({},a),i))},"ProfileStats","query")},Profiles:function(r,a){return e(function(i){return t.rawRequest(Sg,r,E(E({},a),i))},"Profiles","query")},RecommendedProfiles:function(r,a){return e(function(i){return t.rawRequest(Cg,r,E(E({},a),i))},"RecommendedProfiles","query")},MutualFollowersProfiles:function(r,a){return e(function(i){return t.rawRequest(Dg,r,E(E({},a),i))},"MutualFollowersProfiles","query")},DoesFollow:function(r,a){return e(function(i){return t.rawRequest(Ng,r,E(E({},a),i))},"DoesFollow","query")},Following:function(r,a){return e(function(i){return t.rawRequest(Ig,r,E(E({},a),i))},"Following","query")},Followers:function(r,a){return e(function(i){return t.rawRequest(Pg,r,E(E({},a),i))},"Followers","query")},FollowerNftOwnedTokenIds:function(r,a){return e(function(i){return t.rawRequest(Og,r,E(E({},a),i))},"FollowerNftOwnedTokenIds","query")},PendingApprovalFollows:function(r,a){return e(function(i){return t.rawRequest(Ag,r,E(E({},a),i))},"PendingApprovalFollows","query")},ProfileInterests:function(r,a){return e(function(i){return t.rawRequest(Rg,r,E(E({},a),i))},"ProfileInterests","query")},CreateProfile:function(r,a){return e(function(i){return t.rawRequest($g,r,E(E({},a),i))},"CreateProfile","mutation")},CreateBurnProfileTypedData:function(r,a){return e(function(i){return t.rawRequest(Mg,r,E(E({},a),i))},"CreateBurnProfileTypedData","mutation")},CreateSetDefaultProfileTypedData:function(r,a){return e(function(i){return t.rawRequest(Fg,r,E(E({},a),i))},"CreateSetDefaultProfileTypedData","mutation")},CreateSetProfileImageURITypedData:function(r,a){return e(function(i){return t.rawRequest(qg,r,E(E({},a),i))},"CreateSetProfileImageURITypedData","mutation")},CreateSetProfileImageURIViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(xg,r,E(E({},a),i))},"CreateSetProfileImageURIViaDispatcher","mutation")},CreateSetProfileMetadataTypedData:function(r,a){return e(function(i){return t.rawRequest(Lg,r,E(E({},a),i))},"CreateSetProfileMetadataTypedData","mutation")},CreateSetProfileMetadataViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(jg,r,E(E({},a),i))},"CreateSetProfileMetadataViaDispatcher","mutation")},CreateSetDispatcherTypedData:function(r,a){return e(function(i){return t.rawRequest(Ug,r,E(E({},a),i))},"CreateSetDispatcherTypedData","mutation")},CreateFollowTypedData:function(r,a){return e(function(i){return t.rawRequest(Vg,r,E(E({},a),i))},"CreateFollowTypedData","mutation")},CreateUnfollowTypedData:function(r,a){return e(function(i){return t.rawRequest(Bg,r,E(E({},a),i))},"CreateUnfollowTypedData","mutation")},CreateSetFollowModuleTypedData:function(r,a){return e(function(i){return t.rawRequest(Gg,r,E(E({},a),i))},"CreateSetFollowModuleTypedData","mutation")},CreateSetFollowNFTUriTypedData:function(r,a){return e(function(i){return t.rawRequest(Hg,r,E(E({},a),i))},"CreateSetFollowNFTUriTypedData","mutation")},AddProfileInterest:function(r,a){return e(function(i){return t.rawRequest(Zg,r,E(E({},a),i))},"AddProfileInterest","mutation")},RemoveProfileInterest:function(r,a){return e(function(i){return t.rawRequest(Wg,r,E(E({},a),i))},"RemoveProfileInterest","mutation")},DismissRecommendedProfiles:function(r,a){return e(function(i){return t.rawRequest(zg,r,E(E({},a),i))},"DismissRecommendedProfiles","mutation")}}}var Jg=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Yg(r),this.authentication=n}return ae(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.Profile({request:a,observerId:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"stats",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){var p,h;return d().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,o.sdk.ProfileStats({request:a,sources:i},f);case 2:return h=T.sent,T.abrupt("return",(p=h.data.result)===null||p===void 0?void 0:p.stats);case 4:case"end":return T.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"fetchAll",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Profiles({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allRecommended",value:function(){var e=y(d().mark(function r(){var a=this,i,o,s=arguments;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=s.length>0&&s[0]!==void 0?s[0]:{},o=s.length>1?s[1]:void 0,l.abrupt("return",te(this.authentication,function(){var c=y(d().mark(function f(p){var h;return d().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,a.sdk.RecommendedProfiles({options:i,observerId:o},p);case 2:return h=T.sent,T.abrupt("return",h.data.result);case 4:case"end":return T.stop()}},f)}));return function(f){return c.apply(this,arguments)}}()));case 3:case"end":return l.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"dismissRecommended",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.DismissRecommendedProfiles({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"mutualFollowers",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.MutualFollowersProfiles({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"doesFollow",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.DoesFollow({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"allFollowing",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Following({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allFollowers",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Followers({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"followerNftOwnedTokenIds",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.FollowerNftOwnedTokenIds({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"create",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateProfile({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createSetDispatcherTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetDispatcherTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetDefaultProfileTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetDefaultProfileTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetProfileMetadataTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetProfileMetadataTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetProfileMetadataViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateSetProfileMetadataViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createSetProfileImageURITypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetProfileImageURITypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetProfileImageURIViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateSetProfileImageURIViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createBurnProfileTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateBurnProfileTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createFollowTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateFollowTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createUnfollowTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateUnfollowTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetFollowModuleTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetFollowModuleTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetFollowNFTUriTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetFollowNFTUriTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"pendingApprovalFollows",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.PendingApprovalFollows({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allInterests",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",te(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.ProfileInterests({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"addInterests",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.AddProfileInterest({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"removeInterests",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.RemoveProfileInterest({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),os;(function(t){t.AlreadyClaimed="ALREADY_CLAIMED",t.ClaimFailed="CLAIM_FAILED",t.NotClaimed="NOT_CLAIMED"})(os||(os={}));var us;(function(t){t.AaveFeeCollectModule="AaveFeeCollectModule",t.Erc4626FeeCollectModule="ERC4626FeeCollectModule",t.FeeCollectModule="FeeCollectModule",t.FreeCollectModule="FreeCollectModule",t.LimitedFeeCollectModule="LimitedFeeCollectModule",t.LimitedTimedFeeCollectModule="LimitedTimedFeeCollectModule",t.MultirecipientFeeCollectModule="MultirecipientFeeCollectModule",t.RevertCollectModule="RevertCollectModule",t.TimedFeeCollectModule="TimedFeeCollectModule",t.UnknownCollectModule="UnknownCollectModule"})(us||(us={}));var ls;(function(t){t.Desc="DESC",t.Ranking="RANKING"})(ls||(ls={}));var cs;(function(t){t.NoneRelevant="NONE_RELEVANT",t.Relevant="RELEVANT"})(cs||(cs={}));var fs;(function(t){t.Erc20="ERC20",t.Erc721="ERC721",t.Erc1155="ERC1155"})(fs||(fs={}));var ds;(function(t){t.Gardeners="GARDENERS"})(ds||(ds={}));var ps;(function(t){t.CanNotDecrypt="CAN_NOT_DECRYPT",t.CollectNotFinalisedOnChain="COLLECT_NOT_FINALISED_ON_CHAIN",t.DoesNotFollowProfile="DOES_NOT_FOLLOW_PROFILE",t.DoesNotOwnNft="DOES_NOT_OWN_NFT",t.DoesNotOwnProfile="DOES_NOT_OWN_PROFILE",t.FollowNotFinalisedOnChain="FOLLOW_NOT_FINALISED_ON_CHAIN",t.HasNotCollectedPublication="HAS_NOT_COLLECTED_PUBLICATION",t.MissingEncryptionParams="MISSING_ENCRYPTION_PARAMS",t.ProfileDoesNotExist="PROFILE_DOES_NOT_EXIST",t.UnauthorizedAddress="UNAUTHORIZED_ADDRESS",t.UnauthorizedBalance="UNAUTHORIZED_BALANCE"})(ps||(ps={}));var hs;(function(t){t.LitProtocol="LIT_PROTOCOL"})(hs||(hs={}));var ms;(function(t){t.CollectComment="COLLECT_COMMENT",t.CollectPost="COLLECT_POST",t.Comment="COMMENT",t.Mirror="MIRROR",t.Post="POST",t.ReactionComment="REACTION_COMMENT",t.ReactionPost="REACTION_POST"})(ms||(ms={}));var vs;(function(t){t.FeeFollowModule="FeeFollowModule",t.ProfileFollowModule="ProfileFollowModule",t.RevertFollowModule="RevertFollowModule",t.UnknownFollowModule="UnknownFollowModule"})(vs||(vs={}));var gs;(function(t){t.AlreadyVerified="ALREADY_VERIFIED",t.Success="SUCCESS"})(gs||(gs={}));var ys;(function(t){t.CollectedComment="COLLECTED_COMMENT",t.CollectedPost="COLLECTED_POST",t.CommentedComment="COMMENTED_COMMENT",t.CommentedPost="COMMENTED_POST",t.Followed="FOLLOWED",t.MentionComment="MENTION_COMMENT",t.MentionPost="MENTION_POST",t.MirroredComment="MIRRORED_COMMENT",t.MirroredPost="MIRRORED_POST",t.ReactionComment="REACTION_COMMENT",t.ReactionPost="REACTION_POST"})(ys||(ys={}));var ws;(function(t){t.CreatedOn="CREATED_ON",t.LatestCreated="LATEST_CREATED",t.MostCollects="MOST_COLLECTS",t.MostComments="MOST_COMMENTS",t.MostFollowers="MOST_FOLLOWERS",t.MostMirrors="MOST_MIRRORS",t.MostPosts="MOST_POSTS",t.MostPublication="MOST_PUBLICATION"})(ws||(ws={}));var kr;(function(t){t.Complete="COMPLETE",t.Minting="MINTING",t.Transferring="TRANSFERRING"})(kr||(kr={}));var _s;(function(t){t.Nsfw="NSFW",t.Sensitive="SENSITIVE",t.Spoiler="SPOILER"})(_s||(_s={}));var bs;(function(t){t.Article="ARTICLE",t.Audio="AUDIO",t.Embed="EMBED",t.Image="IMAGE",t.Link="LINK",t.TextOnly="TEXT_ONLY",t.Video="VIDEO"})(bs||(bs={}));var ks;(function(t){t.Lens="LENS"})(ks||(ks={}));var Ts;(function(t){t.Date="date",t.Number="number",t.String="string"})(Ts||(Ts={}));var Es;(function(t){t.MetadataValidationFailed="METADATA_VALIDATION_FAILED",t.NotFound="NOT_FOUND",t.Pending="PENDING",t.Success="SUCCESS"})(Es||(Es={}));var Ss;(function(t){t.Impersonation="IMPERSONATION",t.Scam="SCAM"})(Ss||(Ss={}));var Cs;(function(t){t.AnimalAbuse="ANIMAL_ABUSE",t.DirectThreat="DIRECT_THREAT",t.HumanAbuse="HUMAN_ABUSE",t.ThreatIndividual="THREAT_INDIVIDUAL",t.Violence="VIOLENCE"})(Cs||(Cs={}));var Ds;(function(t){t.Fraud="FRAUD",t.Illegal="ILLEGAL",t.Sensitive="SENSITIVE",t.Spam="SPAM"})(Ds||(Ds={}));var Ns;(function(t){t.Nsfw="NSFW",t.Offensive="OFFENSIVE"})(Ns||(Ns={}));var Is;(function(t){t.FakeEngagement="FAKE_ENGAGEMENT",t.ManipulationAlgo="MANIPULATION_ALGO",t.Misleading="MISLEADING",t.MisuseHashtags="MISUSE_HASHTAGS",t.Repetitive="REPETITIVE",t.SomethingElse="SOMETHING_ELSE",t.Unrelated="UNRELATED"})(Is||(Is={}));var Ps;(function(t){t.CuratedProfiles="CURATED_PROFILES",t.Latest="LATEST",t.TopCollected="TOP_COLLECTED",t.TopCommented="TOP_COMMENTED",t.TopMirrored="TOP_MIRRORED"})(Ps||(Ps={}));var At;(function(t){t.Comment="COMMENT",t.Mirror="MIRROR",t.Post="POST"})(At||(At={}));var Os;(function(t){t.Downvote="DOWNVOTE",t.Upvote="UPVOTE"})(Os||(Os={}));var As;(function(t){t.DegreesOfSeparationReferenceModule="DegreesOfSeparationReferenceModule",t.FollowerOnlyReferenceModule="FollowerOnlyReferenceModule",t.UnknownReferenceModule="UnknownReferenceModule"})(As||(As={}));var Rs;(function(t){t.Expired="EXPIRED",t.HandleTaken="HANDLE_TAKEN",t.NotAllowed="NOT_ALLOWED",t.Rejected="REJECTED",t.WrongWalletSigned="WRONG_WALLET_SIGNED"})(Rs||(Rs={}));var $s;(function(t){t.Equal="EQUAL",t.GreaterThan="GREATER_THAN",t.GreaterThanOrEqual="GREATER_THAN_OR_EQUAL",t.LessThan="LESS_THAN",t.LessThanOrEqual="LESS_THAN_OR_EQUAL",t.NotEqual="NOT_EQUAL"})($s||($s={}));var Ms;(function(t){t.Profile="PROFILE",t.Publication="PUBLICATION"})(Ms||(Ms={}));var Fs;(function(t){t.Alphabetical="ALPHABETICAL",t.MostPopular="MOST_POPULAR"})(Fs||(Fs={}));var qs;(function(t){t.Reverted="REVERTED"})(qs||(qs={}));var xs;(function(t){t.Orb="ORB",t.Phone="PHONE"})(xs||(xs={}));var Ls,js,Us,Vs,Bs,Qg=S(Ls||(Ls=C([`
  fragment ProxyActionStatusResult on ProxyActionStatusResult {
    __typename
    txHash
    txId
    status
  }
`]))),Xg=S(js||(js=C([`
  fragment ProxyActionError on ProxyActionError {
    __typename
    reason
    lastKnownTxId
  }
`]))),Kg=S(Us||(Us=C([`
  fragment ProxyActionQueued on ProxyActionQueued {
    __typename
    queuedAt
  }
`]))),ey=S(Vs||(Vs=C([`
  query ProxyActionStatus($proxyActionId: ProxyActionId!) {
    result: proxyActionStatus(proxyActionId: $proxyActionId) {
      ... on ProxyActionStatusResult {
        ...ProxyActionStatusResult
      }
      ... on ProxyActionError {
        ...ProxyActionError
      }
      ... on ProxyActionQueued {
        ...ProxyActionQueued
      }
    }
  }
  `,`
  `,`
  `,`
`])),Qg,Xg,Kg),ty=S(Bs||(Bs=C([`
  mutation ProxyAction($request: ProxyActionRequest!) {
    result: proxyAction(request: $request)
  }
`]))),ny=function(e,n,r){return e()},ry=A(ey),ay=A(ty);function iy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ny;return{ProxyActionStatus:function(r,a){return e(function(i){return t.rawRequest(ry,r,E(E({},a),i))},"ProxyActionStatus","query")},ProxyAction:function(r,a){return e(function(i){return t.rawRequest(ay,r,E(E({},a),i))},"ProxyAction","mutation")}}}function sy(t){return t.__typename==="ProxyActionStatusResult"}var oy=function(t){an(n,t);var e=sn(n);function n(){var r;re(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),xe(qe(r),"name","StatusPollingError"),xe(qe(r),"message","Max attempts exceeded"),r}return ae(n)}(ot(Error)),uy=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=iy(r),this.authentication=n}return ae(t,[{key:"freeFollow",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProxyAction({request:{follow:{freeFollow:{profileId:a}}}},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"freeCollect",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProxyAction({request:{collect:{freeCollect:{publicationId:a}}}},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"checkStatus",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProxyActionStatus({proxyActionId:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"waitForStatusComplete",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ku({fn:function(){return i.checkStatus(a)},validate:function(l){if(l.isSuccess()){var c=l.value;if(sy(c))return c.status===kr.Complete}return!0},onMaxAttempts:function(){return new oy}}));case 1:case"end":return s.stop()}},r)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),Gs,Hs,Zs,Ws,zs,Ys,Js,Qs,Xs,Ks,eo,to,no,ro,ao,io,so,oo,ly=S(Gs||(Gs=C([`
  fragment PublicationStats on PublicationStats {
    __typename
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
    totalUpvotes
    totalDownvotes
    commentsTotal(forSources: $sources)
  }
`]))),cy=S(Hs||(Hs=C([`
  query Publication($request: PublicationQueryRequest!, $observerId: ProfileId) {
    result: publication(request: $request) {
      ... on Post {
        ...Post
      }
      ... on Mirror {
        ...Mirror
      }
      ... on Comment {
        ...Comment
      }
    }
  }
  `,`
  `,`
  `,`
`])),Ce,ut,De),fy=S(Zs||(Zs=C([`
  query PublicationStats($request: PublicationQueryRequest!, $sources: [Sources!]!) {
    result: publication(request: $request) {
      ... on Post {
        stats {
          ...PublicationStats
        }
      }
      ... on Mirror {
        stats {
          ...PublicationStats
        }
      }
      ... on Comment {
        stats {
          ...PublicationStats
        }
      }
    }
  }
  `,`
`])),ly),dy=S(Ws||(Ws=C([`
  query Publications($request: PublicationsQueryRequest!, $observerId: ProfileId) {
    result: publications(request: $request) {
      items {
        ... on Post {
          ...Post
        }
        ... on Mirror {
          ...Mirror
        }
        ... on Comment {
          ...Comment
        }
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
  `,`
  `,`
`])),Ce,ut,De,he),py=S(zs||(zs=C([`
  query ValidatePublicationMetadata($metadata: PublicationMetadataV2Input!) {
    validatePublicationMetadata(request: { metadatav2: $metadata }) {
      __typename
      valid
      reason
    }
  }
`]))),hy=S(Ys||(Ys=C([`
  query WhoCollectedPublication($request: WhoCollectedPublicationRequest!, $observerId: ProfileId) {
    result: whoCollectedPublication(request: $request) {
      items {
        ...Wallet
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),Ct,he),my=S(Js||(Js=C([`
  query ProfilePublicationsForSale(
    $request: ProfilePublicationsForSaleRequest!
    $observerId: ProfileId
  ) {
    result: profilePublicationsForSale(request: $request) {
      items {
        ... on Post {
          ...Post
        }
        ... on Comment {
          ...Comment
        }
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
  `,`
`])),Ce,De,he),vy=S(Qs||(Qs=C([`
  query PublicationMetadataStatus($request: GetPublicationMetadataStatusRequest!) {
    result: publicationMetadataStatus(request: $request) {
      __typename
      reason
      status
    }
  }
`]))),gy=S(Xs||(Xs=C([`
  mutation CreatePostTypedData($request: CreatePublicPostRequest!, $options: TypedDataOptions) {
    result: createPostTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
        domain {
          ...EIP712TypedDataDomain
        }
        value {
          nonce
          deadline
          profileId
          contentURI
          collectModule
          collectModuleInitData
          referenceModule
          referenceModuleInitData
        }
      }
    }
  }
  `,`
`])),St),yy=S(Ks||(Ks=C([`
  mutation CreatePostViaDispatcher($request: CreatePublicPostRequest!) {
    result: createPostViaDispatcher(request: $request) {
      ... on RelayerResult {
        ...RelayerResult
      }
      ... on RelayError {
        ...RelayError
      }
    }
  }
  `,`
  `,`
`])),lt,ct),wy=S(eo||(eo=C([`
  mutation CreateCommentTypedData(
    $request: CreatePublicCommentRequest!
    $options: TypedDataOptions
  ) {
    result: createCommentTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          CommentWithSig {
            name
            type
          }
        }
        domain {
          ...EIP712TypedDataDomain
        }
        value {
          nonce
          deadline
          profileId
          contentURI
          profileIdPointed
          pubIdPointed
          collectModule
          collectModuleInitData
          referenceModuleData
          referenceModule
          referenceModuleInitData
        }
      }
    }
  }
  `,`
`])),St),_y=S(to||(to=C([`
  mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {
    result: createCommentViaDispatcher(request: $request) {
      ... on RelayerResult {
        ...RelayerResult
      }
      ... on RelayError {
        ...RelayError
      }
    }
  }
  `,`
  `,`
`])),lt,ct),by=S(no||(no=C([`
  mutation CreateMirrorTypedData($request: CreateMirrorRequest!, $options: TypedDataOptions) {
    result: createMirrorTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          MirrorWithSig {
            name
            type
          }
        }
        domain {
          ...EIP712TypedDataDomain
        }
        value {
          nonce
          deadline
          profileId
          profileIdPointed
          pubIdPointed
          referenceModuleData
          referenceModule
          referenceModuleInitData
        }
      }
    }
  }
  `,`
`])),St),ky=S(ro||(ro=C([`
  mutation CreateMirrorViaDispatcher($request: CreateMirrorRequest!) {
    result: createMirrorViaDispatcher(request: $request) {
      ... on RelayerResult {
        ...RelayerResult
      }
      ... on RelayError {
        ...RelayError
      }
    }
  }
  `,`
  `,`
`])),lt,ct),Ty=S(ao||(ao=C([`
  mutation CreateCollectTypedData($request: CreateCollectRequest!, $options: TypedDataOptions) {
    result: createCollectTypedData(request: $request, options: $options) {
      id
      expiresAt
      typedData {
        types {
          CollectWithSig {
            name
            type
          }
        }
        domain {
          ...EIP712TypedDataDomain
        }
        value {
          nonce
          deadline
          profileId
          pubId
          data
        }
      }
    }
  }
  `,`
`])),St),Ey=S(io||(io=C([`
  mutation CreateAttachMediaData($request: PublicMediaRequest!) {
    result: createAttachMediaData(request: $request) {
      media {
        altTag
        cover
        item
        source
        type
      }
      signedUrl
    }
  }
`]))),Sy=S(so||(so=C([`
  mutation HidePublication($request: HidePublicationRequest!) {
    hidePublication(request: $request)
  }
`]))),Cy=S(oo||(oo=C([`
  mutation ReportPublication($request: ReportPublicationRequest!) {
    reportPublication(request: $request)
  }
`]))),Dy=function(e,n,r){return e()},Ny=A(cy),Iy=A(fy),Py=A(dy),Oy=A(py),Ay=A(hy),Ry=A(my),$y=A(vy),My=A(gy),Fy=A(yy),qy=A(wy),xy=A(_y),Ly=A(by),jy=A(ky),Uy=A(Ty),Vy=A(Ey),By=A(Sy),Gy=A(Cy);function Hy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Dy;return{Publication:function(r,a){return e(function(i){return t.rawRequest(Ny,r,E(E({},a),i))},"Publication","query")},PublicationStats:function(r,a){return e(function(i){return t.rawRequest(Iy,r,E(E({},a),i))},"PublicationStats","query")},Publications:function(r,a){return e(function(i){return t.rawRequest(Py,r,E(E({},a),i))},"Publications","query")},ValidatePublicationMetadata:function(r,a){return e(function(i){return t.rawRequest(Oy,r,E(E({},a),i))},"ValidatePublicationMetadata","query")},WhoCollectedPublication:function(r,a){return e(function(i){return t.rawRequest(Ay,r,E(E({},a),i))},"WhoCollectedPublication","query")},ProfilePublicationsForSale:function(r,a){return e(function(i){return t.rawRequest(Ry,r,E(E({},a),i))},"ProfilePublicationsForSale","query")},PublicationMetadataStatus:function(r,a){return e(function(i){return t.rawRequest($y,r,E(E({},a),i))},"PublicationMetadataStatus","query")},CreatePostTypedData:function(r,a){return e(function(i){return t.rawRequest(My,r,E(E({},a),i))},"CreatePostTypedData","mutation")},CreatePostViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(Fy,r,E(E({},a),i))},"CreatePostViaDispatcher","mutation")},CreateCommentTypedData:function(r,a){return e(function(i){return t.rawRequest(qy,r,E(E({},a),i))},"CreateCommentTypedData","mutation")},CreateCommentViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(xy,r,E(E({},a),i))},"CreateCommentViaDispatcher","mutation")},CreateMirrorTypedData:function(r,a){return e(function(i){return t.rawRequest(Ly,r,E(E({},a),i))},"CreateMirrorTypedData","mutation")},CreateMirrorViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(jy,r,E(E({},a),i))},"CreateMirrorViaDispatcher","mutation")},CreateCollectTypedData:function(r,a){return e(function(i){return t.rawRequest(Uy,r,E(E({},a),i))},"CreateCollectTypedData","mutation")},CreateAttachMediaData:function(r,a){return e(function(i){return t.rawRequest(Vy,r,E(E({},a),i))},"CreateAttachMediaData","mutation")},HidePublication:function(r,a){return e(function(i){return t.rawRequest(By,r,E(E({},a),i))},"HidePublication","mutation")},ReportPublication:function(r,a){return e(function(i){return t.rawRequest(Gy,r,E(E({},a),i))},"ReportPublication","mutation")}}}var Zy=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Hy(r),this.authentication=n}return ae(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.Publication({request:a,observerId:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"stats",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){var p,h;return d().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,o.sdk.PublicationStats({request:a,sources:i},f);case 2:return h=T.sent,T.abrupt("return",(p=h.data.result)===null||p===void 0?void 0:p.stats);case 4:case"end":return T.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"validateMetadata",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ValidatePublicationMetadata({metadata:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.validatePublicationMetadata);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"metadataStatus",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.PublicationMetadataStatus({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"fetchAll",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Publications({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allWalletsWhoCollected",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.WhoCollectedPublication({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allForSale",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ProfilePublicationsForSale({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createPostTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreatePostTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createPostViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreatePostViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createCommentTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateCommentTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createCommentViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateCommentViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createMirrorTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateMirrorTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createMirrorViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateMirrorViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createCollectTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",H(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateCollectTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createAttachMediaData",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateAttachMediaData({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"hide",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.HidePublication({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"report",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.ReportPublication({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),uo;(function(t){t.ANIMAL_ABUSE="ANIMAL_ABUSE",t.HARASSMENT="HARASSMENT",t.VIOLENCE="VIOLENCE",t.SELF_HARM="SELF_HARM",t.DIRECT_THREAT="DIRECT_THREAT",t.HATE_SPEECH="HATE_SPEECH",t.NUDITY="NUDITY",t.OFFENSIVE="OFFENSIVE",t.SCAM="SCAM",t.UNAUTHORIZED_SALE="UNAUTHORIZED_SALE",t.IMPERSONATION="IMPERSONATION",t.MISLEADING="MISLEADING",t.MISUSE_HASHTAGS="MISUSE_HASHTAGS",t.UNRELATED="UNRELATED",t.REPETITIVE="REPETITIVE",t.FAKE_ENGAGEMENT="FAKE_ENGAGEMENT",t.MANIPULATION_ALGO="MANIPULATION_ALGO",t.SOMETHING_ELSE="SOMETHING_ELSE"})(uo||(uo={}));var lo,co,fo,po,Wy=S(lo||(lo=C([`
  fragment WhoReactedResult on WhoReactedResult {
    __typename
    reactionId
    reaction
    reactionAt
    profile {
      ...Profile
    }
  }
  `,`
`])),ce),zy=S(co||(co=C([`
  mutation AddReaction($request: ReactionRequest!) {
    addReaction(request: $request)
  }
`]))),Yy=S(fo||(fo=C([`
  mutation RemoveReaction($request: ReactionRequest!) {
    removeReaction(request: $request)
  }
`]))),Jy=S(po||(po=C([`
  query WhoReactedPublication($request: WhoReactedPublicationRequest!, $observerId: ProfileId) {
    result: whoReactedPublication(request: $request) {
      items {
        ...WhoReactedResult
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),Wy,he),Qy=function(e,n,r){return e()},Xy=A(zy),Ky=A(Yy),ew=A(Jy);function tw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qy;return{AddReaction:function(r,a){return e(function(i){return t.rawRequest(Xy,r,E(E({},a),i))},"AddReaction","mutation")},RemoveReaction:function(r,a){return e(function(i){return t.rawRequest(Ky,r,E(E({},a),i))},"RemoveReaction","mutation")},WhoReactedPublication:function(r,a){return e(function(i){return t.rawRequest(ew,r,E(E({},a),i))},"WhoReactedPublication","query")}}}var nw=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=tw(r),this.authentication=n}return ae(t,[{key:"add",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.AddReaction({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"remove",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.RemoveReaction({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"toPublication",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.WhoReactedPublication({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),ho,mo,vo,go,yo,qu=S(ho||(ho=C([`
  fragment RevenueAggregate on RevenueAggregate {
    __typename
    total {
      ...Erc20Amount
    }
  }
  `,`
`])),Tm),xu=S(mo||(mo=C([`
  fragment PublicationRevenue on PublicationRevenue {
    __typename
    publication {
      ... on Post {
        ...Post
      }
      ... on Mirror {
        ...Mirror
      }
      ... on Comment {
        ...Comment
      }
    }
    revenue {
      ...RevenueAggregate
    }
  }
  `,`
  `,`
  `,`
  `,`
`])),Ce,ut,De,qu),rw=S(vo||(vo=C([`
  query ProfilePublicationRevenue(
    $request: ProfilePublicationRevenueQueryRequest!
    $observerId: ProfileId
  ) {
    result: profilePublicationRevenue(request: $request) {
      items {
        ...PublicationRevenue
      }
      pageInfo {
        ...CommonPaginatedResultInfo
      }
    }
  }
  `,`
  `,`
`])),xu,he),aw=S(go||(go=C([`
  query PublicationRevenue($request: PublicationRevenueQueryRequest!, $observerId: ProfileId) {
    result: publicationRevenue(request: $request) {
      ...PublicationRevenue
    }
  }
  `,`
`])),xu),iw=S(yo||(yo=C([`
  query ProfileFollowRevenue($request: ProfileFollowRevenueQueryRequest!) {
    result: profileFollowRevenue(request: $request) {
      revenues {
        ...RevenueAggregate
      }
    }
  }
  `,`
`])),qu),sw=function(e,n,r){return e()},ow=A(rw),uw=A(aw),lw=A(iw);function cw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sw;return{ProfilePublicationRevenue:function(r,a){return e(function(i){return t.rawRequest(ow,r,E(E({},a),i))},"ProfilePublicationRevenue","query")},PublicationRevenue:function(r,a){return e(function(i){return t.rawRequest(uw,r,E(E({},a),i))},"PublicationRevenue","query")},ProfileFollowRevenue:function(r,a){return e(function(i){return t.rawRequest(lw,r,E(E({},a),i))},"ProfileFollowRevenue","query")}}}var fw=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=cw(r),this.authentication=n}return ae(t,[{key:"profilePublication",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",le(function(){var v=y(d().mark(function T(P){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ProfilePublicationRevenue({request:P,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"profileFollow",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProfileFollowRevenue({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result.revenues);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"publication",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",te(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.PublicationRevenue({request:a,observerId:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),wo,_o,dw=S(wo||(wo=C([`
  query SearchPublications(
    $limit: LimitScalar
    $cursor: Cursor
    $query: Search!
    $sources: [Sources!]
    $observerId: ProfileId
  ) {
    result: search(
      request: {
        query: $query
        type: PUBLICATION
        limit: $limit
        cursor: $cursor
        sources: $sources
      }
    ) {
      ... on PublicationSearchResult {
        __typename
        items {
          ... on Post {
            ...Post
          }
          ... on Comment {
            ...Comment
          }
        }
        pageInfo {
          ...CommonPaginatedResultInfo
        }
      }
      ... on ProfileSearchResult {
        __typename
      }
    }
  }
  `,`
  `,`
  `,`
`])),Ce,De,he),pw=S(_o||(_o=C([`
  query SearchProfiles(
    $limit: LimitScalar!
    $cursor: Cursor
    $query: Search!
    $observerId: ProfileId
  ) {
    result: search(request: { query: $query, type: PROFILE, limit: $limit, cursor: $cursor }) {
      ... on ProfileSearchResult {
        __typename
        items {
          ...Profile
        }
        pageInfo {
          ...CommonPaginatedResultInfo
        }
      }
      ... on PublicationSearchResult {
        __typename
      }
    }
  }
  `,`
  `,`
`])),ce,he),hw=function(e,n,r){return e()},mw=A(dw),vw=A(pw);function gw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hw;return{SearchPublications:function(r,a){return e(function(i){return t.rawRequest(mw,r,E(E({},a),i))},"SearchPublications","query")},SearchProfiles:function(r,a){return e(function(i){return t.rawRequest(vw,r,E(E({},a),i))},"SearchProfiles","query")}}}var yw=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=gw(r),this.authentication=n}return ae(t,[{key:"profiles",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",le(function(){var h=y(d().mark(function v(T){var P,I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,i.sdk.SearchProfiles(T,c);case 2:return P=k.sent,I=P.data.result,qt(I.__typename!=="PublicationSearchResult","PublicationSearchResult is not expected in this query"),k.abrupt("return",I);case 6:case"end":return k.stop()}},v)}));return function(v){return h.apply(this,arguments)}}(),a));case 1:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"publications",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",te(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",le(function(){var h=y(d().mark(function v(T){var P,I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,i.sdk.SearchPublications(T,c);case 2:return P=k.sent,I=P.data.result,qt(I.__typename!=="ProfileSearchResult","ProfileSearchResult is not expected in this query"),k.abrupt("return",I);case 6:case"end":return k.stop()}},v)}));return function(v){return h.apply(this,arguments)}}(),a));case 1:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),bo,ww=S(bo||(bo=C([`
  query GlobalProtocolStats($request: GlobalProtocolStatsRequest) {
    result: globalProtocolStats(request: $request) {
      totalProfiles
      totalBurntProfiles
      totalPosts
      totalMirrors
      totalComments
      totalCollects
      totalFollows
      totalRevenue {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
    }
  }
`]))),_w=function(e,n,r){return e()},bw=A(ww);function kw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_w;return{GlobalProtocolStats:function(r,a){return e(function(i){return t.rawRequest(bw,r,E(E({},a),i))},"GlobalProtocolStats","query")}}}var Tw=function(){function t(e){re(this,t);var n=new Ee(e.environment.gqlEndpoint);this.sdk=kw(n)}return ae(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a){var i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.sdk.GlobalProtocolStats({request:a});case 2:return i=s.sent,s.abrupt("return",i.data.result);case 4:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),ko,To,Eo,So,Ew=S(ko||(ko=C([`
  fragment TransactionIndexedResult on TransactionIndexedResult {
    __typename
    indexed
    txHash
  }
`]))),Sw=S(To||(To=C([`
  fragment TransactionError on TransactionError {
    __typename
    reason
  }
`]))),Cw=S(Eo||(Eo=C([`
  query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
    result: hasTxHashBeenIndexed(request: $request) {
      ... on TransactionIndexedResult {
        ...TransactionIndexedResult
      }
      ... on TransactionError {
        ...TransactionError
      }
    }
  }
  `,`
  `,`
`])),Ew,Sw),Dw=S(So||(So=C([`
  mutation BroadcastProtocolCall($request: BroadcastRequest!) {
    result: broadcast(request: $request) {
      ... on RelayerResult {
        ...RelayerResult
      }
      ... on RelayError {
        ...RelayError
      }
    }
  }
  `,`
  `,`
`])),lt,ct),Nw=function(e,n,r){return e()},Iw=A(Cw),Pw=A(Dw);function Ow(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nw;return{HasTxHashBeenIndexed:function(r,a){return e(function(i){return t.rawRequest(Iw,r,E(E({},a),i))},"HasTxHashBeenIndexed","query")},BroadcastProtocolCall:function(r,a){return e(function(i){return t.rawRequest(Pw,r,E(E({},a),i))},"BroadcastProtocolCall","mutation")}}}function Aw(t){return t.__typename==="TransactionIndexedResult"}var Rw=function(t){an(n,t);var e=sn(n);function n(){var r;re(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),xe(qe(r),"name","TransactionPollingError"),xe(qe(r),"message","Max attempts exceeded"),r}return ae(n)}(ot(Error)),$w=function(){function t(e,n){re(this,t);var r=new Ee(e.environment.gqlEndpoint);this.sdk=Ow(r),this.authentication=n}return ae(t,[{key:"broadcast",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.BroadcastProtocolCall({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"wasIndexed",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",H(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.HasTxHashBeenIndexed({request:{txId:a}},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"waitForIsIndexed",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ku({fn:function(){return i.wasIndexed(a)},validate:function(l){if(l.isSuccess()){var c=l.value;if(Aw(c))return c.indexed}return!0},onMaxAttempts:function(){return new Rw}}));case 1:case"end":return s.stop()}},r)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),Mw=function(){function t(e){re(this,t),this._authentication=new wm(e),this.config=e}return ae(t,[{key:"authentication",get:function(){return this._authentication}},{key:"explore",get:function(){return new jm(this.config,this._authentication)}},{key:"feed",get:function(){return new Xm(this.config,this._authentication)}},{key:"modules",get:function(){return new dv(this.config,this._authentication)}},{key:"nfts",get:function(){return new Av(this.config,this._authentication)}},{key:"nonces",get:function(){return new qv(this.config,this._authentication)}},{key:"notifications",get:function(){return new zv(this.config,this._authentication)}},{key:"profile",get:function(){return new Jg(this.config,this._authentication)}},{key:"proxyAction",get:function(){return new uy(this.config,this._authentication)}},{key:"publication",get:function(){return new Zy(this.config,this._authentication)}},{key:"reactions",get:function(){return new nw(this.config,this._authentication)}},{key:"revenue",get:function(){return new fw(this.config,this._authentication)}},{key:"search",get:function(){return new yw(this.config,this._authentication)}},{key:"stats",get:function(){return new Tw(this.config)}},{key:"transaction",get:function(){return new $w(this.config,this._authentication)}}]),t}(),Rr=function(){function t(e,n){re(this,t),this.name=e,this.url=n}return ae(t,[{key:"gqlEndpoint",get:function(){return this.url}}]),t}(),Fw=new Rr("production","https://api.lens.dev");new Rr("development","https://api-mumbai.lens.dev");new Rr("sandbox","https://api-sandbox-mumbai.lens.dev");const Tr=new Mw({environment:Fw});async function un(t,e){let n=await Tr.publication.fetchAll({profileId:t,publicationTypes:e,limit:1});return n.items.length>0?n.items[0].createdAt:"-"}const qw=async t=>{const e=await Tr.search.profiles({query:t,limit:1});let n,r,a,i,o,s,u,l,c,f,p,h="link",v="即将上线";if(e.items.length>0){const T=e.items[0];n=T.stats.totalFollowers,r=T.stats.totalFollowing,a=T.stats.totalPosts;const P=await Tr.profile.stats({handle:T.handle},[]);return i=P==null?void 0:P.totalComments,o=P==null?void 0:P.totalMirrors,s=P==null?void 0:P.totalPublications,u=P==null?void 0:P.totalCollects,[l,c,f,p]=await Promise.all([un(T.id,[At.Post]),un(T.id,[At.Comment]),un(T.id,[At.Mirror]),un(T.id,null)]),{total_followers:n,total_following:r,total_posts:a,total_comments:i,total_mirrors:o,total_publications:s,total_collects:u,last_post_datetime:l,last_comment_datetime:c,last_mirror_datetime:f,last_tx_datetime:p,link:h,coming:v}}else return{}},Co=Lu("lens",qw),jw=Uu({__name:"LensView",setup(t){Co();let e="#99CC99",n="#FFFF99",r="#99CC99",a="#FFFF99",i="#99CC99",o=100,s=50;const u=[{title:"#",align:"center",key:"#",width:50,header_style:{backgroundColor:e,fontSize:"20px"},cell_style:{backgroundColor:e}},{title:"Profile ID",align:"left",key:"key",header_style:{backgroundColor:e,fontSize:"20px"},cell_style:{backgroundColor:e}},{title:"别名",align:"left",key:"_alias",width:o,custom:!0,header_style:{backgroundColor:e},cell_style:{backgroundColor:e}},{title:"最后",align:"center",header_style:{backgroundColor:n,fontSize:"20px"},children:[{title:"最后",align:"center",type:"datetime",key:"last_tx_datetime",sort:!0,header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}},{title:"发帖",align:"center",type:"datetime",key:"last_post_datetime",sort:!0,header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}},{title:"评论",align:"center",type:"datetime",key:"last_comment_datetime",sort:!0,header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}},{title:"转发",align:"center",type:"datetime",key:"last_mirror_datetime",sort:!0,header_style:{backgroundColor:n,fontSize:"20px"},cell_style:{backgroundColor:n}}]},{title:"SnapShot投票",align:"center",header_style:{backgroundColor:r,fontSize:"20px"},children:[{title:"Lens-已投",align:"center",key:"coming",sort:!0,header_style:{backgroundColor:r,fontSize:"20px"},cell_style:{backgroundColor:r}},{title:"Lens-可投",align:"center",key:"coming",sort:!0,header_style:{backgroundColor:r,fontSize:"20px"},cell_style:{backgroundColor:r}},{title:"AAVE-已投",align:"center",key:"coming",sort:!0,header_style:{backgroundColor:r,fontSize:"20px"},cell_style:{backgroundColor:r}},{title:"AAVE-可投",align:"center",key:"coming",sort:!0,header_style:{backgroundColor:r,fontSize:"20px"},cell_style:{backgroundColor:r}}]},{title:"统计",align:"center",header_style:{backgroundColor:a,fontSize:"20px"},children:[{title:"粉丝",align:"center",key:"total_followers",width:s,sort:!0,header_style:{backgroundColor:a,fontSize:"20px"},cell_style:function(l,c){try{return c&&c.total_followers==0?{backgroundColor:a,color:a}:{backgroundColor:a}}catch{return{backgroundColor:a}}}},{title:"关注",align:"center",key:"total_following",width:s,sort:!0,header_style:{backgroundColor:a,fontSize:"20px"},cell_style:function(l,c){try{return c&&c.total_following==0?{backgroundColor:a,color:a}:{backgroundColor:a}}catch{return{backgroundColor:a}}}},{title:"收藏",align:"center",key:"total_collects",width:s,sort:!0,header_style:{backgroundColor:a,fontSize:"20px"},cell_style:function(l,c){try{return c&&c.total_collects==0?{backgroundColor:a,color:a}:{backgroundColor:a}}catch{return{backgroundColor:a}}}},{title:"帖子",align:"center",key:"total_posts",width:s,sort:!0,header_style:{backgroundColor:a,fontSize:"20px"},cell_style:function(l,c){try{return c&&c.total_posts==0?{backgroundColor:a,color:a}:{backgroundColor:a}}catch{return{backgroundColor:a}}}},{title:"评论",align:"center",key:"total_comments",width:s,sort:!0,header_style:{backgroundColor:a,fontSize:"20px"},cell_style:function(l,c){try{return c&&c.total_comments==0?{backgroundColor:a,color:a}:{backgroundColor:a}}catch{return{backgroundColor:a}}}},{title:"转发",align:"center",key:"total_mirrors",width:s,sort:!0,header_style:{backgroundColor:a,fontSize:"20px"},cell_style:function(l,c){try{return c&&c.total_mirrors==0?{backgroundColor:a,color:a}:{backgroundColor:a}}catch{return{backgroundColor:a}}}},{title:"发表",align:"center",key:"total_publications",width:s,sort:!0,header_style:{backgroundColor:a,fontSize:"20px"},cell_style:function(l,c){try{return c&&c.total_publications==0?{backgroundColor:a,color:a}:{backgroundColor:a}}catch{return{backgroundColor:a}}}}]},{title:"第3方分析",align:"center",header_style:{backgroundColor:i,fontSize:"20px"},children:[{title:"lenskit.xyz",align:"center",key:"link",width:100,url:"https://profile.lenskit.xyz/{key}",header_style:{backgroundColor:i,fontSize:"20px"},cell_style:{backgroundColor:i,textDecoration:"underline"}},{title:"lenscan.xyz",align:"center",key:"link",width:100,url:"https://lenscan.io/profile/{key}",header_style:{backgroundColor:i,fontSize:"20px"},cell_style:{backgroundColor:i,textDecoration:"underline"}},{title:"dune统计",align:"center",key:"link",width:100,url:"https://dune.com/cortadocasa/lensprotocol",header_style:{backgroundColor:i,fontSize:"20px"},cell_style:{backgroundColor:i,textDecoration:"underline"}}]}];return(l,c)=>(Gu(),Vu(ju,{columns:u,store:Bu(Co)(),"key-label":"Profile ID","page-size":10},null,8,["store"]))}});export{jw as default};
