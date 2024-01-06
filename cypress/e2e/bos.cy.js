/*

*/

describe("GET METHOD TESTING",() =>{

    it("should verify ",function(){
  
      // set the url
      const pathParam1  = "";
      const pathParam2 = "";
      const pathParam3 = "";
  
      // set the expectedData
      cy.fixture().as("expectedData")
  
      // Send the request
      cy.request({
        method:"GET",
        url: `${pathParam1}${pathParam2}${pathParam3}`,
      }).then((response)=>{
  
        const actualData = response.body;
  
      // Do assertion  
  
  
      expect(actualData);
      expect({
  
  
  
      });
  
    
  
  
     });
  
  
  
    });
  
  
  });