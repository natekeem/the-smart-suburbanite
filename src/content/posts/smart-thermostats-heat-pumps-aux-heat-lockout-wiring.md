---
title: "Smart Thermostats with Heat Pumps: Aux Heat Lockout & O/B Wiring"
slug: smart-thermostats-heat-pumps-aux-heat-lockout-wiring
pubDatetime: 2026-11-09T20:00:00+09:00
draft: false
category: "Maintenance & Setup"
tags:
  - smart-home
  - energy-saving
  - setup-guide
  - decision-guide
ogImage: https://smartsuburbanite.com/assets/images/posts/smart-thermostats-heat-pumps-aux-heat-lockout-wiring/cover.jpg
description: Configure a smart thermostat for an air-source heat pump without triggering expensive 10kW–15kW auxiliary electric heat strips—covering O/B reversing valves, balance points, and lockout settings.
---

Pairing a standard smart thermostat with an air-source heat pump using default furnace settings is one of the fastest ways to double or triple a winter electric bill. While a heat pump compressor moves heat efficiently at a Coefficient of Performance (COP) between **2.0 and 4.0**, the backup electric resistance heat strips (`Aux` or `W2`) inside the air handler operate at a COP of **1.0**—drawing **10 kW to 15 kW** (roughly 40 to 60 amps at 240V) every time the thermostat calls for fast recovery.

Understanding how the **`O/B` reversing valve terminal**, **compressor balance point**, and **Aux Heat Lockout temperature** interact allows you to keep the heat pump running on compressor stages first and reserve resistance strips strictly for deep freezes and defrost cycles. This guide is based on U.S. Department of Energy (DOE), ENERGY STAR, and Northeast Energy Efficiency Partnerships (NEEP) technical guidance; it is a pre-configuration and wiring identification guide, not a substitute for a licensed HVAC technician.

---

## 1. Why Heat Pumps Behave Differently Than Gas Furnaces

A conventional gas or oil furnace produces high-temperature supply air (typically 120°F to 140°F at the register) and recovers a 6°F overnight temperature setback in 20 to 30 minutes. An air-source heat pump extracts heat from outdoor air and delivers gentler supply air (typically **90°F to 105°F**), maintaining indoor comfort by running longer, steadier compressor cycles.

![Carrier outdoor split heat pump condenser unit installed alongside a residential wall](/assets/images/posts/smart-thermostats-heat-pumps-aux-heat-lockout-wiring/01-carrier-outdoor-heat-pump-unit.jpg)
*An outdoor air-source heat pump condenser unit transfers thermal energy through refrigerant lines; unlike a combustion furnace, its efficiency depends on steady staging rather than deep temperature setbacks. (Photo: Tony Webster via Wikimedia Commons, CC BY 4.0).*

When a homeowner programs a deep overnight setback—for example, dropping the thermostat from 68°F to 60°F at night and calling for 68°F at 6:00 AM—a misconfigured smart thermostat sees an 8°F gap (`Delta-T`) and assumes the compressor cannot keep up. It immediately energizes the **`W2 / Aux` terminal**, turning on 10 kW to 15 kW of electric resistance toaster coils even when the outdoor temperature is a mild 42°F.

According to U.S. Department of Energy and ENERGY STAR connected-thermostat guidance, heat-pump optimization requires separating **compressor staging (`Y1/Y2`)** from **supplemental electric resistance heat (`W2/Aux`)** using outdoor temperature lockouts and gradual recovery ramps.

---

## 2. The 24VAC Heat Pump Terminal Map (`O/B`, `Y1`, `Aux/W2`, `E`, `C`)

Before changing settings—or before moving wires from an old thermostat subbase—verify the exact function of each low-voltage 24VAC wire. If you have not yet checked your transformer voltage or common-wire path, start with our [smart thermostat compatibility and C-wire checklist](/posts/smart-thermostat-compatibility-what-to-check-before-you-buy/).

