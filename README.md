# node-di-bootstrap

[![Code Climate](https://codeclimate.com/github/aaronbullard/node-di-bootstrap/badges/gpa.svg)](https://codeclimate.com/github/aaronbullard/node-di-bootstrap)
[![Test Coverage](https://codeclimate.com/github/aaronbullard/node-di-bootstrap/badges/coverage.svg)](https://codeclimate.com/github/aaronbullard/node-di-bootstrap/coverage)
[![Issue Count](https://codeclimate.com/github/aaronbullard/node-di-bootstrap/badges/issue_count.svg)](https://codeclimate.com/github/aaronbullard/node-di-bootstrap)

A light framework to register/bootstrap modules into an IoC Container.  Loosely modeled after [Laravel] (https://laravel.com).

## Getting started

Clone repo.

#### Install dependencies

From within the cloned folder `node-di-bootstrap` run:

Node dependencies

```
npm install
```

#### Configure application

From within the cloned folder `node-di-bootstrap` run:

Copy `.env.example` to `.env` and update accordingly.  Add any additional environment variables
you need.

Edit `./src/config.js` and update accordingly.

## Life-cycle

- Register
  - To register a Service Provider, add the path of the file in the `./src/config.js`.
  - Each Service Provider should implement a register method that takes the DI-Container as an argument.
  - This is called for each Service Provider from the `./src/bootstrap.js` script.  Script returns the DI-Container with all register modules.

- Boot
  - Boot is like register except it happens when the `./src/start.js` script is called.  It's for services which may not need to be initialized until immediately before runtime.
