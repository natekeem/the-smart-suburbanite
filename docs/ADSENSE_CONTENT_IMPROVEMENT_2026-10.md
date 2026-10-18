# Smart Suburbanite AdSense 콘텐츠 개선 및 Phase 2 정밀 보완 감사 보고서

- 감사 및 보완일: 2026-10-18 KST
- 대상: `https://smartsuburbanite.com/` 공개 글 22개 (집중 수정 대상 8편 + 시각자료 16개 + 핵심 신뢰·검색 경로)
- 작업 상태: 로컬 소스와 프로덕션 빌드·검색·편집 감사 완료 (`commit`·`push`·배포·AdSense 재검토 요청은 미실행 대기 상태)
- 중요한 한계: 이 문서는 기술·콘텐츠·시각자료 준비 상태를 기록한다. Google AdSense 승인, 색인, 순위, 트래픽 또는 수익을 보장하지 않는다.

---

## 1. 작업 요약

공개 글 22개를 전수 감사한 뒤, 기존 안전·세금·팩트 교정분(P0/P1/P2)을 100% 보존하면서 수정 대상 8편의 **영문 검색 의도(Long-Tail CTR 제목), 출처 기반 하드웨어 사양·요금제 기준, 구매·설치 판단 표, 상업적 재사용 라이선스가 검증된 실제 장비 사진(8개) + 고밀도 판단 도식(8개)**을 정밀 보완했다.

핵심 결과는 다음과 같다.

1. **보존한 팩트·안전·세금 교정(Step B 100% 유지)**:
   - **IRS Section 25D 종료일 정정**: 연방 주거용 청정에너지 세액공제(`30%`)는 **2025년 12월 31일** 이후 사용 개시(`placed in service`)된 설비에 적용되지 않으며, 2026년 신규 설치분은 연방 세액공제 **$0**를 기준으로 비교하도록 고정했다.
   - **IRS Section 30C 종료일 및 적격 요건 정정**: 개인용 EV 충전 설비 세액공제는 적격 저소득 또는 비도시 인구조사 구역(`eligible low-income or non-urban census tract`) 내 주 거주지에서 **2026년 6월 30일**까지 사용 개시된 자산에만 적용되었으며, 2026년 6월 30일 이후 설치분은 **$0**임을 명시했다.
   - **발전기·배터리·태양광 호환성 정밀 구분**: Tesla 공식 시스템 설계 지침(`System Design: AC-Coupled Solar System Sizing`) 및 호환성 표(`Powerwall Compatibility Table`)에 따라, △DC 커플링 태양광(내장 인버터 6 MPPT, 최대 20 kW DC 직접 연결), △기존 **타사 AC 커플링 태양광 인버터 지원**(레트로핏 지원, Powerwall 3 1대당 최대 7.68 kW AC / Expansion 결합 시 10 kW AC 허용, 오프그리드 주파수 시프트 제어), △타사 배터리 병렬 연동 불가(Tesla 기기만 결합 가능), △상류/휴대용 발전기를 통한 배터리 충전 불가(ATS를 통한 완전 물리적 분리 필수)의 4대 장비 경계를 명확히 구분하여 반영했다.
   - **공식 1차 출처 링크 및 깨진 링크 수정 보존**: Blink 및 eufy 지원 문서의 깨진 링크(404) 2건 교체분과 8편의 공식 제조사·기관(IRS, DOE, ENERGY STAR, EPA WaterSense, CPSC, UL, NIST, Apple, Google, Thread Group, Tesla, Generac, Emporia, Sense, Wallbox, RVE) 1차 출처 링크를 모두 유지했다.
   - **기존 고유 표지 이미지 유지**: 8편 모두 기존 `cover.jpg` frontmatter `ogImage`를 유지하고 본문 상단 중복 표지 삽입이 없음을 확인했다.
2. **수익형 콘텐츠 경쟁력 및 검색 의도 복원(Step C)**:
   - 과도하게 축약되었던 31~43자 제목을 영문 롱테일 검색 의도와 핵심 사양·비교 축이 드러나는 **66~70자 제목**으로 개선하고, 각 글마다 **제목 후보 3개**를 비교 선정했다(기존 URL `slug` 100% 유지).
   - 도입부 첫 2문장 안에 핵심 질문에 대한 직접적인 답과 공식 출처로 검증된 구체적 사양 수치(`13.5 kWh`, `11.5 kW / 48A`, `185A LRA`, `22.5 kW NG / 26 kW LP`, `NEC 625.41 125% rule`, `ANSI/CAN/IAPMO Z1349`, `UL 325 5-second warning`, `3-hour rolling history`, `microSD up to 128 GB`, `Sync Module 2 USB up to 256 GB`)를 배치했다.
   - 모든 글에 독자가 즉시 활용할 수 있는 **구체적 사양·기능·경계 비교표**와 **현장 점검/견적 체크리스트**를 보강했다.
