/*
Given
    https://restful-booker.herokuapp.com/booking/2024
When
    User sends a GET Request to the endpoint
Then
   Status code is "404"
And 
   Status text is "Not Found"
And
   Response body includes "Not Found"
And
   Response body includes "Techpro Education"

And
   Header Server is "Cowboy" 
   
And
   Header Connection  is "keep-alive"
*/

describe("GET Method Testing", () => {
    it("Status Code, Status Text, Body, Header will be tested",() => {

       //i) Set the URL (Endpoint)
const url = "https://restful-booker.herokuapp.com/booking/2024";

//ii) Set the payload---- GET de oldugumuz icin burda bisey yapmaya gerek yok

//iii) Send the request
cy.request({
    method: 'GET',
    url: url,
    failOnStatusCode:false//4xx status codelarda testin otomatik olarak failetmesini engelledim
}).then((response) => {
        
   
    //i)Do Assertions
    // Assert that Status code is 400
    expect(response.status).to.eq(404);
    // Assert that Status "Not Found"
    expect(response.statusText).to.eq("Not Found");
    //Assert that Response body includes "Not Found"
    expect(response.body).to.include('Not Found');
    // Response body includes "Techpro Education"
    expect(response.body).to.not.include("Techpro Education");
    //Header Server is "Cowboy" 
    expect(response.headers["server"]).to.eq("Cowboy");
    //Header Connection  is "keep-alive"
    expect(response.headers["connection"]).to.eq("keep-alive");

    })
        
    })

})