/*
    Given
        https://jsonplaceholder.typicode.com/todos/198
    And
            {
                "title": "Wash the dishes"
            }
    When
        User sends PATCH Request to the Url
    Then
        Status code is 200
    And
        And response body is like   {
                                        "userId": 10,
                                        "title": "Wash the dishes",
                                        "completed": true,
                                        "id": 198
                                    }
*/
describe("PATCH Request METHOD TESTING",() =>{

    it("should  update the existing data partialy",function(){
  
      // set the url
      const pathParam1  = "/todos";
      const pathParam2  = "/198";
      
      // set the expectedData
      cy.fixture("patchTodosPayload").as("payload");
      cy.fixture("patchTodosResponse").as("expectedData")
  
      // Send the POST request
        cy.get("@payload").then((payload)=>{    //!bu satirdaki kodlari get icinde yap 
        cy.get("@expectedData").then((expectedData)=>{
        
        cy.request({
            method:"PATCH",
            url: `${pathParam1}${pathParam2}`,
            body: payload,
            headers:{
                "Content-Type":"application/json",
            }
          }).then((response)=>{

             //Do assertions
             const actualData=response.body;
            
             //Assert that Status code is 200
             expect(response.status).to.eq(200);

             expect(actualData.title).to.eq(expectedData.title);

             expect(actualData.userId).to.eq(expectedData.userId);

             expect(actualData.completed).to.eq(expectedData.completed);
             
             expect(actualData.id).to.have.property("id");


             


            })
  
         })


        });
        

    
          
    });
  
  });