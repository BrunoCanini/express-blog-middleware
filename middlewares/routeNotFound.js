module.exports = function (req, res, nex){

    res.format({
        json: ()=>{
            res.status(404).json({
                message:"Error 404 not found",
                // error: err.message,
            });
        },
        default: () => {
            res.status(404).send("<h1>Error 404 not found<h1/>");
        }
    })

}