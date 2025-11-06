const endpoint = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const posts = JSON.parse(xhr.response);
    const container = document.getElementById('cards-container');
    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      container.appendChild(card);
    });
  }
};

xhr.open("GET", endpoint);
xhr.send();
