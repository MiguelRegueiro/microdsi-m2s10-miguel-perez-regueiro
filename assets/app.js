const TRACKS = [
  { id: "itsm", name: "ITSM Triage" },
  { id: "hr", name: "HR" },
  { id: "proc", name: "Procurement" },
];

const STORAGE_KEYS = {
  track: "microdsi.track",
  marks: "microdsi.marks",
  pista: "microdsi.pista",
  lab: "microdsi.lab",
  savedLab: "microdsi.saved.lab",
  savedPista: "microdsi.saved.pista",
};

const LESSONS = [
  {
    tag: "M2-S10 · Fundamentos",
    title: "Proceso != Procedimiento != Capacidad",
    text: "Capacidad: lo que un area sabe hacer. Proceso: transforma entradas en salidas para un cliente. Procedimiento: como ejecutar un paso.",
    examples: {
      itsm: ["Capacidad: Soporte TI", "Proceso: Gestionar incidencias", "Procedimiento: Clasificar severidad y prioridad"],
      hr: ["Capacidad: Gestion de personas", "Proceso: Gestionar solicitudes HR", "Procedimiento: Verificar documentacion de permiso"],
      proc: ["Capacidad: Compras", "Proceso: Dar de alta proveedor", "Procedimiento: Validar fiscal y compliance"],
    },
    check: "Escribe 1 ejemplo real de capacidad, proceso y procedimiento.",
  },
  {
    tag: "M2-S10 · Limites",
    title: "Trigger + Output + Customer",
    text: "Si no puedes explicar trigger, output y customer, aun no tienes un proceso defendible.",
    examples: {
      itsm: ["Trigger: ticket creado", "Output: resolucion o escalado", "Customer: usuario final"],
      hr: ["Trigger: solicitud recibida", "Output: respuesta oficial registrada", "Customer: empleado"],
      proc: ["Trigger: solicitud de alta", "Output: proveedor aprobado/rechazado", "Customer: compras/finanzas"],
    },
    check: "Define trigger, output y customer de 1 proceso L1.",
  },
  {
    tag: "M2-S10 · Arquitectura",
    title: "L0 / L1 / L2: zoom correcto",
    text: "L0 es mapa macro, L1 es catalogo, L2 es variante operativa. Hoy toca L1 + 1 L2 mental del ganador.",
    examples: {
      itsm: ["L0: Operaciones TI", "L1: Gestionar incidencias", "L2: Triage por canal"],
      hr: ["L0: PeopleOps", "L1: Gestionar solicitudes", "L2: Solicitud sensible vs general"],
      proc: ["L0: Compras", "L1: Alta proveedor", "L2: Alta estandar vs excepcion"],
    },
    check: "Convierte 1 L0 en 3 L1 y elige 1 L2.",
  },
  {
    tag: "M2-S10 · Inventario",
    title: "Catalogo L1: verbo + objeto",
    text: "Un L1 no es un departamento. Debe ser repetible, medible y con cliente.",
    examples: {
      itsm: ["Gestionar incidencias", "Gestionar solicitudes", "Gestionar problemas"],
      hr: ["Gestionar permisos", "Gestionar altas/bajas", "Gestionar consultas de nomina"],
      proc: ["Dar de alta proveedor", "Gestionar ordenes de compra", "Gestionar homologacion"],
    },
    check: "Escribe 10-15 procesos L1, uno por linea.",
  },
  {
    tag: "M2-S10 · Medicion",
    title: "Baseline antes de cambiar",
    text: "Sin baseline no puedes demostrar mejora. Define 1 metrica de valor, 1 de coste y 1 de riesgo.",
    examples: {
      itsm: ["Valor: % misrouting", "Coste: AHT triage", "Riesgo: % P1 mal clasificados"],
      hr: ["Valor: tiempo de respuesta", "Coste: min/caso", "Riesgo: incidentes PII"],
      proc: ["Valor: lead time", "Coste: iteraciones por documento", "Riesgo: excepciones sin trazabilidad"],
    },
    check: "Define 3 metricas y como las medirias.",
  },
  {
    tag: "M2-S10 · Priorizacion",
    title: "Impacto - Esfuerzo - Riesgo",
    text: "Prioriza con score coherente y misma formula para todas las filas.",
    examples: {
      itsm: ["Impacto alto por volumen", "Esfuerzo medio por integraciones", "Riesgo medio por P1"],
      hr: ["Impacto alto por reputacion", "Esfuerzo medio por RBAC", "Riesgo alto por PII"],
      proc: ["Impacto alto por lead time", "Esfuerzo alto por ERP", "Riesgo medio-alto por compliance"],
    },
    check: "Puntua 5 procesos y anade nota observable por fila.",
  },
  {
    tag: "M2-S10 · SIPOC",
    title: "Contrato minimo antes de rediseñar",
    text: "SIPOC evita scope creep y aclara limites: suppliers, inputs, process, outputs, customers.",
    examples: {
      itsm: ["Suppliers: usuarios/sistemas", "Inputs: ticket+contexto", "Outputs: resolucion/escalado", "Customers: usuario+owner"],
      hr: ["Suppliers: empleados/payroll", "Inputs: solicitud+documentos", "Outputs: respuesta+registro", "Customers: empleado+HR"],
      proc: ["Suppliers: proveedor/compras", "Inputs: docs fiscales", "Outputs: alta/rechazo", "Customers: compras+finanzas"],
    },
    check: "Completa SIPOC con 4-6 pasos verbales.",
  },
  {
    tag: "M2-S10 · Frontera",
    title: "No-alcance del MVP",
    text: "Definir que NO entra evita bloqueo y hace viable el proyecto.",
    examples: {
      itsm: ["No cerrar P1 sin humano", "No automatizar cambios mayores"],
      hr: ["No dar asesoria legal personalizada", "No decisiones disciplinarias"],
      proc: ["No negociar precios", "No excepciones sin aprobacion humana"],
    },
    check: "Escribe 2 puntos de no-alcance.",
  },
  {
    tag: "M2-S10 · Decision",
    title: "Decision defendible",
    text: "La entrega final debe incluir proceso ganador + 2 criterios + 1 restriccion dominante + trade-off.",
    examples: {
      itsm: ["Ganador: Gestionar incidencias", "Criterio: volumen/retrabajo", "Restriccion: criticidad P1"],
      hr: ["Ganador: Gestionar solicitudes sensibles", "Criterio: tiempo + errores", "Restriccion: PII"],
      proc: ["Ganador: Alta proveedor", "Criterio: lead time + rechazo", "Restriccion: compliance"],
    },
    check: "Redacta la decision final en 4 lineas.",
  },
  {
    tag: "M2-S10 · IA Responsable",
    title: "AI Log obligatorio",
    text: "La IA se usa para generar opciones y auditar coherencia, no para copiar/pegar sin edicion.",
    examples: {
      itsm: ["Registrar prompt y cambios", "Verificar score consistente", "No incluir PII"],
      hr: ["Marcar supuestos", "Verificar outputs y customers", "No inventar datos"],
      proc: ["Revisar riesgos de auditoria", "Justificar notas por fila", "Corregir incoherencias"],
    },
    check: "Completa AI Log en 6 lineas dentro del Lab.",
  },
];

