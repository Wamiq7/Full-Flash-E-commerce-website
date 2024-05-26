const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product Price"],
        maxLenght:[8,"price cannot exceed 8 characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        // ismai humnay public_id or url is wajah say liya haai kiyon kah jub hum cloud per image upload kartay haain tou humhai public_id or url milta haai , secondly yai kaah humnay ismai array use kiya hai bcz images kafi sari hosakti haai aik product ki
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter product category"],
    },
    Stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxLenght:[4,"stock cannot excced 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true,
            },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    // yai "user" is liya create kara hai for example agar website two persons nay mil kar develop kari haai and both have admin access tou jub koi bhi aik banda in dono mai say product add karay ga tou apas mai confusion na ho kaah product kisnay add kari haai is liya hum product kay saath ID bhi show karain gaay 
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("Product",productSchema);