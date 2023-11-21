import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth'


export const singup =async(req, res)=>{
const {name, email, password}=req.body
try {
    const existinguser = await users.findOne({email})
    if(existinguser){
        return res.status(404).json({massage:"User alrady Exist."})
    }
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({name, email, password:hashedPassword })
        const token = jwt.sign({
            email: newUser.email,
            id: newUser._id,
        },
        "test",
        {expiresIn:'1h'}
        )
    res.status(202).json({rusult: newUser, token})
} catch (error) {
    res.statur(500).json("Something went worng..")
}
}
export const longin =async(req, res)=>{
    const { email, password}=req.body
    try {
        const existinguser = await users.findOne({email})
        if(!existinguser){
            return res.status(404).json({massage:"User is not Exist."})
        }
        const isPasswordCrt = bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({massage: "Invalid credentials"})
        }
    } catch (error) {
        res.statur(500).json("Something went worng..")
    }
}
