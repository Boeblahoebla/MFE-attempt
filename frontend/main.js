// Imports
//////////

// Import l10n & the translations
import L10n from "@tuicom/l10n/l10n"
import translations from "./l10n/translations.json";

export class Tui6mTutorialComponent extends HTMLElement {
    // Invoke the constructor
    constructor() {
        // Call the super constructor
        super();

        // Attach the shadow DOM
        this.shadow = this.attachShadow({mode: 'open'});

        // Initialize the translation by creating a new instance of L10n & passing the
        // translations & the locale attribute of the custom component to its constructor
        this.l10n = new L10n(translations, this.getAttribute("locale"));

        // Add a click listener to the component to propagate the coordinates as the payload data
        this.addEventListener("click", ev => {
            let rect = ev.target.getBoundingClientRect();

            tuiCottonBall.publish(
                "tutorial-component",
                this.getAttribute("scope") || "*",
                "click",
                { xPos : ev.clientX - rect.left,  yPos : ev.clientY - rect.top }
            )
        });

        // Add a subscriber for an external event (background.change)
        tuiCottonBall.subscribe(
            "tutorial-component",
            this.getAttribute("scope") || "*",
            "changeBackground",
            (componentName, scope, eventName, data) => {
                this.style.backgroundColor = data.color;
            }
        )
    }

    // Make the component aware of the locale, level & scope attribute
    static get observedAttributes() {
        return ['locale', 'level', 'scope']
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
                
                :host([level="safe"]) {
                    border-color: steelblue;
                }
                
                :host([level="warning"]) {
                    border-color: #ff9900
                }

                :host([level="alert"]) {
                    border-color: #900
                }
            </style>
            
            <!-- HTML markup -->
            <div>
                ${this.l10n.t("Hello World")}
            </div>
        `
    }
}


// Define the custom element by providing a name to the class
// This name can now be used as a HTML tag in the index.html file where this js file is imported
customElements.define('tui-6m-tutorial-component', Tui6mTutorialComponent);