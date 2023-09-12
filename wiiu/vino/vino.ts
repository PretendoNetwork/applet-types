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

export default interface VinoAPI {
	/**
	 * Plays a sound by it's ID
	 * @param soundID - Sounds ID. Allowed values not known
	 * @returns Unknown
	 */
	soundPlayId: (soundID: number) => number;

	/**
	 * Plays a sound by it's label
	 * @param label - Sounds label. Allowed values not known
	 * @returns Unknown
	 */
	soundPlay: (label: string) => number;

	/**
	 * Plays a sound by it's label and some number?
	 * @param label - Sounds label. Allowed values not known
	 * @param unk - Unknown. Volume?
	 * @returns Unknown
	 */
	soundPlayEx: (label: string, unk: number) => number;

	/**
	 * Plays a sound by it's label at a certain volume
	 * @param label - Sounds label. Allowed values not known
	 * @param volume - Sounds volume
	 * @returns Unknown
	 */
	soundPlayVolume: (label: string, volume: number) => number;

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
	 * @param label - Sounds label. Allowed values not known
	 * @param unk - Unknown. ID?
	 */
	soundStopLabel: (label: string, unk: number) => void;

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
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 */
	navi_set: (unk1: number, unk2: number, unk3: number, unk4: number) => void;

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
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setBaseVisibilityOnKeyEvent: (unk: boolean) => void;

	/**
	 * Unknown
	 */
	navi_reset: () => void;

	/**
	 * Unknown
	 */
	navi_resetWithoutDOMForcus: () => void;

	/**
	 * Unknown
	 */
	navi_decide: () => void;

	/**
	 * Unknown
	 * @returns Unknown
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
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setMoveMethod: (unk: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	navi_setIsEnableMinusLocation: (unk: boolean) => void;

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
	 * Unknown
	 */
	lyt_reset: () => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 */
	lyt_drawFixedFrame: (unk1: number, unk2: number, unk3: number, unk4: number) => void;

	/**
	 * Unknown
	 */
	lyt_disappearFixedFrame: () => void;

	/**
	 * Unknown
	 */
	lyt_decideFixedFrame: () => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	lyt_setFixedFrameSemitransparency: (unk: boolean) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	lyt_setIsEnableWhiteMask: (unk: boolean) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	lyt_setIsEnableClientLoadingIcon: (unk: boolean) => void;

	/**
	 * Unknown
	 */
	lyt_startTouchEffect: () => void;

	/**
	 * Unknown
	 */
	lyt_startTouchEffectToFocused: () => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 */
	lyt_startTouchEffectByPos: (unk1: number, unk2: number) => void;

