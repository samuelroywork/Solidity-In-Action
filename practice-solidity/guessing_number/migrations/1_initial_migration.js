const Migrations = artifacts.require("guessing");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
