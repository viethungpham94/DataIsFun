/* DataIsFun Shared Chart.js Plugins, Renderers, Lazy Script Loader & Accessibility Helpers */
(function (global) {
  "use strict";

  global.chartInstances = global.chartInstances || {};

  const inBoxValuePlugin = {
    id: "inBoxValuePlugin",
    afterDatasetsDraw(chart, args, pluginOptions) {
      if (!pluginOptions || !pluginOptions.enabled) return;
      if (chart.config.options && chart.config.options.isButterfly) return;
      const { ctx } = chart;
      ctx.save();
      ctx.font = '700 11px "JetBrains Mono", monospace';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        if (meta.hidden) return;
        meta.data.forEach((element, index) => {
          const rawVal = dataset.data[index];
          if (rawVal === null || rawVal === undefined) return;
          const absVal = Math.abs(rawVal);
          const textStr = String(absVal);
          const textWidth = ctx.measureText(textStr).width;

          if (chart.options.indexAxis === "y") {
            const barWidth = Math.abs(element.x - element.base);
            if (barWidth < 26) return;
            const xPos = rawVal < 0 ? element.x + textWidth / 2 + 6 : element.x - textWidth / 2 - 6;
            const yPos = element.y;

            ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
            ctx.beginPath();
            ctx.roundRect(xPos - textWidth / 2 - 4, yPos - 8, textWidth + 8, 16, 3);
            ctx.fill();
            ctx.fillStyle = "#ffffff";
            ctx.fillText(textStr, xPos, yPos);
          } else {
            const barHeight = Math.abs(element.base - element.y);
            if (barHeight < 22) return;
            const yPos = element.y + 14;

            ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
            ctx.beginPath();
            ctx.roundRect(element.x - textWidth / 2 - 5, yPos - 9, textWidth + 10, 18, 3);
            ctx.fill();
            ctx.fillStyle = "#ffffff";
            ctx.fillText(textStr, element.x, yPos);
          }
        });
      });
      ctx.restore();
    },
  };

  const middleAxisButterflyPlugin = {
    id: "middleAxisButterflyPlugin",
    afterDatasetsDraw(chart) {
      if (!chart.config.options || !chart.config.options.isButterfly) return;
      const { ctx } = chart;
      const yAxis = chart.scales.y;
      const xAxis = chart.scales.x;
      if (!yAxis || !xAxis) return;
      const zeroX = xAxis.getPixelForValue(0);

      ctx.save();
      ctx.font = '600 12px "Inter", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      chart.data.labels.forEach((label, index) => {
        const yPos = yAxis.getPixelForTick(index);
        const textWidth = ctx.measureText(label).width;

        ctx.fillStyle = "#09090b";
        ctx.strokeStyle = "#27272a";
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(zeroX - textWidth / 2 - 8, yPos - 11, textWidth + 16, 22, 4);
        } else {
          ctx.rect(zeroX - textWidth / 2 - 8, yPos - 11, textWidth + 16, 22);
        }
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f4f4f5";
        ctx.fillText(label, zeroX, yPos);
      });

      ctx.font = '700 11px "JetBrains Mono", monospace';
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        if (meta.hidden) return;
        meta.data.forEach((element, index) => {
          const val = dataset.data[index];
          if (val === null || val === undefined) return;
          const absVal = Math.abs(val);
          const textStr = String(absVal);
          const tw = ctx.measureText(textStr).width;
          const yPos = element.y;
          const xPos = val < 0 ? element.x - tw / 2 - 8 : element.x + tw / 2 + 8;

          ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(xPos - tw / 2 - 4, yPos - 8, tw + 8, 16, 3);
          } else {
            ctx.rect(xPos - tw / 2 - 4, yPos - 8, tw + 8, 16);
          }
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.fillText(textStr, xPos, yPos);
        });
      });

      ctx.restore();
    },
  };

  if (typeof global.Chart !== "undefined") {
    global.Chart.register(inBoxValuePlugin);
    global.Chart.register(middleAxisButterflyPlugin);
  }

  function renderSubChart(canvasId, subCfg) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    if (global.chartInstances[canvasId]) {
      global.chartInstances[canvasId].destroy();
      delete global.chartInstances[canvasId];
    }
    const ctx = canvas.getContext("2d");
    global.chartInstances[canvasId] = new global.Chart(ctx, {
      type: "bar",
      data: {
        labels: subCfg.labels,
        datasets: [
          {
            label: "Messi Cumulative Leads (+)",
            data: subCfg.m_data,
            backgroundColor: "#38bdf8",
            borderRadius: 2,
          },
          {
            label: "Ronaldo Cumulative Leads (-)",
            data: subCfg.r_data,
            backgroundColor: "#f97316",
            borderRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            align: "end",
            labels: { color: "#71717a", font: { size: 10, family: "Inter" }, boxWidth: 10, padding: 6 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                (ctx.raw >= 0 ? "Messi" : "Ronaldo") + ": " + Math.abs(ctx.raw) + " " + (subCfg.unit || "times"),
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { color: "#71717a", font: { size: 9.5 } },
          },
          y: {
            stacked: true,
            min: subCfg.y_min,
            max: subCfg.y_max,
            grid: { color: "rgba(255, 255, 255, 0.04)" },
            ticks: {
              color: "#71717a",
              font: { size: 9 },
              callback: (val) => Math.abs(val),
            },
            title: {
              display: true,
              text: "Cumulative Times Led",
              color: "#52525b",
              font: { size: 10 },
            },
          },
        },
      },
    });
  }

  function renderDualPie(canvasIdMessi, canvasIdRonaldo, cfg) {
    const mCanvas = document.getElementById(canvasIdMessi);
    const rCanvas = document.getElementById(canvasIdRonaldo);
    if (!mCanvas || !rCanvas) return;

    if (global.chartInstances[canvasIdMessi]) global.chartInstances[canvasIdMessi].destroy();
    if (global.chartInstances[canvasIdRonaldo]) global.chartInstances[canvasIdRonaldo].destroy();

    const pieOptions = (sideCfg) => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#d4d4d8",
            boxWidth: 10,
            boxHeight: 10,
            padding: 8,
            font: { size: 10.5, family: "Inter", weight: "600" },
          },
        },
        datalabels: cfg.show_val_and_pct
          ? {
              display: true,
              color: "#ffffff",
              font: { size: 10.5, weight: "700", family: "Inter" },
              formatter: (val, ctx) => {
                const tot = (ctx.dataset.data || []).reduce((a, b) => a + (Number(b) || 0), 0) || 1;
                const pct = ((val / tot) * 100).toFixed(1);
                return `${val} (${pct}%)`;
              },
            }
          : { display: false },
        tooltip: {
          backgroundColor: "#09090b",
          titleColor: "#ffffff",
          bodyColor: "#d4d4d8",
          borderColor: "#27272a",
          borderWidth: 1,
          callbacks: {
            label: (ctx) => {
              const tot = (ctx.dataset.data || []).reduce((a, b) => a + (Number(b) || 0), 0) || 1;
              const unit = cfg.unit || "goals";
              const fullName = (sideCfg.full_labels && sideCfg.full_labels[ctx.dataIndex]) || ctx.label;
              const pct = ((ctx.raw / tot) * 100).toFixed(1);
              return `${fullName}, ${pct}%, ${ctx.raw} ${unit}`;
            },
          },
        },
      },
    });

    global.chartInstances[canvasIdMessi] = new global.Chart(mCanvas.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: cfg.messi.labels,
        datasets: [{ data: cfg.messi.data, backgroundColor: cfg.messi.colors, borderWidth: 1, borderColor: "#000000" }],
      },
      options: pieOptions(cfg.messi),
    });

    global.chartInstances[canvasIdRonaldo] = new global.Chart(rCanvas.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: cfg.ronaldo.labels,
        datasets: [{ data: cfg.ronaldo.data, backgroundColor: cfg.ronaldo.colors, borderWidth: 1, borderColor: "#000000" }],
      },
      options: pieOptions(cfg.ronaldo),
    });
  }

  function renderDualBar(canvasIdMessi, canvasIdRonaldo, cfg) {
    const mCanvas = document.getElementById(canvasIdMessi);
    const rCanvas = document.getElementById(canvasIdRonaldo);
    if (!mCanvas || !rCanvas) return;

    if (global.chartInstances[canvasIdMessi]) global.chartInstances[canvasIdMessi].destroy();
    if (global.chartInstances[canvasIdRonaldo]) global.chartInstances[canvasIdRonaldo].destroy();

    const isH = cfg.index_axis === "y";
    const barOptions = () => ({
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: cfg.index_axis || "x",
      layout: { padding: isH ? { top: 4, bottom: 4, left: 4, right: 16 } : { top: 20, bottom: 4, left: 6, right: 6 } },
      plugins: {
        legend: { display: false },
        inBoxValuePlugin: { enabled: true },
        tooltip: {
          backgroundColor: "#09090b",
          titleColor: "#ffffff",
          bodyColor: "#d4d4d8",
          borderColor: "#27272a",
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw} ${cfg.unit || "passes/match"}`,
          },
        },
      },
      scales: {
        x: {
          min: isH && cfg.x_min !== undefined ? cfg.x_min : undefined,
          max: isH && cfg.x_max !== undefined ? cfg.x_max : undefined,
          grid: { color: "rgba(255, 255, 255, 0.03)" },
          border: { display: true, color: "#27272a" },
          ticks: isH
            ? { color: "#71717a", font: { size: 10, family: "JetBrains Mono" } }
            : { color: "#d4d4d8", font: { size: 11.5, family: "Inter", weight: "600" } },
        },
        y: {
          min: !isH && cfg.y_min !== undefined ? cfg.y_min : undefined,
          max: !isH && cfg.y_max !== undefined ? cfg.y_max : undefined,
          grid: { color: "rgba(255, 255, 255, 0.03)" },
          border: { display: true, color: "#27272a" },
          ticks: isH
            ? { color: "#e4e4e7", font: { size: 11, family: "Inter", weight: "600" }, autoSkip: false }
            : { color: "#71717a", font: { size: 10.5, family: "JetBrains Mono" } },
          title: {
            display: Boolean(cfg.y_title),
            text: cfg.y_title || "",
            color: "#71717a",
            font: { size: 10.5, family: "Inter", weight: "600" },
          },
        },
      },
    });

    global.chartInstances[canvasIdMessi] = new global.Chart(mCanvas.getContext("2d"), {
      type: "bar",
      data: {
        labels: cfg.messi.labels,
        datasets: [{ label: cfg.messi.title, data: cfg.messi.data, backgroundColor: cfg.messi.colors, borderRadius: 6, barPercentage: 0.62 }],
      },
      options: barOptions(cfg.messi),
    });

    global.chartInstances[canvasIdRonaldo] = new global.Chart(rCanvas.getContext("2d"), {
      type: "bar",
      data: {
        labels: cfg.ronaldo.labels,
        datasets: [{ label: cfg.ronaldo.title, data: cfg.ronaldo.data, backgroundColor: cfg.ronaldo.colors, borderRadius: 6, barPercentage: 0.62 }],
      },
      options: barOptions(cfg.ronaldo),
    });
  }

  function renderChartInstance(canvasId, cfg) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    if (global.chartInstances[canvasId]) {
      global.chartInstances[canvasId].destroy();
      delete global.chartInstances[canvasId];
    }

    const ctx = canvas.getContext("2d");
    const hideAxes = Boolean(cfg.hide_axes);
    const isStacked = Boolean(cfg.stacked);
    const isButterfly = Boolean(cfg.is_butterfly);
    const isTimeline = Boolean(cfg.is_timeline);
    const indexAxis = cfg.index_axis || (isButterfly ? "y" : "x");

    const clonedDatasets = cfg.datasets.map((ds) => {
      const cloned = {
        ...ds,
        data: ds.data.map((pt) =>
          pt && typeof pt === "object" && !Array.isArray(pt)
            ? { ...pt, x: Array.isArray(pt.x) ? [...pt.x] : pt.x }
            : pt
        ),
      };
      if (cfg.type === "line") {
        cloned.segment = {
          borderDash: (ctx) => {
            if (cfg.labels && cfg.labels[ctx.p1DataIndex] && String(cfg.labels[ctx.p1DataIndex]).includes("26-27")) {
              return [5, 5];
            }
            return undefined;
          },
        };
        cloned.spanGaps = false;
      }
      return cloned;
    });

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: indexAxis,
      isButterfly: isButterfly,
      layout: {
        padding: isButterfly ? { left: 45, right: 45, top: 18, bottom: 6 } : { top: 18, bottom: 4, left: 8, right: 8 },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          align: "end",
          labels: {
            color: "#a1a1aa",
            font: { size: 12, family: "Inter", weight: "600" },
            boxWidth: 12,
            padding: 10,
          },
        },
        inBoxValuePlugin: {
          enabled: Boolean(cfg.show_labels),
        },
        tooltip: {
          backgroundColor: "#09090b",
          titleColor: "#ffffff",
          bodyColor: "#d4d4d8",
          borderColor: "#27272a",
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: function (ctx) {
              if (isTimeline && ctx.raw && ctx.raw.award) {
                return ctx.dataset.label + ": " + ctx.raw.award;
              }
              if (isButterfly) {
                return ctx.dataset.label + ": " + Math.abs(ctx.raw);
              }
              return ctx.dataset.label + ": " + ctx.raw;
            },
          },
        },
      },
      scales: {
        x: {
          type: isTimeline ? "linear" : undefined,
          offset: isTimeline
            ? false
            : cfg.type === "bar" || Boolean(cfg.context_strip || cfg.context_strips || document.getElementById(`sub-strip-${canvasId}`)),
          stacked: isStacked || isButterfly,
          grid: { color: "rgba(255, 255, 255, 0.03)" },
          border: { display: !hideAxes, color: "#27272a" },
          ticks: {
            color: "#a1a1aa",
            stepSize: isTimeline ? 1 : undefined,
            font: { size: 11, family: isTimeline ? "JetBrains Mono" : "Inter", weight: "500" },
            callback: function (val) {
              if (isTimeline) return Number.isInteger(val) ? String(val) : "";
              if (isButterfly) return Math.abs(val);
              return this.getLabelForValue ? this.getLabelForValue(val) : val;
            },
          },
          title: {
            display: Boolean(cfg.x_title),
            text: cfg.x_title || "",
            color: "#71717a",
            font: { size: 11, family: "Inter", weight: "600" },
            padding: { top: 8, bottom: 2 },
          },
          min: cfg.x_min !== undefined ? cfg.x_min : undefined,
          max: cfg.x_max !== undefined ? cfg.x_max : undefined,
        },
        y: {
          stacked: isStacked || isButterfly,
          offset: isTimeline ? true : undefined,
          beginAtZero: false,
          min: cfg.y_min !== undefined ? cfg.y_min : undefined,
          max: cfg.y_max !== undefined ? cfg.y_max : undefined,
          display: isButterfly ? false : !hideAxes,
          grid: { color: isTimeline ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)" },
          ticks: {
            color: isTimeline ? "#f4f4f5" : "#71717a",
            font: isTimeline ? { size: 12, family: "Inter", weight: "700" } : { size: 10.5, family: "JetBrains Mono" },
          },
          title: {
            display: isButterfly ? false : Boolean(cfg.y_title),
            text: cfg.y_title || "",
            color: "#71717a",
            font: { size: 11, family: "Inter", weight: "600" },
            padding: { top: 2, bottom: 8 },
          },
        },
      },
    };

    if (isButterfly) {
      let maxVal = 0;
      clonedDatasets.forEach((ds) => {
        (ds.data || []).forEach((v) => {
          if (v !== null && v !== undefined) {
            const av = Math.abs(v);
            if (av > maxVal) maxVal = av;
          }
        });
      });
      const span = Math.ceil(maxVal * 1.18);
      options.scales.x.min = -span;
      options.scales.x.max = span;
    }

    const benchPlugin = cfg.benchmark_line
      ? [
          {
            id: "benchmarkLine",
            afterDatasetsDraw(chart) {
              const { ctx: c, chartArea, scales } = chart;
              if (!chartArea || !scales.y) return;
              const yPos = scales.y.getPixelForValue(cfg.benchmark_line.value);
              c.save();
              c.beginPath();
              c.setLineDash(cfg.benchmark_line.dash || [6, 4]);
              c.lineWidth = 2.5;
              c.strokeStyle = cfg.benchmark_line.color || "#facc15";
              c.moveTo(chartArea.left, yPos);
              c.lineTo(chartArea.right, yPos);
              c.stroke();
              c.restore();
            },
          },
        ]
      : [];

    const convPlugin = cfg.conv_labels
      ? [
          {
            id: "convLabels",
            afterDatasetsDraw(chart) {
              const { ctx: c, scales } = chart;
              if (!scales.x || !scales.y) return;
              c.save();
              c.font = "700 11px Inter, system-ui, sans-serif";
              c.textAlign = "center";
              const mConv = cfg.conv_labels.messi || [];
              const rConv = cfg.conv_labels.ronaldo || [];
              const mMeta0 = chart.getDatasetMeta(0);
              const mMeta1 = chart.getDatasetMeta(1);
              const rMeta0 = chart.getDatasetMeta(2);
              const rMeta1 = chart.getDatasetMeta(3);
              mConv.forEach((pct, i) => {
                if (pct == null || !mMeta1.data[i]) return;
                const x = mMeta1.data[i].x;
                const y = Math.min(mMeta0.data[i].y, mMeta1.data[i].y) - 6;
                c.fillStyle = "#7dd3fc";
                c.textBaseline = "bottom";
                c.fillText(`${pct}%`, x, y);
              });
              rConv.forEach((pct, i) => {
                if (pct == null || !rMeta1.data[i]) return;
                const x = rMeta1.data[i].x;
                const y = Math.max(rMeta0.data[i].y, rMeta1.data[i].y) + 6;
                c.fillStyle = "#fdba74";
                c.textBaseline = "top";
                c.fillText(`${pct}%`, x, y);
              });
              c.restore();
            },
          },
        ]
      : [];

    const timelineLabelsPlugin = isTimeline
      ? [
          {
            id: "timelineLabels",
            afterDatasetsDraw(chart) {
              const { ctx: c } = chart;
              c.save();
              c.font = "700 10px JetBrains Mono, monospace";
              c.textAlign = "center";
              c.textBaseline = "middle";
              c.fillStyle = "#09090b";
              chart.data.datasets.forEach((ds, dsIdx) => {
                const meta = chart.getDatasetMeta(dsIdx);
                if (!meta || meta.hidden) return;
                meta.data.forEach((el, idx) => {
                  const raw = ds.data[idx];
                  if (!raw || !raw.short_yr) return;
                  const props = el.getProps(["x", "y", "base"], true);
                  const cx = (props.x + props.base) / 2;
                  c.fillText(raw.short_yr, cx, props.y);
                });
              });
              c.restore();
            },
          },
        ]
      : [];

    global.chartInstances[canvasId] = new global.Chart(ctx, {
      type: cfg.type,
      data: {
        labels: [...cfg.labels],
        datasets: clonedDatasets,
      },
      options: options,
      plugins: [...benchPlugin, ...convPlugin, ...timelineLabelsPlugin],
    });

    ["ctx-strip-", "sub-strip-"].forEach((prefix) => {
      const stripEl = document.getElementById(`${prefix}${canvasId}`);
      if (stripEl && global.chartInstances[canvasId] && global.chartInstances[canvasId].chartArea) {
        const area = global.chartInstances[canvasId].chartArea;
        const cW = canvas.clientWidth || area.right;
        stripEl.style.marginLeft = Math.round(area.left) + "px";
        stripEl.style.marginRight = Math.max(0, Math.round(cW - area.right)) + "px";
      }
    });
  }

  const _scriptLoads = {};
  function ensureExtraScript(src, globalName) {
    if (globalName && global[globalName]) {
      return Promise.resolve(global[globalName]);
    }
    if (_scriptLoads[src]) {
      return _scriptLoads[src];
    }
    _scriptLoads[src] = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = () => resolve(globalName ? global[globalName] : true);
      s.onerror = (err) => {
        delete _scriptLoads[src];
        reject(err);
      };
      document.body.appendChild(s);
    });
    return _scriptLoads[src];
  }

  let _keyboardBound = false;
  function syncAccordionAria(root) {
    const scope = root || document;
    scope.querySelectorAll(".pillar-header, .chapter-header, .q-header, .sec-collapse-header").forEach((el) => {
      const parent = el.closest(".pillar-accordion, .chapter-card, .q-card, .release-section");
      if (!parent) return;
      const expanded = parent.classList.contains("release-section")
        ? !parent.classList.contains("collapsed")
        : parent.classList.contains("open");
      el.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  function bindKeyboardAccordions(root) {
    const scope = root || document;
    scope.querySelectorAll(".pillar-header, .chapter-header, .q-header, .sec-collapse-header").forEach((el) => {
      if (!el.hasAttribute("role")) el.setAttribute("role", "button");
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
    });
    syncAccordionAria(scope);
    if (_keyboardBound) return;
    _keyboardBound = true;
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const target = e.target;
      if (!target || typeof target.matches !== "function") return;
      if (target.matches('.pillar-header[role="button"], .chapter-header[role="button"], .q-header[role="button"], .sec-collapse-header[role="button"]')) {
        e.preventDefault();
        target.click();
      }
    });
  }

  global.inBoxValuePlugin = inBoxValuePlugin;
  global.middleAxisButterflyPlugin = middleAxisButterflyPlugin;
  global.renderSubChart = renderSubChart;
  global.renderDualPie = renderDualPie;
  global.renderDualBar = renderDualBar;
  global.renderChartInstance = renderChartInstance;
  global.ensureExtraScript = ensureExtraScript;
  global.syncAccordionAria = syncAccordionAria;
  global.bindKeyboardAccordions = bindKeyboardAccordions;
})(window);
