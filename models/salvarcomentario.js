const db = require('./db')

const Comentario = db.sequelize.define('comentarios', {
    nome:{
        type: db.Sequelize.STRING
    },
    comentario:{
        type: db.Sequelize.STRING
    }
})

//comentario.sync({force:true})

module.exports = Comentario