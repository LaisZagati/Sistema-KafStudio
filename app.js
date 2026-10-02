/* KAF Studio — interface */
"use strict";

/* ---------------- ícones ---------------- */
const I = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19"/><path d="M6.5 15h4"/></svg>',
  users:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.8a3.3 3.3 0 0 1 0 6.4"/><path d="M18 14.8c1.9.7 3.1 2.4 3.5 5.2"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/><path d="m9 15 2 2 4-4"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  chevL:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevR:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  filter:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
};
const ic = (n, cls = "ico") => `<span class="${cls}">${I[n]}</span>`;

const MOBILE_TABS = [
  ["home", "Início", "home"],
  ["inv", "Pagamentos", "card"],
  ["classes", "Aulas", "cal"],
  ["students", "Alunas", "users"],
  ["more", "Mais", "more"],
];
const SIDE_TABS = [
  ["home", "Início", "home"],
  ["inv", "Mensalidades", "card"],
  ["students", "Alunas", "users"],
  ["classes", "Aulas", "cal"],
  ["finance", "Financeiro", "chart"],
  ["more", "Configurações", "gear"],
];

const ui = {
  tab: "home",
  month: curYm(),
  invFilter: "all",
  invQ: "",
  invExtra: { plan: "", method: "", stu: "" },
  stuFilter: "active",
  stuQ: "",
  studentId: null,
  from: "students",
  editField: null,
  classSeg: "att",
  attDate: todayISO(),
  attScope: "day",
  attQ: "",
  mkFilter: "open",
  setupSkip: new Set(),
};

/* ---------------- shell ---------------- */
function renderNav() {
  const active = ui.tab === "student" ? ui.from : ui.tab;
  $("#tabbar").innerHTML = MOBILE_TABS.map(([id, label, icon]) => {
    const on = active === id || (id === "more" && active === "finance");
    return `<button class="tab ${on ? "active" : ""}" data-action="tab" data-tab="${id}" type="button" ${on ? 'aria-current="page"' : ""}>${ic(icon)}<span>${label}</span></button>`;
  }).join("");
  $("#side-nav").innerHTML = SIDE_TABS.map(
    ([id, label, icon]) =>
      `<button class="side-link ${active === id ? "active" : ""}" data-action="tab" data-tab="${id}" type="button">${ic(icon)}<span>${label}</span></button>`,
  ).join("");
  const n =
    overdueAll().length +
    invoicesFor(curYm()).filter((i) => invStatus(i) === "today").length;
  $$("[data-badge]").forEach((b) => {
    b.hidden = !n;
    b.textContent = n > 99 ? "99+" : n;
  });
  $$("[data-icon]").forEach((el) => {
    el.innerHTML = I[el.dataset.icon];
  });
}
function render(opts = {}) {
  ensureInvoices();
  renderNav();
  const v = VIEWS[ui.tab] || VIEWS.home;
  $("#view").innerHTML = v();
  if (opts.top !== false) window.scrollTo(0, 0);
}
function go(tab, extra = {}) {
  Object.assign(ui, extra);
  ui.tab = tab;
  ui.editField = null;
  render();
}
function refresh() {
  const y = window.scrollY;
  render({ top: false });
  window.scrollTo(0, y);
}
let toastTimer,
  undoSnap = null;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.remove("has-undo");
  t.classList.add("show");
  undoSnap = null;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}
/* Tudo o que muda dados mostra “Desfazer” por alguns segundos */
const undoPoint = () => JSON.stringify(S);
function toastUndo(msg, snap) {
  const t = $("#toast");
  t.innerHTML = `<span>${esc(msg)}</span><button type="button" data-action="undo">Desfazer</button>`;
  t.classList.add("show", "has-undo");
  undoSnap = snap;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove("show");
    undoSnap = null;
  }, 7000);
}

/* ---------------- componentes ---------------- */
function monthSwitch(stack = true) {
  const m = ui.month;
  const sw = `<div class="month-switch">
    <button type="button" data-action="month-step" data-n="-1" aria-label="Mês anterior">${ic("chevL")}<span>${monthShort(addMonths(m, -1))}</span></button>
    <button type="button" class="ms-label" data-action="month-pick">${monthLabel(m)}</button>
    <button type="button" data-action="month-step" data-n="1" aria-label="Próximo mês"><span>${monthShort(addMonths(m, 1))}</span>${ic("chevR")}</button>
  </div>`;
  return stack ? `<div class="head-stack">${sw}</div>` : sw;
}
const pill = (st, label) =>
  `<span class="pill ${st}">${esc(label || (INV_STATUS[st] || {}).label || st)}</span>`;
function searchBox(id, value, ph) {
  return `<div class="search">${ic("search")}<input id="${id}" type="search" inputmode="search" autocomplete="off" placeholder="${ph}" value="${esc(value)}" aria-label="${ph}">
    ${value ? `<button class="clear" type="button" data-action="clear-q" data-for="${id}" aria-label="Limpar">×</button>` : ""}</div>`;
}
function emptyState(title, text, btn = "") {
  return `<div class="empty"><b>${title}</b>${text}${btn}</div>`;
}
function setupBanner() {
  const n = needsSetup().length;
  if (!n) return "";
  return `<div class="banner"><div class="txt"><b>${n} ${n === 1 ? "aluna precisa" : "alunas precisam"} de plano e vencimento</b>
    <small>Sem isso as mensalidades não são criadas automaticamente.</small></div>
    <button class="btn btn-primary btn-sm" type="button" data-action="setup">Configurar</button></div>`;
}

/* ---------------- INÍCIO ---------------- */
function ringSVG(pct) {
  const r = 50,
    c = 2 * Math.PI * r,
    p = Math.max(0, Math.min(100, pct));
  return `<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="${r}" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="11"/>
    <circle cx="60" cy="60" r="${r}" fill="none" stroke="#A3C81A" stroke-width="11" stroke-linecap="round" stroke-dasharray="${((c * p) / 100).toFixed(1)} ${c.toFixed(1)}"/></svg>`;
}
function unpaidTable(m) {
  const list = invoicesFor(m)
    .filter((i) => ["late", "today", "soon"].includes(invStatus(i)))
    .sort(
      (a, b) =>
        ST_ORDER[invStatus(a)] - ST_ORDER[invStatus(b)] ||
        a.dueDate.localeCompare(b.dueDate),
    );
  if (!list.length) return "";
  const shown = list.slice(0, 10);
  return `<section class="section desk-only"><div class="section-title"><h2>Quem ainda não pagou</h2><button class="link" type="button" data-action="goto-inv" data-filter="all">Ver todas (${list.length})</button></div>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>Aluna</th><th>Vencimento</th><th class="r">Valor</th><th>Situação</th><th></th></tr></thead><tbody>
    ${shown
      .map(
        (
          i,
        ) => `<tr data-action="open-inv" data-id="${esc(i.id)}"><td><b>${esc(i.studentName)}</b></td><td>${fmtDM(i.dueDate)}</td><td class="r num">${money(i.amount)}</td><td>${pill(invStatus(i))}</td>
      <td class="r"><button class="btn btn-soft btn-sm" type="button" data-action="pay" data-id="${esc(i.id)}">Registrar</button></td></tr>`,
      )
      .join("")}</tbody></table></div></section>`;
}
function viewHome() {
  const m = ui.month,
    r = summary(m),
    isCur = m === curYm();
  const act = activeStudents().length;
  const hero = r.expected
    ? `
    <section class="hero" aria-label="Recebido no mês">
      <div class="ring">${ringSVG(r.pct)}<div class="pct"><div><b class="num">${r.pct}%</b><small>recebido</small></div></div></div>
      <div class="hero-text">
        <div class="big num">${money(r.received)}</div>
        <div class="of">recebidos de <b class="num">${money(r.expected)}</b> previstos</div>
        ${r.open > 0 ? `<div class="left num">Faltam ${money(r.open)}</div>` : `<div class="left">Mês 100% recebido</div>`}
      </div>
    </section>`
    : `
    <section class="hero hero-empty"><div class="hero-text"><div class="big">${money(0)}</div>
      <div class="of">${needsSetup().length ? "Defina plano e vencimento das alunas para gerar as mensalidades deste mês." : "Nenhuma mensalidade neste mês."}</div></div></section>`;

  const stats = `<section class="stats">
    <button class="stat" type="button" data-action="goto-inv" data-filter="all"><span class="lbl"><i class="dot soon"></i>Pendente</span><span class="val num">${money(r.pending)}</span><span class="hint">${r.n.soon + r.n.today} a vencer</span></button>
    <button class="stat" type="button" data-action="goto-inv" data-filter="late"><span class="lbl"><i class="dot late"></i>Em atraso</span><span class="val num">${money(r.late)}</span><span class="hint">${r.lateCount} ${r.lateCount === 1 ? "mensalidade" : "mensalidades"}</span></button>
    <button class="stat" type="button" data-action="goto-inv" data-filter="paid"><span class="lbl"><i class="dot paid"></i>Pagamentos</span><span class="val num">${r.paidCount}<small style="font-size:15px;color:var(--muted);font-weight:700"> / ${r.count}</small></span><span class="hint">realizados no mês</span></button>
    <button class="stat" type="button" data-action="tab" data-tab="students"><span class="lbl">Alunas ativas</span><span class="val num">${act}</span><span class="hint">${S.students.length} no cadastro</span></button>
  </section>`;

  let attention = "";
  if (isCur) {
    const late = overdueAll(),
      lateAmt = late.reduce((a, i) => a + i.amount, 0);
    const t = todayISO();
    const mkToday = S.makeups.filter(
      (mk) => mkStatus(mk) === "scheduled" && mk.scheduledDate === t,
    ).length;
    const mkPend = S.makeups.filter((mk) => mkStatus(mk) === "pending").length;
    const dayList = studentsForDay(t);
    const marked = attendanceOn(t).length;
    const row = (
      dot,
      n,
      label,
      sub,
      action,
      data = "",
    ) => `<button class="row-btn" type="button" data-action="${action}" ${data}>
      <i class="dot ${dot}"></i><span class="count num">${n}</span><span class="txt"><b>${label}</b>${sub ? `<small>${sub}</small>` : ""}</span>${ic("chevR", "ico chev")}</button>`;
    attention = `<section class="section"><div class="section-title"><h2>Atenção</h2></div><div class="list-card">
      ${row("late", late.length, late.length === 1 ? "pagamento atrasado" : "pagamentos atrasados", late.length ? money(lateAmt) + " em aberto" : "Tudo em dia", "goto-inv", 'data-filter="late"')}
      ${row("today", r.n.today, r.n.today === 1 ? "vence hoje" : "vencem hoje", "", "goto-inv", 'data-filter="today"')}
      ${row("soon", r.n.soon, r.n.soon === 1 ? "próximo pagamento" : "próximos pagamentos", "ainda neste mês", "goto-inv", 'data-filter="soon"')}
      ${row("sched", mkToday, mkToday === 1 ? "reposição agendada hoje" : "reposições agendadas hoje", mkPend ? `${mkPend} ${mkPend === 1 ? "pendente" : "pendentes"} sem data` : "", "goto-mk")}
      ${row("na", dayList.length, "alunas na turma de hoje", `${marked} ${marked === 1 ? "presença marcada" : "presenças marcadas"}`, "goto-att")}
    </div></section>`;
  }
  return `
    <div class="page-head"><div><h1>Dashboard</h1><p class="sub">${isCur ? "Situação de hoje, " + fmtDM(todayISO()) : "Resumo do mês"}</p></div>${monthSwitch()}</div>
    ${setupBanner()}
    <div class="dash-grid"><div>${hero}${stats}${unpaidTable(m)}</div><div>${attention}
      <section class="section"><div class="section-title"><h2>Resumo de ${monthName(m)}</h2><button class="link" type="button" data-action="tab" data-tab="finance">Financeiro</button></div>
      <div class="list-card">
        <div class="row-btn" style="cursor:default"><span class="txt">Faturamento previsto</span><b class="num">${money(r.expected)}</b></div>
        <div class="row-btn" style="cursor:default"><span class="txt">Recebido</span><b class="num">${money(r.received)}</b></div>
        <div class="row-btn" style="cursor:default"><span class="txt">Ticket médio por aluna</span><b class="num">${money(r.ticket)}</b></div>
      </div></section></div></div>`;
}

