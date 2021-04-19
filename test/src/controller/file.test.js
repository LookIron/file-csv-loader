const fs = require('fs')
const csv = require("fast-csv");
const { MockFile } = require('../../mocks/controllers');
const { uploadCSVFile } = require('../../../src/controllers/file');

jest.mock('fs');
csv.parse = jest.fn().mockImplementationOnce(() => { return ({})});

describe('File controller - Test Suite', () => {
    test('upload a file successfully', async () => {
        const req = { file: MockFile, params: { provider: 'Carlos' } };
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        let createReadStreamMock = jest.spyOn(fs, "createReadStream").mockReturnValueOnce({pipe:()=>{ return { on:()=>{return { on:()=>{return { on:()=>{}}}}}}}}); 
        await uploadCSVFile(req, res);
        expect(createReadStreamMock).toHaveBeenCalled();
        createReadStreamMock.mockRestore();
    });

    test('upload a file - error "Please, provide the file"', async () => {
        const req = { file: undefined, params: { provider: 'Carlos' } };
        const res =  {status: jest.fn().mockReturnThis(), json: jest.fn()};
        await uploadCSVFile(req, res);

    });
});