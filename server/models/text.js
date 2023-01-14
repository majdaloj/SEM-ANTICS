const cohere = require('cohere-ai'); 
cohere.init('pjFc7Ok7EfAykYNWQDwj2j7tDk5WPjk7UVMunS4f'); 
(async () => { 
  const response = await cohere.classify({ 
    model: 'large', 
    inputs: ["This item was broken when it arrived", "This item broke after 3 weeks"], 
    examples: [{"text": "The order came 5 days early", "label": "positive"}, {"text": "The item exceeded my expectations", "label": "positive"}, {"text": "I ordered more for my friends", "label": "positive"}, {"text": "I would buy this again", "label": "positive"}, {"text": "I would recommend this to others", "label": "positive"}, {"text": "The package was damaged", "label": "negative"}, {"text": "The order is 5 days late", "label": "negative"}, {"text": "The order was incorrect", "label": "negative"}, {"text": "I want to return my item", "label": "negative"}, {"text": "The item\'s material feels low quality", "label": "negative"}] 
  }); 
  console.log(response)
  console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
})(); 

