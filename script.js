const channels = document.querySelectorAll('.channel');
const messageBox = document.getElementById('message-box');

channels.forEach(channel => {
  channel.addEventListener('click', handleClick);
});

function handleClick(event) {
  const target = event.currentTarget.dataset.target;
  const content = `<!-- Your actual content for each section goes here```
}