const PISTA_STEPS = {
  itsm: [
    { t: "ITSM · Objetivo", b: "Reducir misrouting y retrabajo con trazabilidad.", q: "Quien recibe el output final del proceso?" },
    { t: "L1 y variante L2", b: "L1 sugerido: Gestionar incidencias. L2: triage por canal y severidad.", q: "Escribe 1 variante L2 operativa." },
    { t: "Dolores", b: "Misrouting, KB desactualizada, escalados innecesarios.", q: "Anota 2 dolores medibles y 1 evidencia." },
    { t: "Priorizacion", b: "Puntua impacto, esfuerzo y riesgo en escala 1-5.", q: "Cual seria tu score y por que?" },
    { t: "SIPOC", b: "Cierra suppliers, inputs, process, outputs y customers.", q: "Escribe 4-6 pasos verbales del process." },
    { t: "No-alcance", b: "Define fronteras del MVP para evitar scope creep.", q: "Que 2 cosas NO harias en este MVP?" },
  ],
  hr: [
    { t: "HR · Objetivo", b: "Responder solicitudes con PII minimizada y auditoria.", q: "Que tipo de solicitud entra y cual no entra?" },
    { t: "L1 y variante L2", b: "L1 sugerido: Gestionar solicitudes HR. L2: sensible vs general.", q: "Escribe 1 L2 sensible y 1 L2 general." },
    { t: "Riesgo", b: "PII y compliance condicionan el diseño.", q: "Que input contiene PII y como lo minimizas?" },
    { t: "Priorizacion", b: "No priorices solo por volumen, pondera riesgo.", q: "Justifica impacto/esfuerzo/riesgo con una condicion real." },
    { t: "SIPOC", b: "Define limites claros del proceso ganador.", q: "Completa SIPOC y anade 1 control de gobernanza." },
    { t: "No-alcance", b: "Un MVP fuerte necesita fronteras claras.", q: "Que 2 cosas quedan fuera del MVP?" },
  ],
  proc: [
    { t: "Procurement · Objetivo", b: "Reducir lead time de alta proveedor y rechazos por documentacion.", q: "Que output define alta exitosa?" },
    { t: "L1 y variante L2", b: "L1 sugerido: Dar de alta proveedor. L2: estandar vs excepcion.", q: "Cual es la excepcion mas frecuente?" },
    { t: "Dolores", b: "Iteraciones por documentos, aprobaciones opacas, dependencia ERP.", q: "Anota 2 dolores y 1 dependencia clave." },
    { t: "Priorizacion", b: "Alto impacto suele traer alto esfuerzo: define trade-off.", q: "Explica tu score y la principal restriccion." },
    { t: "SIPOC", b: "Contrato minimo con compliance y auditoria.", q: "Donde entra el control de aprobacion/auditoria?" },
    { t: "No-alcance", b: "Define lo que no entra para proteger tiempos.", q: "Que 2 cosas no harias en este MVP?" },
  ],
};

