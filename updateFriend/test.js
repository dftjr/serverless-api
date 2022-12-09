'use strict';

const updateFriend = require('./');;

const event = {
    body: {
      id: '2',
      name: 'Jacob',
      phone: 'number update',
    },
  };

  updateFriend.handler(event)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });