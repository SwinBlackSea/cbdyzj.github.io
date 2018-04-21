/**
 * 写一个函数，满足：
 * f(1).value = 1
 * f(1)(2).value = 5
 * f(1)(2)(3).value = 14
 */
const assert = require('assert')

let f
function test() {
    assert(f(1).value === 1)
    assert(f(1)(2).value === 5)
    assert(f(1)(2)(3).value === 14)
}

f = i => {
    const c = function (i) {
        c.value += i ** 2
        return c
    }
    c.value = i ** 2
    return c;
}
test()

f = i => {
    const handler = {
        value: i ** 2,
        apply(target, that, args) {
            handler.value += args[0] ** 2
            return handler.proxy
        },
        get(target, name, receiver) {
            return handler[name]
        }
    }
    handler.proxy = new Proxy(new Function, handler)
    return handler.proxy
}
test()

