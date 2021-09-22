const Migrations = artifacts.require("newBook");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
