# bcm-kitten.js
bcm-kitten是一个javascript框架，你可以导入bcmc文件并对其进行访问、操作或回编。
在后续的版本中，bcm-kitten.js将支持用javascript进行bcm4的构建与修改。
> 适用于 kitten4.codemao.cn 的模拟api

## 入门
我们提供一个bcmc实例，您可以从此bcmc实例中，了解工作方式与原理。
实例作品链接：https://shequ.codemao.cn/work/194508500  
通过api便可发现bcmc资源列表：https://api-creation.codemao.cn/kitten/r2/work/player/load/194508500  
进入最新推送的bcmc：https://creation.codemao.cn/445/kitten/d2ViXzIwMDJfMTc2ODkyNTNfMTk0NTA4NTAwXzE2OTA4OTQ5OTU0NjNfODA0MWNkYmM=.json  
请按要求使用main.js操作bcmc完成以下任务：
- 修改角色2的等待时长
- 查看并比对角色1与角色2的代码异同
- *修改背景的默认造型，并尝试理解造型文件 (选做)*

若完成了以下任务，那么恭喜你已经基本掌握了使用 bcm-kitten.js 的基本技巧，你可以在编程猫社区寻找更多bcmc实例与教程，提升操作此框架的能力！  

## 下载
### 直接下载
[点击下载链接](https://github.com/cinast/bcm-kitten.js/archive/refs/tags/alpha0.1.zip)，即可开始下载，进行解压后即可运行
### python
启动 cmd ，输入以下命令：
```
pip install requests
python
import requests
url = "https://github.com/cinast/bcm-kitten.js/archive/refs/tags/alpha0.1.zip"
requests.get(url)
```

## 使用
### html嵌入
```
<script src="bcm-kitten.js/main.js"></script>
```

## 合作
### 我是开发者
提交 pull request 与 issue
### 我是使用者
提交 issue ，提出建议
