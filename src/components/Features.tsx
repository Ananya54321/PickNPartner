import React from 'react';
import { Users, Zap, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    Icon: Users,
    title: 'Targeted Audience',
    description: 'Connect with newsletters in your niche for highly relevant subscriber exchange.',
  },
  {
    Icon: Zap,
    title: 'Quick Growth',
    description: 'Achieve faster growth through our proven audience exchange platform.',
  },
  {
    Icon: Shield,
    title: 'Quality Assured',
    description: 'We verify all partners to ensure high-quality subscriber exchanges.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}