/* KAF Studio — núcleo de dados (sem backend: tudo fica salvo no navegador via localStorage) */
'use strict';

const KEY = 'kafStudio.gestao.v1';
const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const MONTHS_SHORT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const WEEKDAYS = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const WEEKDAYS_LONG = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];

/* Alunas importadas da planilha Controle_Mensalidades_KAF_Studio_2026.xlsx */
const SHEET_NAMES = ['Rebeca','Luiza Nazário','Alexandra','Léa','Naoko','Sadao','Nana','May','Anny','Silvia Helena','Lia','Regina',
  'Marcelino','Soninha','Marisa','Ana Flora','Maria Izilda','Marívia','Fátima','Grit','Denise','Olga','Edna','Maria José','Nádia',
  'Pedro','Roseli','Yassuo','Bruno','Janete','Bernhard','Camila','Renato','Gláucia','Karen','Eliana'];

const CURRENCIES = { EUR:{sym:'€', label:'Euro (€)'}, BRL:{sym:'R$', label:'Real (R$)'}, USD:{sym:'US$', label:'Dólar (US$)'} };

/* Status da mensalidade (calculado, nunca editado à mão) */
const INV_STATUS = {
  paid:  {label:'Pago',           plural:'Pagas'},
  soon:  {label:'A vencer',       plural:'A vencer'},
  today: {label:'Vence hoje',     plural:'Vencem hoje'},
  late:  {label:'Atrasado',       plural:'Atrasadas'},
  na:    {label:'Não aplicável',  plural:'Não aplicáveis'}
};
const STU_STATUS = { active:'Ativa', paused:'Pausada', inactive:'Inativa' };
const ATT_TYPES = {
  present:{label:'Presente',  short:'Presente', emoji:'✅'},
  absent: {label:'Falta (avisou)', short:'Falta', emoji:'❌'},
  noshow: {label:'Falta sem reposição', short:'Sem repor', emoji:'⚠️'},
  makeup: {label:'Reposição', short:'Reposição', emoji:'🔄'}
};
const MK_STATUS = { pending:'Pendente', scheduled:'Agendada', done:'Realizada', expired:'Expirada', missed:'Não compareceu', canceled:'Cancelada' };

