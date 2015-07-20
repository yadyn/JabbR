using System;
using System.Linq;
using JabbR.Models;
using Microsoft.AspNet.SignalR;

namespace JabbR.Commands
{
    [Command("xyzzy", "Xyzzy_CommandInfo", "note", "user")]
    public class XyzzyCommand : UserCommand
    {
        public override void Execute(CommandContext context, CallerContext callerContext, ChatUser callingUser, string[] args)
        {
            ChatRoom room = context.Repository.VerifyUserRoom(context.Cache, callingUser, callerContext.RoomName);

            room.EnsureOpen();

            var content = String.Join(" ", args);

            context.NotificationService.OnXyzzy(room);
        }
    }
}