myToken=12345 
let checkToken = (req,res,next)=>{
    if(req.query.token=="" || req.query.token==undefined){
        return res.send({
            status : 0 ,
            msg : "Plz fill the token"
        })
    }
    if(req.query.token!=myToken){
        return res.send({
            status : 0 ,
            msg : "Plz fill the correct token"
        })
    }
    console.log("Done with Middleware");
    next()
}

module.exports={checkToken}