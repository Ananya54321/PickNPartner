import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-gray-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
