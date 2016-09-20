using System.Runtime.Serialization;

namespace MyLiverpool.Data.Entities
{
    public enum MaterialType
    {
        Error = 0,
        [EnumMember(Value = "News")]
        News = 1,
        [EnumMember(Value = "Blog")]
        Blog = 2
    }
}
