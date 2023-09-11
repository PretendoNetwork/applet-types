import type WiiUErrorViewerAPI from './error-viewer';
export * from './error-viewer';

declare global {
	interface Window {
		/**
		 * Used by applets to show error messages
		 */
		wiiuErrorViewer: WiiUErrorViewerAPI;
	}

	/**
	 * Used by applets to show error messages
	 */
	const wiiuErrorViewer: WiiUErrorViewerAPI;
}