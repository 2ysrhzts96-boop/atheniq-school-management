import { AppLayout } from "./_shared/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from "lucide-react";

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const classes = [
  { day: "Mon", start: 0, span: 2, title: "Advanced Calculus", room: "Room 402", color: "blue" },
  { day: "Mon", start: 2, span: 1, title: "Physics Lab", room: "Lab 3", color: "purple" },
  { day: "Mon", start: 4, span: 1, title: "Lunch Break", room: "Cafeteria", color: "gray" },
  { day: "Mon", start: 5, span: 2, title: "World History", room: "Room 205", color: "amber" },
  
  { day: "Tue", start: 0, span: 1, title: "English Lit", room: "Room 101", color: "emerald" },
  { day: "Tue", start: 1, span: 2, title: "Computer Science", room: "Lab 1", color: "teal" },
  { day: "Tue", start: 4, span: 1, title: "Lunch Break", room: "Cafeteria", color: "gray" },
  { day: "Tue", start: 5, span: 1.5, title: "Physical Ed", room: "Gym", color: "rose" },

  { day: "Wed", start: 0, span: 2, title: "Physics Lab", room: "Lab 3", color: "purple" },
  { day: "Wed", start: 2, span: 1, title: "Advanced Calculus", room: "Room 402", color: "blue" },
  { day: "Wed", start: 4, span: 1, title: "Lunch Break", room: "Cafeteria", color: "gray" },
  { day: "Wed", start: 5, span: 1, title: "Study Hall", room: "Library", color: "indigo" },

  { day: "Thu", start: 1, span: 1, title: "English Lit", room: "Room 101", color: "emerald" },
  { day: "Thu", start: 2, span: 2, title: "World History", room: "Room 205", color: "amber" },
  { day: "Thu", start: 4, span: 1, title: "Lunch Break", room: "Cafeteria", color: "gray" },
  { day: "Thu", start: 5, span: 2, title: "Art & Design", room: "Studio A", color: "pink" },

  { day: "Fri", start: 0, span: 1, title: "Computer Science", room: "Lab 1", color: "teal" },
  { day: "Fri", start: 1, span: 1, title: "Physical Ed", room: "Gym", color: "rose" },
  { day: "Fri", start: 2, span: 1.5, title: "Physics Lab", room: "Lab 3", color: "purple" },
  { day: "Fri", start: 4, span: 1, title: "Lunch Break", room: "Cafeteria", color: "gray" },
  { day: "Fri", start: 5, span: 1, title: "Advanced Calculus", room: "Room 402", color: "blue" },
];

const colorMap = {
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  gray: "bg-slate-100 text-slate-600 border-slate-200 border-dashed",
  amber: "bg-amber-100 text-amber-800 border-amber-200",
  emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
  teal: "bg-teal-100 text-teal-800 border-teal-200",
  rose: "bg-rose-100 text-rose-800 border-rose-200",
  indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
  pink: "bg-pink-100 text-pink-800 border-pink-200",
};

export function ClassSchedule() {
  return (
    <AppLayout pageTitle="Class Schedule">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-800">
            <ChevronLeft size={18} />
          </Button>
          <div className="flex items-center gap-2 px-3 font-medium text-slate-700">
            <CalendarIcon size={16} className="text-[#0d9488]" />
            Oct 23 - Oct 27, 2023
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-800">
            <ChevronRight size={18} />
          </Button>
          <div className="w-px h-5 bg-slate-200 mx-1"></div>
          <Button variant="ghost" size="sm" className="h-8 font-medium text-[#0d9488]">
            Today
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Select defaultValue="teacher">
            <SelectTrigger className="w-[150px] bg-white border-slate-200">
              <SelectValue placeholder="View By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">My Schedule</SelectItem>
              <SelectItem value="grade11">11th Grade</SelectItem>
              <SelectItem value="grade10">10th Grade</SelectItem>
              <SelectItem value="room">By Room</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="border-slate-200 shadow-sm overflow-hidden bg-white">
        <CardContent className="p-0">
          <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50">
            <div className="py-3 px-4 border-r border-slate-200 flex items-center justify-center">
              <Clock size={16} className="text-slate-400" />
            </div>
            {days.map((day) => (
              <div key={day} className="py-3 px-2 border-r border-slate-200 text-center font-semibold text-slate-700 last:border-r-0">
                {day}
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Background Grid */}
            {timeSlots.map((time, i) => (
              <div key={time} className="grid grid-cols-6 border-b border-slate-100 h-24 last:border-b-0">
                <div className="border-r border-slate-200 py-2 pr-3 text-right text-xs font-medium text-slate-500 relative">
                  <span className="absolute -top-3 right-3 bg-white px-1">{time}</span>
                </div>
                {days.map(day => (
                  <div key={`${day}-${time}`} className="border-r border-slate-100 last:border-r-0"></div>
                ))}
              </div>
            ))}

            {/* Class Blocks */}
            <div className="absolute top-0 left-[16.66%] right-0 bottom-0 pointer-events-none">
              <div className="grid grid-cols-5 h-full">
                {days.map((day, dayIndex) => {
                  const dayClasses = classes.filter(c => c.day === day);
                  return (
                    <div key={`col-${day}`} className="relative h-full">
                      {dayClasses.map((c, i) => (
                        <div 
                          key={i}
                          className={`absolute w-[calc(100%-8px)] mx-[4px] rounded-md border p-2 overflow-hidden pointer-events-auto shadow-sm hover:shadow-md transition-shadow cursor-pointer ${colorMap[c.color as keyof typeof colorMap]}`}
                          style={{
                            top: `${(c.start / timeSlots.length) * 100}%`,
                            height: `calc(${(c.span / timeSlots.length) * 100}% - 4px)`,
                            minHeight: c.span < 1 ? '40px' : 'auto'
                          }}
                        >
                          <div className="font-semibold text-sm truncate leading-tight">{c.title}</div>
                          {c.span >= 1 && (
                            <div className="text-xs mt-1 opacity-80 flex items-center gap-1">
                              {c.room}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Current Time Indicator Line */}
            <div className="absolute w-full flex items-center" style={{ top: '35%' }}>
              <div className="w-[16.66%] text-right pr-3">
                <span className="text-[10px] font-bold text-red-500 bg-white px-1 rounded">11:15 AM</span>
              </div>
              <div className="flex-1 border-t-2 border-red-500 relative z-10">
                <div className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 px-2">
        <span className="text-sm font-medium text-slate-500 mr-2">Legend:</span>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-blue-100 border border-blue-300"></div><span className="text-sm text-slate-600">Math</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-purple-100 border border-purple-300"></div><span className="text-sm text-slate-600">Science</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-emerald-100 border border-emerald-300"></div><span className="text-sm text-slate-600">Language</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-amber-100 border border-amber-300"></div><span className="text-sm text-slate-600">Humanities</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-teal-100 border border-teal-300"></div><span className="text-sm text-slate-600">Technology</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-rose-100 border border-rose-300"></div><span className="text-sm text-slate-600">Arts / PE</span></div>
      </div>
    </AppLayout>
  );
}
