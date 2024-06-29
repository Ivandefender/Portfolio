const dataUrl = "./data.json";

export async function addContent() {
  const responce = await fetch(dataUrl);
  let portfolioData = await responce.json();
  return portfolioData;
}

export function addInfoProjects(projectsData) {
  let projectsSection = document.createElement("section");
  projectsSection.className = "projects";
  projectsSection.innerHTML = `
     <div class="container">
        <article class="projects__header">
            <h1>Projects</h1>
            <a class="link" id="contactMe" href="">Contact me</a>
        </article>
        ${projectsContent(projectsData)}
    </div>
      `;
  document.querySelector(".main").appendChild(projectsSection);
}

function projectsContent(projectsData) {
  let projectsInner = document.createElement("div");
  projectsInner.className = "projects__inner";
  projectsData.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "projects__item";
    projectItem.innerHTML = `
        <div class="item__screen" style="background-image: url(Portfolio/${project.img})">
            <div class="item__color">
                <a class="link" href="${
                  project.info[0].projectURLSite
                }">VIEW PROJECT</a>
                <a class="link" href="${
                  project.info[0].projectCode
                }">VIEW CODE</a>
            </div>
        </div>
        <h4>${project.title}</h4>
        ${addStackTech(project.info[0].stack)}
        `;
    projectsInner.appendChild(projectItem);
  });
  return projectsInner.outerHTML;
}

function addStackTech(stackArr) {
  let stackInner = document.createElement("div");
  stackInner.className = "item__tech";
  stackArr.forEach((stackItem) => {
    const techItem = document.createElement("span");
    techItem.textContent = stackItem;
    stackInner.appendChild(techItem);
  });
  return stackInner.outerHTML;
}

export function addInfoSkills(skillsData) {
  let infoSection = document.createElement("section");
  infoSection.className = "skills";
  infoSection.innerHTML = `
    <div class="container">
        <hr>
        ${skillsContent(skillsData)}
    </div>
    `;
  document.querySelector(".main").appendChild(infoSection);
}

function skillsContent(skillsData) {
  let skillsInner = document.createElement("div");
  skillsInner.className = "skills__inner";
  skillsData.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skills__item";
    skillItem.innerHTML = `
        <h3>${skill.skill}</h3>
        <p>${skill.experience} Experience</p>
        `;
    skillsInner.appendChild(skillItem);
  });
  return skillsInner.outerHTML;
}
