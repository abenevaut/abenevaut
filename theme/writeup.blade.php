@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@php
    $writeup = json_encode(app(\Spatie\LaravelMarkdown\MarkdownRenderer::class)->toHtml($writeup)) ?? '';
@endphp

@section('meta')
    <script>
      window.meta = '@json($article ?? "")'
      window.article = {!! $writeup !!}
    </script>
    <script>
      const dataPath = 'theme/js/Writeup.jsx';

      fetch('/manifest.json')
        .then(response => response.json())
        .then(manifest => {

          console.log(manifest);

          const entry = manifest[dataPath];

          if (entry && entry.file) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = '/' + entry.file;
            document.head.appendChild(script);
          }
          else {
            console.error(`Entrée ${dataPath} non trouvée dans le manifest Vite.`);
          }

          const css = manifest['theme/css/app.css'];

          if (css && css.file) {
            const script = document.createElement('link');
            script.rel = 'stylesheet';
            script.href = '/' + css.file;
            document.head.appendChild(script);
          }
          else {
            console.error(`Entrée 'theme/css/app.css' non trouvée dans le manifest Vite.`);
          }
        })
        .catch(err => {
          console.error('Erreur lors du chargement du manifest Vite :', err);
        });
    </script>
@endsection
