const testStruct = artifacts.require("testStruct");

module.exports = function (deployer) {
  deployer.deploy(testStruct);
};
