"use strict";var t=require("../../../api/erp/material/material.js"),e=require("../../../common/vendor.js");require("../../../common/request.js");const i={data:()=>({mid:"",material:{},itemDim:{},pkgDim:{},boxDim:{},customs:{},stepWisePrice:[],consumableList:[],assemblyList:[],supplierList:[]}),onLoad(t){const e=t.materialid||t.payload;try{this.mid=decodeURIComponent(e)}catch(i){this.mid=""}this.getlist()},methods:{booleanFuc:t=>1==t||1==t||"1"==t?"是":"否",valueFormatter:t=>null!=t&&null!=t&&""!=t?t:"--",dateFuc(t){if(null!=t&&null!=t&&""!=t&&t>0){let e=new Date(t);return this.formatDate(e,"yyyy-MM-dd")}return"--"},padLeftZero:t=>("00"+t).substr(t.length),formatDate(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let a in i)if(new RegExp(`(${a})`).test(e)){let t=i[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?t:this.padLeftZero(t))}return e},getlist(){let e=this;""!=e.mid&&t.materialApi.getMaterialInfo({id:e.mid}).then((t=>{if(t){var i=t;i.material&&null!=i.material&&(console.log(i.material),e.material=i.material),i.itemDim&&null!=i.itemDim&&(e.itemDim=i.itemDim),i.pkgDim&&null!=i.pkgDim&&(e.pkgDim=i.pkgDim),i.boxDim&&null!=i.boxDim&&(e.boxDim=i.boxDim),i.customs&&null!=i.customs&&(e.customs=i.customs),i.stepWisePrice&&null!=i.stepWisePrice&&i.stepWisePrice.length>0&&(e.stepWisePrice=i.stepWisePrice),i.consumableList&&null!=i.consumableList&&i.consumableList.length>0&&(e.consumableList=i.consumableList),i.assemblyList&&null!=i.assemblyList&&i.assemblyList.length>0&&(e.assemblyList=i.assemblyList),i.supplierList&&null!=i.supplierList&&i.supplierList.length>0&&(e.supplierList=i.supplierList)}}))}}};if(!Array){(e.resolveComponent("uni-icons")+e.resolveComponent("uni-th")+e.resolveComponent("uni-tr")+e.resolveComponent("uni-td")+e.resolveComponent("uni-table"))()}Math||((()=>"../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../../uni_modules/uni-table/components/uni-th/uni-th.js")+(()=>"../../../uni_modules/uni-table/components/uni-tr/uni-tr.js")+(()=>"../../../uni_modules/uni-table/components/uni-td/uni-td.js")+(()=>"../../../uni_modules/uni-table/components/uni-table/uni-table.js"))();var a=e._export_sfc(i,[["render",function(t,i,a,s,m,r){return e.e({a:m.material.image,b:e.t(m.material.sku),c:e.p({color:m.material.color,type:"smallcircle-filled",size:"14"}),d:e.t(m.material.name),e:e.t(m.material.brand),f:e.t(m.material.specification),g:e.t(m.material.category),h:e.t(m.material.remark),i:e.t(m.material.ownername),j:e.t(r.dateFuc(m.material.effectivedate)),k:e.t(r.valueFormatter(m.itemDim.length)),l:e.t(r.valueFormatter(m.itemDim.width)),m:e.t(r.valueFormatter(m.itemDim.height)),n:e.t(r.valueFormatter(m.itemDim.weight)),o:e.t(r.valueFormatter(m.pkgDim.length)),p:e.t(r.valueFormatter(m.pkgDim.width)),q:e.t(r.valueFormatter(m.pkgDim.height)),r:e.t(r.valueFormatter(m.pkgDim.weight)),s:e.t(m.material.boxnum),t:e.t(r.valueFormatter(m.pkgDim.length)),v:e.t(r.valueFormatter(m.pkgDim.width)),w:e.t(r.valueFormatter(m.pkgDim.height)),x:e.t(r.valueFormatter(m.pkgDim.weight)),y:e.t(m.material.vatrate),z:e.t(m.material.operator),A:e.t(r.dateFuc(m.material.opttime)),B:e.t(m.material.creator),C:e.t(r.dateFuc(m.material.createdate)),D:"0"==m.material.issfg},(m.material.issfg,{}),{E:"1"==m.material.issfg},(m.material.issfg,{}),{F:"2"==m.material.issfg},(m.material.issfg,{}),{G:"1"==m.material.issfg},"1"==m.material.issfg?{H:e.f(m.assemblyList,((t,i,a)=>({a:i,b:t.image,c:"57c41409-6-"+a+",57c41409-5-"+a,d:e.t(t.sku),e:e.t(t.subnumber),f:e.t(t.fulfillable),g:e.t(t.subprice),h:"57c41409-7-"+a+",57c41409-5-"+a,i:"57c41409-5-"+a+",57c41409-1"}))),I:e.p({border:!0,stripe:!0,emptyText:"暂无更多数据"})}:{},{J:e.t(m.material.supplier),K:e.t(m.material.delivery_cycle),L:e.t(m.material.other_cost),M:e.t(m.material.badrate),N:e.t(m.material.productCode),O:e.t(m.material.purchaseUrl),P:e.f(m.stepWisePrice,((t,i,a)=>({a:i,b:e.t(t.price),c:"57c41409-13-"+a+",57c41409-12-"+a,d:e.t(t.amount),e:"57c41409-14-"+a+",57c41409-12-"+a,f:"57c41409-12-"+a+",57c41409-8"}))),Q:e.p({border:!0,stripe:!0,emptyText:"暂无更多数据"}),R:e.f(m.consumableList,((t,i,a)=>({a:i,b:t.image,c:"57c41409-20-"+a+",57c41409-19-"+a,d:e.t(t.sku),e:e.t(t.amount),f:e.t(t.name),g:"57c41409-21-"+a+",57c41409-19-"+a,h:"57c41409-19-"+a+",57c41409-15"}))),S:e.p({border:!0,stripe:!0,emptyText:"暂无更多数据"}),T:e.t(m.customs.nameEn),U:e.t(m.customs.nameCn),V:e.t(m.customs.unitprice),W:e.t(m.customs.material),X:e.t(m.customs.model),Y:e.t(m.customs.customsCode),Z:e.t(m.customs.materialUse),aa:e.t(m.customs.brand),ab:e.t(m.customs.addfee),ac:e.t(r.booleanFuc(m.customs.iselectricity)),ad:e.t(r.booleanFuc(m.customs.isdanger))})}]]);swan.createPage(a);