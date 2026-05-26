import { AppLayout } from "./_shared/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Printer, Download, Settings, BarChart3 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

const students = [
  { id: 1, name: "Alexander Mercer", q1: 92, mid: 88, proj: 95, final: 91, avg: 91.5 },
  { id: 2, name: "Benjamin Carter", q1: 78, mid: 82, proj: 85, final: 80, avg: 81.3 },
  { id: 3, name: "Chloe Davis", q1: 95, mid: 98, proj: 96, final: 99, avg: 97.0 },
  { id: 4, name: "Daniel Evans", q1: 65, mid: 70, proj: 75, final: 72, avg: 70.5 },
  { id: 5, name: "Emma Foster", q1: 88, mid: 85, proj: 90, final: 87, avg: 87.5 },
  { id: 6, name: "Finn Garcia", q1: 82, mid: 79, proj: 88, final: 84, avg: 83.3 },
  { id: 7, name: "Grace Harris", q1: 98, mid: 95, proj: 100, final: 97, avg: 97.5 },
  { id: 8, name: "Henry Ito", q1: 72, mid: 68, proj: 80, final: 75, avg: 73.8 },
  { id: 9, name: "Isabella Jones", q1: 85, mid: 89, proj: 92, final: 90, avg: 89.0 },
  { id: 10, name: "Jack Kim", q1: 90, mid: 92, proj: 88, final: 94, avg: 91.0 },
];

const distributionData = [
  { grade: 'A (90-100)', count: 4, color: '#10b981' },
  { grade: 'B (80-89)', count: 4, color: '#3b82f6' },
  { grade: 'C (70-79)', count: 2, color: '#f59e0b' },
  { grade: 'D (60-69)', count: 0, color: '#f43f5e' },
  { grade: 'F (<60)', count: 0, color: '#ef4444' },
];

export function Gradebook() {
  const getGradeColor = (score: number) => {
    if (score >= 90) return "text-emerald-700 bg-emerald-50";
    if (score >= 80) return "text-blue-700 bg-blue-50";
    if (score >= 70) return "text-amber-700 bg-amber-50";
    return "text-rose-700 bg-rose-50";
  };

  const getLetterGrade = (score: number) => {
    if (score >= 97) return "A+";
    if (score >= 93) return "A";
    if (score >= 90) return "A-";
    if (score >= 87) return "B+";
    if (score >= 83) return "B";
    if (score >= 80) return "B-";
    if (score >= 77) return "C+";
    if (score >= 73) return "C";
    if (score >= 70) return "C-";
    if (score >= 60) return "D";
    return "F";
  };

  return (
    <AppLayout pageTitle="Gradebook">
      {/* Top Controls */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="class1">
            <SelectTrigger className="w-[200px] border-slate-200 font-medium">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="class1">Advanced Calculus - 11A</SelectItem>
              <SelectItem value="class2">Physics Lab - 11B</SelectItem>
              <SelectItem value="class3">Computer Science - 10A</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="term1">
            <SelectTrigger className="w-[150px] border-slate-200">
              <SelectValue placeholder="Select Term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="term1">Fall Term</SelectItem>
              <SelectItem value="term2">Spring Term</SelectItem>
              <SelectItem value="year">Full Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Search student..." className="h-9 pl-9 w-[200px]" />
          </div>
          <Button variant="outline" className="h-9 border-slate-200 text-slate-600">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
          <Button className="h-9 bg-[#1e2a4a] hover:bg-[#1e2a4a]/90 text-white">
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Gradebook Table */}
        <Card className="lg:col-span-3 border-slate-200 shadow-sm overflow-hidden bg-white">
          <CardHeader className="py-4 border-b border-slate-100 flex flex-row items-center justify-between bg-slate-50/50">
            <CardTitle className="text-lg font-semibold text-slate-800">Class Grades</CardTitle>
            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-800">
              <Settings className="h-4 w-4 mr-2" /> Manage Columns
            </Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 font-medium min-w-[200px] border-r border-slate-200">Student Name</th>
                  <th className="px-4 py-4 font-medium text-center">Quiz 1 <br/><span className="text-[10px] text-slate-400 normal-case">(10%)</span></th>
                  <th className="px-4 py-4 font-medium text-center">Midterm <br/><span className="text-[10px] text-slate-400 normal-case">(30%)</span></th>
                  <th className="px-4 py-4 font-medium text-center">Project <br/><span className="text-[10px] text-slate-400 normal-case">(20%)</span></th>
                  <th className="px-4 py-4 font-medium text-center border-r border-slate-200">Final Exam <br/><span className="text-[10px] text-slate-400 normal-case">(40%)</span></th>
                  <th className="px-6 py-4 font-bold text-center bg-slate-100">Final Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-3 font-medium text-slate-800 border-r border-slate-100">
                      {student.name}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="w-12 mx-auto rounded p-1 hover:bg-slate-100 cursor-pointer">{student.q1}</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="w-12 mx-auto rounded p-1 hover:bg-slate-100 cursor-pointer">{student.mid}</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="w-12 mx-auto rounded p-1 hover:bg-slate-100 cursor-pointer">{student.proj}</div>
                    </td>
                    <td className="px-4 py-3 text-center border-r border-slate-100">
                      <div className="w-12 mx-auto rounded p-1 hover:bg-slate-100 cursor-pointer">{student.final}</div>
                    </td>
                    <td className="px-6 py-3 text-center bg-slate-50/50 group-hover:bg-slate-100/50">
                      <div className={`inline-flex items-center justify-center font-bold px-3 py-1 rounded-md min-w-[60px] ${getGradeColor(student.avg)}`}>
                        {student.avg.toFixed(1)}% <span className="ml-1 opacity-70 font-normal">({getLetterGrade(student.avg)})</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-100 border-t-2 border-slate-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-700 text-right border-r border-slate-200">Class Average</td>
                  <td className="px-4 py-4 text-center font-medium text-slate-600">84.5</td>
                  <td className="px-4 py-4 text-center font-medium text-slate-600">84.6</td>
                  <td className="px-4 py-4 text-center font-medium text-slate-600">88.9</td>
                  <td className="px-4 py-4 text-center font-medium text-slate-600 border-r border-slate-200">86.9</td>
                  <td className="px-6 py-4 text-center font-bold text-slate-800">86.2%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>

        {/* Sidebar Analytics */}
        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm bg-white">
            <CardHeader className="py-4 border-b border-slate-100">
              <CardTitle className="text-base font-semibold text-slate-800 flex items-center">
                <BarChart3 className="mr-2 h-4 w-4 text-[#0d9488]" /> Grade Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 pb-2 px-4">
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={distributionData} margin={{ top: 0, right: 0, bottom: 20, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="grade" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} dy={10} interval={0} angle={-30} textAnchor="end" />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                    <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm bg-emerald-50 border-emerald-100">
            <CardContent className="p-5">
              <h4 className="font-semibold text-emerald-800 mb-1">High Performance</h4>
              <p className="text-sm text-emerald-600 mb-4">4 students are currently eligible for the honors list.</p>
              <Button size="sm" variant="outline" className="w-full bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                View Honors List
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm bg-rose-50 border-rose-100">
            <CardContent className="p-5">
              <h4 className="font-semibold text-rose-800 mb-1">Needs Attention</h4>
              <p className="text-sm text-rose-600 mb-4">1 student is currently failing and may need intervention.</p>
              <Button size="sm" variant="outline" className="w-full bg-white text-rose-700 border-rose-200 hover:bg-rose-100">
                Draft Intervention Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
