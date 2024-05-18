class ApiError extends Error {
    constructor(
        statusCode,
        message = "This is on us. Please try again later.",
        stack = "",
        errors = []    
    ){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.data = null;
        this.success = false;

        if(stack){
            this.stack = stack;
        } else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}