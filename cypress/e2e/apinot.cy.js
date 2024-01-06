/*
Firmalarda yazdiginiz kodlari takim arkadaslariniz gozden gecirirler. 
Hata yaptiksak duzeltmemizi isterler. Hata 2 turlu olur. 
Yazdiginiz kodun calismamasi durumu asla olmamalidir. Calismayan kodu arkadaslariniza gondermemeniz gerekir. 
Ama kodun calismasi yeterli degildir. Bazen kod calisir ama kod yazma kurallarina uymamissinizdir. 
Kod yazmanin standartlarindan birisi tekrara dusmemektir. Ikincisi mumkun oldugu kadar kisa kod yazilmalidir.
 Ucuncusu yazdiginiz kod okunur olmalidir. Dorduncusu ise data ile
ana code'un birbirinden ayrilmasidir. Data database'de olur, ana kodlar application'in icinde olur. 
Application'daki code'lar database'e gider, datayi alir ve kullanir. 
O yuzden kod yazarken bu ikisi birbirinden hep ayrilir.
(baseUrl' bir yere koymamiz buna ornektir. 
Data ile ana kodu ayirmis oluyoruz. Ayrica tekrarli kod yazimi da yapmamis oluyoruz. 
Boylelikle baseUrl ileride degisirse, onu 1000 kere kullandiysaniz 1000 kere degistirmekten kurtulmus oluyorsunuz. 
Data'dan ayirdigimiz icin baseUrl'1  sadece 1 kere 
degistirmek bizim icin yeterlidir.)



const femaleCount = response.body.data.filter((user) => user.gender === 'female').length;
const maleCount = response.body.data.filter((user) => user.gender === 'male').length;

//*Female user count should be less than or equal to male user count
expect(femaleCount).to.be.lte(maleCount);
!  lte  ==>  "less than or equal to"  
//* ki değerin birbirine küçük veya eşit olması durumunu kontrol eder.

!

?Ensure that the response body is an array
! an array
expect(response.body).to.be.an('array');   
 to.be.an('array'): 
Bu kısım, beklentinin array (dizi) tipinde bir nesne olduğunu belirtir. 
Yani, response.body bir dizi olmalıdır.


? Ensure that there are at least 1 user in the response
expect(response.body).to.have.length.greaterThan(0);

? Validate properties of the first user in the response
      const firstUser = response.body[0];
      expect(firstUser).to.have.property('id');
      expect(firstUser).to.have.property('name');
      expect(firstUser).to.have.property('email');

? expect(response.body).to.have.length.greaterThan(0);
Bu kısım, beklenen durumun response.body ifadesinin uzunluğunun (length) 0'dan büyük olması olduğunu belirtir. 
Yani, API yanıtının içinde en az bir öğe olmalıdır.


?      const expectedUsers = ['Sanka Asan','Shashi Namboothiri', 'Kamla Shah']; //2.yol
?       expectedUsers.forEach((userName) => {
?         const userExists = response.body.data.some((user) => user.name === userName);
?        expect(userExists).to.be.true;

response.body.data.some((user) => user.name === userName): Bu kısım, 
response.body.data içindeki herhangi bir kullanıcının (user) adının userName ile aynı olup olmadığını kontrol eder.
 some fonksiyonu, dizi içindeki en az bir öğe belirtilen koşulu sağlarsa true döner.

expect(userExists).to.be.true;: Bu kısım, userExists değişkeninin true olup olmadığını kontrol eder. 
Yani, belirtilen userName ile aynı isme sahip bir kullanıcı bulunuyorsa, bu ifade doğru olmalıdır.



*/

//! cpress headerlardaki basliklarda kucuk harflerle calisir. O nedenle tirnak icine yazarken kucuk harfle yazariz