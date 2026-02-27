interface IEventTarget {
	addEventListener(event: string, handler: any, option?: any): any
	removeEventListener(event: string, handler: any, option?: any): any
}

type IEventHandler<T extends IEventTarget, E extends string> =
	T['addEventListener'] extends {
		(event: E, handler: infer H, ...args: any[]): any
		(...args: any[]): any
	}
		? H extends (...params: any[]) => any ? H : never
		: T['addEventListener'] extends (event: E, handler: infer H, ...args: any[]) => any
			? H extends (...params: any[]) => any ? H : never
			: never

type IEventOption<T extends IEventTarget, E extends string, H> =
	T['addEventListener'] extends {
		(event: E, handler: H, option: infer O): any
		(...args: any[]): any
	}
		? O
		: T['addEventListener'] extends (event: E, handler: H, option: infer O) => any
			? O
			: never

export default function addEvtListener<
	T extends HTMLElement,
	K extends keyof HTMLElementEventMap
>(
	target: T,
	event: K,
	handler: (this: T, ev: HTMLElementEventMap[K]) => any,
	option?: boolean | AddEventListenerOptions
): () => void

export default function addEvtListener<
	T extends SVGElement,
	K extends keyof SVGElementEventMap
>(
	target: T,
	event: K,
	handler: (this: T, ev: SVGElementEventMap[K]) => any,
	option?: boolean | AddEventListenerOptions
): () => void

export default function addEvtListener<
	K extends keyof DocumentEventMap
>(
	target: Document,
	event: K,
	handler: (this: Document, ev: DocumentEventMap[K]) => any,
	option?: boolean | AddEventListenerOptions
): () => void

export default function addEvtListener<
	K extends keyof WindowEventMap
>(
	target: Window,
	event: K,
	handler: (this: Window, ev: WindowEventMap[K]) => any,
	option?: boolean | AddEventListenerOptions
): () => void

export default function addEvtListener<
	Target extends IEventTarget,
	Event extends Parameters<Target['addEventListener']>[0],
	Handler extends IEventHandler<Target, Event>
>(
	target: Target,
	event: Event,
	handler: Handler,
	option?: IEventOption<Target, Event, Handler>
): () => void

export default function addEvtListener(
	target: any,
	event: string,
	handler: any,
	option?: any
): () => void {
	target.addEventListener(event, handler, option)
	return function removeEvtListener() {
		target.removeEventListener(event, handler, option)
	}
}
