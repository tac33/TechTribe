let isFollowing = false;
let isLiked = false;

document.getElementById('follow-btn').addEventListener('click', () => {
  if (isFollowing) {
    // Unfollow logic
    document.getElementById('follow-btn').innerText = 'Follow';
    isFollowing = false;
  } else {
    // Follow logic
    document.getElementById('follow-btn').innerText = 'Unfollow';
    isFollowing = true;
  }
});
function createPost() {
  const imageUpload = document.getElementById('image-upload');

  if (imageUpload.files.length === 0) {
    alert('Please select an image.');
    return;
  }

  const file = imageUpload.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const imageUrl = event.target.result;
    displayPost(imageUrl);
  };

  reader.readAsDataURL(file);
}

function displayPost(imageUrl) {
  const postContainer = document.createElement('div');
  postContainer.classList.add('post');

  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;

  // Apply styles to fit with other images
  imageElement.classList.add('post-image');

  postContainer.appendChild(imageElement);

  document.body.appendChild(postContainer);
}
