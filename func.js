// Real-Time Time Tracking
let workStartTime;
let workTimer;
let workDuration = 0;

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const workTimeDisplay = document.getElementById("workTime");

startBtn.addEventListener("click", () => {
  workStartTime = Date.now();
  workTimer = setInterval(updateWorkTime, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  clearInterval(workTimer);
  workDuration += Math.floor((Date.now() - workStartTime) / 1000);  // Add to total duration
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function updateWorkTime() {
  const elapsed = Math.floor((Date.now() - workStartTime) / 1000);
  const totalSeconds = workDuration + elapsed;

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  workTimeDisplay.textContent = `Total Time: ${hours}:${minutes}:${seconds}`;
}

// Task Tracking
const taskForm = document.getElementById("taskForm");
const taskListContainer = document.getElementById("taskList");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = document.getElementById("taskName").value;
  const taskDeadline = document.getElementById("taskDeadline").value;

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <div class="task-name">${taskName}</div>
    <div class="task-deadline">Deadline: ${taskDeadline}</div>
  `;

  taskListContainer.appendChild(taskItem);

  taskForm.reset();
});

// Attendance & Leave
const clockInBtn = document.getElementById("clockInBtn");
const clockOutBtn = document.getElementById("clockOutBtn");
const attendanceStatus = document.getElementById("attendanceStatus");

clockInBtn.addEventListener("click", () => {
  clockInBtn.disabled = true;
  clockOutBtn.disabled = false;
  attendanceStatus.textContent = "Status: Clocked In";
});

clockOutBtn.addEventListener("click", () => {
  clockInBtn.disabled = false;
  clockOutBtn.disabled = true;
  attendanceStatus.textContent = "Status: Clocked Out";
});

// Productivity Analysis & Reports
const generateReportBtn = document.getElementById("generateReportBtn");
const reportArea = document.getElementById("reportArea");

generateReportBtn.addEventListener("click", () => {
  const reportData = `
    <p>App & Website Usage: 5 hours</p>
    <p>Productivity Score: 80%</p>
    <p>Mouse & Keyboard Activity: Normal</p>
  `;
  reportArea.innerHTML = reportData;
});

// Team Collaboration (Chat & Video Call UI Placeholder)
const openChatBtn = document.getElementById("openChatBtn");
const openVideoBtn = document.getElementById("openVideoBtn");

openChatBtn.addEventListener("click", () => {
  alert("Chat feature is coming soon!");
});

openVideoBtn.addEventListener("click", () => {
  alert("Video call feature is coming soon!");
});