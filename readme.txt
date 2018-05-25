##  git 的基本操作

### git init  初始化一个git仓库

### git add .  提交文件到缓存区

### git commit -m "提交说明" 提交文件到git版本库

### git status 查看工作区状态

### git diff  查看不同

### git log 查看日志


## git 远程仓库
	 
### 生成SSH密钥
     cd ~/.ssh
	 $ ssh-keygen -t rsa -C “942989558@qq.com”
	 cat id_rsa.pub 得到keys添加进 GitHub 主页
	 $ ssh -T git@github.com  验证SSH Keys是否添加成功
	 
### 设置Git的user name和email：
	 $ git config --global user.name "leinizisky"
	 $ git config --global user.email "942989558@qq.com"
	 
###  链接到远程仓库
git remote add origin https://github.com/leinizisky/mygit.git


	 
