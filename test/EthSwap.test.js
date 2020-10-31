const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("EthSwap", (accounts) => {
  describe("Token deployment", async () => {
    it("Contract has a name", async () => {
      let token = await Token.new();
      const name = await token.name();
      assert.equal(name, "ETH Ringgit");
    });
  });

  describe("EthSwap deployment", async () => {
    it("Contract has a name", async () => {
      let ethSwap = await EthSwap.new();
      const name = await ethSwap.name();
      assert.equal(name, "Eth Swap 2.0");
    });
  });
});
