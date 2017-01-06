using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using JabbR.Models;
using Microsoft.AspNet.SignalR;

namespace JabbR.Commands
{
    [Command("spoiler", "Spoiler_CommandInfo", "message", "user")]
    public class SpoilerCommand : UserCommand
    {
        private const string _hiddenFormat = @"<s>{0}</s>";

        private readonly Regex _hiddenPattern = new Regex(@"\[(.+)\]");

        public override void Execute(CommandContext context, CallerContext callerContext, ChatUser callingUser, string[] args)
        {
            ChatRoom room = context.Repository.VerifyUserRoom(context.Cache, callingUser, callerContext.RoomName);

            room.EnsureOpen();

            if (args.Length == 0)
            {
                throw new HubException(LanguageResources.Spoiler_ActionRequired);
            }

            var callingRoom = context.Repository.GetRoomByName(callerContext.RoomName);
            var message = System.Net.WebUtility.HtmlEncode(String.Join(" ", args));

            var matches = _hiddenPattern.Matches(message).Cast<Match>().ToList();

            if (matches.Any())
            {
                foreach (var match in matches)
                {
                    // Case 1: mixed visible/hidden
                    message = message.Replace(match.Value, String.Format(_hiddenFormat, match.Groups[1].Value));

                    var subMatches = _hiddenPattern.Matches(match.Groups[1].Value).Cast<Match>().ToList();

                    // Case 2: mixed visible/hidden/morehidden
                    if (subMatches.Any())
                    {
                        foreach (var subMatch in subMatches)
                        {
                            message = message.Replace(subMatch.Value, String.Format(_hiddenFormat, subMatch.Groups[1].Value));
                        }
                    }
                }
            }
            else
            {
                // Case 3: non-mixed, all hidden
                message = String.Format(_hiddenFormat, message);
            }

            context.NotificationService.SendHtmlMessage(callingUser, callingRoom, message);
        }
    }
}
