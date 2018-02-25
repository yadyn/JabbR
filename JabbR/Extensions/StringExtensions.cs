using System.Collections.Generic;
using System.Linq;

namespace JabbR.Extensions
{
    public static class StringExtensions
    {
        public static bool HasValidBrackets(this string input)
        {
            var bracketsBalanced = true;

            var brackets = new Stack<char>();
            var bracketChars = new Dictionary<char, char>() { { '[', ']' } };

            foreach (var chr in input)
            {
                if (bracketChars.ContainsKey(chr))
                {
                    brackets.Push(chr);
                }
                else if (bracketChars.ContainsValue(chr))
                {
                    var set = new KeyValuePair<char, char>(brackets.Pop(), chr );
                    if (!bracketChars.Contains(set))
                    {
                        return false;
                    }
                }
            }
            if (brackets.Count > 0)
            {
                bracketsBalanced = false;
            }
            return bracketsBalanced;
        }
    }
}