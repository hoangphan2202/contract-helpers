"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('Utils', () => {
    describe('getTxValue', () => {
        it('Expects to get amount', () => {
            const txValue = (0, utils_1.getTxValue)('0x0123', '123');
            expect(txValue).toEqual(utils_1.DEFAULT_NULL_VALUE_ON_TX);
        });
        it('Expects to get default', () => {
            const amount = '123';
            const txValue = (0, utils_1.getTxValue)(utils_1.API_ETH_MOCK_ADDRESS, amount);
            expect(txValue).toEqual(amount);
        });
    });
    describe('canBeEnsAddress', () => {
        it('Expects to be ens address', () => {
            const isEns = (0, utils_1.canBeEnsAddress)('0x0asdf');
            expect(isEns).toEqual(false);
        });
        it('Expects not to be ens address', () => {
            const isEns = (0, utils_1.canBeEnsAddress)('0x0asdf.eth');
            expect(isEns).toEqual(true);
        });
    });
    describe('decimalsToCurrencyUnits', () => {
        it('Expects the value to be in currency units', () => {
            const value = (0, utils_1.decimalsToCurrencyUnits)('1000000', 6);
            expect(value).toEqual('1');
        });
        it('Expects the value to be in currency units to fixed', () => {
            const value = (0, utils_1.decimalsToCurrencyUnits)('1000000123', 6);
            expect(value).toEqual('1000.000123');
        });
    });
    describe('valueToWei', () => {
        it('Expects the value to be in wei decimals', () => {
            const value = (0, utils_1.valueToWei)('1', 6);
            expect(value).toEqual('1000000');
        });
        it('Expects the value to be in wei decimals and fixed 0', () => {
            const value = (0, utils_1.valueToWei)('123.123541241123', 6);
            expect(value).toEqual('123123541');
        });
    });
    describe('augustusToAmountOffsetFromCalldata', () => {
        it('Expects 36', () => {
            const offset = (0, utils_1.augustusToAmountOffsetFromCalldata)('0x935fb84b');
            expect(offset).toEqual(36);
        });
        it('Expects 100', () => {
            const offset = (0, utils_1.augustusToAmountOffsetFromCalldata)('0xc03786b0');
            expect(offset).toEqual(100);
        });
        it('Expects 68', () => {
            const offset = (0, utils_1.augustusToAmountOffsetFromCalldata)('0xb2f1e6db');
            expect(offset).toEqual(68);
        });
        it('Expects 164', () => {
            const offset = (0, utils_1.augustusToAmountOffsetFromCalldata)('0xb66bcbac');
            expect(offset).toEqual(164);
        });
        it('Expects Error', () => {
            expect(() => (0, utils_1.augustusToAmountOffsetFromCalldata)('asdf')).toThrowError(`Unrecognized function selector for Augustus`);
        });
    });
});
//# sourceMappingURL=utils.test.js.map