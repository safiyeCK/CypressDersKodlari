/*
    Given
        https://jsonplaceholder.typicode.com/todos
    And
        {
            "userId": 55,
            "title": "Tidy your room",
            "completed": false
        }
    When
        I send POST Request to the Url
    Then
        Status code is 201
    And
        response body is like   {
                                    "userId": 55,
                                    "title": "Tidy your room",
                                    "completed": false,
                                    "id": 201
                                }
    */
   describe("PUT REQUEST METHOD TESTING",() =>{

    it("should verify creat new data ",function(){
  
      // set the url
      const pathParam1  = "/todos";
      
  
      // set the expectedData
      cy.fixture("postTodosPayload").as("payload")
  
      // Send the POST request
      cy.get("@payload").then((payload)=>{
        
        cy.request({
            method:"POST",
            url: `${pathParam1}`,
            body: payload,
            headers:{
                "Content-Type":"application/json",
            }
          }).then((response)=>{

            const actualData=response.body;
            //Status code is 200
            expect(response.status).to.eq(201)

            expect(actualData.userId).to.eq(payload.userId)

            expect(actualData.title).to.eq(payload.title)

            expect(actualData.completed).to.eq(payload.completed)

            
          })


        });
        

    
    });
  
  
  });