const SAMPLE_LAB = {
  itsm: {
    inv: [
      "Gestionar incidencias",
      "Clasificar tickets por severidad",
      "Enrutar casos al equipo correcto",
      "Resolver incidencias de primer nivel",
      "Escalar incidencias criticas",
      "Actualizar base de conocimiento",
      "Notificar estado al usuario",
      "Registrar causa raiz",
      "Gestionar reaperturas",
      "Cerrar tickets con validacion",
    ].join("\n"),
    prio: [
      "Gestionar incidencias | 5 | 3 | 3 | -1 | alto volumen diario y alto retrabajo",
      "Clasificar tickets por severidad | 5 | 2 | 4 | -1 | impacto SLA y riesgo P1 mal clasificado",
      "Enrutar casos al equipo correcto | 4 | 2 | 3 | -1 | rebotes frecuentes entre equipos",
      "Resolver incidencias de primer nivel | 4 | 3 | 3 | -2 | mejora FCR pero requiere estandarizar guias",
      "Gestionar reaperturas | 3 | 2 | 2 | -1 | retrabajo visible en tickets reabiertos",
    ].join("\n"),
    sipoc: [
      "Suppliers: Usuario final, Sistema de monitoreo, Agente service desk",
      "Inputs: Ticket, contexto tecnico, prioridad (PII: posible)",
      "Process:",
      "1) Recibir ticket",
      "2) Validar informacion",
      "3) Clasificar severidad y categoria",
      "4) Enrutar o resolver",
      "5) Registrar accion y actualizar estado",
      "6) Cerrar y notificar",
      "Outputs: Ticket resuelto, ticket escalado, registro de trazabilidad",
      "Customers: Usuario final, owner de servicio, equipo de operaciones",
    ].join("\n"),
    winner: "Gestionar incidencias",
    restriction: "Criticidad P1 y trazabilidad de auditoria",
    crit1: "Alto volumen diario y alto porcentaje de rebotes",
    crit2: "Impacto directo en SLA y experiencia de usuario",
    tradeoff: "Mayor control de clasificacion inicial a cambio de mas disciplina operativa",
    aiTool: "ChatGPT (GPT-5)",
    aiObjective: "Generar opciones L1 y revisar coherencia de priorizacion",
    aiPrompt: "Actua como auditor de procesos ITSM.\nRevisa inventario, top 5 y SIPOC.\nMarca incoherencias y mejoras.",
    aiReturned: "Detecto duplicados en inventario y nota debil en 2 filas.\nPropuso cerrar mejor outputs y customers.",
    aiChanged: "- elimine duplicados\n- recalcule score con formula unica\n- precise outputs y customers",
    aiVerified: "- score consistente en las 5 filas\n- SIPOC con 4-6 pasos, outputs y customers claros",
  },
  hr: {
    inv: [
      "Gestionar solicitudes de empleados",
      "Validar documentacion de permisos",
      "Gestionar consultas de nomina",
      "Registrar incidencias de datos personales",
      "Aprobar cambios contractuales",
      "Coordinar onboarding",
      "Coordinar offboarding",
      "Actualizar expediente del empleado",
      "Gestionar certificados laborales",
      "Escalar casos sensibles de RRHH",
    ].join("\n"),
    prio: [
      "Gestionar solicitudes de empleados | 5 | 3 | 4 | -2 | alto volumen y riesgo de consistencia",
      "Gestionar consultas de nomina | 4 | 3 | 5 | -4 | PII alta y posibles impactos legales",
      "Validar documentacion de permisos | 4 | 2 | 4 | -2 | retrabajo por documentacion incompleta",
      "Actualizar expediente del empleado | 3 | 3 | 5 | -5 | requiere control de privacidad estricto",
      "Escalar casos sensibles de RRHH | 3 | 2 | 5 | -4 | alta criticidad reputacional",
    ].join("\n"),
    sipoc: [
      "Suppliers: Empleado, Manager, Sistema HRIS",
      "Inputs: Solicitud, documentos soporte, politicas internas (PII: si)",
      "Process:",
      "1) Recibir solicitud",
      "2) Validar identidad y datos minimos",
      "3) Revisar politica aplicable",
      "4) Resolver o escalar",
      "5) Registrar evidencia y trazabilidad",
      "6) Notificar respuesta",
      "Outputs: Solicitud resuelta, solicitud escalada, registro auditable",
      "Customers: Empleado, HRBP, auditoria interna",
    ].join("\n"),
    winner: "Gestionar solicitudes de empleados",
    restriction: "PII alta y cumplimiento normativo",
    crit1: "Volumen recurrente y tiempos de respuesta inestables",
    crit2: "Impacto directo en experiencia y reputacion interna",
    tradeoff: "Se gana velocidad con plantillas, pero se exige control fuerte de acceso",
    aiTool: "ChatGPT (GPT-5)",
    aiObjective: "Estructurar priorizacion con criterios observables",
    aiPrompt: "Actua como analista HR.\nPropone tabla Top 5 y audita coherencia de SIPOC.",
    aiReturned: "Entrego tabla inicial y alerto sobre riesgos PII no explicitados.",
    aiChanged: "- cambie procesos ambiguos\n- afine notas observables\n- anadi control de privacidad",
    aiVerified: "- formula de score consistente\n- customers y outputs definidos en SIPOC",
  },
  proc: {
    inv: [
      "Dar de alta proveedor",
      "Validar documentacion fiscal",
      "Gestionar homologacion de proveedores",
      "Gestionar aprobaciones de alta",
      "Registrar proveedor en ERP",
      "Gestionar excepciones documentales",
      "Notificar estado de alta",
      "Actualizar datos de proveedor",
      "Gestionar bloqueo de proveedor",
      "Auditar trazabilidad de alta",
    ].join("\n"),
    prio: [
      "Dar de alta proveedor | 5 | 4 | 4 | -3 | lead time alto e impacto en compras",
      "Validar documentacion fiscal | 4 | 3 | 5 | -4 | compliance critico y riesgo de rechazo",
      "Gestionar homologacion de proveedores | 4 | 4 | 4 | -4 | proceso largo con multiples actores",
      "Gestionar aprobaciones de alta | 3 | 3 | 4 | -4 | cuellos de botella por aprobacion manual",
      "Registrar proveedor en ERP | 3 | 2 | 3 | -2 | dependencia directa de sistema ERP",
    ].join("\n"),
    sipoc: [
      "Suppliers: Proveedor, Compras, Finanzas",
      "Inputs: Solicitud de alta, documentos fiscales, criterios compliance (PII: posible)",
      "Process:",
      "1) Recibir solicitud de alta",
      "2) Validar documentos obligatorios",
      "3) Revisar compliance y riesgo",
      "4) Gestionar aprobaciones",
      "5) Registrar en ERP",
      "6) Confirmar alta o rechazo",
      "Outputs: Proveedor activo, alta rechazada, expediente trazable",
      "Customers: Compras, Finanzas, Auditoria",
    ].join("\n"),
    winner: "Dar de alta proveedor",
    restriction: "Compliance y trazabilidad de auditoria",
    crit1: "Alto impacto por dependencia del lead time de compras",
    crit2: "Retrabajo frecuente por documentacion incompleta",
    tradeoff: "Se reduce lead time con controles estandar, pero se mantiene aprobacion humana en excepciones",
    aiTool: "ChatGPT (GPT-5)",
    aiObjective: "Generar borrador SIPOC y revisar riesgos de compliance",
    aiPrompt: "Actua como analista de procesos de procurement.\nRevisa Top 5 y SIPOC de alta proveedor.",
    aiReturned: "Propuso mejoras en pasos de control y en definicion de outputs.",
    aiChanged: "- refine pasos del process\n- agregue restriccion de compliance\n- mejore notas con condicion observable",
    aiVerified: "- SIPOC completo con customers y outputs\n- no se incluyeron datos sensibles reales",
  },
};

function $(selector, root = document) {
  return root.querySelector(selector);
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function safeGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : raw;
  } catch {
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore storage errors
  }
}

