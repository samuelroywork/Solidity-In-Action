const Migrations = artifacts.require("smallest");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
