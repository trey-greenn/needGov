import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Image from 'next/image';

const GunLawsHomePage: NextPage = () => {
  return (
    <Layout>
      <SEO 
        title="US Gun Laws - Federal, State and Local Regulations | NeedGov"
        description="Understand the hierarchical structure of gun laws in the United States from federal to state to local levels. Navigate comprehensive information about firearms regulations across the USA."
      />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
          Gun Laws in the United States
        </h1>
        
        <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-blue-800">
            Gun laws in the United States follow a hierarchical structure, with regulations existing at the federal, state, and local levels. Navigate below to learn about each level of regulation.
          </p>
        </div>
        
        {/* Visualization of Law Structure */}
        <div className="mb-12">
          <div className="relative py-8">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-300 -translate-x-1/2 z-0"></div>
            
            {/* Federal Level */}
            <div className="relative z-10 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg w-full md:w-64 h-64 flex flex-col justify-center items-center text-center">
                  <h2 className="text-xl font-bold mb-2">Federal Laws</h2>
                  <p className="mb-4">Nationwide baseline regulations</p>
                  <Link href="/gun-laws/federal" className="mt-auto bg-white text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-50 transition-colors">
                    Explore Federal Laws
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-slate-200 flex-1">
                  <h3 className="font-semibold text-lg mb-2">Key Federal Regulations:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>Background checks through NICS</li>
                    <li>Prohibitions for certain people (felons, domestic abusers)</li>
                    <li>Regulations on fully automatic weapons</li>
                    <li>Interstate commerce regulations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* State Level */}
            <div className="relative z-10 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg w-full md:w-64 h-64 flex flex-col justify-center items-center text-center order-1 md:order-2">
                  <h2 className="text-xl font-bold mb-2">State Laws</h2>
                  <p className="mb-4">Varying regulations by state</p>
                  <Link href="/gun-laws/states" className="mt-auto bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                    Explore State Laws
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-slate-200 flex-1 order-2 md:order-1">
                  <h3 className="font-semibold text-lg mb-2">State-Level Variations:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>Permit requirements for purchase or carrying</li>
                    <li>Waiting periods</li>
                    <li>Assault weapon bans</li>
                    <li>Red flag laws</li>
                    <li>Magazine capacity restrictions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Local Level */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg w-full md:w-64 h-64 flex flex-col justify-center items-center text-center">
                  <h2 className="text-xl font-bold mb-2">Local Laws</h2>
                  <p className="mb-4">City and county regulations</p>
                  <Link href="/gun-laws/local" className="mt-auto bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
                    Explore Local Laws
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-slate-200 flex-1">
                  <h3 className="font-semibold text-lg mb-2">Local Considerations:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>City or county additional restrictions</li>
                    <li>Subject to state preemption laws</li>
                    <li>Some cities (e.g., NYC, Chicago) have stricter rules</li>
                    <li>May include specific requirements for transport or storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Preemption Laws Explanation */}
        <div className="mb-10 p-6 bg-amber-50 rounded-lg border border-amber-100">
          <h2 className="text-xl font-bold mb-3 text-amber-800">Understanding Preemption Laws</h2>
          <p className="text-amber-900 mb-4">
            Preemption laws determine whether local governments can create their own gun regulations:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-amber-200">
              <h3 className="font-semibold mb-2">Strong Preemption</h3>
              <p className="text-sm">States like Arizona and Florida prevent localities from passing their own gun laws, ensuring uniform regulations across the state.</p>
            </div>
            <div className="bg-white p-4 rounded border border-amber-200">
              <h3 className="font-semibold mb-2">Limited Preemption</h3>
              <p className="text-sm">States like California and New York allow cities more leeway to create stricter regulations (e.g., New York City has stricter rules than the rest of New York State).</p>
            </div>
          </div>
        </div>
        
        {/* Additional Resources */}
        <div className="bg-slate-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/gun-laws/comparison" className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow border border-slate-200 flex items-center">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">State Comparison Tool</h3>
                <p className="text-sm text-slate-600">Compare gun laws across states</p>
              </div>
            </Link>
            <Link href="/gun-laws/recent-changes" className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow border border-slate-200 flex items-center">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Recent Law Changes</h3>
                <p className="text-sm text-slate-600">Latest updates to gun legislation</p>
              </div>
            </Link>
            <Link href="/gun-laws/map" className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow border border-slate-200 flex items-center">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Interactive Map</h3>
                <p className="text-sm text-slate-600">Visual guide to gun laws by state</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GunLawsHomePage; 