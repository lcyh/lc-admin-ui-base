# ii-admin-base

lc-admin-ui-base(中后台基础组件库)，主要存放各个业务线都可复用的基础组件，[预览地址](https://lcyh.github.io/lc-admin-ui-base/)。

## 一、如何引用

由于 lc-admin-ui-base 组件库是在 React 框架基础上对 Antd Design 进行的二次封装，所以在引用 lc-admin-ui-base 组件库的同时，还需安装 React、Ant Design 等第三方依赖。

```JavaScript
import { InputVerfiy } from 'lc-admin-ui-base'
import { TestOne } from 'lc-admin-ui-base'
```

#### 组件单元测试

采用[jest](https://jestjs.io/docs/en/api) + [enzyme](https://enzymejs.github.io/enzyme/)方案

**注：**

- [官方开发文档](https://d.umijs.org/zh-CN)
- [借鉴文档](https://juejin.cn/post/6844904200359378958#heading-20)
- 第三方依赖若不需要重复安装，可以选择安装在 devDependencies，还需放到 peerDependencies 中，否则对于 cmj 输出的包，module 编译会报错
