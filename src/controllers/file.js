const { response, request } = require('express');
const csvtojson = require('csvtojson')
const { dbConnect, dbDisconnect} = require('../../config/db')
const Product = require('../models/product');

const uploadCSVFile = async (req = request, res = response) => {
    const { provider } = req.params;
    try {

        if (req.file == undefined || !provider || provider.trim() === '') {
            throw "Please, provide the file";
        }
        const fileName = req.file.originalname;
        const fileToJson = await csvtojson().fromFile(req.file.path)
        const fortaData = formatData(fileToJson, provider);
        if(fortaData.length>0){
            const insertedData = await Product.insertMany(fortaData);
            if (insertedData) {
                const limit = insertedData.length > 10 ? 9 : insertedData.length;
                return res.status(200).json({
                    message: `Data has been successfully loaded from ${fileName}`,
                    data: {
                        message: 'Some of your stored data',
                        orders: insertedData.slice(0, limit)
                    }
                });
            } else {
                throw "Fail storage data in databse";
            }
        }else{
            throw "Fail storage data in databse";
        }
    } catch (error) {
        return res.status(400).json({
            error:{ 
                message: `Fail proccesing request`,
                description: error
            }
        });
    }
}

const formatData = (data, provider) => {
    for (const item of data) {
        item['provider'] = provider;
    }
    return data;
}

module.exports = {
    uploadCSVFile
}