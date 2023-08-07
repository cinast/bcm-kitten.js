> _@Document version`Kitten4.11.9`_

# **variables** 变量

> 除特殊表明外 其他类型均为 string.
> 列表是变量的一种

### 主体部分

> `/variables`

| 名称         | 介绍                   |
| ------------ | ---------------------- |
| `<Object{}>` | 包含着所有变量的元数据 |

### variables 变量内容

> `/variables/<id>/`

| 名称              | 介绍                           | 备注      |
| ----------------- | ------------------------------ | --------- |
| id                | 变量 UUID                      |           |
| name              | 变量名称                       |           |
| visible           | 是否显示                       | bool      |
| type              | 类型（列表为 list,变量为 any） |           |
| is_global         | 是否为全局变量                 | bool      |
| scale             | 缩放                           | int/float |
| value             | 初始值                         | anytype   |
| theme             | 主题                           |           |
| `?`offset         | 一段 [坐标](####坐标)          | object    |
| position          | 显示时的 [坐标](####坐标)      | object    |
| `?`current_entity | 变量 UUID                      |           |

#### 坐标

> `/variables/<id>/position`

| 名称 | 介绍   | 备注      |
| ---- | ------ | --------- |
| x    | x 坐标 | int/float |
| y    | y 坐标 | int/float |
