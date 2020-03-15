// configurando servidor
const express = require('express');
const server = express();
const mongoose = require('mongoose');

// configurando arquivos estáticos
server.use(express.static('./public'));
// habilitar o body do formulário
server.use(express.urlencoded({extended: true}));
// iniciando bd mongodb
mongoose.connect("mongodb://192.168.99.100:27017/donors", {useNewUrlParser: true, useUnifiedTopology: true});

// requerendo model na aplicação
var Dados = require('./src/models/donors');

// configurando o template engine
const nunjucks = require('nunjucks');
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

// configurando a apresentação da página
server.get("/", (req, res) => {
    Dados.find().then((donors) => {
        res.render('index.html', {donors})
    }).catch((err) => {
        console.log("Erro ao obter dados: " + err);
    })
});
// rota de postagem de usuário no bd
server.post("/adddonors", (req, res) => {
    // pegar os dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    // condição
    if(name == "" || email == "" || blood == "") return res.send("Todos os campos precisam ser preenchidos.");

    // salvar os dados no bd 
    Dados.create({
        name: name,
        email: email,
        blood: blood,
    }, function(err) {
        if(err) return res.send("Erro no banco de dados, ao salvar usuário.")

        // resposta após adicionar
        return res.redirect("/")
    })

})
// rota para exibir todos os dados do usuário a partir de seu id
server.get("/info/:id", (req, res) => {
    // buscando no banco usuário pelo id
    Dados.findById(req.params.id).then((donors) => {
        res.render('./src/info.html', {donors})
    }).catch((err) => {
        res.send("Falha ao obter dados do usuário")
    });

});
// rota para atualizar dados do usuário a partir do id
server.post('/editinfo', (req, res) => {
    Dados.findByIdAndUpdate({_id: req.body._id}).then((dados) => {
        dados.name = req.body.name
        dados.email = req.body.email
        // verificando se foi salvo o novo dado
        dados.save().then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send('FALHA AO ATUALIZAR USUÁRIO' + err)
        })

    })
})
// rota para deletar usuário pelo id
server.get("/deleteuser/:id", (req, res) => {
    // removendo usuário do bd a partir do id
    Dados.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/');
    }).catch((err) => {
        return res.send("ERRO AO DELETAR USUÁRIO: ", + err);
    })
})
// ligando o servidor
server.listen(8081, function() {
    console.log("Iniciei o servidor");
})