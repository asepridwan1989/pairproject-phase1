const model = require('../models')

const getRobotName = function(paramRobotId){
    // console.log('ini paramterrrrr',paramRobotId)
    model.Robot.findOne({
        where:{
            id:paramRobotId
        }
    })
    .then( robot => {
        // console.log('ini nama robotttttt',robot.name)
        let nameRobot = robot.name 
        return nameRobot
        // cb(nameRobot)
    })
    .catch( error => {
        console.log('eror dari getRobotName',error)
    })

}

module.exports = getRobotName