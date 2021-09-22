const Migrations = artifacts.require("password");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