function safeJSONGet(key, fallback) {
  const raw = safeGet(key, null);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function getTrackFromURL() {
  const url = new URL(window.location.href);
  const candidate = url.searchParams.get("track");
  return TRACKS.some((track) => track.id === candidate) ? candidate : null;
}

function getTrack() {
  return getTrackFromURL() || safeGet(STORAGE_KEYS.track, "itsm") || "itsm";
}

function setTrack(trackId) {
  if (!TRACKS.some((track) => track.id === trackId)) return;
  safeSet(STORAGE_KEYS.track, trackId);
  window.location.reload();
}

function trackName(trackId) {
  return TRACKS.find((track) => track.id === trackId)?.name || trackId;
}

function splitLines(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function getSavedKey(scope, trackId) {
  const base = scope === "pista" ? STORAGE_KEYS.savedPista : STORAGE_KEYS.savedLab;
  return `${base}.${trackId}`;
}

function setSavedTimestamp(scope, trackId = getTrack()) {
  safeSet(getSavedKey(scope, trackId), String(Date.now()));
}

function getSavedTimestamp(scope, trackId = getTrack()) {
  const raw = safeGet(getSavedKey(scope, trackId), "");
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function formatSavedAgo(timestamp) {
  if (!timestamp) return "Sin guardar aun.";
  const deltaMs = Date.now() - timestamp;
  if (deltaMs < 5000) return "Guardado hace unos segundos.";
  const mins = Math.floor(deltaMs / 60000);
  if (mins < 1) return "Guardado hace menos de 1 minuto.";
  if (mins === 1) return "Guardado hace 1 minuto.";
  if (mins < 60) return `Guardado hace ${mins} minutos.`;
  const hours = Math.floor(mins / 60);
  if (hours === 1) return "Guardado hace 1 hora.";
  return `Guardado hace ${hours} horas.`;
}

function updateSavedIndicators() {
  const trackId = getTrack();
  const labNode = document.getElementById("labSavedAt");
  const pistaNode = document.getElementById("pistaSavedAt");

  if (labNode) labNode.textContent = formatSavedAgo(getSavedTimestamp("lab", trackId));
  if (pistaNode) pistaNode.textContent = formatSavedAgo(getSavedTimestamp("pista", trackId));
}

function labStateForTrack(trackId) {
  return safeJSONGet(`${STORAGE_KEYS.lab}.${trackId}`, {});
}

function getPistasDoneCount(trackId) {
  const steps = PISTA_STEPS[trackId] || [];
  return steps.filter((_, index) => {
    const value = safeGet(`${STORAGE_KEYS.pista}.${trackId}.${index}`, "") || "";
    return value.trim().length > 0;
  }).length;
}

function getFeedDoneCount(trackId) {
  const marks = getMarks();
  return LESSONS.reduce((acc, _, index) => acc + (marks[`${trackId}:${index}`] ? 1 : 0), 0);
}

function getLabBlockStatus(trackId) {
  const state = labStateForTrack(trackId);
  const inv = splitLines(state.inv || "");
  const prioRows = parsePriorityRows(state.prio || "");
  const sipocMap = extractSectionMap(state.sipoc || "");
  const processSteps = parseProcessSteps(sipocMap.process || []);

  const inventoryOk = inv.length >= 10 && inv.length <= 15;
  const prioOk =
    prioRows.length === 5 &&
    prioRows.every((row) => row.valid && row.scoreMatchesFormula && row.noteLooksObservable);
  const sipocOk =
    ["suppliers", "inputs", "outputs", "customers"].every((key) => (sipocMap[key] || []).join(" ").trim()) &&
    processSteps.length >= 4 &&
    processSteps.length <= 6;
  const decisionOk = ["winner", "restriction", "crit1", "crit2", "tradeoff"].every(
    (field) => (state[field] || "").trim().length > 0
  );
  const aiOk = ["aiTool", "aiObjective", "aiPrompt", "aiReturned", "aiChanged", "aiVerified"].every(
    (field) => (state[field] || "").trim().length > 0
  );

  const blocks = { inventoryOk, prioOk, sipocOk, decisionOk, aiOk };
  const done = Object.values(blocks).filter(Boolean).length;
  return { blocks, done, total: 5 };
}

function getTrackProgress(trackId) {
  const feedDone = getFeedDoneCount(trackId);
  const feedTotal = LESSONS.length;
  const pistasTotal = (PISTA_STEPS[trackId] || []).length;
  const pistasDone = getPistasDoneCount(trackId);
  const lab = getLabBlockStatus(trackId);

  const doneUnits = feedDone + pistasDone + lab.done;
  const totalUnits = feedTotal + pistasTotal + lab.total;
  const pct = totalUnits ? Math.round((doneUnits / totalUnits) * 100) : 0;

  return {
    feedDone,
    feedTotal,
    pistasDone,
    pistasTotal,
    labDone: lab.done,
    labTotal: lab.total,
    doneUnits,
    totalUnits,
    pct,
  };
}

function ensureGlobalProgress() {
  if ($("#globalProgress")) return;

  const topbar = $(".topbar");
  if (!topbar) return;

  const wrap = document.createElement("section");
  wrap.id = "globalProgress";
  wrap.className = "globalProgress";
  wrap.innerHTML = `
    <div class="inner">
      <div class="head">
        <b id="gpLabel">Progreso general</b>
        <span id="gpMeta">0/0</span>
      </div>
      <div class="gpTrack" aria-live="polite">
        <i id="gpFill"></i>
      </div>
    </div>
  `;

  topbar.insertAdjacentElement("afterend", wrap);
}

function updateGlobalProgress() {
  const trackId = getTrack();
  const stats = getTrackProgress(trackId);
  const label = $("#gpLabel");
  const meta = $("#gpMeta");
  const fill = $("#gpFill");

  if (label) label.textContent = `Progreso · ${trackName(trackId)}`;
  if (meta) meta.textContent = `${stats.doneUnits}/${stats.totalUnits} · ${stats.pct}%`;
  if (fill) fill.style.width = `${stats.pct}%`;

  const homeFeed = $("#progressFeed");
  const homePistas = $("#progressPistas");
  const homeLab = $("#progressLab");
  if (homeFeed) homeFeed.textContent = `${stats.feedDone}/${stats.feedTotal} tarjetas marcadas`;
  if (homePistas) homePistas.textContent = `${stats.pistasDone}/${stats.pistasTotal} pistas completas`;
  if (homeLab) homeLab.textContent = `${stats.labDone}/${stats.labTotal} bloques completos`;
}

function ensureTrackSelector() {
  const selector = $("#trackSel");
  if (!selector) return;

  selector.value = getTrack();
  selector.addEventListener("change", (event) => {
    setTrack(event.target.value);
  });
}

function getMarks() {
  return safeJSONGet(STORAGE_KEYS.marks, {});
}

function setMarks(marks) {
  safeSet(STORAGE_KEYS.marks, JSON.stringify(marks));
}

function isMarked(trackId, index) {
  const marks = getMarks();
  return !!marks[`${trackId}:${index}`];
}

function toggleMark(index, button) {
  const trackId = getTrack();
  const marks = getMarks();
  const key = `${trackId}:${index}`;
  marks[key] = !marks[key];
  setMarks(marks);

  button.textContent = marks[key] ? "Marcado" : "Marcar";
  button.classList.toggle("primary", !!marks[key]);
  updateGlobalProgress();
}

function pill(label, key, href) {
  const node = el(href ? "a" : "span", "pill");
  node.innerHTML = `<strong>${key}</strong> <span>${label}</span>`;
  if (href) node.href = href;
  return node;
}

function renderFeed() {
  const wrapper = $("#feedWrap");
  if (!wrapper) return;

  const trackId = getTrack();
  wrapper.innerHTML = "";

  LESSONS.forEach((lesson, index) => {
    const snap = el("section", "cardSnap");
    const card = el("article", "lessonCard");
    const main = el("div", "lessonMain");
    const side = el("aside", "lessonSide");

    const top = el("div", "titleRow");
    const badge = el("span", "badge");
    badge.textContent = lesson.tag;

    const button = el("button", "btn");
    button.type = "button";
    button.textContent = isMarked(trackId, index) ? "Marcado" : "Marcar";
    button.classList.toggle("primary", isMarked(trackId, index));
    button.addEventListener("click", () => toggleMark(index, button));

    top.appendChild(badge);
    top.appendChild(button);

    const title = el("h2");
    title.textContent = lesson.title;

    const text = el("p");
    text.textContent = lesson.text;

    const callout = el("div", "callout");
    const calloutTitle = el("b");
    calloutTitle.textContent = "Micro-entregable (30-90s)";
    const calloutBody = el("span");
    calloutBody.textContent = lesson.check;
    callout.appendChild(calloutTitle);
    callout.appendChild(calloutBody);

    main.appendChild(top);
    main.appendChild(title);
    main.appendChild(text);
    main.appendChild(callout);

    const examples = el("div", "sideBlock");
    const examplesTitle = el("h4");
    examplesTitle.textContent = `Ejemplo · ${trackName(trackId)}`;
    const list = el("ul");

    (lesson.examples[trackId] || []).forEach((line) => {
      const item = el("li");
      item.textContent = line;
      list.appendChild(item);
    });

    examples.appendChild(examplesTitle);
    examples.appendChild(list);

    const actions = el("div", "sideBlock");
    const actionsTitle = el("h4");
    actionsTitle.textContent = "Acciones rapidas";
    const actionRow = el("div", "actions");
    actionRow.appendChild(pill("Ir al Lab", "->", "lab.html"));
    actionRow.appendChild(pill("Abrir Pistas", "=>", "pista.htm"));
    actions.appendChild(actionsTitle);
    actions.appendChild(actionRow);

    side.appendChild(examples);
    side.appendChild(actions);

    card.appendChild(main);
    card.appendChild(side);
    snap.appendChild(card);
    wrapper.appendChild(snap);
  });
}

function getPistaKey(trackId, index) {
  return `${STORAGE_KEYS.pista}.${trackId}.${index}`;
}

function renderPistaCard(step, index, total, trackId) {
  const section = el("section", "pista");
  const card = el("div", "pistaCard");

  const saved = safeGet(getPistaKey(trackId, index), "") || "";

  card.innerHTML = `
    <div class="badge">Pista ${index + 1}/${total} · ${trackName(trackId)}</div>
    <h2 style="margin:10px 0 6px 0">${step.t}</h2>
    <p style="margin:0;color:var(--muted);line-height:1.45">${step.b}</p>
    <hr class="sep"/>
    <b style="display:block;font-size:13px">Check</b>
    <p style="margin:6px 0 10px 0;color:var(--muted)">${step.q}</p>
    <textarea data-step-index="${index}" placeholder="Escribe aqui..."></textarea>
    <div class="footerHint">Regla: 1-3 lineas + 1 dato/condicion.</div>
  `;
  const textarea = card.querySelector("textarea");
  if (textarea) textarea.value = saved;

  section.appendChild(card);
  return section;
}

function updatePistaCompletion(trackId, steps) {
  const label = $("#progLabel");
  if (!label) return;

  const done = steps.filter((_, index) => {
    const value = safeGet(getPistaKey(trackId, index), "") || "";
    return value.trim().length > 0;
  }).length;

  label.textContent = `${done}/${steps.length} pistas completas`;
  updateGlobalProgress();
}

function setupPista() {
  const wrapper = $("#pistaWrap");
  if (!wrapper) return;

  const trackId = getTrack();
  const steps = PISTA_STEPS[trackId] || [];

  wrapper.innerHTML = "";
  steps.forEach((step, index) => {
    wrapper.appendChild(renderPistaCard(step, index, steps.length, trackId));
  });

  wrapper.querySelectorAll("textarea[data-step-index]").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      const index = Number(event.target.getAttribute("data-step-index"));
      safeSet(getPistaKey(trackId, index), event.target.value);
      setSavedTimestamp("pista", trackId);
      updatePistaCompletion(trackId, steps);
      updateSavedIndicators();
    });
  });

  updatePistaCompletion(trackId, steps);

  const slides = [...wrapper.children];
  const progress = $("#prog");
  const prevBtn = $("#pPrev");
  const nextBtn = $("#pNext");
  const stepLabel = $("#pStep");

  if (!slides.length) return;

  let currentIndex = 0;

  function updatePistaNav(index) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    if (progress) {
      const pct = ((currentIndex + 1) / slides.length) * 100;
      progress.style.width = `${pct.toFixed(0)}%`;
    }
    if (stepLabel) stepLabel.textContent = `Paso ${currentIndex + 1} de ${slides.length}`;
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) {
      nextBtn.disabled = currentIndex === slides.length - 1;
      nextBtn.textContent = currentIndex === slides.length - 1 ? "Fin" : "Siguiente";
    }
  }

  function goToSlide(index) {
    updatePistaNav(index);
    slides[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = slides.indexOf(visible.target);
      if (index >= 0) updatePistaNav(index);
    },
    { root: wrapper, threshold: [0.55, 0.75, 0.95] }
  );

  slides.forEach((slide) => observer.observe(slide));
  updatePistaNav(0);
}

