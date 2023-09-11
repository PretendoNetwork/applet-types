export default interface WiiUFilterAPI {
	/**
	 * Checks if a word is blacklisted
	 * @param word - Word to check
	 * @returns Unknown. 1 if true, 0 if false?
	 */
	checkWord: (word: string) => number;
}