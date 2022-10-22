@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('content')
    <div class="py-12">
        <div class="container">
            <div class="mx-auto lg:w-3/4">
                <div class="p-4 sm:p-6 bg-dark-400">

                    <h2 class="pl-4 mb-1 -ml-4 text-xl font-medium border-l-2 sm:pl-6 sm:-ml-6 border-primary">Titre</h2>
                    <div class="flex items-center mb-5 font-medium text-gray-600 text-md">
                        <span class="inline-flex items-center"><i ya-icon="icon: calendar;class: mr-2"></i> Last modified: 04 May 2022</span>
                    </div>

                    <h3 class="mb-3 font-medium">Introduction</h3>
                    <p>
                        <a href="https://www.benevaut.fr">www.benevaut.fr</a> est une plateforme d'information sur des sujets informatiques liés au développement et également une plateforme de gestion de projets informatiques.
                    </p>
                    <p>Dans le cadre de son activité, la société <a href="https://www.benevaut.fr">www.benevaut.fr</a>, est amenée à collecter et à traiter des informations dont certaines sont qualifiées de "données personnelles". <a href="https://www.benevaut.fr">www.benevaut.fr</a> attache une grande importance au respect de la vie privée, et n’utilise que des données de manière responsable et confidentielle et dans une finalité précise.</p>
                    <p>
                        Aujourd'hui, l'activité de préstation informatique est close le site est néanmoins ouvert pour que les anciens clients puissent poursuivre la consultation de leurs archives.
                    <ul>
                        <li>Dénomination Sociale : Antoine Benevaut</li>
                        <li>Raison Sociale : Profession libérale (close en date du 31/12/2017)</li>
                        <li>Identification SIRET : 80352602900019</li>
                        <li>Identification TVA : FR59803526029</li>
                    </ul>
                    </p>
                    <br>

                    <h3 class="mb-3 font-medium">Données personnelles</h3>
                    <p>
                        Sur le site web <a href="https://www.benevaut.fr">www.benevaut.fr</a>, il y a 2 types de données susceptibles d’être recueillies :
                    <ul>
                        <li>
                            <b>Les données transmises directement</b><br/>
                            Ces données sont celles que vous nous transmettez directement, via un formulaire de création de compte utilisateur, de contact ou bien par contact direct par email. Sont obligatoires dans le formulaire de contact le champs « civilité, prénom et nom » et « email ».
                        </li>
                        <li>
                            <b>Les données collectées automatiquement</b><br/>
                            Lors de vos visites, une fois votre consentement donné, nous pouvons recueillir des informations de type « web analytics » relatives à votre navigation, la durée de votre consultation, votre adresse IP, votre type et version de navigateur. La technologie utilisée est le cookie.
                        </li>
                    </ul>
                    </p>
                    <br>

                    <h3 class="mb-3 font-medium">Utilisation des données</h3>
                    <p>
                        Les données que vous nous transmettez directement sont utilisées dans le but de :
                    <ul>
                        <li>vous re-contacter et/ou dans le cadre de la demande que vous nous faites via notre formulaire de contact ou par courriel</li>
                        <li>de personnaliser l'interface <a href="https://www.benevaut.fr">www.benevaut.fr</a> pour une experience utilisateur optimale</li>
                    </ul>
                    Les données « web analytics » sont collectées sous forme anonyme (en enregistrant des adresses IP anonymes) par Google Analytics, et nous permettent de mesurer l'audience de notre site web, les consultations et les éventuelles erreurs afin d’améliorer constamment l’expérience des utilisateurs. Ces données sont utilisées par <a href="https://www.benevaut.fr">www.benevaut.fr</a>, responsable du traitement des données, et ne seront jamais cédées à un tiers ni utilisées à d’autres fins que celles détaillées ci-dessus.
                    </p>
                    <br>

                    <h3 class="mb-3 font-medium">Base légale</h3>
                    <p>Les données personnelles ne sont collectées qu’après consentement obligatoire de l’utilisateur. Ce consentement est valablement recueilli (boutons et cases à cocher), libre, clair et sans équivoque.</p>
                    <br>

                    <h3 class="mb-3 font-medium">Durée de conservation</h3>
                    <p>Les données seront sauvegardées durant une durée maximale de 3 ans.</p>
                    <br>

                    <h3 class="mb-3 font-medium">Cookies</h3>
                    <p>
                        Les cookies sont des fichiers texte placés sur votre ordinateur, pour aider le site internet à analyser l’utilisation du site par ses utilisateurs.<br/>
                        <a href="https://wikis.ec.europa.eu/display/WEBGUIDE/04.+Cookies#section_2">Loi sur les cookies</a>
                    </p>
                    <p>
                        Voici la liste des cookies utilisées et leur objectif :
                    <ul>
                        <li>Cookies Google Analytics (<a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">liste exhaustive</a>) : Web analytics, un service d’analyse de site internet fourni par Google Inc. (« Google ») (<a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener">plus d'information ici</a>).</li>
                        <li>"laravel_cookie_consent" : Permet de garder en mémoire le fait que vous acceptez les cookies afin de ne plus vous importuner lors de votre prochaine visite.</li>
                    </ul>
                    </p>
                    <br>

                    <h3 class="mb-3 font-medium">Vos droits concernant les données personnelles</h3>
                    <p>Vous avez le droit de consultation, demande de modification ou d’effacement sur l’ensemble de vos données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données.</p>
                    <br>

                    <h3 class="mb-3 font-medium">Contact délégué à la protection des données</h3>
                    <p>Antoine Benevaut - <a href="mailto:antoine@benevaut.fr">antoine@benevaut.fr</a></p>
                    <br>

                    <h3 class="mb-3 font-medium">Hébergement web</h3>
                    <p>[Github pages](https://pages.github.com)</p>
                    <br>

                </div>
            </div>
        </div>
    </div>
@endsection
