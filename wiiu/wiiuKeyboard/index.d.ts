import type WiiUKeyboardAPI from './keyboard';
export * from './keyboard';

declare global {
	interface Window {
		/**
		 * Used by applets to show the keyboard in various states
		 */
		wiiuKeyboard: WiiUKeyboardAPI;
	}

	/**
	 * Used by applets to show the keyboard in various states
	 */
	const wiiuKeyboard: WiiUKeyboardAPI;
}