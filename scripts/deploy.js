const hre = require("hardhat");

async function main() {
  const Chronos = await hre.ethers.getContractFactory("HeliosChronos");
  const chronos = await Chronos.deploy();

  await chronos.waitForDeployment();

  console.log("HeliosChronos deployed to:", await chronos.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