const LAB_FIELD_IDS = [
  "inv",
  "prio",
  "sipoc",
  "winner",
  "restriction",
  "crit1",
  "crit2",
  "tradeoff",
  "aiTool",
  "aiObjective",
  "aiPrompt",
  "aiReturned",
  "aiChanged",
  "aiVerified",
  "mdOut",
];

function getLabStorageKey() {
  return `${STORAGE_KEYS.lab}.${getTrack()}`;
}

function getLabState() {
  return safeJSONGet(getLabStorageKey(), {});
}

function setLabState(state) {
  safeSet(getLabStorageKey(), JSON.stringify(state));
}

function saveLabField(fieldId, value) {
  const state = getLabState();
  state[fieldId] = value;
  setLabState(state);
  setSavedTimestamp("lab");
  updateSavedIndicators();
}

function restoreLabFields() {
  const state = getLabState();
  LAB_FIELD_IDS.forEach((fieldId) => {
    const node = document.getElementById(fieldId);
    if (!node) return;
    if (typeof state[fieldId] === "string") {
      node.value = state[fieldId];
    }
  });
}

function hasDataLikeNote(text) {
  if (!text) return false;
  const keywords = [
    "volumen",
    "tiempo",
    "retrabajo",
    "pii",
    "auditoria",
    "criticidad",
    "lead",
    "sla",
    "supuesto",
    "estimacion",
    "erp",
    "compliance",
  ];
  const lower = text.toLowerCase();
  return /\d/.test(lower) || keywords.some((keyword) => lower.includes(keyword));
}

