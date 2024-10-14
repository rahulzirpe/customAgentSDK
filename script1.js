window.lpTag = window.lpTag || {}; lpTag.taglets = lpTag.taglets || {}; lpTag.agentSDK = lpTag.agentSDK || function () { function a(a) { r = l(); m(a && a.notificationCallback, x.notify); m(a && a.visitorFocusedCallback, x.visitorFocused); m(a && a.visitorBlurredCallback, x.visitorBlurred); if (r) try { r.command({ appName: u.manager, cmdName: v.initialize, data: {} }) } catch (b) { p("Error initializing communication. The error: " + b) } } function b() { if (r && r.dispose) try { r.dispose() } catch (a) { p("Error disposing of the courier. The error: " + a) } r = null } function c(a, b, c) { var d = n(b, "'get' success"), e = n(c, "'get' error", !0); if (r && a) { q('Calling "get" on the following key: ' + a); try { r.request({ appName: u.manager, reqName: w.get, data: { key: a } }, function (a, b) { a && e(a); d(b) }) } catch (f) { p('Error calling "get" on the following key: ' + a + ". The error: " + f); e(f) } } else { var g; r ? a || (g = 'No key provided when calling "get"') : g = 'No channel defined when calling "get". Maybe you are missing a call to "init"?'; if (g) { p(g); e(g) } } } function d(a, b, c) { this.request("Set Consumer Profile", a, b, c) } function e(a, b, c) { var d = n(b, "'bind' valueUpdateCallback"), e = n(c, "'bind' notifyWhenDoneCallback"); if (r && a) { q('Calling "bind" on the following key: ' + a); try { r.bind({ appName: u.manager, eventName: a, func: d }); r.command({ appName: u.manager, cmdName: v.bind, data: { key: a } }, e) } catch (f) { p('Error calling "bind" on the following key: ' + a + ". The error: " + f); e(f) } } else { var g; r ? a || (g = 'No key provided when calling "bind"') : g = 'No channel defined when calling "bind". Maybe you are missing a call to "init"?'; if (g) { p(g); e(g) } } } function f(a, b, c) { var d = n(b, "'bind' valueUpdateCallback"), e = n(c, "'bind' notifyWhenDoneCallback"); if (r && a) { q('Calling "unbind" on the following key: ' + a); try { r.unbind({ appName: u.manager, eventName: a, func: d }); r.command({ appName: u.manager, cmdName: v.unbind, data: { key: a } }, e) } catch (f) { p('Error calling "unbind" on the following key: ' + a + ". The error: " + f); e(f) } } else { var g; r ? a || (g = 'No key provided when calling "unbind"') : g = 'No channel defined when calling "unbind". Maybe you are missing a call to "init"?'; if (g) { p(g); e(g) } } } function g(a, b, c) { var d = n(c, "'command' notifyWhenDoneCallback"); if (r && a) { q('Calling "command" with the following cmdName: ' + a); try { r.command({ appName: u.manager, cmdName: a, data: b }, d) } catch (e) { p('Error calling "command" with the following cmdName: ' + a + ". The error: " + e); d(e) } } else { var f; r ? a || (f = 'No cmdName provided when calling "command"') : f = 'No channel defined when calling "command". Maybe you are missing a call to "init"?'; if (f) { p(f); d(f) } } } function h(a, b, c, d) { var e = n(c, "'request' success"), f = n(d, "'request' error", !0); if (r && a && b && Object.keys(b).length) { q('Calling "request" with the following reqName: ' + a); try { r.request({ appName: u.manager, reqName: a, data: b }, function (a) { return a ? f(a) : e() }) } catch (g) { p('Error calling "request" with the following reqName: ' + a + ". The error: " + g); f(g) } } else { var h; r ? a ? b || (h = 'No data provided when calling "request" with the following reqName: ' + a) : h = 'No reqName provided when calling "request"' : h = 'No channel defined when calling "request". Maybe you are missing a call to "init"?'; if (h) { p(h); f(h) } } } function i(a) { m(a, x.notify) } function j(a) { m(a, x.visitorFocused) } function k(a) { m(a, x.visitorBlurred) } function l() { if (lpTag.Chronos.PostMessageCourier) { q("Creating an instance of the courier"); try { return new lpTag.Chronos.PostMessageCourier } catch (a) { p("Error creating instance of courier") } } return void 0 } function m(a, b) { if (a && r && b) { q("binding on " + b); try { r.bind({ appName: u.events, eventName: b, func: n(a, b + " event") }) } catch (c) { p("Error binding on " + b + ". The error: " + JSON.stringify(c)) } } else r || p("No channel defined when binding on " + b + '. Maybe you are missing a call to "init"?') } function n(a, b, c) { return function (d) { if (a && ("undefined" != typeof d || !c)) try { a.call(this, d) } catch (e) { p("Callback provided for " + b + " encountered an error. The error: " + JSON.stringify(e) + " . The callback data: " + JSON.stringify(d)) } } } function o(a, b) { window.lpTag && lpTag.log && lpTag.log(a, b, s) } function p(a) { o(a, "ERROR") } function q(a) { o(a, "INFO") } var r, s = "agentSDK", t = "1.0.1", u = { manager: "iFrame manager", events: "iFrame events" }, v = { bind: "Bind", unbind: "Unbind", write: "Write ChatLine", writeSC: "Write StructuredContent", notify: "Send Notification", initialize: "Initialize" }, w = { get: "Get", setConsumerProfile: "Set Consumer Profile", setChatNote: "Set Chat Note" }, x = { notify: "Notify", visitorFocused: "Visitor Focused", visitorBlurred: "Visitor Blurred" }; return { v: t, name: s, init: a, get: c, bind: e, unbind: f, command: g, request: h, dispose: b, onNotify: i, onVisitorFocused: j, onVisitorBlurred: k, setConsumerProfile: d, appNames: u, eventNames: x, cmdNames: v, reqNames: w } }(); !function (a, b) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.EventsUtil", [], function () { return b(a, a, !0) }); else if ("object" == typeof exports) b(a, exports); else { a.Chronos = a.Chronos || {}; b(a, a.Chronos) } }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c) { "use strict"; function d(a, b, c) { var d = []; if (a[b] && a[b].length) for (var e = 0; e < a[b].length; e++)c && "*" !== a[b][e].appName && a[b][e].appName !== c || d.push(a[b][e]); if (a["*"]) for (var f = 0; f < a["*"].length; f++)c && "*" !== a["*"][f].appName && a["*"][f].appName !== c || d.push(a["*"][f]); return d } function e(b, c, d) { a && "function" == typeof a.log && a.log(b, c, d) } function f(a) { var b, c = a.unbindObj[a.attrName], d = !1; if (!a.unbindObj) { e("CMD listen id not spec for unbind", "ERROR", a.loggerName); return null } if ("string" == typeof a.unbindObj) return j(a.lstnrs, a.unbindObj); if (!a.unbindObj.func && !a.unbindObj.context && !a.unbindObj.appName) return !1; var f = a.lstnrs; if (c) { f = {}; f[c] = a.lstnrs[c] } for (var g in f) if (f.hasOwnProperty(g) && f[g] && f[g].length) { b = k(f[g], a.unbindObj.func, a.unbindObj.context, a.unbindObj.appName); if (b.length !== f[g].length) { a.lstnrs[g] = b; d = !0 } } return d } function g(a) { var b = {}; if (a.constructor === Object) for (var c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && ("object" == typeof a[c] && a[c].constructor !== Array ? b[c] = g(a[c]) : a[c].constructor === Array ? b[c] = a[c].slice(0) || [] : "function" != typeof a[c] && (b[c] = null !== a[c] && void 0 !== a[c] ? a[c] : "")); else a.constructor === Array ? b = a.slice(0) || [] : "function" != typeof a && (b = a); return b } function h(a, b, c) { if (("undefined" == typeof c || "*" === c) && "*" === b) return a; for (var d = [], e = 0; e < a.length; e++)(a[e].eventName === c || "*" === c) && (b && b === a[e].appName || !a[e].appName || "*" === a[e].appName || "*" === b) && d.push(a[e]); return d } function i(a) { if (0 === a.eventBufferLimit || a.triggerData.data && a.triggerData.data.doNotStore) a = null; else { var b = { eventName: a.triggerData[a.attrName], appName: a.triggerData.appName }; b.data = a.triggerData.passDataByRef ? a.triggerData.data : g(a.triggerData.data); if (a.eventBufferLimit > 0) { a.index >= a.eventBufferLimit && (a.index = 0); a.fired[a.index] = b; a.index++ } else a.fired.push(b); a = null } } function j(a, b) { var c = !1; if (!b) { e("Ev listen id not spec for unregister", "ERROR", "Events"); return null } for (var d in a) if (a.hasOwnProperty(d)) for (var f = 0; f < a[d].length; f++)if (a[d][f].id == b) { a[d].splice(f, 1); e("Ev listen=" + b + " and name=" + d + " unregister", "DEBUG", "Events"); c = !0; break } c || e("Ev listen not found " + b + " unregister", "DEBUG", "Events"); return c } function k(a, b, c, d) { var f = []; if (a && a.length) for (var g = 0; g < a.length; g++)try { var h = !c && a[g].func === b, i = !b && c && a[g].context === c, j = b && c && a[g].func === b && a[g].context === c, k = d && d === a[g].appName, l = "*" === a[g].appName; if (h || i || j) { if (k || l) continue; if (i) continue } else if (!b && !c && k) continue; f.push(a[g]) } catch (m) { e("Error in unbind e=" + m.message, "ERROR", "Events") } return f } var l = { getListeners: d, log: e, unbind: f, hasFired: h, cloneEventData: g, storeEventData: i }; c || (b.EventsUtil = b.EventsUtil || l); return l }); !function (a, b) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.Events", ["Chronos.EventsUtil"], function (c) { return b(a, a, c, !0) }); else if ("object" == typeof exports) b(a, exports, require("./util/EventsUtil").EventsUtil); else { a.Chronos = a.Chronos || {}; b(a, a.Chronos, a.Chronos.EventsUtil) } }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d) { "use strict"; function e(a) { function b(a) { if (a) { a.triggerOnce = !0; return d(a) } return null } function d(a, b, e) { var f = a; "string" == typeof a && (f = { appName: a, eventName: b, func: e }); f.appName = f.appName || l; "*" !== l && ("string" != typeof a || "function" != typeof b && "undefined" != typeof b || (f.eventName = a)); if (!f.eventName || !f.func || "function" != typeof f.func && f.func.constructor !== Array) { c.log("Ev listen has invalid params: evName=[" + f.eventName + "]", "ERROR", "Events"); return null } if (f.func.constructor === Array) { for (var g, h, i = [], j = 0; j < f.func.length; j++) { g = c.cloneEventData(f); g.func = f.func[j]; h = d(g); i.push(h) } return i } var k = r + o++, m = { id: k, func: f.func, context: f.context || null, aSync: f.aSync ? !0 : !1, appName: f.appName, triggerOnce: f.triggerOnce || !1 }; p[f.eventName] = p[f.eventName] || []; p[f.eventName].push(m); c.log("Ev listen rgstr: evName=[" + f.eventName + "] aSync=" + m.aSync + " appName=" + m.name, "DEBUG", "Events"); f = null; a = null; return k } function e(a) { "*" !== l && (a.appName = a.appName || l); return c.unbind({ unbindObj: a, attrName: n, loggerName: m, lstnrs: p }) } function f(a, b) { if ("undefined" == typeof b) { b = a; a = l } return c.hasFired(q, a, b) } function g(a, b, d) { var e = a; "string" == typeof a && (e = { eventName: b, appName: a, data: d }); if ("*" !== l) { e.appName = e.appName || l; "string" != typeof a || "object" != typeof b && "undefined" != typeof b || (e.eventName = a) } if (!e || "undefined" == typeof e.eventName) { c.log("Ev name not spec for publish", "ERROR", "Events"); e = null; return null } e.passDataByRef = e.passDataByRef || !j; i(e); var f = c.getListeners(p, e.eventName, e.appName); if (f.length > 0) for (var g = 0; g < f.length; g++) { var k = e.passDataByRef ? e.data : c.cloneEventData(e.data), m = { appName: e.appName, eventName: e.eventName }, n = f[g]; n.aSync || k && k.aSync ? setTimeout(h(n, k, m), 0) : h(n, k, m)() } e = null; return f.length > 0 } function h(a, b, d) { return function () { try { a.func.call(a.context, b, d); b = null; a.triggerOnce && e(a); a = null } catch (f) { c.log("Error executing " + d.eventName + " eventId: " + a.id + "e=" + f.message, "ERROR", "Events") } } } function i(a) { c.storeEventData({ triggerData: a, eventBufferLimit: k, attrName: n, fired: q, index: s }) } var j, k, l, m = "Events", n = "eventName", o = 0, p = {}, q = [], r = "evId_", s = 0; l = a && a.appName || "*"; j = a && "boolean" == typeof a.cloneEventData ? a.cloneEventData : !1; k = a && !isNaN(a.eventBufferLimit) ? a.eventBufferLimit : -1; this.once = b; this.hasFired = f; this.trigger = g; this.publish = g; this.bind = d; this.register = d; this.unbind = e; this.unregister = e } d || (b.Events = b.Events || e); return e }); !function (a, b) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.CommandsUtil", ["Chronos.EventsUtil"], function (c) { return b(a, a, c, !0) }); else if ("object" == typeof exports) b(a, exports, require("./EventsUtil").EventsUtil); else { a.Chronos = a.Chronos || {}; b(a, a.Chronos, a.Chronos.EventsUtil) } }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d) { "use strict"; function e(a) { var b = a.cmd[a.attrName]; if (!b || !a.cmd.func || "function" != typeof a.cmd.func || !f(a.cmd, b)) { c.log("comply: has invalid params: command=[" + b + "]", "ERROR", a.loggerName); return null } if (a.lstnrs[b] && a.lstnrs[b].length) { c.log("comply: cannot comply because command already exist command=" + b, "ERROR", a.loggerName); return null } var d = a.prefix + a.id++, e = { id: d, func: a.cmd.func, context: a.cmd.context || null, appName: a.cmd.appName }; a.lstnrs[b] = a.lstnrs[b] || []; a.lstnrs[b].push(e); c.log("Cmd comply: evName=[" + b + "] appName=" + e.appName, "DEBUG", a.loggerName); return d } function f(a, b) { return !(b && "*" === b || a.appName && "*" === a.appName) } var g = { bind: e, valid: f }; d || (b.CommandsUtil = b.CommandsUtil || g); return g }); !function (a, b) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.Commands", ["Chronos.EventsUtil", "Chronos.CommandsUtil"], function (c, d) { return b(a, a, c, d, !0) }); else if ("object" == typeof exports) b(a, exports, require("./util/EventsUtil").EventsUtil, require("./util/CommandsUtil").CommandsUtil); else { a.Chronos = a.Chronos || {}; b(a, a.Chronos, a.Chronos.EventsUtil, a.Chronos.CommandsUtil) } }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d, e) { "use strict"; function f(a) { function b(a) { "*" !== k && (a.appName = a.appName || k); return d.bind({ cmd: a, attrName: m, loggerName: l, prefix: q, id: n, lstnrs: o }) } function e(a) { "*" !== k && (a.appName = a.appName || k); return c.unbind({ unbindObj: a, attrName: m, loggerName: l, lstnrs: o }) } function f(a, b) { if ("undefined" == typeof b) { b = a; a = k } return c.hasFired(p, a, b) } function g(a, b) { if (!a || "undefined" == typeof a.cmdName || !d.valid(a, a.cmdName)) { c.log("CMD name not spec for command", "ERROR", "Commands"); return null } "*" !== k && (a.appName = a.appName || k); a.passDataByRef = a.passDataByRef || !i; h(a); if (!o[a.cmdName]) return !1; var e = c.getListeners(o, a.cmdName, a.appName); if (e.length > 0) for (var f = 0; f < e.length; f++) { var g = a.passDataByRef ? a.data : c.cloneEventData(a.data), j = e[f]; try { "function" == typeof b ? j.func.call(j.context, g, b) : j.func.call(j.context, g); g = null; j = null } catch (l) { if ("function" == typeof b) try { b(l) } catch (m) { c.log("Error executing callback on error, " + a.cmdName + " commandId: " + j.id + "e=" + m.message, "ERROR", "Commands") } c.log("Error executing " + a.cmdName + " commandId: " + j.id + "e=" + l.message, "ERROR", "Commands") } } return e.length > 0 } function h(a) { c.storeEventData({ triggerData: a, eventBufferLimit: j, attrName: m, fired: p, index: r }) } var i, j, k, l = "Commands", m = "cmdName", n = 0, o = {}, p = [], q = "cmdId_", r = 0; k = a && a.appName || "*"; i = a && "boolean" == typeof a.cloneEventData ? a.cloneEventData : !1; j = a && !isNaN(a.eventBufferLimit) ? a.eventBufferLimit : -1; this.hasFired = f; this.comply = b; this.stopComplying = e; this.command = g } e || (b.Commands = b.Commands || f); return f }); !function (a, b) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.Reqres", ["Chronos.EventsUtil", "Chronos.CommandsUtil"], function (c, d) { return b(a, a, c, d, !0) }); else if ("object" == typeof exports) b(a, exports, require("./util/EventsUtil").EventsUtil, require("./util/CommandsUtil").CommandsUtil); else { a.Chronos = a.Chronos || {}; b(a, a.Chronos, a.Chronos.EventsUtil, a.Chronos.CommandsUtil) } }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d, e) { function f(a) { function b(a) { "*" !== k && (a.appName = a.appName || k); return d.bind({ cmd: a, attrName: m, loggerName: l, prefix: q, id: n, lstnrs: o }) } function e(a) { "*" !== k && (a.appName = a.appName || k); return c.unbind({ unbindObj: a, attrName: m, loggerName: l, lstnrs: o }) } function f(a, b) { if ("undefined" == typeof b) { b = a; a = k } return c.hasFired(p, a, b) } function g(a, b) { var e; if (!a || "undefined" == typeof a.reqName || !d.valid(a, a.reqName)) { c.log("request: name not spec for command", "ERROR", "ReqRes"); throw new Error("Invalid request object") } "*" !== k && (a.appName = a.appName || k); a.passDataByRef = a.passDataByRef || !i; h(a); if (!o[a.reqName]) return e; var f = c.getListeners(o, a.reqName, a.appName); if (f.length > 0) for (var g = 0; g < f.length; g++) { var j = a.passDataByRef ? a.data : c.cloneEventData(a.data), l = { appName: a.appName, reqName: a.reqName }, m = f[g]; try { e = "function" == typeof b ? m.func.call(m.context, j, b) : m.func.call(m.context, j); j = null; m = null } catch (n) { if ("function" == typeof b) try { b(n) } catch (p) { c.log("Error executing callback on error, " + l.reqName + " requestId: " + m.id + "e=" + p.message, "ERROR", "ReqRes") } c.log("Error executing " + l.reqName + " requestId: " + m.id + "e=" + n.message, "ERROR", "ReqRes") } } return e } function h(a) { c.storeEventData({ triggerData: a, eventBufferLimit: j, attrName: m, fired: p, index: r }) } var i, j, k, l = "ReqRes", m = "reqName", n = 0, o = {}, p = [], q = "reqId_", r = 0; k = a && a.appName || "*"; i = a && "boolean" == typeof a.cloneEventData ? a.cloneEventData : !1; j = a && !isNaN(a.eventBufferLimit) ? a.eventBufferLimit : -1; this.hasFired = f; this.request = g; this.reply = b; this.stopReplying = e } e || (b.ReqRes = b.ReqRes || f); return f }); !function (a, b) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.Channels", ["Chronos.Events", "Chronos.Commands", "Chronos.Reqres"], function (c, d, e) { return b(a, a, c, d, e, !0) }); else if ("object" == typeof exports) b(a, exports, require("./Events").Events, require("./Commands").Commands, require("./Reqres").ReqRes); else { a.Chronos = a.Chronos || {}; b(a, a.Chronos, a.Chronos.Events, a.Chronos.Commands, a.Chronos.ReqRes) } }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d, e, f) { function g(a) { function b(a) { return function () { var b; a.func.apply(a.context, Array.prototype.slice.call(arguments, 0)); for (var c = 0; c < g.length; c++) { b = g[c]; if (b[a.triggerType]) try { b[a.triggerType].apply(b.context, Array.prototype.slice.call(arguments, 0)) } catch (d) { } } } } function f(a) { "object" == typeof a && a.trigger && g.push(a) } a = a || {}; var g = [], h = a.events || new c(a.config && a.config.events), i = a.commands || new d(a.config && a.config.commands), j = a.reqres || new e(a.config && a.config.reqres); this.once = h.once; this.hasFiredEvents = h.hasFired; this.trigger = h.trigger; this.publish = h.publish; this.bind = h.bind; this.register = h.register; this.unbind = h.unbind; this.unregister = h.unregister; this.hasFiredCommands = i.hasFired; this.comply = i.comply; this.stopComplying = i.stopComplying; this.command = i.command; this.hasFiredReqres = j.hasFired; this.request = j.request; this.reply = j.reply; this.stopReplying = j.stopReplying; if (a.externalProxy === !0) { this.trigger = b({ func: h.trigger, context: h, triggerType: "trigger" }); this.publish = b({ func: h.publish, context: h, triggerType: "trigger" }); this.registerProxy = f } } f || (b.Channels = b.Channels || g); return g }); !function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("CircuitBreaker", ["exports"], function () { a.CircuitBreaker || b(a); return a.CircuitBreaker }) : b("object" == typeof exports ? exports : a) }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a) { "use strict"; function b(a) { if (!1 == this instanceof b) return new b(a); this.initialize(a); return void 0 } function c(a) { function b() { } function c() { return e.apply(this instanceof b && a ? this : a, d.concat(Array.prototype.slice.call(arguments))) } var d, e; if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"); d = Array.prototype.slice.call(arguments, 1); e = this; b.prototype = this.prototype; c.prototype = new b; return c } var d = { OPEN: 0, HALF_OPEN: 1, CLOSED: 2 }, e = { FAILURE: "failure", SUCCESS: "success", TIMEOUT: "timeout", OUTAGE: "outage" }; b.prototype = function () { function a(a) { if (!this.initialized) { a = a || {}; this.slidingTimeWindow = !isNaN(a.slidingTimeWindow) && 0 < a.slidingTimeWindow ? parseInt(a.slidingTimeWindow, 10) : 3e4; this.bucketsNumber = !isNaN(a.bucketsNumber) && 0 < a.bucketsNumber ? parseInt(a.bucketsNumber, 10) : 10; this.tolerance = !isNaN(a.tolerance) && 0 < a.tolerance ? parseInt(a.tolerance, 10) : 50; this.calibration = !isNaN(a.calibration) && 0 < a.calibration ? parseInt(a.calibration, 10) : 5; this.timeout = !isNaN(a.timeout) && 0 < a.timeout ? parseInt(a.timeout, 10) : 0; this.onopen = "function" == typeof a.onopen ? a.onopen : function () { }; this.onclose = "function" == typeof a.onclose ? a.onclose : function () { }; this.buckets = [l.call(this)]; this.state = d.CLOSED; this.initialized = !0; k.call(this) } } function b(a, b, c) { if (b && "function" != typeof b) { c = b; b = void 0 } if (h.call(this)) { q.call(this, b || function () { }); return !1 } return p.call(this, a, c) } function c() { this.forced = this.state; this.state = d.OPEN } function f() { this.forced = this.state; this.state = d.CLOSED } function g() { this.state = this.forced; this.forced = void 0 } function h() { return d.OPEN === this.state } function i() { for (var a, b, c = 0, d = 0, f = 0; f < this.buckets.length; f++) { a = this.buckets[f][e.FAILURE] + this.buckets[f][e.TIMEOUT]; d += a; c += a + this.buckets[f][e.SUCCESS] } b = d / (c > 0 ? c : 1) * 100; return { total: c, error: d, percent: b } } function j() { this.timer && clearTimeout(this.timer); n.call(this); if (this.bucketIndex > this.bucketsNumber) { this.bucketIndex = 0; h.call(this) && (this.state = d.HALF_OPEN) } this.timer = setTimeout(j.bind(this), this.bucket) } function k() { this.bucketIndex = 0; this.bucket = this.slidingTimeWindow / this.bucketsNumber; this.timer && clearTimeout(this.timer); this.timer = setTimeout(j.bind(this), this.bucket) } function l() { var a = {}; a[e.FAILURE] = 0; a[e.SUCCESS] = 0; a[e.TIMEOUT] = 0; a[e.OUTAGE] = 0; return a } function m() { return this.buckets[this.buckets.length - 1] } function n() { this.bucketIndex++; this.buckets.push(l.call(this)); this.buckets.length > this.bucketsNumber && this.buckets.shift() } function o(a, b) { return function () { if (!b.done) { if (b.timer) { clearTimeout(b.timer); b.timer = null; delete b.timer } var c = m.call(this); c[a]++; this.forced || r.call(this); b.done = !0 } }.bind(this) } function p(a, b) { var c = { done: !1 }, d = o.call(this, e.SUCCESS, c), f = o.call(this, e.FAILURE, c), g = o.call(this, e.TIMEOUT, c); b = !isNaN(b) && b > 0 ? parseInt(b, 10) : this.timeout; b > 0 && (c.timer = setTimeout(g, b)); try { a(d, f, g) } catch (h) { f() } } function q(a) { try { a() } catch (b) { } var c = m.call(this); c[e.OUTAGE]++ } function r() { var a = i.call(this); if (d.HALF_OPEN === this.state) { var b = !m.call(this)[e.SUCCESS] && 0 < a.error; if (b) this.state = d.OPEN; else { this.state = d.CLOSED; this.onclose(a) } } else { var c = a.percent > this.tolerance, f = a.total > this.calibration, g = f && c; if (g) { this.state = d.OPEN; this.onopen(a) } } } return { initialize: a, run: b, close: f, open: c, reset: g, isOpen: h, calculate: i } }(); b.STATE = d; Function.prototype.bind || (Function.prototype.bind = c); a.CircuitBreaker = a.CircuitBreaker || b }); !function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("cacher", ["exports"], function () { a.Cacher || b(a); return a.Cacher }) : b("object" == typeof exports ? exports : a) }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a) { "use strict"; function b(a) { if (!1 == this instanceof b) return new b(a); this.initialize(a); return void 0 } b.prototype = function () { function a(a) { function b(a, b) { d.nostore = !0; c.call(d, b.key, b.value, b.ttl); delete d.nostore } var d = this, e = !1, f = 0; if (!this.initialized) { a = a || {}; this.cache = {}; this.length = 0; this.max = !isNaN(a.max) && 0 < a.max ? parseInt(a.max, 10) : 0; this.ttl = !isNaN(a.ttl) && 0 < a.ttl ? parseInt(a.ttl, 10) : 0; this.interval = !isNaN(a.interval) && 0 < a.interval ? parseInt(a.interval, 10) : 1e3; this.ontimeout = "function" == typeof a.ontimeout ? a.ontimeout : function () { }; this.stores = a.stores || []; for (; f < this.stores.length && !e;) { if (this.stores[f].autoload && this.stores[f].load) { e = !0; this.stores[f].load({ onitem: b, oncomplete: a.oncomplete }) } f++ } this.initialized = !0; h.call(this) } } function b(a, b) { var c = b ? d.call(this, a) : this.cache && this.cache[a] && this.cache[a].item; return c } function c(a, b, c, d) { return g.call(this, a, b, c, d) } function d(a) { var b = this.cache && this.cache[a] && this.cache[a].item; if (b) { this.cache[a].item = null; this.cache[a].callback = null; this.cache[a].timeout = null; this.cache[a] = null; delete this.cache[a]; this.length--; f.call(this, "remove", a) } return b } function e() { if (this.length) for (var a in this.cache) this.cache.hasOwnProperty(a) && d.call(this, a) } function f(a, b, c, d) { if (!this.nostore) for (var e = 0; e < this.stores.length; e++)this.stores[e][a] ? this.stores[e][a](b, c, d) : this.stores[e].save && this.stores[e].save({ items: this.cache }) } function g(a, b, c, d) { var e, g; if (0 === this.max || this.length < this.max) { e = isNaN(c) ? this.ttl : parseInt(c, 10); this.cache[a] = { item: b }; this.length++; if (e) { g = (new Date).getTime() + e; this.cache[a].timeout = g } "function" == typeof d && (this.cache[a].callback = d); f.call(this, "set", a, b, c); e && (this.cache[a].callback || "function" == typeof this.ontimeout) && h.call(this); return !0 } return !1 } function h() { var a, b, c, e; this.timer && clearTimeout(this.timer); if (this.length) for (var f in this.cache) if (this.cache.hasOwnProperty(f) && this.cache[f].timeout && this.cache[f].timeout <= (new Date).getTime()) { b = this.cache[f].item; a = this.cache[f].callback; a && (c = a(f, b)); this.ontimeout && (e = this.ontimeout(f, b)); c !== !1 && e !== !1 && d.call(this, f) } this.timer = setTimeout(h.bind(this), this.interval) } return { initialize: a, get: b, set: c, remove: d, removeAll: e } }(); a.Cacher = a.Cacher || b }); !function (a, b, c) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.PostMessageUtilities", [], function () { return c(a, b, !0) }); else if ("object" != typeof exports) { b.Chronos = b.Chronos || {}; c(a, b.Chronos) } }(this, "undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c) { "use strict"; function d() { var a, b; if ("function" == typeof Array.prototype.toJSON) { b = Array.prototype.toJSON; Array.prototype.toJSON = void 0; try { a = JSON.stringify.apply(null, arguments) } catch (c) { Array.prototype.toJSON = b; throw c } Array.prototype.toJSON = b } else a = JSON.stringify.apply(null, arguments); return a } function e() { var b = !0; try { a.postMessage({ toString: function () { b = !1 } }, "*") } catch (c) { c && "DataCloneError" !== c.name && (b = !1) } return b } function f(a) { return a && a.replace(/[xy]/g, function (a) { var b = 16 * Math.random() | 0, c = "x" === a ? b : 3 & b | 8; return c.toString(16) }) } function g(a, b) { return !isNaN(a) && a > 0 ? parseInt(a, 10) : b } function h(a, b) { return "function" == typeof a ? a : !0 === b ? function () { } : b } function i(a, b, c) { var d, e, f, g = new RegExp(/(http{1}s{0,1}?:\/\/)([^\/\?]+)(\/?)/gi); if (!a || 0 !== a.indexOf("http")) { f = c ? b.top || b.contentWindow && b.contentWindow.parent || window : b; return f.location.protocol + "//" + f.location.host } d = g.exec(a); d && 3 <= d.length && "" !== d[2] && (e = d[1].toLowerCase() + d[2].toLowerCase()); return e } function j(a, b) { var c, d = l("lpHost", b); if (!d) { c = l("hostParam", b) || a; c && (d = l(c, b)) } return d } function k(a, b, c) { var d, e, f; try { e = a && a.contentWindow && "undefined" != typeof Window && !(a instanceof Window) && a.getAttribute && a.getAttribute("src") } catch (g) { } try { e || (e = j(c)); if (!e) { e = document.referrer; f = !0 } if (e) { e = decodeURIComponent(e); f && (e = j(c, e)) } d = i(e, a, b) } catch (g) { q("Cannot parse origin", "ERROR", "PostMessageUtilities") } return d || "*" } function l(a, b) { return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(b || document.location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null } function m(a, b) { var c; "undefined" != typeof setImmediate && (isNaN(b) || 0 >= b) ? c = setImmediate(a) : !1 === b ? a() : c = setTimeout(a, isNaN(b) || 0 >= b ? 0 : parseInt(b, 10)); return function () { n(c) } } function n(a) { var b = g(a); b && ("undefined" != typeof clearImmediate ? clearImmediate(b) : clearTimeout(b)) } function o(a, b, c) { a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c); return function () { p(a, b, c) } } function p(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c) } function q(b, c, d) { a && "function" == typeof a.log && a.log(b, c, d) } function r(a) { function b() { } function c() { return e.apply(this instanceof b && a ? this : a, d.concat(Array.prototype.slice.call(arguments))) } var d, e; if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"); d = Array.prototype.slice.call(arguments, 1); e = this; b.prototype = this.prototype; c.prototype = new b; return c } var s = "_xxxxxx-4xxx-yxxx"; Function.prototype.bind || (Function.prototype.bind = r); var t = { SEQUENCE_FORMAT: s, stringify: d, hasPostMessageObjectsSupport: e, createUniqueSequence: f, parseNumber: g, parseFunction: h, getHost: i, resolveOrigin: k, getURLParameter: l, delay: m, addEventListener: o, removeEventListener: p, log: q, bind: r }; c || (b.PostMessageUtilities = b.PostMessageUtilities || t); return t }); !function (a, b, c) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.PostMessageChannelPolyfill", ["Chronos.PostMessageUtilities"], function (d) { return c(a, b, d, !0) }); else if ("object" != typeof exports) { b.Chronos = b.Chronos || {}; c(a, b.Chronos, b.Chronos.PostMessageUtilities) } }(this, "undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d) { "use strict"; function e(a, b) { if (!1 == this instanceof e) return new e(a, b); this.initialize(a, b); return void 0 } var f = "LPPort_"; e.prototype = function () { function b(b, d) { if (!this.initialized) { d = d || {}; this.target = b || a.top; this.hosted = this.target === a || this.target === a.top; this.portId = c.createUniqueSequence(f + c.SEQUENCE_FORMAT); this.serialize = c.parseFunction(d.serialize, c.stringify); this.deserialize = c.parseFunction(d.deserialize, JSON.parse); this.initialized = !0 } } function d(a) { var b, d, e = g.call(this), f = this.target; if (a) try { this.hosted || (f = this.target.contentWindow); b = h.call(this, a); d = this.serialize(b); f.postMessage(d, e) } catch (i) { c.log("Error while trying to post the message", "ERROR", "PostMessageChannelPolyfill"); return !1 } } function e(a) { var b; if ("function" == typeof this.onmessage) { b = i.call(this, a); return this.onmessage(b) } } function g() { this.origin || (this.origin = c.resolveOrigin(this.target)); return this.origin } function h(a) { return { port: this.portId, message: a } } function i(a) { var b; if (a && a.data) try { b = this.deserialize(a.data); if (b.port && 0 === b.port.indexOf(f)) return { origin: a.origin, data: b.message } } catch (d) { c.log("Error while trying to deserialize the message", "ERROR", "PostMessageChannelPolyfill") } return b || a } return { initialize: b, postMessage: d, receive: e } }(); d || (b.PostMessageChannelPolyfill = b.PostMessageChannelPolyfill || e); return e }); !function (a, b, c) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.PostMessageChannel", ["Chronos.PostMessageUtilities", "Chronos.PostMessageChannelPolyfill"], function (d, e) { return c(a, b, d, e, !0) }); else if ("object" != typeof exports) { b.Chronos = b.Chronos || {}; c(a, b.Chronos, b.Chronos.PostMessageUtilities, b.Chronos.PostMessageChannelPolyfill) } }(this, "undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d, e) {
    "use strict"; function f(a, b) { if (!1 == this instanceof f) return new f(a, b); this.initialize(a, b); return void 0 } var g = "LPFRM", h = "LPTKN", i = "HNDSK", j = 100, k = 5e3, l = 3, m = 100; f.prototype = function () {
        function b(b, e) { var f, g; if (!this.initialized) { this.hosted = !1; this.messageQueue = []; b = b || {}; g = r.call(this, b, e); if (!C.call(this)) { this.receiver = new d(this.target, { serialize: this.serialize, deserialize: this.deserialize }); this.receiver.onmessage = g } if (this.hosted || !C.call(this)) { f = t(g).bind(this); this.removeListener = c.addEventListener(a, "message", f) } else C.call(this) && this.channelFactory(); !this.target || this.loading || this.ready || q.call(this, g, f); this.initialized = !0 } } function e(a, b) { var d = c.parseFunction(this[a]); if (d) { b || d.call(this); this[a] = void 0; delete this[a] } } function f(a) { e.call(this, "rmtimer", a) } function n(a) { e.call(this, "rmload", a) } function o() { if (!this.disposed) { if (this.removeListener) { this.removeListener.call(this); this.removeListener = void 0 } if (this.targetUrl && this.target || this.removeDispose) try { this.targetContainer ? this.targetContainer.removeChild(this.target) : document.body.removeChild(this.target) } catch (a) { c.log("Error while trying to remove the iframe from the container", "ERROR", "PostMessageChannel") } f.call(this); n.call(this); this.messageQueue.length = 0; this.messageQueue = void 0; this.channel = void 0; this.onready = void 0; this.disposed = !0 } } function p(a, b, d) { var e, f; if (!this.disposed) try { if (a) { if (this.ready || d) { e = b || this.receiver; f = u.call(this, a); e.postMessage(f); return !0 } if (this.maxConcurrency >= this.messageQueue.length) { this.messageQueue.push(a); return !0 } return !1 } } catch (g) { c.log("Error while trying to post the message", "ERROR", "PostMessageChannel"); return !1 } } function q(b, e) { var f; try { f = D.call(this) } catch (g) { f = !1 } if (!f) { this.channel = !1; this.receiver = new d(this.target, { serialize: this.serialize, deserialize: this.deserialize }); this.receiver.onmessage = b; if (!this.hosted) { e = t(b).bind(this); this.removeListener = c.addEventListener(a, "message", e) } D.call(this) } this.handshakeAttempts--; c.delay(function () { if (!this.disposed && !this.hosted && !this.ready) { this.rmload = H.call(this, this.target); this.rmtimer = c.delay(D.bind(this, this.handshakeInterval), this.handshakeInterval) } }.bind(this)) } function r(b, d) { var e; s.call(this, b); e = B(d).bind(this); this.channelFactory = w.call(this, e); if (!b.target || (b.target !== a || b.target === a.top) && "undefined" != typeof Window && b.target instanceof Window) { this.hosted = !0; this.target = b.target || a.top } else if (b.target.contentWindow) this.target = b.target; else if (b.target.url) { this.targetUrl = b.target.url; this.targetOrigin = this.targetOrigin || c.getHost(b.target.url) } this.hosted || (this.token = c.createUniqueSequence(h + c.SEQUENCE_FORMAT)); if (this.targetUrl) { this.loading = !0; this.targetContainer = b.target.container || document.body; this.target = G.call(this, b.target, this.targetContainer) } return e } function s(a) { this.serialize = c.parseFunction(a.serialize, c.stringify); this.deserialize = c.parseFunction(a.deserialize, JSON.parse); this.targetOrigin = a.targetOrigin; this.maxConcurrency = c.parseNumber(a.maxConcurrency, j); this.handshakeInterval = c.parseNumber(a.handshakeInterval, k); this.handshakeAttemptsOrig = c.parseNumber(a.handshakeAttempts, l); this.handshakeAttempts = this.handshakeAttemptsOrig; this.hostParam = a.hostParam; this.channel = "undefined" != typeof a.channel ? a.channel : v(); this.useObjects = a.useObjects; this.onready = A(a.onready, a.target).bind(this); this.removeDispose = a.removeDispose } function t(a) {
            return function (b) {
                var d, e; if (b.ports && 0 < b.ports.length) { this.receiver = b.ports[0]; z.call(this, b) && (this.token || (this.token = b.data)); this.receiver.start(); e = this.removeListener.bind(this); this.removeListener = c.addEventListener(this.receiver, "message", a); e(); this.disposed || !this.hosted || this.ready || (d = !0) } else if (z.call(this, b)) {
                    this.token || (this.token = b.data); this.disposed || !this.hosted || this.ready || (d = !0)
                } else this.token && this.receiver.receive.call(this.receiver, b); if (d) { this.receiver.postMessage(i + this.token); E.call(this) }
            }
        } function u(a) { x.call(this, a); return this.serialize(a) } function v() { return "true" === c.getURLParameter("lpPMCPolyfill") ? !1 : void 0 } function w(a) { return function () { this.channel = new MessageChannel; this.receiver = this.channel.port1; this.dispatcher = this.channel.port2; this.receiver.onmessage = a; this.neutered = !1 }.bind(this) } function x(a) { this.token && (a.token = this.token) } function y(a) { return a && a.token === this.token } function z(a) { return a && a.data && "string" == typeof a.data && (0 === a.data.indexOf(h) || i + this.token === a.data) } function A(a, b) { return function (c) { b && "function" == typeof b.callback && b.callback.call(b.context, c, this.target); a && ("function" == typeof a ? a(c, this.target) : "function" == typeof a.callback && a.callback.call(a.context, c, this.target)) } } function B(a) { return function (b) { var d; if (!b.origin || "*" === b.origin || this.targetOrigin === b.origin) { if (!z.call(this, b) || this.disposed || this.hosted || this.ready) { try { d = this.deserialize(b.data); if (y.call(this, d)) return a && a(d) } catch (e) { d = b.data || b; c.log("Error while trying to handle the message", "ERROR", "PostMessageChannel") } return d || b } E.call(this) } } } function C() { return !1 !== this.channel && "undefined" != typeof MessageChannel && "undefined" != typeof MessagePort } function D(a) { f.call(this, !0); if (!this.disposed && !this.ready) { C.call(this) || (this.targetOrigin = this.targetOrigin || c.resolveOrigin(this.target) || "*"); if (!this.hosted) if (C.call(this)) try { this.neutered && this.channelFactory(); this.target.contentWindow.postMessage(this.token, this.targetOrigin, [this.dispatcher]); this.neutered = !0 } catch (b) { return !1 } else this.target.contentWindow.postMessage(this.token, this.targetOrigin) } if (!this.disposed && !this.ready && a) if (0 < this.handshakeAttempts) { this.handshakeAttempts--; this.rmtimer = c.delay(D.bind(this, a), a) } else this.onready(new Error("Loading: Operation Timeout!")); return !0 } function E() { if (!this.disposed && !this.ready) { this.ready = !0; this.handshakeAttempts = this.handshakeAttemptsOrig; this.messageQueue && this.messageQueue.length ? c.delay(function () { var a, b; if (!this.disposed && this.ready) { for (; this.messageQueue && this.messageQueue.length;) { a = this.messageQueue.shift(); try { b = u.call(this, a); this.receiver.postMessage(b) } catch (d) { c.log("Error while trying to post the message from queue", "ERROR", "PostMessageChannel") } } this.onready() } }.bind(this)) : this.onready() } } function F(b) { function d() { f.body ? e() : c.delay(d, g || m) } b = b || {}; var e = b.onready, f = b.doc || a.document, g = b.delay; c.delay(d, g || !1) } function G(a, b) { var d = document.createElement("IFRAME"), e = c.createUniqueSequence(g + c.SEQUENCE_FORMAT), f = a.delayLoad, h = { id: e, name: e, tabindex: "-1", "aria-hidden": "true", title: "", role: "presentation", allowTransparency: "true" }, i = { width: "0px", height: "0px", position: "absolute", top: "-1000px", left: "-1000px" }; a.attributes = a.attributes || h; for (var j in a.attributes) a.attributes.hasOwnProperty(j) && d.setAttribute(j, a.attributes[j]); a.style = a.style || i; if (a.style) for (var k in a.style) a.style.hasOwnProperty(k) && (d.style[k] = a.style[k]); F({ delay: f, onready: function () { (b || document.body).appendChild(d); this.rmload = H.call(this, d); J.call(this, d, a.url, !1 !== a.bust) }.bind(this) }); return d } function H(a) { var b = function () { this.loading = !1; this.handshakeAttempts === this.handshakeAttemptsOrig && (this.ready = !1); D.call(this, this.handshakeInterval) }.bind(this); c.addEventListener(a, "load", b); return function () { I(a, b) } } function I(a, b) { c.removeEventListener(a, "load", b) } function J(a, b, d) { b += 0 < b.indexOf("?") ? "&" : "?"; if (d) { b += "bust="; b += (new Date).getTime() + "&" } b += (this.hostParam ? "hostParam=" + this.hostParam + "&" + this.hostParam + "=" : "lpHost=") + encodeURIComponent(c.getHost(void 0, a, !0)); C.call(this) || (b += "&lpPMCPolyfill=true"); !1 === this.useObjects && (b += "&lpPMDeSerialize=true"); a.setAttribute("src", b) } return { initialize: b, postMessage: p, dispose: o }
    }(); e || (b.PostMessageChannel = f); return f
}); !function (a, b, c) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.PostMessagePromise", ["exports"], function () { return c(a, b, !0) }); else if ("object" != typeof exports) { b.Chronos = b.Chronos || {}; c(a, b.Chronos) } }(this, "undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c) { "use strict"; function d(a) { if (!1 == this instanceof d) return new d(a); this.initialize(a); return void 0 } var e = { RESOLVE: "resolve", REJECT: "reject", PROGRESS: "progress" }; d.prototype = function () { function a(a) { if (!this.initialized) { this.queue = []; this.actions = { resolve: c.bind(this), reject: d.bind(this), progress: f.bind(this) }; "function" == typeof a && a.call(this, this.actions.resolve, this.actions.reject); this.initialized = !0 } } function b(a, b, c) { this.queue.push({ resolve: a, reject: b, progress: c }) } function c(a) { h.call(this, e.RESOLVE, a) } function d(a) { h.call(this, e.REJECT, a) } function f(a) { g.call(this, e.PROGRESS, a) } function g(a, b, c) { var d, e; if (this.queue && this.queue.length) { d = 0; e = this.queue[d++]; for (; e;) { e[a] && e[a].call(this, b); e = this.queue[d++] } c && (this.queue.length = 0) } } function h(a, b) { var c = this.actions[a]; this.then = function () { c && c.call(this, b) }.bind(this); this.resolve = this.reject = function () { throw new Error("This Promise instance had already been completed.") }; this.progress = function () { return !1 }; g.call(this, a, b, !0); if (this.queue) { this.queue.length = 0; delete this.queue } } return { initialize: a, then: b, resolve: c, reject: d, progress: f } }(); d.polyfill = function () { a.Promise || (a.Promise = d) }; c || (b.PostMessagePromise = b.PostMessagePromise || d); return d }); !function (a, b) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.PostMessageMapper", ["Chronos.PostMessageUtilities"], function (c) { return b(a, a, c, !0) }); else if ("object" != typeof exports) { a.Chronos = a.Chronos || {}; b(a, a.Chronos, a.Chronos.PostMessageUtilities) } }("undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d) { "use strict"; function e(a) { if (!1 == this instanceof e) return new e(a); this.initialize(a); return void 0 } e.prototype = function () { function a(a) { if (!this.initialized) { this.eventChannel = a; this.initialized = !0 } } function b(a) { if (a) { if (a.error) { c.log("Error on message: " + a.error, "ERROR", "PostMessageMapper"); return function () { return a } } return e.call(this, a) } } function d(a, b) { return { method: { id: a, name: b, args: Array.prototype.slice.call(arguments, 2) } } } function e(a) { var b = a && a.method, d = b && b.name, e = b && b.args, f = this.eventChannel; return function () { if (f && f[d]) return f[d].apply(f, e); c.log("No channel exists", "ERROR", "PostMessageMapper"); return void 0 } } return { initialize: a, toEvent: b, toMessage: d } }(); d || (b.PostMessageMapper = b.PostMessageMapper || e); return e }); !function (a, b, c, d) { "use strict"; if ("function" == typeof define && define.amd) define("Chronos.PostMessageCourier", ["Chronos.PostMessageUtilities", "Chronos.Channels", "cacher", "CircuitBreaker", "Chronos.PostMessageChannel", "Chronos.PostMessagePromise", "Chronos.PostMessageMapper"], function (b, c, e, f, g, h, i) { return d(a, a, b, c, e, f, g, h, i, !0) }); else if ("object" != typeof exports) { a.Chronos = a.Chronos || {}; d(a, a.Chronos, a.Chronos.PostMessageUtilities, a.Chronos.Channels, b.Cacher, c.CircuitBreaker, a.Chronos.PostMessageChannel, a.Chronos.PostMessagePromise, a.Chronos.PostMessageMapper) } }("undefined" == typeof window.lpTag ? this : window.lpTag, "undefined" == typeof window.lpTag ? this : window.lpTag, "undefined" == typeof window.lpTag ? this : window.lpTag, function (a, b, c, d, e, f, g, h, i, j) { "use strict"; function k(a) { if (!1 == this instanceof k) return new k(a); this.initialize(a); return void 0 } var l = "LPMSG_", m = { TRIGGER: "trigger", COMMAND: "command", REQUEST: "request", RETURN: "return" }, n = 3e4, o = 100, p = 3e4, q = 30, r = 10, s = 1e3; k.prototype = function () { function a(a) { if (!this.initialized) { a = a || {}; x.call(this, a); y.call(this, a); z.call(this, a); A.call(this, a); b.call(this, this.eventChannel); this.once = this.eventChannel.once; this.hasFiredEvents = this.eventChannel.hasFiredEvents; this.bind = this.eventChannel.bind; this.register = this.eventChannel.register; this.unbind = this.eventChannel.unbind; this.unregister = this.eventChannel.unregister; this.hasFiredCommands = this.eventChannel.hasFiredCommands; this.comply = this.eventChannel.comply; this.stopComplying = this.eventChannel.stopComplying; this.hasFiredReqres = this.eventChannel.hasFiredReqres; this.reply = this.eventChannel.reply; this.stopReplying = this.eventChannel.stopReplying; this.initialized = !0 } } function b(a) { a && "function" == typeof a.registerProxy && a.registerProxy({ trigger: function () { D.call(this, Array.prototype.slice.apply(arguments), m.TRIGGER) }, context: this }) } function j() { return this.messageChannel } function k() { return this.eventChannel } function t() { if (!this.disposed) { var a = Array.prototype.slice.apply(arguments); (2 !== arguments.length && 4 !== arguments.length || !0 !== arguments[arguments.length - 1]) && this.eventChannel.trigger.apply(this.eventChannel, a); return D.call(this, a, m.TRIGGER) } } function u() { if (!this.disposed) { var a = Array.prototype.slice.apply(arguments); return D.call(this, a, m.COMMAND) } } function v() { if (!this.disposed) { var a = Array.prototype.slice.apply(arguments); return D.call(this, a, m.REQUEST) } } function w() { if (!this.disposed) { this.messageChannel.dispose(); this.messageChannel = void 0; this.eventChannel = void 0; this.mapper = void 0; this.callbackCache = void 0; this.circuit = void 0; this.disposed = !0 } } function x(a) { this.useObjects = !1 === a.useObjects ? a.useObjects : B(); "undefined" == typeof this.useObjects && (this.useObjects = !0); a.useObjects = this.useObjects; if ("function" != typeof a.serialize || "function" != typeof a.deserialize) { if (this.useObjects && c.hasPostMessageObjectsSupport()) { this.serialize = C; this.deserialize = C } else { this.serialize = c.stringify; this.deserialize = JSON.parse } a.serialize = this.serialize; a.deserialize = this.deserialize } else { this.serialize = a.serialize; this.deserialize = a.deserialize } } function y(a) { var b, c; this.eventChannel = a.eventChannel || new d({ events: a.events, commands: a.commands, reqres: a.reqres }); this.mapper = new i(this.eventChannel); b = this.mapper.toEvent.bind(this.mapper); c = L(b).bind(this); this.messageChannel = new g(a, c) } function z(a) { this.callbackCache = new e({ max: c.parseNumber(a.maxConcurrency, o), ttl: c.parseNumber(a.timeout, n), interval: s }) } function A(a) { var b = c.parseNumber(a.messureTime, p); this.circuit = new f({ timeWindow: b, slidesNumber: Math.ceil(b / 100), tolerance: c.parseNumber(a.messureTolerance, q), calibration: c.parseNumber(a.messureCalibration, r), onopen: c.parseFunction(a.ondisconnect, !0), onclose: c.parseFunction(a.onreconnect, !0) }) } function B() { var a = c.getURLParameter("lpPMDeSerialize"); return "true" === a ? !1 : void 0 } function C(a) { return a } function D(a, b) { return this.circuit.run(function (c, d, e) { var f = F.call(this, a, b, e); if (f) try { var g = this.messageChannel.postMessage.call(this.messageChannel, f); !1 === g ? d() : c() } catch (h) { d() } else d() }.bind(this)) } function E(a, b) { return this.circuit.run(function (c, d) { try { var e = this.messageChannel.postMessage.call(this.messageChannel, a, b); !1 === e ? d() : c() } catch (f) { d() } }.bind(this)) } function F(a, b, d) { var e, f, g = c.createUniqueSequence(l + b + c.SEQUENCE_FORMAT); a.unshift(g, b); if (G(b)) { if (1 < a.length && "function" == typeof a[a.length - 1]) e = a.pop(); else if (2 < a.length && !isNaN(a[a.length - 1]) && "function" == typeof a[a.length - 2]) { f = parseInt(a.pop(), 10); e = a.pop() } if (e && !this.callbackCache.set(g, e, f, function (a, b) { d(); H.call(this, a, b) }.bind(this))) return void 0 } return this.mapper.toMessage.apply(this.mapper, a) } function G(a) { return m.REQUEST === a || m.COMMAND === a } function H(a, b) { if (a && "function" == typeof b) try { b.call(null, new Error("Callback: Operation Timeout!")) } catch (d) { c.log("Error while trying to handle the timeout using the callback", "ERROR", "PostMessageCourier") } } function I(a, b) { var d = this.callbackCache.get(a, !0), e = b && b.args; if ("function" == typeof d) { e && e.length && e[0] && "Error" === e[0].type && "string" == typeof e[0].message && (e[0] = new Error(e[0].message)); try { d.apply(null, e) } catch (f) { c.log("Error while trying to handle the returned message from request/command", "ERROR", "PostMessageCourier") } } } function J(a, b, c) { return function (d, e) { var f, g, h = d; d instanceof Error && (h = { type: "Error", message: d.message }); g = [a, m.RETURN, h]; m.REQUEST === b && g.push(e); f = this.mapper.toMessage.apply(this.mapper, g); E.call(this, f, c.source) }.bind(this) } function K(a, b, c, d) { var e, f; if ("undefined" != typeof Promise && c instanceof Promise || c instanceof h) c.then(function (c) { f = [a, m.RETURN, null]; m.REQUEST === b && f.push(c); e = this.mapper.toMessage.apply(this.mapper, f); E.call(this, e, d.source) }.bind(this), function (b) { f = [a, m.RETURN, b]; e = this.mapper.toMessage.apply(this.mapper, f); E.call(this, e, d.source) }.bind(this)); else if (c && c.error) { f = [a, m.RETURN, c]; e = this.mapper.toMessage.apply(this.mapper, f); E.call(this, e, d.source) } else if ("undefined" != typeof c) { f = [a, m.RETURN, null]; m.REQUEST === b && f.push(c); e = this.mapper.toMessage.apply(this.mapper, f); E.call(this, e, d.source) } } function L(a) { return function (b) { var d, e, f, g, h, i, j; if (b) { h = b.method && b.method.id; i = b.method && b.method.name; j = b.method && b.method.args; if (m.RETURN === i) I.call(this, h, b.method); else { try { G(i) && j.length && j.push(J.call(this, h, i, b)); d = a(b); e = d && d() } catch (k) { c.log("Error while trying to invoke the handler on the events channel", "ERROR", "PostMessageCourier"); if (G(i)) { f = [h, m.RETURN, { error: k.toString() }]; g = this.mapper.toMessage.apply(this.mapper, f); E.call(this, g, b.source) } } G(i) && "undefined" != typeof e && K.call(this, h, i, e, b) } } } } return { initialize: a, getMessageChannel: j, getEventChannel: k, trigger: t, publish: t, command: u, request: v, dispose: w } }(); j || (b.PostMessageCourier = b.PostMessageCourier || k); return k });


