const mongoose=require('mongoose')
const mailSender=require('../utils/mailSender')
const otpSchema=new mongoose.Schema({
    email:{
        tyep:String,
        required:true
    },
    otp:{
        tyep:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
    }
})
 async function sendVerificationEmail(email,otp){
    try{
const mailResponse= await mailSender(
    email,
    "Verification Email",
    `<h1> please confirm your otp</h1>
    <p>Here is your otp code : ${otp}</p>
    `
);
console.log("Email sent succesfully", mailResponse)
    }
    catch(error){
        console.log("Error occupied while sending email:",error)
        throw error

    }
 } 
 otpSchema.pre("save", async function (next) {
    console.log("New document saved to the database");
    // Only send an email when a new document is created
    if (this.isNew) {
      await sendVerificationEmail(this.email, this.otp);
    }
    next();
  });
  module.exports = mongoose.model("OTP", otpSchema);