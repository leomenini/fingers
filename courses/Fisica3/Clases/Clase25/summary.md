# Resumen Clase 25 — Transporte de Energía, Espectro EM y Velocidad de la Luz

## 1. Transporte de Energía en Ondas EM

### Vector de Poynting
$$
\mathbf{S} = \frac{1}{\mu_0} \mathbf{E} \times \mathbf{B}
$$
- **Módulo**: potencia por unidad de área (W/m²).
- **Dirección**: hacia donde se transporta la energía (dirección de propagación de la onda).

### Densidad de Energía
$$
u_E = \frac{1}{2}\varepsilon_0 E^2, \qquad u_B = \frac{1}{2\mu_0} B^2
$$
Para una onda EM: $E = cB \implies u_E = u_B$, por lo que:
$$
u = u_E + u_B = \varepsilon_0 E^2
$$

### Relación fundamental
$$
|\mathbf{S}| = u\,c
$$

### Intensidad
Promedio temporal del módulo de S (los detectores no pueden seguir oscilaciones de $\sim10^{15}$ Hz):
$$
I = \langle |\mathbf{S}| \rangle_T = \frac{1}{2}\varepsilon_0 c E_0^2
$$

### Ondas Esféricas
- Potencia total conservada: $P = I \cdot 4\pi r^2$
- Intensidad: $I \propto 1/r^2$
- Campo eléctrico: $E_0 \propto 1/r$ (decrece más lento que el campo electrostático $1/r^2$)

## 2. Espectro Electromagnético
Todas las ondas EM viajan a $c$ en el vacío, relacionadas por $c = \lambda \nu$.

| Región | Frecuencia (Hz) | Longitud de onda |
|--------|----------------|------------------|
| Radio | $10^3$--$10^9$ | $10^3$--$10^{-1}$ m |
| Microondas | $10^9$--$10^{11}$ | $10^{-1}$--$10^{-3}$ m |
| Infrarrojo | $10^{11}$--$4.3\times10^{14}$ | $10^{-3}$--$7\times10^{-7}$ m |
| Visible | $4.3\times10^{14}$--$7.5\times10^{14}$ | $700$--$400$ nm |
| Ultravioleta | $7.5\times10^{14}$--$10^{17}$ | $400$--$1$ nm |
| Rayos X | $10^{17}$--$10^{20}$ | $1$--$0.01$ nm |
| Rayos Gamma | $>10^{20}$ | $<0.01$ nm |

**Visible**: $400$ nm (violeta) a $700$ nm (rojo). El Sol emite su pico en el verde ($\sim500$ nm).

### Antenas
El tamaño óptimo de una antena es del orden de $\lambda/2$. Las AM ($\lambda \sim 10^2$--$10^3$ m) requieren antenas grandes; las microondas ($\lambda \sim 10$ cm) pueden integrarse en celulares.

## 3. Velocidad de la Luz en un Medio
$$
v = \frac{c}{n}, \qquad n = \frac{c}{v} \approx \sqrt{K_e}
$$
- $n$ depende de la frecuencia (dispersión cromática).
- $K_e$ (constante dieléctrica a frecuencia óptica) difiere de la constante electrostática.

| Medio | $v$ ($\times10^8$ m/s) | $n$ |
|-------|------------------------|-----|
| Vacío | 3.00 | 1.0000 |
| Aire | 2.997 | 1.0003 |
| Agua | 2.26 | 1.33 |
| Vidrio crown | 1.97 | 1.52 |
| Diamante | 1.29 | 2.42 |

## 4. Mediciones Históricas de $c$
- **Galileo**: primer intento (s. XVII), impreciso.
- **Römer (1676)**: eclipses de Io (Júpiter) $\to c \approx 2.2\times10^8$ m/s.
- **Bradley (1729)**: aberración estelar $\to c \approx 3.0\times10^8$ m/s.
- **Fizeau (1849)**: rueda dentada, $L = 8630$ m, $c \approx 3.15\times10^8$ m/s.
- **Hoy**: $c = 299\,792\,458$ m/s (exacto, definición del metro).

## 5. Introducción a Óptica
- **Reflexión**: $\theta_1 = \theta_2$
- **Refracción (Snell)**: $n_1 \sen\theta_1 = n_2 \sen\theta_3$
- Demostración completa en la próxima clase.
