import { useState } from 'react';
import { OverviewScreen } from './components/overview-screen';
import { UserAnalyticsScreen } from './components/user-analytics-screen';
import { ConversionFunnelScreen } from './components/conversion-funnel-screen';
import { UXInsightsScreen } from './components/ux-insights-screen';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <h1 className="text-blue-600">Admin Analytics Dashboard</h1>
        </header>

        {/* Tabs for different screens */}
        <div className="p-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="user-analytics">User Analytics</TabsTrigger>
              <TabsTrigger value="conversion">Conversion Funnel</TabsTrigger>
              <TabsTrigger value="ux-insights">UX Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <OverviewScreen />
            </TabsContent>

            <TabsContent value="user-analytics">
              <UserAnalyticsScreen />
            </TabsContent>

            <TabsContent value="conversion">
              <ConversionFunnelScreen />
            </TabsContent>

            <TabsContent value="ux-insights">
              <UXInsightsScreen />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
