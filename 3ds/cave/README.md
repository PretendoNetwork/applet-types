# Cave
The JavaScript API used in the Miiverse applet on the Nintendo 3DS/2DS family of consoles

## What is this?
Cave is the API used by the 3DS Miiverse applet to interact with the system and user account. These types provide intellisense and type safety

### _**DISCLAIMER:**_ **WIP. MANY FUNCTIONS HAVE UNKNOWN USES AND PARAMETERS, AND SOME HAVE KNOWN SIGNATURES/TYPES**

## Installation
```bash
npm i --save-dev @pretendonetwork/cave-types
```

Once installed, `cave` will be agumented into the global scope as well as into the `Window` interface

## Enums and types
Several functions take in a label or ID of some kind, which can lead to ugly code. Several enums and types are available to make interacting with the API easier and more readable

### Constants
> `Buttons`

IDs for the various button types in the Miiverse applet

```ts
export const enum Buttons {
	EXIT = 0,
	BACK = 1,
	ACTIVITY = 2,
	COMMUNITIES = 3,
	NOTIFICATIONS = 4,
	MY_MENU = 5,
	GUIDE = 7,
	BACK_KEY = 99
}
```

> `SoundEffects`

Labels for the various sound effects that can be played with the `snd_playSe` function

```ts
export const enum SoundEffects {
	OLV_CANCEL = 'OLV_CANCEL',
	OLV_OK = 'OLV_OK',
	OK_SUB = 'OLV_OK_SUB',
	CHECKBOX_CHECK = 'OLV_CHECKBOX_CHECK',
	CHECKBOX_UNCHECK = 'OLV_CHECKBOX_UNCHECK',
	MII_ADD = 'OLV_MII_ADD',
	RELOAD = 'OLV_RELOAD',
	BALLOON_OPEN = 'OLV_BALLOON_OPEN',
	BALLOON_CLOSE = 'OLV_BALLOON_CLOSE',
	SCROLL_PAGE = 'WAVE_SCROLL_PAGE',
	SCROLL_PAGE_LR = 'WAVE_SCROLL_PAGE_LR',
	SCROLL_LIMIT_LR = 'WAVE_SCROLL_LIMIT_LR',
	TOUCH = 'CTR_COMMON_TOUCH',
	TOUCHOUT = 'CTR_COMMON_TOUCHOUT',
	TOUCHOUT_S = 'CTR_COMMON_TOUCHOUT_S',
	TOUCHIN = 'CTR_COMMON_TOUCHIN',
	TOGGLE = 'CTR_COMMON_TOGGLE',
	SILENT = 'CTR_COMMON_SILENT',
	BUTTON = 'CTR_COMMON_BUTTON',
	CTR_OK = 'CTR_COMMON_OK',
	RETURN = 'CTR_COMMON_RETURN',
	CTR_CANCEL = 'CTR_COMMON_CANCEL',
	WAIT = 'CTR_COMMON_WAIT',
	WAIT_END = 'CTR_COMMON_WAIT_END',
	CONNECT = 'CTR_COMMON_CONNECT',
	ERROR = 'CTR_COMMON_ERROR',
	NOTICE = 'CTR_COMMON_NOTICE',
	NOMOVE = 'CTR_COMMON_NOMOVE',
	SCROLL = 'CTR_COMMON_SCROLL',
	SCROLL_LIST = 'CTR_COMMON_SCROLL_LIST',
	SCROLL_TEXT = 'CTR_COMMON_SCROLL_TEXT',
	SCROLL_END = 'CTR_COMMON_SCROLL_END',
	DIALOG = 'CTR_COMMON_DIALOG',
	SYSAPPLET_END = 'CTR_COMMON_SYSAPPLET_END',
	HG_Prev = 'CTR_SPIDER_HG_Prev',
	HG_Next = 'CTR_SPIDER_HG_Next',
	MV_START = 'CTR_SPIDER_MV_START',
	LINK = 'CTR_SPIDER_LINK',
	YOMIKOMI = 'CTR_SPIDER_YOMIKOMI',
	YOMIEND = 'CTR_SPIDER_YOMIEND',
	YomiCancel = 'CTR_SPIDER_YomiCancel',
	MV_KAKTEI = 'CTR_SPIDER_MV_KAKTEI',
	MV_LINE = 'CTR_SPIDER_MV_LINE',
	MV_CURSOR = 'CTR_SPIDER_MV_CURSOR',
	FavCursor = 'CTR_SPIDER_FavCursor',
	Navi = 'CTR_SPIDER_Navi',
	Navi_On = 'CTR_SPIDER_Navi_On',
	Navi_Off = 'CTR_SPIDER_Navi_Off',
	ZOOM2BIG = 'CTR_SPIDER_ZOOM2BIG',
	ZOOM2SMALL = 'CTR_SPIDER_ZOOM2SMALL',
	LINK_CLICK = 'CTR_SPIDER_LINK_CLICK',
	BTN_CLICK = 'CTR_SPIDER_BTN_CLICK',
	Ticker = 'CTR_SPIDER_Ticker',
	SEL_START = 'CTR_SPIDER_SEL_START',
	SEL_CURSOR = 'CTR_SPIDER_SEL_CURSOR',
	InfoOn = 'CTR_SPIDER_InfoOn',
	SEL_END = 'CTR_SPIDER_SEL_END'
};
```

