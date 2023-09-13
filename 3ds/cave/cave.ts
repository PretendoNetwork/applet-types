// * Converts an enums values into a number union
export type Enumerize<T extends number> = `${Extract<T, number>}` extends `${infer N extends number}` ? N : never;

// TODO - Name these fields better?
export const enum Buttons {
	EXIT = 0,
	BACK = 1,
	ACTIVITY = 2,
	COMMUNITIES = 3,
	NOTIFICATIONS = 4,
	MY_MENU = 5,
	GUIDE = 7,
	BACK_KEY = 99
};

export type Button = Enumerize<Buttons>;

// TODO - Name these fields better?
export const enum SoundEffects {
	OLV_CANCEL = 'OLV_CANCEL',
	OLV_OK = 'OLV_OK',
	OK_SUB = 'OLV_OK_SUB',
	CHECKBOX_CHECK = 'OLV_CHECKBOX_CHECK',
	CHECKBOX_UNCHECK = 'OLV_CHECKBOX_UNCHECK',
	MII_ADD = 'OLV_MII_ADD',
	RELOAD = 'OLV_RELOAD',
	BALLOON_OPEN = 'OLV_BALLOON_OPEN',
	BALLOON_CLOSE = 'OLV_BALLOON_CLOSE',
	SCROLL_PAGE = 'WAVE_SCROLL_PAGE',
	SCROLL_PAGE_LR = 'WAVE_SCROLL_PAGE_LR',
	SCROLL_LIMIT_LR = 'WAVE_SCROLL_LIMIT_LR',
	TOUCH = 'CTR_COMMON_TOUCH',
	TOUCHOUT = 'CTR_COMMON_TOUCHOUT',
	TOUCHOUT_S = 'CTR_COMMON_TOUCHOUT_S',
	TOUCHIN = 'CTR_COMMON_TOUCHIN',
	TOGGLE = 'CTR_COMMON_TOGGLE',
	SILENT = 'CTR_COMMON_SILENT',
	BUTTON = 'CTR_COMMON_BUTTON',
	CTR_OK = 'CTR_COMMON_OK',
	RETURN = 'CTR_COMMON_RETURN',
	CTR_CANCEL = 'CTR_COMMON_CANCEL',
	WAIT = 'CTR_COMMON_WAIT',
	WAIT_END = 'CTR_COMMON_WAIT_END',
	CONNECT = 'CTR_COMMON_CONNECT',
	ERROR = 'CTR_COMMON_ERROR',
	NOTICE = 'CTR_COMMON_NOTICE',
	NOMOVE = 'CTR_COMMON_NOMOVE',
	SCROLL = 'CTR_COMMON_SCROLL',
	SCROLL_LIST = 'CTR_COMMON_SCROLL_LIST',
	SCROLL_TEXT = 'CTR_COMMON_SCROLL_TEXT',
	SCROLL_END = 'CTR_COMMON_SCROLL_END',
	DIALOG = 'CTR_COMMON_DIALOG',
	SYSAPPLET_END = 'CTR_COMMON_SYSAPPLET_END',
	HG_Prev = 'CTR_SPIDER_HG_Prev',
	HG_Next = 'CTR_SPIDER_HG_Next',
	MV_START = 'CTR_SPIDER_MV_START',
	LINK = 'CTR_SPIDER_LINK',
	YOMIKOMI = 'CTR_SPIDER_YOMIKOMI',
	YOMIEND = 'CTR_SPIDER_YOMIEND',
	YomiCancel = 'CTR_SPIDER_YomiCancel',
	MV_KAKTEI = 'CTR_SPIDER_MV_KAKTEI',
	MV_LINE = 'CTR_SPIDER_MV_LINE',
	MV_CURSOR = 'CTR_SPIDER_MV_CURSOR',
	FavCursor = 'CTR_SPIDER_FavCursor',
	Navi = 'CTR_SPIDER_Navi',
	Navi_On = 'CTR_SPIDER_Navi_On',
	Navi_Off = 'CTR_SPIDER_Navi_Off',
	ZOOM2BIG = 'CTR_SPIDER_ZOOM2BIG',
	ZOOM2SMALL = 'CTR_SPIDER_ZOOM2SMALL',
	LINK_CLICK = 'CTR_SPIDER_LINK_CLICK',
	BTN_CLICK = 'CTR_SPIDER_BTN_CLICK',
	Ticker = 'CTR_SPIDER_Ticker',
	SEL_START = 'CTR_SPIDER_SEL_START',
	SEL_CURSOR = 'CTR_SPIDER_SEL_CURSOR',
	InfoOn = 'CTR_SPIDER_InfoOn',
	SEL_END = 'CTR_SPIDER_SEL_END'
};

