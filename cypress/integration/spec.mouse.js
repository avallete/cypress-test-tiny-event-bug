describe('mouse event-triggering', () => {
    it('should trigger MouseEvent with .type', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .click");
        // Add event listener
        cy.get('#test-input').then(jQueryElement => { 
            let elem = jQueryElement.get(0);
            elem.addEventListener('mousedown', (event) => {
                console.log(`trigerred event show from cypressListener file ! 
                    button clicked: '${event.button}'
                    is instanceof  MouseEvent ? : (${event instanceof MouseEvent})
                    event type: (${event.type})
                    event constructor: ${event.constructor}
                    event object: 
                    `, event);
            });
        });
        cy.get('#test-input').click();
    });
    it('should trigger MouseEvent with .trigger', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .trigger");
        // Add event listener
        cy.get('#test-input').then(jQueryElement => {
            let elem = jQueryElement.get(0);
            elem.addEventListener('mousedown', (event) => {
                console.log(`trigerred event show from cypressListener file ! 
                    button clicked: '${event.button}'
                    is instanceof  MouseEvent ? : (${event instanceof MouseEvent})
                    event type: (${event.type})
                    event constructor: ${event.constructor}
                    event object: 
                    `, event);
            });

        });
        cy.get('#test-input').trigger('mousedown', {
            button: 0,
            shiftKey: false,
            ctrlKey: false
        });
    });
    it('should trigger MouseEvent with .get.then .dispatchEvent on htmlElement', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .get.then .dispatchEvent on htmlElement");
        // Add event listener
        cy.get('#test-input').then(jQueryElement => {
            let elem = jQueryElement.get(0);
            elem.addEventListener('mousedown', (event) => {
                console.log(`trigerred event show from cypressListener file ! 
                    button clicked: '${event.button}'
                    is instanceof  MouseEvent ? : (${event instanceof MouseEvent})
                    event type: (${event.type})
                    event constructor: ${event.constructor}
                    event object: 
                    `, event);
            });

        });
        cy.get('#test-input').then(jQueryElement => {
            let elemHtml = jQueryElement.get(0);
            let mEvent = new MouseEvent("mousedown", {
                button: 0,
                shiftKey: false,
                ctrlKey: false
            });
            elemHtml.dispatchEvent(mEvent);
        });
    });
})
