/*************** 
    CODE TODOLIST
***************/

const { createApp } = Vue

createApp({
    ata() {
        return {
            toDoList: [
                {
                    text: "Rifare il letto",
                    done: false
                },
                {
                    text: "Lavarsi i denti",
                    done: false
                },
                {
                    text: "Fare allenamento",
                    done: false
                },
                {
                    text: "Fare colazione",
                    done: false
                },
                {
                    text: "Lavorare",
                    done: false
                }
            ]
        }
    },   
    methods: {
        deleteItem(n) {
            this.toDoList.splice(n, 1);  
        }
    }
}).mount('#app')