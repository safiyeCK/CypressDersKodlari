/*
    Given
        https://jsonplaceholder.typicode.com/todos/198
    When
        User sends a GET Request to the endpoint
    Then
        Status code is 200
    And
        Status text is OK
    And
        Response time is less than 300ms
    And
        Response body is JSON data type
    And
        "title" is "quis eius est sint explicabo"
    And
        "completed" is "true"
    And
        "userId" is "10"
*/

describe("Get Method  Testing",()=>{
    it("Get01",()=>{
        const url="https://jsonplaceholder.typicode.com/todos/198";

        cy.request({
            method:"GET",
            url:url
        }).then((response)=>{
            console.log(response.body);
            cy.log(JSON.stringify(response.body))

            //Assert that status code is 200
            expect(response.status).to.eq(200);

            //Assert that text is OK
            expect(response.statusText).to.eq("OK")

            //Assert that response time is less than 300 ms
            expect(response.duration).to.lessThan(300);

            //Assert that response body is JSON Data Type
            expect(response.headers["content-type"]).to.include("application/json");

            //Assert that title is "quis eius est sint explicabo"
            expect(response.body.title).to.eq("quis eius est sint explicabo");

            //Assert that "completed" is "true"
            expect(response.body.completed).to.be.true;

            //Assert that "userId" is "10"
            expect(response.body.userId).to.eq(10);

        });
    })
});