3. **시각자료 및 도식 정밀 개선(Step D)**:
   - 만료된 세액공제나 근거 없는 절감 수치·실측 주장이 들어 있던 기존 PNG 4개는 삭제 상태를 유지했다.
   - 기존 14개 SVG를 개별 전수 평가하여, 본문 목록을 단순 박스로 반복한 저밀도 SVG 7개를 제거하고 **위키미디어 공용(Wikimedia Commons)에서 상업적 재사용 라이선스(`CC0`, `Public Domain`, `CC BY`, `CC BY-SA`)가 검증된 실제 장비·설비 사진 8개**를 배치했다.
   - 글 이해와 의사결정에 실질적으로 기여하는 판단 흐름도·경계 도식 SVG 7개는 구체적 규격 수치(`NEC 220/625`, `185A LRA`, `IAPMO Z1349`, `2.4 GHz Ch 1/6/11`, `UL 325`, `36-Month TCO`)를 담아 고밀도로 업그레이드하고, 기존에 본문 시각자료가 0개였던 `video-doorbells-with-no-monthly-fee-what-to-look-for`에 무구독 저장 구조 비교 도식(`doorbell-storage-architecture.svg`) 1개를 신설하여 **수정 8편 모두 ‘실제 장비 실사 사진 1개 + 고밀도 판단 도식 1개 + 본문 비교표 1~2개’ 구성**을 완성했다.

---

## 2. 게시글별 제목 후보 3개 비교 및 선정 내역 (Slug 100% 보존)

