// All site content lives here. Edit this file to update text, add photos, or reorder projects.
//
// Photos: drop files into images/<project-slug>/ and set `cover` and `gallery` below, e.g.
//   cover: "images/compressed-air-car/cover.jpg",
//   gallery: [{ src: "images/compressed-air-car/turbine.jpg", caption: "3D-printed crossflow turbine" }],
// Until a cover is set, the project card shows a placeholder with its headline number.

const PROFILE = {
  name: "Ryan Lee",
  headline: "Mechanical engineer focused on drivetrains, robotics and hands-on hardware",
  intro: [
    "Mechanical Engineering student at Imperial College London, working on hardware teams in planetary robotics and Formula Student.",
    "U.S. citizen based in London."
  ],
  email: "ryan.lee122@imperial.ac.uk",
  linkedin: "https://www.linkedin.com/in/rydhlee",
  location: "London, UK",
  citizenship: "U.S. citizen",
  languages: ["English (native)", "Korean (native)", "Chinese (intermediate)"]
};

const EDUCATION = [
  {
    school: "Imperial College London",
    degree: "Mechanical Engineering",
    dates: "", // e.g. "Expected June 2029"
    coursework: ["Machine Dynamics & Vibrations", "Mechatronics", "Fluid Mechanics", "Thermodynamics"]
  }
];

const EXPERIENCE = [
  {
    org: "Republic of Korea Army",
    role: "Squad Leader, Artillery Survey Section",
    dates: "Oct 2024 – Apr 2026",
    bullets: [
      "Led a six-person survey section, using automated and manual survey equipment to compute firing data and prepare data sheets.",
      "Reconnoitered survey areas, then selected and marked survey control points and observation posts.",
      "Computed orienting angles, coordinates and elevations for artillery positions.",
      "Operated and maintained electronic meteorological equipment."
    ]
  },
  {
    org: "Qraft Technologies",
    role: "Summer Research Intern",
    dates: "Jul 2024 – Aug 2024",
    bullets: [
      "Calculated indices and model portfolios and rebalanced them systematically as markets moved, for domestic and international clients.",
      "Investigated signals and asset-allocation and weighting algorithms for quantitative products (EMPs, QIS and ETFs).",
      "Backtested strategies on historical data to validate performance and risk; verified output-data integrity and troubleshot the rebalancing process.",
      "Wrote methodology documents and performance analysis reports for external clients."
    ]
  }
];

const LEADERSHIP = [
  { org: "UKSEDS Olympus Rover Trials (ICSS × IPRL)", role: "Mobility Lead", dates: "2026 – Present", slug: "olympus-rover" },
  { org: "Imperial Planetary Robotics Lab", role: "Rover Drivetrain Team", dates: "2026 – Present", slug: "rover-drivetrain" },
  { org: "Imperial Formula Racing", role: "Manufacturing Team", dates: "2026 – Present", slug: "ifr-manufacturing" }
];

const SKILLS = [
  { group: "CAD & drawings", items: ["SolidWorks (parts, assemblies, drawings)", "BS 8888 engineering drawings", "Tolerancing & fits (e.g. h6 shafts)"] },
  { group: "Analysis", items: ["Compressible flow & nozzle design", "Shaft, gear & bearing sizing (L10 life)", "Beam theory, fatigue & fracture", "Flywheel & drivetrain sizing", "Numerical methods (FTCS, Crank–Nicolson)"] },
  { group: "Manufacturing", items: ["Manual lathe & mill", "CNC turning", "Laser cutting", "3D printing (FDM, ABS/PLA/PETG)", "Inspection & measurement reports"] },
  { group: "Software", items: ["Python (NumPy, Matplotlib)"] },
  { group: "Process", items: ["Product design specifications", "Weighted decision matrices", "Design reviews & interface documents", "Gantt planning", "Supplier selection (SKF, RS, Optibelt, Leroy-Somer)"] }
];

