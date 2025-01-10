declare type DatabaseFields={
    _id:string,
    createdAt:string
}
declare type SuccessfulResponse<T>={
    status:"success",
    statusCode:number,
   data:T
}
declare type ValidationeError={
   field:string,
   errorMessage:string
}
declare type ErrorResponse={
    status:"error",
    statusCode:number,
   message:string|ValidationeError
}
declare type APIResponse<T>=SuccessfulResponse<T>|ErrorResponse;