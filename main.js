const imagePlaceholder = document.querySelector('.image-placeholder');
const descriptionPlaceholder = document.querySelector('.description-placeholder');
const urlPlaceholder = document.querySelector('.url-placeholder');
const projectList = document.querySelectorAll('.project');

projectList.forEach(function (project) {
    project.addEventListener('click', changeProjectData);
    project.addEventListener('mouseenter', changeProjectData);
});

function changeProjectData() {
    // console.log(this.id);
    imagePlaceholder.style.backgroundImage = `url('./assets/projects/${this.id}.gif')`;
    descriptionPlaceholder.textContent = this.dataset.description;

    if (this.dataset.url) {
        urlPlaceholder.href = this.dataset.url;
        urlPlaceholder.textContent = 'Live URL';
    } else {
        urlPlaceholder.textContent = '';
    }
}