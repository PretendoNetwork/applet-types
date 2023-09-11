export default interface WiiUMainApplicationAPI {
	/**
	 * Unknown
	 * @param unk - Unknown. Maybe a screen ID?
	 * @returns Unknown
	 */
	getScreenShot: (unk: boolean) => string;

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