import { useState } from 'react';

const faqs = [
    { question: "What is Amrutam?" },
    { question: "How does Amrutam help me grow as a practitioner?" },
    { question: "How do I become a part of Amrutam Doctor?" },
    { question: "What is Amrutam Global as a platform?" },
    { question: "What documents do I need to provide?" },
    { question: "Is there a fee to join Amrutam?" },
];

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4/5 mx-auto bg-[#fdf5e6] p-4 rounded-lg space-y-2 ">
            {faqs.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-[#e0d7c3] cursor-pointer transition-all"
                >
                    <div
                        className="flex justify-between items-center py-4 px-2"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-[#2f2f2f] font-medium text-base">
                            {item.question}
                        </span>
                        <span className="text-xl  text-[#4C4C4C]">
                            {openIndex === index ? '−' : '+'}
                        </span>
                    </div>
                    {openIndex === index && (
                        <div className="px-2 pb-4 text-sm text-gray-600">
                            This is the answer to "{item.question}".
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
