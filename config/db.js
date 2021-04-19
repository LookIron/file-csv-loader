const mongoose = require('mongoose');
const serverDB = require("mongodb-memory-server");

const mongoServer = new serverDB.MongoMemoryServer();

 const dbConnect = async () =>{
     try {
        const uri = await mongoServer.getUri();      
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('DB Connected');
     } catch (error) {
         process.exit(1);
     }
}

const dbDisconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  };

 module.exports = {
    dbConnect,
    dbDisconnect
};