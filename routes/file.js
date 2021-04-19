const { Router } = require('express');
const multer = require('multer');
const { uploadCSVFile } = require('../src/controllers/file');

const upload = multer({ dest: 'tmp/csv/' })

const router = Router();

router.post('/upload/:provider', upload.single('file'), uploadCSVFile );

module.exports = router;
