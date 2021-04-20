const { uploadCSVFile } = require('../../../src/controllers/file');
const { dbConnect, dbDisconnect} = require('../../../config/db');
const { MockFile, MockListProducts, MockResponse,MockError } = require('../../mocks/controllers');
const Product = require('../../../src/models/product');


jest.mock('csvtojson', () => {
    const file = {
      fromFile: jest.fn().mockImplementation(() => { return ( MockListProducts )})
    };
    return jest.fn(() => file);
});

beforeAll(async () => {
    await dbConnect()
 });
 
 afterAll(async () => {
     await dbDisconnect();
 });
 
describe('File controller - Test Suite', () => {
    test('upload a file successfully', async () => {
        const req = { file: MockFile, params: { provider: 'Carlos' } };
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn(()=> (MockResponse))};
        Product.insertMany = jest.fn(() => Promise.resolve([{ _id: '507f1f77bcf86cd799439011' }]))
        const response = await uploadCSVFile(req, res);
        expect(response).toEqual(MockResponse );
    });

    test('upload a file - error "Please, provide the file"', async () => {
        const req = { file: undefined, params: { provider: 'Carlos' } };
        const res =  {status: jest.fn().mockReturnThis(), json: jest.fn()};
        Product.insertMany = jest.fn(() => (null))
        const response =  await uploadCSVFile(req, res);
        expect(response).toEqual(undefined);
    });
});