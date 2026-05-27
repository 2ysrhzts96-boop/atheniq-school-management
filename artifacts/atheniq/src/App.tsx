import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { AdminDashboard } from "@/pages/school-management/AdminDashboard";
import { StudentProfile } from "@/pages/school-management/StudentProfile";
import { AttendanceTracker } from "@/pages/school-management/AttendanceTracker";
import { ClassSchedule } from "@/pages/school-management/ClassSchedule";
import { Gradebook } from "@/pages/school-management/Gradebook";
import { Notifications } from "@/pages/school-management/Notifications";

const queryClient = new QueryClient();

const SCREENS = [
  { name: "Admin Dashboard", path: "admin-dashboard", description: "Overview metrics, attendance trend chart, recent enrollments, upcoming events and quick actions.", icon: "⊞" },
  { name: "Student Profile", path: "student-profile", description: "Full student details, academic history, attendance records, GPA and class rank.", icon: "👤" },
  { name: "Attendance Tracker", path: "attendance", description: "Daily roll call with Present / Absent / Late / Excused status, bulk actions and export.", icon: "✓" },
  { name: "Class Schedule", path: "schedule", description: "Interactive weekly timetable with color-coded subject blocks, room info and week navigation.", icon: "📅" },
  { name: "Gradebook", path: "gradebook", description: "Grade table with computed GPA, color-coded cells, performance distribution chart.", icon: "📊" },
  { name: "Notifications", path: "notifications", description: "Split-panel inbox showing announcements, alerts and direct messages with compose flow.", icon: "🔔" },
];

const PALETTE = [
  { name: "Sidebar Dark", hex: "#12082e", label: "Primary BG" },
  { name: "Violet Active", hex: "#7c3aed", label: "Primary Accent" },
  { name: "Gold", hex: "#f59e0b", label: "Highlights" },
  { name: "Emerald", hex: "#059669", label: "Success / Present" },
  { name: "Lavender BG", hex: "#f5f3ff", label: "Page Background" },
  { name: "Card White", hex: "#ffffff", label: "Card Background" },
];

