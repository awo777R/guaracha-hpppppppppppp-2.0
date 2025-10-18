function loadMusic(event) {
  const audio = document.getElementById('audioPlayer');
  const file = event.target.files[0];
  if (file) {
    audio.src = URL.createObjectURL(file);
    audio.play();
  }
}

function addComment(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const comment = document.getElementById('comment').value.trim();
  const list = document.getElementById('commentList');

  if (name && comment) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}:</strong> ${comment}`;
    list.prepend(li);
    document.getElementById('commentForm').reset();
  }
}
