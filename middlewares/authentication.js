const authentication = (req,res,next) => {

// if(req.session)
    // res.send('ini sudah masuk ke authentication')
    console.log(req.session.email);
    
}

module.exports = authentication