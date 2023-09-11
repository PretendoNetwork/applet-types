export default interface WiiUNNAAPI {
	/**
	 * Users NNID PID
	 */
	readonly principalId: string;

	/**
	 * Unknown. Some long base64 string?
	 */
	readonly principalIdHashKey: string;

	/**
	 * NNID gender
	 */
	readonly gender: 'MALE' | 'FEMALE';

	/**
	 * NNID birthday. YYYY/MM/DD format
	 */
	readonly birthday: string;

	/**
	 * Unknown
	 * @returns Unknown
	 */
	existVirtualAccount: () => boolean;

	/**
	 * Unknown what a "virtual account" is. Calls https://account.nintendo.net/v1/api/people/@me/profile
	 * @returns An object. Seems to be always empty, maybe returns an error like wiiuNNA.validateMailAddress?
	 */
	refreshVirtualAccount: () => {};

	/**
	 * Gets the current service token
	 * @returns An object with the service token
	 */
	getServiceToken: () => {
		ServiceToken: string;
	};

	/**
	 * Calls https://account.nintendo.net/v1/api/provider/service_token/@me and stores the new service token
	 * @returns An object with the service token
	 */
	refreshServiceToken: () => {
		ServiceToken: string;
	};

	/**
	 * Calls https://account.nintendo.net/v1/api/support/resend_confirmation
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 * @returns An object. Seems to be always empty, maybe returns an error like wiiuNNA.validateMailAddress?
	 */
	sendConfirmationMail: () => {};

	/**
	 * Checks if the email address has been validated
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 * @returns True if `<email><validated></validated></email>` is set to "Y" in the users NNID response
	 */
	isMailAddressValidated: () => boolean;

	/**
	 * Calls https://account.nintendo.net/v1/api/support/email_confirmation/NNID_PID/CONFIRMATION_CODE
	 * @remark
	 *
	 * Only seen in eShop?
	 *
	 * @param confirmationCode - Email confirmation code
	 * @returns An object. Empty if success, contains `error` if not
	 */
	validateMailAddress: (unk: number) => {
		error?: {
			code: number;
		};
	};
}