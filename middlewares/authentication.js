const authentication = (req,res,next) => {

    // res.send(req.session.userName)
    // console.log('ini sudah di authentication', req.session.userName);
    if(req.session.userName){
        next()
    }
    else{
        // res.send('anda tidak memiliki akses halaman ini')
        res.redirect('/')
    }
    
}

module.exports = authentication