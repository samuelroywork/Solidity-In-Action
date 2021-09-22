const dynamicArray = artifacts.require("dynamicArray");

module.exports = function (deployer) {
  deployer.deploy(dynamicArray);
};
