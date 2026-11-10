---
title: "Why Wired Video Doorbells Keep Rebooting: Transformer Voltage & VA Guide"
slug: why-wired-video-doorbells-reboot-transformer-voltage-guide
description: "Why wired video doorbells reboot when the button is pressed, how underpowered 10VA transformers cause voltage sag below 16VAC, and how chime power kits and 30VA upgrades fix it."
pubDatetime: 2026-11-10T08:00:00+09:00
modDatetime: 2026-11-10T08:00:00+09:00
author: "The Smart Suburbanite Editorial Team"
category: "Maintenance & Setup"
tags:
  - "smart-home"
  - "home-security"
  - "setup-guide"
  - "decision-guide"
ogImage: https://smartsuburbanite.com/assets/images/posts/why-wired-video-doorbells-reboot-transformer-voltage-guide/cover.jpg
draft: false
---

A homeowner installs a brand-new wired video doorbell, finishes the in-app Wi-Fi setup on their smartphone, and watches a crisp 2K live stream from their front porch. Everything appears to work perfectly until someone actually walks up and pushes the physical button: the chime inside the hallway emits a faint half-buzz, the camera lens goes black, the LED status ring spins, and the video recording cuts out right when the visitor arrives.

Thirty seconds later, the doorbell boots back up and reconnects to Wi-Fi—only to freeze and reboot again the next time the button is pushed.

This issue is almost never a defective camera or a Wi-Fi dropout. It is a classic **voltage sag and underpowered transformer failure**. Traditional low-voltage doorbells installed in homes built over the last 40 years were designed to power a simple mechanical solenoid for half a second. They were never engineered to continuously run an always-on computer with an HD image sensor, infrared night-vision LEDs, a Wi-Fi transceiver, and two-way audio.

This pre-purchase and troubleshooting guide breaks down the electrical physics of **16VAC–24VAC Class 2 transformers**, **volt-ampere (VA) capacity sizing**, **chime power bypass kits**, and **National Electrical Code (NEC) Article 725** safety limits; our editorial team compiled these engineering specifications from manufacturer schematics and electrical codes rather than performing invasive household wiring.

---

## 1. The Electrical Root Cause: Voltage Sag on a 10VA Legacy Transformer

To understand why a video doorbell reboots when pressed, compare how a legacy pushbutton circuit operates against a smart video doorbell circuit.

### The Old Mechanical Circuit (Intermittent Duty)

In a traditional doorbell circuit:
1. A step-down transformer mounted in the basement, attic, or utility closet converts **120V AC household current** down to **16V AC low voltage**.
2. The mechanical push button outside is a simple **normally open (NO) momentary switch**. Zero current flows through the wires while nobody is at the door.
3. When a visitor pushes the button, the circuit closes for a fraction of a second, energizing an electromagnetic coil (solenoid) in the chime box that throws a small metal plunger against a brass tone bar (*"Ding"*). Releasing the button drops the plunger onto the second tone bar (*"Dong"*).

Because current only flowed for a single second, home builders routinely installed inexpensive **16VAC, 10VA (Volt-Ampere)** or even **10VAC, 5VA** transformers.

![Interior mechanism of a mechanical doorbell chime box showing dual solenoid coils and wiring terminals](/assets/images/posts/why-wired-video-doorbells-reboot-transformer-voltage-guide/01-doorbell-mechanical-chime-solenoid-box.jpg)
*Inside a standard two-note mechanical chime box. The front and rear terminal screws connect to the low-voltage transformer and exterior pushbuttons through magnetic solenoid plungers. (Photo: Dilshan Jayakody via Wikimedia Commons, CC BY-SA 2.0)*

### The Smart Video Circuit (Continuous Draw + Surge)