/* ---------------- utilidades ---------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const pad = n => String(n).padStart(2, '0');
const isoOf = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const todayISO = () => isoOf(new Date());
const ymOf = iso => String(iso).slice(0, 7);
const curYm = () => ymOf(todayISO());
const addMonths = (ym, n) => { let [y, m] = ym.split('-').map(Number); m += n; y += Math.floor((m - 1) / 12); m = ((m - 1) % 12 + 12) % 12 + 1; return `${y}-${pad(m)}`; };
const daysInMonth = ym => { const [y, m] = ym.split('-').map(Number); return new Date(y, m, 0).getDate(); };
const dueDateFor = (ym, day) => `${ym}-${pad(Math.min(Number(day), daysInMonth(ym)))}`;
const parseISO = iso => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (iso, n) => { const d = parseISO(iso); d.setDate(d.getDate() + n); return isoOf(d); };
const daysBetween = (a, b) => Math.round((parseISO(b) - parseISO(a)) / 864e5);
const monthLabel = ym => { const [y, m] = ym.split('-').map(Number); return `${MONTHS[m - 1]} ${y}`; };
const monthName = ym => MONTHS[Number(ym.slice(5, 7)) - 1];
const monthShort = ym => MONTHS_SHORT[Number(ym.slice(5, 7)) - 1];
const fmtDM = iso => iso ? `${iso.slice(8, 10)}/${iso.slice(5, 7)}` : '';
const fmtDMY = iso => iso ? `${iso.slice(8, 10)}/${iso.slice(5, 7)}/${iso.slice(0, 4)}` : '';
const weekdayOf = iso => parseISO(iso).getDay();
const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const initials = name => String(name || '?').trim().split(/\s+/).slice(0, 2).map(p => p[0]).join('').toUpperCase();
const firstName = name => String(name || '').trim().split(/\s+/)[0];

let S = null; // estado da aplicação

function money(v) {
  const n = Math.round((Number(v) || 0) * 100) / 100;
  const s = n.toLocaleString('pt-BR', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
  return `${(CURRENCIES[S.settings.currency] || CURRENCIES.EUR).sym} ${s}`;
}

/* ---------------- estado ---------------- */
/* Tabela "Valores 2026" do KAF Studio — valores por mês */
const PLAN_GROUPS = [
  { code: 'g', name: 'Grupo', note: 'até 4 pessoas' },
  { code: 'd', name: 'Dupla', note: 'valor por pessoa' },
  { code: 'p', name: 'Personal', note: 'privado' }
];
const PLAN_TERMS = [
  { code: 'm', name: 'Mensal', note: 'Sem férias' },
  { code: 's', name: 'Semestral', note: 'Pode repor 15 dias de férias durante os 6 meses' },
  { code: 'a', name: 'Anual', note: 'Pode repor 30 dias de férias durante o ano' }
];
const PRICES_2026 = {
  g: { 1: [350, 325, 305], 2: [600, 545, 515], 3: [720, 655, 620] },
  d: { 1: [420, 380, 375], 2: [810, 745, 730], 3: [1200, 1110, 1090] },
  p: { 1: [820, 710, 695], 2: [1450, 1440, 1355], 3: [2130, 2120, 2030] }
};
function defaultPlans() {
  const out = [];
  for (const g of PLAN_GROUPS) for (const f of [1, 2, 3]) PLAN_TERMS.forEach((t, k) => out.push({
    id: `kaf-${g.code}${f}${t.code}`, group: g.name, freq: f, term: t.name,
    name: `${g.name} ${f}x semana — ${t.name}`, price: PRICES_2026[g.code][f][k], classes: f * 4,
    description: `${g.note[0].toUpperCase() + g.note.slice(1)}. ${t.note}.`, active: true
  }));
  return out;
}
function defaultMethods() {
  return [
    { id: 'm-card',     name: 'Cartão',        icon: '💳', active: true },
    { id: 'm-cash',     name: 'Dinheiro',      icon: '💶', active: true },
    { id: 'm-transfer', name: 'Transferência', icon: '🏦', active: true },
    { id: 'm-pix',      name: 'PIX',           icon: '📱', active: true },
    { id: 'm-bizum',    name: 'Bizum',         icon: '📲', active: false },
    { id: 'm-other',    name: 'Outro',         icon: '🔹', active: true }
  ];
}
function newStudent(o = {}) {
  return Object.assign({
    id: uid(), name: '', phone: '', email: '', planId: '', amount: 0, dueDay: null,
    startDate: '', chargeFrom: '', endDate: '', pausedFrom: '', status: 'active',
    preferredMethod: '', classDays: [], notes: '', createdAt: todayISO()
  }, o);
}
function defaultState() {
  return {
    version: 1,
    dataset: 'planilha',
    settings: { currency: 'BRL', currencySet: false, makeupValidityDays: 'month', noshowGivesMakeup: false, blockMakeupIfLate: true },
    plansVersion: 2,
    plans: defaultPlans(),
    methods: defaultMethods(),
    students: SHEET_NAMES.map(n => newStudent({ name: n })),
    invoices: [],
    attendance: [],
    makeups: []
  };
}
function migrate() {
  const d = defaultState();
  S.settings = Object.assign({}, d.settings, S.settings || {});
  for (const k of ['plans', 'methods', 'students', 'invoices', 'attendance', 'makeups']) if (!Array.isArray(S[k])) S[k] = k === 'plans' ? d.plans : k === 'methods' ? d.methods : [];
  S.students.forEach(s => { if (!Array.isArray(s.classDays)) s.classDays = []; });
  if ((S.plansVersion || 1) < 2) {
    // troca os planos de exemplo pela tabela "Valores 2026" (mantém planos em uso ou criados pela usuária)
    const used = new Set(S.students.map(s => s.planId));
    const examples = ['plan-4', 'plan-8', 'plan-ilim'];
    S.plans = [...defaultPlans(), ...S.plans.filter(p => !examples.includes(p.id) || used.has(p.id)).map(p => Object.assign({ group: 'Outros' }, p))];
    if (!S.settings.currencySet) S.settings.currency = 'BRL';
    if (S.settings.makeupValidityDays === 30) S.settings.makeupValidityDays = 'month';
    S.plansVersion = 2;
  }
}
let storageOk = true;
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) { S = JSON.parse(raw); migrate(); return; }
  } catch (e) { storageOk = false; }
  S = defaultState();
  save();
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); storageOk = true; }
  catch (e) { storageOk = false; if (typeof toast === 'function') toast('Atenção: este navegador não permitiu salvar os dados.'); }
}

