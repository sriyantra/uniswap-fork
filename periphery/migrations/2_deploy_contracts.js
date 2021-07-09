const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, _network, addresses) {
    let weth;
    const FACTORY_ADDRESS = '0x689B70534f2C1B6cce2F62abB56B963B12fa242A';
    
    if(_network === 'mainnet') {
        weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
      } else {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
      }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
