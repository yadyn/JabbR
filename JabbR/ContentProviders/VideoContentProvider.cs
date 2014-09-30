using System;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using JabbR.ContentProviders.Core;
using JabbR.Infrastructure;
using JabbR.Services;
using JabbR.UploadHandlers;
using Microsoft.Security.Application;
using Ninject;

namespace JabbR.ContentProviders
{
    public class VideoContentProvider : CollapsibleContentProvider
    {
        private readonly IKernel _kernel;
        private readonly IJabbrConfiguration _configuration;

        public VideoContentProvider(IKernel kernel)
        {
            _kernel = kernel;
            _configuration = kernel.Get<IJabbrConfiguration>();
        }

        protected override Task<ContentProviderResult> GetCollapsibleContent(ContentProviderHttpRequest request)
        {
            string format = "<video width=\"640\" height=\"360\" preload=\"none\" controls=\"\" style=\"display: block;\"><source src=\"{0}\" type=\"{1}\">Sorry, you don't have HTML5 video, but you can try to view it directly: <a href=\"{0}\">{0}</a></video>";
            string href = request.RequestUri.ToString();

            return TaskAsyncHelper.FromResult(new ContentProviderResult()
            {
                Content = String.Format(format, Encoder.HtmlAttributeEncode(href), Encoder.HtmlAttributeEncode(GetContentType(request.RequestUri))),
                Title = href
            });
        }

        public override bool IsValidContent(Uri uri)
        {
            return IsValidVideoPath(uri);
        }

        public static bool IsValidVideoPath(Uri uri)
        {
            string path = uri.LocalPath.ToLowerInvariant();

            return path.EndsWith(".webm") ||
                   path.EndsWith(".mp4") ||
                   path.EndsWith(".ogv");
        }

        public static string GetContentType(Uri uri)
        {
            string extension = Path.GetExtension(uri.LocalPath).ToLowerInvariant();

            switch (extension)
            {
                case ".webm":
                    return "video/webm";
                case ".mp4":
                    return "video/mp4";
                case ".ogv":
                    return "video/ogg";
            }

            return null;
        }
    }
}
