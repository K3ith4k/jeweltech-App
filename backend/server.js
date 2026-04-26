const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   DB CONNECTION
========================= */
mongoose.connect("mongodb://127.0.0.1:27017/jeweltech")
.then(() => console.log("MongoDB Connected 💎"))
.catch(err => console.log("DB Error:", err));

/* =========================
   MODELS
========================= */
const User = mongoose.model("User", {
    username: String,
    password: String,
    role: String
});

const Task = mongoose.model("Task", {
    title: String,
    assignedTo: String,
    assignedBy: String,
    status: { type: String, default: "pending" }
});

/* =========================
   AUTH
========================= */
app.post("/register", async (req, res) => {
    const { username, password, role } = req.body;

    const exists = await User.findOne({ username });
    if (exists) return res.json({ error: "User already exists" });

    await new User({ username, password, role }).save();

    res.json({ message: "User created 💎" });
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) return res.json({ error: "Invalid credentials" });

    res.json({
        userId: user._id,
        role: user.role
    });
});

/* =========================
   USERS (EMPLOYEES ONLY)
========================= */
app.get("/users", async (req, res) => {
    const users = await User.find({ role: "employee" });
    res.json(users);
});

/* =========================
   TASKS
========================= */
app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({ message: "Task assigned 💎" });
});

app.get("/tasks/:userId", async (req, res) => {
    const tasks = await Task.find({ assignedTo: req.params.userId });
    res.json(tasks);
});

app.post("/tasks/complete/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {
        status: "completed"
    });

    res.json({ message: "Task completed 💎" });
});

/* ========================= */
app.listen(3000, () => {
    console.log("Server running 🚀 on port 3000");
});