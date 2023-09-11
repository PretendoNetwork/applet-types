import type WiiUNfcAPI from './nfc';
export * from './nfc';

declare global {
	interface Window {
		/**
		 * Used by the eShop on WiiU to interact with the GamePad NFC reader
		 */
		wiiuNfc: WiiUNfcAPI;
	}

	/**
	 * Used by the eShop on WiiU to interact with the GamePad NFC reader
	 */
	const wiiuNfc: WiiUNfcAPI;
}