/* ---------------- consultas ---------------- */
const student = id => S.students.find(s => s.id === id);
const plan = id => S.plans.find(p => p.id === id);
const method = id => S.methods.find(m => m.id === id);
const methodLabel = id => { const m = method(id); return m ? m.name : ''; };
const activeStudents = () => S.students.filter(s => s.status === 'active');
const isConfigured = s => Number(s.amount) > 0 && Number(s.dueDay) >= 1 && !!s.chargeFrom;
const needsSetup = () => S.students.filter(s => s.status === 'active' && !isConfigured(s));

/* ---------------- mensalidades ---------------- */
function eligible(s, m) {
  if (!isConfigured(s) || m < s.chargeFrom) return false;
  if (s.status === 'inactive') { if (!s.endDate || m > ymOf(s.endDate)) return false; }
  if (s.status === 'paused' && s.pausedFrom && m >= ymOf(s.pausedFrom)) return false;
  return true;
}
function makeInvoice(s, m) {
  return { id: uid(), studentId: s.id, studentName: s.name, month: m, dueDate: dueDateFor(m, s.dueDay),
    amount: Number(s.amount), status: 'open', paidDate: '', methodId: '', notes: '', cancelReason: '', createdAt: todayISO() };
}
/* Cria automaticamente as mensalidades até o mês informado (padrão: mês atual).
   O valor é copiado para a mensalidade no momento da criação — o histórico nunca muda depois. */
function ensureInvoices(upto = curYm()) {
  const have = new Set(S.invoices.map(i => i.studentId + '|' + i.month));
  let added = 0;
  for (const s of S.students) {
    if (!isConfigured(s)) continue;
    for (let m = s.chargeFrom; m <= upto; m = addMonths(m, 1)) {
      if (eligible(s, m) && !have.has(s.id + '|' + m)) { S.invoices.push(makeInvoice(s, m)); have.add(s.id + '|' + m); added++; }
    }
  }
  return added;
}
/* Meses futuros são mostrados como previsão (calculada a partir do cadastro atual) até chegarem. */
function invoicesFor(m) {
  const list = S.invoices.filter(i => i.month === m);
  if (m > curYm()) {
    const have = new Set(list.map(i => i.studentId));
    for (const s of S.students) if (!have.has(s.id) && eligible(s, m)) list.push(Object.assign(makeInvoice(s, m), { id: `v:${s.id}:${m}`, virtual: true }));
  }
  return list;
}
function getInvoice(id) {
  if (id.startsWith('v:')) {
    const [, sid, m] = id.split(':'); const s = student(sid);
    return s ? Object.assign(makeInvoice(s, m), { id, virtual: true }) : null;
  }
  return S.invoices.find(i => i.id === id) || null;
}
function materialize(inv) {
  if (!inv.virtual) return inv;
  const real = Object.assign({}, inv, { id: uid() }); delete real.virtual;
  S.invoices.push(real); return real;
}
function invStatus(i) {
  if (i.status === 'paid') return 'paid';
  if (i.status === 'canceled') return 'na';
  const t = todayISO();
  if (i.dueDate < t) return 'late';
  if (i.dueDate === t) return 'today';
  return 'soon';
}
function summary(m) {
  const all = invoicesFor(m);
  const l = all.filter(i => i.status !== 'canceled');
  const r = { expected: 0, received: 0, pending: 0, late: 0, count: l.length, paidCount: 0, lateCount: 0,
    students: new Set(l.map(i => i.studentId)).size, n: { paid: 0, soon: 0, today: 0, late: 0, na: all.length - l.length }, byMethod: {} };
  for (const i of l) {
    const st = invStatus(i); r.expected += i.amount; r.n[st]++;
    if (st === 'paid') { r.received += i.amount; r.paidCount++; r.byMethod[i.methodId] = (r.byMethod[i.methodId] || 0) + i.amount; }
    else if (st === 'late') { r.late += i.amount; r.lateCount++; }
    else r.pending += i.amount;
  }
  r.open = r.expected - r.received;
  r.pct = r.expected ? Math.round(r.received / r.expected * 100) : 0;
  r.ticket = r.students ? r.expected / r.students : 0;
  return r;
}
const overdueAll = () => S.invoices.filter(i => invStatus(i) === 'late');
const studentInvoices = sid => S.invoices.filter(i => i.studentId === sid).sort((a, b) => b.month.localeCompare(a.month));
function monthsRange() {
  let first = curYm();
  for (const i of S.invoices) if (i.month < first) first = i.month;
  const out = []; for (let m = first; m <= curYm(); m = addMonths(m, 1)) out.push(m);
  return out;
}

