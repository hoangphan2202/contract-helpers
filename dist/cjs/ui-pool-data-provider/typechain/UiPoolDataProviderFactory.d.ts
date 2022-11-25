import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/providers';
import { ContractFactory } from '@ethersproject/contracts';
import { UiPoolDataProvider } from './UiPoolDataProvider';
export declare class UiPoolDataProviderFactory extends ContractFactory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        stateMutability: string;
        type: string;
    }[];
    static connect(address: string, signerOrProvider: Signer | Provider): UiPoolDataProvider;
}
//# sourceMappingURL=UiPoolDataProviderFactory.d.ts.map