export default interface WiiUBOSSAPI {
	/**
	 * Unknown. Checks if some BOSS task is registered?
	 * @returns Unknown
	 */
	isRegisteredBossTask: () => {
		isRegistered: boolean;
	};

	/**
	 * Unknown. Registers a BOSS task?
	 * @param languageCode - Result from wiiuSystemSetting.getLanguage().code
	 * @returns Empty object if success, else returns an error object.
	 */
	registerBossTask: (languageCode: string) => {
		error?: {
			code: number;
		}
	};

	/**
	 * Unknown. Unregisters some BOSS task?
	 * @returns Unknown
	 */
	unregisterBossTask: () => {};

	/**
	 * Unknown. Checks if the DM BOSS task is registered?
	 * @remark
	 *
	 * Only present in Miiverse
	 *
	 * @returns Unknown
	 */
	isRegisteredDirectMessageTask: () => {
		isRegistered: boolean;
	};

	/**
	 * Unknown. Registers the DM BOSS task?
	 * @remark
	 *
	 * Only present in Miiverse
	 *
	 * @returns Unknown
	 */
	registerDirectMessageTask: () => Record<any, any>;

	/**
	 * Registers the DM BOSS task with an lifetime and interval
	 * @remark
	 *
	 * Only present in Miiverse
	 *
	 * @param lifetime - Lifetime of the request
	 * @param interval - Interval of the request
	 * @returns Empty object if success, else returns an error object.
	 */
	registerDirectMessageTaskEx: (lifetime: number, interval: number) => Record<any, any>;

	/**
	 * Unknown. Unregisters the DM BOSS task?
	 * @remark
	 *
	 * Only present in Miiverse
	 *
	 * @returns Unknown
	 */
	unregisterDirectMessageTask: () => Record<any, any>;
}
