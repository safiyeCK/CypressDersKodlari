/*
    Given
        https://dummy.restapiexample.com/api/v1/delete/2
    When
        User sends DELETE Request to the Url
    Then
        Status code is 200
    And 
        Response body is {
                            "status": "success",
                            "data": "2",
                            "message": "Successfully! Record has been deleted"
                        }
*/
describe('Delete request method', () => {
    it('should delete existing  data ', function() {
        //Set the  url
        const pathparam1="/api";
        const pathparam2="/v1";
        const pathparam3="/delete";
        const pathparam4="/2";
        //set the payload
        
        cy.fixture("deleteDummyResponse").as("expectedData");
        
        //Send the patch request 
        
            cy.get('@expectedData').then((expectedData)=>{
                cy.request({
                    method: 'DELETE',
                    url:`${pathparam1}${pathparam2}${pathparam3}${pathparam4}`,
                    //!body ve headers yok
                   
                  }).then((response) => {
                    //Do Assertions
                    const actualData=response.body;
                    //Assert that Status code is 200
                    expect(response.status).to.eq(200);
                    
                    expect(actualData.status).to.eq(expectedData.status);
                    
                    expect(actualData.data).to.eq(expectedData.data);
                  
                    expect(actualData.message).to.eq(expectedData.message);
                   
                    
                  });
            })
        
 
    });
});