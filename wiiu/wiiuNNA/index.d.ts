import type WiiUNNAAPI from './nna';
export * from './nna';

declare global {
	interface Window {
		/**
		 * Used by applets to interact with the users Nintendo Network Account
		 */
		wiiuNNA: WiiUNNAAPI;
	}

	/**
	 * Used by applets to interact with the users Nintendo Network Account
	 */
	const wiiuNNA: WiiUNNAAPI;
}