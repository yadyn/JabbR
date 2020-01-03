# Description:
#   Have Hubot look up a MtG card and return an image of it
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot cast <Magic the Gathering card name>
# Author:
#   FaytLeingod

module.exports = (robot) ->
  robot.respond /cast (.+)/i, (msg) ->
    msg.http('https://api.scryfall.com/cards/named')
      .query({
        exact: msg.match[1]
      })
      .get() (err, res, body) ->
        if err
          msg.send "Encountered an error :( #{err}"
          return
        else
          msg.send(JSON.parse(body).image_uris.normal)