function parsePriorityRows(text) {
  return splitLines(text).map((line) => {
    const parts = line.split("|").map((part) => part.trim());

    if (parts.length < 6) {
      return {
        raw: line,
        valid: false,
        reason: "Formato incompleto (faltan columnas)",
      };
    }

    const [process, impactRaw, effortRaw, riskRaw, scoreRaw, ...noteParts] = parts;
    const impact = Number(impactRaw);
    const effort = Number(effortRaw);
    const risk = Number(riskRaw);
    const score = Number(scoreRaw);
    const note = noteParts.join(" | ").trim();

    const numericOk = [impact, effort, risk, score].every((value) => Number.isFinite(value));
    const rangeOk = [impact, effort, risk].every((value) => value >= 1 && value <= 5);
    const formulaScore = impact - effort - risk;

    if (!numericOk || !rangeOk) {
      return {
        raw: line,
        valid: false,
        reason: "Impacto, Esfuerzo y Riesgo deben ser numeros 1-5",
      };
    }

    if (!note) {
      return {
        raw: line,
        valid: false,
        reason: "Falta nota con dato/condicion",
      };
    }

    return {
      raw: line,
      valid: true,
      process,
      impact,
      effort,
      risk,
      score,
      formulaScore,
      scoreMatchesFormula: score === formulaScore,
      note,
      noteLooksObservable: hasDataLikeNote(note),
    };
  });
}

function startsWithVerb(line) {
  const firstWord = line.toLowerCase().split(/\s+/)[0] || "";
  const commonVerbs = new Set([
    "gestionar",
    "validar",
    "aprobar",
    "registrar",
    "resolver",
    "dar",
    "analizar",
    "clasificar",
    "enrutar",
    "cerrar",
    "atender",
    "procesar",
    "actualizar",
    "notificar",
    "recibir",
    "verificar",
    "controlar",
    "revisar",
    "coordinar",
    "ejecutar",
  ]);

  if (commonVerbs.has(firstWord)) return true;
  return /(ar|er|ir)$/.test(firstWord);
}

function cleanInventoryLine(line) {
  return line
    .replace(/^\s*[-*•]+\s*/, "")
    .replace(/^\s*\d+[\)\.\-:]\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeInventoryText(raw) {
  const lines = splitLines(raw).map(cleanInventoryLine).filter(Boolean);
  const seen = new Set();
  const deduped = [];
  lines.forEach((line) => {
    const key = line.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    deduped.push(line);
  });
  return deduped.join("\n");
}

function toScale15(value, fallback = 3) {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return Math.max(1, Math.min(5, Math.round(num)));
}

function normalizePriorityText(raw) {
  const lines = splitLines(raw);
  const normalized = lines.map((line) => {
    const parts = line
      .split("|")
      .map((p) => p.trim())
      .filter(Boolean);

    if (parts.length >= 6) {
      const process = parts[0];
      const impact = toScale15(parts[1], 3);
      const effort = toScale15(parts[2], 3);
      const risk = toScale15(parts[3], 3);
      const score = impact - effort - risk;
      const note = parts.slice(5).join(" | ").trim() || "Supuesto: completar con dato/condicion";
      return `${process} | ${impact} | ${effort} | ${risk} | ${score} | ${note}`;
    }

    const sep = line.includes(";") ? ";" : ",";
    const compact = line.split(sep).map((p) => p.trim()).filter(Boolean);
    const process = compact[0] || line.trim();
    const impact = toScale15(compact[1], 3);
    const effort = toScale15(compact[2], 3);
    const risk = toScale15(compact[3], 3);
    const score = impact - effort - risk;
    const note = compact[4] || "Supuesto: completar con dato/condicion";
    return `${process} | ${impact} | ${effort} | ${risk} | ${score} | ${note}`;
  });

  return normalized.join("\n");
}

function setInlineHint(id, ok, text) {
  const node = document.getElementById(id);
  if (!node) return;
  node.className = `inlineHint ${ok ? "ok" : "warn"}`;
  node.textContent = `${ok ? "OK" : "Pendiente"} · ${text}`;
}

function extractSectionMap(sipocText) {
  const aliases = {
    suppliers: ["suppliers", "supplier", "proveedores", "proveedor"],
    inputs: ["inputs", "input", "entradas", "entrada"],
    process: ["process", "proceso"],
    outputs: ["outputs", "output", "salidas", "salida"],
    customers: ["customers", "customer", "clientes", "cliente"],
  };

  const map = {
    suppliers: [],
    inputs: [],
    process: [],
    outputs: [],
    customers: [],
  };

  let currentSection = null;

  sipocText.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let switched = false;

    Object.entries(aliases).forEach(([key, words]) => {
      if (switched) return;
      const matched = words.some((word) => lower.startsWith(word));
      if (!matched) return;

      currentSection = key;
      switched = true;

      const content = trimmed.replace(/^[^:]*:\s*/, "").trim();
      if (content) map[key].push(content);
    });

    if (!switched && currentSection) {
      map[currentSection].push(trimmed);
    }
  });

  return map;
}

function parseProcessSteps(processLines) {
  const combined = processLines.join("\n").trim();
  if (!combined) return [];

  const numbered = combined.match(/\d+[\)\.\-]\s*[^\n;]+/g);
  if (numbered && numbered.length) {
    return numbered.map((line) => line.replace(/^\d+[\)\.\-]\s*/, "").trim()).filter(Boolean);
  }

  const bullets = processLines
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);

  if (bullets.length > 1) return bullets;

  return combined
    .split(/\s*;\s*/)
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);
}

function qaItem(ok, message) {
  return { ok, message };
}

