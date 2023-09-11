import type WiiUMemoAPI from './memo';
export * from './memo';

declare global {
	interface Window {
		/**
		 * Used by Miiverse on WiiU to interact with the drawing UI
		 */
		wiiuMemo: WiiUMemoAPI;
	}

	/**
	 * Used by Miiverse on WiiU to interact with the drawing UI
	 */
	const wiiuMemo: WiiUMemoAPI;
}