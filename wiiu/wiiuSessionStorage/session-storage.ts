export default interface WiiUSessionStorageAPI {
	/**
	 * Gets the number of items in localStorage
	 * @returns The length
	 */
	length: () => number;

	/**
	 * Sets an item in the localStorage
	 * @param key - Items key
	 * @param value - Items value
	 * @returns Unknown. True if was a success?
	 */
	setItem: (key: string, value: string) => boolean;

	/**
	 * Gets a key at the given index
	 * @param index - Index of the item
	 * @returns Items key
	 */
	key: (index: number) => string;

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