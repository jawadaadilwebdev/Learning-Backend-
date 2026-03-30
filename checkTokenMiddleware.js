let checkToken = (req,res,next)=>{
    if(req.query.token=="" || req.query.token==undefined){
        return res.send({
            status : 0 ,
            msg : "Plz fill the token"
        })
    }
    if(req.query.token!=process.env.MY_TOKEN){
        return res.send({
            status : 0 ,
            msg : "Plz fill the correct token"
        })
    }
    next()
}

module.exports={checkToken}