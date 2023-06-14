const express = require('express');
const router = express.Router();
const model = require('../models/Produto');

router.get('/todos', async (req, res, next) =>{

    produtos = await model.find();

    res.status(200).json({
        produtos 
    });
});

// Busca de Produto pelo Id
router.get('/:id', async (req, res, next) =>{
    const pId = req.params.id;

    try{

        const produto = await model.findById(pId);
        if(!produto){
            res.status(422).json({ message: 'Produto não encontrado!'});
            return;
        }
        res.status(200).json({produto});
        return;

    } catch(error){
        res.status(500).json({erro: error });
        return;
    }

    res.status(200).json({
        message: ' Busca de produto pelo Id '
    })

});

// Alterar produto
router.put('/:id', async(req, res, next) =>{
    const pId = req.params.id;    
    const produto = {name, description, valor} = req.body;

    const produtoNew = {
        pId,
        name, 
        description, 
        valor
    }

    console.log(`Produto new ${produtoNew}`);
    try{
        const produtoUpdated = await model.findOneAndReplace({ _id: pId}, produtoNew);

        console.log(`Produto atualizado.: ${produtoUpdated}`);
    
        if(produtoUpdated.matchedCount === 0){
            res.status(422).json({message: 'Produto não encontrado!'})
            return
        }

        res.status(200).json({
            message: 'Produto atualizado com suceso!',
            produtoUpdated
        })
        return;
    } catch(error){
        res.status(500).json({erro: error});
        return;
    }  
});


// Cadastrar produto
router.post('/register', async(req, res, next) =>{
    const {name, description, valor} = req.body;

    if(!name){
        res.status(400).json({ message: 'Nome do produto não informado!'});
        return
    }
    
    res.status(200).json({
        message: ' Produto incluido com sucesso!'
    })

    produtoNew = {
        name,
        description,
        valor
    }

    try{
        await model.create(produtoNew);
        res.status(201).json({message:'Produto criado com sucesso!'});
        return;
    }catch(err){
        res.status(500).json({erro: err});
        return;
    }

});

//Excluir produto 
router.delete('/:id', async(req, res, next) =>{
    const pId = req.params.id;
    try{
        const produto = await model.findById(pId);
        if(!produto){
            res.status(422).json({message: 'Produto não localizado!'});
            return;
        }

        await model.deleteOne({_id: pId});
        res.status(200).json({message: 'Produto excluido com sucesso!'})
        return;

    }catch(err){
        res.status(500).json({message: 'Erro ao excluir produto!', err});
        return;
    }

    res.status(200).json({
        message: ' Produto excluido com sucesso!'
    })

});




module.exports = router;