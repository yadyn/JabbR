using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using JabbR.ContentProviders.Core;

namespace JabbR.ContentProviders
{
    public class VimeoContentProvider : IFrameContentProvider
    {
        private static readonly Regex VimeoRegex = new Regex(
            @"https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)",
            RegexOptions.IgnoreCase | RegexOptions.IgnorePatternWhitespace);

        public override IEnumerable<string> Domains
        {
            get
            {
                yield return "http://www.vimeo.com";
                yield return "https://www.vimeo.com";
                yield return "http://vimeo.com";
                yield return "https://vimeo.com";
            }
        }

        protected override IList<string> ExtractParameters(Uri responseUri)
        {
            Match match = VimeoRegex.Match(responseUri.ToString());
            if (match.Groups.Count < 4 || String.IsNullOrEmpty(match.Groups[3].Value))
            {
                return null;
            }

            string videoId = match.Groups[3].Value;
            return new List<string> { videoId };
        }

        protected override string GetIFrameVideoEmbedUrl()
        {
            return "//player.vimeo.com/video/{0}";
        }
    }
}
