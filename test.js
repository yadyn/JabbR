(function() {
  var fortune;

  fortune = ['Bad Luck', 'Average Luck', 'Good Luck', 'Excellent Luck', 'Reply hazy, try again', 'Godly Luck', 'Very Bad Luck', 'Outlook good', 'Better not tell you now', 'You will meet a dark handsome stranger', 'ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━ !!!! ', '（　´_ゝ`）ﾌｰﾝ '];

  module.exports = function(robot) {
    return robot.hear(/\#fortune/i, function(msg) {
      return msg.send(msg.random(fortune));
    });
  };

}).call(this);

//# sourceMappingURL=test.js.map
