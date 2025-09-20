import React, { useState } from "react";
import LineChartCard from "./components/LineChartCard.jsx";
import DonutChartCard from "./components/DonutChartCard.jsx";
import StackedChartCard from "./components/StackedChartCard.jsx";
import HistogramCard from "./components/HistogramCard.jsx";
import MetricCard from "./components/MetricCard.jsx";
import { Search } from "lucide-react";


const IconDashboard = ({ className = "" }) => (
  <svg className={className} width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3zM3 21h8v-6H3v6z" />
  </svg>
);
const IconUsersSidebar = ({ className = "" }) => (
  <svg className={className} width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M20 8v1" />
  </svg>
);
const IconIT = ({ className = "" }) => (
  <svg className={className} width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 20h9" />
    <path d="M12 4h9" />
    <path d="M4 9h16v6H4z" />
  </svg>
);
const IconCompliance = ({ className = "" }) => (
  <svg className={className} width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M20 21V7l-8-4-8 4v14h16z" />
  </svg>
);


const IconAccount = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const IconTrial = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
);
const IconSubscription = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4-8-12a8 8 0 0 1 16 0c0 8-8 12-8 12z"></path><path d="M12 2a8 8 0 0 1 8 8c0 8-8 12-8 12s-8-4-8-12a8 8 0 0 1 8-8z"></path><path d="M12 17.5l2-2.5 2-2.5"></path><path d="M12 17.5l-2-2.5-2-2.5"></path><path d="M12 17.5L8 12.5"></path><path d="M12 17.5L16 12.5"></path></svg>
);
const IconNew = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
);
const IconRenewal = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 8a9.8 9.8 0 0 0-14.7-6.2"></path><path d="M2.5 16a9.8 9.8 0 0 0 14.7 6.2"></path><path d="M8 2v4a2 2 0 0 1-2 2H2"></path><path d="M16 22v-4a2 2 0 0 1 2-2h4"></path></svg>
);
const IconExpire = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12l10 10 10-10L12 2z"></path><line x1="12" y1="6" x2="12" y2="18"></line><line x1="18" y1="12" x2="6" y2="12"></line></svg>
);
const IconExpired = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
);
const IconDeactivated = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="18" y1="8" x2="22" y2="12"></line><line x1="22" y1="8" x2="18" y2="12"></line></svg>
);

