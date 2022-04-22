// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should encode a message from letters to numbers", () => {
        const input = "message";
        const actual = polybius(input);
        const expected = "23513434112251";

        expect(actual).to.equal(expected);
    });

    it("should decode a message from numbers to letters", () => {
        const input = "23513434112251";
        const actual = polybius(input, false);
        const expected = "message";
        
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const input = "Message";
        const actual = polybius(input);
        const expected = "23513434112251";

        expect(actual).to.equal(expected);
    });

    it("when decoding, should return false if characters are not even", () => {
        const input = "2351343411225";
        const actual = polybius(input, false);

        expect(actual).to.be.false;
    });

    it("should maintain spaces in the message", () => {
        const input = "A Message";
        const actual = polybius(input);
        const expected = "11 23513434112251";

        expect(actual).to.equal(expected);
    });

    it("when encoding, should translate both i and j to 42", () => {
        const input = "blame it on my juice";
        const actual = polybius(input);
        const expected = "2113112351 4244 4333 2345 4254423151";

        expect(actual).to.equal(expected);
    });

    it("when decoding, should translate 42 to (i/j)", () => {
        const input = "4254423151";
        const actual = polybius(input, false);
        //input = juice
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
});
