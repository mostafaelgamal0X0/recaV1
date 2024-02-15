const express = require('express');
const {
    getSubCategoryValidator,
    createSubCategoryValidator,
    updateSubCategoryValidator,
    deleteSubCategoryValidator,
  } = require('../utiles/validators/subcategoryValidators');

const {
    getAllsubcategories,
    getsubcategory,
    createsubcategory,
    updatesubcategory,deletesubcategory
    
  } = require('../services/subcategoryService');
const { create } = require('../models/subcategoryModel');
  //mergeparams:allow us to access  parameters on other routes
  const router = express.Router({mergeParams:true});


  router
  .route('/')
  .post(createSubCategoryValidator,createsubcategory)
  .get(getAllsubcategories);
  router
  .route('/:id')
  .get(getSubCategoryValidator,getsubcategory)
  .put(updateSubCategoryValidator,updatesubcategory).delete(deleteSubCategoryValidator,deletesubcategory);


  module.exports = router;