export type SoundEffect = `${SoundEffects}`;

// TODO - Name these fields better?
export const enum BackgroundMusic {
	ACCOUNT_OP = 'BGM_ACCOUNT_OP',
	MAIN = 'BGM_CAVE_MAIN_2',
	MAIN_LOOP = 'BGM_CAVE_MAIN_LOOP',
	MAIN_LOOP_NOWAIT = 'BGM_CAVE_MAIN_LOOP_NOWAIT',
	WORLD_MAP_MINT = 'BGM_CAVE_WORLD_MAP_MINT',
	WORLD_MAP = 'BGM_CAVE_WORLD_MAP',
	MAIN_OFFLINE = 'BGM_CAVE_MAIN_OFFLINE',
	SETTING = 'BGM_CAVE_SETTING',
	SYOKAI = 'BGM_CAVE_SYOKAI',
	SYOKAI2 = 'BGM_CAVE_SYOKAI2'
};

export type BGM = `${BackgroundMusic}`;

// TODO - Name these fields better?
export const enum Screens {
	TOP = 0,
	BOTTOM = 1
};

export type Screen = Enumerize<Screens>;

// TODO - Name these fields better?
export const enum MiiFeelings {
	DEFAULT = 0, // * This is actually called "normal" internally but I feel like this makes more sense
	HAPPY = 1,
	WINK = 2, // * This is actually called "like" internally but I didn't feel like that made sense
	SURPRISED = 3,
	FRUSTRATED = 4,
	PUZZLED = 5
};

export type MiiFeeling = Enumerize<MiiFeelings>;

// * Applets have a dedicated "callback" type for their custom JS APIs
export type AppletCallback = () => void; // TODO - Check if this signature is correct

export default interface CaveAPI {
	/**
	 * Enable and disables the back button
	 * @param flag - False to disable, true to enable
	 */
	toolbar_enableBackBtnFunc: (flag: boolean) => void;

	/**
	 * Sets a callback for the given button
	 * @param button - Button ID to assign the callback to
	 * @param callback - Tap callback
	 */
	toolbar_setCallback: (button: Button, callback: AppletCallback) => void;

	/**
	 * Enable or disables the toolbar visibility
	 * @param flag - False to disable, true to enable
	 */
	toolbar_setVisible: (flag: boolean) => void;

	/**
	 * Changes the toolbars button to be either a back button or exit button
	 * @param button - Button ID. Either EXIT (0) or BACK (1)
	 */
	toolbar_setButtonType: (button: Buttons.EXIT | Buttons.BACK) => void;

	/**
	 * Changes the toolbars active button type. Used with toolbar_setCallback
	 * @param button - Button ID. Can be ACTIVITY (2), COMMUNITIES (3), NOTIFICATIONS (4), MY_MENU (5)
	 */
	toolbar_setActiveButton: (button: Omit<Button, Buttons.EXIT | Buttons.BACK | Buttons.GUIDE | Buttons.BACK_KEY>) => void;

	/**
	 * Updates the counter of unread notifications
	 * @param count - New notification count
	 */
	toolbar_setNotificationCount: (count: number) => void;

	/**
	 * Unknown
	 * @param mode - Unknown. Toolbar mode? Only seen 1 be used
	 */
	toolbar_setMode: (mode: number) => void; // * What is mode?

	/**
	 * Unknown
	 * @param message - Unknown. What is "wide button"?
	 */
	toolbar_setWideButtonMessage: (message: string) => void;

	/**
	 * Sets callbacks for the toolbar buttons
	 * @param myMenuCallback - Callback for the MY_MENU button
	 * @param activityCallback - Callback for the ACTIVITY button
	 * @param communityCallback - Callback for the COMMUNITIES button
	 * @param notificationCallback - Callback for the NOTIFICATIONS button
	 */
	toolbar_setToolbarCallback: (myMenuCallback: AppletCallback, activityCallback: AppletCallback, communityCallback: AppletCallback, notificationCallback: AppletCallback) => void;

	/**
	 * Unknown
	 * @returns Some button ID?
	 */
	toolbar_getButtonType: () => Button;

	/**
	 * Unknown
	 * @param flag - False to disable, true to enable
	 */
	toolbar_enableBackBtnKeyAnim: (flag: boolean) => void;

	/**
	 * Unknown
	 */
	toolbar_executeBackBtnAnim: () => void;

	/**
	 * Opens the Miiverse drawing pad
	 * @returns Unknown
	 */
	memo_open: () => boolean;

	/**
	 * Clears the Miiverse drawing pad
	 */
	memo_clear: () => void;

