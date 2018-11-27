<template>
	<div>
		<h2>元件属性</h2>
		<el-form label-width="100px">
			<el-form-item label="背景颜色">
				<el-input></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {
		props: {
			character: Object
		}
	}
</script>