function ProjectReport() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f5f3ff", minHeight: "100vh", color: "#0f172a" }}>
      <div style={{ background: "linear-gradient(135deg, #12082e 0%, #2d1b69 60%, #4c1d95 100%)", padding: "60px 40px 50px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ fontSize: "28px" }}>📖</span>
          <span style={{ fontSize: "32px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px" }}>Atheniq</span>
        </div>
        <h1 style={{ fontSize: "22px", fontWeight: 600, color: "#c4b5fd", margin: "0 0 10px" }}>School Management System</h1>
        <p style={{ fontSize: "15px", color: "#a78bfa", maxWidth: "520px", margin: "0 auto 28px", lineHeight: 1.6 }}>
          A comprehensive UI design for a multi-role school management platform covering admins, teachers and students across 6 core screens.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(124,58,237,0.4)", color: "#ddd6fe", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 500, border: "1px solid rgba(167,139,250,0.4)" }}>UI / UX Design</span>
          <span style={{ background: "rgba(124,58,237,0.4)", color: "#ddd6fe", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 500, border: "1px solid rgba(167,139,250,0.4)" }}>Advanced Level</span>
          <span style={{ background: "rgba(124,58,237,0.4)", color: "#ddd6fe", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 500, border: "1px solid rgba(167,139,250,0.4)" }}>1440 × 900 — Desktop</span>
          <span style={{ background: "rgba(245,158,11,0.25)", color: "#fde68a", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 500, border: "1px solid rgba(245,158,11,0.4)" }}>Unified Mentor</span>
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px 80px" }}>
        <section style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#4c1d95", marginBottom: "6px" }}>Live Screen Previews</h2>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px" }}>Click any screen to open the full interactive preview.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {SCREENS.map((s) => (
              <Link
                key={s.path}
                href={`/screens/${s.path}`}
                style={{ textDecoration: "none", display: "block", background: "#ffffff", borderRadius: "12px", border: "1px solid #ede9fe", padding: "20px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s", cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{s.icon}</div>
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "#1e1b4b" }}>{s.name}</span>
                </div>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.55, margin: 0 }}>{s.description}</p>
                <div style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "4px", color: "#7c3aed", fontSize: "12px", fontWeight: 600 }}>Open Preview →</div>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginTop: "48px", background: "#ffffff", borderRadius: "16px", border: "1px solid #ede9fe", padding: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#4c1d95", margin: "0 0 20px" }}>Project Overview</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px" }}>Objective</h3>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                Design a comprehensive and professional UI for a School Management System serving multiple user roles — admin, teacher, student and parent. The UI supports student profiles, attendance tracking, grade management, class schedules, announcements and communication tools.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px" }}>Skills Demonstrated</h3>
              <ul style={{ fontSize: "14px", color: "#374151", lineHeight: 1.8, margin: 0, paddingLeft: "18px" }}>
                <li>Responsive multi-role UI design</li>
                <li>Dashboard & data-rich interfaces</li>
                <li>Modular components (tables, cards, forms)</li>
                <li>Visual hierarchy across complex datasets</li>
                <li>Charts & analytics visualization</li>
                <li>Role-based navigation patterns</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "32px", background: "#ffffff", borderRadius: "16px", border: "1px solid #ede9fe", padding: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#4c1d95", margin: "0 0 20px" }}>Color Palette</h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {PALETTE.map((c) => (
              <div key={c.hex} style={{ textAlign: "center" }}>
                <div style={{ width: "72px", height: "56px", borderRadius: "10px", background: c.hex, border: "1px solid rgba(0,0,0,0.08)", marginBottom: "6px" }} />
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#1e1b4b" }}>{c.name}</div>
                <div style={{ fontSize: "10px", color: "#9ca3af", fontFamily: "monospace" }}>{c.hex}</div>
                <div style={{ fontSize: "10px", color: "#6b7280" }}>{c.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #ede9fe", padding: "28px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#4c1d95", margin: "0 0 16px" }}>Typography</h2>
            <div style={{ marginBottom: "14px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Heading Font</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#1e1b4b", fontFamily: "Inter, sans-serif" }}>Inter — Bold</div>
            </div>
            <div style={{ marginBottom: "14px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Body Font</div>
              <div style={{ fontSize: "15px", color: "#374151", fontFamily: "Inter, sans-serif" }}>Inter — Regular / Medium</div>
            </div>
          </div>
          <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #ede9fe", padding: "28px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#4c1d95", margin: "0 0 16px" }}>Tech Stack</h2>
            {[
              ["Framework", "React 18 + TypeScript"],
              ["Styling", "Tailwind CSS v4"],
              ["Components", "shadcn/ui (50+ components)"],
              ["Icons", "Lucide React"],
              ["Charts", "Recharts"],
              ["Build Tool", "Vite 7"],
              ["Target Viewport", "1440 × 900 (Desktop)"],
              ["Design Format", "High-Fidelity Prototype"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #f5f3ff" }}>
                <span style={{ fontSize: "13px", color: "#6b7280", fontWeight: 500 }}>{k}</span>
                <span style={{ fontSize: "13px", color: "#1e1b4b", fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ marginTop: "48px", textAlign: "center", color: "#9ca3af", fontSize: "13px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span style={{ fontSize: "16px" }}>📖</span>
            <span style={{ fontWeight: 700, color: "#4c1d95" }}>Atheniq</span>
            <span>·</span>
            <span>School Management System UI</span>
          </div>
          <div>Submitted to Unified Mentor — Advanced UI/UX Design Project</div>
        </footer>
      </div>
    </div>
  );
}

function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f3ff" }}>
      <div style={{ background: "#12082e", padding: "10px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
        <Link href="/" style={{ color: "#c4b5fd", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to Project Report</Link>
      </div>
      {children}
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={ProjectReport} />
      <Route path="/screens/admin-dashboard">{() => <ScreenWrapper><AdminDashboard /></ScreenWrapper>}</Route>
      <Route path="/screens/student-profile">{() => <ScreenWrapper><StudentProfile /></ScreenWrapper>}</Route>
      <Route path="/screens/attendance">{() => <ScreenWrapper><AttendanceTracker /></ScreenWrapper>}</Route>
      <Route path="/screens/schedule">{() => <ScreenWrapper><ClassSchedule /></ScreenWrapper>}</Route>
      <Route path="/screens/gradebook">{() => <ScreenWrapper><Gradebook /></ScreenWrapper>}</Route>
      <Route path="/screens/notifications">{() => <ScreenWrapper><Notifications /></ScreenWrapper>}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
