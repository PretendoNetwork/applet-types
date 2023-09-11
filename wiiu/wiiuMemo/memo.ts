export default interface WiiUMemoAPI {
	/**
	 * Opens the drawing UI
	 * @param reset - Clear the previous drawing, if exists
	 */
	open: (reset: boolean) => void;

	/**
	 * Opens the drawing UI with an image
	 * @param reset - Same as wiiuMemo.open()?
	 * @param image - Image string. Format unknown. BMP? TGA?
	 * @returns Unknown
	 */
	openWithImage: (reset: boolean, image: string) => boolean;

	/**
	 * Sets a stamp in the UI?
	 * @param reset - Same as wiiuMemo.open()?
	 * @param stamp - Stamp data?
	 * @returns Unknown
	 */
	setStamp: (reset: boolean, stamp: string) => boolean;

	/**
	 * Gets the drawing image in one of 2 formats
	 * @param tga - True for TGA format, false for BMP format
	 * @returns Base64 encoded image data
	 */
	getImage: (tga: boolean) => string;

	/**
	 * Resets the drawing UI
	 */
	reset: () => void;

	/**
	 * Checks if the UI is finished drawing. Used for polling
	 * @returns True if UI is finished
	 */
	isFinish: () => boolean;
}