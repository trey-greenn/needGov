import { StateInfo } from '../types/states';

// Data for all U.S. states
export const statesData: Record<string, StateInfo> = {
  alabama: {
    name: 'Alabama',
    abbreviation: 'AL',
    capital: 'Montgomery',
    population: '5.03 million',
    website: 'https://alabama.gov/',
    sections: [
      {
        title: 'State Laws',
        icon: '📜',
        items: [
          { name: 'Alabama Constitution', href: '/states/alabama/laws/constitution' },
          { name: 'Alabama Criminal Code', href: '/states/alabama/laws/criminal-code' },
          { name: 'Alabama Civil Code', href: '/states/alabama/laws/civil-code' },
        ]
      },
      {
        title: 'Counties',
        icon: '🏙️',
        items: [
          { name: 'Jefferson County', href: '/states/alabama/counties/jefferson' },
          { name: 'Mobile County', href: '/states/alabama/counties/mobile' },
          { name: 'Madison County', href: '/states/alabama/counties/madison' },
        ]
      },
      {
        title: 'Cities',
        icon: '🌆',
        items: [
          { name: 'Birmingham', href: '/states/alabama/cities/birmingham' },
          { name: 'Montgomery', href: '/states/alabama/cities/montgomery' },
          { name: 'Huntsville', href: '/states/alabama/cities/huntsville' },
        ]
      }
    ]
  },
  california: {
    name: 'California',
    abbreviation: 'CA',
    capital: 'Sacramento',
    population: '39.5 million',
    website: 'https://www.ca.gov/',
    sections: [
      {
        title: 'State Laws',
        icon: '📜',
        items: [
          { name: 'California Constitution', href: '/states/california/laws/constitution' },
          { name: 'California Penal Code', href: '/states/california/laws/penal-code' },
          { name: 'California Civil Code', href: '/states/california/laws/civil-code' },
          { name: 'California Health and Safety Code', href: '/states/california/laws/health-safety-code' },
          { name: 'California Family Code', href: '/states/california/laws/family-code' },
          { name: 'California Vehicle Code', href: '/states/california/laws/vehicle-code' },
        ]
      },
      {
        title: 'Counties',
        icon: '🏙️',
        items: [
          { name: 'Los Angeles County', href: '/states/california/counties/los-angeles' },
          { name: 'San Francisco County', href: '/states/california/counties/san-francisco' },
          { name: 'San Diego County', href: '/states/california/counties/san-diego' },
          { name: 'Orange County', href: '/states/california/counties/orange' },
          { name: 'Alameda County', href: '/states/california/counties/alameda' },
        ]
      },
      {
        title: 'Cities',
        icon: '🌆',
        items: [
          { name: 'Los Angeles', href: '/states/california/cities/los-angeles' },
          { name: 'San Francisco', href: '/states/california/cities/san-francisco' },
          { name: 'San Diego', href: '/states/california/cities/san-diego' },
          { name: 'San Jose', href: '/states/california/cities/san-jose' },
          { name: 'Sacramento', href: '/states/california/cities/sacramento' },
        ]
      }
    ]
  },
  texas: {
    name: 'Texas',
    abbreviation: 'TX',
    capital: 'Austin',
    population: '29.1 million',
    website: 'https://texas.gov/',
    sections: [
      {
        title: 'State Laws',
        icon: '📜',
        items: [
          { name: 'Texas Constitution', href: '/states/texas/laws/constitution' },
          { name: 'Texas Penal Code', href: '/states/texas/laws/penal-code' },
          { name: 'Texas Family Code', href: '/states/texas/laws/family-code' },
          { name: 'Texas Property Code', href: '/states/texas/laws/property-code' },
        ]
      },
      {
        title: 'Counties',
        icon: '🏙️',
        items: [
          { name: 'Harris County', href: '/states/texas/counties/harris' },
          { name: 'Dallas County', href: '/states/texas/counties/dallas' },
          { name: 'Tarrant County', href: '/states/texas/counties/tarrant' },
          { name: 'Bexar County', href: '/states/texas/counties/bexar' },
          { name: 'Travis County', href: '/states/texas/counties/travis' },
        ]
      },
      {
        title: 'Cities',
        icon: '🌆',
        items: [
          { name: 'Houston', href: '/states/texas/cities/houston' },
          { name: 'Dallas', href: '/states/texas/cities/dallas' },
          { name: 'San Antonio', href: '/states/texas/cities/san-antonio' },
          { name: 'Austin', href: '/states/texas/cities/austin' },
          { name: 'Fort Worth', href: '/states/texas/cities/fort-worth' },
        ]
      }
    ]
  }
};

// Helper function to get a state by slug
export function getStateBySlug(slug: string): StateInfo | null {
  return statesData[slug.toLowerCase()] || null;
}

// Helper function to get all state slugs for static paths
export function getAllStateSlugs(): string[] {
  return Object.keys(statesData);
}