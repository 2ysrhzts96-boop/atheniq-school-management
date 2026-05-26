import { AppLayout } from "./_shared/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Clock, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const attendanceData = [
  { day: 'Mon', rate: 96.5 },
  { day: 'Tue', rate: 97.2 },
  { day: 'Wed', rate: 95.8 },
  { day: 'Thu', rate: 98.1 },
  { day: 'Fri', rate: 97.5 },
];

const recentEnrollments = [
  { id: 1, name: "Emma Thompson", class: "10-A", date: "Oct 24, 2023", status: "Active", avatar: "ET" },
  { id: 2, name: "Liam Rodriguez", class: "9-C", date: "Oct 23, 2023", status: "Pending", avatar: "LR" },
  { id: 3, name: "Sophia Chen", class: "11-B", date: "Oct 21, 2023", status: "Active", avatar: "SC" },
  { id: 4, name: "Noah Williams", class: "8-A", date: "Oct 19, 2023", status: "Active", avatar: "NW" },
];

const upcomingEvents = [
  { id: 1, title: "Parent-Teacher Conference", time: "Tomorrow, 4:00 PM", type: "meeting" },
  { id: 2, title: "Mid-term Science Exam", time: "Friday, 9:00 AM", type: "exam" },
  { id: 3, title: "Staff Development Day", time: "Next Monday", type: "holiday" },
];

export function AdminDashboard() {
  return (
    <AppLayout pageTitle="Admin Dashboard">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Students" value="1,248" change="+12 this month" icon={<Users className="text-blue-500" />} />
        <MetricCard title="Total Teachers" value="84" change="Fully staffed" icon={<GraduationCap className="text-indigo-500" />} />
        <MetricCard title="Attendance Today" value="97.2%" change="-0.3% from avg" icon={<Clock className="text-amber-500" />} />
        <MetricCard title="School GPA Avg" value="3.42" change="+0.1 since last term" icon={<TrendingUp className="text-emerald-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="lg:col-span-2 border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Weekly Attendance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                  <YAxis domain={[90, 100]} axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#0f172a', fontWeight: 600 }}
                  />
                  <Line type="monotone" dataKey="rate" stroke="#0d9488" strokeWidth={3} dot={{ r: 4, fill: '#0d9488', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold text-slate-800">Upcoming</CardTitle>
            <Calendar className="h-5 w-5 text-slate-400" />
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="flex gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50">
                <div className={`w-2 rounded-full ${
                  event.type === 'meeting' ? 'bg-blue-500' : 
                  event.type === 'exam' ? 'bg-amber-500' : 'bg-emerald-500'
                }`} />
                <div>
                  <h4 className="font-medium text-sm text-slate-800">{event.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{event.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2 text-[#0d9488] border-[#0d9488]/20 hover:bg-[#0d9488]/5">
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Enrollments */}
        <Card className="lg:col-span-2 border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold text-slate-800">Recent Enrollments</CardTitle>
            <Button variant="ghost" size="sm" className="text-[#0d9488]">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-medium rounded-tl-lg">Student</th>
                    <th className="px-4 py-3 font-medium">Class</th>
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEnrollments.map((student) => (
                    <tr key={student.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-[#1e2a4a] text-white text-xs">{student.avatar}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-slate-800">{student.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{student.class}</td>
                      <td className="px-4 py-3 text-slate-600">{student.date}</td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className={
                          student.status === 'Active' 
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }>
                          {student.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-[#1e2a4a] hover:bg-[#1e2a4a]/90 text-white">
              <Users className="mr-2 h-4 w-4" /> Add New Student
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <AlertCircle className="mr-2 h-4 w-4 text-amber-500" /> Send Emergency Alert
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4 text-blue-500" /> Create Event
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <GraduationCap className="mr-2 h-4 w-4 text-indigo-500" /> Generate Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

function MetricCard({ title, value, change, icon }: { title: string, value: string, change: string, icon: React.ReactNode }) {
  return (
    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="mt-4 flex items-center text-xs">
          <span className="text-slate-500">{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}
