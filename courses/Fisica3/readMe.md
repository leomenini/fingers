# Física III

| | |
|---|---|
| Curso | Física III |
| Docente | Nicolás Wschebor |
| Edición | 2015, semestre 2 |
| Fuente | [OpenFING](https://open.fing.edu.uy/courses/f3/) |
| Bibliografía | Resnick & Halliday (electromagnetismo) · Sears & Zemansky (ondas y óptica) |
| Clases | 28, todas con resumen, notas y figuras |

El pipeline de producción, las convenciones de commit y el modelo de datos de
una clase están en el [README del repositorio](../../README.md).

## Compilar

Requiere [tectonic](https://tectonic-typesetting.github.io/) en el `PATH` o en
`~/.local/bin`. Cada PDF queda in situ, en `Clases/ClaseN/notes.pdf`.

```bash
./build.sh              # compila las 28 clases
./build.sh 1 5 14       # sólo esas
```

## Clases

| N.º | Tema | Figuras | Duración |
|---:|---|---:|---:|
| 1 | Presentación del curso, las interacciones fundamentales y la ley de Coulomb | 6 | 1:28 |
| 2 | Conservación y cuantización de la carga; conductores, aislantes y distribuciones continuas | 4 | 1:21 |
| 3 | Campo eléctrico, comparación de fuerzas y límites de distribuciones | 4 | 1:26 |
| 4 | Campo eléctrico de distribuciones continuas y movimiento de cargas | 5 | 1:26 |
| 5 | Movimiento de cargas, dipolos en campos, líneas de campo y flujo eléctrico | 6 | 1:24 |
| 6 | Flujo del campo eléctrico, ley de Gauss y conductores en equilibrio | 8 | 1:22 |
| 7 | Conductores con cavidades, campo en la superficie y energía potencial eléctrica | 8 | 1:26 |
| 8 | Unidades de potencial, el electronvolt y potencial de distribuciones continuas | 6 | 1:19 |
| 9 | Campo eléctrico desde el potencial, superficies equipotenciales y capacitores | 8 | 1:20 |
| 10 | Capacitores esférico y cilíndrico, asociación serie/paralelo y energía almacenada | 7 | 1:26 |
| 11 | Dieléctricos, ley de Gauss en dieléctricos e introducción a la corriente | 6 | 1:20 |
| 12 | Velocidad de deriva, ley de Ohm, resistividad y el modelo de Drude | 6 | 1:14 |
| 13 | Cierre del modelo de Drude y circuitos de corriente directa | 7 | 1:29 |
| 14 | Circuitos RC e introducción al campo magnético | 7 | 1:20 |
| 15 | Cargas en campo magnético, espectrómetro y ciclotrón, efecto Hall | 8 | 1:30 |
| 16 | Par sobre una espira, motores y galvanómetro, y la ley de Biot–Savart | 8 | 1:27 |
| 17 | Campo de una espira circular, el solenoide y la ley de Ampère | 8 | 1:23 |
| 18 | El toroide, la ley de inducción de Faraday y la ley de Lenz | 8 | 1:22 |
| 19 | Varilla rotante, generadores y motores, campos inducidos e inductancia | 8 | 1:19 |
| 20 | Materiales magnéticos, circuitos RL y energía en el campo magnético | 7 | 1:05 |
| 21 | Energía en un cable coaxial, oscilaciones LC y circuito RLC amortiguado | 6 | 1:22 |
| 22 | Régimen permanente, resonancia e impedancias complejas | 6 | 1:25 |
| 23 | Potencia en corriente alterna, transformador y ecuaciones de Maxwell | 4 | 1:25 |
| 24 | Corriente de desplazamiento, ecuaciones de Maxwell y ondas electromagnéticas | 6 | 1:24 |
| 25 | Vector de Poynting, intensidad y espectro electromagnético | 5 | 1:21 |
| 26 | Reflexión y refracción: Snell, Huygens, Fermat y reflexión total | 7 | 1:22 |
| 27 | Efecto Doppler, corrimiento al rojo e introducción a la interferencia | 7 | 1:12 |
| 28 | Experimento de doble rendija, difracción, coherencia e intensidad | 8 | 1:21 |

Las 184 figuras son vectoriales y se autoran en TikZ, circuitikz o pgfplots.
Los estilos compartidos del curso —paleta y estilos de vector, etiqueta y
gráfica— viven en [`Clases/assets/tikzstyles.tex`](Clases/assets/tikzstyles.tex).
