"use strict";(self.webpackChunkwindup_ui=self.webpackChunkwindup_ui||[]).push([[857],{54857:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var i=n(47313),a=n(97890),o=n(96093),r=n(60902),s=n(54890),l=n(16903),d=n(25119),c=n(93443),u=n(52778),h=n(36898),p=n(14303),m=n(53566),g=n(56954),v=n(46417);const f=[{title:"JNDI location",transforms:[],cellTransforms:[]},{title:"Database",transforms:[],cellTransforms:[]},{title:"Links",transforms:[],cellTransforms:[]}],x=e=>{let{applicationId:t}=e;const[n]=(0,i.useState)(""),a=(0,u.F)(),o=(0,i.useMemo)((()=>{var e,n;return(null===(e=a.data)||void 0===e||null===(n=e.find((e=>e.applicationId===t)))||void 0===n?void 0:n.datasources)||[]}),[a.data,t]),{page:r,sortBy:s,changePage:l,changeSortBy:d}=(0,g.HL)(),{pageItems:c,filteredItems:x}=(0,g.x6)({items:o,currentPage:r,currentSortBy:s,compareToByColumn:()=>0,filterItem:()=>!0}),y=(e=>{const t=[];return e.forEach((e=>{var n;t.push({DataKey:e,cells:[{title:e.jndiLocation},{title:(0,v.jsxs)("div",{children:[e.databaseTypeName&&(0,v.jsx)("span",{children:e.databaseTypeName})," ",e.databaseTypeVersion&&(0,v.jsx)("span",{children:e.databaseTypeVersion})]})},{title:(0,v.jsx)(h.aV,{isPlain:!0,children:null===(n=e.links)||void 0===n?void 0:n.map(((e,t)=>(0,v.jsx)(p.H,{children:(0,v.jsx)("a",{href:e.link,children:e.description})},t)))})}]})})),t})(c);return(0,v.jsx)(m.un,{hasTopPagination:!0,hasBottomPagination:!0,totalCount:x.length,sortBy:s||{index:void 0,defaultDirection:"asc"},onSort:d,currentPage:r,onPageChange:l,rows:y,cells:f,actions:[],isLoading:a.isFetching,loadingVariant:"skeleton",fetchError:a.isError,filtersApplied:n.trim().length>0})},y=[{title:"JNDI location",transforms:[],cellTransforms:[]},{title:"Connection factory type",transforms:[],cellTransforms:[]},{title:"Links",transforms:[],cellTransforms:[]}],j=e=>{let{applicationId:t}=e;const[n]=(0,i.useState)(""),a=(0,u.F)(),o=(0,i.useMemo)((()=>{var e,n;return(null===(e=a.data)||void 0===e||null===(n=e.find((e=>e.applicationId===t)))||void 0===n?void 0:n.jmsConnectionFactories)||[]}),[a.data,t]),{page:r,sortBy:s,changePage:l,changeSortBy:d}=(0,g.HL)(),{pageItems:c,filteredItems:f}=(0,g.x6)({items:o,currentPage:r,currentSortBy:s,compareToByColumn:()=>0,filterItem:e=>!0}),x=(e=>{const t=[];return e.forEach((e=>{var n;t.push({DataKey:e,cells:[{title:e.jndiLocation},{title:(0,v.jsx)("div",{children:e.connectionFactoryType&&(0,v.jsx)("span",{children:e.connectionFactoryType})})},{title:(0,v.jsx)(h.aV,{isPlain:!0,children:null===(n=e.links)||void 0===n?void 0:n.map(((e,t)=>(0,v.jsx)(p.H,{children:(0,v.jsx)("a",{href:e.link,children:e.description})},t)))})}]})})),t})(c);return(0,v.jsx)(m.un,{hasTopPagination:!0,hasBottomPagination:!0,totalCount:f.length,sortBy:s||{index:void 0,defaultDirection:"asc"},onSort:d,currentPage:r,onPageChange:l,rows:x,cells:y,actions:[],isLoading:a.isFetching,loadingVariant:"skeleton",fetchError:a.isError,filtersApplied:n.trim().length>0})},P=[{title:"JNDI location",transforms:[],cellTransforms:[]},{title:"Destination type",transforms:[],cellTransforms:[]},{title:"Links",transforms:[],cellTransforms:[]}],T=e=>{let{applicationId:t}=e;const[n]=(0,i.useState)(""),a=(0,u.F)(),o=(0,i.useMemo)((()=>{var e,n;return(null===(e=a.data)||void 0===e||null===(n=e.find((e=>e.applicationId===t)))||void 0===n?void 0:n.jmsDestinations)||[]}),[a.data,t]),{page:r,sortBy:s,changePage:l,changeSortBy:d}=(0,g.HL)(),{pageItems:c,filteredItems:f}=(0,g.x6)({items:o,currentPage:r,currentSortBy:s,compareToByColumn:()=>0,filterItem:e=>!0}),x=(e=>{const t=[];return e.forEach((e=>{var n;t.push({DataKey:e,cells:[{title:e.jndiLocation},{title:(0,v.jsx)("div",{children:e.destinationType&&(0,v.jsx)("span",{children:e.destinationType})})},{title:(0,v.jsx)(h.aV,{isPlain:!0,children:null===(n=e.links)||void 0===n?void 0:n.map(((e,t)=>(0,v.jsx)(p.H,{children:(0,v.jsx)("a",{href:e.link,children:e.description})},t)))})}]})})),t})(c);return(0,v.jsx)(m.un,{hasTopPagination:!0,hasBottomPagination:!0,totalCount:f.length,sortBy:s||{index:void 0,defaultDirection:"asc"},onSort:d,currentPage:r,onPageChange:l,rows:x,cells:P,actions:[],isLoading:a.isFetching,loadingVariant:"skeleton",fetchError:a.isError,filtersApplied:n.trim().length>0})},I=[{title:"JNDI location",transforms:[],cellTransforms:[]}],B=e=>{let{applicationId:t}=e;const[n]=(0,i.useState)(""),a=(0,u.F)(),o=(0,i.useMemo)((()=>{var e,n;return(null===(e=a.data)||void 0===e||null===(n=e.find((e=>e.applicationId===t)))||void 0===n?void 0:n.otherJndiEntries)||[]}),[a.data,t]),{page:r,sortBy:s,changePage:l,changeSortBy:d}=(0,g.HL)(),{pageItems:c,filteredItems:h}=(0,g.x6)({items:o,currentPage:r,currentSortBy:s,compareToByColumn:()=>0,filterItem:e=>!0}),p=(e=>{const t=[];return e.forEach((e=>{t.push({DataKey:e,cells:[{title:e.jndiLocation}]})})),t})(c);return(0,v.jsx)(m.un,{hasTopPagination:!0,hasBottomPagination:!0,totalCount:h.length,sortBy:s||{index:void 0,defaultDirection:"asc"},onSort:d,currentPage:r,onPageChange:l,rows:p,cells:I,actions:[],isLoading:a.isFetching,loadingVariant:"skeleton",fetchError:a.isError,filtersApplied:n.trim().length>0})},S=[{title:"Pool name",transforms:[],cellTransforms:[]},{title:"Max size",transforms:[],cellTransforms:[]},{title:"Min size",transforms:[],cellTransforms:[]},{title:"Links",transforms:[],cellTransforms:[]}],k=e=>{let{applicationId:t}=e;const[n]=(0,i.useState)(""),a=(0,u.F)(),o=(0,i.useMemo)((()=>{var e,n;return(null===(e=a.data)||void 0===e||null===(n=e.find((e=>e.applicationId===t)))||void 0===n?void 0:n.threadPools)||[]}),[a.data,t]),{page:r,sortBy:s,changePage:l,changeSortBy:d}=(0,g.HL)(),{pageItems:c,filteredItems:f}=(0,g.x6)({items:o,currentPage:r,currentSortBy:s,compareToByColumn:()=>0,filterItem:e=>!0}),x=(e=>{const t=[];return e.forEach((e=>{var n;t.push({DataKey:e,cells:[{title:e.poolName},{title:e.maxPoolSize},{title:e.minPoolSize},{title:(0,v.jsx)(h.aV,{isPlain:!0,children:null===(n=e.links)||void 0===n?void 0:n.map(((e,t)=>(0,v.jsx)(p.H,{children:(0,v.jsx)("a",{href:e.link,children:e.description})},t)))})}]})})),t})(c);return(0,v.jsx)(m.un,{hasTopPagination:!0,hasBottomPagination:!0,totalCount:f.length,sortBy:s||{index:void 0,defaultDirection:"asc"},onSort:d,currentPage:r,onPageChange:l,rows:x,cells:S,actions:[],isLoading:a.isFetching,loadingVariant:"skeleton",fetchError:a.isError,filtersApplied:n.trim().length>0})},C=()=>{const e=(0,a.bx)(),t=(0,u.F)(),n=(0,i.useMemo)((()=>{var n;return null===(n=t.data)||void 0===n?void 0:n.find((t=>t.applicationId===(null===e||void 0===e?void 0:e.id)))}),[t.data,e]);return(0,v.jsx)(o.NP,{children:(0,v.jsx)(r.Z,{children:(0,v.jsx)(s.e,{children:(0,v.jsxs)(l.m,{defaultActiveKey:0,children:[(0,v.jsx)(d.O,{eventKey:0,title:(0,v.jsxs)(c.T,{children:["Datasources (",null===n||void 0===n?void 0:n.datasources.length,")"]}),children:e&&(0,v.jsx)(x,{applicationId:null===e||void 0===e?void 0:e.id})}),(0,v.jsx)(d.O,{eventKey:1,title:(0,v.jsxs)(c.T,{children:["JMS destinations (",null===n||void 0===n?void 0:n.jmsDestinations.length,")"]}),children:e&&(0,v.jsx)(T,{applicationId:null===e||void 0===e?void 0:e.id})}),(0,v.jsx)(d.O,{eventKey:2,title:(0,v.jsxs)(c.T,{children:["JMS connection factories (",null===n||void 0===n?void 0:n.jmsConnectionFactories.length,")"]}),children:e&&(0,v.jsx)(j,{applicationId:null===e||void 0===e?void 0:e.id})}),(0,v.jsx)(d.O,{eventKey:3,title:(0,v.jsxs)(c.T,{children:["Thread pools (",null===n||void 0===n?void 0:n.threadPools.length,")"]}),children:e&&(0,v.jsx)(k,{applicationId:null===e||void 0===e?void 0:e.id})}),(0,v.jsx)(d.O,{eventKey:4,title:(0,v.jsxs)(c.T,{children:["Other JNDI entries (",null===n||void 0===n?void 0:n.otherJndiEntries.length,")"]}),children:e&&(0,v.jsx)(B,{applicationId:null===e||void 0===e?void 0:e.id})})]})})})})}},52778:(e,t,n)=>{n.d(t,{F:()=>r});var i=n(31881),a=n.n(i),o=n(44888);const r=()=>(0,o.z)({queryKey:["server-resources"],queryFn:async()=>(await a().get("/server-resources")).data},undefined,window["server-resources"])}}]);