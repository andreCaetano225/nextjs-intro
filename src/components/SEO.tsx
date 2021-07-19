import Head from 'next/head';

interface SEOprops{
    title: string;
    description?: string;
    image?: string;
    excludeTitleSuffix?: boolean;
    indexPage?: boolean;
}
export default function SEO({
    title,
    description,
    image,
    excludeTitleSuffix = false,
    indexPage = true,
}: SEOprops) {
    const pageTitle = `${title} ${!excludeTitleSuffix ? '| Dede': ''}`;

    const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_UR}/${image}` : null;
    return(
        <Head>
          <title>{pageTitle}</title>

         {description &&  <meta name="descrição" content={description}/>}
         {pageImage &&  <meta name="image" content={pageImage}/>}
         {!indexPage &&  <meta name="robots" content="noindex,nofollow"/>}
        </Head>
    )
}