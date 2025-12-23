import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, UserCheck, Activity, DollarSign, ShoppingCart } from 'lucide-react';

// Mock data for revenue trend
const revenueTrendData = [
  { month: 'Aug', revenue: 42000 },
  { month: 'Sep', revenue: 48000 },
  { month: 'Oct', revenue: 53000 },
  { month: 'Nov', revenue: 61000 },
  { month: 'Dec', revenue: 72000 },
];

const kpiData = [
  {
    title: 'Visitors Today',
    value: '12,847',
    subtext: 'Unique page views',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Logged-in Users Today',
    value: '3,421',
    subtext: 'Active sessions',
    icon: UserCheck,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Active Users Now',
    value: '847',
    subtext: 'Currently online',
    icon: Activity,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Revenue Today',
    value: '$8,432',
    subtext: 'Total sales',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Orders Today',
    value: '284',
    subtext: 'Completed orders',
    icon: ShoppingCart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
];

export function OverviewScreen() {
  return (
    <div className="space-y-6">
      {/* KPI Cards Row */}
      <div className="grid grid-cols-5 gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className="border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{kpi.title}</p>
                    <p className="text-3xl mb-1">{kpi.value}</p>
                    <p className="text-xs text-gray-500">{kpi.subtext}</p>
                  </div>
                  <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-5 h-5 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue Trend Chart */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Revenue Trend (Last 5 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={revenueTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">
            Metrics are aggregated from backend analytics tables
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
