import * as constans from '../locators/locators_airportLabs'

describe('AirportLabs tests', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  //Scenario 1:
  it('First title name has the required design properties', () => {
    cy.visit('https://airportlabs.com/')
    cy.get(constans.first_title).should('have.text', 'Making aviation more efficient')
    cy.get(constans.first_title).should('have.css', 'font-style', 'normal').and('have.css', 'font-size', '42px')
  })

  //Scenario 2:
  it('VisionAir FIDS section contains the required statistics ', () => {
    cy.visit('https://airportlabs.com/')
    cy.get(constans.section_title).should('have.text', 'VisionAir FIDS').and('have.css', 'font-size', '30px')
    cy.get(constans.screens_number).should('have.text', '5.1K')
    cy.get(constans.screens_description).should('have.text', 'Screens live \n in 6 Airports')
    cy.get(constans.journeys_number).should('have.text', '154M')
    cy.get(constans.journeys_description).should('have.text', 'Journeys managed \n every year')
})

  //Scenario 3:
  it('GET IN TOUCH section is usable', () => {
    cy.visit('https://airportlabs.com/')
    cy.get(constans.get_in_touch_mail).should('have.attr', 'href', 'mailto:contact@airportlabs.com').and('be.visible')
    //Email app is displayed if I click on the link but it is not opened in the browser and I can not verify that the company 
    //email is usable in the mail browser, so I checked that the locator has a href.
  })

  //Scenario 4:
  it('Social media links are redirecting user to the required pages', () => {
    cy.visit('https://airportlabs.com/')
    //twitter
    cy.get(constans.twitter_button).click()
    cy.get(constans.twitter_accept, {timeout: 5000}).should('be.visible').click()
    cy.url().should('include', 'twitter.com/airportlabs')
    cy.go(-1)
    //linkedIn
    cy.get(constans.linkedIn_button).click()
    cy.url().should('include', 'linkedin.com')
    cy.go(-1)
    //facebook
    cy.get(constans.facebook_button).click()
    cy.get(constans.facebook_accept, {timeout: 5000}).should('be.visible').click()
    cy.get(constans.facebook_reload).click()    
    cy.get(constans.facebook_accept).click()
    cy.get(constans.facebook_userName).should('have.text', 'AirportLabs Ltd.')
  })

  //Scenario 5:
  it('AirportLabs image has the required properties', () => {
    cy.visit('https://airportlabs.com/')
    cy.get(constans.airportlabs_img).then(($img) => {
      const width = $img[0].naturalWidth
      const height = $img[0].naturalHeight
      expect(width).to.equal(150)
      expect(height).to.equal(78)
    })
  })
})
