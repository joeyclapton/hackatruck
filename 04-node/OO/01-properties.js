const task = {
  description: "Estudar prova Arquitetura de Software",
  isDone: false,
  changeDoneStatus() {
    this.isDone = !this.isDone;
  },
  getStatus() {
    return this.isDone ? "✅" : "❌";
  },
};

const tasks = Object.create({
  description: "",
  list: [],
});

console.log("Estado da tarefa: " + task.getStatus());
task.changeDoneStatus();
console.log("Estado da tarefa: " + task.getStatus());
