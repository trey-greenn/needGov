import React from 'react';
import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import Link from 'next/link';

const CaseLawsPage = () => {
  // Case law constitutional protections data
  const constitutionalProtections = [
    {
      title: "The U.S. Constitution",
      content: [
        "The Fourth Amendment protects individuals from unreasonable searches and seizures. This includes protections against unlawful stops or detentions by law enforcement.",
        "The Fifth Amendment provides protections against self-incrimination, which comes into play when individuals are detained or questioned by the police.",
        "The Sixth Amendment guarantees the right to a speedy trial, the right to counsel, and the right to confront witnesses, which becomes relevant if the detention leads to criminal charges."
      ],
      icon: "⚖️"
    },
    {
      title: "Miranda Rights (Miranda v. Arizona, 1966)",
      content: [
        "When a person is in custody and subject to interrogation, they must be informed of their rights to remain silent and to have an attorney present, as outlined by the Miranda warning."
      ],
      icon: "🔊"
    },
    {
      title: "State Laws",
      content: [
        "Every state may have additional statutes and case law that clarify and expand upon individual rights during police encounters. These laws may cover when and how police can stop, detain, or search an individual."
      ],
      icon: "🏛️"
    },
    {
      title: "Case Law",
      content: [
        "Various U.S. Supreme Court decisions and lower court rulings clarify the application of constitutional rights during stops, detentions, and arrests. Key cases include:",
        "Terry v. Ohio (1968): Established the rules for \"stop and frisk\" encounters, where police may briefly detain individuals based on reasonable suspicion.",
        "Florida v. Bostick (1991): Ruled that individuals are not necessarily \"seized\" during a bus stop if they feel free to leave.",
        "Berghuis v. Thompkins (2010): Clarified that a waiver of Miranda rights does not require an affirmative statement."
      ],
      icon: "📝"
    },
    {
      title: "Police Department Policies",
      content: [
        "Local police departments may have their own procedures that govern how they interact with individuals during stops and detentions. These policies often reflect both legal requirements and best practices in law enforcement."
      ],
      icon: "👮"
    },
    {
      title: "Civil Rights Laws",
      content: [
        "42 U.S.C. § 1983 allows individuals to file lawsuits if their constitutional rights are violated by state actors, including law enforcement."
      ],
      icon: "🔍"
    }
  ];

  // Case law components data
  const caseLawComponents = [
    {
      id: "judicial-opinions",
      number: "1",
      title: "Judicial Opinions",
      description: "Case law is created when judges write opinions (also called decisions) explaining the reasoning behind their rulings in court cases. These opinions interpret:",
      points: [
        "Constitutional provisions",
        "Statutes",
        "Administrative rules",
        "Prior case law (precedent)"
      ]
    },
    {
      id: "binding-authority",
      number: "2",
      title: "Binding vs. Persuasive Authority",
      description: "",
      points: [
        "Binding precedent: A legal decision from a higher court (in the same jurisdiction) that must be followed by lower courts.",
        "Example: U.S. Supreme Court decisions are binding on all federal and state courts.",
        "Persuasive precedent: Decisions from courts in other jurisdictions or lower courts that may influence but are not required to be followed."
      ]
    },
    {
      id: "court-hierarchy",
      number: "3",
      title: "Hierarchy of Courts",
      description: "The authority of case law depends on where it comes from in the judicial hierarchy:",
      points: [
        "U.S. Supreme Court: Highest authority on federal constitutional matters.",
        "Federal Courts of Appeals (e.g., 2nd Circuit, 9th Circuit): Binding within their circuit.",
        "District Courts: Trial-level federal courts; decisions may carry weight but are not binding.",
        "State Supreme Courts: Final word on state law, unless it involves federal law or the U.S. Constitution."
      ]
    },
    {
      id: "stare-decisis",
      number: "4",
      title: "Stare Decisis (Let the Decision Stand)",
      description: "This principle holds that courts should follow precedent to ensure consistency and predictability in the law. It helps:",
      points: [
        "Maintain legal stability",
        "Guide lower courts and future decisions",
        "Promote fairness by treating similar cases alike"
      ]
    },
    {
      id: "case-components",
      number: "5",
      title: "Components of a Case Law Decision",
      description: "A typical judicial opinion includes:",
      points: [
        "Facts: The background of the case",
        "Issue: The legal question(s) the court must answer",
        "Rule: The legal principle or law applied",
        "Analysis: The court's reasoning",
        "Conclusion: The court's final decision (e.g., affirm, reverse, remand)"
      ]
    },
    {
      id: "case-evolution",
      number: "6",
      title: "How Case Law Evolves",
      description: "Case law evolves as:",
      points: [
        "Courts overturn or modify previous decisions",
        "New interpretations of statutes or constitutional clauses emerge",
        "Societal values and technologies change"
      ]
    }
  ];

  // Famous case law examples
  const famousCases = [
    { 
      name: "Brown v. Board of Education (1954)", 
      description: "Ruled racial segregation in public schools unconstitutional",
      court: "Supreme Court"
    },
    { 
      name: "Roe v. Wade (1973)", 
      description: "Established the right to abortion under the right to privacy",
      court: "Supreme Court"
    },
    { 
      name: "Miranda v. Arizona (1966)", 
      description: "Established the requirement for police to inform suspects of their rights",
      court: "Supreme Court"
    },
    { 
      name: "Obergefell v. Hodges (2015)", 
      description: "Guaranteed the right to same-sex marriage",
      court: "Supreme Court"
    }
  ];

  return (
    <>
      <SEO
        title="Case Law in the United States | Understanding Judicial Precedent | NeedGov"
        description="Learn about U.S. case law including how it's created through judicial decisions, binding vs. persuasive authority, court hierarchy, and landmark cases that shape American legal principles."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Understanding Case Law in the United States",
          "description": "A comprehensive explanation of case law, judicial precedent, and landmark court decisions that shape the American legal system.",
          "keywords": "case law, judicial precedent, court decisions, stare decisis, landmark cases, U.S. legal system, Supreme Court rulings, constitutional rights",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://needgov.com/case-laws"
          },
          "publisher": {
            "@type": "Organization",
            "name": "NeedGov",
            "logo": {
              "@type": "ImageObject",
              "url": "https://needgov.com/logo.png"
            }
          }
        }}
      />
      <Layout>
        <div className="max-w-5xl mx-auto">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Case Law in the United States</h1>
            <p className="text-lg md:text-xl opacity-90">
              Understanding judge-made law and judicial precedent in the American legal system
            </p>
          </div>
          
          {/* What is Case Law section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">What is Case Law?</h2>
            <p className="text-slate-700 mb-4">
              Case law (also known as common law or judge-made law) is law established by judicial decisions rather than by statutes or regulations. 
              It forms a key part of the U.S. legal system and many others. When judges decide cases, their interpretations become precedent 
              for future similar cases, creating a body of law based on judicial decisions.
            </p>
            
            {/* Infographic-style components of case law */}
            <div className="space-y-6 mt-8">
              {caseLawComponents.map((component) => (
                <div key={component.id} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-medium">
                      {component.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">{component.title}</h3>
                      {component.description && <p className="text-slate-600 mb-3">{component.description}</p>}
                      <ul className="space-y-2">
                        {component.points.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-slate-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Constitutional Protections and Case Law Examples */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b pb-2">Constitutional Protections in Case Law</h2>
            <p className="text-slate-700 mb-6">
              The following legal sources establish protections for individuals during encounters with law enforcement:
            </p>
            
            <div className="space-y-6">
              {constitutionalProtections.map((protection, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 py-3">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{protection.icon}</span>
                    <h3 className="text-xl font-medium text-blue-800">{protection.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {protection.content.map((paragraph, i) => (
                      <p key={i} className="text-slate-700">{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-slate-700 mt-6">
              These sources collectively govern how law enforcement officers must interact with individuals during stops, 
              detentions, and arrests, ensuring that citizens' rights are protected.
            </p>
          </section>
          
          {/* Famous Cases */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">Landmark Cases</h2>
            <p className="text-slate-700 mb-6">
              These landmark Supreme Court decisions have fundamentally shaped American law and society:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {famousCases.map((case_, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-blue-700">{case_.name}</h3>
                  <p className="text-slate-600 text-sm mt-1">{case_.description}</p>
                  <span className="inline-block mt-2 text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {case_.court}
                  </span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Resources */}
          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Learn More About Case Law</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/federal-case-law/supreme-court" className="block p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition">
                <h3 className="font-medium text-blue-700">Supreme Court Decisions</h3>
                <p className="text-sm text-slate-600 mt-1">Explore important rulings from the highest court</p>
              </Link>
              <Link href="/learn/how-to-read-cases" className="block p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition">
                <h3 className="font-medium text-blue-700">How to Read a Case</h3>
                <p className="text-sm text-slate-600 mt-1">Learn to understand judicial opinions</p>
              </Link>
            </div>
          </section>
    </div>
      </Layout>
    </>
  );
};

export default CaseLawsPage;
