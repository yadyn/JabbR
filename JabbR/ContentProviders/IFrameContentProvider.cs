using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using JabbR.ContentProviders.Core;

namespace JabbR.ContentProviders
{
    public abstract class IFrameContentProvider : EmbedContentProvider
    {
        public override string MediaFormatString
        {
            get
            {
                return "<iframe src=\"" + this.GetIFrameVideoEmbedUrl() + "\" style=\"width: 532px; height: 344px; border:0; max-width: 100%;\" frameborder=\"0\"></iframe>";
            }
        }

        protected abstract string GetIFrameVideoEmbedUrl();
    }
}
