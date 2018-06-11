# react-vk-auth

> A Component React for vk.com authentication

## Getting Started

`yarn add react-vk-auth` or `npm i react-vk-auth`

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
      <VkAuth apiId="#######" callback={this.handleVkResponse} />
    )
  }
}

```
param `apiId` is required, appId is your vk.com dev token.