| # | Slug (변경 없음) | 기존 축약 제목 (Working Tree) | 후보 3개 비교 (`[선정]` 표시) | 최종 선정 제목 (글자 수) 및 선정 사유 |
| ---: | :--- | :--- | :--- | :--- |
| 1 | `ev-charger-100-amp-panel-smart-load-shedding` | `EV Charging on a 100A Service` (29자) | 1. **[선정]** `EV Charger on a 100A Panel: Load Calculation vs. Smart Load Shedding` (68자)<br>2. `Level 2 EV Charging on a 100A Service: NEC Load Math & EVEMS Guide` (66자)<br>3. `Can a 100-Amp Panel Run a Level 2 EV Charger Without an Upgrade?` (64자) | **`EV Charger on a 100A Panel: Load Calculation vs. Smart Load Shedding` (68자)**<br>주택 소유자의 핵심 검색어(`EV Charger on a 100A Panel`)와 두 가지 기술 해법(`Load Calculation vs. Smart Load Shedding`)을 정직하고 선명하게 대비함. |
| 2 | `tesla-powerwall-3-vs-generators-whole-home-battery-backup` | `Powerwall 3 vs. Standby Generator` (33자) | 1. **[선정]** `Tesla Powerwall 3 vs. Standby Generators: Specs, Runtime & 2026 Rules` (69자)<br>2. `Powerwall 3 vs. 26kW Standby Generator: Output, Runtime & Tax Rules` (67자)<br>3. `Whole-Home Battery Backup vs. Standby Generators: Powerwall 3 Guide` (67자) | **`Tesla Powerwall 3 vs. Standby Generators: Specs, Runtime & 2026 Rules` (69자)**<br>정식 제품명(`Tesla Powerwall 3`)과 비교 대상(`Standby Generators`), 3대 핵심 판단 기준(`Specs, Runtime & 2026 Rules`)을 모두 포함함. |
| 3 | `smart-energy-monitors-ct-clamps-electric-bill` | `Whole-Home Energy Monitor Guide` (31자) | 1. **[선정]** `Whole-Home Energy Monitors: CT Clamps, Utility Data & Panel Safety` (66자)<br>2. `Smart Energy Monitors With CT Clamps: Specs, Limits & Panel Safety` (66자)<br>3. `Whole-Home Energy Monitors: How CT Clamps Track High-Bill Circuits` (66자) | **`Whole-Home Energy Monitors: CT Clamps, Utility Data & Panel Safety` (66자)**<br>핵심 하드웨어(`CT Clamps`), 무료 대안(`Utility Data`), 필수 안전 경계(`Panel Safety`)를 한눈에 제시함. |
| 4 | `smart-leak-detectors-vs-automatic-shutoff-valves` | `Leak Sensors vs. Automatic Shutoff Valves` (41자) | 1. **[선정]** `Smart Leak Detectors vs. Automatic Shutoff Valves: Coverage & Limits` (68자)<br>2. `Leak Sensors, Flow Monitors & Auto Shutoff Valves: Homeowner Guide` (66자)<br>3. `Smart Water Leak Detectors vs. Shutoff Valves: What Each Stops` (62자) | **`Smart Leak Detectors vs. Automatic Shutoff Valves: Coverage & Limits` (68자)**<br>검색 의도가 높은 두 제품군 비교에 배관 보호 범위와 한계(`Coverage & Limits`)를 결합함. |
| 5 | `home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh` | `2.4 GHz, 5 GHz, or Mesh for Smart Homes` (39자) | 1. **[선정]** `Home Wi-Fi for Smart Devices: 2.4 GHz vs. 5 GHz, Mesh & Matter Setup` (68자)<br>2. `Smart-Home Wi-Fi Guide: 2.4 GHz vs. 5 GHz, Single SSID & Mesh Setup` (67자)<br>3. `Why 2.4 GHz Smart Devices Fail Setup on 5 GHz & Mesh Wi-Fi Networks` (67자) | **`Home Wi-Fi for Smart Devices: 2.4 GHz vs. 5 GHz, Mesh & Matter Setup` (68자)**<br>주파수 대역 비교(`2.4 GHz vs. 5 GHz`)와 최신 프로토콜(`Mesh & Matter Setup`) 검색 의도를 모두 포괄함. |
| 6 | `smart-garage-door-openers-without-subscriptions` | `Smart Garage Control Without a Subscription` (43자) | 1. **[선정]** `Smart Garage Controllers Without Subscriptions: Compatibility & Safety` (70자)<br>2. `No-Subscription Smart Garage Door Controllers: UL 325 & Opener Guide` (68자)<br>3. `Smart Garage Door Control Without Monthly Fees: Compatibility Guide` (67자) | **`Smart Garage Controllers Without Subscriptions: Compatibility & Safety` (70자)**<br>무구독 차고 컨트롤러 검색어와 실제 구매 실패 요인(`Compatibility & Safety`)을 직관적으로 연결함. |
| 7 | `smart-home-subscription-trap-what-happens-when-you-cancel` | `What Happens When a Smart-Home Trial Ends` (41자) | 1. **[선정]** `When a Smart-Home Trial Ends: What Still Works Without a Subscription` (69자)<br>2. `Smart-Home Subscription Trap: What Still Works After You Cancel?` (64자)<br>3. `What Happens When You Cancel a Smart-Home Subscription? (6-Layer Audit)` (71자) | **`When a Smart-Home Trial Ends: What Still Works Without a Subscription` (69자)**<br>무료 체험 종료 후 무구독 상태에서 남는 기능을 묻는 독자 질문을 가장 직접적으로 해결함. |
| 8 | `video-doorbells-with-no-monthly-fee-what-to-look-for` | `Video Doorbells With No Monthly Fee: What to Look For` (53자) | 1. **[선정]** `Video Doorbells With No Monthly Fee: Local Storage vs. Cloud Limits` (67자)<br>2. `Video Doorbells Without Subscriptions: microSD, Hub & Cloud Rules` (65자)<br>3. `Video Doorbells With No Monthly Fee: What to Look For Before Buying` (67자) | **`Video Doorbells With No Monthly Fee: Local Storage vs. Cloud Limits` (67자)**<br>핵심 키워드(`Video Doorbells With No Monthly Fee`)를 유지하면서 실제 의사결정 기준(`Local Storage vs. Cloud Limits`)을 구체화함. |

---

## 3. 게시글별 보존한 팩트·안전 수정 및 보강한 사양·판단 정보

### 3.1 `ev-charger-100-amp-panel-smart-load-shedding`
- **보존한 팩트·안전 수정**:
  - IRS Section 30C 세액공제 **2026년 6월 30일 종료** 및 적격 저소득·비도시 인구조사 구역(`census tract`) 요건 유지 (2026년 하반기 신규 견적 시 연방 공제 `$0` 적용).
  - 메인 차단기 OFF 시에도 서비스 인입 도체와 러그가 활선임을 경고하고 데드프런트 DIY 개방 금지 유지.
  - NEC 2023 Section 220.57, 220.70, 220.82, 220.87, 625.41, 625.42 및 AHJ 승인 원칙 유지.
- **보강한 사양·판단 정보**:
  - **NEC 625.41 연속 부하(125% 규칙) 및 야간 10시간 충전 회복량 표** 신설: `16A`(20A 차단기, `3.84 kW`, 10시간 `38.4 kWh`) ~ `48A`(60A 차단기, `11.52 kW`, 10시간 `115.2 kWh`) 비교.
  - **EVEMS 3대 하드웨어 아키텍처 비교표** 신설: `Wallbox Pulsar Plus + Power Meter`(RS-485 동적 전류 조절), `Emporia EV Charger + Vue PowerSmart`, `RVE DCC-9`(80% 임계치 피더 차단 및 복구 지연) 비교.

