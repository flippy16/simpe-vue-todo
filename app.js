const app = new Vue({
    el: '#app',
    data: {
        titleTodo: 'Simple Todo App',
        todo: '',
        arrTodo: [],
        warnText:'',
        theDoneTodo: 'todo-done',
        notTheDoneTodo: 'item-todo',
    },
    methods: {
        addTodo(){
            if(todo){
                this.arrTodo.unshift({
                    title: this.todo,
                    isDone: false
                });
                this.todo = '';
            }else{
                this.warnText= 'The field cannot be empty!';
            }
        },
        deleteTodo(todo){
            var idx = this.arrTodo.indexOf(todo);
            this.arrTodo.splice(idx,1);
        },
        doneTodo(todo){
            var idx = this.arrTodo.indexOf(todo);
            if(this.arrTodo[idx].isDone){
                this.arrTodo[idx].isDone = false;
            }else {
                this.arrTodo[idx].isDone = true;
                this.deleteTodo(todo);
                this.arrTodo.push(todo);
            }
        }
    }
});