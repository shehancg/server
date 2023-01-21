import {describe, it} from "@jest/globals";
import request from "supertest"
import {app} from "../src/server";

describe("POST /user", () => {
  it("user login", async () => {
    await request(app)
      .post("/api/users/login")
      .send({email: "rambo@gmail.com", password: "1234"})
      .set("Accept", "application/json")
      .expect(200);
  });
});

describe("POST /user", () => {
  it("user Reg", function (done) {
    request(app)
      .post("/api/users")
      .send({email:"shehancg1@gmail.com", name:"rambo", username:"shehancg1", password: "1234"})
      .set("Accept", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) {return done(err);}
        return done();
      });
  });
});