/* ---------------- presença e reposições ---------------- */
const attendanceOn = date => S.attendance.filter(a => a.date === date);
const attOf = (sid, date) => S.attendance.find(a => a.studentId === sid && a.date === date);
function mkStatus(mk) {
  if (mk.status === 'done' || mk.status === 'canceled' || mk.status === 'missed') return mk.status;
  if (mk.expiresOn && mk.expiresOn < todayISO()) return 'expired';
  return mk.status; // pending | scheduled
}
const availableMakeups = sid => S.makeups.filter(mk => mk.studentId === sid && ['pending', 'scheduled'].includes(mkStatus(mk)))
  .sort((a, b) => a.absenceDate.localeCompare(b.absenceDate));
/* Regra do studio: faltas avisadas só podem ser repostas no mesmo mês */
function makeupDeadline(absenceDate) {
  const v = S.settings.makeupValidityDays;
  if (v === 'month' || !Number(v)) return dueDateFor(ymOf(absenceDate), 31);
  return addDays(absenceDate, Number(v));
}
const hasOverdue = sid => S.invoices.some(i => i.studentId === sid && invStatus(i) === 'late');
function createMakeup(sid, absenceDate, reason, fromAttendanceId) {
  const mk = { id: uid(), studentId: sid, studentName: (student(sid) || {}).name || '', absenceDate, reason: reason || '',
    expiresOn: makeupDeadline(absenceDate), scheduledDate: '', doneDate: '',
    status: 'pending', fromAttendanceId: fromAttendanceId || '', createdAt: todayISO() };
  S.makeups.push(mk); return mk;
}
/* Marca presença. Tocar de novo no mesmo botão desfaz. Retorna mensagem para o aviso. */
function setAttendance(sid, date, type) {
  const prev = attOf(sid, date);
  let msg = '';
  if (prev) {
    // desfaz efeitos do registro anterior
    if (prev.type === 'absent' || prev.type === 'noshow') {
      const mk = S.makeups.find(x => x.fromAttendanceId === prev.id);
      if (mk && mk.status === 'pending') S.makeups = S.makeups.filter(x => x !== mk);
      else if (mk) mk.fromAttendanceId = '';
    }
    if (prev.type === 'makeup' && prev.makeupId) {
      const mk = S.makeups.find(x => x.id === prev.makeupId);
      if (mk) { mk.status = mk.scheduledDate ? 'scheduled' : 'pending'; mk.doneDate = ''; }
    }
    S.attendance = S.attendance.filter(a => a !== prev);
    if (prev.type === type) return 'Registro removido';
  }
  const rec = { id: uid(), studentId: sid, date, type, makeupId: '', note: '' };
  S.attendance.push(rec);
  if (type === 'absent' || (type === 'noshow' && S.settings.noshowGivesMakeup)) {
    createMakeup(sid, date, type === 'absent' ? 'Falta avisada' : 'Falta sem aviso', rec.id);
    msg = `Falta registrada — pode repor até ${fmtDM(makeupDeadline(date))}`;
  } else if (type === 'makeup') {
    const mk = availableMakeups(sid)[0];
    if (mk) { mk.status = 'done'; mk.doneDate = date; rec.makeupId = mk.id; msg = `Reposição da falta de ${fmtDM(mk.absenceDate)} realizada`; }
    else msg = 'Reposição registrada (não havia reposição pendente)';
  } else msg = type === 'present' ? 'Presença registrada' : 'Falta sem reposição registrada';
  return msg;
}
function classStats(sid, ym) {
  const recs = S.attendance.filter(a => a.studentId === sid && ymOf(a.date) === ym);
  const s = student(sid); const p = s && plan(s.planId);
  return {
    contracted: p ? p.classes : 0,
    done: recs.filter(a => a.type === 'present' || a.type === 'makeup').length,
    absences: recs.filter(a => a.type === 'absent' || a.type === 'noshow').length,
    makeups: availableMakeups(sid).length
  };
}

