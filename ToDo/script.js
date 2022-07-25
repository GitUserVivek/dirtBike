 var container = document.createElement('div');
 var todo = document.createElement('div');

 document.addEventListener('DOMContentLoaded', getHistory)

 function getHistory() {
     var lists = JSON.parse(localStorage.getItem('TODOLIST'));
     lists.forEach(tsk => {
         var listdiv = document.createElement('div');
         listdiv.classList.add('list');
         var task = document.createElement('div');
         var Done = document.createElement('button');
         var Delete = document.createElement('button');
         task.classList.add('newTask')
         Done.innerText = " DONE"
         Delete.innerText = " Delete"
         listdiv.appendChild(task)
         listdiv.appendChild(Done)
         listdiv.appendChild(Delete)
         todo.appendChild(listdiv)
         task.innerText = tsk;

         Delete.addEventListener('click', () => {
             var parentE = Delete.parentElement;
             var ValueOfNode = parentE.children[0].innerText;
             console.log(ValueOfNode)
             console.log(lists)
             for (let ind = 0; ind < lists.length; ind++) {
                 if (ValueOfNode == lists[ind]) {
                     for (let dl = ind; dl < lists.length - 1; dl++) {
                         lists[dl] = lists[dl + 1];
                     }
                     lists.pop()
                     console.log(lists);
                     localStorage.setItem('TODOLIST', JSON.stringify(lists))
                 }
             }
             console.log(lists)
             var del = Delete.parentElement;
             del.classList.add('remove')
             setTimeout(() => {
                 del.remove()

             }, 900);

         })

     });
 }
 container.classList.add('container');
 todo.classList.add('todo')
 document.body.appendChild(container);
 container.appendChild(todo);




 // SOME USEFUL DECLARATIONS 
 const styles = "height:30px;outline:none;padding:2px;";
 //Create Html of INPUT AND BUTTON
 var input = document.createElement('input');
 var button = document.createElement('button');


 //  button.style.cssText = styles;
 //  input.style.cssText = styles;

 input.classList.add('addTask');
 input.setAttribute('spellcheck', 'false')
 input.style.width = "300px";
 button.classList.add('AddBtn');

 button.innerText = "Add";
 todo.appendChild(input);
 todo.appendChild(button)

 button.addEventListener('click', insert)
 document.addEventListener('keydown', run)

 function run(e) {
     //e.preventDefault();
     if (e.key == 'Enter') {
         insert();
     }
 }


 function insert() {
     if ("c" === "") {
         alert("Need At list one task input cant be empty")
     } else {
         //CREATE COMPLETE LIST DIV 
         var listdiv = document.createElement('div');
         listdiv.classList.add('list');


         var task = document.createElement('div');
         var Done = document.createElement('button');
         var Delete = document.createElement('button');
         task.classList.add('newTask')
         Done.innerText = " DONE"
         Delete.innerText = " Delete"
         listdiv.appendChild(task)
         listdiv.appendChild(Done)
         listdiv.appendChild(Delete)
         todo.appendChild(listdiv)
         task.innerText = input.value;
         input.value = '';


         Delete.addEventListener('click', () => {

             var del = Delete.parentElement;
             del.classList.add('remove')
             setTimeout(() => {
                 del.remove()

             }, 900);

         })

         Done.addEventListener('click', () => {
             var Complete = Done.parentElement;
             Complete.classList.add('completed')
         })
     }
     addToLocal(task.innerText)
         //  DONE LISTDIV
 }

 function addToLocal(inp) {
     let history;
     if (localStorage.getItem('TODOLIST') === null) {
         history = [];
     } else {
         history = JSON.parse(localStorage.getItem('TODOLIST'))
     }
     history.push(inp);
     localStorage.setItem('TODOLIST', JSON.stringify(history))
 }