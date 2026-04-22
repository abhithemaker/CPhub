import { Home, Building2, LayoutGrid, CircleDot, IndianRupee, Users, Users2, ChevronDown, ChevronUp, AlertTriangle, Target, Calendar, TrendingUp, Clock, Menu, X, ArrowRight, MessageCircle, Plus, Award, Activity, LayoutList, GitBranch, LayoutDashboard, Network, Filter, CheckCheck, History, SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";

const T = {
  bg:"#ffffff",bgSubtle:"#f9fafb",bgMuted:"#f3f4f6",border:"#e5e7eb",borderStrong:"#d1d5db",
  text:"#111827",textMuted:"#6b7280",textSubtle:"#9ca3af",accent:"#4f46e5",accentBg:"#eef2ff",
  red:"#dc2626",redBg:"#fef2f2",redBorder:"#fecaca",amber:"#d97706",amberBg:"#fffbeb",amberBorder:"#fde68a",
  green:"#16a34a",greenBg:"#f0fdf4",greenBorder:"#bbf7d0",blue:"#2563eb",blueBg:"#eff6ff",blueBorder:"#bfdbfe",
};

function useIsMobile() {
  const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return m;
}

function Badge({ children, variant = "default", style = {} }) {
  const v = {
    default: { background: T.bgMuted, color: T.textMuted, border: `1px solid ${T.border}` },
    destructive: { background: T.redBg, color: T.red, border: `1px solid ${T.redBorder}` },
    warning: { background: T.amberBg, color: T.amber, border: `1px solid ${T.amberBorder}` },
    success: { background: T.greenBg, color: T.green, border: `1px solid ${T.greenBorder}` },
    outline: { background: "transparent", color: T.textMuted, border: `1px solid ${T.border}` },
    blue: { background: T.blueBg, color: T.blue, border: `1px solid ${T.blueBorder}` },
    accent: { background: T.accentBg, color: T.accent, border: "1px solid #c7d2fe" },
  };
  return (
    <span style={{ ...v[variant], borderRadius: 20, padding: "2px 9px", fontSize: 11, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4, whiteSpace: "nowrap", ...style }}>
      {children}
    </span>
  );
}

function Btn({ children, variant = "default", size = "default", onClick, style = {}, disabled }) {
  const [hov, setHov] = useState(false);
  const vs = {
    default: { background: T.text, color: "#fff", border: `1px solid ${T.text}` },
    outline: { background: hov ? T.bgSubtle : T.bg, color: T.text, border: `1px solid ${T.borderStrong}` },
    ghost: { background: hov ? T.bgMuted : "transparent", color: T.textMuted, border: "none" },
    destructive: { background: T.red, color: "#fff", border: `1px solid ${T.red}` },
    success: { background: "#15803d", color: "#fff", border: "1px solid #15803d" },
    accent: { background: T.accent, color: "#fff", border: `1px solid ${T.accent}` },
  };
  const ss = {
    xs: { padding: "3px 9px", fontSize: 11, borderRadius: 6 },
    sm: { padding: "5px 12px", fontSize: 12, borderRadius: 7 },
    default: { padding: "7px 14px", fontSize: 13, borderRadius: 8 },
    lg: { padding: "10px 20px", fontSize: 14, borderRadius: 9 },
  };
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick} disabled={disabled}
      style={{ ...vs[variant], ...ss[size], fontWeight: 500, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, display: "inline-flex", alignItems: "center", gap: 6, lineHeight: 1.4, transition: "all 0.1s", ...style }}>
      {children}
    </button>
  );
}

function Card({ children, style = {}, onClick }) {
  return <div onClick={onClick} style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12, overflow: "hidden", cursor: onClick ? "pointer" : "default", ...style }}>{children}</div>;
}

function Input({ value, onChange, placeholder, style = {} }) {
  const [focus, setFocus] = useState(false);
  return (
    <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ width: "100%", border: `1px solid ${focus ? T.accent : T.border}`, borderRadius: 8, padding: "8px 12px", fontSize: 13, outline: "none", background: T.bg, color: T.text, boxSizing: "border-box", transition: "border-color 0.15s", ...style }} />
  );
}

function Sel({ value, onChange, options, style = {} }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}
      style={{ border: `1px solid ${T.border}`, borderRadius: 8, padding: "8px 10px", fontSize: 13, background: T.bg, color: T.text, cursor: "pointer", outline: "none", ...style }}>
      {options.map(o => <option key={String(o.value)} value={o.value}>{o.label}</option>)}
    </select>
  );
}

function Field({ label, children }) {
  return <div style={{ marginBottom: 14 }}><label style={{ display: "block", fontSize: 12, fontWeight: 500, color: T.textMuted, marginBottom: 5 }}>{label}</label>{children}</div>;
}

function Modal({ title, onClose, children, width = 480 }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }} onClick={onClose}>
      <div style={{ background: T.bg, borderRadius: "16px 16px 0 0", width: "100%", maxWidth: width, maxHeight: "90vh", overflow: "auto", boxShadow: "0 -8px 40px rgba(0,0,0,0.15)" }} onClick={e => e.stopPropagation()}>
        <div style={{ width: 36, height: 4, background: T.border, borderRadius: 2, margin: "12px auto 0" }} />
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 15, fontWeight: 600 }}>{title}</p>
          <button onClick={onClose} style={{ background: "none", border: "none", color: T.textMuted, cursor: "pointer", display: "flex" }}><X size={18} /></button>
        </div>
        <div style={{ padding: "16px 20px 28px" }}>{children}</div>
      </div>
    </div>
  );
}

const STAGES = [
  { key: "new", label: "New", color: T.textMuted },
  { key: "qualified", label: "Qualified", color: T.blue },
  { key: "site-visit", label: "Site Visit", color: T.amber },
  { key: "negotiation", label: "Negotiation", color: "#7c3aed" },
  { key: "booked", label: "Booked", color: T.green },
];

function fmtPrice(n) {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(1) + "Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(0) + "L";
  return "₹" + n.toLocaleString("en-IN");
}
function fmtArea(n) { return n.toLocaleString("en-IN") + " sqft"; }

const initDevs = [
  { id: 1, name: "My Home Group", rera: "P02400001234", rm: "Suresh Reddy", phone: "+91 98490 12345", city: "Hyderabad", projects: ["My Home Avatar", "My Home Bhooja"], commissionRate: "2%", status: "active", lastMeet: "15 Mar 2026", schemes: ["Q1 Bonus: ₹50K on 3+ bookings"] },
  { id: 2, name: "Prestige Group", rera: "P02400005678", rm: "Kavitha Nair", phone: "+91 98491 67890", city: "Hyderabad", projects: ["Prestige High Fields", "Prestige Waterford"], commissionRate: "1.75%", status: "active", lastMeet: "22 Mar 2026", schemes: ["Site visit incentive: ₹5K per confirmed SV"] },
  { id: 3, name: "Aparna Constructions", rera: "P02400009012", rm: "Venkat Rao", phone: "+91 98492 11111", city: "Hyderabad", projects: ["Aparna Sarovar Zenith"], commissionRate: "2.25%", status: "active", lastMeet: "8 Mar 2026", schemes: [] },
  { id: 4, name: "Lodha Group", rera: "P02400003456", rm: "Kiran Patel", phone: "+91 98493 22222", city: "Hyderabad", projects: ["Lodha Meridian"], commissionRate: "2%", status: "active", lastMeet: "1 Mar 2026", schemes: ["New launch: extra 0.25% till Apr 30"] },
];

const initInv = [
  { id: 1, devId: 1, project: "My Home Avatar", type: "3BHK", tower: "Tower C", floor: 14, unit: "1402", area: 1850, price: 9200000, status: "available", possession: "Dec 2026", facing: "East" },
  { id: 2, devId: 1, project: "My Home Avatar", type: "2BHK", tower: "Tower A", floor: 7, unit: "702", area: 1320, price: 6800000, status: "available", possession: "Dec 2026", facing: "North" },
  { id: 3, devId: 1, project: "My Home Avatar", type: "3BHK", tower: "Tower B", floor: 11, unit: "1101", area: 1920, price: 9600000, status: "held", possession: "Dec 2026", facing: "West" },
  { id: 4, devId: 1, project: "My Home Bhooja", type: "4BHK", tower: "Wing 1", floor: 22, unit: "2201", area: 2800, price: 18500000, status: "available", possession: "Jun 2027", facing: "SE" },
  { id: 5, devId: 2, project: "Prestige High Fields", type: "2BHK", tower: "Block A", floor: 8, unit: "804", area: 1280, price: 7100000, status: "available", possession: "Mar 2027", facing: "North" },
  { id: 6, devId: 2, project: "Prestige High Fields", type: "3BHK", tower: "Block B", floor: 5, unit: "502", area: 1680, price: 9400000, status: "booked", possession: "Mar 2027", facing: "East" },
  { id: 7, devId: 2, project: "Prestige Waterford", type: "3BHK", tower: "Tower 2", floor: 18, unit: "1803", area: 1760, price: 10200000, status: "available", possession: "Dec 2027", facing: "West" },
  { id: 8, devId: 3, project: "Aparna Sarovar Zenith", type: "4BHK", tower: "Tower 1", floor: 22, unit: "2201", area: 3200, price: 22000000, status: "available", possession: "Sep 2027", facing: "NE" },
  { id: 9, devId: 4, project: "Lodha Meridian", type: "3BHK", tower: "Wing B", floor: 11, unit: "1103", area: 1900, price: 11400000, status: "available", possession: "Jun 2027", facing: "East" },
  { id: 10, devId: 4, project: "Lodha Meridian", type: "2BHK", tower: "Wing A", floor: 6, unit: "603", area: 1240, price: 7400000, status: "available", possession: "Jun 2027", facing: "South" },
];

const initLeads = [
  { id: 1, name: "Anil Kumar Sharma", phone: "+91 98001 11111", budget: 10000000, config: "3BHK", stage: "site-visit", source: "Referral", notes: "Wants east-facing, ready in 2026. Very serious buyer.", createdAt: "10 Mar 2026", followUpDate: "5 Apr 2026", interestedUnits: [1, 9] },
  { id: 2, name: "Ramesh & Sunitha Rao", phone: "+91 98002 22222", budget: 8000000, config: "2BHK", stage: "negotiation", source: "Portal", notes: "Budget firm. Prefers Prestige or My Home. North-facing.", createdAt: "5 Mar 2026", followUpDate: "3 Apr 2026", interestedUnits: [2, 5] },
  { id: 3, name: "Dr. Priya Menon", phone: "+91 98003 33333", budget: 25000000, config: "4BHK", stage: "qualified", source: "Walk-in", notes: "NRI returning to Hyderabad. Wants luxury penthouse.", createdAt: "20 Mar 2026", followUpDate: "7 Apr 2026", interestedUnits: [8] },
  { id: 4, name: "Vijay Anand", phone: "+91 98004 44444", budget: 12000000, config: "3BHK", stage: "new", source: "Campaign", notes: "IT professional. Investment purchase.", createdAt: "28 Mar 2026", followUpDate: "4 Apr 2026", interestedUnits: [7, 9] },
  { id: 5, name: "Naresh Chandra", phone: "+91 98005 55555", budget: 7000000, config: "2BHK", stage: "new", source: "Referral", notes: "End user. Needs possession by 2026.", createdAt: "30 Mar 2026", followUpDate: "4 Apr 2026", interestedUnits: [2, 10] },
  { id: 6, name: "Harish Babu", phone: "+91 98006 66666", budget: 20000000, config: "4BHK", stage: "booked", source: "Referral", notes: "Booked Lodha Meridian 3BHK. Commission pending.", createdAt: "1 Feb 2026", followUpDate: null, interestedUnits: [9] },
];

const commissionDeals = [
  { id: 1, project: "My Home Avatar", developer: "My Home Group", developerRM: "Suresh Reddy", developerPhone: "+919849012345", client: "Anil Kumar Sharma", unit: "3BHK Tower C 1402", totalCommission: 186000, received: 0, status: "overdue", milestones: [{ label: "On Agreement", amount: 93000, status: "overdue", date: "12 Jan 2026", daysOverdue: 51 }, { label: "On Registration", amount: 93000, status: "upcoming", date: "15 Apr 2026" }] },
  { id: 2, project: "Prestige High Fields", developer: "Prestige Group", developerRM: "Kavitha Nair", developerPhone: "+919849167890", client: "Ramesh & Sunitha Rao", unit: "2BHK Block A 804", totalCommission: 124000, received: 0, status: "overdue", milestones: [{ label: "On Booking", amount: 62000, status: "overdue", date: "28 Jan 2026", daysOverdue: 35 }, { label: "On Possession", amount: 62000, status: "upcoming", date: "Dec 2027" }] },
  { id: 3, project: "Aparna Sarovar Zenith", developer: "Aparna Constructions", developerRM: "Venkat Rao", developerPhone: "+919849211111", client: "Dr. Priya Menon", unit: "4BHK Tower 1 Floor 22", totalCommission: 312000, received: 156000, status: "due-soon", milestones: [{ label: "On Agreement", amount: 156000, status: "paid", date: "5 Dec 2025" }, { label: "On Registration", amount: 156000, status: "due-soon", date: "18 Mar 2026", daysUntilDue: 14 }] },
  { id: 4, project: "Lodha Meridian", developer: "Lodha Group", developerRM: "Kiran Patel", developerPhone: "+919849322222", client: "Vijay Anand", unit: "3BHK Wing B 1103", totalCommission: 228000, received: 0, status: "due-soon", milestones: [{ label: "On Booking", amount: 114000, status: "due-soon", date: "25 Mar 2026", daysUntilDue: 21 }, { label: "On Handover", amount: 114000, status: "upcoming", date: "Jun 2027" }] },
  { id: 5, project: "Radiance Mandarin", developer: "Radiance Realty", developerRM: "Meena Krishnan", developerPhone: "+919849433333", client: "Sanjay & Leela Gupta", unit: "2BHK Block C 502", totalCommission: 96000, received: 96000, status: "on-track", milestones: [{ label: "On Booking", amount: 48000, status: "paid", date: "10 Nov 2025" }, { label: "On Registration", amount: 48000, status: "paid", date: "15 Jan 2026" }] },
];

