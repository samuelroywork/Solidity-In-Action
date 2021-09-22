const staticArray = artifacts.require("staticArray");

module.exports = function (deployer) {
  deployer.deploy(staticArray);
};