/* ---------------- dados de demonstração ---------------- */
function buildDemo() {
  const st = defaultState();
  st.dataset = 'demo'; st.students = []; st.invoices = []; st.attendance = []; st.makeups = [];
  const prevS = S; S = st;
  const cur = curYm(), t = todayISO(), d = Number(t.slice(8, 10));
  const start = addMonths(cur, -5);
  const before = d > 1 ? Math.max(1, d - 1) : null;
  const defs = [
    ['Maria Silva', 'kaf-g2m', 5, 'm-pix', 'paid'],          ['Ana Costa', 'kaf-g1m', before || 3, 'm-transfer', 'late'],
    ['Julia Santos', 'kaf-d2s', 15, 'm-card', 'soon'],     ['Beatriz Lima', 'kaf-g2m', d, 'm-pix', 'today'],
    ['Carla Mendes', 'kaf-g1m', d, 'm-cash', 'today'],        ['Fernanda Rocha', 'kaf-g2m', 20, 'm-card', 'soon'],
    ['Patrícia Alves', 'kaf-g3a', before || 1, 'm-transfer', 'paidcur'], ['Camila Duarte', 'kaf-g1m', 25, 'm-pix', 'soon'],
    ['Renata Moura', 'kaf-g2m', before || 2, 'm-cash', 'late'], ['Luciana Prado', 'kaf-g2m', 10, 'm-card', 'soon'],
    ['Helena Vieira', 'kaf-g1m', 28, 'm-pix', 'soon'],        ['Sofia Martins', 'kaf-p1a', 12, 'm-transfer', 'early'],
    ['Isabela Nunes', 'kaf-g2s', 18, 'm-card', 'soon'],       ['Gabriela Teixeira', 'kaf-g1m', 8, 'm-pix', 'inactive']
  ];
  const days = [[1, 3], [2, 4], [1, 3, 5], [2, 4], [1], [3, 5], [1, 2, 3, 4, 5], [4], [1, 3], [2, 5], [6], [1, 3, 5], [2, 4], [3]];
  defs.forEach(([name, pid, due, mid], i) => {
    const p = plan(pid);
    st.students.push(newStudent({ name, planId: pid, amount: p.price, dueDay: due, preferredMethod: mid, startDate: `${start}-01`,
      chargeFrom: start, classDays: days[i],
      phone: `+34 6${String(10000000 + i * 7654321).slice(0, 8)}`, email: norm(name).replace(/\s+/g, '.') + '@exemplo.com' }));
  });
  // Maria pagava R$ 550 até 3 meses atrás; depois passou para R$ 600 (Grupo 2x semana — Mensal)
  const maria = st.students[0]; maria.amount = 550; maria.planId = '';
  ensureInvoices(addMonths(cur, -3));
  maria.amount = 600; maria.planId = 'kaf-g2m';
  const gab = st.students[13]; gab.status = 'inactive'; gab.endDate = dueDateFor(addMonths(cur, -2), 28);
  ensureInvoices(cur);
  const ms = ['m-pix', 'm-card', 'm-transfer', 'm-cash'];
  st.invoices.forEach((inv, k) => {
    const s = student(inv.studentId); const kind = defs[st.students.indexOf(s)][4];
    const payOn = () => { const pd = addDays(inv.dueDate, -(k % 3)); return pd < `${inv.month}-01` ? `${inv.month}-01` : pd; };
    let pay = false;
    if (inv.month < cur) {
      pay = true;
      if (kind === 'late' && s.name === 'Ana Costa' && inv.month === addMonths(cur, -1)) pay = false;
      if (s.name === 'Renata Moura' && inv.month === addMonths(cur, -2)) pay = false;
    } else {
      if (kind === 'paid' && inv.dueDate <= t) pay = true;
      if (kind === 'paidcur' || kind === 'early') pay = true;
      if (kind === 'paid' && inv.dueDate > t) pay = true; // pagou adiantado
    }
    if (pay) { inv.status = 'paid'; inv.paidDate = payOn() > t ? t : payOn(); inv.methodId = k % 5 === 0 ? s.preferredMethod : ms[k % 4]; }
  });
  // presenças das últimas 3 semanas
  for (let back = 21; back >= 1; back--) {
    const date = addDays(t, -back); const wd = weekdayOf(date);
    st.students.forEach((s, i) => {
      if (s.status !== 'active' || !s.classDays.includes(wd)) return;
      const r = (back * 7 + i * 3) % 11;
      const type = r === 0 ? 'absent' : r === 5 ? 'noshow' : 'present';
      setAttendance(s.id, date, type);
    });
  }
  // uma reposição agendada e uma expirada
  const pend = st.makeups.filter(m => m.status === 'pending');
  if (pend[0]) { pend[0].status = 'scheduled'; pend[0].scheduledDate = addDays(t, 2); }
  const old = createMakeup(st.students[2].id, addDays(t, -45), 'Viagem', '');
  old.reason = 'Viagem';
  S = prevS;
  return st;
}

