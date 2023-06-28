import{m as Vu,R as Bu}from"./store-aac00f19.js";import{g as jn,b as At,d as Gu,c as Hu,u as Zu,o as Wu}from"./index-fd869edf.js";import{a as me,g as q,b as se}from"./global-7368f992.js";function zu(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const Dr={parse:JSON.parse,stringify:JSON.stringify};var Yu=function(e){var n=e.uri,r=e.name,a=e.type;this.uri=n,this.name=r,this.type=a},Ju=Yu,Po=function(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob||e instanceof Ju};const Qu=jn(Po);var Xu=Po,Ku=function t(e,n,r){n===void 0&&(n=""),r===void 0&&(r=Xu);var a,i=new Map;function o(c,f){var p=i.get(f);p?p.push.apply(p,c):i.set(f,c)}if(r(e))a=null,o([n],e);else{var s=n?n+".":"";if(typeof FileList<"u"&&e instanceof FileList)a=Array.prototype.map.call(e,function(c,f){return o([""+s+f],c),null});else if(Array.isArray(e))a=e.map(function(c,f){var p=t(c,""+s+f,r);return p.files.forEach(o),p.clone});else if(e&&e.constructor===Object){a={};for(var u in e){var l=t(e[u],""+s+u,r);l.files.forEach(o),a[u]=l.clone}}else a=e}return{clone:a,files:i}};const el=jn(Ku);var tl=typeof self=="object"?self.FormData:window.FormData;const nl=jn(tl),rl=t=>Qu(t)||t!==null&&typeof t=="object"&&typeof t.pipe=="function",al=(t,e,n,r=Dr)=>{const{clone:a,files:i}=el({query:t,variables:e,operationName:n},"",rl);if(i.size===0){if(!Array.isArray(t))return r.stringify(a);if(typeof e<"u"&&!Array.isArray(e))throw new Error("Cannot create request body with given variable type, array expected");const c=t.reduce((f,p,h)=>(f.push({query:p,variables:e?e[h]:void 0}),f),[]);return r.stringify(c)}const o=typeof FormData>"u"?nl:FormData,s=new o;s.append("operations",r.stringify(a));const u={};let l=0;return i.forEach(c=>{u[++l]=c}),s.append("map",r.stringify(u)),l=0,i.forEach((c,f)=>{s.append(`${++l}`,f)}),s},il=t=>t.toUpperCase(),sl=t=>{const e={};return t.forEach((n,r)=>{e[r]=n}),e},ol=(t,e,n)=>t.document?t:{document:t,variables:e,requestHeaders:n,signal:void 0},ul=(t,e,n)=>t.query?t:{query:t,variables:e,requestHeaders:n,signal:void 0},ll=(t,e)=>t.documents?t:{documents:t,requestHeaders:e,signal:void 0};function dn(t,e){if(!!!t)throw new Error(e)}function cl(t){return typeof t=="object"&&t!==null}function fl(t,e){if(!!!t)throw new Error(e??"Unexpected invariant triggered.")}const dl=/\r\n|[\n\r]/g;function tr(t,e){let n=0,r=1;for(const a of t.body.matchAll(dl)){if(typeof a.index=="number"||fl(!1),a.index>=e)break;n=a.index+a[0].length,r+=1}return{line:r,column:e+1-n}}function pl(t){return Oo(t.source,tr(t.source,t.start))}function Oo(t,e){const n=t.locationOffset.column-1,r="".padStart(n)+t.body,a=e.line-1,i=t.locationOffset.line-1,o=e.line+i,s=e.line===1?n:0,u=e.column+s,l=`${t.name}:${o}:${u}
`,c=r.split(/\r\n|[\n\r]/g),f=c[a];if(f.length>120){const p=Math.floor(u/80),h=u%80,v=[];for(let T=0;T<f.length;T+=80)v.push(f.slice(T,T+80));return l+qr([[`${o} |`,v[0]],...v.slice(1,p+1).map(T=>["|",T]),["|","^".padStart(h)],["|",v[p+1]]])}return l+qr([[`${o-1} |`,c[a-1]],[`${o} |`,f],["|","^".padStart(u)],[`${o+1} |`,c[a+1]]])}function qr(t){const e=t.filter(([r,a])=>a!==void 0),n=Math.max(...e.map(([r])=>r.length));return e.map(([r,a])=>r.padStart(n)+(a?" "+a:"")).join(`
`)}function hl(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class Nr extends Error{constructor(e,...n){var r,a,i;const{nodes:o,source:s,positions:u,path:l,originalError:c,extensions:f}=hl(n);super(e),this.name="GraphQLError",this.path=l??void 0,this.originalError=c??void 0,this.nodes=xr(Array.isArray(o)?o:o?[o]:void 0);const p=xr((r=this.nodes)===null||r===void 0?void 0:r.map(v=>v.loc).filter(v=>v!=null));this.source=s??(p==null||(a=p[0])===null||a===void 0?void 0:a.source),this.positions=u??(p==null?void 0:p.map(v=>v.start)),this.locations=u&&s?u.map(v=>tr(s,v)):p==null?void 0:p.map(v=>tr(v.source,v.start));const h=cl(c==null?void 0:c.extensions)?c==null?void 0:c.extensions:void 0;this.extensions=(i=f??h)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),c!=null&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Nr):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+=`

`+pl(n.loc));else if(this.source&&this.locations)for(const n of this.locations)e+=`

`+Oo(this.source,n);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function xr(t){return t===void 0||t.length===0?void 0:t}function ve(t,e,n){return new Nr(`Syntax Error: ${n}`,{source:t,positions:[e]})}class ml{constructor(e,n,r){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Ao{constructor(e,n,r,a,i,o){this.kind=e,this.start=n,this.end=r,this.line=a,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Ro={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},vl=new Set(Object.keys(Ro));function Lr(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&vl.has(e)}var vt;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(vt||(vt={}));var nr;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(nr||(nr={}));var G;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(G||(G={}));function rr(t){return t===9||t===32}function Ft(t){return t>=48&&t<=57}function $o(t){return t>=97&&t<=122||t>=65&&t<=90}function Mo(t){return $o(t)||t===95}function gl(t){return $o(t)||Ft(t)||t===95}function yl(t){var e;let n=Number.MAX_SAFE_INTEGER,r=null,a=-1;for(let o=0;o<t.length;++o){var i;const s=t[o],u=wl(s);u!==s.length&&(r=(i=r)!==null&&i!==void 0?i:o,a=o,o!==0&&u<n&&(n=u))}return t.map((o,s)=>s===0?o:o.slice(n)).slice((e=r)!==null&&e!==void 0?e:0,a+1)}function wl(t){let e=0;for(;e<t.length&&rr(t.charCodeAt(e));)++e;return e}function _l(t,e){const n=t.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),a=r.length===1,i=r.length>1&&r.slice(1).every(h=>h.length===0||rr(h.charCodeAt(0))),o=n.endsWith('\\"""'),s=t.endsWith('"')&&!o,u=t.endsWith("\\"),l=s||u,c=!(e!=null&&e.minimize)&&(!a||t.length>70||l||i||o);let f="";const p=a&&rr(t.charCodeAt(0));return(c&&!p||i)&&(f+=`
`),f+=n,(c||l)&&(f+=`
`),'"""'+f+'"""'}var D;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(D||(D={}));class bl{constructor(e){const n=new Ao(D.SOF,0,0,0,0);this.source=e,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==D.EOF)do if(e.next)e=e.next;else{const n=Tl(this,e.end);e.next=n,n.prev=e,e=n}while(e.kind===D.COMMENT);return e}}function kl(t){return t===D.BANG||t===D.DOLLAR||t===D.AMP||t===D.PAREN_L||t===D.PAREN_R||t===D.SPREAD||t===D.COLON||t===D.EQUALS||t===D.AT||t===D.BRACKET_L||t===D.BRACKET_R||t===D.BRACE_L||t===D.PIPE||t===D.BRACE_R}function Et(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Un(t,e){return Fo(t.charCodeAt(e))&&qo(t.charCodeAt(e+1))}function Fo(t){return t>=55296&&t<=56319}function qo(t){return t>=56320&&t<=57343}function st(t,e){const n=t.source.body.codePointAt(e);if(n===void 0)return D.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function ce(t,e,n,r,a){const i=t.line,o=1+n-t.lineStart;return new Ao(e,n,r,i,o,a)}function Tl(t,e){const n=t.source.body,r=n.length;let a=e;for(;a<r;){const i=n.charCodeAt(a);switch(i){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++t.line,t.lineStart=a;continue;case 13:n.charCodeAt(a+1)===10?a+=2:++a,++t.line,t.lineStart=a;continue;case 35:return El(t,a);case 33:return ce(t,D.BANG,a,a+1);case 36:return ce(t,D.DOLLAR,a,a+1);case 38:return ce(t,D.AMP,a,a+1);case 40:return ce(t,D.PAREN_L,a,a+1);case 41:return ce(t,D.PAREN_R,a,a+1);case 46:if(n.charCodeAt(a+1)===46&&n.charCodeAt(a+2)===46)return ce(t,D.SPREAD,a,a+3);break;case 58:return ce(t,D.COLON,a,a+1);case 61:return ce(t,D.EQUALS,a,a+1);case 64:return ce(t,D.AT,a,a+1);case 91:return ce(t,D.BRACKET_L,a,a+1);case 93:return ce(t,D.BRACKET_R,a,a+1);case 123:return ce(t,D.BRACE_L,a,a+1);case 124:return ce(t,D.PIPE,a,a+1);case 125:return ce(t,D.BRACE_R,a,a+1);case 34:return n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34?Pl(t,a):Cl(t,a)}if(Ft(i)||i===45)return Sl(t,a,i);if(Mo(i))return Ol(t,a);throw ve(t.source,a,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Et(i)||Un(n,a)?`Unexpected character: ${st(t,a)}.`:`Invalid character: ${st(t,a)}.`)}return ce(t,D.EOF,r,r)}function El(t,e){const n=t.source.body,r=n.length;let a=e+1;for(;a<r;){const i=n.charCodeAt(a);if(i===10||i===13)break;if(Et(i))++a;else if(Un(n,a))a+=2;else break}return ce(t,D.COMMENT,e,a,n.slice(e+1,a))}function Sl(t,e,n){const r=t.source.body;let a=e,i=n,o=!1;if(i===45&&(i=r.charCodeAt(++a)),i===48){if(i=r.charCodeAt(++a),Ft(i))throw ve(t.source,a,`Invalid number, unexpected digit after 0: ${st(t,a)}.`)}else a=Jn(t,a,i),i=r.charCodeAt(a);if(i===46&&(o=!0,i=r.charCodeAt(++a),a=Jn(t,a,i),i=r.charCodeAt(a)),(i===69||i===101)&&(o=!0,i=r.charCodeAt(++a),(i===43||i===45)&&(i=r.charCodeAt(++a)),a=Jn(t,a,i),i=r.charCodeAt(a)),i===46||Mo(i))throw ve(t.source,a,`Invalid number, expected digit but got: ${st(t,a)}.`);return ce(t,o?D.FLOAT:D.INT,e,a,r.slice(e,a))}function Jn(t,e,n){if(!Ft(n))throw ve(t.source,e,`Invalid number, expected digit but got: ${st(t,e)}.`);const r=t.source.body;let a=e+1;for(;Ft(r.charCodeAt(a));)++a;return a}function Cl(t,e){const n=t.source.body,r=n.length;let a=e+1,i=a,o="";for(;a<r;){const s=n.charCodeAt(a);if(s===34)return o+=n.slice(i,a),ce(t,D.STRING,e,a+1,o);if(s===92){o+=n.slice(i,a);const u=n.charCodeAt(a+1)===117?n.charCodeAt(a+2)===123?Dl(t,a):Nl(t,a):Il(t,a);o+=u.value,a+=u.size,i=a;continue}if(s===10||s===13)break;if(Et(s))++a;else if(Un(n,a))a+=2;else throw ve(t.source,a,`Invalid character within String: ${st(t,a)}.`)}throw ve(t.source,a,"Unterminated string.")}function Dl(t,e){const n=t.source.body;let r=0,a=3;for(;a<12;){const i=n.charCodeAt(e+a++);if(i===125){if(a<5||!Et(r))break;return{value:String.fromCodePoint(r),size:a}}if(r=r<<4|Rt(i),r<0)break}throw ve(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+a)}".`)}function Nl(t,e){const n=t.source.body,r=jr(n,e+2);if(Et(r))return{value:String.fromCodePoint(r),size:6};if(Fo(r)&&n.charCodeAt(e+6)===92&&n.charCodeAt(e+7)===117){const a=jr(n,e+8);if(qo(a))return{value:String.fromCodePoint(r,a),size:12}}throw ve(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+6)}".`)}function jr(t,e){return Rt(t.charCodeAt(e))<<12|Rt(t.charCodeAt(e+1))<<8|Rt(t.charCodeAt(e+2))<<4|Rt(t.charCodeAt(e+3))}function Rt(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Il(t,e){const n=t.source.body;switch(n.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw ve(t.source,e,`Invalid character escape sequence: "${n.slice(e,e+2)}".`)}function Pl(t,e){const n=t.source.body,r=n.length;let a=t.lineStart,i=e+3,o=i,s="";const u=[];for(;i<r;){const l=n.charCodeAt(i);if(l===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){s+=n.slice(o,i),u.push(s);const c=ce(t,D.BLOCK_STRING,e,i+3,yl(u).join(`
`));return t.line+=u.length-1,t.lineStart=a,c}if(l===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){s+=n.slice(o,i),o=i+1,i+=4;continue}if(l===10||l===13){s+=n.slice(o,i),u.push(s),l===13&&n.charCodeAt(i+1)===10?i+=2:++i,s="",o=i,a=i;continue}if(Et(l))++i;else if(Un(n,i))i+=2;else throw ve(t.source,i,`Invalid character within String: ${st(t,i)}.`)}throw ve(t.source,i,"Unterminated string.")}function Ol(t,e){const n=t.source.body,r=n.length;let a=e+1;for(;a<r;){const i=n.charCodeAt(a);if(gl(i))++a;else break}return ce(t,D.NAME,e,a,n.slice(e,a))}const Al=10,xo=2;function Lo(t){return Vn(t,[])}function Vn(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return Rl(t,e);default:return String(t)}}function Rl(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const n=[...e,t];if($l(t)){const r=t.toJSON();if(r!==t)return typeof r=="string"?r:Vn(r,n)}else if(Array.isArray(t))return Fl(t,n);return Ml(t,n)}function $l(t){return typeof t.toJSON=="function"}function Ml(t,e){const n=Object.entries(t);return n.length===0?"{}":e.length>xo?"["+ql(t)+"]":"{ "+n.map(([a,i])=>a+": "+Vn(i,e)).join(", ")+" }"}function Fl(t,e){if(t.length===0)return"[]";if(e.length>xo)return"[Array]";const n=Math.min(Al,t.length),r=t.length-n,a=[];for(let i=0;i<n;++i)a.push(Vn(t[i],e));return r===1?a.push("... 1 more item"):r>1&&a.push(`... ${r} more items`),"["+a.join(", ")+"]"}function ql(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}const xl=function(e,n){return e instanceof n};class jo{constructor(e,n="GraphQL request",r={line:1,column:1}){typeof e=="string"||dn(!1,`Body must be a string. Received: ${Lo(e)}.`),this.body=e,this.name=n,this.locationOffset=r,this.locationOffset.line>0||dn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||dn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Ll(t){return xl(t,jo)}function Uo(t,e){return new jl(t,e).parseDocument()}class jl{constructor(e,n={}){const r=Ll(e)?e:new jo(e);this._lexer=new bl(r),this._options=n,this._tokenCounter=0}parseName(){const e=this.expectToken(D.NAME);return this.node(e,{kind:G.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:G.DOCUMENT,definitions:this.many(D.SOF,this.parseDefinition,D.EOF)})}parseDefinition(){if(this.peek(D.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),n=e?this._lexer.lookahead():this._lexer.token;if(n.kind===D.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw ve(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(D.BRACE_L))return this.node(e,{kind:G.OPERATION_DEFINITION,operation:vt.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(D.NAME)&&(r=this.parseName()),this.node(e,{kind:G.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(D.NAME);switch(e.value){case"query":return vt.QUERY;case"mutation":return vt.MUTATION;case"subscription":return vt.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(D.PAREN_L,this.parseVariableDefinition,D.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:G.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(D.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(D.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(D.DOLLAR),this.node(e,{kind:G.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:G.SELECTION_SET,selections:this.many(D.BRACE_L,this.parseSelection,D.BRACE_R)})}parseSelection(){return this.peek(D.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,n=this.parseName();let r,a;return this.expectOptionalToken(D.COLON)?(r=n,a=this.parseName()):a=n,this.node(e,{kind:G.FIELD,alias:r,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(D.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const n=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(D.PAREN_L,n,D.PAREN_R)}parseArgument(e=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(n,{kind:G.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(D.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(D.NAME)?this.node(e,{kind:G.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:G.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:G.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:G.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const n=this._lexer.token;switch(n.kind){case D.BRACKET_L:return this.parseList(e);case D.BRACE_L:return this.parseObject(e);case D.INT:return this.advanceLexer(),this.node(n,{kind:G.INT,value:n.value});case D.FLOAT:return this.advanceLexer(),this.node(n,{kind:G.FLOAT,value:n.value});case D.STRING:case D.BLOCK_STRING:return this.parseStringLiteral();case D.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:G.BOOLEAN,value:!0});case"false":return this.node(n,{kind:G.BOOLEAN,value:!1});case"null":return this.node(n,{kind:G.NULL});default:return this.node(n,{kind:G.ENUM,value:n.value})}case D.DOLLAR:if(e)if(this.expectToken(D.DOLLAR),this._lexer.token.kind===D.NAME){const r=this._lexer.token.value;throw ve(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:G.STRING,value:e.value,block:e.kind===D.BLOCK_STRING})}parseList(e){const n=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:G.LIST,values:this.any(D.BRACKET_L,n,D.BRACKET_R)})}parseObject(e){const n=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:G.OBJECT,fields:this.any(D.BRACE_L,n,D.BRACE_R)})}parseObjectField(e){const n=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(n,{kind:G.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){const n=[];for(;this.peek(D.AT);)n.push(this.parseDirective(e));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const n=this._lexer.token;return this.expectToken(D.AT),this.node(n,{kind:G.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let n;if(this.expectOptionalToken(D.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(D.BRACKET_R),n=this.node(e,{kind:G.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(D.BANG)?this.node(e,{kind:G.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:G.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(D.STRING)||this.peek(D.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),a=this.many(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);return this.node(e,{kind:G.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:a})}parseOperationTypeDefinition(){const e=this._lexer.token,n=this.parseOperationType();this.expectToken(D.COLON);const r=this.parseNamedType();return this.node(e,{kind:G.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),a=this.parseConstDirectives();return this.node(e,{kind:G.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:a})}parseObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),a=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:G.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:a,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(D.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseFieldDefinition,D.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,n=this.parseDescription(),r=this.parseName(),a=this.parseArgumentDefs();this.expectToken(D.COLON);const i=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(e,{kind:G.FIELD_DEFINITION,description:n,name:r,arguments:a,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(D.PAREN_L,this.parseInputValueDef,D.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(D.COLON);const a=this.parseTypeReference();let i;this.expectOptionalToken(D.EQUALS)&&(i=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(e,{kind:G.INPUT_VALUE_DEFINITION,description:n,name:r,type:a,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),a=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:G.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:a,directives:i,fields:o})}parseUnionTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),a=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:G.UNION_TYPE_DEFINITION,description:n,name:r,directives:a,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(D.EQUALS)?this.delimitedMany(D.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),a=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:G.ENUM_TYPE_DEFINITION,description:n,name:r,directives:a,values:i})}parseEnumValuesDefinition(){return this.optionalMany(D.BRACE_L,this.parseEnumValueDefinition,D.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(e,{kind:G.ENUM_VALUE_DEFINITION,description:n,name:r,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw ve(this._lexer.source,this._lexer.token.start,`${cn(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),a=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:G.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:a,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseInputValueDef,D.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===D.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:G.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(e,{kind:G.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&a.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:G.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:a,fields:i})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&a.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:G.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:a,fields:i})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:G.UNION_TYPE_EXTENSION,name:n,directives:r,types:a})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:G.ENUM_TYPE_EXTENSION,name:n,directives:r,values:a})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:G.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:a})}parseDirectiveDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(D.AT);const r=this.parseName(),a=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(e,{kind:G.DIRECTIVE_DEFINITION,description:n,name:r,arguments:a,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(D.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(nr,n.value))return n;throw this.unexpected(e)}node(e,n){return this._options.noLocation!==!0&&(n.loc=new ml(e,this._lexer.lastToken,this._lexer.source)),n}peek(e){return this._lexer.token.kind===e}expectToken(e){const n=this._lexer.token;if(n.kind===e)return this.advanceLexer(),n;throw ve(this._lexer.source,n.start,`Expected ${Vo(e)}, found ${cn(n)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const n=this._lexer.token;if(n.kind===D.NAME&&n.value===e)this.advanceLexer();else throw ve(this._lexer.source,n.start,`Expected "${e}", found ${cn(n)}.`)}expectOptionalKeyword(e){const n=this._lexer.token;return n.kind===D.NAME&&n.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const n=e??this._lexer.token;return ve(this._lexer.source,n.start,`Unexpected ${cn(n)}.`)}any(e,n,r){this.expectToken(e);const a=[];for(;!this.expectOptionalToken(r);)a.push(n.call(this));return a}optionalMany(e,n,r){if(this.expectOptionalToken(e)){const a=[];do a.push(n.call(this));while(!this.expectOptionalToken(r));return a}return[]}many(e,n,r){this.expectToken(e);const a=[];do a.push(n.call(this));while(!this.expectOptionalToken(r));return a}delimitedMany(e,n){this.expectOptionalToken(e);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(e));return r}advanceLexer(){const{maxTokens:e}=this._options,n=this._lexer.advance();if(e!==void 0&&n.kind!==D.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw ve(this._lexer.source,n.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function cn(t){const e=t.value;return Vo(t.kind)+(e!=null?` "${e}"`:"")}function Vo(t){return kl(t)?`"${t}"`:t}function Ul(t){return`"${t.replace(Vl,Bl)}"`}const Vl=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Bl(t){return Gl[t.charCodeAt(0)]}const Gl=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Hl=Object.freeze({});function Zl(t,e,n=Ro){const r=new Map;for(const I of Object.values(G))r.set(I,Wl(e,I));let a,i=Array.isArray(t),o=[t],s=-1,u=[],l=t,c,f;const p=[],h=[];do{s++;const I=s===o.length,j=I&&u.length!==0;if(I){if(c=h.length===0?void 0:p[p.length-1],l=f,f=h.pop(),j)if(i){l=l.slice();let Q=0;for(const[be,ue]of u){const Ae=be-Q;ue===null?(l.splice(Ae,1),Q++):l[Ae]=ue}}else{l=Object.defineProperties({},Object.getOwnPropertyDescriptors(l));for(const[Q,be]of u)l[Q]=be}s=a.index,o=a.keys,u=a.edits,i=a.inArray,a=a.prev}else if(f){if(c=i?s:o[s],l=f[c],l==null)continue;p.push(c)}let k;if(!Array.isArray(l)){var v,T;Lr(l)||dn(!1,`Invalid AST Node: ${Lo(l)}.`);const Q=I?(v=r.get(l.kind))===null||v===void 0?void 0:v.leave:(T=r.get(l.kind))===null||T===void 0?void 0:T.enter;if(k=Q==null?void 0:Q.call(e,l,c,f,p,h),k===Hl)break;if(k===!1){if(!I){p.pop();continue}}else if(k!==void 0&&(u.push([c,k]),!I))if(Lr(k))l=k;else{p.pop();continue}}if(k===void 0&&j&&u.push([c,l]),I)p.pop();else{var O;a={inArray:i,index:s,keys:o,edits:u,prev:a},i=Array.isArray(l),o=i?l:(O=n[l.kind])!==null&&O!==void 0?O:[],s=-1,u=[],f&&h.push(f),f=l}}while(a!==void 0);return u.length!==0?u[u.length-1][1]:t}function Wl(t,e){const n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function A(t){return Zl(t,Yl)}const zl=80,Yl={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>F(t.definitions,`

`)},OperationDefinition:{leave(t){const e=X("(",F(t.variableDefinitions,", "),")"),n=F([t.operation,F([t.name,e]),F(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:r})=>t+": "+e+X(" = ",n)+X(" ",F(r," "))},SelectionSet:{leave:({selections:t})=>Re(t)},Field:{leave({alias:t,name:e,arguments:n,directives:r,selectionSet:a}){const i=X("",t,": ")+e;let o=i+X("(",F(n,", "),")");return o.length>zl&&(o=i+X(`(
`,pn(F(n,`
`)),`
)`)),F([o,F(r," "),a]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+X(" ",F(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>F(["...",X("on ",t),F(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:r,selectionSet:a})=>`fragment ${t}${X("(",F(n,", "),")")} on ${e} ${X("",F(r," ")," ")}`+a},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?_l(t):Ul(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+F(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+F(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+X("(",F(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>X("",t,`
`)+F(["schema",F(e," "),Re(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>X("",t,`
`)+F(["scalar",e,F(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:a})=>X("",t,`
`)+F(["type",e,X("implements ",F(n," & ")),F(r," "),Re(a)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:r,directives:a})=>X("",t,`
`)+e+(Ur(n)?X(`(
`,pn(F(n,`
`)),`
)`):X("(",F(n,", "),")"))+": "+r+X(" ",F(a," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:r,directives:a})=>X("",t,`
`)+F([e+": "+n,X("= ",r),F(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:a})=>X("",t,`
`)+F(["interface",e,X("implements ",F(n," & ")),F(r," "),Re(a)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:r})=>X("",t,`
`)+F(["union",e,F(n," "),X("= ",F(r," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:r})=>X("",t,`
`)+F(["enum",e,F(n," "),Re(r)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>X("",t,`
`)+F([e,F(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:r})=>X("",t,`
`)+F(["input",e,F(n," "),Re(r)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,repeatable:r,locations:a})=>X("",t,`
`)+"directive @"+e+(Ur(n)?X(`(
`,pn(F(n,`
`)),`
)`):X("(",F(n,", "),")"))+(r?" repeatable":"")+" on "+F(a," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>F(["extend schema",F(t," "),Re(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>F(["extend scalar",t,F(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>F(["extend type",t,X("implements ",F(e," & ")),F(n," "),Re(r)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>F(["extend interface",t,X("implements ",F(e," & ")),F(n," "),Re(r)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>F(["extend union",t,F(e," "),X("= ",F(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>F(["extend enum",t,F(e," "),Re(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>F(["extend input",t,F(e," "),Re(n)]," ")}};function F(t,e=""){var n;return(n=t==null?void 0:t.filter(r=>r).join(e))!==null&&n!==void 0?n:""}function Re(t){return X(`{
`,pn(F(t,`
`)),`
}`)}function X(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function pn(t){return X("  ",t.replace(/\n/g,`
  `))}function Ur(t){var e;return(e=t==null?void 0:t.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}const Vr=t=>{var r,a;let e;const n=t.definitions.filter(i=>i.kind==="OperationDefinition");return n.length===1&&(e=(a=(r=n[0])==null?void 0:r.name)==null?void 0:a.value),e},Qn=t=>{if(typeof t=="string"){let n;try{const r=Uo(t);n=Vr(r)}catch{}return{query:t,operationName:n}}const e=Vr(t);return{query:A(t),operationName:e}};class $t extends Error{constructor(e,n){const r=`${$t.extractMessage(e)}: ${JSON.stringify({response:e,request:n})}`;super(r),Object.setPrototypeOf(this,$t.prototype),this.response=e,this.request=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,$t)}static extractMessage(e){var n,r;return((r=(n=e.errors)==null?void 0:n[0])==null?void 0:r.message)??`GraphQL Error (Code: ${e.status})`}}var ar={exports:{}};(function(t,e){var n=typeof self<"u"?self:At,r=function(){function i(){this.fetch=!1,this.DOMException=n.DOMException}return i.prototype=n,new i}();(function(i){(function(o){var s={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function u(m){return m&&DataView.prototype.isPrototypeOf(m)}if(s.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(m){return m&&l.indexOf(Object.prototype.toString.call(m))>-1};function f(m){if(typeof m!="string"&&(m=String(m)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(m))throw new TypeError("Invalid character in header field name");return m.toLowerCase()}function p(m){return typeof m!="string"&&(m=String(m)),m}function h(m){var b={next:function(){var _=m.shift();return{done:_===void 0,value:_}}};return s.iterable&&(b[Symbol.iterator]=function(){return b}),b}function v(m){this.map={},m instanceof v?m.forEach(function(b,_){this.append(_,b)},this):Array.isArray(m)?m.forEach(function(b){this.append(b[0],b[1])},this):m&&Object.getOwnPropertyNames(m).forEach(function(b){this.append(b,m[b])},this)}v.prototype.append=function(m,b){m=f(m),b=p(b);var _=this.map[m];this.map[m]=_?_+", "+b:b},v.prototype.delete=function(m){delete this.map[f(m)]},v.prototype.get=function(m){return m=f(m),this.has(m)?this.map[m]:null},v.prototype.has=function(m){return this.map.hasOwnProperty(f(m))},v.prototype.set=function(m,b){this.map[f(m)]=p(b)},v.prototype.forEach=function(m,b){for(var _ in this.map)this.map.hasOwnProperty(_)&&m.call(b,this.map[_],_,this)},v.prototype.keys=function(){var m=[];return this.forEach(function(b,_){m.push(_)}),h(m)},v.prototype.values=function(){var m=[];return this.forEach(function(b){m.push(b)}),h(m)},v.prototype.entries=function(){var m=[];return this.forEach(function(b,_){m.push([_,b])}),h(m)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function T(m){if(m.bodyUsed)return Promise.reject(new TypeError("Already read"));m.bodyUsed=!0}function O(m){return new Promise(function(b,_){m.onload=function(){b(m.result)},m.onerror=function(){_(m.error)}})}function I(m){var b=new FileReader,_=O(b);return b.readAsArrayBuffer(m),_}function j(m){var b=new FileReader,_=O(b);return b.readAsText(m),_}function k(m){for(var b=new Uint8Array(m),_=new Array(b.length),R=0;R<b.length;R++)_[R]=String.fromCharCode(b[R]);return _.join("")}function Q(m){if(m.slice)return m.slice(0);var b=new Uint8Array(m.byteLength);return b.set(new Uint8Array(m)),b.buffer}function be(){return this.bodyUsed=!1,this._initBody=function(m){this._bodyInit=m,m?typeof m=="string"?this._bodyText=m:s.blob&&Blob.prototype.isPrototypeOf(m)?this._bodyBlob=m:s.formData&&FormData.prototype.isPrototypeOf(m)?this._bodyFormData=m:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)?this._bodyText=m.toString():s.arrayBuffer&&s.blob&&u(m)?(this._bodyArrayBuffer=Q(m.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(m)||c(m))?this._bodyArrayBuffer=Q(m):this._bodyText=m=Object.prototype.toString.call(m):this._bodyText="",this.headers.get("content-type")||(typeof m=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var m=T(this);if(m)return m;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?T(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(I)}),this.text=function(){var m=T(this);if(m)return m;if(this._bodyBlob)return j(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(k(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(ke)}),this.json=function(){return this.text().then(JSON.parse)},this}var ue=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Ae(m){var b=m.toUpperCase();return ue.indexOf(b)>-1?b:m}function le(m,b){b=b||{};var _=b.body;if(m instanceof le){if(m.bodyUsed)throw new TypeError("Already read");this.url=m.url,this.credentials=m.credentials,b.headers||(this.headers=new v(m.headers)),this.method=m.method,this.mode=m.mode,this.signal=m.signal,!_&&m._bodyInit!=null&&(_=m._bodyInit,m.bodyUsed=!0)}else this.url=String(m);if(this.credentials=b.credentials||this.credentials||"same-origin",(b.headers||!this.headers)&&(this.headers=new v(b.headers)),this.method=Ae(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.signal=b.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&_)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(_)}le.prototype.clone=function(){return new le(this,{body:this._bodyInit})};function ke(m){var b=new FormData;return m.trim().split("&").forEach(function(_){if(_){var R=_.split("="),x=R.shift().replace(/\+/g," "),U=R.join("=").replace(/\+/g," ");b.append(decodeURIComponent(x),decodeURIComponent(U))}}),b}function Oe(m){var b=new v,_=m.replace(/\r?\n[\t ]+/g," ");return _.split(/\r?\n/).forEach(function(R){var x=R.split(":"),U=x.shift().trim();if(U){var K=x.join(":").trim();b.append(U,K)}}),b}be.call(le.prototype);function te(m,b){b||(b={}),this.type="default",this.status=b.status===void 0?200:b.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in b?b.statusText:"OK",this.headers=new v(b.headers),this.url=b.url||"",this._initBody(m)}be.call(te.prototype),te.prototype.clone=function(){return new te(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},te.error=function(){var m=new te(null,{status:0,statusText:""});return m.type="error",m};var w=[301,302,303,307,308];te.redirect=function(m,b){if(w.indexOf(b)===-1)throw new RangeError("Invalid status code");return new te(null,{status:b,headers:{location:m}})},o.DOMException=i.DOMException;try{new o.DOMException}catch{o.DOMException=function(b,_){this.message=b,this.name=_;var R=Error(b);this.stack=R.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function g(m,b){return new Promise(function(_,R){var x=new le(m,b);if(x.signal&&x.signal.aborted)return R(new o.DOMException("Aborted","AbortError"));var U=new XMLHttpRequest;function K(){U.abort()}U.onload=function(){var pe={status:U.status,statusText:U.statusText,headers:Oe(U.getAllResponseHeaders()||"")};pe.url="responseURL"in U?U.responseURL:pe.headers.get("X-Request-URL");var Te="response"in U?U.response:U.responseText;_(new te(Te,pe))},U.onerror=function(){R(new TypeError("Network request failed"))},U.ontimeout=function(){R(new TypeError("Network request failed"))},U.onabort=function(){R(new o.DOMException("Aborted","AbortError"))},U.open(x.method,x.url,!0),x.credentials==="include"?U.withCredentials=!0:x.credentials==="omit"&&(U.withCredentials=!1),"responseType"in U&&s.blob&&(U.responseType="blob"),x.headers.forEach(function(pe,Te){U.setRequestHeader(Te,pe)}),x.signal&&(x.signal.addEventListener("abort",K),U.onreadystatechange=function(){U.readyState===4&&x.signal.removeEventListener("abort",K)}),U.send(typeof x._bodyInit>"u"?null:x._bodyInit)})}return g.polyfill=!0,i.fetch||(i.fetch=g,i.Headers=v,i.Request=le,i.Response=te),o.Headers=v,o.Request=le,o.Response=te,o.fetch=g,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var a=r;e=a.fetch,e.default=a.fetch,e.fetch=a.fetch,e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response,t.exports=e})(ar,ar.exports);var bn=ar.exports;const hn=jn(bn),Jl=zu({__proto__:null,default:hn},[bn]),ht=t=>{let e={};return t&&(typeof Headers<"u"&&t instanceof Headers||Jl&&bn.Headers&&t instanceof bn.Headers?e=sl(t):Array.isArray(t)?t.forEach(([n,r])=>{n&&r!==void 0&&(e[n]=r)}):e=t),e},Br=t=>t.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Ql=t=>{if(!Array.isArray(t.query)){const r=t,a=[`query=${encodeURIComponent(Br(r.query))}`];return t.variables&&a.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&a.push(`operationName=${encodeURIComponent(r.operationName)}`),a.join("&")}if(typeof t.variables<"u"&&!Array.isArray(t.variables))throw new Error("Cannot create query with given variable type, array expected");const e=t,n=t.query.reduce((r,a,i)=>(r.push({query:Br(a),variables:e.variables?e.jsonSerializer.stringify(e.variables[i]):void 0}),r),[]);return`query=${encodeURIComponent(e.jsonSerializer.stringify(n))}`},Xl=t=>async e=>{const{url:n,query:r,variables:a,operationName:i,fetch:o,fetchOptions:s,middleware:u}=e,l={...e.headers};let c="",f;t==="POST"?(f=al(r,a,i,s.jsonSerializer),typeof f=="string"&&(l["Content-Type"]="application/json")):c=Ql({query:r,variables:a,operationName:i,jsonSerializer:s.jsonSerializer??Dr});const p={method:t,headers:l,body:f,...s};let h=n,v=p;if(u){const T=await Promise.resolve(u({...p,url:n,operationName:i,variables:a})),{url:O,...I}=T;h=O,v=I}return c&&(h=`${h}?${c}`),await o(h,v)};class De{constructor(e,n={}){this.url=e,this.requestConfig=n,this.rawRequest=async(...r)=>{const[a,i,o]=r,s=ul(a,i,o),{headers:u,fetch:l=hn,method:c="POST",requestMiddleware:f,responseMiddleware:p,...h}=this.requestConfig,{url:v}=this;s.signal!==void 0&&(h.signal=s.signal);const{operationName:T}=Qn(s.query);return Xn({url:v,query:s.query,variables:s.variables,headers:{...ht(Kn(u)),...ht(s.requestHeaders)},operationName:T,fetch:l,method:c,fetchOptions:h,middleware:f}).then(O=>(p&&p(O),O)).catch(O=>{throw p&&p(O),O})}}async request(e,...n){const[r,a]=n,i=ol(e,r,a),{headers:o,fetch:s=hn,method:u="POST",requestMiddleware:l,responseMiddleware:c,...f}=this.requestConfig,{url:p}=this;i.signal!==void 0&&(f.signal=i.signal);const{query:h,operationName:v}=Qn(i.document);return Xn({url:p,query:h,variables:i.variables,headers:{...ht(Kn(o)),...ht(i.requestHeaders)},operationName:v,fetch:s,method:u,fetchOptions:f,middleware:l}).then(T=>(c&&c(T),T.data)).catch(T=>{throw c&&c(T),T})}batchRequests(e,n){const r=ll(e,n),{headers:a,...i}=this.requestConfig;r.signal!==void 0&&(i.signal=r.signal);const o=r.documents.map(({document:u})=>Qn(u).query),s=r.documents.map(({variables:u})=>u);return Xn({url:this.url,query:o,variables:s,headers:{...ht(Kn(a)),...ht(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??hn,method:this.requestConfig.method||"POST",fetchOptions:i,middleware:this.requestConfig.requestMiddleware}).then(u=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u.data)).catch(u=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u})}setHeaders(e){return this.requestConfig.headers=e,this}setHeader(e,n){const{headers:r}=this.requestConfig;return r?r[e]=n:this.requestConfig.headers={[e]:n},this}setEndpoint(e){return this.url=e,this}}const Xn=async t=>{const{query:e,variables:n,fetchOptions:r}=t,a=Xl(il(t.method??"post")),i=Array.isArray(t.query),o=await a(t),s=await Kl(o,r.jsonSerializer??Dr),u=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,l=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(o.ok&&l&&u){const{errors:c,...f}=(Array.isArray(s),s),p=r.errorPolicy==="ignore"?f:s;return{...i?{data:p}:p,headers:o.headers,status:o.status}}else{const c=typeof s=="string"?{error:s}:s;throw new $t({...c,status:o.status,headers:o.headers},{query:e,variables:n})}},Kl=async(t,e)=>{let n;return t.headers.forEach((r,a)=>{a.toLowerCase()==="content-type"&&(n=r)}),n&&(n.toLowerCase().startsWith("application/json")||n.toLowerCase().startsWith("application/graphql+json")||n.toLowerCase().startsWith("application/graphql-response+json"))?e.parse(await t.text()):t.text()},Kn=t=>typeof t=="function"?t():t;var kn=function(){return kn=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},kn.apply(this,arguments)},mn=new Map,ir=new Map,Bo=!0,Tn=!1;function Go(t){return t.replace(/[\s,]+/g," ").trim()}function ec(t){return Go(t.source.body.substring(t.start,t.end))}function tc(t){var e=new Set,n=[];return t.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var a=r.name.value,i=ec(r.loc),o=ir.get(a);o&&!o.has(i)?Bo&&console.warn("Warning: fragment with name "+a+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||ir.set(a,o=new Set),o.add(i),e.has(i)||(e.add(i),n.push(r))}else n.push(r)}),kn(kn({},t),{definitions:n})}function nc(t){var e=new Set(t.definitions);e.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(a){var i=r[a];i&&typeof i=="object"&&e.add(i)})});var n=t.loc;return n&&(delete n.startToken,delete n.endToken),t}function rc(t){var e=Go(t);if(!mn.has(e)){var n=Uo(t,{experimentalFragmentVariables:Tn,allowLegacyFragmentVariables:Tn});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");mn.set(e,nc(tc(n)))}return mn.get(e)}function wt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];typeof t=="string"&&(t=[t]);var r=t[0];return e.forEach(function(a,i){a&&a.kind==="Document"?r+=a.loc.source.body:r+=a,r+=t[i+1]}),rc(r)}function ac(){mn.clear(),ir.clear()}function ic(){Bo=!1}function sc(){Tn=!0}function oc(){Tn=!1}var Pt={gql:wt,resetCaches:ac,disableFragmentWarnings:ic,enableExperimentalFragmentVariables:sc,disableExperimentalFragmentVariables:oc};(function(t){t.gql=Pt.gql,t.resetCaches=Pt.resetCaches,t.disableFragmentWarnings=Pt.disableFragmentWarnings,t.enableExperimentalFragmentVariables=Pt.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=Pt.disableExperimentalFragmentVariables})(wt||(wt={}));wt.default=wt;const S=wt;/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var gt=9e15,nt=1e9,sr="0123456789abcdef",En="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",Sn="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",or={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-gt,maxE:gt,crypto:!1},Ho,He,W=!0,Bn="[DecimalError] ",Xe=Bn+"Invalid argument: ",Zo=Bn+"Precision limit exceeded",Wo=Bn+"crypto unavailable",zo="[object Decimal]",we=Math.floor,he=Math.pow,uc=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,lc=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,cc=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Yo=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Fe=1e7,B=7,fc=9007199254740991,dc=En.length-1,ur=Sn.length-1,N={toStringTag:zo};N.absoluteValue=N.abs=function(){var t=new this.constructor(this);return t.s<0&&(t.s=1),L(t)};N.ceil=function(){return L(new this.constructor(this),this.e+1,2)};N.clampedTo=N.clamp=function(t,e){var n,r=this,a=r.constructor;if(t=new a(t),e=new a(e),!t.s||!e.s)return new a(NaN);if(t.gt(e))throw Error(Xe+e);return n=r.cmp(t),n<0?t:r.cmp(e)>0?e:new a(r)};N.comparedTo=N.cmp=function(t){var e,n,r,a,i=this,o=i.d,s=(t=new i.constructor(t)).d,u=i.s,l=t.s;if(!o||!s)return!u||!l?NaN:u!==l?u:o===s?0:!o^u<0?1:-1;if(!o[0]||!s[0])return o[0]?u:s[0]?-l:0;if(u!==l)return u;if(i.e!==t.e)return i.e>t.e^u<0?1:-1;for(r=o.length,a=s.length,e=0,n=r<a?r:a;e<n;++e)if(o[e]!==s[e])return o[e]>s[e]^u<0?1:-1;return r===a?0:r>a^u<0?1:-1};N.cosine=N.cos=function(){var t,e,n=this,r=n.constructor;return n.d?n.d[0]?(t=r.precision,e=r.rounding,r.precision=t+Math.max(n.e,n.sd())+B,r.rounding=1,n=pc(r,eu(r,n)),r.precision=t,r.rounding=e,L(He==2||He==3?n.neg():n,t,e,!0)):new r(1):new r(NaN)};N.cubeRoot=N.cbrt=function(){var t,e,n,r,a,i,o,s,u,l,c=this,f=c.constructor;if(!c.isFinite()||c.isZero())return new f(c);for(W=!1,i=c.s*he(c.s*c,1/3),!i||Math.abs(i)==1/0?(n=ye(c.d),t=c.e,(i=(t-n.length+1)%3)&&(n+=i==1||i==-2?"0":"00"),i=he(n,1/3),t=we((t+1)/3)-(t%3==(t<0?-1:2)),i==1/0?n="5e"+t:(n=i.toExponential(),n=n.slice(0,n.indexOf("e")+1)+t),r=new f(n),r.s=c.s):r=new f(i.toString()),o=(t=f.precision)+3;;)if(s=r,u=s.times(s).times(s),l=u.plus(c),r=re(l.plus(c).times(s),l.plus(u),o+2,1),ye(s.d).slice(0,o)===(n=ye(r.d)).slice(0,o))if(n=n.slice(o-3,o+1),n=="9999"||!a&&n=="4999"){if(!a&&(L(s,t+1,0),s.times(s).times(s).eq(c))){r=s;break}o+=4,a=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(L(r,t+1,1),e=!r.times(r).times(r).eq(c));break}return W=!0,L(r,t,f.rounding,e)};N.decimalPlaces=N.dp=function(){var t,e=this.d,n=NaN;if(e){if(t=e.length-1,n=(t-we(this.e/B))*B,t=e[t],t)for(;t%10==0;t/=10)n--;n<0&&(n=0)}return n};N.dividedBy=N.div=function(t){return re(this,new this.constructor(t))};N.dividedToIntegerBy=N.divToInt=function(t){var e=this,n=e.constructor;return L(re(e,new n(t),0,1,1),n.precision,n.rounding)};N.equals=N.eq=function(t){return this.cmp(t)===0};N.floor=function(){return L(new this.constructor(this),this.e+1,3)};N.greaterThan=N.gt=function(t){return this.cmp(t)>0};N.greaterThanOrEqualTo=N.gte=function(t){var e=this.cmp(t);return e==1||e===0};N.hyperbolicCosine=N.cosh=function(){var t,e,n,r,a,i=this,o=i.constructor,s=new o(1);if(!i.isFinite())return new o(i.s?1/0:NaN);if(i.isZero())return s;n=o.precision,r=o.rounding,o.precision=n+Math.max(i.e,i.sd())+4,o.rounding=1,a=i.d.length,a<32?(t=Math.ceil(a/3),e=(1/Hn(4,t)).toString()):(t=16,e="2.3283064365386962890625e-10"),i=_t(o,1,i.times(e),new o(1),!0);for(var u,l=t,c=new o(8);l--;)u=i.times(i),i=s.minus(u.times(c.minus(u.times(c))));return L(i,o.precision=n,o.rounding=r,!0)};N.hyperbolicSine=N.sinh=function(){var t,e,n,r,a=this,i=a.constructor;if(!a.isFinite()||a.isZero())return new i(a);if(e=i.precision,n=i.rounding,i.precision=e+Math.max(a.e,a.sd())+4,i.rounding=1,r=a.d.length,r<3)a=_t(i,2,a,a,!0);else{t=1.4*Math.sqrt(r),t=t>16?16:t|0,a=a.times(1/Hn(5,t)),a=_t(i,2,a,a,!0);for(var o,s=new i(5),u=new i(16),l=new i(20);t--;)o=a.times(a),a=a.times(s.plus(o.times(u.times(o).plus(l))))}return i.precision=e,i.rounding=n,L(a,e,n,!0)};N.hyperbolicTangent=N.tanh=function(){var t,e,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+7,r.rounding=1,re(n.sinh(),n.cosh(),r.precision=t,r.rounding=e)):new r(n.s)};N.inverseCosine=N.acos=function(){var t,e=this,n=e.constructor,r=e.abs().cmp(1),a=n.precision,i=n.rounding;return r!==-1?r===0?e.isNeg()?$e(n,a,i):new n(0):new n(NaN):e.isZero()?$e(n,a+4,i).times(.5):(n.precision=a+6,n.rounding=1,e=e.asin(),t=$e(n,a+4,i).times(.5),n.precision=a,n.rounding=i,t.minus(e))};N.inverseHyperbolicCosine=N.acosh=function(){var t,e,n=this,r=n.constructor;return n.lte(1)?new r(n.eq(1)?0:NaN):n.isFinite()?(t=r.precision,e=r.rounding,r.precision=t+Math.max(Math.abs(n.e),n.sd())+4,r.rounding=1,W=!1,n=n.times(n).minus(1).sqrt().plus(n),W=!0,r.precision=t,r.rounding=e,n.ln()):new r(n)};N.inverseHyperbolicSine=N.asinh=function(){var t,e,n=this,r=n.constructor;return!n.isFinite()||n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+2*Math.max(Math.abs(n.e),n.sd())+6,r.rounding=1,W=!1,n=n.times(n).plus(1).sqrt().plus(n),W=!0,r.precision=t,r.rounding=e,n.ln())};N.inverseHyperbolicTangent=N.atanh=function(){var t,e,n,r,a=this,i=a.constructor;return a.isFinite()?a.e>=0?new i(a.abs().eq(1)?a.s/0:a.isZero()?a:NaN):(t=i.precision,e=i.rounding,r=a.sd(),Math.max(r,t)<2*-a.e-1?L(new i(a),t,e,!0):(i.precision=n=r-a.e,a=re(a.plus(1),new i(1).minus(a),n+t,1),i.precision=t+4,i.rounding=1,a=a.ln(),i.precision=t,i.rounding=e,a.times(.5))):new i(NaN)};N.inverseSine=N.asin=function(){var t,e,n,r,a=this,i=a.constructor;return a.isZero()?new i(a):(e=a.abs().cmp(1),n=i.precision,r=i.rounding,e!==-1?e===0?(t=$e(i,n+4,r).times(.5),t.s=a.s,t):new i(NaN):(i.precision=n+6,i.rounding=1,a=a.div(new i(1).minus(a.times(a)).sqrt().plus(1)).atan(),i.precision=n,i.rounding=r,a.times(2)))};N.inverseTangent=N.atan=function(){var t,e,n,r,a,i,o,s,u,l=this,c=l.constructor,f=c.precision,p=c.rounding;if(l.isFinite()){if(l.isZero())return new c(l);if(l.abs().eq(1)&&f+4<=ur)return o=$e(c,f+4,p).times(.25),o.s=l.s,o}else{if(!l.s)return new c(NaN);if(f+4<=ur)return o=$e(c,f+4,p).times(.5),o.s=l.s,o}for(c.precision=s=f+10,c.rounding=1,n=Math.min(28,s/B+2|0),t=n;t;--t)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(W=!1,e=Math.ceil(s/B),r=1,u=l.times(l),o=new c(l),a=l;t!==-1;)if(a=a.times(u),i=o.minus(a.div(r+=2)),a=a.times(u),o=i.plus(a.div(r+=2)),o.d[e]!==void 0)for(t=e;o.d[t]===i.d[t]&&t--;);return n&&(o=o.times(2<<n-1)),W=!0,L(o,c.precision=f,c.rounding=p,!0)};N.isFinite=function(){return!!this.d};N.isInteger=N.isInt=function(){return!!this.d&&we(this.e/B)>this.d.length-2};N.isNaN=function(){return!this.s};N.isNegative=N.isNeg=function(){return this.s<0};N.isPositive=N.isPos=function(){return this.s>0};N.isZero=function(){return!!this.d&&this.d[0]===0};N.lessThan=N.lt=function(t){return this.cmp(t)<0};N.lessThanOrEqualTo=N.lte=function(t){return this.cmp(t)<1};N.logarithm=N.log=function(t){var e,n,r,a,i,o,s,u,l=this,c=l.constructor,f=c.precision,p=c.rounding,h=5;if(t==null)t=new c(10),e=!0;else{if(t=new c(t),n=t.d,t.s<0||!n||!n[0]||t.eq(1))return new c(NaN);e=t.eq(10)}if(n=l.d,l.s<0||!n||!n[0]||l.eq(1))return new c(n&&!n[0]?-1/0:l.s!=1?NaN:n?0:1/0);if(e)if(n.length>1)i=!0;else{for(a=n[0];a%10===0;)a/=10;i=a!==1}if(W=!1,s=f+h,o=Je(l,s),r=e?Cn(c,s+10):Je(t,s),u=re(o,r,s,1),qt(u.d,a=f,p))do if(s+=10,o=Je(l,s),r=e?Cn(c,s+10):Je(t,s),u=re(o,r,s,1),!i){+ye(u.d).slice(a+1,a+15)+1==1e14&&(u=L(u,f+1,0));break}while(qt(u.d,a+=10,p));return W=!0,L(u,f,p)};N.minus=N.sub=function(t){var e,n,r,a,i,o,s,u,l,c,f,p,h=this,v=h.constructor;if(t=new v(t),!h.d||!t.d)return!h.s||!t.s?t=new v(NaN):h.d?t.s=-t.s:t=new v(t.d||h.s!==t.s?h:NaN),t;if(h.s!=t.s)return t.s=-t.s,h.plus(t);if(l=h.d,p=t.d,s=v.precision,u=v.rounding,!l[0]||!p[0]){if(p[0])t.s=-t.s;else if(l[0])t=new v(h);else return new v(u===3?-0:0);return W?L(t,s,u):t}if(n=we(t.e/B),c=we(h.e/B),l=l.slice(),i=c-n,i){for(f=i<0,f?(e=l,i=-i,o=p.length):(e=p,n=c,o=l.length),r=Math.max(Math.ceil(s/B),o)+2,i>r&&(i=r,e.length=1),e.reverse(),r=i;r--;)e.push(0);e.reverse()}else{for(r=l.length,o=p.length,f=r<o,f&&(o=r),r=0;r<o;r++)if(l[r]!=p[r]){f=l[r]<p[r];break}i=0}for(f&&(e=l,l=p,p=e,t.s=-t.s),o=l.length,r=p.length-o;r>0;--r)l[o++]=0;for(r=p.length;r>i;){if(l[--r]<p[r]){for(a=r;a&&l[--a]===0;)l[a]=Fe-1;--l[a],l[r]+=Fe}l[r]-=p[r]}for(;l[--o]===0;)l.pop();for(;l[0]===0;l.shift())--n;return l[0]?(t.d=l,t.e=Gn(l,n),W?L(t,s,u):t):new v(u===3?-0:0)};N.modulo=N.mod=function(t){var e,n=this,r=n.constructor;return t=new r(t),!n.d||!t.s||t.d&&!t.d[0]?new r(NaN):!t.d||n.d&&!n.d[0]?L(new r(n),r.precision,r.rounding):(W=!1,r.modulo==9?(e=re(n,t.abs(),0,3,1),e.s*=t.s):e=re(n,t,0,r.modulo,1),e=e.times(t),W=!0,n.minus(e))};N.naturalExponential=N.exp=function(){return lr(this)};N.naturalLogarithm=N.ln=function(){return Je(this)};N.negated=N.neg=function(){var t=new this.constructor(this);return t.s=-t.s,L(t)};N.plus=N.add=function(t){var e,n,r,a,i,o,s,u,l,c,f=this,p=f.constructor;if(t=new p(t),!f.d||!t.d)return!f.s||!t.s?t=new p(NaN):f.d||(t=new p(t.d||f.s===t.s?f:NaN)),t;if(f.s!=t.s)return t.s=-t.s,f.minus(t);if(l=f.d,c=t.d,s=p.precision,u=p.rounding,!l[0]||!c[0])return c[0]||(t=new p(f)),W?L(t,s,u):t;if(i=we(f.e/B),r=we(t.e/B),l=l.slice(),a=i-r,a){for(a<0?(n=l,a=-a,o=c.length):(n=c,r=i,o=l.length),i=Math.ceil(s/B),o=i>o?i+1:o+1,a>o&&(a=o,n.length=1),n.reverse();a--;)n.push(0);n.reverse()}for(o=l.length,a=c.length,o-a<0&&(a=o,n=c,c=l,l=n),e=0;a;)e=(l[--a]=l[a]+c[a]+e)/Fe|0,l[a]%=Fe;for(e&&(l.unshift(e),++r),o=l.length;l[--o]==0;)l.pop();return t.d=l,t.e=Gn(l,r),W?L(t,s,u):t};N.precision=N.sd=function(t){var e,n=this;if(t!==void 0&&t!==!!t&&t!==1&&t!==0)throw Error(Xe+t);return n.d?(e=Jo(n.d),t&&n.e+1>e&&(e=n.e+1)):e=NaN,e};N.round=function(){var t=this,e=t.constructor;return L(new e(t),t.e+1,e.rounding)};N.sine=N.sin=function(){var t,e,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+Math.max(n.e,n.sd())+B,r.rounding=1,n=mc(r,eu(r,n)),r.precision=t,r.rounding=e,L(He>2?n.neg():n,t,e,!0)):new r(NaN)};N.squareRoot=N.sqrt=function(){var t,e,n,r,a,i,o=this,s=o.d,u=o.e,l=o.s,c=o.constructor;if(l!==1||!s||!s[0])return new c(!l||l<0&&(!s||s[0])?NaN:s?o:1/0);for(W=!1,l=Math.sqrt(+o),l==0||l==1/0?(e=ye(s),(e.length+u)%2==0&&(e+="0"),l=Math.sqrt(e),u=we((u+1)/2)-(u<0||u%2),l==1/0?e="5e"+u:(e=l.toExponential(),e=e.slice(0,e.indexOf("e")+1)+u),r=new c(e)):r=new c(l.toString()),n=(u=c.precision)+3;;)if(i=r,r=i.plus(re(o,i,n+2,1)).times(.5),ye(i.d).slice(0,n)===(e=ye(r.d)).slice(0,n))if(e=e.slice(n-3,n+1),e=="9999"||!a&&e=="4999"){if(!a&&(L(i,u+1,0),i.times(i).eq(o))){r=i;break}n+=4,a=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(L(r,u+1,1),t=!r.times(r).eq(o));break}return W=!0,L(r,u,c.rounding,t)};N.tangent=N.tan=function(){var t,e,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(t=r.precision,e=r.rounding,r.precision=t+10,r.rounding=1,n=n.sin(),n.s=1,n=re(n,new r(1).minus(n.times(n)).sqrt(),t+10,0),r.precision=t,r.rounding=e,L(He==2||He==4?n.neg():n,t,e,!0)):new r(NaN)};N.times=N.mul=function(t){var e,n,r,a,i,o,s,u,l,c=this,f=c.constructor,p=c.d,h=(t=new f(t)).d;if(t.s*=c.s,!p||!p[0]||!h||!h[0])return new f(!t.s||p&&!p[0]&&!h||h&&!h[0]&&!p?NaN:!p||!h?t.s/0:t.s*0);for(n=we(c.e/B)+we(t.e/B),u=p.length,l=h.length,u<l&&(i=p,p=h,h=i,o=u,u=l,l=o),i=[],o=u+l,r=o;r--;)i.push(0);for(r=l;--r>=0;){for(e=0,a=u+r;a>r;)s=i[a]+h[r]*p[a-r-1]+e,i[a--]=s%Fe|0,e=s/Fe|0;i[a]=(i[a]+e)%Fe|0}for(;!i[--o];)i.pop();return e?++n:i.shift(),t.d=i,t.e=Gn(i,n),W?L(t,f.precision,f.rounding):t};N.toBinary=function(t,e){return Ir(this,2,t,e)};N.toDecimalPlaces=N.toDP=function(t,e){var n=this,r=n.constructor;return n=new r(n),t===void 0?n:(Ne(t,0,nt),e===void 0?e=r.rounding:Ne(e,0,8),L(n,t+n.e+1,e))};N.toExponential=function(t,e){var n,r=this,a=r.constructor;return t===void 0?n=Ve(r,!0):(Ne(t,0,nt),e===void 0?e=a.rounding:Ne(e,0,8),r=L(new a(r),t+1,e),n=Ve(r,!0,t+1)),r.isNeg()&&!r.isZero()?"-"+n:n};N.toFixed=function(t,e){var n,r,a=this,i=a.constructor;return t===void 0?n=Ve(a):(Ne(t,0,nt),e===void 0?e=i.rounding:Ne(e,0,8),r=L(new i(a),t+a.e+1,e),n=Ve(r,!1,t+r.e+1)),a.isNeg()&&!a.isZero()?"-"+n:n};N.toFraction=function(t){var e,n,r,a,i,o,s,u,l,c,f,p,h=this,v=h.d,T=h.constructor;if(!v)return new T(h);if(l=n=new T(1),r=u=new T(0),e=new T(r),i=e.e=Jo(v)-h.e-1,o=i%B,e.d[0]=he(10,o<0?B+o:o),t==null)t=i>0?e:l;else{if(s=new T(t),!s.isInt()||s.lt(l))throw Error(Xe+s);t=s.gt(e)?i>0?e:l:s}for(W=!1,s=new T(ye(v)),c=T.precision,T.precision=i=v.length*B*2;f=re(s,e,0,1,1),a=n.plus(f.times(r)),a.cmp(t)!=1;)n=r,r=a,a=l,l=u.plus(f.times(a)),u=a,a=e,e=s.minus(f.times(a)),s=a;return a=re(t.minus(n),r,0,1,1),u=u.plus(a.times(l)),n=n.plus(a.times(r)),u.s=l.s=h.s,p=re(l,r,i,1).minus(h).abs().cmp(re(u,n,i,1).minus(h).abs())<1?[l,r]:[u,n],T.precision=c,W=!0,p};N.toHexadecimal=N.toHex=function(t,e){return Ir(this,16,t,e)};N.toNearest=function(t,e){var n=this,r=n.constructor;if(n=new r(n),t==null){if(!n.d)return n;t=new r(1),e=r.rounding}else{if(t=new r(t),e===void 0?e=r.rounding:Ne(e,0,8),!n.d)return t.s?n:t;if(!t.d)return t.s&&(t.s=n.s),t}return t.d[0]?(W=!1,n=re(n,t,0,e,1).times(t),W=!0,L(n)):(t.s=n.s,n=t),n};N.toNumber=function(){return+this};N.toOctal=function(t,e){return Ir(this,8,t,e)};N.toPower=N.pow=function(t){var e,n,r,a,i,o,s=this,u=s.constructor,l=+(t=new u(t));if(!s.d||!t.d||!s.d[0]||!t.d[0])return new u(he(+s,l));if(s=new u(s),s.eq(1))return s;if(r=u.precision,i=u.rounding,t.eq(1))return L(s,r,i);if(e=we(t.e/B),e>=t.d.length-1&&(n=l<0?-l:l)<=fc)return a=Qo(u,s,n,r),t.s<0?new u(1).div(a):L(a,r,i);if(o=s.s,o<0){if(e<t.d.length-1)return new u(NaN);if(t.d[e]&1||(o=1),s.e==0&&s.d[0]==1&&s.d.length==1)return s.s=o,s}return n=he(+s,l),e=n==0||!isFinite(n)?we(l*(Math.log("0."+ye(s.d))/Math.LN10+s.e+1)):new u(n+"").e,e>u.maxE+1||e<u.minE-1?new u(e>0?o/0:0):(W=!1,u.rounding=s.s=1,n=Math.min(12,(e+"").length),a=lr(t.times(Je(s,r+n)),r),a.d&&(a=L(a,r+5,1),qt(a.d,r,i)&&(e=r+10,a=L(lr(t.times(Je(s,e+n)),e),e+5,1),+ye(a.d).slice(r+1,r+15)+1==1e14&&(a=L(a,r+1,0)))),a.s=o,W=!0,u.rounding=i,L(a,r,i))};N.toPrecision=function(t,e){var n,r=this,a=r.constructor;return t===void 0?n=Ve(r,r.e<=a.toExpNeg||r.e>=a.toExpPos):(Ne(t,1,nt),e===void 0?e=a.rounding:Ne(e,0,8),r=L(new a(r),t,e),n=Ve(r,t<=r.e||r.e<=a.toExpNeg,t)),r.isNeg()&&!r.isZero()?"-"+n:n};N.toSignificantDigits=N.toSD=function(t,e){var n=this,r=n.constructor;return t===void 0?(t=r.precision,e=r.rounding):(Ne(t,1,nt),e===void 0?e=r.rounding:Ne(e,0,8)),L(new r(n),t,e)};N.toString=function(){var t=this,e=t.constructor,n=Ve(t,t.e<=e.toExpNeg||t.e>=e.toExpPos);return t.isNeg()&&!t.isZero()?"-"+n:n};N.truncated=N.trunc=function(){return L(new this.constructor(this),this.e+1,1)};N.valueOf=N.toJSON=function(){var t=this,e=t.constructor,n=Ve(t,t.e<=e.toExpNeg||t.e>=e.toExpPos);return t.isNeg()?"-"+n:n};function ye(t){var e,n,r,a=t.length-1,i="",o=t[0];if(a>0){for(i+=o,e=1;e<a;e++)r=t[e]+"",n=B-r.length,n&&(i+=ze(n)),i+=r;o=t[e],r=o+"",n=B-r.length,n&&(i+=ze(n))}else if(o===0)return"0";for(;o%10===0;)o/=10;return i+o}function Ne(t,e,n){if(t!==~~t||t<e||t>n)throw Error(Xe+t)}function qt(t,e,n,r){var a,i,o,s;for(i=t[0];i>=10;i/=10)--e;return--e<0?(e+=B,a=0):(a=Math.ceil((e+1)/B),e%=B),i=he(10,B-e),s=t[a]%i|0,r==null?e<3?(e==0?s=s/100|0:e==1&&(s=s/10|0),o=n<4&&s==99999||n>3&&s==49999||s==5e4||s==0):o=(n<4&&s+1==i||n>3&&s+1==i/2)&&(t[a+1]/i/100|0)==he(10,e-2)-1||(s==i/2||s==0)&&(t[a+1]/i/100|0)==0:e<4?(e==0?s=s/1e3|0:e==1?s=s/100|0:e==2&&(s=s/10|0),o=(r||n<4)&&s==9999||!r&&n>3&&s==4999):o=((r||n<4)&&s+1==i||!r&&n>3&&s+1==i/2)&&(t[a+1]/i/1e3|0)==he(10,e-3)-1,o}function vn(t,e,n){for(var r,a=[0],i,o=0,s=t.length;o<s;){for(i=a.length;i--;)a[i]*=e;for(a[0]+=sr.indexOf(t.charAt(o++)),r=0;r<a.length;r++)a[r]>n-1&&(a[r+1]===void 0&&(a[r+1]=0),a[r+1]+=a[r]/n|0,a[r]%=n)}return a.reverse()}function pc(t,e){var n,r,a;if(e.isZero())return e;r=e.d.length,r<32?(n=Math.ceil(r/3),a=(1/Hn(4,n)).toString()):(n=16,a="2.3283064365386962890625e-10"),t.precision+=n,e=_t(t,1,e.times(a),new t(1));for(var i=n;i--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return t.precision-=n,e}var re=function(){function t(r,a,i){var o,s=0,u=r.length;for(r=r.slice();u--;)o=r[u]*a+s,r[u]=o%i|0,s=o/i|0;return s&&r.unshift(s),r}function e(r,a,i,o){var s,u;if(i!=o)u=i>o?1:-1;else for(s=u=0;s<i;s++)if(r[s]!=a[s]){u=r[s]>a[s]?1:-1;break}return u}function n(r,a,i,o){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*o+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,o,s,u){var l,c,f,p,h,v,T,O,I,j,k,Q,be,ue,Ae,le,ke,Oe,te,w,g=r.constructor,m=r.s==a.s?1:-1,b=r.d,_=a.d;if(!b||!b[0]||!_||!_[0])return new g(!r.s||!a.s||(b?_&&b[0]==_[0]:!_)?NaN:b&&b[0]==0||!_?m*0:m/0);for(u?(h=1,c=r.e-a.e):(u=Fe,h=B,c=we(r.e/h)-we(a.e/h)),te=_.length,ke=b.length,I=new g(m),j=I.d=[],f=0;_[f]==(b[f]||0);f++);if(_[f]>(b[f]||0)&&c--,i==null?(ue=i=g.precision,o=g.rounding):s?ue=i+(r.e-a.e)+1:ue=i,ue<0)j.push(1),v=!0;else{if(ue=ue/h+2|0,f=0,te==1){for(p=0,_=_[0],ue++;(f<ke||p)&&ue--;f++)Ae=p*u+(b[f]||0),j[f]=Ae/_|0,p=Ae%_|0;v=p||f<ke}else{for(p=u/(_[0]+1)|0,p>1&&(_=t(_,p,u),b=t(b,p,u),te=_.length,ke=b.length),le=te,k=b.slice(0,te),Q=k.length;Q<te;)k[Q++]=0;w=_.slice(),w.unshift(0),Oe=_[0],_[1]>=u/2&&++Oe;do p=0,l=e(_,k,te,Q),l<0?(be=k[0],te!=Q&&(be=be*u+(k[1]||0)),p=be/Oe|0,p>1?(p>=u&&(p=u-1),T=t(_,p,u),O=T.length,Q=k.length,l=e(T,k,O,Q),l==1&&(p--,n(T,te<O?w:_,O,u))):(p==0&&(l=p=1),T=_.slice()),O=T.length,O<Q&&T.unshift(0),n(k,T,Q,u),l==-1&&(Q=k.length,l=e(_,k,te,Q),l<1&&(p++,n(k,te<Q?w:_,Q,u))),Q=k.length):l===0&&(p++,k=[0]),j[f++]=p,l&&k[0]?k[Q++]=b[le]||0:(k=[b[le]],Q=1);while((le++<ke||k[0]!==void 0)&&ue--);v=k[0]!==void 0}j[0]||j.shift()}if(h==1)I.e=c,Ho=v;else{for(f=1,p=j[0];p>=10;p/=10)f++;I.e=f+c*h-1,L(I,s?i+I.e+1:i,o,v)}return I}}();function L(t,e,n,r){var a,i,o,s,u,l,c,f,p,h=t.constructor;e:if(e!=null){if(f=t.d,!f)return t;for(a=1,s=f[0];s>=10;s/=10)a++;if(i=e-a,i<0)i+=B,o=e,c=f[p=0],u=c/he(10,a-o-1)%10|0;else if(p=Math.ceil((i+1)/B),s=f.length,p>=s)if(r){for(;s++<=p;)f.push(0);c=u=0,a=1,i%=B,o=i-B+1}else break e;else{for(c=s=f[p],a=1;s>=10;s/=10)a++;i%=B,o=i-B+a,u=o<0?0:c/he(10,a-o-1)%10|0}if(r=r||e<0||f[p+1]!==void 0||(o<0?c:c%he(10,a-o-1)),l=n<4?(u||r)&&(n==0||n==(t.s<0?3:2)):u>5||u==5&&(n==4||r||n==6&&(i>0?o>0?c/he(10,a-o):0:f[p-1])%10&1||n==(t.s<0?8:7)),e<1||!f[0])return f.length=0,l?(e-=t.e+1,f[0]=he(10,(B-e%B)%B),t.e=-e||0):f[0]=t.e=0,t;if(i==0?(f.length=p,s=1,p--):(f.length=p+1,s=he(10,B-i),f[p]=o>0?(c/he(10,a-o)%he(10,o)|0)*s:0),l)for(;;)if(p==0){for(i=1,o=f[0];o>=10;o/=10)i++;for(o=f[0]+=s,s=1;o>=10;o/=10)s++;i!=s&&(t.e++,f[0]==Fe&&(f[0]=1));break}else{if(f[p]+=s,f[p]!=Fe)break;f[p--]=0,s=1}for(i=f.length;f[--i]===0;)f.pop()}return W&&(t.e>h.maxE?(t.d=null,t.e=NaN):t.e<h.minE&&(t.e=0,t.d=[0])),t}function Ve(t,e,n){if(!t.isFinite())return Ko(t);var r,a=t.e,i=ye(t.d),o=i.length;return e?(n&&(r=n-o)>0?i=i.charAt(0)+"."+i.slice(1)+ze(r):o>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(t.e<0?"e":"e+")+t.e):a<0?(i="0."+ze(-a-1)+i,n&&(r=n-o)>0&&(i+=ze(r))):a>=o?(i+=ze(a+1-o),n&&(r=n-a-1)>0&&(i=i+"."+ze(r))):((r=a+1)<o&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-o)>0&&(a+1===o&&(i+="."),i+=ze(r))),i}function Gn(t,e){var n=t[0];for(e*=B;n>=10;n/=10)e++;return e}function Cn(t,e,n){if(e>dc)throw W=!0,n&&(t.precision=n),Error(Zo);return L(new t(En),e,1,!0)}function $e(t,e,n){if(e>ur)throw Error(Zo);return L(new t(Sn),e,n,!0)}function Jo(t){var e=t.length-1,n=e*B+1;if(e=t[e],e){for(;e%10==0;e/=10)n--;for(e=t[0];e>=10;e/=10)n++}return n}function ze(t){for(var e="";t--;)e+="0";return e}function Qo(t,e,n,r){var a,i=new t(1),o=Math.ceil(r/B+4);for(W=!1;;){if(n%2&&(i=i.times(e),Hr(i.d,o)&&(a=!0)),n=we(n/2),n===0){n=i.d.length-1,a&&i.d[n]===0&&++i.d[n];break}e=e.times(e),Hr(e.d,o)}return W=!0,i}function Gr(t){return t.d[t.d.length-1]&1}function Xo(t,e,n){for(var r,a=new t(e[0]),i=0;++i<e.length;)if(r=new t(e[i]),r.s)a[n](r)&&(a=r);else{a=r;break}return a}function lr(t,e){var n,r,a,i,o,s,u,l=0,c=0,f=0,p=t.constructor,h=p.rounding,v=p.precision;if(!t.d||!t.d[0]||t.e>17)return new p(t.d?t.d[0]?t.s<0?0:1/0:1:t.s?t.s<0?0:t:0/0);for(e==null?(W=!1,u=v):u=e,s=new p(.03125);t.e>-2;)t=t.times(s),f+=5;for(r=Math.log(he(2,f))/Math.LN10*2+5|0,u+=r,n=i=o=new p(1),p.precision=u;;){if(i=L(i.times(t),u,1),n=n.times(++c),s=o.plus(re(i,n,u,1)),ye(s.d).slice(0,u)===ye(o.d).slice(0,u)){for(a=f;a--;)o=L(o.times(o),u,1);if(e==null)if(l<3&&qt(o.d,u-r,h,l))p.precision=u+=10,n=i=s=new p(1),c=0,l++;else return L(o,p.precision=v,h,W=!0);else return p.precision=v,o}o=s}}function Je(t,e){var n,r,a,i,o,s,u,l,c,f,p,h=1,v=10,T=t,O=T.d,I=T.constructor,j=I.rounding,k=I.precision;if(T.s<0||!O||!O[0]||!T.e&&O[0]==1&&O.length==1)return new I(O&&!O[0]?-1/0:T.s!=1?NaN:O?0:T);if(e==null?(W=!1,c=k):c=e,I.precision=c+=v,n=ye(O),r=n.charAt(0),Math.abs(i=T.e)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)T=T.times(t),n=ye(T.d),r=n.charAt(0),h++;i=T.e,r>1?(T=new I("0."+n),i++):T=new I(r+"."+n.slice(1))}else return l=Cn(I,c+2,k).times(i+""),T=Je(new I(r+"."+n.slice(1)),c-v).plus(l),I.precision=k,e==null?L(T,k,j,W=!0):T;for(f=T,u=o=T=re(T.minus(1),T.plus(1),c,1),p=L(T.times(T),c,1),a=3;;){if(o=L(o.times(p),c,1),l=u.plus(re(o,new I(a),c,1)),ye(l.d).slice(0,c)===ye(u.d).slice(0,c))if(u=u.times(2),i!==0&&(u=u.plus(Cn(I,c+2,k).times(i+""))),u=re(u,new I(h),c,1),e==null)if(qt(u.d,c-v,j,s))I.precision=c+=v,l=o=T=re(f.minus(1),f.plus(1),c,1),p=L(T.times(T),c,1),a=s=1;else return L(u,I.precision=k,j,W=!0);else return I.precision=k,u;u=l,a+=2}}function Ko(t){return String(t.s*t.s/0)}function cr(t,e){var n,r,a;for((n=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(n<0&&(n=r),n+=+e.slice(r+1),e=e.substring(0,r)):n<0&&(n=e.length),r=0;e.charCodeAt(r)===48;r++);for(a=e.length;e.charCodeAt(a-1)===48;--a);if(e=e.slice(r,a),e){if(a-=r,t.e=n=n-r-1,t.d=[],r=(n+1)%B,n<0&&(r+=B),r<a){for(r&&t.d.push(+e.slice(0,r)),a-=B;r<a;)t.d.push(+e.slice(r,r+=B));e=e.slice(r),r=B-e.length}else r-=a;for(;r--;)e+="0";t.d.push(+e),W&&(t.e>t.constructor.maxE?(t.d=null,t.e=NaN):t.e<t.constructor.minE&&(t.e=0,t.d=[0]))}else t.e=0,t.d=[0];return t}function hc(t,e){var n,r,a,i,o,s,u,l,c;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Yo.test(e))return cr(t,e)}else if(e==="Infinity"||e==="NaN")return+e||(t.s=NaN),t.e=NaN,t.d=null,t;if(lc.test(e))n=16,e=e.toLowerCase();else if(uc.test(e))n=2;else if(cc.test(e))n=8;else throw Error(Xe+e);for(i=e.search(/p/i),i>0?(u=+e.slice(i+1),e=e.substring(2,i)):e=e.slice(2),i=e.indexOf("."),o=i>=0,r=t.constructor,o&&(e=e.replace(".",""),s=e.length,i=s-i,a=Qo(r,new r(n),i,i*2)),l=vn(e,n,Fe),c=l.length-1,i=c;l[i]===0;--i)l.pop();return i<0?new r(t.s*0):(t.e=Gn(l,c),t.d=l,W=!1,o&&(t=re(t,a,s*4)),u&&(t=t.times(Math.abs(u)<54?he(2,u):bt.pow(2,u))),W=!0,t)}function mc(t,e){var n,r=e.d.length;if(r<3)return e.isZero()?e:_t(t,2,e,e);n=1.4*Math.sqrt(r),n=n>16?16:n|0,e=e.times(1/Hn(5,n)),e=_t(t,2,e,e);for(var a,i=new t(5),o=new t(16),s=new t(20);n--;)a=e.times(e),e=e.times(i.plus(a.times(o.times(a).minus(s))));return e}function _t(t,e,n,r,a){var i,o,s,u,l=t.precision,c=Math.ceil(l/B);for(W=!1,u=n.times(n),s=new t(r);;){if(o=re(s.times(u),new t(e++*e++),l,1),s=a?r.plus(o):r.minus(o),r=re(o.times(u),new t(e++*e++),l,1),o=s.plus(r),o.d[c]!==void 0){for(i=c;o.d[i]===s.d[i]&&i--;);if(i==-1)break}i=s,s=r,r=o,o=i}return W=!0,o.d.length=c+1,o}function Hn(t,e){for(var n=t;--e;)n*=t;return n}function eu(t,e){var n,r=e.s<0,a=$e(t,t.precision,1),i=a.times(.5);if(e=e.abs(),e.lte(i))return He=r?4:1,e;if(n=e.divToInt(a),n.isZero())He=r?3:2;else{if(e=e.minus(n.times(a)),e.lte(i))return He=Gr(n)?r?2:3:r?4:1,e;He=Gr(n)?r?1:4:r?3:2}return e.minus(a).abs()}function Ir(t,e,n,r){var a,i,o,s,u,l,c,f,p,h=t.constructor,v=n!==void 0;if(v?(Ne(n,1,nt),r===void 0?r=h.rounding:Ne(r,0,8)):(n=h.precision,r=h.rounding),!t.isFinite())c=Ko(t);else{for(c=Ve(t),o=c.indexOf("."),v?(a=2,e==16?n=n*4-3:e==8&&(n=n*3-2)):a=e,o>=0&&(c=c.replace(".",""),p=new h(1),p.e=c.length-o,p.d=vn(Ve(p),10,a),p.e=p.d.length),f=vn(c,10,a),i=u=f.length;f[--u]==0;)f.pop();if(!f[0])c=v?"0p+0":"0";else{if(o<0?i--:(t=new h(t),t.d=f,t.e=i,t=re(t,p,n,r,0,a),f=t.d,i=t.e,l=Ho),o=f[n],s=a/2,l=l||f[n+1]!==void 0,l=r<4?(o!==void 0||l)&&(r===0||r===(t.s<0?3:2)):o>s||o===s&&(r===4||l||r===6&&f[n-1]&1||r===(t.s<0?8:7)),f.length=n,l)for(;++f[--n]>a-1;)f[n]=0,n||(++i,f.unshift(1));for(u=f.length;!f[u-1];--u);for(o=0,c="";o<u;o++)c+=sr.charAt(f[o]);if(v){if(u>1)if(e==16||e==8){for(o=e==16?4:3,--u;u%o;u++)c+="0";for(f=vn(c,a,e),u=f.length;!f[u-1];--u);for(o=1,c="1.";o<u;o++)c+=sr.charAt(f[o])}else c=c.charAt(0)+"."+c.slice(1);c=c+(i<0?"p":"p+")+i}else if(i<0){for(;++i;)c="0"+c;c="0."+c}else if(++i>u)for(i-=u;i--;)c+="0";else i<u&&(c=c.slice(0,i)+"."+c.slice(i))}c=(e==16?"0x":e==2?"0b":e==8?"0o":"")+c}return t.s<0?"-"+c:c}function Hr(t,e){if(t.length>e)return t.length=e,!0}function vc(t){return new this(t).abs()}function gc(t){return new this(t).acos()}function yc(t){return new this(t).acosh()}function wc(t,e){return new this(t).plus(e)}function _c(t){return new this(t).asin()}function bc(t){return new this(t).asinh()}function kc(t){return new this(t).atan()}function Tc(t){return new this(t).atanh()}function Ec(t,e){t=new this(t),e=new this(e);var n,r=this.precision,a=this.rounding,i=r+4;return!t.s||!e.s?n=new this(NaN):!t.d&&!e.d?(n=$e(this,i,1).times(e.s>0?.25:.75),n.s=t.s):!e.d||t.isZero()?(n=e.s<0?$e(this,r,a):new this(0),n.s=t.s):!t.d||e.isZero()?(n=$e(this,i,1).times(.5),n.s=t.s):e.s<0?(this.precision=i,this.rounding=1,n=this.atan(re(t,e,i,1)),e=$e(this,i,1),this.precision=r,this.rounding=a,n=t.s<0?n.minus(e):n.plus(e)):n=this.atan(re(t,e,i,1)),n}function Sc(t){return new this(t).cbrt()}function Cc(t){return L(t=new this(t),t.e+1,2)}function Dc(t,e,n){return new this(t).clamp(e,n)}function Nc(t){if(!t||typeof t!="object")throw Error(Bn+"Object expected");var e,n,r,a=t.defaults===!0,i=["precision",1,nt,"rounding",0,8,"toExpNeg",-gt,0,"toExpPos",0,gt,"maxE",0,gt,"minE",-gt,0,"modulo",0,9];for(e=0;e<i.length;e+=3)if(n=i[e],a&&(this[n]=or[n]),(r=t[n])!==void 0)if(we(r)===r&&r>=i[e+1]&&r<=i[e+2])this[n]=r;else throw Error(Xe+n+": "+r);if(n="crypto",a&&(this[n]=or[n]),(r=t[n])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[n]=!0;else throw Error(Wo);else this[n]=!1;else throw Error(Xe+n+": "+r);return this}function Ic(t){return new this(t).cos()}function Pc(t){return new this(t).cosh()}function tu(t){var e,n,r;function a(i){var o,s,u,l=this;if(!(l instanceof a))return new a(i);if(l.constructor=a,Zr(i)){l.s=i.s,W?!i.d||i.e>a.maxE?(l.e=NaN,l.d=null):i.e<a.minE?(l.e=0,l.d=[0]):(l.e=i.e,l.d=i.d.slice()):(l.e=i.e,l.d=i.d?i.d.slice():i.d);return}if(u=typeof i,u==="number"){if(i===0){l.s=1/i<0?-1:1,l.e=0,l.d=[0];return}if(i<0?(i=-i,l.s=-1):l.s=1,i===~~i&&i<1e7){for(o=0,s=i;s>=10;s/=10)o++;W?o>a.maxE?(l.e=NaN,l.d=null):o<a.minE?(l.e=0,l.d=[0]):(l.e=o,l.d=[i]):(l.e=o,l.d=[i]);return}else if(i*0!==0){i||(l.s=NaN),l.e=NaN,l.d=null;return}return cr(l,i.toString())}else if(u!=="string")throw Error(Xe+i);return(s=i.charCodeAt(0))===45?(i=i.slice(1),l.s=-1):(s===43&&(i=i.slice(1)),l.s=1),Yo.test(i)?cr(l,i):hc(l,i)}if(a.prototype=N,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.EUCLID=9,a.config=a.set=Nc,a.clone=tu,a.isDecimal=Zr,a.abs=vc,a.acos=gc,a.acosh=yc,a.add=wc,a.asin=_c,a.asinh=bc,a.atan=kc,a.atanh=Tc,a.atan2=Ec,a.cbrt=Sc,a.ceil=Cc,a.clamp=Dc,a.cos=Ic,a.cosh=Pc,a.div=Oc,a.exp=Ac,a.floor=Rc,a.hypot=$c,a.ln=Mc,a.log=Fc,a.log10=xc,a.log2=qc,a.max=Lc,a.min=jc,a.mod=Uc,a.mul=Vc,a.pow=Bc,a.random=Gc,a.round=Hc,a.sign=Zc,a.sin=Wc,a.sinh=zc,a.sqrt=Yc,a.sub=Jc,a.sum=Qc,a.tan=Xc,a.tanh=Kc,a.trunc=ef,t===void 0&&(t={}),t&&t.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<r.length;)t.hasOwnProperty(n=r[e++])||(t[n]=this[n]);return a.config(t),a}function Oc(t,e){return new this(t).div(e)}function Ac(t){return new this(t).exp()}function Rc(t){return L(t=new this(t),t.e+1,3)}function $c(){var t,e,n=new this(0);for(W=!1,t=0;t<arguments.length;)if(e=new this(arguments[t++]),e.d)n.d&&(n=n.plus(e.times(e)));else{if(e.s)return W=!0,new this(1/0);n=e}return W=!0,n.sqrt()}function Zr(t){return t instanceof bt||t&&t.toStringTag===zo||!1}function Mc(t){return new this(t).ln()}function Fc(t,e){return new this(t).log(e)}function qc(t){return new this(t).log(2)}function xc(t){return new this(t).log(10)}function Lc(){return Xo(this,arguments,"lt")}function jc(){return Xo(this,arguments,"gt")}function Uc(t,e){return new this(t).mod(e)}function Vc(t,e){return new this(t).mul(e)}function Bc(t,e){return new this(t).pow(e)}function Gc(t){var e,n,r,a,i=0,o=new this(1),s=[];if(t===void 0?t=this.precision:Ne(t,1,nt),r=Math.ceil(t/B),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));i<r;)a=e[i],a>=429e7?e[i]=crypto.getRandomValues(new Uint32Array(1))[0]:s[i++]=a%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(r*=4);i<r;)a=e[i]+(e[i+1]<<8)+(e[i+2]<<16)+((e[i+3]&127)<<24),a>=214e7?crypto.randomBytes(4).copy(e,i):(s.push(a%1e7),i+=4);i=r/4}else throw Error(Wo);else for(;i<r;)s[i++]=Math.random()*1e7|0;for(r=s[--i],t%=B,r&&t&&(a=he(10,B-t),s[i]=(r/a|0)*a);s[i]===0;i--)s.pop();if(i<0)n=0,s=[0];else{for(n=-1;s[0]===0;n-=B)s.shift();for(r=1,a=s[0];a>=10;a/=10)r++;r<B&&(n-=B-r)}return o.e=n,o.d=s,o}function Hc(t){return L(t=new this(t),t.e+1,this.rounding)}function Zc(t){return t=new this(t),t.d?t.d[0]?t.s:0*t.s:t.s||NaN}function Wc(t){return new this(t).sin()}function zc(t){return new this(t).sinh()}function Yc(t){return new this(t).sqrt()}function Jc(t,e){return new this(t).sub(e)}function Qc(){var t=0,e=arguments,n=new this(e[t]);for(W=!1;n.s&&++t<e.length;)n=n.plus(e[t]);return W=!0,L(n,this.precision,this.rounding)}function Xc(t){return new this(t).tan()}function Kc(t){return new this(t).tanh()}function ef(t){return L(t=new this(t),t.e+1,1)}N[Symbol.for("nodejs.util.inspect.custom")]=N.toString;N[Symbol.toStringTag]="Decimal";var bt=N.constructor=tu(or);En=new bt(En);Sn=new bt(Sn);function tf(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nf(t){var e=tf(t,"string");return typeof e=="symbol"?e:String(e)}function Wr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,nf(r.key),r)}}function nn(t,e,n){return e&&Wr(t.prototype,e),n&&Wr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xt(t,e){return xt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},xt(t,e)}function nu(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&xt(t,e)}function Lt(t){return Lt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lt(t)}function ru(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function af(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rf(t)}function au(t){var e=ru();return function(){var r=Lt(t),a;if(e){var i=Lt(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return af(this,a)}}function sf(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function gn(t,e,n){return ru()?gn=Reflect.construct.bind():gn=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),l=new u;return o&&xt(l,o.prototype),l},gn.apply(null,arguments)}function fr(t){var e=typeof Map=="function"?new Map:void 0;return fr=function(r){if(r===null||!sf(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,a)}function a(){return gn(r,arguments,Lt(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),xt(a,r)},fr(t)}var iu=function(t){nu(n,t);var e=au(n);function n(r){return rn(this,n),e.call(this,"InvariantError: ".concat(r))}return nn(n)}(fr(Error));function jt(t,e){if(!t)throw new iu(e)}bt.clone({precision:32,toExpPos:18,toExpNeg:-19,rounding:bt.ROUND_HALF_CEIL});function dr(t){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dr(t)}var zr;(function(t){t.ETHEREUM="ethereum",t.POLYGON="polygon"})(zr||(zr={}));var Yr;(function(t){t[t.NATIVE=0]="NATIVE",t[t.ERC20=1]="ERC20",t[t.FIAT=2]="FIAT"})(Yr||(Yr={}));var Jr;(function(t){t.ETH="ETH",t.MATIC="MATIC",t.USD="USD",t.USDC="USDC"})(Jr||(Jr={}));var Qr;(function(t){t[t.ETHER=0]="ETHER",t[t.MATIC=1]="MATIC"})(Qr||(Qr={}));function of(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var su=of,uf=typeof At=="object"&&At&&At.Object===Object&&At,lf=uf,cf=lf,ff=typeof self=="object"&&self&&self.Object===Object&&self,df=cf||ff||Function("return this")(),Pr=df,pf=Pr,hf=pf.Symbol,Or=hf,Xr=Or,ou=Object.prototype,mf=ou.hasOwnProperty,vf=ou.toString,Ot=Xr?Xr.toStringTag:void 0;function gf(t){var e=mf.call(t,Ot),n=t[Ot];try{t[Ot]=void 0;var r=!0}catch{}var a=vf.call(t);return r&&(e?t[Ot]=n:delete t[Ot]),a}var yf=gf,wf=Object.prototype,_f=wf.toString;function bf(t){return _f.call(t)}var kf=bf,Kr=Or,Tf=yf,Ef=kf,Sf="[object Null]",Cf="[object Undefined]",ea=Kr?Kr.toStringTag:void 0;function Df(t){return t==null?t===void 0?Cf:Sf:ea&&ea in Object(t)?Tf(t):Ef(t)}var Nf=Df,If=Nf,Pf=su,Of="[object AsyncFunction]",Af="[object Function]",Rf="[object GeneratorFunction]",$f="[object Proxy]";function Mf(t){if(!Pf(t))return!1;var e=If(t);return e==Af||e==Rf||e==Of||e==$f}var Ff=Mf,qf=Pr,xf=qf["__core-js_shared__"],Lf=xf,er=Lf,ta=function(){var t=/[^.]+$/.exec(er&&er.keys&&er.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function jf(t){return!!ta&&ta in t}var Uf=jf,Vf=Function.prototype,Bf=Vf.toString;function Gf(t){if(t!=null){try{return Bf.call(t)}catch{}try{return t+""}catch{}}return""}var Hf=Gf,Zf=Ff,Wf=Uf,zf=su,Yf=Hf,Jf=/[\\^$.*+?()[\]{}|]/g,Qf=/^\[object .+?Constructor\]$/,Xf=Function.prototype,Kf=Object.prototype,ed=Xf.toString,td=Kf.hasOwnProperty,nd=RegExp("^"+ed.call(td).replace(Jf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rd(t){if(!zf(t)||Wf(t))return!1;var e=Zf(t)?nd:Qf;return e.test(Yf(t))}var ad=rd;function id(t,e){return t==null?void 0:t[e]}var sd=id,od=ad,ud=sd;function ld(t,e){var n=ud(t,e);return od(n)?n:void 0}var uu=ld,cd=uu,fd=cd(Object,"create"),Zn=fd,na=Zn;function dd(){this.__data__=na?na(null):{},this.size=0}var pd=dd;function hd(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var md=hd,vd=Zn,gd="__lodash_hash_undefined__",yd=Object.prototype,wd=yd.hasOwnProperty;function _d(t){var e=this.__data__;if(vd){var n=e[t];return n===gd?void 0:n}return wd.call(e,t)?e[t]:void 0}var bd=_d,kd=Zn,Td=Object.prototype,Ed=Td.hasOwnProperty;function Sd(t){var e=this.__data__;return kd?e[t]!==void 0:Ed.call(e,t)}var Cd=Sd,Dd=Zn,Nd="__lodash_hash_undefined__";function Id(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Dd&&e===void 0?Nd:e,this}var Pd=Id,Od=pd,Ad=md,Rd=bd,$d=Cd,Md=Pd;function St(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}St.prototype.clear=Od;St.prototype.delete=Ad;St.prototype.get=Rd;St.prototype.has=$d;St.prototype.set=Md;var Fd=St;function qd(){this.__data__=[],this.size=0}var xd=qd;function Ld(t,e){return t===e||t!==t&&e!==e}var jd=Ld,Ud=jd;function Vd(t,e){for(var n=t.length;n--;)if(Ud(t[n][0],e))return n;return-1}var Wn=Vd,Bd=Wn,Gd=Array.prototype,Hd=Gd.splice;function Zd(t){var e=this.__data__,n=Bd(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Hd.call(e,n,1),--this.size,!0}var Wd=Zd,zd=Wn;function Yd(t){var e=this.__data__,n=zd(e,t);return n<0?void 0:e[n][1]}var Jd=Yd,Qd=Wn;function Xd(t){return Qd(this.__data__,t)>-1}var Kd=Xd,ep=Wn;function tp(t,e){var n=this.__data__,r=ep(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var np=tp,rp=xd,ap=Wd,ip=Jd,sp=Kd,op=np;function Ct(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ct.prototype.clear=rp;Ct.prototype.delete=ap;Ct.prototype.get=ip;Ct.prototype.has=sp;Ct.prototype.set=op;var up=Ct,lp=uu,cp=Pr,fp=lp(cp,"Map"),dp=fp,ra=Fd,pp=up,hp=dp;function mp(){this.size=0,this.__data__={hash:new ra,map:new(hp||pp),string:new ra}}var vp=mp;function gp(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var yp=gp,wp=yp;function _p(t,e){var n=t.__data__;return wp(e)?n[typeof e=="string"?"string":"hash"]:n.map}var zn=_p,bp=zn;function kp(t){var e=bp(this,t).delete(t);return this.size-=e?1:0,e}var Tp=kp,Ep=zn;function Sp(t){return Ep(this,t).get(t)}var Cp=Sp,Dp=zn;function Np(t){return Dp(this,t).has(t)}var Ip=Np,Pp=zn;function Op(t,e){var n=Pp(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var Ap=Op,Rp=vp,$p=Tp,Mp=Cp,Fp=Ip,qp=Ap;function Dt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Dt.prototype.clear=Rp;Dt.prototype.delete=$p;Dt.prototype.get=Mp;Dt.prototype.has=Fp;Dt.prototype.set=qp;var xp=Dt,lu=xp,Lp="Expected a function";function Ar(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Lp);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Ar.Cache||lu),n}Ar.Cache=lu;var jp=Ar,Up=jp,Vp=500;function Bp(t){var e=Up(t,function(r){return n.size===Vp&&n.clear(),r}),n=e.cache;return e}var Gp=Bp,Hp=Gp,Zp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wp=/\\(\\)?/g;Hp(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Zp,function(n,r,a,i){e.push(a?i.replace(Wp,"$1"):r||n)}),e});var aa=Or,ia=aa?aa.prototype:void 0;ia&&ia.toString;var Dn=function(){function t(){rn(this,t)}return nn(t,null,[{key:"toUnix",value:function(n){return n instanceof Date?n.getTime():typeof n=="string"?new Date(n).getTime():n}},{key:"toISOString",value:function(n){return typeof n=="string"||typeof n=="number"?new Date(n).toISOString():n.toISOString()}},{key:"unix",value:function(){return Date.now()}},{key:"unixInSeconds",value:function(){return this.unix()/1e3}},{key:"hoursToMs",value:function(n){return this.minutesToMs(n*60)}},{key:"minutesToMs",value:function(n){return n*6*10*1e3}},{key:"secondsToMs",value:function(n){return n*1e3}}]),t}(),zp=function(){function t(e){rn(this,t),this.value=e}return nn(t,[{key:"isSuccess",value:function(){return!0}},{key:"isFailure",value:function(){return!1}},{key:"unwrap",value:function(){return this.value}}]),t}(),Yp=function(){function t(e){rn(this,t),this.error=e}return nn(t,[{key:"isSuccess",value:function(){return!1}},{key:"isFailure",value:function(){return!0}},{key:"unwrap",value:function(){throw this.error}}]),t}();function pr(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return new zp(t)}var Nn=function(e){return new Yp(e)};function sa(t){if(!(t instanceof Error))throw new iu("Invalid error type. Received ".concat(dr(t),", expected instance of Error"))}function Se(){Se=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(w,g,m){w[g]=m.value},a=typeof Symbol=="function"?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(w,g,m){return Object.defineProperty(w,g,{value:m,enumerable:!0,configurable:!0,writable:!0}),w[g]}try{u({},"")}catch{u=function(g,m,b){return g[m]=b}}function l(w,g,m,b){var _=g&&g.prototype instanceof p?g:p,R=Object.create(_.prototype),x=new ke(b||[]);return r(R,"_invoke",{value:be(w,m,x)}),R}function c(w,g,m){try{return{type:"normal",arg:w.call(g,m)}}catch(b){return{type:"throw",arg:b}}}t.wrap=l;var f={};function p(){}function h(){}function v(){}var T={};u(T,i,function(){return this});var O=Object.getPrototypeOf,I=O&&O(O(Oe([])));I&&I!==e&&n.call(I,i)&&(T=I);var j=v.prototype=p.prototype=Object.create(T);function k(w){["next","throw","return"].forEach(function(g){u(w,g,function(m){return this._invoke(g,m)})})}function Q(w,g){function m(_,R,x,U){var K=c(w[_],w,R);if(K.type!=="throw"){var pe=K.arg,Te=pe.value;return Te&&typeof Te=="object"&&n.call(Te,"__await")?g.resolve(Te.__await).then(function(Ee){m("next",Ee,x,U)},function(Ee){m("throw",Ee,x,U)}):g.resolve(Te).then(function(Ee){pe.value=Ee,x(pe)},function(Ee){return m("throw",Ee,x,U)})}U(K.arg)}var b;r(this,"_invoke",{value:function(_,R){function x(){return new g(function(U,K){m(_,R,U,K)})}return b=b?b.then(x,x):x()}})}function be(w,g,m){var b="suspendedStart";return function(_,R){if(b==="executing")throw new Error("Generator is already running");if(b==="completed"){if(_==="throw")throw R;return te()}for(m.method=_,m.arg=R;;){var x=m.delegate;if(x){var U=ue(x,m);if(U){if(U===f)continue;return U}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(b==="suspendedStart")throw b="completed",m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);b="executing";var K=c(w,g,m);if(K.type==="normal"){if(b=m.done?"completed":"suspendedYield",K.arg===f)continue;return{value:K.arg,done:m.done}}K.type==="throw"&&(b="completed",m.method="throw",m.arg=K.arg)}}}function ue(w,g){var m=g.method,b=w.iterator[m];if(b===void 0)return g.delegate=null,m==="throw"&&w.iterator.return&&(g.method="return",g.arg=void 0,ue(w,g),g.method==="throw")||m!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+m+"' method")),f;var _=c(b,w.iterator,g.arg);if(_.type==="throw")return g.method="throw",g.arg=_.arg,g.delegate=null,f;var R=_.arg;return R?R.done?(g[w.resultName]=R.value,g.next=w.nextLoc,g.method!=="return"&&(g.method="next",g.arg=void 0),g.delegate=null,f):R:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,f)}function Ae(w){var g={tryLoc:w[0]};1 in w&&(g.catchLoc=w[1]),2 in w&&(g.finallyLoc=w[2],g.afterLoc=w[3]),this.tryEntries.push(g)}function le(w){var g=w.completion||{};g.type="normal",delete g.arg,w.completion=g}function ke(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(Ae,this),this.reset(!0)}function Oe(w){if(w){var g=w[i];if(g)return g.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var m=-1,b=function _(){for(;++m<w.length;)if(n.call(w,m))return _.value=w[m],_.done=!1,_;return _.value=void 0,_.done=!0,_};return b.next=b}}return{next:te}}function te(){return{value:void 0,done:!0}}return h.prototype=v,r(j,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(w){var g=typeof w=="function"&&w.constructor;return!!g&&(g===h||(g.displayName||g.name)==="GeneratorFunction")},t.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,v):(w.__proto__=v,u(w,s,"GeneratorFunction")),w.prototype=Object.create(j),w},t.awrap=function(w){return{__await:w}},k(Q.prototype),u(Q.prototype,o,function(){return this}),t.AsyncIterator=Q,t.async=function(w,g,m,b,_){_===void 0&&(_=Promise);var R=new Q(l(w,g,m,b),_);return t.isGeneratorFunction(g)?R:R.next().then(function(x){return x.done?x.value:R.next()})},k(j),u(j,s,"Generator"),u(j,i,function(){return this}),u(j,"toString",function(){return"[object Generator]"}),t.keys=function(w){var g=Object(w),m=[];for(var b in g)m.push(b);return m.reverse(),function _(){for(;m.length;){var R=m.pop();if(R in g)return _.value=R,_.done=!1,_}return _.done=!0,_}},t.values=Oe,ke.prototype={constructor:ke,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(le),!w)for(var g in this)g.charAt(0)==="t"&&n.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=void 0)},stop:function(){this.done=!0;var w=this.tryEntries[0].completion;if(w.type==="throw")throw w.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var g=this;function m(K,pe){return R.type="throw",R.arg=w,g.next=K,pe&&(g.method="next",g.arg=void 0),!!pe}for(var b=this.tryEntries.length-1;b>=0;--b){var _=this.tryEntries[b],R=_.completion;if(_.tryLoc==="root")return m("end");if(_.tryLoc<=this.prev){var x=n.call(_,"catchLoc"),U=n.call(_,"finallyLoc");if(x&&U){if(this.prev<_.catchLoc)return m(_.catchLoc,!0);if(this.prev<_.finallyLoc)return m(_.finallyLoc)}else if(x){if(this.prev<_.catchLoc)return m(_.catchLoc,!0)}else{if(!U)throw new Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return m(_.finallyLoc)}}}},abrupt:function(w,g){for(var m=this.tryEntries.length-1;m>=0;--m){var b=this.tryEntries[m];if(b.tryLoc<=this.prev&&n.call(b,"finallyLoc")&&this.prev<b.finallyLoc){var _=b;break}}_&&(w==="break"||w==="continue")&&_.tryLoc<=g&&g<=_.finallyLoc&&(_=null);var R=_?_.completion:{};return R.type=w,R.arg=g,_?(this.method="next",this.next=_.finallyLoc,f):this.complete(R)},complete:function(w,g){if(w.type==="throw")throw w.arg;return w.type==="break"||w.type==="continue"?this.next=w.arg:w.type==="return"?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):w.type==="normal"&&g&&(this.next=g),f},finish:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.finallyLoc===w)return this.complete(m.completion,m.afterLoc),le(m),f}},catch:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.tryLoc===w){var b=m.completion;if(b.type==="throw"){var _=b.arg;le(m)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(w,g,m){return this.delegate={iterator:Oe(w),resultName:g,nextLoc:m},this.method==="next"&&(this.arg=void 0),f}},t}function oa(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(l){n(l);return}s.done?e(u):Promise.resolve(u).then(r,a)}function at(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(u){oa(i,r,a,o,s,"next",u)}function s(u){oa(i,r,a,o,s,"throw",u)}o(void 0)})}}var ee;(function(t){t.assertEqual=a=>a;function e(a){}t.assertIs=e;function n(a){throw new Error}t.assertNever=n,t.arrayToEnum=a=>{const i={};for(const o of a)i[o]=o;return i},t.getValidEnumValues=a=>{const i=t.objectKeys(a).filter(s=>typeof a[a[s]]!="number"),o={};for(const s of i)o[s]=a[s];return t.objectValues(o)},t.objectValues=a=>t.objectKeys(a).map(function(i){return a[i]}),t.objectKeys=typeof Object.keys=="function"?a=>Object.keys(a):a=>{const i=[];for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&i.push(o);return i},t.find=(a,i)=>{for(const o of a)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?a=>Number.isInteger(a):a=>typeof a=="number"&&isFinite(a)&&Math.floor(a)===a;function r(a,i=" | "){return a.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(a,i)=>typeof i=="bigint"?i.toString():i})(ee||(ee={}));var hr;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(hr||(hr={}));const $=ee.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ye=t=>{switch(typeof t){case"undefined":return $.undefined;case"string":return $.string;case"number":return isNaN(t)?$.nan:$.number;case"boolean":return $.boolean;case"function":return $.function;case"bigint":return $.bigint;case"symbol":return $.symbol;case"object":return Array.isArray(t)?$.array:t===null?$.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?$.promise:typeof Map<"u"&&t instanceof Map?$.map:typeof Set<"u"&&t instanceof Set?$.set:typeof Date<"u"&&t instanceof Date?$.date:$.object;default:return $.unknown}},P=ee.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Jp=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class qe extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},a=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(a);else if(o.code==="invalid_return_type")a(o.returnTypeError);else if(o.code==="invalid_arguments")a(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let s=r,u=0;for(;u<o.path.length;){const l=o.path[u];u===o.path.length-1?(s[l]=s[l]||{_errors:[]},s[l]._errors.push(n(o))):s[l]=s[l]||{_errors:[]},s=s[l],u++}}};return a(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,ee.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const a of this.issues)a.path.length>0?(n[a.path[0]]=n[a.path[0]]||[],n[a.path[0]].push(e(a))):r.push(e(a));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}qe.create=t=>new qe(t);const Ut=(t,e)=>{let n;switch(t.code){case P.invalid_type:t.received===$.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case P.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,ee.jsonStringifyReplacer)}`;break;case P.unrecognized_keys:n=`Unrecognized key(s) in object: ${ee.joinValues(t.keys,", ")}`;break;case P.invalid_union:n="Invalid input";break;case P.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${ee.joinValues(t.options)}`;break;case P.invalid_enum_value:n=`Invalid enum value. Expected ${ee.joinValues(t.options)}, received '${t.received}'`;break;case P.invalid_arguments:n="Invalid function arguments";break;case P.invalid_return_type:n="Invalid function return type";break;case P.invalid_date:n="Invalid date";break;case P.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:ee.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case P.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case P.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case P.custom:n="Invalid input";break;case P.invalid_intersection_types:n="Intersection results could not be merged";break;case P.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case P.not_finite:n="Number must be finite";break;default:n=e.defaultError,ee.assertNever(t)}return{message:n}};let cu=Ut;function Qp(t){cu=t}function In(){return cu}const Pn=t=>{const{data:e,path:n,errorMaps:r,issueData:a}=t,i=[...n,...a.path||[]],o={...a,path:i};let s="";const u=r.filter(l=>!!l).slice().reverse();for(const l of u)s=l(o,{data:e,defaultError:s}).message;return{...a,path:i,message:a.message||s}},Xp=[];function M(t,e){const n=Pn({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,In(),Ut].filter(r=>!!r)});t.common.issues.push(n)}class _e{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const a of n){if(a.status==="aborted")return z;a.status==="dirty"&&e.dirty(),r.push(a.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const a of n)r.push({key:await a.key,value:await a.value});return _e.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const a of n){const{key:i,value:o}=a;if(i.status==="aborted"||o.status==="aborted")return z;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||a.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}}const z=Object.freeze({status:"aborted"}),fu=t=>({status:"dirty",value:t}),Ce=t=>({status:"valid",value:t}),mr=t=>t.status==="aborted",vr=t=>t.status==="dirty",On=t=>t.status==="valid",An=t=>typeof Promise<"u"&&t instanceof Promise;var V;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(V||(V={}));class Be{constructor(e,n,r,a){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=a}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const ua=(t,e)=>{if(On(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new qe(t.common.issues);return this._error=n,this._error}}};function Y(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:a}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:a}:{errorMap:(o,s)=>o.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:r??s.defaultError}:{message:n??s.defaultError},description:a}}class J{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ye(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Ye(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new _e,ctx:{common:e.parent.common,data:e.data,parsedType:Ye(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(An(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const a={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ye(e)},i=this._parseSync({data:e,path:a.path,parent:a});return ua(a,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ye(e)},a=this._parse({data:e,path:r.path,parent:r}),i=await(An(a)?a:Promise.resolve(a));return ua(r,i)}refine(e,n){const r=a=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(a):n;return this._refinement((a,i)=>{const o=e(a),s=()=>i.addIssue({code:P.custom,...r(a)});return typeof Promise<"u"&&o instanceof Promise?o.then(u=>u?!0:(s(),!1)):o?!0:(s(),!1)})}refinement(e,n){return this._refinement((r,a)=>e(r)?!0:(a.addIssue(typeof n=="function"?n(r,a):n),!1))}_refinement(e){return new Le({schema:this,typeName:H.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Ze.create(this,this._def)}nullable(){return lt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return xe.create(this,this._def)}promise(){return Tt.create(this,this._def)}or(e){return Ht.create([this,e],this._def)}and(e){return Zt.create(this,e,this._def)}transform(e){return new Le({...Y(this._def),schema:this,typeName:H.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Qt({...Y(this._def),innerType:this,defaultValue:n,typeName:H.ZodDefault})}brand(){return new pu({typeName:H.ZodBranded,type:this,...Y(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Fn({...Y(this._def),innerType:this,catchValue:n,typeName:H.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return an.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Kp=/^c[^\s-]{8,}$/i,eh=/^[a-z][a-z0-9]*$/,th=/[0-9A-HJKMNP-TV-Z]{26}/,nh=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,rh=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,ah=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,ih=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,sh=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,oh=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function uh(t,e){return!!((e==="v4"||!e)&&ih.test(t)||(e==="v6"||!e)&&sh.test(t))}class Me extends J{constructor(){super(...arguments),this._regex=(e,n,r)=>this.refinement(a=>e.test(a),{validation:n,code:P.invalid_string,...V.errToObj(r)}),this.nonempty=e=>this.min(1,V.errToObj(e)),this.trim=()=>new Me({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Me({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Me({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==$.string){const i=this._getOrReturnCtx(e);return M(i,{code:P.invalid_type,expected:$.string,received:i.parsedType}),z}const r=new _e;let a;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:P.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:P.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,s=e.data.length<i.value;(o||s)&&(a=this._getOrReturnCtx(e,a),o?M(a,{code:P.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):s&&M(a,{code:P.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")rh.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"email",code:P.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")ah.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"emoji",code:P.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")nh.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"uuid",code:P.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Kp.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"cuid",code:P.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")eh.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"cuid2",code:P.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")th.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"ulid",code:P.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{a=this._getOrReturnCtx(e,a),M(a,{validation:"url",code:P.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"regex",code:P.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(a=this._getOrReturnCtx(e,a),M(a,{code:P.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(a=this._getOrReturnCtx(e,a),M(a,{code:P.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(a=this._getOrReturnCtx(e,a),M(a,{code:P.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?oh(i).test(e.data)||(a=this._getOrReturnCtx(e,a),M(a,{code:P.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?uh(e.data,i.version)||(a=this._getOrReturnCtx(e,a),M(a,{validation:"ip",code:P.invalid_string,message:i.message}),r.dirty()):ee.assertNever(i);return{status:r.value,value:e.data}}_addCheck(e){return new Me({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...V.errToObj(e)})}url(e){return this._addCheck({kind:"url",...V.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...V.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...V.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...V.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...V.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...V.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...V.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...V.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...V.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...V.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...V.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...V.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...V.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...V.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...V.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Me.create=t=>{var e;return new Me({checks:[],typeName:H.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Y(t)})};function lh(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,a=n>r?n:r,i=parseInt(t.toFixed(a).replace(".","")),o=parseInt(e.toFixed(a).replace(".",""));return i%o/Math.pow(10,a)}class Ke extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==$.number){const i=this._getOrReturnCtx(e);return M(i,{code:P.invalid_type,expected:$.number,received:i.parsedType}),z}let r;const a=new _e;for(const i of this._def.checks)i.kind==="int"?ee.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:P.invalid_type,expected:"integer",received:"float",message:i.message}),a.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:P.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),a.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:P.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),a.dirty()):i.kind==="multipleOf"?lh(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),M(r,{code:P.not_multiple_of,multipleOf:i.value,message:i.message}),a.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:P.not_finite,message:i.message}),a.dirty()):ee.assertNever(i);return{status:a.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,V.toString(n))}gt(e,n){return this.setLimit("min",e,!1,V.toString(n))}lte(e,n){return this.setLimit("max",e,!0,V.toString(n))}lt(e,n){return this.setLimit("max",e,!1,V.toString(n))}setLimit(e,n,r,a){return new Ke({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:V.toString(a)}]})}_addCheck(e){return new Ke({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:V.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:V.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:V.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:V.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:V.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:V.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:V.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:V.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:V.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ee.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Ke.create=t=>new Ke({checks:[],typeName:H.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...Y(t)});class et extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==$.bigint){const i=this._getOrReturnCtx(e);return M(i,{code:P.invalid_type,expected:$.bigint,received:i.parsedType}),z}let r;const a=new _e;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:P.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),a.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:P.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),a.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),M(r,{code:P.not_multiple_of,multipleOf:i.value,message:i.message}),a.dirty()):ee.assertNever(i);return{status:a.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,V.toString(n))}gt(e,n){return this.setLimit("min",e,!1,V.toString(n))}lte(e,n){return this.setLimit("max",e,!0,V.toString(n))}lt(e,n){return this.setLimit("max",e,!1,V.toString(n))}setLimit(e,n,r,a){return new et({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:V.toString(a)}]})}_addCheck(e){return new et({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:V.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:V.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:V.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:V.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:V.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}et.create=t=>{var e;return new et({checks:[],typeName:H.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Y(t)})};class Vt extends J{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==$.boolean){const r=this._getOrReturnCtx(e);return M(r,{code:P.invalid_type,expected:$.boolean,received:r.parsedType}),z}return Ce(e.data)}}Vt.create=t=>new Vt({typeName:H.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...Y(t)});class ot extends J{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==$.date){const i=this._getOrReturnCtx(e);return M(i,{code:P.invalid_type,expected:$.date,received:i.parsedType}),z}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return M(i,{code:P.invalid_date}),z}const r=new _e;let a;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:P.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(a=this._getOrReturnCtx(e,a),M(a,{code:P.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):ee.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ot({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:V.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:V.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}ot.create=t=>new ot({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:H.ZodDate,...Y(t)});class Rn extends J{_parse(e){if(this._getType(e)!==$.symbol){const r=this._getOrReturnCtx(e);return M(r,{code:P.invalid_type,expected:$.symbol,received:r.parsedType}),z}return Ce(e.data)}}Rn.create=t=>new Rn({typeName:H.ZodSymbol,...Y(t)});class Bt extends J{_parse(e){if(this._getType(e)!==$.undefined){const r=this._getOrReturnCtx(e);return M(r,{code:P.invalid_type,expected:$.undefined,received:r.parsedType}),z}return Ce(e.data)}}Bt.create=t=>new Bt({typeName:H.ZodUndefined,...Y(t)});class Gt extends J{_parse(e){if(this._getType(e)!==$.null){const r=this._getOrReturnCtx(e);return M(r,{code:P.invalid_type,expected:$.null,received:r.parsedType}),z}return Ce(e.data)}}Gt.create=t=>new Gt({typeName:H.ZodNull,...Y(t)});class kt extends J{constructor(){super(...arguments),this._any=!0}_parse(e){return Ce(e.data)}}kt.create=t=>new kt({typeName:H.ZodAny,...Y(t)});class it extends J{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ce(e.data)}}it.create=t=>new it({typeName:H.ZodUnknown,...Y(t)});class We extends J{_parse(e){const n=this._getOrReturnCtx(e);return M(n,{code:P.invalid_type,expected:$.never,received:n.parsedType}),z}}We.create=t=>new We({typeName:H.ZodNever,...Y(t)});class $n extends J{_parse(e){if(this._getType(e)!==$.undefined){const r=this._getOrReturnCtx(e);return M(r,{code:P.invalid_type,expected:$.void,received:r.parsedType}),z}return Ce(e.data)}}$n.create=t=>new $n({typeName:H.ZodVoid,...Y(t)});class xe extends J{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),a=this._def;if(n.parsedType!==$.array)return M(n,{code:P.invalid_type,expected:$.array,received:n.parsedType}),z;if(a.exactLength!==null){const o=n.data.length>a.exactLength.value,s=n.data.length<a.exactLength.value;(o||s)&&(M(n,{code:o?P.too_big:P.too_small,minimum:s?a.exactLength.value:void 0,maximum:o?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),r.dirty())}if(a.minLength!==null&&n.data.length<a.minLength.value&&(M(n,{code:P.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),r.dirty()),a.maxLength!==null&&n.data.length>a.maxLength.value&&(M(n,{code:P.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,s)=>a.type._parseAsync(new Be(n,o,n.path,s)))).then(o=>_e.mergeArray(r,o));const i=[...n.data].map((o,s)=>a.type._parseSync(new Be(n,o,n.path,s)));return _e.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new xe({...this._def,minLength:{value:e,message:V.toString(n)}})}max(e,n){return new xe({...this._def,maxLength:{value:e,message:V.toString(n)}})}length(e,n){return new xe({...this._def,exactLength:{value:e,message:V.toString(n)}})}nonempty(e){return this.min(1,e)}}xe.create=(t,e)=>new xe({type:t,minLength:null,maxLength:null,exactLength:null,typeName:H.ZodArray,...Y(e)});function mt(t){if(t instanceof oe){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=Ze.create(mt(r))}return new oe({...t._def,shape:()=>e})}else return t instanceof xe?new xe({...t._def,type:mt(t.element)}):t instanceof Ze?Ze.create(mt(t.unwrap())):t instanceof lt?lt.create(mt(t.unwrap())):t instanceof Ge?Ge.create(t.items.map(e=>mt(e))):t}class oe extends J{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=ee.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==$.object){const l=this._getOrReturnCtx(e);return M(l,{code:P.invalid_type,expected:$.object,received:l.parsedType}),z}const{status:r,ctx:a}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),s=[];if(!(this._def.catchall instanceof We&&this._def.unknownKeys==="strip"))for(const l in a.data)o.includes(l)||s.push(l);const u=[];for(const l of o){const c=i[l],f=a.data[l];u.push({key:{status:"valid",value:l},value:c._parse(new Be(a,f,a.path,l)),alwaysSet:l in a.data})}if(this._def.catchall instanceof We){const l=this._def.unknownKeys;if(l==="passthrough")for(const c of s)u.push({key:{status:"valid",value:c},value:{status:"valid",value:a.data[c]}});else if(l==="strict")s.length>0&&(M(a,{code:P.unrecognized_keys,keys:s}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const c of s){const f=a.data[c];u.push({key:{status:"valid",value:c},value:l._parse(new Be(a,f,a.path,c)),alwaysSet:c in a.data})}}return a.common.async?Promise.resolve().then(async()=>{const l=[];for(const c of u){const f=await c.key;l.push({key:f,value:await c.value,alwaysSet:c.alwaysSet})}return l}).then(l=>_e.mergeObjectSync(r,l)):_e.mergeObjectSync(r,u)}get shape(){return this._def.shape()}strict(e){return V.errToObj,new oe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var a,i,o,s;const u=(o=(i=(a=this._def).errorMap)===null||i===void 0?void 0:i.call(a,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(s=V.errToObj(e).message)!==null&&s!==void 0?s:u}:{message:u}}}:{}})}strip(){return new oe({...this._def,unknownKeys:"strip"})}passthrough(){return new oe({...this._def,unknownKeys:"passthrough"})}extend(e){return new oe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new oe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:H.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new oe({...this._def,catchall:e})}pick(e){const n={};return ee.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new oe({...this._def,shape:()=>n})}omit(e){const n={};return ee.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new oe({...this._def,shape:()=>n})}deepPartial(){return mt(this)}partial(e){const n={};return ee.objectKeys(this.shape).forEach(r=>{const a=this.shape[r];e&&!e[r]?n[r]=a:n[r]=a.optional()}),new oe({...this._def,shape:()=>n})}required(e){const n={};return ee.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Ze;)i=i._def.innerType;n[r]=i}}),new oe({...this._def,shape:()=>n})}keyof(){return du(ee.objectKeys(this.shape))}}oe.create=(t,e)=>new oe({shape:()=>t,unknownKeys:"strip",catchall:We.create(),typeName:H.ZodObject,...Y(e)});oe.strictCreate=(t,e)=>new oe({shape:()=>t,unknownKeys:"strict",catchall:We.create(),typeName:H.ZodObject,...Y(e)});oe.lazycreate=(t,e)=>new oe({shape:t,unknownKeys:"strip",catchall:We.create(),typeName:H.ZodObject,...Y(e)});class Ht extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function a(i){for(const s of i)if(s.result.status==="valid")return s.result;for(const s of i)if(s.result.status==="dirty")return n.common.issues.push(...s.ctx.common.issues),s.result;const o=i.map(s=>new qe(s.ctx.common.issues));return M(n,{code:P.invalid_union,unionErrors:o}),z}if(n.common.async)return Promise.all(r.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(a);{let i;const o=[];for(const u of r){const l={...n,common:{...n.common,issues:[]},parent:null},c=u._parseSync({data:n.data,path:n.path,parent:l});if(c.status==="valid")return c;c.status==="dirty"&&!i&&(i={result:c,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const s=o.map(u=>new qe(u));return M(n,{code:P.invalid_union,unionErrors:s}),z}}get options(){return this._def.options}}Ht.create=(t,e)=>new Ht({options:t,typeName:H.ZodUnion,...Y(e)});const yn=t=>t instanceof zt?yn(t.schema):t instanceof Le?yn(t.innerType()):t instanceof Yt?[t.value]:t instanceof tt?t.options:t instanceof Jt?Object.keys(t.enum):t instanceof Qt?yn(t._def.innerType):t instanceof Bt?[void 0]:t instanceof Gt?[null]:null;class Yn extends J{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.object)return M(n,{code:P.invalid_type,expected:$.object,received:n.parsedType}),z;const r=this.discriminator,a=n.data[r],i=this.optionsMap.get(a);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(M(n,{code:P.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),z)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const a=new Map;for(const i of n){const o=yn(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const s of o){if(a.has(s))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);a.set(s,i)}}return new Yn({typeName:H.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:a,...Y(r)})}}function gr(t,e){const n=Ye(t),r=Ye(e);if(t===e)return{valid:!0,data:t};if(n===$.object&&r===$.object){const a=ee.objectKeys(e),i=ee.objectKeys(t).filter(s=>a.indexOf(s)!==-1),o={...t,...e};for(const s of i){const u=gr(t[s],e[s]);if(!u.valid)return{valid:!1};o[s]=u.data}return{valid:!0,data:o}}else if(n===$.array&&r===$.array){if(t.length!==e.length)return{valid:!1};const a=[];for(let i=0;i<t.length;i++){const o=t[i],s=e[i],u=gr(o,s);if(!u.valid)return{valid:!1};a.push(u.data)}return{valid:!0,data:a}}else return n===$.date&&r===$.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Zt extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),a=(i,o)=>{if(mr(i)||mr(o))return z;const s=gr(i.value,o.value);return s.valid?((vr(i)||vr(o))&&n.dirty(),{status:n.value,value:s.data}):(M(r,{code:P.invalid_intersection_types}),z)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>a(i,o)):a(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Zt.create=(t,e,n)=>new Zt({left:t,right:e,typeName:H.ZodIntersection,...Y(n)});class Ge extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.array)return M(r,{code:P.invalid_type,expected:$.array,received:r.parsedType}),z;if(r.data.length<this._def.items.length)return M(r,{code:P.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),z;!this._def.rest&&r.data.length>this._def.items.length&&(M(r,{code:P.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((o,s)=>{const u=this._def.items[s]||this._def.rest;return u?u._parse(new Be(r,o,r.path,s)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>_e.mergeArray(n,o)):_e.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new Ge({...this._def,rest:e})}}Ge.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ge({items:t,typeName:H.ZodTuple,rest:null,...Y(e)})};class Wt extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.object)return M(r,{code:P.invalid_type,expected:$.object,received:r.parsedType}),z;const a=[],i=this._def.keyType,o=this._def.valueType;for(const s in r.data)a.push({key:i._parse(new Be(r,s,r.path,s)),value:o._parse(new Be(r,r.data[s],r.path,s))});return r.common.async?_e.mergeObjectAsync(n,a):_e.mergeObjectSync(n,a)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof J?new Wt({keyType:e,valueType:n,typeName:H.ZodRecord,...Y(r)}):new Wt({keyType:Me.create(),valueType:e,typeName:H.ZodRecord,...Y(n)})}}class Mn extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.map)return M(r,{code:P.invalid_type,expected:$.map,received:r.parsedType}),z;const a=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([s,u],l)=>({key:a._parse(new Be(r,s,r.path,[l,"key"])),value:i._parse(new Be(r,u,r.path,[l,"value"]))}));if(r.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const u of o){const l=await u.key,c=await u.value;if(l.status==="aborted"||c.status==="aborted")return z;(l.status==="dirty"||c.status==="dirty")&&n.dirty(),s.set(l.value,c.value)}return{status:n.value,value:s}})}else{const s=new Map;for(const u of o){const l=u.key,c=u.value;if(l.status==="aborted"||c.status==="aborted")return z;(l.status==="dirty"||c.status==="dirty")&&n.dirty(),s.set(l.value,c.value)}return{status:n.value,value:s}}}}Mn.create=(t,e,n)=>new Mn({valueType:e,keyType:t,typeName:H.ZodMap,...Y(n)});class ut extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.set)return M(r,{code:P.invalid_type,expected:$.set,received:r.parsedType}),z;const a=this._def;a.minSize!==null&&r.data.size<a.minSize.value&&(M(r,{code:P.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),n.dirty()),a.maxSize!==null&&r.data.size>a.maxSize.value&&(M(r,{code:P.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),n.dirty());const i=this._def.valueType;function o(u){const l=new Set;for(const c of u){if(c.status==="aborted")return z;c.status==="dirty"&&n.dirty(),l.add(c.value)}return{status:n.value,value:l}}const s=[...r.data.values()].map((u,l)=>i._parse(new Be(r,u,r.path,l)));return r.common.async?Promise.all(s).then(u=>o(u)):o(s)}min(e,n){return new ut({...this._def,minSize:{value:e,message:V.toString(n)}})}max(e,n){return new ut({...this._def,maxSize:{value:e,message:V.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}ut.create=(t,e)=>new ut({valueType:t,minSize:null,maxSize:null,typeName:H.ZodSet,...Y(e)});class yt extends J{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.function)return M(n,{code:P.invalid_type,expected:$.function,received:n.parsedType}),z;function r(s,u){return Pn({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,In(),Ut].filter(l=>!!l),issueData:{code:P.invalid_arguments,argumentsError:u}})}function a(s,u){return Pn({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,In(),Ut].filter(l=>!!l),issueData:{code:P.invalid_return_type,returnTypeError:u}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof Tt?Ce(async(...s)=>{const u=new qe([]),l=await this._def.args.parseAsync(s,i).catch(p=>{throw u.addIssue(r(s,p)),u}),c=await o(...l);return await this._def.returns._def.type.parseAsync(c,i).catch(p=>{throw u.addIssue(a(c,p)),u})}):Ce((...s)=>{const u=this._def.args.safeParse(s,i);if(!u.success)throw new qe([r(s,u.error)]);const l=o(...u.data),c=this._def.returns.safeParse(l,i);if(!c.success)throw new qe([a(l,c.error)]);return c.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new yt({...this._def,args:Ge.create(e).rest(it.create())})}returns(e){return new yt({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new yt({args:e||Ge.create([]).rest(it.create()),returns:n||it.create(),typeName:H.ZodFunction,...Y(r)})}}class zt extends J{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}zt.create=(t,e)=>new zt({getter:t,typeName:H.ZodLazy,...Y(e)});class Yt extends J{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return M(n,{received:n.data,code:P.invalid_literal,expected:this._def.value}),z}return{status:"valid",value:e.data}}get value(){return this._def.value}}Yt.create=(t,e)=>new Yt({value:t,typeName:H.ZodLiteral,...Y(e)});function du(t,e){return new tt({values:t,typeName:H.ZodEnum,...Y(e)})}class tt extends J{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return M(n,{expected:ee.joinValues(r),received:n.parsedType,code:P.invalid_type}),z}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return M(n,{received:n.data,code:P.invalid_enum_value,options:r}),z}return Ce(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return tt.create(e)}exclude(e){return tt.create(this.options.filter(n=>!e.includes(n)))}}tt.create=du;class Jt extends J{_parse(e){const n=ee.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==$.string&&r.parsedType!==$.number){const a=ee.objectValues(n);return M(r,{expected:ee.joinValues(a),received:r.parsedType,code:P.invalid_type}),z}if(n.indexOf(e.data)===-1){const a=ee.objectValues(n);return M(r,{received:r.data,code:P.invalid_enum_value,options:a}),z}return Ce(e.data)}get enum(){return this._def.values}}Jt.create=(t,e)=>new Jt({values:t,typeName:H.ZodNativeEnum,...Y(e)});class Tt extends J{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.promise&&n.common.async===!1)return M(n,{code:P.invalid_type,expected:$.promise,received:n.parsedType}),z;const r=n.parsedType===$.promise?n.data:Promise.resolve(n.data);return Ce(r.then(a=>this._def.type.parseAsync(a,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Tt.create=(t,e)=>new Tt({type:t,typeName:H.ZodPromise,...Y(e)});class Le extends J{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===H.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),a=this._def.effect||null;if(a.type==="preprocess"){const o=a.transform(r.data);return r.common.async?Promise.resolve(o).then(s=>this._def.schema._parseAsync({data:s,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}const i={addIssue:o=>{M(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),a.type==="refinement"){const o=s=>{const u=a.refinement(s,i);if(r.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?z:(s.status==="dirty"&&n.dirty(),o(s.value),{status:n.value,value:s.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>s.status==="aborted"?z:(s.status==="dirty"&&n.dirty(),o(s.value).then(()=>({status:n.value,value:s.value}))))}if(a.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!On(o))return o;const s=a.transform(o.value,i);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:s}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>On(o)?Promise.resolve(a.transform(o.value,i)).then(s=>({status:n.value,value:s})):o);ee.assertNever(a)}}Le.create=(t,e,n)=>new Le({schema:t,typeName:H.ZodEffects,effect:e,...Y(n)});Le.createWithPreprocess=(t,e,n)=>new Le({schema:e,effect:{type:"preprocess",transform:t},typeName:H.ZodEffects,...Y(n)});class Ze extends J{_parse(e){return this._getType(e)===$.undefined?Ce(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ze.create=(t,e)=>new Ze({innerType:t,typeName:H.ZodOptional,...Y(e)});class lt extends J{_parse(e){return this._getType(e)===$.null?Ce(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}lt.create=(t,e)=>new lt({innerType:t,typeName:H.ZodNullable,...Y(e)});class Qt extends J{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===$.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Qt.create=(t,e)=>new Qt({innerType:t,typeName:H.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Y(e)});class Fn extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},a=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return An(a)?a.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new qe(r.common.issues)},input:r.data})})):{status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new qe(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Fn.create=(t,e)=>new Fn({innerType:t,typeName:H.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Y(e)});class qn extends J{_parse(e){if(this._getType(e)!==$.nan){const r=this._getOrReturnCtx(e);return M(r,{code:P.invalid_type,expected:$.nan,received:r.parsedType}),z}return{status:"valid",value:e.data}}}qn.create=t=>new qn({typeName:H.ZodNaN,...Y(t)});const ch=Symbol("zod_brand");class pu extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class an extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?z:i.status==="dirty"?(n.dirty(),fu(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const a=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?z:a.status==="dirty"?(n.dirty(),{status:"dirty",value:a.value}):this._def.out._parseSync({data:a.value,path:r.path,parent:r})}}static create(e,n){return new an({in:e,out:n,typeName:H.ZodPipeline})}}const hu=(t,e={},n)=>t?kt.create().superRefine((r,a)=>{var i,o;if(!t(r)){const s=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,u=(o=(i=s.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,l=typeof s=="string"?{message:s}:s;a.addIssue({code:"custom",...l,fatal:u})}}):kt.create(),fh={object:oe.lazycreate};var H;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(H||(H={}));const dh=(t,e={message:`Input not instance of ${t.name}`})=>hu(n=>n instanceof t,e),mu=Me.create,vu=Ke.create,ph=qn.create,hh=et.create,gu=Vt.create,mh=ot.create,vh=Rn.create,gh=Bt.create,yh=Gt.create,wh=kt.create,_h=it.create,bh=We.create,kh=$n.create,Th=xe.create,Eh=oe.create,Sh=oe.strictCreate,Ch=Ht.create,Dh=Yn.create,Nh=Zt.create,Ih=Ge.create,Ph=Wt.create,Oh=Mn.create,Ah=ut.create,Rh=yt.create,$h=zt.create,Mh=Yt.create,Fh=tt.create,qh=Jt.create,xh=Tt.create,la=Le.create,Lh=Ze.create,jh=lt.create,Uh=Le.createWithPreprocess,Vh=an.create,Bh=()=>mu().optional(),Gh=()=>vu().optional(),Hh=()=>gu().optional(),Zh={string:t=>Me.create({...t,coerce:!0}),number:t=>Ke.create({...t,coerce:!0}),boolean:t=>Vt.create({...t,coerce:!0}),bigint:t=>et.create({...t,coerce:!0}),date:t=>ot.create({...t,coerce:!0})},Wh=z;var Qe=Object.freeze({__proto__:null,defaultErrorMap:Ut,setErrorMap:Qp,getErrorMap:In,makeIssue:Pn,EMPTY_PATH:Xp,addIssueToContext:M,ParseStatus:_e,INVALID:z,DIRTY:fu,OK:Ce,isAborted:mr,isDirty:vr,isValid:On,isAsync:An,get util(){return ee},get objectUtil(){return hr},ZodParsedType:$,getParsedType:Ye,ZodType:J,ZodString:Me,ZodNumber:Ke,ZodBigInt:et,ZodBoolean:Vt,ZodDate:ot,ZodSymbol:Rn,ZodUndefined:Bt,ZodNull:Gt,ZodAny:kt,ZodUnknown:it,ZodNever:We,ZodVoid:$n,ZodArray:xe,ZodObject:oe,ZodUnion:Ht,ZodDiscriminatedUnion:Yn,ZodIntersection:Zt,ZodTuple:Ge,ZodRecord:Wt,ZodMap:Mn,ZodSet:ut,ZodFunction:yt,ZodLazy:zt,ZodLiteral:Yt,ZodEnum:tt,ZodNativeEnum:Jt,ZodPromise:Tt,ZodEffects:Le,ZodTransformer:Le,ZodOptional:Ze,ZodNullable:lt,ZodDefault:Qt,ZodCatch:Fn,ZodNaN:qn,BRAND:ch,ZodBranded:pu,ZodPipeline:an,custom:hu,Schema:J,ZodSchema:J,late:fh,get ZodFirstPartyTypeKind(){return H},coerce:Zh,any:wh,array:Th,bigint:hh,boolean:gu,date:mh,discriminatedUnion:Dh,effect:la,enum:Fh,function:Rh,instanceof:dh,intersection:Nh,lazy:$h,literal:Mh,map:Oh,nan:ph,nativeEnum:qh,never:bh,null:yh,nullable:jh,number:vu,object:Eh,oboolean:Hh,onumber:Gh,optional:Lh,ostring:Bh,pipeline:Vh,preprocess:Uh,promise:xh,record:Ph,set:Ah,strictObject:Sh,string:mu,symbol:vh,transformer:la,tuple:Ih,undefined:gh,union:Ch,unknown:_h,void:kh,NEVER:Wh,ZodIssueCode:P,quotelessJson:Jp,ZodError:qe});function zh(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yu(t){var e=zh(t,"string");return typeof e=="symbol"?e:String(e)}function ca(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,yu(r.key),r)}}function sn(t,e,n){return e&&ca(t.prototype,e),n&&ca(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function on(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Xt(t,e){return Xt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xt(t,e)}function wu(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Xt(t,e)}function Kt(t){return Kt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Kt(t)}function _u(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yh(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Rr(t)}function bu(t){var e=_u();return function(){var r=Kt(t),a;if(e){var i=Kt(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Yh(this,a)}}function Jh(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function wn(t,e,n){return _u()?wn=Reflect.construct.bind():wn=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),l=new u;return o&&Xt(l,o.prototype),l},wn.apply(null,arguments)}function xn(t){var e=typeof Map=="function"?new Map:void 0;return xn=function(r){if(r===null||!Jh(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,a)}function a(){return wn(r,arguments,Kt(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Xt(a,r)},xn(t)}function $r(t,e,n){return e=yu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var fa=function(t){wu(n,t);var e=bu(n);function n(r,a){var i;return on(this,n),i=e.call(this,"Schema mismatch for ".concat(r," with errors: ").concat(a)),$r(Rr(i),"name","SchemaMismatchError"),i}return sn(n)}(xn(Error)),Qh=function(t){wu(n,t);var e=bu(n);function n(r,a,i){var o;return on(this,n),o=e.call(this,"No migration path for schema ".concat(r," from version ").concat(a," to ").concat(i)),$r(Rr(o),"name","NoMigrationPathError"),o}return sn(n)}(xn(Error)),Xh=Qe.object({version:Qe.number().int().positive(),createdAt:Qe.number().int().positive(),updatedAt:Qe.number().int().positive()}).strict(),Kh=function(){function t(e,n){on(this,t),$r(this,"version",1),this.key=e,this.schema=n}return sn(t,[{key:"process",value:function(){var e=at(Se().mark(function r(a){var i,o;return Se().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=this.parseStorageItem(a),o=this.migrate(i),u.abrupt("return",Promise.resolve({data:o,metadata:i.metadata}));case 3:case"end":return u.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"migrate",value:function(n){var r=n.metadata.version;if(this.version!==r)throw new Qh(this.key,r,this.version);return this.parseData(n.data)}},{key:"parseStorageItem",value:function(n){try{return Qe.object({data:Qe.unknown(),metadata:Xh}).strict().parse(n)}catch(r){throw sa(r),new fa(this.key,r.message)}}},{key:"parseData",value:function(n){try{var r=this.schema.parse(n);return r}catch(a){throw sa(a),new fa(this.key,a.message)}}}]),t}(),em=function(){function t(e,n){on(this,t),this.schema=e,this.provider=n}return sn(t,[{key:"get",value:function(){var e=at(Se().mark(function r(){var a,i;return Se().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.getWithMetadata();case 2:return i=s.sent,s.abrupt("return",(a=i==null?void 0:i.data)!==null&&a!==void 0?a:null);case 4:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"reset",value:function(){var e=at(Se().mark(function r(){return Se().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.provider.removeItem(this.getStorageKey());case 2:case"end":return i.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"set",value:function(){var e=at(Se().mark(function r(a){var i,o,s,u,l;return Se().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,this.getWithMetadata();case 2:return o=f.sent,s={createdAt:(i=o==null?void 0:o.metadata.createdAt)!==null&&i!==void 0?i:Date.now(),updatedAt:Date.now(),version:this.schema.version},u={data:a,metadata:s},l=JSON.stringify(u),f.next=8,this.provider.setItem(this.getStorageKey(),l);case 8:case"end":return f.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"subscribe",value:function(n){var r=this;return"subscribe"in this.provider?this.provider.subscribe(this.getStorageKey(),function(){var a=at(Se().mark(function i(o,s){var u,l;return Se().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!o){f.next=6;break}return f.next=3,r.parse(o);case 3:f.t0=f.sent,f.next=7;break;case 6:f.t0={data:null};case 7:if(u=f.t0,!s){f.next=14;break}return f.next=11,r.parse(s);case 11:f.t1=f.sent,f.next=15;break;case 14:f.t1={data:null};case 15:l=f.t1,n(u.data,l.data);case 17:case"end":return f.stop()}},i)}));return function(i,o){return a.apply(this,arguments)}}()):{unsubscribe:function(){}}}},{key:"getWithMetadata",value:function(){var e=at(Se().mark(function r(){var a;return Se().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.provider.getItem(this.getStorageKey());case 2:if(a=o.sent,a!==null){o.next=5;break}return o.abrupt("return",null);case 5:return o.abrupt("return",this.parse(a));case 6:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"parse",value:function(){var e=at(Se().mark(function r(a){var i;return Se().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=JSON.parse(a),s.abrupt("return",this.schema.process(i));case 2:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"getStorageKey",value:function(){return this.schema.key}}],[{key:"createForSchema",value:function(n,r){return new t(n,r)}}]),t}(),tm=function(){function t(){on(this,t),this.store=new Map}return sn(t,[{key:"getItem",value:function(n){var r;return(r=this.store.get(n))!==null&&r!==void 0?r:null}},{key:"setItem",value:function(n,r){this.store.set(n,r)}},{key:"removeItem",value:function(n){this.store.delete(n)}}]),t}();function yr(t){this.message=t}yr.prototype=new Error,yr.prototype.name="InvalidCharacterError";var da=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new yr("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,i=0,o="";r=e.charAt(i++);~r&&(n=a%4?64*n+r:r,a++%4)?o+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return o};function nm(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(n){return decodeURIComponent(da(n).replace(/(.)/g,function(r,a){var i=a.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(e)}catch{return da(e)}}function Ln(t){this.message=t}function pa(t,e){if(typeof t!="string")throw new Ln("Invalid token specified");var n=(e=e||{}).header===!0?0:1;try{return JSON.parse(nm(t.split(".")[n]))}catch(r){throw new Ln("Invalid token specified: "+r.message)}}Ln.prototype=new Error,Ln.prototype.name="InvalidTokenError";function ae(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rm(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ku(t){var e=rm(t,"string");return typeof e=="symbol"?e:String(e)}function ha(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ku(r.key),r)}}function ie(t,e,n){return e&&ha(t.prototype,e),n&&ha(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(){d=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(w,g,m){w[g]=m.value},a=typeof Symbol=="function"?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(w,g,m){return Object.defineProperty(w,g,{value:m,enumerable:!0,configurable:!0,writable:!0}),w[g]}try{u({},"")}catch{u=function(g,m,b){return g[m]=b}}function l(w,g,m,b){var _=g&&g.prototype instanceof p?g:p,R=Object.create(_.prototype),x=new ke(b||[]);return r(R,"_invoke",{value:be(w,m,x)}),R}function c(w,g,m){try{return{type:"normal",arg:w.call(g,m)}}catch(b){return{type:"throw",arg:b}}}t.wrap=l;var f={};function p(){}function h(){}function v(){}var T={};u(T,i,function(){return this});var O=Object.getPrototypeOf,I=O&&O(O(Oe([])));I&&I!==e&&n.call(I,i)&&(T=I);var j=v.prototype=p.prototype=Object.create(T);function k(w){["next","throw","return"].forEach(function(g){u(w,g,function(m){return this._invoke(g,m)})})}function Q(w,g){function m(_,R,x,U){var K=c(w[_],w,R);if(K.type!=="throw"){var pe=K.arg,Te=pe.value;return Te&&typeof Te=="object"&&n.call(Te,"__await")?g.resolve(Te.__await).then(function(Ee){m("next",Ee,x,U)},function(Ee){m("throw",Ee,x,U)}):g.resolve(Te).then(function(Ee){pe.value=Ee,x(pe)},function(Ee){return m("throw",Ee,x,U)})}U(K.arg)}var b;r(this,"_invoke",{value:function(_,R){function x(){return new g(function(U,K){m(_,R,U,K)})}return b=b?b.then(x,x):x()}})}function be(w,g,m){var b="suspendedStart";return function(_,R){if(b==="executing")throw new Error("Generator is already running");if(b==="completed"){if(_==="throw")throw R;return te()}for(m.method=_,m.arg=R;;){var x=m.delegate;if(x){var U=ue(x,m);if(U){if(U===f)continue;return U}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(b==="suspendedStart")throw b="completed",m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);b="executing";var K=c(w,g,m);if(K.type==="normal"){if(b=m.done?"completed":"suspendedYield",K.arg===f)continue;return{value:K.arg,done:m.done}}K.type==="throw"&&(b="completed",m.method="throw",m.arg=K.arg)}}}function ue(w,g){var m=g.method,b=w.iterator[m];if(b===void 0)return g.delegate=null,m==="throw"&&w.iterator.return&&(g.method="return",g.arg=void 0,ue(w,g),g.method==="throw")||m!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+m+"' method")),f;var _=c(b,w.iterator,g.arg);if(_.type==="throw")return g.method="throw",g.arg=_.arg,g.delegate=null,f;var R=_.arg;return R?R.done?(g[w.resultName]=R.value,g.next=w.nextLoc,g.method!=="return"&&(g.method="next",g.arg=void 0),g.delegate=null,f):R:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,f)}function Ae(w){var g={tryLoc:w[0]};1 in w&&(g.catchLoc=w[1]),2 in w&&(g.finallyLoc=w[2],g.afterLoc=w[3]),this.tryEntries.push(g)}function le(w){var g=w.completion||{};g.type="normal",delete g.arg,w.completion=g}function ke(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(Ae,this),this.reset(!0)}function Oe(w){if(w){var g=w[i];if(g)return g.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var m=-1,b=function _(){for(;++m<w.length;)if(n.call(w,m))return _.value=w[m],_.done=!1,_;return _.value=void 0,_.done=!0,_};return b.next=b}}return{next:te}}function te(){return{value:void 0,done:!0}}return h.prototype=v,r(j,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(w){var g=typeof w=="function"&&w.constructor;return!!g&&(g===h||(g.displayName||g.name)==="GeneratorFunction")},t.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,v):(w.__proto__=v,u(w,s,"GeneratorFunction")),w.prototype=Object.create(j),w},t.awrap=function(w){return{__await:w}},k(Q.prototype),u(Q.prototype,o,function(){return this}),t.AsyncIterator=Q,t.async=function(w,g,m,b,_){_===void 0&&(_=Promise);var R=new Q(l(w,g,m,b),_);return t.isGeneratorFunction(g)?R:R.next().then(function(x){return x.done?x.value:R.next()})},k(j),u(j,s,"Generator"),u(j,i,function(){return this}),u(j,"toString",function(){return"[object Generator]"}),t.keys=function(w){var g=Object(w),m=[];for(var b in g)m.push(b);return m.reverse(),function _(){for(;m.length;){var R=m.pop();if(R in g)return _.value=R,_.done=!1,_}return _.done=!0,_}},t.values=Oe,ke.prototype={constructor:ke,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(le),!w)for(var g in this)g.charAt(0)==="t"&&n.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=void 0)},stop:function(){this.done=!0;var w=this.tryEntries[0].completion;if(w.type==="throw")throw w.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var g=this;function m(K,pe){return R.type="throw",R.arg=w,g.next=K,pe&&(g.method="next",g.arg=void 0),!!pe}for(var b=this.tryEntries.length-1;b>=0;--b){var _=this.tryEntries[b],R=_.completion;if(_.tryLoc==="root")return m("end");if(_.tryLoc<=this.prev){var x=n.call(_,"catchLoc"),U=n.call(_,"finallyLoc");if(x&&U){if(this.prev<_.catchLoc)return m(_.catchLoc,!0);if(this.prev<_.finallyLoc)return m(_.finallyLoc)}else if(x){if(this.prev<_.catchLoc)return m(_.catchLoc,!0)}else{if(!U)throw new Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return m(_.finallyLoc)}}}},abrupt:function(w,g){for(var m=this.tryEntries.length-1;m>=0;--m){var b=this.tryEntries[m];if(b.tryLoc<=this.prev&&n.call(b,"finallyLoc")&&this.prev<b.finallyLoc){var _=b;break}}_&&(w==="break"||w==="continue")&&_.tryLoc<=g&&g<=_.finallyLoc&&(_=null);var R=_?_.completion:{};return R.type=w,R.arg=g,_?(this.method="next",this.next=_.finallyLoc,f):this.complete(R)},complete:function(w,g){if(w.type==="throw")throw w.arg;return w.type==="break"||w.type==="continue"?this.next=w.arg:w.type==="return"?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):w.type==="normal"&&g&&(this.next=g),f},finish:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.finallyLoc===w)return this.complete(m.completion,m.afterLoc),le(m),f}},catch:function(w){for(var g=this.tryEntries.length-1;g>=0;--g){var m=this.tryEntries[g];if(m.tryLoc===w){var b=m.completion;if(b.type==="throw"){var _=b.arg;le(m)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(w,g,m){return this.delegate={iterator:Oe(w),resultName:g,nextLoc:m},this.method==="next"&&(this.arg=void 0),f}},t}function ma(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(l){n(l);return}s.done?e(u):Promise.resolve(u).then(r,a)}function y(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(u){ma(i,r,a,o,s,"next",u)}function s(u){ma(i,r,a,o,s,"throw",u)}o(void 0)})}}function je(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function en(t,e){return en=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},en(t,e)}function un(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&en(t,e)}function tn(t){return tn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},tn(t)}function Tu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function am(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return je(t)}function ln(t){var e=Tu();return function(){var r=tn(t),a;if(e){var i=tn(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return am(this,a)}}function im(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function _n(t,e,n){return Tu()?_n=Reflect.construct.bind():_n=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),l=new u;return o&&en(l,o.prototype),l},_n.apply(null,arguments)}function ct(t){var e=typeof Map=="function"?new Map:void 0;return ct=function(r){if(r===null||!im(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,a)}function a(){return _n(r,arguments,tn(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),en(a,r)},ct(t)}function Ue(t,e,n){return e=ku(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Eu=function(t){un(n,t);var e=ln(n);function n(){var r;ae(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),Ue(je(r),"name","NotAuthenticatedError"),Ue(je(r),"message","Not Authenticated"),r}return ie(n)}(ct(Error)),sm=function(t){un(n,t);var e=ln(n);function n(){var r;ae(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),Ue(je(r),"name","CredentialsExpiredError"),Ue(je(r),"message","Authentication credentials are expired"),r}return ie(n)}(ct(Error));function va(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?va(Object(n),!0).forEach(function(r){Ue(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function C(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var ga,ya,wa,_a,om=S(ga||(ga=C([`
  query AuthChallenge($address: EthereumAddress!) {
    result: challenge(request: { address: $address }) {
      text
    }
  }
`]))),um=S(ya||(ya=C([`
  query AuthVerify($accessToken: Jwt!) {
    result: verify(request: { accessToken: $accessToken })
  }
`]))),lm=S(wa||(wa=C([`
  mutation AuthAuthenticate($address: EthereumAddress!, $signature: Signature!) {
    result: authenticate(request: { address: $address, signature: $signature }) {
      accessToken
      refreshToken
    }
  }
`]))),cm=S(_a||(_a=C([`
  mutation AuthRefresh($refreshToken: Jwt!) {
    result: refresh(request: { refreshToken: $refreshToken }) {
      accessToken
      refreshToken
    }
  }
`]))),fm=function(e,n,r){return e()},dm=A(om),pm=A(um),hm=A(lm),mm=A(cm);function vm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fm;return{AuthChallenge:function(r,a){return e(function(i){return t.rawRequest(dm,r,E(E({},a),i))},"AuthChallenge","query")},AuthVerify:function(r,a){return e(function(i){return t.rawRequest(pm,r,E(E({},a),i))},"AuthVerify","query")},AuthAuthenticate:function(r,a){return e(function(i){return t.rawRequest(hm,r,E(E({},a),i))},"AuthAuthenticate","mutation")},AuthRefresh:function(r,a){return e(function(i){return t.rawRequest(mm,r,E(E({},a),i))},"AuthRefresh","mutation")}}}var gm=function(t){un(n,t);var e=ln(n);function n(){var r;ae(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),Ue(je(r),"name","ClockSkewedError"),Ue(je(r),"message","Your system clock is skewed compared to the API clock"),r}return ie(n)}(ct(Error)),ba=Dn.secondsToMs(30),ym=Dn.secondsToMs(10),wr=function(){function t(e,n){ae(this,t),this.accessToken=e,this.refreshToken=n}return ie(t,[{key:"checkClock",value:function(){var n=pa(this.refreshToken);if(jt(n.iat,"Issued at date should be provided by JWT token"),Math.abs(Dn.secondsToMs(n.iat)-Date.now())>ym)throw new gm}},{key:"canRefresh",value:function(){var n=Date.now(),r=this.getTokenExpTimestamp(this.refreshToken);return n<r-ba}},{key:"shouldRefresh",value:function(){var n=this.accessToken;if(!n)return!0;var r=Date.now(),a=this.getTokenExpTimestamp(n);return r>=a-ba}},{key:"getTokenExpTimestamp",value:function(n){var r=pa(n);return jt(r.exp,"Exp date should be provided by JWT token"),Dn.secondsToMs(r.exp)}}]),t}(),wm=function(){function t(e){ae(this,t);var n=new De(e.environment.gqlEndpoint);this.sdk=vm(n)}return ie(t,[{key:"challenge",value:function(){var e=y(d().mark(function r(a){var i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.sdk.AuthChallenge({address:a});case 2:return i=s.sent,s.abrupt("return",i.data.result.text);case 4:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"verify",value:function(){var e=y(d().mark(function r(a){var i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.sdk.AuthVerify({accessToken:a});case 2:return i=s.sent,s.abrupt("return",i.data.result);case 4:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"authenticate",value:function(){var e=y(d().mark(function r(a,i){var o,s,u,l,c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.sdk.AuthAuthenticate({address:a,signature:i});case 2:return o=p.sent,s=o.data.result,u=s.accessToken,l=s.refreshToken,c=new wr(u,l),c.checkClock(),p.abrupt("return",c);case 7:case"end":return p.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"refresh",value:function(){var e=y(d().mark(function r(a){var i,o,s,u,l;return d().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,this.sdk.AuthRefresh({refreshToken:a});case 2:return i=f.sent,o=i.data.result,s=o.accessToken,u=o.refreshToken,l=new wr(s,u),l.checkClock(),f.abrupt("return",l);case 7:case"end":return f.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),_m=Qe.object({refreshToken:Qe.string()}),bm=function(){function t(e,n){ae(this,t);var r=new Kh("lens.".concat(n,".credentials"),_m);this.refreshTokenStorage=em.createForSchema(r,e)}return ie(t,[{key:"set",value:function(){var e=y(d().mark(function r(a){var i,o;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=a.accessToken,o=a.refreshToken,this.accessToken=i,u.next=4,this.refreshTokenStorage.set({refreshToken:o});case 4:case"end":return u.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"get",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.getRefreshToken();case 2:if(a=s.sent,a){s.next=5;break}return s.abrupt("return",null);case 5:return i=this.accessToken,s.abrupt("return",new wr(i,a));case 7:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"reset",value:function(){var e=y(d().mark(function r(){return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return this.accessToken=void 0,i.next=3,this.refreshTokenStorage.reset();case 3:case"end":return i.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"subscribe",value:function(n){throw new Error("Method not implemented.")}},{key:"getRefreshToken",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.refreshTokenStorage.get();case 2:return i=s.sent,s.abrupt("return",(a=i==null?void 0:i.refreshToken)!==null&&a!==void 0?a:null);case 4:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()}]),t}(),km=function(){function t(e){ae(this,t),this.api=new wm(e),this.storage=new bm(e.storage||new tm,e.environment.name)}return ie(t,[{key:"generateChallenge",value:function(){var e=y(d().mark(function r(a){return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",this.api.challenge(a));case 1:case"end":return o.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"authenticate",value:function(){var e=y(d().mark(function r(a,i){var o;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.api.authenticate(a,i);case 2:return o=u.sent,u.next=5,this.storage.set(o);case 5:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"isAuthenticated",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.storage.get();case 2:if(a=s.sent,a){s.next=5;break}return s.abrupt("return",!1);case 5:if(a.shouldRefresh()){s.next=7;break}return s.abrupt("return",!0);case 7:if(!a.canRefresh()){s.next=14;break}return s.next=10,this.api.refresh(a.refreshToken);case 10:return i=s.sent,s.next=13,this.storage.set(i);case 13:return s.abrupt("return",!0);case 14:return s.abrupt("return",!1);case 15:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"getRequestHeader",value:function(){var e=y(d().mark(function r(){var a,i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.storage.get();case 2:if(a=s.sent,a){s.next=5;break}return s.abrupt("return",Nn(new Eu));case 5:if(a.shouldRefresh()){s.next=7;break}return s.abrupt("return",pr(this.buildHeader(a.accessToken)));case 7:if(!a.canRefresh()){s.next=14;break}return s.next=10,this.api.refresh(a.refreshToken);case 10:return i=s.sent,s.next=13,this.storage.set(i);case 13:return s.abrupt("return",pr(this.buildHeader(i.accessToken)));case 14:return s.abrupt("return",Nn(new sm));case 15:case"end":return s.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"buildHeader",value:function(n){return{authorization:"Bearer ".concat(n||"")}}}]),t}();function fe(t,e){return _r.apply(this,arguments)}function _r(){return _r=y(d().mark(function t(e,n){var r;return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(n);case 2:return r=i.sent,i.t0=function(){return y(d().mark(function s(){var u;return d().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!r.pageInfo.next){c.next=6;break}return c.next=3,fe(e,E(E({},n),{},{cursor:r.pageInfo.next}));case 3:return u=c.sent,r=u,c.abrupt("return",u);case 6:return c.abrupt("return",null);case 7:case"end":return c.stop()}},s)}))()},i.t1=function(){return y(d().mark(function s(){var u;return d().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!r.pageInfo.prev){c.next=6;break}return c.next=3,fe(e,E(E({},n),{},{cursor:r.pageInfo.prev}));case 3:return u=c.sent,r=u,c.abrupt("return",u);case 6:return c.abrupt("return",null);case 7:case"end":return c.stop()}},s)}))()},i.abrupt("return",{get pageInfo(){return r.pageInfo},get items(){return r.items},next:i.t0,prev:i.t1});case 6:case"end":return i.stop()}},t)})),_r.apply(this,arguments)}function Tm(t){return br.apply(this,arguments)}function br(){return br=y(d().mark(function t(e){var n;return d().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",{});case 2:return a.next=4,e.getRequestHeader();case 4:if(n=a.sent,!n.isFailure()){a.next=7;break}return a.abrupt("return",{});case 7:return a.abrupt("return",n.value);case 8:case"end":return a.stop()}},t)})),br.apply(this,arguments)}function ne(t,e){return kr.apply(this,arguments)}function kr(){return kr=y(d().mark(function t(e,n){var r;return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Tm(e);case 2:return r=i.sent,i.abrupt("return",n(r));case 4:case"end":return i.stop()}},t)})),kr.apply(this,arguments)}function Z(t,e){return Tr.apply(this,arguments)}function Tr(){return Tr=y(d().mark(function t(e,n){var r,a;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e){o.next=2;break}return o.abrupt("return",Nn(new Eu));case 2:return o.next=4,e.getRequestHeader();case 4:if(r=o.sent,!r.isFailure()){o.next=7;break}return o.abrupt("return",Nn(r.error));case 7:return o.next=9,n(r.value);case 9:return a=o.sent,o.abrupt("return",pr(a));case 11:case"end":return o.stop()}},t)})),Tr.apply(this,arguments)}var Em=1e3,Sm=20;function Su(t){return Er.apply(this,arguments)}function Er(){return Er=y(d().mark(function t(e){var n,r,a,i,o,s,u,l,c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return n=e.fn,r=e.validate,a=e.onMaxAttempts,i=e.interval,o=i===void 0?Em:i,s=e.maxAttempts,u=s===void 0?Sm:s,l=0,c=function(){var h=y(d().mark(function v(T,O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,n();case 2:if(I=k.sent,l++,!r(I)){k.next=8;break}return k.abrupt("return",T(I));case 8:if(!(u&&l===u)){k.next=12;break}return k.abrupt("return",O(a()));case 12:setTimeout(c,o,T,O);case 13:case"end":return k.stop()}},v)}));return function(T,O){return h.apply(this,arguments)}}(),p.abrupt("return",new Promise(c));case 4:case"end":return p.stop()}},t)})),Er.apply(this,arguments)}var ka,Ta,Ea,Sa,Ca,Da,Na,Ia,Pa,Oa,Aa,Ra,$a,Ma,Fa,qa,xa,La,ja,Ua,Va,Ba,Ga,Ha,Za,Wa,za,Ya,Ja,Qa,Xa,Ka,ei,ti,ni,Nt=S(ka||(ka=C([`
  fragment EIP712TypedDataDomain on EIP712TypedDataDomain {
    name
    chainId
    version
    verifyingContract
  }
`]))),Mr=S(Ta||(Ta=C([`
  fragment Erc20 on Erc20 {
    __typename
    name
    symbol
    decimals
    address
  }
`]))),Cm=S(Ea||(Ea=C([`
  fragment Erc20Amount on Erc20Amount {
    __typename
    asset {
      ...Erc20
    }
    value
  }
  `,`
`])),Mr),Dm=S(Sa||(Sa=C([`
  fragment Media on Media {
    __typename
    url
    mimeType
  }
`]))),Cu=S(Ca||(Ca=C([`
  fragment MediaSet on MediaSet {
    __typename
    original {
      ...Media
    }
  }
  `,`
`])),Dm),rt=S(Da||(Da=C([`
  fragment ModuleFeeAmount on ModuleFeeAmount {
    __typename
    asset {
      ...Erc20
    }
    value
  }
  `,`
`])),Mr),Nm=S(Na||(Na=C([`
  fragment FeeFollowModuleSettings on FeeFollowModuleSettings {
    __typename
    amount {
      ...ModuleFeeAmount
    }
    contractAddress
    recipient
  }
  `,`
`])),rt),Im=S(Ia||(Ia=C([`
  fragment ProfileFollowModuleSettings on ProfileFollowModuleSettings {
    __typename
    contractAddress
  }
`]))),Pm=S(Pa||(Pa=C([`
  fragment RevertFollowModuleSettings on RevertFollowModuleSettings {
    __typename
    contractAddress
  }
`]))),Om=S(Oa||(Oa=C([`
  fragment UnknownFollowModuleSettings on UnknownFollowModuleSettings {
    __typename
    contractAddress
  }
`]))),Am=S(Aa||(Aa=C([`
  fragment Attribute on Attribute {
    __typename
    displayType
    key
    value
  }
`]))),de=S(Ra||(Ra=C([`
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
`])),Cu,Nm,Im,Pm,Om,Am),Du=S($a||($a=C([`
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
`])),de),Nu=S(Ma||(Ma=C([`
  fragment SimplePublicationStats on PublicationStats {
    __typename
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
    totalUpvotes
    totalDownvotes
  }
`]))),Rm=S(Fa||(Fa=C([`
  fragment MetadataAttributeOutput on MetadataAttributeOutput {
    __typename
    traitType
    value
  }
`]))),Iu=S(qa||(qa=C([`
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
`])),Cu,Rm),It=S(xa||(xa=C([`
  fragment Wallet on Wallet {
    __typename
    address
    defaultProfile {
      ...Profile
    }
  }
  `,`
`])),de),Pu=S(La||(La=C([`
  fragment FreeCollectModuleSettings on FreeCollectModuleSettings {
    __typename
    contractAddress
    followerOnly
  }
`]))),Ou=S(ja||(ja=C([`
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
`])),rt),Au=S(Ua||(Ua=C([`
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
`])),rt),Ru=S(Va||(Va=C([`
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
`])),rt),$u=S(Ba||(Ba=C([`
  fragment RevertCollectModuleSettings on RevertCollectModuleSettings {
    __typename
    contractAddress
  }
`]))),Mu=S(Ga||(Ga=C([`
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
`])),rt),Fu=S(Ha||(Ha=C([`
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
`])),rt),qu=S(Za||(Za=C([`
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
`])),rt),xu=S(Wa||(Wa=C([`
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
`])),rt),Ie=S(za||(za=C([`
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
`])),Nu,Iu,de,It,Pu,Ou,Au,Ru,$u,Mu,Fu,qu,xu),$m=S(Ya||(Ya=C([`
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
`])),Nu,Iu,de,It,Pu,Ou,Au,Ru,$u,Mu,Fu,qu,xu),Pe=S(Ja||(Ja=C([`
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
`])),$m,Ie,Du),ft=S(Qa||(Qa=C([`
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
`])),Du,Ie,Pe),ge=S(Xa||(Xa=C([`
  fragment CommonPaginatedResultInfo on PaginatedResultInfo {
    __typename
    prev
    next
    totalCount
  }
`]))),Mm=S(Ka||(Ka=C([`
  fragment Following on Following {
    __typename
    profile {
      ...Profile
    }
  }
  `,`
`])),de),Fm=S(ei||(ei=C([`
  fragment Follower on Follower {
    __typename
    wallet {
      ...Wallet
    }
  }
  `,`
`])),It),dt=S(ti||(ti=C([`
  fragment RelayerResult on RelayerResult {
    __typename
    txHash
    txId
  }
`]))),pt=S(ni||(ni=C([`
  fragment RelayError on RelayError {
    __typename
    reason
  }
`]))),ri,ai,qm=S(ri||(ri=C([`
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
`])),Ie,ft,Pe,ge),xm=S(ai||(ai=C([`
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
`])),de,ge),Lm=function(e,n,r){return e()},jm=A(qm),Um=A(xm);function Vm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Lm;return{ExplorePublications:function(r,a){return e(function(i){return t.rawRequest(jm,r,E(E({},a),i))},"ExplorePublications","query")},ExploreProfiles:function(r,a){return e(function(i){return t.rawRequest(Um,r,E(E({},a),i))},"ExploreProfiles","query")}}}var Bm=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=Vm(r),this.authentication=n}return ie(t,[{key:"publications",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ExplorePublications({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"profiles",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ExploreProfiles({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),ii,si,oi,ui,li,ci,fi,Gm=S(ii||(ii=C([`
  fragment ElectedMirror on ElectedMirror {
    __typename
    mirrorId
    profile {
      ...Profile
    }
    timestamp
  }
  `,`
`])),de),Hm=S(si||(si=C([`
  fragment MirrorEvent on MirrorEvent {
    __typename
    profile {
      ...Profile
    }
    timestamp
  }
  `,`
`])),de),Zm=S(oi||(oi=C([`
  fragment CollectedEvent on CollectedEvent {
    __typename
    profile {
      ...Profile
    }
    timestamp
  }
  `,`
`])),de),Wm=S(ui||(ui=C([`
  fragment ReactionEvent on ReactionEvent {
    __typename
    profile {
      ...Profile
    }
    reaction
    timestamp
  }
  `,`
`])),de),zm=S(li||(li=C([`
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
`])),Ie,Pe,Gm,Hm,Zm,Wm),Ym=S(ci||(ci=C([`
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
`])),zm,ge),Jm=S(fi||(fi=C([`
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
`])),Ie,ft,Pe,ge),Qm=function(e,n,r){return e()},Xm=A(Ym),Km=A(Jm);function ev(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qm;return{Feed:function(r,a){return e(function(i){return t.rawRequest(Xm,r,E(E({},a),i))},"Feed","query")},FeedHighlights:function(r,a){return e(function(i){return t.rawRequest(Km,r,E(E({},a),i))},"FeedHighlights","query")}}}var tv=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=ev(r),this.authentication=n}return ie(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Feed({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"fetchHighlights",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.FeedHighlights({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),di,pi,hi,mi,vi,gi,yi,nv=S(di||(di=C([`
  fragment ModuleInfo on ModuleInfo {
    __typename
    name
    type
  }
`]))),rv=S(pi||(pi=C([`
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
`])),nv),av=S(hi||(hi=C([`
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
`])),rv),iv=S(mi||(mi=C([`
  query EnabledModules {
    result: enabledModules {
      ...EnabledModules
    }
  }
  `,`
`])),av),sv=S(vi||(vi=C([`
  query EnabledModuleCurrencies {
    result: enabledModuleCurrencies {
      ...Erc20
    }
  }
  `,`
`])),Mr),ov=S(gi||(gi=C([`
  query ApprovedModuleAllowanceAmount($request: ApprovedModuleAllowanceAmountRequest!) {
    result: approvedModuleAllowanceAmount(request: $request) {
      currency
      module
      contractAddress
      allowance
    }
  }
`]))),uv=S(yi||(yi=C([`
  query GenerateModuleCurrencyApprovalData($request: GenerateModuleCurrencyApprovalDataRequest!) {
    result: generateModuleCurrencyApprovalData(request: $request) {
      to
      from
      data
    }
  }
`]))),lv=function(e,n,r){return e()},cv=A(iv),fv=A(sv),dv=A(ov),pv=A(uv);function hv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lv;return{EnabledModules:function(r,a){return e(function(i){return t.rawRequest(cv,r,E(E({},a),i))},"EnabledModules","query")},EnabledModuleCurrencies:function(r,a){return e(function(i){return t.rawRequest(fv,r,E(E({},a),i))},"EnabledModuleCurrencies","query")},ApprovedModuleAllowanceAmount:function(r,a){return e(function(i){return t.rawRequest(dv,r,E(E({},a),i))},"ApprovedModuleAllowanceAmount","query")},GenerateModuleCurrencyApprovalData:function(r,a){return e(function(i){return t.rawRequest(pv,r,E(E({},a),i))},"GenerateModuleCurrencyApprovalData","query")}}}var mv=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=hv(r),this.authentication=n}return ie(t,[{key:"fetchEnabledCurrencies",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Z(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.EnabledModuleCurrencies({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"fetchEnabled",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Z(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.EnabledModules({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"approvedAllowanceAmount",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ApprovedModuleAllowanceAmount({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"generateCurrencyApprovalData",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.GenerateModuleCurrencyApprovalData({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),wi,_i,bi,ki,Ti,Ei,Si,Ci,Di,Ni,Lu=S(wi||(wi=C([`
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
`]))),vv=S(_i||(_i=C([`
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
`])),Lu),gv=S(bi||(bi=C([`
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
`])),Lu,ge),yv=S(ki||(ki=C([`
  query NftOwnershipChallenge($request: NftOwnershipChallengeRequest!) {
    result: nftOwnershipChallenge(request: $request) {
      id
      text
      timeout
    }
  }
`]))),wv=S(Ti||(Ti=C([`
  query ProfileGalleries($request: NftGalleriesRequest!) {
    result: nftGalleries(request: $request) {
      ...NftGallery
    }
  }
  `,`
`])),vv),_v=S(Ei||(Ei=C([`
  mutation CreateNFTGallery($request: NftGalleryCreateRequest!) {
    result: createNftGallery(request: $request)
  }
`]))),bv=S(Si||(Si=C([`
  mutation UpdateNFTGalleryInfo($request: NftGalleryUpdateInfoRequest!) {
    updateNftGalleryInfo(request: $request)
  }
`]))),kv=S(Ci||(Ci=C([`
  mutation UpdateNFTGalleryOrder($request: NftGalleryUpdateItemOrderRequest!) {
    updateNftGalleryOrder(request: $request)
  }
`]))),Tv=S(Di||(Di=C([`
  mutation UpdateNFTGalleryItems($request: NftGalleryUpdateItemsRequest!) {
    updateNftGalleryItems(request: $request)
  }
`]))),Ev=S(Ni||(Ni=C([`
  mutation DeleteNFTGallery($request: NftGalleryDeleteRequest!) {
    deleteNftGallery(request: $request)
  }
`]))),Sv=function(e,n,r){return e()},Cv=A(gv),Dv=A(yv),Nv=A(wv),Iv=A(_v),Pv=A(bv),Ov=A(kv),Av=A(Tv),Rv=A(Ev);function $v(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sv;return{Nfts:function(r,a){return e(function(i){return t.rawRequest(Cv,r,E(E({},a),i))},"Nfts","query")},NftOwnershipChallenge:function(r,a){return e(function(i){return t.rawRequest(Dv,r,E(E({},a),i))},"NftOwnershipChallenge","query")},ProfileGalleries:function(r,a){return e(function(i){return t.rawRequest(Nv,r,E(E({},a),i))},"ProfileGalleries","query")},CreateNFTGallery:function(r,a){return e(function(i){return t.rawRequest(Iv,r,E(E({},a),i))},"CreateNFTGallery","mutation")},UpdateNFTGalleryInfo:function(r,a){return e(function(i){return t.rawRequest(Pv,r,E(E({},a),i))},"UpdateNFTGalleryInfo","mutation")},UpdateNFTGalleryOrder:function(r,a){return e(function(i){return t.rawRequest(Ov,r,E(E({},a),i))},"UpdateNFTGalleryOrder","mutation")},UpdateNFTGalleryItems:function(r,a){return e(function(i){return t.rawRequest(Av,r,E(E({},a),i))},"UpdateNFTGalleryItems","mutation")},DeleteNFTGallery:function(r,a){return e(function(i){return t.rawRequest(Rv,r,E(E({},a),i))},"DeleteNFTGallery","mutation")}}}var Mv=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=$v(r),this.authentication=n}return ie(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",fe(function(){var h=y(d().mark(function v(T){var O;return d().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,i.sdk.Nfts({request:T},c);case 2:return O=j.sent,j.abrupt("return",O.data.result);case 4:case"end":return j.stop()}},v)}));return function(v){return h.apply(this,arguments)}}(),a));case 1:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"ownershipChallenge",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.NftOwnershipChallenge({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"fetchGalleries",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProfileGalleries({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createGallery",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateNFTGallery({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"updateGalleryInfo",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.UpdateNFTGalleryInfo({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"updateGalleryItems",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.UpdateNFTGalleryItems({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"updateGalleryOrder",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.UpdateNFTGalleryOrder({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"deleteGallery",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.DeleteNFTGallery({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),Ii,Fv=S(Ii||(Ii=C([`
  query UserSigNonces {
    result: userSigNonces {
      lensHubOnChainSigNonce
      peripheryOnChainSigNonce
    }
  }
`]))),qv=function(e,n,r){return e()},xv=A(Fv);function Lv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qv;return{UserSigNonces:function(r,a){return e(function(i){return t.rawRequest(xv,r,E(E({},a),i))},"UserSigNonces","query")}}}var jv=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=Lv(r),this.authentication=n}return ie(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Z(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.UserSigNonces({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()}]),t}(),Pi,Oi,Ai,Ri,$i,Mi,Fi,Uv=S(Pi||(Pi=C([`
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
`])),It),Vv=S(Oi||(Oi=C([`
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
`])),It,Ie,ft,Pe),Bv=S(Ai||(Ai=C([`
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
`])),de,Ie,Pe),Gv=S(Ri||(Ri=C([`
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
`])),de,Pe),Hv=S($i||($i=C([`
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
`])),Ie,Pe),Zv=S(Mi||(Mi=C([`
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
`])),de,Ie,Pe,ft),Wv=S(Fi||(Fi=C([`
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
`])),Uv,Bv,Vv,Gv,Hv,Zv,ge),zv=function(e,n,r){return e()},Yv=A(Wv);function Jv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zv;return{Notifications:function(r,a){return e(function(i){return t.rawRequest(Yv,r,E(E({},a),i))},"Notifications","query")}}}var Qv=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=Jv(r),this.authentication=n}return ie(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Notifications({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),qi,xi,Li,ji,Ui,Vi,Bi,Gi,Hi,Zi,Wi,zi,Yi,Ji,Qi,Xi,Ki,es,ts,ns,rs,as,is,ss,os,us,ls,Xv=S(qi||(qi=C([`
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
`]))),Kv=S(xi||(xi=C([`
  query Profile($request: SingleProfileQueryRequest!, $observerId: ProfileId) {
    result: profile(request: $request) {
      ...Profile
    }
  }
  `,`
`])),de),eg=S(Li||(Li=C([`
  query ProfileStats($request: SingleProfileQueryRequest!, $sources: [Sources!]!) {
    result: profile(request: $request) {
      stats {
        ...ProfileStats
      }
    }
  }
  `,`
`])),Xv),tg=S(ji||(ji=C([`
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
`])),de,ge),ng=S(Ui||(Ui=C([`
  query RecommendedProfiles($options: RecommendedProfileOptions!, $observerId: ProfileId) {
    result: recommendedProfiles(options: $options) {
      ...Profile
    }
  }
  `,`
`])),de),rg=S(Vi||(Vi=C([`
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
`])),de,ge),ag=S(Bi||(Bi=C([`
  query DoesFollow($request: DoesFollowRequest!) {
    result: doesFollow(request: $request) {
      follows
      followerAddress
      profileId
      isFinalisedOnChain
      __typename
    }
  }
`]))),ig=S(Gi||(Gi=C([`
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
`])),Mm,ge),sg=S(Hi||(Hi=C([`
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
`])),Fm,ge),og=S(Zi||(Zi=C([`
  query FollowerNftOwnedTokenIds($request: FollowerNftOwnedTokenIdsRequest!) {
    result: followerNftOwnedTokenIds(request: $request) {
      __typename
      followerNftAddress
      tokensIds
    }
  }
`]))),ug=S(Wi||(Wi=C([`
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
`])),de,ge),lg=S(zi||(zi=C([`
  query ProfileInterests {
    result: profileInterests
  }
`]))),cg=S(Yi||(Yi=C([`
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
`])),dt,pt),fg=S(Ji||(Ji=C([`
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
`]))),dg=S(Qi||(Qi=C([`
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
`]))),pg=S(Xi||(Xi=C([`
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
`]))),hg=S(Ki||(Ki=C([`
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
`])),dt,pt),mg=S(es||(es=C([`
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
`]))),vg=S(ts||(ts=C([`
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
`])),dt,pt),gg=S(ns||(ns=C([`
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
`]))),yg=S(rs||(rs=C([`
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
`])),Nt),wg=S(as||(as=C([`
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
`])),Nt),_g=S(is||(is=C([`
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
`]))),bg=S(ss||(ss=C([`
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
`]))),kg=S(os||(os=C([`
  mutation AddProfileInterest($request: AddProfileInterestsRequest!) {
    addProfileInterests(request: $request)
  }
`]))),Tg=S(us||(us=C([`
  mutation RemoveProfileInterest($request: RemoveProfileInterestsRequest!) {
    removeProfileInterests(request: $request)
  }
`]))),Eg=S(ls||(ls=C([`
  mutation DismissRecommendedProfiles($request: DismissRecommendedProfilesRequest!) {
    dismissRecommendedProfiles(request: $request)
  }
`]))),Sg=function(e,n,r){return e()},Cg=A(Kv),Dg=A(eg),Ng=A(tg),Ig=A(ng),Pg=A(rg),Og=A(ag),Ag=A(ig),Rg=A(sg),$g=A(og),Mg=A(ug),Fg=A(lg),qg=A(cg),xg=A(fg),Lg=A(dg),jg=A(pg),Ug=A(hg),Vg=A(mg),Bg=A(vg),Gg=A(gg),Hg=A(yg),Zg=A(wg),Wg=A(_g),zg=A(bg),Yg=A(kg),Jg=A(Tg),Qg=A(Eg);function Xg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sg;return{Profile:function(r,a){return e(function(i){return t.rawRequest(Cg,r,E(E({},a),i))},"Profile","query")},ProfileStats:function(r,a){return e(function(i){return t.rawRequest(Dg,r,E(E({},a),i))},"ProfileStats","query")},Profiles:function(r,a){return e(function(i){return t.rawRequest(Ng,r,E(E({},a),i))},"Profiles","query")},RecommendedProfiles:function(r,a){return e(function(i){return t.rawRequest(Ig,r,E(E({},a),i))},"RecommendedProfiles","query")},MutualFollowersProfiles:function(r,a){return e(function(i){return t.rawRequest(Pg,r,E(E({},a),i))},"MutualFollowersProfiles","query")},DoesFollow:function(r,a){return e(function(i){return t.rawRequest(Og,r,E(E({},a),i))},"DoesFollow","query")},Following:function(r,a){return e(function(i){return t.rawRequest(Ag,r,E(E({},a),i))},"Following","query")},Followers:function(r,a){return e(function(i){return t.rawRequest(Rg,r,E(E({},a),i))},"Followers","query")},FollowerNftOwnedTokenIds:function(r,a){return e(function(i){return t.rawRequest($g,r,E(E({},a),i))},"FollowerNftOwnedTokenIds","query")},PendingApprovalFollows:function(r,a){return e(function(i){return t.rawRequest(Mg,r,E(E({},a),i))},"PendingApprovalFollows","query")},ProfileInterests:function(r,a){return e(function(i){return t.rawRequest(Fg,r,E(E({},a),i))},"ProfileInterests","query")},CreateProfile:function(r,a){return e(function(i){return t.rawRequest(qg,r,E(E({},a),i))},"CreateProfile","mutation")},CreateBurnProfileTypedData:function(r,a){return e(function(i){return t.rawRequest(xg,r,E(E({},a),i))},"CreateBurnProfileTypedData","mutation")},CreateSetDefaultProfileTypedData:function(r,a){return e(function(i){return t.rawRequest(Lg,r,E(E({},a),i))},"CreateSetDefaultProfileTypedData","mutation")},CreateSetProfileImageURITypedData:function(r,a){return e(function(i){return t.rawRequest(jg,r,E(E({},a),i))},"CreateSetProfileImageURITypedData","mutation")},CreateSetProfileImageURIViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(Ug,r,E(E({},a),i))},"CreateSetProfileImageURIViaDispatcher","mutation")},CreateSetProfileMetadataTypedData:function(r,a){return e(function(i){return t.rawRequest(Vg,r,E(E({},a),i))},"CreateSetProfileMetadataTypedData","mutation")},CreateSetProfileMetadataViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(Bg,r,E(E({},a),i))},"CreateSetProfileMetadataViaDispatcher","mutation")},CreateSetDispatcherTypedData:function(r,a){return e(function(i){return t.rawRequest(Gg,r,E(E({},a),i))},"CreateSetDispatcherTypedData","mutation")},CreateFollowTypedData:function(r,a){return e(function(i){return t.rawRequest(Hg,r,E(E({},a),i))},"CreateFollowTypedData","mutation")},CreateUnfollowTypedData:function(r,a){return e(function(i){return t.rawRequest(Zg,r,E(E({},a),i))},"CreateUnfollowTypedData","mutation")},CreateSetFollowModuleTypedData:function(r,a){return e(function(i){return t.rawRequest(Wg,r,E(E({},a),i))},"CreateSetFollowModuleTypedData","mutation")},CreateSetFollowNFTUriTypedData:function(r,a){return e(function(i){return t.rawRequest(zg,r,E(E({},a),i))},"CreateSetFollowNFTUriTypedData","mutation")},AddProfileInterest:function(r,a){return e(function(i){return t.rawRequest(Yg,r,E(E({},a),i))},"AddProfileInterest","mutation")},RemoveProfileInterest:function(r,a){return e(function(i){return t.rawRequest(Jg,r,E(E({},a),i))},"RemoveProfileInterest","mutation")},DismissRecommendedProfiles:function(r,a){return e(function(i){return t.rawRequest(Qg,r,E(E({},a),i))},"DismissRecommendedProfiles","mutation")}}}var Kg=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=Xg(r),this.authentication=n}return ie(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.Profile({request:a,observerId:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"stats",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){var p,h;return d().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,o.sdk.ProfileStats({request:a,sources:i},f);case 2:return h=T.sent,T.abrupt("return",(p=h.data.result)===null||p===void 0?void 0:p.stats);case 4:case"end":return T.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"fetchAll",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Profiles({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allRecommended",value:function(){var e=y(d().mark(function r(){var a=this,i,o,s=arguments;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=s.length>0&&s[0]!==void 0?s[0]:{},o=s.length>1?s[1]:void 0,l.abrupt("return",ne(this.authentication,function(){var c=y(d().mark(function f(p){var h;return d().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,a.sdk.RecommendedProfiles({options:i,observerId:o},p);case 2:return h=T.sent,T.abrupt("return",h.data.result);case 4:case"end":return T.stop()}},f)}));return function(f){return c.apply(this,arguments)}}()));case 3:case"end":return l.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"dismissRecommended",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.DismissRecommendedProfiles({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"mutualFollowers",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.MutualFollowersProfiles({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"doesFollow",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.DoesFollow({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"allFollowing",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Following({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allFollowers",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Followers({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"followerNftOwnedTokenIds",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.FollowerNftOwnedTokenIds({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"create",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateProfile({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createSetDispatcherTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetDispatcherTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetDefaultProfileTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetDefaultProfileTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetProfileMetadataTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetProfileMetadataTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetProfileMetadataViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateSetProfileMetadataViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createSetProfileImageURITypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetProfileImageURITypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetProfileImageURIViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateSetProfileImageURIViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createBurnProfileTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateBurnProfileTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createFollowTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateFollowTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createUnfollowTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateUnfollowTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetFollowModuleTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetFollowModuleTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createSetFollowNFTUriTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateSetFollowNFTUriTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"pendingApprovalFollows",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.PendingApprovalFollows({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allInterests",value:function(){var e=y(d().mark(function r(){var a=this;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",ne(this.authentication,function(){var s=y(d().mark(function u(l){var c;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.sdk.ProfileInterests({},l);case 2:return c=p.sent,p.abrupt("return",c.data.result);case 4:case"end":return p.stop()}},u)}));return function(u){return s.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"addInterests",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.AddProfileInterest({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"removeInterests",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.RemoveProfileInterest({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),cs;(function(t){t.AlreadyClaimed="ALREADY_CLAIMED",t.ClaimFailed="CLAIM_FAILED",t.NotClaimed="NOT_CLAIMED"})(cs||(cs={}));var fs;(function(t){t.AaveFeeCollectModule="AaveFeeCollectModule",t.Erc4626FeeCollectModule="ERC4626FeeCollectModule",t.FeeCollectModule="FeeCollectModule",t.FreeCollectModule="FreeCollectModule",t.LimitedFeeCollectModule="LimitedFeeCollectModule",t.LimitedTimedFeeCollectModule="LimitedTimedFeeCollectModule",t.MultirecipientFeeCollectModule="MultirecipientFeeCollectModule",t.RevertCollectModule="RevertCollectModule",t.TimedFeeCollectModule="TimedFeeCollectModule",t.UnknownCollectModule="UnknownCollectModule"})(fs||(fs={}));var ds;(function(t){t.Desc="DESC",t.Ranking="RANKING"})(ds||(ds={}));var ps;(function(t){t.NoneRelevant="NONE_RELEVANT",t.Relevant="RELEVANT"})(ps||(ps={}));var hs;(function(t){t.Erc20="ERC20",t.Erc721="ERC721",t.Erc1155="ERC1155"})(hs||(hs={}));var ms;(function(t){t.Gardeners="GARDENERS"})(ms||(ms={}));var vs;(function(t){t.CanNotDecrypt="CAN_NOT_DECRYPT",t.CollectNotFinalisedOnChain="COLLECT_NOT_FINALISED_ON_CHAIN",t.DoesNotFollowProfile="DOES_NOT_FOLLOW_PROFILE",t.DoesNotOwnNft="DOES_NOT_OWN_NFT",t.DoesNotOwnProfile="DOES_NOT_OWN_PROFILE",t.FollowNotFinalisedOnChain="FOLLOW_NOT_FINALISED_ON_CHAIN",t.HasNotCollectedPublication="HAS_NOT_COLLECTED_PUBLICATION",t.MissingEncryptionParams="MISSING_ENCRYPTION_PARAMS",t.ProfileDoesNotExist="PROFILE_DOES_NOT_EXIST",t.UnauthorizedAddress="UNAUTHORIZED_ADDRESS",t.UnauthorizedBalance="UNAUTHORIZED_BALANCE"})(vs||(vs={}));var gs;(function(t){t.LitProtocol="LIT_PROTOCOL"})(gs||(gs={}));var ys;(function(t){t.CollectComment="COLLECT_COMMENT",t.CollectPost="COLLECT_POST",t.Comment="COMMENT",t.Mirror="MIRROR",t.Post="POST",t.ReactionComment="REACTION_COMMENT",t.ReactionPost="REACTION_POST"})(ys||(ys={}));var ws;(function(t){t.FeeFollowModule="FeeFollowModule",t.ProfileFollowModule="ProfileFollowModule",t.RevertFollowModule="RevertFollowModule",t.UnknownFollowModule="UnknownFollowModule"})(ws||(ws={}));var _s;(function(t){t.AlreadyVerified="ALREADY_VERIFIED",t.Success="SUCCESS"})(_s||(_s={}));var bs;(function(t){t.CollectedComment="COLLECTED_COMMENT",t.CollectedPost="COLLECTED_POST",t.CommentedComment="COMMENTED_COMMENT",t.CommentedPost="COMMENTED_POST",t.Followed="FOLLOWED",t.MentionComment="MENTION_COMMENT",t.MentionPost="MENTION_POST",t.MirroredComment="MIRRORED_COMMENT",t.MirroredPost="MIRRORED_POST",t.ReactionComment="REACTION_COMMENT",t.ReactionPost="REACTION_POST"})(bs||(bs={}));var ks;(function(t){t.CreatedOn="CREATED_ON",t.LatestCreated="LATEST_CREATED",t.MostCollects="MOST_COLLECTS",t.MostComments="MOST_COMMENTS",t.MostFollowers="MOST_FOLLOWERS",t.MostMirrors="MOST_MIRRORS",t.MostPosts="MOST_POSTS",t.MostPublication="MOST_PUBLICATION"})(ks||(ks={}));var Sr;(function(t){t.Complete="COMPLETE",t.Minting="MINTING",t.Transferring="TRANSFERRING"})(Sr||(Sr={}));var Ts;(function(t){t.Nsfw="NSFW",t.Sensitive="SENSITIVE",t.Spoiler="SPOILER"})(Ts||(Ts={}));var Es;(function(t){t.Article="ARTICLE",t.Audio="AUDIO",t.Embed="EMBED",t.Image="IMAGE",t.Link="LINK",t.TextOnly="TEXT_ONLY",t.Video="VIDEO"})(Es||(Es={}));var Ss;(function(t){t.Lens="LENS"})(Ss||(Ss={}));var Cs;(function(t){t.Date="date",t.Number="number",t.String="string"})(Cs||(Cs={}));var Ds;(function(t){t.MetadataValidationFailed="METADATA_VALIDATION_FAILED",t.NotFound="NOT_FOUND",t.Pending="PENDING",t.Success="SUCCESS"})(Ds||(Ds={}));var Ns;(function(t){t.Impersonation="IMPERSONATION",t.Scam="SCAM"})(Ns||(Ns={}));var Is;(function(t){t.AnimalAbuse="ANIMAL_ABUSE",t.DirectThreat="DIRECT_THREAT",t.HumanAbuse="HUMAN_ABUSE",t.ThreatIndividual="THREAT_INDIVIDUAL",t.Violence="VIOLENCE"})(Is||(Is={}));var Ps;(function(t){t.Fraud="FRAUD",t.Illegal="ILLEGAL",t.Sensitive="SENSITIVE",t.Spam="SPAM"})(Ps||(Ps={}));var Os;(function(t){t.Nsfw="NSFW",t.Offensive="OFFENSIVE"})(Os||(Os={}));var As;(function(t){t.FakeEngagement="FAKE_ENGAGEMENT",t.ManipulationAlgo="MANIPULATION_ALGO",t.Misleading="MISLEADING",t.MisuseHashtags="MISUSE_HASHTAGS",t.Repetitive="REPETITIVE",t.SomethingElse="SOMETHING_ELSE",t.Unrelated="UNRELATED"})(As||(As={}));var Rs;(function(t){t.CuratedProfiles="CURATED_PROFILES",t.Latest="LATEST",t.TopCollected="TOP_COLLECTED",t.TopCommented="TOP_COMMENTED",t.TopMirrored="TOP_MIRRORED"})(Rs||(Rs={}));var Mt;(function(t){t.Comment="COMMENT",t.Mirror="MIRROR",t.Post="POST"})(Mt||(Mt={}));var $s;(function(t){t.Downvote="DOWNVOTE",t.Upvote="UPVOTE"})($s||($s={}));var Ms;(function(t){t.DegreesOfSeparationReferenceModule="DegreesOfSeparationReferenceModule",t.FollowerOnlyReferenceModule="FollowerOnlyReferenceModule",t.UnknownReferenceModule="UnknownReferenceModule"})(Ms||(Ms={}));var Fs;(function(t){t.Expired="EXPIRED",t.HandleTaken="HANDLE_TAKEN",t.NotAllowed="NOT_ALLOWED",t.Rejected="REJECTED",t.WrongWalletSigned="WRONG_WALLET_SIGNED"})(Fs||(Fs={}));var qs;(function(t){t.Equal="EQUAL",t.GreaterThan="GREATER_THAN",t.GreaterThanOrEqual="GREATER_THAN_OR_EQUAL",t.LessThan="LESS_THAN",t.LessThanOrEqual="LESS_THAN_OR_EQUAL",t.NotEqual="NOT_EQUAL"})(qs||(qs={}));var xs;(function(t){t.Profile="PROFILE",t.Publication="PUBLICATION"})(xs||(xs={}));var Ls;(function(t){t.Alphabetical="ALPHABETICAL",t.MostPopular="MOST_POPULAR"})(Ls||(Ls={}));var js;(function(t){t.Reverted="REVERTED"})(js||(js={}));var Us;(function(t){t.Orb="ORB",t.Phone="PHONE"})(Us||(Us={}));var Vs,Bs,Gs,Hs,Zs,ey=S(Vs||(Vs=C([`
  fragment ProxyActionStatusResult on ProxyActionStatusResult {
    __typename
    txHash
    txId
    status
  }
`]))),ty=S(Bs||(Bs=C([`
  fragment ProxyActionError on ProxyActionError {
    __typename
    reason
    lastKnownTxId
  }
`]))),ny=S(Gs||(Gs=C([`
  fragment ProxyActionQueued on ProxyActionQueued {
    __typename
    queuedAt
  }
`]))),ry=S(Hs||(Hs=C([`
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
`])),ey,ty,ny),ay=S(Zs||(Zs=C([`
  mutation ProxyAction($request: ProxyActionRequest!) {
    result: proxyAction(request: $request)
  }
`]))),iy=function(e,n,r){return e()},sy=A(ry),oy=A(ay);function uy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:iy;return{ProxyActionStatus:function(r,a){return e(function(i){return t.rawRequest(sy,r,E(E({},a),i))},"ProxyActionStatus","query")},ProxyAction:function(r,a){return e(function(i){return t.rawRequest(oy,r,E(E({},a),i))},"ProxyAction","mutation")}}}function ly(t){return t.__typename==="ProxyActionStatusResult"}var cy=function(t){un(n,t);var e=ln(n);function n(){var r;ae(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),Ue(je(r),"name","StatusPollingError"),Ue(je(r),"message","Max attempts exceeded"),r}return ie(n)}(ct(Error)),fy=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=uy(r),this.authentication=n}return ie(t,[{key:"freeFollow",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProxyAction({request:{follow:{freeFollow:{profileId:a}}}},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"freeCollect",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProxyAction({request:{collect:{freeCollect:{publicationId:a}}}},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"checkStatus",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProxyActionStatus({proxyActionId:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"waitForStatusComplete",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Su({fn:function(){return i.checkStatus(a)},validate:function(l){if(l.isSuccess()){var c=l.value;if(ly(c))return c.status===Sr.Complete}return!0},onMaxAttempts:function(){return new cy}}));case 1:case"end":return s.stop()}},r)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),Ws,zs,Ys,Js,Qs,Xs,Ks,eo,to,no,ro,ao,io,so,oo,uo,lo,co,dy=S(Ws||(Ws=C([`
  fragment PublicationStats on PublicationStats {
    __typename
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
    totalUpvotes
    totalDownvotes
    commentsTotal(forSources: $sources)
  }
`]))),py=S(zs||(zs=C([`
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
`])),Ie,ft,Pe),hy=S(Ys||(Ys=C([`
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
`])),dy),my=S(Js||(Js=C([`
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
`])),Ie,ft,Pe,ge),vy=S(Qs||(Qs=C([`
  query ValidatePublicationMetadata($metadata: PublicationMetadataV2Input!) {
    validatePublicationMetadata(request: { metadatav2: $metadata }) {
      __typename
      valid
      reason
    }
  }
`]))),gy=S(Xs||(Xs=C([`
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
`])),It,ge),yy=S(Ks||(Ks=C([`
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
`])),Ie,Pe,ge),wy=S(eo||(eo=C([`
  query PublicationMetadataStatus($request: GetPublicationMetadataStatusRequest!) {
    result: publicationMetadataStatus(request: $request) {
      __typename
      reason
      status
    }
  }
`]))),_y=S(to||(to=C([`
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
`])),Nt),by=S(no||(no=C([`
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
`])),dt,pt),ky=S(ro||(ro=C([`
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
`])),Nt),Ty=S(ao||(ao=C([`
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
`])),dt,pt),Ey=S(io||(io=C([`
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
`])),Nt),Sy=S(so||(so=C([`
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
`])),dt,pt),Cy=S(oo||(oo=C([`
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
`])),Nt),Dy=S(uo||(uo=C([`
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
`]))),Ny=S(lo||(lo=C([`
  mutation HidePublication($request: HidePublicationRequest!) {
    hidePublication(request: $request)
  }
`]))),Iy=S(co||(co=C([`
  mutation ReportPublication($request: ReportPublicationRequest!) {
    reportPublication(request: $request)
  }
`]))),Py=function(e,n,r){return e()},Oy=A(py),Ay=A(hy),Ry=A(my),$y=A(vy),My=A(gy),Fy=A(yy),qy=A(wy),xy=A(_y),Ly=A(by),jy=A(ky),Uy=A(Ty),Vy=A(Ey),By=A(Sy),Gy=A(Cy),Hy=A(Dy),Zy=A(Ny),Wy=A(Iy);function zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Py;return{Publication:function(r,a){return e(function(i){return t.rawRequest(Oy,r,E(E({},a),i))},"Publication","query")},PublicationStats:function(r,a){return e(function(i){return t.rawRequest(Ay,r,E(E({},a),i))},"PublicationStats","query")},Publications:function(r,a){return e(function(i){return t.rawRequest(Ry,r,E(E({},a),i))},"Publications","query")},ValidatePublicationMetadata:function(r,a){return e(function(i){return t.rawRequest($y,r,E(E({},a),i))},"ValidatePublicationMetadata","query")},WhoCollectedPublication:function(r,a){return e(function(i){return t.rawRequest(My,r,E(E({},a),i))},"WhoCollectedPublication","query")},ProfilePublicationsForSale:function(r,a){return e(function(i){return t.rawRequest(Fy,r,E(E({},a),i))},"ProfilePublicationsForSale","query")},PublicationMetadataStatus:function(r,a){return e(function(i){return t.rawRequest(qy,r,E(E({},a),i))},"PublicationMetadataStatus","query")},CreatePostTypedData:function(r,a){return e(function(i){return t.rawRequest(xy,r,E(E({},a),i))},"CreatePostTypedData","mutation")},CreatePostViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(Ly,r,E(E({},a),i))},"CreatePostViaDispatcher","mutation")},CreateCommentTypedData:function(r,a){return e(function(i){return t.rawRequest(jy,r,E(E({},a),i))},"CreateCommentTypedData","mutation")},CreateCommentViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(Uy,r,E(E({},a),i))},"CreateCommentViaDispatcher","mutation")},CreateMirrorTypedData:function(r,a){return e(function(i){return t.rawRequest(Vy,r,E(E({},a),i))},"CreateMirrorTypedData","mutation")},CreateMirrorViaDispatcher:function(r,a){return e(function(i){return t.rawRequest(By,r,E(E({},a),i))},"CreateMirrorViaDispatcher","mutation")},CreateCollectTypedData:function(r,a){return e(function(i){return t.rawRequest(Gy,r,E(E({},a),i))},"CreateCollectTypedData","mutation")},CreateAttachMediaData:function(r,a){return e(function(i){return t.rawRequest(Hy,r,E(E({},a),i))},"CreateAttachMediaData","mutation")},HidePublication:function(r,a){return e(function(i){return t.rawRequest(Zy,r,E(E({},a),i))},"HidePublication","mutation")},ReportPublication:function(r,a){return e(function(i){return t.rawRequest(Wy,r,E(E({},a),i))},"ReportPublication","mutation")}}}var Yy=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=zy(r),this.authentication=n}return ie(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.Publication({request:a,observerId:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"stats",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){var p,h;return d().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,o.sdk.PublicationStats({request:a,sources:i},f);case 2:return h=T.sent,T.abrupt("return",(p=h.data.result)===null||p===void 0?void 0:p.stats);case 4:case"end":return T.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"validateMetadata",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ValidatePublicationMetadata({metadata:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.validatePublicationMetadata);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"metadataStatus",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.PublicationMetadataStatus({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"fetchAll",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.Publications({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allWalletsWhoCollected",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.WhoCollectedPublication({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"allForSale",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ProfilePublicationsForSale({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createPostTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreatePostTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createPostViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreatePostViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createCommentTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateCommentTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createCommentViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateCommentViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createMirrorTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateMirrorTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createMirrorViaDispatcher",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateMirrorViaDispatcher({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"createCollectTypedData",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Z(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.CreateCollectTypedData({request:a,options:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"createAttachMediaData",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.CreateAttachMediaData({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"hide",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.HidePublication({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"report",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.ReportPublication({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),fo;(function(t){t.ANIMAL_ABUSE="ANIMAL_ABUSE",t.HARASSMENT="HARASSMENT",t.VIOLENCE="VIOLENCE",t.SELF_HARM="SELF_HARM",t.DIRECT_THREAT="DIRECT_THREAT",t.HATE_SPEECH="HATE_SPEECH",t.NUDITY="NUDITY",t.OFFENSIVE="OFFENSIVE",t.SCAM="SCAM",t.UNAUTHORIZED_SALE="UNAUTHORIZED_SALE",t.IMPERSONATION="IMPERSONATION",t.MISLEADING="MISLEADING",t.MISUSE_HASHTAGS="MISUSE_HASHTAGS",t.UNRELATED="UNRELATED",t.REPETITIVE="REPETITIVE",t.FAKE_ENGAGEMENT="FAKE_ENGAGEMENT",t.MANIPULATION_ALGO="MANIPULATION_ALGO",t.SOMETHING_ELSE="SOMETHING_ELSE"})(fo||(fo={}));var po,ho,mo,vo,Jy=S(po||(po=C([`
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
`])),de),Qy=S(ho||(ho=C([`
  mutation AddReaction($request: ReactionRequest!) {
    addReaction(request: $request)
  }
`]))),Xy=S(mo||(mo=C([`
  mutation RemoveReaction($request: ReactionRequest!) {
    removeReaction(request: $request)
  }
`]))),Ky=S(vo||(vo=C([`
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
`])),Jy,ge),ew=function(e,n,r){return e()},tw=A(Qy),nw=A(Xy),rw=A(Ky);function aw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ew;return{AddReaction:function(r,a){return e(function(i){return t.rawRequest(tw,r,E(E({},a),i))},"AddReaction","mutation")},RemoveReaction:function(r,a){return e(function(i){return t.rawRequest(nw,r,E(E({},a),i))},"RemoveReaction","mutation")},WhoReactedPublication:function(r,a){return e(function(i){return t.rawRequest(rw,r,E(E({},a),i))},"WhoReactedPublication","query")}}}var iw=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=aw(r),this.authentication=n}return ie(t,[{key:"add",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.AddReaction({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"remove",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.sdk.RemoveReaction({request:a},c);case 2:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"toPublication",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.WhoReactedPublication({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),go,yo,wo,_o,bo,ju=S(go||(go=C([`
  fragment RevenueAggregate on RevenueAggregate {
    __typename
    total {
      ...Erc20Amount
    }
  }
  `,`
`])),Cm),Uu=S(yo||(yo=C([`
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
`])),Ie,ft,Pe,ju),sw=S(wo||(wo=C([`
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
`])),Uu,ge),ow=S(_o||(_o=C([`
  query PublicationRevenue($request: PublicationRevenueQueryRequest!, $observerId: ProfileId) {
    result: publicationRevenue(request: $request) {
      ...PublicationRevenue
    }
  }
  `,`
`])),Uu),uw=S(bo||(bo=C([`
  query ProfileFollowRevenue($request: ProfileFollowRevenueQueryRequest!) {
    result: profileFollowRevenue(request: $request) {
      revenues {
        ...RevenueAggregate
      }
    }
  }
  `,`
`])),ju),lw=function(e,n,r){return e()},cw=A(sw),fw=A(ow),dw=A(uw);function pw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lw;return{ProfilePublicationRevenue:function(r,a){return e(function(i){return t.rawRequest(cw,r,E(E({},a),i))},"ProfilePublicationRevenue","query")},PublicationRevenue:function(r,a){return e(function(i){return t.rawRequest(fw,r,E(E({},a),i))},"PublicationRevenue","query")},ProfileFollowRevenue:function(r,a){return e(function(i){return t.rawRequest(dw,r,E(E({},a),i))},"ProfileFollowRevenue","query")}}}var hw=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=pw(r),this.authentication=n}return ie(t,[{key:"profilePublication",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",fe(function(){var v=y(d().mark(function T(O){var I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.sdk.ProfilePublicationRevenue({request:O,observerId:i},f);case 2:return I=k.sent,k.abrupt("return",I.data.result);case 4:case"end":return k.stop()}},T)}));return function(T){return v.apply(this,arguments)}}(),a));case 1:case"end":return h.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()},{key:"profileFollow",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.ProfileFollowRevenue({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result.revenues);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"publication",value:function(){var e=y(d().mark(function r(a,i){var o=this;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ne(this.authentication,function(){var l=y(d().mark(function c(f){var p;return d().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.sdk.PublicationRevenue({request:a,observerId:i},f);case 2:return p=v.sent,v.abrupt("return",p.data.result);case 4:case"end":return v.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},r,this)}));function n(r,a){return e.apply(this,arguments)}return n}()}]),t}(),ko,To,mw=S(ko||(ko=C([`
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
`])),Ie,Pe,ge),vw=S(To||(To=C([`
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
`])),de,ge),gw=function(e,n,r){return e()},yw=A(mw),ww=A(vw);function _w(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gw;return{SearchPublications:function(r,a){return e(function(i){return t.rawRequest(yw,r,E(E({},a),i))},"SearchPublications","query")},SearchProfiles:function(r,a){return e(function(i){return t.rawRequest(ww,r,E(E({},a),i))},"SearchProfiles","query")}}}var bw=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=_w(r),this.authentication=n}return ie(t,[{key:"profiles",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",fe(function(){var h=y(d().mark(function v(T){var O,I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,i.sdk.SearchProfiles(T,c);case 2:return O=k.sent,I=O.data.result,jt(I.__typename!=="PublicationSearchResult","PublicationSearchResult is not expected in this query"),k.abrupt("return",I);case 6:case"end":return k.stop()}},v)}));return function(v){return h.apply(this,arguments)}}(),a));case 1:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"publications",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ne(this.authentication,function(){var u=y(d().mark(function l(c){return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",fe(function(){var h=y(d().mark(function v(T){var O,I;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,i.sdk.SearchPublications(T,c);case 2:return O=k.sent,I=O.data.result,jt(I.__typename!=="ProfileSearchResult","ProfileSearchResult is not expected in this query"),k.abrupt("return",I);case 6:case"end":return k.stop()}},v)}));return function(v){return h.apply(this,arguments)}}(),a));case 1:case"end":return p.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),Eo,kw=S(Eo||(Eo=C([`
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
`]))),Tw=function(e,n,r){return e()},Ew=A(kw);function Sw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tw;return{GlobalProtocolStats:function(r,a){return e(function(i){return t.rawRequest(Ew,r,E(E({},a),i))},"GlobalProtocolStats","query")}}}var Cw=function(){function t(e){ae(this,t);var n=new De(e.environment.gqlEndpoint);this.sdk=Sw(n)}return ie(t,[{key:"fetch",value:function(){var e=y(d().mark(function r(a){var i;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.sdk.GlobalProtocolStats({request:a});case 2:return i=s.sent,s.abrupt("return",i.data.result);case 4:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),So,Co,Do,No,Dw=S(So||(So=C([`
  fragment TransactionIndexedResult on TransactionIndexedResult {
    __typename
    indexed
    txHash
  }
`]))),Nw=S(Co||(Co=C([`
  fragment TransactionError on TransactionError {
    __typename
    reason
  }
`]))),Iw=S(Do||(Do=C([`
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
`])),Dw,Nw),Pw=S(No||(No=C([`
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
`])),dt,pt),Ow=function(e,n,r){return e()},Aw=A(Iw),Rw=A(Pw);function $w(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ow;return{HasTxHashBeenIndexed:function(r,a){return e(function(i){return t.rawRequest(Aw,r,E(E({},a),i))},"HasTxHashBeenIndexed","query")},BroadcastProtocolCall:function(r,a){return e(function(i){return t.rawRequest(Rw,r,E(E({},a),i))},"BroadcastProtocolCall","mutation")}}}function Mw(t){return t.__typename==="TransactionIndexedResult"}var Fw=function(t){un(n,t);var e=ln(n);function n(){var r;ae(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i)),Ue(je(r),"name","TransactionPollingError"),Ue(je(r),"message","Max attempts exceeded"),r}return ie(n)}(ct(Error)),qw=function(){function t(e,n){ae(this,t);var r=new De(e.environment.gqlEndpoint);this.sdk=$w(r),this.authentication=n}return ie(t,[{key:"broadcast",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.BroadcastProtocolCall({request:a},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"wasIndexed",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Z(this.authentication,function(){var u=y(d().mark(function l(c){var f;return d().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i.sdk.HasTxHashBeenIndexed({request:{txId:a}},c);case 2:return f=h.sent,h.abrupt("return",f.data.result);case 4:case"end":return h.stop()}},l)}));return function(l){return u.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r,this)}));function n(r){return e.apply(this,arguments)}return n}()},{key:"waitForIsIndexed",value:function(){var e=y(d().mark(function r(a){var i=this;return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Su({fn:function(){return i.wasIndexed(a)},validate:function(l){if(l.isSuccess()){var c=l.value;if(Mw(c))return c.indexed}return!0},onMaxAttempts:function(){return new Fw}}));case 1:case"end":return s.stop()}},r)}));function n(r){return e.apply(this,arguments)}return n}()}]),t}(),xw=function(){function t(e){ae(this,t),this._authentication=new km(e),this.config=e}return ie(t,[{key:"authentication",get:function(){return this._authentication}},{key:"explore",get:function(){return new Bm(this.config,this._authentication)}},{key:"feed",get:function(){return new tv(this.config,this._authentication)}},{key:"modules",get:function(){return new mv(this.config,this._authentication)}},{key:"nfts",get:function(){return new Mv(this.config,this._authentication)}},{key:"nonces",get:function(){return new jv(this.config,this._authentication)}},{key:"notifications",get:function(){return new Qv(this.config,this._authentication)}},{key:"profile",get:function(){return new Kg(this.config,this._authentication)}},{key:"proxyAction",get:function(){return new fy(this.config,this._authentication)}},{key:"publication",get:function(){return new Yy(this.config,this._authentication)}},{key:"reactions",get:function(){return new iw(this.config,this._authentication)}},{key:"revenue",get:function(){return new hw(this.config,this._authentication)}},{key:"search",get:function(){return new bw(this.config,this._authentication)}},{key:"stats",get:function(){return new Cw(this.config)}},{key:"transaction",get:function(){return new qw(this.config,this._authentication)}}]),t}(),Fr=function(){function t(e,n){ae(this,t),this.name=e,this.url=n}return ie(t,[{key:"gqlEndpoint",get:function(){return this.url}}]),t}(),Lw=new Fr("production","https://api.lens.dev");new Fr("development","https://api-mumbai.lens.dev");new Fr("sandbox","https://api-sandbox-mumbai.lens.dev");const Cr=new xw({environment:Lw});async function fn(t,e){let n=await Cr.publication.fetchAll({profileId:t,publicationTypes:e,limit:1});return n.items.length>0?n.items[0].createdAt:"-"}const jw=async t=>{try{const e=await Cr.search.profiles({query:t,limit:1});let n,r,a,i,o,s,u,l,c,f,p,h="link";if(e.items.length>0){const v=e.items[0];n=v.stats.totalFollowers,r=v.stats.totalFollowing,a=v.stats.totalPosts;const T=await Cr.profile.stats({handle:v.handle},[]);return i=T==null?void 0:T.totalComments,o=T==null?void 0:T.totalMirrors,s=T==null?void 0:T.totalPublications,u=T==null?void 0:T.totalCollects,[l,c,f,p]=await Promise.all([fn(v.id,[Mt.Post]),fn(v.id,[Mt.Comment]),fn(v.id,[Mt.Mirror]),fn(v.id,null)]),{total_followers:n,total_following:r,total_posts:a,total_comments:i,total_mirrors:o,total_publications:s,total_collects:u,last_post_datetime:l,last_comment_datetime:c,last_mirror_datetime:f,last_tx_datetime:p,link:"go",link1:"go",link2:"go",link3:"go",link4:"go",link5:"go",link6:"go",link7:"go",link8:"go",coming:"开发中"}}else return{total_followers:0,total_following:0,total_posts:0,total_comments:0,total_mirrors:0,total_publications:0,total_collects:0,last_post_datetime:0,last_comment_datetime:0,last_mirror_datetime:0,last_tx_datetime:0,link:"go",link1:"go1",link2:"go2",link3:"go3",link4:"go4",link5:"go5",link6:"go6",link7:"go7",link8:"go8",coming:"开发中"}}catch{return{total_followers:0,total_following:0,total_posts:0,total_comments:0,total_mirrors:0,total_publications:0,total_collects:0,last_post_datetime:0,last_comment_datetime:0,last_mirror_datetime:0,last_tx_datetime:0,link:"go",link1:"go1",link2:"go2",link3:"go3",link4:"go4",link5:"go5",link6:"go6",link7:"go7",link8:"go8",coming:"开发中"}}},Io=Vu("lens",jw),Gw=Gu({__name:"LensView",setup(t){Io();const e=[{title:"#",align:"center",key:"#",width:me.no,header_style:{backgroundColor:q.color1,fontSize:se.size1},cell_style:{backgroundColor:q.color1}},{title:"账号",align:"center",key:"Account",header_style:{backgroundColor:q.color1,fontSize:se.size1},children:[{title:"Profile ID",align:"left",key:"key",sort:!0,width:me.alias,header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:{backgroundColor:q.color1}},{title:"别名",align:"left",key:"_alias",sort:!0,width:me.alias,custom:!0,header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:{backgroundColor:q.color1}}]},{title:"交互",align:"center",key:"jiaohu",header_style:{backgroundColor:q.color2,fontSize:se.size1},children:[{title:"最后",align:"center",type:"datetime",key:"last_tx_datetime",width:me.datetime,sort:!0,header_style:{backgroundColor:q.color2,fontSize:se.size2},cell_style:{backgroundColor:q.color2}},{title:"发帖",align:"center",type:"datetime",key:"last_post_datetime",width:me.datetime,sort:!0,header_style:{backgroundColor:q.color2,fontSize:se.size2},cell_style:{backgroundColor:q.color2}},{title:"评论",align:"center",type:"datetime",key:"last_comment_datetime",width:me.datetime,sort:!0,header_style:{backgroundColor:q.color2,fontSize:se.size2},cell_style:{backgroundColor:q.color2}},{title:"转发",align:"center",type:"datetime",key:"last_mirror_datetime",width:me.datetime,sort:!0,header_style:{backgroundColor:q.color2,fontSize:se.size2},cell_style:{backgroundColor:q.color2}}]},{title:"统计",align:"center",key:"stat",header_style:{backgroundColor:q.color1,fontSize:se.size1},children:[{title:"粉丝",align:"center",key:"total_followers",width:me.tx,sort:!0,header_style:{backgroundColor:q.color1,fontSize:se.size1},cell_style:function(n,r){try{return r&&r.total_followers==0?{backgroundColor:q.color1,color:q.color1}:{backgroundColor:q.color1}}catch{return{backgroundColor:q.color1}}}},{title:"关注",align:"center",key:"total_following",width:me.tx,sort:!0,header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:function(n,r){try{return r&&r.total_following==0?{backgroundColor:q.color1,color:q.color1}:{backgroundColor:q.color1}}catch{return{backgroundColor:q.color1}}}},{title:"收藏",align:"center",key:"total_collects",width:me.tx,sort:!0,header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:function(n,r){try{return r&&r.total_collects==0?{backgroundColor:q.color1,color:q.color1}:{backgroundColor:q.color1}}catch{return{backgroundColor:q.color1}}}},{title:"帖子",align:"center",key:"total_posts",width:me.tx,sort:!0,header_style:{backgroundColor:q.color1,fontSize:se.size1},cell_style:function(n,r){try{return r&&r.total_posts==0?{backgroundColor:q.color1,color:q.color1}:{backgroundColor:q.color1}}catch{return{backgroundColor:q.color1}}}},{title:"评论",align:"center",key:"total_comments",width:me.tx,sort:!0,header_style:{backgroundColor:q.color1,fontSize:se.size1},cell_style:function(n,r){try{return r&&r.total_comments==0?{backgroundColor:q.color1,color:q.color1}:{backgroundColor:q.color1}}catch{return{backgroundColor:q.color1}}}},{title:"转发",align:"center",key:"total_mirrors",width:me.tx,sort:!0,header_style:{backgroundColor:q.color1,fontSize:se.size1},cell_style:function(n,r){try{return r&&r.total_mirrors==0?{backgroundColor:q.color1,color:q.color1}:{backgroundColor:q.color1}}catch{return{backgroundColor:q.color1}}}},{title:"发表",align:"center",key:"total_publications",width:me.tx,sort:!0,header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:function(n,r){try{return r&&r.total_publications==0?{backgroundColor:q.color1,color:q.color1}:{backgroundColor:q.color1}}catch{return{backgroundColor:q.color1}}}}]},{title:"SnapShot投票",align:"center",key:"snapshot",header_style:{backgroundColor:q.color2,fontSize:se.size1},children:[{title:"Lens/AAVE 已投、可投",align:"center",key:"coming",width:me.tx+150,sort:!0,header_style:{backgroundColor:q.color2,fontSize:se.size2},cell_style:{backgroundColor:q.color2}}]},{title:"第3方分析",align:"center",key:"three",header_style:{backgroundColor:q.color1,fontSize:se.size1},children:[{title:"lenskit.xyz",align:"center",key:"link1",width:me.link,url:"https://profile.lenskit.xyz/{key}",header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:{backgroundColor:q.color1,textDecoration:"underline"}},{title:"lenscan.xyz",align:"center",key:"link2",width:me.link,url:"https://lenscan.io/profile/{key}",header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:{backgroundColor:q.color1,textDecoration:"underline"}},{title:"dune统计",align:"center",key:"link3",width:me.link,url:"https://dune.com/cortadocasa/lensprotocol",header_style:{backgroundColor:q.color1,fontSize:se.size2},cell_style:{backgroundColor:q.color1,textDecoration:"underline"}}]}];return(n,r)=>(Wu(),Hu(Bu,{columns:e,store:Zu(Io)(),"key-label":"账号","page-size":10},null,8,["store"]))}});export{Gw as default};
