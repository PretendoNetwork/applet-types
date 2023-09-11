import type WiiUMainApplicationAPI from './main-application';
export * from './main-application';

declare global {
	interface Window {
		/**
		 * Used by Miiverse on WiiU to get information about the background title
		 */
		wiiuMainApplication: WiiUMainApplicationAPI;
	}

	/**
	 * Used by Miiverse on WiiU to get information about the background title
	 */
	const wiiuMainApplication: WiiUMainApplicationAPI;
}