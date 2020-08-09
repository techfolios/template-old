# Titulo


<img src='https://g.gravizo.com/svg?
 digraph G {
    rankdir=LR;
    Computer->Github [ label="push" ];
    Github->Computer [ label="pull" ];    
    } 
'/>



pasar contenido de github al pc (local) git pull (en vscode)

git push-> subir contenido a github de vscode

cambio, stage, commit, push

[nombredellink](https://link)

![Workflow-git](  /images/Workflow_git.png) 

Workspace   |  staggingArea | localRepository|remoterepository \
git add       | git commit     | git pushsh 

``` bash
user@host:~$  git status  #este comando sirve para ver el estado de github
user@host:~$ git add . #comando para agregar archivos modificados al stage area 
user@host:~$ git add . #comando para agregar archivos modificados al stage area
```


<img src='https://g.gravizo.com/svg?
 digraph G {
   main -> parse -> execute;
   main -> init;
   main -> cleanup;
   execute -> make_string;
   execute -> printf
   init -> make_string;
   main -> printf;
   execute -> compare;
 }
'/>


# Graphviz 
- dia
- gravizo
- mermaid
- graphviz (dot)
