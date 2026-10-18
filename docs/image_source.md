# The Smart Suburbanite — Phase 2 Visual Asset Provenance Record (image_source.md)

- Project: The Smart Suburbanite (`smartsuburbanite.com`)
- Date: 2026-10-18 KST
- Standard: Adheres to `docs/qa/INLINE_IMAGE_USAGE_QA.md` and `docs/editorial/EDITORIAL_QUALITY_STANDARD.md`
- Scope: 8 target posts in Phase 2 (8 authentic real-world photos + 8 high-density decision/boundary SVGs)

---

## 1. ev-charger-100-amp-panel-smart-load-shedding

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/ev-charger-100-amp-panel-smart-load-shedding/electrical-panel-breakers-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:Eaton_circuit_breaker_panel_open.JPG
- **Creator / Artist:** BrokenSphere
- **License:** Creative Commons Attribution-Share Alike 3.0 Unported (`CC BY-SA 3.0`)
- **License URL:** https://creativecommons.org/licenses/by-sa/3.0
- **Attribution Text in Caption:** `Photo: BrokenSphere / Wikimedia Commons (CC BY-SA 3.0).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `C3A5D7B08CAA1CC6CBE52F8937B966249DBD6BA583A69C34079E60B4B1B9CE40`
- **Context & Usage Notes:** Actual residential installation photo showing an open hinged door of an Eaton load center with metal deadfront intact. Illustrates the DIY safety boundary: homeowners may open the hinged outer door to inspect breaker handles, but must never remove the inner deadfront near live utility lugs.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/ev-charger-100-amp-panel-smart-load-shedding/100a-evse-decision-path.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `4224097475F255A1A866761A63943D41DE9B8BC864BE1B70A287B97A134D5DDA`
- **Context & Usage Notes:** Three-tier decision flowchart mapping daily recovery needs under NEC 625.41 (125% continuous duty rule), load calculation under NEC 220.82 / 220.87, and branch options: lower fixed amperage, listed NEC 625.42 EVEMS load management, or 200A service upgrade.

---

## 2. tesla-powerwall-3-vs-generators-whole-home-battery-backup

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/tesla-powerwall-3-vs-generators-whole-home-battery-backup/tesla-powerwall-3-install-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:Two_Tesla_power_wall_3_devices_installed_inside_in_a_residential_home.jpg
- **Creator / Artist:** Rsparks3
- **License:** Creative Commons Zero 1.0 Universal (`CC0 1.0 Public Domain Dedication`)
- **License URL:** https://creativecommons.org/publicdomain/zero/1.0/
- **Attribution Text in Caption:** `Photo: Rsparks3 / Wikimedia Commons (CC0 Public Domain).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `15B58AB76A57E38E325C58A45D1DAC4B1330A3D6C3D5E71F75703A5D6932F424`
- **Context & Usage Notes:** Actual indoor residential installation of two Tesla Powerwall 3 units with metallic conduit and an AC disconnect switch. Illustrates real-world wall space and physical equipment requirements for multi-unit stacking.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/tesla-powerwall-3-vs-generators-whole-home-battery-backup/backup-runtime-worksheet.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `ED3E156475C682A45C3355DF783DE0F88D70A11A79CD05021F247EF4980637F5`
- **Context & Usage Notes:** Three-column whole-home backup engineering worksheet separating continuous running load (11.5 kW vs 22.5/26 kW), motor locked-rotor amps (185A LRA), and outage duration (13.5 kWh usable vs continuous fuel supply) alongside 2026 tax and generator compatibility guardrails.

---

