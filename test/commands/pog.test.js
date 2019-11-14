const pig = require("../../src/commands/pog");

describe('pog', () => {
    test('respond with pig', () => {
        expect(ping("test message")).toEqual('pig');
    })
})
