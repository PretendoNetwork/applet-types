import type WiiUSessionStorage from './session-storage';
export * from './session-storage';

declare global {
	interface Window {
		/**
		 * Used by applets to interact with the browsers sessionStorage
		 */
		wiiuSessionStorage: WiiUSessionStorage;
	}

	/**
	 * Used by applets to interact with the browsers sessionStorage
	 */
	const wiiuSessionStorage: WiiUSessionStorage;
}