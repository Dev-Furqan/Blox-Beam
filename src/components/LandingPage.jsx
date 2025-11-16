// src/components/LandingPage.jsx
import { useState } from 'react';
import HeroImage from '../assets/Group 40092.png';
import VectorBackground from './VectorBackground';


// Import trending images
import Raccoon1 from "../assets/trending-now/IMG-5467-_1_ 1.png";
import Queenbee1 from "../assets/trending-now/IMG-5478 1.png";
import Raccoon2 from "../assets/trending-now/p11 1.png";
import Gingerscope1 from "../assets/trending-now/65 1.png";
import Raccoon3 from "../assets/trending-now/image_2 1.png";
import queenbee2 from "../assets/trending-now/undefined_-_Imgur 1.png";
import Raccoon4 from "../assets/trending-now/Elephant_17_9fcc194d-4ed1-475f-9992-6ede479175b9 1.png";
import queenbee3 from "../assets/trending-now/Cow_12_04a274cd-d0f3-448a-8729-45826f64f935 1.png";
import icon1 from "../assets/trending-now/gag-jQsY7LWJ 1.png";
import icon2 from "../assets/trending-now/mm2-DDBYkew2 2.png";
import icon3 from "../assets/trending-now/ttd-CljLMPPY 2.png";
import icon4 from "../assets/trending-now/am-Yek4MbFs 1.png";
import Footer1 from "../assets/trending-now/gag-jQsY7LWJ 2.png";
import Footer2 from "../assets/trending-now/mm2-DDBYkew2 2.png";
import Footer3 from "../assets/trending-now/7-BAs2Rou8 2.png";
import Footer4 from "../assets/trending-now/1-CoU281y- 1.png";