/* ---------------- exportação ---------------- */
function download(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
function toCSV(headers, rows) {
  const cell = v => {
    if (typeof v === 'number') return String(v).replace('.', ',');
    const s = String(v ?? ''); return /[;"\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return '\ufeff' + [headers, ...rows].map(r => r.map(cell).join(';')).join('\r\n');
}
/* Gerador XLSX real (Office Open XML) sem bibliotecas externas */
const CRC_TABLE = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(buf) { let c = 0xFFFFFFFF; for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function zipStore(files) {
  const enc = new TextEncoder(); const parts = []; const central = []; let offset = 0;
  for (const f of files) {
    const name = enc.encode(f.name); const data = typeof f.data === 'string' ? enc.encode(f.data) : f.data; const crc = crc32(data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
    lh.setUint16(10, 0, true); lh.setUint16(12, 33, true); lh.setUint32(14, crc, true); lh.setUint32(18, data.length, true);
    lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
    parts.push(new Uint8Array(lh.buffer), name, data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true);
    ch.setUint16(10, 0, true); ch.setUint16(12, 0, true); ch.setUint16(14, 33, true); ch.setUint32(16, crc, true);
    ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, name.length, true);
    ch.setUint16(30, 0, true); ch.setUint16(32, 0, true); ch.setUint16(34, 0, true); ch.setUint16(36, 0, true);
    ch.setUint32(38, 0, true); ch.setUint32(42, offset, true);
    central.push(new Uint8Array(ch.buffer), name);
    offset += 30 + name.length + data.length;
  }
  const cdSize = central.reduce((a, b) => a + b.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
  end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
  return new Blob([...parts, ...central, new Uint8Array(end.buffer)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}
function xlsxBlob(sheetName, headers, rows, moneyCols = []) {
  const x = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
  const col = i => { let s = ''; i++; while (i) { const r = (i - 1) % 26; s = String.fromCharCode(65 + r) + s; i = Math.floor((i - 1) / 26); } return s; };
  const all = [headers, ...rows];
  const widths = headers.map((h, ci) => Math.min(48, Math.max(10, ...all.map(r => String(r[ci] ?? '').length + 2))));
  const sheetRows = all.map((r, ri) => `<row r="${ri + 1}">` + r.map((v, ci) => {
    const ref = col(ci) + (ri + 1);
    if (ri === 0) return `<c r="${ref}" t="inlineStr" s="1"><is><t>${x(v)}</t></is></c>`;
    if (typeof v === 'number') return `<c r="${ref}"${moneyCols.includes(ci) ? ' s="2"' : ''}><v>${v}</v></c>`;
    return `<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${x(v)}</t></is></c>`;
  }).join('') + '</row>').join('');
  const sheet = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>${widths.map((w, i) => `<col min="${i + 1}" max="${i + 1}" width="${w}" customWidth="1"/>`).join('')}</cols><sheetData>${sheetRows}</sheetData></worksheet>`;
  const name = x(sheetName).slice(0, 31).replace(/[\\/?*[\]:]/g, '-');
  return zipStore([
    { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>' },
    { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
    { name: 'xl/workbook.xml', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${name}" sheetId="1" r:id="rId1"/></sheets></workbook>` },
    { name: 'xl/_rels/workbook.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>' },
    { name: 'xl/styles.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Arial"/></font><font><b/><sz val="11"/><color rgb="FF294582"/><name val="Arial"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFEAEFF8"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>' },
    { name: 'xl/worksheets/sheet1.xml', data: sheet }
  ]);
}
/* Conjuntos exportáveis */
function exportData(kind, month) {
  const cs = (CURRENCIES[S.settings.currency] || CURRENCIES.EUR).sym;
  if (kind === 'month') {
    const list = invoicesFor(month).sort((a, b) => a.studentName.localeCompare(b.studentName, 'pt'));
    return { title: `Mensalidades — ${monthLabel(month)}`, file: `mensalidades-${month}`, money: [3],
      headers: ['Aluna', 'Mês', 'Vencimento', `Valor (${cs})`, 'Status', 'Data do pagamento', 'Forma de pagamento', 'Observações'],
      rows: list.map(i => [i.studentName, monthLabel(i.month), fmtDMY(i.dueDate), i.amount, INV_STATUS[invStatus(i)].label, fmtDMY(i.paidDate), methodLabel(i.methodId), i.notes || '']) };
  }
  if (kind === 'payments') {
    const list = S.invoices.filter(i => i.status === 'paid').sort((a, b) => b.paidDate.localeCompare(a.paidDate));
    return { title: 'Pagamentos registrados', file: 'pagamentos', money: [3],
      headers: ['Data do pagamento', 'Aluna', 'Referente a', `Valor (${cs})`, 'Forma de pagamento', 'Observações'],
      rows: list.map(i => [fmtDMY(i.paidDate), i.studentName, monthLabel(i.month), i.amount, methodLabel(i.methodId), i.notes || '']) };
  }
  if (kind === 'history') {
    const rows = monthsRange().map(m => { const r = summary(m); return [monthLabel(m), r.expected, r.received, r.open, r.late, r.paidCount, r.students, r.pct / 100]; });
    return { title: 'Histórico financeiro', file: 'historico-financeiro', money: [1, 2, 3, 4],
      headers: ['Mês', `Previsto (${cs})`, `Recebido (${cs})`, `Em aberto (${cs})`, `Em atraso (${cs})`, 'Pagamentos', 'Alunas', '% recebido'],
      rows, pctCol: 7 };
  }
  if (kind === 'students') {
    const list = [...S.students].sort((a, b) => a.name.localeCompare(b.name, 'pt'));
    return { title: 'Lista de alunas', file: 'alunas', money: [4],
      headers: ['Nome', 'Telefone', 'E-mail', 'Plano', `Mensalidade (${cs})`, 'Dia do vencimento', 'Dias de aula', 'Data de início', 'Forma preferida', 'Status', 'Observações'],
      rows: list.map(s => [s.name, s.phone, s.email, (plan(s.planId) || {}).name || '', Number(s.amount) || 0, s.dueDay || '', s.classDays.map(d => WEEKDAYS[d]).join(', '), fmtDMY(s.startDate), methodLabel(s.preferredMethod), STU_STATUS[s.status], s.notes || '']) };
  }
  if (kind === 'makeups') {
    const list = [...S.makeups].sort((a, b) => b.absenceDate.localeCompare(a.absenceDate));
    return { title: 'Reposições', file: 'reposicoes', money: [],
      headers: ['Aluna', 'Data da falta', 'Motivo', 'Disponível até', 'Data da reposição', 'Status'],
      rows: list.map(mk => [(student(mk.studentId) || {}).name || mk.studentName, fmtDMY(mk.absenceDate), mk.reason, fmtDMY(mk.expiresOn), fmtDMY(mk.doneDate || mk.scheduledDate), MK_STATUS[mkStatus(mk)]]) };
  }
}
