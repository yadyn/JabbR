using System;
using System.ComponentModel.Composition;
using System.Linq;
using System.Threading.Tasks;
using JabbR.ContentProviders.Core;
using JabbR.Services;

namespace JabbR.ContentProviders
{
    public class ImgurContentProvider : CollapsibleContentProvider
    {
        private readonly IJabbrConfiguration _config;

        [ImportingConstructor]
        public ImgurContentProvider(IJabbrConfiguration config)
        {
            _config = config;
        }

        protected override Task<ContentProviderResult> GetCollapsibleContent(ContentProviderHttpRequest request)
        {
            string id = request.RequestUri.AbsoluteUri.Split('/').Last();
            string format = @"<img src=""http://i.imgur.com/{0}.jpg"" />";

            if (_config.ProxyImages)
            {
                format = @"<img src=""proxy?url=http://i.imgur.com/{0}.jpg"" />";
            }

            return TaskAsyncHelper.FromResult(new ContentProviderResult()
            {
                Content = String.Format(format, id),
                Title = request.RequestUri.AbsoluteUri.ToString()
            });
        }

        public override bool IsValidContent(Uri uri)
        {
            // exclude imgur album urls as they won't work without fancy json api integration
            return uri.AbsoluteUri.StartsWith("http://imgur.com/", StringComparison.OrdinalIgnoreCase)
                && !uri.AbsoluteUri.Contains("imgur.com/a/");
        }
    }
}