/* ---------------- MENSALIDADES ---------------- */
const ST_ORDER = { late: 0, today: 1, soon: 2, paid: 3, na: 4 };
function matchQ(sid, name, q) {
  if (!q) return true;
  const s = student(sid);
  const nq = norm(q),
    dq = q.replace(/\D/g, "");
  return (
    norm(name).includes(nq) ||
    (s &&
      (norm(s.email).includes(nq) ||
        (dq.length >= 3 && String(s.phone).replace(/\D/g, "").includes(dq))))
  );
}
function passExtra(i) {
  const x = ui.invExtra,
    s = student(i.studentId);
  if (x.plan && (!s || s.planId !== x.plan)) return false;
  if (x.method && i.methodId !== x.method) return false;
  if (x.stu && (!s || s.status !== x.stu)) return false;
  return true;
}
function invCard(i, showMonth = false) {
  const st = invStatus(i),
    m = method(i.methodId);
  let note = "";
  if (st === "paid")
    note = `<div class="paid-row"><p class="note paid">Pago em ${fmtDM(i.paidDate)}${m ? " via " + esc(m.name) : ""}</p><button class="undo-link" type="button" data-action="inv-unpay" data-id="${esc(i.id)}">↺ Desfazer</button></div>`;
  else if (st === "late") {
    const d = daysBetween(i.dueDate, todayISO());
    note = `<p class="note late">${d} ${d === 1 ? "dia" : "dias"} em atraso</p>`;
  } else if (st === "today") note = `<p class="note today">Vence hoje</p>`;
  else if (st === "soon") {
    const d = daysBetween(todayISO(), i.dueDate);
    note = `<p class="note muted">Vence em ${d} ${d === 1 ? "dia" : "dias"}</p>`;
  } else
    note = `<p class="note muted">Não cobrar${i.notes ? " — " + esc(i.notes) : ""}</p>`;
  return `<article class="card ${st === "na" ? "dim" : ""}" data-action="open-inv" data-id="${esc(i.id)}" role="button" tabindex="0">
    <div class="card-top"><div><h3>${esc(i.studentName)}</h3>
      <p class="meta"><b class="num">${money(i.amount)}</b> · vence ${fmtDM(i.dueDate)}${showMonth ? ` (${monthName(i.month)})` : ""}</p></div>${pill(st)}</div>
    ${note}
    ${st !== "paid" && st !== "na" ? `<button class="btn btn-pay ${st === "soon" ? "btn-soft" : ""}" type="button" data-action="pay" data-id="${esc(i.id)}">Registrar pagamento</button>` : ""}
  </article>`;
}
function invDynHTML() {
  const base = invoicesFor(ui.month).filter(
    (i) => matchQ(i.studentId, i.studentName, ui.invQ) && passExtra(i),
  );
  const cnt = { all: 0, paid: 0, soon: 0, today: 0, late: 0, na: 0 };
  base.forEach((i) => {
    const s = invStatus(i);
    cnt[s]++;
    if (s !== "na") cnt.all++;
  });
  const isCur = ui.month === curYm();
  const prior = isCur
    ? overdueAll().filter(
        (i) =>
          i.month < ui.month &&
          matchQ(i.studentId, i.studentName, ui.invQ) &&
          passExtra(i),
      )
    : [];
  const chips = [
    ["all", "Todas", ""],
    ["paid", "Pagas", "paid"],
    ["soon", "A vencer", "soon"],
    ["today", "Vencem hoje", "today"],
    ["late", "Atrasadas", "late"],
  ];
  if (cnt.na) chips.push(["na", "Não aplicável", "na"]);
  const lateCount = cnt.late + prior.length;
  const chipHTML = `<div class="chips" role="tablist">${chips
    .map(
      ([
        k,
        l,
        d,
      ]) => `<button class="chip ${ui.invFilter === k ? "on" : ""}" type="button" data-action="inv-filter" data-f="${k}" role="tab" aria-selected="${ui.invFilter === k}">
    ${d ? `<i class="dot ${d}"></i>` : ""}${l}<span class="n">${k === "late" ? lateCount : cnt[k]}</span></button>`,
    )
    .join("")}
    <button class="chip" type="button" data-action="inv-extra">${ic("filter")}Filtros${Object.values(ui.invExtra).filter(Boolean).length ? `<span class="n">${Object.values(ui.invExtra).filter(Boolean).length}</span>` : ""}</button></div>`;
  let list = base.filter((i) =>
    ui.invFilter === "all"
      ? invStatus(i) !== "na"
      : invStatus(i) === ui.invFilter,
  );
  list.sort(
    (a, b) =>
      ST_ORDER[invStatus(a)] - ST_ORDER[invStatus(b)] ||
      a.dueDate.localeCompare(b.dueDate) ||
      a.studentName.localeCompare(b.studentName, "pt"),
  );
  let html = "";
  if (prior.length && (ui.invFilter === "all" || ui.invFilter === "late")) {
    html += `<p class="group-label">De meses anteriores · ${prior.length}</p><div class="cards">${prior
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
      .map((i) => invCard(i, true))
      .join("")}</div>`;
    if (list.length)
      html += `<p class="group-label">${monthLabel(ui.month)}</p>`;
  }
  if (list.length)
    html += `<div class="cards">${list.map((i) => invCard(i)).join("")}</div>`;
  if (!html) {
    if (ui.invQ)
      html = emptyState(
        "Nenhum resultado",
        `Nenhuma mensalidade encontrada para “${esc(ui.invQ)}”.`,
      );
    else if (!base.length && needsSetup().length)
      html = emptyState(
        "Nenhuma mensalidade ainda",
        "Defina plano, valor e dia de vencimento das alunas e as mensalidades são criadas sozinhas.",
        `<button class="btn btn-primary" type="button" data-action="setup">Configurar alunas</button>`,
      );
    else
      html = emptyState(
        "Nada por aqui",
        ui.invFilter === "late"
          ? "Nenhuma mensalidade atrasada."
          : "Nenhuma mensalidade neste filtro.",
      );
  }
  return chipHTML + html;
}
function viewInv() {
  const r = summary(ui.month);
  return `<div class="page-head"><div><h1>Mensalidades</h1><p class="sub">${r.count} ${r.count === 1 ? "mensalidade" : "mensalidades"}${ui.month > curYm() ? " (previsão)" : ""}</p></div>${monthSwitch()}</div>
    <div class="strip"><span><b class="num">${money(r.received)}</b> de <span class="num">${money(r.expected)}</span> recebidos</span><b class="num">${r.pct}%</b></div>
    <div class="bar"><i style="width:${r.pct}%"></i></div>
    ${searchBox("inv-q", ui.invQ, "Pesquisar aluna…")}
    <div id="inv-dyn">${invDynHTML()}</div>`;
}

/* ---------------- ALUNAS ---------------- */
function stuCard(s) {
  const p = plan(s.planId);
  const inv = S.invoices.find(
    (i) => i.studentId === s.id && i.month === curYm(),
  );
  let right = "";
  if (!isConfigured(s) && s.status === "active")
    right = pill("setup", "Definir plano");
  else if (s.status !== "active") right = pill(s.status, STU_STATUS[s.status]);
  else if (inv) right = pill(invStatus(inv));
  const line = isConfigured(s)
    ? `${p ? esc(p.name) + " · " : ""}<b class="num">${money(s.amount)}</b> · dia ${s.dueDay}`
    : "Plano e vencimento não definidos";
  return `<button class="card stu-card" type="button" data-action="open-stu" data-id="${s.id}"><span class="avatar">${esc(initials(s.name))}</span>
    <span class="txt"><h3>${esc(s.name)}</h3><p class="meta">${line}</p></span>${right}</button>`;
}
function stuDynHTML() {
  const q = ui.stuQ;
  const base = S.students.filter((s) => matchQ(s.id, s.name, q));
  const c = { active: 0, paused: 0, inactive: 0, all: base.length };
  base.forEach((s) => c[s.status]++);
  const chips = [
    ["active", "Ativas"],
    ["paused", "Pausadas"],
    ["inactive", "Inativas"],
    ["all", "Todas"],
  ];
  const list = base
    .filter((s) => ui.stuFilter === "all" || s.status === ui.stuFilter)
    .sort((a, b) => a.name.localeCompare(b.name, "pt"));
  return `<div class="chips">${chips.map(([k, l]) => `<button class="chip ${ui.stuFilter === k ? "on" : ""}" type="button" data-action="stu-filter" data-f="${k}">${l}<span class="n">${c[k]}</span></button>`).join("")}</div>
    ${list.length ? `<div class="cards">${list.map(stuCard).join("")}</div>` : q ? emptyState("Nenhum resultado", `Nenhuma aluna encontrada para “${esc(q)}”.`) : emptyState("Nenhuma aluna aqui", "Toque em “Nova aluna” para cadastrar.")}`;
}
function viewStudents() {
  return `<div class="page-head"><div><h1>Alunas</h1><p class="sub">${activeStudents().length} ativas</p></div>
    <button class="btn btn-primary" type="button" data-action="new-stu">+ Nova aluna</button></div>
    ${setupBanner()}
    ${searchBox("stu-q", ui.stuQ, "Pesquisar por nome, telefone ou e-mail…")}
    <div id="stu-dyn">${stuDynHTML()}</div>`;
}

/* Ficha da aluna com edição rápida */
const FIELDS = {
  name: { label: "Nome completo" },
  phone: { label: "Telefone / WhatsApp", type: "tel" },
  email: { label: "E-mail", type: "email" },
  planId: { label: "Plano", fin: true },
  amount: { label: "Valor da mensalidade", fin: true },
  dueDay: { label: "Dia do vencimento", fin: true },
  classDays: { label: "Dias de aula" },
  preferredMethod: { label: "Forma de pagamento preferida" },
  startDate: { label: "Data de início", type: "date" },
  notes: { label: "Observações" },
};
function fieldValueHTML(s, f) {
  const v = s[f];
  const e = (t) => `<span class="v empty-v">${t}</span>`;
  switch (f) {
    case "planId": {
      const p = plan(v);
      return p ? `<span class="v">${esc(p.name)}</span>` : e("Sem plano");
    }
    case "amount":
      return Number(v) > 0
        ? `<span class="v num">${money(v)}</span>`
        : e("Não definido");
    case "dueDay":
      return v ? `<span class="v">Dia ${v}</span>` : e("Não definido");
    case "classDays":
      return v.length
        ? `<span class="v">${v.map((d) => WEEKDAYS[d]).join(", ")}</span>`
        : e("Não definidos");
    case "preferredMethod":
      return v
        ? `<span class="v">${esc(methodLabel(v))}</span>`
        : e("Não definida");
    case "startDate":
      return v ? `<span class="v">${fmtDMY(v)}</span>` : e("Não informada");
    default:
      return v ? `<span class="v">${esc(v)}</span>` : e("—");
  }
}
function fieldEditorHTML(s, f) {
  const v = s[f];
  let input;
  if (f === "planId")
    input = `${planPicker("ed-pp", v)}<label class="field" style="margin:0"><span>Ou escolha na lista</span><select class="input" id="ed-val" data-change="pp-sync">${planOptions(v)}</select></label>`;
  else if (f === "preferredMethod")
    input = `<select class="input" id="ed-val"><option value="">—</option>${S.methods
      .filter((m) => m.active || m.id === v)
      .map(
        (m) =>
          `<option value="${m.id}" ${m.id === v ? "selected" : ""}>${esc(m.icon + " " + m.name)}</option>`,
      )
      .join("")}</select>`;
  else if (f === "amount")
    input = `<input class="input" id="ed-val" type="number" inputmode="decimal" min="0" step="0.01" value="${Number(v) || ""}">`;
  else if (f === "dueDay") input = dueCalendar("ed-cal", v);
  else if (f === "notes")
    input = `<textarea class="input" id="ed-val">${esc(v)}</textarea>`;
  else if (f === "classDays")
    input = `<div class="wd-grid" id="ed-days">${[1, 2, 3, 4, 5, 6, 0].map((d) => `<button type="button" class="opt ${v.includes(d) ? "on" : ""}" data-action="toggle-opt" data-v="${d}">${WEEKDAYS[d]}</button>`).join("")}</div>`;
  else
    input = `<input class="input" id="ed-val" type="${FIELDS[f].type || "text"}" value="${esc(v)}" ${f === "name" ? 'autocapitalize="words"' : ""}>`;
  return `<div class="kv-edit"><span class="k">${FIELDS[f].label}</span>${input}
    <div class="acts"><button class="btn btn-soft btn-sm" type="button" data-action="edit-cancel">Cancelar</button><button class="btn btn-primary btn-sm" type="button" data-action="edit-save" data-f="${f}">Salvar</button></div></div>`;
}
const planGroups = () => [...new Set(S.plans.map((p) => p.group || "Outros"))];
function planOptions(
  sel,
  { all = false, empty = "Sem plano (valor personalizado)" } = {},
) {
  const list = S.plans.filter((p) => all || p.active || p.id === sel);
  return (
    `<option value="">${empty}</option>` +
    planGroups()
      .map((g) => {
        const items = list.filter((p) => (p.group || "Outros") === g);
        if (!items.length) return "";
        return `<optgroup label="${esc(g)}">${items.map((p) => `<option value="${p.id}" ${p.id === sel ? "selected" : ""}>${esc(p.group ? p.name.replace(p.group + " ", "") : p.name)} — ${money(p.price)}</option>`).join("")}</optgroup>`;
      })
      .join("")
  );
}
/* Seletor rápido de plano em 3 toques: modalidade → frequência → período */
function planPicker(id, sel = "") {
  const p = plan(sel);
  const g = p ? p.group : "",
    f = p ? p.freq : "",
    t = p ? p.term : "";
  const kaf = S.plans.filter((x) => x.active && x.freq && x.term);
  const groups = [...new Set(kaf.map((x) => x.group))];
  return `<div class="plan-picker" id="${id}" data-g="${esc(g)}" data-f="${f}" data-t="${esc(t)}">
    <div class="pp-row">${groups.map((x) => `<button type="button" class="opt ${x === g ? "on" : ""}" data-action="pp" data-k="g" data-v="${esc(x)}">${esc(x)}</button>`).join("")}</div>
    <div class="pp-row">${[1, 2, 3].map((x) => `<button type="button" class="opt ${x === f ? "on" : ""}" data-action="pp" data-k="f" data-v="${x}">${x}x semana</button>`).join("")}</div>
    <div class="pp-row">${PLAN_TERMS.map((x) => `<button type="button" class="opt ${x.name === t ? "on" : ""}" data-action="pp" data-k="t" data-v="${x.name}">${x.name}</button>`).join("")}</div>
    <p class="pp-result">${p ? `<b>${esc(p.name)}</b><span class="num">${money(p.price)}/mês</span>` : "Escolha modalidade, frequência e período"}</p>
    <input type="hidden" name="planId" value="${esc(sel)}"></div>`;
}
function ppResolve(box) {
  const { g, f, t } = box.dataset;
  return (
    S.plans.find(
      (x) =>
        x.active &&
        x.group === g &&
        String(x.freq) === String(f) &&
        x.term === t,
    ) || null
  );
}
/* Calendário para escolher o dia do vencimento */
function dueCalendar(id, sel, ym = curYm()) {
  const first = weekdayOf(`${ym}-01`),
    dim = daysInMonth(ym);
  const cells = [];
  for (let k = 0; k < first; k++) cells.push("<span></span>");
  for (let d = 1; d <= 31; d++) {
    const extra = d > dim;
    cells.push(
      `<button type="button" class="cal-day ${Number(sel) === d ? "on" : ""} ${extra ? "extra" : ""} ${!extra && `${ym}-${pad(d)}` === todayISO() ? "today" : ""}" data-action="pick-due" data-for="${id}" data-v="${d}" aria-label="Dia ${d}">${d}</button>`,
    );
  }
  return `<div class="cal" id="${id}" data-ym="${ym}">
    <div class="cal-head">${MONTHS[Number(ym.slice(5, 7)) - 1]} ${ym.slice(0, 4)}</div>
    <div class="cal-grid">${WEEKDAYS.map((w) => `<span class="cal-wd">${w[0]}</span>`).join("")}${cells.join("")}</div>
    <p class="cal-hint">${dueHint(sel)}</p>
    <input type="hidden" name="dueDay" id="${id}-val" value="${sel || ""}"></div>`;
}
function dueHint(day) {
  if (!day) return "Toque no dia em que a mensalidade vence todo mês.";
  const t = todayISO();
  let d = dueDateFor(curYm(), day);
  if (d < t) d = dueDateFor(addMonths(curYm(), 1), day);
  const n = daysBetween(t, d);
  return `Vence todo dia <b>${day}</b>${Number(day) > 28 ? " (ou no último dia, em meses mais curtos)" : ""}. Próximo: <b>${fmtDM(d)}</b>${n === 0 ? ", hoje" : `, em ${n} ${n === 1 ? "dia" : "dias"}`}.`;
}
function viewStudent() {
  const s = student(ui.studentId);
  if (!s) {
    ui.tab = ui.from || "students";
    return VIEWS[ui.tab]();
  }
  const cur = S.invoices.find(
    (i) => i.studentId === s.id && i.month === curYm(),
  );
  const digits = String(s.phone || "").replace(/\D/g, "");
  const contact = [
    digits
      ? `<a class="btn btn-soft btn-sm" href="https://wa.me/${digits}" target="_blank" rel="noopener">WhatsApp</a>`
      : "",
    digits
      ? `<a class="btn btn-soft btn-sm" href="tel:${esc(s.phone)}">Ligar</a>`
      : "",
    s.email
      ? `<a class="btn btn-soft btn-sm" href="mailto:${esc(s.email)}">E-mail</a>`
      : "",
  ].join("");
  const rows = Object.keys(FIELDS)
    .map((f) =>
      ui.editField === f
        ? `<div class="kv-row">${fieldEditorHTML(s, f)}</div>`
        : `<div class="kv-row"><div class="main-col"><div class="k">${FIELDS[f].label}</div>${fieldValueHTML(s, f)}</div><button class="edit" type="button" data-action="edit-field" data-f="${f}">Editar</button></div>`,
    )
    .join("");
  const hist = studentInvoices(s.id);
  const cs = classStats(s.id, curYm());
  const mks = S.makeups
    .filter((mk) => mk.studentId === s.id)
    .sort((a, b) => b.absenceDate.localeCompare(a.absenceDate))
    .slice(0, 6);
  const atts = S.attendance
    .filter((a) => a.studentId === s.id)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 8);
  const statusTxt =
    s.status === "inactive" && s.endDate
      ? `Inativa desde ${fmtDM(s.endDate)}`
      : s.status === "paused" && s.pausedFrom
        ? `Pausada desde ${monthName(ymOf(s.pausedFrom))}`
        : STU_STATUS[s.status];
  return `<button class="back" type="button" data-action="back">${ic("chevL")}Voltar</button>
    <div class="profile-head"><span class="avatar lg">${esc(initials(s.name))}</span><div><h1>${esc(s.name)}</h1>
      <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">${pill(s.status, statusTxt)}${!isConfigured(s) && s.status === "active" ? pill("setup", "Definir plano e vencimento") : ""}</div></div></div>
    ${contact ? `<div class="contact">${contact}</div>` : ""}
    ${cur ? `<section class="section"><div class="section-title"><h2>Mensalidade de ${monthName(cur.month)}</h2></div>${invCard(cur)}</section>` : ""}
    <section class="section"><div class="section-title"><h2>Aulas em ${monthName(curYm())}</h2></div>
      <div class="mini-stats"><div><b class="num">${cs.contracted || "∞"}</b><small>contratadas</small></div><div><b class="num">${cs.done}</b><small>realizadas</small></div>
      <div><b class="num">${cs.absences}</b><small>faltas</small></div><div><b class="num">${cs.makeups}</b><small>reposições disponíveis</small></div></div></section>
    <section class="section"><div class="section-title"><h2>Informações</h2></div><div class="kv">${rows}</div></section>
    <section class="section"><div class="section-title"><h2>Histórico de pagamentos</h2></div>
      ${
        hist.length
          ? `<div class="list-card">${hist
              .map((i) => {
                const st = invStatus(i);
                return `<button class="hist-row" type="button" data-action="open-inv" data-id="${i.id}">
        <span class="m"><b>${monthLabel(i.month)}</b><small>${st === "paid" ? `Pago em ${fmtDM(i.paidDate)}${i.methodId ? " · " + esc(methodLabel(i.methodId)) : ""}` : st === "na" ? "Não aplicável" : "Vencimento " + fmtDM(i.dueDate)}</small></span>
        <span class="amt num">${money(i.amount)}</span>${pill(st)}</button>`;
              })
              .join("")}</div>`
          : emptyState(
              "Sem mensalidades",
              isConfigured(s)
                ? "As mensalidades aparecem aqui conforme forem criadas."
                : "Defina valor e dia de vencimento acima para começar.",
            )
      }
    </section>
    <section class="section"><div class="section-title"><h2>Reposições</h2><button class="link" type="button" data-action="new-mk" data-sid="${s.id}">+ Adicionar</button></div>
      ${
        mks.length
          ? `<div class="list-card">${mks
              .map((mk) => {
                const st = mkStatus(mk);
                return `<button class="hist-row" type="button" data-action="open-mk" data-id="${mk.id}">
        <span class="m"><b>Falta em ${fmtDM(mk.absenceDate)}</b><small>${esc(mk.reason || "Sem motivo")}${st === "scheduled" ? " · agendada " + fmtDM(mk.scheduledDate) : st === "done" ? " · feita " + fmtDM(mk.doneDate) : st === "pending" ? " · até " + fmtDM(mk.expiresOn) : ""}</small></span>${mkPill(st)}</button>`;
              })
              .join("")}</div>`
          : `<p class="meta">Nenhuma reposição registrada.</p>`
      }
    </section>
    <section class="section"><div class="section-title"><h2>Últimas aulas</h2></div>
      ${atts.length ? `<div class="list-card">${atts.map((a) => `<div class="hist-row"><span class="m"><b>${fmtDMY(a.date)}</b><small>${WEEKDAYS_LONG[weekdayOf(a.date)]}</small></span><span>${ATT_TYPES[a.type].emoji} ${ATT_TYPES[a.type].label}</span></div>`).join("")}</div>` : `<p class="meta">Nenhuma presença registrada.</p>`}
    </section>
    <section class="section"><div class="section-title"><h2>Situação da aluna</h2></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${s.status !== "active" ? `<button class="btn btn-primary" type="button" data-action="stu-status" data-to="active">Reativar aluna</button>` : ""}
        ${s.status !== "paused" ? `<button class="btn btn-soft" type="button" data-action="stu-status" data-to="paused">Pausar</button>` : ""}
        ${s.status !== "inactive" ? `<button class="btn btn-soft" type="button" data-action="stu-status" data-to="inactive">Inativar</button>` : ""}
      </div>
      <p class="meta" style="margin-top:10px">Inativar mantém todo o histórico. Prefira inativar a excluir.</p>
      <button class="text-btn danger" type="button" data-action="stu-delete" style="margin-top:6px">Excluir cadastro</button>
    </section>
    <section class="section"><div class="section-title"><h2>Corrigir erros</h2></div>
      <div class="list-card">
        <button class="set-row" type="button" data-action="stu-reset" data-mode="config"><span class="em">↺</span><span class="txt"><b>Resetar plano, valor e vencimento</b><small>Apaga as mensalidades ainda não pagas desta aluna para você configurar de novo. Pagamentos registrados ficam.</small></span></button>
        <button class="set-row" type="button" data-action="stu-reset" data-mode="all"><span class="em">🗑️</span><span class="txt"><b style="color:var(--late)">Apagar todas as mensalidades e pagamentos</b><small>Zera o financeiro desta aluna. O cadastro, presenças e reposições ficam.</small></span></button>
      </div></section>`;
}

