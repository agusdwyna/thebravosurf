import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
const services = [
  {
    title: "Private Lesson",
    price: "400",
    description: "Private session: 1 instructor dedicated to 1 student. Full focus on your technique and personal progress.",
    image: "semi.jpeg",
    alt: "Instructor helping student stand on surf board"
  },
  {
    title: "Semi Private Lesson",
    price: "350",
    description: "Semi-private session: 1 instructor for 2 students. Improve your technique while sharing the experience.",
    image: "private.jpeg",
    alt: "Surfer performing a turn on a blue wave"
  },
  {
    title: "Group Lesson",
    price: "300",
    description: "Group session: join a lively class with multiple participants. Fun, social, and full of energy!",
    image: "group.jpeg",
    alt: "Luxury beach villa with surfboard leaning on wall"
  }
];

  return (
    <section id="pricing" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-[#005a8d] font-bold tracking-widest uppercase text-xs">Our Services</span>
        <h2 className="text-3xl font-extrabold text-[#101518]">Experience the Ocean</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
