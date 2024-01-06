/*
    Given
        https://dummy.restapiexample.com/api/v1/update/21
    And
        {
            "employee_name": "Tom Hanks",
            "employee_salary": 111111,
            "employee_age": 23,
            "profile_image": "Perfect image"
        }
    When
        User sends PUT Request to the URL
    Then
        Status code is 200
    And
        Response body should be like    {
                                            "status": "success",
                                            "data": {
                                                "employee_name": "Tom Hanks",
                                                "employee_salary": 111111,
                                                "employee_age": 23,
                                                "profile_image": "Perfect image"
                                            },
                                            "message": "Successfully! Record has been updated."
                                        }
*/
describe("Put Request METHOD TESTING",() =>{

    it("should  update existing data ",function(){
  
      // set the url
      const pathParam1  = "/api";
      const pathParam2  = "/v1";
      const pathParam3  = "/update";
      const pathParam4  = "/21";
  
      // set the expectedData
      cy.fixture("putDummyPayload").as("payload");
      cy.fixture("putDummyResponse").as("expectedData")
  
      // Send the POST request
        cy.get("@payload").then((payload)=>{    //!bu satirdaki kodlari get icinde yap 
        cy.get("@expectedData").then((expectedData)=>{
        
        cy.request({
            method:"PUT",
            url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`,
            body: payload,
            headers:{
                "Content-Type":"application/json",
            }
          }).then((response)=>{

             //Do assertions
             const actualData=response.body;
             
             expect(response.status).to.eq(200);
             
             expect(actualData.data.employee_name).to.eq(expectedData.data.employee_name);
             
             expect(actualData.data.employee_salary).to.eq(expectedData.data.employee_salary);
             
             expect(actualData.data.employee_age).to.eq(expectedData.data.employee_age);
            
             expect(actualData.data.profile_image).to.eq(expectedData.data.profile_image);
            
             expect(actualData.status).to.eq(expectedData.status);

             expect(actualData.message).to.eq(expectedData.message);


            })
  
         })


        });
        

    
    });
  
  
  });