@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('content')
    <div class="py-12">
        <div class="container">
            <div class="mx-auto lg:w-3/4">
                <div class="p-4 sm:p-6 bg-dark-400">

                    <h2 class="pl-4 mb-1 -ml-4 text-xl font-medium border-l-2 sm:pl-6 sm:-ml-6 border-primary">Terms of Services</h2>

                    <div class="flex items-center mb-5 font-medium text-gray-600 text-md">
                        <span class="inline-flex items-center"><i ya-icon="icon: calendar;class: mr-2"></i> Last modified: 22 October 2022</span>
                    </div>

                    <h3 class="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 border-primary">Introduction</h3>
                    <p><a class="inline-block text-primary hover:underline" href="/">www.abenevaut.dev</a> est une plateforme d'information sur des sujets informatiques liés au développement et une plateforme de gestion de projets informatiques.</p>
                    <br/>
                    <p>Aujourd'hui, l'activité de préstation informatique est close le site est néanmoins ouvert pour que les anciens clients puissent poursuivre la consultation de leurs archives.</p>
                    <br/>
                    <ul class="pl-6 list-disc sm:pl-8">
                        <li>Dénomination Sociale : Antoine Benevaut</li>
                        <li>Raison Sociale : Profession libérale (close en date du 31/12/2017)</li>
                        <li>Identification SIRET : 80352602900019</li>
                        <li>Identification TVA : FR59803526029</li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center px-6 py-8 sm:flex-row bg-primary-400">
        <h2 class="mb-4 text-lg font-medium leading-tight text-center sm:text-left sm:mb-0 sm:leading-normal">Read also the privacy policy</h2>
        <a class="flex items-center px-4 py-2 text-sm font-bold text-white uppercase bg-white bg-opacity-0 border border-white border-solid sm:ml-6 border-opacity-10 hover:border-opacity-20 hover:bg-opacity-1" href="privacy.html" role="button">
            Privacy policy
        </a>
    </div>
@endsection