const PROJECTS = [
  {
    slug: "compressed-air-car",
    title: "Compressed-Air-Powered Car",
    role: "Design, analysis & manufacture",
    cover: "images/compressed-air-car/cad-assembly.png",
    coverFit: "contain",
    gallery: [],
    galleries: [
      { title: "Built & tested", items: [
        { src: "images/compressed-air-car/build-assembled.jpg", caption: "Finished car: 3D-printed transmission housing with the turned aluminum nozzle" },
        { src: "images/compressed-air-car/build-shafts.jpg", caption: "Machined transmission and turbine shafts alongside their drawings" },
        { src: "images/compressed-air-car/build-chassis.jpg", caption: "Laser-cut acrylic chassis, front wheels, nozzle and transmission housing during assembly", wide: true }
      ]},
      { title: "Concept generation", columns: 3, items: [
        { src: "images/compressed-air-car/concept-jet.png", caption: "Concept: direct jet propulsion" },
        { src: "images/compressed-air-car/concept-piston.png", caption: "Concept: piston engine with a spring-loaded ball inlet valve" },
        { src: "images/compressed-air-car/concept-valve-gear.png", caption: "Concept: valve-gear pneumatic piston driving the wheel through a crank" },
        { src: "images/compressed-air-car/concept-turbine.jpg", caption: "Selected concept: turbine driving the wheels through a gearbox" },
        { src: "images/compressed-air-car/concept-chassis-1.png", caption: "Early chassis layout" },
        { src: "images/compressed-air-car/concept-chassis-2.png", caption: "Alternative chassis layout" }
      ]},
      { title: "Design & analysis", items: [
        { src: "images/compressed-air-car/nozzle-section.png", caption: "Converging-diverging nozzle; A* marks the throat area", wide: true },
        { src: "images/compressed-air-car/velocity-triangles.png", caption: "Inlet and outlet velocity triangles on the turbine blade" },
        { src: "images/compressed-air-car/axle-torque.png", caption: "Axle torque: 1.37 N·m from the gearbox, 0.685 N·m to each wheel" },
        { src: "images/compressed-air-car/chassis-loading.png", caption: "Chassis free-body diagram" },
        { src: "images/compressed-air-car/bearing-arrangement.png", caption: "Bearing location with shoulders and internal/external circlips", wide: true }
      ]},
      { title: "Detail design & manufacture", items: [
        { src: "images/compressed-air-car/turbine-exploded.png", caption: "Turbine sub-assembly: 3D-printed fan, housing and cover" },
        { src: "images/compressed-air-car/bearing-housing.png", caption: "Bearing housing with shoulder and internal circlip groove" },
        { src: "images/compressed-air-car/wheel-exploded.png", caption: "Rear wheel fixing: flange, M3 bolts and spring pin" },
        { src: "images/compressed-air-car/front-wheel-bracket.png", caption: "Front wheel mounted on an L-bracket" },
        { src: "images/compressed-air-car/lathe-deflection.png", caption: "Machining plan: limiting shaft deflection between chuck and tailstock", wide: true }
      ]},
      { title: "Engineering drawings", items: [
        { src: "images/compressed-air-car/drawing-full-assembly.png", caption: "Full assembly (top cover removed)", wide: true },
        { src: "images/compressed-air-car/drawing-section.png", caption: "Section through the rear axle with bearing details", wide: true },
        { src: "images/compressed-air-car/drawing-turbine.png", caption: "Turbine sub-assembly", wide: true }
      ]}
    ],
    documents: [
      { label: "Full assembly (4 sheets)", href: "images/compressed-air-car/drawing-full-assembly.pdf" },
      { label: "Turbine sub-assembly", href: "images/compressed-air-car/drawing-turbine-subassembly.pdf" },
      { label: "Turbine housing", href: "images/compressed-air-car/drawing-turbine-housing.pdf" },
      { label: "Turbine bearing seat", href: "images/compressed-air-car/drawing-turbine-bearing-seat.pdf" },
      { label: "Bearing housing", href: "images/compressed-air-car/drawing-bearing-housing.pdf" },
      { label: "Front wheel connection", href: "images/compressed-air-car/drawing-front-wheel.pdf" },
      { label: "L-bracket", href: "images/compressed-air-car/drawing-l-bracket.pdf" },
      { label: "Shelf", href: "images/compressed-air-car/drawing-shelf.pdf" }
    ],
    placeholder: { value: "~30 m", label: "on one 2 L tank at 5.5 bar" },
    overview: "Our five-person team designed, built and assembled a small car powered only by a 2 L air tank at 5.5 bar. It had to cover a 25 m straight track while fitting inside a 400 mm × 500 mm envelope. A supersonic nozzle drives a 3D-printed crossflow turbine, which turns the rear axle through a two-stage gear train. The car ran about 30 m at 2.1 m/s, beating both targets.",
    stats: [
      { value: "Mach 1.77", label: "Air-jet speed (~505 m/s) from a converging-diverging nozzle" },
      { value: "9.3 W", label: "Turbine output: 0.394 N·m at ~643 rpm (20% efficiency assumed)" },
      { value: "4.8 : 1", label: "Two-stage gear reduction, 1.37 N·m at the axle" },
      { value: "30 m · 2.1 m/s", label: "Measured run vs. targets of 25 m and 2 m/s" }
    ],
    sections: [
      { title: "Concept selection", items: [
        "Compared four prime movers (direct jet propulsion, piston engine, valve-gear pneumatic pistons and a turbine) in a weighted decision matrix.",
        "The crossflow turbine won with 68 points against 61 for direct propulsion; a gear drive was chosen over direct and belt drives."
      ]},
      { title: "Embodiment design", items: [
        "Converging-diverging nozzle feeding a 3D-printed crossflow turbine.",
        "Two-stage gear train driving the rear axle.",
        "Laser-cut acrylic chassis with side panels and a removable 3D-printed cover."
      ]},
      { title: "Analysis", items: [
        "Jet velocity and nozzle geometry from isentropic flow and the Mach–area relation: outlet-to-throat area ratio of 1.41, choked mass flow of 0.0653 kg/s.",
        "Turbine torque from control-volume momentum analysis, then gear ratio, shaft bending and torsion, spring-pin sizing (ISO 13337) and L10 bearing life.",
        "Axle bending stress of 2.25 MPa and 0.069° of twist, both negligible."
      ]},
      { title: "Manufacture & assembly", items: [
        "Manual turning and milling of the steel shafts and aluminum housings and flanges; CNC turning of the aluminum nozzle.",
        "Laser cutting of the acrylic panels and 3D printing of the ABS turbine, housing and cover.",
        "Sourced bearings and gears from RS Components, inspected with digital calipers, and wrote measurement reports for two critical parts."
      ]}
    ],
    tools: ["SolidWorks", "BS 8888 drawings", "Total Design method", "Compressible flow", "Lathe & mill", "CNC turning", "Laser cutting", "3D printing"]
  },
  {
    slug: "pocket-coin-flipper",
    title: "Pocket Coin Flipper",
    role: "Design & analysis",
    cover: "images/pocket-coin-flipper/cad-assembly.jpg",
    coverFit: "contain",
    gallery: [],
    galleries: [
      { title: "Concept generation", columns: 3, items: [
        { src: "images/pocket-coin-flipper/concept-rotating-beam.jpg", caption: "Concept: rotating beam, side view" },
        { src: "images/pocket-coin-flipper/concept-rotating-beam-top.jpg", caption: "Rotating beam: top view and operating sequence" },
        { src: "images/pocket-coin-flipper/concept-crankshaft.jpg", caption: "Concept: crankshaft slider" },
        { src: "images/pocket-coin-flipper/concept-crankshaft-casing.jpg", caption: "Crankshaft slider packaged in the casing" },
        { src: "images/pocket-coin-flipper/concept-enclosed-bar.jpg", caption: "Concept: enclosed rotating bar, with pros and cons" },
        { src: "images/pocket-coin-flipper/concept-selected.jpg", caption: "Selected concept: rotating hammer with disc, transmission and two switches" }
      ]},
      { title: "Mechanism details", columns: 3, items: [
        { src: "images/pocket-coin-flipper/switch-off.jpg", caption: "Auto-stop: the rotating bar trips the second switch" },
        { src: "images/pocket-coin-flipper/hammer-sequence.jpg", caption: "Hammer positions through one flip" },
        { src: "images/pocket-coin-flipper/grip-grooves.jpg", caption: "Casing grip: finger grooves and switch placement options" }
      ]},
      { title: "CAD model", items: [
        { src: "images/pocket-coin-flipper/cad-casing.png", caption: "Casing interior" },
        { src: "images/pocket-coin-flipper/cad-side-cover.png", caption: "Casing side cover" }
      ]},
      { title: "Design & analysis", items: [
        { src: "images/pocket-coin-flipper/shaft-subassembly.jpg", caption: "Main-shaft sub-assembly: 3:1 bevel gears, disc and deep-groove bearings located by circlips", wide: true },
        { src: "images/pocket-coin-flipper/stepped-shaft.jpg", caption: "Stepped shaft dimensions (mm) with keyways, fillets and circlip grooves", wide: true },
        { src: "images/pocket-coin-flipper/bearing-constraints.png", caption: "Bearing-constraint check: left bearing fully located, right outer ring floating", wide: true },
        { src: "images/pocket-coin-flipper/bar-fbd.png", caption: "Hammer bar free-body diagram with a 1.2 N tip load" },
        { src: "images/pocket-coin-flipper/bar-bending-moment.png", caption: "Bending moment along the 30 mm bar: 0.036 N·m at the root" }
      ]},
      { title: "Drawings", items: [
        { src: "images/pocket-coin-flipper/drawing-bar.png", caption: "Hammer bar part drawing (Al 6061-T6)", wide: true }
      ]}
    ],
    placeholder: { value: "150×", label: "bending-stress safety margin" },
    overview: "A handheld, battery-powered device that flips a coin: a motor-driven hammer taps the coin from below, then a two-switch mechanism stops the motor and resets the hammer automatically. Our team of four took it from specification through concepts, drivetrain design and detailed structural checks.",
    stats: [
      { value: "80 × 100 × 50", label: "Casing size in mm, inside the 10 × 10 × 5 cm pocket limit" },
      { value: "> 10⁸ cycles", label: "Fatigue life of the hammer bar vs. a 50,000-flip specification" },
      { value: "1.73 m/s", label: "Coin launch speed, well under the 5 m/s safety limit" },
      { value: "1.86 h", label: "Motor run time from a 7.4 V, 2.6 Ah Li-ion pack" }
    ],
    sections: [
      { title: "Specification & concepts", items: [
        "Wrote a PDS: ≤ 300 g, ≤ £30 unit cost, ≥ 50,000 flips, 18–30 mm coins, launch below 5 m/s and 50 cm.",
        "Compared three concepts (rotating beam, crankshaft slider, enclosed rotating bar) and chose a rotating hammer that strikes the coin from below."
      ]},
      { title: "Mechanism & drivetrain", items: [
        "Two-switch auto-stop: after the flip, the hammer hits a spring-loaded second switch that cuts the motor and resets the hammer.",
        "Selected a Mabuchi RC-280SA brushed DC motor (6.78 W at 5,400 rpm at peak power) and a 2S 18650 Li-ion pack.",
        "Switched from spur to 3:1 bevel gears so the motor fits within the casing width, giving ~1,800 rpm and ~31 mNm at the hammer."
      ]},
      { title: "Detail design & analysis", items: [
        "~50 mm stepped shaft on SKF 628 deep-groove bearings with circlips and keyed components.",
        "Materials: Al 6061-T6 bar, steel ball hammerhead, carbon-fiber disc, SEBS casing with rubber grips, PLA button.",
        "Checked the bar for tension, bending, fatigue and fracture: 1.70 MPa vs. ~250 MPa allowable; required toughness 0.37 vs. ~10 MPa·m^0.5.",
        "Produced a part drawing of the bar, a main-shaft subassembly drawing and a full casing assembly."
      ]}
    ],
    tools: ["SolidWorks", "Python / Matplotlib", "Motor curves", "Fatigue (S-N)", "Ashby charts", "Gantt planning"]
  },
  {
    slug: "flywheel-press-drivetrain",
    title: "Drivetrain Design for a Mechanical Flywheel Press",
    role: "Sole designer",
    cover: "images/flywheel-press-drivetrain/cover.png",
    gallery: [
      { src: "images/flywheel-press-drivetrain/top-view.png", caption: "Plan view: motor, three spur-gear stages, then the V-belt drive and flywheel", wide: true },
      { src: "images/flywheel-press-drivetrain/side-view.png", caption: "Side elevation: the drivetrain sits on a welded platform bolted to the existing press frame", wide: true },
      { src: "images/flywheel-press-drivetrain/stage1-gears.png", caption: "First reduction stage beside the 15 kW motor, on SKF UCP pillow blocks" },
      { src: "images/flywheel-press-drivetrain/stage2-gears.png", caption: "Intermediate spur-gear stage" },
      { src: "images/flywheel-press-drivetrain/belt-stage.png", caption: "Final gear stage feeding the multi-groove SPC V-belt pulley" },
      { src: "images/flywheel-press-drivetrain/crankshaft.png", caption: "Press crankshaft" },
      { src: "images/flywheel-press-drivetrain/crank-section.png", caption: "Section through the press head showing the crankshaft main bearings", wide: true },
      { src: "images/flywheel-press-drivetrain/drawing-assembly.png", caption: "General assembly drawing", wide: true },
      { src: "images/flywheel-press-drivetrain/drawing-shaft.png", caption: "Shaft detail drawing: k6/m6 fits, runout tolerances and surface finish", wide: true }
    ],
    documents: [
      { label: "General assembly", href: "images/flywheel-press-drivetrain/drawing-assembly.pdf" },
      { label: "Stage 1 & 2 assembly", href: "images/flywheel-press-drivetrain/drawing-stage-1-2.pdf" },
      { label: "Bill of materials", href: "images/flywheel-press-drivetrain/bill-of-materials.pdf" },
      { label: "Shaft detail", href: "images/flywheel-press-drivetrain/drawing-shaft.pdf" }
    ],
    placeholder: { value: "325 t", label: "press design force" },
    overview: "An individual design assignment set as a consultancy brief: design the drivetrain for a mechanical flywheel press on a client's chain-link production line. I worked from the client brief and interface data from the feeder, tooling and removal teams, through to a full SolidWorks assembly with a manufacturing plan for every part.",
    stats: [
      { value: "325 t", label: "Design force (3,250 kN) and 9.91 kJ of cutting energy per stroke" },
      { value: "~215 / min", label: "Links produced: 5 per stroke at ~43 strokes/min (~12,900 per hour)" },
      { value: "15 kW", label: "Motor selected for an 11.5 kW requirement, with a 44% radial-load margin" },
      { value: "257 kg", label: "Ø1 m arm-type flywheel at 265 rpm, half the 500 kg mass limit" }
    ],
    sections: [
      { title: "What I designed", items: [
        "Wrote the product design specification and laid out the cutting pattern for 24B outer links: 5 links per stroke inside the 180 × 95 mm cutting envelope.",
        "Estimated press force, cutting energy and power, then selected a Leroy-Somer LS160MP AC induction motor and checked its radial load (151 daN against 270 daN permissible).",
        "Sized an arm-type flywheel for energy storage within the speed-fluctuation and mass limits.",
        "Designed a four-stage reduction: three spur-gear stages and a final multi-groove V-belt stage whose slip protects the motor from punching shocks.",
        "Designed four stepped shafts with keys, shoulders, fillets and chamfers, including the crankshaft and its main bearing arrangement.",
        "Designed a welded support platform that bolts to the existing press chassis without removing any chassis material."
      ]},
      { title: "Design for manufacture", items: [
        "Planned turning, milling, drilling and welding for each part.",
        "Standardized fasteners to just two bolt types (M16 × 45 and M16 × 90) and one key size (14 × 9 × 95 mm) across all shafts."
      ]},
      { title: "Component selection", items: [
        "Leroy-Somer (motor), HPC (spur gears), Optibelt (SPC V-belt pulleys and taper bushes), SKF (UCP pillow blocks, deep-groove and cylindrical roller bearings) and metals4u (structural sections)."
      ]}
    ],
    tools: ["SolidWorks", "Gear & shaft design", "Flywheel sizing", "Motor selection", "Bearing selection", "DFM"]
  },
  {
    slug: "transient-heat-conduction",
    title: "Numerical Modeling of Transient Heat Conduction",
    role: "Solver & analysis",
    cover: "images/transient-heat-conduction/profiles.png",
    coverFit: "contain", // plot on white: show whole rather than crop
    gallery: [
      { src: "images/transient-heat-conduction/animation.gif", caption: "Animated temperature distribution over the 20-minute run", wide: true },
      { src: "images/transient-heat-conduction/profiles.png", caption: "Temperature profiles every 2 minutes" },
      { src: "images/transient-heat-conduction/temp-vs-time.png", caption: "Temperature over time at points along the wire" },
      { src: "images/transient-heat-conduction/surface-3d.png", caption: "T(x, t) surface over the full 20 minutes" },
      { src: "images/transient-heat-conduction/contour.png", caption: "Isotherms in distance–time: the heat front slows as it spreads" }
    ],
    galleries: [
      { title: "Mesh & stability studies", columns: 3, items: [
        { src: "images/transient-heat-conduction/mesh-dx-0.3.png", caption: "Mesh study: dx = 0.3 m" },
        { src: "images/transient-heat-conduction/mesh-dx-0.1.png", caption: "Mesh study: dx = 0.1 m" },
        { src: "images/transient-heat-conduction/mesh-dx-0.01.png", caption: "Mesh study: dx = 0.01 m, converged" },
        { src: "images/transient-heat-conduction/ftcs-r0.5.png", caption: "FTCS at r = 0.5: stable" },
        { src: "images/transient-heat-conduction/ftcs-r0.502.png", caption: "FTCS at r = 0.502: diverges to ~10²⁸ °C" },
        { src: "images/transient-heat-conduction/cn-r0.502.png", caption: "Crank–Nicolson at r = 0.502: stays stable" }
      ]}
    ],
    code: [
      { label: "explicit_method.py (FTCS)", src: "images/transient-heat-conduction/explicit_method.py" },
      { label: "implicit_method.py (Crank–Nicolson)", src: "images/transient-heat-conduction/implicit_method.py" }
    ],
    placeholder: { value: "r = 0.5", label: "FTCS stability limit, confirmed" },
    overview: "We modeled a 1 m copper wire at 20 °C with one end suddenly held at 100 °C, solving the 1D heat equation ∂T/∂t = α ∂²T/∂x² (α = 1.17 × 10⁻⁴ m²/s) over 20 minutes. We wrote two Python solvers, explicit FTCS and implicit Crank–Nicolson, and compared their accuracy, stability and mesh convergence.",
    stats: [
      { value: "10²⁸ °C", label: "FTCS blow-up at r = 0.502, just past its stability limit" },
      { value: "Stable", label: "Crank–Nicolson at both r values: unconditionally stable" },
      { value: "30×", label: "Grid refinement (dx = 0.3 → 0.01 m) to demonstrate convergence" }
    ],
    sections: [
      { title: "Method", items: [
        "Explicit Forward-Time Central-Space (FTCS) scheme.",
        "Implicit Crank–Nicolson scheme, solved as a tridiagonal linear system at each time step.",
        "Backward Euler considered and rejected as only first-order accurate in time.",
        "Grid study at dx = 0.3, 0.1 and 0.01 m, and a stability study around the FTCS limit."
      ]},
      { title: "Findings", items: [
        "At fine meshes both methods agreed closely and converged smoothly.",
        "After 20 minutes the wire was still transient, heading toward the linear steady-state profile, with points near the hot end heating faster.",
        "Crank–Nicolson is the better choice: second-order in time and space and stable at large time steps. FTCS is simpler but needs small steps, so it costs more computation."
      ]},
      { title: "Outputs", items: [
        "Temperature profiles at set times, temperature–time curves at fixed points, an animated temperature distribution and a 3D surface plot of T(x, t)."
      ]}
    ],
    tools: ["Python", "NumPy", "Matplotlib", "Finite differences", "Stability analysis"]
  },
  {
    slug: "fs-gearbox-casing",
    title: "Formula Student Gearbox Casing",
    tag: "Ongoing",
    role: "Casing team (materials & structures)",
    cover: "images/fs-gearbox-casing/prototype-photo.jpg",
    gallery: [],
    galleries: [
      { title: "Packaging studies", items: [
        { src: "images/fs-gearbox-casing/layout-v1.jpg", caption: "First layout: Ø47.5, Ø62.5 and Ø127.5 gears placed on the bike's side view" },
        { src: "images/fs-gearbox-casing/layout-v2.jpg", caption: "Revised layout: Ø57, Ø60 and Ø153 gears" },
        { src: "images/fs-gearbox-casing/gear-profiles.jpg", caption: "Gear profiles on the engine outline (Ø52.5, Ø59.5, Ø133)" },
        { src: "images/fs-gearbox-casing/casing-profile.jpg", caption: "Casing profile around the gears, with clearance, wall and blend-radius dimensions" }
      ]},
      { title: "Early CAD", items: [
        { src: "images/fs-gearbox-casing/cover-surface-model.jpg", caption: "Early surface model of the casing cover with its bolt flange" },
        { src: "images/fs-gearbox-casing/casing-with-gears.png", caption: "Casing with the three gears in place" }
      ]},
      { title: "3D-printed prototype", items: [
        { src: "images/fs-gearbox-casing/casing-print-model.jpg", caption: "Prototype CAD: casing and gears with bolt bosses around the flange", wide: true },
        { src: "images/fs-gearbox-casing/prototype-test.mp4", caption: "Prototype test: a cordless drill drives the input shaft to spin the gear train inside the casing", wide: true }
      ]}
    ],
    placeholder: { value: "3", label: "subsystems packaged inside one casing" },
    overview: "Our four-person team is designing a lightweight, possibly composite, gearbox casing that mounts to the engine of Imperial's Formula Student car. The casing sits at the center of the gearbox system: it holds the countershaft, output shaft and their bearings, so every interface runs through us.",
    stats: [
      { value: "Reliability", label: "Top success measure: fatigue life, low part count, few assumptions" },
      { value: "£1,250", label: "Project budget, with parts made in the student workshop" },
      { value: "IFR rules", label: "Design must comply with Formula Student regulations" }
    ],
    sections: [
      { title: "Scope", items: [
        "Load simulation of the casing.",
        "Bearing seats, plus in-house bearing and seal selection.",
        "Lubrication: oil delivery and sealing.",
        "Mass reduction and tight packaging around the engine and drivetrain.",
        "Brake caliper mount."
      ]},
      { title: "Interfaces", items: [
        "Output shaft team: their shaft and gear sit inside our casing, so bearing seats, shaft position and packaging are agreed jointly.",
        "Countershaft team: their gear meshes with the output gear, so their geometry sets what the casing must hold.",
        "Composite driveshaft team: developing composite reinforcement for the casing and validating the hybrid metal–composite structure.",
        "Cross-team decisions are tracked in a shared interface document ranked by urgency, with deadlines in the project plan."
      ]},
      { title: "Testing & milestones", items: [
        "Lubrication check using a clear casing; efficiency test on the engine dyno; static torque reading.",
        "A transparent prototype casing spinning the gearbox is planned as the demo.",
        "Concept Design Review in the autumn term; Design Review & Manufacturing Readiness Gateway in the spring term."
      ]}
    ],
    tools: ["SolidWorks", "Load simulation", "Bearing & seal selection", "Composites", "Interface management"]
  },
  {
    slug: "olympus-rover",
    title: "Mars-Style Mini-Rover for the Olympus Rover Trials",
    tag: "Mobility Lead · Ongoing",
    role: "Mobility Lead",
    cover: null,
    gallery: [],
    placeholder: { value: "Jul 2027", label: "competition day" },
    overview: "A joint Imperial College Space Society and Imperial Planetary Robotics Lab team building a Mars-style mini-rover for the UKSEDS Olympus Rover Trials, which test mobility, autonomy and planetary exploration. As Mobility Lead I own the rover's locomotion subsystem.",
    stats: [
      { value: "Dec 2026", label: "Preliminary Design Review" },
      { value: "Mar 2027", label: "Critical Design Review" },
      { value: "Jul 2027", label: "Competition" }
    ],
    sections: [],
    tools: ["Team leadership", "Mobility systems", "Design reviews"]
  },
  {
    slug: "ifr-manufacturing",
    title: "Imperial Formula Racing: Manufacturing Team",
    tag: "Ongoing",
    role: "Manufacturing team member",
    cover: null,
    gallery: [],
    placeholder: { value: "4", label: "workshops, one race car" },
    overview: "The manufacturing team turns parts around quickly and accurately to toleranced drawings, helping every other subteam get parts through their queues ahead of the car's fire-up and shakedown milestones.",
    stats: [],
    sections: [
      { title: "Where we work", items: [
        "Student Teaching Workshop: lathes, mills, pillar drills, metal fabrication, SLS and SLA printing, waterjet cutting and CNC.",
        "Advanced Hackspace: all of the above, plus anodizing and engraving.",
        "Ideas Space: FDM 3D printing and workbenches.",
        "Pit garage: composites work, 3D printing and assembly."
      ]},
      { title: "How we work", items: [
        "A shared part tracker records each part's process (for example welding in the garage, lathe work in the workshop, outsourced or bought in).",
        "Work is scheduled against build milestones such as fire-up and shakedown."
      ]}
    ],
    tools: ["Manual machining", "CNC", "Waterjet", "SLS / SLA / FDM", "Toleranced drawings"]
  },
  {
    slug: "rover-drivetrain",
    title: "Rover Drivetrain for the European Rover Challenge",
    tag: "Ongoing",
    role: "Drive team member",
    cover: null,
    gallery: [],
    placeholder: { value: "30°", label: "worst-case slope for a 75 kg rover" },
    overview: "The Drive team designs and builds the wheels and drivetrain for Imperial Planetary Robotics Lab's rover, competing at the European Rover Challenge in Kraków in September 2027. Our current task is choosing the wheels, gearbox and motors.",
    stats: [
      { value: "75 kg", label: "Rover mass" },
      { value: "0.6–0.8 m/s", label: "Target cruise speed (1 m/s max)" },
      { value: "20 : 1 · 100 W", label: "Starting assumptions for gear ratio and motor power" }
    ],
    sections: [
      { title: "Requirements", items: [
        "Performs well on rocky terrain, up to a 30° worst-case slope.",
        "Modular, so a damaged part can be swapped out in the field.",
        "Self-contained electronics, with sensors for odometry and power monitoring.",
        "Aluminum wheels for now, with PETG as an option."
      ]},
      { title: "Cross-team work", items: [
        "The research branch plans a 2D grid sensor inside the wheels, using machine learning to classify terrain (based on NASA's Barefoot Rover), so the wheel design is being developed jointly."
      ]}
    ],
    tools: ["Motor & gearbox sizing", "Wheel design", "SolidWorks", "Modular design"]
  }
];
