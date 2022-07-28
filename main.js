const imagePlaceholder = document.querySelector('.image-placeholder');
const projectType = document.querySelector('.project-type');
const descriptionPlaceholder = document.querySelector('.description-placeholder');
const urlPlaceholder = document.querySelector('.url-placeholder');
const projectList = document.querySelectorAll('.project');

projectList.forEach(function (project) {
    project.addEventListener('click', changeProjectData);
    project.addEventListener('mouseenter', changeProjectData);
});

function changeProjectData() {
    // console.log(this.id);

    if (this.dataset.type === 'Digital Ad') {
        imagePlaceholder.style.backgroundImage = `url('./assets/projects/${this.id}.gif')`;
    } else {
        imagePlaceholder.style.backgroundImage = `url('./assets/projects/${this.id}.jpg')`;
    }
    projectType.textContent = this.dataset.type;
    descriptionPlaceholder.textContent = this.dataset.description;


    if (this.dataset.url) {
        urlPlaceholder.href = this.dataset.url;
        urlPlaceholder.textContent = 'Live URL';
    } else {
        urlPlaceholder.textContent = '';
    }
}