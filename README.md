# Applet Types
TypeScript type declarations Nintendo applets

## What this is
Several Nintendo titles, ranging from Miiverse to TVii to the eShop and more, are "applets". Each title is actually just a heavily customized and stripped down web browser loading a web app. In order to give these web apps more powerful features and access to OS and hardware features, many ship with custom JavaScript APIs

These packages provide TypeScript type declarations for each of these APIs, as well as some constants, to ease the development experience in these applets. When mixed with [NWFX](https://github.com/PretendoNetwork/NWFX) this creates a truly modern work environment for these dating consoles

## What this isn't
This is _**NOT**_ any sort of shim or polyfill for these APIs. It is simply type declarations and some constants