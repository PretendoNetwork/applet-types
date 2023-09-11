export default interface WiiUDialogAPI {
	/**
	 * Shows an alert
	 * @param message - Text shown in the dialog
	 * @param button - Text shown in the button
	 */
	alert: (message: string, button: string) => void;

	/**
	 * Shows a confirmation message
	 * @param message - Text shown in the dialog
	 * @param rightButton - Text shown on the deny button
	 * @param leftButton - Text shown on the confirm button
	 * @returns True if confirmed
	 */
	confirm: (message: string, rightButton: string, leftButton: string) => boolean;

	/**
	 * Shows the loading spinner
	 * @param message - Message in dialog
	 */
	showLoading: (message: string) => void;

	/**
	 * Stops the loading spinner
	 */
	hideLoading: () => void;
}