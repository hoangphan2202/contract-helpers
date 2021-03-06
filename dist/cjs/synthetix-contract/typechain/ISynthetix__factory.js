"use strict";
/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISynthetix__factory = void 0;
const ethers_1 = require("ethers");
class ISynthetix__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISynthetix__factory = ISynthetix__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'transferableSynthetix',
        outputs: [
            {
                internalType: 'uint256',
                name: 'transferable',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=ISynthetix__factory.js.map