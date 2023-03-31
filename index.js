"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEvtListenerOnce = exports.addEvtListenerSelfOnce = exports.addEvtListenerSelf = exports.addEvtListener = void 0;
function addEvtListener(target, event, handler, option) {
    var removed = false;
    target.addEventListener(event, handler, option);
    return function () { return void (removed || (removed = target.removeEventListener(event, handler, option) || true)); };
}
exports.addEvtListener = addEvtListener;
function addEvtListenerSelf(target, event, handler, option) {
    return addEvtListener(target, event, (function (evt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var target = evt.target, currentTarget = evt.currentTarget;
        if (target === currentTarget)
            handler.apply(void 0, __spreadArray([evt], args, false));
    }), option);
}
exports.addEvtListenerSelf = addEvtListenerSelf;
function addEvtListenerSelfOnce(target, event, handler, option) {
    var remove = addEvtListener(target, event, (function (evt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var target = evt.target, currentTarget = evt.currentTarget;
        if (target === currentTarget) {
            remove();
            handler.apply(void 0, __spreadArray([evt], args, false));
        }
    }), option);
    return remove;
}
exports.addEvtListenerSelfOnce = addEvtListenerSelfOnce;
function addEvtListenerOnce(target, event, handler, option) {
    var remove = addEvtListener(target, event, (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        remove();
        handler.apply(void 0, args);
    }), option);
    return remove;
}
exports.addEvtListenerOnce = addEvtListenerOnce;
//# sourceMappingURL=index.js.map