import { useEffect, useState, type ComponentType } from "react";

import { modules as discoveredModules } from "./.generated/mockup-components";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

function _resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (v) => typeof v === "function",
  ) as ComponentType[];
  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const key = `./components/mockups/${componentPath}.tsx`;
      const loader = modules[key];
      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) {
          return;
        }
        const name = componentPath.split("/").pop()!;
        const comp = _resolveComponent(mod, name);
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          );
          return;
        }
        setComponent(() => comp);
      } catch (e) {
        if (cancelled) {
          return;
        }

        const message = e instanceof Error ? e.message : String(e);
        setError(`Failed to load preview.\n${message}`);
      }
    }

    void loadComponent();

    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <pre style={{ color: "red", padding: "2rem", fontFamily: "system-ui" }}>
        {error}
      </pre>
    );
  }

  if (!Component) return null;

  return <Component />;
}

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function getPreviewPath(): string | null {
  const basePath = getBasePath();
  const { pathname } = window.location;
  const local =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const match = local.match(/^\/preview\/(.+)$/);
  return match ? match[1] : null;
}

const SCREENS = [
  {
    name: "Admin Dashboard",
    path: "school-management/AdminDashboard",
    description: "Overview metrics, attendance trend chart, recent enrollments, upcoming events and quick actions.",
    icon: "⊞",
  },
  {
    name: "Student Profile",
    path: "school-management/StudentProfile",
    description: "Full student details, academic history, attendance records, GPA and class rank.",
    icon: "👤",
  },
  {
    name: "Attendance Tracker",
    path: "school-management/AttendanceTracker",
    description: "Daily roll call with Present / Absent / Late / Excused status, bulk actions and export.",
    icon: "✓",
  },
  {
    name: "Class Schedule",
    path: "school-management/ClassSchedule",
    description: "Interactive weekly timetable with color-coded subject blocks, room info and week navigation.",
    icon: "📅",
  },
  {
    name: "Gradebook",
    path: "school-management/Gradebook",
    description: "Grade table with computed GPA, color-coded cells, performance distribution chart.",
    icon: "📊",
  },
  {
    name: "Notifications",
    path: "school-management/Notifications",
    description: "Split-panel inbox showing announcements, alerts and direct messages with compose flow.",
    icon: "🔔",
  },
];

const PALETTE = [
  { name: "Sidebar Dark", hex: "#12082e", label: "Primary BG" },
  { name: "Violet Active", hex: "#7c3aed", label: "Primary Accent" },
  { name: "Gold", hex: "#f59e0b", label: "Highlights" },
  { name: "Emerald", hex: "#059669", label: "Success / Present" },
  { name: "Lavender BG", hex: "#f5f3ff", label: "Page Background" },
  { name: "Card White", hex: "#ffffff", label: "Card Background" },
];

function Gallery() {
  const base = getBasePath();

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f5f3ff", minHeight: "100vh", color: "#0f172a" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #12082e 0%, #2d1b69 60%, #4c1d95 100%)", padding: "60px 40px 50px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ fontSize: "28px" }}>📖</span>
          <span style={{ fontSize: "32px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px" }}>Atheniq</span>
        </div>
        <h1 style={{ fontSize: "22px", fontWeight: 600, color: "#c4b5fd", margin: "0 0 10px" }}>
          School Management System
        </h1>
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

        {/* Screens Grid */}
        <section style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#4c1d95", marginBottom: "6px" }}>
            Live Screen Previews
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px" }}>
            Click any screen to open the full interactive preview.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {SCREENS.map((s) => (
              <a
                key={s.path}
                href={`${base}/preview/${s.path}`}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", display: "block", background: "#ffffff", borderRadius: "12px", border: "1px solid #ede9fe", padding: "20px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(124,58,237,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "#1e1b4b" }}>{s.name}</span>
                </div>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.55, margin: 0 }}>{s.description}</p>
                <div style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "4px", color: "#7c3aed", fontSize: "12px", fontWeight: 600 }}>
                  Open Preview →
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Project Overview */}
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

        {/* Color Palette */}
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

        {/* Typography & Tech */}
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
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Scale</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>Display 24px</span>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>Heading 18px</span>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#374151" }}>Body 14px</span>
                <span style={{ fontSize: "12px", color: "#6b7280" }}>Caption 12px</span>
              </div>
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

        {/* UI Features */}
        <section style={{ marginTop: "32px", background: "linear-gradient(135deg, #12082e, #2d1b69)", borderRadius: "16px", padding: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", margin: "0 0 20px" }}>Key UI Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              "Fixed sidebar navigation with role badge",
              "Global search with keyboard shortcut",
              "Real-time notification bell with badge count",
              "Metric cards with trend indicators",
              "Recharts line chart for attendance trend",
              "Color-coded weekly timetable grid",
              "Interactive attendance roster with P/A/L/E toggles",
              "Sortable gradebook with computed GPA",
              "Grade distribution bar chart",
              "Split-panel inbox with compose flow",
              "Student profile with gradient hero banner",
              "Tabbed content panels with keyboard nav",
            ].map((f) => (
              <div key={f} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "1px" }}>✦</span>
                <span style={{ fontSize: "13px", color: "#ddd6fe", lineHeight: 1.5 }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
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

function App() {
  const previewPath = getPreviewPath();

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    );
  }

  return <Gallery />;
}

export default App;
