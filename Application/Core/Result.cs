namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSuccess { get; set; }

        public T Value { get; set; }

        public string Error { get; set; }

        public static Result<T> Success(T value)
        {
            var result = new Result<T>()
            {
                IsSuccess = true,
                Value = value
            };

            return result;
        }

        public static Result<T> Failure(string error)
        {
            var result = new Result<T>()
            {
                IsSuccess = false,
                Error = error
            };

            return result;
        }
    }
}