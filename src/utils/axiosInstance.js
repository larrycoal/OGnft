import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.blockchainapi.com/v1/solana/wallet/airdrop",
  headers: {
    APIKeyID: process.env.APIKeyID,
    APISecretKey: process.env.APISecretKey,
  },
});
