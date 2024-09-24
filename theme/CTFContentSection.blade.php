@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('meta')
    <link rel="canonical" href="//index.html" />
    <script>
      window.data = '@json($article)';
    </script>
    <script type="module" src="assets/CTFContentSection.js"></script>
@endsection
