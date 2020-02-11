const express = require('express')
const router = express.Router()


router.get('/comentarios/:postid',(req, res)=>{
    res.json({
        conteudo: 'Comentado, parabens',
        autor: 'Michelangelo'
    })   
})

module.exports = router