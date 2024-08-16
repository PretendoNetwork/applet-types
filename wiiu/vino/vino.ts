export type Enumerize<T extends number> = `${Extract<T, number>}` extends `${infer N extends number}` ? N : never;

// TODO - Name these fields better?
// TODO - Are these codeset specific?
// TODO - Make an enum for all codesets for use in ir_enableCodeset and ir_getEnabledCodeset
export const enum IRCodes {
	POWER = 0,
	CHANNEL_UP = 1,
	CHANNEL_DOWN = 2,
	VOLUME_UP = 3,
	VOLUME_DOWN = 4,
	NUMBER_ONE = 11,
	NUMBER_TWO = 12,
	NUMBER_THREE = 13,
	NUMBER_FOUR = 14,
	NUMBER_FIVE = 15,
	NUMBER_SIX = 16,
	NUMBER_SEVEN = 17,
	NUMBER_EIGHT = 18,
	NUMBER_NINE = 19,
	NUMBER_ZERO = 20,
	INPUT = 52
};

export type IRCode = Enumerize<IRCodes>;

// TVii has some different sound effects for US/JP versions
//Incomplete list
export const enum SoundEffects {
	COMMON_SELECT = 'SE_COMMON_SELECT',
	COMMON_TOUCH_ON = 'SE_COMMON_TOUCH_ON',
	COMMON_TOUCH_CANCEL = 'SE_COMMON_TOUCH_CANCEL',
	COMMON_MOVE_CURSOR = 'SE_COMMON_MOVE_CURSOR',
	COMMON_TEXTBOX = 'SE_COMMON_TEXTBOX',
	APPEAR_DETAIL = 'SE_APPEAR_DETAIL',
	APPEAR_DETAIL_2 = 'SE_APPEAR_DETAIL_2',
	APPEAR_DETAIL_3 = 'SE_APPEAR_DETAIL_3',
	SLIDER_CHANGE = 'SE_SLIDER_CHANGE',
	REMOTE_COMMON = 'SE_REMOTE_COMMON',
	REMOTE_FINISH = 'SE_REMOTE_FINISH',
	REMOTE_FINISH1 = 'SE_REMOTE_FINISH1',
	REMOTE_FINISH2 = 'SE_REMOTE_FINISH2',
	REMOTE_FINISH3 = 'SE_REMOTE_FINISH3',
	REMOTE_0 = 'SE_REMOTE_0',
	REMOTE_1 = 'SE_REMOTE_1',
	REMOTE_2 = 'SE_REMOTE_2',
	REMOTE_3 = 'SE_REMOTE_3',
	REMOTE_4 = 'SE_REMOTE_4',
	REMOTE_5 = 'SE_REMOTE_5',
	REMOTE_6 = 'SE_REMOTE_6',
	REMOTE_7 = 'SE_REMOTE_7',
	REMOTE_8 = 'SE_REMOTE_8',
	REMOTE_9 = 'SE_REMOTE_9',
	REMOTE_10 = 'SE_REMOTE_10',
	REMOTE_11 = 'SE_REMOTE_11',
	REMOTE_12 = 'SE_REMOTE_12',
	NETWORK = 'SE_NETWORK',
	REMINDER = 'SE_REMINDER',
	AUTOSCREEN_APPEAR = 'SE_AUTOSCREEN_APPEAR',
	AUTOSYNC_PRE = 'SE_AUTOSYNC_PRE',
	DECIDE = 'SE_DECIDE',
	DECIDE_TOUCH_OFF = 'SE_DECIDE_TOUCH_OFF',
	DECIDE_SMALL = 'SE_DECIDE_SMALL',
	DECIDE_SMALL_TOUCH_OFF = 'SE_DECIDE_SMALL_TOUCH_OFF',
	DECIDE_US = 'SE_A_DECIDE',
	DECIDE_US_TOUCH_OFF = 'SE_A_DECIDE_TOUCH_OFF',
};

export type SoundEffect = `${SoundEffects}`;

// TODO - Name these fields better?
export const enum BackgroundMusic {
	APP_START = 'SE_APP_START',
	APP_START_SUB = 'SE_APP_START_SUB',
};

export type BGM = `${BackgroundMusic}`;

// TODO - Name these fields better?
export const enum PINCheckResults {
	CANCELED = -1,
	INCORRECT = 0,
	CORRECT: 1
};

