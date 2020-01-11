console.log("Javascript connected");


export class Tui6mTutorialComponent extends HTMLElement {
    // Invoke the constructor
    constructor() {
        // Call the super constructor
        super();

        // Attach the shadow DOM
        this.shadow = this.attachShadow({mode: 'open'})
    }

    // Invoked each time the custom element is appended into a document-connected element
    connectedCallback() {
        // Add the markup & styling to the shadow DOM
        this.shadow.innerHTML = `
            <!-- Styling -->
            <style>
                :host {
                    /* The "all" property resets any CSS inherited from the outer context */
                    all: initial;
                    display: block;
                    border: 5px solid #aaa;
                    background: #daffd5;
                    padding: 20px;
                }
            </style>
            
            <!-- HTML markup -->
            <div>Hello World!</div>
        `
    }
}


// Define the custom element by providing a name to the class
// This name can now be used as a HTML tag in the index.html file where this js file is imported
customElements.define('tui-6m-tutorial-component', Tui6mTutorialComponent);