### 3.2 `tesla-powerwall-3-vs-generators-whole-home-battery-backup`
- **보존한 팩트·안전 수정**:
  - IRS Section 25D 세액공제 **2025년 12월 31일 종료** (2026년 설치분 연방 세액공제 `$0`) 유지.
  - Tesla 공식 시스템 설계 지침 및 호환성 표에 따른 **4대 장비 호환성 경계** 명시:
    1. **DC 커플링 태양광**: 내장 인버터(6 MPPT / 최대 20 kW DC) 직접 연결 지원.
    2. **타사 AC 커플링 태양광 인버터**: 레트로핏 설치 공식 지원(단일 PW3당 최대 **7.68 kW AC** / Expansion 결합 시 **10 kW AC** 비율 한도, 오프그리드 주파수 시프트 제어).
    3. **타사 배터리**: 병렬 연동 불가(Tesla Powerwall/Expansion만 결합 가능).
    4. **상류/휴대용 발전기**: **배터리 충전 불가**(발전기와 배터리를 한 주택에서 병용할 경우 ATS를 통한 완전 물리적 격리 필수).
- **보강한 사양·판단 정보**:
  - **Tesla Powerwall 3 vs. Generac Guardian 26 kW (G007290/G007291) 공인 사양 비교표** 신설: `13.5 kWh` 저장 용량, `11.5 kW (48A)` 연속 출력, `185A LRA` 모터 기동 전류, `6 MPPT / 최대 20 kW DC` 태양광 입력 vs. Generac `22.5 kW (NG) / 26.0 kW (LP)` 출력, `67 dBA (23 ft)` 소음, 시간당 연료 소모량(`50% 부하 시 NG 216 cu. ft./hr·LP 2.37 gal/hr`, `100% 부하 시 NG 327 cu. ft./hr·LP 3.85 gal/hr`) 반영.
  - **13.5 kWh 부하 시나리오별 이론적 런타임 계산표**(`1.0~1.5 kW` 필수 부하 vs. `3.0~4.0 kW` 에어컨 순환 부하 vs. `6.0~8.0 kW` 대형 동시 부하) 보강.

### 3.3 `smart-energy-monitors-ct-clamps-electric-bill`
- **보존한 팩트·안전 수정**:
  - 분전반 데드프런트 내부 활선 위험 경고 및 면허 전기기사 설치 필수 원칙 유지.
  - Sense 소비자용 인패널 모니터 하드웨어의 **2025년 12월 31일부 판매 종료** 및 기존 기기 지원 공지 유지.
- **보강한 사양·판단 정보**:
  - **가정용 전력 모니터링 4단계(Tier 1~4) 비교표** 신설: `DOE Green Button` 스마트미터 데이터(15~60분 간격, `$0`), `120V/15A 스마트 플러그 모니터`, `Emporia Vue 3 인패널 CT 모니터`(`2× 200A 메인 CT + 최대 16× 50A 분기 CT`), `SPAN 스마트 패널` 비교.

### 3.4 `smart-leak-detectors-vs-automatic-shutoff-valves`
- **보존한 팩트·안전 수정**:
  - EPA WaterSense 3계층 분류, **주거용 화재 스프링클러 배관 차단 절대 금지** 경계, **ANSI/CAN/IAPMO Z1349** 인증 기준, 보험사별 서면 확인 원칙 유지.
- **보강한 사양·판단 정보**:
  - **누수 방어 3계층(포인트 센서·초음파/인라인 유량계·자동 차단 밸브) 상세 비교표** 신설: 감지 원리, 포착 가능한 누수(급수관 vs. 에어컨 응축수·배수관), 차단 불가 영역, 배관 규격(`3/4"`~`1-1/4"` 볼밸브 호환성) 정리.

### 3.5 `home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh`
- **보존한 팩트·안전 수정**:
  - Apple(`102766`) 및 Google Nest Wifi의 단일 SSID 기본 권장안, 클라이언트 격리(`AP isolation`)·보안 모드 점검, Thread Border Router 역할 분리 유지.
- **보강한 사양·판단 정보**:
  - **스마트홈 4대 무선 경로 비교표** 신설: `2.4 GHz Wi-Fi`(북미 비중첩 20 MHz 채널 `1, 6, 11`), `5 GHz Wi-Fi`(`20/40/80/160 MHz`), `6 GHz Wi-Fi (Wi-Fi 6E/7, WPA3 필수)`, `Thread (IEEE 802.15.4 IPv6 메시 + Thread Border Router)` 비교 및 6대 셋업 실패 원인 정리.

