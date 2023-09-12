import type VinoAPI from './vino';
export * from './vino';

declare global {
	interface Window {
		/**
		 * Used by TVii on WiiU to interact with many system APIs and hardware features
		 */
		vino: VinoAPI;
	}

	/**
	 * Used by TVii on WiiU to interact with many system APIs and hardware features
	 */
	const vino: VinoAPI;
}