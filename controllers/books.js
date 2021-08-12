//const {request,response} = require('express');
const db = require('../config/dbconfig');

//Get all books
const getAllBooks = (request,response) => {
    
    db.query(`select * from bookstall.books`, (err,res) => {

        if(err){
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })

};

//Get books by id
const getAllBooksById =  (request,response) =>{
    db.query(`select * from bookstall.books where book_id="${request.params.id}"`,(err,res)=>{

         if(err){
             response.status(500).json(err);
         }
         response.status(res.statusCode).json(res.data);
    }); 
}

module.exports = {
    getAllBooks,
    getAllBooksById
}