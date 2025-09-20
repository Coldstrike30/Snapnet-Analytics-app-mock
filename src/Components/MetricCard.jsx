import React from 'react';
import { EllipsisVertical } from "lucide-react";

const MetricCard = ({ title, value, change, trend = "up", Icon, iconColor = "#22C55E", noTopBorder }) => {
  const trendColor = trend === "up" ? "text-green-600" : "text-red-500";
  const trendArrow = trend === "up" ? "↑" : "↓";

  const outerContainerClasses = `
    p-3 bg-gray-100 rounded-xl border border-green-600
    ${noTopBorder ? 'border-t-0' : ''}
  `;

  return (
    <div className={outerContainerClasses}>
      <div className="bg-white rounded-lg p-5 h-48 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: iconColor }}
            >
              {Icon ? <Icon size={24} color="#fff" /> : null}
            </div>
            <div className="text-sm text-gray-700 leading-tight font-medium max-w-[160px]">
              {title}
            </div>
          </div>
          <button className="text-gray-500 p-1 rounded-full hover:bg-gray-100">
            <EllipsisVertical className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-right">
            <div className={`text-base font-semibold ${trendColor}`}>
              {change} {trendArrow}
            </div>
            <div className="text-sm font-medium text-gray-500 mt-1">vs preceding month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;