| Terminal Label | Standard Function | Electrical Role & Configuration Rule |
| :--- | :--- | :--- |
| **`R` / `Rc` / `Rh`** | 24VAC Hot Supply | Supplies 24VAC power from the air-handler control transformer |
| **`C`** | 24VAC Common Return | Completes the continuous power loop; essential for heat pumps with multi-relay calls |
| **`Y` / `Y1` (& `Y2`)** | Compressor Stage 1 (& 2) | Runs the outdoor heat pump compressor in **both** heating and cooling modes |
| **`G`** | Indoor Blower Fan | Energizes the indoor air-handler fan relay |
| **`O/B`** | Reversing Valve | Shifts refrigerant flow direction between Heating and Cooling |
| **`W2` / `Aux`** | Auxiliary Heat | Energizes backup electric resistance strips (or secondary furnace stage) while compressor runs |
| **`E`** | Emergency Heat | Manual override that locks out the outdoor compressor and runs backup heat alone |

### The `O/B` Reversing Valve Rule (Why Heat Mode Blows Cold Air)

The single most common day-one setup error on a heat pump smart thermostat is an inverted **`O/B` reversing valve** setting:

- **Energize on Cool (`O` — Majority of Brands):** Carrier, Bryant, Payne, Trane, American Standard, Lennox, Goodman, Amana, and York energize the reversing valve solenoid when calling for **Cooling (`O`)**. If the valve loses power, it fails safe into Heating mode.
- **Energize on Heat (`B` — Specific Brands):** Rheem, Ruud, and certain Bosch or geothermal heat pumps energize the reversing valve solenoid when calling for **Heating (`B`)**.

If your heat pump blows ice-cold air when set to Heat (and warm air when set to Cool), do not rewire the outdoor unit. Open the smart thermostat's equipment installer menu and toggle the `O/B` reversing valve setting from `O (Cool)` to `B (Heat)` (or vice versa).

### Do Not Jumper `Aux/W2` and `E` on Smart Thermostats

Older non-programmable heat pump thermostats often had a small metal staple or jumper wire connecting `W2/Aux` and `E`. Most modern smart thermostats (including ecobee and Google Nest Learning Thermostats) manage `Aux` and `Emergency` logic internally through software; manufacturers explicitly instruct users **not** to install a jumper between `W2/Aux` and `E`, and to cap or land the `E` wire according to the exact model's wiring diagram.

---

## 3. Setting Aux Heat Lockout and Compressor Balance Points

![Mitsubishi Ecodan air-source heat pump outdoor unit operating in winter snow](/assets/images/posts/smart-thermostats-heat-pumps-aux-heat-lockout-wiring/02-heat-pump-outdoor-unit-winter-snow.jpg)
*Outdoor heat pump units periodically run defrost cycles in freezing, snowy weather, briefly energizing auxiliary heat strips to keep supply air warm while melting frost off the outdoor coil. (Photo: PeterEastern via Wikimedia Commons, CC BY-SA 4.0).*

Every heat pump has a **thermal balance point**: the outdoor ambient temperature below which the heat pump's BTU output can no longer match the house's heat loss on its own.

![Heat pump smart thermostat staging diagram showing compressor balance point and auxiliary heat lockout zones](/assets/images/posts/smart-thermostats-heat-pumps-aux-heat-lockout-wiring/03-heat-pump-balance-point-aux-lockout-schematic.png)
*Staged temperature control separates mild-weather compressor operation (Zone A) from cold-weather supplemental strip assist (Zone B) and dual-fuel cutoff (Zone C).*

### Three Core Settings to Check in Your Thermostat's Installer Menu

