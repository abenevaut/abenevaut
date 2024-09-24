Un element "panneau" masque le bouton entree.

on tombe sur:
```

    var bouton = document.querySelector('.valider-billet');
    var billet = document.querySelector('.billet');
    window.validable = [];
    bouton.addEventListener('click', function() {
        if (window.validable.includes(billet.id)) {
            fetch('/set_cookie', {method: 'POST'}).then(function() {
                window.location.href = "/devant-le-match";
            });
        } else {
            alert('Billet non validé');
        }
    });
```

Dans la console -> billet.id === '053HJ28LOS'

window.validable.push('053HJ28LOS')

soumettre la validation

un call est fait a https://en-retard.challenges.404ctf.fr/set_cookie

nouveau cookie -> allergies -> 404CTF{gluten-sucre-au-sucre}
