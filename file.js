const postsContent = document.querySelector(".posts-content");

// Array of sample image URLs
const imageUrls = [
  "https://picsum.photos/300/300?random=1",
  "https://picsum.photos/300/300?random=2",
  "https://picsum.photos/300/300?random=3",
  "https://picsum.photos/300/300?random=4",
  "https://picsum.photos/300/300?random=5",
  "https://picsum.photos/300/300?random=6",
  "https://picsum.photos/300/300?random=7",
  "https://picsum.photos/300/300?random=8",
  "https://picsum.photos/300/300?random=9",
  "https://picsum.photos/300/300?random=10",
  "https://picsum.photos/300/300?random=11",
  "https://picsum.photos/300/300?random=12",
];

// Load and display images
imageUrls.forEach((imageUrl) => {
  const postCard = document.createElement("div");
  postCard.classList.add("post-card");

  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
    postCard.appendChild(image);
    postsContent.appendChild(postCard);
  };
});