## 3. smart-energy-monitors-ct-clamps-electric-bill

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/smart-energy-monitors-ct-clamps-electric-bill/clamp-meter-ct-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:Clampmeter_Fluke_337.jpg
- **Creator / Artist:** Harke
- **License:** Public Domain
- **License URL:** Public Domain
- **Attribution Text in Caption:** `Photo: Harke / Wikimedia Commons (Public Domain).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `BEE9B4AD42544E9DC4B7ABEA1B593368BBDC8C5F4E804E5D9437D610BC132D09`
- **Context & Usage Notes:** Standalone handheld clamp meter (Fluke 337). Demonstrates the physical inductive split-core sensing jaws that measure AC current around insulated conductors without cutting copper. Caption explicitly clarifies this is a handheld test instrument, distinguishing it from permanently installed in-panel monitors (such as Emporia Vue 3) that require professional deadfront removal near live utility lugs.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/smart-energy-monitors-ct-clamps-electric-bill/monitor-choice-path.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `B2807FAAA99E10492E364A316E0A602C823DFCE8FF3AC01FA31C2D39626D3FEF`
- **Context & Usage Notes:** Architecture decision matrix comparing 4 monitoring tiers: DOE Green Button smart meter data ($0), 120V smart plugs, dedicated in-panel branch CTs, and smart subpanels, complete with the panel deadfront safety boundary.

---

## 4. smart-leak-detectors-vs-automatic-shutoff-valves

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/smart-leak-detectors-vs-automatic-shutoff-valves/water-shutoff-valve-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:Ball_valve_in_household.jpg
- **Creator / Artist:** NVgt156
- **License:** Creative Commons Attribution-Share Alike 4.0 International (`CC BY-SA 4.0`)
- **License URL:** https://creativecommons.org/licenses/by-sa/4.0
- **Attribution Text in Caption:** `Photo: NVgt156 / Wikimedia Commons (CC BY-SA 4.0).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `AE63C62CE7E11C624D43AC76D46BB237D6978D70E310602652CD33F2C6C0A419`
- **Context & Usage Notes:** Actual residential plumbing installation showing quarter-turn lever ball valves on a domestic water manifold. Illustrates the smooth lever clearance required for retrofit clamp-on actuators vs inline motorized valves cut in by a licensed plumber.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/smart-leak-detectors-vs-automatic-shutoff-valves/shutoff-boundary-check.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `643E82294A57ED4E881D2374E51F0D421AFBE16B3D6A3CEE19851F729E306076`
- **Context & Usage Notes:** Plumbing schematic mapping critical boundaries: life-safety residential fire sprinkler risers (must NEVER be cut off by a domestic shutoff valve), upstream irrigation tees, ANSI/CAN/IAPMO Z1349 listed auto-shutoff valves, and point sensor zones.

---

## 5. home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh/wifi-mesh-router-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:Wi-Fi_mesh_system_Deco_M9_Plus.jpg
- **Creator / Artist:** Project Kei
- **License:** Creative Commons Attribution-Share Alike 4.0 International (`CC BY-SA 4.0`)
- **License URL:** https://creativecommons.org/licenses/by-sa/4.0
- **Attribution Text in Caption:** `Photo: Project Kei / Wikimedia Commons (CC BY-SA 4.0).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `BC05C7686A9014C1AC49B056D2C3EF02816E1DD28E7B6E2A2F8B65370811D561`
- **Context & Usage Notes:** Residential tri-band mesh Wi-Fi access point satellite node (TP-Link Deco M9 Plus). Caption clarifies that while this unit represents an earlier Wi-Fi 5 hardware generation, the fundamental physics and rules of satellite placement (halfway to target, wired Ethernet backhaul, avoiding over-provisioning 2.4 GHz contention) remain identical for modern Wi-Fi 6/6E/7 systems.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh/wifi-band-roles.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `A9E37CFE5572BF882C790C63567D0B28608BDCEB03A58AE62B8E5F703AF56D93`
- **Context & Usage Notes:** Network diagram illustrating band roles under Apple's recommended single-SSID architecture: 2.4 GHz non-overlapping channels (1, 6, 11) for IoT range, 5 GHz/6 GHz for high-throughput mobile roaming, and IEEE 802.15.4 Thread mesh with Border Routers for Matter devices.

---

## 6. smart-garage-door-openers-without-subscriptions

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/smart-garage-door-openers-without-subscriptions/liftmaster-security2-opener-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:LiftMaster_Security%2B_2.0_P3_Garage_Door_Motor_Opener.jpg
- **Creator / Artist:** Tony Webster
- **License:** Creative Commons Attribution 2.0 Generic (`CC BY 2.0`)
- **License URL:** https://creativecommons.org/licenses/by/2.0
- **Attribution Text in Caption:** `Photo: Tony Webster / Wikimedia Commons (CC BY 2.0).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `2A7F3EC319417885D19B738C1D19952159403566CB1DEE6D514F21E022CC08FA`
- **Context & Usage Notes:** Actual ceiling-mounted LiftMaster P3 garage door opener installation showing the Security+ 2.0 logo and emergency manual release cord. Directly illustrates the encoded serial digital wall-bus protocol that requires an approved adapter rather than a simple dry-contact relay.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/smart-garage-door-openers-without-subscriptions/garage-compatibility-path.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `EFB5DB998CECE506C5BAED82B29F4D200ACED8C2915A75436A1DC227C0E4E491`
- **Context & Usage Notes:** Five-step compatibility and safety verification chain: motor model verification, dry-contact vs encoded serial adapter path, physical door-position sensor, mandatory UL 325 / 16 CFR Part 1211 5-second pre-close visual/audible warning, and photoelectric beam / 2x4 entrapment reversal tests.

