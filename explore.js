const interests = [
    {
      name: "Travel",
      image: "Photos/explore-1.jpg"
    },
    {
      name: "Food",
      image: "Photos/explore-2.jpg"
    },
    {
      name: "Fashion",
      image: "Photos/explore-3.jpg"
    },
    {
      name: "Sports",
      image: "Photos/explore-4.jpg"
    }
  ];
  
  const interestsContainer = document.querySelector(".interests-container");
  
  interests.forEach(interest => {
    const interestElement = document.createElement("div");
    interestElement.classList.add("interest");
  
    const imageElement = document.createElement("img");
    imageElement.src = interest.image;
    imageElement.alt = interest.name;

    
  imageElement.style.width = "200px"; // set a fixed width
  imageElement.style.height = "200px"; // set a fixed height
  
    const nameElement = document.createElement("h3");
    nameElement.textContent = interest.name;
  
    interestElement.appendChild(imageElement);
    interestElement.appendChild(nameElement);
    interestsContainer.appendChild(interestElement);
  });
  