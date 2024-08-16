export default interface WiiUCurtainAPI {
	/**
	 * Hides the TV screen to show an screen prompting to use the Wii U GamePad (used on eShop for Credit Card settings)
	 */
	open: () => void;

	/**
	 * Unhides the TV screen prompt
	 */
	close: () => void;
}
