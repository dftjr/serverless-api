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

        let friendsData = await FriendModel.scan().exec();

        console.log(friendsData)

        return {
            statusCode: 200,
            body: JSON.stringify(friendsData),
        }
    }
}