A wired video doorbell (such as a Ring Video Doorbell Pro/Plus, Nest Doorbell Wired, or Reolink Video Doorbell PoE/Wi-Fi) cannot operate as a simple open switch. It must draw **continuous standby current (`2W to 4W`)** through the existing two bell wires 24 hours a day to keep its camera, Linux board, and wireless radio online.

When a visitor presses the doorbell button:
1. The camera triggers an internal solid-state switch to close the circuit and fire the hallway chime's mechanical solenoid.
2. The solenoid suddenly demands an instantaneous surge of **`15VA to 20VA`**.
3. Because the old **10VA transformer** cannot supply both the camera's baseline operating power and the chime's heavy inductive load, the circuit voltage **sags from 16VAC down below 12VAC–14VAC**.
4. The video doorbell's onboard voltage-regulator circuit detects brownout voltage and shuts down to protect its flash memory, causing the familiar reboot loop.

![Engineering schematic comparing an underpowered 10VA doorbell transformer causing button-press voltage drop against a properly sized 16VAC 30VA transformer and chime bypass module](/assets/images/posts/why-wired-video-doorbells-reboot-transformer-voltage-guide/03-doorbell-transformer-va-voltage-drop-schematic.png)
*Why old 10VA doorbell transformers sag below operating thresholds during button presses, and how a 30VA Class 2 transformer and chime power kit stabilize the circuit.*

---

## 2. Transformer Voltage vs. Volt-Amperes (VA): Why 16V Alone Is Not Enough

Homeowners frequently test their existing doorbell wiring with a basic digital multimeter, see **`16.8V AC`** on the display, and assume their transformer is fine.

However, testing voltage with the doorbell disconnected measures **open-circuit (no-load) voltage**. It tells you nothing about whether the transformer can maintain that voltage under an active load.

### Sizing Transformer Capacity (VA = Volts × Amps)

Transformer capacity is rated in **Volt-Amperes (VA)**, which represents apparent electrical power:

$$\text{Current (Amps)} = \frac{\text{Rating (VA)}}{\text{Voltage (VAC)}}$$

* **Old 10VA Transformer at 16VAC**: Delivers only **`0.625 Amps`** of maximum current. When the camera draws `0.25A` continuously and the chime coil demands `1.2A` to fire its plunger, the transformer is overloaded by nearly `100%`.
* **Standard 30VA Transformer at 16VAC**: Delivers **`1.875 Amps`** of continuous current. Even during a button press with IR night vision and Wi-Fi transmitting simultaneously, current draw stays well within safe operating headroom.

| Transformer Specification | Current Output | Video Doorbell Compatibility | Chime Behavior |
| :--- | :--- | :--- | :--- |
| **10VAC / 5VA** (Pre-1970s) | `0.50 A` | **Incompatible** (will not power camera on) | No ring |
| **16VAC / 10VA** (Standard Suburban) | `0.625 A` | **Marginal** (works at idle, reboots on ring) | Weak "ding", camera browns out |
| **16VAC / 30VA** (Recommended Standard) | **`1.875 A`** | **Optimal** for 95% of wired video doorbells | Crisp full ring, zero voltage sag |
| **24VAC / 40VA** (Commercial / Multi-Unit)| **`1.66 A`** | **Optimal** for long runs (>100 ft) or dual doorbells | Supports front and rear chimes |

### Thin Bell Wire Resistance (20 AWG vs 18 AWG)

Older homes connect doorbells with **20 AWG or 22 AWG solid copper bell wire**. Over an 80-foot round-trip distance between the basement breaker panel, the hallway chime box, and the front porch, thin gauge wire introduces **`1.5 to 2.5 Ohms` of line resistance**.

On an underpowered 10VA transformer, that resistance bleeds off an additional `1.5V to 2.0V` before current reaches the front porch. Upgrading to a **16VAC / 30VA or 24VAC / 40VA** transformer provides enough electrical force to overcome line loss across long wiring runs.

---

## 3. What Does the "Chime Power Kit" Actually Do?

