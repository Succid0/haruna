import React from "react";
import Vector10 from "../assets/Vector 10.svg";
import Vector11 from "../assets/Vector 11.svg";
import Vector12 from "../assets/Vector 12.svg";
import Vector13 from "../assets/Vector 13.svg";

const Page = () => {
  const teamMembers = [
    { name: "Bessie Cooper", role: "Graphic Designer", img: Vector10 },
    { name: "Shorif Miah", role: "UI/UX Designer", img: Vector11 },
    { name: "Jenny Wilson", role: "Web Developer", img: Vector12 },
  ];

  const plans = [
    {
      title: "Starter",
      price: "$50",
      period: "month",
      features: [
        "Ideal for startups and small businesses",
        "Customized logo design",
        "Basic website development (5 pages)",
        "Standard support and maintenance",
      ],
    },
    {
      title: "Team",
      price: "$80",
      period: "month",
      popular: true,
      features: [
        "For unique and complex projects",
        "Fully customizable services tailored",
        "Consultation and collaboration",
        "Our expert team",
      ],
    },
    {
      title: "Enterprise",
      price: "$120",
      period: "month",
      features: [
        "Tailored for established brands",
        "Comprehensive branding",
        "Full-scale website development",
        "Priority support and maintenance",
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="text-center py-12">
        <button className="px-5 py-1 border border-[#55E6A5] text-[#55E6A5] rounded-full text-sm tracking-wide">
          Our Team
        </button>
        <h1 className="text-4xl font-bold mt-6 mb-4">Meet Our Team Member</h1>
        <p className="text-gray-400">Some creative designs created by our agency</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20 pb-16">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className={`rounded-xl p-5 text-center border ${
              member.name === "Shorif Miah"
                ? "bg-[#55E6A5] border-[#55E6A5] text-black"
                : "bg-[#0B0C0E] border-gray-700"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-sm mb-4">{member.role}</p>
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto text-black font-bold cursor-pointer">
              +
            </div>
          </div>
        ))}
      </div>


      <div className="text-center py-12">
        <button className="px-5 py-1 border border-[#55E6A5] text-[#55E6A5] rounded-full text-sm tracking-wide">
          Client Say
        </button>
        <h1 className="text-4xl font-bold mt-6 mb-4">Our Happy Customers Say</h1>
        <p className="text-gray-400">Some creative designs created by our agency</p>
      </div>

      <div className="flex items-center justify-center gap-6 px-6 md:px-20 pb-16">
        <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
          &lt;
        </div>


        <div className="bg-[#55E6A5] rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 max-w-4xl">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Gymstory</h2>
            <h3 className="text-lg font-bold mb-4">
              Kornix is the best digital agency I have ever seen! Highly Recommended!
            </h3>
            <p className="text-sm mb-6">
              I recently hired Ideapeel for a custom web development project and
              couldn’t be happier with the results. The team was able to bring my
              unique ideas to life and create a website that truly stands out.
            </p>
            <p className="font-bold">Diana Loreza</p>
            <p className="text-sm">Director of Gymstory</p>
          </div>
          <img
            src={Vector13}
            alt="Customer"
            className="w-40 h-40 object-cover rounded-full border-4 border-white"
          />
        </div>


        <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
          &gt;
        </div>
      </div>


      <div className="text-center py-12">
        <button className="px-5 py-1 border border-[#55E6A5] text-[#55E6A5] rounded-full text-sm tracking-wide">
          Pricing Plans
        </button>
        <h1 className="text-4xl font-bold mt-6 mb-4">
          Choose a Plan That Works For You
        </h1>
        <p className="text-gray-400">Some creative designs created by our agency</p>

        <div className="inline-flex items-center bg-[#0B0C0E] rounded-full mt-6">
          <button className="px-6 py-2 bg-[#55E6A5] text-black rounded-full">
            Monthly
          </button>
          <button className="px-6 py-2 text-white">Yearly</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20 pb-16">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-xl p-8 border ${
              plan.popular
                ? "bg-[#55E6A5] border-[#55E6A5] text-black"
                : "bg-[#0B0C0E] border-gray-700"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
            <p className="text-gray-400 mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
            </p>
            <div className="text-3xl font-bold mb-6">
              {plan.price}
              <span className="text-base font-normal">/{plan.period}</span>
            </div>
            <ul className="mb-6 space-y-3 text-sm">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 rounded-lg border bg-white text-black hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>

<div className="bg-black text-white px-6 md:px-20 pb-20">
  <div className="text-center py-12">
    <button className="px-5 py-1 border border-[#55E6A5] text-[#55E6A5] rounded-full text-sm tracking-wide">
      FAQs
    </button>
    <h1 className="text-4xl font-bold mt-6 mb-4">The Most Common Questions</h1>
  </div>

  <div className="space-y-4 max-w-3xl mx-auto">

    <div className="border border-gray-700 rounded-lg p-6">
      <button className="flex justify-between w-full text-left text-lg font-semibold">
        How long does it take to complete a web development project?
        <span className="ml-4">−</span>
      </button>
      <p className="mt-4 text-gray-400">
        The timeline varies depending on the project's complexity and requirements.
        Our team strives to deliver projects on time while maintaining the highest
        quality standards.
      </p>
    </div>

    <div className="border border-gray-700 rounded-lg p-6 flex justify-between items-center">
      <span className="text-lg font-semibold">
        Can you handle large-scale mobile app development projects?
      </span>
      <span className="text-2xl">+</span>
    </div>

    <div className="border border-gray-700 rounded-lg p-6 flex justify-between items-center">
      <span className="text-lg font-semibold">
        Can you integrate third-party APIs into our mobile app?
      </span>
      <span className="text-2xl">+</span>
    </div>

    <div className="border border-gray-700 rounded-lg p-6 flex justify-between items-center">
      <span className="text-lg font-semibold">
        How do you ensure cross-platform compatibility for mobile apps?
      </span>
      <span className="text-2xl">+</span>
    </div>

    <div className="border border-gray-700 rounded-lg p-6 flex justify-between items-center">
      <span className="text-lg font-semibold">
        What is your approach to user experience (UX) design?
      </span>
      <span className="text-2xl">+</span>
    </div>

    <div className="text-center mt-8">
      <button className="px-6 py-2 bg-[#55E6A5] text-black rounded-full">
        See All FAQs →
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Page;