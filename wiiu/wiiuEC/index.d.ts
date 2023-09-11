import type WiiUECAPI from './ec';
export * from './ec';

declare global {
	interface Window {
		/**
		 * Used by the eShop on WiiU to install titles
		 */
		wiiuEC: WiiUECAPI;
	}

	/**
	 * Used by the eShop on WiiU to install titles
	 */
	const wiiuEC: WiiUECAPI;
}