import React, { useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";

export default function Calculator() {
  const [subscribers, setSubscribers] = useState(1000);
  const [months, setMonths] = useState(3);

  const handleSubscriberInput = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setSubscribers(value);
    }
  };

  const handleMonthInput = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setMonths(value);
    }
  };

  const twitterCost = subscribers * 0.8 * months; // Cost per subscriber * number of subscribers * months
  const platformCost = subscribers * 0 * months; // Free through platform

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <CalculatorIcon className="h-8 w-8 text-indigo-600" />
        <h3 className="ml-3 text-2xl font-bold text-gray-900">
          Cost Calculator
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-4">
            I have{" "}
            <input
              type="number"
              className="bg-slate-200 w-24 px-2 py-1 rounded"
              name="subs"
              value={2345}
              id="subs"
            />{" "}
            subscribers and I will use the creator network for{" "}
            <input
              type="number"
              name="mon"
              id="mon"
              className="bg-slate-200 w-16 px-2 py-1 rounded"
              value={months}
              onChange={handleMonthInput}
              min="1"
              max="12"
            />{" "}
            months.
          </p>

          <label className="block font-medium text-gray-700 mb-2">
            I want to increase my subscriber count by:
          </label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={subscribers}
            onChange={(e) => setSubscribers(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center mt-2 text-lg font-semibold text-indigo-600">
            {subscribers.toLocaleString()} subscribers
          </div>
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Duration
          </label>
          <input
            type="range"
            min="1"
            max="12"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center mt-2 text-lg font-semibold text-indigo-600">
            {months} {months === 1 ? "month" : "months"}
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-red-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-red-700 mb-2">
              Twitter Ads Cost
            </h4>
            <p className="text-3xl font-bold text-red-600">
              ${twitterCost.toLocaleString()}
            </p>
            <p className="text-sm text-red-600 mt-1">Based on average CPA</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-green-700 mb-2">
              Pick and Partner Cost
            </h4>
            <p className="text-3xl font-bold text-green-600">
              ${platformCost.toLocaleString()}
            </p>
            <p className="text-sm text-green-600 mt-1">100% cost savings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