// Initialize the LivePerson SDK with your credentials
lpTag.agentSDK.init({
    //notificationCallback: notificationHandler
    //accountId: 'your-account-id', // Replace with your LivePerson account ID
    //accessToken: 'your-access-token' // Replace with your LivePerson access token
});


// Set min and max for preferred date input
const today = new Date();
const maxDate = new Date();
maxDate.setDate(today.getDate() + 10);

document.getElementById('preferredDate').min = today.toISOString().split('T')[0];
document.getElementById('preferredDate').max = maxDate.toISOString().split('T')[0];

document.getElementById('generateButton').addEventListener('click', function () {
    const numQuickReplies = document.getElementById('numQuickReplies').value;
    const quickRepliesContainer = document.getElementById('quickRepliesContainer');
    quickRepliesContainer.innerHTML = ''; // Clear previous inputs

    console.log(numQuickReplies);
    console.log(typeof numQuickReplies);

    for (let i = 1; i <= numQuickReplies; i++) {
        const label = document.createElement('label');
        label.innerText = `Quick Reply ${i}:`;
        quickRepliesContainer.appendChild(label);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `quickReply${i}`;
        input.placeholder = `Enter Option ${i}`;
        quickRepliesContainer.appendChild(input);
    }
	
    document.getElementById('sendButton').style.display = 'block';
});

