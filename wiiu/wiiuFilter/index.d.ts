import type WiiUFilterAPI from './filter';
export * from './filter';

declare global {
	interface Window {
		/**
		 * Used by Miiverse on WiiU to check if a word is blacklisted
		 */
		wiiuFilter: WiiUFilterAPI;
	}

	/**
	 * Used by Miiverse on WiiU to check if a word is blacklisted
	 */
	const wiiuFilter: WiiUFilterAPI;
}