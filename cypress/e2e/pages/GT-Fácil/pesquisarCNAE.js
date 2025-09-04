export class PesquisarCNAE {
    acessar() {
        cy.get(':nth-child(1) > .MuiPaper-root > .MuiStack-root').click()
    }

    pesquisarCNAE() {
        cy.wait(2000)
        cy.get('input[role="combobox"][aria-autocomplete="list"]').type('Consultoria', {delay: 100})
        cy.get('.MuiAutocomplete-option').first().click()
    }

    selecionarDados() {
        cy.get(':nth-child(1) > .css-3a3hw0 > .css-axw7ok > .MuiBox-root > .css-b62m3t-container > .css-gnef1g > .css-hlgwow > .css-19bb58m').click()
        cy.wait(2000)
        cy.get('.css-s9kvdu-option').eq(9).click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .css-3a3hw0 > .css-axw7ok > .MuiBox-root > .css-b62m3t-container > .css-gnef1g > .css-hlgwow > .css-19bb58m').click()
        cy.get('#react-select-3-option-0').click()
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()

        cy.get('.MuiStack-root.css-vhq9yf > .MuiStack-root.css-1b138w3').each(($secao) => {
            cy.wrap($secao).find('.MuiButtonBase-root').click();
            this.verificarCamposTributacao();
        });
    }

    verificarCamposTributacao() {
        cy.get('.css-bbgvf9 div').each(($el, index, $list) => {
            cy.wrap($el).click({force: true});
        });
    }

    verificarSimuladorCalculo() {
        cy.get(':nth-child(2) > .css-rrzemf > .MuiBox-root > :nth-child(1)').click();
        cy.get('.css-843rij > .MuiBox-root > input').type('200').clear();

        // Garante que os elementos existam antes de começar
        cy.get('.css-1e83fk8 > .css-1g7eugn > *').should('have.length.at.least', 2);

        // Define a função recursiva
        const clickNext = (index) => {
            // Busca a lista de elementos atualizada a cada chamada
            cy.get('.css-1e83fk8 > .css-1g7eugn > *').then($elements => {
                // Condição de parada: se o índice for maior ou igual ao número de elementos
                if (index >= $elements.length) {
                    return; // Encerra a recursão
                }

                // Clica no elemento do índice atual
                cy.wrap($elements).eq(index).click();

                // Chama a função novamente para o próximo índice
                clickNext(index + 1);
            });
        };

        // Inicia a recursão a partir do segundo elemento (índice 1)
        clickNext(1);

        cy.get('.css-k008qs > .MuiButtonBase-root').click();
    }

    verificarGerarRelatorio() {
        cy.get(':nth-child(2) > .css-rrzemf > .MuiBox-root > :nth-child(2)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(1)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(3)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(5)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(2)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(4)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(6)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(1)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(3)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(5)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(2)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(4)').click()
        cy.get('.css-17nysb4 > .css-rrzemf > .MuiBox-root > :nth-child(6)').click()
        cy.get('.css-rrzemf > .MuiButton-root').click()
    }

    novaPesquisa() {
        cy.get(':nth-child(2) > .css-rrzemf > .MuiBox-root > :nth-child(3)').click()
    }
}