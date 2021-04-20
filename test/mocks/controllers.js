exports.MockFile = { 
    fieldname: 'file',
    originalname: 'MOCK_DATA (3).csv',
    encoding: '7bit',
    mimetype: 'text/csv',
    destination: 'test/mocks/',
    filename: '0af9fd329d943b1c6c52cbd864711bb8',
    path: 'test/mocks/0af9fd329d943b1c6c52cbd864711bb8',
    size: 1238 
};

exports.MockListProducts = [
    { 
        creation_date: new Date(),
        update_date: new Date(),
        uuid: 'd56f5ee5-8dd2-4d93-9e7f-3f0d1a8c50ab',
        vin: 'WAUKH78E87A906067',
        make: 'Chevrolet',
        model: 'Caprice Classic',
        mileage: 6,
        price: 234489847.65,
        provider: 'Company'
    }
]

exports.MockResponse = {
    status: 200,
    data: {
        message: 'Some of your stored data',
        orders: [
            { 
                creation_date: new Date(),
                update_date: new Date(),
                uuid: 'd56f5ee5-8dd2-4d93-9e7f-3f0d1a8c50ab',
                vin: 'WAUKH78E87A906067',
                make: 'Chevrolet',
                model: 'Caprice Classic',
                mileage: 6,
                price: 234489847.65,
                provider: 'Company'
            }
        ]
    }
}

exports.MockError = {
    status: 400,
    data: {
        message: 'Fail proccesing request',
        description: 'Please, provide the file'
    }
}




