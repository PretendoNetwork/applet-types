import type WiiUPDMAPI from './pdm';
export * from './pdm';

declare global {
	interface Window {
		/**
		 * Used by applets to get play statistics
		 */
		wiiuPDM: WiiUPDMAPI;
	}

	/**
	 * Used by applets to get play statistics
	 */
	const wiiuPDM: WiiUPDMAPI;
}