import type WiiUDialogAPI from './dialog';
export * from './dialog';

declare global {
	interface Window {
		/**
		 * Used by applets to show various dialogs
		 */
		wiiuDialog: WiiUDialogAPI;
	}

	/**
	 * Used by applets to show various dialogs
	 */
	const wiiuDialog: WiiUDialogAPI;
}