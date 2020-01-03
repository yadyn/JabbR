# Description:
#   Legitimate Valyrian 
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   valar morghulis
#   valar dohaeris
#
# Author:
#   FaytLeingod


module.exports = (robot) ->
  robot.hear /valar dohaeris/i, (msg) ->
    robot.brain.set 'Valyrian', 0
    msg.send 'All men must serve.'

  robot.hear /(.+)/, (msg) ->
    if (robot.brain.get('Valyrian') == 1)
      translation = msg.match[1]
      msg.send translation.replace /[aeiou]/gi, "y"

  robot.hear /valar morghulis/i, (msg) ->
    robot.brain.set 'Valyrian', 1
    msg.send 'All men must die.'