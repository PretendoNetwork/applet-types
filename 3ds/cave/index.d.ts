import type CaveAPI from './cave';
export * from './cave';

declare global {
	interface Window {
		/**
		 * Used by the Miiverse browser applet on the 3DS
		 */
		cave: CaveAPI;
	}

	/**
	 * Used by the Miiverse browser applet on the 3DS
	 */
	const cave: CaveAPI;
}