export type PINResult = Enumerize<PINCheckResults>;

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


// TODO - Name these fields better?
export const enum MiiFeelingsAct {
	DEFAULT = 1, // * This is actually called "normal" internally but I feel like this makes more sense
	HAPPY = 2,
	WINK = 3, // * This is actually called "like" internally but I didn't feel like that made sense
	SURPRISED = 4,
	FRUSTRATED = 5,
	PUZZLED = 6,
	DEFAULT_BODY = 7
};

export type MiiFeelingAct = Enumerize<MiiFeelingsAct>;

export default interface VinoAPI {
	/**
	 * Plays a sound by it's ID
	 * @param soundID - Sounds ID. Allowed values not known
	 * @returns Unknown
	 */
	soundPlayId: (soundID: number) => number;

	/**
	 * Plays a sound by it's label
	 * @param label - Sounds label.
	 * @returns Unknown
	 */
	soundPlay: (label: SoundEffect | BGM) => number;

	/**
	 * Plays a sound by it's label and some number?
	 * @param label - Sounds label. Allowed values not known
	 * @param unk - Unknown. Volume?
	 * @returns Unknown
	 */
	soundPlayEx: (label: SoundEffect | BGM, unk: number) => number;

	/**
	 * Plays a sound by it's label at a certain volume
	 * @param label - Sounds label.
	 * @param volume - Sounds volume
	 * @returns Unknown
	 */
	soundPlayVolume: (label: SoundEffect | BGM, volume: number) => number;

	/**
	 * Unknown
	 * @param label - Sounds label. Allowed values not known
	 * @returns Unknown
	 */
	soundSetMemory: (label: string) => boolean;

	/**
	 * Unknown
	 * @param label - Sounds label. Allowed values not known
	 * @returns Unknown
	 */
	soundPlayMemory: (label: string) => number;

	/**
	 * Stops a playing sound
	 * @param unk - Unknown. The number returned by the soundPlay functions?
	 */
	soundStop: (unk: number) => void;

	/**
	 * Stops a sound by it's label
	 * @param label - Sounds label.
	 * @param unk - Unknown. ID?
	 */
	soundStopLabel: (label: SoundEffect, unk: number) => void;

	/**
	 * Stops all sounds
	 */
	soundStopAll: () => void;

	/**
	 * Unknown. Does nothing?
	 */
	wakeKeyboard: () => void;

	/**
	 * Starts the garbage collector?
	 */
	requestGarbageCollect: () => void;

	/**
	 * Unknown
	 * @param flag - Enable/disable
	 */
	setDimEnable: (flag: boolean) => void;

	/**
	 * Checks if a title is installed
	 * @param titleID - Decimal title ID
	 * @returns True if installed
	 * @example
	 * // 00050030-1001310A is the TVii USA title ID
	 * vino.checkTitleExist(0x000500301001310A);
	 */
	checkTitleExist: (titleID: number) => boolean;

	/**
	 * Sets an item in the browsers localStorage
	 * @param key - Items key
	 * @param value - Items value
	 * @returns Unknown. Index?
	 */
	ls_setItem: (key: string, value: string) => number;

	/**
	 * Looks up an item in the browsers localStorage
	 * @param key - Items key
	 * @returns Items value
	 */
	ls_getItem: (key: string) => string;

	/**
	 * Looks up a key name by index
	 * @param index - Keys index
	 * @returns Items key
	 */
	ls_key: (index: number) => string;

	/**
	 * Gets the localStorage length
	 * @returns Number of items currently in localStorage
	 */
	ls_length: () => number;

	/**
	 * Removes an item from localStorage
	 * @param key - Items key
	 */
	ls_removeItem: (key: string) => void;

	/**
	 * Removes all items from localStorage
	 */
	ls_clear: () => void;

	/**
	 * Opens the Miiverse drawing UI
	 * @param reset - Clear the previous drawing
	 */
	memo_open: (reset: boolean) => void;

	/**
	 * Checks if the drawing UI is finished
	 * @returns True if finished
	 */
	memo_isFinish: () => boolean;

	/**
	 * Resets the drawing UI
	 */
	memo_reset: () => void;

	/**
	 * Gets the drawn image as a PNG
	 * @returns Base64 encoded image data
	 */
	memo_getImagePng: () => string;