// ── SIDEBAR ──────────────────────────────────────────────────────────────────
function Sidebar({ active, setActive, isMobile, drawerOpen, setDrawerOpen }) {
  const navGroups = [
    { label: null, items: [{ id: "home", label: "Home", icon: <Home size={15} /> }] },
    { label: "Core", items: [{ id: "developers", label: "Developers", icon: <Building2 size={15} /> }, { id: "inventory", label: "Inventory", icon: <LayoutGrid size={15} /> }, { id: "leads", label: "Leads", icon: <CircleDot size={15} />, badge: "2" }] },
    { label: "Finance", items: [{ id: "commissions", label: "Commissions", icon: "₹", badge: "3" }] },
  ];
  const inner = (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: T.bg, borderRight: `1px solid ${T.border}` }}>
      <div style={{ padding: "16px 14px 12px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, background: T.text, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "white", fontWeight: 700 }}><IndianRupee size={14} color="white" /></div>
            <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>CP Hub</span>
          </div>
          {isMobile && <button onClick={() => setDrawerOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: T.textMuted, display: "flex" }}><X size={18} /></button>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", background: T.bgSubtle, borderRadius: 8, border: `1px solid ${T.border}` }}>
          <div style={{ width: 20, height: 20, background: T.accent, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white", fontWeight: 700 }}>C</div>
          <div style={{ flex: 1 }}><p style={{ fontSize: 12, fontWeight: 500 }}>Chari</p><p style={{ fontSize: 10, color: T.textMuted }}>Hyderabad CP</p></div>
          <span style={{ color: T.textSubtle, display: "flex" }}><ChevronDown size={14} /></span>
        </div>
      </div>
      <nav style={{ flex: 1, padding: "8px", overflowY: "auto", minHeight: 0 }}>
        {navGroups.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 6 }}>
            {g.label && <p style={{ fontSize: 10, fontWeight: 600, color: T.textSubtle, letterSpacing: "0.06em", textTransform: "uppercase", padding: "6px 8px 3px" }}>{g.label}</p>}
            {g.items.map(item => (
              <button key={item.id} onClick={() => { setActive(item.id); if (isMobile) setDrawerOpen(false); }}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: 7, background: active === item.id ? T.bgMuted : "transparent", border: "none", color: active === item.id ? T.text : T.textMuted, cursor: "pointer", fontSize: 14, fontWeight: active === item.id ? 600 : 400, marginBottom: 2, textAlign: "left" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 16 }}>{item.icon}</span>{item.label}</span>
                {item.badge && <span style={{ background: T.red, color: "white", fontSize: 10, fontWeight: 700, borderRadius: 10, padding: "1px 6px" }}>{item.badge}</span>}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div style={{ padding: "12px 14px", textAlign: "left", borderTop: `1px solid ${T.border}` }}>
        <p style={{ fontSize: 10, color: T.textSubtle, marginBottom: 2 }}>90-day forecast</p>
        <p style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>₹9.2L</p>
        <p style={{ fontSize: 11, color: T.textMuted }}>expected commission</p>
      </div>
    </div>
  );
  if (isMobile) {
    if (!drawerOpen) return null;
    return (
      <>
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 100 }} onClick={() => setDrawerOpen(false)} />
        <div style={{ position: "fixed", top: 0, left: 0, bottom: 0, width: 260, zIndex: 101, boxShadow: "4px 0 24px rgba(0,0,0,0.15)" }}>{inner}</div>
      </>
    );
  }
  return <div style={{ width: 220, minWidth: 220, flexShrink: 0, height: "100%", position: "relative", zIndex: 10 }}>{inner}</div>;
}

