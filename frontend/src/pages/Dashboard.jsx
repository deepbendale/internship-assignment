import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await api.post("/tasks", newTask);
      setNewTask({ title: "", description: "" });
      fetchTasks();
    } catch {
      alert("Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch {
      alert("Failed to delete task");
    }
  };

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/tasks/${editTask.id}`, editTask);
      setEditTask(null);
      fetchTasks();
    } catch {
      alert("Failed to update task");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      {/* Add Task Form */}
      <div className="bg-white shadow-md p-6 rounded-md max-w-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

        <form onSubmit={addTask} className="space-y-4">
          <input
            type="text"
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) =>
              setNewTask({ ...newTask, title: e.target.value })
            }
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Task description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Edit Task Modal */}
      {editTask && (
        <div className="bg-white shadow-md p-6 rounded-md max-w-xl mb-8">
          <h2 className="text-xl font-semibold mb-4">Edit Task</h2>

          <form onSubmit={updateTask} className="space-y-4">
            <input
              type="text"
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />

            <textarea
              value={editTask.description}
              onChange={(e) =>
                setEditTask({ ...editTask, description: e.target.value })
              }
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={editTask.completed}
                onChange={(e) =>
                  setEditTask({
                    ...editTask,
                    completed: e.target.checked,
                  })
                }
              />
              <span>Completed</span>
            </label>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => setEditTask(null)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Task List */}
      <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add one!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow-md rounded-md p-6 flex flex-col gap-3"
            >
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p className="text-gray-700">{task.description}</p>
              <p
                className={`font-semibold ${
                  task.completed ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </p>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setEditTask(task)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
