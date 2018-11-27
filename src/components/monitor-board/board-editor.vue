<template>
	<div class="board-editor">
		<el-container>
			<el-header height="auto">
				<el-row>
					<el-col :span="6">
						<el-button>保存</el-button>
					</el-col>
					<el-col :span="10" style="text-align: center;line-height: 35px;">机组看板1</el-col>
					<el-col :span="8" style="text-align: right;">
						<el-button @click="addText">添加文本</el-button>
						<el-button @click="addElement(3)">添加参数</el-button>
						<el-button @click="addElement(4)">添加图片</el-button>
					</el-col>
				</el-row>
			</el-header>
			<el-container>
				<el-aside width="300px" v-if="selectedElement">
					<EditSide :character="selectedElement"></EditSide>
				</el-aside>
				<el-main id="boardEditorMain">
					<el-container class="main-container">
						<ElementText
							v-for="(item, index) in textElements"
							:key="index"
							:character="item"
							@activated="onActivated"
							@deactivated="onDeactivated">
						</ElementText>
					</el-container>
				</el-main>
			</el-container>
		</el-container>
		<!-- <h1>编辑状态面板</h1>
		 -->
	</div>
</template>
<script>
	import EditSide from './prop/prop-side'
	import ElementText from './elements/element-text'
	import ElementPicture from './elements/element-picture'
	import ElementParm from './elements/element-param'
	export default {
		components: {
			EditSide,
			ElementText,
			ElementPicture,
			ElementParm
		},
		data: function () {
			return {
				sceneElement: {
					id: 123,
					type: 1,
					background: '#fff'
				},
				textElements: [],
				paramElements: [],
				pictureElements: [],
				selectedElement: null
			}
		},
		methods: {
			getElements () {
				axios.get('/api/list').then((res) => {
					res.data.data.forEach((item) => {
						if (item.type === 2) {
							this.textElements.push(item)
						} else if (item.type === 3) {
							this.paramElements.push(item)
						} else if (item.type === 4) {
							this.pictureElements.push(item)
						} else if (item.type === 1) {
							this.sceneElement = item
						} 
					})
				})
			},
			addElement (type) {
				return axios.post('/api/create', {
					type
				})
			},
			addText () {
				const type = 2
				this.addElement(type).then((res) => {
					const id = res.data.data.id
					this.textElements.push({
						id,
						type,
						x: 0,
						y: 0,
						w: 100,
						h: 100,
						z: 1,
						text: '',
						fontSize: 12,
						fontColor: '#000000',
						borderColor: '#ffffff',
						bgColor: '#ffffff',
					})
				})
			},
			onActivated (item) {
				this.selectedElement = item
			},
			onDeactivated () {
				this.selectedElement = this.sceneElement
			}
		},
		mounted () {
			this.onDeactivated()
			this.getElements()
		}
	}
</script>
<style>
	.el-header {
		border-bottom: 1px solid #d1dbe5;
		background: #d1dbe5;
		padding: 10px 20px;
	}
	.board-editor .el-main {
		overflow: auto;
		height: 500px;
	}
	.el-aside {
		height: 500px;
		background: #ecf0f4;
		overflow: all;
	}
	.board-editor .main-container {
		min-width: 2000px;
		min-height: 2000px;
		position: relative;
	}
</style>