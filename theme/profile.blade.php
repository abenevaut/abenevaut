@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('content')
<div class="flex flex-col items-center justify-center px-6 py-8 sm:flex-row bg-primary-400">
    <h2 class="mb-4 text-lg font-medium leading-tight text-center sm:text-left sm:mb-0 sm:leading-normal">#OPENTOWORK</h2>
    <a class="flex items-center px-4 py-2 text-sm font-bold text-white uppercase bg-white bg-opacity-0 border border-white border-solid sm:ml-6 border-opacity-10 hover:border-opacity-20 hover:bg-opacity-1" href="https://www.linkedin.com/in/abenevaut/" role="button" target="_blank">
        Connect on <i ya-icon="icon: linkedin;class: ml-3;"></i>
    </a>
</div>
<div class="pb-5 sm:py-6 md:py-12">
    <div class="container">
        <div class="grid grid-cols-1 lg:gap-4 lg:grid-cols-5">

            <div class="order-first col-span-1 lg:mb-0">
                <h2 class="inline-block px-3 py-2 mb-5 text-sm font-bold text-white uppercase border-l-2 bg-dark-400 border-primary">{{ $bio['title'] }}</h2>
                <div class="p-4 mb-8 bg-dark-400">
                    <p class="mb-5 text-md">{{ $bio['description'] }}</p>
                    <ul class="mb-5 text-md">
                        @foreach ($bio['links'] as $link)
                        <li class="flex items-center mb-1">
                            @if (isset($link['url']))
                            <a class="flex items-center hover:text-primary hover:underline" href="{{ $link['url'] }}" target="_blank">
                                <i ya-icon="icon: {{ $link['icon'] }};class: mr-2;"></i>{{ $link['text'] }}
                            </a>
                            @else
                            <i ya-icon="icon: {{ $link['icon'] }};class: mr-2;"></i>{{ $link['text'] }}
                            @endif
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>

            <div class="col-span-1 mb-8 lg:col-span-3 lg:order-none lg:mb-0">
                <h2 class="inline-block px-3 py-2 mb-5 text-sm font-bold text-white uppercase border-l-2 bg-dark-400 border-primary">{{ $feed['title'] }}</h2>

                @foreach ($feed['company'] as $company)
                <div class="flex p-4 mb-px bg-dark-400">
                    <img class="w-12 h-12" src="{{ $company['logo'] }}" alt="{{ $company['name'] }} - {{ $company['position'] }}">
                    <div class="flex flex-col ml-4">
                        <h3 class="font-medium text-md text-primary">{{ $company['name'] }} - {{ $company['position'] }}</h3>
                        <span class="text-sm">{{ $company['period'] }}</span>
                    </div>
                </div>
                <div class="p-4 bg-dark-400">
                    <p class="text-md pb-3">{!! nl2br($company['description']) !!}</p>
                    <ul class="pl-6 py-3 list-disc sm:pl-8">
                        @foreach ($company['missions'] as $mission)
                        <li>{{ $mission }}</li>
                        @endforeach
                    </ul>
                    <p class="text-md py-3 last:pb-0">
                        @foreach ($company['stack'] as $technology)
                        <span class="inline-block px-3 py-1 mb-3 text-white bg-primary font-bold text-2xs uppercase">{{ $technology }}</span>
                        @endforeach
                    </p>
                    @if (isset($company['capture']))
                    <img class="py-3 last:pb-0" src="{{ $company['capture'] }}" alt="{{ $company['name'] }}">
                    @endif
                </div>
                <div class="flex justify-between p-4 mt-px bg-dark-400 mb-5">
                </div>
                @endforeach

            </div>

            <div class="col-span-1">
                <h2 class="inline-block px-3 py-2 mb-5 text-sm font-bold text-white uppercase border-l-2 bg-dark-400 border-primary">Projects</h2>
                @foreach ($projects as $project)
                <div class="flex p-3 mb-px bg-dark-400">
                    <a class="w-8 h-8" href="{{ $project['url'] }}" target="_blank">
                        <img src="{{ $project['logo'] }}" alt="{{ $project['name'] }}">
                    </a>
                    <div class="flex flex-col ml-4">
                        <a class="mb-1 text-sm font-medium hover:underline text-primary" href="{{ $project['url'] }}" target="_blank">
                            {{ $project['name'] }}
                        </a>
{{--                        <span class="text-sm">5 minutes ago</span>--}}
                    </div>
                    <div class="ml-auto">
                        <a class="inline-flex items-center p-2 text-xs font-medium text-white uppercase border border-white border-opacity-5 text-opacity-90 hover:border-opacity-10 hover:text-opacity-100" href="{{ $project['url'] }}" role="button" target="_blank">
                            <i ya-icon="icon: link;size: 14;"></i>
                        </a>
                    </div>
                </div>
                @endforeach
            </div>

        </div>
    </div>
</div>
@endsection
