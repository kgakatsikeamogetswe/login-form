import {Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    name : {
        type : string,
        required : true
    },
    email : {
        type : string,
        required : true
    }
}) 

export default models.user || model('User', userSchema)