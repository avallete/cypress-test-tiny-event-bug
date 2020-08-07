describe('mouse event-triggering', () => {
    it('should trigger MouseEvent with .click inside Cypress event listener', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .click inside Cypress event listener");
        // Add event listener
        let eventObj = {isMousedEvent: false};
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
                eventObj.isMouseEvent = (event instanceof MouseEvent);
            });
        });
        cy.get('#test-input').click();
        cy.wrap(eventObj).its('isMouseEvent').should('eq', true);
    });
    it('should trigger MouseEvent with .trigger inside Cypress event listener', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .trigger inside Cypress event listener");
        // Add event listener
        let eventObj = {isMousedEvent: false};
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
                eventObj.isMouseEvent = (event instanceof MouseEvent);
            });

        });
        cy.get('#test-input').trigger('mousedown', {
            button: 0,
            shiftKey: false,
            ctrlKey: false
        });
        cy.wrap(eventObj).its('isMouseEvent').should('eq', true);
    });
    it('should trigger MouseEvent with .get.then .dispatchEvent on htmlElement inside Cypress event listener', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .get.then .dispatchEvent on htmlElement inside Cypress event listener");
        // Add event listener
        let eventObj = {isMousedEvent: false};
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
                eventObj.isMouseEvent = (event instanceof MouseEvent);
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
        cy.wrap(eventObj).its('isMouseEvent').should('eq', true);
    });
    it('should trigger MouseEvent with .click inside html script event listener', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .click inside html script event listener");
        cy.get('#test-input').click();
        cy.get('#result').contains('isMouseEvent: true');
    });
    it('should trigger MouseEvent with .trigger inside html script event listener', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .trigger inside html script event listener");
        cy.get('#test-input').trigger('mousedown', {
            button: 0,
            shiftKey: false,
            ctrlKey: false
        });
        cy.get('#result').contains('isMouseEvent: true');
    });
    it('should trigger MouseEvent with .get.then .dispatchEvent on htmlElement inside html script event listener', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .get.then .dispatchEvent on htmlElement inside html script event listener");
        cy.get('#test-input').then(jQueryElement => {
            let elemHtml = jQueryElement.get(0);
            let mEvent = new MouseEvent("mousedown", {
                button: 0,
                shiftKey: false,
                ctrlKey: false
            });
            elemHtml.dispatchEvent(mEvent);
        });
        cy.get('#result').contains('isMouseEvent: true');
    });
    it('should trigger MouseEvent with .click inside both', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .click inside both");
        // Add event listener
        let eventObj = {isMousedEvent: false};
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
                eventObj.isMouseEvent = (event instanceof MouseEvent);
            });
        });
        cy.get('#test-input').click();
        cy.wrap(eventObj).its('isMouseEvent').should('eq', true);
        cy.get('#result').contains('isMouseEvent: true');
    });
    it('should trigger MouseEvent with .trigger inside both', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .trigger inside both");
        // Add event listener
        let eventObj = {isMousedEvent: false};
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
                eventObj.isMouseEvent = (event instanceof MouseEvent);
            });

        });
        cy.get('#test-input').trigger('mousedown', {
            button: 0,
            shiftKey: false,
            ctrlKey: false
        });
        cy.wrap(eventObj).its('isMouseEvent').should('eq', true);
        cy.get('#result').contains('isMouseEvent: true');
    });
    it('should trigger MouseEvent with .get.then .dispatchEvent on htmlElement inside both', () => {
        cy.visit('./static/minimal-mouse-test.html');
        console.log("test: should trigger MouseEvent with .get.then .dispatchEvent on htmlElement inside both");
        // Add event listener
        let eventObj = {isMousedEvent: false};
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
                eventObj.isMouseEvent = (event instanceof MouseEvent);
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
        cy.wrap(eventObj).its('isMouseEvent').should('eq', true);
        cy.get('#result').contains('isMouseEvent: true');
    });
})
