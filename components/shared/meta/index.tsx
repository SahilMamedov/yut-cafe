import Head from "next/head";
import { FC } from "react";

interface Props {
  description: string;
  title: string;
  ogTitle: string;
  ogDescription: string;
}
const Meta: FC<Props> = ({ description, ogDescription, ogTitle, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      {/* <meta property="og:image" content={ogImage} /> */}
    </Head>
  );
};

export default Meta;
