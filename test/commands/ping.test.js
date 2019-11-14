const ping = require("../../src/commands/ping");

describe('ping', () => {
    test('respond with pong', () => {
        expect(ping("test message")).toEqual('pong');
    })
})
