// configurando model
const mongoose = require('mongoose')
// definindo variavel DonorsSchema
const DonorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    blood: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
// registrando model na aplicação
const Dados = mongoose.model("Donors", DonorsSchema);
// exportando
module.exports = Dados;