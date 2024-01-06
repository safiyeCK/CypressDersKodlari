/*
    Given
        https://restful-booker.herokuapp.com/booking
    And
        {
            "firstname": "Selim",
            "lastname": "Ak",
            "totalprice": 11111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-09-09",
                "checkout": "2021-09-21"
            }
        }
    When
        I send POST Request to the Url
    Then
        Status code is 200
        And response body should be like    {
                                                "bookingid": 11,
                                                "booking": {
                                                                "firstname": "Selim",
                                                                "lastname": "Ak",
                                                                "totalprice": 11111,
                                                                "depositpaid": true,
                                                                "bookingdates": {
                                                                                    "checkin": "2020-09-09",
                                                                                    "checkout": "2020-09-21"
                                                                                }
                                                            }
                                            }
*/

describe("PUT METHOD TESTING",() =>{

    it("should verify new data ",function(){
  
      // set the url
      const pathParam1  = "/booking";
      
  
      // set the expectedData
      cy.fixture("postBookingPayload").as("payload")
  
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

            const actualData=response.body.booking;
            //Status code is 200
            expect(response.status).to.eq(200)

            expect(actualData.firstname).to.eq(payload.firstname)

            expect(actualData.lastname).to.eq(payload.lastname)

            expect(actualData.totalprice).to.eq(payload.totalprice)

            expect(actualData.depositpaid).to.eq(payload.depositpaid)

            expect(actualData.bookingdates.checkin).to.eq(payload.bookingdates.checkin)

            expect(actualData.bookingdates.checkout).to.eq(payload.bookingdates.checkout)
          })


        });
        

      
    
  
  
  
  
    });
  
  
  });