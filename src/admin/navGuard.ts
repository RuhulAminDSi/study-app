/**
 * Lets a screen with unsaved work (the lesson editor) intercept admin navigation. The shell asks
 * `canLeave()` before switching screens; the guard answers, usually by asking the admin.
 */
let guard: (() => Promise<boolean>) | null = null

export function setNavigationGuard(fn: (() => Promise<boolean>) | null) { guard = fn }

export function canLeave(): Promise<boolean> { return guard ? guard() : Promise.resolve(true) }
