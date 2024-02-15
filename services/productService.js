const slugify=require('slugify');
const productModel=require('../models/productModel');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utiles/ApiError');
const factory=require('./factoryHandellers');




// exports.getAllProducts=asyncHandler(async(req,res)=>{

//     //remove unneccessry fields from the query
//  const querystringobject={...req.query};
// const excludedfields=['page','sort','limit','page']
//  excludedfields.forEach(element => {delete querystringobject[element]
// });

// //prepare query before filter and sorting
//     let querystr=JSON.stringify(querystringobject);
// querystr=querystr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

// //pagination
// const page = req.query.page * 1 || 1;
// const limit = req.query.limit * 1 || 5;
// const skip = (page - 1) * limit;

// //build the query
// let mongoosequery=productModel.find(JSON.parse(querystr)).skip(skip).limit(limit)

// //sorting
// if(req.query.sort){
//     const sortBy=req.query.sort.split(',').join(' ');
//     mongoosequery=mongoosequery.sort(sortBy);
// }
// else{
//     mongoosequery=mongoosequery.select('-createdAt')
// }

// //to return specific fields
// if(req.query.fields){
//     const fields=req.query.fields.split(',').join(' ');
//     mongoosequery=mongoosequery.select(fields);
// }
// else{
//     mongoosequery=mongoosequery.select('-__v')
// }

// //search by keyword
// if(req.query.keyword){
//     const Query={};
//     Query.$or=[
//         {title:{$regex:req.query.keyword},$options:'i'},
//         {description:{$regex:req.query.keyword},$options:'i'},
//     ]
// mongoosequery=mongoosequery.find(Query);
// }

// //run the query
//  const products=await mongoosequery;
//  res.status(200).json({results:products.length,page,data:products})

// })


exports.getProduct=factory.getOne(productModel);
exports.getAllProducts=factory.getAll(productModel,'Products');

exports.updateProduct=factory.updateOne(productModel);
exports.createProduct=factory.createOne(productModel);
exports.deleteProduct=factory.deleteOne(productModel);