/* ---------------- AULAS: presença + reposições ---------------- */
const mkPill = (st) =>
  pill(
    st === "pending"
      ? "soon"
      : st === "scheduled"
        ? "sched"
        : st === "done"
          ? "paid"
          : st === "expired" || st === "missed"
            ? "exp"
            : "na",
    MK_STATUS[st],
  );
function studentsForDay(date) {
  const wd = weekdayOf(date);
  const ids = new Set(attendanceOn(date).map((a) => a.studentId));
  S.makeups.forEach((mk) => {
    if (mk.scheduledDate === date && mkStatus(mk) === "scheduled")
      ids.add(mk.studentId);
  });
  return S.students.filter(
    (s) => (s.status === "active" && s.classDays.includes(wd)) || ids.has(s.id),
  );
}
function attCard(s) {
  const rec = attOf(s.id, ui.attDate);
  const avail = availableMakeups(s.id);
  const sched = avail.find((mk) => mk.scheduledDate === ui.attDate);
  const btn = (t) =>
    `<button class="att-btn ${t} ${rec && rec.type === t ? "on" : ""}" type="button" data-action="att" data-sid="${s.id}" data-type="${t}" aria-pressed="${!!(rec && rec.type === t)}"><span class="e">${ATT_TYPES[t].emoji}</span>${ATT_TYPES[t].short}</button>`;
  return `<div class="att-card"><div class="att-head"><span class="avatar">${esc(initials(s.name))}</span><div class="txt"><h3>${esc(s.name)}</h3>
    <p class="meta">${S.settings.blockMakeupIfLate !== false && avail.length && hasOverdue(s.id) ? "🔴 Em atraso — reposição bloqueada" : sched ? "🔵 Reposição agendada para hoje" : avail.length ? `🔄 ${avail.length} ${avail.length === 1 ? "reposição disponível" : "reposições disponíveis"}` : s.classDays.length ? s.classDays.map((d) => WEEKDAYS[d]).join(", ") : "Dias de aula não definidos"}</p></div></div>
    <div class="att-btns">${["present", "absent", "noshow", "makeup"].map(btn).join("")}</div></div>`;
}
function attDynHTML() {
  const anySchedule = S.students.some((s) => s.classDays.length);
  const scope = anySchedule ? ui.attScope : "all";
  const day = studentsForDay(ui.attDate);
  let list =
    scope === "day"
      ? day
      : S.students.filter(
          (s) => s.status === "active" || attOf(s.id, ui.attDate),
        );
  list = list
    .filter((s) => matchQ(s.id, s.name, ui.attQ))
    .sort((a, b) => a.name.localeCompare(b.name, "pt"));
  const recs = attendanceOn(ui.attDate);
  const c = (t) => recs.filter((r) => r.type === t).length;
  return `${
    anySchedule
      ? `<div class="chips"><button class="chip ${scope === "day" ? "on" : ""}" type="button" data-action="att-scope" data-f="day">Turma do dia<span class="n">${day.length}</span></button>
      <button class="chip ${scope === "all" ? "on" : ""}" type="button" data-action="att-scope" data-f="all">Todas as ativas<span class="n">${activeStudents().length}</span></button></div>`
      : `<p class="meta" style="margin:0 2px 12px">Dica: defina os “Dias de aula” na ficha de cada aluna para ver aqui só a turma do dia.</p>`
  }
    <div class="att-sum"><span>✅ <b>${c("present")}</b> presentes</span><span>❌ <b>${c("absent")}</b> faltas</span><span>⚠️ <b>${c("noshow")}</b> sem reposição</span><span>🔄 <b>${c("makeup")}</b> reposições</span></div>
    ${list.length ? `<div class="cards">${list.map(attCard).join("")}</div>` : emptyState("Ninguém na turma deste dia", "Veja “Todas as ativas” para marcar outra aluna.")}`;
}
function mkCard(mk) {
  const st = mkStatus(mk),
    s = student(mk.studentId);
  const sub =
    st === "scheduled"
      ? `Agendada para <b>${fmtDMY(mk.scheduledDate)}</b>`
      : st === "done"
        ? `Realizada em ${fmtDMY(mk.doneDate)}`
        : st === "expired"
          ? `Expirou em ${fmtDMY(mk.expiresOn)}`
          : st === "missed"
            ? "Não compareceu — perdeu o direito"
            : st === "canceled"
              ? "Cancelada"
              : `Disponível até <b>${fmtDMY(mk.expiresOn)}</b>`;
  return `<button class="card" type="button" data-action="open-mk" data-id="${mk.id}"><div class="card-top"><div><h3>${esc(s ? s.name : mk.studentName)}</h3>
    <p class="meta">Falta em ${fmtDM(mk.absenceDate)}${mk.reason ? " · " + esc(mk.reason) : ""}</p></div>${mkPill(st)}</div><p class="note muted">${sub}</p></button>`;
}
function mkDynHTML() {
  const base = S.makeups.filter((mk) => {
    const s = student(mk.studentId);
    return matchQ(mk.studentId, s ? s.name : mk.studentName, ui.attQ);
  });
  const groups = {
    open: ["pending", "scheduled"],
    pending: ["pending"],
    scheduled: ["scheduled"],
    done: ["done"],
    expired: ["expired", "missed", "canceled"],
    all: null,
  };
  const n = (k) =>
    base.filter((mk) => !groups[k] || groups[k].includes(mkStatus(mk))).length;
  const chips = [
    ["open", "Em aberto", ""],
    ["pending", "Pendentes", "soon"],
    ["scheduled", "Agendadas", "sched"],
    ["done", "Realizadas", "paid"],
    ["expired", "Expiradas", "exp"],
    ["all", "Todas", ""],
  ];
  const list = base
    .filter(
      (mk) =>
        !groups[ui.mkFilter] || groups[ui.mkFilter].includes(mkStatus(mk)),
    )
    .sort((a, b) =>
      (a.scheduledDate || a.expiresOn).localeCompare(
        b.scheduledDate || b.expiresOn,
      ),
    );
  return `<div class="chips">${chips.map(([k, l, d]) => `<button class="chip ${ui.mkFilter === k ? "on" : ""}" type="button" data-action="mk-filter" data-f="${k}">${d ? `<i class="dot ${d}"></i>` : ""}${l}<span class="n">${n(k)}</span></button>`).join("")}</div>
    ${list.length ? `<div class="cards">${list.map(mkCard).join("")}</div>` : emptyState("Nenhuma reposição aqui", "Ao marcar “Falta” na presença, a reposição é criada automaticamente.")}`;
}
function viewClasses() {
  const seg = `<div class="seg"><button type="button" class="${ui.classSeg === "att" ? "on" : ""}" data-action="class-seg" data-f="att">Presença</button>
    <button type="button" class="${ui.classSeg === "mk" ? "on" : ""}" data-action="class-seg" data-f="mk">Reposições</button></div>`;
  if (ui.classSeg === "mk") {
    return `<div class="page-head"><div><h1>Reposições</h1><p class="sub">Aulas a repor, com prazo</p></div><button class="btn btn-primary" type="button" data-action="new-mk">+ Nova reposição</button></div>
      ${seg}${searchBox("att-q", ui.attQ, "Pesquisar aluna…")}<div id="cls-dyn">${mkDynHTML()}</div>`;
  }
  const t = todayISO();
  const lbl =
    ui.attDate === t
      ? "Hoje"
      : ui.attDate === addDays(t, -1)
        ? "Ontem"
        : ui.attDate === addDays(t, 1)
          ? "Amanhã"
          : WEEKDAYS_LONG[weekdayOf(ui.attDate)];
  return `<div class="page-head"><div><h1>Presença</h1><p class="sub">${lbl}, ${fmtDMY(ui.attDate)}</p></div></div>
    ${seg}
    <div class="date-switch"><button class="icon-btn" type="button" data-action="att-day" data-n="-1" aria-label="Dia anterior">${ic("chevL")}</button>
      <input type="date" id="att-date" value="${ui.attDate}" aria-label="Data da aula">
      <button class="icon-btn" type="button" data-action="att-day" data-n="1" aria-label="Próximo dia">${ic("chevR")}</button></div>
    ${searchBox("att-q", ui.attQ, "Pesquisar aluna…")}
    <div id="cls-dyn">${attDynHTML()}</div>`;
}

