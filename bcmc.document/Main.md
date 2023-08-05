> _@Document version`Kitten4.11.8`_

文档使用符号：

-   \*  
    内容均为不可缺的内容  
    如果缺少，player 将拒绝输入该文件

-   ?
    不确定内容

-   bc  
    仅在.bcmc 出现

-   b4
    仅在.bcm4 中出现

其余内容为 bcm4 和 bcmc 共有内容

### **main**主干内容

---

| 名称                      | 介绍                   | 值                                               |
| ------------------------- | ---------------------- | ------------------------------------------------ |
| `(b4)`hidden_toolbox      |                        | `{"toolbox": [],"blocks": []}`                   |
| `(b4)`work_source_label   |                        | `1``                                             |
| `(b4)`codemao_value       |                        | （作品 id）                                      |
| sample_id                 |                        | `""`                                             |
| version                   | 暂无                   | `25`                                             |
| application_version       | 剪辑器版本             | `"4.11.8"`                                       |
| work_type                 | 作品类型标识           | `"KITTEN"`                                       |
| size                      | 屏幕长宽               | {"width":`<number>`,"height":`<number>`}         |
| type                      | 暂无                   | `1`                                              |
| project_name              | 作品名                 | `String`                                         |
| theatre                   | 角色信息(舞台)         | (文档未编写)                                     |
| variables                 | 变量                   | (文档未编写)                                     |
| variable_order            | 变量代码               |                                                  |
| cloud_variables           | 云变量                 | (文档未编写)                                     |
| audio                     | 音源                   | (文档未编写)                                     |
| audio_order               |                        |
| midimusic                 | MIDI 音乐              | (文档未编写)                                     |
| midi_order                | -                      |
| matrix                    | 分类 AI 模型数据       | (文档未编写)                                     |
| models                    | 分类 AI 模型信息       |                                                  |
| toolbox                   | 积木工具盒             | 见 [toolbox.md](./toolbox.md)                    |
| `(b4?)`last_toolbox_order | `未知`                 |
| hardware_type             | `未知`                 | 通常为`""`                                       |
| `(?)`device_widget_type   |                        |                                                  |
| is_partial                | 是否发布 `发布为false` | Boolean `true \| false`                          |
| `(bc)`compile_result      | 作品编译结果           | (文档未编写)                                     |
| ai_lab                    | gameAi 数据            | (文档未编写)                                     |
| painter                   |                        |                                                  |
| broadcasts                | 广播                   | (文档未编写)                                     |
| preview                   | 作品预览               | `https//creation.codemao.cn/445/kitten/(dase64)` |
| author_nickname           | 作者名称               | `String`                                         |
