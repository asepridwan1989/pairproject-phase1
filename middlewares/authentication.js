const authentication = (req,res,next) => {

    if(req.session.userName){
        next()
    }
    else{
        // res.send('anda tidak memiliki akses halaman ini')
        res.redirect('/')
    }

    
}

module.exports = authentication