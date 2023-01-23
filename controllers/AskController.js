class AskController{
    async create(req, res){
       return res.render('ask')
    }
}

module.exports = new AskController();