import type WiiULocalStorageAPI from './local-storage';
export * from './local-storage';

declare global {
	interface Window {
		/**
		 * Used by applets to interact with the browsers localStorage
		 */
		wiiulocalStorage: WiiULocalStorageAPI;
	}

	/**
	 * Used by applets to interact with the browsers localStorage
	 */
	const wiiulocalStorage: WiiULocalStorageAPI;
}