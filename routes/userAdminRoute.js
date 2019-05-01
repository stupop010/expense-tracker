const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Expense = mongoose.model("expense");

const isAuthenticated = require("../middleware/isAuthenticated");

router.get(':id', isAuthenticated, async (req, res)=> {
    console.log(req)
    try{
        const item = await Expense.find()
    }catch(e){
        console.log(e)
    }
})

module.exports = router;