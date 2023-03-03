const express = require('express'); //* express modülü yüklenir
const router = new express.Router(); //* yönlendiri objesi oluşturulur
const conn = require('../db/conn'); // conn değişkeni bağlantı kurulacak veri tabanı bağlantısı modülüne referans alır


// register user data
router.post('/create', (req, res) => { //*pos isteği için yapılandırma
 
    // console.log(req.body);

    const {name, email, age, mobile, work, add, desc} = req.body;  //* req.body üzerindekiler değişkenlere atanıyor

    if ( !name || !email|| !age || !mobile  || !work || !add || !desc ) { 
          res.status(422).json( 'Please fill all fields');
    }
    try {
        conn.query("SELECT * FROM users WHERE email = ?" , email,(err,result)=>{ //*ifadesiyle veritabanında aynı e-posta adresiyle kaydedilmiş kullanıcı verilerini sorguluyor. Eğer bu e-posta adresiyle kaydedilmiş bir veri varsa, 422 Unprocessable Entity hata koduyla bir hata yanıtı gönderiliyor.
            if(result.length){
                res.status(422).json('This Data Already exists');
            }else{ //* yoksa aynı emaille bir kullanıcı elseye giriyor
                conn.query("INSERT INTO users SET ?" ,{name, email, age, mobile, work, add, desc}, (err, result)=>{
                    if(err){
                        console.log("err" + err);
                    }else{
                        res.status(201).json(req.body);
                    }
                }) 
            }
        })
    } catch (error) {
        res.status(422).json(error);        
    }

}); 

module.exports = router;

