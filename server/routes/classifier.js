const express = require("express");
const router = express.Router();
const cohere = require('cohere-ai'); 
const examples = require('../data/examples.json')
cohere.init('pjFc7Ok7EfAykYNWQDwj2j7tDk5WPjk7UVMunS4f'); 

// Respond to GET request to /classify with an array of split user's email
router.get("/", async function (req, res) {
(async () => { 
    try{
        let email = req.body.content
        const response = await cohere.classify({ 
            model: 'large', 
            inputs: email, 
            examples: examples}); 
          res.status(200).send({ "classification": response })
          console.log(response)
          console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
    }
    catch(err){
        console.log("Something unexpected happened in the classification process. Please try again.")
        console.log("error");
    }
})()
}); 
module.exports = router;