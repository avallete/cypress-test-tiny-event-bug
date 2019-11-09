describe('event-triggering', () => {
    it('should trigger KeyboardEvent with .type', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .type");
        // Add event listener
        cy.get('#test-input').then(jQueryElement => {
            let elemHtml = jQueryElement.get(0);
            elemHtml.addEventListener('keydown', (event) => {
                console.log(`trigerred event show from cypressListener file !
                    received key: '${event.keyCode}'
                    is instanceof  KeyboardEvent ? : (${event instanceof KeyboardEvent})
                    event type: (${event.type})
                    event constructor: ${event.constructor}
                    event object: 
                `, event);
            });
        });
        cy.get('#test-input').type('A');
    });
    it('should trigger KeyboardEvent with .trigger', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .trigger");
        // Add event listener
        cy.get('#test-input').then(jQueryElement => {
            let elemHtml = jQueryElement.get(0);
            elemHtml.addEventListener('keydown', (event) => {
                console.log(`trigerred event show from cypressListener file !
                    received key: '${event.keyCode}'
                    is instanceof  KeyboardEvent ? : (${event instanceof KeyboardEvent})
                    event type: (${event.type})
                    event constructor: ${event.constructor}
                    event object: 
                `, event);
            });
        });
        cy.get('#test-input').trigger('keydown', {
            keyCode: 65,
            which: 65,
            shiftKey: false,
            ctrlKey: false
        });
    });
    it('should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement");
        // Add event listener
        cy.get('#test-input').then(jQueryElement => {
            let elemHtml = jQueryElement.get(0);
            elemHtml.addEventListener('keydown', (event) => {
                console.log(`trigerred event show from cypressListener file !
                    received key: '${event.keyCode}'
                    is instanceof  KeyboardEvent ? : (${event instanceof KeyboardEvent})
                    event type: (${event.type})
                    event constructor: ${event.constructor}
                    event object: 
                `, event);
            });
        });
        cy.get('#test-input').then(jQueryElement => {
            let elemHtml = jQueryElement.get(0);
            let kbEvent = new KeyboardEvent("keydown", {
                keyCode: 65,
                which: 65,
                shiftKey: false,
                ctrlKey: false
            });
            elemHtml.dispatchEvent(kbEvent);
        });
    });
})
