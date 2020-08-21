

# Como aprender Markdown?

[nombredellink](https://link)

Haz click en [Markdown](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) para acceder a un breve tutorial de markdown

# La forma de hacer graficos livianos y programados

para mayor informacion revisa el archivo de extension .md

<img src='https://g.gravizo.com/svg?
 digraph G {
    rankdir=LR;
    Computer->Github [ label="push" ];
    Github->Computer [ label="pull" ];    
    } 
'/>

# flujo de trabajo en Github

a continuacion se muestra una foto del flujo de trabajo en git

![Workflow-git](  /images/Workflow_git.png) 
slash permite que github adhiera la linea al directorio


Workspace   |  staggingArea | localRepository|remoterepository \
git add       | git commit     | git pushsh 

``` bash
user@host:~$  git status  #este comando sirve para ver el estado de github
user@host:~$ git add . #comando para agregar archivos modificados al stage area 
user@host:~$ git coomit -m "comentario". #comando para agregar archivos modificados al stage area
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

#notas

para ejecutar de manera local ir a seccion 1.2 de [techfolios](https://techfolios.github.io/userguide.html)

```cmd
en cmd
user@host:~$ jekyll serve --baseurl ''
```

https://hackernoon.com/can-github-be-a-powerful-project-management-tool-7ff750463234

https://open.hpi.de/courses/git2020/items/2rKPrb4rZZC8dhP8vS4h58

https://www.flaticon.com/free-icon/phone-call_561131?term=telephon&page=1&position=3

https://www.w3schools.com/html/html_images.asp

https://www.w3docs.com/snippets/html/how-to-embed-pdf-in-html.html

# Deshacer push

como deshacer un push y restaurar el branch hasta el ultimo commit aceptado (estado dodne el codigo aun funcionaba) -> git push -f origin last_known_good_commit:branch_name. Para mas informacion haga [click aqui](https://stackoverflow.com/questions/1270514/undoing-a-git-push)
