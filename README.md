au-series
=========

This module provides a lightweight way to create a series of commands that need to run in order, where some may be syncronous.

* [Getting Started](#started)
* [API](#api)

### <a href="#started" name="started">#</a> Getting Started

```js

var series = require('au-series')();  // create a series

s.append(fs.writeFile, '/path/to/file', 'file contents');  // append async file write
s.append(fs.writeFile, '/path/to/file2', 'other contents');  // append async file write
s.append_async(fs.writeFileSync, '/path/to/file3', 'more contents');  // append sync file write

// Start series of calls
s.go(function() {
  console.log('done with calls');
});

```

### <a href="#api" name="api">#</a> API

* [append](#append)
* [append_async](#append_async)
* [go](#configs)


<a href="#append" name="append">#</a> Series.<b>append</b>(fn, [args, ...])

Allows you to append an asyncronous function to the list of calls. Pass an <i>fn</i> that will be called with the rest of the listed <i>args</a>. The last argument to <i>fn</i> will then be a callback function that will tell <b>Series</b> to continue onto the next function in the series.

<a href="#append_async" name="append_async">#</a> Series.<b>append_async</b>(fn, [args, ...])

Allows you to append a syncronous function to the list of calls. Pass an <i>fn</i> that will be called with the rest of the listed <i>args</a>. After the function returns, the next function in the series will continue, syncronously.

<a href="#go" name="go">#</a> Series.<b>append</b>([callback])

Starts series of calls. If a <i>callback</i> is provided, it will be called upon completion.


