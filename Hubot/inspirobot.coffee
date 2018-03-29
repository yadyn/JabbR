# Description:
#   Inspirational
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   inspire
#
# Known Issues:
#   none
#
# Author:
#   Riley Mills

Util = require "util"

module.exports = (robot) =>
  robot.respond /inspire/i, (msg) ->
    msg.http('http://inspirobot.me/api?generate=true')
      .get() (err, res, body) ->
        if err
          msg.send "Encountered an error :( #{err}"
          return
        else
          msg.send(body)
