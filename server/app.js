const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const userRoutes = require('./api/routes/user')


mongoose.connect('mongodb+srv://FitnessApp:ralarala@fitnessapp-ktbkb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true,   
});

// Cancel the warning : DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true)

mongoose.Promise = global.Promise

mongoose.connection
        .once('open',() => console.log('connexion a mongo établie'))
        .on('error',(error) => {
            console.warn('Warning',error);
});   

app.use(cors())
app.options('*', cors())
app.use(morgan('dev'));
app.use("/uploads",express.static('uploads'));
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/user', userRoutes)

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
})

module.exports = app