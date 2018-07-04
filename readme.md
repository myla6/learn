##  git 的基本操作

###  初始化一个git仓库
     git init

###  提交文件到缓存区
	 git add . 

### 提交文件到git版本库
	 git commit -m "提交说明" 

### 查看工作区状态
	 git status 

### 查看不同
	 git diff

### 查看日志
	 git log
	 
### 提交到远程仓库
	git push -u origin master


## git 远程仓库
	 
### 生成SSH密钥
     cd ~/.ssh
	 $ ssh-keygen -t rsa -C “942989558@qq.com”
	 cat id_rsa.pub 得到keys添加进 GitHub 主页
	 $ ssh -T git@github.com  验证SSH Keys是否添加成功
	 
### 设置Git的user name和email：
	 $ git config --global user.name "leinizisky"
	 $ git config --global user.email "942989558@qq.com"
	 
###  链接到远程仓库2
     git remote add origin https://github.com/leinizisky/mygit.git


##  多人协作

### 试图推送自己的修改
    git push origin <branch-name>

### 若失败获取远程信息
    git pull

### 解决冲突，重新push
    git push origin <branch-name>



## git工具操作
### 退出编辑模式
    Esc键以确保您退出插入模式，然后:wq（冒号W Q）或ZZ（按住Shift Z偏移-Z）


git checkout . #本地所有修改的。没有的提交的，都返回到原来的状态
git stash #把所有没有提交的修改暂存到stash里面。可用git stash pop回复。
git reset --hard HASH #返回到某个节点，不保留修改。
git reset --soft HASH #返回到某个节点。保留修改

git clean -df #返回到某个节点
git clean 参数
    -n 显示 将要 删除的 文件 和  目录
    -f 删除 文件
    -df 删除 文件 和 目录 
