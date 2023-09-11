export default interface WiiUSystemSettingAPI {
	/**
	 * Checks the parental control settings for the eShop
	 * @returns An object containing parental control settings
	 */
	getParentalControlForEShop: () => {
		isLocked: boolean;
	};

	/**
	 * Checks the parental control settings for games
	 * @returns An object containing parental control settings
	 */
	getParentalControlForGamePlay: () => {
		isLocked: boolean;
		age: number;
	};

	/**
	 * Checks the parental control settings for the browser
	 * @returns An object containing parental control settings
	 */
	getParentalControlForBrowser: () => {
		isLocked: boolean;
	};

	/**
	 * Checks the parental control settings for Miiverse
	 * @returns An object containing parental control settings
	 */
	getParentalControlForMiiverse: () => {
		restrictionLevel: string;
	};

	/**
	 * Checks if the parental control PIN is correct
	 * @param pin - Parental control PIN
	 * @returns An object containing a boolean flag
	 */
	checkParentalPinCode: (pin: string) => {
		result: boolean
	};

	/**
	 * Checks if the console can upload state data with BOSS
	 * @returns An object containing a boolean flag
	 */
	getSpotPassUploadConsoleInfoState: () => {
		enable: boolean;
	};

	/**
	 * Gets the consoles region
	 * @returns An object with the consoles region (country?) code. United States returns "USA"?
	 */
	getRegion: () => {
		code: string;
	};

	/**
	 * Gets the consoles country
	 * @returns An object with the consoles country code. United States returns "US"
	 */
	getCountry: () => {
		code: string;
	};

	/**
	 * Gets the consoles language
	 * @returns An object with the consoles language code. English returns "en"
	 */
	getLanguage: () => {
		code: string;
	};

	/**
	 * Gets the consoles current UTC epoch
	 * @returns An object with the consoles current UTC epoch
	 */
	getUTC: () => {
		epochMilliSeconds: number;
	};

	/**
	 * Checks if the eShop has been initialized. Set with wiiuSystemSetting.setEShopInitialized()
	 * @remark
	 *
	 * Only seen in eShop
	 *
	 * @returns An object with the eShops initialization state
	 */
	getEShopInitialized: () => {
		initialized: boolean;
	};

	/**
	 * Changes the eShop initialization flag
	 * @remark
	 *
	 * Only seen in eShop
	 *
	 * @param flag - Initialized
	 * @returns An object. Always empty
	 */
	setEShopInitialized: (flag: boolean) => {};

	/**
	 * Unknown
	 * @remark
	 *
	 * Only seen in eShop
	 *
	 * @returns An object containing a boolean flag
	 */
	getCaffeineFlag: () => {
		enable: boolean;
	};

	/**
	 * Unknown
	 * @remark
	 *
	 * Only seen in eShop
	 *
	 * @param flag - Enable boolean
	 * @returns An object. Always empty
	 */
	setCaffeineFlag: (flag: boolean) => {};
}