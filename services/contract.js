import axios from "axios";
import { ethers } from "ethers";

export function initContract() {
  const abi = [
    "function mintUsd() public",
    "function mint() public payable",
    "function availableNFTCount() public view returns (uint256)",
    "function maticPrice() public view returns(uint256)",
    "function usdcPrice() public view returns(uint256)",
    "function tokenId() public view returns(uint256)",
    "function tokenURI(uint256) public view returns (string)",
    "function tokensOfAddress(address) public view returns (uint256[])",
  ];
  const address = process.env.SMART_CONTRACT_ADDRESS;
  const provider = new ethers.providers.AlchemyProvider(
    process.env.BLOCKCHAIN_NAME,
    process.env.ALCHEMY_KEY
  );
  return [new ethers.Contract(address, abi, provider), provider];
}

export async function fetchMintData() {
  const [contract] = initContract();
  const total = (await contract.availableNFTCount()).toNumber();
  const count = (await contract.tokenId()).toNumber();
  const usdPrice = await contract.usdcPrice();
  const maticPrice = await contract.maticPrice();
  return { total, count, usdPrice, maticPrice };
}

export async function fetchUserData(address) {
  const [contract] = initContract();
  const tokenIds = await contract.tokensOfAddress(address);

  const tokenUris = await Promise.all(
    tokenIds.map(async (id) => {
      const uri = await contract.tokenURI(id);
      try {
        return { ...(await axios({ url: uri })).data, tokenId: id };
      } catch (error) {
        return null;
      }
    })
  );

  return tokenUris.filter((uri) => uri);
}
