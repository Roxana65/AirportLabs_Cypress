import { concatAll } from 'rxjs';
import * as constans from '../locators/locators_e_commerce'

describe('Add required items to cart tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    it('Add to cart LG TV and LG remote successfully', () => {
        cy.visit('https://www.emag.ro/')
        cy.get(constans.search_box).type('LG TV{enter}')
        cy.get(constans.QNED_option).click()
        cy.get(constans.three_stars_option).click()
        cy.wait(2000)
        cy.get(constans.sort_dropdown).click({force:true})
        cy.get(constans.descrescator_option).click({force:true})
        cy.wait(2000)
        cy.get(constans.add_to_cart_button).click()
        cy.get(constans.confirmation_message).should('have.text', 'Produsul a fost adaugat in cos')
        cy.get(constans.x_button).click()
        cy.get(constans.search_box).clear().type('remote{enter}')
        cy.get(constans.LG_option).click()
        cy.get(constans.three_stars_option).click()
        cy.wait(2000)
        cy.get(constans.sort_dropdown).click({force:true})
        cy.get(constans.crescator_option).click({force:true})
        cy.wait(2000)
        cy.get(constans.add_to_cart_button).click()
        cy.get(constans.detalii_cos_button).click()
        cy.get(constans.cart_remote).should('be.visible')
        cy.get(constans.cart_TV).should('be.visible') 
    })
})
