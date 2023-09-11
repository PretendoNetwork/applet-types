import type WiiUSessionStorageAPI from './session-storage';
export * from './session-storage';

declare global {
	interface Window {
		/**
		 * Used by applets to interact with the browsers sessionStorage
		 */
		wiiuSessionStorage: WiiUSessionStorageAPI;
	}

	/**
	 * Used by applets to interact with the browsers sessionStorage
	 */
	const wiiuSessionStorage: WiiUSessionStorageAPI;
}