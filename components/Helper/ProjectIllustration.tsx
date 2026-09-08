"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProjectIllustrationProps {
  type: string;
  size?: "small" | "large";
}

/* ─── Shared glow filter ─────────────────────────────────────── */
const GlowFilter = ({ id, color = "#6D5DFB" }: { id: string; color?: string }) => (
  <defs>
    <filter id={id} x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={color} floodOpacity="0.8" />
    </filter>
    <filter id={`${id}-strong`} x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={color} floodOpacity="0.9" />
    </filter>
  </defs>
);

/* ─── SVG Grid Background ────────────────────────────────────── */
const GridBackground = ({ id }: { id: string }) => (
  <>
    <defs>
      <pattern id={`grid-${id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(109,93,251,0.12)" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
  </>
);

/* ─── GPS / Map illustration ─────────────────────────────────── */
const GPSIllustration = ({ isLarge }: { isLarge: boolean }) => {
  const w = isLarge ? 400 : 200;
  const h = isLarge ? 240 : 200;
  const cx = w / 2;
  const cy = h / 2;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <GlowFilter id="gps-glow" color="#6D5DFB" />
      <GridBackground id="gps" />

      {/* Route path */}
      <motion.path
        d={`M ${cx - 90} ${cy + 30} C ${cx - 60} ${cy + 10}, ${cx - 20} ${cy + 50}, ${cx} ${cy}`}
        fill="none" stroke="#6D5DFB" strokeWidth="1.5" strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        filter="url(#gps-glow)"
      />
      <motion.path
        d={`M ${cx} ${cy} C ${cx + 30} ${cy - 40}, ${cx + 70} ${cy - 20}, ${cx + 90} ${cy - 30}`}
        fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="160"
        initial={{ strokeDashoffset: 160 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, delay: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        filter="url(#gps-glow)"
      />

      {/* Origin dot */}
      <motion.circle cx={cx - 90} cy={cy + 30} r="5" fill="#6D5DFB"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        filter="url(#gps-glow)"
      />
      {/* Destination dot */}
      <motion.circle cx={cx + 90} cy={cy - 30} r="5" fill="#22D3EE"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        filter="url(#gps-glow)"
      />

      {/* Travelling marker */}
      <motion.circle r="4" fill="#fff"
        filter="url(#gps-glow-strong)"
        animate={{
          cx: [cx - 90, cx - 30, cx, cx + 50, cx + 90],
          cy: [cy + 30, cy + 15, cy, cy - 20, cy - 30],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
      />

      {/* Map pin */}
      <motion.g filter="url(#gps-glow-strong)"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d={`M ${cx} ${cy - 30} C ${cx - 10} ${cy - 30}, ${cx - 10} ${cy - 50}, ${cx} ${cy - 50} C ${cx + 10} ${cy - 50}, ${cx + 10} ${cy - 30}, ${cx} ${cy - 30} Z`}
          fill="none" stroke="#6D5DFB" strokeWidth="1.5" />
        <circle cx={cx} cy={cy - 42} r="3" fill="#6D5DFB" />
      </motion.g>

      {/* Floating accent dots */}
      {[{ x: 20, y: 20, d: 2 }, { x: w - 25, y: h - 25, d: 2.5 }, { x: 30, y: h - 30, d: 1.5 }].map((dot, i) => (
        <motion.circle key={i} cx={dot.x} cy={dot.y} r={dot.d} fill="#6D5DFB"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
};

/* ─── Barcode Scanner illustration ───────────────────────────── */
const BarcodeIllustration = ({ isLarge }: { isLarge: boolean }) => {
  const w = isLarge ? 400 : 200;
  const h = isLarge ? 240 : 200;
  const cx = w / 2;
  const cy = h / 2;
  const barW = isLarge ? 120 : 80;
  const barH = isLarge ? 80 : 60;
  const barX = cx - barW / 2;
  const barY = cy - barH / 2;
  const bars = [3, 5, 2, 7, 3, 4, 6, 2, 5, 3, 4, 6, 2, 5];
  const totalBarW = bars.reduce((a, b) => a + b + 2, 0);
  const scale = barW / totalBarW;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <GlowFilter id="barcode-glow" color="#22D3EE" />
      <GridBackground id="barcode" />

      {/* Barcode bars */}
      {bars.reduce<{ els: React.ReactNode[]; x: number }>((acc, barWidth, i) => {
        const bx = barX + acc.x * scale;
        const bh = barH * (0.6 + ((i * 7 + 3) % 10) / 10 * 0.4);
        acc.els.push(
          <motion.rect key={i}
            x={bx} y={barY + (barH - bh) / 2}
            width={barWidth * scale} height={bh}
            fill="rgba(34,211,238,0.7)"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.7 + (i % 3 === 0 ? 0.3 : 0) }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            style={{ transformOrigin: `${bx + barWidth * scale / 2}px ${cy}px` }}
          />
        );
        acc.x += barWidth + 2;
        return acc;
      }, { els: [], x: 0 }).els}

      {/* Scanner line */}
      <motion.line
        x1={barX - 10} x2={barX + barW + 10}
        stroke="#22D3EE" strokeWidth="2"
        filter="url(#barcode-glow)"
        animate={{ y1: [barY - 5, barY + barH + 5, barY - 5], y2: [barY - 5, barY + barH + 5, barY - 5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner markers */}
      {[[barX - 8, barY - 8, 1, 1], [barX + barW + 8, barY - 8, -1, 1], [barX - 8, barY + barH + 8, 1, -1], [barX + barW + 8, barY + barH + 8, -1, -1]].map(([x, y, sx, sy], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x + sx * 10} y2={y} stroke="#22D3EE" strokeWidth="1.5" />
          <line x1={x} y1={y} x2={x} y2={y + sy * 10} stroke="#22D3EE" strokeWidth="1.5" />
        </g>
      ))}

      {/* Checkmark on complete */}
      <motion.path d={`M ${cx - 10} ${cy + barH / 2 + 20} L ${cx - 4} ${cy + barH / 2 + 28} L ${cx + 14} ${cy + barH / 2 + 12}`}
        fill="none" stroke="#22D3EE" strokeWidth="2.5"
        filter="url(#barcode-glow)"
        strokeDasharray="40" initial={{ strokeDashoffset: 40 }}
        animate={{ strokeDashoffset: [40, 0, 0, 40] }}
        transition={{ duration: 3, times: [0, 0.4, 0.8, 1], repeat: Infinity, repeatDelay: 0.5 }}
      />
    </svg>
  );
};

/* ─── Recommendation Nodes illustration ──────────────────────── */
const RecommendationIllustration = ({ isLarge }: { isLarge: boolean }) => {
  const w = isLarge ? 400 : 200;
  const h = isLarge ? 240 : 200;
  const cx = w / 2;
  const cy = h / 2;

  const items = [
    { label: "Movie", match: 92, y: cy - (isLarge ? 50 : 35), color: "#3E7BFA" },
    { label: "Show", match: 78, y: cy, color: "#3E7BFA" },
    { label: "Book", match: 61, y: cy + (isLarge ? 50 : 35), color: "#3E7BFA" },
  ];
  const nodeX = isLarge ? 60 : 30;
  const centerNodeHalfW = isLarge ? 30 : 22;
  const barStartX = cx + centerNodeHalfW + (isLarge ? 30 : 18);
  const barMaxW = isLarge ? 120 : 60;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <GlowFilter id="rec-glow" color="#3E7BFA" />
      <GridBackground id="rec" />

      {/* Left input nodes */}
      {items.map((item, i) => (
        <motion.rect
          key={`input-${i}`}
          x={nodeX - 10}
          y={cy - (isLarge ? 55 : 35) + i * (isLarge ? 20 : 11)}
          width={isLarge ? 20 : 16}
          height={isLarge ? 10 : 8}
          rx="2"
          fill="none"
          stroke="#3E7BFA"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
        />
      ))}

      {/* Center match node */}
      <motion.rect
        x={cx - centerNodeHalfW} y={cy - (isLarge ? 16 : 12)}
        width={centerNodeHalfW * 2} height={isLarge ? 32 : 24}
        rx="4" fill="none" stroke="#3E7BFA" strokeWidth="1.5"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        filter="url(#rec-glow)"
      />
      <text x={cx} y={cy + (isLarge ? 5 : 4)} textAnchor="middle" fill="#3E7BFA"
        fontSize={isLarge ? 9 : 7} fontWeight="600">Match</text>

      {/* Lines left side */}
      {items.map((item, i) => (
        <motion.line key={`line-l-${i}`}
          x1={nodeX + (isLarge ? 10 : 8)} 
          y1={cy - (isLarge ? 50 : 30) + i * (isLarge ? 20 : 11)}
          x2={cx - centerNodeHalfW} 
          y2={cy}
          stroke="#3E7BFA" strokeWidth="1" strokeDasharray="60"
          initial={{ strokeDashoffset: 60 }} animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: "easeOut" }}
        />
      ))}

      {/* Bars right side */}
      {items.map((item, i) => (
        <g key={i}>
          <motion.text
            x={barStartX}
            y={item.y + (isLarge ? 4 : 3)}
            fill="rgba(255,255,255,0.6)"
            fontSize={isLarge ? 8 : 6}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: "easeOut" }}
          >
            {item.label}
          </motion.text>
          <motion.line
            x1={cx + centerNodeHalfW} y1={item.y} x2={cx + centerNodeHalfW} y2={item.y}
            stroke={item.color} strokeWidth="1" opacity="0.3"
          />
          <motion.rect
            x={barStartX} y={item.y + (isLarge ? 8 : 5)}
            height={isLarge ? 6 : 4} rx="2"
            fill={item.color}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: barMaxW * item.match / 100, opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.2, ease: "easeOut" }}
            filter="url(#rec-glow)"
          />
          <motion.text
            x={barStartX + barMaxW + 4}
            y={item.y + (isLarge ? 12 : 9)}
            fill="rgba(255,255,255,0.6)"
            fontSize={isLarge ? 7 : 5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 + i * 0.2, ease: "easeOut" }}
          >
            {item.match}%
          </motion.text>
          <motion.line key={`line-r-${i}`}
            x1={cx + centerNodeHalfW} y1={cy}
            x2={barStartX} y2={item.y}
            stroke={item.color} strokeWidth="1" strokeDasharray="60"
            initial={{ strokeDashoffset: 60 }} animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.15, ease: "easeOut" }}
          />
          <motion.circle cx={barStartX - 3} cy={item.y} r="2.5" fill={item.color}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: 1.0 + i * 0.2, repeat: Infinity }}
            filter="url(#rec-glow)"
          />
        </g>
      ))}
    </svg>
  );
};

/* ─── Pipeline illustration (Catalog → Cart → Order) ─────────── */
const PipelineIllustration = ({ isLarge }: { isLarge: boolean }) => {
  const w = isLarge ? 400 : 200;
  const h = isLarge ? 240 : 200;
  const cy = h / 2;
  const nodes = ["Catalog", "Cart", "Order"];
  const spacing = isLarge ? 120 : 65;
  const startX = isLarge ? 60 : 35;
  const r = isLarge ? 24 : 16;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <GlowFilter id="pipeline-glow" color="#22D3EE" />
      <GridBackground id="pipeline" />

      {nodes.map((label, i) => {
        const x = startX + i * spacing;
        return (
          <React.Fragment key={i}>
            {/* Connecting line */}
            {i < nodes.length - 1 && (
              <motion.line
                x1={x + r} y1={cy} x2={x + spacing - r} y2={cy}
                stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="80"
                initial={{ strokeDashoffset: 80 }} animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.8, delay: i * 0.4, ease: "easeOut" }}
              />
            )}
            {/* Node ring outer */}
            <motion.circle cx={x} cy={cy} r={r}
              fill="none" stroke="#6D5DFB" strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              filter={i === 1 ? "url(#pipeline-glow)" : undefined}
            />
            {/* Node inner fill for active (middle) */}
            {i === 1 && (
              <motion.circle cx={x} cy={cy} r={r - 6}
                fill="rgba(34,211,238,0.2)"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                filter="url(#pipeline-glow)"
              />
            )}
            {/* Label */}
            <text x={x} y={cy + (isLarge ? 4 : 3)} textAnchor="middle"
              fill={i === 1 ? "#22D3EE" : "rgba(255,255,255,0.6)"}
              fontSize={isLarge ? 9 : 6} fontWeight="600">{label}</text>

            {/* Travelling dot */}
            {i < nodes.length - 1 && (
              <motion.circle r="3" fill="#fff"
                filter="url(#pipeline-glow)"
                animate={{
                  cx: [x + r, x + spacing - r],
                  cy: [cy, cy],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1, delay: 0.5 + i * 0.8, repeat: Infinity, repeatDelay: 2 }}
              />
            )}
          </React.Fragment>
        );
      })}

      {/* Floating accent dots */}
      <motion.circle cx={isLarge ? 20 : 10} cy={20} r="2.5" fill="#6D5DFB"
        animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx={w - 20} cy={h - 20} r="2" fill="#22D3EE"
        animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 3.5, repeat: Infinity }} />
    </svg>
  );
};

/* ─── Dashboard Bars illustration ────────────────────────────── */
const DashboardIllustration = ({ isLarge }: { isLarge: boolean }) => {
  const w = isLarge ? 400 : 200;
  const h = isLarge ? 240 : 200;
  const cy = h / 2;
  const bars = [
    { label: "Tasks", width: 0.85, color: "#22D3EE" },
    { label: "Modules", width: 0.6, color: "#6D5DFB" },
    { label: "APIs", width: 0.75, color: "#22D3EE" },
    { label: "CI/CD", width: 0.5, color: "#6D5DFB" },
  ];
  const maxBarW = isLarge ? 200 : 100;
  const barH = isLarge ? 10 : 7;
  const gap = isLarge ? 22 : 16;
  const startY = cy - (bars.length * gap) / 2;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <GlowFilter id="dash-glow" color="#22D3EE" />
      <GridBackground id="dash" />

      {bars.map((bar, i) => {
        const y = startY + i * gap;
        const labelX = isLarge ? 80 : 45;
        const barStartX = isLarge ? 100 : 55;
        return (
          <g key={i}>
            <text x={labelX} y={y + barH - (isLarge ? 2 : 1)} fill="rgba(255,255,255,0.45)"
              fontSize={isLarge ? 8 : 5.5} textAnchor="end">{bar.label}</text>
            {/* bg track */}
            <rect x={barStartX} y={y} width={maxBarW} height={barH} rx={barH / 2}
              fill="rgba(255,255,255,0.05)" />
            {/* animated fill */}
            <motion.rect x={barStartX} y={y} height={barH} rx={barH / 2}
              fill={bar.color}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: maxBarW * bar.width, opacity: 0.8 }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              filter="url(#dash-glow)"
            />
            {/* pulsing end cap */}
            <motion.circle
              cy={y + barH / 2}
              r={barH / 2 + 1}
              fill={bar.color}
              animate={{ cx: [barStartX, barStartX + maxBarW * bar.width] }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              filter="url(#dash-glow)"
            />
          </g>
        );
      })}

      {/* Accent dots */}
      <motion.circle cx={isLarge ? 25 : 15} cy={isLarge ? 25 : 15} r="2" fill="#6D5DFB"
        animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx={w - 20} cy={h - 20} r="2.5" fill="#22D3EE"
        animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
    </svg>
  );
};

/* ─── Architecture Nodes (like the GRC / multi-service diagram) ─ */
const ArchitectureIllustration = ({ isLarge }: { isLarge: boolean }) => {
  const w = isLarge ? 400 : 200;
  const h = isLarge ? 240 : 200;
  const cy = h / 2;
  const r = isLarge ? 22 : 14;

  // Horizontal spine nodes
  const spineNodes = [
    { label: "Client", x: isLarge ? 50 : 28, active: true },
    { label: "API", x: isLarge ? 140 : 75 },
    { label: "Auth", x: isLarge ? 230 : 118 },
    { label: "Service", x: isLarge ? 320 : 162 },
  ];
  // Branch nodes off "Service"
  const branchNodes = [
    { label: "Cache", x: isLarge ? 390 : 192, y: cy - (isLarge ? 55 : 38) },
    { label: "DB", x: isLarge ? 390 : 192, y: cy + (isLarge ? 55 : 38) },
  ];
  const serviceX = spineNodes[3].x;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <GlowFilter id="arch-glow" color="#6D5DFB" />
      <GridBackground id="arch" />

      {/* Spine lines */}
      {spineNodes.map((node, i) => i < spineNodes.length - 1 && (
        <motion.line key={`l${i}`}
          x1={node.x + r} y1={cy} x2={spineNodes[i + 1].x - r} y2={cy}
          stroke="#6D5DFB" strokeWidth="1.5" strokeDasharray="100"
          initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.7, delay: i * 0.25, ease: "easeOut" }}
        />
      ))}

      {/* Branch lines from Service */}
      {branchNodes.map((branch, i) => (
        <motion.line key={`bl${i}`}
          x1={serviceX + r} y1={cy} x2={branch.x - r} y2={branch.y}
          stroke="rgba(109,93,251,0.5)" strokeWidth="1" strokeDasharray="80"
          initial={{ strokeDashoffset: 80 }} animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, delay: 1 + i * 0.2, ease: "easeOut" }}
        />
      ))}

      {/* Spine nodes */}
      {spineNodes.map((node, i) => (
        <g key={`n${i}`}>
          <motion.circle cx={node.x} cy={cy} r={r}
            fill={node.active ? "rgba(109,93,251,0.25)" : "rgba(255,255,255,0.04)"}
            stroke={node.active ? "#6D5DFB" : "rgba(109,93,251,0.4)"}
            strokeWidth={node.active ? 2 : 1.5}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            filter={node.active ? "url(#arch-glow)" : undefined}
          />
          <text x={node.x} y={cy + (isLarge ? 4 : 3)} textAnchor="middle"
            fill={node.active ? "#fff" : "rgba(255,255,255,0.55)"}
            fontSize={isLarge ? 8 : 5.5} fontWeight="600">{node.label}</text>
          <text x={node.x} y={cy + r + (isLarge ? 12 : 9)} textAnchor="middle"
            fill="rgba(255,255,255,0.3)" fontSize={isLarge ? 7 : 4.5} fontWeight="400"
          >{i === 0 ? "Web/Mobile" : i === 1 ? "Gateway" : i === 2 ? "JWT·RBAC" : "Clean Arch"}</text>
        </g>
      ))}

      {/* Branch nodes */}
      {branchNodes.map((branch, i) => (
        <g key={`bn${i}`}>
          <motion.circle cx={branch.x} cy={branch.y} r={r - (isLarge ? 4 : 2)}
            fill="rgba(109,93,251,0.15)" stroke="rgba(109,93,251,0.5)" strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.2 }}
          />
          <text x={branch.x} y={branch.y + (isLarge ? 4 : 2)} textAnchor="middle"
            fill="rgba(255,255,255,0.5)" fontSize={isLarge ? 7 : 5} fontWeight="600">
            {branch.label}
          </text>
        </g>
      ))}

      {/* Travelling dot on spine */}
      <motion.circle r="3.5" fill="#6D5DFB"
        filter="url(#arch-glow)"
        animate={{
          cx: spineNodes.map(n => n.x),
          cy: spineNodes.map(() => cy),
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />
    </svg>
  );
};

/* ─── Browser / Portfolio illustration ──────────────────────── */
const BrowserIllustration = ({ isLarge }: { isLarge: boolean }) => {
  const w = isLarge ? 400 : 200;
  const h = isLarge ? 240 : 200;
  const padX = isLarge ? 30 : 20;
  const padY = isLarge ? 25 : 20;
  const bw = w - 2 * padX;
  const bh = h - 2 * padY;
  const headerH = isLarge ? 24 : 16;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <GlowFilter id="browser-glow" color="#22D3EE" />
      <GridBackground id="browser-bg" />

      {/* Browser frame */}
      <motion.rect x={padX} y={padY} width={bw} height={bh} rx="6"
        fill="none" stroke="rgba(109,93,251,0.6)" strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      {/* Header bar */}
      <motion.rect x={padX} y={padY} width={bw} height={headerH} rx="6"
        fill="rgba(109,93,251,0.15)"
        initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: bw }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      />

      {/* Traffic lights */}
      {["#22D3EE", "rgba(109,93,251,0.5)", "rgba(255,255,255,0.2)"].map((color, i) => (
        <motion.circle key={i}
          cx={padX + 10 + i * (isLarge ? 14 : 10)} cy={padY + headerH / 2} r={isLarge ? 4 : 3}
          fill={color}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: "easeOut" }}
          filter={i === 0 ? "url(#browser-glow)" : undefined}
        />
      ))}

      {/* Content blocks */}
      {[
        { x: padX + 10, y: padY + headerH + (isLarge ? 12 : 8), w: bw * 0.35, h: isLarge ? 16 : 10, color: "rgba(34,211,238,0.25)", isTyping: true },
        { x: padX + 10, y: padY + headerH + (isLarge ? 38 : 24), w: bw * 0.55, h: isLarge ? 8 : 5, color: "rgba(109,93,251,0.2)" },
        { x: padX + 10, y: padY + headerH + (isLarge ? 54 : 34), w: bw * 0.45, h: isLarge ? 8 : 5, color: "rgba(109,93,251,0.2)" },
        { x: padX + bw * 0.5, y: padY + headerH + (isLarge ? 14 : 9), w: bw * 0.4, h: bh * 0.45, color: "rgba(34,211,238,0.1)", isHero: true },
      ].map((block, i) => (
        <motion.rect key={i}
          x={block.x} y={block.y} width={block.w} height={block.h} rx="3"
          fill={block.color}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={
            block.isHero 
              ? { opacity: [1, 0.6, 1], scaleY: 1 }
              : block.isTyping
                ? { opacity: [1, 0.7, 1], scaleY: 1 }
                : { opacity: 1, scaleY: 1 }
          }
          style={{ transformOrigin: `${block.x}px ${block.y}px` }}
          transition={{
            duration: 0.5,
            delay: 0.6 + i * 0.12,
            ease: "easeOut",
            ...(block.isHero && {
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }),
            ...(block.isTyping && {
              opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            })
          }}
        />
      ))}

      {/* Loading bar in content area */}
      <motion.rect
        x={padX + 10}
        y={padY + headerH + bh - (isLarge ? 20 : 15)}
        width={bw - 20}
        height={isLarge ? 4 : 2}
        rx="2"
        fill="rgba(34,211,238,0.3)"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: bw - 20 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
      />
      <motion.rect
        x={padX + 10}
        y={padY + headerH + bh - (isLarge ? 20 : 15)}
        width={0}
        height={isLarge ? 4 : 2}
        rx="2"
        fill="#22D3EE"
        animate={{ width: [(bw - 20) * 0.3, (bw - 20) * 0.8, (bw - 20) * 0.3] }}
        transition={{ duration: 2, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating accent dots */}
      <motion.circle cx={padX + 5} cy={h - padY - 10} r="2.5" fill="#6D5DFB"
        animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx={w - padX - 10} cy={padY + headerH + 5} r="2" fill="#22D3EE"
        animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />

      {/* Typing cursor effect in first content block */}
      <motion.rect
        x={padX + 10 + bw * 0.35 - 2}
        y={padY + headerH + (isLarge ? 14 : 10)}
        width={2}
        height={isLarge ? 12 : 6}
        fill="#22D3EE"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 1.2 }}
      />

      {/* Traveling cursor dot - simulates user interaction */}
      <motion.circle
        r={isLarge ? 3 : 2}
        fill="#fff"
        filter="url(#browser-glow)"
        animate={{
          cx: [
            padX + 10 + bw * 0.2,           // Start near first block
            padX + 10 + bw * 0.5,           // Move to middle
            padX + bw * 0.7,                 // Move to hero block
            padX + bw * 0.85,                // End near hero block right
            padX + 10 + bw * 0.2            // Loop back
          ],
          cy: [
            padY + headerH + (isLarge ? 20 : 14),
            padY + headerH + (isLarge ? 45 : 28),
            padY + headerH + (isLarge ? 30 : 18),
            padY + headerH + (isLarge ? 40 : 24),
            padY + headerH + (isLarge ? 20 : 14)
          ],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      />
    </svg>
  );
};

/* ─── Main component ─────────────────────────────────────────── */
const ProjectIllustration: React.FC<ProjectIllustrationProps> = ({ type, size = "small" }) => {
  const isLarge = size === "large";

  const renderContent = () => {
    switch (type) {
      case "gps":
      case "route":
        return <GPSIllustration isLarge={isLarge} />;
      case "barcode":
      case "document":
        return <BarcodeIllustration isLarge={isLarge} />;
      case "recommendation":
      case "tags":
        return <RecommendationIllustration isLarge={isLarge} />;
      case "pipeline":
      case "connected":
      case "taskflow-nodes":
        return <PipelineIllustration isLarge={isLarge} />;
      case "dashboard":
      case "checklist":
      case "calendar":
        return <DashboardIllustration isLarge={isLarge} />;
      case "architecture":
      case "delivery-nodes":
        return <ArchitectureIllustration isLarge={isLarge} />;

      case "browser":
      default:
        return <BrowserIllustration isLarge={isLarge} />;
    }
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(13,15,24,0.95) 0%, rgba(20,16,40,0.9) 100%)",
        border: "1px solid rgba(109,93,251,0.2)",
        aspectRatio: isLarge ? "5/3" : "4/3",
      }}
    >
      {renderContent()}
    </div>
  );
};

export default ProjectIllustration;
