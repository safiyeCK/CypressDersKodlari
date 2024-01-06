/*
 Given
            https://restful-booker.herokuapp.com/booking?firstname=Mark&lastname=Jones
        When
            User send a request to the URL
        Then
             HTTP Status Code should be 200
        And
            Status text is OK
        And 
            Response time is less than 300 ms
		And
		    Response format should be “application/json”
	  	And
	  		Among the data there should be someone whose firstname is "Mark" and last name is "Jones"
!tekrarsiz
!kisa
!okunur
!data ile anakod birbirinden ayrilmali
?kodlar yazilmali
 */
describe('GET request  method testing ', () => {
    it('Testing   with Query parameters ', () => {
        //Set The URL
        const pathParam='/booking';
        const queryParam ={
            firstName: 'Mark',
            lastName: 'Jones'
        }
        //Send the Get REquest
        cy.request({
            method: 'GET',
            url: pathParam,
            qs: queryParam // bu kısım end pointe query paramları ekler
        }).then((response )=> {
        // HTTP Status Code should be 200
        expect(response.status).to.eq(200);
        //Status text is OK
        expect(response.statusText).to.eq("OK");
        //Response time is less than 300 ms
        expect(response.duration).to.be.lessThan(300);
        //Response format should be 'application/json'
        expect(response.headers["content-type"]).to.include("application/json");
        //  Among the data there should be someone whose first name is "Mark" and last name is "Jones"//
        const responseBody=Array.isArray(response.body) ? response.body : [response.body];
        expect(responseBody).to.deep.include.members([{bookingid:3}])





    });
   })
 });



 describe('GET request  method testing ', () => {
    it('Testing   with Query parameters ', () => {
        //Set The URL
        const pathParam = '/booking';
        const queryParam = {     // ? ile baslayan kisim queryParam'dir. ?firstname=Mark&lastname=Jones key-value seklinde iki kisimdan olusurlar.
            firstName: 'Mark',   // Birden fazla queryParam kullanmak istiyorsaniz arasina & isareti koymalisiniz. 
            lastName: 'Jones'
        }
        //Send the Get REquest
        cy.request({
            method: 'GET',  // Get yazmasak da otomatik olarak get kullanilir. Ama diger method'lar icin buraya yazmamiz gerekiyor. Ayrica kodu okunur kilmak icin yazmak daha iyidir.
            url: pathParam,// bu kısım end pointe path paramları ekler
            qs: queryParam // bu kısım end pointe query paramları ekler
        }).then((response) => {
            // HTTP Status Code should be 200
            expect(response.status).to.eq(200);
            //Status text is OK
            expect(response.statusText).to.eq("OK");
            //Response time is less than 300 ms
            expect(response.duration).to.be.lessThan(300);
            //Response format should be “application/json”
            expect(response.headers["content-type"]).to.include("application/json");
            // Among the data there should be someone whose first name is "Mark" and last name is "Jones"//
            // Postman'da bunu test ettigimizde farkli isimler icin farkli sonuclar geldigini gorduk. Bir isim-soyisimde tek bir data gelirken,baska bir isim-soyisimde birden fazla 
            // data geldi. O yuzden en genis senaryoya gore kod yazmaliyiz. Array kullanmaz isek response'da coklu data geldiginde hata aliriz.
            const responseBody = Array.isArray(response.body) ? response.body : [response.body];
            // Ternary ile Response body arrayse, response body'i dondur degilse onu Array'e cevir yazmis olduk. 
            expect(responseBody).to.deep.include.members([{ bookingid: 3 }]) // en icteki dataya bakmak icin deep dememiz gerekiyor.
        });
        
    })
});