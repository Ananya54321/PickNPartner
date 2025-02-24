import React from "react";
import { CalendarIcon, FileTextIcon } from "lucide-react";
import { BellIcon, Share2Icon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import Lottie from "lottie-react";
import wumpusAnimation from "@/assets/wumpus.json";
import connectAnimation from "@/assets/connect.json";
import tempAnimation from "@/assets/temp.json";
import userNetworkAnimation from "@/assets/user-network.json";
import businessDiscussion from "@/assets/business-discussion.svg";
import register from "@/assets/register.svg";

const features2 = [
  {
    Icon: FileTextIcon,
    name: "Connect",
    description: "Find and connect with creators in your niche.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <Lottie
        animationData={userNetworkAnimation}
        className="w-full mt-1 h-48"
      />
    ),
  },
  {
    Icon: BellIcon,
    name: "Collaborate",
    description: "Work together on projects and grow your audience.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 md:col-span-2",
    background: (
      <Lottie animationData={connectAnimation} className="w-full mt-5 h-48" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Share",
    description: "Cross-promote content and reach new audiences.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 md:col-span-2",
    background: (
      <Lottie animationData={tempAnimation} className="w-full mt-5 h-48" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Track",
    description: "Monitor your growth and collaboration success.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <img
        src={businessDiscussion}
        alt="businessDiscussion"
        className="w-full h-48 "
      />
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center text-gray-900 mb-16">
          <h1 className="text-4xl mb-4 font-bold">How it Works</h1>
          <p className="text-xl text-gray-600">
            Follow the below steps and accelerate your growth
          </p>
        </div>
        <div className="space-y-24">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-center gap-3  mb-8">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl font-bold">
                1
              </div>
              <h3 className="ml-4 text-2xl  font-semibold text-gray-900">
                Join Discord Community
              </h3>
            </div>
            <div className="flex justify-center items-center w-full max-w-2xl mx-auto">
              <Lottie animationData={wumpusAnimation} className="w-full h-64" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-center gap-3 ">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl font-bold">
                2
              </div>
              <h3 className="ml-4 text-2xl font-semibold mb-8 text-gray-900">
                Register using our Discord bot
              </h3>
            </div>
            <div className="flex justify-start shadow-md items-center w-full max-w-4xl mx-auto">
              <img
                src={register}
                alt="register"
                className="w-96 h-96 bg-gray-50"
              />
              <div className=" text-gray-600 text-xl px-12">
                Enter details about your newsletter like your niche, ad copy and
                your goals.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-center mb-8 gap-3 ">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl font-bold">
                3
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                Connect with other creators
              </h3>
            </div>
            <BentoGrid>
              {features2.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
