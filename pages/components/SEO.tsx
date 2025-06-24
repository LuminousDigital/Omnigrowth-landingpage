import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => (
  <Head>
    <title>{`Omnigrowth – ${title}`}</title>
    <meta
      name="description"
      content={description || `${title} page of Omnigrowth`}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
