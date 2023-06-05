const express = require('express');
const router = express.Router();

router.get('/todos', (req, res, next) =>{
    res.status(200).json({
        message: 'Retorna todos os produtos'
    });
});

router.get('/:id', (req, res, next) =>{
    const pId = req.param.id;

    res.status(200).json({
        message: ' Busca de produto pelo Id '
    })

});


router.put('/:id', (req, res, next) =>{
    const pId = req.param.id;

    res.status(200).json({
        message: ' Produto Alterado com sucesso!'
    })

});

router.post('/register', (req, res, next) =>{
    
    res.status(200).json({
        message: ' Produto incluido com sucesso!'
    })

});


router.delete('/:id', (req, res, next) =>{
    const pId = req.param.id;

    res.status(200).json({
        message: ' Produto excluido com sucesso!'
    })

});




module.exports = router;