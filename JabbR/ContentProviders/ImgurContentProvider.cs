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
            string format = @"<img src=""https://i.imgur.com/{0}.jpg"" />";

            if (_config.ProxyImages)
            {
                format = @"<img src=""proxy?url=http://i.imgur.com/{0}.jpg"" />";
            }

            return TaskAsyncHelper.FromResult(new ContentProviderResult()
            {
                Content = String.Format(format, id),
                Title = request.RequestUri.AbsoluteUri
            });
        }

        public override bool IsValidContent(Uri uri)
        {
            // not perfect, we have no way of differentiating eg http://imgur.com/random from a valid page
            // we should also look at rewriting non-ssl images from imgur to https://i.imgur.com rather than proxying at some point.
            bool isImgurDomain = uri.Host.Equals("imgur.com", StringComparison.OrdinalIgnoreCase) || 
                uri.Host.Equals("www.imgur.com", StringComparison.OrdinalIgnoreCase) ||
                uri.Host.Equals("i.imgur.com", StringComparison.OrdinalIgnoreCase);
            return isImgurDomain &&
                !uri.AbsolutePath.StartsWith("/a/", StringComparison.OrdinalIgnoreCase) &&
                !uri.AbsolutePath.Equals("/", StringComparison.OrdinalIgnoreCase) &&
                !uri.AbsolutePath.Contains(".");
        }
    }
}