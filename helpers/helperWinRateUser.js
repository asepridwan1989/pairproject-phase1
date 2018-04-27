const model = require('../models')

const winRateUser = function(matches){
    let winUsercount = 0
    let winUserrate = 0
    let battlePoint = 0
    let battlecount = 0
    matches.forEach(function(match){
        match.Matches.forEach(function(battlepoint){
            battlecount ++
            if(battlepoint.RobotMatch.status == 'win'){
                battlePoint += battlepoint.betPoint
                winUsercount ++
            }
            else{
                battlePoint -= battlepoint.betPoint
            }
        })
    })

    // battlePoint.toLocaleString()
    if(battlecount == 0){
        winUserrate = 0
    }
    else{
        winUserrate = Math.round((winUsercount/battlecount)*100)
    }
    return {winUserrate, battlePoint}

}

module.exports = winRateUser