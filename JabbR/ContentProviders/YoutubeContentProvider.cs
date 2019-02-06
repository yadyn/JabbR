using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using JabbR.ContentProviders.Core;

namespace JabbR.ContentProviders
{
    public class YouTubeContentProvider : IFrameContentProvider
    {
        // Regex taken from this SO answer: http://stackoverflow.com/a/5831191
        private static readonly Regex YoutubeRegex = new Regex(
            @"# Match non-linked youtube URL in the wild. (Rev:20111012)
            https?://         # Required scheme. Either http or https.
            (?:[0-9A-Z-]+\.)? # Optional subdomain.
            (?:               # Group host alternatives.
              youtu\.be/      # Either youtu.be,
            | youtube\.com    # or youtube.com followed by
              \S*             # Allow anything up to VIDEO_ID,
              [^\w\-\s]       # but char before ID is non-ID char.
            )                 # End host alternatives.
            ([\w\-]{11})      # $1: VIDEO_ID is exactly 11 chars.
            (?=[^\w\-]|$)     # Assert next char is non-ID or EOS.
            (?!               # Assert URL is not pre-linked.
              [?=&+%\w]*      # Allow URL (query) remainder.
              (?:             # Group pre-linked alternatives.
                [\'""][^<>]*> # Either inside a start tag,
              | </a>          # or inside <a> element text contents.
              )               # End recognized pre-linked alts.
            )                 # End negative lookahead assertion.
            [?=&+%\w-]*       # Consume any URL (query) remainder.",
            RegexOptions.IgnoreCase | RegexOptions.IgnorePatternWhitespace);

        private static readonly Regex TimestampRegex = new Regex(@"(?:\&|\?)t=(\d+)", RegexOptions.IgnoreCase | RegexOptions.IgnorePatternWhitespace);

        public override IEnumerable<string> Domains
        {
            get
            {
                yield return "http://www.youtube.com";
                yield return "https://www.youtube.com";
                yield return "http://youtu.be";
                yield return "https://youtu.be";
            }
        }

        protected override IList<string> ExtractParameters(Uri responseUri)
        {
            var url = responseUri.ToString();
            var videoIdMatch = YoutubeRegex.Match(url);
            if (videoIdMatch.Groups.Count < 2 || String.IsNullOrEmpty(videoIdMatch.Groups[1].Value))
            {
                return null;
            }

            string videoId = videoIdMatch.Groups[1].Value;
            string startTime = "0";

            var timestampMatch = TimestampRegex.Match(url);

            if (timestampMatch.Groups.Count > 1 && !String.IsNullOrEmpty(timestampMatch.Groups[1].Value))
            {
                startTime = timestampMatch.Groups[1].Value;
            }

            return new List<string> { videoId, startTime };
        }

        protected override string GetIFrameVideoEmbedUrl()
        {
            return "https://www.youtube.com/embed/{0}?enablejsapi=1&start={1}";
        }
    }
}
