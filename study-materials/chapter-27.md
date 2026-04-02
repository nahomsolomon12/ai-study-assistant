# Chapter 27: Circuits

---

## 🔋 1. EMF and Single-Loop Circuits

### EMF (Electromotive Force)
\[
\varepsilon = \frac{dW}{dq}
\]

### Key Idea
- Acts like a **charge pump**
- Provides energy to move charges

---

## 🔄 2. Single Loop Circuits

### Loop Rule (Kirchhoff’s Loop Rule)
- Sum of voltage changes in a loop = 0

\[
\varepsilon - iR = 0
\Rightarrow i = \frac{\varepsilon}{R}
\]

---

## 🔥 3. Energy Perspective

- Battery provides energy
- Resistor dissipates energy:

\[
P = i^2 R
\]

---

## 🔋 4. Real vs Ideal Batteries

### Ideal Battery
- No internal resistance

### Real Battery
\[
\varepsilon - ir - iR = 0
\]

- Terminal voltage:
\[
V = \varepsilon - ir
\]

---

## 🔗 5. Series Resistors

### Equivalent Resistance
\[
R_{eq} = R_1 + R_2 + R_3 + ...
\]

### Key Properties
- Same current through all resistors
- Voltage divides across resistors

---

## 🔀 6. Parallel Resistors

### Equivalent Resistance
\[
\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...
\]

### Key Properties
- Same voltage across each resistor
- Current splits between branches

---

## 🔁 7. Junction Rule

\[
\sum I_{in} = \sum I_{out}
\]

- Based on conservation of charge

---

## 🔄 8. Multi-Loop Circuits

### Strategy
1. Assign current directions
2. Apply:
   - Loop rule
   - Junction rule
3. Solve system of equations

---

## ⚡ 9. Measuring Devices

### Ammeter
- Measures current
- Must have **low resistance**
- Connected in **series**

### Voltmeter
- Measures voltage
- Must have **high resistance**
- Connected in **parallel**

---

## 🌍 10. Grounding

- Connect circuit to Earth
- Does **not affect current**
- Provides reference potential

---

## ⚡ 11. Power in Circuits

### Power from EMF
\[
P = i\varepsilon
\]

### Energy Dissipation
\[
P = i^2 R
\]

---

## 🔋 12. RC Circuits

### Time Constant
\[
\tau = RC
\]

---

### Charging Capacitor

Charge:
\[
q(t) = C\varepsilon (1 - e^{-t/RC})
\]

Current:
\[
i(t) = \frac{\varepsilon}{R} e^{-t/RC}
\]

---

### Discharging Capacitor

Charge:
\[
q(t) = q_0 e^{-t/RC}
\]

Current:
\[
i(t) = i_0 e^{-t/RC}
\]

---

## 🧠 Key Insights

- Capacitors:
  - Initially act like **wires**
  - Eventually act like **open circuits**

---

## 🧠 Summary

- EMF drives current
- Kirchhoff rules analyze circuits
- Series vs parallel behavior is critical
- RC circuits introduce **time-dependent behavior**