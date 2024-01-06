/**
  Given
        https://reqres.in/api/users/3
    And
        {
            "email": "techpro@gmail.com",
            "first_name": "Tech",
            "last_name": "Pro",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        }
    When
        User sends PUT Request to the URL
    Then
        Status code is 200
    And
        Response body should be like    {
                                            "email": "techpro@gmail.com",
                                            "first_name": "Tech",
                                            "last_name": "Pro",
                                            "avatar": "https://reqres.in/img/faces/4-image.jpg",
                                            "updatedAt": "2024-01-04T15:35:08.694Z"  //! bu kisim degisir o nedenle sadece varligini test ederiz
                                        }

 */
describe("Put Request METHOD TESTING",() =>{

    it("should  update existing data ",function(){
  
      // set the url
      const pathParam1  = "/api";
      const pathParam2  = "/users";
      const pathParam3  = "/3";
      
  
      // set the expectedData
      cy.fixture("putReqresPayload").as("payload");
      cy.fixture("putReqresResponse").as("expectedData")
  
      // Send the POST request
        cy.get("@payload").then((payload)=>{    //!bu satirdaki kodlari get icinde yap 
        cy.get("@expectedData").then((expectedData)=>{
        
        cy.request({
            method:"PUT",
            url: `${pathParam1}${pathParam2}${pathParam3}`,
            body: payload,
            headers:{
                "Content-Type":"application/json",
            }
          }).then((response)=>{

             //Do assertions
             const actualData=response.body;
             //Assert that Status code is 200
             expect(response.status).to.eq(200);
             //Assert that "email": "techpro@gmail.com",
             expect(actualData.email).to.eq(expectedData.email);
             //Assert that "first_name": "Tech",
             expect(actualData.first_name).to.eq(expectedData.first_name);
             //Assert that "last_name": "Pro",
             expect(actualData.last_name).to.eq(expectedData.last_name);
             //Assert "avatar": "https://reqres.in/img/faces/4-image.jpg",
             expect(actualData.avatar).to.eq(expectedData.avatar);
             //Assert "updatedAt" is  "2024-01-04T15:35:08.694Z"
             expect(actualData).to.have.property('updatedAt');


            })
  
         })


        });
        

    
    });
  
  
  });