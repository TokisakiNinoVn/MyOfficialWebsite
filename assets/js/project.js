let infor_project = [
    {
        linkView: "https://nino.is-a.dev/",
        img: "./assets/image/Elysia/_horizontal/Elysia(1).jpg",
        dateDev: "2023-11-02",
        source: "https://github.com/______/",
        name: "My Card Information",
        description: "My Card Information",
        language: "HTML, CSS, JS",        
    },
    {
        linkView: "https://nino.is-a.dev/MyOfficialWebsite/",
        img: "./assets/image/Elysia/_horizontal/Elysia(1).jpg",
        name: "My official website",
    },
    {
        linkView: "https://nino.is-a.dev/MyGameServiceWebsite/",
        img: "./assets/image/Elysia/_horizontal/Elysia(1).jpg",
        name: "My Game Service Website",
    },
    {
        linkView: "https://nino.is-a.dev/CharacterChampionsLeague/",
        img: "./assets/image/Elysia/_horizontal/Elysia(1).jpg",
        name: "Character Champions League",
    },
    {
        linkView: "https://nino.is-a.dev/HonkaiStarRailLoadingHTML-CSS/",
        img: "./assets/image/Elysia/_horizontal/Elysia(1).jpg",
        name: "Honkai Star Rail Loading HTML-CSS",
    },
    {
        linkView: "https://nino.is-a.dev/FreeStickersHoyolab/",
        img: "./assets/image/Elysia/_horizontal/Elysia(1).jpg",
        name: "Free sticker Hoyolab to use Discord",
    },
        {
        linkView: "https://nino.is-a.dev/Valentine_UwU/",
        img: "./assets/image/Elysia/_horizontal/Elysia(1).jpg",
        name: "Valentine 2024 | Nino & Yu",
    },


]

document.addEventListener("DOMContentLoaded", function () {
    const projectDiv = document.querySelector(".project");

    for (let i = 0; i < infor_project.length; i++) {
    const project = infor_project[i];
    const listProjectDiv = document.createElement("div");
    listProjectDiv.classList.add("list_project");

    const img = document.createElement("img");
    img.src = project.img;
    img.alt = "";
    img.classList.add("preview");

    const divLink = document.createElement("div");
    divLink.classList.add("div_link");

    const a = document.createElement("a");
    a.href = project.linkView;
    a.classList.add("link_project");

    const span = document.createElement("span");
    span.textContent = project.name;

    a.appendChild(span);
    divLink.appendChild(a);
    listProjectDiv.appendChild(img);
    listProjectDiv.appendChild(divLink);

    projectDiv.appendChild(listProjectDiv);
    }
});


