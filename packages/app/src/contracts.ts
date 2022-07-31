// import ExampleNFTGoerli from "@web3-scaffold/contracts/deploys/goerli/ExampleNFT.json";
import DailyCanvas from "@web3-scaffold/contracts/deploys/rinkeby/DailyCanvas.json";
import MinimalForwarder from "@web3-scaffold/contracts/deploys/goerli/MinimalForwarder.json";

import { provider, targetChainId } from "./EthereumProviders";
import {
  DailyCanvas__factory,
  MinimalForwarder__factory,
} from "./types/factories";

// I would have used `ExampleNFT__factory.connect` to create this, but we may
// not have a provider ready to go. Any interactions with this contract should
// use `exampleNFTContract.connect(providerOrSigner)` first.

export const dailyCanvasContract = DailyCanvas__factory.connect(
  DailyCanvas.deployedTo,
  provider({ chainId: targetChainId })
);
