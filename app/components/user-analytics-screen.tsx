import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

// Mock data for charts
const loginsData = [
  { date: 'Dec 17', count: 234 },
  { date: 'Dec 18', count: 289 },
  { date: 'Dec 19', count: 267 },
  { date: 'Dec 20', count: 312 },
  { date: 'Dec 21', count: 298 },
  { date: 'Dec 22', count: 276 },
  { date: 'Dec 23', count: 341 },
];

const registrationsData = [
  { date: 'Dec 17', count: 45 },
  { date: 'Dec 18', count: 52 },
  { date: 'Dec 19', count: 48 },
  { date: 'Dec 20', count: 61 },
  { date: 'Dec 21', count: 58 },
  { date: 'Dec 22', count: 54 },
  { date: 'Dec 23', count: 67 },
];

const passwordChangesData = [
  { date: 'Dec 17', count: 12 },
  { date: 'Dec 18', count: 8 },
  { date: 'Dec 19', count: 15 },
  { date: 'Dec 20', count: 10 },
  { date: 'Dec 21', count: 14 },
  { date: 'Dec 22', count: 9 },
  { date: 'Dec 23', count: 11 },
];

// Mock table data
const activityData = [
  { date: '2024-12-23', event: 'User Login', count: 341, userType: 'Registered' },
  { date: '2024-12-23', event: 'New Registration', count: 67, userType: 'Guest' },
  { date: '2024-12-23', event: 'Password Change', count: 11, userType: 'Registered' },
  { date: '2024-12-22', event: 'User Login', count: 276, userType: 'Registered' },
  { date: '2024-12-22', event: 'New Registration', count: 54, userType: 'Guest' },
  { date: '2024-12-22', event: 'Password Change', count: 9, userType: 'Registered' },
  { date: '2024-12-21', event: 'User Login', count: 298, userType: 'Registered' },
  { date: '2024-12-21', event: 'New Registration', count: 58, userType: 'Guest' },
];

export function UserAnalyticsScreen() {
  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <Card className="border-gray-200">
        <CardContent className="pt-6">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Date Range</label>
              <Select defaultValue="last7days">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7days">Last 7 Days</SelectItem>
                  <SelectItem value="last30days">Last 30 Days</SelectItem>
                  <SelectItem value="last90days">Last 90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Country</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">City</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="nyc">New York</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">User Type</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                  <SelectItem value="registered">Registered</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Logins Per Day */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-base">Logins Per Day</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={loginsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
                <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Registrations Per Day */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-base">Registrations Per Day</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={registrationsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
                <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Password Changes Per Day */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-base">Password Changes Per Day</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={passwordChangesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
                <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Activity Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Count</TableHead>
                <TableHead>User Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.event}</TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell>
                    <Badge variant={row.userType === 'Registered' ? 'default' : 'secondary'}>
                      {row.userType}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-xs text-gray-500 mt-4">
            Based on aggregated user activity and audit logs
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
