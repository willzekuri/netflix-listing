/**
 * 
 * Professionals: 
 * - variable declaration: array of professionals
 * - get container
 * - map each element into children in container
 * 
 */
let professionals = [
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10364297/pexels-photo-10364297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Willz",
    role: "software engineer",
    qualifications: ["front-end", "backend", "devops"],
  },
];

const carouselContainer = document.getElementById("carousel-container");

professionals.map((professional, i) => {
  // Create carousel item
  const carouselItem = document.createElement("div");
  carouselItem.className = "carousel-item";
  carouselItem.style.backgroundImage = `url('${professional.imageUrl}')`;

  // Create content container
  const content = document.createElement("div");
  content.className = "content";

  // Create and populate title
  const title = document.createElement("h4");
  title.textContent = professional.title;
  content.appendChild(title);

  // Create and populate role
  const role = document.createElement("h5");
  role.textContent = professional.role;
  content.appendChild(role);

  // Create and populate qualifications
  const qualificationsContainer = document.createElement("div");
  qualificationsContainer.className = "qualifications";

  professional.qualifications.map((qualification) => {
    const qualificationDiv = document.createElement("div");
    qualificationDiv.className = "qualification";
    qualificationDiv.textContent = qualification;
    qualificationsContainer.appendChild(qualificationDiv);
  });

  content.appendChild(qualificationsContainer);
  carouselItem.appendChild(content);

  // Append the item to the carousel container
  carouselContainer.appendChild(carouselItem);
});