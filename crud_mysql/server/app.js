
require('dotenv').config();

//* bir Express uygulaması oluşturarak bir HTTP sunucusu oluşturuyor.
const express = require('express'); //*express modülü yükleniyor.
const app = express(); //*bir Express uygulaması oluşturuluyor. Bu uygulama, app değişkenine atanıyor
const mysqli = require('mysql2'); //*mysql2 modülü yükleniyor.
const cors = require('cors'); //*cors modülü yükleniyor. Bu modül, Cross-Origin Resource Sharing (CORS) özelliğini sağlar ve farklı kaynaklardan gelen istekleri kabul etmek için kullanılır.
require("./db/conn");//* db klasöründe bulunan conn.js dosyası dahil ediliyor ve MySQL veritabanına bağlantı sağlanıyor.
const router = require('./Routes/router'); //* Bu dosya, express.Router sınıfı kullanılarak oluşturulmuş bir yönlendirici nesnesi içerir ve uygulama ile ilgili tüm yönlendirmeler burada tanımlanır.

const port = 8001;  //* uygulamanın çalışacağı port seçilir

// app.get("/", (req, res) => {
//     res.send("server start");
// });


// middleware
app.use(express.json()); //*ifadesiyle, gelen isteklerin gövdelerinin JSON formatında olacağı belirtiliyor. Bu sayede, gelen verileri daha kolay bir şekilde işleyebilmek mümkün oluyor.
app.use(cors()); //*ifadesiyle, CORS özelliği etkinleştiriliyor ve farklı kaynaklardan gelen istekler kabul ediliyor.

app.use(router); //*ifadesiyle, yönlendirici nesnesi uygulamaya ekleniyor ve uygulama ile ilgili tüm yönlendirmeler buradan yönetiliyor.

app.listen(port, ()=>{ //* ifadesiyle, HTTP sunucusu belirlenen port numarası üzerinden dinlemeye başlıyor. console.log("server starts at port no: " + port); ifadesiyle de, sunucunun başarıyla başlatıldığı konsola yazdırılıyor.
    console.log("server starts at port no: " + port);
})