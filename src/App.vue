<template>
	<div id="app">
		<router-view></router-view>
		<div id="bottomTab" @click="hide">
			<Tab/>
		</div>
		<sideBar :sideBar="sideBars" />
	</div>
</template>
<script>
import Tab from "./views/tab.vue";
import SideBar from "./views/sidebar.vue"
import $ from "jquery";
import bus from "./bus"
export default {
	name: "App",
	components: {
		Tab,
		SideBar
	},
	mounted: function() {

	},
	data: function() {
		return {
			sideBars: "fold"
		}
	},
	methods: {
		hide() {
			bus.$emit("change")
		}
	}
}
</script>
<style>
#bottomTab {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background: #fff;
	padding: 5px 0;
}

.active {}
</style>