	/**
	 * Unknown
	 * @returns True if image is valid. What makes an image valid?
	 */
	memo_hasValidImage: () => boolean;

	/**
	 * @returns The current drawing pad image as a base64 encoded BMP
	 */
	memo_getImageBmp: () => string;

	/**
	 * @returns The current drawing pad image as a TGA
	 */
	memo_getImageRawTga: () => string;

	/**
	 * Fills the drawing UI with the image
	 * @param image - Base64 encoded BMP
	 */
	memo_setImageBmp: (image: string) => void;

	/**
	 * Unknown
	 * @param image - New image in TGA format?
	 */
	memo_setImageRawTga: (image: string) => void;

	/**
	 * @returns The current drawing pad image as a compressed TGA
	 */
	memo_getImageZipTga: () => string;

	/**
	 * Unknown
	 * @param image - New compressed image in TGA format?
	 */
	memo_setImageZipTga: (image: string) => void;

	/**
	 * Display the provided error code
	 * @param errorCode - Numerical error code
	 * @example
	 * // Displays error code 015-5927
	 * cave.error_callErrorViewer(155927);
	 */
	error_callErrorViewer: (errorCode: number) => void;

	/**
	 * Display the provided error code and message
	 * @param errorCode - Numerical error code
	 * @param errorMessage - Error message
	 * @example
	 * // Displays error code 015-5927 with the message "you were bad"
	 * cave.error_callFreeErrorViewer(155927, 'you were bad');
	 */
	error_callFreeErrorViewer: (errorCode: number, errorMessage: string) => void;

	/**
	 * @param errorCode - Numerical error code
	 * @returns The system error message for the given error code
	 */
	error_getMessage: (errorCode: number) => string;

	/**
	 * Lock input and enter loading state (with white fade effect)
	 */
	transition_begin: () => void;

	/**
	 * Release input lock (with white fade effect)
	 */
	transition_end: () => void;

	/**
	 * Lock input to loading state (no effect)
	 */
	transition_beginWithoutEffect: () => void;

	/**
	 * Release input lock (no effect)
	 */
	transition_endWithoutEffect: () => void;

	/**
	 * Sets an item in the browsers sessionStorage
	 * @param key - Items key
	 * @param value - Items value
	 * @returns Unknown. Maybe the index?
	 */
	ls_setItem: (key: string, value: string) => number;

	/**
	 * @param key - Items key
	 * @returns The item from sessionStorage
	 */
	ls_getItem: (key: string) => string;

	/**
	 * @param index - Items index
	 * @returns Items key from the browsers sessionStorage by it's index
	 */
	ls_getKeyAt: (index: number) => string;

	/**
	 * @returns The number of items in the browsers sessionStorage
	 */
	ls_getCount: () => number

	/**
	 * Removes an item from the browsers sessionStorage
	 * @param key - Items key
	 */
	ls_removeItem: (key: string) => void;

	/**
	 * Clears the browsers sessionStorage?
	 */
	ls_clear: () => void

	/**
	 * Sets if the applet is using guest mode
	 * @param flag - True if launched, false if not launched
	 */
	ls_setGuestModeLaunched: (flag: boolean) => void;

	/**
	 * @returns True if guest mode has been launched
	 */
	ls_hasGuestModeLaunched: () => boolean;

	/**
	 * Sets sessionStorage key `custk` (Can Use Servive ToKen) to the given boolean
	 * @param flag - True if cached token can be used, false if not
	 */
	ls_setCanUseCachedServiceToken: (flag: boolean) => void;

	/**
	 * @returns sessionStorage key `custk` (Can Use Servive ToKen)
	 */
	ls_canUseCachedServiceToken: () => boolean;

	/**
	 * Sets an item in the browsers localStorage
	 * @param key - Items key
	 * @param value - Items value
	 * @returns Unknown. Items index?
	 */
	lls_setItem: (key: string, value: string) => number;

	/**
	 * @param key - Items key
	 * @returns Item from the browsers localStorage
	 */
	lls_getItem: (key: string) => string;

	/**
	 * @param index - Items index
	 * @returns Items key from the browsers localStorage by it's index
	 */
	lls_getKeyAt: (index: number) => string;

	/**
	 * Removes an item from the browsers localStorage
	 * @param key - Items key
	 */
	lls_removeItem: (key: string) => void;

	/**
	 * Clear localStorage
	 */
	lls_clear: () => void;

	/**
	 * @returns The number of items in the browsers localStorage
	 */
	lls_getCount: () => number;

	/**
	 * Unknown
	 * @param key - Seems to be either "upside" or "downside"?
	 * @param value - Seems to be either 0 or 3?
	 * @returns Unknown
	 */
	lls_setCaptureImage: (key: string, value: number) => number;

