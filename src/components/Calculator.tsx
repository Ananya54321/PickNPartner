import { useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import { Slider } from "./ui/slider";

export default function Calculator() {
  const [subscribers, setSubscribers] = useState(1000);

  const twitterCost = subscribers * 0.8; // Assuming $0.80 per subscriber for Twitter ads
  const platformCost = subscribers * 0; // Assuming $0.20 per subscriber through platform

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <CalculatorIcon className="h-8 w-8" />
        <h3 className="ml-3 text-2xl font-bold text-gray-900">
          Cost Calculator
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="subscribers"
            className="block text-sm font-medium text-gray-700 mb-2">
            Target Subscribers
          </label>
          <Slider
            defaultValue={[subscribers]}
            min={100}
            max={10000}
            step={100}
            onValueChange={(value: number[]) => setSubscribers(value[0])}
          />
          <div className="text-center mt-2 text-lg font-semibold">
            {subscribers.toLocaleString()} subscribers
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-black mb-2">
              Twitter Ads Cost
            </h4>
            <p className="text-3xl font-bold text-black">
              ${twitterCost.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mt-1">Based on average CPA</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-black mb-2">
              Pick and Partner Cost
            </h4>
            <p className="text-3xl font-bold text-black">
              ${platformCost.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mt-1">100% cost savings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
