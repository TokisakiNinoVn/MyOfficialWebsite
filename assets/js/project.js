import { infor_project } from './dataProjects.js';
document.addEventListener("DOMContentLoaded", function () {
    // const projectDiv = document.querySelector(".list_project");

    for (let i = 0; i < infor_project.length; i++) {
        const project = infor_project[i];

        if (flagNumber(project.flagNumber) == true) {
            showProjectOddNumber(project);
        } else {
            showProjectEvenNumber(project);
        }
        // const listProjectDiv = document.createElement("div");
        // listProjectDiv.classList.add("item_project");

        // const img = document.createElement("img");
        // img.src = project.img;
        // img.alt = "";
        // img.classList.add("preview");

        // const divLink = document.createElement("div");
        // divLink.classList.add("div_link");

        // const a = document.createElement("a");
        // a.href = project.linkView;
        // a.classList.add("link_project");

        // const span = document.createElement("span");
        // span.textContent = project.name;

        // a.appendChild(span);
        // divLink.appendChild(a);
        // listProjectDiv.appendChild(img);
        // listProjectDiv.appendChild(divLink);
        // projectDiv.appendChild(listProjectDiv);
    }
});

function flagNumber(value) { 
    if (value%2 == 1) return true;
    else return false;
}


function showProjectEvenNumber(infor_project) {
    const html = `
        <div href=" ${infor_project.linkView} " class="item_project">
            <div class="div_for_img">
                <img src="${infor_project.img}" alt="Img Project" class="preview">
            </div>
            <div class="content_project">
                <div class="top_content">
                    <div class="first_update">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <span class="value_dayupdate">${infor_project.dateDev}</span>
                    </div>
                    <div class="collection">
                        <ion-icon name="bookmark-outline"></ion-icon>
                        <span class="value_colection">${infor_project.collection}</span>
                    </div>
                </div>
                <div class="tittle_project">
                    <span class="value_tittle">${infor_project.name}</span>
                    <span class="value_description">${infor_project.description}</span>
                </div>
                <div class="kjww_amw">
                    <div class="wiuk_language mawh">
                        <ion-icon name="repeat-outline"></ion-icon>
                        <span class="value_language wkuj_wiue">${infor_project.language}</span>
                    </div>
                    <div class="mawh">
                        <ion-icon name="eye-outline"></ion-icon>
                        <span class="wkuj_wiue">View</span>
                    </div>
                    <div class="mawh">
                        <ion-icon name="code-slash-outline"></ion-icon>
                        <span class="">Source</span>
                    </div>
                </div>
                </div>
                <a href="${infor_project.linkView}" target="_blank" rel="noopener noreferrer" class="more_information_project">
                    <span class="view_more_p">More</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
            </div>
    `
    const projectDiv = document.querySelector(".list_project");
    projectDiv.insertAdjacentHTML("beforeend", html);

}


function showProjectOddNumber(infor_project) {
    const html = `
        <div href=" ${infor_project.linkView} " class="item_project">
            <div class="content_project">
                <div class="top_content top_content_">
                    <div class="first_update">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <span class="value_dayupdate">${infor_project.dateDev}</span>
                    </div>
                    <div class="collection">
                        <ion-icon name="bookmark-outline"></ion-icon>
                        <span class="value_colection">${infor_project.collection}</span>
                    </div>
                </div>
                <div class="tittle_project">
                    <span class="value_tittle">${infor_project.name}</span>
                    <span class="value_description">${infor_project.description}</span>
                </div>
                <div class="kjww_amw">
                    <div class="wiuk_language mawh">
                        <ion-icon name="repeat-outline"></ion-icon>
                        <span class="value_language wkuj_wiue">${infor_project.language}</span>
                    </div>
                    <div class="mawh">
                        <ion-icon name="eye-outline"></ion-icon>
                        <span class="wkuj_wiue">View</span>
                    </div>
                    <div class="mawh">
                        <ion-icon name="code-slash-outline"></ion-icon>
                        <span class="">Source</span>
                    </div>
                </div>
                </div>
                <div class="div_for_img div_for_img_">
                    <img src="${infor_project.img}" alt="Img Project" class="preview">
                </div>
                <a href="${infor_project.linkView}" target="_blank" rel="noopener noreferrer" class="more_information_project more_information_project_">
                    <span class="view_more_p">More</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>

            </div>
    `
    const projectDiv = document.querySelector(".list_project");
    projectDiv.insertAdjacentHTML("beforeend", html);
    // const project = infor_project[0];
    // const listProjectDiv = document.createElement("div");
    // listProjectDiv.classList.add("item_project");

    // const img = document.createElement("img");
    // img.src = project.img;
    // img.alt = "";
    // img.classList.add("preview");

    // const divLink = document.createElement("div");
    // divLink.classList.add("div_link");

    // const a = document.createElement("a");
    // a.href = project.linkView;
    // a.classList.add("link_project");

    // const span = document.createElement("span");
    // span.textContent = project.name;

    // a.appendChild(span);
    // divLink.appendChild(a);
    // listProjectDiv.appendChild(img);
    // listProjectDiv.appendChild(divLink);
    // projectDiv.appendChild(listProjectDiv);
}
