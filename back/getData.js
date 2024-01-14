const mongoose=require("mongoose")
const Data=require("./modals/allData")
const axios = require('axios');
const DBurl ="mongodb+srv://Binaya:Binaya@database.impyte5.mongodb.net/store?retryWrites=true&w=majority"


const getData=async(category,number)=>{
  await mongoose.connect(DBurl).then(() => {
  console.log("connected");
  
  
  
});

const options = {
  method: 'GET',
  url: 'https://real-time-product-search.p.rapidapi.com/search',
  params: {
    q: category,
    country: 'us',
    language: 'en',
    limit: number
  },
  headers: {
    'X-RapidAPI-Key': 'fe17bbd52dmsh0ef40c9932ec78bp1f91ebjsn15c9199f0ba8',
    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  const resData=response.data
  try{
  resData.data.map((e,i)=>{
    Data.create({
      title:e.product_title,
    description:e.product_description,
    photos:e.product_photos,
    category:category,
    rating:e.product_rating||0,
    noOfReviews:e.product_num_reviews||0,
    oldprice:Math.floor(Math.random()*100),
    newprice:Math.floor(Math.random()*100)}).then(()=>console.log("added"))
  })
}
  catch(err){
    console.log(err)
  }
	// console.log(resData.data);
} catch (error) {
	console.error(error);
}
}
getData("men outfit",20)