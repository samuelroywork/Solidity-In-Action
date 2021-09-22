const Migrations = artifacts.require("average");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
