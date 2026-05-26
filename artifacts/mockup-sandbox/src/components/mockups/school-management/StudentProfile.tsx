import { AppLayout } from "./_shared/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, FileText, Download, Calendar as CalendarIcon, Clock, Award, TrendingUp } from "lucide-react";

const studentData = {
  name: "Alexander Mercer",
  id: "STU-2021-0492",
  grade: "11th Grade - Section A",
  status: "Active",
  dob: "May 14, 2007",
  bloodType: "O+",
  address: "428 Park Avenue, Suite 3B, NY 10022",
  enrollmentDate: "Sep 1, 2021",
  parentName: "Elizabeth Mercer (Mother)",
  parentPhone: "+1 (555) 234-5678",
  parentEmail: "e.mercer@example.com",
  gpa: "3.85",
  attendance: "98.2%",
  rank: "14 / 320"
};

const gradesData = [
  { subject: "Advanced Calculus", term1: "A-", term2: "A", credits: 4, teacher: "Mr. Harrison" },
  { subject: "AP Physics", term1: "B+", term2: "A-", credits: 4, teacher: "Dr. Chen" },
  { subject: "World Literature", term1: "A", term2: "A", credits: 3, teacher: "Ms. Davis" },
  { subject: "US History", term1: "A-", term2: "B+", credits: 3, teacher: "Mr. Wilson" },
  { subject: "Computer Science II", term1: "A+", term2: "A", credits: 3, teacher: "Mrs. Patel" },
];

export function StudentProfile() {
  return (
    <AppLayout pageTitle="Student Profile">
      {/* Header Profile Card */}
      <Card className="border-[#ede9fe] shadow-sm overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-[#12082e] to-[#7c3aed]"></div>
        <CardContent className="px-8 pb-8 pt-0 relative">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-12 mb-6">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" />
              <AvatarFallback className="bg-slate-200 text-3xl">AM</AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-2">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-bold text-slate-800">{studentData.name}</h2>
                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-100">
                  {studentData.status}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-800">{studentData.id}</span>
                <span>{studentData.grade}</span>
                <span>Enrolled: {studentData.enrollmentDate}</span>
              </div>
            </div>
            <div className="flex gap-3 pb-2 w-full md:w-auto">
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white flex-1 md:flex-none">
                <Mail className="mr-2 h-4 w-4" /> Message
              </Button>
              <Button variant="outline" className="border-[#7c3aed] text-[#7c3aed] flex-1 md:flex-none">
                <Download className="mr-2 h-4 w-4" /> Report Card
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-100">
            {/* Academic Quick Stats */}
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Current GPA</p>
                <p className="text-xl font-bold text-slate-800">{studentData.gpa}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Attendance</p>
                <p className="text-xl font-bold text-slate-800">{studentData.attendance}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <TrendingUp className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Class Rank</p>
                <p className="text-xl font-bold text-slate-800">{studentData.rank}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Details */}
        <div className="space-y-6">
          <Card className="border-[#ede9fe] shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-semibold text-slate-800">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4 text-sm">
              <div>
                <p className="text-slate-500 mb-1">Date of Birth</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <CalendarIcon size={16} className="text-[#7c3aed]" /> {studentData.dob}
                </p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Blood Type</p>
                <p className="font-medium text-slate-800">{studentData.bloodType}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Address</p>
                <p className="font-medium text-slate-800 flex items-start gap-2">
                  <MapPin size={16} className="text-[#7c3aed] mt-0.5" /> 
                  <span>{studentData.address}</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#ede9fe] shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-semibold text-slate-800">Guardian Contact</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4 text-sm">
              <div>
                <p className="text-slate-500 mb-1">Name</p>
                <p className="font-medium text-slate-800">{studentData.parentName}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Phone Number</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <Phone size={16} className="text-[#7c3aed]" /> {studentData.parentPhone}
                </p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Email</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <Mail size={16} className="text-[#7c3aed]" /> {studentData.parentEmail}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Tabs */}
        <div className="lg:col-span-2">
          <Card className="border-[#ede9fe] shadow-sm h-full">
            <CardContent className="p-0">
              <Tabs defaultValue="academic" className="w-full">
                <div className="border-b border-slate-100 px-6">
                  <TabsList className="h-14 bg-transparent w-full justify-start gap-6 rounded-none p-0">
                    <TabsTrigger 
                      value="academic" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7c3aed] data-[state=active]:text-[#7c3aed] data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium h-14 px-2"
                    >
                      Academic History
                    </TabsTrigger>
                    <TabsTrigger 
                      value="attendance" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7c3aed] data-[state=active]:text-[#7c3aed] data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium h-14 px-2"
                    >
                      Attendance Record
                    </TabsTrigger>
                    <TabsTrigger 
                      value="documents" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7c3aed] data-[state=active]:text-[#7c3aed] data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium h-14 px-2"
                    >
                      Documents
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="academic" className="p-6 m-0 border-none outline-none">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-slate-800">Current Academic Year (2023-2024)</h3>
                    <Badge variant="outline" className="bg-slate-50 text-slate-600">Semester 2</Badge>
                  </div>
                  
                  <div className="rounded-lg border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#f5f3ff] text-[#4c1d95] font-semibold border-b border-[#ede9fe]">
                        <tr>
                          <th className="px-4 py-3">Subject</th>
                          <th className="px-4 py-3">Teacher</th>
                          <th className="px-4 py-3 text-center">Term 1</th>
                          <th className="px-4 py-3 text-center">Term 2</th>
                          <th className="px-4 py-3 text-center">Credits</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {gradesData.map((grade, i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                            <td className="px-4 py-3 font-medium text-slate-800">{grade.subject}</td>
                            <td className="px-4 py-3 text-slate-600">{grade.teacher}</td>
                            <td className="px-4 py-3 text-center">
                              <span className="inline-block min-w-8 font-semibold text-[#7c3aed]">{grade.term1}</span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className="inline-block min-w-8 font-semibold text-[#7c3aed]">{grade.term2}</span>
                            </td>
                            <td className="px-4 py-3 text-center text-slate-500">{grade.credits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="attendance" className="p-6 m-0 border-none outline-none text-center text-slate-500 py-12">
                  <CalendarIcon className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                  <p>Detailed attendance calendar view goes here.</p>
                </TabsContent>

                <TabsContent value="documents" className="p-6 m-0 border-none outline-none text-center text-slate-500 py-12">
                  <FileText className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                  <p>Student documents and uploaded files go here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
