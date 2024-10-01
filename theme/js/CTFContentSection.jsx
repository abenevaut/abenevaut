'use client'

import { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import WithoutRouterProvider from "./Providers/WithoutRouterProvider.jsx";
import App from "./App.jsx";
import ContentSectionWithTestimonialAndStats from "./Components/content-section-with-testimonial-and-stats.jsx";

const articleObject = JSON.parse(window.article);
const writeupObject = window.writeup;

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the '#' character from the hash
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <WithoutRouterProvider>
      <App>
        <ScrollToHash />
        <ContentSectionWithTestimonialAndStats
          contentCategory={ articleObject.contentCategory }
          contentTitle={ articleObject.contentTitle }
          contentBody={ <div dangerouslySetInnerHTML={ { __html: articleObject.contentBody } }/> }
          caption={ articleObject.caption }
          captionImage={ articleObject.captionImage }
          stats={ articleObject.stats }
          outlink={ articleObject.outlink }
          outlinkTitle={ articleObject.outlinkTitle }
        />
        {
          writeupObject
            ?
            //<div className="py-12 px-6 md:px-0 overflow-hidden bg-white max-w-screen-md mx-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none">
                <article className="
                    prose dark:prose-invert prose-base max-w-none
                    prose-headings:no-underline prose-headings:text-gray-900
                    prose-a:no-underline prose-a:text-indigo-600 hover:prose-a:text-indigo-500
                    prose-p:text-gray-900 prose-p:dark:text-white
                    prose-li:text-gray-900 prose-li:dark:text-white
                  ">
                  <div dangerouslySetInnerHTML={ { __html: writeupObject } }/>
                </article>
              </div>
            </div>
            : ''
        }
      </App>
    </WithoutRouterProvider>
)
