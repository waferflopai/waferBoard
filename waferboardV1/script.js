(function() {
    'use strict';

    // ─── EMBEDDED STYLES FOR EXPORT ───
    // (This is the exact same CSS from style.css, used when exporting HTML)
    const CSS_STYLES = `/* ── RESET & BASE ── dark shale / slate green theme */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    font-weight: 400;
    background: #0f141a;
    color: #dce2ea;
}
.dashboard {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 12px 16px 16px 16px;
    overflow: hidden;
    max-width: 100vw;
}
::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}
.dashboard-header {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    border-bottom: 1px solid #2a333d;
    margin-bottom: 10px;
    flex-wrap: wrap;
    gap: 6px;
    background: linear-gradient(90deg, #0f141a 0%, #1a222a 100%);
    border-radius: 4px;
}
.dashboard-header .brand {
    display: flex;
    align-items: baseline;
    gap: 6px;
}
.dashboard-header .brand h1 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #e5e9f0;
}
.dashboard-header .brand h1 .accent {
    color: #6b8c7c;
    font-weight: 200;
}
.dashboard-header .brand .tagline {
    font-size: 10px;
    font-weight: 300;
    color: #8a9aa8;
    letter-spacing: 0.02em;
    margin-left: 4px;
}
.header-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
}
.header-actions .badge {
    font-size: 8px;
    font-weight: 500;
    color: #8a9aa8;
    background: #1e262e;
    padding: 2px 8px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid #2a333d;
    white-space: nowrap;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.btn {
    font-family: 'Raleway', sans-serif;
    font-size: 10px;
    font-weight: 500;
    padding: 4px 12px;
    border: 1px solid #2a333d;
    background: #1e262e;
    color: #dce2ea;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s;
    letter-spacing: 0.02em;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0;
}
.btn:hover {
    background: #2a333d;
    border-color: #3a4755;
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}
.btn-primary {
    background: #3a5a4a;
    border-color: #4a6a5a;
    color: #fff;
}
.btn-primary:hover {
    background: #4a7a5a;
    border-color: #5a8a6a;
}
.btn-sm {
    font-size: 9px;
    padding: 3px 10px;
}
.btn-icon {
    background: none;
    border: none;
    padding: 2px 4px;
    font-size: 12px;
    cursor: pointer;
    color: #8a9aa8;
    transition: color 0.2s, transform 0.15s;
    box-shadow: none;
    line-height: 1;
}
.btn-icon:hover {
    color: #dce2ea;
    transform: scale(1.1);
    background: none;
}
.btn-icon.edit-active {
    color: #6b8c7c;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    background: #1e262e;
    border: 1px solid #2a333d;
    min-width: 130px;
    z-index: 10;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    padding: 4px 0;
}
.dropdown-content a {
    color: #dce2ea;
    padding: 4px 14px;
    text-decoration: none;
    display: block;
    font-size: 10px;
    font-weight: 400;
    cursor: pointer;
    transition: background 0.15s;
}
.dropdown-content a:hover {
    background: #2a333d;
}
.dropdown:hover .dropdown-content {
    display: block;
}
.grid {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 8px;
    min-height: 0;
}
.grid .full {
    grid-column: 1 / -1;
}
.section {
    background: #1e262e;
    border: 1px solid #2a333d;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, box-shadow 0.3s ease, border-color 0.2s;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: fadeSlideUp 0.4s ease forwards;
    opacity: 0;
    transform: translateY(8px);
    border-radius: 4px;
}
.section:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
    border-color: #3a4755;
}
@keyframes fadeSlideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px 4px 12px;
    border-bottom: 1px solid #2a333d;
    flex-shrink: 0;
}
.section-header .title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: #e5e9f0;
    display: flex;
    align-items: center;
    gap: 4px;
}
.section-header .title .type-badge {
    font-size: 7px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #8a9aa8;
    background: #151a20;
    padding: 1px 6px;
    border: 1px solid #2a333d;
}
.section-header .actions {
    display: flex;
    align-items: center;
    gap: 2px;
}
.section-body {
    flex: 1;
    padding: 6px 12px 8px 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.markdown-content {
    font-size: 11px;
    line-height: 1.5;
    color: #dce2ea;
    overflow: hidden;
}
.markdown-content h1 {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 4px 0;
    letter-spacing: -0.01em;
    color: #e5e9f0;
}
.markdown-content h2 {
    font-size: 12px;
    font-weight: 600;
    margin: 2px 0 4px 0;
    letter-spacing: -0.01em;
    color: #e5e9f0;
}
.markdown-content p {
    margin: 0 0 4px 0;
}
.markdown-content ul,
.markdown-content ol {
    margin: 2px 0 4px 14px;
    padding: 0;
}
.markdown-content li {
    margin-bottom: 1px;
}
.markdown-content strong {
    font-weight: 600;
    color: #e5e9f0;
}
.markdown-content em {
    font-style: italic;
}
.markdown-content code {
    font-family: 'SF Mono', 'Menlo', monospace;
    font-size: 10px;
    background: #151a20;
    padding: 0 4px;
    border: 1px solid #2a333d;
    color: #b0c0cc;
}
.markdown-content pre {
    background: #151a20;
    border: 1px solid #2a333d;
    padding: 4px 8px;
    overflow-x: auto;
    font-size: 10px;
    margin: 2px 0 4px;
}
.markdown-content pre code {
    background: none;
    border: none;
    padding: 0;
    font-size: 10px;
}
.markdown-content blockquote {
    border-left: 2px solid #3a4755;
    padding-left: 8px;
    margin: 2px 0 4px;
    color: #b0c0cc;
}
.markdown-content hr {
    border: none;
    border-top: 1px solid #2a333d;
    margin: 6px 0;
}
.stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 6px;
    margin: 2px 0 4px;
}
.stat-card {
    background: #151a20;
    border: 1px solid #2a333d;
    padding: 4px 8px;
    transition: background 0.2s, border-color 0.2s, transform 0.15s;
    cursor: default;
}
.stat-card:hover {
    background: #1e262e;
    border-color: #3a5a4a;
    transform: translateY(-1px);
}
.stat-card .stat-label {
    font-size: 8px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #8a9aa8;
    display: block;
    margin-bottom: 0px;
}
.stat-card .stat-value {
    font-size: 14px;
    font-weight: 600;
    color: #e5e9f0;
    display: block;
    line-height: 1.2;
}
.stat-card .stat-change {
    font-size: 8px;
    font-weight: 500;
    margin-top: 0px;
    display: inline-block;
}
.stat-change.up {
    color: #6b8c7c;
}
.stat-change.down {
    color: #c06a6a;
}
.channel-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 2px 0 2px;
}
.channel-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 0;
    border-bottom: 1px solid #2a333d;
}
.channel-item:last-child {
    border-bottom: none;
}
.channel-name {
    font-weight: 500;
    color: #dce2ea;
    min-width: 50px;
    font-size: 10px;
}
.channel-pct {
    font-weight: 600;
    color: #b0c0cc;
    font-size: 10px;
    margin-left: auto;
}
.channel-bar {
    height: 3px;
    background: #4a6a5a;
    transition: background 0.2s;
}
.metric-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 12px;
    margin: 2px 0 2px;
}
.metric-item {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 2px 0;
    border-bottom: 1px dashed #2a333d;
}
.metric-item .metric-label {
    font-weight: 400;
    color: #8a9aa8;
    font-size: 10px;
}
.metric-item .metric-value {
    font-weight: 600;
    font-size: 12px;
    color: #e5e9f0;
}
.action-list {
    list-style: none;
    padding: 0;
    margin: 2px 0 2px;
}
.action-list li {
    padding: 2px 0 2px 16px;
    position: relative;
    border-bottom: 1px solid #2a333d;
    font-size: 10px;
}
.action-list li:last-child {
    border-bottom: none;
}
.action-list li::before {
    content: "◈";
    position: absolute;
    left: 0;
    color: #4a7c6f;
    font-weight: 300;
    font-size: 10px;
}
.action-list li .priority {
    font-size: 7px;
    font-weight: 600;
    text-transform: uppercase;
    background: #151a20;
    padding: 0 4px;
    margin-left: 4px;
    letter-spacing: 0.04em;
    border: 1px solid #2a333d;
}
.priority.high {
    color: #c06a6a;
    border-color: #6a3a3a;
}
.priority.medium {
    color: #c0a86a;
    border-color: #6a5a3a;
}
.priority.low {
    color: #6b8c7c;
    border-color: #3a5a4a;
}
.tag {
    display: inline-block;
    font-size: 8px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 0px 6px;
    border: 1px solid #2a333d;
    color: #b0c0cc;
    background: #151a20;
    margin-right: 2px;
    transition: background 0.2s, border-color 0.2s;
}
.tag.primary {
    background: #1a2a2a;
    border-color: #3a5a4a;
    color: #8baa9a;
}
.tag.success {
    background: #1a2a22;
    border-color: #3a6a5a;
    color: #6b8c7c;
}
.tag.warning {
    background: #2a2a1a;
    border-color: #6a5a3a;
    color: #c0a86a;
}
.tag.danger {
    background: #2a1a1a;
    border-color: #6a3a3a;
    color: #c06a6a;
}
.chart-layout {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    min-height: 0;
    width: 100%;
}
.chart-layout .chart-text {
    flex: 1 1 55%;
    min-width: 0;
    overflow: hidden;
}
.chart-layout .chart-text .markdown-content {
    font-size: 9px;
    line-height: 1.3;
}
.chart-layout .chart-text .markdown-content h2 {
    font-size: 10px;
    margin-top: 0;
    margin-bottom: 2px;
}
.chart-layout .chart-text .markdown-content p {
    margin-bottom: 2px;
}
.chart-layout .chart-wrap {
    flex: 1 1 45%;
    min-width: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.chart-layout .chart-wrap canvas {
    max-width: 100%;
    max-height: 100%;
}
.section[data-section-id*="users"] .chart-layout .chart-text {
    flex: 1 1 34%;
}
.section[data-section-id*="users"] .chart-layout .chart-wrap {
    flex: 1 1 66%;
}
.editor-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 100%;
}
.editor-wrap textarea {
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    font-size: 10px;
    line-height: 1.5;
    width: 100%;
    flex: 1;
    padding: 4px 8px;
    border: 1px solid #2a333d;
    background: #151a20;
    color: #dce2ea;
    resize: none;
    transition: border-color 0.2s, background 0.2s;
    outline: none;
    min-height: 0;
}
.editor-wrap textarea:focus {
    border-color: #4a7c6f;
    background: #1a222a;
}
.editor-actions {
    display: flex;
    gap: 4px;
    justify-content: flex-end;
    flex-shrink: 0;
}
.empty-markdown {
    color: #5a6a7a;
    font-style: italic;
    font-size: 10px;
    padding: 2px 0;
}
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 1000;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.25s ease;
}
.modal-overlay.show {
    display: flex;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.modal-box {
    background: #1e262e;
    border: 1px solid #2a333d;
    border-radius: 4px;
    max-width: 650px;
    width: 90%;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
    animation: slideUp 0.3s ease;
}
@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border-bottom: 1px solid #2a333d;
    flex-shrink: 0;
}
.modal-header h2 {
    font-size: 14px;
    font-weight: 600;
    color: #e5e9f0;
}
.modal-close {
    background: none;
    border: none;
    color: #8a9aa8;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.2s, transform 0.2s;
    line-height: 1;
}
.modal-close:hover {
    color: #dce2ea;
    transform: scale(1.1);
}
.modal-body {
    padding: 16px 20px;
    overflow-y: auto;
    flex: 1;
}
.modal-body .markdown-content {
    font-size: 11px;
}
.modal-body .markdown-content .help-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 16px;
    margin: 4px 0 2px;
}
.modal-body .markdown-content .help-grid .help-item {
    border-bottom: 1px solid #1a2a2a;
    padding: 2px 0;
}
.modal-body .markdown-content .help-grid .help-item .cmd {
    font-weight: 600;
    color: #8baa9a;
}
.modal-body .markdown-content .help-grid .help-item .desc {
    color: #8a9aa8;
    font-size: 9px;
}
@media print {
    body,
    html {
        height: auto !important;
        overflow: visible !important;
        background: #151a20 !important;
    }
    .dashboard {
        height: auto !important;
        overflow: visible !important;
        padding: 20px !important;
        display: block !important;
    }
    .header-actions,
    .actions,
    .btn,
    .dropdown,
    .btn-icon {
        display: none !important;
    }
    .section {
        border: 1px solid #2a333d !important;
        box-shadow: none !important;
        break-inside: avoid;
        page-break-inside: avoid;
        margin-bottom: 12px !important;
        height: auto !important;
        flex: none !important;
    }
    .grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 12px !important;
        height: auto !important;
        overflow: visible !important;
    }
    .grid .full {
        grid-column: 1 / -1 !important;
    }
    .chart-layout .chart-wrap canvas {
        max-height: 150px !important;
    }
    .stat-grid {
        grid-template-columns: repeat(4, 1fr) !important;
    }
    .section-body {
        padding: 8px 12px !important;
    }
    .markdown-content {
        font-size: 10px !important;
    }
}
@media (max-width: 700px) {
    .dashboard {
        padding: 8px;
    }
    .grid {
        grid-template-columns: 1fr !important;
        grid-template-rows: auto !important;
        overflow-y: auto;
    }
    html,
    body {
        overflow: auto;
    }
    .chart-layout .chart-wrap {
        flex: 0 0 100px !important;
        max-height: 100px !important;
    }
    .chart-layout .chart-wrap canvas {
        max-height: 80px !important;
    }
    .section[data-section-id*="users"] .chart-layout .chart-text {
        flex: 1 1 40% !important;
    }
    .section[data-section-id*="users"] .chart-layout .chart-wrap {
        flex: 1 1 60% !important;
    }
    .modal-body .markdown-content .help-grid {
        grid-template-columns: 1fr !important;
    }
}
.toast {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: #1e262e;
    border: 1px solid #2a333d;
    color: #dce2ea;
    font-size: 10px;
    font-weight: 400;
    padding: 4px 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.25s, transform 0.25s;
    pointer-events: none;
    z-index: 999;
    letter-spacing: 0.01em;
    border-radius: 0;
}
.toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}`;

    // ─── CLEAN MARKDOWN DEFAULTS ───
    const HELP_CONTENT = `# 📖 How to use waferBoard

Write **clean markdown** with special directives to build dashboard components.
No HTML needed — just type these commands in any section:

<div class="help-grid">
  <div class="help-item"><span class="cmd">#stats</span> <span class="desc">→ stat cards with changes (e.g. Revenue: $284k ▲12.4%)</span></div>
  <div class="help-item"><span class="cmd">#channels</span> <span class="desc">→ channel bars with percentages (bar width = percentage)</span></div>
  <div class="help-item"><span class="cmd">#metrics</span> <span class="desc">→ key-value metric grid</span></div>
  <div class="help-item"><span class="cmd">#actions</span> <span class="desc">→ task list with priorities [HIGH]/[MED]/[LOW]</span></div>
  <div class="help-item"><span class="cmd">#tags</span> <span class="desc">→ tag pills (comma separated)</span></div>
  <div class="help-item"><span class="cmd">#chart pie</span> <span class="desc">→ interactive pie chart (Label: value)</span></div>
  <div class="help-item"><span class="cmd">#chart bar</span> <span class="desc">→ interactive bar chart</span></div>
  <div class="help-item"><span class="cmd">\`\`\`chart</span> <span class="desc">→ alternative chart block</span></div>
</div>

**Pro tip:** Edit any section below — you'll see clean markdown in the editor, not HTML!
Use ▲/▼ for changes and [HIGH]/[MED]/[LOW] for priorities.`;

    const DEFAULTS = {
        overview: `# Quarterly Performance

#stats
Revenue: $284k ▲12.4%
Users: 12.4k ▲8.1%
Growth: +18% ▲3.2%
NPS: 72 ▲5 pts

High‑level view of key metrics. Edit this block with clean markdown.

#tags
growth, q3, trending`,

        revenue: `## Revenue by Channel

#channels
Direct: 35
Organic: 25
Social: 20
Referral: 12
Email: 8

#tags
direct, organic, social

#chart pie
Direct: 35
Organic: 25
Social: 20
Referral: 12
Email: 8

#tags
direct, organic, social`,

        users: `## User Growth (Monthly)

#chart bar
Jan: 65
Feb: 78
Mar: 82
Apr: 79
May: 88
Jun: 95

#tags
growth, retention, yoy`,

        metrics: `## Key Unit Metrics

#metrics
CAC: $42
LTV: $340
Churn: 4.2%
ARPU: $22.80

LTV increased **12% YoY**.

#tags
healthy, watch churn`,

        notes: `## Action Items

#actions
- [ ] Q4 Goal: Organic traffic +20% [HIGH]
- [ ] Product: Onboarding flow (Nov 15) [MED]
- [ ] Marketing: Referral program [LOW]
- [ ] Ops: Cloud cost -10% [MED]

Updated: July 14, 2026

#tags
dashboard, q4`
    };

    // ─── SECTION CONFIG (chart configs as fallback) ───
    const BUILTIN_IDS = ['overview', 'revenue', 'users', 'metrics', 'notes'];
    const SECTION_CONFIG = [{
        id: 'overview',
        title: 'Overview',
        type: 'summary',
        gridClass: 'full',
        chart: null,
        defaultMarkdown: DEFAULTS.overview
    }, {
        id: 'revenue',
        title: 'Revenue by Channel',
        type: 'chart',
        gridClass: '',
        chart: {
            type: 'pie',
            labels: ['Direct', 'Organic', 'Social', 'Referral', 'Email'],
            values: [35, 25, 20, 12, 8],
            colors: ['#f9e79f', '#aed6f1', '#f5b7b1', '#f1948a', '#82e0aa']
        },
        defaultMarkdown: DEFAULTS.revenue
    }, {
        id: 'users',
        title: 'User Growth',
        type: 'chart',
        gridClass: '',
        chart: {
            type: 'bar',
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            values: [65, 78, 82, 79, 88, 95],
            colors: ['#f9e79f', '#aed6f1', '#f5b7b1', '#f1948a', '#82e0aa', '#d2b4de']
        },
        defaultMarkdown: DEFAULTS.users
    }, {
        id: 'metrics',
        title: 'Key Metrics',
        type: 'summary',
        gridClass: '',
        chart: null,
        defaultMarkdown: DEFAULTS.metrics
    }, {
        id: 'notes',
        title: 'Notes & Actions',
        type: 'summary',
        gridClass: '',
        chart: null,
        defaultMarkdown: DEFAULTS.notes
    }];

    // ─── STATE ───
    const STORAGE_KEY = 'markboard_md';
    let markdownContent = {};
    let chartInstances = {};
    let editModes = {};
    let dynamicSections = [];

    // ─── DOM REFS ───
    const gridEl = document.getElementById('grid');
    const toastEl = document.getElementById('toast');
    const fileBadge = document.getElementById('fileBadge');
    const fileInput = document.getElementById('fileInput');
    const helpModal = document.getElementById('helpModal');
    const helpModalBody = document.getElementById('helpModalBody');
    const helpBtn = document.getElementById('helpBtn');
    const helpModalClose = document.getElementById('helpModalClose');
    let toastTimer = null;

    // ─── HELPERS ───
    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                BUILTIN_IDS.forEach(id => {
                    if (!parsed[id]) parsed[id] = SECTION_CONFIG.find(s => s.id === id).defaultMarkdown;
                });
                return parsed;
            }
        } catch (_) { /* ignore */ }
        const state = {};
        SECTION_CONFIG.forEach(s => { state[s.id] = s.defaultMarkdown; });
        return state;
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(markdownContent));
        } catch (_) { /* ignore */ }
    }

    function showToast(msg) {
        if (toastTimer) { clearTimeout(toastTimer);
            toastTimer = null; }
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        toastTimer = setTimeout(() => {
            toastEl.classList.remove('show');
            toastTimer = null;
        }, 1800);
    }

    // ─── PARSE DIRECTIVES ───
    function parseStats(content) {
        const lines = content.split('\n');
        const stats = [];
        let inStats = false;
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '#stats') { inStats = true; continue; }
            if (inStats && trimmed === '') continue;
            if (inStats && !trimmed.startsWith('#')) {
                const match = trimmed.match(/^([^:]+):\s*(.+)$/);
                if (match) {
                    const label = match[1].trim();
                    let value = match[2].trim();
                    let change = null,
                        changeDir = null;
                    const upMatch = value.match(/(.+?)\s*(▲.+)$/);
                    const downMatch = value.match(/(.+?)\s*(▼.+)$/);
                    if (upMatch) {
                        value = upMatch[1].trim();
                        change = upMatch[2].trim();
                        changeDir = 'up';
                    } else if (downMatch) {
                        value = downMatch[1].trim();
                        change = downMatch[2].trim();
                        changeDir = 'down';
                    }
                    stats.push({ label, value, change, changeDir });
                }
            }
            if (inStats && trimmed === '') continue;
            if (inStats && trimmed.startsWith('#') && trimmed !== '#stats') break;
        }
        return stats;
    }

    function parseChannels(content) {
        const lines = content.split('\n');
        const channels = [];
        let inChannels = false;
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '#channels') { inChannels = true; continue; }
            if (inChannels && trimmed === '') continue;
            if (inChannels && !trimmed.startsWith('#')) {
                const match = trimmed.match(/^([^:]+):\s*(.+)$/);
                if (match) {
                    const name = match[1].trim();
                    let pct = match[2].trim().replace('%', '');
                    const pctNum = parseFloat(pct);
                    if (!isNaN(pctNum)) {
                        channels.push({ name, pct: pctNum });
                    }
                }
            }
            if (inChannels && trimmed === '') continue;
            if (inChannels && trimmed.startsWith('#') && trimmed !== '#channels') break;
        }
        return channels;
    }

    function parseMetrics(content) {
        const lines = content.split('\n');
        const metrics = [];
        let inMetrics = false;
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '#metrics') { inMetrics = true; continue; }
            if (inMetrics && trimmed === '') continue;
            if (inMetrics && !trimmed.startsWith('#')) {
                const match = trimmed.match(/^([^:]+):\s*(.+)$/);
                if (match) {
                    metrics.push({ label: match[1].trim(), value: match[2].trim() });
                }
            }
            if (inMetrics && trimmed === '') continue;
            if (inMetrics && trimmed.startsWith('#') && trimmed !== '#metrics') break;
        }
        return metrics;
    }

    function parseActions(content) {
        const lines = content.split('\n');
        const actions = [];
        let inActions = false;
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '#actions') { inActions = true; continue; }
            if (inActions && trimmed === '') continue;
            if (inActions && !trimmed.startsWith('#')) {
                const taskMatch = trimmed.match(/^-\s*\[([ x])\]\s*(.+?)(?:\s*\[(HIGH|MED|LOW)\])?$/i);
                if (taskMatch) {
                    const done = taskMatch[1] === 'x';
                    const text = taskMatch[2].trim();
                    const priority = (taskMatch[3] || 'MED').toUpperCase();
                    actions.push({ done, text, priority });
                } else {
                    const simpleMatch = trimmed.match(/^-\s*(.+?)(?:\s*\[(HIGH|MED|LOW)\])?$/i);
                    if (simpleMatch) {
                        const text = simpleMatch[1].trim();
                        const priority = (simpleMatch[2] || 'MED').toUpperCase();
                        actions.push({ done: false, text, priority });
                    }
                }
            }
            if (inActions && trimmed === '') continue;
            if (inActions && trimmed.startsWith('#') && trimmed !== '#actions') break;
        }
        return actions;
    }

    function parseTags(content) {
        const lines = content.split('\n');
        const tags = [];
        let inTags = false;
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '#tags') { inTags = true; continue; }
            if (inTags && trimmed === '') continue;
            if (inTags && !trimmed.startsWith('#')) {
                const parts = trimmed.split(',').map(s => s.trim()).filter(s => s);
                tags.push(...parts);
            }
            if (inTags && trimmed === '') continue;
            if (inTags && trimmed.startsWith('#') && trimmed !== '#tags') break;
        }
        return tags;
    }

    function parseChartDirective(content) {
        const lines = content.split('\n');
        let inChart = false;
        let chartType = 'pie';
        const data = [];
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('#chart')) {
                const parts = trimmed.split(/\s+/);
                if (parts.length > 1) {
                    chartType = parts[1].toLowerCase();
                    if (chartType !== 'pie' && chartType !== 'bar') chartType = 'pie';
                }
                inChart = true;
                continue;
            }
            if (inChart && trimmed === '') continue;
            if (inChart && !trimmed.startsWith('#')) {
                const match = trimmed.match(/^([^:]+):\s*(.+)$/);
                if (match) {
                    const label = match[1].trim();
                    const val = parseFloat(match[2].trim());
                    if (!isNaN(val)) {
                        data.push({ label, value: val });
                    }
                }
            }
            if (inChart && trimmed === '') continue;
            if (inChart && trimmed.startsWith('#') && !trimmed.startsWith('#chart')) break;
        }
        if (data.length === 0) return null;
        return {
            type: chartType,
            labels: data.map(d => d.label),
            values: data.map(d => d.value),
            colors: ['#f9e79f', '#aed6f1', '#f5b7b1', '#f1948a', '#82e0aa', '#d2b4de', '#a3c4a3',
                '#f0b27a', '#85c1e9', '#f1948a'
            ]
        };
    }

    // ─── RENDER MARKDOWN with directives ───
    function renderMarkdown(text) {
        if (!text || !text.trim()) {
            return '<span class="empty-markdown">← edit to add beautiful content</span>';
        }

        // Extract ```chart``` block
        let chartBlockData = null;
        const chartBlockRegex = /```chart\s*([\s\S]*?)```/;
        const chartMatch = text.match(chartBlockRegex);
        if (chartMatch) {
            try {
                const lines = chartMatch[1].split('\n').filter(l => l.trim());
                const config = {};
                lines.forEach(line => {
                    const [key, ...vals] = line.split(':');
                    if (key && vals.length) {
                        const k = key.trim();
                        let v = vals.join(':').trim();
                        if (k === 'labels' || k === 'colors') {
                            config[k] = v.split(',').map(s => s.trim());
                        } else if (k === 'values') {
                            config[k] = v.split(',').map(s => parseFloat(s.trim()));
                        } else {
                            config[k] = v;
                        }
                    }
                });
                if (config.type && config.labels && config.values) {
                    chartBlockData = config;
                }
            } catch (_) { /* ignore */ }
        }

        const chartDirective = parseChartDirective(text);
        const chartData = chartDirective || chartBlockData;

        // Process lines, build HTML for directives
        const lines = text.split('\n');
        let processedLines = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();
            const directiveMatch = trimmed.match(/^(#stats|#channels|#metrics|#actions|#tags|#chart\s*\w*)$/);
            if (directiveMatch) {
                const directive = directiveMatch[1].split(/\s/)[0];
                let j = i + 1;
                while (j < lines.length) {
                    const nextLine = lines[j].trim();
                    if (nextLine.match(/^(#stats|#channels|#metrics|#actions|#tags|#chart\s*\w*|#\w+)/)) break;
                    if (nextLine !== '') { /* we already capture in parse functions */ }
                    j++;
                }
                let dirHtml = '';
                switch (directive) {
                    case '#stats': {
                        const parsed = parseStats(lines.slice(i, j + 1).join('\n'));
                        if (parsed.length) {
                            dirHtml = '<div class="stat-grid">';
                            parsed.forEach(s => {
                                const changeClass = s.changeDir === 'up' ? 'up' : s.changeDir ===
                                    'down' ? 'down' : '';
                                const changeHtml = s.change ?
                                    `<span class="stat-change ${changeClass}">${s.change}</span>` :
                                    '';
                                dirHtml += `<div class="stat-card">
                                            <span class="stat-label">${s.label}</span>
                                            <span class="stat-value">${s.value}</span>
                                            ${changeHtml}
                                        </div>`;
                            });
                            dirHtml += '</div>';
                        }
                        break;
                    }
                    case '#channels': {
                        const parsed = parseChannels(lines.slice(i, j + 1).join('\n'));
                        if (parsed.length) {
                            const colors = ['#f9e79f', '#aed6f1', '#f5b7b1', '#f1948a', '#82e0aa', '#d2b4de',
                                '#a3c4a3', '#f0b27a', '#85c1e9'
                            ];
                            dirHtml = '<div class="channel-list">';
                            parsed.forEach((c, idx) => {
                                const color = colors[idx % colors.length];
                                const barWidth = Math.min(c.pct, 100);
                                dirHtml += `<div class="channel-item">
                                            <span class="channel-name">${c.name}</span>
                                            <div class="channel-bar" style="width:${barWidth}%; background:${color};"></div>
                                            <span class="channel-pct">${c.pct}%</span>
                                        </div>`;
                            });
                            dirHtml += '</div>';
                        }
                        break;
                    }
                    case '#metrics': {
                        const parsed = parseMetrics(lines.slice(i, j + 1).join('\n'));
                        if (parsed.length) {
                            dirHtml = '<div class="metric-grid">';
                            parsed.forEach(m => {
                                dirHtml += `<div class="metric-item">
                                            <span class="metric-label">${m.label}</span>
                                            <span class="metric-value">${m.value}</span>
                                        </div>`;
                            });
                            dirHtml += '</div>';
                        }
                        break;
                    }
                    case '#actions': {
                        const parsed = parseActions(lines.slice(i, j + 1).join('\n'));
                        if (parsed.length) {
                            dirHtml = '<ul class="action-list">';
                            parsed.forEach(a => {
                                const checked = a.done ? '✓' : '◈';
                                const priorityClass = a.priority.toLowerCase();
                                dirHtml += `<li>
                                            <span style="opacity:${a.done?0.6:1}">${checked} ${a.text}</span>
                                            <span class="priority ${priorityClass}">${a.priority}</span>
                                        </li>`;
                            });
                            dirHtml += '</ul>';
                        }
                        break;
                    }
                    case '#tags': {
                        const parsed = parseTags(lines.slice(i, j + 1).join('\n'));
                        if (parsed.length) {
                            const colorClasses = ['primary', 'success', 'warning', 'danger'];
                            dirHtml = '<div style="display:flex; gap:4px; flex-wrap:wrap; margin:2px 0;">';
                            parsed.forEach((t, idx) => {
                                const cls = colorClasses[idx % colorClasses.length];
                                dirHtml += `<span class="tag ${cls}">${t}</span>`;
                            });
                            dirHtml += '</div>';
                        }
                        break;
                    }
                    case '#chart': {
                        // handled via chartData
                        break;
                    }
                }
                if (dirHtml) processedLines.push(dirHtml);
                i = j - 1;
                continue;
            }
            // Skip ```chart``` blocks
            if (trimmed.startsWith('```chart')) {
                let k = i + 1;
                while (k < lines.length && !lines[k].trim().startsWith('```')) k++;
                i = k;
                continue;
            }
            processedLines.push(line);
        }

        let markdownText = processedLines.join('\n');
        markdownText = markdownText.replace(/#chart\s*\w*[\s\S]*?(?=\n#|\n$|$)/, '');
        markdownText = markdownText.replace(/```chart[\s\S]*?```/, '');

        if (chartData) {
            const chartHtml = `<div class="chart-placeholder" data-chart='${JSON.stringify(chartData)}' style="height:140px; width:100%;"></div>`;
            markdownText += '\n\n' + chartHtml;
        }

        let rendered = '';
        try {
            rendered = marked.parse(markdownText);
        } catch (_) {
            rendered = `<p>${markdownText}</p>`;
        }
        return rendered;
    }

    // ─── EXTRACT CHART FROM MARKDOWN ───
    function extractChartFromMarkdown(text) {
        const chartDirective = parseChartDirective(text);
        if (chartDirective) return chartDirective;
        const chartBlockRegex = /```chart\s*([\s\S]*?)```/;
        const match = text.match(chartBlockRegex);
        if (!match) return null;
        try {
            const lines = match[1].split('\n').filter(l => l.trim());
            const config = {};
            lines.forEach(line => {
                const [key, ...vals] = line.split(':');
                if (key && vals.length) {
                    const k = key.trim();
                    let v = vals.join(':').trim();
                    if (k === 'labels' || k === 'colors') {
                        config[k] = v.split(',').map(s => s.trim());
                    } else if (k === 'values') {
                        config[k] = v.split(',').map(s => parseFloat(s.trim()));
                    } else {
                        config[k] = v;
                    }
                }
            });
            if (config.type && config.labels && config.values) return config;
            return null;
        } catch (_) { return null; }
    }

    // ─── BUILD SECTION ───
    function buildSection(config) {
        const id = config.id;
        let content = markdownContent[id] || config.defaultMarkdown || '';
        const isEditing = editModes[id] || false;

        let chartData = null;
        if (!isEditing) {
            const fromMarkdown = extractChartFromMarkdown(content);
            chartData = fromMarkdown || config.chart || null;
        }
        const hasChart = chartData !== null;

        const section = document.createElement('div');
        section.className = `section ${config.gridClass || ''}`;
        section.dataset.sectionId = id;
        section.style.animationDelay = '0.05s';

        const header = document.createElement('div');
        header.className = 'section-header';
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title';
        titleSpan.innerHTML = `${config.title} <span class="type-badge">${config.type || 'custom'}</span>`;

        const actions = document.createElement('div');
        actions.className = 'actions';
        const editBtn = document.createElement('button');
        editBtn.className = `btn-icon${isEditing ? ' edit-active' : ''}`;
        editBtn.innerHTML = isEditing ? '✕' : '✎';
        editBtn.title = isEditing ? 'Cancel edit' : 'Edit markdown';
        editBtn.setAttribute('aria-label', isEditing ? 'Cancel edit' : 'Edit markdown');
        const saveBtn = document.createElement('button');
        saveBtn.className = 'btn btn-sm btn-primary';
        saveBtn.textContent = 'Save';
        saveBtn.style.display = isEditing ? 'inline-block' : 'none';
        actions.appendChild(editBtn);
        actions.appendChild(saveBtn);
        header.appendChild(titleSpan);
        header.appendChild(actions);
        section.appendChild(header);

        const body = document.createElement('div');
        body.className = 'section-body';

        if (hasChart && !isEditing) {
            const layout = document.createElement('div');
            layout.className = 'chart-layout';
            const textCol = document.createElement('div');
            textCol.className = 'chart-text';
            const mdDiv = document.createElement('div');
            mdDiv.className = 'markdown-content';
            let cleanContent = content;
            cleanContent = cleanContent.replace(/#chart\s*\w*[\s\S]*?(?=\n#|\n$|$)/, '');
            cleanContent = cleanContent.replace(/```chart[\s\S]*?```/, '');
            cleanContent = cleanContent.replace(/<div class="chart-placeholder"[^>]*>.*?<\/div>/, '');
            mdDiv.innerHTML = renderMarkdown(cleanContent);
            textCol.appendChild(mdDiv);
            const chartCol = document.createElement('div');
            chartCol.className = 'chart-wrap';
            const canvas = document.createElement('canvas');
            canvas.id = `chart-${id}`;
            canvas.width = 300;
            canvas.height = 180;
            chartCol.appendChild(canvas);
            layout.appendChild(textCol);
            layout.appendChild(chartCol);
            body.appendChild(layout);
            body._chartCanvas = canvas;
            body._chartData = chartData;
        } else if (hasChart && isEditing) {
            const editorWrap = document.createElement('div');
            editorWrap.className = 'editor-wrap';
            const textarea = document.createElement('textarea');
            textarea.value = content;
            textarea.spellcheck = true;
            textarea.dataset.sectionId = id;
            const btnRow = document.createElement('div');
            btnRow.className = 'editor-actions';
            const applyBtn = document.createElement('button');
            applyBtn.className = 'btn btn-sm btn-primary';
            applyBtn.textContent = 'Apply & Close';
            btnRow.appendChild(applyBtn);
            editorWrap.appendChild(textarea);
            editorWrap.appendChild(btnRow);
            body.appendChild(editorWrap);
            body._textarea = textarea;
            body._applyBtn = applyBtn;
        } else if (!hasChart && !isEditing) {
            const mdDiv = document.createElement('div');
            mdDiv.className = 'markdown-content';
            mdDiv.innerHTML = renderMarkdown(content);
            body.appendChild(mdDiv);
        } else {
            const editorWrap = document.createElement('div');
            editorWrap.className = 'editor-wrap';
            const textarea = document.createElement('textarea');
            textarea.value = content;
            textarea.spellcheck = true;
            textarea.dataset.sectionId = id;
            const btnRow = document.createElement('div');
            btnRow.className = 'editor-actions';
            const applyBtn = document.createElement('button');
            applyBtn.className = 'btn btn-sm btn-primary';
            applyBtn.textContent = 'Apply & Close';
            btnRow.appendChild(applyBtn);
            editorWrap.appendChild(textarea);
            editorWrap.appendChild(btnRow);
            body.appendChild(editorWrap);
            body._textarea = textarea;
            body._applyBtn = applyBtn;
        }

        section.appendChild(body);
        section._editBtn = editBtn;
        section._saveBtn = saveBtn;
        section._body = body;
        section._config = config;
        return section;
    }

    // ─── INIT CHART ───
    function initChart(id, chartData) {
        const canvas = document.getElementById(`chart-${id}`);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (chartInstances[id]) { chartInstances[id].destroy();
            delete chartInstances[id]; }
        if (!chartData) return;
        const data = chartData;
        const colors = data.colors || ['#f9e79f', '#aed6f1', '#f5b7b1', '#f1948a', '#82e0aa', '#d2b4de', '#a3c4a3',
            '#f0b27a', '#85c1e9', '#f1948a'
        ];
        let chartConfig = {
            type: data.type || 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: colors.slice(0, data.labels.length),
                    borderColor: '#1e262e',
                    borderWidth: 2,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 6,
                            padding: 4,
                            font: { family: 'Raleway', size: 8, weight: '400' },
                            color: '#b0c0cc',
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#2a333d' }, ticks: { color: '#b0c0cc',
                            font: { size: 8 } } },
                    x: { grid: { display: false }, ticks: { color: '#b0c0cc', font: { size: 8 } } }
                }
            }
        };
        if (data.type === 'pie') {
            chartConfig.options = {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 6,
                            padding: 4,
                            font: { family: 'Raleway', size: 8, weight: '400' },
                            color: '#b0c0cc',
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let total = 0;
                                context.dataset.data.forEach(v => { total += v; });
                                const pct = ((context.parsed / total) * 100).toFixed(1);
                                return `${context.label}: ${pct}%`;
                            }
                        }
                    }
                },
                cutout: '55%'
            };
        }
        if (data.type === 'bar') {
            chartConfig.options.scales = {
                y: { beginAtZero: true, grid: { color: '#2a333d' }, ticks: { color: '#b0c0cc',
                        font: { size: 8 } } },
                x: { grid: { display: false }, ticks: { color: '#b0c0cc', font: { size: 8 } } }
            };
            chartConfig.options.plugins = { legend: { display: false } };
        }
        const chart = new Chart(ctx, chartConfig);
        chartInstances[id] = chart;
    }

    // ─── GET CONFIG BY ID ───
    function getConfigById(id) {
        let found = SECTION_CONFIG.find(s => s.id === id);
        if (found) return found;
        found = dynamicSections.find(s => s.id === id);
        return found || null;
    }

    function getAllSectionIds() {
        const builtin = SECTION_CONFIG.map(s => s.id);
        const dynamic = dynamicSections.map(s => s.id);
        return [...builtin, ...dynamic];
    }

    // ─── REBUILD SECTION ───
    function rebuildSection(id) {
        const config = getConfigById(id);
        if (!config) return;
        const oldSection = document.querySelector(`.section[data-section-id="${id}"]`);
        if (oldSection) {
            if (chartInstances[id]) { chartInstances[id].destroy();
                delete chartInstances[id]; }
            oldSection.remove();
        }
        const newSection = buildSection(config);
        const allSections = getAllSectionIds();
        const idx = allSections.indexOf(id);
        let insertBefore = null;
        const existing = document.querySelectorAll('.section');
        for (let i = 0; i < existing.length; i++) {
            const eid = existing[i].dataset.sectionId;
            if (allSections.indexOf(eid) > idx) { insertBefore = existing[i]; break; }
        }
        if (insertBefore) gridEl.insertBefore(newSection, insertBefore);
        else gridEl.appendChild(newSection);
        wireSectionEvents(newSection, config);
        const chartData = newSection._body._chartData;
        if (chartData && !editModes[id]) initChart(id, chartData);
        const isEditing = editModes[id] || false;
        const saveBtn = newSection.querySelector('.section-header .btn-primary');
        if (saveBtn) saveBtn.style.display = isEditing ? 'inline-block' : 'none';
        const editBtn = newSection.querySelector('.section-header .btn-icon');
        if (editBtn) {
            editBtn.classList.toggle('edit-active', isEditing);
            editBtn.innerHTML = isEditing ? '✕' : '✎';
            editBtn.title = isEditing ? 'Cancel edit' : 'Edit markdown';
        }
        if (isEditing) {
            const ta = newSection.querySelector('.editor-wrap textarea');
            if (ta) { setTimeout(() => { ta.focus();
                    ta.setSelectionRange(ta.value.length, ta.value.length); }, 30); }
        }
    }

    // ─── WIRE EVENTS ───
    function wireSectionEvents(section, config) {
        const id = config.id;
        const editBtn = section._editBtn;
        const saveBtn = section._saveBtn;
        const body = section._body;

        editBtn.addEventListener('click', function() {
            const currentlyEditing = editModes[id] || false;
            if (currentlyEditing) {
                editModes[id] = false;
                rebuildSection(id);
                showToast('Edit cancelled');
            } else {
                editModes[id] = true;
                rebuildSection(id);
                const newSection = document.querySelector(`.section[data-section-id="${id}"]`);
                if (newSection) {
                    const ta = newSection.querySelector('.editor-wrap textarea');
                    if (ta) { setTimeout(() => { ta.focus();
                            ta.setSelectionRange(ta.value.length, ta.value.length); }, 30); }
                }
                showToast('Editing markdown…');
            }
        });

        const applyHandler = function() {
            const textarea = body._textarea || section.querySelector('.editor-wrap textarea');
            if (!textarea) return;
            const newContent = textarea.value;
            markdownContent[id] = newContent;
            saveState();
            editModes[id] = false;
            rebuildSection(id);
            showToast('✓ Saved');
        };
        if (saveBtn) saveBtn.addEventListener('click', applyHandler);
        if (body._applyBtn) body._applyBtn.addEventListener('click', applyHandler);
        const ta = section.querySelector('.editor-wrap textarea');
        if (ta) {
            ta.addEventListener('keydown', function(e) {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    e.preventDefault();
                    const btn = section.querySelector('.editor-wrap .btn-primary');
                    if (btn) btn.click();
                }
            });
        }
    }

    // ─── REBUILD ALL ───
    function rebuildAll() {
        while (gridEl.firstChild) gridEl.removeChild(gridEl.firstChild);
        Object.keys(chartInstances).forEach(key => { try { chartInstances[key].destroy(); } catch (_) {} });
        chartInstances = {};
        SECTION_CONFIG.forEach(s => {
            const section = buildSection(s);
            gridEl.appendChild(section);
            wireSectionEvents(section, s);
        });
        dynamicSections.forEach(s => {
            if (!markdownContent[s.id]) markdownContent[s.id] = s.defaultMarkdown || '';
            const section = buildSection(s);
            gridEl.appendChild(section);
            wireSectionEvents(section, s);
        });
        const fileCount = dynamicSections.length;
        fileBadge.textContent = fileCount > 0 ? `📁 ${fileCount} file(s)` : '📁 local';
        requestAnimationFrame(() => {
            const allConfigs = [...SECTION_CONFIG, ...dynamicSections];
            allConfigs.forEach(s => {
                const fromMarkdown = extractChartFromMarkdown(markdownContent[s.id] || s.defaultMarkdown ||
                    '');
                const chartData = fromMarkdown || s.chart || null;
                if (chartData && !editModes[s.id]) initChart(s.id, chartData);
            });
        });
    }

    // ─── RESET ───
    function resetAll() {
        if (!confirm('Reset all sections to default markdown content?')) return;
        SECTION_CONFIG.forEach(s => {
            markdownContent[s.id] = s.defaultMarkdown;
            editModes[s.id] = false;
        });
        dynamicSections = [];
        Object.keys(markdownContent).forEach(key => { if (key.startsWith('file-')) delete markdownContent[key]; });
        saveState();
        rebuildAll();
        showToast('↺ All sections reset');
    }

    // ─── LOAD FILES ───
    function loadFiles() { fileInput.click(); }
    fileInput.addEventListener('change', function(e) {
        const files = e.target.files;
        if (files.length === 0) return;
        dynamicSections = [];
        Object.keys(markdownContent).forEach(key => { if (key.startsWith('file-')) delete markdownContent[key]; });
        let loaded = 0;
        for (const file of files) {
            const reader = new FileReader();
            reader.onload = function(ev) {
                const text = ev.target.result;
                const id = 'file-' + file.name.replace(/\.md$/, '').replace(/[^a-zA-Z0-9]/g, '_');
                const title = file.name.replace(/\.md$/, '');
                dynamicSections.push({
                    id: id,
                    title: title,
                    type: 'file',
                    gridClass: '',
                    chart: null,
                    defaultMarkdown: text,
                    isHelp: false
                });
                markdownContent[id] = text;
                loaded++;
                if (loaded === files.length) {
                    saveState();
                    rebuildAll();
                    showToast(`✓ Loaded ${files.length} markdown file(s)`);
                }
            };
            reader.readAsText(file);
        }
        fileInput.value = '';
    });

    // ─── HELP MODAL ───
    function openHelp() {
        helpModalBody.innerHTML = renderMarkdown(HELP_CONTENT);
        helpModal.classList.add('show');
    }

    function closeHelp() {
        helpModal.classList.remove('show');
    }

    helpBtn.addEventListener('click', openHelp);
    helpModalClose.addEventListener('click', closeHelp);
    helpModal.addEventListener('click', function(e) {
        if (e.target === helpModal) closeHelp();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && helpModal.classList.contains('show')) closeHelp();
    });

    // ─── EXPORTS ───

    function exportHTML() {
        const dashboardHTML = document.querySelector('.dashboard').outerHTML;
        const allConfigs = [...SECTION_CONFIG, ...dynamicSections];
        const chartData = allConfigs
            .filter(s => {
                const fromMarkdown = extractChartFromMarkdown(markdownContent[s.id] || s.defaultMarkdown || '');
                return (fromMarkdown || s.chart) !== null;
            })
            .map(s => {
                const fromMarkdown = extractChartFromMarkdown(markdownContent[s.id] || s.defaultMarkdown || '');
                const data = fromMarkdown || s.chart;
                return { id: s.id, data };
            });

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>waferBoard Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"><\/script>
  <script src="https://unpkg.com/marked@11.1.1/dist/marked.min.js"><\/script>
  <style>${CSS_STYLES}</style>
  <style>
    /* Hide interactive controls, keep only the dashboard content */
    .header-actions, .actions, .btn, .dropdown, .btn-icon {
      display: none !important;
    }
    body, html {
      height: auto !important;
      overflow: visible !important;
      background: #151a20;
    }
    .dashboard {
      height: auto !important;
      overflow: visible !important;
      padding: 20px !important;
    }
    .grid {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 12px !important;
      height: auto !important;
    }
    .grid .full {
      grid-column: 1 / -1 !important;
    }
    .section {
      break-inside: avoid;
      margin-bottom: 0 !important;
    }
    .chart-layout .chart-wrap canvas {
      max-height: 160px !important;
    }
    .stat-grid {
      grid-template-columns: repeat(4, 1fr) !important;
    }
    @media (max-width: 700px) {
      .grid {
        grid-template-columns: 1fr !important;
      }
    }
  </style>
</head>
<body>
  ${dashboardHTML}
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const chartData = ${JSON.stringify(chartData)};
      chartData.forEach(item => {
        const canvas = document.getElementById('chart-' + item.id);
        if (canvas && item.data) {
          const ctx = canvas.getContext('2d');
          const data = item.data;
          const colors = data.colors || ['#f9e79f','#aed6f1','#f5b7b1','#f1948a','#82e0aa','#d2b4de','#a3c4a3','#f0b27a','#85c1e9','#f1948a'];
          let chartConfig = {
            type: data.type || 'pie',
            data: {
              labels: data.labels,
              datasets: [{
                data: data.values,
                backgroundColor: colors.slice(0, data.labels.length),
                borderColor: '#1e262e',
                borderWidth: 2,
                hoverOffset: 6
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: { boxWidth: 6, padding: 4, font: { family: 'Raleway', size: 8, weight: '400' }, color: '#b0c0cc', usePointStyle: true, pointStyle: 'circle' }
                }
              }
            }
          };
          if (data.type === 'pie') {
            chartConfig.options.cutout = '55%';
            chartConfig.options.plugins.tooltip = {
              callbacks: {
                label: function(context) {
                  let total = 0;
                  context.dataset.data.forEach(v => { total += v; });
                  const pct = ((context.parsed / total) * 100).toFixed(1);
                  return context.label + ': ' + pct + '%';
                }
              }
            };
          }
          if (data.type === 'bar') {
            chartConfig.options.scales = {
              y: { beginAtZero: true, grid: { color: '#2a333d' }, ticks: { color: '#b0c0cc', font: { size: 8 } } },
              x: { grid: { display: false }, ticks: { color: '#b0c0cc', font: { size: 8 } } }
            };
            chartConfig.options.plugins.legend = { display: false };
          }
          new Chart(ctx, chartConfig);
        }
      });
    });
  <\/script>
