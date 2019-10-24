# 深入使用

## compose 实现

```js
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => {
    return (...args) => a(b(...args))
  })
}
```

```js
function compose() {
  var args = arguments
  var start = args.length - 1
  return function() {
    var i = start
    var result = args[start].apply(this, arguments)
    while (i--) result = args[i].call(this, result)
    return result
  }
}
```

## 实现 Num.of(1).add(2).minus(1)

```js
function ops(n) {
  return {
    add: x => ops(n + x),
    minus: x => ops(n - x),
    value: () => n
  }
}

const Num = {
  of: x => ops(Number(x))
}
```

## 实现 add(1)(2)()

```js
function add(n) {
  return x => (x ? add(n + x) : n)
}
```