---

## 7. smart-home-subscription-trap-what-happens-when-you-cancel

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/smart-home-subscription-trap-what-happens-when-you-cancel/smart-lock-keypad-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:Kwikset_270_CNT_Electronic_Deadbolt_Lock.jpg
- **Creator / Artist:** TaurusEmerald
- **License:** Creative Commons Attribution-Share Alike 4.0 International (`CC BY-SA 4.0`)
- **License URL:** https://creativecommons.org/licenses/by-sa/4.0
- **Attribution Text in Caption:** `Photo: TaurusEmerald / Wikimedia Commons (CC BY-SA 4.0).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `E83AF24987C97E09B99BD0B3A2D479D1E6F8A737EA335DD5028681325290C140`
- **Context & Usage Notes:** Hardware example of a residential electronic keypad deadbolt lock (Kwikset 270). Illustrates how local onboard PIN memory and a mechanical key cylinder preserve core entry access at $0/month even if cloud plans or internet connections are discontinued.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/smart-home-subscription-trap-what-happens-when-you-cancel/subscription-cost-worksheet.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `372B28B3698ED40306F7DA381FF3C2A349C3EC6443AF899988D4D6B9229064EE`
- **Context & Usage Notes:** Six-layer post-trial functional audit checklist (Live control, clip history, rich previews, edge AI, routines, guest PINs) alongside a 36-month total cost of ownership (TCO) calculation formula using live retail and subscription pricing.

---

## 8. video-doorbells-with-no-monthly-fee-what-to-look-for

### Asset 1: Real Hardware Photo
- **File Path:** `public/assets/images/posts/video-doorbells-with-no-monthly-fee-what-to-look-for/ring-doorbell-real.jpg`
- **Source Site:** Wikimedia Commons
- **Source URL:** https://commons.wikimedia.org/wiki/File:Ring_video_doorbell.jpg
- **Creator / Artist:** Ring (via press kit released on Wikimedia)
- **License:** Creative Commons Attribution-Share Alike 4.0 International (`CC BY-SA 4.0`)
- **License URL:** https://creativecommons.org/licenses/by-sa/4.0
- **Attribution Text in Caption:** `Photo: Ring / Wikimedia Commons (CC BY-SA 4.0).`
- **Date Verified / Downloaded:** 2026-10-18
- **SHA-256:** `A9EA401DAC3ED3E8B2ADB0D40BF608EFBE5B8B18549429B6298A2DFE98771DD1`
- **Context & Usage Notes:** Actual installation photo of an original Ring Video Doorbell mounted on exterior trim beside a deadbolt. Caption explicitly clarifies that this early-generation model illustrates physical threshold mounting and post-trial storage boundaries, avoiding confusion with current product recommendations.

### Asset 2: Decision Schematic SVG
- **File Path:** `public/assets/images/posts/video-doorbells-with-no-monthly-fee-what-to-look-for/doorbell-storage-architecture.svg`
- **Source:** Custom SVG schematic engineered for The Smart Suburbanite
- **Creator:** Antigravity Editorial Engineering Team
- **License:** Proprietary / Site Asset
- **Date Created:** 2026-10-18
- **SHA-256:** `292945D8534C1A82BC35AEB6EC8EC43D757A9E198971E3A537EF2A0BC022B8FA`
- **Context & Usage Notes:** Four-tier storage architecture comparison: on-device microSD (with outdoor theft risk boundary), indoor chime/hub USB storage, local NVR/HomeBase, and free rolling cloud buffers, highlighting pre-purchase trade-offs and 16-24V AC transformer wiring requirements.
