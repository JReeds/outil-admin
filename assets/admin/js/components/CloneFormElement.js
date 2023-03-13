export default class cloneFormElement {
    constructor(element) {
        this.element = element;

        this.init();
    }

    init() {
        let checkContainerPromise = new Promise((resolve, reject) => {
            const result = this.checkContainer();

            if (result === true) {
                resolve();
            } else {
                reject(result);
            }
        });

        checkContainerPromise.then(
            () => {
                this.container = this.element.querySelector('.clonable-ctn');
                this.btn       = this.element.querySelector('.clonable-btn');

                this.listenClonable();
            },
            (error) => {
                throw new Error(error);
            }
        );
    }

    checkContainer() {
        if (!this.element.classList.contains('clonable-lmt')) {
            return "Conteneur incorrect";
        }

        const container = this.element.querySelector('.clonable-ctn');
        if (!container || 
            typeof container.getAttribute('data-prototype') !== "string" ||
            container.getAttribute('data-prototype') === null
        ) {
            return "Prototype de conteneur introuvable";
        }

        const btn = this.element.querySelector('.clonable-btn');
        if (!btn) {
            return "Bouton d'ajout de clone introuvable";
        }

        return true;
    }

    listenClonable() {
        this.btn.addEventListener('click', () => {
            let prototype = this.container.getAttribute('data-prototype');
            const index   = this.container.children.length;

            prototype = prototype.replace(/__name__/g, index);
            const newForm     = document.createRange().createContextualFragment(prototype);
            const newFormNode = document.importNode(newForm, true);

            this.container.appendChild(newFormNode);
        });
    }
}