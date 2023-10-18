
const hre = require("hardhat");

async function main() {

  // const lockedAmount = hre.ethers.parseEther("0.001");

  // const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

  // await lock.waitForDeployment();

  const Coffee =await hre.ethers.getContractFactory("coffee");//fetching bytecode and abi
  const coffee =await Coffee.deploy() //creating an instance of smart contract

  await coffee.waitForDeployment();

  console.log(
    `Deployed smart contract of address ${coffee.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