// ── HOME ─────────────────────────────────────────────────────────────────────
function HomePage({ devs, inv, leads, setActive, isMobile, remindLog, onRemind }) {
  const avail = inv.filter(u => u.status === "available").length;
  const dueLeads = leads.filter(l => ["3 Apr 2026", "4 Apr 2026", "5 Apr 2026"].includes(l.followUpDate));
  const [homeWaModal, setHomeWaModal] = useState(null);

  // Commission data (mirrors commissionDeals)
  const receivedMTD = 96000;
  const totalOverdue = 234000;
  const overdueDeals = [
    { id: 1, project: "My Home Avatar", developerRM: "Suresh Reddy", developerPhone: "+919849012345", client: "Anil Kumar Sharma", amount: 93000, daysOverdue: 51, milestone: "On Agreement" },
    { id: 2, project: "Prestige High Fields", developerRM: "Kavitha Nair", developerPhone: "+919849167890", client: "Ramesh & Sunitha Rao", amount: 62000, daysOverdue: 35, milestone: "On Booking" },
    { id: 3, project: "Ganga Platina", developerRM: "Deepa Verma", developerPhone: "+919849655555", client: "Harish Babu", amount: 39000, daysOverdue: 30, milestone: "On Booking" },
  ];
  const [waTarget, setWaTarget] = useState(null);

  return (
    <div style={{ padding: isMobile ? 16 : 24 }}>
      {/* Greeting */}
      <div style={{ marginBottom: 18, textAlign: "left" }}>
        <h1 style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 2, textAlign: "left" }}>Good morning, Chari 👋</h1>
        <p style={{ fontSize: 13, color: T.textMuted, textAlign: "left" }}>Thursday, 2 April 2026 · Hyderabad</p>
      </div>

      {/* Overdue alert banner */}
      <div style={{ background: T.redBg, border: `1px solid ${T.redBorder}`, borderRadius: 10, padding: "12px 14px", marginBottom: 18, display: "flex", gap: 10, alignItems: isMobile ? "flex-start" : "center", flexWrap: isMobile ? "wrap" : "nowrap" }}>
        <AlertTriangle size={16} color={T.red} style={{ flexShrink: 0, marginTop: 1 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: T.red }}>₹2,34,000 overdue across 3 deals</p>
          <p style={{ fontSize: 12, color: "#ef4444", marginTop: 1 }}>My Home Avatar — 51 days past due</p>
        </div>
        <Btn size="sm" variant="destructive" onClick={() => setActive("commissions")}><span style={{ display: "flex", alignItems: "center", gap: 4 }}>View <ArrowRight size={12} /></span></Btn>
      </div>

      {/* ── REVENUE SCORECARDS ── */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr", gap: isMobile ? 10 : 14, marginBottom: isMobile ? 10 : 14 }}>
        <Card onClick={() => setActive("commissions")} style={{ cursor: "pointer", borderLeft: `3px solid ${T.green}` }}>
          <div style={{ padding: isMobile ? "14px" : "16px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <p style={{ fontSize: 10, color: T.textSubtle, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>Received MTD</p>
              <CheckCheck size={15} color={T.green} />
            </div>
            <p style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, color: T.green, letterSpacing: "-0.02em" }}>₹{(receivedMTD/100000).toFixed(1)}L</p>
            <p style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>2 deals settled</p>
          </div>
        </Card>
        <Card onClick={() => setActive("commissions")} style={{ cursor: "pointer", borderLeft: `3px solid ${T.red}` }}>
          <div style={{ padding: isMobile ? "14px" : "16px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <p style={{ fontSize: 10, color: T.textSubtle, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>Overdue</p>
              <AlertTriangle size={15} color={T.red} />
            </div>
            <p style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, color: T.red, letterSpacing: "-0.02em" }}>₹{(totalOverdue/100000).toFixed(1)}L</p>
            <p style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>3 deals · oldest 51 days</p>
          </div>
        </Card>
      </div>

      {/* ── EXISTING 4 STAT SCORECARDS ── */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 10 : 12, marginBottom: 20 }}>
        {[
          { label: "Developers", val: devs.length, icon: <Building2 size={16} color={T.textSubtle} />, go: "developers" },
          { label: "Available Units", val: avail, icon: <LayoutGrid size={16} color={T.textSubtle} />, go: "inventory" },
          { label: "Active Leads", val: leads.filter(l => l.stage !== "booked").length, icon: <CircleDot size={16} color={T.textSubtle} />, go: "leads" },
          { label: "Follow-ups", val: dueLeads.length, icon: <Calendar size={16} color={T.textSubtle} />, go: "leads" },
        ].map((s, i) => (
          <Card key={i} onClick={() => setActive(s.go)}>
            <div style={{ padding: isMobile ? "14px" : "16px 18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <p style={{ fontSize: 10, color: T.textSubtle, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</p>
                <span style={{ display: "inline-flex" }}>{s.icon}</span>
              </div>
              <p style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.val}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* ── FOCUSED SECTIONS ── */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16, textAlign: "left" }}>

        {/* Section 1: Overdue deals — act now */}
        <Card>
          <div style={{ padding: "13px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <AlertTriangle size={13} color={T.red} />
              <p style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Overdue commissions</p>
            </div>
            <Btn size="xs" variant="outline" onClick={() => setActive("commissions")}><span style={{ display: "flex", alignItems: "center", gap: 4 }}>All <ArrowRight size={11} /></span></Btn>
          </div>
          {overdueDeals.map((d, i) => (
            <div key={d.id} style={{ padding: "12px 14px", borderBottom: i < overdueDeals.length - 1 ? `1px solid ${T.border}` : "none", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <div style={{ flex: 1, minWidth: 0, paddingRight: 10 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.project}</p>
                  <p style={{ fontSize: 11, color: T.textMuted }}>{d.client} · {d.milestone}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: T.red }}>₹{(d.amount/1000).toFixed(0)}K</p>
                  <p style={{ fontSize: 10, color: T.red, marginTop: 1 }}>{d.daysOverdue}d overdue</p>
                </div>
              </div>
              <button
                onClick={() => setHomeWaModal(d)}
                style={{ display: "flex", alignItems: "center", gap: 5, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 7, padding: "5px 10px", cursor: "pointer", fontSize: 11, fontWeight: 600, color: "#15803d" }}>
                <MessageCircle size={11} /> Remind {d.developerRM.split(" ")[0]}
                {remindLog[d.id] && <span style={{ fontSize: 10, color: T.blue, marginLeft: 4, display: "flex", alignItems: "center", gap: 2 }}><Clock size={9} />{new Date(remindLog[d.id]).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>}
              </button>
            </div>
          ))}
        </Card>

        {/* Section 2: Follow-ups due */}
        <Card>
          <div style={{ padding: "13px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <Calendar size={13} color={T.amber} />
              <p style={{ fontSize: 13, fontWeight: 600 }}>Follow-ups due</p>
            </div>
            <Btn size="xs" variant="outline" onClick={() => setActive("leads")}><span style={{ display: "flex", alignItems: "center", gap: 4 }}>All <ArrowRight size={11} /></span></Btn>
          </div>
          {dueLeads.length === 0 && <p style={{ padding: "16px", fontSize: 13, color: T.textMuted }}>No follow-ups due today</p>}
          {dueLeads.map(l => {
            const st = STAGES.find(s => s.key === l.stage);
            return (
              <div key={l.id} style={{ padding: "12px 14px", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.name}</p>
                  <p style={{ fontSize: 11, color: T.textMuted }}>{l.followUpDate} · {l.config}</p>
                </div>
                <Badge variant={l.stage === "negotiation" ? "accent" : l.stage === "site-visit" ? "warning" : "blue"}>{st?.label}</Badge>
              </div>
            );
          })}
        </Card>
      </div>

      {/* Home WA Modal — adapted from overdueDeals shape */}
      {homeWaModal && <WAModal
        deal={{
          id: homeWaModal.id,
          project: homeWaModal.project,
          client: homeWaModal.client,
          developerRM: homeWaModal.developerRM,
          developerPhone: homeWaModal.developerPhone,
          milestones: [{ label: homeWaModal.milestone, amount: homeWaModal.amount, status: "overdue", date: "—", daysOverdue: homeWaModal.daysOverdue }]
        }}
        onClose={() => setHomeWaModal(null)}
        remindedAt={remindLog[homeWaModal.id]}
        onRemind={onRemind}
      />}

      {/* ── EXISTING TABLE CARDS ── */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
        <Card>
          <div style={{ padding: "13px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 600 }}>Available units</p>
            <Btn size="xs" variant="outline" onClick={() => setActive("inventory")}><span style={{ display: "flex", alignItems: "center", gap: 4 }}>Full board <ArrowRight size={11} /></span></Btn>
          </div>
          {inv.filter(u => u.status === "available").slice(0, 4).map(u => (
            <div key={u.id} style={{ padding: "12px 14px", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{u.project}</p>
                <p style={{ fontSize: 11, color: T.textMuted }}>{u.type} · {u.tower} · Fl {u.floor}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600 }}>{fmtPrice(u.price)}</p>
                <p style={{ fontSize: 11, color: T.textMuted }}>{fmtArea(u.area)}</p>
              </div>
            </div>
          ))}
        </Card>

        <Card>
          <div style={{ padding: "13px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <Users2 size={13} color={T.accent} />
              <p style={{ fontSize: 13, fontWeight: 600 }}>Team activity today</p>
            </div>
            <Btn size="xs" variant="outline" onClick={() => setActive("team")}><span style={{ display: "flex", alignItems: "center", gap: 4 }}>Team <ArrowRight size={11} /></span></Btn>
          </div>
          {teamMembers.filter(m => m.followUpsDue > 0).map(m => (
            <div key={m.id} style={{ padding: "12px 14px", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: T.accent, flexShrink: 0 }}>{m.avatar}</div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.name}</p>
                  <p style={{ fontSize: 11, color: T.textMuted }}>{m.leads} leads · {m.closures} closures</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0, background: T.amberBg, borderRadius: 7, padding: "4px 8px" }}>
                <Calendar size={11} color={T.amber} />
                <p style={{ fontSize: 11, color: T.amber, fontWeight: 600 }}>{m.followUpsDue}</p>
              </div>
            </div>
          ))}
          {teamMembers.filter(m => m.followUpsDue > 0).length === 0 && (
            <p style={{ padding: "14px", fontSize: 13, color: T.textMuted }}>No follow-ups due today</p>
          )}
        </Card>
      </div>
    </div>
  );
}


function DevelopersPage({ devs, setDevs, inv, isMobile }) {
  const [sel, setSel] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", rm: "", phone: "", city: "Hyderabad", rera: "", commissionRate: "2%" });
  const dev = sel ? devs.find(d => d.id === sel) : null;
  const devUnits = dev ? inv.filter(u => u.devId === dev.id) : [];

  const addDev = () => {
    if (!form.name.trim()) return;
    setDevs([...devs, { ...form, id: Date.now(), projects: [], status: "active", lastMeet: "Today", schemes: [] }]);
    setForm({ name: "", rm: "", phone: "", city: "Hyderabad", rera: "", commissionRate: "2%" });
    setShowAdd(false);
  };

  if (dev) return (
    <div style={{ padding: isMobile ? 16 : 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <Btn size="sm" variant="ghost" onClick={() => setSel(null)}><span style={{display:"flex",alignItems:"center",gap:4}}><ArrowRight size={12} style={{transform:"rotate(180deg)"}}/> Back</span></Btn>
        <div style={{ flex: 1, minWidth: 0 }}><h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{dev.name}</h1><p style={{ fontSize: 11, color: T.textMuted }}>RERA: {dev.rera}</p></div>
        <Badge variant="success">Active</Badge>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 16 }}>
        <Card>
          <div style={{ padding: "12px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}` }}><p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>Relationship Manager</p></div>
          <div style={{ padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: T.accent, flexShrink: 0 }}>{dev.rm ? dev.rm.charAt(0) : "?"}</div>
              <div><p style={{ fontSize: 14, fontWeight: 600 }}>{dev.rm || "—"}</p><p style={{ fontSize: 12, color: T.textMuted }}>{dev.phone}</p></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["Commission", dev.commissionRate], ["Last Meet", dev.lastMeet], ["City", dev.city], ["Projects", dev.projects.length]].map(([l, v]) => (
                <div key={l} style={{ background: T.bgSubtle, borderRadius: 8, padding: "10px 12px" }}><p style={{ fontSize: 10, color: T.textSubtle, marginBottom: 2 }}>{l}</p><p style={{ fontSize: 13, fontWeight: 600 }}>{v}</p></div>
              ))}
            </div>
          </div>
        </Card>
        <Card>
          <div style={{ padding: "12px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}` }}><p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>Active Schemes</p></div>
          <div style={{ padding: 14 }}>
            {dev.schemes.length === 0
              ? <p style={{ fontSize: 13, color: T.textMuted }}>No active schemes</p>
              : dev.schemes.map((sc, i) => <div key={i} style={{ background: T.amberBg, border: `1px solid ${T.amberBorder}`, borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}><p style={{ fontSize: 13, color: T.amber, fontWeight: 500 }}><span style={{display:"inline-flex",verticalAlign:"middle",marginRight:4}}><Target size={12} color={T.amber}/></span>{sc}</p></div>)}
          </div>
        </Card>
      </div>
      {/* On mobile: card list instead of table */}
      {isMobile ? (
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Inventory ({devUnits.length})</p>
          {devUnits.map(u => (
            <Card key={u.id} style={{ marginBottom: 10 }}>
              <div style={{ padding: "14px", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div><p style={{ fontSize: 13, fontWeight: 600 }}>{u.project}</p><p style={{ fontSize: 12, color: T.textMuted }}>{u.type} · {u.tower} · {u.unit}</p></div>
                  <Badge variant={u.status === "available" ? "success" : u.status === "held" ? "warning" : "default"}>{u.status}</Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ fontSize: 13, color: T.textMuted }}>{fmtArea(u.area)}</p>
                  <p style={{ fontSize: 14, fontWeight: 700 }}>{fmtPrice(u.price)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <div style={{ padding: "12px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}` }}><p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>Inventory ({devUnits.length} units)</p></div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr style={{ background: T.bgSubtle, borderBottom: `1px solid ${T.border}` }}>{["Project", "Type", "Unit", "Area", "Price", "Status"].map(h => <th key={h} style={{ padding: "9px 14px", textAlign: "left", fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>)}</tr></thead>
            <tbody>{devUnits.map(u => (
              <tr key={u.id} style={{ borderBottom: `1px solid ${T.border}` }}>
                <td style={{ padding: "11px 14px", fontSize: 13 }}>{u.project}</td>
                <td style={{ padding: "11px 14px", fontSize: 13 }}>{u.type}</td>
                <td style={{ padding: "11px 14px", fontSize: 13, color: T.textMuted }}>{u.tower} · {u.unit}</td>
                <td style={{ padding: "11px 14px", fontSize: 13 }}>{fmtArea(u.area)}</td>
                <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600 }}>{fmtPrice(u.price)}</td>
                <td style={{ padding: "11px 14px" }}><Badge variant={u.status === "available" ? "success" : u.status === "held" ? "warning" : "default"}>{u.status}</Badge></td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
      )}
    </div>
  );

  return (
    <div style={{ padding: isMobile ? 16 : 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div><h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Developers</h1><p style={{ fontSize: 13, color: T.textMuted }}>{devs.length} active relationships</p></div>
        <Btn size="sm" onClick={() => setShowAdd(true)}><span style={{display:"flex",alignItems:"center",gap:4}}><Plus size={13}/> Add</span></Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
        {devs.map(d => {
          const units = inv.filter(u => u.devId === d.id);
          const avail = units.filter(u => u.status === "available").length;
          return (
            <Card key={d.id} onClick={() => setSel(d.id)} style={{ cursor: "pointer" }}>
              <div style={{ padding: "16px", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div><p style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{d.name}</p><p style={{ fontSize: 12, color: T.textMuted }}>{d.rm} · {d.city}</p></div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[["Projects", d.projects.length], ["Avail.", avail], ["Comm.", d.commissionRate]].map(([l, v]) => (
                    <div key={l} style={{ background: T.bgSubtle, borderRadius: 7, padding: "8px 10px" }}><p style={{ fontSize: 10, color: T.textSubtle, marginBottom: 2 }}>{l}</p><p style={{ fontSize: 14, fontWeight: 700 }}>{v}</p></div>
                  ))}
                </div>
                {d.schemes.length > 0 && <div style={{ marginTop: 10, background: T.amberBg, border: `1px solid ${T.amberBorder}`, borderRadius: 7, padding: "7px 10px" }}><p style={{ fontSize: 11, color: T.amber }}><span style={{display:"inline-flex",verticalAlign:"middle",marginRight:4}}><Target size={12} color={T.amber}/></span>{d.schemes[0]}</p></div>}
              </div>
            </Card>
          );
        })}
      </div>
      {showAdd && (
        <Modal title="Add Developer" onClose={() => setShowAdd(false)}>
          <Field label="Developer Name *"><Input value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="e.g. My Home Group" /></Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Field label="RM Name"><Input value={form.rm} onChange={v => setForm({ ...form, rm: v })} placeholder="Contact person" /></Field>
            <Field label="RM Phone"><Input value={form.phone} onChange={v => setForm({ ...form, phone: v })} placeholder="+91 98490 00000" /></Field>
            <Field label="RERA Number"><Input value={form.rera} onChange={v => setForm({ ...form, rera: v })} placeholder="P024000XXXXX" /></Field>
            <Field label="Commission Rate"><Input value={form.commissionRate} onChange={v => setForm({ ...form, commissionRate: v })} placeholder="2%" /></Field>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 8 }}>
            <Btn variant="outline" onClick={() => setShowAdd(false)}>Cancel</Btn>
            <Btn onClick={addDev} disabled={!form.name.trim()}>Add Developer</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ── INVENTORY ────────────────────────────────────────────────────────────────
function InventoryPage({ inv, setInv, devs, isMobile }) {
  const [fDev, setFDev] = useState("all");
  const [fType, setFType] = useState("all");
  const [fStat, setFStat] = useState("all");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ devId: devs[0]?.id || 1, project: "", type: "2BHK", tower: "", floor: "", unit: "", area: "", price: "", status: "available", possession: "", facing: "" });

  const filtered = inv.filter(u =>
    (fDev === "all" || u.devId === Number(fDev)) &&
    (fType === "all" || u.type === fType) &&
    (fStat === "all" || u.status === fStat)
  ).sort((a, b) => a.price - b.price);

  const updateStat = (id, s) => setInv(prev => prev.map(u => u.id === id ? { ...u, status: s } : u));
  const addUnit = () => {
    if (!form.project.trim()) return;
    setInv([...inv, { ...form, id: Date.now(), devId: Number(form.devId), floor: Number(form.floor), area: Number(form.area), price: Number(form.price) }]);
    setShowAdd(false);
  };

  return (
    <div style={{ padding: isMobile ? 16 : 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div><h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Inventory</h1><p style={{ fontSize: 13, color: T.textMuted }}>{filtered.length} units · {inv.filter(u => u.status === "available").length} available</p></div>
        <Btn size="sm" onClick={() => setShowAdd(true)}><span style={{display:"flex",alignItems:"center",gap:4}}><Plus size={13}/> Add</span></Btn>
      </div>
      {/* Filter row: wrap on mobile */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
        <Sel value={fDev} onChange={setFDev} options={[{ value: "all", label: "All Devs" }, ...devs.map(d => ({ value: d.id, label: d.name }))]} style={{ flex: isMobile ? "1 1 auto" : undefined }} />
        <Sel value={fType} onChange={setFType} options={[{ value: "all", label: "All Types" }, ...["2BHK", "3BHK", "4BHK"].map(t => ({ value: t, label: t }))]} style={{ flex: isMobile ? "1 1 auto" : undefined }} />
        <Sel value={fStat} onChange={setFStat} options={[{ value: "all", label: "All Status" }, { value: "available", label: "Available" }, { value: "held", label: "Held" }, { value: "booked", label: "Booked" }]} style={{ flex: isMobile ? "1 1 auto" : undefined }} />
      </div>

      {/* Mobile: cards. Desktop: table */}
      {isMobile ? (
        <div>
          {filtered.length === 0 && <p style={{ textAlign: "center", padding: "32px", color: T.textMuted, fontSize: 13 }}>No units match filters</p>}
          {filtered.map(u => {
            const dev = devs.find(d => d.id === u.devId);
            return (
              <Card key={u.id} style={{ marginBottom: 10 }}>
                <div style={{ padding: "14px", textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{u.project}</p>
                      <p style={{ fontSize: 12, color: T.textMuted }}>{dev?.name} · {u.type} · {u.tower} · Fl {u.floor}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: 15, fontWeight: 700 }}>{fmtPrice(u.price)}</p>
                      <p style={{ fontSize: 11, color: T.textMuted }}>{fmtArea(u.area)}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      <Badge variant="outline">{u.facing}</Badge>
                      <Badge variant="outline">{u.possession}</Badge>
                    </div>
                    <select value={u.status} onChange={e => updateStat(u.id, e.target.value)}
                      style={{ border: `1px solid ${T.border}`, borderRadius: 6, padding: "4px 8px", fontSize: 12, background: T.bg, cursor: "pointer", color: u.status === "available" ? T.green : u.status === "held" ? T.amber : T.textMuted }}>
                      {["available", "held", "booked"].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
              <thead><tr style={{ background: T.bgSubtle, borderBottom: `1px solid ${T.border}` }}>
                {["Project", "Developer", "Config", "Unit", "Area", "Price", "Possession", "Status", ""].map(h => <th key={h} style={{ padding: "9px 14px", textAlign: "left", fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {filtered.length === 0 && <tr><td colSpan={9} style={{ padding: "40px", textAlign: "center", color: T.textMuted, fontSize: 13 }}>No units match filters</td></tr>}
                {filtered.map(u => {
                  const dev = devs.find(d => d.id === u.devId);
                  return (
                    <tr key={u.id} style={{ borderBottom: `1px solid ${T.border}` }}>
                      <td style={{ padding: "11px 14px" }}><p style={{ fontSize: 13, fontWeight: 500 }}>{u.project}</p></td>
                      <td style={{ padding: "11px 14px", fontSize: 13, color: T.textMuted }}>{dev?.name}</td>
                      <td style={{ padding: "11px 14px" }}><Badge variant="outline">{u.type}</Badge></td>
                      <td style={{ padding: "11px 14px", fontSize: 13, color: T.textMuted }}>{u.tower} Fl{u.floor} {u.unit}</td>
                      <td style={{ padding: "11px 14px", fontSize: 13 }}>{fmtArea(u.area)}</td>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600 }}>{fmtPrice(u.price)}</td>
                      <td style={{ padding: "11px 14px", fontSize: 13, color: T.textMuted }}>{u.possession}</td>
                      <td style={{ padding: "11px 14px" }}>
                        <select value={u.status} onChange={e => updateStat(u.id, e.target.value)}
                          style={{ border: `1px solid ${T.border}`, borderRadius: 6, padding: "3px 8px", fontSize: 12, background: T.bg, cursor: "pointer", color: u.status === "available" ? T.green : u.status === "held" ? T.amber : T.textMuted }}>
                          {["available", "held", "booked"].map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td style={{ padding: "11px 14px" }}><Btn size="xs" variant="outline">Share</Btn></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {showAdd && (
        <Modal title="Add Unit" onClose={() => setShowAdd(false)}>
          <Field label="Developer"><Sel value={form.devId} onChange={v => setForm({ ...form, devId: v })} options={devs.map(d => ({ value: d.id, label: d.name }))} style={{ width: "100%" }} /></Field>
          <Field label="Project Name *"><Input value={form.project} onChange={v => setForm({ ...form, project: v })} placeholder="e.g. My Home Avatar" /></Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Field label="Type"><Sel value={form.type} onChange={v => setForm({ ...form, type: v })} options={["2BHK", "3BHK", "4BHK", "Villa", "Plot"].map(t => ({ value: t, label: t }))} style={{ width: "100%" }} /></Field>
            <Field label="Tower"><Input value={form.tower} onChange={v => setForm({ ...form, tower: v })} placeholder="Tower A" /></Field>
            <Field label="Floor"><Input value={form.floor} onChange={v => setForm({ ...form, floor: v })} placeholder="12" /></Field>
            <Field label="Unit No."><Input value={form.unit} onChange={v => setForm({ ...form, unit: v })} placeholder="1201" /></Field>
            <Field label="Area (sqft)"><Input value={form.area} onChange={v => setForm({ ...form, area: v })} placeholder="1800" /></Field>
            <Field label="Price"><Input value={form.price} onChange={v => setForm({ ...form, price: v })} placeholder="9000000" /></Field>
            <Field label="Possession"><Input value={form.possession} onChange={v => setForm({ ...form, possession: v })} placeholder="Dec 2026" /></Field>
            <Field label="Facing"><Input value={form.facing} onChange={v => setForm({ ...form, facing: v })} placeholder="East" /></Field>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 8 }}>
            <Btn variant="outline" onClick={() => setShowAdd(false)}>Cancel</Btn>
            <Btn onClick={addUnit} disabled={!form.project.trim()}>Add Unit</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ── LEADS ────────────────────────────────────────────────────────────────────
function SankeyChart({ leads }) {
  const { useRef, useEffect } = { useRef: (v) => { const r = { current: v }; return r; }, useEffect: () => {} };
  const stages = ["new", "qualified", "site-visit", "negotiation", "booked"];
  const stageLabels = { new: "New", qualified: "Qualified", "site-visit": "Site Visit", negotiation: "Negotiation", booked: "Booked" };
  const stageColors = { new: "#94a3b8", qualified: T.blue, "site-visit": T.amber, negotiation: "#7c3aed", booked: T.green };

  const counts = {};
  stages.forEach(s => { counts[s] = leads.filter(l => l.stage === s).length; });
  const totalBudget = {};
  stages.forEach(s => { totalBudget[s] = leads.filter(l => l.stage === s).reduce((sum, l) => sum + l.budget, 0); });

  // Build flow data: connections between consecutive stages
  const flows = [];
  for (let i = 0; i < stages.length - 1; i++) {
    const from = stages[i];
    const to = stages[i + 1];
    const fromLeads = leads.filter(l => l.stage === from || stages.indexOf(l.stage) > i);
    const toLeads = leads.filter(l => stages.indexOf(l.stage) > i);
    flows.push({ from, to, value: Math.max(toLeads.length, 1) });
  }

  const W = 640, H = 300;
  const nodeW = 24, gap = 8;
  const colW = (W - nodeW) / (stages.length - 1);
  const maxCount = Math.max(...Object.values(counts), 1);

  const nodePos = stages.map((s, i) => {
    const h = Math.max((counts[s] / maxCount) * (H - 40), 20);
    const x = i * colW;
    const y = (H - h) / 2;
    return { stage: s, x, y, h, count: counts[s], budget: totalBudget[s] };
  });

  // Build smooth bezier paths between nodes
  const paths = [];
  for (let i = 0; i < nodePos.length - 1; i++) {
    const from = nodePos[i];
    const to = nodePos[i + 1];
    const fromH = from.h;
    const toH = to.h;
    const x1 = from.x + nodeW;
    const x2 = to.x;
    const cpX = (x1 + x2) / 2;
    const path = `M${x1},${from.y} C${cpX},${from.y} ${cpX},${to.y} ${x2},${to.y} L${x2},${to.y + toH} C${cpX},${to.y + toH} ${cpX},${from.y + fromH} ${x1},${from.y + fromH} Z`;
    paths.push({ path, fromStage: from.stage, toStage: to.stage, fromColor: stageColors[from.stage] });
  }

  return (
    <div style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12, padding: "20px 20px 16px", overflow: "hidden" }}>
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 2 }}>Pipeline Flow</p>
        <p style={{ fontSize: 12, color: T.textMuted }}>Lead progression across stages · {leads.length} total leads</p>
      </div>

      <div style={{ overflowX: "auto" }}>
        <svg width={W} height={H + 60} style={{ display: "block", minWidth: 400 }}>
          <defs>
            {stages.map(s => (
              <linearGradient key={s} id={`grad-${s}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={stageColors[s]} stopOpacity="0.35" />
                <stop offset="100%" stopColor={stageColors[stages[Math.min(stages.indexOf(s) + 1, stages.length - 1)]]} stopOpacity="0.25" />
              </linearGradient>
            ))}
          </defs>

          {/* Flow paths */}
          {paths.map((p, i) => (
            <path key={i} d={p.path} fill={`url(#grad-${p.fromStage})`} stroke="none" opacity={0.8} />
          ))}

          {/* Stage nodes */}
          {nodePos.map(n => (
            <g key={n.stage}>
              <rect x={n.x} y={n.y} width={nodeW} height={n.h} rx={4} fill={stageColors[n.stage]} />
              {/* Count badge */}
              <text x={n.x + nodeW / 2} y={n.y - 8} textAnchor="middle" fontSize={13} fontWeight="700" fill={stageColors[n.stage]}>{n.count}</text>
              {/* Label */}
              <text x={n.x + nodeW / 2} y={H + 20} textAnchor="middle" fontSize={11} fontWeight="500" fill={T.textMuted}>{stageLabels[n.stage]}</text>
              {/* Budget */}
              {n.budget > 0 && (
                <text x={n.x + nodeW / 2} y={H + 38} textAnchor="middle" fontSize={10} fill={T.textSubtle}>{fmtPrice(n.budget)}</text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Legend + summary */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8, paddingTop: 14, borderTop: `1px solid ${T.border}` }}>
        {stages.map(s => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: stageColors[s] }} />
            <span style={{ fontSize: 11, color: T.textMuted }}>{stageLabels[s]}: <strong style={{ color: T.text }}>{counts[s]}</strong></span>
          </div>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
          <TrendingUp size={12} color={T.green} />
          <span style={{ fontSize: 11, color: T.textMuted }}>Total pipeline: <strong style={{ color: T.text }}>{fmtPrice(leads.reduce((s, l) => s + l.budget, 0))}</strong></span>
        </div>
      </div>

      {/* Stage breakdown table */}
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
          {stages.map(s => {
            const stLeads = leads.filter(l => l.stage === s);
            return (
              <div key={s} style={{ background: T.bgSubtle, borderRadius: 8, padding: "10px 10px 8px", borderTop: `3px solid ${stageColors[s]}` }}>
                <p style={{ fontSize: 10, color: T.textSubtle, marginBottom: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>{stageLabels[s]}</p>
                <p style={{ fontSize: 20, fontWeight: 700, color: stageColors[s], letterSpacing: "-0.02em" }}>{stLeads.length}</p>
                <p style={{ fontSize: 10, color: T.textMuted, marginTop: 2 }}>{stLeads.length > 0 ? fmtPrice(stLeads.reduce((sum, l) => sum + l.budget, 0)) : "—"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LeadsPage({ leads, setLeads, inv, isMobile }) {
  const [showAdd, setShowAdd] = useState(false);
  const [sel, setSel] = useState(null);
  const [dragging, setDragging] = useState(null);
  const [mobileStage, setMobileStage] = useState("new");
  const [view, setView] = useState("board"); // "board" | "sankey"
  const [form, setForm] = useState({ name: "", phone: "", budget: "", config: "3BHK", source: "Referral", notes: "", followUpDate: "" });

  const moveLead = (id, stage) => setLeads(prev => prev.map(l => l.id === id ? { ...l, stage } : l));
  const addLead = () => {
    if (!form.name.trim()) return;
    setLeads([...leads, { ...form, id: Date.now(), stage: "new", assignee: "Self", createdAt: "2 Apr 2026", budget: Number(form.budget) || 0, interestedUnits: [] }]);
    setForm({ name: "", phone: "", budget: "", config: "3BHK", source: "Referral", notes: "", followUpDate: "" });
    setShowAdd(false);
  };

  const selected = sel ? leads.find(l => l.id === sel) : null;
  const selUnits = selected ? selected.interestedUnits.map(id => inv.find(u => u.id === id)).filter(Boolean) : [];

  // ── SANKEY VIEW ────────────────────────────────────────────────────────────
  if (view === "sankey") {
    return (
      <div style={{ padding: isMobile ? 16 : 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>Lead Pipeline</h1>
            <p style={{ fontSize: 13, color: T.textMuted }}>{leads.length} total leads</p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {/* View toggle */}
            <div style={{ display: "flex", background: T.bgSubtle, borderRadius: 8, padding: 2, border: `1px solid ${T.border}`, gap: 2 }}>
              <button onClick={() => setView("board")} style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: view === "board" ? T.bg : "transparent", color: view === "board" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: view === "board" ? "0 1px 3px rgba(0,0,0,0.08)" : "none", fontSize: 12, fontWeight: 500 }}>
                <LayoutList size={13} /> Board
              </button>
              <button onClick={() => setView("sankey")} style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: view === "sankey" ? T.bg : "transparent", color: view === "sankey" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: view === "sankey" ? "0 1px 3px rgba(0,0,0,0.08)" : "none", fontSize: 12, fontWeight: 500 }}>
                <GitBranch size={13} /> Sankey
              </button>
            </div>
            <Btn onClick={() => setShowAdd(true)} size="sm"><span style={{ display: "flex", alignItems: "center", gap: 4 }}><Plus size={13} /> Add lead</span></Btn>
          </div>
        </div>

        <SankeyChart leads={leads} />

        {showAdd && (
          <Modal title="Add Lead" onClose={() => setShowAdd(false)}>
            <Field label="Full Name *"><Input value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="e.g. Anil Kumar Sharma" /></Field>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field label="Phone"><Input value={form.phone} onChange={v => setForm({ ...form, phone: v })} placeholder="+91 98001 00000" /></Field>
              <Field label="Budget"><Input value={form.budget} onChange={v => setForm({ ...form, budget: v })} placeholder="10000000" /></Field>
              <Field label="Config"><Sel value={form.config} onChange={v => setForm({ ...form, config: v })} options={["2BHK", "3BHK", "4BHK", "Villa", "Plot"].map(t => ({ value: t, label: t }))} style={{ width: "100%" }} /></Field>
              <Field label="Source"><Sel value={form.source} onChange={v => setForm({ ...form, source: v })} options={["Referral", "Portal", "Walk-in", "Campaign"].map(s => ({ value: s, label: s }))} style={{ width: "100%" }} /></Field>
              <Field label="Follow-up Date"><Input value={form.followUpDate} onChange={v => setForm({ ...form, followUpDate: v })} placeholder="5 Apr 2026" /></Field>
            </div>
            <Field label="Notes"><textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Key details, preferences..." style={{ width: "100%", border: `1px solid ${T.border}`, borderRadius: 8, padding: "8px 12px", fontSize: 13, outline: "none", resize: "vertical", minHeight: 80, boxSizing: "border-box", fontFamily: "inherit" }} /></Field>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <Btn variant="outline" onClick={() => setShowAdd(false)}>Cancel</Btn>
              <Btn onClick={addLead} disabled={!form.name.trim()}>Add Lead</Btn>
            </div>
          </Modal>
        )}
      </div>
    );
  }

  // ── MOBILE BOARD VIEW ──────────────────────────────────────────────────────
  if (isMobile) {
    const stageLeads = leads.filter(l => l.stage === mobileStage);
    return (
      <div style={{ padding: 16, display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexShrink: 0 }}>
          <div><h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Leads</h1><p style={{ fontSize: 13, color: T.textMuted }}>{leads.length} total leads</p></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", background: T.bgSubtle, borderRadius: 8, padding: 2, border: `1px solid ${T.border}`, gap: 2 }}>
              <button onClick={() => setView("board")} style={{ padding: "5px 8px", borderRadius: 6, border: "none", background: view === "board" ? T.bg : "transparent", color: view === "board" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", boxShadow: view === "board" ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}><LayoutList size={14} /></button>
              <button onClick={() => setView("sankey")} style={{ padding: "5px 8px", borderRadius: 6, border: "none", background: view === "sankey" ? T.bg : "transparent", color: view === "sankey" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", boxShadow: view === "sankey" ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}><GitBranch size={14} /></button>
            </div>
            <Btn size="sm" onClick={() => setShowAdd(true)}><span style={{ display: "flex", alignItems: "center", gap: 4 }}><Plus size={13} /> Add</span></Btn>
          </div>
        </div>
        <div style={{ display: "flex", gap: 0, overflowX: "auto", marginBottom: 14, flexShrink: 0, background: T.bgSubtle, borderRadius: 10, padding: 3, border: `1px solid ${T.border}` }}>
          {STAGES.map(s => (
            <button key={s.key} onClick={() => setMobileStage(s.key)}
              style={{ flex: "1 0 auto", padding: "7px 8px", borderRadius: 7, border: "none", background: mobileStage === s.key ? T.bg : "transparent", color: mobileStage === s.key ? T.text : T.textMuted, fontSize: 11, fontWeight: mobileStage === s.key ? 600 : 400, cursor: "pointer", whiteSpace: "nowrap", boxShadow: mobileStage === s.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}>
              {s.label} <span style={{ fontSize: 10, color: T.textSubtle }}>{leads.filter(l => l.stage === s.key).length}</span>
            </button>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {stageLeads.length === 0 && <p style={{ textAlign: "center", padding: "32px", color: T.textMuted, fontSize: 13 }}>No leads in this stage</p>}
          {stageLeads.map(lead => (
            <Card key={lead.id} onClick={() => setSel(sel === lead.id ? null : lead.id)} style={{ marginBottom: 10, border: sel === lead.id ? `1px solid ${T.accent}` : `1px solid ${T.border}` }}>
              <div style={{ padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                    <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{lead.name}</p>
                    <p style={{ fontSize: 12, color: T.textMuted }}>{lead.config} · {fmtPrice(lead.budget)}</p>
                  </div>
                  <Badge variant="outline" style={{ fontSize: 10 }}>{lead.source}</Badge>
                </div>
                {lead.followUpDate && <p style={{ fontSize: 11, color: T.textMuted }}><Calendar size={11} style={{ display: "inline", marginRight: 3 }} />Follow-up: {lead.followUpDate}</p>}
                {sel === lead.id && (
                  <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${T.border}` }}>
                    {lead.notes && <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 10, lineHeight: 1.6 }}>{lead.notes}</p>}
                    <p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Move to</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {STAGES.filter(s => s.key !== lead.stage).map(s => (
                        <Btn key={s.key} size="xs" variant="outline" onClick={e => { e.stopPropagation(); moveLead(lead.id, s.key); setSel(null); }}><span style={{ display: "flex", alignItems: "center", gap: 4 }}>{s.label} <ArrowRight size={11} /></span></Btn>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        {showAdd && (
          <Modal title="Add Lead" onClose={() => setShowAdd(false)}>
            <Field label="Full Name *"><Input value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="e.g. Anil Kumar Sharma" /></Field>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field label="Phone"><Input value={form.phone} onChange={v => setForm({ ...form, phone: v })} placeholder="+91 98001 00000" /></Field>
              <Field label="Budget"><Input value={form.budget} onChange={v => setForm({ ...form, budget: v })} placeholder="10000000" /></Field>
              <Field label="Config"><Sel value={form.config} onChange={v => setForm({ ...form, config: v })} options={["2BHK", "3BHK", "4BHK", "Villa", "Plot"].map(t => ({ value: t, label: t }))} style={{ width: "100%" }} /></Field>
              <Field label="Source"><Sel value={form.source} onChange={v => setForm({ ...form, source: v })} options={["Referral", "Portal", "Walk-in", "Campaign"].map(s => ({ value: s, label: s }))} style={{ width: "100%" }} /></Field>
              <Field label="Follow-up"><Input value={form.followUpDate} onChange={v => setForm({ ...form, followUpDate: v })} placeholder="5 Apr 2026" /></Field>
            </div>
            <Field label="Notes"><textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Key details..." style={{ width: "100%", border: `1px solid ${T.border}`, borderRadius: 8, padding: "8px 12px", fontSize: 13, outline: "none", resize: "vertical", minHeight: 70, boxSizing: "border-box", fontFamily: "inherit" }} /></Field>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <Btn variant="outline" onClick={() => setShowAdd(false)}>Cancel</Btn>
              <Btn onClick={addLead} disabled={!form.name.trim()}>Add Lead</Btn>
            </div>
          </Modal>
        )}
      </div>
    );
  }

  // ── DESKTOP KANBAN ─────────────────────────────────────────────────────────
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto', width: '100%', height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexShrink: 0 }}>
        <div><h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Lead Pipeline</h1><p style={{ fontSize: 13, color: T.textMuted }}>{leads.length} total leads</p></div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {/* View toggle */}
          <div style={{ display: "flex", background: T.bgSubtle, borderRadius: 8, padding: 2, border: `1px solid ${T.border}`, gap: 2 }}>
            <button onClick={() => setView("board")} style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: view === "board" ? T.bg : "transparent", color: view === "board" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: view === "board" ? "0 1px 3px rgba(0,0,0,0.08)" : "none", fontSize: 12, fontWeight: 500 }}>
              <LayoutList size={13} /> Board
            </button>
            <button onClick={() => setView("sankey")} style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: view === "sankey" ? T.bg : "transparent", color: view === "sankey" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: view === "sankey" ? "0 1px 3px rgba(0,0,0,0.08)" : "none", fontSize: 12, fontWeight: 500 }}>
              <GitBranch size={13} /> Sankey
            </button>
          </div>
          <Btn onClick={() => setShowAdd(true)}><span style={{ display: "flex", alignItems: "center", gap: 4 }}><Plus size={13} /> Add lead</span></Btn>
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, overflowX: "auto", flex: 1, paddingBottom: 8 }}>
        {STAGES.map(stage => {
          const sl = leads.filter(l => l.stage === stage.key);
          return (
            <div key={stage.key}
              style={{ minWidth: 210, flex: "0 0 210px", background: T.bgSubtle, borderRadius: 10, border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 220px)" }}
              onDragOver={e => e.preventDefault()}
              onDrop={e => { e.preventDefault(); if (dragging) moveLead(dragging, stage.key); setDragging(null); }}>
              <div style={{ padding: "10px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: stage.color }} /><p style={{ fontSize: 12, fontWeight: 600 }}>{stage.label}</p></div>
                <span style={{ fontSize: 11, color: T.textMuted, background: T.bgMuted, borderRadius: 10, padding: "1px 7px" }}>{sl.length}</span>
              </div>
              <div style={{ flex: 1, overflowY: "auto", padding: 8 }}>
                {sl.map(lead => (
                  <div key={lead.id} draggable onDragStart={() => setDragging(lead.id)} onClick={() => setSel(sel === lead.id ? null : lead.id)}
                    style={{ background: T.bg, border: `1px solid ${sel === lead.id ? T.accent : T.border}`, borderRadius: 9, padding: 12, marginBottom: 8, cursor: "grab" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{lead.name}</p>
                    <p style={{ fontSize: 11, color: T.textMuted, marginBottom: 8 }}>{lead.config} · {fmtPrice(lead.budget)}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Badge variant="outline" style={{ fontSize: 10 }}>{lead.source}</Badge>
                      {lead.followUpDate && <p style={{ fontSize: 10, color: T.textMuted, display: "flex", alignItems: "center", gap: 3 }}><Calendar size={10} />{lead.followUpDate}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {selected && (
        <div style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: 340, background: T.bg, borderLeft: `1px solid ${T.border}`, zIndex: 50, overflowY: "auto", padding: 20, boxShadow: "-4px 0 20px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <p style={{ fontSize: 15, fontWeight: 600 }}>{selected.name}</p>
            <button onClick={() => setSel(null)} style={{ background: "none", border: "none", cursor: "pointer", color: T.textMuted, display: "flex" }}><X size={18} /></button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {[["Phone", selected.phone], ["Budget", fmtPrice(selected.budget)], ["Config", selected.config], ["Source", selected.source], ["Added", selected.createdAt], ["Follow-up", selected.followUpDate || "—"]].map(([l, v]) => (
              <div key={l} style={{ background: T.bgSubtle, borderRadius: 8, padding: "9px 12px" }}><p style={{ fontSize: 10, color: T.textSubtle, marginBottom: 2 }}>{l}</p><p style={{ fontSize: 13, fontWeight: 600 }}>{v}</p></div>
            ))}
          </div>
          {selected.notes && <div style={{ background: T.bgSubtle, borderRadius: 8, padding: "10px 12px", marginBottom: 14 }}><p style={{ fontSize: 11, color: T.textSubtle, marginBottom: 4 }}>Notes</p><p style={{ fontSize: 13, lineHeight: 1.6 }}>{selected.notes}</p></div>}
          {selUnits.length > 0 && (
            <div style={{ marginBottom: 14 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Interested Units</p>
              {selUnits.map(u => (
                <div key={u.id} style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, padding: "10px 12px", marginBottom: 6, display: "flex", justifyContent: "space-between" }}>
                  <div><p style={{ fontSize: 13, fontWeight: 500 }}>{u.project}</p><p style={{ fontSize: 11, color: T.textMuted }}>{u.type} · {u.tower} · {u.unit}</p></div>
                  <p style={{ fontSize: 13, fontWeight: 600 }}>{fmtPrice(u.price)}</p>
                </div>
              ))}
            </div>
          )}
          <p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Move Stage</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {STAGES.filter(s => s.key !== selected.stage).map(s => (
              <Btn key={s.key} size="xs" variant="outline" onClick={() => { moveLead(selected.id, s.key); setSel(null); }}><span style={{ display: "flex", alignItems: "center", gap: 4 }}>{s.label} <ArrowRight size={11} /></span></Btn>
            ))}
          </div>
        </div>
      )}
      {showAdd && (
        <Modal title="Add Lead" onClose={() => setShowAdd(false)}>
          <Field label="Full Name *"><Input value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="e.g. Anil Kumar Sharma" /></Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Field label="Phone"><Input value={form.phone} onChange={v => setForm({ ...form, phone: v })} placeholder="+91 98001 00000" /></Field>
            <Field label="Budget"><Input value={form.budget} onChange={v => setForm({ ...form, budget: v })} placeholder="10000000" /></Field>
            <Field label="Config"><Sel value={form.config} onChange={v => setForm({ ...form, config: v })} options={["2BHK", "3BHK", "4BHK", "Villa", "Plot"].map(t => ({ value: t, label: t }))} style={{ width: "100%" }} /></Field>
            <Field label="Source"><Sel value={form.source} onChange={v => setForm({ ...form, source: v })} options={["Referral", "Portal", "Walk-in", "Campaign"].map(s => ({ value: s, label: s }))} style={{ width: "100%" }} /></Field>
            <Field label="Follow-up Date"><Input value={form.followUpDate} onChange={v => setForm({ ...form, followUpDate: v })} placeholder="5 Apr 2026" /></Field>
          </div>
          <Field label="Notes"><textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Key details, preferences..." style={{ width: "100%", border: `1px solid ${T.border}`, borderRadius: 8, padding: "8px 12px", fontSize: 13, outline: "none", resize: "vertical", minHeight: 80, boxSizing: "border-box", fontFamily: "inherit" }} /></Field>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <Btn variant="outline" onClick={() => setShowAdd(false)}>Cancel</Btn>
            <Btn onClick={addLead} disabled={!form.name.trim()}>Add Lead</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}


// ── COMMISSIONS ──────────────────────────────────────────────────────────────
function CommissionsPage({ isMobile, remindLog, onRemind }) {
  const [filter, setFilter] = useState("all");
  const [waModal, setWaModal] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const deals = commissionDeals;
  const fil = filter === "all" ? deals : deals.filter(d => d.status === filter);
  const tot = deals.reduce((s, d) => s + d.totalCommission - d.received, 0);
  const ovd = deals.flatMap(d => d.milestones).filter(m => m.status === "overdue").reduce((s, m) => s + m.amount, 0);
  const due = deals.flatMap(d => d.milestones).filter(m => m.status === "due-soon").reduce((s, m) => s + m.amount, 0);
  const rcv = deals.reduce((s, d) => s + d.received, 0);
  const mBadge = { overdue: "destructive", "due-soon": "warning", paid: "success", upcoming: "outline" };
  const mTag = m => ({ overdue: `${m.daysOverdue}d overdue`, "due-soon": `in ${m.daysUntilDue}d`, paid: "Paid", upcoming: "Upcoming" })[m.status];
  const sBadge = { overdue: <Badge variant="destructive">Overdue</Badge>, "due-soon": <Badge variant="warning">Due soon</Badge>, "on-track": <Badge variant="success">On track</Badge> };
  const tabs = [{ key: "all", label: "All", count: deals.length }, { key: "overdue", label: "Overdue", count: deals.filter(d => d.status === "overdue").length }, { key: "due-soon", label: "Due soon", count: deals.filter(d => d.status === "due-soon").length }, { key: "on-track", label: "On track", count: deals.filter(d => d.status === "on-track").length }];
  return (
    <div style={{ padding: isMobile ? 16 : 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div><h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Commissions</h1><p style={{ fontSize: 13, color: T.textMuted }}>{deals.length} active deals</p></div>
        {!isMobile && <Btn size="sm" variant="outline">Export</Btn>}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 10 : 12, marginBottom: 14 }}>
        {[{ label: "Outstanding", val: "₹" + (tot / 100000).toFixed(1) + "L", color: T.text }, { label: "Overdue", val: "₹" + (ovd / 100000).toFixed(1) + "L", color: T.red }, { label: "Due soon", val: "₹" + (due / 100000).toFixed(1) + "L", color: T.amber }, { label: "Received", val: "₹" + (rcv / 100000).toFixed(1) + "L", color: T.green }].map((s, i) => (
          <Card key={i}><div style={{ padding: isMobile ? "12px" : "14px 16px" }}><p style={{ fontSize: 10, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 }}>{s.label}</p><p style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: s.color, letterSpacing: "-0.02em" }}>{s.val}</p></div></Card>
        ))}
      </div>
      <div style={{ display: "flex", background: T.bgSubtle, borderRadius: 9, padding: 3, border: `1px solid ${T.border}`, gap: 2, marginBottom: 14, overflowX: "auto" }}>
        {tabs.map(tab => (
          <button key={tab.key} onClick={() => setFilter(tab.key)}
            style={{ flex: isMobile ? "1 0 auto" : undefined, padding: isMobile ? "8px 10px" : "5px 14px", borderRadius: 6, border: "none", background: filter === tab.key ? T.bg : "transparent", color: filter === tab.key ? T.text : T.textMuted, fontSize: 12, fontWeight: filter === tab.key ? 500 : 400, cursor: "pointer", boxShadow: filter === tab.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 4, whiteSpace: "nowrap" }}>
            {tab.label}<span style={{ fontSize: 11, color: T.textSubtle }}>{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Mobile: deal cards. Desktop: table */}
      {isMobile ? (
        <div>
          {fil.map(deal => {
            const pend = deal.totalCommission - deal.received;
            const isExp = expanded === deal.id;
            return (
              <Card key={deal.id} style={{ marginBottom: 10 }}>
                <div style={{ padding: "14px" }} onClick={() => setExpanded(isExp ? null : deal.id)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 1 }}>{deal.project}</p>
                      <p style={{ fontSize: 12, color: T.textMuted }}>{deal.client}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: 15, fontWeight: 700 }}>{"₹"}{pend.toLocaleString("en-IN")}</p>
                      <p style={{ fontSize: 11, color: T.textMuted }}>pending</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {sBadge[deal.status]}
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      {deal.status === "overdue" && (
                        <Btn size="xs" variant="success" onClick={e => { e.stopPropagation(); setWaModal(deal); }}><span style={{display:"flex",alignItems:"center",gap:4}}><MessageCircle size={12}/> Remind</span></Btn>
                      )}
                      <span style={{ fontSize: 11, color: T.textSubtle }}>{isExp ? "▲" : "▼"}</span>
                    </div>
                  </div>
                  {isExp && (
                    <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${T.border}` }}>
                      <p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Milestones</p>
                      {deal.milestones.map((m, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", background: T.bgSubtle, borderRadius: 8, marginBottom: 6 }}>
                          <div><p style={{ fontSize: 13, fontWeight: 500 }}>{m.label}</p><p style={{ fontSize: 11, color: T.textMuted }}>{m.date}</p></div>
                          <div style={{ textAlign: "right" }}>
                            <p style={{ fontSize: 13, fontWeight: 600 }}>{"₹"}{m.amount.toLocaleString("en-IN")}</p>
                            <Badge variant={mBadge[m.status]} style={{ marginTop: 3 }}>{mTag(m)}</Badge>
                          </div>
                        </div>
                      ))}
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10, padding: "10px 12px", background: T.bgSubtle, borderRadius: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: T.accent, flexShrink: 0 }}>{deal.developerRM.charAt(0)}</div>
                        <div style={{ flex: 1 }}><p style={{ fontSize: 13, fontWeight: 500 }}>{deal.developerRM}</p><p style={{ fontSize: 11, color: T.textMuted }}>{deal.developer}</p></div>
                        {deal.status === "overdue" && <Btn size="xs" variant="success" onClick={e => { e.stopPropagation(); setWaModal(deal); }}><span style={{display:"flex",alignItems:"center",gap:4}}><MessageCircle size={12}/> Remind</span></Btn>}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead><tr style={{ background: T.bgSubtle, borderBottom: `1px solid ${T.border}` }}>
                {["Project", "Client", "Total", "Outstanding", "Status", ""].map((h, i) => <th key={h} style={{ padding: "10px 16px", textAlign: i >= 2 && i < 4 ? "right" : "left", fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {fil.map(deal => {
                  const pend = deal.totalCommission - deal.received;
                  const isExp = expanded === deal.id;
                  return [
                    <tr key={deal.id} style={{ borderBottom: `1px solid ${T.border}`, cursor: "pointer", background: isExp ? T.bgSubtle : T.bg }} onClick={() => setExpanded(isExp ? null : deal.id)}>
                      <td style={{ padding: "13px 16px" }}><p style={{ fontSize: 13, fontWeight: 500 }}>{deal.project}</p><p style={{ fontSize: 12, color: T.textMuted }}>{deal.developer}</p></td>
                      <td style={{ padding: "13px 16px" }}><p style={{ fontSize: 13 }}>{deal.client}</p><p style={{ fontSize: 12, color: T.textMuted }}>{deal.unit}</p></td>
                      <td style={{ padding: "13px 16px", textAlign: "right", fontSize: 13, fontWeight: 600 }}>{"₹"}{deal.totalCommission.toLocaleString("en-IN")}</td>
                      <td style={{ padding: "13px 16px", textAlign: "right", fontSize: 13, fontWeight: 600, color: pend > 0 ? T.text : T.green }}>{"₹"}{pend.toLocaleString("en-IN")}</td>
                      <td style={{ padding: "13px 16px" }}>{sBadge[deal.status]}</td>
                      <td style={{ padding: "13px 16px" }}>
                        <div style={{ display: "flex", gap: 6, justifyContent: "flex-end", alignItems: "center" }}>
                          {deal.status === "overdue" && <Btn size="xs" variant="success" onClick={e => { e.stopPropagation(); setWaModal(deal); }}>Remind</Btn>}
                          <span style={{ fontSize: 11, color: T.textSubtle }}>{isExp ? "▲" : "▼"}</span>
                        </div>
                      </td>
                    </tr>,
                    isExp && (
                      <tr key={"exp-" + deal.id} style={{ background: T.bgSubtle }}>
                        <td colSpan={6} style={{ padding: "0 16px 16px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, paddingTop: 12 }}>
                            <div style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden" }}>
                              <div style={{ padding: "10px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}` }}><p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Milestones</p></div>
                              {deal.milestones.map((m, i) => (
                                <div key={i} style={{ padding: "10px 14px", borderBottom: i < deal.milestones.length - 1 ? `1px solid ${T.border}` : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div><p style={{ fontSize: 13, fontWeight: 500 }}>{m.label}</p><p style={{ fontSize: 12, color: T.textMuted }}>{m.date}</p></div>
                                  <div style={{ textAlign: "right" }}><p style={{ fontSize: 13, fontWeight: 600 }}>{"₹"}{m.amount.toLocaleString("en-IN")}</p><Badge variant={mBadge[m.status]} style={{ marginTop: 3 }}>{mTag(m)}</Badge></div>
                                </div>
                              ))}
                            </div>
                            <div style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden" }}>
                              <div style={{ padding: "10px 14px", textAlign: "left", borderBottom: `1px solid ${T.border}` }}><p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Developer RM</p></div>
                              <div style={{ padding: 14 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: T.accent }}>{deal.developerRM.charAt(0)}</div>
                                  <div><p style={{ fontSize: 13, fontWeight: 500 }}>{deal.developerRM}</p><p style={{ fontSize: 12, color: T.textMuted }}>{deal.developer}</p></div>
                                </div>
                                {deal.status === "overdue" && <Btn variant="default" size="sm" onClick={() => setWaModal(deal)} style={{ width: "100%", justifyContent: "center" }}>Send WhatsApp Reminder</Btn>}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  ];
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}
      {waModal && <WAModal deal={waModal} onClose={() => setWaModal(null)} remindedAt={remindLog[waModal.id]} onRemind={onRemind} />}
    </div>
  );
}


// ── TEAM ─────────────────────────────────────────────────────────────────────
const teamMembers = [
  { id: 1, name: "Ravi Kumar", role: "Senior Sales Exec", phone: "+91 98101 11111", joined: "Jan 2025", avatar: "R", leads: 12, siteVisits: 8, closures: 3, revenue: 3420000, status: "active", followUpsDue: 3 },
  { id: 2, name: "Preethi Sharma", role: "Sales Executive", phone: "+91 98102 22222", joined: "Mar 2025", avatar: "P", leads: 9, siteVisits: 5, closures: 2, revenue: 1860000, status: "active", followUpsDue: 1 },
  { id: 3, name: "Arjun Nair", role: "Junior Exec", phone: "+91 98103 33333", joined: "Aug 2025", avatar: "A", leads: 6, siteVisits: 3, closures: 1, revenue: 920000, status: "active", followUpsDue: 2 },
  { id: 4, name: "Divya Reddy", role: "Sales Executive", phone: "+91 98104 44444", joined: "Nov 2025", avatar: "D", leads: 4, siteVisits: 2, closures: 0, revenue: 0, status: "active", followUpsDue: 0 },
];

const closedDeals = [
  { id: 1, assignee: "Ravi Kumar", client: "Harish Babu", project: "Lodha Meridian", unit: "3BHK Wing B 1103", config: "3BHK", value: 11400000, commission: 228000, closedDate: "1 Feb 2026", source: "Referral" },
  { id: 2, assignee: "Ravi Kumar", client: "Sanjay Gupta", project: "My Home Avatar", unit: "2BHK Tower A 702", config: "2BHK", value: 6800000, commission: 136000, closedDate: "15 Jan 2026", source: "Portal" },
  { id: 3, assignee: "Ravi Kumar", client: "Meena Iyer", project: "Prestige High Fields", unit: "3BHK Block B 901", config: "3BHK", value: 9400000, commission: 188000, closedDate: "5 Dec 2025", source: "Referral" },
  { id: 4, assignee: "Preethi Sharma", client: "Kiran Rao", project: "Aparna Sarovar Zenith", unit: "2BHK Tower 2 502", config: "2BHK", value: 7100000, commission: 142000, closedDate: "20 Jan 2026", source: "Walk-in" },
  { id: 5, assignee: "Preethi Sharma", client: "Sunil Verma", project: "Lodha Meridian", unit: "2BHK Wing A 403", config: "2BHK", value: 7400000, commission: 148000, closedDate: "10 Dec 2025", source: "Campaign" },
  { id: 6, assignee: "Arjun Nair", client: "Deepa Krishnan", project: "My Home Bhooja", unit: "3BHK Wing 1 1102", config: "3BHK", value: 9200000, commission: 184000, closedDate: "28 Jan 2026", source: "Referral" },
];

const teamLeads = [
  { id: 1, name: "Anil Kumar Sharma", assignee: "Ravi Kumar", stage: "site-visit", config: "3BHK", budget: 10000000, followUp: "5 Apr 2026" },
  { id: 2, name: "Ramesh & Sunitha Rao", assignee: "Preethi Sharma", stage: "negotiation", config: "2BHK", budget: 8000000, followUp: "3 Apr 2026" },
  { id: 3, name: "Dr. Priya Menon", assignee: "Ravi Kumar", stage: "qualified", config: "4BHK", budget: 25000000, followUp: "7 Apr 2026" },
  { id: 4, name: "Vijay Anand", assignee: "Arjun Nair", stage: "new", config: "3BHK", budget: 12000000, followUp: "4 Apr 2026" },
  { id: 5, name: "Naresh Chandra", assignee: "Divya Reddy", stage: "new", config: "2BHK", budget: 7000000, followUp: "4 Apr 2026" },
  { id: 6, name: "Harish Babu", assignee: "Ravi Kumar", stage: "booked", config: "4BHK", budget: 20000000, followUp: null },
];

function OrgTreeView({ isMobile }) {
  const stageColor = { new: T.textMuted, qualified: T.blue, "site-visit": T.amber, negotiation: "#7c3aed", booked: T.green };
  const stageLabel = { new: "New", qualified: "Qualified", "site-visit": "Site Visit", negotiation: "Negotiation", booked: "Booked" };
  const [expanded, setExpanded] = useState(null);

  // Principal node
  const principal = { name: "Chari", role: "Principal CP", avatar: "C", color: T.accent, leads: teamMembers.reduce((s,m)=>s+m.leads,0), closures: teamMembers.reduce((s,m)=>s+m.closures,0) };

  const memberColors = ["#4f46e5","#16a34a","#d97706","#dc2626"];

  if (isMobile) {
    return (
      <div style={{ paddingTop: 8 }}>
        {/* Principal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 0 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: T.accentBg, border: `3px solid ${T.accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: T.accent, marginBottom: 6 }}>{principal.avatar}</div>
          <p style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{principal.name}</p>
          <p style={{ fontSize: 11, color: T.textMuted, marginBottom: 4 }}>{principal.role}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ background: T.accentBg, color: T.accent, fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{principal.leads} leads</span>
            <span style={{ background: T.greenBg, color: T.green, fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{principal.closures} closures</span>
          </div>
        </div>

        {/* Connector line down */}
        <div style={{ width: 2, height: 24, background: T.border, margin: "0 auto" }} />

        {/* Horizontal spread line */}
        <div style={{ position: "relative", marginBottom: 0 }}>
          <div style={{ height: 2, background: T.border, margin: "0 8px" }} />
        </div>

        {/* Member nodes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 0 }}>
          {teamMembers.map((member, i) => {
            const color = memberColors[i % memberColors.length];
            const memberLeads = teamLeads.filter(l => l.assignee === member.name);
            const isExp = expanded === member.id;
            return (
              <div key={member.id}>
                {/* Connector up */}
                <div style={{ width: 2, height: 16, background: T.border, margin: "0 auto" }} />
                <Card onClick={() => setExpanded(isExp ? null : member.id)} style={{ border: isExp ? `2px solid ${color}` : `1px solid ${T.border}`, cursor: "pointer" }}>
                  <div style={{ padding: "12px 12px 10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: color + "18", border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color, flexShrink: 0 }}>{member.avatar}</div>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{member.name.split(" ")[0]}</p>
                        <p style={{ fontSize: 10, color: T.textMuted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{member.role.replace("Sales Executive", "Sales Exec")}</p>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
                      {[["L", member.leads, T.textMuted], ["SV", member.siteVisits, T.blue], ["C", member.closures, T.green]].map(([lbl, val, col]) => (
                        <div key={lbl} style={{ background: T.bgSubtle, borderRadius: 6, padding: "5px 4px", textAlign: "center" }}>
                          <p style={{ fontSize: 9, color: T.textSubtle, marginBottom: 1 }}>{lbl}</p>
                          <p style={{ fontSize: 14, fontWeight: 700, color: val > 0 ? col : T.textSubtle }}>{val}</p>
                        </div>
                      ))}
                    </div>
                    {member.followUpsDue > 0 && (
                      <div style={{ marginTop: 7, display: "flex", alignItems: "center", gap: 4, background: T.amberBg, borderRadius: 6, padding: "4px 8px" }}>
                        <Calendar size={10} color={T.amber} />
                        <p style={{ fontSize: 10, color: T.amber, fontWeight: 500 }}>{member.followUpsDue} due</p>
                      </div>
                    )}
                  </div>
                </Card>
                {/* Expanded leads */}
                {isExp && (
                  <div style={{ marginTop: 6, background: T.bgSubtle, borderRadius: 8, padding: "8px 10px", border: `1px solid ${color}40` }}>
                    <p style={{ fontSize: 10, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Leads</p>
                    {memberLeads.filter(l => l.stage !== "booked").slice(0, 3).map(l => (
                      <div key={l.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                        <p style={{ fontSize: 11, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, paddingRight: 6 }}>{l.name.split(" ")[0]}</p>
                        <span style={{ fontSize: 10, color: stageColor[l.stage], fontWeight: 600, flexShrink: 0 }}>{stageLabel[l.stage]}</span>
                      </div>
                    ))}
                    {memberLeads.length === 0 && <p style={{ fontSize: 11, color: T.textMuted }}>No active leads</p>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop SVG org tree
  const W = 720, nodeW = 160, nodeH = 110, levelGap = 120;
  const rootX = W / 2 - nodeW / 2;
  const rootY = 20;
  const memberCount = teamMembers.length;
  const totalMemberWidth = memberCount * nodeW + (memberCount - 1) * 40;
  const memberStartX = W / 2 - totalMemberWidth / 2;
  const memberY = rootY + nodeH + levelGap;
  const memberPositions = teamMembers.map((m, i) => ({
    ...m, x: memberStartX + i * (nodeW + 40), y: memberY, color: memberColors[i % memberColors.length]
  }));
  const rootCenterX = rootX + nodeW / 2;
  const rootBottomY = rootY + nodeH;
  const midY = rootBottomY + levelGap / 2;

  return (
    <div style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12, padding: "20px", overflowX: "auto" }}>
      <svg width={W} height={memberY + nodeH + 40} style={{ display: "block", margin: "0 auto" }}>
        {/* Root to horizontal line */}
        <line x1={rootCenterX} y1={rootBottomY} x2={rootCenterX} y2={midY} stroke={T.border} strokeWidth={2} />
        {/* Horizontal line spanning all members */}
        {memberPositions.length > 1 && (
          <line
            x1={memberPositions[0].x + nodeW / 2}
            y1={midY}
            x2={memberPositions[memberPositions.length - 1].x + nodeW / 2}
            y2={midY}
            stroke={T.border} strokeWidth={2}
          />
        )}
        {/* Vertical drops to each member */}
        {memberPositions.map(m => (
          <line key={m.id} x1={m.x + nodeW / 2} y1={midY} x2={m.x + nodeW / 2} y2={m.y} stroke={T.border} strokeWidth={2} />
        ))}

        {/* Root node */}
        <rect x={rootX} y={rootY} width={nodeW} height={nodeH} rx={10} fill={T.accentBg} stroke={T.accent} strokeWidth={2} />
        <circle cx={rootX + nodeW / 2} cy={rootY + 32} r={20} fill={T.accent} />
        <text x={rootX + nodeW / 2} y={rootY + 38} textAnchor="middle" fontSize={14} fontWeight="800" fill="white">C</text>
        <text x={rootX + nodeW / 2} y={rootY + 66} textAnchor="middle" fontSize={13} fontWeight="700" fill={T.text}>Chari</text>
        <text x={rootX + nodeW / 2} y={rootY + 82} textAnchor="middle" fontSize={10} fill={T.textMuted}>Principal CP</text>
        <text x={rootX + nodeW / 2} y={rootY + 100} textAnchor="middle" fontSize={10} fill={T.accent} fontWeight="600">{principal.leads}L · {principal.closures}C</text>

        {/* Member nodes */}
        {memberPositions.map(m => {
          const isExp = expanded === m.id;
          return (
            <g key={m.id} style={{ cursor: "pointer" }} onClick={() => setExpanded(isExp ? null : m.id)}>
              <rect x={m.x} y={m.y} width={nodeW} height={nodeH} rx={10} fill={isExp ? m.color + "15" : T.bgSubtle} stroke={isExp ? m.color : T.border} strokeWidth={isExp ? 2 : 1} />
              <circle cx={m.x + nodeW / 2} cy={m.y + 28} r={18} fill={m.color + "25"} stroke={m.color} strokeWidth={2} />
              <text x={m.x + nodeW / 2} y={m.y + 34} textAnchor="middle" fontSize={13} fontWeight="700" fill={m.color}>{m.avatar}</text>
              <text x={m.x + nodeW / 2} y={m.y + 58} textAnchor="middle" fontSize={12} fontWeight="600" fill={T.text}>{m.name.split(" ")[0]}</text>
              <text x={m.x + nodeW / 2} y={m.y + 72} textAnchor="middle" fontSize={10} fill={T.textMuted}>{m.role.replace("Sales Executive","Sales Exec")}</text>
              {/* Mini stats */}
              <text x={m.x + 20} y={m.y + 94} textAnchor="middle" fontSize={10} fill={T.textMuted}>{m.leads}L</text>
              <text x={m.x + nodeW / 2} y={m.y + 94} textAnchor="middle" fontSize={10} fill={T.blue}>{m.siteVisits}SV</text>
              <text x={m.x + nodeW - 20} y={m.y + 94} textAnchor="middle" fontSize={10} fill={m.closures > 0 ? T.green : T.textSubtle} fontWeight={m.closures > 0 ? "700" : "400"}>{m.closures}C</text>
              {m.followUpsDue > 0 && (
                <circle cx={m.x + nodeW - 12} cy={m.y + 12} r={8} fill={T.amber} />
              )}
              {m.followUpsDue > 0 && (
                <text x={m.x + nodeW - 12} y={m.y + 16} textAnchor="middle" fontSize={9} fill="white" fontWeight="700">{m.followUpsDue}</text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Expanded member detail below chart */}
      {expanded && (() => {
        const m = teamMembers.find(m => m.id === expanded);
        if (!m) return null;
        const color = memberColors[teamMembers.indexOf(m) % memberColors.length];
        const mLeads = teamLeads.filter(l => l.assignee === m.name && l.stage !== "booked");
        const stageColor = { new: T.textMuted, qualified: T.blue, "site-visit": T.amber, negotiation: "#7c3aed", booked: T.green };
        const stageLabel = { new: "New", qualified: "Qualified", "site-visit": "Site Visit", negotiation: "Negotiation", booked: "Booked" };
        return (
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${T.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: color + "18", border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color }}>{m.avatar}</div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700 }}>{m.name}</p>
                <p style={{ fontSize: 12, color: T.textMuted }}>{m.role} · {m.phone}</p>
              </div>
              <button onClick={() => setExpanded(null)} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: T.textMuted, display: "flex" }}><X size={16} /></button>
            </div>
            {mLeads.length > 0 ? (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: T.bgSubtle, borderBottom: `1px solid ${T.border}` }}>
                  {["Lead", "Config", "Budget", "Stage", "Follow-up"].map(h => <th key={h} style={{ padding: "8px 14px", textAlign: "left", fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {mLeads.map(l => (
                    <tr key={l.id} style={{ borderBottom: `1px solid ${T.border}` }}>
                      <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 500 }}>{l.name}</td>
                      <td style={{ padding: "10px 14px" }}><Badge variant="outline">{l.config}</Badge></td>
                      <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600 }}>{fmtPrice(l.budget)}</td>
                      <td style={{ padding: "10px 14px" }}><span style={{ fontSize: 12, fontWeight: 500, color: stageColor[l.stage], background: stageColor[l.stage] + "18", padding: "3px 10px", borderRadius: 20 }}>{stageLabel[l.stage]}</span></td>
                      <td style={{ padding: "10px 14px", fontSize: 12, color: T.textMuted }}>{l.followUp || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ fontSize: 13, color: T.textMuted }}>No active leads assigned</p>
            )}
          </div>
        );
      })()}

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, marginTop: 16, paddingTop: 12, borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
        {[["L", "Leads", T.textMuted], ["SV", "Site Visits", T.blue], ["C", "Closures", T.green]].map(([k, label, col]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: col }}>{k}</span>
            <span style={{ fontSize: 11, color: T.textMuted }}>{label}</span>
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: T.amber, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 8, color: "white", fontWeight: 700 }}>!</span></div>
          <span style={{ fontSize: 11, color: T.textMuted }}>Follow-ups due today</span>
        </div>
        <span style={{ fontSize: 11, color: T.textSubtle, marginLeft: "auto" }}>Tap a node to see leads</span>
      </div>
    </div>
  );
}

// ── MEMBER DETAIL SHEET ──────────────────────────────────────────────────────
function MemberDetailSheet({ member, isMobile, onClose }) {
  const [activeTab, setActiveTab] = useState("active");
  const [stageFilter, setStageFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const stageColor = { new: T.textMuted, qualified: T.blue, "site-visit": T.amber, negotiation: "#7c3aed", booked: T.green };
  const stageLabel = { new: "New", qualified: "Qualified", "site-visit": "Site Visit", negotiation: "Negotiation", booked: "Booked" };
  const memberColors = ["#4f46e5","#16a34a","#d97706","#dc2626"];
  const color = memberColors[teamMembers.indexOf(member) % memberColors.length];

  const activeLeads = teamLeads.filter(l => l.assignee === member.name && l.stage !== "booked")
    .filter(l => stageFilter === "all" || l.stage === stageFilter)
    .filter(l => sourceFilter === "all" || l.source === sourceFilter);

  const memberClosed = closedDeals.filter(d => d.assignee === member.name)
    .filter(d => sourceFilter === "all" || d.source === sourceFilter);

  const totalCommission = memberClosed.reduce((s, d) => s + d.commission, 0);
  const convRate = member.leads > 0 ? ((member.closures / member.leads) * 100).toFixed(0) : 0;
  const avgDeal = member.closures > 0 ? Math.round(memberClosed.reduce((s,d) => s+d.value, 0) / Math.max(member.closures, 1)) : 0;

  const sheetStyle = isMobile
    ? { position: "fixed", inset: 0, background: T.bg, zIndex: 150, overflowY: "auto", display: "flex", flexDirection: "column" }
    : { position: "fixed", right: 0, top: 0, bottom: 0, width: 560, background: T.bg, zIndex: 150, overflowY: "auto", boxShadow: "-8px 0 40px rgba(0,0,0,0.12)", borderLeft: `1px solid ${T.border}`, display: "flex", flexDirection: "column" };

  return (
    <>
      {!isMobile && <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.2)", zIndex: 149 }} onClick={onClose} />}
      <div style={sheetStyle}>
        {/* Header */}
        <div style={{ padding: "16px 20px", borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: color + "18", border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 800, color, flexShrink: 0 }}>{member.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: T.text }}>{member.name}</p>
              <p style={{ fontSize: 12, color: T.textMuted }}>{member.role} · Joined {member.joined}</p>
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: T.textMuted, display: "flex", padding: 4 }}><X size={18} /></button>
          </div>
          {/* Quick stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 14 }}>
            {[
              { label: "Leads", val: member.leads, color: T.text },
              { label: "Site Visits", val: member.siteVisits, color: T.blue },
              { label: "Closures", val: member.closures, color: T.green },
              { label: "Conv. Rate", val: convRate + "%", color: T.accent },
            ].map(s => (
              <div key={s.label} style={{ background: T.bgSubtle, borderRadius: 8, padding: "9px 10px", textAlign: "center" }}>
                <p style={{ fontSize: 10, color: T.textSubtle, marginBottom: 3 }}>{s.label}</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: s.color }}>{s.val}</p>
              </div>
            ))}
          </div>
          {/* Revenue summary */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
            <div style={{ background: T.accentBg, borderRadius: 8, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}><TrendingUp size={13} color={T.accent} /><p style={{ fontSize: 12, color: T.accent }}>Pipeline</p></div>
              <p style={{ fontSize: 14, fontWeight: 700, color: T.accent }}>{fmtPrice(member.revenue)}</p>
            </div>
            <div style={{ background: T.greenBg, borderRadius: 8, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}><CheckCheck size={13} color={T.green} /><p style={{ fontSize: 12, color: T.green }}>Commission</p></div>
              <p style={{ fontSize: 14, fontWeight: 700, color: T.green }}>{fmtPrice(totalCommission)}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ padding: "12px 20px 0", borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 0 }}>
            {[{ key: "active", label: "Active Leads", count: teamLeads.filter(l => l.assignee === member.name && l.stage !== "booked").length },
              { key: "closed", label: "Closed Deals", count: closedDeals.filter(d => d.assignee === member.name).length }
            ].map(t => (
              <button key={t.key} onClick={() => { setActiveTab(t.key); setStageFilter("all"); setSourceFilter("all"); }}
                style={{ padding: "8px 16px", border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: activeTab === t.key ? 600 : 400, color: activeTab === t.key ? T.text : T.textMuted, borderBottom: activeTab === t.key ? `2px solid ${T.text}` : "2px solid transparent", marginBottom: -1 }}>
                {t.label} <span style={{ fontSize: 11, color: T.textSubtle, marginLeft: 4 }}>{t.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div style={{ padding: "12px 20px", borderBottom: `1px solid ${T.border}`, display: "flex", gap: 8, flexWrap: "wrap", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <SlidersHorizontal size={13} color={T.textSubtle} />
            <p style={{ fontSize: 11, color: T.textSubtle, fontWeight: 500 }}>Filter:</p>
          </div>
          {activeTab === "active" && (
            <Sel value={stageFilter} onChange={setStageFilter}
              options={[{ value: "all", label: "All Stages" }, { value: "new", label: "New" }, { value: "qualified", label: "Qualified" }, { value: "site-visit", label: "Site Visit" }, { value: "negotiation", label: "Negotiation" }]}
              style={{ fontSize: 12, padding: "4px 8px" }} />
          )}
          <Sel value={sourceFilter} onChange={setSourceFilter}
            options={[{ value: "all", label: "All Sources" }, { value: "Referral", label: "Referral" }, { value: "Portal", label: "Portal" }, { value: "Walk-in", label: "Walk-in" }, { value: "Campaign", label: "Campaign" }]}
            style={{ fontSize: 12, padding: "4px 8px" }} />
          {(stageFilter !== "all" || sourceFilter !== "all") && (
            <button onClick={() => { setStageFilter("all"); setSourceFilter("all"); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: T.accent, fontWeight: 500, display: "flex", alignItems: "center", gap: 3 }}>
              <X size={11} /> Clear
            </button>
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 20px 24px" }}>
          {activeTab === "active" && (
            <div style={{ paddingTop: 14 }}>
              {activeLeads.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px 0", color: T.textMuted }}>
                  <CircleDot size={28} style={{ margin: "0 auto 10px", opacity: 0.3 }} />
                  <p style={{ fontSize: 13 }}>No active leads match filters</p>
                </div>
              )}
              {activeLeads.map((l, i) => (
                <div key={l.id} style={{ padding: "14px 0", borderBottom: i < activeLeads.length - 1 ? `1px solid ${T.border}` : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ flex: 1, minWidth: 0, paddingRight: 12 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 2 }}>{l.name}</p>
                      <p style={{ fontSize: 12, color: T.textMuted }}>{l.config} · {fmtPrice(l.budget)}</p>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: stageColor[l.stage], background: stageColor[l.stage] + "18", padding: "3px 10px", borderRadius: 20, flexShrink: 0 }}>{stageLabel[l.stage]}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <Badge variant="outline" style={{ fontSize: 10 }}>{l.source}</Badge>
                    {l.followUp && <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: T.textMuted }}><Calendar size={10} />{l.followUp}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "closed" && (
            <div style={{ paddingTop: 14 }}>
              {/* Closed summary */}
              <div style={{ background: T.bgSubtle, borderRadius: 10, padding: "14px 16px", marginBottom: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                {[
                  { label: "Total Closed", val: memberClosed.length, color: T.green },
                  { label: "Total Value", val: fmtPrice(memberClosed.reduce((s,d)=>s+d.value,0)), color: T.text },
                  { label: "Commission Earned", val: fmtPrice(totalCommission), color: T.accent },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <p style={{ fontSize: 10, color: T.textSubtle, marginBottom: 4 }}>{s.label}</p>
                    <p style={{ fontSize: 15, fontWeight: 700, color: s.color }}>{s.val}</p>
                  </div>
                ))}
              </div>
              {memberClosed.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px 0", color: T.textMuted }}>
                  <History size={28} style={{ margin: "0 auto 10px", opacity: 0.3 }} />
                  <p style={{ fontSize: 13 }}>No closed deals yet</p>
                </div>
              )}
              {memberClosed.map((d, i) => (
                <div key={d.id} style={{ padding: "14px 0", borderBottom: i < memberClosed.length - 1 ? `1px solid ${T.border}` : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ flex: 1, minWidth: 0, paddingRight: 12 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 2 }}>{d.client}</p>
                      <p style={{ fontSize: 12, color: T.textMuted }}>{d.project} · {d.unit}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{fmtPrice(d.value)}</p>
                      <p style={{ fontSize: 11, color: T.green, fontWeight: 600 }}>+{fmtPrice(d.commission)}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: T.textMuted }}><CheckCheck size={11} color={T.green} />{d.closedDate}</span>
                    <Badge variant="outline" style={{ fontSize: 10 }}>{d.source}</Badge>
                    <Badge variant="outline" style={{ fontSize: 10 }}>{d.config}</Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function TeamPage({ isMobile }) {
  const [selMember, setSelMember] = useState(null);   // expanded inline (Layer 2)
  const [sheetMember, setSheetMember] = useState(null); // full detail sheet (Layer 3)
  const [tab, setTab] = useState("overview");
  const [overviewView, setOverviewView] = useState("cards");
  const totalLeads = teamMembers.reduce((s, m) => s + m.leads, 0);
  const totalClosures = teamMembers.reduce((s, m) => s + m.closures, 0);
  const totalRevenue = teamMembers.reduce((s, m) => s + m.revenue, 0);
  const stageColor = { new: T.textMuted, qualified: T.blue, "site-visit": T.amber, negotiation: "#7c3aed", booked: T.green };
  const stageLabel = { new: "New", qualified: "Qualified", "site-visit": "Site Visit", negotiation: "Negotiation", booked: "Booked" };

  return (
    <div style={{ padding: isMobile ? 16 : 24 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Team</h1>
          <p style={{ fontSize: 13, color: T.textMuted }}>{teamMembers.length} members · Chari (Principal CP)</p>
        </div>
        <Btn size="sm"><span style={{ display: "flex", alignItems: "center", gap: 4 }}><Plus size={13} /> Add member</span></Btn>
      </div>

      {/* Summary stats */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 10 : 12, marginBottom: 20 }}>
        {[
          { label: "Team Leads", val: totalLeads, icon: <CircleDot size={15} color={T.textSubtle} />, color: T.text },
          { label: "Closures MTD", val: totalClosures, icon: <Award size={15} color={T.textSubtle} />, color: T.green },
          { label: "Pipeline Revenue", val: fmtPrice(totalRevenue), icon: <TrendingUp size={15} color={T.textSubtle} />, color: T.accent },
          { label: "Follow-ups Due", val: teamMembers.reduce((s, m) => s + m.followUpsDue, 0), icon: <Calendar size={15} color={T.textSubtle} />, color: T.amber },
        ].map((s, i) => (
          <Card key={i}>
            <div style={{ padding: isMobile ? "12px" : "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <p style={{ fontSize: 10, color: T.textSubtle, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</p>
                {s.icon}
              </div>
              <p style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: s.color, letterSpacing: "-0.02em" }}>{s.val}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Tab + view toggle row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", background: T.bgSubtle, borderRadius: 9, padding: 3, border: `1px solid ${T.border}`, gap: 2 }}>
          {[{ key: "overview", label: "Overview" }, { key: "pipeline", label: "Pipeline" }].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              style={{ padding: "5px 16px", borderRadius: 6, border: "none", background: tab === t.key ? T.bg : "transparent", color: tab === t.key ? T.text : T.textMuted, fontSize: 12, fontWeight: tab === t.key ? 500 : 400, cursor: "pointer", boxShadow: tab === t.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}>
              {t.label}
            </button>
          ))}
        </div>
        {tab === "overview" && (
          <div style={{ display: "flex", background: T.bgSubtle, borderRadius: 8, padding: 2, border: `1px solid ${T.border}`, gap: 2 }}>
            <button onClick={() => setOverviewView("cards")} style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: overviewView === "cards" ? T.bg : "transparent", color: overviewView === "cards" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: overviewView === "cards" ? "0 1px 3px rgba(0,0,0,0.08)" : "none", fontSize: 12, fontWeight: 500 }}>
              <LayoutDashboard size={13} />{!isMobile && " Cards"}
            </button>
            <button onClick={() => setOverviewView("org")} style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: overviewView === "org" ? T.bg : "transparent", color: overviewView === "org" ? T.text : T.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: overviewView === "org" ? "0 1px 3px rgba(0,0,0,0.08)" : "none", fontSize: 12, fontWeight: 500 }}>
              <Network size={13} />{!isMobile && " Org Tree"}
            </button>
          </div>
        )}
      </div>

      {tab === "overview" && overviewView === "org" && <OrgTreeView isMobile={isMobile} />}

      {tab === "overview" && overviewView === "cards" && (
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
          {teamMembers.map(member => {
            const isExpanded = selMember === member.id;
            const activeLeads = teamLeads.filter(l => l.assignee === member.name && l.stage !== "booked");
            const showLeads = activeLeads.slice(0, 3);
            const hasMore = activeLeads.length > 3;
            return (
              <Card key={member.id} style={{ border: isExpanded ? `1px solid ${T.accent}` : `1px solid ${T.border}` }}>
                <div style={{ padding: "16px", textAlign: "left" }}>
                  {/* Layer 1: snapshot header — tap avatar/name → sheet, tap chevron → expand */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    {/* Avatar + name: tap → full sheet */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0, cursor: "pointer" }}
                      onClick={() => setSheetMember(member)}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: T.accent, flexShrink: 0 }}>{member.avatar}</div>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: T.text }}>{member.name}</p>
                        <p style={{ fontSize: 12, color: T.textMuted }}>{member.role}</p>
                      </div>
                    </div>
                    {/* Badge + chevron: tap → inline expand */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0, cursor: "pointer" }}
                      onClick={() => setSelMember(isExpanded ? null : member.id)}>
                      <Badge variant="success">Active</Badge>
                      <span style={{ color: T.textSubtle, display: "flex" }}>{isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                    {[
                      { label: "Leads", val: member.leads, icon: <CircleDot size={11} color={T.textSubtle} /> },
                      { label: "Site Visits", val: member.siteVisits, icon: <Activity size={11} color={T.textSubtle} /> },
                      { label: "Closures", val: member.closures, icon: <Award size={11} color={member.closures > 0 ? T.green : T.textSubtle} /> },
                    ].map(s => (
                      <div key={s.label} style={{ background: T.bgSubtle, borderRadius: 8, padding: "10px 10px 8px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>{s.icon}<p style={{ fontSize: 10, color: T.textSubtle }}>{s.label}</p></div>
                        <p style={{ fontSize: 18, fontWeight: 700, color: s.label === "Closures" && s.val > 0 ? T.green : T.text }}>{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Revenue row */}
                  <div style={{ marginTop: 10, padding: "10px 12px", background: T.bgSubtle, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}><TrendingUp size={13} color={T.textMuted} /><p style={{ fontSize: 12, color: T.textMuted }}>Pipeline revenue</p></div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: member.revenue > 0 ? T.accent : T.textSubtle }}>{member.revenue > 0 ? fmtPrice(member.revenue) : "—"}</p>
                  </div>

                  {/* Follow-up alert */}
                  {member.followUpsDue > 0 && (
                    <div style={{ marginTop: 8, padding: "8px 12px", background: T.amberBg, border: `1px solid ${T.amberBorder}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 6 }}>
                      <Calendar size={12} color={T.amber} />
                      <p style={{ fontSize: 12, color: T.amber, fontWeight: 500 }}>{member.followUpsDue} follow-up{member.followUpsDue > 1 ? "s" : ""} due today</p>
                    </div>
                  )}

                  {/* Layer 2: inline active leads (on expand) */}
                  {isExpanded && (
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${T.border}` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Active Leads ({activeLeads.length})</p>
                        <button onClick={() => setSheetMember(member)}
                          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: T.accent, fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                          View all <ArrowRight size={11} />
                        </button>
                      </div>
                      {activeLeads.length === 0 && <p style={{ fontSize: 13, color: T.textMuted }}>No active leads</p>}
                      {showLeads.map(l => (
                        <div key={l.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", background: T.bgSubtle, borderRadius: 8, marginBottom: 6 }}>
                          <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                            <p style={{ fontSize: 13, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.name}</p>
                            <p style={{ fontSize: 11, color: T.textMuted }}>{l.config} · {fmtPrice(l.budget)}</p>
                          </div>
                          <div style={{ textAlign: "right", flexShrink: 0 }}>
                            <span style={{ fontSize: 11, fontWeight: 600, color: stageColor[l.stage] }}>{stageLabel[l.stage]}</span>
                            {l.followUp && <p style={{ fontSize: 10, color: T.textSubtle, marginTop: 1 }}>{l.followUp}</p>}
                          </div>
                        </div>
                      ))}
                      {hasMore && (
                        <button onClick={() => setSheetMember(member)}
                          style={{ width: "100%", padding: "9px", background: T.bgSubtle, border: `1px dashed ${T.border}`, borderRadius: 8, cursor: "pointer", fontSize: 12, color: T.accent, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                          +{activeLeads.length - 3} more leads · View all <ArrowRight size={11} />
                        </button>
                      )}
                      {/* Closed deals teaser */}
                      {closedDeals.filter(d => d.assignee === member.name).length > 0 && (
                        <button onClick={() => setSheetMember(member)}
                          style={{ width: "100%", marginTop: 6, padding: "9px", background: T.greenBg, border: `1px solid ${T.greenBorder}`, borderRadius: 8, cursor: "pointer", fontSize: 12, color: T.green, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                          <CheckCheck size={12} /> {closedDeals.filter(d => d.assignee === member.name).length} closed deals · View history <ArrowRight size={11} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {tab === "pipeline" && (
        <Card>
          <div style={{ padding: "12px 16px", textAlign: "left", borderBottom: `1px solid ${T.border}` }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>All team leads</p>
          </div>
          {isMobile ? (
            <div style={{ padding: 12 }}>
              {teamLeads.map(l => (
                <div key={l.id} style={{ background: T.bgSubtle, borderRadius: 10, padding: "12px", marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                      <p style={{ fontSize: 13, fontWeight: 600 }}>{l.name}</p>
                      <p style={{ fontSize: 11, color: T.textMuted }}>{l.config} · {fmtPrice(l.budget)}</p>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 500, color: stageColor[l.stage], flexShrink: 0 }}>{stageLabel[l.stage]}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: T.accent }}>{l.assignee.charAt(0)}</div>
                      <p style={{ fontSize: 12, color: T.textMuted }}>{l.assignee}</p>
                    </div>
                    {l.followUp && <p style={{ fontSize: 11, color: T.textMuted, display: "flex", alignItems: "center", gap: 3 }}><Calendar size={10} />{l.followUp}</p>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: T.bgSubtle, borderBottom: `1px solid ${T.border}` }}>
                {["Lead", "Config", "Budget", "Assigned To", "Stage", "Follow-up"].map(h => (
                  <th key={h} style={{ padding: "9px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {teamLeads.map(l => (
                  <tr key={l.id} style={{ borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 500 }}>{l.name}</td>
                    <td style={{ padding: "12px 16px" }}><Badge variant="outline">{l.config}</Badge></td>
                    <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600 }}>{fmtPrice(l.budget)}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: T.accent }}>{l.assignee.charAt(0)}</div>
                        <p style={{ fontSize: 13 }}>{l.assignee}</p>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ fontSize: 12, fontWeight: 500, color: stageColor[l.stage], background: stageColor[l.stage] + "18", padding: "3px 10px", borderRadius: 20 }}>{stageLabel[l.stage]}</span>
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: T.textMuted }}>
                      {l.followUp ? <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={11} />{l.followUp}</span> : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Card>
      )}

      {/* Layer 3: Full member detail sheet */}
      {sheetMember && <MemberDetailSheet member={sheetMember} isMobile={isMobile} onClose={() => setSheetMember(null)} />}
    </div>
  );
}


function WAModal({ deal, onClose, remindedAt, onRemind }) {
  const [copied, setCopied] = useState(false);
  const [justSent, setJustSent] = useState(false);
  const oMs = deal.milestones.filter(m => m.status === "overdue");
  const amt = oMs.reduce((s, m) => s + m.amount, 0);
  const msg = "Hi " + deal.developerRM + " ji,\n\nHope you're doing well.\n\nFollowing up on commission for *" + deal.project + "* — client *" + deal.client + "*.\n\nMilestone: *" + (oMs[0]?.label || "") + "*\nAmount: *₹" + amt.toLocaleString("en-IN") + "*\nDue: " + (oMs[0]?.date || "") + "\n\nRequest you to please process this at the earliest.\n\nThank you 🙏";

  const handleOpenWA = () => {
    try {
      window.open("https://wa.me/" + deal.developerPhone + "?text=" + encodeURIComponent(msg), "_blank");
    } catch(e) {
      // sandbox may block window.open — message is copied to clipboard as fallback
      navigator.clipboard?.writeText(msg);
    }
    onRemind(deal.id);
    setJustSent(true);
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) +
      " at " + d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Modal title="WhatsApp Reminder" onClose={onClose}>
      {/* Reminder history callout — shows if previously reminded */}
      {remindedAt && !justSent && (
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: T.blueBg, border: `1px solid ${T.blueBorder}`, borderRadius: 9, padding: "10px 12px", marginBottom: 14 }}>
          <Clock size={14} color={T.blue} style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: T.blue }}>Reminder already sent</p>
            <p style={{ fontSize: 11, color: T.blue, opacity: 0.8, marginTop: 2 }}>Last reminded on {formatDate(remindedAt)}</p>
          </div>
        </div>
      )}
      {/* Sent confirmation callout — shows immediately after clicking Open WhatsApp */}
      {justSent && (
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: T.greenBg, border: `1px solid ${T.greenBorder}`, borderRadius: 9, padding: "10px 12px", marginBottom: 14 }}>
          <CheckCheck size={14} color={T.green} style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: T.green }}>Reminder sent</p>
            <p style={{ fontSize: 11, color: T.green, opacity: 0.8, marginTop: 2 }}>Logged today at {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</p>
          </div>
        </div>
      )}
      <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 12 }}>To: {deal.developerRM} · {deal.developerPhone}</p>
      <div style={{ background: T.bgSubtle, border: `1px solid ${T.border}`, borderRadius: 10, padding: "12px 14px", fontSize: 13, lineHeight: 1.8, color: T.text, whiteSpace: "pre-wrap", fontFamily: "monospace", marginBottom: 14 }}>{msg}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <Btn variant="outline" style={{ flex: 1, justifyContent: "center" }} onClick={() => { navigator.clipboard?.writeText(msg); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>{copied ? "Copied ✓" : "Copy"}</Btn>
        <Btn variant="success" style={{ flex: 2, justifyContent: "center" }} onClick={handleOpenWA}>
          {justSent ? "Sent — Open again" : "Open WhatsApp ↗"}
        </Btn>
      </div>
    </Modal>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────
// Global CSS reset injected once
function GlobalStyles() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { height: 100%; width: 100%; text-align: left !important; }
      body { 
        font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif !important;
        font-size: 14px;
        line-height: 1.5;
        color: #111827;
        background: #f9fafb;
        text-align: left !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #root * { text-align: left !important; }
      #root .text-center, #root [style*="text-align: center"] { text-align: left !important; }
      button { font-family: inherit; }
      input, select, textarea { font-family: inherit; }
      p, h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
      table { border-spacing: 0; }
      a { text-decoration: none; color: inherit; }
      img { display: block; max-width: 100%; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
}

export default function App() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [devs, setDevs] = useState(initDevs);
  const [inv, setInv] = useState(initInv);
  const [leads, setLeads] = useState(initLeads);
  const [remindLog, setRemindLog] = useState({}); // dealId -> ISO timestamp
  const logReminder = (id) => setRemindLog(prev => ({ ...prev, [id]: new Date().toISOString() }));
  const titles = { home: "Home", developers: "Developers", inventory: "Inventory", leads: "Leads", commissions: "Commissions", team: "Team" };
  const bottomNav = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "developers", icon: <Building2 size={20} />, label: "Devs" },
    { id: "inventory", icon: <LayoutGrid size={20} />, label: "Units" },
    { id: "leads", icon: <CircleDot size={20} />, label: "Leads" },
    { id: "commissions", icon: <IndianRupee size={20} />, label: "Money", badge: "3" },
    { id: "team", icon: <Users2 size={20} />, label: "Team" },
  ];
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "-apple-system,'Helvetica Neue',sans-serif", background: T.bgSubtle, color: T.text, overflow: "hidden" }}>
      <GlobalStyles />
      <Sidebar active={active} setActive={setActive} isMobile={isMobile} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0, flex: "1 1 0%" }}>
        <div style={{ background: T.bg, borderBottom: `1px solid ${T.border}`, padding: isMobile ? "12px 16px" : "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {isMobile && (
              <button onClick={() => setDrawerOpen(true)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: T.text, padding: 0, display: "flex" }}><Menu size={20} /></button>
            )}
            <h1 style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>{titles[active]}</h1>
          </div>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: T.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: T.accent }}>C</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", paddingBottom: isMobile ? 72 : 0, minHeight: 0 }}>
          {active === "home" && <HomePage devs={devs} inv={inv} leads={leads} setActive={setActive} isMobile={isMobile} remindLog={remindLog} onRemind={logReminder} />}
          {active === "developers" && <DevelopersPage devs={devs} setDevs={setDevs} inv={inv} isMobile={isMobile} />}
          {active === "inventory" && <InventoryPage inv={inv} setInv={setInv} devs={devs} isMobile={isMobile} />}
          {active === "leads" && <LeadsPage leads={leads} setLeads={setLeads} inv={inv} isMobile={isMobile} />}
          {active === "commissions" && <CommissionsPage isMobile={isMobile} remindLog={remindLog} onRemind={logReminder} />}
          {active === "team" && <TeamPage isMobile={isMobile} />}
        </div>
      </div>
      {isMobile && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: T.bg, borderTop: `1px solid ${T.border}`, display: "flex", zIndex: 50, paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
          {bottomNav.map(item => (
            <button key={item.id} onClick={() => setActive(item.id)}
              style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "9px 4px 7px", background: "none", border: "none", cursor: "pointer", color: active === item.id ? T.text : T.textSubtle, position: "relative" }}>
              {item.badge && <span style={{ position: "absolute", top: 5, right: "calc(50% - 14px)", background: T.red, color: "white", fontSize: 9, fontWeight: 700, borderRadius: 10, padding: "1px 5px" }}>{item.badge}</span>}
              {active === item.id && <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 24, height: 2, background: T.text, borderRadius: 1 }} />}
              <span style={{ display: "inline-flex", marginBottom: 2 }}>{item.icon}</span>
              <span style={{ fontSize: 10, fontWeight: active === item.id ? 600 : 400 }}>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
