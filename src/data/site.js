// Business constants for LUMEN RENTALS
export const BRAND = {
  name: "Ultra Frame",
  suffix: "Outdoor Unit",
  tagline: "Cinematic Gear · Since 2011",
  phone: "+91 7904320282",
  phoneHref: "tel:+917904320282",
  whatsapp: "+91 79043 20282",
  whatsappHref: "https://wa.me/917904320282?text=Hi%20Ultra-Frame%20-%20I'd%20like%20to%20rent%20cinema%20gear",
  address: "1/215 Ganga Nagar 2nd Cross-Street Maduravoyal · Chennai 600095",
  hours: "24 / 7 · On-set support",
  email: "narayanannarayanan15644@gmail.com",
  emailHref: "mailto:narayanannarayanan15644@gmail.com",
};

// Top-level catalog categories — shown as cards on the homepage Catalog section.
// Clicking one routes to /catalog/:slug, which lists the ITEMS below matching that slug.
export const CATEGORIES = [
  {
    slug: "camera",
    tag: "Category / 01",
    title: "Camera Rigs",
    desc: "ARRI Alexa Mini LF, RED V-Raptor and Sony Venice paired with primes, zooms and gimbals for any narrative demand.",
    img: "https://raw.githubusercontent.com/Supersrimanth007/Ultra-Frame-Outdoor-unit/refs/heads/main/public/Images/camera.jpg"
  },
  {
    slug: "lights",
    tag: "Category / 02",
    title: "Cinema Lights",
    desc: "HMI 1.2k–18k, ARRI Skypanels, Aputure 600D, Astera tubes — modular fixtures with full grip & diffusion inventory.",
    img: "https://github.com/Supersrimanth007/Ultra-Frame-Outdoor-unit/blob/main/public/Images/Lights.jpg?raw=true"
  },
  {
    slug: "cranes",
    tag: "Category / 03",
    title: "Action Cranes",
    desc: "Jimmy Jib, Techno-crane 30ft and remote-head cranes for elevated, sweeping camera moves that define blockbuster geometry.",
    img: "https://github.com/Supersrimanth007/Ultra-Frame-Outdoor-unit/blob/main/public/Images/CraneL.jpg?raw=true"
  },
  {
    slug: "grip",
    tag: "Category / 04",
    title: "Grip & Rigging",
    desc: "Dollies, sliders, jibs, safety rigs, stands and truss — full grip trucks with experienced key-grip on call.",
    img: "https://github.com/Supersrimanth007/Ultra-Frame-Outdoor-unit/blob/main/public/Images/grips.png?raw=true"
  },
  {
    slug: "power",
    tag: "Category / 05",
    title: "Power Control",
    desc: "Silent diesel generators, distribution boards and battery backup units — reliable on-set power for lights, cameras and grip gear on any location shoot.",
    img: "https://github.com/Supersrimanth007/Ultra-Frame-Outdoor-unit/blob/main/public/Images/generate.jpg?raw=true"
  },

  {
    slug: "screens",
    tag: "Category / 06",
    title: "LED Screens & Walls",
    desc: "Modular LED panels for virtual production, in-camera VFX and live-event backdrops. 2.6mm–6mm pitch, calibrated on-site.",
    img: "https://raw.githubusercontent.com/Supersrimanth007/Ultra-Frame-Outdoor-unit/refs/heads/main/public/Images/LED_SCREEN.jpg"
  },

];

// Base path for all rental gear photos hosted in the Supersrimanth007/IMAGES repo
const IMG_BASE = "https://raw.githubusercontent.com/Supersrimanth007/IMAGES/main/";

// PRICING NOTES:

