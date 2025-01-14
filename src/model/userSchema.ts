import mongoose,{Document,Schema} from "mongoose";
 

interface Student extends Document{
    name:string;
    email:string;
    age:number
}

const UserSchema = new Schema<Student>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

export default mongoose.model<Student>('User',UserSchema, 'users')