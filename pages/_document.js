import Document, { Html, Head, Main, NextScript } from 'next/document'
import Share from "../components/share";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <Share/>
          <NextScript />
        </body>
      </Html>
    )
  }
}
