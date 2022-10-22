@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('content')

    <div class="py-0 sm:py-8 lg:py-12 pb-12">
        <div class="container">
            <h2 class="inline-block px-3 py-2 mx-4 mb-6 text-sm font-bold uppercase sm:mx-0 bg-dark-400">{{ $portfolio['title'] }}</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                @foreach($portfolio['projects'] as $project)
                <div>
                    <img class="w-full" src="{{ $project['capture'] }}" alt="{{ $project['title'] }} - {{ $project['brief'] }}">
                    <div class="p-3 sm:p-5 bg-dark-400">
                        <h3 class="mb-2 font-medium leading-tight">
                            @if ($project['url'])
                            <a class="inline-block hover:text-primary hover:underline" href="{{ $project['url'] }}" target="_blank">
                                {{ $project['title'] }}
                            </a>
                            @else
                            <span class="inline-block hover:text-primary hover:underline" href="{{ $project['url'] }}" target="_blank">
                                {{ $project['title'] }}
                            </span>
                            @endif
                        </h3>
                        <span class="inline-flex items-center text-gray-600 text-md mr-2">
                            <i ya-icon="icon: comment;class: mr-2"></i>{{ $project['brief'] }}
                        </span>
                        <span class="inline-flex items-center text-gray-600 text-md mr-2">
                            <i ya-icon="icon: calendar;class: mr-2"></i>{{ $project['date'] }}
                        </span>
                    </div>
                </div>
                @endforeach

            </div>
        </div>
    </div>
@endsection
