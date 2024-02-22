import { infor_project } from './dataProjects.js';
document.addEventListener("DOMContentLoaded", function () {
    const projectDiv = document.querySelector(".list_project");

    for (let i = 0; i < infor_project.length; i++) {
        const project = infor_project[i];
        const listProjectDiv = document.createElement("div");
        listProjectDiv.classList.add("item_project");

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


