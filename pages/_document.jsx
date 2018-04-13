import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
export default class Document extends NextDocument {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();
    const styles = flush();

    return {
      html, head, errorHtml, chunks, styles,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