### 3.6 `smart-garage-door-openers-without-subscriptions`
- **보존한 팩트·안전 수정**:
  - **CPSC 16 CFR Part 1211** 및 **UL 325** 무인 원격 닫힘 경보(최소 5초 이상 가청 경보음 + 점멸등), 바닥 6인치 이내 광전식 안전 센서, `2×4` 목재 접촉 반전 테스트, 스프링/케이블 고장 시 작업 금지 경고 유지.
- **보강한 사양·판단 정보**:
  - **무구독 차고 제어 3대 아키텍처 비교표** 신설: 내장형 Wi-Fi 오프너 vs. 표준 무전압 접점(`Dry-Contact`) 릴레이 vs. 암호화 직렬 버스(`LiftMaster/Chamberlain Security+ 2.0` 노란색 런 버튼 + 전용 어댑터 필수) 비교.

### 3.7 `smart-home-subscription-trap-what-happens-when-you-cancel`
- **보존한 팩트·안전 수정**:
  - Ring, Google Home Premium(구 Nest Aware), NIST IR 8425 공식 문서 기준 및 36개월 실시간 견적 산식 유지.
- **보강한 사양·판단 정보**:
  - **무료 체험 종료 후(`$0/월`) 6대 기능 계층 생존 비교표** 신설: 클라우드 우선 기기(Ring 녹화 `0시간`, Google Nest 배터리형 `3시간 롤링 이벤트 이력`) vs. 로컬 저장/로컬 키패드 기기의 기능 생존 범위 비교.

### 3.8 `video-doorbells-with-no-monthly-fee-what-to-look-for`
- **보존한 팩트·안전 수정**:
  - Ring, Google Nest, Blink, eufy 공식 지원 문서 11개 링크(수정된 Blink/eufy 링크 2개 포함) 및 4개 모델 비교표 유지.
- **보강한 사양·판단 정보**:
  - **무구독 비디오 도어벨 4대 저장 아키텍처**(`eufy C31` 기기 내장 microSD 최대 `128 GB` / `HomeBase S380`, `Blink Video Doorbell 2nd Gen + Sync Module 2` 실내 USB 최대 `256 GB`, `Google Nest Doorbell battery` `3시간` 무료 클라우드 버퍼, `Ring` 실시간 보기 전용) 비교 도식 및 16–24V AC 하드와이어링/외부 도난 경계 설명 보강.

---

## 4. 시각자료 감사: 삭제 PNG 4개 사유, 14개 SVG 전수 평가 및 실제 장비 사진 출처

### 4.1 삭제 유지한 기존 오해 가능 PNG 4개
다음 4개 파일은 만료된 연방 세액공제나 검증되지 않은 비용·실측 주장을 포함하고 있어 복원하지 않고 삭제 상태를 유지했다.

1. `tesla-powerwall-3-vs-generators-whole-home-battery-backup/tco-10yr-comparison.png`: 2025년 말 종료된 Section 25D 세액공제와 고정 TOU 절감액, 임의의 10년 총비용 우위를 단정적으로 표기함.
2. `tesla-powerwall-3-vs-generators-whole-home-battery-backup/hvac-inrush-softstarter.png`: 특정 전류 감소치(`96A → 28A`)와 에어컨 기동 보장을 실측 결과처럼 표현함.
3. `ev-charger-100-amp-panel-smart-load-shedding/01-service-upgrade-vs-load-shedding-schematic.png`: 고정 공사비, `85%` 비용 절감, `2시간 설치`, 무조건적 코드 통과를 주장함.
4. `ev-charger-100-amp-panel-smart-load-shedding/02-household-amperage-load-curve.png`: `"Zero Breaker Trips Recorded"`라는 검증되지 않은 실험 문구를 포함함.

