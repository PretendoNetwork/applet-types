import type WiiUSoundAPI from './sound';
export * from './sound';

declare global {
	interface Window {
		/**
		 * Used by applets to play various sounds
		 */
		wiiuSound: WiiUSoundAPI;
	}

	/**
	 * Used by applets to play various sounds
	 */
	const wiiuSound: WiiUSoundAPI;
}