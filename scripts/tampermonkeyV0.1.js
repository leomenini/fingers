// ==UserScript==
// @name         OpenFING - Exportar Clase
// @namespace    https://github.com/leomenini
// @version      0.2.0
// @description  Exporta la transcripción de una clase de OpenFING en formato Markdown.
// @author       Leandro
// @match        https://open.fing.edu.uy/courses/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function createButton() {

        const btn = document.createElement("button");
        btn.id = "openfing-export";
        btn.textContent = "📚 Exportar Clase";

        Object.assign(btn.style, {
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 999999,
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            background: "#1565c0",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "sans-serif",
            boxShadow: "0 3px 8px rgba(0,0,0,.3)"
        });

        btn.onclick = exportTranscript;

        document.body.appendChild(btn);
    }

    function showExportBadge() {

        let badge = document.getElementById("of-exported");

        if (badge) return;

        badge = document.createElement("div");

        badge.id = "of-exported";

        badge.textContent = "✅ Exportada";

        Object.assign(badge.style, {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 999999,
            padding: "10px 16px",
            background: "#2e7d32",
            color: "white",
            borderRadius: "8px",
            fontFamily: "sans-serif",
            fontSize: "14px",
            boxShadow: "0 3px 8px rgba(0,0,0,.3)"
        });

        document.body.appendChild(badge);
    }

    async function exportTranscript() {

        const items = [...document.querySelectorAll("ol li")];

        if (!items.length) {
            alert("No se encontró la transcripción.");
            return;
        }

        const transcript = items
            .map(e => e.innerText.trim())
            .filter(Boolean)
            .join("\n");

        const wordCount = transcript.trim().split(/\s+/).length;
        const charCount = transcript.length;

        const match = location.pathname.match(/courses\/([^/]+)\/(\d+)/);

        const course = match ? match[1].toUpperCase() : "UNKNOWN";
        const lesson = match ? match[2] : "?";

        const markdown = `# Clase ${lesson}

Curso: ${course}

Fuente: ${location.href}

Fecha de exportación: ${new Date().toLocaleString()}

---

${transcript}
`;

        await navigator.clipboard.writeText(markdown);

        const btn = document.getElementById("openfing-export");

        btn.style.background = "#2e7d32";
        btn.textContent = "✅ Clase exportada";

        showExportBadge();

        console.log(`
========================================
OpenFING Export
========================================

Clase: ${lesson}
Curso: ${course}

Segmentos : ${items.length}
Palabras  : ${wordCount}
Caracteres: ${charCount}

Copiado correctamente al portapapeles.
========================================
`);

        setTimeout(() => {
            btn.style.background = "#1565c0";
            btn.textContent = "📚 Exportar Clase";
        }, 2500);
    }

    window.addEventListener("load", () => {

        if (!document.getElementById("openfing-export")) {
            createButton();
        }

    });

})();