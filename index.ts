type AnyFunction = (...params: any[]) => any
type IEventName<T extends AnyFunction> = Parameters<T>[0]

type IEventHandler<T, V> = T extends (event: V, handler: infer Handler) => any
	? Handler & AnyFunction : never

type IEventOption<T, V, P> = T extends (event: V, handler: P, option: infer Option) => any
	? Option : never

interface IEventTarget {
	addEventListener(event: any, listener: any, option: any): any
	removeEventListener(event: any, listener: any, option: any): any
}

export function addEvtListener <
	Target extends IEventTarget,
	Event extends IEventName<Target['addEventListener']>,
	Handler extends IEventHandler<Target['addEventListener'], Event>
	>(
	target: Target,
	event: Event,
	handler: Handler,
	option?: IEventOption<Target, Event, Handler>
) {
	let removed = false
	target.addEventListener(event, handler, option)
	return () => void (removed ||= target.removeEventListener(event, handler, option) || true)
}

type SelfHandler = <V, T extends {
	target: V
	currentTarget: V
}>(evt: T, ...params: any[]) => any

export function addEvtListenerSelf<
	Target extends IEventTarget,
	Event extends IEventName<Target['addEventListener']>,
	Handler extends IEventHandler<Target['addEventListener'], Event> & SelfHandler
	>(
	target: Target,
	event: Event,
	handler: Handler,
	option?: IEventOption<Target, Event, Handler>
) {
	return addEvtListener<Target, Event, Handler>(
		target,
		event,
		((evt, ...args) => {
			const {target, currentTarget} = evt
			if (target === currentTarget) handler(evt, ...args)
		}) as unknown as Handler,
		option
	)
}

export function addEvtListenerSelfOnce<
	Target extends IEventTarget,
	Event extends IEventName<Target['addEventListener']>,
	Handler extends IEventHandler<Target['addEventListener'], Event> & SelfHandler
	>(
	target: Target,
	event: Event,
	handler: Handler,
	option?: IEventOption<Target, Event, Handler>
) {
	const remove = addEvtListener<Target, Event, Handler>(
		target,
		event,
		((evt, ...args) => {
			const {target, currentTarget} = evt
			if (target === currentTarget) {
				remove()
				handler(evt, ...args)
			}
		}) as unknown as Handler,
		option
	)
	return remove
}

export function addEvtListenerOnce<
	Target extends IEventTarget,
	Event extends IEventName<Target['addEventListener']>,
	Handler extends IEventHandler<Target['addEventListener'], Event>
	>(
	target: Target,
	event: Event,
	handler: Handler,
	option?: IEventOption<Target, Event, Handler>
) {
	const remove = addEvtListener<Target, Event, Handler>(
		target,
		event,
		((...args) => {
			remove()
			handler(...args)
		}) as unknown as Handler,
		option
	)
	return remove
}
