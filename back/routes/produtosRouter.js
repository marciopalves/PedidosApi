const express = require('express');
const router = express.Router();
const model = require('../models/Produto');


// Buscar todos
router.get('/todos', async (req, res, next) =>{

    const produtos = await model.find();

    res.status(200).json({
        produtos
    });
    return;
});

// Buscar pelo Id 
router.get('/:id', async(req, res, next) =>{
    const pId = req.params.id;

    try{
        const produto = await model.findById(pId);
        if(!produto){
            res.status(422).json({message: 'Produto não localizado!'});
            return;
        }

        res.status(200).json({
            produto
        });
        return;

    }catch(err){
        res.status(500).json({message: 'Erro ao buscar registro!'})
        return;
    }   
});

// Alterar registro
router.put('/:id', async (req, res, next) =>{
    const pId = req.params.id;

    try{
        const { nome, descricao, valor } = req.body;

        const produtoNew = {
            nome, 
            descricao,
            valor
        }

        const produtoUpdated = await model.findOneAndReplace({_id: pId}, produtoNew);

        if(produtoUpdated.matchedCount === 0){
            res.status(422).json({
                message: 'Produto não localizado!'
            });
            return;
        }

        res.status(200).json({message: 'Produto atualizado com sucesso!', produtoUpdated});
        return;

    }catch(err){
        res.status(500).json({ message: 'Erro ao alterar registro!', erro: err});
        return;
    }
});

// Cadastrar produto 
router.post('/register', async (req, res, next) =>{   
    
    const { nome, descricao, valor } = req.body;

    if(!nome){
        res.status(400).json({message: 'O nome do produto é obrigatório!'});
        return;
    }

    const produtoNew = {
        nome,
        descricao,
        valor
    }

    try{
        await model.create(produtoNew);
        res.status(201).json({
                message: 'Produto criado com sucesso!',
                produtoNew
            });
        return;

    }catch(err){
        res.status(500).json({message: 'Erro ao cadastrar produto!', erro: err});
        return;
    }

});

// Apagar registro 
router.delete('/:id', async (req, res, next) =>{
    const pId = req.params.id;

    try{
        const produto = await model.findById(pId);

        if(!produto){
            res.status(422).json({message: 'Produto não encontrado!'});
            return;
        }

        await model.deleteOne({_id: pId});
        res.status(200).json({message: 'Produto excluido com sucesso!'});
        return;

    }catch(err){
        res.status(500).json({ message: 'Erro ao apagar registro!', erro: err});
		return;
    }
});

module.exports = router;