Nearly every major wired video doorbell includes a small plastic module with two wire leads—variously named the **Ring Pro Power Kit**, **Nest Chime Connector**, or **Chime Bypass Module**.

Many DIYers skip installing this module because the doorbell powers on without it. Skipping it is the leading cause of two chronic complaints: **a buzzing chime coil** and **premature camera battery degradation**.

![Residential low-voltage wiring showing transformer connections and Class 2 safety boundaries](/assets/images/posts/why-wired-video-doorbells-reboot-transformer-voltage-guide/02-low-voltage-transformer-doorbell-wiring.jpg)
*A residential low-voltage doorbell circuit showing branch-circuit junction box mounting. Always shut off power at the main breaker before touching transformer line-voltage leads. (Photo: Dmitry G via Wikimedia Commons, CC BY-SA 3.0)*

### Preventing the 24/7 Mechanical Buzz

Because the video doorbell draws continuous standby power through the chime's solenoid, a small current is constantly flowing through the chime coil.
* Without a chime kit, this trickle current creates a weak, continuous magnetic field that pulls slightly on the metal plunger, causing the chime box to emit an annoying **`60Hz` electrical hum or rattle** 24 hours a day.
* Over several months, that constant current overheats the delicate lacquer insulation on the solenoid windings, eventually burning out the chime coil entirely.

### Isolating Power During Button Presses

The **Chime Power Kit** contains a small solid-state circuit (a triac or relay with a parallel capacitor) that connects across the **`Front`** and **`Trans` (Transformer)** terminals inside your hallway chime box:
1. **In Standby**: The kit provides a low-resistance bypass path that routes continuous operating power around the chime coil directly to the video doorbell, keeping the chime silent and cool.
2. **On Button Press**: The video doorbell signals the kit to divert current through the solenoid coil for approximately `250 to 500 milliseconds`, cleanly striking the chime bar before switching back to bypass mode.

---

## 4. Mechanical vs. Digital Chimes: Setting the App Switch Correctly

If your hallway chime plays a simulated electronic tune or Westminster chimes through a built-in miniature speaker rather than physically striking metal bells, you have a **Digital Chime Box**:

* **Mechanical Chime**: Uses physical electromagnets and plungers. Requires a momentary signal (`0.25 to 0.5 seconds`). If energized too long, the solenoid buzzes loudly.
* **Digital Chime**: Contains an internal circuit board and speaker. Requires a sustained signal (`2 to 5 seconds`) so the electronic melody has time to play through its audio cycle. Most digital chimes also require a small diode installed across the exterior doorbell terminals.

In your doorbell app (Ring, Google Home, Eufy, or Reolink), check the **In-Home Chime Type** setting. Setting a mechanical chime to "Digital" will force the solenoid to hold down for several seconds, causing harsh buzzing and triggering a brownout reboot.

---

## 5. NEC Article 725 Safety: When to DIY vs. When to Call an Electrician

Under the **National Electrical Code (NEC) Article 725**, residential doorbell systems operate as **Class 2 Power-Limited Circuits**:

* **Secondary Low-Voltage Side (16VAC–24VAC)**: Poses no electrical shock hazard to humans. You can safely strip, handle, and connect bell wires to the doorbell terminals with your bare hands.
* **Primary High-Voltage Side (120VAC)**: The transformer's input side is hardwired directly into a `120V` branch circuit—typically mounted directly to the side of an octagonal metal junction box near the furnace, water heater, or electrical service panel.

### DIY Scope vs. Licensed Electrician Scope

* **Safe for Confident DIYers**: Replacing the doorbell unit on the exterior doorframe, installing the Chime Power Kit module inside the chime box, and testing terminal voltage with a multimeter.
* **Call a Licensed Electrician When**: Replacing the transformer requires unscrewing a 120V metal junction box cover, the transformer is mounted inside your main breaker panel, or you cannot locate the existing transformer in the attic or crawlspace.
