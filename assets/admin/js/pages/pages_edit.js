import CloneFormElement from "../components/CloneFormElement.js";
require('../../css/pages/pages_edit.scss');

class PageEdit {
    constructor(container) {
        this.container = container;

        this.init();
    }

    init() {
        const clonableContainers = this.container.querySelectorAll('.clonable-lmt');

        Object.keys(clonableContainers).forEach((key) => {
            try {
                new CloneFormElement(clonableContainers[key]);
            } catch (e) {
                console.error(e);
            }
        });
    }
}

new PageEdit(document.querySelector('#admin_page'));