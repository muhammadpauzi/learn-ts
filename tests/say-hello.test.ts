import { sayHello } from "../src/say-hello"

describe("sayHello", function () {
    it("Expect say Hello, Pauzi", function () {
        const sayHelloString = sayHello("Pauzi");
        expect(sayHelloString).toBe("Hello, Pauzi");
    })
})