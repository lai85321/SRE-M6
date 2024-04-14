const app = require("../app");
const chai = require("chai");
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chaiHttp = require("chai-http");

chai.use(deepEqualInAnyOrder);
chai.use(chaiHttp);
chai.use(deepEqualInAnyOrder);

const expect = chai.expect;
const requester = chai.request(app).keepOpen();

describe("AddOne", async () => {
  it("get number in querystring", async () => {
    const res = await requester.get("/addOne?number=8");
    console.log(res.body);
    const data = res.body.result;
    expect(data).equal(9);
  });
  it("no querystring in api", async () => {
    const res = await requester.get("/addOne");
    const data = res.body;
    expect(data.error).equal("Please enter a number!");
  });
});
