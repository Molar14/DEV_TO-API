const createError = require('http-errors')
const publicacions = require('../models/publicacions.model')

async function create(postData) {
   const newPost = await publicacions.create(postData);
   return newPost;
 }
 
 async function getAll() {
   const allPosts = await publicacions.find().populate("user");
   return allPosts;
 }
 
 async function getById(id) {
   const post = await publicacions.findById(id);
   return post;
 }
 
 async function getByTitle(title) {
   const query = { title: { $regex: title, $options: "i" } };
   const getByTitle = await publicacions.find(query).populate("user");
   return getByTitle;
 }
 
 async function deleteById(idPost, idUserPost, idUserActive) {
   if (idUserPost != idUserActive)
     throw createError(403, "The user isn't the creator of the post");
 
   const postDeleted = await publicacions.findByIdAndDelete(idPost);
   return postDeleted;
 }
 
 async function updateById(id, newPostData) {
   const originalUser = await publicacions.findById(id);
   newPostData.user = originalUser.user;
   newPostData.updated_at = new Date();
   const updatedPost = await publicacions.findByIdAndUpdate(id, newPostData, {
     new: true,
   });
   return updatedPost;
 }
 
 module.exports = {
   create,
   getAll,
   getById,
   getByTitle,
   deleteById,
   updateById,
 };