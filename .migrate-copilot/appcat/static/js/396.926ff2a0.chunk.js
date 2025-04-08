"use strict";(self.webpackChunkwindup_ui=self.webpackChunkwindup_ui||[]).push([[396],{45396:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var s=a(47313),l=a(29466),i=a(84440),n=a(3460),r=a(74871),o=a(41094),c=a(91970),d=a(90148),p=a(66797),h=a(96086),m=a(36926),u=a(99033),g=a(82685),x=a(6646),b=a(37962),C=a(93616);class f extends s.Component{constructor(e){super(e),this.headingRef=s.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:a}=this.props,{isTooltipVisible:l}=this.state;return l?s.createElement(i.u,{position:a,content:t},s.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,u.i)(h.Z.labelGroupLabel)},s.createElement("span",{"aria-hidden":"true",id:e},t))):s.createElement("span",{ref:this.headingRef,className:(0,u.i)(h.Z.labelGroupLabel),"aria-hidden":"true",id:e},t)}render(){const e=this.props,{categoryName:t,children:a,className:l,isClosable:i,isCompact:r,closeBtnAriaLabel:o,"aria-label":c,onClick:d,numLabels:f,expandedText:j,collapsedText:v,defaultIsOpen:L,tooltipPosition:T,isVertical:y,isEditable:E,hasEditableTextArea:P,editableTextAreaProps:N,addLabelControl:R}=e,M=(0,p._T)(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:O}=this.state,w=s.Children.count(a),S=(0,b.tJ)(v,{remaining:s.Children.count(a)-f}),Z=e=>{const p=O?s.Children.toArray(a):s.Children.toArray(a).slice(0,f),b=s.createElement(s.Fragment,null,t&&this.renderLabel(e),s.createElement("ul",Object.assign({className:(0,u.i)(h.Z.labelGroupList)},t&&{"aria-labelledby":e},!t&&{"aria-label":c},{role:"list"},M),p.map(((e,t)=>s.createElement("li",{className:(0,u.i)(h.Z.labelGroupListItem),key:t},e))),w>f&&s.createElement("li",{className:(0,u.i)(h.Z.labelGroupListItem)},s.createElement(n._,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:(0,u.i)(r&&m.Z.modifiers.compact)},O?j:S)),R&&s.createElement("li",{className:(0,u.i)(h.Z.labelGroupListItem)},R),E&&P&&s.createElement("li",{className:(0,u.i)(h.Z.labelGroupListItem,h.Z.modifiers.textarea)},s.createElement("textarea",Object.assign({className:(0,u.i)(h.Z.labelGroupTextarea),rows:1,tabIndex:0},N))))),C=s.createElement("div",{className:(0,u.i)(h.Z.labelGroupClose)},s.createElement(g.zx,{variant:"plain","aria-label":o,onClick:d,id:"remove_group_".concat(e),"aria-labelledby":"remove_group_".concat(e," ").concat(e)},s.createElement(x.ZP,{"aria-hidden":"true"})));return s.createElement("div",{className:(0,u.i)(h.Z.labelGroup,l,t&&h.Z.modifiers.category,y&&h.Z.modifiers.vertical,E&&h.Z.modifiers.editable)},s.createElement("div",{className:(0,u.i)(h.Z.labelGroupMain)},b),i&&C)};return 0===w&&void 0===R?null:s.createElement(C.w,null,(e=>Z(this.props.id||e)))}}f.displayName="LabelGroup",f.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1};var j=a(76934),v=a(90555),L=a(22420),T=a(80752),y=a(96093),E=a(20711),P=a(49284),N=a(89213),R=a(29964),M=a(75071),O=a(53426),w=a(32837),S=a(98699),Z=a(17589);const I=(0,Z.IU)({name:"ExpandIcon",height:512,width:448,svgPath:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z",yOffset:0,xOffset:0});var k=a(79023),A=a(70987);const G=(0,Z.IU)({name:"TagIcon",height:512,width:512,svgPath:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z",yOffset:0,xOffset:0}),F=(0,Z.IU)({name:"TaskIcon",height:1024,width:768,svgPath:"M640,432 C640,440.8 632.8,448 624,448 L143.985,447.572 C135.185,447.572 127.985,440.373 127.985,431.572 L127.985,399.572 C127.985,390.772 135.185,383.572 143.985,383.572 L624,384 C632.8,384 640,391.2 640,400 L640,432 Z M574.77,623.998 C574.77,632.799 567.57,639.998 558.77,639.998 L207.935,639.999 C199.135,639.999 191.935,632.799 191.935,623.999 L191.935,591.999 C191.935,583.199 199.135,575.999 207.935,575.999 L558.77,575.998 C567.57,575.998 574.77,583.198 574.77,591.998 L574.77,623.998 Z M510.833,815.998 C510.833,824.799 503.633,831.998 494.833,831.998 L271.719,831.999 C262.919,831.999 255.719,824.799 255.719,815.999 L255.719,783.999 C255.719,775.199 262.919,767.999 271.719,767.999 L494.833,767.998 C503.633,767.998 510.833,775.198 510.833,783.998 L510.833,815.998 Z M384,80 C410.6,80 432,101.4 432,128 C432,154.6 410.6,176 384,176 C357.4,176 336,154.6 336,128 C336,101.4 357.4,80 384,80 L384,80 Z M672,128 L512,128 C512,57.4 454.6,0 384,0 C313.4,0 256,57.4 256,128 L96,128 C43,128 0,171 0,224 L0,928 C0,981 43,1024 96,1024 L672,1024 C725,1024 768,981 768,928 L768,224 C768,171 725,128 672,128 L672,128 Z",yOffset:0,xOffset:0});var z=a(71602),_=a(54904),V=a(93760),W=a(79143),B=a(16265),U=a(31881),D=a.n(U),H=a(44888);var J=a(53566),K=a(56954);const q=(e,t)=>{const a=(e=>e.map((e=>{if((e=>e.startsWith("regex(")&&e.endsWith(")"))(e)){const t=(e=>e.substring(e.indexOf("regex(")+6,e.lastIndexOf(")")))(e);return new RegExp(t)}return e.endsWith("*")?new RegExp("^"+e):e.startsWith("*")?new RegExp(e.substr(1)+"$"):e})))(e);return t.filter((e=>((e,t)=>e.some((e=>e instanceof RegExp?e.test(t):t===e)))(a,e)))};var $=a(46417);const Q="DataKey";var X;!function(e){e.tags="tags",e.incidents="incidents"}(X||(X={}));const Y=Object.values(X),ee=[{title:"Name",transforms:[(0,z.d)(30),_.p]},{title:"Runtime labels",transforms:[(0,z.d)(40)]},{title:"Tags",transforms:[(0,z.d)(10)],cellTransforms:[V.z],data:X.tags},{title:"Incidents",transforms:[(0,z.d)(10)],cellTransforms:[V.z],data:X.incidents},{title:"Story points",transforms:[(0,z.d)(10)]}],te=(e,t,a)=>0===a?e.name.localeCompare(t.name):0,ae=()=>{var e,t,a,p,h,m;const u=(0,K.dd)(),[x,b]=(0,s.useState)(""),{filters:C,setFilter:Z,removeFilter:z,clearAllFilters:_}=(0,K.Sm)(),V=(()=>{const e=(0,s.useCallback)((e=>e.sort(((e,t)=>t.name.localeCompare(e.name)))),[]);return(0,H.z)({queryKey:["labels"],queryFn:async()=>(await D().get("/labels")).data,select:e},void 0,window.labels)})(),U=(0,B.p)(),ae=(0,s.useMemo)((()=>{const e=(U.data||[]).flatMap((e=>e.tags));return Array.from(new Set(e)).sort(((e,t)=>e.localeCompare(t)))}),[U.data]),se=(0,s.useMemo)((()=>{const e=new Map;return U.data&&V.data?(U.data.forEach((t=>{const a=V.data.map((e=>((e,t)=>{var a=q(e.supported,t),s=q(e.neutral,t),l=q(e.unsuitable,t);const i={targetRuntime:{...e},assessmentResult:"Unsuitable",assessedSupportedTags:a,assessedNeutralTags:s,assessedUnsuitableTags:l};return l.length>0?{...i,assessmentResult:"Unsuitable"}:s.length+a.length===t.length?{...i,assessmentResult:"Supported"}:{...i,assessmentResult:"Partially supported"}})(e,t.tags)));e.set(t.id,a)})),e):e}),[V.data,U.data]),{page:le,sortBy:ie,changePage:ne,changeSortBy:re}=(0,K.HL)(),{pageItems:oe,filteredItems:ce}=(0,K.x6)({items:U.data||[],currentPage:le,currentSortBy:ie,compareToByColumn:te,filterItem:e=>{let t=!0;x&&x.trim().length>0&&(t=-1!==e.name.toLowerCase().indexOf(x.toLowerCase()));let a=!0;const s=C.get("tag")||[];return s.length>0&&(a=s.some((t=>e.tags.some((e=>t===e))))),t&&a}}),{isCellSelected:de,isSomeCellSelected:pe,toggleCellSelected:he}=(0,K.QM)({rows:oe.map((e=>e.id)),columns:Y}),me=(e=>{const t=[];return e.forEach((e=>{t.push({[Q]:e,isOpen:pe(e.id,Y),cells:[{title:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(l.rU,{to:"/applications/".concat(e.id),children:e.name}),e.isVirtual&&(0,$.jsxs)($.Fragment,{children:[" ",(0,$.jsx)(i.u,{content:(0,$.jsx)("div",{children:"This groups all issues found in libraries included in multiple applications."}),children:(0,$.jsx)(n._,{isCompact:!0,color:"blue",icon:(0,$.jsx)(A.ZP,{}),children:"Shared libraries"})})]})]})},{title:(0,$.jsx)($.Fragment,{children:(0,$.jsx)(r.K,{children:[...se.get(e.id)||[]].sort(((e,t)=>e.targetRuntime.name.localeCompare(t.targetRuntime.name))).map((t=>(0,$.jsx)(o.v,{children:(0,$.jsxs)(c.P,{children:[(0,$.jsx)(d.J,{children:(0,$.jsx)(f,{categoryName:t.assessmentResult,children:(0,$.jsx)(n._,{isCompact:!0,color:"Supported"===t.assessmentResult?"green":"Unsuitable"===t.assessmentResult?"red":"grey",children:t.targetRuntime.name})})}),(0,$.jsx)(d.J,{children:(0,$.jsx)(g.zx,{variant:"plain","aria-label":"Details",isSmall:!0,onClick:()=>u.open("showLabel",{application:e,assessment:t}),children:(0,$.jsx)(I,{})})})]})},t.targetRuntime.name)))})})},{title:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(G,{},"tags")," ",e.tags.length]}),props:{isOpen:de(e.id,X.tags)}},{title:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(F,{},"incidents")," ",Object.values(e.incidents).reduce(((e,t)=>e+t),0)]}),props:{isOpen:de(e.id,X.incidents)}},{title:e.storyPoints}]});const a=t.length-1;t.push({parent:a,compoundParent:2,cells:[{title:(0,$.jsx)("div",{className:"pf-u-m-lg",children:(0,$.jsx)(c.P,{hasGutter:!0,isWrappable:!0,children:[...e.tags].sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,$.jsx)(d.J,{children:(0,$.jsx)(n._,{isCompact:!0,children:e})},t)))})}),props:{colSpan:6,className:"pf-m-no-padding"}}]}),t.push({parent:a,compoundParent:3,cells:[{title:(0,$.jsx)("div",{className:"pf-u-m-lg",children:(0,$.jsx)(j.o,{isHorizontal:!0,isCompact:!0,horizontalTermWidthModifier:{default:"12ch",md:"20ch"},children:Object.keys(e.incidents).sort((0,W.BM)((e=>e))).map((t=>(0,$.jsxs)(v.g,{children:[(0,$.jsx)(L.M,{children:(0,W.S6)(t)}),(0,$.jsx)(T.b,{children:e.incidents[t]})]},t)))})}),props:{colSpan:6,className:"pf-m-no-padding"}}]})})),t})(oe);return(0,s.useEffect)((()=>{ne({page:1,perPage:le.perPage})}),[C,ne,le.perPage]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(y.NP,{variant:y.Dk.light,children:(0,$.jsxs)(E.D,{children:[(0,$.jsx)(P.x,{component:"h1",children:"Applications"}),(0,$.jsx)(P.x,{component:"small",children:"This report lists all analyzed applications. Select an individual application to show more details."})]})}),(0,$.jsxs)(y.NP,{variant:y.Dk.default,children:[(0,$.jsx)(J.un,{className:"application-list-table",hasTopPagination:!0,hasBottomPagination:!0,totalCount:ce.length,onExpand:(e,t,a,s,l,i)=>{const n=(e=>e.DataKey)(l),r=(e=>ee[e].data)(a);he(n.id,r)},sortBy:ie||{index:void 0,defaultDirection:"asc"},onSort:re,currentPage:le,onPageChange:ne,rows:me,cells:ee,isLoading:U.isFetching,loadingVariant:"skeleton",fetchError:U.isError,toolbarClearAllFilters:_,filtersApplied:x.trim().length>0,toolbarToggle:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(N.E,{variant:"search-filter",children:(0,$.jsx)(R.M,{value:x,onChange:b,onClear:()=>{b("")}})}),(0,$.jsx)(M.k,{variant:"filter-group",children:(0,$.jsx)(O.p,{chips:C.get("tag"),deleteChip:(e,t)=>z("tag",t),deleteChipGroup:()=>Z("tag",[]),categoryName:{key:"tag",name:"Tag"},children:(0,$.jsx)(J.GU,{width:250,maxHeight:300,toggleIcon:(0,$.jsx)(k.ZP,{}),variant:w.TM.checkbox,"aria-label":"tag","aria-labelledby":"tag",placeholderText:"Tag",value:C.get("tag"),options:ae,onChange:e=>{const t=e;let a;a=(C.get("tag")||[]).some((e=>e===t))?(C.get("tag")||[]).filter((e=>e!==t)).map((e=>e)):[...C.get("tag")||[],t],Z("tag",a)},hasInlineFilter:!0,onClear:()=>Z("tag",[])})})})]})}),(0,$.jsx)(S.u,{title:"Runtime label details",isOpen:u.isOpen,onClose:u.close,variant:"medium",children:(0,$.jsxs)(j.o,{children:[(0,$.jsxs)(v.g,{children:[(0,$.jsx)(L.M,{children:"Application"}),(0,$.jsx)(T.b,{children:null===(e=u.data)||void 0===e?void 0:e.application.name})]}),(0,$.jsxs)(v.g,{children:[(0,$.jsx)(L.M,{children:"Runtime target"}),(0,$.jsx)(T.b,{children:null===(t=u.data)||void 0===t?void 0:t.assessment.targetRuntime.name})]}),(0,$.jsxs)(v.g,{children:[(0,$.jsx)(L.M,{children:"Assessment"}),(0,$.jsx)(T.b,{children:null===(a=u.data)||void 0===a?void 0:a.assessment.assessmentResult})]}),(0,$.jsxs)(v.g,{children:[(0,$.jsx)(L.M,{children:"Unsuitable technologies"}),(0,$.jsx)(T.b,{children:(0,$.jsx)(c.P,{hasGutter:!0,isWrappable:!0,children:[...(null===(p=u.data)||void 0===p?void 0:p.assessment.assessedUnsuitableTags)||[]].sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,$.jsx)(d.J,{children:(0,$.jsx)(n._,{isCompact:!0,color:"red",children:e})},t)))})})]}),(0,$.jsxs)(v.g,{children:[(0,$.jsx)(L.M,{children:"Supported technologies"}),(0,$.jsx)(T.b,{children:(0,$.jsx)(c.P,{hasGutter:!0,isWrappable:!0,children:[...(null===(h=u.data)||void 0===h?void 0:h.assessment.assessedSupportedTags)||[]].sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,$.jsx)(d.J,{children:(0,$.jsx)(n._,{isCompact:!0,color:"green",children:e})},t)))})})]}),(0,$.jsxs)(v.g,{children:[(0,$.jsx)(L.M,{children:"Neutral technologies"}),(0,$.jsx)(T.b,{children:(0,$.jsx)(c.P,{hasGutter:!0,isWrappable:!0,children:[...(null===(m=u.data)||void 0===m?void 0:m.assessment.assessedNeutralTags)||[]].sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,$.jsx)(d.J,{children:(0,$.jsx)(n._,{isCompact:!0,children:e})},t)))})})]})]})})]})]})}}}]);