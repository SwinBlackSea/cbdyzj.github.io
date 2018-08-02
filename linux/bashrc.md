## .bash_profile

```sh
# shell prompt
PS1='\u@ \w\n$ '

# alias
alias ls='ls -G'
alias ll='ls -alh'
alias grep='grep --color'
alias dk='docker'
alias dkc='docker-compose'
alias tree='tree -N'
alias de='cd ~/Desktop'
alias brew-up='brew update && brew upgrade && brew cleanup'
alias tnpm='npm --registry=http://registry.npm.taobao.org'
alias convert-gb='iconv -f gb18030'
alias ss='proxy=http://127.0.0.1:1087 && export http_proxy=$proxy && export https_proxy=$proxy'
```

## .gitconfig

```
[user]
	name = cbdyzj
	email = cbdyzj@jianzhao.org
[alias]
	ss = status -s
	co = checkout
	br = branch
	cm = commit
	sm = submodule
[core]
	quotepath = false
```

## .inputrc

```
set completion-ignore-case on
```
