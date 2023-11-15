module.exports = function(err, req, res, next){

    res.format({
        json: ()=>{
            res.status(500).json({
                message:"Internal server Error",
                error: err.message,
            });
        },
        default: () => {
            res.status(500).send("<h1>Internal server Error<h1/>");
        }
    })

}