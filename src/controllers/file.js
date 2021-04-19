const { response, request } = require('express');
const { createReadStream, unlinkSync } = require("fs");
const csv = require("fast-csv");
const Product = require('../models/product');

const uploadCSVFile = async (req = request, res = response) => {
    const { provider } = req.params;
    let rows = [];
    try {
        if (req.file == undefined || !provider || provider.trim() === '') {
            throw "Please, provide the file";
        }
        const fileName = req.file.originalname;
        createReadStream(req.file.path)
            .pipe(csv.parse({ headers: true }))
            .on("error", (error) => {
                unlinkSync(req.file.path);
                throw error.message;
            })
            .on("data", (row) => {
                row.provider = provider;
                rows.push(row);
            })
            .on("end", () => {
                const limit = rows.length > 10 ? 9 : rows.length;
                Product.insertMany( rows ).then((reponse)=>{
                    unlinkSync(req.file.path);
                    return res.status(200).json({
                        message: `Data has been successfully loaded from ${fileName}`,
                        data: {
                            message: 'Some of your stored data',
                            orders: reponse.slice(0, limit)}
                    });
                }).catch((err) =>{
                    unlinkSync(req.file.path);
                    return res.status(500).json({
                        error: {message: "Fail storage data in databse"},
                      });
                })
            });
    } catch (error) {
        return res.status(400).json({
            error:{ message: "Fail proccesing request" }
        });
    }
}

module.exports = {
    uploadCSVFile
}