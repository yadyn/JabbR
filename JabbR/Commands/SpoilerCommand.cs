using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using JabbR.Models;
using Microsoft.AspNet.SignalR;
using JabbR.Extensions;

namespace JabbR.Commands
{
    [Command("spoiler", "Spoiler_CommandInfo", "message", "user")]
    public class SpoilerCommand : UserCommand
    {
        private const string _hiddenFormat = @"<s>{0}</s>";

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



            if (message.Contains('[') && message.Contains(']') && message.HasValidBrackets())
            {
                //Case 1: spoilers wrapped with brackets.
                message.Replace("[", "<s>").Replace("]", "</s>");
            }
            else
            {
                // Case 2: non-mixed, all hidden
                message = String.Format(_hiddenFormat, message);
            }

            context.NotificationService.SendHtmlMessage(callingUser, callingRoom, message);
        }
    }
}
