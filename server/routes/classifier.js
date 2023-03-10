const express = require("express");
const router = express.Router();
const cohere = require('cohere-ai'); 
const examples = require('../data/examples.json')
cohere.init('pjFc7Ok7EfAykYNWQDwj2j7tDk5WPjk7UVMunS4f'); 

const db = require('../firebase');

// Respond to POST request to /classify with an array of split user's email
router.post("/", async function (req, res) {
(async () => { 
    try{
        let email = req.body.content[0].match(/[^.?!]+[.!?]+[\])'"`’”]*|.+/g)
        email = email.filter(String)
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
          await db.collection('emails').doc().set(
            { "classification": response, "score": neutral_average }
            );
          console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
    }
    catch(err){
        console.log("Something unexpected happened in the classification process. Please try again.")
        console.log(err);
    }
})()
}); 

// Respond to GET request to get all drafts
router.get("/", async function (req, res) {
    (async () => { 
        try{
            const snapshot = await db.collection('emails').get();
            let drafts = []
            snapshot.forEach((doc) => {
                drafts.push(doc.data())
                // return doc.data()
            //   console.log(doc.id, '=>', doc.data());
            });
            res.status(200).send(drafts)
        }
        catch(err){
            console.log("Something unexpected happened in the classification process. Please try again.")
            console.log(err);
        }
    })()
    }); 

// router.get("/", async function (req, res) {
//     (async () => { 
//         try{
//             let email = req.body.content[0].split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
//             const response = await cohere.classify({ 
//                 model: 'large', 
//                 inputs: email.filter(String), 
//                 examples: examples}); 
//               res.status(200).send({ "classification": response })
//               console.log(response)
//               console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
//         }
//         catch(err){
//             console.log("Something unexpected happened in the classification process. Please try again.")
//             console.log(err);
//         }
//     })()
//     }); 
module.exports = router;