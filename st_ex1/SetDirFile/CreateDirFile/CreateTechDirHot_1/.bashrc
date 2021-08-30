. ~/git-completion.bash
. ~/git-prompt.sh
# export GIT_PS1_SHOWDIRTYSTATE=1
# export PS1='\w$(__git_ps1 " (%s)")\$ '

# export PROMPT_COMMAND='__posh_git_ps1 "\\[\[\e[0;32m\]\u@\h \[\e[0;33m\]\w" " \[\e[1;34m\]\n\$\[\e[0m\] ";'$PROMPT_COMMAND

# PROMPT_COMMAND='__posh_git_ps1 "\u@\h:\w " "\\\$ ";'$PROMPT_COMMAND

iffile() {
    /C/Bash_scripts/iffile.sh "$@"
}
export -f iffile

w_arg() {
    echo "$@"
}

_node(){
	node /F/Node_projects/Node_Way/Tmp/Hello.js 
}

# /F/Node_projects/Node_Way/node_modules/st_doc1/nodejs.org_DOCS.v.2/CommandLine/Way/ques_2.js

QMR_1_d1(){
echo 'bash QMR_1_d1() is RUN'
# полный путь до скрипта
#	ABSOLUTE_FILENAME=`readlink -e "$0"`
# каталог в котором лежит скрипт
#	DIRECTORY=`dirname "$ABSOLUTE_FILENAME"` => 'C:/Program Files/Git/usr/bin'


	node /F/Node_projects/Node_Way/node_modules/st_ex1_up1/SetCLI/QuesMenuRun/QMR_1_d1/Test/main_test.js $(pwd) "$@"
} 

# E:\Node_projects\Node_Way\node_modules\st_ex1\SetDirFile\SearchDirFile\DirMappingCloneFileToDir_8\Test\main_test.js

QMR_2_d1(){
echo 'bash QMR_1_d1() is RUN'
# полный путь до скрипта
#	ABSOLUTE_FILENAME=`readlink -e "$0"`
# каталог в котором лежит скрипт
#	DIRECTORY=`dirname "$ABSOLUTE_FILENAME"` => 'C:/Program Files/Git/usr/bin'


	node /F/Node_projects/Node_Way/node_modules/st_ex1_up1/SetCLI/QuesMenuRun/QMR_1_d1/Test/main_test.js $(pwd) "$@"
	
} 

# /F/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/index.js

m_d1(){
echo 'bash mkdir_1 is RUN'
# полный путь до скрипта
#	ABSOLUTE_FILENAME=`readlink -e "$0"`
# каталог в котором лежит скрипт
#	DIRECTORY=`dirname "$ABSOLUTE_FILENAME"` => 'C:/Program Files/Git/usr/bin'


	node /F/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test/main_test.js $(pwd) "$@"
	
} 

p_a (){
node /F/Node_projects/Node_Way/node_modules/st_doc1/nodejs.org_DOCS.v.2/CommandLine/Way/p_a.js "$@"
}

export -f _node

alias welcome='echo "Welcome $USER."'

# Version Control
alias gs="git status"
alias gd="git add ."
alias gp="git push -u origin master"

# Directory
alias diskusage="df -h"
alias folderusage="du -ch"
alias totalfolderusage="du -sh"

# Various
alias opencustomaliases="code  ~/.custom_aliases"
alias updatecustomaliases="source ~/.custom_aliases"
alias updatethenupgrade="sudo apt-get update && sudo apt-get upgrade"

# Несколько команд
function lazyman() {
    git add .
    git commit -a -m "$1"
    git push -u origin master
}

# alias iffile = "[ -f $1 ] && echo Файл_существует || echo Файл_не_существует"

# function iffile() {
# [ -f arg ] && echo Файл_существует || echo Файл_не_существует
# }

# alias iffi = "/C/Bash_scripts/iffile.sh"