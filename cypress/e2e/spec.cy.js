// import data from "../../submissionData.json"; // do not create/change  this file

const data = [
  {
    submission_link: "http://localhost:3000",
    id: "ukr-local",
    json_server_link: "http://localhost:8080",
  },
];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Todo application", function () {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    it("should have basic structure", () => {
      cy.intercept("GET", "/todos").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="add-todo"]`).should("exist");
      cy.get(`[data-testid="addnote-button"]`).should("exist");
      cy.get(`[data-testid="todo-card"]`).should("have.length", 6);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
