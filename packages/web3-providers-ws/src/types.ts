import { Web3APIMethod, Web3APIPayload, Web3APISpec, DeferredPromise } from '@jamo/web3-common';

export type ReconnectOptions = {
	autoReconnect: boolean;
	delay: number;
	maxAttempts: number;
};

export interface WSRequestItem<
	API extends Web3APISpec,
	Method extends Web3APIMethod<API>,
	ResponseType,
> {
	payload: Web3APIPayload<API, Method>;
	deferredPromise: DeferredPromise<ResponseType>;
}