function validateLab() {
  const inventory = splitLines($("#inv")?.value || "");
  const prioRows = parsePriorityRows($("#prio")?.value || "");
  const sipocMap = extractSectionMap($("#sipoc")?.value || "");
  const processSteps = parseProcessSteps(sipocMap.process);

  const decisionFields = ["winner", "restriction", "crit1", "crit2", "tradeoff"];
  const aiFields = ["aiTool", "aiObjective", "aiPrompt", "aiReturned", "aiChanged", "aiVerified"];

  const inventoryCountOk = inventory.length >= 10 && inventory.length <= 15;
  const inventoryFormatOk = inventory.length > 0 && inventory.every((line) => {
    const words = line.split(/\s+/);
    return words.length >= 2 && startsWithVerb(line);
  });

  const prioCountOk = prioRows.length === 5;
  const prioRowsValid = prioRows.length > 0 && prioRows.every((row) => row.valid);
  const prioFormulaOk = prioRows.length > 0 && prioRows.every((row) => row.valid && row.scoreMatchesFormula);
  const prioNotesOk = prioRows.length > 0 && prioRows.every((row) => row.valid && row.noteLooksObservable);

  const sipocCoreOk = ["suppliers", "inputs", "outputs", "customers"].every(
    (key) => sipocMap[key].join(" ").trim().length > 0
  );
  const sipocStepsOk = processSteps.length >= 4 && processSteps.length <= 6;

  const decisionOk = decisionFields.every((fieldId) => ($("#" + fieldId)?.value || "").trim().length > 0);
  const aiLogOk = aiFields.every((fieldId) => ($("#" + fieldId)?.value || "").trim().length > 0);

  const criticalMissing = [];
  if (!(inventoryCountOk && inventoryFormatOk)) {
    criticalMissing.push("Inventario: 10-15 procesos con formato verbo + objeto.");
  }
  if (!(prioCountOk && prioRowsValid && prioFormulaOk && prioNotesOk)) {
    criticalMissing.push("Priorizacion: Top 5 valido, score consistente y notas observables.");
  }
  if (!(sipocCoreOk && sipocStepsOk)) {
    criticalMissing.push("SIPOC: Suppliers/Inputs/Outputs/Customers + Process de 4-6 pasos.");
  }
  if (!decisionOk) {
    criticalMissing.push("Decision final: ganador, 2 criterios, restriccion y trade-off.");
  }
  if (!aiLogOk) {
    criticalMissing.push("AI Log: completa los 6 campos obligatorios.");
  }

  const checks = [
    qaItem(inventoryCountOk, `Inventario: ${inventory.length} lineas (objetivo: 10-15)`),
    qaItem(inventoryFormatOk, "Inventario: cada linea con formato verbo + objeto"),
    qaItem(prioCountOk, `Priorizacion: ${prioRows.length} filas (objetivo: 5)`),
    qaItem(prioRowsValid, "Priorizacion: columnas completas y valores 1-5"),
    qaItem(prioFormulaOk, "Score consistente: Impacto - Esfuerzo - Riesgo"),
    qaItem(prioNotesOk, "Notas con dato/condicion observable en todas las filas"),
    qaItem(sipocCoreOk, "SIPOC completo: Suppliers, Inputs, Outputs y Customers"),
    qaItem(sipocStepsOk, `SIPOC Process con ${processSteps.length} pasos (objetivo: 4-6)`),
    qaItem(decisionOk, "Decision final completa: ganador + 2 criterios + restriccion + trade-off"),
    qaItem(aiLogOk, "AI Log completo (6 campos)"),
  ];

  setInlineHint(
    "invHint",
    inventoryCountOk && inventoryFormatOk,
    `Inventario ${inventory.length}/10-15 lineas, formato verbo+objeto`
  );
  setInlineHint(
    "prioHint",
    prioCountOk && prioRowsValid && prioFormulaOk && prioNotesOk,
    `Top 5 con score consistente y notas observables`
  );
  setInlineHint(
    "sipocHint",
    sipocCoreOk && sipocStepsOk,
    `SIPOC completo con ${processSteps.length} pasos (objetivo 4-6)`
  );
  setInlineHint(
    "decisionHint",
    decisionOk,
    "Ganador + 2 criterios + restriccion + trade-off"
  );
  setInlineHint(
    "aiHint",
    aiLogOk,
    "AI Log con 6 campos completos"
  );

  const qaList = $("#qaList");
  if (qaList) {
    qaList.innerHTML = "";
    checks.forEach((check) => {
      const item = el("li", `qaItem ${check.ok ? "ok" : "warn"}`);
      item.textContent = `${check.ok ? "OK" : "Pendiente"} · ${check.message}`;
      qaList.appendChild(item);
    });
  }

  updateGlobalProgress();

  return {
    ok: checks.every((check) => check.ok),
    checks,
    criticalMissing,
    inventory,
    prioRows,
    sipocMap,
    processSteps,
  };
}

