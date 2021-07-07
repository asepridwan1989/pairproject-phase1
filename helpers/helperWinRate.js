const model = require('../models')

const winRate = function(id, objPengguna){ 
    console.log('id>>>>>>>>>',id)
    console.log('obj===========>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',JSON.parse(JSON.stringify(objPengguna)))   
    for(let i=0; i<objPengguna.length; i++){
        console.log('>>>>>>>>>>>',JSON.parse(JSON.stringify(objPengguna[i])))
    }
    // let wincount = 0
    // let winrate = 0
    // matchs.forEach(function(match){
    //     if(match.status == 'win'){
    //         wincount++
    //     }
    // })
    // if(matchs.length == 0){
    //     return 0
    // }
    // winrate = Math.round((wincount/matchs.length)*100)
    // return winrate
}

module.exports = winRate