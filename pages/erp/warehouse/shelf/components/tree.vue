<template>
	<view  class="wtree">
	<block v-for="(item,index) in list" :key="index">
		<view  >
			<view  @click="item.childshow=true" v-show="item.childshow==false" :class="item.treeclass" >
			<uni-row class="demo-uni-row">
				<uni-col :span="16">
					<view   class="title" >
						<text v-for="n of item.level" style="padding-left:15px;"> </text>
						<text  v-if="item.treeclass=='hasTreeChildrenTitle'"
						style="padding-top:5px" 
						class="light-font">	▶ </text>
						<text  v-else
						style="padding-top:5px;padding-left:12px;" 
						class="light-font">	</text>
						{{item.number}}-{{item.name}}</view>
				</uni-col>
				<uni-col :span="8"   >
						<view  @click.stop="toShelfInv(item)" class="treeitembtn"> 上下架</view>
				</uni-col>
			</uni-row>
			</view>
			<view @click="item.childshow=false" v-show="item.childshow==true"  :class="item.treeclass" >
			<uni-row class="demo-uni-row" >
				<uni-col :span="16">
					<view   class="title" >
						<text v-for="n of item.level" style="padding-left:15px;"> </text>
						<text  v-if="item.treeclass=='hasTreeChildrenTitle'"
						style="padding-top:5px" 
						class="light-font">	▼</text>
						<text  v-else
						style="padding-top:5px;padding-left:12px;" 
						class="light-font">	</text>
						{{item.number}}-{{item.name}}</view>
				</uni-col>
				<uni-col :span="8"   >
						<view  @click.stop="toShelfInv(item)" class="treeitembtn"> 上下架</view>
				</uni-col>
			</uni-row>
			 </view>
			<TreeItem 
			     v-if="item.children&&item.children.length>0"
				 v-show="item.childshow" 
				:list="item.children" 
				:materialid="materialid" 
				:formid="formid"
				:opttype="opttype"
				:addressnum="addressnum">
			</TreeItem>
		</view>
	</block>
	</view>
</template>

<script setup>
	import { onMounted, reactive, ref, toRefs } from 'vue';
	import TreeItem from "./tree"
	let props = defineProps({
	    list:[],
		addressnum:'',
		materialid:'',
		formid:'',
		opttype:'',
	 })
    const { list ,addressnum,materialid,formid} = toRefs(props);

	 function toShelfInv(item){
		 let detail = {
			'shelfid':item.id,
		 	'addressnum': props.addressnum,
		 	'shelftreepath':item.treepath,
			'materialid':props.materialid,
			'formid':props.formid,
			'amount':props.amount,
			"opttype":props.opttype,
		 };
		 uni.navigateTo({
		 	"url": '/pages/erp/warehouse/inventory/shelf/index?detailData=' +
		 		encodeURIComponent(JSON.stringify(detail))
		 });
	 }
 
</script>

<style>
	.treeitem{
		padding:10px;
		background-color: #fff;
		border:solid #dedede 1px;
	}
	 
	.treeitembtn{
		text-align: center;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		line-height: 1;
		height: 32px;
		white-space: nowrap;
		cursor: pointer;
		color:#67c23a;
		text-align: center;
		box-sizing: border-box;
		outline: none;
		transition: .1s;
		font-weight:500;
		user-select: none;
		vertical-align: middle;
		-webkit-appearance: none;
		background-color: #ffffff;
        width:100%;
		padding: 4px 15px;
		font-size: 12px;
		border-radius: 4px
	}
	.wtree{
		padding-top:5px;
	}
	.wtree .title{
		padding-top:5px;
		padding-left:20px;
	}
  .noTreeChildrenTitle{
		padding:5px;
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 0.5px;
	}
    .hasTreeChildrenTitle{
		padding:5px;
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 0.5px;
	}
</style>