'use strict';

const createFriend = require('.');;

const event = {
    body: {
      id: '3',
      name: 'test',
      phone: '123.456.7890',
    },
  };

  createFriend.handler(event)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });