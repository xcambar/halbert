#HALbert [![Build Status](https://travis-ci.org/xcambar/halbert.png?branch=master)](https://travis-ci.org/xcambar/halbert)

> HAL stands for Hypermedia Application Language. It proposes a media type for representing resources and their relations with hyperlinks.

This JS implementation is for the `HAL-JSON` variant, having the media type `application/hal+json`.

## HAL Status

HAL-JSON is currently at its 5th revision as an Internet Draft at the IETF, and can be read [here](http://tools.ietf.org/html/draft-kelly-json-hal-06).

## HALbert compliance with HAL

This Javascript implementation has been made to be _mostly_ compliant with the current draft. The divergences with the draft being:

* Validation of templated URIs has not been implemented.

# Installation

## Node.js

Install it via NPM:

    npm install halbert

Then in your code

    var parser = require('halbert').parser;

## Browser

You can build `halbert` by using [browserify](http://github.com/substack/node-browserify).

    %ROOT_PATH%/node_modules/browserify/bin/cmd.js index.js --standalone halbert

The generated file will be [UMD](https://github.com/umdjs/umd)-compatible, which means:

* If you use it in an AMD application, HALbert will be available by doing `require('halbert')`.
* Otherwise, il will be available as `window.halbert`

# Usage

Simply execute

    var resource = parser(json_object)

If for any reason, the `json_object` does not describe a valid HAL Resource, an Error will be thrown.

## Disable Validation

In some situations, it might be desirable to use a less strict validation for the resources you are parsing - for example, if you are the client of a HAL API and are trying to adhere to [Postel's law](http://en.wikipedia.org/wiki/Robustness_principle) (especially the _"be liberal in what you accept"_ part). For this purpose, you can disable most of Halbert's validation checks by calling the parser with a second parameter, like this:

    var resource = parser(json_object, false)

# Roadmap

* Add examples for various situations (Node.js, Express, Ember, Angular, Backbone...)
* Extend the scope to make it a writer of HAL Resources as well as a parser.
* Better code documentation

# License

MIT, see [LICENSE.md](xcambar/halbert/LICENSE.md)
