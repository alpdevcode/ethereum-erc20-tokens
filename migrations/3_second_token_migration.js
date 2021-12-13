const MySecondToken = artifacts.require("MySecondToken");

module.exports = function (deployer) {
  deployer.deploy(MySecondToken, 'MST', 'My Second Token', 1000000);
};
