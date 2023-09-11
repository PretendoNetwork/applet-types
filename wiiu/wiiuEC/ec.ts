export default interface WiiUECAPI {
	/**
	 * Checks if the console needs to be updated
	 * @returns An object with a boolean flag
	 */
	needsSystemUpdate: () => {
		update: boolean;
	};

	/**
	 * Checks if the console needs to be updated
	 * @returns An object with a boolean flag
	 */
	needsSystemUpdateUsingCache: () => {
		update: boolean;
	};

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getECommerceInfraStatus: () => {
		error?: {
			code: number;
		}
	};

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getDeviceCountry: () => {
		error?: {
			code: number;
		}
	};

	/**
	 * Unknown
	 * @param unk - Unknown
	 * @returns Unknown
	 */
	setDeviceCountry: (unk: string) => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	startTicketSync: () => Record<any, any>;

	/**
	 * Unknown
	 * @param unk - Unknown
	 * @returns Unknown
	 */
	startTicketDownload: (unk: string) => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getTicketRequestState: () => Record<any, any>;

	/**
	 * Unknown
	 */
	cancelAll: () => void;

	/**
	 * Downloads a ticket
	 * @param ticketID - Titles ticket ID (aka TIV)
	 * @returns Unknown
	 */
	ticketDownloadSync: (ticketID: string) => {
		error?: {
			code: number;
		}
	};

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @returns Unknown
	 */
	getTitleInstallInfo: (unk1: string, unk2: string) => Record<any, any>;

	/**
	 * Starts downloading the title
	 * @param titleID - Titles title ID
	 * @param version - Titles version
	 * @returns Unknown
	 */
	registerTitleDownloadTask: (titleID: string, version: string) => {
		error?: {
			code: number;
		}
	};

	/**
	 * Starts downloading an update title
	 * @param titleID - Titles title ID
	 * @returns Unknown
	 */
	registerPatchTitleDownloadTask: (titleID: string) => Record<any, any>;

	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @param unk3 - Unknown
	 * @returns Unknown
	 */
	getAocInstallInfo: (unk1: string, unk2: string, unk3: string) => Record<any, any>;

	/**
	 * Starts downloading a DLC title
	 * @param titleID - Titles title ID
	 * @param version - Titles version
	 * @param contentIndexes - JSON string. Same as the result from wiiuDevice.getAocContentIndexList()?
	 * @returns Unknown
	 */
	registerAocDownloadTask: (titleID: string, version: string, contentIndexes: string) => Record<any, any>;

	/**
	 * Unknown
	 * @param unk - Unknown
	 * @returns Unknown
	 */
	getDownloadTaskState: (unk: string) => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getDownloadTaskListState: () => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	cancelDownloadTaskForDebug: () => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	installTitlesForDebug: () => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getDownloadTaskStateForDebug: () => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	sendIvsAsync: () => Record<any, any>;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getSendIvsState: () => Record<any, any>;

	/**
	 * Unknown
	 * @param unk - Unknown
	 * @returns Unknown
	 */
	registerAutoUpdateList: (unk: string) => Record<any, any>;
}