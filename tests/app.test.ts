import request from "supertest";
import app from "../src/app";

describe("Test /api/user/:id", () => {
  test("It should respond with an error for invalid ID", () => {
    return request(app)
      .get("/api/user/invalid")
      .then(response => {
        expect(response.statusCode).toBe(400);
      });
  });
  test("It should respond with my info", () => {
    return request(app)
      .get("/api/user/885756325798227988")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});