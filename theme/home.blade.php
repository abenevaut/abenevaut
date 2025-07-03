@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('meta')
    <script>
      window.projects = JSON.parse('@json($portfolio)').projects;
    </script>
    <script>
      fetch('/manifest.json')
        .then(response => response.json())
        .then(manifest => {

          console.log(manifest);

          const entry = manifest['theme/js/Home.jsx'];

          if (entry && entry.file) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = '/' + entry.file;
            document.head.appendChild(script);
          }
          else {
            console.error(`Entrée 'theme/js/Home.jsx' non trouvée dans le manifest Vite.`);
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