1. **Aux Heat Max Outdoor Temperature (Aux Lockout): `30°F to 35°F` (Single-Speed/Two-Stage) or `20°F to 25°F` (Cold-Climate)**
   - This setting tells the thermostat: *"Never turn on the electric resistance strips (`W2/Aux`) when the outdoor weather feed is above this temperature."*
   - Even if someone raises the thermostat by 4 degrees on a 45°F autumn morning, the thermostat will hold back the 10 kW–15 kW electric strips and let the heat pump compressor bring the house up to temperature at 300% efficiency.
   - *(Note: The air handler's own defrost control board can still briefly energize the heat strips via its direct board connection during an outdoor coil defrost cycle so cold air does not blow from the vents.)*

2. **Compressor-to-Aux Temperature Delta (Differential): `2°F to 3°F` (Instead of `Auto` or `1°F`)**
   - When outdoor temperatures drop below your Aux Lockout threshold, this setting determines how far the indoor temperature must fall below your target setpoint before `Aux` strips assist the compressor.
   - Setting a `2°F` or `3°F` differential prevents short cycling of the resistance strips during normal household door openings.

3. **Compressor Minimum Outdoor Temperature (Compressor Cutoff):**
   - **All-Electric Heat Pump (With Electric Strip Backup):** Because a heat pump remains more efficient than electric resistance strips (`COP > 1.0`) even at very low temperatures, NEEP and DOE guidance recommend setting the compressor lockout to the manufacturer's lowest rated operating temperature (or **Disabled / Off** on cold-climate inverter heat pumps that include internal low-ambient protection) so you do not prematurely shut off the compressor.
   - **Dual-Fuel System (Heat Pump + Gas/Propane/Oil Furnace):** Unlike electric strips, a gas furnace does not run at the same time as the heat pump compressor (`Allow Simultaneous Heat Pump + Aux = Disabled`). Set the changeover (economic balance point) typically between **30°F and 40°F** depending on local electric-to-gas utility rates.

If you want to verify how much power your air handler and outdoor condenser actually draw during winter mornings, see our guide to [whole-home smart energy monitors and CT clamps](/posts/smart-energy-monitors-ct-clamps-electric-bill/).

---

## 4. Communicating Variable-Speed Inverter Heat Pumps: When to Skip Third-Party Smart Thermostats

Not every heat pump should use a retail smart thermostat. Before replacing a wall controller, check whether your heat pump is a **proprietary communicating variable-speed system** (such as Carrier Infinity, Bryant Evolution, Trane ComfortLink II / UX360, Lennox iComfort S30/S40, or Mitsubishi M-Series/Kumo without a 24V adapter).

| Heat Pump Control Type | Typical Wire Labels at Wall | Best Thermostat Choice | Why It Matters |
| :--- | :--- | :--- | :--- |
| **Single-Stage 24VAC Heat Pump** | `R, C, Y1, G, O/B, W2/Aux` | ENERGY STAR 24V Smart Thermostat | Full Aux Lockout and schedule optimization |
| **Two-Stage 24VAC Heat Pump** | `R, C, Y1, Y2, G, O/B, W2/Aux` | Multi-stage 24V Smart Thermostat | Preserves low-stage quiet runtimes and Aux Lockout |
| **Proprietary Communicating Inverter** | `A, B, C, D` or `1, 2, 3` digital bus | **Keep the OEM Communicating Wall Control** | Replacing with a 24V relay thermostat downgrades continuous modulation and dehumidification |

If you are still deciding whether upgrading the wall control makes sense for your routine, compare the broader trade-offs in [Do You Really Need a Smart Thermostat?](/posts/do-you-really-need-a-smart-thermostat/).

---

## 5. Homeowner Action Checklist for Heat Pump Thermostats

1. **Photograph the existing backplate** before touching a single wire, noting whether wires land on the **"Heat Pump"** or **"Conventional"** label column.
2. **Verify your equipment brand's `O/B` polarity** (`O` for most brands; `B` for Rheem/Ruud).
3. **Keep temperature setbacks modest (`1°F to 3°F` max)** on heat pumps, or hold a steady temperature during freezing weather so morning recovery never forces resistance strip heating.
4. **Enable `Aux Heat Lockout`** between `30°F and 35°F` (adjusting down if your home stays comfortable, or slightly higher in uninsulated older homes).
5. **Check your air filter monthly** during winter—restricted airflow across an air-handler coil causes high-head-pressure cutouts on the heat pump and overheats electric strip elements.

---

## Sources and Verification Notes

All technical boundaries and staging principles in this guide were verified against:

- [U.S. Department of Energy (DOE) — Air-Source Heat Pumps](https://www.energy.gov/energysaver/air-source-heat-pumps)
- [ENERGY STAR — Smart Thermostats Product Criteria and Heat Pump Control Guidance](https://www.energystar.gov/products/smart_thermostats)
- [Northeast Energy Efficiency Partnerships (NEEP) — Guide to Installing Air-Source Heat Pumps in Cold Climates](https://neep.org/heating-electrification/air-source-heat-pumps)
