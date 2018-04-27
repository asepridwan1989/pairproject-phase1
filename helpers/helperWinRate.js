const model = require('../models')

const winRate = function(matchs){
    let wincount = 0
    let winrate = 0
    matchs.forEach(function(match){
        if(match.status == 'win'){
            wincount++
        }
    })
    if(matchs.length == 0){
        return 0
    }
    winrate = Math.round((wincount/matchs.length)*100)
    return winrate
}

module.exports = winRate