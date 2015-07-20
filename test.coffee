# Description:
#   Nano provides wonderful fortunes
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   #fortune
#
# Author:
#  cptbob

fortune= [
    'Bad Luck',
    'Average Luck',
    'Good Luck',
    'Excellent Luck',
    'Reply hazy, try again',
    'Godly Luck',
    'Very Bad Luck',
    'Outlook good',
    'Better not tell you now',
    'You will meet a dark handsome stranger',
    'ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━ !!!! ',
    '（　´_ゝ`）ﾌｰﾝ '
]

module.exports = (robot) ->
    robot.hear /\#fortune/i, (msg) ->
        msg.send msg.random fortune