![https://pixabay.com/photos/gravel-pit-aggregates-machinery-4798593/](2024‐06‐17-000-Install-PHP-on-Windows.jpg)

- https://gist.github.com/abenevaut/149adce59c6dd68da3eda8699888e624

# On installe PHP sur votre machine Windows

| published at | 2024-07-23 |
|--------------|------------|
| updated at   | 2024-06-17 |

À ce jour, Windows détient environ 69% de part de marché des systèmes d'exploitation pour les ordinateurs de bureau ([Wikipédia le 18 juin 2024](https://fr.wikipedia.org/wiki/Part_d%27utilisation_des_systèmes_d%27exploitation)).

Alors toi, lecteur qui débute dans le développement, il y a de fortes chances que tu sois sur Windows.

Il est courant de commencer par PHP pour démarrer l'apprentissage du développement, notamment web.

Ce langage est suffisamment haut niveau pour vous retirer les contraintes les plus avancées en développement tout en vous permettant de visualiser rapidement un résultat.

Ce bon ratio complexité/satisfaction permet généralement de rester motivé et d'avancer dans son apprentissage.

L'équipe de développement de PHP entretien un site dédié à la version Windows de PHP [windows.php.net](https://windows.php.net), ou vous pourrez télécharger la dernière version de PHP pour Windows.

Pour l'installer correctement, quelques manipulations seront nécessaire, on les découvre ensemble. 

## Passons à l'action !

Rendez-vous sur [windows.php.net/download](https://windows.php.net/download) pour consulter la liste des versions disponibles.

Dans cet article, nous allons installer PHP 8.3.8. Peut-être que vous aurez une version plus récente à l'heure de votre lecture, mais les étapes resteront les mêmes (ou pourront être mise à jour).

Il est important que vous connaissiez l'architecture de votre processeur, x86 ou x64, pour choisir la bonne version de PHP. Il est tout de même très probable que vous ayez un processeur x64, mais il est bon de le vérifier (pour connaitre cette information, consultez les propriétés de votre ordinateur dans le panneau de configuration).

Une fois toutes ces informations réunies, on se rend dans la section "PHP 8.3.8 (8.3.8)".

On y voit sous le titre deux liens pour télécharger le code source et les tests, cela ne nous intéresse pas pour ce tutoriel.

Puis, on peut voir dans cette section 4 encadrements gris, identifier par un sous-titre, comme "VS16 x64 Non Thread Safe" ou encore "VS16 x86 Thread Safe".

Pour notre cas, nous allons choisir "VS16 x64 Non Thread Safe", car notre machine a un processeur x64. Si vous avez un processeur x86, vous choisirez "VS16 x86 Non Thread Safe".

> Pour information, le "VS16" est la version de Visual Studio utilisée pour compiler PHP. 
> Pour information, le "Non Thread Safe" est la version de PHP qui ne supporte pas les threads, c'est-à-dire les processus en parallèle.
> Cela ne nous concerne pas pour le moment, mais c'est bon à savoir.

Bien, maintenant que nous connaissons notre version, on clique sur le lien "Zip" pour télécharger une version de PHP prête à l'emploi.

![](../../laravel-france-articles/2024‐06‐17-000-Install-PHP-on-Windows/2024‐06‐17-001-Install-PHP-on-Windows.png)
![](https://cdn.laravel-france.com/images/pictures/9c54cf6e-07ec-47cf-9487-afe0f8bfb486.png)

Une fois le téléchargement terminé, vous disposez d'un fichier `php-8.3.8-nts-Win32-vs16-x64.zip` que nous allons décompresser le fichier dans le dossier `C:\php-8.3.8-nts-Win32-vs16-x64`.

Je vous recommande de choisir ce chemin, sans espace (cela pose parfois problème) et qui indique clairement la version, cela vous facilitera le travail de mise à jour.

Placez-vous maintenant dans le dossier `C:\php-8.3.8-nts-Win32-vs16-x64` et copiez le fichier `php.ini-development` en `php.ini`.

Ouvrez le fichier `php.ini` avec votre éditeur de texte préféré et décommentez (il suffira de supprimer le ";" en début de ligne) les lignes suivantes :

```
extension_dir = "ext"
extension=fileinfo
extension=openssl
extension=pdo_sqlite
extension=zip
```

Les extensions `openssl` et `zip` sont des nécessaires pour installer et utiliser Composer, un gestionnaire de dépendances pour PHP que nous allons installer par la suite.

Les extensions `fileinfo` et `pdo_sqlite` sont quant à elles nécessaire pour Laravel.

Rendons maintenant PHP accessible depuis n'importe quel terminal de commande Windows.

Pour cela, nous allons ajouter le chemin de PHP dans les variables d'environnement de Windows.

Commencez par ouvrir le menu "démarré" de Windows et recherchez "env"

> Une alternative est d'ouvrir le panneau de configuration, puis cliquez sur "Système et sécurité" et enfin sur "Système".

![](../../laravel-france-articles/2024‐06‐17-000-Install-PHP-on-Windows/2024‐06‐17-010-Install-PHP-on-Windows.png)
![](https://cdn.laravel-france.com/images/pictures/6e9a89c6-c155-4f62-9743-1829b706ea74.png)

![](../../laravel-france-articles/2024‐06‐17-000-Install-PHP-on-Windows/2024‐06‐17-011-Install-PHP-on-Windows.png)
![](https://cdn.laravel-france.com/images/pictures/1103b455-c22a-40dd-ad44-7f4da8fdfe12.png)

Dans la liste des variables système, recherchez la ligne "Path" et double cliquez dessus.

![](../../laravel-france-articles/2024‐06‐17-000-Install-PHP-on-Windows/2024‐06‐17-012-Install-PHP-on-Windows.png)
![](https://cdn.laravel-france.com/images/pictures/3c58471f-8c07-405f-968e-d0586a74c1b8.png)

Enfin, ajoutez le chemin de PHP `C:\php-8.3.8-nts-Win32-vs16-x64`.

![](../../laravel-france-articles/2024‐06‐17-000-Install-PHP-on-Windows/2024‐06‐17-013-Install-PHP-on-Windows.png)
![](https://cdn.laravel-france.com/images/pictures/b3fe920f-0912-4fb9-917d-3f1b7b6b79eb.png)

Pour valider que l'installation est réussie, ouvrez un terminal (Powershell par exemple) de commande Windows et tapez `php -v`, vous devriez voir s'afficher la version de PHP installée.

**Attention**, si cela ne fonctionne pas et vous éditez votre "Path" à nouveau, vous devrez fermer et ouvrir à nouveau votre terminal.

Passons maintenant à l'installation de composer, plus simple et assistée.

Rendez-vous dans la section de téléchargement de [Composer pour Windows](https://getcomposer.org/doc/00-intro.md#installation-windows) pour télécharger le fichier `Composer-Setup.exe`, que vous verrez apparaitre en bleu en haut de page.

Une fois le téléchargement terminé, lancez le fichier `Composer-Setup.exe` et suivez les instructions.

Pour valider que l'installation est réussie, ouvrez un terminal de commande Windows et tapez `composer -v`, vous devriez voir s'afficher la version de Composer installée.

Si jusqu'ici tout a fonctionné, vous êtes prêt à commencer à développer en PHP sur votre machine Windows.

Dans un terminal, placez-vous dans votre repertoire de projet et tapez `composer create-project laravel/laravel mon-projet`.

Une fois le processus d'installation de votre projet Laravel, placez-vous dans le dossier de votre projet et tapez `php artisan serve`.

Votre site démarre et est accessible via votre navigateur à l'adresse `http://localhost:8000`.

Il ne vous reste plus qu'à ouvrir votre éditeur de texte préféré et commencer à coder !