const data = {
  metrics: [
    { title: "Active Accounts", value: 450, change: "+2", trend: "up", Icon: IconAccount, iconColor: "#E15759" },
    { title: "Accounts on Free Trial", value: 4, change: "+2", trend: "up", Icon: IconTrial, iconColor: "#67B7DC" },
    { title: "Subscribed Accounts", value: 120, change: "+2", trend: "up", Icon: IconSubscription, iconColor: "#59A14F" },
    { title: "New Subscriptions (This Month)", value: 3, change: "+2", trend: "up", Icon: IconNew, iconColor: "#F28E2B" },
    { title: "Subscribed Accounts on Auto Renewal", value: 80, change: "+2", trend: "up", Icon: IconRenewal, iconColor: "#4E79A7" },
    { title: "Subscribed Accounts Due to Expire", value: 5, change: "+2", trend: "up", Icon: IconExpire, iconColor: "#A77A4E" },
    { title: "Expired Subscription Accounts", value: 6, change: "-2", trend: "down", Icon: IconExpired, iconColor: "#EF4444" },
    { title: "Total Deactivated Accounts", value: 20, change: "+2", trend: "up", Icon: IconDeactivated, iconColor: "#6B7280" },
  ],
  totalRevenue: [
    { name: 'Jan', value: 5 }, { name: 'Feb', value: 15 }, { name: 'Mar', value: 25 }, { name: 'Apr', value: 45 },
    { name: 'May', value: 12 }, { name: 'Jun', value: 15 }, { name: 'Jul', value: 3 }, { name: 'Aug', value: 10 },
    { name: 'Sep', value: 20 }, { name: 'Oct', value: 40 }, { name: 'Nov', value: 25 }, { name: 'Dec', value: 20 },
  ],
  recurringRevenue: [
    { name: 'Jan', value: 5 }, { name: 'Feb', value: 15 }, { name: 'Mar', value: 25 }, { name: 'Apr', value: 45 },
    { name: 'May', value: 12 }, { name: 'Jun', value: 15 }, { name: 'Jul', value: 3 }, { name: 'Aug', value: 10 },
    { name: 'Sep', value: 20 }, { name: 'Oct', value: 40 }, { name: 'Nov', value: 25 }, { name: 'Dec', value: 20 },
  ],
  arr: [
    { name: 'Jan', value: 5 }, { name: 'Feb', value: 15 }, { name: 'Mar', value: 25 }, { name: 'Apr', value: 45 },
    { name: 'May', value: 12 }, { name: 'Jun', value: 15 }, { name: 'Jul', value: 3 }, { name: 'Aug', value: 10 },
    { name: 'Sep', value: 20 }, { name: 'Oct', value: 40 }, { name: 'Nov', value: 25 }, { name: 'Dec', value: 20 },
  ],
  tenantSize: [
    { name: 'Jun 12', SME: 30, MSME: 25, 'Large Enterprise': 18 },
    { name: 'Jun 13', SME: 30, MSME: 25, 'Large Enterprise': 18 },
    { name: 'Jun 14', SME: 30, MSME: 25, 'Large Enterprise': 18 },
  ],
  subscriptionType: [
    { name: 'Jan', 'Plan-based revenue': 10, 'Module-based revenue': 5 },
    { name: 'Feb', 'Plan-based revenue': 20, 'Module-based revenue': 15 },
    { name: 'Mar', 'Plan-based revenue': 28, 'Module-based revenue': 20 },
    { name: 'Apr', 'Plan-based revenue': 20, 'Module-based revenue': 12 },
    { name: 'May', 'Plan-based revenue': 23, 'Module-based revenue': 15 },
    { name: 'Jun', 'Plan-based revenue': 18, 'Module-based revenue': 10 },
  ],
  discountImpact: [
    { name: 'Jan', 'Paid Amount': 10, 'Discount Amount': 5 },
    { name: 'Feb', 'Paid Amount': 15, 'Discount Amount': 5 },
    { name: 'Mar', 'Paid Amount': 20, 'Discount Amount': 10 },
    { name: 'Apr', 'Paid Amount': 20, 'Discount Amount': 5 },
    { name: 'May', 'Paid Amount': 23, 'Discount Amount': 5 },
    { name: 'Jun', 'Paid Amount': 12, 'Discount Amount': 5 },
  ],
  addOnRevenue: [
    { name: 'Jun 12', Biometrics: 20, 'Extra Storage': 25, Training: 18 },
    { name: 'Jun 13', Biometrics: 20, 'Extra Storage': 25, Training: 18 },
    { name: 'Jun 14', Biometrics: 20, 'Extra Storage': 25, Training: 18 },
  ],
  salesData: {
    monthlySales: [
      { name: 'Jan', value: 15 }, { name: 'Feb', value: 25 }, { name: 'Mar', value: 30 },
      { name: 'Apr', value: 45 }, { name: 'May', value: 35 }, { name: 'Jun', value: 50 },
      { name: 'Jul', value: 60 }, { name: 'Aug', value: 55 }, { name: 'Sep', value: 65 },
      { name: 'Oct', value: 70 }, { name: 'Nov', value: 80 }, { name: 'Dec', value: 90 },
    ],
    conversionRate: [
      { name: 'Jan', value: 8 }, { name: 'Feb', value: 12 }, { name: 'Mar', value: 10 },
      { name: 'Apr', value: 15 }, { name: 'May', value: 13 }, { name: 'Jun', value: 18 },
      { name: 'Jul', value: 20 }, { name: 'Aug', value: 18 }, { name: 'Sep', value: 22 },
      { name: 'Oct', value: 25 }, { name: 'Nov', value: 24 }, { name: 'Dec', value: 28 },
    ],
    salesByRegion: [
      { name: 'North', Sales: 300 },
      { name: 'South', Sales: 250 },
      { name: 'East', Sales: 350 },
      { name: 'West', Sales: 280 },
    ],
    salesByTeam: [
      { name: 'Q1', 'Team A': 40, 'Team B': 30, 'Team C': 50 },
      { name: 'Q2', 'Team A': 45, 'Team B': 35, 'Team C': 55 },
      { name: 'Q3', 'Team A': 50, 'Team B': 40, 'Team C': 60 },
      { name: 'Q4', 'Team A': 55, 'Team B': 45, 'Team C': 65 },
    ]
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Revenue Metrics");
  const tabs = [
    "Revenue Metrics",
    "Sales Performance Metrics",
  ];

  const revenueCharts = [
    { component: LineChartCard, props: { title: "Total Revenue", data: data.totalRevenue, lineColor: "#0088FE", type: "monotone" }, filters: ['dateRange', 'country'] },
    { component: StackedChartCard, props: { title: "Revenue by Subscription Type", data: data.subscriptionType, colors: ['#FFBB28', '#FF8042'], dataKeys: ['Plan-based revenue', 'Module-based revenue'] }, filters: ['dateRange'] },
    { component: HistogramCard, props: { title: "Revenue by Tenant Size", data: data.tenantSize, colors: ['#FF5252', '#FFC947', '#56C596'], dataKeys: ['SME', 'MSME', 'Large Enterprise'] }, filters: ['dateRange'] },
    { component: LineChartCard, props: { title: "Recurring Revenue (MRR)", data: data.recurringRevenue, lineColor: "#4CAF50", type: "monotone" }, filters: ['dateRange', 'tenants'] },
    { component: StackedChartCard, props: { title: "Discount Impact", data: data.discountImpact, colors: ['#59A14F', '#A7DBA7'], dataKeys: ['Paid Amount', 'Discount Amount'], barThickness: 20 }, filters: ['dateRange'] },
    { component: DonutChartCard, props: { title: "Revenue Affected by Discounts", data: [{ name: "Tenant A", value: 45000 }, { name: "Tenant B", value: 55000 }], colors: ['#59A14F', '#FF5252'], innerRadius: 70, outerRadius: 100 }, filters: ['dateRange', 'tenants'] },
    { component: LineChartCard, props: { title: "Recurring Revenue (ARR)", data: data.arr, lineColor: "#FF9800", type: "monotone" }, filters: ['dateRange', 'tenants'] },
    { component: HistogramCard, props: { title: "Add-On Revenue", data: data.addOnRevenue, colors: ['#FF5252', '#2B9EBF', '#FFC947'], dataKeys: ['Biometrics', 'Extra Storage', 'Training'] }, filters: ['dateRange'] }
  ];

  const salesCharts = [
    { component: LineChartCard, props: { title: "Monthly Sales", data: data.salesData.monthlySales, lineColor: "#0088FE", type: "monotone" }, filters: ['dateRange', 'country'] },
    { component: LineChartCard, props: { title: "Conversion Rate", data: data.salesData.conversionRate, lineColor: "#FF5252", type: "monotone" }, filters: ['dateRange', 'country'] },
    { component: HistogramCard, props: { title: "Sales by Region", data: data.salesData.salesByRegion, colors: ['#2B9EBF'], dataKeys: ['Sales'] }, filters: ['dateRange'] },
    { component: StackedChartCard, props: { title: "Sales by Team", data: data.salesData.salesByTeam, colors: ['#FFC947', '#56C596', '#FF5252'], dataKeys: ['Team A', 'Team B', 'Team C'] }, filters: ['dateRange'] },
    { component: StackedChartCard, props: { title: "Revenue by Subscription Type", data: data.subscriptionType, colors: ['#FFBB28', '#FF8042'], dataKeys: ['Plan-based revenue', 'Module-based revenue'] }, filters: ['dateRange'] },
    { component: StackedChartCard, props: { title: "Discount Impact", data: data.discountImpact, colors: ['#59A14F', '#A7DBA7'], dataKeys: ['Paid Amount', 'Discount Amount'], barThickness: 20 }, filters: ['dateRange'] }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="bg-white shadow-lg z-10">
        <div className="w-full px-6 py-5 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-gray-800">HCMatrix</div>
          <div className="flex items-center gap-6">
            <button className="p-3 text-2xl rounded-full hover:bg-gray-100">🔍</button>
            <button className="p-3 text-2xl rounded-full hover:bg-gray-100">🌙</button>
            <button className="p-3 text-2xl rounded-full text-red-500 hover:bg-gray-100">⚙️</button>
            <button className="p-3 text-2xl rounded-full hover:bg-gray-100">🔔</button>
            <img src="/profile.jpg" alt="profile" className="w-12 h-12 rounded-full border" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        <aside className="w-[8.5rem] bg-gray-100 border-r flex flex-col items-center p-6 gap-10">
          {[IconDashboard, IconUsersSidebar, IconIT, IconCompliance].map((IconComp, idx) => (
            <button
              key={idx}
              className="flex items-center justify-center w-16 h-16 rounded-xl hover:bg-gray-100 text-gray-700"
              style={{ border: "2px solid rgba(0,0,0,0.1)" }}
            >
              <IconComp className="text-gray-600 w-9 h-9" />
            </button>
          ))}
        </aside>

        <main className="flex-1 min-w-0 flex flex-col overflow-auto bg-white p-12 lg:p-16">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-4">Sales Metrics</h1>

          <div className="flex gap-10 mb-8 border-b border-gray-200">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`relative pb-2 font-medium text-lg text-gray-600 focus:outline-none focus:ring-0 ${activeTab === t ? 'text-red-500' : 'hover:text-red-500'}`}
              >
                {t}
                {activeTab === t && <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 rounded" />}
              </button>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-8 w-full">
            {activeTab === "Revenue Metrics" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {data.metrics.map((m, idx) => <MetricCard key={idx} {...m} noTopBorder={idx < 4} />)}
                </div>

                <div className="flex flex-wrap -m-4">
                  {revenueCharts.map((chart, idx) => {
                    const Comp = chart.component;
                    return (
                      <div key={idx} className="w-full md:w-1/2 p-4 min-h-[400px]">
                        <Comp {...chart.props} filters={chart.filters} />
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {activeTab === "Sales Performance Metrics" && (
              <div className="flex flex-wrap -m-4">
                {salesCharts.map((chart, idx) => {
                  const Comp = chart.component;
                  return (
                    <div key={idx} className="w-full md:w-1/2 p-4 min-h-[400px]">
                      <Comp {...chart.props} filters={chart.filters} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}