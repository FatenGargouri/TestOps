Feature: Ajouter un produit au panier

  Scenario: Ajouter un produit avec succès
    Given que je suis connecté à l'application
    When je recherche un produit "MacBook"
    When j'ajoute le produit au panier
    Then je devrais voir un message de succès contenant "Success: You have added MacBook to your shopping cart!"
