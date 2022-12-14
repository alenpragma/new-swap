/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  BoosterProxyFactory,
  BoosterProxyFactoryInterface,
} from "../BoosterProxyFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_farmBooster",
        type: "address",
      },
      {
        internalType: "address",
        name: "_masterchefV2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cakeToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "farmBoosterProxyAddress",
        type: "address",
      },
    ],
    name: "NewFarmBoosterProxyContract",
    type: "event",
  },
  {
    inputs: [],
    name: "Farm_Booster",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cakeToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createFarmBoosterProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "masterchefV2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proxyContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proxyUser",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class BoosterProxyFactory__factory {
  static readonly abi = _abi;
  static createInterface(): BoosterProxyFactoryInterface {
    return new utils.Interface(_abi) as BoosterProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoosterProxyFactory {
    return new Contract(address, _abi, signerOrProvider) as BoosterProxyFactory;
  }
}
