/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface DailyCanvasInterface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "drawCanvas(bytes,uint256,uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getCanvasPixels(uint256)": FunctionFragment;
    "getCanvasRiffId(uint256)": FunctionFragment;
    "getCurrentPrompt()": FunctionFragment;
    "getCurrentPromptId()": FunctionFragment;
    "getPrompt(uint256)": FunctionFragment;
    "getPromptByCanvasId(uint256)": FunctionFragment;
    "getTileSVG(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "newPrompt(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeMint(address)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setRenderer(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "balanceOf"
      | "burn"
      | "drawCanvas"
      | "getApproved"
      | "getCanvasPixels"
      | "getCanvasRiffId"
      | "getCurrentPrompt"
      | "getCurrentPromptId"
      | "getPrompt"
      | "getPromptByCanvasId"
      | "getTileSVG"
      | "isApprovedForAll"
      | "name"
      | "newPrompt"
      | "owner"
      | "ownerOf"
      | "renounceOwnership"
      | "safeMint"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "setRenderer"
      | "supportsInterface"
      | "symbol"
      | "tokenURI"
      | "transferFrom"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "drawCanvas",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCanvasPixels",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCanvasRiffId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrompt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPromptId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrompt",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPromptByCanvasId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTileSVG",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newPrompt",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeMint",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRenderer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drawCanvas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCanvasPixels",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCanvasRiffId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrompt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPromptId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrompt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPromptByCanvasId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTileSVG", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newPrompt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRenderer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "CanvasDrawn(uint256,bytes,address,uint256,uint256)": EventFragment;
    "NewPrompt(uint256,string,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CanvasDrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPrompt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface CanvasDrawnEventObject {
  canvasId: BigNumber;
  pixels: string;
  author: string;
  promptId: BigNumber;
  riffCanvasId: BigNumber;
}
export type CanvasDrawnEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber],
  CanvasDrawnEventObject
>;

export type CanvasDrawnEventFilter = TypedEventFilter<CanvasDrawnEvent>;

export interface NewPromptEventObject {
  promptId: BigNumber;
  promptText: string;
  author: string;
}
export type NewPromptEvent = TypedEvent<
  [BigNumber, string, string],
  NewPromptEventObject
>;

export type NewPromptEventFilter = TypedEventFilter<NewPromptEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface DailyCanvas extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DailyCanvasInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    drawCanvas(
      pixels: PromiseOrValue<BytesLike>,
      promptId: PromiseOrValue<BigNumberish>,
      riffCanvasId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCanvasPixels(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCanvasRiffId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrentPrompt(overrides?: CallOverrides): Promise<[string]>;

    getCurrentPromptId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPrompt(
      promptId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPromptByCanvasId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTileSVG(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    newPrompt(
      promptText: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeMint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRenderer(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  drawCanvas(
    pixels: PromiseOrValue<BytesLike>,
    promptId: PromiseOrValue<BigNumberish>,
    riffCanvasId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getCanvasPixels(
    canvasId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getCanvasRiffId(
    canvasId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentPrompt(overrides?: CallOverrides): Promise<string>;

  getCurrentPromptId(overrides?: CallOverrides): Promise<BigNumber>;

  getPrompt(
    promptId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPromptByCanvasId(
    canvasId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTileSVG(
    canvasId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  newPrompt(
    promptText: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeMint(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRenderer(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(
    canvasId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    drawCanvas(
      pixels: PromiseOrValue<BytesLike>,
      promptId: PromiseOrValue<BigNumberish>,
      riffCanvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getCanvasPixels(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getCanvasRiffId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentPrompt(overrides?: CallOverrides): Promise<string>;

    getCurrentPromptId(overrides?: CallOverrides): Promise<BigNumber>;

    getPrompt(
      promptId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPromptByCanvasId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTileSVG(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    newPrompt(
      promptText: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    safeMint(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRenderer(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "CanvasDrawn(uint256,bytes,address,uint256,uint256)"(
      canvasId?: null,
      pixels?: null,
      author?: null,
      promptId?: null,
      riffCanvasId?: null
    ): CanvasDrawnEventFilter;
    CanvasDrawn(
      canvasId?: null,
      pixels?: null,
      author?: null,
      promptId?: null,
      riffCanvasId?: null
    ): CanvasDrawnEventFilter;

    "NewPrompt(uint256,string,address)"(
      promptId?: null,
      promptText?: null,
      author?: null
    ): NewPromptEventFilter;
    NewPrompt(
      promptId?: null,
      promptText?: null,
      author?: null
    ): NewPromptEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
  };

  estimateGas: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    drawCanvas(
      pixels: PromiseOrValue<BytesLike>,
      promptId: PromiseOrValue<BigNumberish>,
      riffCanvasId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCanvasPixels(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCanvasRiffId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentPrompt(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentPromptId(overrides?: CallOverrides): Promise<BigNumber>;

    getPrompt(
      promptId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPromptByCanvasId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTileSVG(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    newPrompt(
      promptText: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeMint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRenderer(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    drawCanvas(
      pixels: PromiseOrValue<BytesLike>,
      promptId: PromiseOrValue<BigNumberish>,
      riffCanvasId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCanvasPixels(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCanvasRiffId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentPrompt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentPromptId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrompt(
      promptId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPromptByCanvasId(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTileSVG(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newPrompt(
      promptText: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeMint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRenderer(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      canvasId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