	/**
	 * @param key - The key set in lls_setCaptureImage?
	 * @returns An image path based on lls_setCaptureImage?
	 */
	lls_getPath: (key: string) => string;

	/**
	 * Shows a dialog using the provided title, message, and single button text
	 * @param title - Dialog title text
	 * @param message - Dialog message text
	 * @param buttonText - Dialog button text
	 * @returns Unknown
	 */
	dialog_oneButton: (title: string, message: string, buttonText: string) => number;

	/**
	 * Shows a dialog with 2 buttons using the provided title, message, and button texts
	 * @param title - Dialog title text
	 * @param message - Dialog message text
	 * @param leftButtonText - Dialog left button text
	 * @param rightButtonText - Dialog right button text
	 * @returns Unknown. Which button was pressed?
	 */
	dialog_twoButton: (title: string, message: string, leftButtonText: string, rightButtonText: string) => number;

	/**
	 * Shows a left-aligned dialog using the provided title, message, and single button text
	 * @param title - Dialog title text
	 * @param message - Dialog message text
	 * @param buttonText - Dialog button text
	 * @returns Unknown
	 */
	dialog_oneButtonAlignL: (title: string, message: string, buttonText: string) => number;

	/**
	 * Shows a left-aligned dialog with 2 buttons using the provided title, message, and button texts
	 * @param title - Dialog title text
	 * @param message - Dialog message text
	 * @param leftButtonText - Dialog left button text
	 * @param rightButtonText - Dialog right button text
	 * @returns Unknown. Which button was pressed?
	 */
	dialog_twoButtonAlignL: (title: string, message: string, leftButtonText: string, rightButtonText: string) => number;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	dialog_hint: (unk: string) => void;

	/**
	 * Starts a wait dialog
	 * @param title - Dialog title
	 * @param message - Dialog message
	 */
	dialog_beginWait: (title: string, message: string) => void;

	/**
	 * Close wait dialog
	 */
	dialog_endWait: () => void;

	/**
	 * @param feeling - Changes the expression the Mii render uses
	 * @returns The users Mii render as base64 encoded
	 */
	mii_getIconBase64: (feeling: MiiFeeling) => string;

	/**
	 * Gets the users current Mii name
	 * @returns Users Mii name
	 */
	mii_getName: () => string;

	/**
	 * Check if your Mii is registered
	 * @returns True if registered
	 */
	mii_isRegistered: () => boolean;

	/**
	 * Plays a sound effect
	 * @param label - The sound effect name
	 */
	snd_playSe: (label: SoundEffect) => void;

	/**
	 * Plays background music song
	 * @param label - The background music name
	 */
	snd_playBgm: (label: BGM) => void;