export const PRODUCTS = [
  // Powers
  { id: "SE-1", category: "power", tag: "Gen", title: "Honda 7kV Silent Generator", desc: "a 7 kVA inverter petrol genset designed for clean, stable, and relatively quiet backup power.", price: 800, unit: "per day", img: IMG_BASE + "Honda%207kV%20Silent%20Generator.webp" },
  { id: "SE-2", category: "power", tag: "van", title: "vehicle with 40,60,80 KW Generator", desc: "A Mobile generator set mounted on a directly on van", price: 800, unit: "per day", img: "" },

  // Action Cranes
  { id: "cranes-1", category: "cranes", tag: "Crane", title: "Dolly & Track", desc: "Straight-track dolly system for smooth, level tracking shots — the standard tool for push-ins, reveals, and lateral moves alongside a subject.", price: 3000, unit: "per day", img: IMG_BASE + "Dolly%20%26%20Track.webp" },
  { id: "cranes-2", category: "cranes", tag: "Crane", title: "Jimmy Jib", desc: "Counterbalanced camera crane that swings the camera through sweeping vertical and diagonal moves, operated remotely from the base — great for reveals and establishing shots. Rented with an experienced jib operator.", price: 5000, unit: "per day", img: IMG_BASE + "Jimmy%20Jib.webp" },
  { id: "cranes-3", category: "cranes", tag: "Crane", title: "Cinetica Nu.Tron Crane", desc: " a high‑capacity, fully mechanical camera crane/arm system that gives you weightless, shake‑free handheld movement with payloads up to 20 kg", price: 5000, unit: "per day", img: IMG_BASE + "Cinetica%20Nu.Tron%20Crane.webp" },

  // Cinema Lights
  { id: "lights-2", category: "lights", tag: "Aputure", title: "ARRI SkyPanel x21", desc: "Full-color, soft-source LED panel with app-controlled output and CCT/gel presets — a soft-light workhorse for interviews, interiors, and bounce fill.", price: 2800, unit: "per day", img: IMG_BASE + "ARRI%20SkyPanel%20x21.png" },
  { id: "lights-3", category: "lights", tag: "Aputure", title: "Aputure 600D", desc: "600W daylight-balanced point-source LED, compact and quick to rig — a punchy key light for exteriors and hard-light setups.", price: 800, unit: "per day", img: IMG_BASE + "Aputure%20600D.webp" },
  { id: "lights-4", category: "lights", tag: "Aputure", title: "Aputure Infinibar 4ft 8light kit", desc: "Set of eight wireless, app-controlled RGB LED tubes — flexible for practicals, accent lighting, and colour washes hidden in-frame.", price: 4000, unit: "per day", img: IMG_BASE + "Aputure%20Infinibar%204ft%208light%20kit2.jpg" },
  { id: "lights-5", category: "lights", tag: "Aputure", title: "Creamsource Vortex24 RGB LED Light Panel", desc: "High-output RGBW panel with 24 independently addressable pixel zones — used for gradient washes, moving-light effects, and creative colour work.", price: 9600, unit: "per day", img: IMG_BASE + "Creamsource%20Vortex24%20RGB%20LED%20Light%20Panel.png" },
  { id: "lights-6", category: "lights", tag: "Aputure", title: "ARRI SkyPanel x22", desc: "2x2 SkyPanel fixture (two X21 units locked together) delivering a wider, softer wash — used where a single X21 doesn't cover the frame.", price: 2800, unit: "per day", img: IMG_BASE + "ARRI%20SkyPanel%20x22.webp" },
  { id: "lights-7", category: "lights", tag: "Aputure", title: "ARRI SkyPanel x23", desc: "2x3 SkyPanel fixture (three X21 units locked together) for large, even soft-light coverage on wide sets or group shots.", price: 8000, unit: "per day", img: IMG_BASE + "ARRI%20SkyPanel%20x23.png" },
  { id: "lights-8", category: "lights", tag: "Aputure", title: "Aputure XT 52", desc: "Tunable white point-source LED built on Aputure's BLAIR engine, delivering high output with accurate colour — a reliable key light for cinema-grade interiors.", price: 6000, unit: "per day", img: IMG_BASE + "Aputure%20XT%2052.webp" },
  { id: "lights-9", category: "lights", tag: "Aputure", title: "Aputure xt26 Bi color", desc: "Bi-color LED monolight with green/magenta tint control and dual A-Mount/Bowens compatibility — adapts easily to whatever modifier the scene needs.", price: 3200, unit: "per day", img: IMG_BASE + "Aputure%20xt26%20Bi%20color.webp" },
  { id: "lights-10", category: "lights", tag: "Aputure", title: "Aputure Infinimate 2 X 4 ", desc: "Inflatable airbag softbox that sets up in minutes for rapid, lightweight diffusion — useful when there's no time for a full frame-and-silk rig.", price: 2000, unit: "per day", img: IMG_BASE + "Aputure%20Infinimate%202%20X%204.webp" },
  { id: "lights-11", category: "lights", tag: "Aputure", title: "Aputure Infinimate 4 X 4 ", desc: "Larger 4x4ft inflatable softbox for broad, soft key or fill light over a wider area — quick rig time with minimal grip support needed.", price: 4000, unit: "per day", img: IMG_BASE + "Aputure%20Infinimate%204%20X%204.webp" },
  { id: "lights-12", category: "lights", tag: "Aputure", title: "Aputure NOVA 2", desc: "Compact daylight LED panel with soft, flattering output — a go-to for interview and beauty lighting where a gentle wraparound light is needed.", price: 800, unit: "per day", img: IMG_BASE + "Aputure%20NOVA%202.webp" },
  { id: "lights-13", category: "lights", tag: "Aputure", title: "Aputure Nova RGB panel", desc: "RGBWW soft-light panel with four independent pixel zones for gradient colour effects alongside standard white-light output.", price: 1200, unit: "per day", img: IMG_BASE + "Aputure%20Nova%20RGB%20panel.webp" },
  { id: "lights-14", category: "lights", tag: "Aputure", title: "Aputure 1000 C", desc: "Full-color point-source LED monolight with a 7-color BLAIR-CG engine — capable of saturated colour effects as well as standard white light.", price: 2000, unit: "per day", img: IMG_BASE + "Aputure%201000%20C.webp" },
  { id: "lights-15", category: "lights", tag: "Aputure", title: "Aputure 700X", desc: "700W tunable-white LED monolight with a 5-diode BLAIR engine — a strong, portable key light for run-and-gun and studio work alike.", price: 1200, unit: "per day", img: IMG_BASE + "Aputure%20700X.webp" },
  { id: "lights-16", category: "lights", tag: "Aputure", title: "Nanlite 2400 bi color", desc: "High-output bi-color LED spotlight with precise green/magenta tint adjustment — suited to large exteriors or where a single fixture needs to punch through daylight.", price: 2400, unit: "per day", img: IMG_BASE + "Nanlite%202400%20bi%20color.webp" },
  { id: "lights-17", category: "lights", tag: "Aputure", title: "Nanlite 1200x BI Color", desc: "Dot-matrix bi-color LED spotlight covering 2700K–6500K — a flexible key/backlight for both warm and cool setups.", price: 1600, unit: "per day", img: IMG_BASE + "Nanlite%201200x%20BI%20Color.webp" },
  { id: "lights-18", category: "lights", tag: "Aputure", title: "Aputure 1200D Pro", desc: "IP54 weather-resistant 1200W daylight COB LED spotlight built for outdoor use — a heavy-duty key light that can handle rain and dust on location.", price: 1000, unit: "per day", img: IMG_BASE + "Aputure%201200D%20Pro.webp" },
  { id: "lights-19", category: "lights", tag: "Aputure", title: "Aputure 600C RGB", desc: "Full-color LED spotlight with a wide 2300K–10000K range — used for both naturalistic lighting and bold colour-gel-free effects.", price: 1400, unit: "per day", img: IMG_BASE + "Aputure%20600C%20RGB.webp" },
  { id: "lights-20", category: "lights", tag: "Aputure", title: "Aputure 600x pro", desc: "Weather-resistant 600W bi-color point-source LED — a dependable mid-power key light for both studio and outdoor sets.", price: 1200, unit: "per day", img: IMG_BASE + "Aputure-600x-pro.webp" },
  { id: "lights-21", category: "lights", tag: "Aputure", title: "Aputure 600d pro", desc: "Weather-resistant 600W daylight-balanced point-source LED for outdoor-ready hard-light setups.", price: 800, unit: "per day", img: IMG_BASE + "Aputure-600d-pro.webp" },
  { id: "lights-22", category: "lights", tag: "Aputure", title: "Aputure 300x", desc: "Compact 350W bi-color point-source LED — a lightweight everyday key or fill light for smaller setups and tighter locations.", price: 650, unit: "per day", img: IMG_BASE + "Aputure-300x.webp" },
  { id: "lights-23", category: "lights", tag: "Aputure", title: "Aputure Amaran P60C", desc: "Compact, portable 60W full-color LED panel — handy as an accent or practical light in tight spaces.", price: 500, unit: "per day", img: IMG_BASE + "Aputure-Amaran-P60C.webp" },
  { id: "lights-24", category: "lights", tag: "Aputure", title: "Aputure B7C Kit", desc: "Set of eight pocket-sized RGBWW smart bulbs in a charging case — quick to hide inside practicals like lamps and fixtures for motivated colour lighting.", price: 1200, unit: "per day", img: IMG_BASE + "Aputure-B7C-Kit.webp" },
  { id: "lights-25", category: "lights", tag: "Aputure", title: "Aputure LS 60x", desc: "Compact, weather-resistant 60W bi-color focusing light — small footprint, good for tight interiors and as an accent or eye light.", price: 600, unit: "per day", img: IMG_BASE + "Aputure-LS-60x.webp" },
  { id: "lights-26", category: "lights", tag: "Aputure", title: "Nanlite RGB 2 Tube", desc: "Pair of full-color LED tube lights — flexible for accent lighting, colour washes, or hand-held practical effects.", price: 950, unit: "per day", img: IMG_BASE + "Nanlite-RGB-2-Tube.webp" },
  { id: "lights-27", category: "lights", tag: "Aputure", title: "MT Pro RGB 1 Feet", desc: "Ultra-compact 1ft full-color mini LED tube — ideal for squeezing colour or practical light into tight corners of a set.", price: 300, unit: "per day", img: IMG_BASE + "MT-Pro-RGB-1-Feet.webp" },
  { id: "lights-28", category: "lights", tag: "Aputure", title: "Amaran light mate F22c", desc: "Ultra-lightweight 2x2ft flexible full-color LED mat — bends around surfaces for creative wraps and tight-space rigging.", price: 800, unit: "per day", img: IMG_BASE + "Amaran-light-mate-F22c.png" },
  { id: "lights-29", category: "lights", tag: "Aputure", title: "Amaran light mate F21c", desc: "Compact 2x1ft flexible full-color LED mat — a lighter version of the F22C for smaller wraps and accents.", price: 650, unit: "per day", img: IMG_BASE + "Amaran-light-mate-F21c.webp" },
  { id: "lights-30", category: "lights", tag: "HMI", title: "ARRI M90", desc: "9000W daylight HMI fixture with MAX Technology for a punchy, lensless beam — used to simulate hard sunlight through windows or over large exteriors.", price: 7200, unit: "per day", img: IMG_BASE + "ARRI-M90.webp" },
  { id: "lights-31", category: "lights", tag: "HMI", title: "Mole beam 10kw", desc: "Heavy-duty 10,000W tungsten projector with a 24-inch parabolic mirror, producing a tight, parallel beam for big daylight or backlight effects.", price: 9600, unit: "per day", img: IMG_BASE + "Mole-beam-10kw.webp" },
  { id: "lights-1", category: "lights", tag: "HMI", title: "Mole beam 5kw", desc: "5000W tungsten projector with a 24-inch parabolic mirror for a concentrated, parallel column of light — a smaller sibling to the 10kW beam.", price: 4000, unit: "per day", img: IMG_BASE + "Mole-beam-5kw.webp" },
  { id: "lights-32", category: "lights", tag: "HMI", title: "10kW to 12kW Tungsten Fresnel", desc: "Large tungsten Fresnel used to produce a warm, controllable key light or to punch a wide beam of simulated sunlight into a set.", price: 2400, unit: "per day", img: IMG_BASE + "10kW-to-12kW-Tungsten-Fresnel.png" },
  { id: "lights-33", category: "lights", tag: "HMI", title: "ARRI M40", desc: "Versatile 2500W/4000W daylight HMI — a mid-size punch light for exteriors and larger interiors.", price: 1450, unit: "per day", img: IMG_BASE + "ARRI-M40.webp" },
  { id: "lights-34", category: "lights", tag: "HMI", title: "ARRI M18", desc: "Popular 1800W daylight HMI — a compact, powerful punch light widely used for window light and medium-throw exterior work.", price: 1050, unit: "per day", img: IMG_BASE + "ARRI-M18.webp" },
  { id: "lights-35", category: "lights", tag: "HMI", title: "ARRI Daylight 4KW PAR", desc: "4000W daylight HMI PAR fixture with drop-in spread lenses to shape an intense, controllable beam for big exteriors.", price: 1450, unit: "per day", img: IMG_BASE + "ARRI-Daylight-4KW-PAR.webp" },
  { id: "lights-36", category: "lights", tag: "HMI", title: "ARRI 1.2 Kv PAR", desc: "Industry-standard 1200W daylight HMI PAR — a lighter-weight punch light for medium-scale exterior and window setups.", price: 1050, unit: "per day", img: IMG_BASE + "ARRI-1.2-Kv-PAR.png" },
  { id: "lights-37", category: "lights", tag: "HMI", title: "Kino Flo 4Bank 4ft Bi-Color", desc: "Classic four-tube soft-light fixture (fluorescent or LED retrofit) — a flicker-free, even soft light long favoured for interviews and close-ups.", price: 400, unit: "per day", img: IMG_BASE + "Kino-Flo-4Bank-4ft-Bi-Color.webp" },
  { id: "lights-38", category: "lights", tag: "HMI", title: "Kino Flo 4Bank 2ft Bi-Color", desc: "Compact four-tube soft-light fixture, a smaller-footprint version of the 4ft bank for tighter interiors.", price: 400, unit: "per day", img: IMG_BASE + "Kino-Flo-4Bank-2ft-Bi-Color.webp" },
  { id: "lights-39", category: "lights", tag: "HMI", title: "5K Senior or Baby Senior ", desc: "Classic 5000W tungsten Fresnel at 3200K — a warm, traditional key light still favoured for its soft, natural falloff.", price: 400, unit: "per day", img: IMG_BASE + "5K-Senior-or-Baby-Senior.png" },
  { id: "lights-40", category: "lights", tag: "HMI", title: "2K Junior", desc: "2000W tungsten Fresnel at 3200K — a mid-size warm light for fill or secondary key duties.", price: 300, unit: "per day", img: IMG_BASE + "2K-Junior.png" },
  { id: "lights-41", category: "lights", tag: "HMI", title: "1kW Baby / T1 Fresnel", desc: "Compact 1000W tungsten Fresnel at 3200K — a versatile small fixture for accents, hair light, or fill.", price: 200, unit: "per day", img: IMG_BASE + "1kW-Baby-T1-Fresnel.png" },
  { id: "lights-42", category: "lights", tag: "HMI", title: "1650w Tungsten Baby", desc: "Lightweight 650W tungsten Fresnel — a widely used small fixture for eye light, accents, and quick fill.", price: 250, unit: "per day", img: IMG_BASE + "1650w-Tungsten-Baby.webp" },
  { id: "lights-43", category: "lights", tag: "HMI", title: "4-Light Maxi-Brute / Dino 4-Bank", desc: "4000W tungsten PAR array in a 2x2 grid — a broad, punchy source used for large exteriors or simulated sunlight through windows.", price: 800, unit: "per day", img: IMG_BASE + "4-Light-Maxi-Brute-Dino-4-Bank.png" },
  { id: "lights-44", category: "lights", tag: "HMI", title: "300W Baby Fresnel / ARRI 300 Plus", desc: "Ultra-compact 300W tungsten fixture at 3200K — a small, easy-to-rig accent or fill light for tight spaces.", price: 250, unit: "per day", img: IMG_BASE + "300W-Baby-Fresnel-ARRI-300-Plus.webp" },
  { id: "lights-45", category: "lights", tag: "HMI", title: "9-Light Maxi-Brute / Dino 9-Bank", desc: "9000W tungsten PAR array in a 3x3 grid — a heavy-duty broad source for large-scale exterior or backlight work.", price: 1200, unit: "per day", img: IMG_BASE + "9-Light-Maxi-Brute-Dino-9-Bank.png" },
  { id: "lights-46", category: "lights", tag: "HMI", title: "6-Light Maxi-Brute / Dino 6-Bank", desc: "6000W tungsten PAR array in a 2x3 grid — a strong mid-size broad source between the 4-bank and 9-bank rigs.", price: 1050, unit: "per day", img: IMG_BASE + "6-Light-Maxi-Brute-Dino-6-Bank.png" },
  { id: "lights-47", category: "lights", tag: "HMI", title: "12-Light Maxi-Brute / Dino 12-Bank", desc: "12000W tungsten PAR array in a 4x3 grid — the largest broad-source rig in the lineup, for big daylight simulation or backlight walls.", price: 1600, unit: "per day", img: IMG_BASE + "12-Light-Maxi-Brute-Dino-12-Bank.png" },
  { id: "lights-50", category: "lights", tag: "LIGHT", title: "Aputure Spotlight Mount", desc: "Optical projection lens attachment that rigs onto a compatible point-source light to throw hard-edged shapes, gobos, and tight beams.", price: 650, unit: "per day", img: IMG_BASE + "Aputure-Spotlight-Mount.webp" },
  { id: "lights-51", category: "lights", tag: "LIGHT", title: "Nanlux Parallel Beam Reflector 6°", desc: "NL-mount optical modifier that concentrates a light's output into an ultra-tight 6° beam for long-throw or focused hard-light effects.", price: 2000, unit: "per day", img: IMG_BASE + "Nanlux-Parallel-Beam-Reflector-6%C2%B0.webp" },
  { id: "lights-52", category: "lights", tag: "LIGHT", title: "Aputure 80c 3light kit", desc: "Set of three 80W full-color point-source LEDs — a compact, colour-capable kit for small-crew shoots and interviews.", price: 1600, unit: "per day", img: IMG_BASE + "Aputure-80c-3light-kit.webp" },
  { id: "lights-53", category: "lights", tag: "LIGHT", title: "Aputure MC Pro Kit", desc: "Set of pocket-sized RGBWW LED panels in a charging case — grab-and-go accent lights for run-and-gun and social content shoots.", price: 1600, unit: "per day", img: IMG_BASE + "Aputure-MC-Pro-Kit.webp" },


  // Screens & Walls — chroma backdrops priced
  { id: "screens-1", category: "screens", tag: "Cloth", title: "Green Screen", desc: "Large chroma-key green backdrop cloth for digitally replacing the background in post — the standard choice for VFX composites and virtual sets.", price: 500, unit: "per day", img: IMG_BASE + "Green-Screen.webp" },
  { id: "screens-2", category: "screens", tag: "Cloth", title: "Blue Screen", desc: "Non-reflective chroma-key blue backdrop cloth, preferred over green when the subject's wardrobe or props contain green tones.", price: 500, unit: "per day", img: IMG_BASE + "Blue-Screen.png" },
  { id: "screens-3", category: "screens", tag: "Cloth", title: "Black Screen", desc: "Light-absorbing black backdrop cloth for high-contrast photography, negative fill, and dramatic low-key studio setups.", price: 500, unit: "per day", img: IMG_BASE + "Black-Screen.webp" },

  // Camera Rigs
  { id: "camera-1", category: "camera", tag: "Body", title: "ARRI Alexa Mini LF", desc: "Large-format cinema camera body, an industry standard for narrative features — full-frame sensor with wide dynamic range and ARRI colour science.", price: 12800, unit: "per day", img: IMG_BASE + "ARRI-Alexa-Mini-LF.webp" },
  { id: "camera-2", category: "camera", tag: "Body", title: "RED V-Raptor", desc: "High-resolution cinema body with flexible sensor modes up to 8K — built for productions that need maximum resolution and reframing headroom.", price: 12800, unit: "per day", img: IMG_BASE + "RED-V-Raptor.webp" },
  { id: "camera-3", category: "camera", tag: "Body", title: "Sony Venice", desc: "Full-frame cinema camera with dual native ISO for exceptional low-light performance and highlight retention.", price: 12800, unit: "per day", img: "https://pro.sony/s3/2017/07/06122244/venice-overview_12-slider-051.png" },
  { id: "camera-4", category: "camera", tag: "Body", title: "EOS R50 with kit lens", desc: "Compact mirrorless camera with a 24.2MP sensor and 4K/30p video, bundled with the RF-S 18-45mm kit lens — a light, affordable option for run-and-gun, BTS, and social content.", price: 800, unit: "per day", img: IMG_BASE + "EOS-R50-with-kit-lens.webp" },
  { id: "camera-5", category: "camera", tag: "Gimbal", title: "Blackmagic Pocket Cinema Camera 4K", desc: "Compact Micro Four Thirds cinema camera with 13 stops of dynamic range and dual native ISO up to 25,600, shooting 4K DCI up to 60fps in Blackmagic RAW — strong image quality at an accessible price.", price: 1200, unit: "per day", img: IMG_BASE + "Blackmagic-Pocket-Cinema-Camera-4K.webp" },
  { id: "camera-6", category: "camera", tag: "Gimbal", title: "Sony ZV‑E10", desc: "Lightweight APS-C mirrorless camera with a 24.2MP sensor and 4K/30p video, built for creators — a good fit for solo shooters and interview setups.", price: 700, unit: "per day", img: IMG_BASE + "Sony-ZV%E2%80%91E10.webp" },

  // Grip & Rigging
  { id: "grip-1", category: "grip", tag: "Grip", title: "Gimble", desc: "Flagship single-handed camera gimbal for smooth, stabilised handheld footage — the standard tool for walking shots and dynamic coverage.", price: 6400, unit: "per day", img: IMG_BASE + "Gimble.webp" },
  { id: "grip-2", category: "grip", tag: "Grip", title: "C-Stand", desc: "Standard grip stand with a riser column, grip head, and arm — used to position lights, flags, bounce boards, or diffusion at precise angles on set.", price: 300, unit: "per day", img: IMG_BASE + "C-Stand.webp" },
  { id: "grip-3", category: "grip", tag: "Grip", title: "Combo Stand", desc: "Heavier-duty stand built to support larger lighting fixtures or overhead frames that a standard C-stand can't safely carry.", price: 400, unit: "per day", img: IMG_BASE + "Combo-Stand.webp" },
  { id: "grip-4", category: "grip", tag: "Grip", title: "Bouncing Board", desc: "Reflector board used to bounce or redirect light onto a subject, softening shadows without adding another fixture.", price: 300, unit: "per day", img: IMG_BASE + "Bouncing-Board.webp" },
  { id: "grip-5", category: "grip", tag: "Grip", title: "Butterfly Frame", desc: "Modular aluminium frame that holds large diffusion or reflective fabric overhead — used to soften or block hard sunlight over a wide area.", price: 1200, unit: "per day", img: IMG_BASE + "Butterfly-Frame.webp" },
  { id: "grip-6", category: "grip", tag: "Grip", title: "Flage Frame", desc: "Standard wire-frame flag skinned with black fabric, used to cut unwanted light or create negative fill on a subject.", price: 800, unit: "per day", img: IMG_BASE + "Flage-Frame.webp" },
  { id: "grip-7", category: "grip", tag: "Grip", title: "Camera Slider", desc: "Compact rail-mounted slider for smooth, controlled tracking shots in tight spaces where a full dolly track isn't practical.", price: 1200, unit: "per day", img: IMG_BASE + "Camera-Slider.webp" },


];