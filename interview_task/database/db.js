// const mongoose = require('mongoose')
// require('dotenv').config();

// const url = `mongodb+srv://dbuser:dbuser@my-sample-cluster-b3ugy.mongodb.net/interview?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// const connectdb = mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })

require('dotenv').config();

const mongoose = require('mongoose')

const URI = `mongodb+srv://sample_db:bJBfKiTkomE5Jhba@cluster0.xgybt.mongodb.net/interview?retryWrites=true&w=majority`

const connectdb =async()=>{
    await mongoose.connect(URI,{ 
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('DB is connected....!')
}


module.exports = connectdb;