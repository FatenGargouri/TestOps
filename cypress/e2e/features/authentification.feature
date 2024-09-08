Feature: Authentification à l'application OpenCart

  Scenario: Connexion réussie avec des informations valides
    Given Je suis sur la page de connexion
    When Je saisis un email "test.qa@dispostable.com" et un mot de passe "Cypress123!!"
    And Je clique sur le bouton "Connexion"
    Then Je devrais être redirigé vers la page du tableau de bord