/* ---------------- FINANCEIRO ---------------- */
function barChart(months) {
  const data = months.map((m) => ({ m, ...summary(m) }));
  const max = Math.max(1, ...data.map((d) => d.expected));
  const W = 640,
    H = 220,
    padL = 8,
    padB = 28,
    padT = 16,
    n = data.length,
    slot = (W - padL * 2) / n,
    bw = Math.min(34, slot * 0.55);
  const y = (v) => H - padB - (v / max) * (H - padB - padT);
  const bars = data
    .map((d, i) => {
      const x = padL + slot * i + (slot - bw) / 2;
      return `<g><title>${monthLabel(d.m)}: previsto ${money(d.expected)}, recebido ${money(d.received)}</title>
      <rect x="${x}" y="${y(d.expected)}" width="${bw}" height="${H - padB - y(d.expected)}" rx="6" fill="#D6DFEF"/>
      <rect x="${x}" y="${y(d.received)}" width="${bw}" height="${H - padB - y(d.received)}" rx="6" fill="#294582"/>
      <text x="${x + bw / 2}" y="${H - 8}" text-anchor="middle" font-size="12" fill="#66718A" font-family="Figtree,system-ui">${monthShort(d.m)}</text></g>`;
    })
    .join("");
  const maxS = Math.max(1, ...data.map((d) => d.students));
  const pts = data
    .map(
      (d, i) =>
        `${padL + slot * i + slot / 2},${y((d.students / maxS) * max * 0.92)}`,
    )
    .join(" ");
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Faturamento por mês">
    <line x1="0" x2="${W}" y1="${H - padB}" y2="${H - padB}" stroke="#E4E8F0"/>${bars}
    <polyline points="${pts}" fill="none" stroke="#A3C81A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
    ${data.map((d, i) => `<circle cx="${padL + slot * i + slot / 2}" cy="${y((d.students / maxS) * max * 0.92)}" r="4" fill="#fff" stroke="#A3C81A" stroke-width="2.5"><title>${d.students} alunas</title></circle>`).join("")}
  </svg>`;
}
function viewFinance() {
  const m = ui.month,
    r = summary(m);
  const range = monthsRange();
  const months = range.slice(-12);
  if (months.length < 6) {
    let f = months[0];
    while (months.length < 6) {
      f = addMonths(f, -1);
      months.unshift(f);
    }
  }
  const methods = Object.entries(r.byMethod).sort((a, b) => b[1] - a[1]);
  const maxM = Math.max(1, ...methods.map((x) => x[1]));
  const kpi = (lbl, val, hint = "") =>
    `<div class="stat"><span class="lbl">${lbl}</span><span class="val num">${val}</span>${hint ? `<span class="hint">${hint}</span>` : ""}</div>`;
  const rowsData = [...range]
    .reverse()
    .map((mm) => ({ m: mm, ...summary(mm) }));
  const tot = rowsData.reduce(
    (a, d) => ({
      e: a.e + d.expected,
      r: a.r + d.received,
      o: a.o + d.open,
      l: a.l + d.late,
    }),
    { e: 0, r: 0, o: 0, l: 0 },
  );
  const withData = rowsData.filter((d) => d.expected > 0);
  const avg = withData.length
    ? withData.reduce((a, d) => a + d.received, 0) / withData.length
    : 0;
  return `<div class="page-head"><div><h1>Financeiro</h1><p class="sub">Resumo e evolução</p></div>${monthSwitch()}</div>
    <section class="kpis">
      ${kpi("Faturamento previsto", money(r.expected))}${kpi("Recebido", money(r.received), r.pct + "% do previsto")}
      ${kpi("Pendente", money(r.pending), r.n.soon + r.n.today + " a vencer")}${kpi("Em atraso", money(r.late), r.lateCount + " mensalidades")}
      ${kpi("Pagamentos", r.paidCount, `de ${r.count} mensalidades`)}${kpi("Ticket médio", money(r.ticket), r.students + " alunas no mês")}
    </section>
    <section class="section chart-card"><h3>Formas de pagamento</h3><p class="cap">Recebido em ${monthLabel(m)}</p>
      ${methods.length ? methods.map(([id, v]) => `<div class="meth-row"><span class="nm">${esc((method(id) || {}).icon || "")} ${esc(methodLabel(id) || "Sem forma")}</span><span class="track"><i style="width:${(v / maxM) * 100}%"></i></span><span class="vl num">${money(v)}</span></div>`).join("") : '<p class="meta">Nenhum pagamento registrado neste mês.</p>'}
    </section>
    <section class="section chart-card"><h3>Evolução do faturamento</h3><p class="cap">Últimos ${months.length} meses</p>
      ${barChart(months)}
      <div class="legend"><span><i style="background:#D6DFEF"></i>Previsto</span><span><i style="background:#294582"></i>Recebido</span><span><i style="background:#A3C81A;border-radius:50%"></i>Nº de alunas</span></div>
    </section>
    <section class="section"><div class="section-title"><h2>Mês a mês</h2><button class="link" type="button" data-action="export" data-kind="history">Exportar</button></div>
      <p class="meta" style="margin:-4px 2px 10px">Média recebida por mês: <b class="num">${money(avg)}</b></p>
      <div class="table-wrap desk-only"><table class="tbl"><thead><tr><th>Mês</th><th class="r">Previsto</th><th class="r">Recebido</th><th class="r">Em aberto</th><th class="r">Em atraso</th><th class="r">Pagamentos</th><th class="r">Alunas</th><th class="r">%</th></tr></thead>
        <tbody>${rowsData.map((d) => `<tr data-action="open-month" data-m="${d.m}"><td>${monthLabel(d.m)}</td><td class="r num">${money(d.expected)}</td><td class="r num">${money(d.received)}</td><td class="r num">${money(d.open)}</td><td class="r num">${money(d.late)}</td><td class="r num">${d.paidCount}</td><td class="r num">${d.students}</td><td class="r num">${d.pct}%</td></tr>`).join("")}</tbody>
        <tfoot><tr><td>Total</td><td class="r num">${money(tot.e)}</td><td class="r num">${money(tot.r)}</td><td class="r num">${money(tot.o)}</td><td class="r num">${money(tot.l)}</td><td></td><td></td><td class="r num">${tot.e ? Math.round((tot.r / tot.e) * 100) : 0}%</td></tr></tfoot></table></div>
      <div class="cards month-cards mob-only">${rowsData
        .map(
          (
            d,
          ) => `<button class="card" type="button" data-action="open-month" data-m="${d.m}"><div class="card-top"><h3>${monthLabel(d.m)}</h3><b class="num">${d.pct}%</b></div>
        <div class="grid2"><span>Previsto<b class="num">${money(d.expected)}</b></span><span>Recebido<b class="num">${money(d.received)}</b></span><span>Em aberto<b class="num">${money(d.open)}</b></span><span>Alunas<b class="num">${d.students}</b></span></div></button>`,
        )
        .join("")}</div>
    </section>`;
}

/* ---------------- MAIS / CONFIGURAÇÕES ---------------- */
function viewMore() {
  const cs = S.settings.currency;
  const usage = (pid) => S.students.filter((s) => s.planId === pid).length;
  return `<div class="page-head"><div><h1>Mais</h1><p class="sub">Financeiro, configurações e dados</p></div></div>
    <section class="list-card mob-only" style="margin-bottom:6px">
      <button class="set-row" type="button" data-action="tab" data-tab="finance"><span class="em">📊</span><span class="txt"><b>Financeiro</b><small>Histórico mensal, gráficos e formas de pagamento</small></span>${ic("chevR", "ico chev")}</button>
    </section>
    <section class="section"><div class="section-title"><h2>Planos</h2><button class="link" type="button" data-action="plan-edit">+ Novo plano</button></div>
      <p class="meta" style="margin:-4px 2px 10px">Tabela Valores 2026. Valores por mês.</p>
      ${planGroups()
        .map((g) => {
          const ps = S.plans.filter((p) => (p.group || "Outros") === g);
          const used = ps.reduce((n, p) => n + usage(p.id), 0);
          return `<details class="plan-group"><summary><span class="txt"><b>${esc(g)}</b><small>${ps.length} planos · ${money(Math.min(...ps.map((p) => p.price)))} a ${money(Math.max(...ps.map((p) => p.price)))} · ${used} ${used === 1 ? "aluna" : "alunas"}</small></span>${ic("chevR", "ico chev")}</summary><div class="list-card">${ps
            .map(
              (
                p,
              ) => `<button class="set-row" type="button" data-action="plan-edit" data-id="${p.id}" ${p.active ? "" : 'style="opacity:.55"'}>
        <span class="txt"><b>${esc(p.group ? p.name.replace(p.group + " ", "") : p.name)}</b><small>${p.classes ? p.classes + " aulas/mês" : "Aulas ilimitadas"} · ${usage(p.id)} ${usage(p.id) === 1 ? "aluna" : "alunas"}${p.active ? "" : " · desativado"}</small></span>
        <b class="num">${money(p.price)}</b>${ic("chevR", "ico chev")}</button>`,
            )
            .join("")}</div></details>`;
        })
        .join("")}</section>
    <section class="section"><div class="section-title"><h2>Formas de pagamento</h2><button class="link" type="button" data-action="method-edit">+ Nova</button></div>
      <div class="list-card">${S.methods
        .map(
          (
            m,
          ) => `<div class="set-row"><span class="em">${esc(m.icon)}</span><button class="txt" type="button" data-action="method-edit" data-id="${m.id}" style="text-align:left"><b>${esc(m.name)}</b><small>Toque para renomear</small></button>
        <button class="switch ${m.active ? "on" : ""}" type="button" role="switch" aria-checked="${m.active}" aria-label="Ativar ${esc(m.name)}" data-action="method-toggle" data-id="${m.id}"></button></div>`,
        )
        .join("")}</div></section>
    <section class="section"><div class="section-title"><h2>Moeda</h2></div>
      <div class="list-card"><div class="set-row"><span class="txt"><b>Moeda das mensalidades</b><small>Afeta só a exibição dos valores</small></span>
        <div class="seg-inline">${Object.entries(CURRENCIES)
          .map(
            ([k, c]) =>
              `<button type="button" class="${cs === k ? "on" : ""}" data-action="currency" data-c="${k}">${c.sym}</button>`,
          )
          .join("")}</div></div></div></section>
    <section class="section"><div class="section-title"><h2>Reposições</h2></div>
      <div class="list-card"><div class="set-row"><span class="txt"><b>Prazo para repor</b><small>Depois disso a reposição expira</small></span>
        <select class="input" style="width:auto;min-height:42px" data-change="mk-validity"><option value="month" ${S.settings.makeupValidityDays === "month" ? "selected" : ""}>Mesmo mês</option>${[7, 15, 30, 45, 60].map((n) => `<option value="${n}" ${Number(S.settings.makeupValidityDays) === n ? "selected" : ""}>${n} dias</option>`).join("")}</select></div>
        <div class="set-row"><span class="txt"><b>Falta sem reposição dá direito a repor</b><small>Faltas sem aviso ou avisadas com menos de 24h. Regra do studio: não</small></span>
        <button class="switch ${S.settings.noshowGivesMakeup ? "on" : ""}" type="button" role="switch" aria-checked="${!!S.settings.noshowGivesMakeup}" data-action="noshow-toggle"></button></div>
        <div class="set-row"><span class="txt"><b>Bloquear reposição com mensalidade em atraso</b><small>Regra do studio: aluna em atraso não pode repor</small></span>
        <button class="switch ${S.settings.blockMakeupIfLate !== false ? "on" : ""}" type="button" role="switch" aria-checked="${S.settings.blockMakeupIfLate !== false}" data-action="late-block-toggle"></button></div></div></section>
    <section class="section"><div class="section-title"><h2>Exportar</h2></div>
      <div class="list-card">
        ${[
          ["month", "Mensalidades do mês", monthLabel(ui.month)],
          ["payments", "Pagamentos", "Todos os pagamentos registrados"],
          ["history", "Histórico financeiro", "Resumo mês a mês"],
          ["students", "Lista de alunas", "Cadastro completo"],
          ["makeups", "Reposições", "Todas as reposições"],
        ]
          .map(
            ([k, t, s]) =>
              `<button class="set-row" type="button" data-action="export" data-kind="${k}"><span class="txt"><b>${t}</b><small>${s} · CSV, Excel ou PDF</small></span>${ic("chevR", "ico chev")}</button>`,
          )
          .join("")}
      </div></section>
    <section class="section"><div class="section-title"><h2>Backup e dados</h2></div>
      <div class="list-card">
        <button class="set-row" type="button" data-action="backup"><span class="em">💾</span><span class="txt"><b>Baixar backup</b><small>Salve uma cópia de segurança (.json) com tudo</small></span></button>
        <button class="set-row" type="button" data-action="restore"><span class="em">📂</span><span class="txt"><b>Restaurar backup</b><small>Carregar um arquivo de backup salvo antes</small></span></button>
        <button class="set-row" type="button" data-action="reset-finance"><span class="em">↺</span><span class="txt"><b>Zerar mensalidades e pagamentos</b><small>Mantém alunas e planos; recomeça o financeiro neste mês</small></span></button>
        <button class="set-row" type="button" data-action="load-demo"><span class="em">🧪</span><span class="txt"><b>Ver com dados de demonstração</b><small>14 alunas fictícias com histórico, para testar</small></span></button>
        <button class="set-row" type="button" data-action="load-sheet"><span class="em">↺</span><span class="txt"><b>Recomeçar com a lista da planilha</b><small>As 36 alunas da planilha, sem pagamentos</small></span></button>
      </div>
      </section>

<section class="section">
  <div class="section-title">
    <h2>Conta</h2>
  </div>

  <div class="list-card">
    <button class="set-row" type="button" data-action="logout">
      <span class="em">↪</span>
      <span class="txt">
        <b>Sair</b>
        <small>Encerrar sua sessão neste dispositivo</small>
      </span>
    </button>
  </div>
</section>

<section class="section"><div class="section-title"><h2>Formas de pagamento</h2>
      <p class="meta" style="margin:10px 2px 0">Os dados ficam salvos neste aparelho, neste navegador${S.dataset === "demo" ? ". <b>Você está vendo dados de demonstração.</b>" : "."} Baixe um backup de vez em quando.</p>
    </section>
    <div class="about"><img src="logo.svg" alt="KAF Studio Pilates">Gestão de alunos e mensalidades</div>`;
}

const VIEWS = {
  home: viewHome,
  inv: viewInv,
  students: viewStudents,
  student: viewStudent,
  classes: viewClasses,
  finance: viewFinance,
  more: viewMore,
};

/* ---------------- sheets e diálogos ---------------- */
function openSheet(title, body) {
  const root = $("#sheet-root");
  root.innerHTML = `<div class="overlay" data-action="sheet-close"></div><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    <div class="sheet-head"><h2>${esc(title)}</h2><button class="close" type="button" data-action="sheet-close" aria-label="Fechar">×</button></div>${body}</div>`;
  root.classList.add("open");
  document.body.classList.add("locked");
  return $(".sheet", root);
}
function closeSheet() {
  const r = $("#sheet-root");
  r.classList.remove("open");
  r.innerHTML = "";
  if (!$("#confirm-root").classList.contains("open"))
    document.body.classList.remove("locked");
}
let askResolve = null;
function ask({ title, text = "", buttons, fields = "" }) {
  const root = $("#confirm-root");
  root.innerHTML = `<div class="overlay" data-action="ans" data-v=""></div><div class="dialog" role="alertdialog" aria-modal="true"><h3>${title}</h3>${text ? `<p>${text}</p>` : ""}${fields}
    <div class="acts">${buttons.map((b) => `<button class="btn ${b.kind || "btn-soft"}" type="button" data-action="ans" data-v="${b.v}">${b.label}</button>`).join("")}</div></div>`;
  root.classList.add("open");
  document.body.classList.add("locked");
  return new Promise((res) => {
    askResolve = res;
  });
}
function answer(v) {
  const root = $("#confirm-root");
  const values = {};
  $$("[name]", root).forEach((el) => {
    values[el.name] = el.value;
  });
  root.classList.remove("open");
  root.innerHTML = "";
  if (!$("#sheet-root").classList.contains("open"))
    document.body.classList.remove("locked");
  const r = askResolve;
  askResolve = null;
  r && r({ v, values });
}
const confirmAsk = async (title, text, okLabel = "Confirmar", danger = false) =>
  (
    await ask({
      title,
      text,
      buttons: [
        {
          v: "ok",
          label: okLabel,
          kind: danger ? "btn-danger" : "btn-primary",
        },
        { v: "", label: "Voltar" },
      ],
    })
  ).v === "ok";

/* Registrar / editar pagamento */
function openInvoice(id, focusPay = false) {
  const inv = getInvoice(id);
  if (!inv) return;
  const st = invStatus(inv),
    s = student(inv.studentId);
  if (st === "na") {
    const el = openSheet(
      "Mensalidade não aplicável",
      `<div class="pay-box"><div class="who">${esc(inv.studentName)}</div>
      <div class="ln"><span>Mês</span><b>${monthLabel(inv.month)}</b></div><div class="ln"><span>Valor</span><b class="num">${money(inv.amount)}</b></div>
      ${inv.notes ? `<div class="ln"><span>Motivo</span><b>${esc(inv.notes)}</b></div>` : ""}</div>
      <button class="btn btn-primary btn-block" type="button" data-action="inv-reopen" data-id="${inv.id}">Voltar a cobrar este mês</button>
      ${s ? `<div class="sheet-foot"><button class="text-btn" type="button" data-action="open-stu" data-id="${s.id}">Ver ficha da aluna</button></div>` : ""}`,
    );
    return el;
  }
  const paid = st === "paid";
  const sel = paid ? inv.methodId : (s && s.preferredMethod) || "";
  const methods = S.methods.filter((m) => m.active || m.id === sel);
  const digits = s ? String(s.phone || "").replace(/\D/g, "") : "";
  const wa =
    !paid && digits
      ? `https://wa.me/${digits}?text=${encodeURIComponent(`Olá ${firstName(inv.studentName)}, tudo bem? Passando para lembrar da mensalidade do KAF Studio referente a ${monthName(inv.month).toLowerCase()}, no valor de ${money(inv.amount)}, com vencimento em ${fmtDM(inv.dueDate)}. Obrigada!`)}`
      : "";
  openSheet(
    paid ? "Pagamento registrado" : "Registrar pagamento",
    `
    <div class="pay-box"><div class="who">${esc(inv.studentName)}</div>
      <div class="ln"><span>Referente a</span><b>${monthLabel(inv.month)}</b></div>
      <div class="ln"><span>Vencimento</span><b>${fmtDMY(inv.dueDate)}</b></div>
      <div class="ln"><span>Situação</span>${pill(st)}</div></div>
    <form id="pay-form" data-id="${esc(inv.id)}" novalidate>
      <div class="row2">
        <label class="field"><span>Valor</span><input name="amount" type="number" inputmode="decimal" step="0.01" min="0" value="${inv.amount}"></label>
        <label class="field"><span>Data do pagamento</span><input name="date" type="date" value="${paid ? inv.paidDate : todayISO()}" max="${addDays(todayISO(), 366)}"></label>
      </div>
      <div class="field"><span>Forma de pagamento</span>
        <div class="opt-grid" id="pay-methods">${methods.map((m) => `<button class="opt ${m.id === sel ? "on" : ""}" type="button" data-action="pick-method" data-id="${m.id}"><span class="em">${esc(m.icon)}</span>${esc(m.name)}</button>`).join("")}</div>
        <small id="pay-err" style="color:var(--late);display:none">Escolha a forma de pagamento.</small></div>
      <label class="field"><span>Observação <small>(opcional)</small></span><textarea name="notes" placeholder="Ex.: pagou junto com outubro">${esc(inv.notes)}</textarea></label>
      <button class="btn btn-confirm" type="submit">✓ ${paid ? "Salvar alterações" : "Confirmar pagamento"}</button>
      ${paid ? `<button class="btn btn-danger btn-block" type="button" data-action="inv-unpay" data-id="${esc(inv.id)}" style="margin-top:8px">↺ Desfazer pagamento (voltar para não pago)</button>` : ""}
    </form>
    <div class="sheet-foot">
      ${!paid ? `<button class="text-btn" type="button" data-action="inv-due" data-id="${esc(inv.id)}">Mudar vencimento</button>` : ""}
      ${!paid ? `<button class="text-btn" type="button" data-action="inv-cancel" data-id="${esc(inv.id)}">Não cobrar este mês</button>` : ""}
      ${wa ? `<a class="text-btn" href="${wa}" target="_blank" rel="noopener">Lembrar pelo WhatsApp</a>` : ""}
      ${s && ui.tab !== "student" ? `<button class="text-btn" type="button" data-action="open-stu" data-id="${s.id}">Ver ficha da aluna</button>` : ""}
    </div>`,
  );
  if (!focusPay) {
    /* nada */
  }
}
function submitPay(form) {
  const id = form.dataset.id;
  let inv = getInvoice(id);
  if (!inv) return;
  const m = $("#pay-methods .opt.on");
  if (!m) {
    $("#pay-err").style.display = "block";
    return;
  }
  const fd = new FormData(form);
  const date = fd.get("date") || todayISO();
  const amount = Number(fd.get("amount"));
  if (!(amount >= 0)) {
    toast("Valor inválido");
    return;
  }
  const wasPaid = inv.status === "paid";
  const snap = undoPoint();
  inv = materialize(inv);
  Object.assign(inv, {
    status: "paid",
    paidDate: date,
    methodId: m.dataset.id,
    notes: String(fd.get("notes") || "").trim(),
    amount,
  });
  save();
  closeSheet();
  refresh();
  toastUndo(
    wasPaid
      ? "Pagamento atualizado"
      : `Pagamento de ${firstName(inv.studentName)} registrado`,
    snap,
  );
}