### 4.2 기존 14개 SVG 전수 평가 및 고밀도 개편 내역
- **유지 및 고밀도 업그레이드(7개) + 신규 생성(1개) = 총 8개 판단 도식 SVG**:
  1. `ev-charger-100-amp-panel-smart-load-shedding/100a-evse-decision-path.svg`: **유지·업그레이드** (`NEC 625.41 125% 규칙`, `NEC 220.82/220.87 부하 계산`, `NEC 625.42 EVEMS` 판단 흐름도로 고밀도 개편)
  2. `tesla-powerwall-3-vs-generators-whole-home-battery-backup/backup-runtime-worksheet.svg`: **유지·업그레이드** (`11.5 kW / 48A`, `185A LRA`, `13.5 kWh`, `22.5 kW NG / 26 kW LP`, `IRS 25D $0` 수치를 담은 3단 엔지니어링 워크시트로 개편)
  3. `smart-energy-monitors-ct-clamps-electric-bill/monitor-choice-path.svg`: **유지·업그레이드** (4단계 모니터링 티어 및 데드프런트 활선 경고 도식으로 개편)
  4. `smart-leak-detectors-vs-automatic-shutoff-valves/shutoff-boundary-check.svg`: **유지·업그레이드** (화재 스프링클러 생명안전 경계, 밸브 전단 관수 분기, `IAPMO Z1349` 자동 밸브, 비급수 누수 구역 배관도로 개편)
  5. `home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh/wifi-band-roles.svg`: **유지·업그레이드** (단일 SSID 아래 `2.4 GHz Ch 1/6/11`, `5/6 GHz`, `Thread 802.15.4 Border Router` 경로도로 개편)
  6. `smart-garage-door-openers-without-subscriptions/garage-compatibility-path.svg`: **유지·업그레이드** (`Security+ 2.0` 직렬 어댑터, `UL 325 / 16 CFR 1211` 5초 시청각 경보, 광전 센서·`2×4` 반전 테스트 5단계 체인으로 개편)
  7. `smart-home-subscription-trap-what-happens-when-you-cancel/subscription-cost-worksheet.svg`: **유지·업그레이드** (`$0/월` 6계층 생존 점검표 + 36개월 총소유비용 워크시트로 개편)
  8. `video-doorbells-with-no-monthly-fee-what-to-look-for/doorbell-storage-architecture.svg`: **신규 제작** (무구독 비디오 도어벨 4대 저장 아키텍처 비교 도식 신설)
- **제거·교체한 저밀도 단순 목록형 SVG(7개)**:
  - `managed-charging-load-budget.svg`, `backup-system-constraints.svg`, `data-to-action.svg`, `leak-protection-layers.svg`, `wifi-troubleshooting-order.svg`, `garage-dependency-stack.svg`, `post-trial-feature-layers.svg`는 본문 불릿 목록을 단순 박스로 반복하거나 수치 없는 개념선만 그린 저밀도 도식이었으므로 제거하고 아래의 **검증된 실제 장비 실사 사진**으로 교체했다.

### 4.3 추가한 상업적 재사용 가능 실제 장비·설비 사진 8개 출처, 라이선스 및 제품 문맥 명세

위키미디어 공용(Wikimedia Commons) 공식 API(`query&prop=imageinfo`)를 통해 8개 파일의 실제 존재, 원본 페이지 URL, 저작자, 라이선스, 원본 대비 무수정·무크롭 동일성을 전수 검증했다. 단순 제품 예시와 실제 설치 사례를 명확히 구분하고, 구형 기종의 경우 최신 추천 기종으로 오인되지 않도록 본문 캡션을 보완했다.

