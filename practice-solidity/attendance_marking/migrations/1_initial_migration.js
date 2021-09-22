const Migrations = artifacts.require("attendance");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
