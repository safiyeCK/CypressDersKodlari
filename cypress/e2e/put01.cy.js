/*
    Given
        https://jsonplaceholder.typicode.com/todos/198
    And
        {
            "userId": 21,
            "title": "Wash the dishes",
            "completed": false
        }
    When
        I send PUT Request to the Url
    Then
        Status code is 200
    And
        And response body is like   {
                                        "userId": 21,
                                        "title": "Wash the dishes",
                                        "completed": false
                                    }
    */
   describe("Put Request METHOD TESTING",() =>{

    it("should  update existing data ",function(){
  
      // set the url
      const pathParam1  = "/todos";
      const pathParam2  = "/198";
      
      // set the expectedData
      cy.fixture("putTodosPayload").as("payload");
      
  
      // Send the POST request
        cy.get("@payload").then((payload)=>{    //!bu satirdaki kodlari get icinde yap 
        
        cy.request({
            method:"PUT",
            url: `${pathParam1}${pathParam2}`,
            body: payload,
            headers:{
                "Content-Type":"application/json",
            }
          }).then((response)=>{

            const actualData=response.body
            //Status code is 200
            expect(response.status).to.eq(200)
            expect(actualData.userId).to.eq(payload.userId);
            expect(actualData.title).to.eq(payload.title);
            expect(actualData.completed).to.eq(payload.completed);

            })
  
        });
          
    });
  
  });