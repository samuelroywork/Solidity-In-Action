const Migrations = artifacts.require("summation");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
