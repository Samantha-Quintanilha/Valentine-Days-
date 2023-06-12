(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  let newyear = "Dec 21, 2022 00:00:00",
      countDown = new Date(newyear).getTime();
  let x = setInterval(function() {
    let now = new Date().getTime(),
        distance = countDown - now;
    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
  }, 0);
}());


function updateTask(taskId, columnId) {
  var taskList = JSON.parse(localStorage.getItem('taskList')) || {};
  taskList[taskId] = columnId;
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

// Função para carregar a marcação das tarefas do localStorage
function loadTasks() {
  var taskList = JSON.parse(localStorage.getItem('taskList')) || {};
  for (var taskId in taskList) {
    if (taskList.hasOwnProperty(taskId)) {
      var checkbox = document.querySelector(`#column${taskList[taskId]} input[type="checkbox"][onclick="updateTask(${taskId}, ${taskList[taskId]})"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    }
  }
}





