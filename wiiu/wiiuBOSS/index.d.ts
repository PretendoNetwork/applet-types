import type WiiUBOSSAPI from './boss';
export * from './boss';

declare global {
	interface Window {
		/**
		 * Used by applets to interact with the BOSS (SpotPass) API
		 */
		wiiuBOSS: WiiUBOSSAPI;
	}

	/**
	 * Used by applets to interact with the BOSS (SpotPass) API
	 */
	const wiiuBOSS: WiiUBOSSAPI;
}