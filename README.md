# KAF Studio — Gestão de alunas e mensalidades

Plain HTML/CSS/JS. No backend, no database: all data is saved in the browser (localStorage) on the device where it's used.

## Files
- `index.html` — app shell (open this)
- `styles.css` — design (KAF palette: navy #294582, lime #A3C81A)
- `core.js` — data model, automatic monthly invoices, attendance/make-up logic, CSV/XLSX export
- `app.js` — screens and interactions
- `logo.svg` — official logo extracted from the PDF (vector, unmodified, only trimmed whitespace)
- `icon-180.png` — iPhone home-screen icon

## Use on iPhone
Host the folder (Vercel, Netlify, any static host) and open it in Safari → Share → "Add to Home Screen".
It then opens full screen like an app. Data stays on that phone — use **Mais → Baixar backup** regularly.

## First run
The 36 students from `Controle_Mensalidades_KAF_Studio_2026.xlsx` are pre-loaded. The sheet had no values or due days,
so tap **Configurar** on the banner to set plan/value/due day for each (≈3 taps per student).
**Mais → Ver com dados de demonstração** loads 14 fictional students to try everything; **Recomeçar com a lista da planilha** goes back.

## Plans (Valores 2026)
All 27 plans from the price table are built in: Grupo / Dupla / Personal × 1x, 2x, 3x semana × Mensal, Semestral, Anual (monthly values, R$).
Edit or add plans in **Mais → Planos**.

## Fixing mistakes
- Every change shows a **Desfazer** (undo) button for ~7 seconds.
- Paid payments have a **↺ Desfazer** button on the card and in the payment screen.
- Student profile → **Corrigir erros**: reset plan/value/due day, or erase that student's payments.
- **Mais → Zerar mensalidades e pagamentos** clears all finance and keeps students and plans.
