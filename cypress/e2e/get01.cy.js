/* 
Bir fonksiyonu test ederken hangi senaryoyu test ettigimizi once yazariz. Kodlarimiza biz ya da bir baskasi daha sonra tekrar baktiginda anlasilir olmasi icin bu yapilir. 
Automation yapmadan once acik ve secik bir sekilde neyi test ettigimizi birer birer yazmaliyiz. Bu yazdigimiz seye test case denir. Test Case yazmanin farkli yollari vardir.
Biz Gherkin Language ogrendik. Herkesin anlayacagi basit bir dildir. 4 anahtar kelime kullanir
    Gherkin language
    Given: Kelimesinden sonra on gereksinimler yazilir. 
           Ornegin GET Metod'u icin endpoint bir prerequisite dir.
           POST metodu icin endpoint ve payload(Post'da yollanan body icindeki data) prerequiste'dir.
           DELETE icin sadece end point bir prerequisite dir.
           Bazen de dokumanda "Yollanan data mutlaka json formatinda olmalidir." yazabilir. Header'da istenen bir sey de olabilir.

    When: Kelimesinden sonra yapilacak is yazilir.
    Ornegin GIVEN endpoint WHEN get request -> Verilen endpoint'e get request yap demektir.     
  
    Then: Istenen sonuclar yazilir.
    Ornegin GIVEN endpoint WHEN get request THEN STATUS CODE IS 200, status text is OK, Response time is less than 300 ms 
    Response body ve header'da soyle olmali yazilabilir.
    
    And: Yukaridaki 3 kelime icin birden fazla giris yapilacaksa aralarina And yazilir.
    Ornegin GIVEN endpoint WHEN get request THEN STATUS CODE IS 200 AND status text is OK AND Response time is less than 300 ms 

    Ornek Test case
    Given                                            Format olarak boyle yazilir. Given yazilip alt satira gecilir. 
    https://restful-booker.herokuapp.com/booking/3
    When
       User sends a GET Request
    Then
       HTTP Status code should be 200
    And
       Status text should be OK
    And 
       Response time should be less than 300ms
    And
       Response body should be JSON Data Type    Is yerine daha cok "should be" kullanilir.
    Cypress'de bir seyi automate etmek icin describe method'u kullanilir. 
    */
    describe("GET Method Testing", () => {
        /*
        Get01 yerine senaryoyu aciklayan cumle de yazilabilir. 
         */
        it("get01", () => {
    
            // i) Set the EndPoint(Butun method'lar endpoint'e ihtiyac duyacagi icin ilk onu set ederiz. Endpoint degismeyen sabit bir datadir. Const kullandik.)
    
            const url = "https://restful-booker.herokuapp.com/booking/3";
    
            // ii) Set the payload (Post,put ve patch isleminde bu adim kullanilir.)
    
            // iii) Send the request and get the response. Cypress'deki request methoduna ulasmak icin cy.request() yaziyoruz.
    
            // request() 5 method'da da kullanildigi icin cypress'a hangisi icin kullanmasi gerektigini soyleyecegiz.
            // Coding'de data ile ana kod birbirinden hep ayri tutulur. 
            // Mesela bir app'te datalar database'de tutulur. Code'lar ise app icinde yer alir. Database'deki datayi application'un icine koyarsaniz o hem kodlari
            // sisirir hem de guvensiz hale getirir. Bu nedenle asagida endpoint yerine url degiskenini kullandik
            cy.request({                 // request method'u postman'deki send tusuna basmakla esdegerdir.
                method: "GET",
                url: url
            }).then((response) => {  // Kodu okunur yapmak icin response yazdik.
    
                // response'i developer console'da gorelim.
                console.log(response.body);
                // Automation yaparken response'i console'da yazdirmayacagiz. Ama kodu yazarken api'in size ne verdigini gorurseniz daha rahat calisirsiniz.
    
                // Response'i soldaki Cypress Console'unda gorelim. Inspect yapmamiza gerek kalmayacak.
                cy.log(JSON.stringify(response.body)); // Response body'i JSON formatinda ve String data type'inda gormek istiyoruz.
                // Boylece api'dan gelen response solda request'in bilgilerinin altinda gozukuyor.
                // Ama automation bittiginde bu kodu silmemiz gerekir. Sadece kod yazarken yardimci olacak birseydir. Kodumuzu yazdik, her sey cok guzel
                // calisiyor yukarida console'a ve buradaki cypress'in soluna yazma kismini kaldirin. Yoksa uyari alirsiniz. Bunu neden console'a yazdiriyorsunuz?
                // sorusu size sorulur.
    
                //  iv) Do assertion
                expect(response.status).to.eq(200);
                expect(response.statusText).to.eq("OK");
                expect(response.duration).to.be.lessThan(700); // public api her ulkede hizli calismayabilir. Test gecsin diye 300 degerini 700 yaptik.
                expect(response.headers["content-type"]).to.include("application/json");
                // Response'in data type'i response'in headers kismindadir. Content type application Json yaziyorsa json data type'indadir.
                // 4 assertion'i 1 tane it method'unun icine koydugumuz icin cypress bize 1 test'in yesil tik aldigini gosterir. Eger her bir assertion'i
                // farkli bir it method'unun icine koysaydiniz 4 testiniz olacakti. Ama genellikle tek it() kullanilir. Cunku her method calistirmada basa
                // dondugu icin sure uzar. 
    
                // Bir assertion hataliysa altindaki asssertion'lar calismaz. Bu duruma hard assertion denir. 
                // Soft assertion ise butun assertion'lari calistirir. Hangisi gecti hangisi kaldi size rapor verir. 
                // Hard assertion Cypress'te daha cok kullanilir. Nadiren soft assertion kullanilabilir.
                // Zaten Cypress'da soft assertion yoktur. Soft assert'i custom method'lar olusturarak yapabilirsiniz.(Reusable methods)
    
    
            });
            // New Terminal actiktan sonra npx cypress open yazacagiz. Testleri calistirmak icin terminale yazacagimiz koddur. E2E Testing'e tiklanir.
            // Chrome secilip Start'a basilir. New Spec'e basin. Create new spec. Vscode'da calistirdiginiz dosyaya sag tiklayip copy relative path'e basin.
            // Console'u gormek icin sag tik inspect yapip console'a basin.
            // npx cypress run yazip calistirigimiz file'in relative path'ini yazdigimizda cypress arayuzu acilmayacak. Vs code'daki terminal'den sonuclari gorebiliriz.
            // Bu sekilde browser'i acmadan calistirma islemine headless denir. Cypress'in kendi browser'i olan Electron'da test method'larini calistiriyor. Bu browser'da
            // calistirildiginda browser acilmiyor. Kendisi calistiriyor. Zahmetsiz hizli bir calistirmadir. Daha cok bu kullanilir. Ama bazen sirkette butun test method'larin
            // chrome'da calistirilmasi istenebilir. Cross-browser test diye bir kavram vardir. Bir application'i farkli browser'larda da dogru calisiyormu diye kontrol etmek
            // zorundayiz. 
        })
    });