Feature: Inscription d'un nouvel utilisateur

  Scenario: Enregistrer un nouvel utilisateur avec succès
    Given que j'ouvre la page d'inscription
    When je remplis le formulaire d'inscription avec les détails nécessaires
    When que j'accepte la politique de confidentialité
    When que je soumets le formulaire
    Then je devrais voir le message de succès de l'inscription
