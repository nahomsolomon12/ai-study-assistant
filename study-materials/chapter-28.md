# Chapter 28: Magnetic Fields
*Fundamentals of Physics, Twelfth Edition — Halliday*

---

## 28.1 Magnetic Fields and the Definition of Vector B⃗

### Learning Objectives
- Distinguish an electromagnet from a permanent magnet.
- Identify that a magnetic field is a vector quantity with both magnitude and direction.
- Define a magnetic field in terms of the force on a moving charged particle.
- Apply the relationship between force F⃗_B, charge q, speed v, field magnitude B, and angle ϕ.
- Use the right-hand rule to find the direction of the magnetic force.
- Identify that the magnetic force is always perpendicular to both v⃗ and B⃗.
- Identify that the magnetic force does not change a particle's speed or kinetic energy.
- Describe magnetic field lines and magnetic dipoles.

### Definition of B⃗
A **magnetic field** B⃗ is defined in terms of the force it exerts on a moving charged particle. The force on a particle with charge q moving with velocity v⃗ through a field B⃗ is:

> **Equation 28.1.2:** F⃗_B = q(v⃗ × B⃗)

The magnitude of this force is:

> **Equation 28.1.3:** F_B = |q|vB sin ϕ

where ϕ is the angle between v⃗ and B⃗.

### Right-Hand Rule
To find the direction of F⃗_B:
1. Point your fingers in the direction of v⃗, then curl them toward B⃗.
2. Your thumb points in the direction of v⃗ × B⃗.
3. If q is **positive**, F⃗_B is along the thumb.
4. If q is **negative**, F⃗_B is opposite the thumb.

The magnetic force is **always perpendicular** to both v⃗ and B⃗, so it does no work and does not change the particle's speed or kinetic energy.

### Magnetic Field Lines and Poles
- Field lines emerge from the **north pole** and enter the **south pole** of a magnet.
- Closer field lines indicate a stronger field.
- A magnet with two poles is a **magnetic dipole**.
- Opposite poles attract; like poles repel.

### Checkpoint #1
*Direction of magnetic force in three situations:*
- (a) Positive charge, v⃗ leftward, B⃗ downward → **toward positive z-axis**
- (b) Negative charge, v⃗ downward, B⃗ into page → **toward negative x-axis**
- (c) Negative charge, v⃗ and B⃗ both along −y → **no force (cross product is zero)**

---

## 28.2 Crossed Fields: Discovery of the Electron

### Learning Objectives
- Describe J. J. Thomson's experiment.
- Determine the net force on a charged particle in crossed electric and magnetic fields.
- Find the speed at which electric and magnetic forces cancel.

### Key Concepts
When a charged particle moves through a region with both an **electric field** E⃗ and a **magnetic field** B⃗ perpendicular to each other (**crossed fields**), it experiences both an electric force and a magnetic force.

If these forces are in **opposite directions**, there exists one particular speed at which they exactly cancel, resulting in no deflection:

> v = E / B

This was the principle behind J. J. Thomson's 1897 cathode ray tube experiment, which allowed him to measure the charge-to-mass ratio (e/m) of the electron.

---

## 28.3 Crossed Fields: The Hall Effect

### Learning Objectives
- Describe the Hall effect in a current-carrying metal strip.
- Draw field, velocity, and force vectors for conduction electrons in the Hall effect.
- Apply the relationship V = Ed for the Hall potential difference.
- Use the Hall effect to find charge-carrier number density n.
- Calculate the Hall potential difference for a moving conductor.

### The Hall Effect
In 1879, Edwin H. Hall demonstrated that a magnetic field deflects the conduction electrons in a current-carrying conductor. When a magnetic field B⃗ is applied perpendicular to a conducting strip carrying current i:

1. Electrons drift and accumulate on one side, creating an internal **electric field** E⃗ (the Hall field).
2. A **Hall potential difference** V builds up across the width d of the strip.
3. Equilibrium is reached when the electric force balances the magnetic force.

The charge-carrier **number density** n can be found from:

> **Equation 28.3.4:** n = Bi / (Vel)

where l is the thickness of the strip and V is the Hall potential difference.

When a conductor moves through a uniform magnetic field at speed v, the Hall potential difference across its width d is:

> **Equation 28.3.5:** V = vBd

---

## 28.4 A Circulating Charged Particle

### Learning Objectives
- Identify conditions for straight-line, circular, and helical particle paths in a magnetic field.
- Derive an expression for orbital radius r from Newton's second law.
- Relate speed, centripetal force, radius, period, frequency, and angular frequency.
- Identify which quantities are independent of speed.
- Sketch paths for positive and negative circulating particles.
- Describe helical motion including pitch and radius of curvature.

### Circular Motion
Because the magnetic force is always perpendicular to v⃗, it acts as a centripetal force. Applying Newton's second law to circular motion:

> **Equation 28.4.2:** |q|vB = mv² / r

Solving for the orbital radius:

> **Equation 28.4.3:** r = mv / (|q|B)

The **period**, **frequency**, and **angular frequency** of circular motion are all **independent of speed**.

### Helical Motion
If a particle has velocity components both parallel and perpendicular to B⃗:
- The **perpendicular component** drives circular motion (radius r).
- The **parallel component** remains unchanged, causing the particle to trace a **helix**.
- The **pitch** p is the distance traveled parallel to B⃗ per revolution.

### Example: Mass Spectrometer
An ion of charge q is accelerated through potential difference V, then enters a uniform magnetic field B⃗ and travels a semicircle of radius r before striking a detector.

Using energy conservation and the radius formula, the ion's mass can be determined:

> m = qB²r² / (2V)

