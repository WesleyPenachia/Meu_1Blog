const express = require('express')
const router = express.Router()


router.get('/postagens',(req, res)=>{
    res.json({
        titulo: 'Blog Penachia',
        conteudo: 'A publicação teste',
        autor: 'Wesley Penachia'
    })   
})

module.exports = router