function openGateModal(items) {
  const modal = document.getElementById("gateModal");
  const list = document.getElementById("gateList");
  if (!modal || !list) {
    window.alert(`Faltan elementos obligatorios:\\n- ${items.join("\\n- ")}`);
    return;
  }

  list.innerHTML = "";
  items.forEach((itemText) => {
    const item = el("li", "qaItem warn");
    item.textContent = `Pendiente · ${itemText}`;
    list.appendChild(item);
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeGateModal() {
  const modal = document.getElementById("gateModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function setupGateModal() {
  const modal = document.getElementById("gateModal");
  const closeBtn = document.getElementById("gateClose");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeGateModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeGateModal();
  });
}

function markdownList(lines, fallbackText = "_(vacio)_") {
  if (!lines.length) return fallbackText;
  return lines.map((line) => `- ${line}`).join("\n");
}

function buildPriorityMarkdown(rows) {
  if (!rows.length) return "_(vacio)_";
  if (!rows.every((row) => row.valid)) {
    return ["```", ...rows.map((row) => row.raw), "```"].join("\n");
  }

  const header = "| Proceso | Impacto | Esfuerzo | Riesgo | Score | Nota |";
  const sep = "|---|---:|---:|---:|---:|---|";
  const lines = rows.map(
    (row) => `| ${row.process} | ${row.impact} | ${row.effort} | ${row.risk} | ${row.score} | ${row.note} |`
  );
  return [header, sep, ...lines].join("\n");
}

function sectionText(lines) {
  return lines.length ? lines.join("\n") : "_(vacio)_";
}

function buildDefenseQuestions({ winner, criterion1, criterion2, restriction, tradeoff }) {
  return [
    {
      q: `Por que el proceso ganador "${winner}" fue priorizado antes que otras opciones?`,
      a: `Porque combina ${criterion1} y ${criterion2}, dentro de la restriccion dominante: ${restriction}.`,
    },
    {
      q: `Que riesgo principal asumes al mejorar este proceso y como lo controlas?`,
      a: `El riesgo principal esta ligado a ${restriction}. Lo controlo con trazabilidad, validaciones y revision humana en casos sensibles.`,
    },
    {
      q: "Cual es el trade-off que aceptas en este MVP?",
      a: `Trade-off aceptado: ${tradeoff}. Se prioriza impacto temprano sin ampliar alcance innecesario.`,
    },
  ];
}

function exportLabToMarkdown(showWarnings = true) {
  const validation = validateLab();

  const trackId = getTrack();
  const dateISO = new Date().toISOString().slice(0, 10);

  const winner = $("#winner")?.value.trim() || "_(sin definir)_";
  const criterion1 = $("#crit1")?.value.trim() || "_(sin definir)_";
  const criterion2 = $("#crit2")?.value.trim() || "_(sin definir)_";
  const restriction = $("#restriction")?.value.trim() || "_(sin definir)_";
  const tradeoff = $("#tradeoff")?.value.trim() || "_(sin definir)_";

  const aiTool = $("#aiTool")?.value.trim() || "_(sin definir)_";
  const aiObjective = $("#aiObjective")?.value.trim() || "_(sin definir)_";
  const aiPrompt = $("#aiPrompt")?.value.trim() || "_(sin definir)_";
  const aiReturned = $("#aiReturned")?.value.trim() || "_(sin definir)_";
  const aiChanged = $("#aiChanged")?.value.trim() || "_(sin definir)_";
  const aiVerified = $("#aiVerified")?.value.trim() || "_(sin definir)_";
  const defense = buildDefenseQuestions({
    winner,
    criterion1,
    criterion2,
    restriction,
    tradeoff,
  });

  const md = [
    `# M2-S10 · Entregable · ${trackName(trackId)}`,
    "",
    `Fecha: ${dateISO}`,
    "",
    "## Inventario (L1)",
    markdownList(validation.inventory),
    "",
    "## Priorizacion (Top 5)",
    buildPriorityMarkdown(validation.prioRows),
    "",
    "## SIPOC (proceso ganador)",
    "### Suppliers",
    sectionText(validation.sipocMap.suppliers),
    "",
    "### Inputs",
    sectionText(validation.sipocMap.inputs),
    "",
    "### Process (4-6 pasos)",
    markdownList(validation.processSteps),
    "",
    "### Outputs",
    sectionText(validation.sipocMap.outputs),
    "",
    "### Customers",
    sectionText(validation.sipocMap.customers),
    "",
    "## Decision final",
    `- Proceso ganador: ${winner}`,
    `- Criterio 1 (dato/condicion): ${criterion1}`,
    `- Criterio 2 (dato/condicion): ${criterion2}`,
    `- Restriccion dominante: ${restriction}`,
    `- Trade-off principal: ${tradeoff}`,
    "",
    "## Uso responsable de IA",
    "- Datos no confirmados deben marcarse como \"Supuesto\" o \"Estimacion\".",
    "- No incluir PII real (nombres, emails, IDs, telefonos, cuentas).",
    "",
    "## Preguntas de defensa oral (guia)",
    ...defense.flatMap((row, idx) => [
      `${idx + 1}. ${row.q}`,
      `   - Respuesta sugerida: ${row.a}`,
    ]),
    "",
    "## AI Log",
    `1) Herramienta/modelo: ${aiTool}`,
    `2) Objetivo del prompt: ${aiObjective}`,
    "3) Prompt usado:",
    aiPrompt,
    "",
    "4) Que devolvio (resumen):",
    aiReturned,
    "",
    "5) Que cambie yo:",
    aiChanged,
    "",
    "6) Que verifique:",
    aiVerified,
  ].join("\n");

  const output = $("#mdOut");
  if (output) {
    output.value = md;
    saveLabField("mdOut", md);
  }

  if (showWarnings && !validation.ok) {
    window.alert("Markdown generado, pero hay pendientes en el checklist automatico. Revisa los items en amarillo antes de entregar.");
  }

  return md;
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function fillLabFromSample(trackId) {
  const sample = SAMPLE_LAB[trackId];
  if (!sample) return;

  Object.entries(sample).forEach(([fieldId, value]) => {
    const node = document.getElementById(fieldId);
    if (!node) return;
    node.value = value;
    saveLabField(fieldId, value);
  });
}

function clearLabForm() {
  LAB_FIELD_IDS.forEach((fieldId) => {
    const node = document.getElementById(fieldId);
    if (!node) return;
    node.value = "";
    saveLabField(fieldId, "");
  });
}

function setupLab() {
  if (!$("#inv")) return;

  restoreLabFields();

  LAB_FIELD_IDS.forEach((fieldId) => {
    const node = document.getElementById(fieldId);
    if (!node || fieldId === "mdOut") return;

    node.addEventListener("input", (event) => {
      saveLabField(fieldId, event.target.value);
      validateLab();
    });
  });

  const exportButton = $("#btnExport");
  if (exportButton) {
    exportButton.addEventListener("click", () => exportLabToMarkdown(true));
  }

  const downloadButton = $("#btnDownload");
  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      const validation = validateLab();
      if (validation.criticalMissing.length) {
        openGateModal(validation.criticalMissing);
        return;
      }
      const markdown = exportLabToMarkdown(false);
      if (!markdown) return;
      downloadText(`m2-s10_${getTrack()}_entregable.md`, markdown);
    });
  }

  const normalizeInvButton = $("#btnNormalizeInv");
  if (normalizeInvButton) {
    normalizeInvButton.addEventListener("click", () => {
      const inv = $("#inv");
      if (!inv) return;
      const normalized = normalizeInventoryText(inv.value || "");
      inv.value = normalized;
      saveLabField("inv", normalized);
      validateLab();
    });
  }

  const normalizePrioButton = $("#btnNormalizePrio");
  if (normalizePrioButton) {
    normalizePrioButton.addEventListener("click", () => {
      const prio = $("#prio");
      if (!prio) return;
      const normalized = normalizePriorityText(prio.value || "");
      prio.value = normalized;
      saveLabField("prio", normalized);
      validateLab();
    });
  }

  const sampleButton = $("#btnSample");
  if (sampleButton) {
    sampleButton.addEventListener("click", () => {
      fillLabFromSample(getTrack());
      validateLab();
    });
  }

  const clearButton = $("#btnClearLab");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      clearLabForm();
      validateLab();
    });
  }

  setupGateModal();
  validateLab();
}

document.addEventListener("DOMContentLoaded", () => {
  ensureTrackSelector();
  ensureGlobalProgress();
  updateGlobalProgress();
  updateSavedIndicators();
  renderFeed();
  setupPista();
  setupLab();
  updateGlobalProgress();
  updateSavedIndicators();
  window.setInterval(updateSavedIndicators, 30000);
});