/* Cadastro de aluna */
function monthOptions(sel) {
  const c = curYm();
  const out = [];
  for (let k = -12; k <= 6; k++) {
    const m = addMonths(c, k);
    out.push(
      `<option value="${m}" ${m === sel ? "selected" : ""}>${monthLabel(m)}</option>`,
    );
  }
  return out.join("");
}
function openNewStudent() {
  openSheet(
    "Nova aluna",
    `<form id="stu-form" novalidate>
    <label class="field"><span>Nome completo *</span><input name="name" autocapitalize="words" autocomplete="off" required></label>
    <div class="row2"><label class="field"><span>Telefone</span><input name="phone" type="tel" inputmode="tel"></label>
    <label class="field"><span>E-mail</span><input name="email" type="email" inputmode="email" autocapitalize="off"></label></div>
    <label class="field"><span>Plano</span><select name="planId" data-change="plan-fill">${planOptions("")}</select></label>
    <label class="field"><span>Valor da mensalidade</span><input name="amount" type="number" inputmode="decimal" min="0" step="0.01" placeholder="Preenchido pelo plano"></label>
    <div class="field"><span>Dia do vencimento</span>${dueCalendar("new-cal", 10)}</div>
    <div class="field"><span>Dias de aula</span><div class="wd-grid" id="new-days">${[1, 2, 3, 4, 5, 6, 0].map((d) => `<button type="button" class="opt" data-action="toggle-opt" data-v="${d}">${WEEKDAYS[d]}</button>`).join("")}</div></div>
    <div class="row2"><label class="field"><span>Data de início</span><input name="startDate" type="date" value="${todayISO()}"></label>
    <label class="field"><span>Cobrar a partir de</span><select name="chargeFrom">${monthOptions(curYm())}</select></label></div>
    <div class="row2"><label class="field"><span>Forma preferida</span><select name="preferredMethod"><option value="">—</option>${S.methods
      .filter((m) => m.active)
      .map(
        (m) => `<option value="${m.id}">${esc(m.icon + " " + m.name)}</option>`,
      )
      .join("")}</select></label>
    <label class="field"><span>Status</span><select name="status"><option value="active">🟢 Ativa</option><option value="paused">⏸️ Pausada</option><option value="inactive">⚪ Inativa</option></select></label></div>
    <label class="field"><span>Observações</span><textarea name="notes"></textarea></label>
    <button class="btn btn-primary btn-block" type="submit" style="min-height:54px">Cadastrar aluna</button></form>`,
  );
}
function submitStudent(form) {
  const fd = new FormData(form);
  const name = String(fd.get("name") || "").trim();
  if (!name) {
    form.querySelector("[name=name]").closest(".field").classList.add("err");
    form.querySelector("[name=name]").focus();
    return;
  }
  const amount = Number(fd.get("amount")) || 0,
    dueDay = Math.min(31, Math.max(1, Number(fd.get("dueDay")) || 0)) || null;
  const s = newStudent({
    name,
    phone: String(fd.get("phone") || "").trim(),
    email: String(fd.get("email") || "").trim(),
    planId: fd.get("planId") || "",
    amount,
    dueDay,
    startDate: fd.get("startDate") || "",
    chargeFrom: amount > 0 && dueDay ? fd.get("chargeFrom") : "",
    status: fd.get("status"),
    preferredMethod: fd.get("preferredMethod") || "",
    notes: String(fd.get("notes") || "").trim(),
    classDays: $$("#new-days .opt.on").map((b) => Number(b.dataset.v)),
  });
  const snap = undoPoint();
  if (s.status === "paused") s.pausedFrom = (s.chargeFrom || curYm()) + "-01";
  if (s.status === "inactive") s.endDate = todayISO();
  S.students.push(s);
  const before = S.invoices.length;
  ensureInvoices();
  const created = S.invoices.length - before;
  save();
  closeSheet();
  ui.studentId = s.id;
  ui.from = "students";
  ui.tab = "student";
  render();
  toastUndo(
    created
      ? `Aluna cadastrada — ${created} ${created === 1 ? "mensalidade criada" : "mensalidades criadas"}`
      : "Aluna cadastrada",
    snap,
  );
}

/* Configuração rápida das alunas importadas */
function openSetup() {
  const list = needsSetup()
    .filter((s) => !ui.setupSkip.has(s.id))
    .sort((a, b) => a.name.localeCompare(b.name, "pt"));
  if (!list.length) {
    closeSheet();
    ui.setupSkip.clear();
    toast("Todas as alunas ativas estão configuradas");
    refresh();
    return;
  }
  const s = list[0],
    total = needsSetup().length;
  openSheet(
    "Configurar alunas",
    `<p class="meta" style="margin-top:-8px;margin-bottom:12px">${total} ${total === 1 ? "restante" : "restantes"} · plano, valor e vencimento</p>
    <form id="setup-form" data-id="${s.id}" novalidate>
      <div class="pay-box"><div class="who">${esc(s.name)}</div></div>
      <div class="field"><span>Plano</span>${planPicker("setup-pp", "")}</div>
      <div class="row2"><label class="field"><span>Valor da mensalidade</span><input name="amount" type="number" inputmode="decimal" min="0" step="0.01"></label>
      <label class="field"><span>Cobrar a partir de</span><select name="chargeFrom">${monthOptions(curYm())}</select></label></div>
      <div class="field"><span>Dia do vencimento</span>${dueCalendar("setup-cal", "")}</div>
      <small id="setup-err" style="color:var(--late);display:none;margin:-6px 0 10px">Informe valor e dia do vencimento.</small>
      <button class="btn btn-primary btn-block" type="submit" style="min-height:54px">Salvar e próxima</button>
    </form>
    <div class="sheet-foot"><button class="text-btn" type="button" data-action="setup-skip" data-id="${s.id}">Pular esta aluna</button>
      <button class="text-btn" type="button" data-action="setup-inactive" data-id="${s.id}">Não é mais aluna (inativar)</button></div>`,
  );
}
function submitSetup(form) {
  const s = student(form.dataset.id);
  if (!s) return;
  const fd = new FormData(form);
  const amount = Number(fd.get("amount"));
  const day = Number(fd.get("dueDay"));
  if (!(amount > 0) || !day) {
    $("#setup-err").style.display = "block";
    return;
  }
  const pid = fd.get("planId") || "";
  const p = plan(pid);
  const snap = undoPoint();
  Object.assign(s, {
    amount,
    dueDay: day,
    planId: p && p.price === amount ? pid : p ? pid : "",
    chargeFrom: fd.get("chargeFrom"),
  });
  ensureInvoices();
  save();
  toastUndo(`${firstName(s.name)} configurada`, snap);
  openSetup();
  refreshBehind();
}
function refreshBehind() {
  const y = window.scrollY;
  ensureInvoices();
  renderNav();
  $("#view").innerHTML = (VIEWS[ui.tab] || VIEWS.home)();
  window.scrollTo(0, y);
}

