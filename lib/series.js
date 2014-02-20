
var log = require('au-logging'),
    utils = require('./utils.js'),
    series = exports = module.exports = function() {
      var self = { order: [] }

      self.append = function(cmd) {
        var args = utils.argArray(arguments);
        args.shift();
        self.order.push({ cmd: cmd, args: args });
      };

      self.append_sync = function(cmd) {
        var args = utils.argArray(arguments),
            cmd_as = function() {
              var args = utils.argArray(arguments),
                  cb = args.pop();
              cmd.apply(this, args);
              cb();
            };
        args.shift();
        self.order.push({ cmd: cmd_as, args: args });
      };

      self.go = function(cb) {
        var order = self.order,
            cb = cb || Function();
        self.order = [];  // clear it out

        call();
        function call() {
          var c = order.shift();
          if (!c) return cb();
          var args = c.args;
          args.push(arguments.callee);
          c.cmd.apply(this, args);
        }
      };

      return self;
    };

