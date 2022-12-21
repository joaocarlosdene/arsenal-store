import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import validator from 'validator'

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static login method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('All Fields Must be Filled')
    }
    const user = await this.findOne({email})

    if (!user){
        throw Error ('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }
    return user
}

//static signup method
userSchema.statics.signup = async function(email, password){
    //validator
    if(!email || !password){
        throw Error('All Fields Must be Filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is Not Valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password Not Strong Enough')
    }

    const exists = await this.findOne({email})

    if (exists){
        throw Error ('Email Already Exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user

}

const userModel =  mongoose.model('userModel', userSchema);

export default userModel;