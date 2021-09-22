const Migrations = artifacts.require("covid");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