	/**
	 * Stops background music
	 * @param unk - Unknown
	 */
	snd_stopBgm: (unk: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	snd_changeScene: (unk: string) => void;

	/**
	 * Shows a full keyboard
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @param isMultiline - True if input can be multi line
	 * @param isConvertible - Unknown
	 * @returns The keyboard input
	 */
	swkbd_callFullKeyboard: (text: string, maxLength: number, minLength: number, isMonospace: boolean, isMultiline: boolean, isConvertible: boolean) => string;

	/**
	 * Shows a full keyboard with a guide
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @param isMultiline - True if input can be multi line
	 * @param isConvertible - Unknown
	 * @param guide - Guide text for what to enter on the keyboard
	 * @returns The keyboard input
	 */
	swkbd_callFullKeyboardWithGuide: (text: string, maxLength: number, minLength: number, isMonospace: boolean, isMultiline: boolean, isConvertible: boolean, guide: string) => string;

	/**
	 * Shows a 0-9 number keyboard
	 * @param number - Default number
	 * @param maxLength - Max number of digits
	 * @param minLength - Min number of digits
	 * @param maxNumber - Max number
	 * @param minNumber - Min number
	 * @param isMonospace - True to mono-space the characters
	 * @returns The keyboard input
	 */
	swkbd_callNumberKeyboard: (number: number, maxLength: number, minLength: number, maxNumber: number, minNumber: number, isMonospace: boolean) => number;

	/**
	 * Shows a 0-9 number keyboard with a guide
	 * @param number - Default number
	 * @param maxLength - Max number of digits
	 * @param minLength - Min number of digits
	 * @param maxNumber - Max number
	 * @param minNumber - Min number
	 * @param isMonospace - True to mono-space the characters
	 * @param guide - Guide text for what to enter on the keyboard
	 * @returns The keyboard input
	 */
	swkbd_callNumberKeyboardWithGuide: (number: number, maxLength: number, minLength: number, maxNumber: number, minNumber: number, isMonospace: boolean, guide: string) => number;

	/**
	 * Shows a keyboard with only alphanumeric characters
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @param isMultiline - True if input can be multi line
	 * @returns The keyboard input
	 */
	swkbd_callAlphanumericKeyboard: (text: string, maxLength: number, minLength: number, isMonospace: boolean, isMultiline: boolean) => string;

	/**
	 * Shows a keyboard with only alphanumeric characters with a guide
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @param isMultiline - True if input can be multi line
	 * @param guide - Guide text for what to enter on the keyboard
	 * @returns The keyboard input
	 */
	swkbd_callAlphanumericKeyboardWithGuide: (text: string, maxLength: number, minLength: number, isMonospace: boolean, isMultiline: boolean, guide: string) => string;

	/**
	 * Shows a keyboard dedicated for entering usernames
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @returns The keyboard input
	 */
	swkbd_callAccountIdKeyboard: (text: string, maxLength: number, minLength: number, isMonospace: boolean) => string;

	/**
	 * Shows a keyboard dedicated for entering usernames with a guide
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @param guide - Guide text for what to enter on the keyboard
	 * @returns The keyboard input
	 */
	swkbd_callAccountIdKeyboardWithGuide: (text: string, maxLength: number, minLength: number, isMonospace: boolean, guide: string) => string;

	/**
	 * Shows a keyboard dedicated for entering alphanumeric passwords
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @returns The keyboard input
	 */
	swkbd_callPasswordKeyboard: (text: string, maxLength: number, minLength: number, isMonospace: boolean) => string;

	/**
	 * Shows a keyboard dedicated for entering alphanumeric passwords with a guide
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @param guide - Guide text for what to enter on the keyboard
	 * @returns The keyboard input
	 */
	swkbd_callPasswordKeyboardWithGuide: (text: string, maxLength: number, minLength: number, isMonospace: boolean, guide: string) => string;

	/**
	 * Shows a keyboard dedicated for entering emails
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @returns The keyboard input
	 */
	swkbd_callEmailKeyboard: (text: string, maxLength: number, minLength: number, isMonospace: boolean) => string;

	/**
	 * Shows a keyboard dedicated for entering emails with a guide
	 * @param text - Default text in the keyboard
	 * @param maxLength - Max length for the input
	 * @param minLength - Min length for the input
	 * @param isMonospace - True to mono-space the characters
	 * @param guide - Guide text for what to enter on the keyboard
	 * @returns The keyboard input
	 */
	swkbd_callEmailKeyboardWithGuide: (text: string, maxLength: number, minLength: number, isMonospace: boolean, guide: string) => string;

	/**
	 * Shows a keyboard dedicated for entering numeric passwords
	 * @param number - Default number
	 * @param maxLength - Max number of digits
	 * @param minLength - Min number of digits
	 * @param maxNumber - Max number
	 * @param minNumber - Min number
	 * @param isMonospace - True to mono-space the characters
	 * @returns The keyboard input
	 */
	swkbd_callPassnumberKeyboard: (number: number, maxLength: number, minLength: number, maxNumber: number, minNumber: number, isMonospace: boolean) => number;

	/**
	 * Shows a keyboard dedicated for entering numeric passwords with a guide
	 * @param number - Default number
	 * @param maxLength - Max number of digits
	 * @param minLength - Min number of digits
	 * @param maxNumber - Max number
	 * @param minNumber - Min number
	 * @param isMonospace - True to mono-space the characters
	 * @param guide - Guide text for what to enter on the keyboard
	 * @returns The keyboard input
	 */
	swkbd_callPassnumberKeyboardWithGuide: (number: number, maxLength: number, minLength: number, maxNumber: number, minNumber: number, isMonospace: boolean, guide: string) => number;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	swkbd_callPinKeyboard: () => boolean;

	/**
	 * Unknown
	 * @returns Unknown if has a return
	 */
	capture_getLowerImage: () => unknown;

	/**
	 * Unknown
	 * @returns Unknown if has a return
	 */
	capture_getUpperImageLeft: () => unknown;

	/**
	 * Unknown
	 * @returns Unknown if has a return
	 */
	capture_getUpperImageRight: () => unknown;

	/**
	 * Unknown
	 * @returns Unknown if has a return
	 */
	capture_getUpperImage3D: () => unknown;

	/**
	 * Unknown
	 * @param width - Image width?
	 * @param height - Image height?
	 * @param quality - Image quality? Allowed values unknown
	 * @param format - Image format? Allowed values unknown
	 * @returns Unknown if has a return
	 */
	capture_getLowerImageDetail: (width: number, height: number, quality: unknown, format: unknown) => unknown;

	/**
	 * Unknown
	 * @param width - Image width?
	 * @param height - Image height?
	 * @param quality - Image quality? Allowed values unknown
	 * @param format - Image format? Allowed values unknown
	 * @returns Unknown if has a return
	 */
	capture_getUpperImageLeftDetail: (width: number, height: number, quality: unknown, format: unknown) => unknown;

	/**
	 * Unknown
	 * @param width - Image width?
	 * @param height - Image height?
	 * @param quality - Image quality? Allowed values unknown
	 * @param format - Image format? Allowed values unknown
	 * @returns Unknown if has a return
	 */
	capture_getUpperImageRightDetail: (width: number, height: number, quality: unknown, format: unknown) => unknown;

	/**
	 * Unknown
	 * @param width - Image width?
	 * @param height - Image height?
	 * @param quality - Image quality? Allowed values unknown
	 * @param format - Image format? Allowed values unknown
	 * @returns Unknown if has a return
	 */
	capture_getUpperImage3DDetail: (width: number, height: number, quality: unknown, format: unknown) => unknown;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	capture_notifyUpdatedLocalList: () => boolean;

	/**
	 * Unknown
	 * @returns True if capture is enabled. What is capture?
	 */
	capture_isEnabled: () => boolean;

	/**
	 * Unknown
	 * @param screen - The screen to check. Can be either TOP (0) or BOTTOM (1)
	 * @returns True if the given screen has capture enabled. What is capture?
	 */
	capture_isEnabledEx: (screen: Screen) => boolean;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	viewer_base64jpeg: (unk: string) => void;

	/**
	 * Unknown
	 * @param callback - Unknown callback
	 */
	viewer_setStartingCallback: (callback: AppletCallback) => void;

	/**
	 * Removes the callback set in viewer_setStartingCallback?
	 */
	viewer_resetStartingCallback: () => void;

	/**
	 * Unknown
	 * @param callback - Unknown callback
	 */
	viewer_setOnCloseCallback: (callback: AppletCallback) => void;

	/**
	 * Removes the callback set in viewer_setOnCloseCallback?
	 */
	viewer_resetOnCloseCallback: () => void;

	/**
	 * Scrolls the browser immediately to the given position without animation
	 * @param x - Scroll X position
	 * @param y - Scroll Y position
	 */
	brw_scrollImmediately: (x: number, y: number) => void;

	/**
	 * @returns The browsers current X position?
	 */
	brw_getScrollTopX: () => number;

	/**
	 * @returns The browsers current Y position?
	 */
	brw_getScrollTopY: () => number;

	/**
	 * @returns True if the browser is online
	 */
	brw_isOnline: () => boolean;

	/**
	 * Notify the client that the page has started moving
	 */
	brw_notifyPageMoving: () => void;

	/**
	 * Notify the client that the page has started moving, with a white effect
	 */
	brw_notifyPageMovingEx: () => void;

	/**
	 * Unknown
	 */
	brw_beginAtomicSave: () => void;

	/**
	 * Unknown
	 */
	brw_endAtomicSave: () => void;

	/**
	 * Gets the current country name. Is this system or NNID?
	 * @returns Current countries name
	 */
	cfg_getCountryName: () => string;

	/**
	 * Gets the current country ID. Is this system or NNID?
	 * @returns Current country ID
	 */
	cfg_getCountry: () => number;

	/**
	 * Unknown
	 * @returns Unknown if has a return
	 */
	cfg_getCountryCode: () => unknown;

	/**
	 * Gets the current country ISO code. Is this system or NNID?
	 * @returns Alpha‑2 country code
	 */
	cfg_getCountryCodeA2: () => string;

	/**
	 * Unknown
	 * @returns Unknown if has a return
	 */
	cfg_getRegionCode: () => unknown;

	/**
	 * Gets the current country ISO code. Is this system or NNID?
	 * @returns Alpha‑3 country code
	 */
	cfg_getRegionCodeA3: () => string;

	/**
	 * Unknown
	 * @returns Unknown if has a return
	 */
	cfg_getLanguageCode: () => unknown;

	/**
	 * Gets the current language ISO code. Is this system or NNID?
	 * @returns Alpha‑2 language code
	 */
	cfg_getLanguageCodeA2: () => string;

	/**
	 * @returns The used parampack
	 */
	olv_getParameterPack: () => string;

	/**
	 * Unknown
	 * @returns Start URL? What is the "start" URL
	 */
	olv_getStartUrl: () => string;

	/**
	 * Unknown
	 * @returns Notification URL? What is the "notification" URL
	 */
	olv_getNotificationUrl: () => string;

	/**
	 * Unknown. Registers a BOSS task?
	 * @returns True if was a success?
	 */
	boss_regist: (unk: number) => boolean;

	/**
	 * Unknown. Registers a BOSS task with extra data?
	 * @returns True if was a success?
	 */
	boss_registEx: (unk1: number, unk2: number) => boolean;

	/**
	 * Unknown. Unregisters a BOSS task?
	 */
	boss_unregist: () => void;

	/**
	 * Unknown. Checks if BOSS task is registered for the title?
	 *  @returns True if registered?
	 */
	boss_isRegisted: () => boolean;

	/**
	 * Unknown
	 */
	boss_clearNewArrival: () => void;

	/**
	 * @param minutes - The minimum amount of minutes a title must be played for?
	 * @returns JSON string of the users played titles
	 */
	plog_getPlayTitlesFilteredByPlayTime: (minutes: number) => string;

	/**
	 * Unknown
	 * @returns Unknown boolean
	 */
	sap_exists: () => boolean;

	/**
	 * @returns The titles title ID?
	 */
	sap_programId: () => string;

	/**
	 * @returns The titles short name
	 */
	sap_shortTitle: () => string;

	/**
	 * @returns The titles full name
	 */
	sap_longTitle: () => string;

	/**
	 * @returns The titles publisher
	 */
	sap_publisher: () => string;

	/**
	 * @returns The titles small icon (24x24)
	 */
	sap_smallIconPng: () => string;

	/**
	 * @returns The titles large icon (48x48)
	 */
	sap_largeIconPng: () => string;

	/**
	 * Unknown
	 */
	sap_close: () => void;

	/**
	 * @returns The last URL from the history list?
	 */
	history_getPrev: () => string;

	/**
	 * Removes the last URL from the history list?
	 */
	history_removePrev: () => void;

	/**
	 * @returns The URL from the history list at the index?
	 */
	history_getAt: (index: number) => string;

	/**
	 * Removes the URL from the history list at the index?
	 * @param index - The index for the URL in the history list
	 */
	history_removeAt: (index: number) => void;

	/**
	 * @returns The number of pages which can be returned to
	 */
	history_getBackCount: () => number;

	/**
	 * Jumps to the home menu?
	 */
	jump_toHome: () => void;

	/**
	 * Jumps back to the suspended title?
	 */
	jump_toSuspendedApplication: () => void;

	/**
	 * Jumps back to the suspended YouTube video?
	 * @param query - The search query for YouTube
	 */
	jump_toSuspendedYoutube: (query: string) => void;

	/**
	 * Jumps to a specific eShop page
	 * @param unk1 - Unknown. Only seen 1 used?
	 * @param titleID - The title ID for the eShop title
	 * @returns Unknown
	 */
	jump_toShop: (unk1: number, titleID: string) => boolean;

	/**
	 * Jumps to the YouTube app with the given query
	 * @param unk1 - Unknown. Only seen 1 used?
	 * @param query - The search query for YouTube
	 * @returns Unknown
	 */
	jump_toYoutube: (unk1: number, query: string) => boolean;

	/**
	 * Swaps between a guest and non-guest account?
	 * @param account - 0 for guest, 1 for non-guest
	 * @returns Unknown
	 */
	jump_toAccount: (account: number) => boolean;

	/**
	 * Unknown
	 * @param unk1 - Unknown. Only seen 1 used?
	 * @param titleID - The titles title ID
	 * @returns Unknown
	 */
	jump_toApplication: (unk1: number, titleID: string) => boolean;

	/**
	 * Jumps to the system update title?
	 * @param unk - Unknown. Only seen 1 used?
	 * @returns Unknown
	 */
	jump_toSystemUpdate: (unk: number) => boolean;

	/**
	 * Unknown
	 */
	jump_resetParamToApp: () => void;

	/**
	 * Unknown
	 * @param unk - Unknown. Only seen 2 used?
	 */
	jump_setModeToApp: (unk: number) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 */
	jump_setDataToApp: (unk1: number, unk2: string) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown. Only seen 13 used?
	 * @param unk2 - Unknown. Real Miiverse used the result of `i.attr("data-url-id")`?
	 */
	jump_setDataUTF8ToApp: (unk1: number, unk2: string) => void;

	/**
	 * Unknown
	 * @param unk - Unknown. Only seen 5 used?
	 * @param appData - Posts AppData? Real Miiverse used the result of `i.attr("data-app-data")`
	 */
	jump_setBase64DataToApp: (unk: number, appData: string) => void;

	/**
	 * Unknown
	 * @param unk - Unknown. Only seen 12 used?
	 * @param communityID - Uint32 community ID? Real Miiverse used the result of `Number(i.attr("data-nex-community-id"))`
	 */
	jump_setNumberDataToApp: (unk: number, communityID: number) => void;

	/**
	 * Unknown
	 * @param link - Jumps to the provided link
	 * @returns Unknown
	 */
	jump_toWebbrs: (link: string) => boolean;

	/**
	 * Unknown
	 * @returns Unknown. Maybe true if jump_toWebbrs can be used?
	 */
	jump_existsWebbrs: () => boolean;

	/**
	 * Checks if a title is installed on the users system
	 * @param titleID - Titles title ID
	 * @returns True if the title is installed
	 */
	jump_existsApplication: (titleID: string) => boolean;

	/**
	 * Unknown. Checks if a title can be jumped to with a query param?
	 * @param titleID - Titles title ID
	 * @returns True if the title can use query params?
	 */
	jump_canUseQuery: (titleID: string) => boolean;

	/**
	 * Checks if specifically YouTube is installed?
	 * @returns True if YouTube is installed?
	 */
	jump_existsYoutube: () => boolean;

	/**
	 * Unknown. Returns to a suspended application?
	 * @returns Unknown
	 */
	jump_suspendedApplication: () => boolean;

	/**
	 * Unknown. Jumps specifically back to suspended YouTube?
	 * @returns Unknown
	 */
	jump_suspendedYoutube: () => boolean;

	/**
	 * @returns The title version of the installed YouTube app
	 */
	jump_getYoutubeVersion: () => number;

	/**
	 * Start garbage collector
	 */
	requestGc: () => void;

	/**
	 * Dispatch a "click" event at the given position?
	 * @param x - X position for the click?
	 * @param y - Y position for the click?
	 */
	sendMouseClick: (x: number, y: number) => void; // TODO - X and Y are assumptions

	/**
	 * Closes the applet
	 */
	exitApp: () => void;

	/**
	 * Enable or disables the home button
	 * @param flag - False to disable, true to enable
	 * @returns The flag that was set?
	 */
	home_setEnabled: (flag: boolean) => boolean;

	/**
	 * Checks if the currently running application is ACT (NNID Settings?)
	 * @returns True if the currently running application is ACT (NNID Settings?)
	 */
	isAct: () => boolean;

	/**
	 * Checks if the currently running application is Miiverse
	 * @returns True if the currently running application is Miiverse
	 */
	isOlv: () => boolean;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	suppressConnectionDialog: (unk: boolean) => void;

	/**
	 * @returns The local time (as a date?)
	 */
	getLocalTime: () => string;

	/**
	 * @returns The local time in seconds (unix?)
	 */
	getLocalTimeSeconds: () => number;

	/**
	 * @returns The server time (as a date?)
	 */
	getNetworkTime: () => string;

	/**
	 * Converts a unix timestamp to a date string
	 * @param time - Timestamp to convert
	 * @returns Date string
	 */
	convertTimeToString: (time: number) => string;

	/**
	 * Converts a time string into a (unix?) timestamp
	 * @param time - Timestamp to convert
	 * @returns (unix?) timestamp
	 */
	convertTimeToSeconds: (time: string) => number;

	/**
	 * Display an animation that prompts touch scrolling
	 * @param flag - Disable/enable a "scroll guide". Real Miiverse used 0 in a `hide()` function, and 1 in a `show()` function. Shim found in 0004001B-00018002 also documents 2
	 */
	effect_scrollGuide: (flag: number) => void;

	/**
	 * Unknown. Same effect as effect_scrollGuide but offset in the Y direction?
	 * @param unk - Unknown. Same value used in effect_scrollGuide?
	 * @param offset - Y offset for the "scroll guide"?
	 */
	effect_setScrollGuideOffsetPos: (unk: number, offset: number) => void;

	/**
	 * Setting the native side key assignment behavior ON/OFF? (Translated from ネイティブ側のキーアサインの挙動をON/OFF設定する)
	 * @param key - The key to enable/disable
	 * @param flag - Enable/disable
	 */
	key_enableKeyAssignedFunc: (key: number, flag: boolean) => void;

	/**
	 * Sets the callback for when a `<select>` box is closed
	 * @param callback - Callback
	 * @remarks
	 *
	 * This callback is called AFTER the `onchange` event. It fires for ALL
	 * `<select>` boxes, but does not give any information as to which
	 * was used. It fires even if the selection has NOT changed, unlike
	 * the `onchange` event
	 *
	 * - The `success` parameter is -1 if cancelled
	 * - The `index` parameter is the index of the selected item
	 */
	select_setClosingCallback: (callback: (success: number, index: number) => void) => void;

	/**
	 * Resets the callback set in select_setClosingCallback
	 */
	select_resetClosingCallback: () => void;
}