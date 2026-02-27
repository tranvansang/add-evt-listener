type IEventHandler<T extends {
	addEventListener(event: string, handler: any, option?: any): any
}, V> = T['addEventListener'] extends (event: V, handler: infer H, ...args: any[]) => any
	? H extends (...params: any[]) => any
		? H : never
	: never

type IEventOption<T extends {
	addEventListener(event: string, handler: any, option?: any): any
}, V, P> =
	T['addEventListener'] extends (event: V, handler: P, option: infer O) => any ? O : never

export default function addEvtListener<
	Target extends {
		addEventListener(event: string, handler: any, option?: any): any
		removeEventListener(event: string, handler: any, option?: any): any
	},
	Event extends Parameters<Target['addEventListener']>[0],
	Handler extends IEventHandler<Target, Event>
>(
	target: Target,
	event: Event,
	handler: Handler,
	option?: IEventOption<Target, Event, Handler>
) {
	target.addEventListener(event, handler, option)
	return function removeEvtListener() {
		return target.removeEventListener(event, handler, option)
	}
}