| 게시글 Slug | 로컬 파일 경로 (`public/assets/images/posts/...`) | 원본 출처 (Wikimedia Commons) | 저작자 (Artist) | 라이선스 | SHA-256 해시 | 이미지 유형 및 문맥 (설치 실사 vs 제품 예시) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ev-charger-100-amp-panel-smart-load-shedding` | `electrical-panel-breakers-real.jpg` | [File:Eaton circuit breaker panel open.JPG](https://commons.wikimedia.org/wiki/File:Eaton_circuit_breaker_panel_open.JPG) | BrokenSphere | `CC BY-SA 3.0` | `C3A5D7B08CAA...` | **실제 설치 실사**: 주거용 Eaton 분전반 내부 실사. 외벽 도어 개방과 데드프런트 DIY 분리 금지 안전 경계 설명 목적. |
| `tesla-powerwall-3-vs-generators-whole-home-battery-backup` | `tesla-powerwall-3-install-real.jpg` | [File:Two Tesla power wall 3 devices installed inside in a residential home.jpg](https://commons.wikimedia.org/wiki/File:Two_Tesla_power_wall_3_devices_installed_inside_in_a_residential_home.jpg) | Rsparks3 | `CC0 1.0 (Public Domain)` | `15B58AB76A57...` | **실제 설치 실사**: 실제 주택 실내에 금속 전선관과 AC 차단 스위치와 함께 설치된 Tesla Powerwall 3 2대 실사. |
| `smart-energy-monitors-ct-clamps-electric-bill` | `clamp-meter-ct-real.jpg` | [File:Clampmeter Fluke 337.jpg](https://commons.wikimedia.org/wiki/File:Clampmeter_Fluke_337.jpg) | Harke | `Public Domain` | `BEE9B4AD4254...` | **단순 하드웨어 예시 (계측기)**: Fluke 337 휴대용 클램프미터. 유도성 분할코어 CT 감지 원리 설명용이며, 인패널 고정식 모니터(Emporia 등)와 구분됨을 캡션에 명시. |
| `smart-leak-detectors-vs-automatic-shutoff-valves` | `water-shutoff-valve-real.jpg` | [File:Ball valve in household.jpg](https://commons.wikimedia.org/wiki/File:Ball_valve_in_household.jpg) | NVgt156 | `CC BY-SA 4.0` | `AE63C62CE7E1...` | **실제 설치 실사**: 주거용 급수 매니폴드에 설치된 수동 1/4회전 레버 볼밸브 실사. 클램프온 액추에이터 적합성 및 인라인 밸브 배관 절단 경계 설명. |
| `home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh` | `wifi-mesh-router-real.jpg` | [File:Wi-Fi mesh system Deco M9 Plus.jpg](https://commons.wikimedia.org/wiki/File:Wi-Fi_mesh_system_Deco_M9_Plus.jpg) | Project Kei | `CC BY-SA 4.0` | `BC05C7686A90...` | **하드웨어 예시 (구형 기종 안내)**: TP-Link Deco M9 Plus 메시 위성 노드. Wi-Fi 5 노드이나 노드 배치 및 2.4 GHz 간섭 법칙은 최신 Wi-Fi 6/6E/7과 동일함을 캡션에 명시. |
| `smart-garage-door-openers-without-subscriptions` | `liftmaster-security2-opener-real.jpg` | [File:LiftMaster Security%2B_2.0_P3_Garage_Door_Motor_Opener.jpg](https://commons.wikimedia.org/wiki/File:LiftMaster_Security%2B_2.0_P3_Garage_Door_Motor_Opener.jpg) | Tony Webster | `CC BY 2.0` | `2A7F3EC31941...` | **실제 설치 실사**: 차고 천장에 설치된 LiftMaster P3 모터 실사. Security+ 2.0 노란색 버튼/직렬 버스 식별 가이드와 직접 부합. |
| `smart-home-subscription-trap-what-happens-when-you-cancel` | `smart-lock-keypad-real.jpg` | [File:Kwikset 270 CNT Electronic Deadbolt Lock.jpg](https://commons.wikimedia.org/wiki/File:Kwikset_270_CNT_Electronic_Deadbolt_Lock.jpg) | TaurusEmerald | `CC BY-SA 4.0` | `E83AF24987C9...` | **단순 하드웨어 예시**: Kwikset 270 키패드 데드볼트. 로컬 메모리 PIN 및 기계식 열쇠 실린더의 $0/월 기능 생존 원리 설명. |
| `video-doorbells-with-no-monthly-fee-what-to-look-for` | `ring-doorbell-real.jpg` | [File:Ring video doorbell.jpg](https://commons.wikimedia.org/wiki/File:Ring_video_doorbell.jpg) | Ring | `CC BY-SA 4.0` | `A9EA401DAC3E...` | **실제 설치 실사 (구형 기종 안내)**: 현관 외벽 도어 트림에 설치된 Ring 1세대 도어벨. 최신 추천이 아닌 외벽 장착 및 사후 영상 저장소 경계 설명 목적임을 캡션에 명시. |
---

## 5. 공개 글 22개 전수 감사표

| # | 공개 글 Slug | 판정 | 이번 조치 요약 |
| ---: | :--- | :--- | :--- |
| 1 | `choose-smart-home-platform-before-buying-devices` | 유지 | 플랫폼 선택 의도와 공식 출처 링크 확인 (무변경) |
| 2 | `do-you-really-need-a-smart-thermostat` | 유지 | 출처와 결론 경계 확인 (무변경) |
| 3 | `ev-charger-100-amp-panel-smart-load-shedding` | **P0 정밀 보완 완료** | 68자 제목 복원, NEC 625.41/EVEMS 비교표 3개, 실제 분전반 사진 + NEC 판단 흐름도 SVG, Section 30C 종료일 유지 |
| 4 | `home-security-cameras-indoor-vs-outdoor-vs-doorbell` | 유지 | 제품별 기능 경계와 공식 지원 문서 확인 (무변경) |
| 5 | `home-wifi-for-smart-devices-2-4ghz-vs-5ghz-mesh` | **P1 정밀 보완 완료** | 68자 제목 복원, 4대 무선 경로 비교표, 메시 라우터 실사 사진 + 단일 SSID/Thread 도식 SVG |
| 6 | `questions-before-buying-first-smart-home-device` | 유지 | 구매 전 판단 범위와 비보장 문구 확인 (무변경) |
| 7 | `simple-smart-home-upgrades-for-older-homes` | 유지 | 검색 의도와 안전 범위 확인 (무변경) |
| 8 | `smart-energy-monitors-ct-clamps-electric-bill` | **P0 정밀 보완 완료** | 66자 제목 복원, 4단계 모니터링 비교표, 클램프미터 실사 사진 + 안전 경계 도식 SVG, 데드프런트 경고·Sense 단종 안내 유지 |
| 9 | `smart-garage-door-openers-without-subscriptions` | **P1 정밀 보완 완료** | 70자 제목 복원, 3대 제어 아키텍처 비교표, LiftMaster Security+ 2.0 실사 사진 + UL 325 호환성 체인 SVG |
| 10 | `smart-home-devices-homeowners-often-regret-buying-first` | 유지 | 독립적인 regret/maintenance 검색 의도 확인 (무변경) |
| 11 | `smart-home-setup-checklist-for-non-technical-homeowners` | 유지 | 체크리스트 효용 확인 (무변경) |
| 12 | `smart-home-subscription-trap-what-happens-when-you-cancel` | **P1 정밀 보완 완료** | 69자 제목 복원, 무료 체험 종료 후 6계층 생존 비교표, 키패드 도어락 실사 사진 + 36개월 TCO 워크시트 SVG |
| 13 | `smart-home-terms-explained` | 유지 | 용어 사전 의도 확인 (무변경) |
| 14 | `smart-leak-detectors-vs-automatic-shutoff-valves` | **P1 정밀 보완 완료** | 68자 제목 복원, EPA 3계층 누수 방어 비교표, 볼밸브 배관 실사 사진 + 스프링클러/관수 경계 배관도 SVG |
| 15 | `smart-lighting-hallways-stairs-nighttime-routines` | 유지 | 실용 루틴 검색 의도 확인 (무변경) |
| 16 | `smart-locks-convenience-security-common-tradeoffs` | 유지 | 호환성·보안 trade-off와 출처 확인 (무변경) |
| 17 | `smart-plugs-vs-smart-power-strips-what-homeowners-should-know` | 유지 | UL/CPSC 안전 경계 확인 (무변경) |
| 18 | `smart-sensors-explained-motion-contact-leak-temperature` | 유지 | NIST/EPA 공식 문서 확인 (무변경) |
| 19 | `smart-thermostat-compatibility-what-to-check-before-you-buy` | 유지 | Google/ecobee/Resideo 호환성 링크 확인 (무변경) |
| 20 | `tesla-powerwall-3-vs-generators-whole-home-battery-backup` | **P0 정밀 보완 완료** | 69자 제목 복원, Powerwall 3 vs. Generac 26 kW 사양·런타임 표, Powerwall 3 실사 사진 + 런타임 워크시트 SVG, Section 25D 종료·발전기 충전 불가 유지 |
| 21 | `video-doorbells-with-no-monthly-fee-what-to-look-for` | **P2 정밀 보완 완료** | 67자 제목 복원, Blink/eufy 링크 수정 유지, Ring 도어벨 설치 실사 사진 + 무구독 4대 저장 아키텍처 도식 SVG 신설 |
| 22 | `what-is-a-smart-home` | 유지 | 입문 검색 의도 확인 (무변경) |

---

## 6. 기술·품질 검증 결과 (Step F)

| 검사 항목 | 실행 명령 | 결과 |
| :--- | :--- | :--- |
| TypeScript / Astro 검사 | `pnpm run astro check` | **PASS** (0 errors, 0 warnings, 0 hints) |
| 프로덕션 빌드 및 Pagefind | `pnpm run build` | **PASS** (92 pages built, Pagefind 22 pages indexed) |
| 편집 품질 감사 | `node scripts/editorial-quality-audit.mjs --site smart-suburbanite` | **PASS** (22 articles, 0 critical errors; 수정 8편 0 warnings) |
| 검색·색인 준비 감사 | `node scripts/search-readiness-audit.mjs --site smart-suburbanite` | **PASS** (32 passed, 0 failed) |
| 공백·패치 무결성 검사 | `git diff --check` | **PASS** (출력 0건, 공백·충돌 마커 없음) |
| 데스크톱·모바일 렌더링 및 이미지 경로 | 빌드 산출물(`dist/`) 8편 전수 검증 | **PASS** (8편 모두 hero 표지 1회 + 본문 실사 사진 1개 + 판단 도식 SVG 1개 HTTP/파일 정상 매핑, 표지 중복 0건) |

---

## 7. 남은 수동 절차 (배포 전·후 게이트)

1. 소유자가 수정된 8편의 영문 제목·본문·비교표 및 16개 본문 시각자료(실사 사진 8개 + 도식 SVG 8개)를 최종 검토하고 TSS 서브모듈 커밋 여부를 승인한다.
2. 원격 배포 승인 후 live URL 8개의 데스크톱·모바일 화면, 이미지 응답(HTTP 200), Search Console URL Inspection을 확인한다.
3. Google 크롤링 반영 후 소유자가 직접 AdSense 재검토 요청 시점을 결정한다.
