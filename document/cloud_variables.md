> _@Document version`Kitten4.11.9`_

# **cloud_variables** 云变量

> 除特殊表明外 其他类型均为 string.  
> 云列表是云变量的一种

### 主体部分

> `/cloud_variables`

| 名称         | 介绍                     |
| ------------ | ------------------------ |
| `<Object{}>` | 包含着所有云变量的元数据 |

### cloud_variables 云变量元素

> `/cloud_variables/<id>/`

| 名称      | 介绍                                           | 备注      |
| --------- | ---------------------------------------------- | --------- |
| id        | 云变量 UUID                                    |           |
| cvid      | 云变量 UUID (另一表达方式)                     |           |
| name      | 云变量名称                                     |           |
| visible   | 是否显示                                       | bool      |
| type      | 云变量类型(私有云变量、公有云变量、公有云列表) |           |
| is_global | 是否为全局变量                                 | bool      |
| scale     | 缩放                                           | int/float |
| `?`offset | `未知`(仅存在于云列表)                         | object    |
| position  | 显示时的 [坐标](####坐标)                      | object    |

#### 坐标

> `/cloud-_variables/<id>/position`

| 名称 | 介绍   | 备注      |
| ---- | ------ | --------- |
| x    | x 坐标 | int/float |
| y    | y 坐标 | int/float |
