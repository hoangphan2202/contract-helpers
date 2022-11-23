/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/providers';
import { Contract, ContractFactory } from '@ethersproject/contracts';

import { UiIncentiveDataProvider } from './UiIncentiveDataProvider';

export class UiIncentiveDataProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): UiIncentiveDataProvider {
    return (new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as unknown) as UiIncentiveDataProvider;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: 'provider',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getFullReservesIncentiveData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'emissionPerSecond',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incentivesLastUpdateTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'tokenIncentivesIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'emissionEndTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.IncentiveData',
            name: 'aIncentiveData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'emissionPerSecond',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incentivesLastUpdateTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'tokenIncentivesIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'emissionEndTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.IncentiveData',
            name: 'vIncentiveData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'emissionPerSecond',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incentivesLastUpdateTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'tokenIncentivesIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'emissionEndTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.IncentiveData',
            name: 'sIncentiveData',
            type: 'tuple',
          },
        ],
        internalType:
          'struct IUiIncentiveDataProvider.AggregatedReserveIncentiveData[]',
        name: '',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenincentivesUserIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'userUnclaimedRewards',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.UserIncentiveData',
            name: 'aTokenIncentivesUserData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenincentivesUserIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'userUnclaimedRewards',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.UserIncentiveData',
            name: 'vTokenIncentivesUserData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenincentivesUserIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'userUnclaimedRewards',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.UserIncentiveData',
            name: 'sTokenIncentivesUserData',
            type: 'tuple',
          },
        ],
        internalType:
          'struct IUiIncentiveDataProvider.UserReserveIncentiveData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: 'provider',
        type: 'address',
      },
    ],
    name: 'getReservesIncentivesData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'emissionPerSecond',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incentivesLastUpdateTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'tokenIncentivesIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'emissionEndTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.IncentiveData',
            name: 'aIncentiveData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'emissionPerSecond',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incentivesLastUpdateTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'tokenIncentivesIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'emissionEndTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.IncentiveData',
            name: 'vIncentiveData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'emissionPerSecond',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incentivesLastUpdateTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'tokenIncentivesIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'emissionEndTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.IncentiveData',
            name: 'sIncentiveData',
            type: 'tuple',
          },
        ],
        internalType:
          'struct IUiIncentiveDataProvider.AggregatedReserveIncentiveData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: 'provider',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserReservesIncentivesData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'underlyingAsset',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenincentivesUserIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'userUnclaimedRewards',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.UserIncentiveData',
            name: 'aTokenIncentivesUserData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenincentivesUserIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'userUnclaimedRewards',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.UserIncentiveData',
            name: 'vTokenIncentivesUserData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenincentivesUserIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'userUnclaimedRewards',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'rewardTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'incentiveControllerAddress',
                type: 'address',
              },
              {
                internalType: 'uint8',
                name: 'rewardTokenDecimals',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiIncentiveDataProvider.UserIncentiveData',
            name: 'sTokenIncentivesUserData',
            type: 'tuple',
          },
        ],
        internalType:
          'struct IUiIncentiveDataProvider.UserReserveIncentiveData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50611ef2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634763753614610046578063799bdcf514610070578063976fafc514610090575b600080fd5b610059610054366004611aa2565b6100b0565b604051610067929190611e3c565b60405180910390f35b61008361007e366004611aa2565b6100d1565b6040516100679190611e6a565b6100a361009e366004611a86565b6100e6565b6040516100679190611e29565b6060806100bc846100ed565b6100c68585610d0c565b915091509250929050565b60606100dd8383610d0c565b90505b92915050565b60606100e0825b60606000826001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561012a57600080fd5b505afa15801561013e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016291906119b8565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b15801561019f57600080fd5b505afa1580156101b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101db91908101906119db565b90506060815167ffffffffffffffff811180156101f757600080fd5b5060405190808252806020026020018201604052801561023157816020015b61021e6117c8565b8152602001906001900390816102165790505b50905060005b8251811015610d03576102486117c8565b82828151811061025457fe5b6020026020010151905083828151811061026a57fe5b60209081029190910101516001600160a01b0316815261028861180a565b856001600160a01b03166335ea6a758685815181106102a357fe5b60200260200101516040518263ffffffff1660e01b81526004016102c79190611dfb565b6101806040518083038186803b1580156102e057600080fd5b505afa1580156102f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103189190611ada565b905060008160e001516001600160a01b03166375d264136040518163ffffffff1660e01b815260040160206040518083038186803b15801561035957600080fd5b505afa15801561036d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039191906119b8565b90506001600160a01b03811615610660576000806000836001600160a01b0316631652e7b78660e001516040518263ffffffff1660e01b81526004016103d79190611dfb565b60606040518083038186803b1580156103ef57600080fd5b505afa158015610403573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104279190611bed565b9250925092506000846001600160a01b03166399248ea76040518163ffffffff1660e01b815260040160206040518083038186803b15801561046857600080fd5b505afa15801561047c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a091906119b8565b9050604051806101200160405280848152602001838152602001858152602001866001600160a01b031663919cd40f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104f957600080fd5b505afa15801561050d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105319190611bd5565b81526020018760e001516001600160a01b03168152602001826001600160a01b03168152602001866001600160a01b03168152602001826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156105a057600080fd5b505afa1580156105b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d89190611c1a565b60ff168152602001866001600160a01b031663aaf5eb686040518163ffffffff1660e01b815260040160206040518083038186803b15801561061957600080fd5b505afa15801561062d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106519190611c1a565b60ff1690526020880152505050505b60008261010001516001600160a01b03166375d264136040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a057600080fd5b505afa1580156106b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d891906119b8565b90506001600160a01b038116156109a9576000806000836001600160a01b0316631652e7b78761010001516040518263ffffffff1660e01b815260040161071f9190611dfb565b60606040518083038186803b15801561073757600080fd5b505afa15801561074b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076f9190611bed565b9250925092506000846001600160a01b03166399248ea76040518163ffffffff1660e01b815260040160206040518083038186803b1580156107b057600080fd5b505afa1580156107c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e891906119b8565b9050604051806101200160405280848152602001838152602001858152602001866001600160a01b031663919cd40f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561084157600080fd5b505afa158015610855573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108799190611bd5565b81526020018861010001516001600160a01b03168152602001826001600160a01b03168152602001866001600160a01b03168152602001826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156108e957600080fd5b505afa1580156108fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109219190611c1a565b60ff168152602001866001600160a01b031663aaf5eb686040518163ffffffff1660e01b815260040160206040518083038186803b15801561096257600080fd5b505afa158015610976573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099a9190611c1a565b60ff1690526060890152505050505b60008361012001516001600160a01b03166375d264136040518163ffffffff1660e01b815260040160206040518083038186803b1580156109e957600080fd5b505afa1580156109fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2191906119b8565b90506001600160a01b03811615610cf2576000806000836001600160a01b0316631652e7b78861012001516040518263ffffffff1660e01b8152600401610a689190611dfb565b60606040518083038186803b158015610a8057600080fd5b505afa158015610a94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab89190611bed565b9250925092506000846001600160a01b03166399248ea76040518163ffffffff1660e01b815260040160206040518083038186803b158015610af957600080fd5b505afa158015610b0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3191906119b8565b9050604051806101200160405280848152602001838152602001858152602001866001600160a01b031663919cd40f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8a57600080fd5b505afa158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc29190611bd5565b81526020018961012001516001600160a01b03168152602001826001600160a01b03168152602001866001600160a01b03168152602001826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610c3257600080fd5b505afa158015610c46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6a9190611c1a565b60ff168152602001866001600160a01b031663aaf5eb686040518163ffffffff1660e01b815260040160206040518083038186803b158015610cab57600080fd5b505afa158015610cbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce39190611c1a565b60ff16905260408a0152505050505b505060019093019250610237915050565b50949350505050565b60606000836001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4957600080fd5b505afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8191906119b8565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b158015610dbe57600080fd5b505afa158015610dd2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610dfa91908101906119db565b905060606001600160a01b038516610e13576000610e16565b81515b67ffffffffffffffff81118015610e2c57600080fd5b50604051908082528060200260200182016040528015610e6657816020015b610e53611875565b815260200190600190039081610e4b5790505b50905060005b82518110156117be57610e7d61180a565b846001600160a01b03166335ea6a75858481518110610e9857fe5b60200260200101516040518263ffffffff1660e01b8152600401610ebc9190611dfb565b6101806040518083038186803b158015610ed557600080fd5b505afa158015610ee9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0d9190611ada565b9050838281518110610f1b57fe5b6020026020010151838381518110610f2f57fe5b60209081029190910101516001600160a01b039091169052610f4f6118ae565b60008260e001516001600160a01b03166375d264136040518163ffffffff1660e01b815260040160206040518083038186803b158015610f8e57600080fd5b505afa158015610fa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc691906119b8565b90506001600160a01b038116156111f3576000816001600160a01b03166399248ea76040518163ffffffff1660e01b815260040160206040518083038186803b15801561101257600080fd5b505afa158015611026573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104a91906119b8565b60e0850151604051630cdcfb9360e21b81529192506001600160a01b03841691633373ee4c9161107f918e9190600401611e0f565b60206040518083038186803b15801561109757600080fd5b505afa1580156110ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cf9190611bd5565b8352604051630cc7d40f60e11b81526001600160a01b0383169063198fa81e906110fd908d90600401611dfb565b60206040518083038186803b15801561111557600080fd5b505afa158015611129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114d9190611bd5565b60208085019190915260e08501516001600160a01b03908116604080870191909152838216606087018190529185166080870152805163313ce56760e01b81529051919263313ce56792600480840193829003018186803b1580156111b157600080fd5b505afa1580156111c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e99190611c1a565b60ff1660a0840152505b8185858151811061120057fe5b6020026020010151602001819052506112176118ae565b60008461012001516001600160a01b03166375d264136040518163ffffffff1660e01b815260040160206040518083038186803b15801561125757600080fd5b505afa15801561126b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128f91906119b8565b90506001600160a01b038116156114bd576000816001600160a01b03166399248ea76040518163ffffffff1660e01b815260040160206040518083038186803b1580156112db57600080fd5b505afa1580156112ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131391906119b8565b9050816001600160a01b0316633373ee4c8d8861012001516040518363ffffffff1660e01b8152600401611348929190611e0f565b60206040518083038186803b15801561136057600080fd5b505afa158015611374573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113989190611bd5565b8352604051630cc7d40f60e11b81526001600160a01b0383169063198fa81e906113c6908f90600401611dfb565b60206040518083038186803b1580156113de57600080fd5b505afa1580156113f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114169190611bd5565b6020808501919091526101208701516001600160a01b03908116604080870191909152838216606087018190529185166080870152805163313ce56760e01b81529051919263313ce56792600480840193829003018186803b15801561147b57600080fd5b505afa15801561148f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b39190611c1a565b60ff1660a0840152505b818787815181106114ca57fe5b6020026020010151604001819052506114e16118ae565b60008661010001516001600160a01b03166375d264136040518163ffffffff1660e01b815260040160206040518083038186803b15801561152157600080fd5b505afa158015611535573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155991906119b8565b90506001600160a01b0381161561178e576000816001600160a01b03166399248ea76040518163ffffffff1660e01b815260040160206040518083038186803b1580156115a557600080fd5b505afa1580156115b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dd91906119b8565b9050816001600160a01b0316633373ee4c8f8a61010001516040518363ffffffff1660e01b8152600401611612929190611e0f565b60206040518083038186803b15801561162a57600080fd5b505afa15801561163e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116629190611bd5565b836000018181525050816001600160a01b031663198fa81e8f6040518263ffffffff1660e01b81526004016116979190611dfb565b60206040518083038186803b1580156116af57600080fd5b505afa1580156116c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e79190611bd5565b6020808501919091526101008901516001600160a01b03908116604080870191909152838216606087018190529185166080870152805163313ce56760e01b81529051919263313ce56792600480840193829003018186803b15801561174c57600080fd5b505afa158015611760573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117849190611c1a565b60ff1660a0840152505b8189898151811061179b57fe5b602002602001015160600181905250505050505050508080600101915050610e6c565b5095945050505050565b604051806080016040528060006001600160a01b031681526020016117eb6118e3565b81526020016117f86118e3565b81526020016118056118e3565b905290565b60405180610180016040528061181e61192f565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b604051806080016040528060006001600160a01b031681526020016118986118ae565b81526020016118a56118ae565b81526020016118055b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b6040518060200160405280600081525090565b80516100e081611ea4565b60006020828403121561195e578081fd5b6119686020611e7d565b9151825250919050565b80516fffffffffffffffffffffffffffffffff811681146100e057600080fd5b805164ffffffffff811681146100e057600080fd5b805160ff811681146100e057600080fd5b6000602082840312156119c9578081fd5b81516119d481611ea4565b9392505050565b600060208083850312156119ed578182fd5b825167ffffffffffffffff80821115611a04578384fd5b818501915085601f830112611a17578384fd5b815181811115611a25578485fd5b8381029150611a35848301611e7d565b8181528481019084860184860187018a1015611a4f578788fd5b8795505b83861015611a7957611a658a82611942565b835260019590950194918601918601611a53565b5098975050505050505050565b600060208284031215611a97578081fd5b81356119d481611ea4565b60008060408385031215611ab4578081fd5b8235611abf81611ea4565b91506020830135611acf81611ea4565b809150509250929050565b6000610180808385031215611aed578182fd5b611af681611e7d565b9050611b02848461194d565b8152611b118460208501611972565b6020820152611b238460408501611972565b6040820152611b358460608501611972565b6060820152611b478460808501611972565b6080820152611b598460a08501611972565b60a0820152611b6b8460c08501611992565b60c0820152611b7d8460e08501611942565b60e0820152610100611b9185828601611942565b90820152610120611ba485858301611942565b90820152610140611bb785858301611942565b90820152610160611bca858583016119a7565b908201529392505050565b600060208284031215611be6578081fd5b5051919050565b600080600060608486031215611c01578081fd5b8351925060208401519150604084015190509250925092565b600060208284031215611c2b578081fd5b6100dd83836119a7565b6000815180845260208085019450808401835b83811015611cab57815180516001600160a01b0316885283810151611c6f858a0182611d2b565b506040810151611c836101408a0182611d2b565b5060600151611c96610260890182611d2b565b50610380969096019590820190600101611c48565b509495945050505050565b6000815180845260208085019450808401835b83811015611cab57815180516001600160a01b0316885283810151611cf0858a0182611da7565b506040810151611d0360e08a0182611da7565b5060600151611d166101a0890182611da7565b50610260969096019590820190600101611cc9565b80518252602081015160208301526040810151604083015260608101516060830152608081015160018060a01b0380821660808501528060a08401511660a08501528060c08401511660c0850152505060e0810151611d8d60e0840182611df4565b5061010080820151611da182850182611df4565b50505050565b8051825260208101516020830152604081015160018060a01b038082166040850152806060840151166060850152806080840151166080850152505060ff60a08201511660a08301525050565b60ff169052565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6000602082526100dd6020830184611c35565b600060408252611e4f6040830185611c35565b8281036020840152611e618185611cb6565b95945050505050565b6000602082526100dd6020830184611cb6565b60405181810167ffffffffffffffff81118282101715611e9c57600080fd5b604052919050565b6001600160a01b0381168114611eb957600080fd5b5056fea2646970667358221220fb68eb81a46dec111565c49d090f6d2044c2c1d9ed091363b04290b593c3699464736f6c634300060c0033';
