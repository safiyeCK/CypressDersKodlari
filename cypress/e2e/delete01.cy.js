/*
    Given
        https://jsonplaceholder.typicode.com/todos/198
    When
        User sends DELETE Request to the Url
    Then
        Status code is 200
    And 
        Response body is { }
*/

describe("Delete Request Method",()=>{

    it("Should delete existing data succesfully",()=>{
        //Set the  url
        const pathparam1="/todos";
        const pathparam2="/198"

        //set the payload or expected data  //!delete sonucu bos oldugu icin 2. adimi geciyoruz.

        cy.request({
            method: 'PATCH',
            url:`${pathparam1}${pathparam2}`,
            //!body ve headers yok

        }).then((response)=>{
           //Do Assertions 
            //Assert that   Status code is 200
            expect(response.status).to.eq(200);
            //Assert that Response body is empty
            //1.way
            expect(response.body).to.be.empty
            //2.yol olarak bu sekılde  assert edebılırz
            expect(Object.keys(response.body).length).to.eq(0);
          });

             //!bir response body bos oldugunu key olmadigini assert ederek de ispatlayabiliriz

             //delete test ediyorsan, bir method yaptin ve bir data siler.Databaseyi bosaltabilir.
             //Delete methodunu kullanmadan once port methodunu kullanip data uretir, o datayi silerim.


        })




    })




