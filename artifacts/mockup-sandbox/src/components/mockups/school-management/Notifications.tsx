import { AppLayout } from "./_shared/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Edit, Reply, MoreHorizontal, Archive, Star, Clock, AlertTriangle, Info, Download } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "Principal Jenkins",
    avatar: "PJ",
    subject: "Updated Policy for Final Exams",
    preview: "Please review the attached document regarding the new scheduling policy for the upcoming final exam week...",
    time: "10:42 AM",
    date: "Today",
    isUnread: true,
    type: "announcement"
  },
  {
    id: 2,
    sender: "System Alert",
    avatar: "SA",
    subject: "Server Maintenance Scheduled",
    preview: "The student portal will be down for scheduled maintenance this Saturday from 2:00 AM to 6:00 AM EST.",
    time: "08:15 AM",
    date: "Today",
    isUnread: true,
    type: "alert"
  },
  {
    id: 3,
    sender: "Elizabeth Mercer",
    avatar: "EM",
    subject: "Question about Alexander's Project",
    preview: "Hi Mr. Harrison, I just wanted to ask a quick question regarding the rubric for the final history project.",
    time: "Yesterday",
    date: "Oct 23",
    isUnread: false,
    type: "message"
  },
  {
    id: 4,
    sender: "Athletics Dept",
    avatar: "AD",
    subject: "Varsity Basketball Tryouts",
    preview: "Tryouts for the Boys and Girls Varsity Basketball teams will be held next Tuesday in the main gymnasium.",
    time: "Oct 22",
    date: "Oct 22",
    isUnread: false,
    type: "announcement"
  },
  {
    id: 5,
    sender: "Dr. Chen",
    avatar: "DC",
    subject: "Science Fair Registration Open",
    preview: "Registration for the annual district science fair is now open. All honors students are required to participate.",
    time: "Oct 20",
    date: "Oct 20",
    isUnread: false,
    type: "message"
  }
];

export function Notifications() {
  return (
    <AppLayout pageTitle="Messages & Notifications">
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
        
        {/* Left Panel: List */}
        <Card className="w-full lg:w-[400px] flex-shrink-0 border-[#ede9fe] shadow-sm flex flex-col bg-white overflow-hidden">
          <div className="p-4 border-b border-[#ede9fe] space-y-4 bg-white">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-slate-800">Inbox</h2>
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white h-8 px-3 text-xs">
                <Edit className="h-3 w-3 mr-2" /> Compose
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input placeholder="Search messages..." className="h-9 pl-9 bg-white focus-visible:ring-[#7c3aed]" />
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 bg-[#f5f3ff] p-1">
                <TabsTrigger value="all" className="text-xs data-[state=active]:text-[#7c3aed]">All</TabsTrigger>
                <TabsTrigger value="messages" className="text-xs data-[state=active]:text-[#7c3aed]">Direct</TabsTrigger>
                <TabsTrigger value="alerts" className="text-xs data-[state=active]:text-[#7c3aed]">Alerts</TabsTrigger>
                <TabsTrigger value="archived" className="text-xs data-[state=active]:text-[#7c3aed]">Archive</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-slate-100">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors relative ${msg.id === 1 ? 'bg-[#7c3aed]/5' : ''}`}
                >
                  {msg.isUnread && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7c3aed]"></div>
                  )}
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarFallback className={`text-xs font-semibold text-white ${
                        msg.type === 'alert' ? 'bg-[#f59e0b]' : 
                        msg.type === 'announcement' ? 'bg-[#12082e]' : 'bg-[#7c3aed]'
                      }`}>
                        {msg.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-0.5">
                        <span className={`text-sm truncate pr-2 ${msg.isUnread ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                          {msg.sender}
                        </span>
                        <span className="text-xs text-slate-500 shrink-0">{msg.time}</span>
                      </div>
                      <div className={`text-sm truncate mb-1 ${msg.isUnread ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
                        {msg.subject}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {msg.preview}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Right Panel: View */}
        <Card className="flex-1 border-[#ede9fe] shadow-sm flex flex-col bg-white overflow-hidden hidden lg:flex">
          <div className="h-16 border-b border-[#ede9fe] flex items-center justify-between px-6 shrink-0 bg-white">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:text-[#6d28d9] hover:bg-[#f5f3ff]"><Archive size={18} /></Button>
              <Button variant="ghost" size="icon" className="text-[#f59e0b] hover:text-[#d97706] hover:bg-[#f5f3ff]"><Star size={18} /></Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:text-[#6d28d9] hover:bg-[#f5f3ff]"><Reply size={18} /></Button>
              <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:text-[#6d28d9] hover:bg-[#f5f3ff]"><MoreHorizontal size={18} /></Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge className="bg-[#12082e] text-white hover:bg-[#12082e]">Announcement</Badge>
                <h2 className="text-2xl font-bold text-slate-800 ml-2">Updated Policy for Final Exams</h2>
              </div>

              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-[#12082e] text-white font-semibold">PJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-800">Principal Jenkins</div>
                    <div className="text-sm text-slate-500">To: All Teaching Staff, Administration</div>
                  </div>
                </div>
                <div className="text-sm text-slate-500 flex items-center gap-2">
                  <Clock size={14} /> Today at 10:42 AM
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                <p>Dear Staff,</p>
                <p>Please review the attached document regarding the new scheduling policy for the upcoming final exam week.</p>
                <p>Based on feedback from last semester, we are implementing a block schedule that allows for longer testing periods and adequate break times between exams. This should help reduce student fatigue and improve overall performance.</p>
                
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 my-6 flex gap-3 text-amber-800">
                  <Info className="shrink-0 mt-0.5" size={20} />
                  <div>
                    <strong className="block mb-1">Key Deadline</strong>
                    All final exam drafts must be submitted to department heads for review no later than Friday, November 10th.
                  </div>
                </div>

                <p>We will discuss this in more detail during Wednesday's faculty meeting. Please come prepared with any questions.</p>
                <p>Best regards,<br/>Dr. Sarah Jenkins<br/>Principal, Atheniq Academy</p>
              </div>

              <div className="mt-12 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Attachments (1)</h4>
                <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg w-fit hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="bg-rose-100 text-rose-600 p-2 rounded">
                    <FilePdfIcon />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-slate-800">Final_Exam_Policy_v2.pdf</div>
                    <div className="text-xs text-slate-500">2.4 MB</div>
                  </div>
                  <Download className="ml-4 h-4 w-4 text-[#7c3aed]" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-[#ede9fe] bg-white">
            <div className="max-w-3xl mx-auto flex gap-3">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarFallback className="bg-slate-200">ME</AvatarFallback>
              </Avatar>
              <div className="flex-1 relative">
                <Input placeholder="Reply to Principal Jenkins..." className="pr-12 bg-white focus-visible:ring-[#7c3aed]" />
                <Button size="icon" variant="ghost" className="absolute right-1 top-1 h-8 w-8 text-[#7c3aed]">
                  <Reply size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}

function FilePdfIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M10 18v-6a2 2 0 1 0-4 0v6"/>
      <path d="M10 14.5h4"/>
      <path d="M14 12v6"/>
    </svg>
  );
}
