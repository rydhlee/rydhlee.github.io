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
    "Mechanical Engineering student at Imperial College London, leading subsystems on planetary rover and Formula Student teams.",
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
    dates: "",
    coursework: ["Design, Make & Test Project", "Machine Dynamics & Vibrations", "Mechatronics", "Fluid Mechanics", "Thermodynamics", "Embedded C for Microcontrollers", "Professional Engineering Skills", "Machine Learning: Theory & Applications"]
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
  { org: "Formula Student Gearbox Casing (Design, Make & Test)", role: "Loads and Bearings Lead", dates: "Oct 2026 – Present", slug: "fs-gearbox-casing" },
  { org: "UKSEDS Olympus Rover Trials (ICSS × IPRL)", role: "Mobility Lead, Advanced Stream", dates: "Oct 2026 – Present", slug: "olympus-rover" },
  { org: "Imperial Formula Racing", role: "Manufacturing Engineer", dates: "Oct 2026 – Present", slug: "ifr-manufacturing" },
  { org: "Imperial Planetary Robotics Lab", role: "Drive Subsystem Engineer", dates: "Oct 2026 – Present", slug: "rover-drivetrain" }
];

const SKILLS = [
  { group: "CAD & drawings", items: ["SolidWorks (parts, assemblies, drawings)", "BS 8888 engineering drawings", "Tolerancing & fits (h6, f7/H8, ISO 2768-mK)"] },
  { group: "Analysis", items: ["Drivetrain & motor sizing (torque–speed modeling)", "Shaft, gear & bearing sizing (L10 life)", "Bolted & bonded joint sizing", "Beam theory, fatigue & fracture", "Compressible flow & nozzle design", "Numerical methods (FTCS, Crank–Nicolson)"] },
  { group: "Manufacturing", items: ["Manual lathe & mill (15 µm tolerance bands)", "CNC turning", "Laser cutting", "3D printing (FDM, ABS/PLA/PETG)", "Metrology: micrometers, pin gauges, dial indicator", "Inspection reports"] },
  { group: "Software", items: ["Python (NumPy, Matplotlib)", "Excel (parametric engineering calculators)"] },
  { group: "Process", items: ["Product design specifications", "Weighted decision matrices", "Design reviews & interface documents", "Gantt planning", "Supplier selection (SKF, RS, Optibelt, Leroy-Somer)"] }
];

