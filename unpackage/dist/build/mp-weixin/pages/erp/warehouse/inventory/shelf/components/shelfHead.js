"use strict";const e=require("../../../../../../api/erp/warehouse/warehouseApi.js"),a=require("../../../../../../common/vendor.js");require("../../../../../../utils/request.js"),require("../../../../../../store/index.js");const t={props:["shelfid"],components:{UniIcons:()=>"../../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js"},data:()=>({data:{startname:"",usesize:"",expnumber:"",length:"",width:"",height:"",numbername:"",summary:{warehousename:"",skunum:""}},addressnum:"",shelftreepath:"",shelfid:""}),onLoad(e){},methods:{getInfo(e,a,t){this.shelfid=t||"",this.addressnum=e,this.shelftreepath=a,this.loadData()},loadData(){let a=this;e.warehouseApi.getShelfInfo({shelfid:this.shelfid,addressnum:this.addressnum,shelftreepath:this.shelftreepath}).then((e=>{e?(a.data=e,e.summary&&e.summary.warehousename&&(a.data.startname=e.summary.warehousename.substr(0,1)),a.data.numbername=e.number+""+e.name,a.$emit("onload",e)):a.$emit("onload",{})}))}}};if(!Array){a.resolveComponent("uni-icons")()}Math;const s=a._export_sfc(t,[["render",function(e,t,s,n,r,m){return a.e({a:a.t(r.data.startname),b:a.t(r.data.summary.warehousename),c:a.t(r.data.numbername),d:a.t(r.data.length),e:a.t(r.data.width),f:a.t(r.data.height),g:a.o(m.loadData),h:a.p({type:"loop",color:"#5e6d82",size:"24"}),i:a.t(r.data.summary.skunum),j:a.t(r.data.usesize),k:r.data.summary.quantity},r.data.summary.quantity?{l:a.t(r.data.summary.quantity)}:{})}]]);wx.createComponent(s);
