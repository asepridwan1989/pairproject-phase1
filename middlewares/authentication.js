const authentication = (req,res,next) => {
    // res.send('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',req.session)
    if(req.session.userName){
        // res.send(req.session)
        next()

    }
    else{
        // res.send('anda tidak memiliki akses halaman ini')
        let msg = "Silakan login terlebih dahulu!!!"
            let fail = {msg: msg}
            res.render('login', {fail})
    }

    
}

module.exports = authentication