**Given:** B = 80.000 mT, V = 1000.0 V, q = +1.6022×10⁻¹⁹ C, x = 1.6254 m → r = 0.8127 m  
**Result:** m can be calculated in atomic mass units from the measured deflection distance.

---

## 28.5 Cyclotrons and Synchrotrons

### Learning Objectives
- Describe how a cyclotron works and identify where kinetic energy increases.
- State the resonance condition.
- Apply the relationship between mass, charge, magnetic field, and circulation frequency.
- Distinguish a cyclotron from a synchrotron.

### The Cyclotron
A cyclotron accelerates charged particles (e.g., protons) using two hollow D-shaped conductors ("**dees**") placed in a uniform magnetic field. An oscillating electric field in the gap between the dees repeatedly accelerates the particles, increasing their kinetic energy and orbital radius with each pass.

**Resonance condition**: The circulation frequency of the particles must match the oscillator frequency:

> **Equation 28.5.1:** f = |q|B / (2πm)

This frequency is **independent of particle speed**, which is the key operating principle.

### Proton Synchrotron
In a synchrotron, both the magnetic field B⃗ and the oscillator frequency f_osc vary with time to:
1. Keep the circulating protons in resonance with the oscillator.
2. Confine protons to a **circular** (not spiral) path.

This allows for much higher energies without requiring a magnet covering the entire spiral region.

---

## 28.6 Magnetic Force on a Current-Carrying Wire

### Learning Objectives
- Sketch the current, magnetic field, and magnetic force on a wire.
- Apply the relationship between force magnitude, current i, length L, and angle ϕ.
- Use the right-hand rule for the direction of force on a current.
- Calculate the force using cross products in both magnitude-angle and unit-vector notation.

### Force on a Straight Wire
A straight wire of length L carrying current i in a uniform magnetic field B⃗ experiences a sideways force:

> **Equation 28.6.2:** F⃗ = iL⃗ × B⃗

where L⃗ is directed along the wire in the direction of the conventional current.

### Force on a Curved or Non-Uniform Field
For a crooked wire or non-uniform field, the wire is broken into infinitesimal segments. The total force is the vector sum of forces on all segments:

> **Equation 28.6.4:** dF⃗ = i dL⃗ × B⃗

---

## 28.7 Torque on a Current Loop

### Learning Objectives
- Sketch a rectangular current loop in a magnetic field, indicating forces, current direction, normal vector n̂, and the direction of torque rotation.
- Apply the relationship between torque τ, number of turns N, area A, current i, field magnitude B, and angle θ.

### Net Torque
The net force on a complete current loop in a uniform magnetic field is zero, but the net **torque** is not. For a coil of N turns, each of area A, carrying current i in a field of magnitude B:

> **Equation 28.7.4:** τ = NiAB sin θ

where θ is the angle between the field B⃗ and the normal vector n̂ to the coil.

This is the operating principle of an **electric motor**: the torque rotates the loop, and a commutator reverses the current every half-revolution to maintain the torque direction.

---

## 28.8 The Magnetic Dipole Moment

### Learning Objectives
- Identify a current-carrying coil as a magnetic dipole with moment μ⃗.
- Calculate the magnitude μ = NiA.
- Determine the direction of μ⃗ using the right-hand rule.
- Apply the torque relationship τ = μ⃗ × B⃗.
- Calculate the orientation energy U = −μ⃗ · B⃗.
- Identify minimum and maximum energy orientations.
- Relate orientation energy to work done by an external torque.

### Magnetic Dipole Moment
A coil of N turns, area A, carrying current i has a **magnetic dipole moment**:

> μ = NiA

Its direction is given by the right-hand rule applied to the current loop.

### Torque on a Magnetic Dipole

> **Equation 28.8.3:** τ⃗ = μ⃗ × B⃗  (magnitude: τ = μB sin θ)

### Orientation Energy

> **Equation 28.8.4:** U = −μ⃗ · B⃗ = −μB cos θ

- **Minimum energy**: μ⃗ aligned with B⃗ (θ = 0°)
- **Maximum energy**: μ⃗ anti-aligned with B⃗ (θ = 180°)

### Work to Reorient a Dipole
If an external agent rotates a magnetic dipole from initial angle θᵢ to final angle θ_f (starting and ending at rest):

> **Equation 28.8.5:** W_a = ΔU = −μB cos θ_f − (−μB cos θᵢ)

---

## Chapter 28 Summary

| Topic | Key Formula | Equation |
|---|---|---|
| Magnetic force on a particle | F⃗_B = q(v⃗ × B⃗) | 28.1.2 |
| Force magnitude | F_B = \|q\|vB sin ϕ | 28.1.3 |
| Orbital radius (circular motion) | r = mv / (\|q\|B) | 28.4.3 |
| Force on a current-carrying wire | F⃗ = iL⃗ × B⃗ | 28.6.2 |
| Force on a wire element | dF⃗ = i dL⃗ × B⃗ | 28.6.4 |
| Torque on a current coil | τ = NiAB sin θ | 28.7.4 |
| Magnetic dipole moment | μ = NiA | — |
| Torque on a dipole | τ⃗ = μ⃗ × B⃗ | 28.8.3 |
| Orientation energy | U = −μ⃗ · B⃗ | 28.8.4 |
| Hall effect (carrier density) | n = Bi / (Vel) | 28.3.4 |
| Hall potential (moving conductor) | V = vBd | 28.3.5 |

---

## Biomedical Application: Problem 89 — Artery Hall Effect

A neodymium magnet (B = 0.40 T) is placed across a coronary artery (diameter d = 4.00 mm). Electrodes measure the Hall voltage as blood flows through the artery.

Using V = vBd:

- **(a)** V = 0.288 mV → **v = 18 cm/s**
- **(b)** V = 0.656 mV → **v = 41 cm/s**

