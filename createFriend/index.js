'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: String,
});

const FriendModel = dynamoose.model("Friends", schema);

module.exports = {  
    handler: async (event) => {
      try {
        const friendData = new FriendModel(event.body);
        const friendRecord = await friendData.save();
  
        return {
          statusCode: 200,
          body: JSON.stringify(friendRecord),
        };
      } catch(e) {
        console.log(e);
      }    
    },
  };