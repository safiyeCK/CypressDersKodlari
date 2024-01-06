//  Given
//         https://jsonplaceholder.typicode.com/todos/2
//     When
//         User sends GET Request to the URL
//     Then
//         Assert that Status code is 200
//     And
//         Assert that userId is "1"
//     And
//         Assert that title is "quis ut nam facilis et officia qui"
//     And 
//         Assert that completed is "false"
//     And
//         Assert that header via is "1.1 Vegur"
//     And 
//         Assert that header server is "cloudflare"

describe("GET  Request Method Testing", ()=>{

    it("should verify response body deatils and header",()=>{  
        //? set the url
        const pathParam1="/todos";
        const pathParam2="/2";

        //?Set the expexted data
        const expectedData={
            "Status":200,
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false,
            "via":"1.1 vegur",
            "server":"cloudflare"
        }

        //?Send the request get teh pesponse
        cy.request({

            method :"Get",
            url:`${pathParam1}${pathParam2}`
            
        }).then((response)=>{

            
      //iv)Do Assertions
        //1)Assert that Status code is 200
        expect(response.StatusCode).to.eq(expectedData.StatusCode);
        //2)Assert that userId is "1"
        expect(response.body.userId).to.eq(expectedData.userId);
        //3)Assert that title is "quis ut nam facilis et officia qui"
        expect(response.body.title).to.eq(expectedData.title);
        //4)Assert that completed is "false"
        expect(response.body.completed).to.eq(expectedData.completed);
        //5)Assert that header via is "1.1 Vegur"
        expect(response.headers.via).to.eq(expectedData.via);
        //6)Assert that header server is "cloudflare"
        expect(response.headers.server).to.eq(expectedData.server);

            
        });
    })
});