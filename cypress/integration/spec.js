describe('event-triggering', () => {
    it('should trigger KeyboardEvent with .type inside Cypress event listener', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .type inside Cypress event listener");
        // Add event listener
        let eventObj = {isKeyboardEvent: false};
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
                eventObj.isKeyboardEvent = (event instanceof KeyboardEvent);
            });
        });
        cy.get('#test-input').type('A');
        cy.wrap(eventObj).its('isKeyboardEvent').should('eq', true);
    });
    it('should trigger KeyboardEvent with .trigger inside Cypress event listener', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .trigger inside Cypress event listener");
        // Add event listener
        let eventObj = {isKeyboardEvent: false};
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
                eventObj.isKeyboardEvent = (event instanceof KeyboardEvent);
            });
        });
        cy.get('#test-input').trigger('keydown', {
            keyCode: 65,
            which: 65,
            shiftKey: false,
            ctrlKey: false
        });
        cy.wrap(eventObj).its('isKeyboardEvent').should('eq', true);
    });
    it('should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement inside Cypress event listener', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement inside Cypress event listener");
        // Add event listener
        let eventObj = {isKeyboardEvent: false};
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
                eventObj.isKeyboardEvent = (event instanceof KeyboardEvent);
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
        cy.wrap(eventObj).its('isKeyboardEvent').should('eq', true);
    });
    it('should trigger KeyboardEvent with .type inside html script event listener', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .type inside html script event listener");
        cy.get('#test-input').type('A');
        cy.get('#result').contains('isKeyboardEvent: true');
    });
    it('should trigger KeyboardEvent with .trigger inside html script event listener', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .trigger inside html script event listener");
        cy.get('#test-input').trigger('keydown', {
            keyCode: 65,
            which: 65,
            shiftKey: false,
            ctrlKey: false
        });
        cy.get('#result').contains('isKeyboardEvent: true');
    });
    it('should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement inside html script event listener', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement inside html script event listener");
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
        cy.get('#result').contains('isKeyboardEvent: true');
    });
    it('should trigger KeyboardEvent with .type inside both', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .type inside both");
        // Add event listener
        let eventObj = {isKeyboardEvent: false};
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
                eventObj.isKeyboardEvent = (event instanceof KeyboardEvent);
            });
        });
        cy.get('#test-input').type('A');
        cy.wrap(eventObj).its('isKeyboardEvent').should('eq', true);
        cy.get('#result').contains('isKeyboardEvent: true');
    });
    it('should trigger KeyboardEvent with .trigger inside both', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .trigger inside both");
        // Add event listener
        let eventObj = {isKeyboardEvent: false};
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
                eventObj.isKeyboardEvent = (event instanceof KeyboardEvent);
            });
        });
        cy.get('#test-input').trigger('keydown', {
            keyCode: 65,
            which: 65,
            shiftKey: false,
            ctrlKey: false
        });
        cy.wrap(eventObj).its('isKeyboardEvent').should('eq', true);
        cy.get('#result').contains('isKeyboardEvent: true');
    });
    it('should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement inside both', () => {
        cy.visit('./static/minimal-test.html');
        console.log("test: should trigger KeyboardEvent with .get.then .dispatchEvent on htmlElement inside both");
        // Add event listener
        let eventObj = {isKeyboardEvent: false};
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
                eventObj.isKeyboardEvent = (event instanceof KeyboardEvent);
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
        cy.wrap(eventObj).its('isKeyboardEvent').should('eq', true);
        cy.get('#result').contains('isKeyboardEvent: true');
    });
})
