import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "lucide-react";
function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 45000, expences: 32000 },
    { month: "Feb", revenue: 52000, expences: 38000 },
    { month: "Mar", revenue: 48000, expences: 35000 },
    { month: "Apr", revenue: 61000, expences: 42000 },
    { month: "May", revenue: 55000, expences: 40000 },
    { month: "Jun", revenue: 67000, expences: 45000 },
    { month: "Jul", revenue: 72000, expences: 48000 },
    { month: "Aug", revenue: 69000, expences: 46000 },
    { month: "Sep", revenue: 78000, expences: 52000 },
    { month: "Oct", revenue: 74000, expences: 50000 },
    { month: "Nov", revenue: 82000, expences: 55000 },
    { month: "Dec", revenue: 89000, expences: 58000 },
  ];
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly revenue and expenses
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <span>Revenue</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"></div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span>Expenses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-88"></div>
    </div>
  );
}
export default RevenueChart;
