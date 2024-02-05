import React from "react";
import Service from "../components/Service";
import People from "../assets/icons/people.svg";
import Mic from "../assets/icons/mic.svg";
import Chat from "../assets/icons/chat.svg";
import Message from "../assets/icons/message.svg";
import Chat2 from "../assets/icons/chat2.svg";

const data = [
  {
    title: "Create an account",
    desc: `Sign up for a free account and start using our platform today.`,
    icon: People,
  },
  {
    title: "Write / Record your speech",
    desc: `Craft compelling speeches and let our generative AI refine and enhance your content.`,
    icon: Mic,
  },
  {
    title: "Receive Real-Time AI Assessments",
    desc: `Get immediate feedback on your public speaking skills, empowering you to make real-time improvements`,
    icon: Chat,
  },
  {
    title: "Get Expert Insights to Improve Your Impact",
    desc: `Access valuable insights from industry experts to refine your communication style and enhance your impact.`,
    icon: Message,
  },
  {
    title: "Personalized Guidance at Your Fingertips",
    desc: `Connect with our coaches in real-time, receiving personalized guidance to enhance your learning experience`,
    icon: Chat2,
  },
];
const Services = () => {
  return (
    <div className="services_section text-center">
      <h2 className="mb-2">Master the Art of Public Speaking</h2>
      <div className="service_container container">
        {data.map((e, i) => (
          <Service key={i} {...e} />
        ))}
      </div>
      
    </div>
  );
};

export default Services;
