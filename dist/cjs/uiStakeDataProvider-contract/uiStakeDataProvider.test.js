"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const _mocks_1 = require("./_mocks");
const StakeUiHelperFactory_1 = require("./typechain/StakeUiHelperFactory");
const index_1 = require("./index");
describe('UiStakeDataProvider', () => {
    const user = '0x0000000000000000000000000000000000000001';
    const uiStakeDataProvider = '0x0000000000000000000000000000000000000002';
    const dataProvider = new ethers_1.providers.JsonRpcProvider();
    jest.spyOn(StakeUiHelperFactory_1.StakeUiHelperFactory, 'connect').mockReturnValue({
        getGeneralStakeUIData: async () => Promise.resolve(_mocks_1.GeneralStakeUIDataRaw),
        getUserStakeUIData: async () => Promise.resolve(_mocks_1.GetUserStakeUIDataRaw),
    });
    describe('Init', () => {
        it('Expects to create the instance', () => {
            const instance = new index_1.UiStakeDataProvider({
                uiStakeDataProvider,
                provider: dataProvider,
            });
            expect(instance instanceof index_1.UiStakeDataProvider);
        });
    });
    describe('getUserStakeUIData', () => {
        const instance = new index_1.UiStakeDataProvider({
            uiStakeDataProvider,
            provider: dataProvider,
        });
        it('Expects to get user raw data', async () => {
            const rawData = await instance.getUserStakeUIData({ user });
            expect(rawData).toEqual(_mocks_1.GetUserStakeUIDataRaw);
        });
        it('Expects to fail if user not eth address', async () => {
            const user = 'asdf';
            await expect(async () => instance.getUserStakeUIData({ user })).rejects.toThrowError(new Error(`Address: ${user} is not a valid ethereum Address`));
        });
    });
    describe('getGeneralStakeUIData', () => {
        const instance = new index_1.UiStakeDataProvider({
            uiStakeDataProvider,
            provider: dataProvider,
        });
        it('Expects to get general stake raw data', async () => {
            const rawData = await instance.getGeneralStakeUIData();
            expect(rawData).toEqual(_mocks_1.GeneralStakeUIDataRaw);
        });
    });
    describe('getUserStakeUIDataHumanized', () => {
        const instance = new index_1.UiStakeDataProvider({
            uiStakeDataProvider,
            provider: dataProvider,
        });
        it('Expects to get user data in a humanized format', async () => {
            const rawData = await instance.getUserStakeUIDataHumanized({ user });
            expect(rawData).toEqual(_mocks_1.GetUserStakeUIDataHumanized);
        });
        it('Expects to fail if user not eth address', async () => {
            const user = 'asdf';
            await expect(async () => instance.getUserStakeUIDataHumanized({ user })).rejects.toThrowError(new Error(`Address: ${user} is not a valid ethereum Address`));
        });
    });
    describe('getGeneralStakeUIDataHumanized', () => {
        const instance = new index_1.UiStakeDataProvider({
            uiStakeDataProvider,
            provider: dataProvider,
        });
        it('Expects to get general stake data in a humanized format', async () => {
            const rawData = await instance.getGeneralStakeUIDataHumanized();
            expect(rawData).toEqual(_mocks_1.GeneralStakeUIDataHumanized);
        });
    });
});
//# sourceMappingURL=uiStakeDataProvider.test.js.map