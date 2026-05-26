import { AppLayout } from "./_shared/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Clock, FileWarning, Search, Download } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const rosterData = [
  { id: 1, name: "Alexander Mercer", status: "present", note: "" },
  { id: 2, name: "Benjamin Carter", status: "present", note: "" },
  { id: 3, name: "Chloe Davis", status: "absent", note: "Sick leave" },
  { id: 4, name: "Daniel Evans", status: "late", note: "10 mins" },
  { id: 5, name: "Emma Foster", status: "present", note: "" },
  { id: 6, name: "Finn Garcia", status: "excused", note: "Dentist appt" },
  { id: 7, name: "Grace Harris", status: "present", note: "" },
  { id: 8, name: "Henry Ito", status: "present", note: "" },
];

export function AttendanceTracker() {
  return (
    <AppLayout pageTitle="Attendance Tracker">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-2">
        <div className="flex items-center gap-3">
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="date" defaultValue="2023-10-24" className="pl-10 w-[200px] border-slate-200" />
          </div>
          <Select defaultValue="11a">
            <SelectTrigger className="w-[180px] border-slate-200">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11a">11th Grade - Sec A</SelectItem>
              <SelectItem value="11b">11th Grade - Sec B</SelectItem>
              <SelectItem value="10a">10th Grade - Sec A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-slate-600 border-slate-200">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button className="bg-[#0d9488] hover:bg-[#0d9488]/90 text-white">
            Save Attendance
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatusCard title="Present" count="24" percent="80%" color="emerald" icon={<CheckCircle2 />} />
        <StatusCard title="Absent" count="2" percent="6.6%" color="rose" icon={<XCircle />} />
        <StatusCard title="Late" count="3" percent="10%" color="amber" icon={<Clock />} />
        <StatusCard title="Excused" count="1" percent="3.3%" color="blue" icon={<FileWarning />} />
      </div>

      {/* Roster Table */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="py-4 border-b border-slate-100 flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-800">Class Roster (30 Students)</CardTitle>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input placeholder="Search student..." className="h-9 pl-9 w-[200px]" />
            </div>
            <Button variant="outline" size="sm" className="h-9">Mark All Present</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium w-[300px]">Student Name</th>
                  <th className="px-6 py-4 font-medium text-center">Status</th>
                  <th className="px-6 py-4 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rosterData.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-[#1e2a4a] text-white text-xs">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-slate-800">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <StatusToggle active={student.status === 'present'} color="emerald" label="P" />
                        <StatusToggle active={student.status === 'absent'} color="rose" label="A" />
                        <StatusToggle active={student.status === 'late'} color="amber" label="L" />
                        <StatusToggle active={student.status === 'excused'} color="blue" label="E" />
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <Input 
                        defaultValue={student.note} 
                        placeholder="Add note..." 
                        className="h-8 text-xs border-transparent hover:border-slate-200 focus:border-[#0d9488] bg-transparent hover:bg-white"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

function StatusCard({ title, count, percent, color, icon }: { title: string, count: string, percent: string, color: 'emerald' | 'rose' | 'amber' | 'blue', icon: React.ReactNode }) {
  const colorStyles = {
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
  };

  return (
    <Card className="border-slate-200 shadow-sm overflow-hidden">
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-slate-800">{count}</h3>
            <span className="text-xs font-medium text-slate-400">({percent})</span>
          </div>
        </div>
        <div className={`h-12 w-12 rounded-full flex items-center justify-center border ${colorStyles[color]}`}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

function StatusToggle({ active, color, label }: { active: boolean, color: 'emerald' | 'rose' | 'amber' | 'blue', label: string }) {
  const activeStyles = {
    emerald: "bg-emerald-500 text-white border-emerald-600",
    rose: "bg-rose-500 text-white border-rose-600",
    amber: "bg-amber-500 text-white border-amber-600",
    blue: "bg-blue-500 text-white border-blue-600",
  };
  
  const inactiveStyles = "bg-white text-slate-400 border-slate-200 hover:border-slate-300 hover:bg-slate-50";

  return (
    <button 
      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition-colors ${active ? activeStyles[color] : inactiveStyles}`}
    >
      {label}
    </button>
  );
}
