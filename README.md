au-series
=========

This module provides a lightweight way to create a series of commands that need to run in order, where some may be syncronous.

* [Getting Started](#started)
* [API](#api)

### <a href="#started" name="started">#</a> Getting Started

```js

var Series = require('au-series'),  // Load module
    series1 = Series(),  // Create a new series
    fs = require('fs');

series1.append(fs.writeFile, '/path/to/file', 'file contents');  // append async file write
series1.append_sync(console.log, 'part way there');
series1.append(fs.writeFile, '/path/to/file2', 'other contents');  // append async file write
series1.append_sync(fs.writeFileSync, '/path/to/file3', 'more contents');  // append sync file write

// Start series of calls
series1.go(function() {
  console.log('done with calls');
});

```

### <a href="#api" name="api">#</a> API

* [append](#append)
* [append_async](#append_async)
* [go](#go)


<a href="#append" name="append">#</a> Series.<b>append</b>(fn, [args, ...])

Allows you to append an asyncronous function to the list of calls. Pass an <i>fn</i> that will be called with the rest of the listed <i>args</a>. The last argument to <i>fn</i> will then be a callback function that will tell <b>Series</b> to continue onto the next function in the series.

<a href="#append_sync" name="append_sync">#</a> Series.<b>append_sync</b>(fn, [args, ...])

Allows you to append a syncronous function to the list of calls. Pass an <i>fn</i> that will be called with the rest of the listed <i>args</a>. After the function returns, the next function in the series will continue, syncronously.

<a href="#go" name="go">#</a> Series.<b>go</b>([callback])

Starts series of calls. If a <i>callback</i> is provided, it will be called upon completion.


