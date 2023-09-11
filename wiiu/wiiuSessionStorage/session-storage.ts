export default interface WiiUSessionStorageAPI {
	/**
	 * Unknown. Assumed to be the length, but returns a boolean?
	 * @returns Unknown
	 */
	length: () => boolean;

	/**
	 * Sets an item in the sessionStorage
	 * @param key - Items key
	 * @param value - Items value
	 * @returns Unknown. Keys index?
	 */
	setItem: (key: string, value: string) => number;

	/**
	 * Gets a key?
	 * @param unk - Unknown
	 * @returns Items key?
	 */
	key: (unk: boolean) => string;

	/**
	 * Looks up an item from the sessionStorage
	 * @param key - Items key
	 * @returns Items value
	 */
	getItem: (key: string) => string;

	/**
	 * Removes an item from the sessionStorage
	 * @param key - Items key
	 */
	removeItem: (key: string) => void;

	/**
	 * Clears all items from the session storage
	 */
	clear: () => void;
}