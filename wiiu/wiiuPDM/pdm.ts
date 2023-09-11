export default interface WiiUPDMAPI {
	/**
	 * Gets a list of titles player for at least the given number of minutes
	 * @param minutes - Unknown
	 * @returns An object with a list of title IDs
	 */
	getTitlesFilteredByPlayTime: (minutes: string) => {
		IDs: string[];
	};

	/**
	 * Get the total play time, in minutes, for a title
	 * @param titleID - Titles title ID
	 * @returns An object with the number of minutes the title has been played for
	 */
	getTotalPlayTime: (titleID: string) => {
		minutes: number;
	};
}