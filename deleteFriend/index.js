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

    let deleteData = [];

    if(event.pathParameters && event.pathParameters.id) {
      await FriendModel.delete(event.pathParameters.id);
    } else {
      deleteData = {message: 'This rcord does not exists'};
    }

    return {
      statusCode: 200,
      body: JSON.stringify('Friend has been delete!'),
    };
  },
};