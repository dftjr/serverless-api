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

    let updateData = [];

    if(event.pathParameters && event.pathParameters.id) {
      await FriendModel.update({ id: event.pathParameters.id }, event.body);
    } else {
      updateData = {message: 'record not found'}
    }

    return {
      statusCode: 200,
      body: JSON.stringify(updateData),
    };
  },
}