/* Edição rápida com confirmação financeira */
async function saveField(f) {
  const s = student(ui.studentId);
  if (!s) return;
  const snap = undoPoint();
  let val;
  if (f === "classDays")
    val = $$("#ed-days .opt.on").map((b) => Number(b.dataset.v));
  else if (f === "dueDay") val = $("#ed-cal-val").value;
  else val = $("#ed-val").value;
  const cur = S.invoices.find(
    (i) => i.studentId === s.id && i.month === curYm() && i.status === "open",
  );
  const nextM = monthName(addMonths(curYm(), 1));
  if (f === "name") {
    val = val.trim();
    if (!val) {
      toast("O nome não pode ficar vazio");
      return;
    }
    s.name = val;
    S.invoices.forEach((i) => {
      if (i.studentId === s.id) i.studentName = val;
    });
    S.makeups.forEach((m) => {
      if (m.studentId === s.id) m.studentName = val;
    });
  } else if (f === "amount" || f === "planId") {
    let newAmount = Number(s.amount),
      newPlan = s.planId;
    if (f === "planId") {
      val = ($("#ed-pp input[name=planId]") || {}).value || val;
      newPlan = val;
      const p = plan(val);
      if (p) newAmount = p.price;
    } else {
      newAmount = Number(val);
      if (!(newAmount >= 0)) {
        toast("Valor inválido");
        return;
      }
      if (s.planId && plan(s.planId) && plan(s.planId).price !== newAmount)
        newPlan = s.planId;
    }
    if (newAmount !== Number(s.amount) && isConfigured(s)) {
      const btns = [];
      if (cur && cur.amount !== newAmount)
        btns.push({
          v: "incl",
          label: `Aplicar a partir de ${monthName(curYm())}`,
          kind: "btn-primary",
        });
      btns.push(
        {
          v: "next",
          label:
            cur && cur.amount !== newAmount
              ? `Só a partir de ${nextM}`
              : "Confirmar",
          kind: cur ? "btn-soft" : "btn-primary",
        },
        { v: "", label: "Cancelar", kind: "btn-ghost" },
      );
      const r = await ask({
        title: `Mudar mensalidade para ${money(newAmount)}?`,
        text: `Mensalidades já criadas e pagamentos anteriores continuam com o valor antigo (${money(s.amount)}).${cur ? ` A de ${monthName(curYm())} está em aberto.` : ""}`,
        buttons: btns,
      });
      if (!r.v) return;
      if (r.v === "incl" && cur) cur.amount = newAmount;
    }
    s.amount = newAmount;
    s.planId = newPlan;
  } else if (f === "dueDay") {
    const d = Number(val);
    if (!(d >= 1 && d <= 31)) {
      toast("Informe um dia entre 1 e 31");
      return;
    }
    if (cur && isConfigured(s) && d !== Number(s.dueDay)) {
      const nd = dueDateFor(curYm(), d);
      const r = await ask({
        title: `Vencimento passa para o dia ${d}`,
        text: `As próximas mensalidades usarão o dia ${d}. A mensalidade de ${monthName(curYm())} (em aberto, vence ${fmtDM(cur.dueDate)}) também deve mudar para ${fmtDM(nd)}?`,
        buttons: [
          {
            v: "incl",
            label: `Sim, mudar ${monthName(curYm())} também`,
            kind: "btn-primary",
          },
          { v: "next", label: `Não, só a partir de ${nextM}` },
          { v: "", label: "Cancelar", kind: "btn-ghost" },
        ],
      });
      if (!r.v) return;
      if (r.v === "incl") cur.dueDate = nd;
    }
    s.dueDay = d;
  } else s[f] = typeof val === "string" ? val.trim() : val;
  let created = 0;
  if (!s.chargeFrom && Number(s.amount) > 0 && s.dueDay) {
    s.chargeFrom = curYm();
    const b = S.invoices.length;
    ensureInvoices();
    created = S.invoices.length - b;
  }
  ui.editField = null;
  save();
  refresh();
  toastUndo(
    created ? `Salvo — mensalidade de ${monthName(curYm())} criada` : "Salvo",
    snap,
  );
}
async function changeStatus(to) {
  const s = student(ui.studentId);
  if (!s) return;
  const c = curYm();
  const snap = undoPoint();
  let msg = "";
  if (to === "inactive") {
    const r = await ask({
      title: `Inativar ${esc(firstName(s.name))}?`,
      text: "O histórico é mantido. Não serão criadas mensalidades depois da data de saída. Mensalidades em aberto após essa data deixam de ser cobradas.",
      fields: `<label class="field"><span>Data de saída</span><input class="input" name="date" type="date" value="${todayISO()}"></label>`,
      buttons: [
        { v: "ok", label: "Inativar aluna", kind: "btn-primary" },
        { v: "", label: "Voltar" },
      ],
    });
    if (r.v !== "ok") return;
    const end = r.values.date || todayISO();
    s.status = "inactive";
    s.endDate = end;
    s.pausedFrom = "";
    S.invoices.forEach((i) => {
      if (i.studentId === s.id && i.status === "open" && i.month > ymOf(end)) {
        i.status = "canceled";
        i.cancelReason = "status";
        i.notes = "Aluna inativa";
      }
    });
    msg = "Aluna inativada";
  } else if (to === "paused") {
    const r = await ask({
      title: `Pausar ${esc(firstName(s.name))}?`,
      text: "Enquanto pausada, não são criadas novas mensalidades.",
      fields: `<label class="field"><span>Pausar a partir de</span><select class="input" name="m">${monthOptions(c)}</select></label>`,
      buttons: [
        { v: "ok", label: "Pausar", kind: "btn-primary" },
        { v: "", label: "Voltar" },
      ],
    });
    if (r.v !== "ok") return;
    const m = r.values.m || c;
    s.status = "paused";
    s.pausedFrom = m + "-01";
    s.endDate = "";
    S.invoices.forEach((i) => {
      if (i.studentId === s.id && i.status === "open" && i.month >= m) {
        i.status = "canceled";
        i.cancelReason = "status";
        i.notes = "Aluna pausada";
      }
    });
    msg = `Pausada a partir de ${monthName(m)}`;
  } else {
    const r = await ask({
      title: `Reativar ${esc(firstName(s.name))}?`,
      text: "As mensalidades voltam a ser criadas automaticamente.",
      fields: `<label class="field"><span>Voltar a cobrar a partir de</span><select class="input" name="m">${monthOptions(c)}</select></label>`,
      buttons: [
        { v: "ok", label: "Reativar", kind: "btn-primary" },
        { v: "", label: "Voltar" },
      ],
    });
    if (r.v !== "ok") return;
    const m = r.values.m || c;
    S.invoices = S.invoices.filter(
      (i) =>
        !(
          i.studentId === s.id &&
          i.status === "canceled" &&
          i.cancelReason === "status" &&
          i.month >= m
        ),
    );
    s.status = "active";
    s.endDate = "";
    s.pausedFrom = "";
    if (isConfigured(s) || (Number(s.amount) > 0 && s.dueDay)) s.chargeFrom = m;
    ensureInvoices();
    msg = "Aluna reativada";
  }
  save();
  refresh();
  toastUndo(msg, snap);
}

/* Reposições */
function openMakeup(id) {
  const mk = S.makeups.find((x) => x.id === id);
  if (!mk) return;
  const st = mkStatus(mk),
    s = student(mk.studentId);
  openSheet(
    "Reposição",
    `<div class="pay-box"><div class="who">${esc(s ? s.name : mk.studentName)}</div>
      <div class="ln"><span>Falta em</span><b>${fmtDMY(mk.absenceDate)}</b></div><div class="ln"><span>Situação</span>${mkPill(st)}</div>
      ${mk.doneDate ? `<div class="ln"><span>Realizada em</span><b>${fmtDMY(mk.doneDate)}</b></div>` : ""}</div>
    <form id="mk-form" data-id="${mk.id}" novalidate>
      <label class="field"><span>Motivo</span><input name="reason" value="${esc(mk.reason)}" placeholder="Ex.: viagem, doença"></label>
      <div class="row2"><label class="field"><span>Disponível até</span><input name="expiresOn" type="date" value="${mk.expiresOn}"></label>
      <label class="field"><span>Agendar para</span><input name="scheduledDate" type="date" value="${mk.scheduledDate}"></label></div>
      <button class="btn btn-primary btn-block" type="submit">Salvar</button>
    </form>
    <div style="display:grid;gap:8px;margin-top:10px">
      ${(st === "pending" || st === "scheduled") && S.settings.blockMakeupIfLate !== false && hasOverdue(mk.studentId) ? `<p class="note late" style="margin:0">🔴 Mensalidade em atraso — pela regra do studio, não pode repor até regularizar.</p>` : ""}
      ${st === "pending" || st === "scheduled" ? `<button class="btn btn-confirm" type="button" data-action="mk-done" data-id="${mk.id}">✓ Reposição realizada hoje</button>` : ""}
      ${st === "scheduled" ? `<button class="btn btn-soft" type="button" data-action="mk-missed" data-id="${mk.id}">Não compareceu</button>` : ""}
      ${st === "done" || st === "expired" || st === "canceled" || st === "missed" ? `<button class="btn btn-soft" type="button" data-action="mk-reopen" data-id="${mk.id}">Reabrir reposição</button>` : ""}
    </div>
    <div class="sheet-foot">${st === "pending" || st === "scheduled" ? `<button class="text-btn danger" type="button" data-action="mk-cancel" data-id="${mk.id}">Cancelar reposição</button>` : ""}
      ${s ? `<button class="text-btn" type="button" data-action="open-stu" data-id="${s.id}">Ver ficha da aluna</button>` : ""}</div>`,
  );
}
function openNewMakeup(sid = "") {
  const list = S.students
    .filter((s) => s.status !== "inactive")
    .sort((a, b) => a.name.localeCompare(b.name, "pt"));
  openSheet(
    "Nova reposição",
    `<form id="mk-new" novalidate>
    <label class="field"><span>Aluna</span><select name="sid">${list.map((s) => `<option value="${s.id}" ${s.id === sid ? "selected" : ""}>${esc(s.name)}</option>`).join("")}</select></label>
    <div class="row2"><label class="field"><span>Data da falta</span><input name="date" type="date" value="${todayISO()}"></label>
    <label class="field"><span>Agendar para <small>(opcional)</small></span><input name="scheduledDate" type="date"></label></div>
    <label class="field"><span>Motivo</span><input name="reason" placeholder="Ex.: viagem, doença"></label>
    <p class="meta" style="margin:-4px 0 14px">${S.settings.makeupValidityDays === "month" ? "Pode ser reposta até o fim do mês da falta." : `Fica disponível por ${S.settings.makeupValidityDays} dias a partir da falta.`}</p>
    <button class="btn btn-primary btn-block" type="submit">Criar reposição</button></form>`,
  );
}

