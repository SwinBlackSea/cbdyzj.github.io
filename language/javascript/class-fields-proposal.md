# “JavaScript的成员字段提案”或“TC39委员会在搞什么鬼？”

译自：[“Class-fields-proposal” or “what went wrong in tc39 committee”](https://medium.com/@igorchulinda/class-fields-proposal-or-what-went-wrong-in-tc39-committee-6ce41efe291)

一直以来，我们都期望有一天能在JavaScript中较为简单地使用其他语言常见的封装语法。比如，我们想要类属性/字段的语法，并且它的实现方式并不会破坏现有的程序。现在看起来，这一天已经到来：在TC39委员会的努力之下，[类字段提案](https://github.com/tc39/proposal-class-fields)已经进入`stage 3`，甚至已经[被Chrome实现](https://www.chromestatus.com/feature/6001727933251584)

老实说，我很乐意写一篇文章，描述为什么您必须使用这个新功能以及如何实现它。可惜事实并非如此。

### 当前提案说明

参考文档在此不赘述了，具体参考：[原始说明](https://github.com/tc39/proposal-class-fields)，[FAQ](https://github.com/tc39/proposal-class-fields/blob/master/PRIVATE_SYNTAX_FAQ.md)，[规范变更](https://tc39.github.io/proposal-class-fields/)。

### 类字段

类字段说明和用法：

```javascript
class A {
    x = 1;
    method() {
        console.log(this.x);
    }
}
```

从外部代码访问字段：

```javascript
const a = new A();
console.log(a.x);
```

一看看去稀松平常，有些人可能会说我们在[Babel](https://www.npmjs.com/package/babel-plugin-transform-class-properties)和[TypeScript](http://www.typescriptlang.org/docs/handbook/classes.html)中这样使用多年了。

但有一件事值得注意：这个语法使用`[[Define]]`语义而不是我们习惯的`[[Set]]`语义。这意味着实际上上面的代码**不等价于**以下用法：

```javascript
class A {
    constructor() {
        this.x = 1;
    }
    method() {
        console.log(this.x);
    }
}
```

而**等价于**下述用法：

```javascript
class A {
    constructor() {
        Object.defineProperty(this, "x", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: 1
        });
    }
    method() {
        console.log(this.x);
    }
}
```

尽管在这个例子下，两种用法实际表现几乎没有什么区别，但实际有一个**很重要**的区别。我们假设我们有一个像这样的父类：

```javascript
class A {
    x = 1;

    method() {
        console.log(this.x);
    }
}
```

从该父类派生出一个子类如下：

```javascript
class B extends A {
    x = 2;
}
```

然后使用：

```javascript
const b = new B();
b.method(); // prints 2 to the console
```

然后为了某些（不重要的）原因，我们以一种似乎向后兼容的方式改变了A类：

```javascript
class A {
    _x = 1; // for simplicity let's skip that public interface got new property here
    get x() { return this._x; };
    set x(val) { return this._x = val; };

    method() {
        console.log(this._x);
    }
}
```

对于`[[Set]]`语义，它确实是向后兼容的。 但是对于`[[Define]]`不是。 现在调用`b.method()`会将打印`1`而不是`2`到控制台。原因是在`Object.defineProperty`的作用下，不会调用`A`类声明的属性描述符以及其getter/setter。 因此，在派生类中，我们以类似变量词法作用域的方式隐藏了父类`x`性：

```javascript
const x = 1;
{
    const x = 2;
}
```

我们可以使用[`no-shadowed-variable`](https://palantir.github.io/tslint/rules/no-shadowed-variable/)/[`no-shadow`](https://eslint.org/docs/rules/no-shadow)这样的liner规则帮助我们检测常见的词法作用域变量隐藏。 但是不幸的是，不太可能有人会创建`no-shadowed-class-field`这样的规则帮助我们规避类字段的隐藏。

尽管如此，我并不是`[[Define]]`语义的的坚定反对者（尽管我更喜欢`[[Set]]`语义），因为它有它的好的优点。然而，它的优点并没有超过主要的缺点——我们多年来一直使用`[[Set]]`语义，因为它是`babel6`和`TypeScript`的默认行为。

> 我不得不强调一下，`babel7`改变了默认行为。

您可以在[这里](https://github.com/tc39/proposal-class-fields/issues/151)和[这里](https://github.com/tc39/proposal-class-public-fields/issues/42)了解更多原始讨论。

### 私有字段

我们来看看这个提案中最具争议的部分。 它是如此有争议：

1. 尽管事实上，它已经在[Chrome Canary](https://www.chromestatus.com/feature/6001727933251584)中实现，并且默认情况下公共字段可用，但是私有字段功能仍需额外开启；
2. 尽管事实上，[原始的私有字段提案](https://github.com/tc39/proposal-private-fields)与当前的提案合并，关于分离私有和公有字段的issue一再出现（如：[140](https://github.com/tc39/proposal-class-fields/pull/140#issuecomment-428585587)，[142](https://github.com/tc39/proposal-class-fields/issues/142)，[144](https://github.com/tc39/proposal-class-fields/issues/144)，[148](https://github.com/tc39/proposal-class-fields/issues/148)）；
3. 甚至一些委员会成员（如：[Allen Wirfs-Brock](https://github.com/allenwb)和[Kevin Smith](https://github.com/zenparsing)）也反对它并提供[替代方案](http://tc39.github.io/tc39-notes/2018-09_sept-26.html#revisiting-private-symbols)，但是该提案仍然顺利进入`stage 3`；
4. 该提案的issue数量最多——[当前提案](https://github.com/tc39/proposal-class-fields/issues)的GitHub仓库为131个，[原始提案](https://github.com/tc39/proposal-private-fields/issues)（合并前）的GitHub仓库为96个（相比[BigInt](https://github.com/tc39/proposal-bigint/issues)提案的issue数量为126个），并且大多数issue持[反对观点](https://github.com/tc39/proposal-class-fields/issues/100)；
5. 甚至创建了[单独的issue](https://github.com/tc39/proposal-class-fields/issues/150)，以便统计总结对它的反对意见；
6. 为了证明这一部分的合理性而创建了[单独的FAQ](https://github.com/tc39/proposal-class-fields/blob/master/PRIVATE_SYNTAX_FAQ.md)，然而不够强力论据又导致了新的争论（[133](https://github.com/tc39/proposal-class-fields/issues/133)，[136](https://github.com/tc39/proposal-class-fields/issues/136)）
7. 就我个人而言，几乎花了我所有的空闲时间（有时甚至是工作时间），花了大精力试图对其进行调查，充分了解其背后的局限性和决策，弄明白其形成现状的原因，并提出可行的替代方案；
8. 最后，我决定写这篇评论文章。

使用以下语法声明私有字段：

```javascript
class A {
    #priv;
}
```

并使用以下表示法访问：

```javascript
class A {
    #priv = 1;

    method() {
        console.log(this.#priv);
    }
}
```



### 翻译参考

- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/classes-and-structs/fields