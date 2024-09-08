Feature: Remove an item from the shopping cart

  Scenario: Successfully remove a product from the cart
    Given que je connecte à l'application
    When j'ajoute un produit au panier
    When je retire le produit du panier
    Then je devrais voir un message indiquant que le panier est vide