const PROJECTS = [
  {
    slug: "fs-gearbox-casing",
    title: "Formula Student Gearbox Casing",
    dates: "Oct 2026 – Present",
    role: "Loads and Bearings Lead",
    cover: "images/fs-gearbox-casing/prototype-photo.jpg",
    gallery: [],
    galleries: [
      { title: "Idler layout study: bearing loads & lubrication", items: [
        { src: "images/fs-gearbox-casing/idler-fbd.jpg", caption: "Idler free-body diagram at the 453 N·m design load: below the meshes, the two mesh forces partly cancel, cutting the idler bearing load from 35.4 kN to 17.3 kN", wide: true },
        { src: "images/fs-gearbox-casing/cfd-setup.png", caption: "2D CFD setup: the same gears and 34.6 mL of oil, with the idler high (left) or low (right)", wide: true },
        { src: "images/fs-gearbox-casing/cfd-timelapse.webp", caption: "Oil volume fraction from 2 to 58 ms as the gears spin up, for both layouts", wide: true },
        { src: "images/fs-gearbox-casing/churning-loss.png", caption: "Churning loss: the low idler churns 3.6× more while the sump empties and 30% more once oil spreads over the walls", wide: true },
        { src: "images/fs-gearbox-casing/cfd-mesh-oil.png", caption: "The trade-off: with the idler low, oil reaches both gear meshes much sooner", wide: true },
        { src: "images/fs-gearbox-casing/cfd-mirror.png", caption: "Why the idler-low case needed its own run: mirroring the idler-high result reverses gravity and gear rotation", wide: true },
        { src: "images/fs-gearbox-casing/cfd-mesh.webp", caption: "Fluent mesh: 85,418 triangles with 0.3 mm cells at the teeth, rebuilt locally every time step as the teeth move", wide: true }
      ]},
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
      { title: "Casing concept on the engine", items: [
        { src: "images/fs-gearbox-casing/concept-organic-iso.jpg", caption: "Organic casing concept (yellow) fitted around the Yamaha YZ450F engine model" },
        { src: "images/fs-gearbox-casing/concept-organic-side.jpg", caption: "Side view of the concept on the engine" }
      ]},
      { title: "3D-printed prototype", items: [
        { src: "images/fs-gearbox-casing/casing-print-model.jpg", caption: "Prototype CAD: casing and gears with bolt bosses around the flange", wide: true },
        { src: "images/fs-gearbox-casing/prototype-test.mp4", caption: "Prototype test: a cordless drill drives the input shaft to spin the gear train inside the casing", wide: true }
      ]}
    ],
    placeholder: { value: "757 N·m", label: "reaction torque through the casing mounts" },
    overview: "A Design, Make & Test project: our 4-person subassembly team is one of four teams in a supergroup designing a final-drive gearbox for Imperial's 2028 Formula Student car, which runs a Yamaha YZ450F engine, on a £1,250 budget. The casing sits at the center of the system, holding the countershaft, output shaft and their bearings, so every interface runs through it. As Loads and Bearings Lead, I define the loads the casing must carry and check the bearings, joints and lubrication against them.",
    stats: [
      { value: "479 / 757 N·m", label: "Limit countershaft torque and reaction torque through the casing mounts" },
      { value: "17.3 vs 35.4 kN", label: "Idler bearing load with the idler below vs. above the meshes, roughly halved" },
      { value: "~58 µm", label: "Bearing-seat interference lost in a printed-aluminum casing at 110 °C" },
      { value: "49–58°", label: "Oil-surface angles under load cases up to 1.6 g braking" }
    ],
    sections: [
      { title: "My work: loads & bearings", items: [
        "Defined the casing design loads from the engine torque chain: a 479 N·m limit countershaft torque and a 757 N·m reaction torque through the casing mounts. These are the inputs for FEA and for fastener and bonded-joint sizing.",
        "Showed with a free-body analysis that placing the idler gear below the meshes roughly halves its bearing load (17.3 kN vs. 35.4 kN), which supported the team's choice of layout.",
        "Built a parametric Excel calculator for gear-mesh forces, bearing L10 life, the idler stud, bolted and bonded joints, and oil temperature against IFR safety factors. Results update automatically as the gear geometry is fixed.",
        "Quantified a ~58 µm loss of bearing-seat interference in a printed-aluminum casing at 110 °C, which made the case for steel bearing liners.",
        "Converted vehicle load cases (up to 1.6 g braking) into oil-surface angles of 49–58°, used to size the oil fill and define a tilt leak test."
      ]},
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
    tools: ["Free-body analysis", "Bearing L10 life", "Bolted & bonded joints", "Thermal interference fits", "Excel (parametric calculator)", "SolidWorks", "Interface management"]
  },
  {
    slug: "compressed-air-car",
    title: "Compressed-Air-Powered Car",
    dates: "Oct 2023 – Jun 2024",
    role: "Manufacturing & Assembly Lead",
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
        { src: "images/compressed-air-car/lathe-deflection.png", caption: "Machining plan: tailstock support stops the long shaft deflecting under the cutter", wide: true }
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
    overview: "Our five-person team designed, built and assembled a small car powered only by a 2 L air tank at 5.5 bar. It had to cover a 25 m straight track while fitting inside a 400 mm × 500 mm envelope. A supersonic nozzle drives a 3D-printed crossflow turbine, which turns the rear axle through a two-stage gear train. As Manufacturing & Assembly Lead, I planned how every part would be made and led the build. In race testing the car covered 30 m at an average of 2.1 m/s, matching our analytical predictions and beating both targets.",
    stats: [
      { value: "30 m · 2.1 m/s", label: "Race-test result vs. targets of 25 m and 2 m/s, matching our predictions" },
      { value: "Mach 1.77", label: "Air-jet speed (~505 m/s) from a converging-diverging nozzle" },
      { value: "h6", label: "Transition-fit tolerance on manually turned steel shafts" },
      { value: "4.8 : 1", label: "Two-stage gear reduction, 1.37 N·m at the axle" }
    ],
    sections: [
      { title: "Manufacture & assembly (my lead role)", items: [
        "Planned the process and material for every part, within the workshop's limits: manual turning and milling, CNC turning, laser cutting and 3D printing, in mild steel, 6082-T6 aluminum, acrylic and ABS.",
        "Manually turned the steel shafts to an h6 transition fit, using tailstock support to prevent deflection and machining in a single setup to keep them concentric.",
        "Machined the aluminum bearing housings and wheel flanges, locating the bolt-hole patterns with a dial indicator and the mill's PCD function.",
        "Wrote dimensional inspection reports for the critical parts, measured with digital calipers, confirming they were within tolerance.",
        "Fixed wheel-misalignment and side-panel deflection risks by adding dowel-pin location and slotted cover supports, and kept a 1 mm turbine running clearance to cut friction."
      ]},
      { title: "Design & analysis", items: [
        "Followed the Total Design process from the product design specification, through weighted concept selection, to a prototype delivered on schedule at each design gate.",
        "Compared four prime movers (direct jet, piston engine, valve-gear pneumatic pistons and a turbine) in a weighted decision matrix; the crossflow turbine won with 68 points against 61 for direct propulsion.",
        "Produced SolidWorks models and BS 8888 drawings: third-angle general assembly and part drawings with a bill of materials.",
        "Supported the analysis: isentropic nozzle flow and the Mach–area relation (area ratio 1.41, choked flow 0.0653 kg/s), turbine torque from control-volume analysis, shaft stress and twist, and L10 bearing life."
      ]}
    ],
    tools: ["SolidWorks", "BS 8888 drawings", "Total Design method", "Compressible flow", "Lathe & mill", "CNC turning", "Laser cutting", "3D printing"]
  },
  {
    slug: "pocket-coin-flipper",
    title: "Pocket Coin Flipper",
    dates: "Feb 2024",
    role: "Design Engineer (Chief Researcher)",
    cover: "images/pocket-coin-flipper/cad-assembly.jpg",
    coverFit: "contain",
    gallery: [],
    galleries: [
      { title: "Concept generation", columns: 3, items: [
        { src: "images/pocket-coin-flipper/concept-rotating-beam.jpg", caption: "Concept: rotating beam, side view" },
        { src: "images/pocket-coin-flipper/concept-rotating-beam-top.jpg", caption: "Rotating beam: top view and operating sequence" },
        { src: "images/pocket-coin-flipper/concept-crankshaft.jpg", caption: "Concept: crank-slider" },
        { src: "images/pocket-coin-flipper/concept-crankshaft-casing.jpg", caption: "Crank-slider packaged in the casing" },
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
    overview: "A battery-powered, pocket-sized coin flipper for sports umpires. Working as an external design consultancy for a client, our team of four took it from requirements to a full CAD assembly in one week. A motor-driven hammer strikes the coin from below, then a two-switch system stops the motor and resets the hammer automatically after each flip.",
    stats: [
      { value: "1 week", label: "From requirements to a full CAD assembly, presented to the client" },
      { value: "12.6 W · 1,040 rpm", label: "Brushed DC motor operating point, through a 3:1 bevel-gear reduction" },
      { value: "> 10⁸ cycles", label: "Fatigue life of the hammer bar vs. a 50,000-flip specification" },
      { value: "80 × 100 × 50", label: "Casing size in mm, inside the 10 × 10 × 5 cm pocket limit" }
    ],
    sections: [
      { title: "Specification & concepts", items: [
        "Wrote the product design specification covering customer, performance, life, cost and safety: casing under 10 × 10 × 5 cm, under 300 g, under £30 a unit, 50,000 flips, and coins of 18–30 mm.",
        "Developed and assessed three concepts (a rotating beam, a crank-slider and a fixed-strike hammer), and chose a rotating hammer with a self-resetting two-switch control system."
      ]},
      { title: "Mechanism & drivetrain", items: [
        "Sized the drivetrain from first principles, using energy balance and torque calculations to choose a 3:1 bevel-gear reduction and a brushed DC motor at about 12.6 W and 1,040 rpm.",
        "Reoriented the motor so the whole drivetrain fits within the casing size limit.",
        "Designed the shaft and bearing arrangement with circlips, shoulders and keys, testing layouts in CAD so the motor never interferes with the rotating hammer."
      ]},
      { title: "Detail design & analysis", items: [
        "Structural failure analysis of the aluminum hammer bar covering tension, bending, fatigue (S-N curve: more than 10⁸ cycles) and fracture toughness: safe stress margins and negligible deflection.",
        "Chose materials and processes for a 10,000-unit production run: a carbon-fiber composite disc (safety factor over 2), a 3D-printed PLA button and an SEBS casing with rubber grips.",
        "Produced part drawings and a full CAD assembly, and presented the design to tutors, competing teams and client engineers. Peer feedback led to planned improvements such as adjustable coin slots and a left-handed-friendly layout."
      ]}
    ],
    tools: ["SolidWorks", "Product design specification", "Energy & torque calculations", "Fatigue (S-N)", "Fracture toughness", "Design for production"]
  },
  {
    slug: "flywheel-press-drivetrain",
    title: "Drivetrain Design for a Mechanical Flywheel Press",
    dates: "Jan 2023 – Jun 2023",
    role: "Sole designer",
    cover: "images/flywheel-press-drivetrain/cover.png",
    gallery: [
      { src: "images/flywheel-press-drivetrain/top-view.png", caption: "Plan view: motor, three spur-gear stages, then the V-belt drive and flywheel", wide: true },
      { src: "images/flywheel-press-drivetrain/side-view.png", caption: "Side elevation: the drivetrain sits on a bolted support frame on an extended chassis platform", wide: true },
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
    overview: "An individual design project set as a consultancy brief, with me as the consultant engineer on a multi-team industrial project: design the complete drive transmission for a 325-tonne mechanical flywheel press on a chain-link production line, from motor selection to crankshaft. I worked from the client brief and interface data from the feeder, tooling and removal teams, through to a full SolidWorks assembly with a manufacturing plan for every part.",
    stats: [
      { value: "325 t", label: "Design force (3,250 kN) and 9.91 kJ of cutting energy per stroke" },
      { value: "2,935 → 44 rpm", label: "Four-stage reduction: three spur-gear stages and a 12-belt SPC V-belt drive" },
      { value: "15 kW", label: "Motor selected for an 11.5 kW requirement, with a 44% radial-load margin" },
      { value: "257 kg", label: "Ø1 m aluminum flywheel, about half the 500 kg mass limit" }
    ],
    sections: [
      { title: "What I designed", items: [
        "Worked out the press requirements from first principles: laid out 5 chain links per stroke to maximize output, then calculated a 3,250 kN press force, 9.91 kJ cutting energy and an 11.5 kW power requirement.",
        "Selected a 15 kW Leroy-Somer AC induction motor and checked it against bearing radial-load limits (151 daN service-life-adjusted load vs. 270 daN allowed).",
        "Developed a four-stage reduction from 2,935 rpm down to about 44 rpm: three spur-gear stages plus a 12-belt SPC V-belt drive whose slip gives the shock protection the brief required.",
        "Sized the gears (module 5, 45 mm face width) against the minimum face widths I calculated, and specified 214M15 / 045M10 steels.",
        "Designed a 257 kg aluminum flywheel (Ø1,000 mm) to store the cutting energy and keep speed fluctuation low.",
        "Detail-designed the shafts and crankshaft (shoulders, fillets, chamfers and keyed shaft–hub joints), the bearing housings, and a bolted support frame of rectangular hollow sections on an extended chassis platform.",
        "Built the full SolidWorks assembly with a compact footprint, clear of the feeder, tooling and removal subsystems and the operator zone."
      ]},
      { title: "Design for manufacture & handover", items: [
        "Planned machining for every part (turning, milling, drilling, tapping and welding) for a 15-unit batch.",
        "Limited fasteners to two M16 bolt sizes (M16 × 45 and M16 × 90) and one key size (14 × 9 × 95 mm) across all shafts to simplify production.",
        "Passed the key design data (thickness, cutting rate and mass flows) to the other subsystem teams, and presented the design in a technical briefing."
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
    dates: "Mar 2024",
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
    overview: "We modeled a 1 m copper wire at 20 °C with one end suddenly held at 100 °C, setting up the 1D heat equation ∂T/∂t = α ∂²T/∂x² (α = 1.17 × 10⁻⁴ m²/s), a parabolic PDE, with Dirichlet boundary conditions over 20 minutes. We derived the finite-difference discretizations and wrote two Python solvers, explicit FTCS and implicit Crank–Nicolson, and compared their accuracy, stability and mesh convergence.",
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
        "Crank–Nicolson is the better choice: second-order in time and space and stable at large time steps. FTCS is simpler but needs small steps, so it costs more computation.",
        "Limitations: the model ignores convective and radiative losses from the wire's surface."
      ]},
      { title: "Outputs", items: [
        "Temperature profiles at set times, temperature–time curves at fixed points, an animated temperature distribution and a 3D surface plot of T(x, t).",
        "A technical summary of under 1,000 words justifying each method choice over alternatives such as Backward Euler."
      ]}
    ],
    tools: ["Python", "NumPy", "Matplotlib", "Finite differences", "Stability analysis"]
  },
  {
    slug: "olympus-rover",
    title: "Mars-Style Mini-Rover for the Olympus Rover Trials",
    dates: "Oct 2026 – Present",
    role: "Mobility Lead, Advanced Stream",
    cover: null,
    gallery: [],
    placeholder: { value: "40 cm", label: "rocks to cross at the Airbus Mars Yard" },
    overview: "A 10-member joint Imperial College Space Society and Imperial Planetary Robotics Lab team building a remotely operated Mars-analogue rover for the UKSEDS Olympus Rover Trials (Advanced Stream), a national competition sponsored by Airbus Defence and Space and RAL Space. I lead the mobility subsystem (chassis, locomotion and drivetrain), working with a second engineer.",
    stats: [
      { value: "≤ 5 kg", label: "Total rover mass" },
      { value: "15°", label: "Slopes in very loose sand" },
      { value: "40 cm", label: "Rocks to climb over at the Airbus Mars Yard" },
      { value: "~1 m", label: "Drop test the rover must survive" }
    ],
    sections: [
      { title: "My responsibility", items: [
        "Getting a rover of 5 kg or less across very loose sand, 15° slopes and rocks up to 40 cm at the Airbus Mars Yard, then through a ~1 m drop test.",
        "Leading the chassis, locomotion and drivetrain design with a second engineer, and integrating it with the rest of the 10-person team's rover."
      ]},
      { title: "Milestones", items: [
        "Preliminary Design Review in December 2026, Critical Design Review in March 2027, and competition in July 2027."
      ]}
    ],
    tools: ["Team leadership", "Chassis & locomotion design", "Drivetrain design", "Design reviews"]
  },
  {
    slug: "ifr-manufacturing",
    title: "Imperial Formula Racing: Manufacturing Team",
    dates: "Oct 2026 – Present",
    role: "Manufacturing Engineer",
    cover: "images/ifr-manufacturing/top-hats.jpg",
    coverPosition: "center 72%", // portrait photo: keep the parts in the hand in view on the home card
    gallery: [],
    placeholder: { value: "15 µm", label: "tolerance band on lathe-turned upright parts" },
    overview: "I was selected as one of 85 members, from more than 300 applicants, for Imperial College London's Formula Student team, which is building the IFR03 combustion car for FSUK 2027. The manufacturing team turns parts around quickly and accurately to toleranced drawings, helping every other subteam get parts through their queues ahead of fire-up and shakedown.",
    stats: [
      { value: "85 of 300+", label: "Applicants selected for the team" },
      { value: "15 µm", label: "Spigot tolerance band (f7) on stainless-steel upright top hats" },
      { value: "18 µm", label: "Bore tolerance band (H8), checked with pin gauges" },
      { value: "Ra 3.2", label: "Surface finish to ISO 2768-mK general tolerances" }
    ],
    sections: [
      { title: "What I've made", items: [
        "Machined stainless-steel suspension upright top hats (M5 and M6) on a manual lathe to drawings with a 15 µm spigot (f7) and 18 µm bore (H8) tolerance band, verifying critical dimensions with micrometers and pin gauges.",
        "Manufactured precision turned components from engineering drawings to ISO 2768-mK general tolerances and a Ra 3.2 µm surface finish."
      ]},
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
    tools: ["Manual lathe", "Stainless steel", "Micrometers & pin gauges", "ISO 2768-mK", "Toleranced drawings"]
  },
  {
    slug: "rover-drivetrain",
    title: "Rover Drivetrain for the European Rover Challenge",
    dates: "Oct 2026 – Present",
    role: "Drive Subsystem Engineer",
    cover: null,
    gallery: [],
    placeholder: { value: "~17 N·m", label: "per wheel, sized from first principles" },
    overview: "I design the wheel and drivetrain modules for a 75 kg rover that Imperial Planetary Robotics Lab is building from scratch for the European Rover Challenge 2027 in Kraków. The team is targeting a top-10 finish, with a 30° climb, a 1 m/s top speed and a 3 kg drive mass per wheel.",
    stats: [
      { value: "~17 N·m", label: "Torque per wheel (~130 W), sized from first principles" },
      { value: "25% · 18%", label: "Errors I found in the team's figures for motor speed and power" },
      { value: "15+", label: "Off-the-shelf planetary gearboxes surveyed" },
      { value: "1.7 kg", label: "Gearbox mass budget; shortlisted 30:1 units rated 25–40 N·m under £100" }
    ],
    sections: [
      { title: "My work", items: [
        "Sized the drivetrain from first principles (gradient, rolling resistance, slip, acceleration and efficiency losses), arriving at ~17 N·m and ~130 W per wheel. Found errors in the team's figures that had under-stated motor speed by 25% and power by ~18%.",
        "Benchmarked BLDC and stepper motors against torque, speed and mass requirements using torque–speed modeling. Showed that no shortlisted motor met all three at rated torque, which redirected motor selection toward peak-torque duty and lighter units.",
        "Evaluated spur, planetary and cycloidal transmissions, then surveyed 15+ off-the-shelf planetary gearboxes against torque, mass and cost. Shortlisted 30:1 units rated at 25–40 N·m for under £100 each, against a 1.7 kg mass budget.",
        "Set up the subsystem's requirements, decision and action tracker. It resolved conflicting design values (wheel size, rover mass, motor power and gear ratio) across the team and linked every calculation to one set of parameters."
      ]},
      { title: "Requirements", items: [
        "75 kg rover; 30° climb; 1 m/s top speed; 3 kg drive mass per wheel.",
        "Modular, so a damaged part can be swapped out in the field.",
        "Self-contained electronics, with sensors for odometry and power monitoring."
      ]},
      { title: "Cross-team work", items: [
        "The research branch plans a 2D grid sensor inside the wheels, using machine learning to classify terrain (based on NASA's Barefoot Rover), so the wheel design is being developed jointly."
      ]}
    ],
    tools: ["First-principles drivetrain sizing", "Torque–speed modeling", "BLDC & stepper motors", "Planetary gearbox selection", "Requirements tracking"]
  }
];
