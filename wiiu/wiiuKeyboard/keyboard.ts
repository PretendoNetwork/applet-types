export default interface WiiUKeyboardAPI {
	/**
	 * Shows a keyboard in "password" mode?
	 * @param minLength - Minimum length the text can be before submission
	 * @param maxLength - Max length the text can be
	 * @returns Entered text
	 */
	openInPasswordMode: (minLength: number, maxLength: number) => string;

	/**
	 * Sets the keyboard language
	 * @param language - Keyboard language. Allowed values unknown
	 * @returns True if success?
	 *
	 * @remarks
	 *
	 * An invalid input to `language` will crash the console
	 */
	setLanguage: (language: string) => boolean;

	/**
	 * Unknown
	 * @param unk - Unknown
	 * @returns Unknown
	 */
	setUserDictionary: (unk: string) => Record<any, any>;
}