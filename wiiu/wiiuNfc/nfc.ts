export default interface WiiUNfcAPI {
	/**
	 * Unknown
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @returns Unknown. Some object
	 */
	startPolling: (unk1: number, unk2: string) => Record<any, any>;

	/**
	 * Stops polling?
	 * @returns Unknown
	 */
	cancel: () => boolean;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	getMessage: () => number;

	/**
	 * Unknown
	 * @param unk - Unknown
	 * @returns Unknown. Some object
	 */
	getResponse: (unk: number) => Record<any, any>;
}