> _@Document version`Kitten4.11.9`_

# **variables** 变量 
文档使用符号:
- `?`  
  不确定内容
- `D`  
  弃用内容
> 除特殊表明外 其他类型均为 string.

### 主体部分
> `/variables`

| 名称                         | 介绍                          |
| ---------------------------- | -----------------------------|
|`<Object{}>`                  | 包含着所有变量的元数据         |

### scenes 屏幕元素

> `/variables/<id>/`

| 名称               | 介绍                  | 备注 |
| ------------------ | --------------------- |-----|
| id`<String>`       | 变量 UUID             |     |
| name`<String>`     | 变量名称              |      |
| visible            | 是否显示              | bool |
| `?`type            | `未知`                |      |
| is_global          | 是否为全局变量        | bool |
| scale              | 缩放                 | int/float |
| value              | 初始值               | anytype |
| theme              | 主题                 |        |
| `?`offset          | `未知`               | object |
| position           | 显示时的 [坐标](./#### 坐标)      | object |

#### 坐标

> `/variables/<id>/position`

| 名称               | 介绍                  | 备注 |
| ------------------ | --------------------- |-----|
| x | x坐标 | int/float |
| y | y坐标 | int/float |
