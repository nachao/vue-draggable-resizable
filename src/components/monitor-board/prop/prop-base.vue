<template>
	<div class="prop-panel">
		<h2>元件属性</h2>
		<el-form label-width="100px">
			<el-form-item label="元件名称">
				<el-input v-model="character.name"></el-input>
			</el-form-item>
			<el-form-item label="宽度（px）">
				<el-input v-model.number="character.w"></el-input>
			</el-form-item>
			<el-form-item label="高度（px）">
				<el-input v-model.number="character.h"></el-input>
			</el-form-item>
			<el-form-item label="文本内容">
				<el-input v-model.number="character.text"></el-input>
			</el-form-item>
			<el-form-item label="字体大小">
				<el-input v-model.number="character.fontSize"></el-input>
			</el-form-item>
			<el-form-item label="字体颜色">
				<el-input v-model="character.fontColor"></el-input>
			</el-form-item>
			<el-form-item label="边框颜色">
				<el-input v-model="character.borderColor"></el-input>
			</el-form-item>
			<el-form-item label="背景颜色">
				<el-input v-model="character.bgColor"></el-input>
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