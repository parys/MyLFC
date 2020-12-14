namespace MyLfc.Common.Web
{
    public class SignalrEntity<T> where T: class
    {
        public ActionType Type { get; set; }

        public T Entity { get; set; }
    }

    public enum ActionType : int
    {
        Add = 1,
        Update = 2,
        Delete = 3
    }
}
