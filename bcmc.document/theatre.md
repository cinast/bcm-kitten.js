> _@Document version`Kitten4.11.8`_

### **theatre** 角色与场景
> `/theatre`

| 名称                   | 介绍                          |
| ---------------------- | ----------------------------- |
| `b4`current_scene`<String>`  | 所在屏幕                      |
| scenes_order`<String[]>` | 屏幕 UUID 集合                |
| scenes`<Object{}>`    | [屏幕元数据](#scenes屏幕元素) |
| actors`<Object{}>`    | 角色元数据                    |
| videos`<Object{}>`    | 视频元数据                    |
| styles`<Object{}>`    | 角色造型元数据                |
| groups`<Object{}>`    |                               |

### scenes 屏幕元素
> `/theatre/scenes/<id>/`

| 名称 | 介绍 |
| ---- | ---- |
| id`<String>`| 屏幕 UUID |
| name`<String>` | |
| actors`<String[]>`| |
| styles| |
| | |
| | |
| | |
| | |
| | |
| | |


            "b5e60282-a2d1-478b-802d-a30e77d67e6b": {
                "id": "b5e60282-a2d1-478b-802d-a30e77d67e6b",
                "name": "背景",
                "": [
                    "eb8379ba-adce-40d9-90b9-60662d4049d4"
                ],
                "actors": [
                    "a6a2046b-27b2-418e-b88d-30c8070a05b9"
                ],
                "x": 0,
                "y": 0,
                "scale": 100,
                "rotation": 0,
                "rotation_type": 0,
                "draggable": false,
                "visible": true,
                "screen_name": "屏幕",
                "group_order": [
                    "4ad9772a-437b-457a-b840-f72bdb23e23c"
                ],
                "workspace_offset": {
                    "x": 100,
                    "y": -1700
                },