document.getElementById('sendButton').addEventListener('click', function () {
    const numQuickReplies = document.getElementById('numQuickReplies').value;
    const quickReplies = [];

    for (let i = 1; i <= numQuickReplies; i++) {
        const text = document.getElementById(`quickReply${i}`).value.trim(); // Use trim to remove whitespace
        if (text) {
            quickReplies.push({ title: text, payload: `quick_reply_${i}` });
        } else {
            alert(`Please enter a value for Quick Reply ${i}.`); // Alert the user for blank input
            return; // Exit the function to prevent sending empty replies
        }
    }

    if (quickReplies.length > 0) {
        sendQuickReplies(quickReplies);
    }
    else {
        alert('Please enter at least one quick reply.');
    }
    // Show additional fields after sending quick replies
    document.getElementById('additionalFields').style.display = 'block';

});

function sendQuickReplies(quickReplies) {
      var notifyWhenDone = function (err) {
            if (err) {
                // Do something with the error
            }
            // called when the command is completed successfully,
            // or when the action terminated with an error.
        };
        const numQuickReplies = document.getElementById('numQuickReplies').value;
        console.log("Number of Quick replies selected=" + numQuickReplies);
        
	const preferredDateInput = document.getElementById('preferredDate').value;
    //console.log("preferredDateInput : " + preferredDateInput);

if (preferredDateInput) {
    // Split the date input assuming it's in the format "yyyy-mm-dd"
    const [year, month, day] = preferredDateInput.split('-');

    // Create a Date object (subtract 1 from month because months are 0-indexed in JavaScript)
    const date = new Date(year, month - 1, day);
    console.log("Date : " + date);

    // Check if the date is valid
    if (!isNaN(date.getTime())) {
        // Array of day and month names
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Format the date as "Day, Month Day" (e.g., "Thursday, September 4")
        var formattedDate = `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${day}`;

        console.log("formattedDate :" + formattedDate); // Example: "Thursday, September 4"
    } else {
        alert("Invalid date. Please enter a valid date.");
    }
} else {
    alert("Please enter a preferred date.");
}

	    
        if (numQuickReplies == "2") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }};
           lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

        if (numQuickReplies == "3") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var quickReply3 = document.getElementById('quickReply3').value;

            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply3,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply3} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }};
            lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

        if (numQuickReplies == "4") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var quickReply3 = document.getElementById('quickReply3').value;
            var quickReply4 = document.getElementById('quickReply4').value;

            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply3,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply3} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply4,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply4} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }
        };

            lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

        if (numQuickReplies == "5") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var quickReply3 = document.getElementById('quickReply3').value;
            var quickReply4 = document.getElementById('quickReply4').value;
            var quickReply5 = document.getElementById('quickReply5').value;

            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply3,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply3} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply4,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply4} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply5,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply5} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }
        };
            lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

	 
    
    // Send Add to Calendar
    document.getElementById('sendAddToCalendarButton').addEventListener('click', function () {
        const eventLocation = document.getElementById('eventLocation').value.trim();
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
    
        if (!eventLocation || !startDate || !endDate) {
            alert("Please fill in all event details.");
            return;
        }
    
        // Format the dates for the ICS file
        const formattedStartDate = formatDateForICS(startDate);
        const formattedEndDate = formatDateForICS(endDate);
    
        // Create ICS content
        const icsContent = `
    BEGIN:VCALENDAR
    VERSION:2.0
    BEGIN:VEVENT
    SUMMARY:Health Care Appointment
    LOCATION:${eventLocation}
    DTSTART:${formattedStartDate}
    DTEND:${formattedEndDate}
    END:VEVENT
    END:VCALENDAR
        `.trim();
    
        // Create a Blob for the ICS file
        const icsBlob = new Blob([icsContent], { type: 'text/calendar' });
        const icsUrl = URL.createObjectURL(icsBlob);
    
        // Send structured content with a single button to download ICS
        var notifyWhenDone = function (err) {
            if (err) {
                console.error('Error sending Add to Calendar:', err);
            }
        };
        
        var cmdName = lpTag.agentSDK.cmdNames.writeSC;
        var data = {
            json: {
                "type": "vertical",
                "tag": "generic",
                "elements": [
                    {
                        "type": "text",
                        "text": "Click the button below to download and add the appointment to your calendar."
                    },
                    {
                        "type": "button",
                        "title": "Add to Calendar",
                        "click": {
                            "actions": [{
                                "type": "link",
                                "uri": icsUrl
                            }]
                        }
                    }
                ]
            }
        };
    
        lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
    });
    
    // Helper function to format dates for ICS files
    function formatDateForICS(dateStr) {
        const date = new Date(dateStr);
        return date.toISOString().replace(/[-:]/g, '').split('.')[0];
    }
    
}
