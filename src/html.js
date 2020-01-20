import React from 'react';

const HTML = ({ body, headComponents, postBodyComponents }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta property="og:title" content="Aron Jasso" />
      <meta property="og:image" content="/images/favicon-180.png" />
      {headComponents}

      <link rel="icon" href="/images/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="/images/favicon-57.png" sizes="57x57" />
      <link rel="icon" href="/images/favicon-76.png" sizes="76x76" />
      <link rel="icon" href="/images/favicon-96.png" sizes="96x96" />
      <link rel="icon" href="/images/favicon-128.png" sizes="128x128" />
      <link rel="icon" href="/images/favicon-192.png" sizes="192x192" />
      <link rel="icon" href="/images/favicon-228.png" sizes="228x228" />

      <link
        rel="shortcut icon"
        href="/images/favicon-196.png"
        sizes="196x196"
      />

      <link
        rel="apple-touch-icon"
        href="/images/favicon-120.png"
        sizes="120x120"
      />
      <link
        rel="apple-touch-icon"
        href="/images/favicon-152.png"
        sizes="152x152"
      />
      <link
        rel="apple-touch-icon"
        href="/images/favicon-180.png"
        sizes="180x180"
      />
    </head>
    <body>
      <div
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </body>
  </html>
);

export default HTML;
