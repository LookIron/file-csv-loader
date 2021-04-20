const { dbConnect, dbDisconnect} = require('../../../config/db')
const Product = require('../../../src/models/product');

beforeAll(async () => {
   await dbConnect()
});

afterAll(async () => {
    await dbDisconnect();
});

describe('Database TEST', () => {
  it('Insert in DB', async () => {
    await Product.insertMany([{ 
        creation_date: new Date(),
        update_date: new Date(),
        uuid: 'd56f5ee5-8dd2-4d93-9e7f-3f0d1a8c50ab',
        vin: 'WAUKH78E87A906067',
        make: 'Chevrolet',
        model: 'Caprice Classic',
        mileage: 6,
        price: 234489847.65,
        provider: 'Company'}]);
    const count = await Product.countDocuments();
    expect(count).toEqual(1);
  });
});