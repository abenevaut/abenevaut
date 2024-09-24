'use client'

import ReactDOM from 'react-dom/client'
import WithoutRouterProvider from "./Providers/WithoutRouterProvider.jsx";
import App from "./App.jsx";
import ContentSectionWithTestimonialAndStats from "./Components/content-section-with-testimonial-and-stats.jsx";

const { data } = window;

console.log(data);

const props = JSON.parse(data);

console.log(props);

ReactDOM.createRoot(document.getElementById('root')).render(
    <WithoutRouterProvider>
      <App>
        <ContentSectionWithTestimonialAndStats
          contentCategory={props.contentCategory}
          contentTitle={props.contentTitle}
          contentBody={<div dangerouslySetInnerHTML={{ __html: props.contentBody }} />}
          caption={props.caption}
          captionImage={props.captionImage}
          stats={props.stats}
          outlink={props.outlink}
          outlinkTitle={props.outlinkTitle}
        />
      </App>
    </WithoutRouterProvider>
)
