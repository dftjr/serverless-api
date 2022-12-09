'use strict';

const deleteFriend = require('./');;

const event = {
  pathParameters: {
    id: '3',
  },
};

deleteFriend.handler(event)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });