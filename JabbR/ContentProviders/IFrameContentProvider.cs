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
                return "<iframe src=\"{0}\" style=\"width: 100%; height: 344px; border:0;\" frameborder=\"0\"></iframe>";
            }
        }
    }
}
