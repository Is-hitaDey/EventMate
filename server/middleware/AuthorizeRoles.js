const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");


// This middleware factory returns a middleware function
const AuthorizeRoles = (...roles) => {
    return AsyncHandler(async (req, res, next) => { 
        if (!req.user || !req.user.role) {
            throw new ApiError(403, "Access Denied: User information or role not found. Please ensure you are logged in.");
        }

       //check for authorization
        if (!roles.includes(req.user.role)) {
            throw new ApiError(
                403,
                `Access Denied: Your role ('${req.user.role}') is not authorized to access this resource.`
            );
        }

        next(); 
    });
};

module.exports = AuthorizeRoles;
