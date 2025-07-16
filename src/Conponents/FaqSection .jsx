import { FaChevronDown } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";

const FaqSection = () => {
    const faqs = [
        {
            question: "How can I donate to a campaign?",
            answer: "You can donate by visiting the campaign's details page and clicking on the 'Donate' button."
        },
        {
            question: "Do I need to be logged in to donate?",
            answer: "Yes, for security and tracking purposes, only logged-in users can make donations."
        },
        {
            question: "How do I create a new campaign?",
            answer: "Click on the 'Add New Campaign' link in the navbar, fill in the required form fields, and submit it."
        },
        {
            question: "Where can I see my donations?",
            answer: "Go to the 'My Donations' section from the navbar to view all your donated campaigns."
        },
        {
            question: "Can I update my campaign later?",
            answer: "Yes, you can update your campaign from the 'My Campaign' section by clicking the 'Update' button."
        },
        // {
        //     question: "What happens when a campaign’s deadline is over?",
        //     answer: "Once the deadline is passed, the campaign becomes inactive and users cannot donate to it anymore."
        // }
    ];

    return (
        <section className="py-12 px-4 md:px-16 bg-base-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between items-center bg-white px-4 py-3 text-left text-base font-medium rounded-lg shadow-md hover:bg-gray-100 transition">
                                        <span>{faq.question}</span>
                                        <FaChevronDown
                                            className={`transform transition-transform ${open ? "rotate-180" : ""
                                                }`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-2 pb-4 text-gray-600">
                                        {faq.answer}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
