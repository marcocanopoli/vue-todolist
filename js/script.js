var app = new Vue(
    {
        el: '#root',
        data: {
            tasks:[
                {
                    task: 'Studiare',
                    completed: false
                },
                {
                    task: 'Fare la spesa',
                    completed: false
                },
                {
                    task: 'Andare in palestra',
                    completed: false
                },
                {
                    task: 'Imbiancare',
                    completed: false
                }
            ],
            newTask: ''
        },
        methods: {
            removeItem: function(index) {
                this.tasks.splice(index,1);
            },
            addNewTask: function() {
                if (this.newTask.length > 0) {
                    this.tasks.push({task: this.newTask, completed: false});
                }
                this.newTask = '';
            },
            toggleCompleted: function(index) {                
                if (this.tasks[index].completed) {
                    this.tasks[index].completed = false;
                } else {
                    this.tasks[index].completed = true;
                }
            }
        }
    }
);