/*
Given
        https://jsonplaceholder.typicode.com/todos
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that there are 10 ids greater than 190
    And
        Assert that the number of userIds whose ids less than 5 is 4
    And 
        Assert that "delectus aut autem" is one of the titles whose id is less than 5 */

        describe("Get Request Testing",()=>{
          it.only("Testing with number of data",()=>{

            //set the uel
            const pathParam= "/todos";

            // set the payload


            //send the GET request

            cy.request({
               method :"GET",
               url:pathParam

            }).then((response)=>{

                //do assertion
                
            // HTTP Status Code should be 200
            expect(response.status).to.eq(200);

          //Assert that there are 10 ids greater than 190
          const idsGreaterThan190=response
          .body
          .filter((item)=>item.id>190);
          expect(idsGreaterThan190).to.have.lengthOf(10)

          //Assert that the number of userIds whose ids less than 5 is 4
          const idLessThen5=response
          .body
          .filter((item)=>item.id<5);
          expect (idLessThen5).to.have.lengthOf(4);

          //Assert that the number of userIds whose ids less than 5 is 4
          const titlesWhoseIdLessThan5 = response.body
        .filter((item) => item.id < 5)
        .map((item) => item.title);   //datanın içinden 1 tanes veri almak için map() methodu kullandık
          expect(titlesWhoseIdLessThan5).to.include("delectus aut autem");





            })
          })


        })