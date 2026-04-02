
# Chapter 25: Capacitance
*Fundamentals of Physics, Twelfth Edition — Halliday*

---

## 25.1 Capacitance

### Learning Objectives
- Sketch a schematic diagram of a circuit with a parallel-plate capacitor, a battery, and an open or closed switch.
- Explain what happens to conduction electrons when the switch is closed in a circuit with a battery, open switch, and uncharged capacitor.
- Apply the relationship between charge *q*, potential difference *V*, and capacitance *C*.

### Definition
A **capacitor** consists of two isolated conductors (the plates) with charges +q and −q. Its capacitance *C* is defined as:

> **Equation 25.1.1:** C = q / V

where *V* is the potential difference between the plates.

### Parallel-Plate Capacitor
A parallel-plate capacitor consists of two plates of area *A* separated by a distance *d*. The charges on the facing surfaces have equal magnitude but opposite signs.

The electric field between the plates is **uniform** in the central region. At the edges, the field is non-uniform ("fringing").

### Charging a Capacitor
When a circuit with a battery, an open switch, and an uncharged capacitor is completed by closing the switch, conduction electrons shift, leaving the capacitor plates with opposite charges.

---

## 25.2 Calculating the Capacitance

### Learning Objectives
- Explain how Gauss' law is used to find capacitance of a parallel-plate capacitor.
- Calculate the capacitance for parallel-plate, cylindrical, spherical, and isolated sphere geometries.

### Using Gauss' Law
To relate the electric field to the charge *q* on either plate, we use Gauss' law:

> **Equation 25.2.1:** ∮ E⃗ · dA⃗ = q_enc / ε₀

The potential difference between the plates is related to the field by integration along a path from the negative to positive plate.

### Parallel-Plate Capacitor
Assuming the fringing of the electric field is negligible:

> **Equation 25.2.7:** C = ε₀A / d

### Cylindrical Capacitor
For a cylindrical capacitor of length *L* with inner radius *a* and outer radius *b* (assuming L >> b):

> **Equation 25.2.12:** C = 2πε₀L / ln(b/a)

### Spherical Capacitor

> **Equation 25.2.15:** C = 4πε₀(ab) / (b − a)

### Isolated Sphere

> **Equation 25.2.16:** C = 4πε₀R

### Checkpoint #2
*For capacitors charged by the same battery, does the stored charge increase, decrease, or remain the same when:*
- (a) The plate separation of a parallel-plate capacitor is increased → **decreases**
- (b) The radius of the inner cylinder of a cylindrical capacitor is increased → **increases**
- (c) The radius of the outer spherical shell of a spherical capacitor is increased → **increases**

---

## 25.3 Capacitors in Parallel and in Series

### Learning Objectives
- Sketch schematic diagrams for capacitors in parallel and in series.
- Identify that capacitors in **parallel** share the same potential difference.
- Identify that capacitors in **series** share the same charge.
- Calculate equivalent capacitances.
- Determine charge and potential on individual capacitors in complex circuits.

### Capacitors in Parallel
When capacitors are connected in parallel, each has the same potential difference *V*. The total charge is the sum of individual charges. The equivalent capacitance is:

> **Equation 25.3.1:** C_eq = C₁ + C₂ + C₃ + … + Cₙ

### Capacitors in Series
When capacitors are connected in series, each stores the same charge *q*. The total potential difference equals the sum of individual potential differences. The equivalent capacitance satisfies:

> **Equation 25.3.2:** 1/C_eq = 1/C₁ + 1/C₂ + 1/C₃ + …

---

## 25.4 Energy Stored in an Electric Field

### Learning Objectives
- Explain how the work required to charge a capacitor becomes potential energy.
- Apply relationships between potential energy *U*, capacitance *C*, and potential difference *V*.
- Relate potential energy to volume and energy density.
- Apply the relationship between energy density *u* and field magnitude *E*.

### Electric Potential Energy
The electric potential energy *U* of a charged capacitor equals the work required to charge it:

> **Equation 25.4.1:** U = q²/(2C)

> **Equation 25.4.2:** U = ½CV²

### Energy Density
The potential energy may be viewed as stored in the electric field between the plates. The energy density *u* (potential energy per unit volume) for any electric field of magnitude *E* in vacuum is:

> **Equation 25.4.5:** u = ½ε₀E²

---

## 25.5 Capacitor with a Dielectric

### Learning Objectives
- Identify that capacitance increases when a dielectric fills the space between the plates.
- Calculate capacitance with and without a dielectric.
- Understand how electrostatic equations are modified by the dielectric constant κ.
- Distinguish polar from nonpolar dielectrics.
- Explain what happens to the electric field when a dielectric is inserted.

### Definition
If the space between the plates is completely filled with a dielectric material, the capacitance is multiplied by the **dielectric constant** κ (kappa), a dimensionless number greater than 1:

> C (with dielectric) = κC₀

In regions filled with a dielectric, all electrostatic equations are modified by replacing ε₀ with κε₀.

### Effect on Voltage and Charge
- If connected to a **battery** (constant V): inserting a dielectric **increases** the charge on the plates.
- If **isolated** (constant q): inserting a dielectric **reduces** the potential difference between the plates.

### Molecular View
- **Polar dielectrics**: molecules have permanent electric dipole moments; they partially align with an applied field.
- **Nonpolar dielectrics**: molecules develop induced dipole moments when a field is applied; the induced field opposes the applied field, reducing the net field inside.

---

## 25.6 Dielectrics and Gauss' Law

### Learning Objectives
- Distinguish free charge from induced charge in a capacitor with a dielectric.
- Find the free charge, induced charge, electric field, and potential with a partial or full dielectric.

### Modified Gauss' Law
Inserting a dielectric causes induced charges on the dielectric faces, which weaken the electric field between the plates. The induced charge is always less than the free charge. With a dielectric present, Gauss' law is generalized to:

> **Equation 25.6.7:** ∮ κε₀E⃗ · dA⃗ = q_free

where *q* is the free charge. The vector κε₀E⃗ is sometimes called the **electric displacement** D⃗.

---

## Chapter 25 Summary

| Quantity | Formula | Equation |
|---|---|---|
| Capacitance (definition) | C = q/V | 25.1.1 |
| Parallel-plate capacitor | C = ε₀A/d | 25.2.7 |
| Cylindrical capacitor | C = 2πε₀L / ln(b/a) | 25.2.12 |
| Spherical capacitor | C = 4πε₀ab/(b−a) | 25.2.15 |
| Isolated sphere | C = 4πε₀R | 25.2.16 |
| Capacitors in parallel | C_eq = ΣCᵢ | 25.3.1 |
| Capacitors in series | 1/C_eq = Σ(1/Cᵢ) | 25.3.2 |
| Potential energy | U = q²/2C = ½CV² | 25.4.1–2 |
| Energy density | u = ½ε₀E² | 25.4.5 |
| Gauss' law with dielectric | ∮ κε₀E⃗·dA⃗ = q_free | 25.6.7 |

---

## Biomedical Application: Problem 70 — Defibrillator

A defibrillator uses a capacitor charged to a high potential difference to deliver energy through paddles placed on a cardiac arrest victim's chest.

**Given:** C = 70 μF, V = 5.0 kV  
**(a)** Stored potential energy: **U = 875 J**  
**(b)** Power of the pulse (23% of energy delivered in 2.0 ms): **P = 100 kW**