> _@Document version`Kitten4.11.8`_

# **theatre** 角色与场景
文档使用符号:
- `?`  
  不确定内容
- `D`  
  弃用内容
  
### 主体部分
> `/teathre`

| 名称                         | 介绍                          |
| ---------------------------- | ----------------------------- |
| `(?)`current_scene`<String>` | 所在屏幕                      |
| scenes_order`<String[]>`     | 屏幕 UUID 集合                |
| scenes`<Object{}>`           | [屏幕元数据](#scenes屏幕元素) |
| actors`<Object{}>`           | 角色元数据                    |
| videos`<Object{}>`           | 视频元数据                    |
| styles`<Object{}>`           | 角色造型元数据                |
| groups`<Object{}>`           |                               |

### scenes 屏幕元素

> `/theatre/scenes/<id>/`

| 名称               | 介绍                  |
| ------------------ | --------------------- |
| id`<String>`       | 屏幕 UUID             |
| name`<String>`     | 屏幕名称              |
| actors`<String[]>` | 屏幕下所有角色的 uuid |
| x                  |                       |
| y                  |                       |
| scale              |                       |
|                    |                       |
|                    |                       |
|                    |                       |
| styles             |                       |
