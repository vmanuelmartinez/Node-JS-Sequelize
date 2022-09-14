
const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize({ 
    dialect: 'sqlite', 
    storage: './my-database.db' 
})
const tasks = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// List tasks
app.get('/tasks', async (req, res) => {
    const allTasks = await tasks.findAll()
    res.json({ action: 'Listing tasks', allTasks })
})

// Create task
app.post('/', async (req, res) => {
  const {description, done} = req.body;
  const newTasks = await tasks.create({description, done});
  res.send({newTasks})
})

// Show task
app.get('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const taskById = await tasks.findByPk(taskId)
  res.json({ description: taskById.description, id: taskById.id, done: taskById.done })
})

// Update task
app.put('/tasks-atualizar/:id', async (req, res) => {
  const {id} = req.params;
  const {description, done} = req.body;
  const taskUpdate = await tasks.update({description, done}, {where: {id}});

  res.json({ action: 'Updating task', taskUpdate })
})

// Delete task
app.delete('/tasks-eliminar/:id', async (req, res) => {
    const {id} = req.params;
    const taskDelete = await tasks.destroy({where: {id}});

  res.json('Deletado!')
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})