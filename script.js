// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('formMessage');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.value || !email.value) {
    message.textContent = 'All fields are required.';
    message.style.color = 'red';
    return;
  }

  if (!emailRegex.test(email.value)) {
    message.textContent = 'Please enter a valid email.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Form submitted successfully!';
  message.style.color = 'green';
  name.value = '';
  email.value = '';
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  li.addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
}