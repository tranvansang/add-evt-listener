type IEventHandler<T, V> = T extends (event: V, handler: infer Handler) => any ? Handler extends (...params: any[]) => any ? Handler : never : never;
type IEventOption<T, V, P> = T extends (event: V, handler: P, option: infer Option) => any ? Option : never;
export default function addEvtListener<Target extends {
    addEventListener<T extends string>(event: T, listener: any, option: any): any;
    removeEventListener<T extends string>(event: T, listener: any, option: any): any;
}, Event extends Parameters<Target['addEventListener']>[0], Handler extends IEventHandler<Target['addEventListener'], Event>>(target: Target, event: Event, handler: Handler, option?: IEventOption<Target, Event, Handler>): () => any;
export {};
