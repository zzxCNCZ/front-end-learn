(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{543:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"shell-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本"}},[a._v("#")]),a._v(" shell 脚本")]),a._v(" "),t("h2",{attrs:{id:"sh-文件首部加注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sh-文件首部加注释"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://stackoverflow.com/questions/8967902/why-do-you-need-to-put-bin-bash-at-the-beginning-of-a-script-file",target:"_blank",rel:"noopener noreferrer"}},[a._v("sh 文件首部加注释"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("code",[a._v("#! /bin/bash")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Shebang",target:"_blank",rel:"noopener noreferrer"}},[a._v("Shebang 解释"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"shell-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-命令格式"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://wangdoc.com/bash/grammar.html#%E5%91%BD%E4%BB%A4%E6%A0%BC%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[a._v("shell 命令格式"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("命令的配置项一般是一个连词线开头，同一个配置项往往有长和短两种形式，短形式便于手动输入，长形式一般用在脚本中，可读性好，利于解释自身含义")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -r   // 短形式\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" --reverse   // 长形式\n")])])]),t("h2",{attrs:{id:"shell-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-参数"}},[a._v("#")]),a._v(" shell 参数")]),a._v(" "),t("p",[a._v("脚本后面可加上参数 $1 代表的脚本里面的第一个参数，$@ 代表所有的参数")]),a._v(" "),t("h2",{attrs:{id:"shell-脚本变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本变量"}},[a._v("#")]),a._v(" shell 脚本变量")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/sh")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MY_MESSAGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MY_MESSAGE")]),a._v("\n")])])]),t("p",[a._v("手动输入变量")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/sh")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" What is your name?\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" MY_NAME\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MY_NAME")]),a._v(" - hope you're well.\"")]),a._v("\n")])])]),t("h3",{attrs:{id:"快速运行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速运行脚本"}},[a._v("#")]),a._v(" 快速运行脚本")]),a._v(" "),t("ol",[t("li",[a._v("我们一般会将本地的 shell 放在/usr/local/sbin/目录下")]),a._v(" "),t("li",[a._v("需要修改该本地的 shell 文件为可执行文件\nsudo chmod 755 boot_sublime.sh")]),a._v(" "),t("li",[a._v("生成系统软链接"),t("code",[a._v("sudo ln -s /usr/local/sbin/boot_sublime_text /usr/bin/sublime")])]),a._v(" "),t("li",[a._v("通过 sublime 即可启动 sublime")])]),a._v(" "),t("h2",{attrs:{id:"复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[a._v("#")]),a._v(" 复制")]),a._v(" "),t("blockquote",[t("p",[a._v("cp 命令执行的，无论你的目标的文件或者文件夹是否存在，都会直接复制，存在的话也会覆盖的。真的好可怕呀，嘤嘤")])]),a._v(" "),t("p",[a._v("复制一个文件夹里面所有的内容到另一个文件夹")]),a._v(" "),t("p",[a._v("cp -R Src_directory Dest_directory 用于复制整个目录")]),a._v(" "),t("p",[a._v("如果 dir2 目录已存在，则需要使用\ncp -r dir1/. dir2")]),a._v(" "),t("h2",{attrs:{id:"shell-脚本的流程控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本的流程控制"}},[a._v("#")]),a._v(" shell 脚本的流程控制")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 判断文件是否存在")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -f scm_build_resource.sh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" scm_build_resource.sh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 判断文件夹是否存在")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -d output "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" output "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n")])])]),t("h2",{attrs:{id:"ls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[a._v("#")]),a._v(" ls")]),a._v(" "),t("ul",[t("li",[a._v("-l shows file or directory, size, modified date and time, file or folder name and owner of file and its permission.")]),a._v(" "),t("li",[a._v("-a list all files including hidden file")]),a._v(" "),t("li",[a._v("-h show size human readable format")]),a._v(" "),t("li",[a._v("-F add the / character at the end each directory")]),a._v(" "),t("li",[a._v("-lS displays file size in order")])]),a._v(" "),t("h2",{attrs:{id:"ifconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ifconfig"}},[a._v("#")]),a._v(" ifconfig")]),a._v(" "),t("p",[a._v("utun0 是什么接口 : vpn 使用的隧道接口")]),a._v(" "),t("p",[a._v('"utun0 is For "Back to My Mac" given your described setup I would assume it\'s created by GNS3 for / as the secure localhost connection.. as for the MTU not sure" --- Refer to superuser')]),a._v(" "),t("h2",{attrs:{id:"删除当前目录下的某一种具体文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除当前目录下的某一种具体文件"}},[a._v("#")]),a._v(" 删除当前目录下的某一种具体文件")]),a._v(" "),t("p",[a._v("删除当前目录下各个文件夹下的 xx 文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" **/*.js\n")])])]),t("h2",{attrs:{id:"chmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://www.computerhope.com/unix/uchmod.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("chmod"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[a._v("0 : no permission")]),a._v(" "),t("li",[a._v("1 : execute")]),a._v(" "),t("li",[a._v("2 : write")]),a._v(" "),t("li",[a._v("4 : read")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("644")]),a._v(" file.htm\n")])])]),t("h2",{attrs:{id:"echo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#echo"}},[a._v("#")]),a._v(" echo")]),a._v(" "),t("p",[a._v("echo 的命令，echo -e 可以对转义字符进行解释")]),a._v(" "),t("ul",[t("li",[a._v("echo $1 的时候$1 代表参数，所以需要转义字符转义一下")])]),a._v(" "),t("h2",{attrs:{id:"shell-变量声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-变量声明"}},[a._v("#")]),a._v(" shell 变量声明")]),a._v(" "),t("p",[a._v("变量声明在左右操作符不需要留有空白。否则 shell 脚本会错误解析。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("var=23")]),a._v(" is just invoking the var=23 command.")]),a._v(" "),t("li",[t("code",[a._v("var =23")]),a._v(" is invoking the var command with =23 as argument.")])]),a._v(" "),t("h2",{attrs:{id:"bash-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-array"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays",target:"_blank",rel:"noopener noreferrer"}},[a._v("bash array"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[t("code",[a._v("arr=()")]),a._v(" Create an empty array")]),a._v(" "),t("li",[t("code",[a._v("arr=(1 2 3)")]),a._v(" Initialize array")])]),a._v(" "),t("h2",{attrs:{id:"vs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs"}},[a._v("#")]),a._v(" ${} vs $()")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("${}")]),a._v(" 用于在字符串中区分对象,"),t("code",[a._v("${parameter}")]),a._v(" The value of parameter is substituted.")]),a._v(" "),t("li",[t("code",[a._v("$()")]),a._v(" is used to execute a command:")])]),a._v(" "),t("h2",{attrs:{id:"一些应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些应用"}},[a._v("#")]),a._v(" 一些应用")]),a._v(" "),t("h3",{attrs:{id:"修改文件名，去除特定的字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文件名，去除特定的字符"}},[a._v("#")]),a._v(" 修改文件名，去除特定的字符")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$path")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("files")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" $path"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("filename")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$files")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("newfile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" $filename "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/this-is-family-//'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$filename")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$newfile")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])])]),t("p",[a._v("这里使用 sed 进行标准输出的字符串替换，其通用格式如下：")]),a._v(" "),t("p",[t("code",[a._v("stdout | sed 's/pattern/replace/'")])]),a._v(" "),t("h3",{attrs:{id:"按行读取文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按行读取文件"}},[a._v("#")]),a._v(" 按行读取文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("input")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./ttt.txt"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$input")]),a._v('"')]),a._v("\n")])])]),t("h2",{attrs:{id:"base64-转音频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base64-转音频"}},[a._v("#")]),a._v(" base64 转音频")]),a._v(" "),t("ol",[t("li",[a._v("仅将使用 base64 编码的内容复制到文本文件中。")]),a._v(" "),t("li",[a._v("使用 base64 命令行工具对源文本文件进行解码：\n"),t("code",[a._v("$ base64 --decode source_base64_text_file > dest_audio_file")])])]),a._v(" "),t("h2",{attrs:{id:"uname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uname"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://man.linuxde.net/uname",target:"_blank",rel:"noopener noreferrer"}},[a._v("uname"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.qiancheng.me/post/coding/show-linux-issue-version",target:"_blank",rel:"noopener noreferrer"}},[a._v("查看 linux 版本号"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("code",[a._v("uname -a")]),a._v(" 展示所有")]),a._v(" "),t("p",[a._v("uname 命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。")]),a._v(" "),t("h2",{attrs:{id:"scp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://gravitational.com/blog/scp-familiar-simple-insecure-slow/",target:"_blank",rel:"noopener noreferrer"}},[a._v("scp"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"tar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://www.interserver.net/tips/kb/use-tar-command-linux-examples/",target:"_blank",rel:"noopener noreferrer"}},[a._v("tar"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("code",[a._v("tar -cvf test.tar")])]),a._v(" "),t("h3",{attrs:{id:"tar-vs-gzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tar-vs-gzip"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"http://www.differencebetween.net/technology/difference-between-gzip-and-tar/",target:"_blank",rel:"noopener noreferrer"}},[a._v("tar vs gzip"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("Tar is an archiver, meaning it would archive multiple files into a single file but without compression. Gzip which handles the .gz extension is the compression tool that is used to reduce the disk space used by the file.")]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://itnext.io/bash-scripting-everything-you-need-to-know-about-bash-shell-programming-cd08595f2fba",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bash Scripting: Everything you need to know about Bash-shell programming"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.tecmint.com/15-basic-ls-command-examples-in-linux/",target:"_blank",rel:"noopener noreferrer"}},[a._v("15 Basic ‘ls’ Command Examples in Linux"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.shellscript.sh/variables1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Shell Scripting TutorialVariables "),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.tutorialspoint.com/docker/installing_docker_on_linux.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("docker tutorial"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/39241059",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用 Docker 构建前端应用"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/54147784",target:"_blank",rel:"noopener noreferrer"}},[a._v("史上最全（全平台）docker 安装方法！ - 知乎"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);