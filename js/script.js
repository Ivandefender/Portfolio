import { addContent, addInfoSkills, addInfoProjects } from "./loadInfo.js";

const importPortfolioData = await addContent();

addInfoSkills(importPortfolioData.skills);
addInfoProjects(importPortfolioData.projects);

const contactMeBtns = document.querySelectorAll("#contactMe");
const footer = document.querySelector(".footer");

contactMeBtns.forEach(contactBtn =>{
    contactBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: footerPosition,
            behavior: 'smooth'
        });
    })
})
