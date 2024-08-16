export default interface WiiUMainApplicationAPI {
	/**
	 * Returns a JPEG base64 screenshot
	 * @param screen - True for TV screen, False for GamePad screen
	 * @returns JPEG base64 screenshot
	 */
	getScreenShot: (screen: boolean) => string;

	/**
	 * Gets the background titles AppData
	 * @returns Titles AppData
	 */
	getAppData: () => string;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getExternalImageData: () => string;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getExternalBinaryData: () => string;
}
