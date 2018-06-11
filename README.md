# react-vk-auth

> A Component React for vk.com authentication

## Getting Started

`yarn add react-facebook-login` or `npm install react-facebook-login`

## Basic example

```js
import React, { Component } from 'react';
import VkAuth from 'react-vk-auth';

class Registration extends Component {

  handleVkResponse = (data) => {
    console.warn(data)
  }
  
  render() {
    return(
      <VkLogin apiId="#######" callback={this.handleVkResponse} />
    )
  }
}

```
param `apiId` is required, appId is your vk.com dev token.
