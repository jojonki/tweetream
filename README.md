Tweetream
======================

This is a twitter stream application which works on cross platforms which is enabled by node-webkit.


Usage
------

1. Install usuful plugins.
 
 ``` perl
$ npm install twitter
$ npm install jQuery
$ npm install nodewebkit
```
1. create your security file as 'security.js'.
 
 ```javascript
module.exports = {
    "twitter": {
        "consumer_key"        : 'xxxx',
        "consumer_secret"     : 'xxxx',
        "access_token_key"    : 'xxxx',
        "access_token_secret" : 'xxxx'
    }
} 
```
1. just do it!
```
$ npm start
```

Contact
------

- [twitter/jojonki](https://twitter.com/jojonki)

License
----------
Copyright (c) 2014 jojonki

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including w ithout limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to  the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. I N NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
