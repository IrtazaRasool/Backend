const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
  };
};

export { asyncHandler };

/*
//when using trycatch we will use higher order function which is using funtion as a parameter inside a funtion

// simple call back
const asyncHandler = ()=>{}

// call back accepting a funtion as a parameter

const asyncHandler = (func) =>{
    //funtion inside another function
    //most of the time outer {} are not user
     ()=>{} 
    }

const asyncHandler (func)=> async ()=>{}


// it is a wrapper funciton
const asyncHandler (func) =>()=>{
    try {
            await func(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}

*/
