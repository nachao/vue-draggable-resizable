const express = require('express')
const Mock = require('mockjs')
const router = express.Router()
const multer  = require('multer')
const fs = require('fs')
const upload = multer({dest: 'upload_tmp/'})

const elements = [{
	id: 123,
	type: 2,
	name: '123'
}]

// 创建元件
router.post('/create', (req, res) => {
	const id = new Date().getTime()
	elements.push(Object.assign(req.body, { id }))
	res.json({ status: 1, data: { id } })
})

// 获取元件数据列表
router.get('/list', (req, res) => {
	res.json({ status: 0, data: elements })
})

// 修改元件数据
router.post('/update', (req, res) => {
	const item = elements.find(d => d.id == req.body.id)
	if (item) {
		Object.assign(item, req.body)
	}
	res.json({ status: 0 })
})

// 上传图片
router.post('/upload', upload.any(), (req, res, next) => {
	var des_file = "./upload/" + (new Date().getTime()) + "." + req.files[0].originalname.split('.')[1];
	fs.readFile(req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err) {
			if (err) {
				console.log(err);
			} else {
				response = {
					message: 'File uploaded successfully',
					filename: des_file
				};
				res.end(JSON.stringify(response));
			}
		})
	})
})

// 获取参数列表
router.get('/params', (req, res) => {
	res.json({
		status: 0
	})
})

// 获取参数值列表
router.get('/params/value', (req, res) => {
	res.json({
		status: 0
	})
})


module.exports = router