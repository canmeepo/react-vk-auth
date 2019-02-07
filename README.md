# react-vk-auth

> A Component React for vk.com authentication
[![Build status](https://travis-ci.org/auchenberg/volkswagen.svg?branch=master)](https://travis-ci.org/auchenberg/volkswagen)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)


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
