## React全家桶

- 手写React17源码：实现虚拟DOM、实现类组件、函数组件、实现diff算法
- React17源码剖析：跨层级数据传递的原理剖析、详解setState等核心API
- React Hooks：自定义Hooks API 使用、Hooks原理解析
- React组件化：高阶组件、组件通信、antd4和antd3 Form的使用以及实现
- React Router路由：路由守卫、动态路由、手写实现react-router5.2.0
- Redux：Redux详细使用、Redux流行中间件使用、手写实现Redux中间件
- React Redux：React Redux详细使用及原理、手写实现react-redux
- 手写React SSR框架(训练营)：什么是SSR、React如何实现SSR、同构应用框架讲解
- mobx原理解析（训练营）：mobx原理及实现、mobx与redux对比
- React面试通关（训练营）


# react hooks数据结构为什么是链表，不是数组

由于其非连续内存的特性导致链表非常适用于频繁插入、删除的场景，而不见长于读取场景，这跟数组的特性恰好形成互补，所以现在也可以回到题目中的问题了，链表的特性与数组互补，各有所长，而且链表由于指针的存在可以形成环形链表，在特定场景也非常有用，因此链表的存在是很有必要的。