	/**
	 * Gets the drawn image as a TGA
	 * @returns Base64 encoded image data
	 */
	memo_getImageTgaRaw: () => string;

	/**
	 * Gets the drawn image as a compressed TGA
	 * @returns Base64 encoded image data
	 */
	memo_getImageTgaCompressed: () => string;

	/**
	 * Draws the navigation box on an visible HTML element.
	 * @param left - Result from element.getBoundingClientRect().left
	 * @param top - Result from element.getBoundingClientRect().top
	 * @param width - Result from element.getBoundingClientRect().width
  	 * @param height - Result from element.getBoundingClientRect().height
	 */
	navi_set: (left: number, top: number, width: number, height: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setToFocused: (unk: boolean) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setBaseVisibility: (unk: boolean) => void;

	/**
	 * Enables a light blue background on the navigation box
	 * @param light - Enable light blue background if true
	 */
	navi_setBaseVisibilityOnKeyEvent: (light: boolean) => void;

	/**
	 * Resets any existing navigation box
	 */
	navi_reset: () => void;

	/**
	 * Resets any existing navigation box, same as vino.navi_reset()?
	 */
	navi_resetWithoutDOMForcus: () => void;

	/**
	 * Resets any navigation box with an selecting animation
	 */
	navi_decide: () => void;

	/**
	 * Returns the rects of the HTML element the navigation box is currently on
	 * @returns - comma separated rects (left, top, width, height)
	 */
	navi_getRect: () => string;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 */
	navi_setBtnRepeat: (unk1: number, unk2: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setGroup: (unk: string) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 */
	navi_setScissor: (unk1: number, unk2: number, unk3: number, unk4: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setScissorOffset: (unk: number) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 */
	navi_setScissorOffsetForMoveSearch: (unk1: number, unk2: number, unk3: number, unk4: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setAreaOverSearch: (unk: boolean) => void;

	/**
	 * Changes navigation moving method
	 * @param method - -1 disables navigation, 1 is default
	 */
	navi_setMoveMethod: (method: number) => void;

	/**
	 * Disable navigation box movement to any section below
	 * @param disable - Disable navigation box movement to below if true
	 */
	navi_setIsEnableMinusLocation: (disable: boolean) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 * @param unk6 - Unknown
	 */
	lyt_draw: (unk1: string, unk2: number, unk3: number, unk4: number, unk5: number, unk6: number) => void;

	/**
	 * Resets the fixed red layout box
	 */
	lyt_reset: () => void;

	/**
  	 * Draws a fixed red layout box (Seen in Japanese TVii)
	 * @param left - Left position in screen
	 * @param top -  Top position in screen
	 * @param width - Width of the layout box on screen
  	 * @param height - Height of the layout box on screen
	 */
	lyt_drawFixedFrame: (left: number, top: number, width: number, height: number) => void;

	/**
	 * Resets the fixed red layout box (Same as vino.lyt_reset()?)
	 */
	lyt_disappearFixedFrame: () => void;

	/**
	 * Resets the fixed red layout box with an selecting animation
	 */
	lyt_decideFixedFrame: () => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	lyt_setFixedFrameSemitransparency: (unk: boolean) => void;

	/**
	 * Enable or disable the white transition effect when changing page
	 * @param enable - Enable white transition
	 */
	lyt_setIsEnableWhiteMask: (enable: boolean) => void;

	/**
	 * Enable or disable loading icon when changing page
	 * @param enable - Enable loading icon
	 */
	lyt_setIsEnableClientLoadingIcon: (enable: boolean) => void;

	/**
	 * Shows a touch effect on the coords of the last user touch
	 */
	lyt_startTouchEffect: () => void;

	/**
	 * Unknown
	 */
	lyt_startTouchEffectToFocused: () => void;

	/**
	 * Shows a touch effect on the screen manually
	 * @param left - Left position in screen
	 * @param top -  Top position in screen
	 */
	lyt_startTouchEffectByPos: (left: number, top: number) => void;

	/**
	 * Unknown
	 */
	lyt_startTouchNodeEffectToFocused: () => void;

	/**
  	 * Shows a blue glow effect similar to the Internet Browser blue hover
	 * @param left - Left position in screen
	 * @param top -  Top position in screen
	 * @param width - Width of the layout box on screen
  	 * @param height - Height of the layout box on screen
	 */
	lyt_startTouchNodeEffect: (left: number, top: number, width: number, height: number) => void;

	/**
	 * Show or hide instantly the loading icon
	 * @param flag - Show/hide
	 */
	loading_setIconVisibility: (flag: boolean) => void;

	/**
	 * Show or hide the loading icon
	 * @param flag - Show/hide
	 */
	loading_setIconAppear: (flag: boolean) => void;

	/**
	 * Sets the loading icon position in screen
	 * @param left - Left position in screen
	 * @param top -  Top position in screen
	 * @param width - Width of loading icon
  	 * @param height - Height of loading icon
	 */
	loading_setIconRect: (left: number, top: number, width: number, height: number) => void;

	/**
	 * Opens the browser to the given URL, (if browser is closed, returns to TVii)
	 * @param url - URL to jump to
	 * @param confirm - Show confirmation message if true, jump inmediately if false
	 */
	jumpToBrowser: (url: string, confirm: boolean) => void;

	/**
	 * Opens the eShop
	 * @param query - eShop query (version=1.0.0&scene=detail&dst_title_id=ID_HERE&src_title_id=ID_HERE)
	 * @param confirm - Show confirmation message if true, jump inmediately if false
	 */
	jumpToEShop: (query: string, confirm: boolean) => void;

	/**
	 * Opens Miiverse
	 * @param confirm - Show confirmation message if true, jump inmediately if false
	 */
	jumpToMiiverse: (confirm: boolean) => void;

	/**
	 * Opens Miiverse to a specific post
	 * @param postID - Post ID
	 * @param confirm - Show confirmation message if true, jump inmediately if false
	 */
	jumpToMiiversePostId: (postID: string, confirm: boolean) => void;

	/**
	 * Opens an video on demand app with a URL parameter
	 * @param titleID - Titles title ID (hex)
	 * @param URL - URL parameter to send to the VOD app
	 * @param confirm - Show confirmation message if true, jump inmediately if false
	 */
	jumpToVod: (titleID: string, URL: string, confirm: boolean) => void;

	/**
	 * Open an installed title
	 * @param titleID - Titles title ID (hex)
	 * @param confirm - Show confirmation message if true, jump inmediately if false
	 */
	jumpToTitle: (titleID: string, confirm: boolean) => void;

	/**
	 * Opens System Settings on the TV Remote screen
	 * @param confirm - Show confirmation message if true, jump inmediately if false
	 */
	jumpToSettingsTvRemote: (confirm: boolean) => void;

	/**
	 * Closes the app transitioning to the Wii U Menu/suspended app
	 */
	exit: () => void;

	/**
	 * Closes the app directly to the HBM
	 */
	exitForce: () => void;

	/**
	 * Checks if TVii was launched by returning from a title (like eShop, Internet Browser)
	 * @returns True if returned from
	 */
	isReturnedFromOtherApplication: () => boolean;

	/**
	 * Opens a dialog with one button
	 * @param message - Dialog text
	 * @param button - Button text
	 * @returns Unknown
	 */
	runSingleButtonDialog: (message: string, button: string) => boolean;

	/**
	 * Opens a dialog with two buttons
	 * @param message - Dialog text
	 * @param leftButton - Left button text
	 * @param rightButton - Right button text
	 * @returns 1 if the left button selected, 0 if right button
	 */
	runTwoButtonDialog: (message: string, leftButton: string, rightButton: string) => number;

	/**
	 * Shows a 119-9XXX error code
	 * @param errorCode - The error code the be used as XXX. Anything above 999 will always throw 119-0999
	 */
	runErrorDialog: (errorCode: number) => void;

	/**
	 * Shows a 115-XXXX (Miiverse) error code
	 * @param errorCode - The error code the be used as XXXX
	 * @returns Unknown
	 */
	runOliveErrorDialog: (errorCode: number) => boolean;

	/**
	 * Enables video playback on the TV screen
	 * @param flag - Enable/disable
	 * @returns Unknown
	 */
	video_enableOnTV: (flag: boolean) => boolean;

	/**
	 * Checks if video playback on TV is enabled or not
	 * @returns True if enabled. Changed with vino.video_enableOnTV(true/false)
	 */
	video_isEnabledOnTV: () => boolean;

	/**
	 * Unknown
	 * @returns True if codeset exists
	 */
	ir_existsTvCodeset: () => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	ir_existsOtherCodeset: () => boolean;

	/**
	 * Changes the GamePad IR blaster to use a different TV code set. Allowed values unknown
	 * @param codeset - Unknown
	 */
	ir_enableCodeset: (codeset: number) => void;

	/**
	 * Checks the current codeset
	 * @returns The current codeset
	 */
	ir_getEnabledCodeset: () => number;

	/**
	 * Sends an IR code through the GamePad IR blaster
	 * @param code - IR code. See IRCodes
	 * @param unk - Unknown. 0 always works?
	 */
	ir_send: (code: IRCode, unk: number) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 * @param unk6 - Unknown
	 * @param unk7 - Unknown
	 * @param unk8 - Unknown
	 * @param unk9 - Unknown
	 * @param unk10 - Unknown
	 * @param unk11 - Unknown
	 * @param unk12 - Unknown
	 * @returns Unknown
	 */
	ir_sendPack: (unk1: number, unk2: number, unk3: number, unk4: number, unk5: number, unk6: number, unk7: number, unk8: number, unk9: number, unk10: number, unk11: number, unk12: number) => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	ir_isEmpty: () => boolean;

	/**
	 * Checks if the IR blaster is enabled?
	 * @returns True if enabled
	 */
	ir_isEnabled: () => boolean;

	/**
	 * Mutes IR sound effect
	 * @param disable - Disables sound effect if true
	 */
	ir_muteOneShotSound: (disable: boolean) => void;

	/**
	 * Opens a 4 digit PIN input for the parental control PIN
	 * @returns True if the PIN is correct
	 */
	pc_checkPIN: () => boolean;

	/**
	 * Opens a 4 digit PIN input for the parental control PIN
  	 * @returns {PINResult} Indicates result of the PIN check
	 */
	pc_runPINInput: () => PINResult;

	/**
	 * Checks if parental controls are enabled
	 * @returns True if enabled
	 */
	pc_isControlled: () => boolean;

	/**
	 * Checks if parental controls are enabled for the eShop
	 * @returns True if restricted
	 */
	pc_isControlledEShopPurchase: () => boolean;

	/**
	 * Checks if parental controls are enabled for the browser
	 * @returns True if enabled
	 */
	pc_isControlledBrowser: () => boolean;

	/**
	 * Checks if parental controls are enabled for something? TVii?
	 * @returns True if enabled
	 */
	pc_isControlledMovie: () => boolean;

	/**
	 * Checks if parental controls are enabled for friend registration
	 * @returns True if enabled
	 */
	pc_isControlledFriendReg: () => boolean;

	/**
	 * Checks if parental controls are enabled for online play
	 * @returns True if enabled
	 */
	pc_isControlledNetworkCommunication: () => boolean;

	/**
	 * Checks if parental controls are enabled for Miiverse
	 * @returns -1 if disabled, 1 if posting is disabled, 2 if posting and viewing is disabled
	 */
	pc_getMiiverseControlLevel: () => number;

	/**
	 * Checks if a multi word string can be used
	 * @param text - String to check
	 * @returns False if can't be used (contains a blacklisted word, IE a swear)
	 */
	ng_checkText: (text: string) => boolean;

	/**
	 * Checks if a single word can be used
	 * @param word - Word to check
	 * @returns False if can't be used (is a blacklisted word, IE a swear)
	 */
	ng_checkWord: (word: string) => boolean;

	/**
	 * Gets a Miiverse error code
	 * @returns 1155004 if Discovery error, can return an Miiverse Parental Controls error too
	 */
	olv_getErrorCodeOnInitialize: () => number;

	/**
	 * Checks if Miiverse can be used
	 * @returns True if Miiverse can be used
	 */
	olv_isEnabled: () => boolean;

	/**
	 * Creates a text post on Miiverse
	 * @param body - Post body
	 * @param topicTag - Post topic_tag
	 * @param feeling - Mii feeling
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns true if request started with success
	 */
	olv_postText: (body: string, topicTag: string, feeling: MiiFeeling, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

	/**
	 * Creates an image post on Miiverse
	 * @param painting - Memo painting. Result from vino.memo_getImageTgaRaw()
	 * @param topicTag - Post topic_tag
	 * @param feeling - Mii feeling
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns true if request started with success
	 */
	olv_postImage: (painting: string, topicTag: string, feeling: MiiFeeling, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

	/**
	 * Creates a text post on Miiverse. Seems no different than vino.olv_postText()?
	 * @param body - Post body
	 * @param topicTag - Post topic_tag
	 * @param feeling - Mii feeling
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns true if request started with success
	 */
	olv_postTextFixedPhrase: (body: string, topicTag: string, feeling: MiiFeeling, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

	/**
	 * Creates an image post on Miiverse. Seems no different than vino.olv_postImage()?
	 * @param painting - Memo painting. Result from vino.memo_getImageTgaRaw()
	 * @param topicTag - Post topic_tag
	 * @param feeling - Mii feeling
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns true if request started with success
	 */
	olv_postImageFixedPhrase: (painting: string, topicTag: string, feeling: MiiFeeling, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	olv_getPostingResult: () => number;

	/**
	 * Gets the current Miiverse service token
	 * @returns The current Miiverse service token
	 */
	olv_getServiceToken: () => string;

	/**
	 * Gets the current Miiverse parampack
	 * @returns The current Miiverse parampack
	 */
	olv_getParameterPack: () => string;

	/**
	 * Returns the Miiverse API hostname
	 * @returns The result of the `api_host` value in the Miiverse discovery request
	 */
	olv_getHostName: () => string;

	/**
	 * Gets the current Miiverse User-Agent
	 * @returns The current Miiverse User-Agent
	 */
	olv_getUserAgent: () => string;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @returns Unknown
	 */
	olv_msgSoundPlay: (unk1: string, unk2: string) => number;

	/**
	 * Gets the NNID username for the slot
	 * @param slot - User account slot. See vino.act_getCurrentSlotNo()
	 * @returns NNID username
	 */
	act_getName: (slot: number) => string;

	/**
	 * Gets the NNID Mii image for the slot
	 * @param slot - User account slot. See vino.act_getCurrentSlotNo()
	 * @returns Base64 encoded PNG
	 */
	act_getMiiImage: (slot: number) => string;

	/**
	 * Gets the NNID Mii image for the slot
	 * @param slot - User account slot. See vino.act_getCurrentSlotNo()
	 * @param MiiFeelingAct - Mii feeling image to pull from
	 * @returns Base64 encoded PNG
	 */
	act_getMiiImageEx: (slot: number, feeling: MiiFeelingAct) => string;

	/**
	 * Gets the NNID PID for the slot
	 * @param slot - User account slot. See vino.act_getCurrentSlotNo()
	 * @returns NNID PID
	 */
	act_getPid: (slot: number) => number;

	/**
	 * Gets the number of NNIDs on the console
	 * @returns Total number of NNIDs
	 */
	act_getNum: () => number;

	/**
	 * Gets the slot number for the currently logged in NNID
	 * @returns Slot number
	 */
	act_getCurrentSlotNo: () => number;

	/**
	 * Gets the NNID "age division"?
	 * @param slot - User account slot. See vino.act_getCurrentSlotNo()
	 * @returns Unknown
	 */
	act_getAgeDivision: (slot: number) => number;

	/**
	 * Gets the NNID raw Mii data for the slot
	 * @param slot - User account slot. See vino.act_getCurrentSlotNo()
	 * @returns Base64 encoded Mii data
	 */
	act_getMiiData: (slot: number) => string;

	/**
	 * Gets the users friend list
	 * @returns Comma separated list of friend PIDs
	 */
	fp_getFriendList: () => string;

	/**
	 * Converts a friends PID to their username
	 * @param pid - Friends PID
	 * @returns Friends username. If not friends, returns empty string
	 */
	fp_getFriendName: (pid: number) => string;

	/**
	 * Gets the current country. NNID, or console?
	 * @returns Country code
	 */
	info_getCountry: () => string;

	/**
	 * Gets the current language. NNID, or console?
	 * @returns Language code
	 */
	info_getLanguage: () => string;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	kbd_isAppearing: () => boolean;

	/**
	 * True if suggestion is opening (input with attribute "vino_suggest" is clicked)
	 * @returns true if opening
	 */
	suggest_isOpening: () => boolean;

	/**
	 * Gets current value of the suggestion input
	 * @returns Suggestion input value
	 */
	suggest_getString: () => string;

	/**
	 * Set suggestions on suggestion list
	 * @param suggestion1 - Unknown
	 * @param suggestion2 - Unknown
	 * @param suggestion3 - Unknown
	 * @param suggestion4 - Unknown
	 * @param suggestion5 - Unknown
	 * @param suggestion6 - Unknown
	 * @param suggestion7 - Unknown
	 * @param suggestion8 - Unknown
	 * @param suggestion9 - Unknown
	 * @param suggestion10 - Unknown
	 */
	suggest_set: (suggestion1: string, suggestion2: string, suggestion3: string, suggestion4: string, suggestion5: string, suggestion6: string, suggestion7: string, suggestion8: string, suggestion9: string, suggestion10: string) => void;

	/**
	 * Resets suggestion list
	 */
	suggest_reset: () => void;

	/**
	 * Enables auto power down
	 */
	apd_enable: () => void;

	/**
	 * Disables auto power down
	 */
	apd_disable: () => void;

	/**
	 * Is auto power down enabled
	 * @returns True if enabled
	 */
	apd_isEnabled: () => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	apd_isWiiuEnabled: () => boolean;

	/**
	 * Gets time left for auto power down trigger
	 * @returns Time left
	 */
	apd_getPeriod: () => number;

	/**
	 * Gets last period where auto power down happened?
	 * @returns Last period
	 */
	apd_getLastTime: () => number;

	/**
	 * Connects to an ACR (https://en.wikipedia.org/wiki/Automatic_content_recognition) API to find a match
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 * @returns Unknown
	 */
	acr_startMatching: (unk1: number, unk2: number, unk3: number, unk4: number, unk5: number) => boolean;

	/**
	 * Stops the matching request
	 */
	acr_stopMatching: () => void;

	/**
	 * Gets the result of the last match
	 * @returns Result. "empty" if none
	 */
	acr_getLastResult: () => string;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	acr_getRemainedTime: () => number;

	/**
	 * Sets the port to the ACR API
	 * @param port - ACR API port
	 */
	acr_setPort: (port: number) => void;

	/**
	 * Sets the host to the ACR API
	 * @param host - ACR API host
	 * @returns Unknown
	 */
	acr_setHostName: (host: string) => boolean;

	/**
	 * Gets the port to the ACR API
	 * @returns Port. Default is 8443
	 */
	acr_getPort: () => number;

	/**
	 * Gets the host to the ACR API
	 * @returns Host. Default is "acr-test.i.tv"
	 */
	acr_getHostName: () => string;

	/**
	 * Unknown. Always seems to just return the input?
	 * @param unk - Unknown
	 * @returns Unknown
	 */
	act_convertMiiName: (unk: string) => string;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	user_isAllowedToUploadInfo: () => boolean;

	/**
	 * Emulates a click in the screen
	 * @param left - Left position in screen
	 * @param top -  Top position in screen
	 * @param clicks - How many clicks
	 */
	emulate_touch: (left: number, top: number, clicks: number) => void;

	/**
	 * Delays emulated click
	 * @param seconds -Seconds to delay
	 */
	emulate_inputDelay: (seconds: number) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 * @returns Unknown
	 */
	title_setAnimImage: (unk1: string, unk2: string, unk3: string, unk4: string, unk5: string) => boolean;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 * @param unk6 - Unknown
	 * @returns Unknown
	 */
	title_setAnimImageEx: (unk1: string, unk2: string, unk3: string, unk4: string, unk5: string, unk6: number) => boolean;

	/**
	 * Sets an image in the title screen
	 * @param URL - PNG image URL
	 * @param imageKey - Image key
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 * @param type - 1 if show on top normally, 2 if hide clock, 3 if show on top normally but move clock to the top
	 * @returns True if image started requesting with success
	 */
	title_setFixedImage: (URL: string, imageKey: string, unk3: string, unk4: string, unk5: string, type: number) => boolean;

	/**
	 * Deletes an image from an image key
	 * @param imageKey - Image key used to set an image
	 */
	title_deleteImage: (imageKey: string) => void;

	/**
	 * Deletes all images saved
	 */
	title_clearImage: () => void;

	/**
	 * Checks existance of an image by image key
	 * @param imageKey - Image key used to set an image
	 * @returns True if image exists
	 */
	title_hasImage: (imageKey: string) => boolean;

	/**
	 * Returns amount of images saved
	 * @returns Amount of images
	 */
	title_getImageCount: () => number;
}
