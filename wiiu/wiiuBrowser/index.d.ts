import type WiiUBrowserAPI from './browser';
export * from './browser';

declare global {
	interface Window {
		/**
		 * Used by applets for miscellaneous functions
		 */
		wiiuBrowser: WiiUBrowserAPI;
	}

	/**
	 * Used by applets for miscellaneous functions
	 */
	const wiiuBrowser: WiiUBrowserAPI;
}