const Migrations = artifacts.require("bank_application");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
