export default interface WiiUBrowserAPI {
	/**
	 * Closes the title
	 */
	closeApplication: () => void;

	/**
	 * Opens the home menu UI
	 */
	jumpToHomeButtonMenu: () => void;

	/**
	 * Opens the browser to the given URL
	 * @param url - URL to jump to
	 */
	jumpToBrowser: (url: string) => void;

	/**
	 * Opens Miiverse
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 * @param unk - Unknown. Community ID?
	 */
	jumpToMiiverse: (unk: string) => void;

	/**
	 * Opens the data managment screen
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 */
	jumpToDataManage: () => void;

	/**
	 * Opens the system update screen
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 */
	jumpToUpdate: () => void;

	/**
	 * Opens the eShop
	 * @remark
	 *
	 * Only seen in Miiverse?
	 *
	 * @param unk - Unknown. Link?
	 */
	jumpToEshop: (unk: string) => void;

	/**
	 * Opens TVii
	 * @remark
	 *
	 * Only seen in Miiverse?
	 *
	 */
	jumpToTvii: () => void;

	/**
	 * Opens a specific title
	 * @remark
	 *
	 * Only seen in Miiverse?
	 *
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 */
	jumpToApplication: (unk1: string, unk2: number, unk3: number, unk4: string, unk5: string) => void;

	/**
	 * Tells the applet it can stop the loading screen at boot. eShop requires a boolean flag, Miiverse does not
	 */
	endStartUp: (flag?: boolean) => void;

	/**
	 * Show or hide the loading spinner
	 * @param flag - Show/hide
	 */
	showLoadingIcon: (flag: boolean) => void;

	/**
	 * Checks if the loading spinner can be shown
	 * @returns True if spinner disallowed
	 */
	isLoadingIconProhibited: () => boolean;

	/**
	 * Changes whether the loading spinner can be shown
	 * @param flag - Allow/disallow
	 */
	prohibitLoadingIcon: (flag: boolean) => void;

	/**
	 * Checks if the page can be interacted with
	 * @returns True if user interaction is disallowed
	 */
	isUserOperationLocked: () => boolean;

	/**
	 * Locks/unlocks user interaction
	 * @param flag - Allow/disallow
	 */
	lockUserOperation: (flag: boolean) => void;

	/**
	 * Checks if the GamePad home button is locked
	 * @returns True if the GamePad home button is locked
	 */
	isHomeButtonMenuLocked: () => boolean;

	/**
	 * Lock/unlock the GamePad home button
	 * @param flag - Lock/unlock
	 */
	lockHomeButtonMenu: (flag: boolean) => void;

	/**
	 * Checks if the console power button is locked
	 * @returns True if the console power button is locked
	 */
	isPowerButtonLocked: () => boolean;

	/**
	 * Lock/unlock the console power button
	 * @param flag - Lock/unlock
	 */
	lockPowerButton: (unk: boolean) => void;

	/**
	 * Checks if there is anything left in the history list
	 * @returns True if can continue back
	 */
	canHistoryBack: () => boolean;

	/**
	 * Unknown
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 * @param language - Message language?
	 */
	setMessageLanguage: (language: string) => void;

	/**
	 * Return back to the app which launched the title
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 */
	returnToCaller: () => void;
}