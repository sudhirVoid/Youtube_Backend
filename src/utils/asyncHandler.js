const asyncHandler = (requestFunction) => async (req, res, next) => {
    Promise.resolve(requestFunction(req, res, next)).catch((err)=>next(err));

    // alternative
    // try{
    //     await requestFunction(req, res, next);
    // }
    // catch(err){
    //     console.log('Got error in asyncHandler: ', err.msg);
    // }
}