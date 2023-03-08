//*bir MySQL veritabanına bağlanmak için kullanılan bir bağlantı (connection) nesnesi oluşturuyor.

const mysql = require('mysql2'); //* mysql2 modülü yükleniyor.

   //*mysql.createConnection metodu kullanılarak bir bağlantı nesnesi oluşturuluyor. Bu metodun aldığı obje parametresi, veritabanına bağlanmak için gerekli olan kullanıcı adı (user), sunucu adresi (host), şifre (password) ve veritabanı adı (database) gibi bilgileri içerir.
const conn = mysql.createConnection({ 
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

//*conn.connect((err)=>{ ... }); ifadesiyle oluşturulan bağlantı nesnesi, connect metoduyla MySQL veritabanına bağlanıyor. Eğer bir hata oluşursa, throw err ifadesiyle hata fırlatılıyor ve program sonlanıyor. Aksi takdirde, "DB connected" ifadesi konsola yazdırılıyor ve bağlantı başarılı bir şekilde gerçekleşiyor.
conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});

//*Son olarak, module.exports = conn; ifadesiyle bu bağlantı nesnesi dışarıya açılıyor ve başka dosyalar tarafından kullanılabiliyor hale geliyor. Bu sayede, const conn = require('../db/conn'); şeklindeki bir kod bloğuyla, bu bağlantı nesnesi başka dosyalarda kullanılabilir.
module.exports = conn;