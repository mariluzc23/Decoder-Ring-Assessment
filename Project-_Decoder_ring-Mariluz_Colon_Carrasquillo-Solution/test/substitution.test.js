// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("returns false if given alphapet isn't 26 characters long", () => {
        const input = "message";
        const alphabet = "notenoughletters"
        const actual = substitution(input, alphabet);

        expect(actual).to.be.false;
    }); 

    it("returns false if there are duplicate characters in the given alphabet", () => {
        const input = "message";
        const alphabet = "duplicatecharacters"
        const actual = substitution(input, alphabet);

        expect(actual).to.be.false;
    });

    it("it translates the given phrase based on the given alphabet", () => {
        const input = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const actual = substitution(input, alphabet);
        const expected = "ykrrpik";

        expect(actual).to.equal(expected);
    });

    it("when encoding, should maintain spaces in the message", () => {
        const input = "a message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet);
        const expected = "p ykrrpik";

        expect(actual).to.equal(expected);
    });

    it("when decoding, should maintain spaces in the message", () => {
        const input = "p ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, false);
        const expected = "a message";

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const input = "A Message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet);
        const expected = "p ykrrpik";

        expect(actual).to.equal(expected);
    });
   
});

