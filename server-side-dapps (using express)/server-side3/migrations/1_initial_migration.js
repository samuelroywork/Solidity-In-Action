const Migrations = artifacts.require("certi");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
