import { ethers } from "hardhat";

async function main() {
  const no_name = await ethers.getContractFactory("no_name");
  const contract = await no_name.deploy(6969420);
  await contract.waitForDeployment();
  console.log(
    `deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});