---
title: Test one
---

# Test one 测试组件

Demo:

```tsx
import React from 'react';

import { TestOne } from 'ii-admin-base';

export default () => {
  const inputStyle = {
    width: '200px',
  };
  return (
    <div>
      <TestOne style={inputStyle} />
    </div>
  );
};
```

<br />

| 属性  | 说明     | 类型                | 默认值 | 是否必传 | 版本 |
| ----- | -------- | ------------------- | ------ | -------- | ---- |
| style | 组件样式 | React.CSSProperties |        | 否       |      |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
