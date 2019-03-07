// npm init
// npm install express --s

const express = require("express")
const app = express()

let port = process.env.PORT || 3000
let data_lampu = {}

app.listen(port,function(){
    console.log("Server is running")
})

app.get("/",function(req,res){
    res.send(data_lampu)
})

app.get("/lampu1/:lampu1",function(req,res){
    data_lampu = {
        lampu1:req.params.lampu1
    }
    res.redirect("/")
})

//gitssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDdfWkFFzSoLptYXVMh7twM5Ia6qmzFtZt/P0o9qJhNwmkKxYoUeZqKcHDRDD1OIyBpymG80CrpLUCdoM3h/W92beWTlpbJctDb6Lvytm7KeHo6R5MCACBxtL2Vv6/48+md9aK9znwd7IyPiVZ15ozk4nm5mjR5VD4qavFs53dXMrsuxKhHKpIUTVDS9vGuJefUjcRcQwwFPdlez2vRRLEI/9j4QCOf7Ft9aKHl9LOf3uX+f2UsXm+6La0MrqsxKTuaxdaccXYeMQrqiCkPfDx2Bc9+FaMCo5RRPsQkzLdnG2g2Yve+Ifq7dkwcx3lHPt2v9yFLzOh7wHbxR/oa6mr4ORA8O6BFf6jbo9M54b6Y1yTDMTAxzE8hCJ6iTC9B+3dUzGdg5jQFcLQCNp3wOCH8YafQGEO9fIWZxd4nHktenn/9qJxIiZ3LMiHhI1EK7H081CdVLuJ/5xc+jcmtVFy6DzBe87p4aLIVxNfNFV1+RndQWiRbE4TRFbgpCRVnasSCwoBnTZCqNvS98O7QPLeCz6ecERySl1jVWDHlNRlJ6HoZc3HiBipEhx438BeFULbTp6ReevViuvhA9C5zu/jyIoLWfatHSs041s9I7Zb0rHEa4KS2+EJYD8jqzvpJSuKh6QMrPc67/JNZ7BVuHOSgY4Hs3H3vaCFm+G9Ss5yhmQ== raihanabila1807@gmail.com