const LandingPage = ({ onGetStarted }) => {
  // Trending games
  const trendingGames = [
    {
      name: "Grow A Garden",
      icon: icon1,
      footerImg: Footer1,
      items: [
        { name: "RACCOON", price: "$15", img: Raccoon1 },
        { name: "QUEEN BEE", price: "$10", img: Queenbee1 }
      ]
    },
    {
      name: "MM2",
      icon: icon2,
      footerImg: Footer2,
      items: [
        { name: "RACCOON", price: "$15", img: Raccoon2 },
        { name: "GINGERSCOPE", price: "$10", img: Gingerscope1 }
      ]
    },
    {
      name: "Steal A Brainrot",
      icon: icon3,
      footerImg: Footer3,
      items: [
        { name: "RACCOON", price: "$15", img: Raccoon3 },
        { name: "QUEEN BEE", price: "$10", img: queenbee2 }
      ]
    },
    {
      name: "Adopt Me",
      icon: icon4,
      footerImg: Footer4,
      items: [
        { name: "ELEPHANT", price: "$15", img: Raccoon4 },
        { name: "COW", price: "$10", img: queenbee3 }
      ]
    }
  ];

  // Testimonials for trusted section
  const testimonials = [
    { text: 'Best process! Super smooth, got my items fast for cheap!', author: 'Melony J.', rating: 5 },
    { text: 'Best process! Super smooth, got my items fast for cheap!', author: 'Melony J.', rating: 5 },
    { text: 'Best process! Super smooth, got my items fast for cheap!', author: 'Melony J.', rating: 5 },
    { text: 'Best process! Super smooth, got my items fast for cheap!', author: 'Melony J.', rating: 5 },
  ];

  // Why choose features
  const features = [
    {
      title: 'Fast & Reliable',
      description:
        'Choose a game to get started, popular options include MM2, Toilet Tower Defence, Adopt Me....',
      colorClass: 'why-card-green',
    },
    {
      title: 'Best Prices',
      description:
        'Enjoy competitive pricing on all items without compromising on safety or reliability.',
      colorClass: 'why-card-blue',
    },
    {
      title: 'Secure & Safe',
      description:
        'We use secure payment methods and never ask for your password or sensitive login details.',
      colorClass: 'why-card-purple',
    },
    {
      title: '24/7 Support',
      description:
        'Our support team is always here to help with questions, issues, and order updates.',
      colorClass: 'why-card-red',
    },
  ];

  // How it works steps
  const howItWorks = [
    {
      title: 'Choose Your Game',
      description: 'Select from our wide range of supported Roblox games including Murder Mystery 2, Blox Fruits, and more.',
      icon: '🎮',
      colorClass: 'how-card-purple',
    },
    {
      title: 'Pick Your Items',
      description: 'Browse through our catalog of items and add your favorites to the cart.',
      icon: '📝',
      colorClass: 'how-card-blue',
    },
    {
      title: 'Complete Secure Payment',
      description: 'Pay safely using trusted payment methods with encrypted processing.',
      icon: '📦',
      colorClass: 'how-card-green',
    },
    {
      title: 'Receive Instantly',
      description: 'Our automated system delivers items to your account within minutes.',
      icon: '💬',
      colorClass: 'how-card-red',
    },
  ];

  // FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      label: 'General Questions',
      heading: 'General Questions FAQs',
      icon: '💬',
      faqs: [
        {
          question: 'Is BloxBeam a trusted place to buy from?',
          answer:
            'Yes! BloxBeam is a trusted platform with thousands of satisfied customers. We prioritize security, transparency, and fast delivery in every transaction.',
        },
        {
          question: 'Why do you ask for my address during checkout?',
          answer:
            'We collect your address for billing verification purposes only. This helps us prevent fraud and ensures the security of your transaction. Your information is kept private and secure.',
        },
        {
          question: 'What makes BloxBeam the best store for in-game items?',
          answer:
            'We offer automated instant delivery, competitive prices, 24/7 customer support, secure transactions, and a wide selection of items across multiple popular games.',
        },
        {
          question: 'What games do you offer items for?',
          answer:
            'We offer items for Murder Mystery 2, Blox Fruits, Pet Simulator X, Adopt Me, and many other popular Roblox games. Check our catalog for the full list.',
        },
        {
          question: 'How can I win free items?',
          answer:
            'Follow our social media channels for giveaways, participate in community events, and subscribe to our newsletter for exclusive promotions and free item opportunities.',
        },
      ],
    },
    {
      id: 'payment',
      label: 'Payment & Privacy',
      heading: 'Payment & Privacy FAQs',
      icon: '💳',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept credit cards, debit cards, PayPal, cryptocurrency, and various other secure payment methods to make your purchase convenient.',
        },
        {
          question: 'Is my payment information secure?',
          answer:
            'Absolutely! We use industry-standard encryption and secure payment gateways to protect your financial information. We never store your complete payment details.',
        },
        {
          question: 'Do you store my personal information?',
          answer:
            'We only store essential information needed for your orders and account. All data is encrypted and protected according to privacy regulations. You can request data deletion at any time.',
        },
      ],
    },
    {
      id: 'returns',
      label: 'Return & Orders',
      heading: 'Return & Orders FAQs',
      icon: '📦',
      faqs: [
        {
          question: 'What is your refund policy?',
          answer:
            'We offer refunds within 24 hours of purchase if items were not delivered or if there was an error with your order. Contact our support team to initiate a refund request.',
        },
        {
          question: 'How do I receive my purchased items?',
          answer:
            'After completing your purchase, items are automatically delivered to your in-game account within 1–5 minutes through our secure automated system.',
        },
        {
          question: "What if I don't receive my items after purchasing?",
          answer:
            "If you don't receive your items within 10 minutes, please check your order status and contact our 24/7 support team. We'll investigate and resolve the issue immediately.",
        },
        {
          question: 'Can I cancel my order?',
          answer:
            'Orders can be cancelled before delivery is initiated. Once the automated delivery starts, cancellation is not possible. Contact support immediately if you need to cancel.',
        },
      ],
    },
  ];

  // FAQ state
  const [activeFaqCategory, setActiveFaqCategory] = useState(faqCategories[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const activeCategory = faqCategories.find(
    (cat) => cat.id === activeFaqCategory
  );

  return (
    <div className="relative overflow-hidden">
      <VectorBackground />

      <div className="relative z-10 pt-20">
        {/* HERO */}
        {/* HERO */}
<section
  className="hero-gradient relative min-h-[80vh] flex items-center overflow-hidden pt-20 lg:pt-28"
  data-aos="scale-up"
>
  <div className="container mx-4 sm:mx-6 lg:mx-14 px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 gap-y-12 items-center">
      {/* Left */}
      <div className="max-w-xl mx-auto text-center lg:text-left">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
          Buy Your Favorite Items
          <br />
          <span className="gradient-text block">
            Fast, Safe, and Easy
          </span>
          <span className="block mt-1">with BloxBeam!</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
          BloxBeam the fastest, safest shop for in-game items with automated
          delivery. Get what you need in seconds.
          <br className="hidden sm:block" />
          For items in Murder Mystery 2, Grow a Garden, Blox Fruits,
          Steal a Brainrot, Blade Ball.
        </p>

        <div className="flex justify-center lg:justify-start">
         <button
  onClick={onGetStarted}
  className="flex items-center gap-3 px-7 py-3 rounded-full 
             bg-gradient-to-r from-[#4ADE80] to-[#22C55E]
             text-white font-semibold
             shadow-[0_0_18px_rgba(34,197,94,0.35)]
             hover:scale-[1.03] active:scale-[0.98]
             transition-all duration-200"
>
  {/* Cart Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="white"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14l-2-8M10 17h.01M14 17h.01"
    />
  </svg>

  Start Buying
</button>

        </div>
      </div>

      {/* Right */}
      <div className="w-full flex justify-center lg:justify-end">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-[80%] sm:w-[70%] lg:w-[80%] xl:w-[100%] h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>


        {/* TRENDING NOW */}
        <section className="trending-wrapper">
          <div className="container mx-auto px-6">
            <div className="trending-heading text-center" data-aos="scale-up">
              <h2>Trending Now</h2>
              <p>
                Items gaining popularity right now.
                <br />
                Most users are active on their catalog pages.
              </p>
            </div>

            <div className="trending-grid">
              {trendingGames.map((game, index) => (
                <article
                  key={index}
                  className="trending-card"
                  data-aos="scale-up"
                  data-aos-delay={index * 120}
                >
                  <header className="card-header">
                    <div className="card-header-pill">
                      <div className="card-header-icon">
                        <img
                          src={game.icon}
                          alt={game.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="card-header-title">{game.name}</span>
                    </div>
                  </header>

                  <div className="card-items-row">
                    {game.items.map((item, i) => (
                      <div key={i} className="item-box">
                        <div className="item-img-wrap">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="item-img"
                          />
                        </div>
                        <p className="item-name">{item.name}</p>
                        <p className="item-price">{item.price}</p>
                      </div>
                    ))}
                  </div>

                  <footer className="card-footer">
                    <div
                      className="footer-img"
                      style={{ backgroundImage: `url(${game.footerImg})` }}
                    />
                    <button
                      className={`visit-market-btn ${
                        index === 0
                          ? "btn-green"
                          : index === 1
                          ? "btn-red"
                          : index === 2
                          ? "btn-purple"
                          : "btn-blue"
                      }`}
                    >
                      <span>Visit Market</span>
                      {index !== 0 && <span className="visit-arrow">➜</span>}
                    </button>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRUSTED */}
        <section className="trusted-wrapper" data-testid="trusted-section">
          <div className="container mx-auto px-6">
            <div className="trusted-top-row" data-aos="scale-up">
              <div className="trusted-heading-block">
                <h2 className="trusted-title">
                  Trusted with by <span>5,000+ Happy Buyers</span>
                </h2>
                <p className="trusted-subtitle">
                  Join thousands of happy buyers who trust BloxBeam for their in-game items!
                  <br />
                  From casual players to serious collectors, our customers keep coming back for quality and reliability.
                  See some of our amazing supporters below:
                </p>
              </div>

              <div className="trusted-score-pill">
                <div className="trusted-score-stars">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="trusted-score-star"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="trusted-score-star" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="halfStar">
                        <stop offset="50%" stopColor="#22c55e" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h 3.461a1 1 0 00.951-.69l1.07-3.292z"
                      fill="url(#halfStar)"
                      stroke="#22c55e"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="trusted-score-text">
                  <span className="trusted-score-main">Amazing 4.5</span>
                  <span className="trusted-score-sub">out of 5.0</span>
                </div>
              </div>
            </div>

            <div className="trusted-band">
              <div className="trusted-cards-row">
                {testimonials.map((t, index) => (
                  <article
                    key={index}
                    className="trusted-card"
                    data-aos="scale-up"
                    data-aos-delay={index * 120}
                  >
                    <header className="trusted-card-top">
                      <div className="trusted-stars-row">
                        {[...Array(t.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="trusted-star-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="trusted-verified-pill">
                        <span className="trusted-verified-icon">✔</span>
                        <span className="trusted-verified-text">Verified Buy</span>
                      </div>
                    </header>
                    <p className="trusted-card-name">{t.author}</p>
                    <p className="trusted-card-text">{t.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <p className="trusted-thankyou">THANK YOU</p>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="why-wrapper">
          <div className="container mx-auto px-6">
            <div className="why-heading" data-aos="scale-up">
              <h2 className="why-title">
                Why Choose <span>BloxBeam</span>
              </h2>
              <p className="why-subtitle">
                Enjoy lightning–fast delivery, unbeatable prices, and a safe, secure shopping experience for
                all your favorite Roblox items. Our dedicated support team is always here to help!
              </p>
            </div>

            <div className="why-cards-row">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className={`why-card ${feature.colorClass}`}
                  data-aos="scale-up"
                  data-aos-delay={index * 120}
                >
                  <div className="why-card-top">
                    <h3>{feature.title}</h3>
                    <span className="why-check">✔</span>
                  </div>
                  <p className="why-card-text">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-wrapper">
          <div className="container mx-auto px-6">
            <div className="how-heading" data-aos="scale-up">
              <h2 className="how-title">
                How <span>BloxBeam</span> Works
              </h2>
              <p className="how-subtitle">
                Buying items on BloxBeam is designed to be simple, fast, and reliable!
                <br />
                Here’s how you can get started
              </p>
            </div>

            <div className="how-grid">
              {howItWorks.map((step, index) => (
                <article
                  key={index}
                  className={`how-card ${step.colorClass}`}
                  data-aos="scale-up"
                  data-aos-delay={index * 120}
                >
                  <div className="how-card-content">
                    <div className="how-icon-circle">
                      <span>{step.icon}</span>
                    </div>
                    <div className="how-text-block">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-wrapper" data-aos="scale-up">
          <div className="container mx-auto px-6">
            <div className="faq-heading">
              <h2 className="faq-title">
                Frequently Asked <span>Questions</span>
              </h2>
            </div>

            <div className="faq-layout">
              {/* Sidebar */}
              <aside className="faq-sidebar">
                {faqCategories.map((cat) => {
                  const isActive = cat.id === activeFaqCategory;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`faq-category-btn ${
                        isActive ? 'faq-category-active' : ''
                      }`}
                      onClick={() => {
                        setActiveFaqCategory(cat.id);
                        setOpenFaqIndex(null);
                      }}
                    >
                      <div className="faq-category-icon-wrap">
                        <span className="faq-category-icon">{cat.icon}</span>
                      </div>
                      <span className="faq-category-label">{cat.label}</span>
                    </button>
                  );
                })}
              </aside>

              {/* Questions */}
              <div className="faq-content">
                <h3 className="faq-content-heading">{activeCategory.heading}</h3>

                <div className="faq-list">
                  {activeCategory.faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                      >
                        <button
                          type="button"
                          className="faq-question-row"
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        >
                          <span className="faq-question-text">{faq.question}</span>
                          <svg
                            className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {isOpen && (
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <p className="faq-more">
                  More Questions?{' '}
                  <a href="#contact" className="faq-more-link">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROBLOX DISCLAIMER */}
        <section className="roblox-disclaimer" data-aos="scale-up">
          <div className="container mx-auto px-6 text-center">
            <h4 className="roblox-disclaimer-title">
              We are not affiliated with Roblox Corporation or any of its trademarks
            </h4>
            <p className="roblox-disclaimer-text">
              BloxBeam&apos;s services are not the same, similar or equivalent to
              Roblox Corporation&apos;s products and services and we are not sponsored
              by, affiliated with, approved by and/or authorized by ROBLOX
              Corporation at all.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
