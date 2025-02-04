import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Content() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const faqData = [
        {
            id: 1,
            title: "1. What types of photography services do you offer?",
            description: "We specialize in Amazon Product Photography, Shopify Photography, DVC, Fashion Photography, and Creative Product Photography."
        },
        {
            id: 2,
            title: "2. How do I book a session?",
            description: "You can book a session online through the YCloud platform or contact us directly at sales@naskstudio.com."
        },

        {
            id: 3,
            title: "3. Do you require an advance payment?",
            description: "Yes, we require an advance payment of 50% at the time of booking to confirm your session. The remaining balance is due prior to the delivery of final images or as per the agreed terms."
        },
        {
            id: 4,
            title: "4. How long does it take to receive my photos?",
            description: "Edited photos are typically delivered within 10 days after the session, depending on the scope of the project."
        },
        {
            id: 5,
            title: "5. Can I use the photographs for commercial purposes?",
            description: "Commercial use requires prior written consent or a specific licensing agreement with us."
        },
        {
            id: 6,
            title: "6. Can I request an outdoor or destination shoot?",
            description: "Absolutely! We offer on-location and destination photography services. Additional charges may apply for travel and accommodation."
        },
        {
            id: 7,
            title: "7. What is your cancellation policy?",
            description: "Cancellations submitted at least 48 hours prior to the scheduled appointment or session are eligible for a refund. This allows us to accommodate other clients and maintain smooth scheduling."
        },
        {
            id: 8,
            title: "8. How many photos will be delivered?",
            description: "The number of photos you receive will vary based on the package you select and the nature of the photoshoot. Full details, including the number of edited images, will be discussed and confirmed during the booking process."
        },
        {
            id: 9,
            title: "9. Will my photos be used for promotional purposes?",
            description: "We may use client photos for our portfolio or social media with your consent. However, the clients can decide if they prefer otherwise."
        },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFaqs = faqData.filter(faq =>
        faq.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container-fluid p-sm-4 py-4 px-2 mb-3">
            <div className="faq-content px-sm-3 px-1">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="heading my-sm-4 mt-4 mb-0">
                            Frequently Asked Questions
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="faq-inputs">
                            <div className="row m-0">
                                <div className="col-12 p-0">
                                    <div className="search-bar">
                                        <input
                                            type="text"
                                            placeholder="Write your question here"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <span>
                                            <CiSearch style={{ fontSize: '24px', color: "rgb(56, 53, 53)" }} />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 p-0" style={{ marginTop: '45px' }}>
                                    {filteredFaqs.length > 0 ? (
                                        filteredFaqs.map((faq, index) => (
                                            <div key={faq.id} className="faq-questions  my-3"  onClick={() => handleToggle(index)}>
                                                <div className="parent">
                                                    <div>{faq.title}</div>
                                                    <span>
                                                        {activeIndex === index ? (
                                                            <FaMinus style={{ fontSize: '18px', color: "rgb(56, 53, 53)", marginBottom: '3px' }} />
                                                        ) : (
                                                            <FaPlus style={{ fontSize: '18px', color: "rgb(56, 53, 53)", marginBottom: '3px' }} />
                                                        )}
                                                    </span>
                                                </div>
                                                {activeIndex === index && (
                                                    <div className="activeDescription">
                                                        {faq.description}
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <p>No results found.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