> `BackgroundMusic`

Labels for the various songs that can be played with the `snd_playBgm` function

```ts
export const enum BackgroundMusic {
	ACCOUNT_OP = 'BGM_ACCOUNT_OP',
	MAIN = 'BGM_CAVE_MAIN_2',
	MAIN_LOOP = 'BGM_CAVE_MAIN_LOOP',
	MAIN_LOOP_NOWAIT = 'BGM_CAVE_MAIN_LOOP_NOWAIT',
	WORLD_MAP_MINT = 'BGM_CAVE_WORLD_MAP_MINT',
	WORLD_MAP = 'BGM_CAVE_WORLD_MAP',
	MAIN_OFFLINE = 'BGM_CAVE_MAIN_OFFLINE',
	SETTING = 'BGM_CAVE_SETTING',
	SYOKAI = 'BGM_CAVE_SYOKAI',
	SYOKAI2 = 'BGM_CAVE_SYOKAI2'
};
```

> `Screens`

IDs for the dual screens. Mainly used by `capture_isEnabledEx`

```ts
export const enum Screens {
	TOP = 0,
	BOTTOM = 1
};
```

> `MiiFeelings`

IDs for the various expressions a Mii can make when rendered. Mainly used by `mii_getIconBase64`

```ts
export const enum MiiFeelings {
	DEFAULT = 0, // This is actually called "normal" internally but I feel like this makes more sense
	HAPPY = 1,
	WINK = 2, // This is actually called "like" internally but I didn't feel like that made sense
	SURPRISED = 3,
	FRUSTRATED = 4,
	PUZZLED = 5
};
```

### Types
> `Enumerize`

Converts an enums values into a number union

```
export type Enumerize<T extends number> = `${Extract<T, number>}` extends `${infer N extends number}` ? N : never;
```

> `Button`

Union of all the button IDs in `Buttons`

```
export type Button = Enumerize<Buttons>;
```

> `SoundEffect`

Union of all the labels in `SoundEffects`

```
export type SoundEffect = `${SoundEffects}`;
```

> `BGM`

Union of all the labels in `BackgroundMusic`

```
export type BGM = `${BackgroundMusic}`;
```

> `Screen`

Union of all the screen IDs in `Screens`

```
export type Screen = Enumerize<Screens>;
```

> `MiiFeeling`

Union of all the expression IDs in `MiiFeelings`

```
export type MiiFeeling = Enumerize<MiiFeelings>;
```

> `AppletCallback`

The JavaScript engine used in applets defines a dedicated "callback" JS type. This type represents that. The accuracy of the signature is not guaranteed

```
export type AppletCallback = () => void;
```