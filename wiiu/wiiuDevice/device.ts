export default interface WiiUDeviceAPI {
	/**
	 * Checks if the UI is on the gamepad?
	 * @returns True if the gamepad is being used?
	 */
	isDrc: () => boolean;

	/**
	 * Gets the consoles SKU data?
	 * @returns An object with the consoles SKU data
	 */
	getSKU: () => {
		amount: string;
	};

	/**
	 * Gets the titles installation state
	 * @param titleID - Titles title ID
	 * @returns An object with the consoles installation state data
	 */
	getTitleInstallState: (titleID: string) => {
		installed: boolean;
		version: number;
		requiredVersion: number;
	};

	/**
	 * Gets the titles ticket info
	 * @param titleID - Titles title ID
	 * @returns An object with data about the titles ticket
	 */
	getTicketInfo: (titleID: string) => {
		hasCommonTicket: boolean;
		hasPersonalTicket: boolean;
	};

	/**
	 * Gets the titles DLC index list
	 * @param titleID - Titles title ID
	 * @returns An object with DLC indexes?
	 * @remarks
	 *
	 * The `indexes` field in the returned object is an array of strings, but each string is a number
	 *
	 */
	getAocContentIndexList: (titleID: string) => {
		indexes: string[];
	};

	/**
	 * Gets all the installed titles, including DLC and updates, on the console
	 * @returns An object containing every installed titles title ID
	 */
	getAllTitleList: () => {
		IDs: string[]
	};

	/**
	 * Checks if a title is installed
	 * @param titleID - Titles title ID
	 * @returns True if the title is installed on the console
	 */
	existsTitle: (titleID: string) => boolean;

	/**
	 * Unknown
	 */
	suspendDaemons: () => void;

	/**
	 * Unknown
	 */
	resumeDaemons: () => void;
}