/* Exportação */
function openExport(kind) {
  const d = exportData(kind, ui.month);
  openSheet(
    "Exportar",
    `<p class="meta" style="margin:-6px 0 14px"><b>${esc(d.title)}</b> · ${d.rows.length} ${d.rows.length === 1 ? "linha" : "linhas"}</p>
    <div style="display:grid;gap:8px">
      <button class="btn btn-soft btn-block" type="button" data-action="do-export" data-kind="${kind}" data-fmt="xlsx">Exportar Excel (.xlsx)</button>
      <button class="btn btn-soft btn-block" type="button" data-action="do-export" data-kind="${kind}" data-fmt="csv">Exportar CSV</button>
      <button class="btn btn-soft btn-block" type="button" data-action="do-export" data-kind="${kind}" data-fmt="print">Imprimir / salvar PDF</button>
    </div>`,
  );
}
function doExport(kind, fmt) {
  const d = exportData(kind, ui.month);
  const rows = d.pctCol != null ? d.rows : d.rows;
  if (fmt === "csv") {
    download(
      `kaf-${d.file}.csv`,
      new Blob(
        [
          toCSV(
            d.headers,
            rows.map((r) =>
              r.map((v, i) => (i === d.pctCol ? Math.round(v * 100) + "%" : v)),
            ),
          ),
        ],
        { type: "text/csv;charset=utf-8" },
      ),
    );
    toast("CSV gerado");
  } else if (fmt === "xlsx") {
    download(
      `kaf-${d.file}.xlsx`,
      xlsxBlob(
        d.title.slice(0, 31),
        d.headers,
        rows.map((r) =>
          r.map((v, i) => (i === d.pctCol ? Math.round(v * 100) + "%" : v)),
        ),
        d.money,
      ),
    );
    toast("Excel gerado");
  } else {
    const area = $("#print-area");
    area.innerHTML = `<header><img src="logo.svg" alt="KAF Studio Pilates"><div><h1>${esc(d.title)}</h1><p>Gerado em ${fmtDMY(todayISO())}</p></div></header>
      <table><thead><tr>${d.headers.map((h, i) => `<th class="${d.money.includes(i) ? "r" : ""}">${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((v, i) => `<td class="${d.money.includes(i) ? "r" : ""}">${i === d.pctCol ? Math.round(v * 100) + "%" : d.money.includes(i) ? esc(money(v)) : esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    closeSheet();
    const img = $("img", area);
    const go = () => setTimeout(() => window.print(), 60);
    img.complete ? go() : ((img.onload = go), (img.onerror = go));
  }
}

/* Seletor de mês */
let mpYear;
function openMonthPicker() {
  mpYear = Number(ui.month.slice(0, 4));
  const has = new Set(S.invoices.map((i) => i.month));
  const grid = () =>
    MONTHS.map((n, k) => {
      const m = `${mpYear}-${pad(k + 1)}`;
      return `<button type="button" class="opt ${m === ui.month ? "on" : ""} ${m === curYm() ? "cur" : ""} ${has.has(m) ? "has" : ""}" data-action="mp-pick" data-m="${m}">${MONTHS_SHORT[k]}</button>`;
    }).join("");
  const el = openSheet(
    "Escolher mês",
    `<div class="mp-year"><button class="icon-btn" type="button" data-action="mp-year" data-n="-1" aria-label="Ano anterior">${ic("chevL")}</button><b id="mp-y">${mpYear}</b>
    <button class="icon-btn" type="button" data-action="mp-year" data-n="1" aria-label="Próximo ano">${ic("chevR")}</button></div><div class="mp-grid" id="mp-grid">${grid()}</div>
    <button class="btn btn-soft btn-block" type="button" data-action="mp-pick" data-m="${curYm()}" style="margin-top:14px">Ir para o mês atual</button>`,
  );
  el._grid = grid;
}

/* Planos e formas de pagamento */
function openPlan(id) {
  const p = id
    ? plan(id)
    : { name: "", price: "", classes: 4, description: "", active: true };
  openSheet(
    id ? "Editar plano" : "Novo plano",
    `<form id="plan-form" data-id="${id || ""}" novalidate>
    <div class="row2"><label class="field"><span>Modalidade</span><select name="group">${[...new Set([...planGroups(), "Grupo", "Dupla", "Personal", "Outros"])].map((g) => `<option ${(p.group || "Outros") === g ? "selected" : ""}>${esc(g)}</option>`).join("")}</select></label>
    <label class="field"><span>Nome do plano</span><input name="name" value="${esc(p.name)}" required></label></div>
    <div class="row2"><label class="field"><span>Valor mensal</span><input name="price" type="number" inputmode="decimal" min="0" step="0.01" value="${p.price}"></label>
    <label class="field"><span>Aulas por mês</span><input name="classes" type="number" inputmode="numeric" min="0" value="${p.classes}"><small>0 = ilimitado</small></label></div>
    <label class="field"><span>Descrição</span><input name="description" value="${esc(p.description)}"></label>
    <p class="meta" style="margin:-4px 0 14px">Mudar o valor do plano não altera alunas já cadastradas nem mensalidades existentes.</p>
    <button class="btn btn-primary btn-block" type="submit">Salvar plano</button></form>
    ${
      id
        ? `<div class="sheet-foot"><button class="text-btn" type="button" data-action="plan-toggle" data-id="${id}">${p.active ? "Desativar plano" : "Reativar plano"}</button>
      <button class="text-btn danger" type="button" data-action="plan-delete" data-id="${id}">Excluir plano</button></div>`
        : ""
    }`,
  );
}
function openMethod(id) {
  const m = id ? method(id) : { name: "", icon: "💰" };
  openSheet(
    id ? "Forma de pagamento" : "Nova forma de pagamento",
    `<form id="method-form" data-id="${id || ""}" novalidate>
    <div class="row2" style="grid-template-columns:90px 1fr"><label class="field"><span>Ícone</span><input name="icon" value="${esc(m.icon)}" maxlength="4" style="text-align:center;font-size:22px"></label>
    <label class="field"><span>Nome</span><input name="name" value="${esc(m.name)}" required></label></div>
    <button class="btn btn-primary btn-block" type="submit">Salvar</button></form>`,
  );
}

/* ---------------- ações ---------------- */
const ACT = {
  logout: async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();

      if (error) {
        console.error("Erro ao sair:", error);
        toast("Não foi possível sair.");
        return;
      }

      console.log("KAF Studio — sessão encerrada.");
    } catch (error) {
      console.error("Erro inesperado ao sair:", error);
      toast("Erro ao encerrar sessão.");
    }
  },

  tab: (el) => {
    const t = el.dataset.tab;
    closeSheet();
    go(t);
  },
  bell: () => {
    closeSheet();
    go("inv", {
      month: curYm(),
      invFilter: overdueAll().length ? "late" : "today",
      invQ: "",
    });
  },
  "month-step": (el) => {
    ui.month = addMonths(ui.month, Number(el.dataset.n));
    refresh();
  },
  "month-pick": () => openMonthPicker(),
  "mp-year": (el) => {
    mpYear += Number(el.dataset.n);
    $("#mp-y").textContent = mpYear;
    $("#mp-grid").innerHTML = $(".sheet")._grid();
  },
  "mp-pick": (el) => {
    ui.month = el.dataset.m;
    closeSheet();
    refresh();
  },
  "goto-inv": (el) => go("inv", { invFilter: el.dataset.filter, invQ: "" }),
  "goto-mk": () =>
    go("classes", { classSeg: "mk", mkFilter: "open", attQ: "" }),
  "goto-att": () =>
    go("classes", { classSeg: "att", attDate: todayISO(), attQ: "" }),
  "open-month": (el) => go("inv", { month: el.dataset.m, invFilter: "all" }),
  "inv-filter": (el) => {
    ui.invFilter = el.dataset.f;
    $("#inv-dyn").innerHTML = invDynHTML();
  },
  "inv-extra": () => {
    const x = ui.invExtra;
    openSheet(
      "Filtros",
      `<label class="field"><span>Plano</span><select id="fx-plan">${planOptions(x.plan, { all: true, empty: "Todos os planos" })}</select></label>
      <label class="field"><span>Forma de pagamento</span><select id="fx-method"><option value="">Todas</option>${S.methods.map((m) => `<option value="${m.id}" ${x.method === m.id ? "selected" : ""}>${esc(m.name)}</option>`).join("")}</select></label>
      <label class="field"><span>Status da aluna</span><select id="fx-stu"><option value="">Todos</option>${Object.entries(
        STU_STATUS,
      )
        .map(
          ([k, v]) =>
            `<option value="${k}" ${x.stu === k ? "selected" : ""}>${v}</option>`,
        )
        .join("")}</select></label>
      <div class="row2"><button class="btn btn-soft" type="button" data-action="fx-clear">Limpar</button><button class="btn btn-primary" type="button" data-action="fx-apply">Aplicar</button></div>`,
    );
  },
  "fx-apply": () => {
    ui.invExtra = {
      plan: $("#fx-plan").value,
      method: $("#fx-method").value,
      stu: $("#fx-stu").value,
    };
    closeSheet();
    $("#inv-dyn").innerHTML = invDynHTML();
  },
  "fx-clear": () => {
    ui.invExtra = { plan: "", method: "", stu: "" };
    closeSheet();
    $("#inv-dyn").innerHTML = invDynHTML();
  },
  "open-inv": (el) => openInvoice(el.dataset.id),
  pay: (el) => openInvoice(el.dataset.id, true),
  "pick-method": (el) => {
    $$("#pay-methods .opt").forEach((b) => b.classList.toggle("on", b === el));
    $("#pay-err").style.display = "none";
  },
  "inv-unpay": async (el) => {
    const inv = getInvoice(el.dataset.id);
    if (!inv) return;
    if (
      !(await confirmAsk(
        "Desfazer este pagamento?",
        `O pagamento de ${esc(inv.studentName)} (${monthLabel(inv.month)}, ${money(inv.amount)}) será apagado e a mensalidade volta a ficar em aberto. Os totais são recalculados.`,
        "Desfazer pagamento",
        true,
      ))
    )
      return;
    const snap = undoPoint();
    Object.assign(inv, { status: "open", paidDate: "", methodId: "" });
    save();
    closeSheet();
    refresh();
    toastUndo("Pagamento apagado", snap);
  },
  "inv-cancel": async (el) => {
    let inv = getInvoice(el.dataset.id);
    if (!inv) return;
    const r = await ask({
      title: "Não cobrar este mês?",
      text: `A mensalidade de ${esc(inv.studentName)} em ${monthLabel(inv.month)} fica como “Não aplicável” e sai dos totais. Dá para voltar atrás depois.`,
      fields: `<label class="field"><span>Motivo (opcional)</span><input class="input" name="reason" placeholder="Ex.: férias, bolsa, viagem"></label>`,
      buttons: [
        { v: "ok", label: "Não cobrar", kind: "btn-danger" },
        { v: "", label: "Voltar" },
      ],
    });
    if (r.v !== "ok") return;
    const snap = undoPoint();
    inv = materialize(inv);
    Object.assign(inv, {
      status: "canceled",
      cancelReason: "manual",
      notes: (r.values.reason || "").trim(),
    });
    save();
    closeSheet();
    refresh();
    toastUndo("Mensalidade marcada como não aplicável", snap);
  },
  "inv-reopen": (el) => {
    const inv = getInvoice(el.dataset.id);
    if (!inv) return;
    Object.assign(inv, { status: "open", cancelReason: "", notes: "" });
    save();
    closeSheet();
    refresh();
    toast("Mensalidade voltou a ser cobrada");
  },
  "stu-filter": (el) => {
    ui.stuFilter = el.dataset.f;
    $("#stu-dyn").innerHTML = stuDynHTML();
  },
  "open-stu": (el) => {
    const from = ui.tab === "student" ? ui.from : ui.tab;
    closeSheet();
    go("student", { studentId: el.dataset.id, from });
  },
  back: () => go(ui.from || "students"),
  "new-stu": () => openNewStudent(),
  "edit-field": (el) => {
    ui.editField = el.dataset.f;
    refresh();
    const inp = $("#ed-val");
    if (inp) {
      inp.focus();
      if (inp.select && inp.type !== "number") inp.select();
    }
  },
  "edit-cancel": () => {
    ui.editField = null;
    refresh();
  },
  "edit-save": (el) => saveField(el.dataset.f),
  "toggle-opt": (el) => el.classList.toggle("on"),
  "stu-status": (el) => changeStatus(el.dataset.to),
  "stu-delete": async () => {
    const s = student(ui.studentId);
    if (!s) return;
    const r = await ask({
      title: `Excluir ${esc(s.name)}?`,
      text: "Prefira “Inativar”: mantém tudo. Se excluir, o cadastro some, mas os pagamentos já registrados continuam no histórico financeiro. Mensalidades em aberto deixam de ser cobradas.",
      buttons: [
        { v: "inactive", label: "Inativar em vez disso", kind: "btn-primary" },
        { v: "delete", label: "Excluir cadastro", kind: "btn-danger" },
        { v: "", label: "Voltar" },
      ],
    });
    if (r.v === "inactive") return changeStatus("inactive");
    if (r.v !== "delete") return;
    const snap = undoPoint();
    S.invoices.forEach((i) => {
      if (i.studentId === s.id && i.status === "open") {
        i.status = "canceled";
        i.cancelReason = "deleted";
        i.notes = "Cadastro excluído";
      }
    });
    S.makeups.forEach((m) => {
      if (m.studentId === s.id && ["pending", "scheduled"].includes(m.status))
        m.status = "canceled";
    });
    S.students = S.students.filter((x) => x !== s);
    save();
    go(ui.from === "student" ? "students" : ui.from || "students");
    toastUndo("Cadastro excluído", snap);
  },
  setup: () => {
    ui.setupSkip.clear();
    openSetup();
  },
  "stu-reset": async (el) => {
    const s = student(ui.studentId);
    if (!s) return;
    const mine = S.invoices.filter((i) => i.studentId === s.id);
    const all = el.dataset.mode === "all";
    const n = all
      ? mine.length
      : mine.filter((i) => i.status !== "paid").length;
    const paidN = mine.filter((i) => i.status === "paid").length;
    const ok = await confirmAsk(
      all
        ? `Apagar o financeiro de ${esc(firstName(s.name))}?`
        : `Resetar ${esc(firstName(s.name))}?`,
      all
        ? `Serão apagadas ${n} ${n === 1 ? "mensalidade" : "mensalidades"}${paidN ? `, incluindo ${paidN} ${paidN === 1 ? "pagamento registrado" : "pagamentos registrados"}` : ""}. Plano, valor e vencimento também são limpos.`
        : `Plano, valor e dia do vencimento serão limpos e ${n} ${n === 1 ? "mensalidade não paga será apagada" : "mensalidades não pagas serão apagadas"}.${paidN ? ` ${paidN} ${paidN === 1 ? "pagamento registrado continua" : "pagamentos registrados continuam"} no histórico.` : ""}`,
      all ? "Apagar tudo" : "Resetar",
      true,
    );
    if (!ok) return;
    const snap = undoPoint();
    S.invoices = S.invoices.filter(
      (i) => !(i.studentId === s.id && (all || i.status !== "paid")),
    );
    Object.assign(s, { planId: "", amount: 0, dueDay: null, chargeFrom: "" });
    save();
    refresh();
    toastUndo(
      all
        ? "Financeiro da aluna apagado"
        : "Aluna resetada — configure de novo",
      snap,
    );
  },
  undo: () => {
    if (!undoSnap) return;
    S = JSON.parse(undoSnap);
    undoSnap = null;
    migrate();
    save();
    $("#toast").classList.remove("show", "has-undo");
    closeSheet();
    ui.editField = null;
    if (ui.tab === "student" && !student(ui.studentId))
      ui.tab = ui.from || "students";
    refresh();
    toast("Desfeito");
  },
  "reset-finance": async () => {
    const n = S.invoices.length;
    if (
      !(await confirmAsk(
        "Zerar mensalidades e pagamentos?",
        `Apaga ${n} ${n === 1 ? "mensalidade" : "mensalidades"} e todos os pagamentos. As alunas, planos, presenças e reposições continuam. As mensalidades voltam a ser criadas a partir de ${monthName(curYm())}.`,
        "Zerar financeiro",
        true,
      ))
    )
      return;
    const snap = undoPoint();
    S.invoices = [];
    S.students.forEach((s) => {
      if (s.chargeFrom) s.chargeFrom = curYm();
    });
    ensureInvoices();
    save();
    refresh();
    toastUndo("Financeiro zerado", snap);
  },
  pp: (el) => {
    const box = el.closest(".plan-picker");
    box.dataset[el.dataset.k] = el.dataset.v;
    $$(`[data-k="${el.dataset.k}"]`, box).forEach((b) =>
      b.classList.toggle("on", b === el),
    );
    const p = ppResolve(box);
    const res = $(".pp-result", box);
    $("input[name=planId]", box).value = p ? p.id : "";
    res.innerHTML = p
      ? `<b>${esc(p.name)}</b><span class="num">${money(p.price)}/mês</span>`
      : "Escolha modalidade, frequência e período";
    if (p) {
      const form = box.closest("form");
      const amt = form && $("[name=amount]", form);
      if (amt) amt.value = p.price;
      const sel = $("#ed-val");
      if (sel && box.id === "ed-pp") sel.value = p.id;
    }
  },
  "pick-due": (el) => {
    const cal = $("#" + el.dataset.for);
    $$(".cal-day", cal).forEach((b) => b.classList.toggle("on", b === el));
    $(`#${el.dataset.for}-val`).value = el.dataset.v;
    $(".cal-hint", cal).innerHTML = dueHint(el.dataset.v);
    const err = $("#setup-err");
    if (err) err.style.display = "none";
  },
  "inv-due": async (el) => {
    let inv = getInvoice(el.dataset.id);
    if (!inv) return;
    const r = await ask({
      title: "Mudar vencimento desta mensalidade",
      text: `${esc(inv.studentName)} — ${monthLabel(inv.month)}. Só esta mensalidade muda; para mudar todos os meses, edite o dia do vencimento na ficha da aluna.`,
      fields: `<label class="field"><span>Nova data de vencimento</span><input class="input" name="date" type="date" value="${inv.dueDate}"></label>`,
      buttons: [
        { v: "ok", label: "Salvar vencimento", kind: "btn-primary" },
        { v: "", label: "Voltar" },
      ],
    });
    if (r.v !== "ok" || !r.values.date) return;
    const snap = undoPoint();
    inv = materialize(inv);
    inv.dueDate = r.values.date;
    save();
    closeSheet();
    refresh();
    toastUndo(`Vencimento alterado para ${fmtDM(inv.dueDate)}`, snap);
  },
  "setup-skip": (el) => {
    ui.setupSkip.add(el.dataset.id);
    openSetup();
  },
  "setup-inactive": (el) => {
    const s = student(el.dataset.id);
    if (s) {
      s.status = "inactive";
      s.endDate = todayISO();
      save();
      toast(`${firstName(s.name)} inativada`);
    }
    openSetup();
    refreshBehind();
  },
  "class-seg": (el) => {
    ui.classSeg = el.dataset.f;
    render();
  },
  "att-day": (el) => {
    ui.attDate = addDays(ui.attDate, Number(el.dataset.n));
    render({ top: false });
  },
  "att-scope": (el) => {
    ui.attScope = el.dataset.f;
    $("#cls-dyn").innerHTML = attDynHTML();
  },
  att: async (el) => {
    const { sid, type } = el.dataset;
    const prev = attOf(sid, ui.attDate);
    if (
      type === "makeup" &&
      !(prev && prev.type === "makeup") &&
      S.settings.blockMakeupIfLate !== false &&
      hasOverdue(sid)
    ) {
      const ok = await confirmAsk(
        "Mensalidade em atraso",
        `${esc(firstName(student(sid).name))} tem mensalidade em atraso. Pela regra do studio, não pode fazer reposição.`,
        "Registrar mesmo assim",
      );
      if (!ok) return;
    }
    const snap = undoPoint();
    const msg = setAttendance(sid, ui.attDate, type);
    save();
    $("#cls-dyn").innerHTML = attDynHTML();
    renderNav();
    toastUndo(msg, snap);
  },
  "mk-missed": async (el) => {
    const mk = S.makeups.find((x) => x.id === el.dataset.id);
    if (!mk) return;
    if (
      !(await confirmAsk(
        "Não compareceu à reposição?",
        "Pela regra do studio, a aluna perde o direito de repor esta aula.",
        "Confirmar",
        true,
      ))
    )
      return;
    mk.status = "missed";
    save();
    closeSheet();
    refresh();
    toast("Reposição marcada como não comparecida");
  },
  "mk-filter": (el) => {
    ui.mkFilter = el.dataset.f;
    $("#cls-dyn").innerHTML = mkDynHTML();
  },
  "open-mk": (el) => openMakeup(el.dataset.id),
  "new-mk": (el) => openNewMakeup(el.dataset.sid || ""),
  "mk-done": (el) => {
    const mk = S.makeups.find((x) => x.id === el.dataset.id);
    if (!mk) return;
    mk.status = "done";
    mk.doneDate = todayISO();
    if (!attOf(mk.studentId, mk.doneDate))
      S.attendance.push({
        id: uid(),
        studentId: mk.studentId,
        date: mk.doneDate,
        type: "makeup",
        makeupId: mk.id,
        note: "",
      });
    save();
    closeSheet();
    refresh();
    toast("Reposição realizada");
  },
  "mk-reopen": (el) => {
    const mk = S.makeups.find((x) => x.id === el.dataset.id);
    if (!mk) return;
    S.attendance = S.attendance.filter(
      (a) => !(a.makeupId === mk.id && a.type === "makeup"),
    );
    mk.status = mk.scheduledDate ? "scheduled" : "pending";
    mk.doneDate = "";
    if (mk.expiresOn < todayISO()) mk.expiresOn = makeupDeadline(todayISO());
    save();
    closeSheet();
    refresh();
    toast("Reposição reaberta");
  },
  "mk-cancel": async (el) => {
    const mk = S.makeups.find((x) => x.id === el.dataset.id);
    if (!mk) return;
    if (
      !(await confirmAsk(
        "Cancelar esta reposição?",
        "A aluna deixa de ter esta aula para repor.",
        "Cancelar reposição",
        true,
      ))
    )
      return;
    mk.status = "canceled";
    save();
    closeSheet();
    refresh();
    toast("Reposição cancelada");
  },
  export: (el) => openExport(el.dataset.kind),
  "do-export": (el) => doExport(el.dataset.kind, el.dataset.fmt),
  currency: (el) => {
    S.settings.currency = el.dataset.c;
    S.settings.currencySet = true;
    save();
    refresh();
  },
  "noshow-toggle": () => {
    S.settings.noshowGivesMakeup = !S.settings.noshowGivesMakeup;
    save();
    refresh();
  },
  "late-block-toggle": () => {
    S.settings.blockMakeupIfLate = S.settings.blockMakeupIfLate === false;
    save();
    refresh();
  },
  "plan-edit": (el) => openPlan(el.dataset.id),
  "plan-toggle": (el) => {
    const p = plan(el.dataset.id);
    p.active = !p.active;
    save();
    closeSheet();
    refresh();
    toast(p.active ? "Plano reativado" : "Plano desativado");
  },
  "plan-delete": async (el) => {
    const p = plan(el.dataset.id);
    const n = S.students.filter((s) => s.planId === p.id).length;
    if (n) {
      await ask({
        title: "Plano em uso",
        text: `${n} ${n === 1 ? "aluna usa" : "alunas usam"} este plano. Você pode desativá-lo para que não apareça em novos cadastros.`,
        buttons: [{ v: "", label: "Entendi", kind: "btn-primary" }],
      });
      return;
    }
    if (
      !(await confirmAsk(
        `Excluir “${esc(p.name)}”?`,
        "Mensalidades já criadas não são afetadas.",
        "Excluir plano",
        true,
      ))
    )
      return;
    S.plans = S.plans.filter((x) => x !== p);
    save();
    closeSheet();
    refresh();
    toast("Plano excluído");
  },
  "method-edit": (el) => openMethod(el.dataset.id),
  "method-toggle": (el) => {
    const m = method(el.dataset.id);
    m.active = !m.active;
    save();
    refresh();
  },
  backup: () => {
    download(
      `kaf-studio-backup-${todayISO()}.json`,
      new Blob([JSON.stringify(S, null, 1)], { type: "application/json" }),
    );
    toast("Backup baixado");
  },
  restore: () => $("#backup-file").click(),
  "load-demo": async () => {
    if (
      !(await confirmAsk(
        "Carregar dados de demonstração?",
        "Os dados atuais serão substituídos por 14 alunas fictícias. Baixe um backup antes se quiser guardar o que já fez.",
        "Carregar demonstração",
        true,
      ))
    )
      return;
    S = buildDemo();
    save();
    ui.month = curYm();
    go("home");
    toast("Dados de demonstração carregados");
  },
  "load-sheet": async () => {
    if (
      !(await confirmAsk(
        "Recomeçar com a lista da planilha?",
        "Todos os dados atuais (pagamentos, presenças, reposições) serão apagados e as 36 alunas da planilha voltam sem configuração. Baixe um backup antes.",
        "Apagar e recomeçar",
        true,
      ))
    )
      return;
    const cur = S.settings.currency;
    S = defaultState();
    S.settings.currency = cur;
    save();
    ui.month = curYm();
    go("home");
    toast("Lista da planilha carregada");
  },
  "sheet-close": () => closeSheet(),
  ans: (el) => answer(el.dataset.v),
  "clear-q": (el) => {
    const inp = $("#" + el.dataset.for);
    inp.value = "";
    inp.dispatchEvent(new Event("input", { bubbles: true }));
    inp.focus();
  },
};

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const a = ACT[el.dataset.action];
  if (!a) return;
  if (el.tagName === "A") return;
  e.preventDefault();
  a(el, e);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if ($("#confirm-root").classList.contains("open")) answer("");
    else if ($("#sheet-root").classList.contains("open")) closeSheet();
  }
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target.matches("article[data-action]")
  ) {
    e.preventDefault();
    ACT[e.target.dataset.action](e.target);
  }
});
document.addEventListener("input", (e) => {
  const t = e.target;
  const syncClear = (wrap, v, id) => {
    const btn = $(".clear", wrap);
    if (v && !btn)
      wrap.insertAdjacentHTML(
        "beforeend",
        `<button class="clear" type="button" data-action="clear-q" data-for="${id}" aria-label="Limpar">×</button>`,
      );
    if (!v && btn) btn.remove();
  };
  if (t.id === "inv-q") {
    ui.invQ = t.value;
    $("#inv-dyn").innerHTML = invDynHTML();
    syncClear(t.parentNode, t.value, t.id);
  }
  if (t.id === "stu-q") {
    ui.stuQ = t.value;
    $("#stu-dyn").innerHTML = stuDynHTML();
    syncClear(t.parentNode, t.value, t.id);
  }
  if (t.id === "att-q") {
    ui.attQ = t.value;
    $("#cls-dyn").innerHTML = ui.classSeg === "mk" ? mkDynHTML() : attDynHTML();
    syncClear(t.parentNode, t.value, t.id);
  }
  if (t.name === "name" && t.closest(".field.err"))
    t.closest(".field").classList.remove("err");
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.id === "att-date" && t.value) {
    ui.attDate = t.value;
    render({ top: false });
  }
  if (t.dataset.change === "plan-fill") {
    const p = plan(t.value);
    if (p) t.form.querySelector("[name=amount]").value = p.price;
  }
  if (t.dataset.change === "pp-sync") {
    const box = $("#ed-pp");
    if (box) {
      box.outerHTML = planPicker("ed-pp", t.value);
    }
  }
  if (t.dataset.change === "mk-validity") {
    S.settings.makeupValidityDays =
      t.value === "month" ? "month" : Number(t.value);
    save();
    toast("Prazo atualizado (vale para novas reposições)");
  }
  if (t.id === "backup-file" && t.files[0]) {
    const f = t.files[0];
    t.value = "";
    f.text().then(async (txt) => {
      let data;
      try {
        data = JSON.parse(txt);
      } catch (err) {
        toast("Arquivo inválido");
        return;
      }
      if (
        !data ||
        !Array.isArray(data.students) ||
        !Array.isArray(data.invoices)
      ) {
        toast("Este arquivo não é um backup do KAF Studio");
        return;
      }
      if (
        !(await confirmAsk(
          "Restaurar este backup?",
          `${data.students.length} alunas e ${data.invoices.length} mensalidades. Os dados atuais serão substituídos.`,
          "Restaurar",
          true,
        ))
      )
        return;
      S = data;
      migrate();
      save();
      go("home");
      toast("Backup restaurado");
    });
  }
});
document.addEventListener("submit", (e) => {
  const f = e.target;
  e.preventDefault();
  if (f.id === "pay-form") submitPay(f);
  else if (f.id === "stu-form") submitStudent(f);
  else if (f.id === "setup-form") submitSetup(f);
  else if (f.id === "mk-form") {
    const mk = S.makeups.find((x) => x.id === f.dataset.id);
    const fd = new FormData(f);
    mk.reason = String(fd.get("reason") || "").trim();
    mk.expiresOn = fd.get("expiresOn") || mk.expiresOn;
    const sd = fd.get("scheduledDate") || "";
    mk.scheduledDate = sd;
    if (mk.status !== "done" && mk.status !== "canceled")
      mk.status = sd ? "scheduled" : "pending";
    if (sd && sd > mk.expiresOn) mk.expiresOn = sd;
    save();
    closeSheet();
    refresh();
    toast("Reposição salva");
  } else if (f.id === "mk-new") {
    const fd = new FormData(f);
    if (!fd.get("sid")) return;
    const mk = createMakeup(
      fd.get("sid"),
      fd.get("date") || todayISO(),
      String(fd.get("reason") || "").trim(),
      "",
    );
    const sd = fd.get("scheduledDate");
    if (sd) {
      mk.scheduledDate = sd;
      mk.status = "scheduled";
      if (sd > mk.expiresOn) mk.expiresOn = sd;
    }
    save();
    closeSheet();
    refresh();
    toast("Reposição criada");
  } else if (f.id === "plan-form") {
    const fd = new FormData(f);
    const name = String(fd.get("name") || "").trim();
    if (!name) {
      toast("Dê um nome ao plano");
      return;
    }
    const data = {
      name,
      group: fd.get("group") || "Outros",
      price: Number(fd.get("price")) || 0,
      classes: Math.max(0, Number(fd.get("classes")) || 0),
      description: String(fd.get("description") || "").trim(),
    };
    if (f.dataset.id) Object.assign(plan(f.dataset.id), data);
    else S.plans.push(Object.assign({ id: uid(), active: true }, data));
    save();
    closeSheet();
    refresh();
    toast("Plano salvo");
  } else if (f.id === "method-form") {
    const fd = new FormData(f);
    const name = String(fd.get("name") || "").trim();
    if (!name) {
      toast("Dê um nome à forma de pagamento");
      return;
    }
    const data = { name, icon: String(fd.get("icon") || "").trim() || "💰" };
    if (f.dataset.id) Object.assign(method(f.dataset.id), data);
    else S.methods.push(Object.assign({ id: uid(), active: true }, data));
    save();
    closeSheet();
    refresh();
    toast("Forma de pagamento salva");
  }
});
window.addEventListener("afterprint", () => {
  $("#print-area").innerHTML = "";
});
/* Ao voltar para o app num dia novo, recalcula status e cria mensalidades do novo mês */
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && !$("#sheet-root").classList.contains("open")) {
    if (ui.attDate < todayISO() && ui.tab !== "classes")
      ui.attDate = todayISO();
    refreshBehind();
  }
});

load();
const added = ensureInvoices();
if (added) save();
render();
