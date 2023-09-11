import type WiiUCurtainAPI from './curtain';
export * from './curtain';

declare global {
	interface Window {
		/**
		 * Used by the eShop on WiiU. Unknown use
		 */
		wiiuCurtain: WiiUCurtainAPI;
	}

	/**
	 * Used by the eShop on WiiU. Unknown use
	 */
	const wiiuCurtain: WiiUCurtainAPI;
}