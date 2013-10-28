#HALbert
[![Build Status](https://travis-ci.org/xcambar/halbert.png?branch=master)](https://travis-ci.org/xcambar/halbert)
[![Code Climate](https://codeclimate.com/github/xcambar/halbert.png)](https://codeclimate.com/github/xcambar/halbert)

> HAL stands for Hypermedia Application Language. It proposes a media type for representing resources and their relations with hyperlinks.

This JS implementation is for the `HAL-JSON` variant, having the media type `application/hal+json`.

## HAL Status

HAL-JSON is currently at its 5th revision as an Internet Draft at the IETF, and can be read [here](http://tools.ietf.org/html/draft-kelly-json-hal-05).

## HALbert compliance with HAL

This Javascript implementation has been made to be _mostly_ compliant with the current draft. The divergences with the draft being:

* `_links_` is still optional to a Resource, but if present, it MUST contain a `self` entry
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

# Roadmap

* Add examples for various situations (Node.js, Express, Ember, Angular, Backbone...)
* Extend the scope to make it a writer of HAL Resources as well as a parser.
* Better code documentation

# License

MIT, see [LICENSE.md](xcambar/halbert/LICENSE.md)




