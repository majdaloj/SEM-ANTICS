const express = require("express");
const router = express.Router();
const cohere = require('cohere-ai'); 
const examples = require('../data/examples.json')
cohere.init('pjFc7Ok7EfAykYNWQDwj2j7tDk5WPjk7UVMunS4f'); 

// Respond to GET request to /classify with an array of split user's email
router.post("/", async function (req, res) {
(async () => { 
    try{
        let email = req.body.content[0].match(/[^.?!]+[.!?]+[\])'"`’”]*/g)
        email = email.filter(String)
        // console.log(email[])
        // let new_arr = []
        // for (let j = 0; j < email.length; j += 1) {
        //     if (j % 2 == 1){
        //         joined = email.slice(j,j-1).join(" ")
        //         new_arr = new_arr.concat(joined)
        //         console.log(new_arr)
        //     }
        //   }
        const response = await cohere.classify({ 
            model: 'large', 
            inputs: email, 
            examples: examples}); 

        var neutral_score = 0
        arr = response.body.classifications
        for (let i = 0; i < arr.length; i += 1) {
            console.log(arr[i].labels)
            neutral_score += arr[i].labels.neutral.confidence;
          }
        var neutral_average = neutral_score/arr.length
          res.status(200).send({ "classification": response, "score": neutral_average })
          console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
    }
    catch(err){
        console.log("Something unexpected happened in the classification process. Please try again.")
        console.log(err);
    }
})()
}); 

router.get("/", async function (req, res) {
    (async () => { 
        try{
            let email = req.body.content[0].split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
            const response = await cohere.classify({ 
                model: 'large', 
                inputs: email.filter(String), 
                examples: examples}); 
              res.status(200).send({ "classification": response })
              console.log(response)
              console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
        }
        catch(err){
            console.log("Something unexpected happened in the classification process. Please try again.")
            console.log(err);
        }
    })()
    }); 
module.exports = router;