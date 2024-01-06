/*
    Given
        https://restful-booker.herokuapp.com/booking/2
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that firstname is Mark
    And
        Assert that lastname is Ericsson
    And 
        Assert that total price is 217
    And
        Assert that deposit paid is true
    And 
        Assert that checkin date is "2023-06-28"
    And
        Assert that checkin date is "2023-07-28"
*/
describe("gET Request method", ()=>{

    it("", function(){

        //i)Set the URL
        const pathParam1 = "/booking";
        const pathParam2 = "/2";

        //ii)Set the expected data
        cy.fixture("bookingUniqueTestData").as("expectedData");

        //iii)Send the GET Request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}`,
        }).then((response)=>{

            const actualData = response.body;

            //iv)Do assertions
            //1)Assert that Status code is 200
            expect(response.status).to.eq(this.expectedData.statusCode);
            //2)Assert that firstname is Mark
            expect(actualData.firstname).to.eq(this.expectedData.firstname);
            //3)Assert that lastname is Brown
            expect(actualData).to.have.property("lastname", this.expectedData.lastname);
            //4)Assert that total price is 469 and depositpaid is true
            expect(actualData).to.include({
                 totalprice: this.expectedData.totalprice,
                 depositpaid: this.expectedData.depositpaid,
             });
            //5) Assert that checkin date is "2023-06-28"
            expect(actualData.bookingdates.checkin).to.eq(this.expectedData.bookingdates.checkin);
            //6)Assert that checkin date is "2023-07-28"
            expect(actualData.bookingdates.checkout).to.eq(this.expectedData.bookingdates.checkout);
        })

    });
});