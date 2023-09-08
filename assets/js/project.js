let infor_project = [
    {
        url: "https://nino.is-a.dev/MyOfficialWebsite/",
        img: "./assets/image/Ai.jpg",
        name: "My official website",
    },
    {
        url: "https://nino.is-a.dev/MyGameServiceWebsite/",
        img: "./assets/image/Ai.jpg",
        name: "My Game Service Website",
    },
    {
        url: "https://nino.is-a.dev/CharacterChampionsLeague/",
        img: "./assets/image/Ai.jpg",
        name: "Character Champions League",
    },
    {
        url: "https://nino.is-a.dev/HonkaiStarRailLoadingHTML-CSS/",
        img: "./assets/image/Ai.jpg",
        name: "Honkai Star Rail Loading HTML-CSS",
    },

]

document.addEventListener("DOMContentLoaded", function () {
    const mainDiv = document.querySelector(".main");
  
    for (let i = 0; i < infor_project.length; i++) {
      const project = infor_project[i];
      const listProjectDiv = document.createElement("div");
      listProjectDiv.classList.add("list_project");
  
      const img = document.createElement("img");
      img.src = project.img;
      img.alt = "";
      img.classList.add("preview");
  
      const a = document.createElement("a");
      a.href = project.url;
      a.classList.add("link_project");
      a.textContent = project.name;
  
      listProjectDiv.appendChild(img);
      listProjectDiv.appendChild(a);
  
      mainDiv.appendChild(listProjectDiv);
    }
  });
  