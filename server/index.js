const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const { emptyQuery } = require('pg-protocol/dist/messages');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

app.post('/todos', async (req, res) => {
  try {
    const { despriction } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get('/todos', (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(err.message)
  }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
  try{
    const {id} = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    
    res.json(todo.rows[0])
  } catch (err) {
    console.error(err.message);
  }
})

//update a todo

app.put("/todos/:id", async (rec, res) => {
  try {
    const {id} = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description, id]);

    res.json("Todo was updated!")
  } catch (err) {
    console.error(err.message)
  }
})

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteTdo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
})





app.listen(5000, () => {
  console.log('server has started on port 50000');
});
