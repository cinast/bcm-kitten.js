> _@Document version`Kitten4.11.9`_

# bcmc & bcm4 documentation  编程猫编译文件与源码文件文档

文档使用符号：

- `*`  
  标记内容均为不可缺的内容  
   如果缺少，player 将拒绝输入该文件

- `?`  
  不确定内容

- `D`  
  弃用内容

- `bc`  
  仅在 .bcmc 出现

- `b4`
  仅在 .bcm4 出现

其余内容为 bcm4 和 bcmc 共有内容

- `/` | `/...`   
  属性路径`/`表示整个文件  
  属性路径`/xx`表示文件中第一层“xx”属性

### **bcmc/bcm4**文件主干内容

---

| 名称                     | 介绍                      | 值                                               |
| ------------------------ | ------------------------- | ------------------------------------------------ |
| `(b4 ?)`hidden_toolbox   |                           | `{"toolbox": [],"blocks": []}`                   |
| `(b4 ?)`work_source_label|                           | `1`                                              |
| `(b4)`codemao_value      | 来源的作品编号             | `<number>`                                       |
| sample_id                |                           | `""`                                             |
| version                  | 文件版本                  | `25`                                             |
| application_version      | 编辑器版本                | `"4.11.8"`                                       |
| work_type                | 作品类型标识              | `"KITTEN"`                                       |
| size                     | 屏幕长宽                  | `{"width":<number>,"height":<number>}`           |
| `(?)`type                | _未知_                    | `1`                                              |
| project_name             | 作品名                    | `<String>`                                       |
| theatre                  | 角色信息(舞台)            | 见 [theatre.md](./theatre.md)                    |
| variables                | 变量与列表                | 见 [variables.md](./variables.md)               |
| variable_order           | 变量与列表顺序            | 所有变量与列表的uuid集合                          |
| cloud_variables          | 云变量与列表              | 见 [cloud_variables.md](./cloud_variables.md)   |
| audio                    | 音乐                      | (文档未编写)                                     |
| audio_order              | 音乐排序                  | 所有音乐的uuid集合                               |
| midimusic                | MIDI 音乐                 | (文档未编写)                                     |
| midi_order               | MIDI 音乐排序             | 所有MIDI音乐的uuid集合                           |
| matrix                   | 分类 AI 模型数据          | (文档未编写)                                     |
| models                   | 分类 AI 模型信息          |                                                  |
| toolbox                  | 积木工具盒                | 见 [toolbox.md](./toolbox.md)                    |
| `(b4)`last_toolbox_order | _未知_                    |                                                  |
| `(?)`hardware_type       | _硬件类型_                | 通常为`""`                                       |
| `(?)`device_widget_type  |                           | `null`                                           |
| is_partial               | 是否发布 _(发布为 false)_ | `true \| false`                                  |
| `(bc)`compile_result     | 作品编译结果              | (文档未编写)                                     |
| ai_lab                   | gameAi 数据               | (文档未编写)                                     |
| `(?)`painter             | 画板中调色板的颜色顺序     | (文档未编写)                                     |
| broadcasts               | 广播                      | (文档未编写)                                     |
| `(bc)`preview            | 作品预览图                | `https//creation.codemao.cn/445/kitten/(base64)` |
| author_nickname          | 作者名称                  | `<String>`                                       |
