// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should decode a message", () => {
        const input = "thinkful";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "wklqnixo";
        
        expect(actual).to.equal(expected);
    });

    it("should encode a message", () => {
        const input = "wklqnixo";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "thinkful";
        
        expect(actual).to.equal(expected);
    });

    it("should return false if shift value is set to 0", () => {
        const input = "thinkful";
        const shift = 0;
        const actual = caesar(input, shift);

        expect(actual).to.be.false;
    });

    it("should return false if shift value is greater than 25", () => {
        const input = "thinkful";
        const shift = 34;
        const actual = caesar(input, shift);

        expect(actual).to.be.false;
    });

    it("should return false if shift value is less then -25", () => {
        const input = "thinkful";
        const shift = -35;
        const actual = caesar(input, shift);

        expect(actual).to.be.false;
    });

    it("should ignore capital letters", () => {
        const input = "This is a secret message!";
        const shift = 8;
        const actual = caesar(input, shift);
        const expected = "bpqa qa i amkzmb umaaiom!"
        
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols", () => {
        const input = "this is a secret message!";
        const shift = 8;
        const actual = caesar(input, shift);
        const expected = "bpqa qa i amkzmb umaaiom!";

        expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const input = "Zebra Magazine";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "cheud pdjdclqh";

        expect(actual).to.equal(expected);
    });
});



 





