'use client'
import { useState } from 'react'

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'How do I find services in my local area?',
          answer: 'You can navigate to your state page from the States menu, then drill down to your county or city. You can also use the search function to find specific services in your area.'
        },
        {
          question: 'Are all government services listed on this website?',
          answer: 'We aim to provide a comprehensive directory of government services, but some specialized or newly created services may not be listed yet. We regularly update our database to include more services.'
        },
        {
          question: 'How do I report incorrect information?',
          answer: 'Please use the feedback form linked in the footer to report any errors or outdated information. We appreciate your help in keeping our directory accurate.'
        }
      ]
    },
    {
      category: 'Federal Services',
      questions: [
        {
          question: 'How do I apply for a U.S. passport?',
          answer: 'Passport applications are processed by the Department of State. You can find forms and instructions by navigating to Federal > Department of State > Passport Services, or by searching for "passport" in our search bar.'
        },
        {
          question: 'Where can I find information about Social Security benefits?',
          answer: 'Information about Social Security benefits can be found under Federal > National Services > Social Security. This includes retirement, disability, and survivor benefits.'
        },
        {
          question: 'How do I contact my elected representatives?',
          answer: 'Contact information for your elected representatives can be found under Federal > Legislative Branch > Congress, where you can find links to both the Senate and House of Representatives directories.'
        }
      ]
    },
    {
      category: 'State Services',
      questions: [
        {
          question: 'How do I renew my driver\'s license?',
          answer: 'Driver\'s license renewal procedures vary by state. Navigate to your state\'s page, then look for the Department of Motor Vehicles (DMV) or equivalent agency.'
        },
        {
          question: 'Where can I find state tax forms?',
          answer: 'State tax forms can be found on your state\'s revenue department page. Navigate to your state, then look for "Department of Revenue," "Tax Commission," or similar agencies.'
        },
        {
          question: 'How do I access vital records like birth certificates?',
          answer: 'Vital records are typically managed by state health departments. Navigate to your state, then look for "Department of Health," "Vital Records," or similar agencies.'
        }
      ]
    },
    {
      category: 'Forms & Documents',
      questions: [
        {
          question: 'Can I download forms directly from this website?',
          answer: 'Our website provides links to official government websites where you can download forms. In some cases, we may host PDF copies of common forms, but we always recommend checking the official source for the most up-to-date versions.'
        },
        {
          question: 'Are electronic forms available for all services?',
          answer: 'Electronic forms availability varies by agency and service. Many federal and state agencies now offer electronic forms and online submission options, but some services still require paper forms.'
        },
        {
          question: 'Do I need special software to fill out government forms?',
          answer: 'Most downloadable forms are PDF files that can be opened with free PDF readers like Adobe Acrobat Reader. Some forms may be fillable PDFs that can be completed electronically, while others may need to be printed and filled out by hand.'
        }
      ]
    }
  ]
  
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex
    setActiveIndex(activeIndex === index ? null : index)
  }
  
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h1>
      <p className="text-slate-600 mb-8">
        Find answers to common questions about government services, forms, and using this website.
      </p>
      
      <div className="space-y-8">
        {faqs.map((category, categoryIndex) => (
          <div key={category.category} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">{category.category}</h2>
            <div className="space-y-3">
              {category.questions.map((faq, questionIndex) => (
                <div key={questionIndex} className="border border-slate-200 rounded-md overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-slate-50"
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                  >
                    <span className="font-medium text-slate-700">{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-slate-400 transform transition-transform ${activeIndex === categoryIndex * 100 + questionIndex ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeIndex === categoryIndex * 100 + questionIndex && (
                    <div className="px-4 py-3 bg-slate-50 border-t border-slate-200">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">Still Have Questions?</h2>
        <p className="text-slate-600 mb-4">
          If you couldn't find the answer to your question, you can:
        </p>
        <ul className="list-disc pl-5 text-slate-600 mb-4">
          <li>Use the search function at the top of the page</li>
          <li>Browse the specific agency or service page for more detailed information</li>
          <li>Contact us through the feedback form with specific questions</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Contact Support
        </button>
      </div>
    </div>
  )
}