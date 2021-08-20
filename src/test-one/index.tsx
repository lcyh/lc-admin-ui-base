import React, { FC } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import './index.less';
export interface TestProps extends InputProps {}

/**
 * 测试组件。
 *
 * ### 如何引用
 *
 * ~~~javascript
 * import { TestOne } from 'lc-admin-ui-base'
 * ~~~
 */
export const TestOne: FC<TestProps> = props => {
  return <Input data-testid="test-input" {...props} />;
};

TestOne.defaultProps = {};

export default TestOne;
