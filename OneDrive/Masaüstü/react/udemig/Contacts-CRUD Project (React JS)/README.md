# Vite

- Klasik react uygulamalarına göre daha güncel olan bu metot sayesinde daha hızlı şekilde uygulama oluşturup ayağa kaldırırız.

# Vite ile oluşturlan react uygulaması && Klasik react uygulaması

- Vite ile oluşturulan bir proje klasik react uygulamasına göre kullanmadığımız bağımlılıkları içermediğinden çok daha hızlı şekilde oluşturulur.Bunun yanında klasik react uygulmasına göre daha performanslı çalışır.Build işlemi de klasik uygulamaya göre çok daha hızlıdır.

- HMR: Vite projesinin değişiklikleri tarayıcaya çok daha hızlı bir şekilde aktarmasını sağlar.

# JSON SERVER

- Bir proje temel olarak iki kısımından oluşur.

- i-) Frontend
- ii-) Backend

- Proje geliştirken api a istek atar verileri alır bu verilerle arayüz oluştururuz.Fakat elimizde bir api'ın bulunmadığı yada api'ın hazırlanmasının uzun süreceği durumlarda sanki bir api a sahibiz gibi geliştirme yapmamıza olanak sağlayan bir kütüphane mevcuttur.`json-server` kütüphanesi sayesinde fake bir api elde ederiz.

- Bu fake api oluşturulurken önce `npm install json-server` ile kütüphane projemize indirilir.
- Sonrasında proje klasöründe `db.json` dosyası oluşturulur.Burada önemli kısım bu dosyanın src klasörüyle aynı dizinde olmasıdır.
- Bu `db.json` dosyası içerisinde veriler oluşturulur.
- `npx son-server db.json` komutuyla ilgili fake api ayağa kaldırılır

# HTTP METOTLARI

- Server ve client arasında arasında veri alışverişi sağlamak için kullanılır.

- 1. GET:
- Serverdan verileri almak için kullanılır.

- 2. POST:
- Server a veri göndermek için kullanılır.Gönderilecek veriler isteğin body'si içerisine eklenir.

- 3. PUT:
- Serverdaki bir veriyi güncellemek için kullanılır.Bu metot veriyi tamamen güncellemek için kullanılır.

- 4. PATCH:
- Serverdaki veriyi güncellemek için kullanılır.Bu metot verinin sadece bir kısmını güncellemek için kullanılır.

- 5. DELETE:
- Serverdaki veriyi silmek için kullanılır.

# Axios:

- Güncel projelerin büyük bir çoğunda kullanılan axios kütüphanesi bizim için api'a istek attığımızda büyük kolaylıklar sağlar.

- Gelen isteğin jsondan js nesnesine çevirilmesi işlemini axios yapar
- Gönderilecek isteğin bodysinde yer alacak verinin json a çevirilmesi işlemini yine axios yapar
- Parametreleri işler
- İsteklere zamana bağlı kontrol özelliği ekleme yeteneği sağlar
- Uzun uzun url yazmak yerine bu urlleri özelleştirme yeteneği sunar

  1.28
