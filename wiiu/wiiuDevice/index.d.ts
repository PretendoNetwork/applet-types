import type WiiUDeviceAPI from './device';
export * from './device';

declare global {
	interface Window {
		/**
		 * Used by applets to get data about the console and it's installed titles
		 */
		wiiuDevice: WiiUDeviceAPI;
	}

	/**
	 * Used by applets to get data about the console and it's installed titles
	 */
	const wiiuDevice: WiiUDeviceAPI;
}