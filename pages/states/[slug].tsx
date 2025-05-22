import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { StateInfo } from '@/types/states';
import { getAllStateSlugs, getStateBySlug } from '@/data/states';
import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

interface StatePageProps {
  stateInfo: StateInfo | null;
}

export default function StatePage({ stateInfo }: StatePageProps) {
  const router = useRouter();

  // Show loading state if page is being generated
  if (router.isFallback || !stateInfo) {
    return (
      <Layout>
        <div className="max-w-5xl mx-auto p-8 text-center">
          <p className="text-lg">Loading state information...</p>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <SEO
        title={`${stateInfo.name} | Laws & Government Resources | NeedGov`}
        description={`Access official ${stateInfo.name} government resources, state laws, county information, and city services. Find everything you need about ${stateInfo.name} in one place.`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "GovernmentOrganization",
          "name": `${stateInfo.name} State Government`,
          "description": `Official government resources and information for the state of ${stateInfo.name}`,
          "url": stateInfo.website,
        }}
      />
      <Layout>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-800 mr-4">
              {stateInfo.abbreviation}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900">{stateInfo.name}</h1>
              <div className="flex text-sm text-slate-500 mt-1 space-x-4">
                <span>Capital: {stateInfo.capital}</span>
                <span>Population: {stateInfo.population}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <a 
              href={stateInfo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Visit Official Website
            </a>
          </div>
          
          <div className="space-y-8">
            {stateInfo.sections.map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{section.icon}</span>
                  <h2 className="text-xl font-semibold text-blue-800">{section.title}</h2>
                </div>
                <div className="pl-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.items.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href}
                        className="block p-3 hover:bg-blue-50 rounded transition"
                      >
                        <span className="text-blue-600 font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link 
                      href={`/states/${router.query.slug}/${section.title.toLowerCase()}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all {section.title} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllStateSlugs();
  
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true, // Enable fallback for states we haven't generated yet
  };
};

export const getStaticProps: GetStaticProps<StatePageProps> = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== 'string') {
    return { notFound: true };
  }

  const stateInfo = getStateBySlug(params.slug);
  
  if (!stateInfo) {
    return { notFound: true };
  }
  
  return {
    props: {
      stateInfo,
    },
    // Revalidate every day (in seconds)
    revalidate: 86400,
  };
};