/// <reference types="cypress" />

describe("GET Method Testing", ()=>{

    it("",()=>{  
        const url = "";

        cy.request({

            method: "GET",
            url: url
            
        }).then((response)=>{

            console.log(response.body);

            
        });
    })
});