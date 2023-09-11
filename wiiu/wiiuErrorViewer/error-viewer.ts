export default interface WiiUErrorViewerAPI {
	/**
	 * Display the provided error code
	 * @param errorCode - Numerical error code
	 * @example
	 * // Displays error code 015-5927
	 * wiiuErrorViewer.openByCode(155927);
	 */
	openByCode: (errorCode: number) => void;

	/**
	 * Display the provided error code and message
	 * @param errorCode - Numerical error code
	 * @param errorMessage - Error message
	 * @example
	 * // Displays error code 015-5927 with the message "you were bad"
	 * wiiuErrorViewer.openByCodeAndMessage(155927, 'you were bad');
	 */
	openByCodeAndMessage: (errorCode: number, errorMessage: string) => void;
}