#HAL

> HAL stands for Hypermedia Application Language. It proposes a media type for representing resources and their relations with hyperlinks.

This JS implementation is for the `HAL-JSON` variant, having the media type `application/hal+json`.

## Status

HAL-JSON is currently at its 5th revision as an Internet Draft at the IETF, and can be read [here](http://tools.ietf.org/html/draft-kelly-json-hal-05).

## Compliance

This Javascript implementation has been made to be _mostly_ compliant with the current draft. The divergences with the draft being:

* `_links_` is still optional to a Resource, but if present, it MUST contain a `self` entry
* Validation of templated URIs has not been implemented.

# Usage

## Node.js

Install it via NPM:

    npm install hal

Then in your code:

    parser = require('hal').parser;

## Browser

You can build `hal` by using [browserify](http://github.com/substack/node-browserify).

# License

MIT, see [LICENSE.md](xcambar/hal/LICENSE.md)




