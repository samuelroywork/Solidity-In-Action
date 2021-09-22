const Migrations = artifacts.require("recursive");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