	/**
	 * Unknown
	 */
	lyt_startTouchNodeEffectToFocused: () => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 */
	lyt_startTouchNodeEffect: (unk1: number, unk2: number, unk3: number, unk4: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	loading_setIconVisibility: (unk: boolean) => void;

	/**
	 * Show or hide the loading icon
	 * @param flag - Show/hide
	 */
	loading_setIconAppear: (flag: boolean) => void;

	/**
	 * Sets the loading icon size?
	 * @param x1 - Bounding box x1
	 * @param x2 - Bounding box x2
	 * @param y1 - Bounding box y1
	 * @param y2 - Bounding box y2
	 */
	loading_setIconRect: (x1: number, x2: number, y1: number, y2: number) => void;

	/**
	 * Opens the browser to the given URL
	 * @param url - URL to jump to
	 * @param unk - Unknown
	 */
	jumpToBrowser: (url: string, unk: boolean) => void;

	/**
	 * Opens the eShop
	 * @param unk1 - Unknown. Title ID?
	 * @param unk2 - Unknown
	 */
	jumpToEShop: (unk1: string, unk2: boolean) => void;

	/**
	 * Opens Miiverse
	 * @param unk - Unknown
	 */
	jumpToMiiverse: (unk: boolean) => void;

	/**
	 * Opens Miiverse to a specific post
	 * @param postID - Post ID
	 * @param unk - Unknown
	 */
	jumpToMiiversePostId: (postID: string, unk: boolean) => void;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 */
	jumpToVod: (unk1: string, unk2: string, unk3: boolean) => void;

	/**
	 * Open an installed title
	 * @param titleID - Titles title ID (hex)
	 * @param unk - Unknown
	 */
	jumpToTitle: (titleID: string, unk: boolean) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	jumpToSettingsTvRemote: (unk: boolean) => void;

	/**
	 * Closes the app gracefully
	 */
	exit: () => void;

	/**
	 * Force closes the app
	 */
	exitForce: () => void;

	/**
	 * Checks if TVii was launched by returning from a title (like eShop)
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
	runTwoButtonDialog: (unk1: string, unk2: string, unk3: string) => number;

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
	 * Enable TVii for the TV?
	 * @param flag - Enable/disable
	 * @returns Unknown
	 */
	video_enableOnTV: (flag: boolean) => boolean;

	/**
	 * Checks if TVii is on the TV or not?
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
	 * Unknown
	 * @param unk - Unknown
	 */
	ir_muteOneShotSound: (unk: boolean) => void;

	/**
	 * Opens a 4 digit PIN input for the parental control PIN
	 * @returns True if the PIN is correct
	 */
	pc_checkPIN: () => boolean;

	/**
	 * Opens a 4 digit PIN input for the parental control PIN
	 * @returns Unknown
	 */
	pc_runPINInput: () => number;

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
	 * @returns True if enabled
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
	 * @returns Always 1155004?
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
	 * @param communityID - Uint32 community ID
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns Unknown
	 */
	olv_postText: (body: string, topicTag: string, communityID: number, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

	/**
	 * Creates an image post on Miiverse
	 * @param painting - Memo painting. Result from vino.memo_getImageTgaRaw()
	 * @param topicTag - Post topic_tag
	 * @param communityID - Uint32 community ID
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns Unknown
	 */
	olv_postImage: (painting: string, topicTag: string, communityID: number, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

	/**
	 * Creates a text post on Miiverse. Seems no different than vino.olv_postText()?
	 * @param body - Post body
	 * @param topicTag - Post topic_tag
	 * @param communityID - Uint32 community ID
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns Unknown
	 */
	olv_postTextFixedPhrase: (body: string, topicTag: string, communityID: number, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

	/**
	 * Creates an image post on Miiverse. Seems no different than vino.olv_postImage()?
	 * @param painting - Memo painting. Result from vino.memo_getImageTgaRaw()
	 * @param topicTag - Post topic_tag
	 * @param communityID - Uint32 community ID
	 * @param spoiler - True if post contains spoilers
	 * @param searchKey1 - Posts 1st search_key
	 * @param searchKey2 - Posts 2nd search_key
	 * @param searchKey3 - Posts 3rd search_key
	 * @param searchKey4 - Posts 4th search_key
	 * @param searchKey5 - Posts 5th search_key
	 * @returns Unknown
	 */
	olv_postImageFixedPhrase: (painting: string, topicTag: string, communityID: number, spoiler: boolean, searchKey1: string, searchKey2: string, searchKey3: string, searchKey4: string, searchKey5: string) => boolean;

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
	 * @param unk2 - Unknown
	 * @returns Base64 encoded PNG
	 */
	act_getMiiImageEx: (slot: number, unk2: number) => string;

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
	 * Unknown
	 * @returns Unknown
	 */
	suggest_isOpening: () => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	suggest_getString: () => string;

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
	 */
	suggest_set: (unk1: string, unk2: string, unk3: string, unk4: string, unk5: string, unk6: string, unk7: string, unk8: string, unk9: string, unk10: string) => void;

	/**
	 * Unknown
	 */
	suggest_reset: () => void;

	/**
	 * Unknown
	 */
	apd_enable: () => void;

	/**
	 * Unknown
	 */
	apd_disable: () => void;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	apd_isEnabled: () => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	apd_isWiiuEnabled: () => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	apd_getPeriod: () => number;

	/**
	 * Unknown
	 * @returns Unknown
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
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 */
	emulate_touch: (unk1: number, unk2: number, unk3: number) => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	emulate_inputDelay: (unk: number) => void;

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
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @param unk4 - Unknown
	 * @param unk5 - Unknown
	 * @param unk6 - Unknown
	 * @returns Unknown
	 */
	title_setFixedImage: (unk1: string, unk2: string, unk3: string, unk4: string, unk5: string, unk6: number) => boolean;

	/**
	 * Unknown
	 * @param unk - Unknown
	 */
	title_deleteImage: (unk: string) => void;

	/**
	 * Unknown
	 */
	title_clearImage: () => void;

	/**
	 * Unknown
	 * @param unk - Unknown
	 * @returns Unknown
	 */
	title_hasImage: (unk: string) => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	title_getImageCount: () => number;
}