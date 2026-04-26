let userId = localStorage.getItem("userId");

async function loadTasks() {
    let res = await fetch(`http://localhost:3000/tasks/${userId}`);
    let tasks = await res.json();

    let html = "";

    tasks.forEach(t => {
        html += `
        <div class="task">
            <span>${t.title}</span>
            <span class="status ${t.status}">${t.status}</span>
        </div>`;
    });

    document.getElementById("tasks").innerHTML = html;
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

loadTasks();