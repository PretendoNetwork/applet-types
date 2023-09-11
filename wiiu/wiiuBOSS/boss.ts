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
	 * @param unk - Unknown
	 * @returns Unknown. Triggers no network requests. Only ever returns error code 111-4000
	 */
	registerBossTask: (unk: string) => {
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
	isRegisteredDirectMessageTask: () => Record<any, any>;

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
	 * Unknown. Registers the DM BOSS task with extra data?
	 * @remark
	 *
	 * Only present in Miiverse
	 *
	 * @param unk1 - Unknown
	 * @param unk2 - Unknown
	 * @returns Unknown
	 */
	registerDirectMessageTaskEx: (unk1: number, unk2: number) => Record<any, any>;

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