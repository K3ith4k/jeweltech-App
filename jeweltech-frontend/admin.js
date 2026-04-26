let adminId = localStorage.getItem("userId");

/* =========================
   LOAD USERS
========================= */
async function loadUsers() {
    let res = await fetch("http://localhost:3000/users");
    let users = await res.json();

    let select = document.getElementById("users");
    select.innerHTML = "";

    users.forEach(u => {
        select.innerHTML += `<option value="${u._id}">${u.username}</option>`;
    });
}

/* =========================
   ASSIGN TASK
========================= */
async function assignTask() {
    let title = document.getElementById("task").value;
    let assignedTo = document.getElementById("users").value;

    if (!title) return alert("Enter task");

    await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            title,
            assignedTo,
            assignedBy: adminId
        })
    });

    document.getElementById("task").value = "";
    loadTasks();
}

/* =========================
   LOAD TASK FEED
========================= */
async function loadTasks() {
    let res = await fetch("http://localhost:3000/users");
    let users = await res.json();

    let html = "";

    users.forEach(u => {
        html += `<div class="task">👤 ${u.username}</div>`;
    });

    document.getElementById("taskList").innerHTML = html;
}

/* ========================= */
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

/* INIT */
loadUsers();
loadTasks();