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

// get userdata 

router.get('/getusers',(req,res)=>{

    conn.query("SELECT * FROM users",(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});

// user delete api

router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params; 

    conn.query("DELETE FROM users WHERE id = ?",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});

// get single user

router.get("/induser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("SELECT * FROM users WHERE id = ? ", id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json("result");
        }
    })
})

// update users api 

router.patch("/updateuser/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;

    conn.query("UPDATE users SET ? WHERE id = ? ", [data.id],(err,result)=>{
        if(err){
            res.status(422).json({message: "error"});
        }else{
            res.status(201).json(result);
        }
    })
});

module.exports = router;

