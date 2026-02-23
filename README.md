# MicroDSI M2-S10 - Miguel Perez Regueiro

Mini web estatica para el proyecto MicroDSI (M2-S10), con flujo completo de trabajo y exportacion final en Markdown.

## Resumen

La aplicacion cubre las 4 paginas del proyecto:

- `Inicio` (`index.html`)
- `Feed` (`feed.html`)
- `Pistas` (`pista.htm`)
- `Lab` (`lab.html`)

Tracks soportados:

- `ITSM Triage`
- `HR`
- `Procurement`

Salida final:

- Archivo `.md` descargable con Inventario, Priorizacion, SIPOC, Decision final, Preguntas de defensa y AI Log.

## Objetivo academico

Resolver M2-S10 con un flujo defendible:

1. Inventario L1 (10-15 procesos verbo + objeto)
2. Priorizacion Top 5 (Impacto, Esfuerzo, Riesgo, Score, Nota)
3. SIPOC del proceso ganador (4-6 pasos)
4. Decision final (ganador + 2 criterios + 1 restriccion + trade-off)
5. AI Log y export `.md`

## Funcionalidades clave

- Selector de track global y persistente
- Navegacion estable en topbar (misma estructura en todas las paginas)
- Progreso global sticky (Feed + Pistas + Lab)
- Feed con tarjetas y marcado de aprendizaje
- Pistas guiadas por track con autosave y navegacion por pasos
- Lab con:
  - checklist automatico por rubric
  - validaciones inline por bloque
  - helpers de productividad:
    - cargar ejemplo por track
    - limpiar formulario
    - normalizar inventario
    - auto-formatear priorizacion y recalcular score
  - bloqueo de descarga si faltan elementos criticos
  - export Markdown completo para entrega

## Mapeo de rubric (10 pts)

- Web funcional: navegacion y export `.md` operativos
- Inventario L1: validacion de cantidad y formato verbo + objeto
- Priorizacion: top 5, score consistente, nota observable por fila
- SIPOC: secciones completas + process con 4-6 pasos
- Decision defendible: ganador + criterios + restriccion
- Uso responsable de IA: AI Log obligatorio en export

## Estructura del repo

- `index.html`: portada y resumen de progreso
- `feed.html`: micro-lecciones por track
- `pista.htm`: caso guiado y progreso por pasos
- `lab.html`: construccion del entregable y exportacion
- `assets/app.js`: contenido, logica, validaciones, progreso, export
- `assets/styles.css`: estilos UI y tema dark navy

## Ejecucion local

No requiere build ni dependencias.

1. Abrir `index.html` en navegador
2. Completar flujo: `Feed` -> `Pistas` -> `Lab`
3. `Generar Markdown` y `Descargar .md`

## Publicacion en GitHub Pages

1. Ir a `Settings` del repositorio
2. Abrir `Pages`
3. Configurar:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/(root)`
4. Guardar y abrir la URL publica

## Entrega recomendada

Incluir:

- URL publica de GitHub Pages
- Link del repositorio
- Archivo `.md` exportado desde `Lab`

## Checklist final rapido

- Navegacion correcta entre `Inicio`, `Feed`, `Pistas`, `Lab`
- Track cambia contenido correctamente
- Inventario valido (10-15)
- Priorizacion valida (Top 5 + score + notas)
- SIPOC completo (4-6 pasos)
- Decision final completa
- AI Log completo
- `.md` generado y descargado
