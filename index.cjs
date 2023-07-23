"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEvtListenerOnce = exports.addEvtListenerSelfOnce = exports.addEvtListenerSelf = exports.addEvtListener = void 0;
function addEvtListener(target, event, handler, option) {
    let removed = false;
    target.addEventListener(event, handler, option);
    return () => void (removed ||= target.removeEventListener(event, handler, option) || true);
}
exports.addEvtListener = addEvtListener;
function addEvtListenerSelf(target, event, handler, option) {
    return addEvtListener(target, event, ((evt, ...args) => {
        const { target, currentTarget } = evt;
        if (target === currentTarget)
            handler(evt, ...args);
    }), option);
}
exports.addEvtListenerSelf = addEvtListenerSelf;
function addEvtListenerSelfOnce(target, event, handler, option) {
    const remove = addEvtListener(target, event, ((evt, ...args) => {
        const { target, currentTarget } = evt;
        if (target === currentTarget) {
            remove();
            handler(evt, ...args);
        }
    }), option);
    return remove;
}
exports.addEvtListenerSelfOnce = addEvtListenerSelfOnce;
function addEvtListenerOnce(target, event, handler, option) {
    const remove = addEvtListener(target, event, ((...args) => {
        remove();
        handler(...args);
    }), option);
    return remove;
}
exports.addEvtListenerOnce = addEvtListenerOnce;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFjQSxTQUFnQixjQUFjLENBSzdCLE1BQWMsRUFDZCxLQUFZLEVBQ1osT0FBZ0IsRUFDaEIsTUFBNkM7SUFFN0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTtBQUMzRixDQUFDO0FBYkQsd0NBYUM7QUFPRCxTQUFnQixrQkFBa0IsQ0FLakMsTUFBYyxFQUNkLEtBQVksRUFDWixPQUFnQixFQUNoQixNQUE2QztJQUU3QyxPQUFPLGNBQWMsQ0FDcEIsTUFBTSxFQUNOLEtBQUssRUFDTCxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7UUFDakIsTUFBTSxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsR0FBRyxHQUFHLENBQUE7UUFDbkMsSUFBSSxNQUFNLEtBQUssYUFBYTtZQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNwRCxDQUFDLENBQXVCLEVBQ3hCLE1BQU0sQ0FDTixDQUFBO0FBQ0YsQ0FBQztBQW5CRCxnREFtQkM7QUFFRCxTQUFnQixzQkFBc0IsQ0FLckMsTUFBYyxFQUNkLEtBQVksRUFDWixPQUFnQixFQUNoQixNQUE2QztJQUU3QyxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQzVCLE1BQU0sRUFDTixLQUFLLEVBQ0wsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFO1FBQ2pCLE1BQU0sRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLEdBQUcsR0FBRyxDQUFBO1FBQ25DLElBQUksTUFBTSxLQUFLLGFBQWEsRUFBRTtZQUM3QixNQUFNLEVBQUUsQ0FBQTtZQUNSLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtTQUNyQjtJQUNGLENBQUMsQ0FBdUIsRUFDeEIsTUFBTSxDQUNOLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNkLENBQUM7QUF2QkQsd0RBdUJDO0FBRUQsU0FBZ0Isa0JBQWtCLENBS2pDLE1BQWMsRUFDZCxLQUFZLEVBQ1osT0FBZ0IsRUFDaEIsTUFBNkM7SUFFN0MsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUM1QixNQUFNLEVBQ04sS0FBSyxFQUNMLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLENBQUE7UUFDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNqQixDQUFDLENBQXVCLEVBQ3hCLE1BQU0sQ0FDTixDQUFBO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZCxDQUFDO0FBcEJELGdEQW9CQyJ9