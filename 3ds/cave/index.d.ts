import type CaveAPI from './cave';
export * from './cave';

declare global {
	interface Window {
		/**
		 * Used by the Miiverse browser applet on the 3DS2
		 */
		cave: CaveAPI;
	}

	/**
	 * Used by the Miiverse browser applet on the 3DS2
	 */
	const cave: CaveAPI;
}