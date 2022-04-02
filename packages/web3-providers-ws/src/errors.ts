import { Web3Error, ERR_PROVIDER } from '@jamo/web3-common';

export class Web3WSProviderError extends Web3Error {
	public code = ERR_PROVIDER;
}