</body>
</html>`;

        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'waferboard_dashboard.html';
        a.click();
        URL.revokeObjectURL(url);
        showToast('HTML exported with clean layout');
    }

    function exportMD() {
        let md = '# waferBoard Dashboard\n\n';
        const allConfigs = [...SECTION_CONFIG, ...dynamicSections];
        allConfigs.forEach(s => {
            md += `## ${s.title}\n\n`;
            md += markdownContent[s.id] || s.defaultMarkdown || '';
            md += '\n\n';
        });
        const blob = new Blob([md], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'waferboard_dashboard.md';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Markdown exported');
    }

    function exportPDF() { window.print();
        showToast('PDF export ready – use print dialog'); }

    function captureDashboard() {
        const dashboard = document.querySelector('.dashboard');
        return html2canvas(dashboard, {
            backgroundColor: '#151a20',
            scale: 3,
            allowTaint: true,
            useCORS: true,
            logging: false,
            width: dashboard.scrollWidth,
            height: dashboard.scrollHeight,
            windowWidth: dashboard.scrollWidth,
            windowHeight: dashboard.scrollHeight,
            onclone: function(clonedDoc) {
                // Replace canvas elements with images to ensure chart content is captured
                const canvases = clonedDoc.querySelectorAll('canvas');
                canvases.forEach(canvas => {
                    try {
                        const img = clonedDoc.createElement('img');
                        img.src = canvas.toDataURL();
                        img.style.width = canvas.style.width || canvas.width + 'px';
                        img.style.height = canvas.style.height || canvas.height + 'px';
                        canvas.parentNode.replaceChild(img, canvas);
                    } catch (e) {
                        // If conversion fails, leave canvas as is (may be blank)
                    }
                });
            }
        });
    }

    function exportPNG() {
        captureDashboard().then(canvas => {
            const link = document.createElement('a');
            link.download = 'waferboard_dashboard.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast('PNG exported (high resolution)');
        }).catch(() => {
            showToast('PNG export failed');
        });
    }

    function exportSVG() {
        captureDashboard().then(canvas => {
            const dataURL = canvas.toDataURL('image/png');
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" 
                        width="${canvas.width}" height="${canvas.height}">
              <foreignObject width="100%" height="100%">
                <img xmlns="http://www.w3.org/1999/xhtml" 
                     src="${dataURL}" 
                     width="100%" height="100%" 
                     style="background:#151a20;" />
              </foreignObject>
            </svg>`;
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'waferboard_dashboard.svg';
            a.click();
            URL.revokeObjectURL(url);
            showToast('SVG exported (high resolution)');
        }).catch(() => {
            showToast('SVG export failed');
        });
    }

    // ─── INIT ───
    function init() {
        markdownContent = loadState();
        SECTION_CONFIG.forEach(s => {
            if (!markdownContent[s.id]) markdownContent[s.id] = s.defaultMarkdown;
            editModes[s.id] = false;
        });
        saveState();
        rebuildAll();

        document.getElementById('resetAllBtn').addEventListener('click', resetAll);
        document.getElementById('loadFilesBtn').addEventListener('click', loadFiles);
        document.getElementById('exportPDF').addEventListener('click', exportPDF);
        document.getElementById('exportMD').addEventListener('click', exportMD);
        document.getElementById('exportHTML').addEventListener('click', exportHTML);
        document.getElementById('exportPNG').addEventListener('click', exportPNG);
        document.getElementById('exportSVG').addEventListener('click', exportSVG);

        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                Object.keys(chartInstances).forEach(key => { try { chartInstances[key].resize(); } catch (
                    _) {} });
            }, 200);
        });
        window.addEventListener('beforeunload', function() { saveState(); });
        showToast('✦ waferBoard ready – click ❓ Help to get started');
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

})();