import React from "react";
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  CalendarDays, 
  BookOpen, 
  MessageSquare, 
  Settings,
  Search,
  Bell,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export function AppLayout({ children, pageTitle }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-[#f8fafc] text-[#0f172a] font-sans">
      {/* Sidebar */}
      <aside className="w-[240px] bg-[#1e2a4a] text-white flex flex-col flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10 font-semibold text-xl tracking-tight">
          <BookOpen className="mr-2 h-6 w-6 text-[#f59e0b]" />
          EduManage Pro
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={pageTitle === "Admin Dashboard"} />
          <NavItem icon={<Users size={20} />} label="Students" active={pageTitle === "Student Profile"} />
          <NavItem icon={<CalendarCheck size={20} />} label="Attendance" active={pageTitle === "Attendance"} />
          <NavItem icon={<CalendarDays size={20} />} label="Schedule" active={pageTitle === "Schedule"} />
          <NavItem icon={<BookOpen size={20} />} label="Gradebook" active={pageTitle === "Gradebook"} />
          <NavItem icon={<MessageSquare size={20} />} label="Messages" active={pageTitle === "Notifications"} badge="3" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-white/20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate text-white">Dr. Sarah Jenkins</p>
              <p className="text-xs text-white/60 truncate">Principal</p>
            </div>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 h-8 w-8">
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0">
          <h1 className="text-xl font-semibold text-slate-800">{pageTitle}</h1>
          
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input 
                type="search" 
                placeholder="Search students, classes..." 
                className="w-full bg-slate-50 border-slate-200 pl-9 h-9 rounded-full focus-visible:ring-[#0d9488]"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#f59e0b] text-[10px] font-bold text-white flex items-center justify-center">
                  3
                </span>
              </button>
              
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
        active 
          ? "bg-[#0d9488] text-white" 
          : "text-slate-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      <span className={active ? "text-white" : "text-slate-400 group-hover:text-white"}>
        {icon}
      </span>
      <span className="font-medium text-sm flex-1">{label}</span>
      {badge && (
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
          active ? "bg-white/20 text-white" : "bg-[#f59e0b] text-white"
        }`}>
          {badge}
        </span>
      )}
    </a>
  );
}
