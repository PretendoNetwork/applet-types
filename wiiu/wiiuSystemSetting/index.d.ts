import type WiiUSystemSettingAPI from './system-setting';
export * from './system-setting';

declare global {
	interface Window {
		/**
		 * Used by applets to get and set various user and system settings
		 */
		wiiuSystemSettings: WiiUSystemSettingAPI;
	}

	/**
	 * Used by applets to get and set various user and system settings
	 */
	const wiiuSystemSettings: WiiUSystemSettingAPI;
}