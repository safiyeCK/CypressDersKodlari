/*
    Given
        https://gorest.co.in/public/v1/users
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that total is "2859"
    And
        Assert that pages value is "288"
    And 
        Assert that page is "1"
    And
        Assert that limit is "10"
    And 
        Assert that previous link is "null"
    And
        Assert that current link is "https://gorest.co.in/public/v1/users?page=1"
    And
        Assert that next link is "https://gorest.co.in/public/v1/users?page=2"
    And
        Assert that number of females is less than the number of males
*/
describe("GET Request Method", () => {
  it("should verify meta data details", function () {
      //i)Set the url
      const pathParam1 = "/public";
      const pathParam2 = "/v1";
      const pathParam3 = "/users";

      //ii)Set the expected data
      cy.fixture("goRestMetaTestData").as("expectedData");

      //iii)Send GET Request
      cy.request({
          method: "GET",
          url: `${pathParam1}${pathParam2}${pathParam3}`,
      }).then((response) => {
          const actualData = response.body.meta.pagination;

          //iv)Do Assertions
          //1)Assert that Status code is 200
          expect(response.status).to.eq(this.expectedData.status);
          //2)Assert that total is "2859"
          expect(actualData.total).to.eq(this.expectedData.pagination.total);
          //3)Assert that pages value is "288"
          expect(actualData.pages).to.eq(this.expectedData.pagination.pages);
          //4)Assert that page is "1"
          expect(actualData.page).to.eq(this.expectedData.pagination.page);
          //5)Assert that limit is "10"
          expect(actualData.limit).to.eq(this.expectedData.pagination.limit);
          //6)Assert that previous link is "null"
          expect(actualData.links.previous).to.eq(
              this.expectedData.pagination.links.previous
          );
          //7)Assert that current link is "https://gorest.co.in/public/v1/users?page=1"
          expect(actualData.links.current).to.eq(
              this.expectedData.pagination.links.current
          );
          //8)Assert that next link is "https://gorest.co.in/public/v1/users?page=2"
          expect(actualData.links.next).to.eq(
              this.expectedData.pagination.links.next
          );
          //9)Assert that number of females is less than the number of males
          const genders = response.body.data.map((user) => user.gender);
          const numOfFemales = genders.filter(
              (gender) => gender === "female"
          ).length;
          const numOfMales = genders.length - numOfFemales;
          expect(numOfFemales).to.be.lessThan(numOfMales);
      });
  });
});