type AnyFunction = (...params: any[]) => any;
type IEventName<T extends AnyFunction> = Parameters<T>[0];
type IEventHandler<T, V> = T extends (event: V, handler: infer Handler) => any ? Handler & AnyFunction : never;
type IEventOption<T, V, P> = T extends (event: V, handler: P, option: infer Option) => any ? Option : never;
interface IEventTarget {
    addEventListener(event: any, listener: any, option: any): any;
    removeEventListener(event: any, listener: any, option: any): any;
}
export declare function addEvtListener<Target extends IEventTarget, Event extends IEventName<Target['addEventListener']>, Handler extends IEventHandler<Target['addEventListener'], Event>>(target: Target, event: Event, handler: Handler, option?: IEventOption<Target, Event, Handler>): () => any;
type SelfHandler = <V, T extends {
    target: V;
    currentTarget: V;
}>(evt: T, ...params: any[]) => any;
export declare function addEvtListenerSelf<Target extends IEventTarget, Event extends IEventName<Target['addEventListener']>, Handler extends IEventHandler<Target['addEventListener'], Event> & SelfHandler>(target: Target, event: Event, handler: Handler, option?: IEventOption<Target, Event, Handler>): () => any;
export declare function addEvtListenerSelfOnce<Target extends IEventTarget, Event extends IEventName<Target['addEventListener']>, Handler extends IEventHandler<Target['addEventListener'], Event> & SelfHandler>(target: Target, event: Event, handler: Handler, option?: IEventOption<Target, Event, Handler>): () => any;
export declare function addEvtListenerOnce<Target extends IEventTarget, Event extends IEventName<Target['addEventListener']>, Handler extends IEventHandler<Target['addEventListener'], Event>>(target: Target, event: Event, handler: Handler, option?: IEventOption<Target, Event, Handler>): () => any;
export {};
