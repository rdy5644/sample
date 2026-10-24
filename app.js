/*
  Saai Kumar Valves & Cocks storefront
  Replace the contact values below and connect submitQuote() to your API before launch.
  The catalog intentionally uses quote-only pricing for wholesale orders.
*/
const SHOP = {
  name: "Saai Kumar Valves & Cocks",
  phoneDisplay: "+91 89858 36691",
  phoneLink: "+918985836691",
  email: "robbirohit875@gmail.com",
  whatsapp: "918985836691"
};

const PRODUCTS = [
  {
    id: "ashirvad-flowguard-sch40",
    name: "FlowGuard Plus CPVC Pipe",
    brand: "Ashirvad",
    category: "piping",
    subcategory: "Hot & cold water",
    description: "CPVC pressure pipe for residential and commercial hot and cold water lines.",
    specs: ["SCH 40", "2½–6 in", "ASTM F441"],
    badge: "Project staple",
    image: "https://www.ashirvad.com/wp-content/uploads/2025/10/Ashirvad_CPVC_Pipes_SCH40.png",
    source: "https://www.ashirvad.com/product/sch-40-pipe/",
    sourceLabel: "Ashirvad specs"
  },
  {
    id: "ashirvad-aqualife-upvc",
    name: "Aqualife uPVC Piping System",
    brand: "Ashirvad",
    category: "piping",
    subcategory: "Cold water plumbing",
    description: "Lead-free uPVC pipe range for potable cold-water distribution.",
    specs: ["SCH 40 / 80", "½–6 in", "ASTM D1785"],
    badge: "Cold water",
    image: "https://www.ashirvad.com/wp-content/uploads/2025/10/2.-Ashirvad-uPVC-Aqualife%C2%AE-1.png",
    source: "https://www.ashirvad.com/product/ashirvad-upvc-aqualife/",
    sourceLabel: "Ashirvad specs"
  },
  {
    id: "ashirvad-silent-plus-swr",
    name: "Silent Plus SWR Pipes",
    brand: "Ashirvad",
    category: "piping",
    subcategory: "Drainage system",
    description: "Three-layer mineral-filled uPVC soil, waste and rainwater drainage pipes.",
    specs: ["Pushfit / Solfit", "Under 10 dB*", "Multiple lengths"],
    badge: "Low-noise drainage",
    image: "https://www.ashirvad.com/wp-content/uploads/2025/10/Ashirvad_Silent-Plus_-Pushfit-_Single-Socket-Pipe-2.png",
    source: "https://www.ashirvad.com/product/silent-plus-pipes/",
    sourceLabel: "Ashirvad specs"
  },
  {
    id: "ashirvad-elbow-90",
    name: "CPVC Elbow 90°",
    brand: "Ashirvad",
    category: "piping",
    subcategory: "Pipe fittings",
    description: "Right-angle CPVC fitting for changing direction in a pressure piping run.",
    specs: ["SCH 40 / 80", "½–6 in", "CPVC"],
    badge: "Fitting",
    image: "https://www.ashirvad.com/wp-content/uploads/2025/10/Ashirvad_CPVC_Fitting_Elbow-90%E2%81%B0.png",
    source: "https://www.ashirvad.com/product/elbow-90/",
    sourceLabel: "Ashirvad specs"
  },
  {
    id: "plumber-cpvc-range",
    name: "CPVC Hot & Cold Water Pipes",
    brand: "Plumber",
    category: "piping",
    subcategory: "Hot & cold water",
    description: "A project-ready range of pressure pipes and fittings for home plumbing.",
    specs: ["CPVC range", "Pipes + fittings", "Ask for sizes"],
    badge: "Dealer range",
    image: "https://api.plumberpipes.com/frontend/images/categories/b0bc1c5f-2d4f-406b-a0d0-1b5319c1e919.webp",
    source: "https://plumberpipes.com/",
    sourceLabel: "Plumber range"
  },
  {
    id: "plumber-upvc-range",
    name: "uPVC Pressure Pipe Range",
    brand: "Plumber",
    category: "piping",
    subcategory: "Water supply",
    description: "uPVC pipes and fittings for water distribution and building services.",
    specs: ["uPVC range", "Pipes + fittings", "Ask for sizes"],
    badge: "Dealer range",
    image: "https://api.plumberpipes.com/frontend/images/categories/c0cef114-b33c-492c-8fcc-6fb1091426af.webp",
    source: "https://plumberpipes.com/",
    sourceLabel: "Plumber range"
  },
  {
    id: "toyo-em-51201-bib-cock",
    name: "EM 51201 Bib Cock",
    brand: "TOYO",
    category: "bathware",
    subcategory: "CP bath fittings",
    description: "Chrome-finish bib cock in TOYO’s Emerald series with a brass body.",
    specs: ["3/4 in", "Chrome finish", "SKU EM-51201"],
    badge: "Popular fitting",
    image: "https://www.toyoindia.in/wp-content/uploads/51201-_Bib-Cock-660x660.png",
    source: "https://www.toyoindia.in/cp-fittings/toyo-em-51201-bib-cock/",
    sourceLabel: "TOYO product"
  },
  {
    id: "agl-myth-basin",
    name: "Myth Table Top Wash Basin",
    brand: "AGL",
    category: "bathware",
    subcategory: "Sanitaryware",
    description: "Gloss-white ceramic countertop basin with a single tap hole.",
    specs: ["490 × 380 mm", "Single tap hole", "Catalog S125039142"],
    badge: "Bathware",
    image: "https://navyaceramics.com/cdn/shop/files/MYTH-0.png?v=1766223803",
    source: "https://navyaceramics.com/products/agl-myth-table-top-wash-basin",
    sourceLabel: "Product details"
  },
  {
    id: "sonata-wall-hung-closet",
    name: "Wall Hung Water Closet",
    brand: "Sonata",
    category: "bathware",
    subcategory: "Sanitaryware",
    description: "Gloss-white ceramic wall-hung closet for residential and project bathrooms.",
    specs: ["Wall mounted", "White ceramic", "Bulk supply"],
    badge: "Project range",
    image: "https://cpimg.tistatic.com/09930072/b/4/Bathroom-Wall-Hung-Closet..jpg",
    source: "https://www.tradeindia.com/products/bathroom-wall-hung-closet-c9930072.html",
    sourceLabel: "Product details"
  },
  {
    id: "leo-borehole-pump",
    name: "3″ Borehole Submersible Pump",
    brand: "LEO",
    category: "pumps",
    subcategory: "Water pumps",
    description: "Stainless-steel borehole pump form factor for deep-well water applications.",
    specs: ["3 in borehole", "Deep-well use", "Ask for model"],
    badge: "Pump range",
    image: "https://cdn1.npcdn.net/images/1584890270c4e9ae3c147eb249851c256b50f476ee.png?md5id=6fa49450b98696c6c042357d73674657&new_height=1000&new_width=1000&w=-62170009200",
    source: "https://leopump.com/en/domestic-and-commercial-water-pump-solutions.html",
    sourceLabel: "LEO range"
  },
  {
    id: "goldmedal-gclick-20a",
    name: "G-Click 20A 1-Way Switch",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Modular switches",
    description: "Single-module 20A switch from the Goldmedal G-Click wiring devices range.",
    specs: ["20A", "1-way", "Code 101770"],
    badge: "Electricals",
    image: "https://static1.industrybuying.com/products/electrical/switches-sockets-plugs-and-connectors/electrical-switch/ELE.ELE.528137577_1733719221016.webp",
    source: "https://www.goldmedalindia.com/img/technical-leaflets-v1/pdf/brochures2/Common-pricelist-Wiring-Devices-image-2025.pdf",
    sourceLabel: "Goldmedal list"
  },
  {
    id: "goldmedal-air-aero-switch",
    name: "Air Aero 2-Way Switch",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Modular switches",
    description: "Compact modular rocker switch from Goldmedal’s Air Aero series.",
    specs: ["2-way", "Modular", "Air Aero series"],
    badge: "Electricals",
    image: "https://mykit.in/crm/public/uploads/product_images_500x500/goldmedal-air-aero-2way-switchwhite-240v.jpg",
    source: "https://www.goldmedalindia.com/",
    sourceLabel: "Goldmedal range"
  },
  {
    id: "ashirvad-weather-guard-tank",
    name: "WeatherGuard Water Storage Tank",
    brand: "Ashirvad",
    category: "piping",
    subcategory: "Water storage",
    description: "Insulated household water storage tank range for overhead and building water storage.",
    specs: ["WeatherGuard range", "Multiple capacities", "Ask for stock sizes"],
    badge: "Home essential",
    image: "https://www.ashirvad.com/wp-content/uploads/2021/04/WST_WeatherGuard-1.png",
    source: "https://www.ashirvad.com/solution/ashirvad-water-tanks/",
    sourceLabel: "Ashirvad tanks"
  },
  {
    id: "ashirvad-rainbank",
    name: "RainBank Rainwater System",
    brand: "Ashirvad",
    category: "piping",
    subcategory: "Water management",
    description: "Rainwater management solution for homes and buildings; ask the trade desk about system components.",
    specs: ["Rainwater management", "Building solution", "Ask for configuration"],
    badge: "Water saving",
    image: "https://www.ashirvad.com/wp-content/uploads/2025/11/Frame-1973341772.png",
    source: "https://www.ashirvad.com/solution/ashirvad-rainbank/",
    sourceLabel: "Ashirvad solution"
  },
  {
    id: "ashirvad-flushing-solutions",
    name: "SLIMPRO Concealed Cistern",
    brand: "Ashirvad",
    category: "bathware",
    subcategory: "Bathroom installation",
    description: "Slim concealed cistern system with a supporting frame and dual-flush options for modern bathroom installations.",
    specs: ["3 / 6 L dual flush", "Full / half-frame options", "Ask for flush plate"],
    badge: "Bathroom range",
    image: "https://www.ashirvad.com/wp-content/uploads/2025/05/Slimpro_3.png",
    source: "https://www.ashirvad.com/solution/ashirvad-slimpro-concealed-cistern/",
    sourceLabel: "Ashirvad product"
  },
  {
    id: "toyo-al-51519-sink-mixer",
    name: "AL-51519 Kitchen Sink Mixer",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Kitchen fittings",
    description: "Regular swan-neck sink mixer from TOYO’s Alex series for household kitchen sinks.",
    specs: ["Model AL-51519", "Regular swan neck", "Chrome finish"],
    badge: "Kitchen",
    image: "https://www.toyoindia.in/wp-content/uploads/51519.png",
    source: "https://www.toyoindia.in/cp-fittings/alex-series/toyo-al-51519-sink-mixer-regular-swan-neck/",
    sourceLabel: "TOYO product"
  },
  {
    id: "toyo-health-faucet",
    name: "Full Brass Health Faucet",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Bathroom fittings",
    description: "Handheld health faucet from TOYO’s bathroom fittings range; finish and hose options vary by model.",
    specs: ["Model 8571 range", "Brass fitting", "Ask for finish"],
    badge: "Bathroom",
    image: "https://www.toyoindia.in/wp-content/uploads/cat-health-faucets.jpg",
    source: "https://www.toyoindia.in/faucets/",
    sourceLabel: "TOYO faucet range"
  },
  {
    id: "toyo-towel-rack",
    name: "Full Brass Towel Rack",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Bathroom accessories",
    description: "Wall-mounted towel storage from TOYO’s bathroom accessories range.",
    specs: ["Model 16010", "Full brass", "Ask for finish"],
    badge: "Bathroom",
    image: "https://www.toyoindia.in/wp-content/uploads/cat-towel-racks.jpg",
    source: "https://www.toyoindia.in/bathroom-accessories/",
    sourceLabel: "TOYO accessories"
  },
  {
    id: "toyo-basin-mixer",
    name: "Single Lever Basin Mixer",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Basin fittings",
    description: "Single-lever mixer for wash basins from TOYO’s brass CP fittings range.",
    specs: ["Model 1071 range", "Single lever", "Ask for series"],
    badge: "Bathroom",
    image: "https://www.toyoindia.in/wp-content/uploads/cat-wall-mixer.jpg",
    source: "https://www.toyoindia.in/faucets/",
    sourceLabel: "TOYO faucet range"
  },
  {
    id: "toyo-rain-shower",
    name: "Rain Shower & Shower Arm",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Showers",
    description: "Overhead rain shower options for home bathrooms, with compatible shower arms available in the range.",
    specs: ["Rain shower range", "Multiple sizes", "Ask for finish"],
    badge: "Bathroom",
    image: "https://www.toyoindia.in/wp-content/uploads/cat-rain-shower.jpg",
    source: "https://www.toyoindia.in/showers/",
    sourceLabel: "TOYO showers"
  },
  {
    id: "toyo-concealed-cistern-31011",
    name: "31011 Concealed Cistern",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Cisterns & flushing",
    description: "Slim concealed cistern option for wall-hung and modern bathroom installations; confirm flush plate compatibility.",
    specs: ["Model 31011", "Dual-flush range", "Ask for installation kit"],
    badge: "Bathroom",
    image: "https://www.hamronirman.com/content/images/thumbs/660e7cd3788ae000011a8c72_toyo-cistern-6ltrs.png",
    source: "https://www.toyoindia.in/sanitaryware/cisterns/concealed/",
    sourceLabel: "TOYO cisterns"
  },
  {
    id: "toyo-bottle-trap",
    name: "Bottle Trap for Wash Basin",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Basin fittings",
    description: "Bottle trap and waste fittings for wash basin installations; available finishes and connections vary by model.",
    specs: ["Bottle trap range", "For wash basins", "Ask for finish"],
    badge: "Bathroom",
    image: "https://www.toyoindia.in/wp-content/uploads/cat-bottle-traps.jpg",
    source: "https://www.toyoindia.in/faucets/",
    sourceLabel: "TOYO faucet range"
  },
  {
    id: "toyo-waste-coupling",
    name: "Pop-Up Waste Coupling",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Basin fittings",
    description: "Pop-up waste coupling for wash basin drainage; confirm basin and finish compatibility when ordering.",
    specs: ["Model 2371 range", "Pop-up type", "Ask for finish"],
    badge: "Bathroom",
    image: "https://www.toyoindia.in/wp-content/uploads/cat-waste-coupling.jpg",
    source: "https://www.toyoindia.in/faucets/",
    sourceLabel: "TOYO faucet range"
  },
  {
    id: "toyo-bathroom-vanity",
    name: "Bathroom Vanity Cabinet Range",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Bathroom furniture",
    description: "Bathroom vanity cabinets in multiple sizes and material options for household bathrooms.",
    specs: ["24–40 in ranges", "PVC / HDHMR options", "Ask for basin set"],
    badge: "Bathroom",
    image: "https://www.toyoindia.in/wp-content/uploads/vanity-40-inch-menu-front.jpg",
    source: "https://www.toyoindia.in/bathroom-vanities/",
    sourceLabel: "TOYO vanities"
  },
  {
    id: "toyo-kitchen-sink-mixer-range",
    name: "Kitchen Sink Mixer Range",
    brand: "TOYO",
    category: "bathware",
    subcategory: "Kitchen fittings",
    description: "Household kitchen sink mixer collection with swan-neck and pull-out options across the range.",
    specs: ["Brass / SS 304 options", "Pull-out models", "Ask for model"],
    badge: "Kitchen",
    image: "https://www.toyoindia.in/wp-content/uploads/cat-kitchen-sink-mixer.jpg",
    source: "https://www.toyoindia.in/faucets/kitchen-sink-mixers/",
    sourceLabel: "TOYO kitchen mixers"
  },
  {
    id: "agl-echo-one-piece-wc",
    name: "Echo One-Piece Water Closet",
    brand: "AGL",
    category: "bathware",
    subcategory: "Sanitaryware",
    description: "White one-piece water closet with syphonic flush and quick-release PP soft-close seat cover.",
    specs: ["720 × 365 × 740 mm", "S-trap 220 mm", "Code S126736760"],
    badge: "Bathware",
    image: "https://aglasiangranito.com/media/catalog/product/cache/4f55f638b1f3c39e15a09f92f17d2e9e/e/c/echo.png",
    source: "https://aglasiangranito.com/echo-one-piece-water-close-6",
    sourceLabel: "AGL product"
  },
  {
    id: "agl-essence-basin",
    name: "Essence Table Top Basin",
    brand: "AGL",
    category: "bathware",
    subcategory: "Sanitaryware",
    description: "White ceramic countertop wash basin for a household vanity or counter installation.",
    specs: ["495 × 380 × 115 mm", "White", "Code S125039139"],
    badge: "Bathware",
    image: "https://aglasiangranito.com/media/catalog/product/cache/4f55f638b1f3c39e15a09f92f17d2e9e/e/s/essence_copy.png",
    source: "https://aglasiangranito.com/essence-table-top-basin",
    sourceLabel: "AGL product"
  },
  {
    id: "agl-wall-hung-wc-range",
    name: "Wall Hung Water Closet Range",
    brand: "AGL",
    category: "bathware",
    subcategory: "Sanitaryware",
    description: "Wall-hung water closet options from AGL’s sanitaryware range; confirm trap and installation-frame requirements.",
    specs: ["Wall-hung range", "Multiple designs", "Ask for model"],
    badge: "Bathware",
    image: "https://aglasiangranito.com/media/aw_blog/Blog_june_11_2021.jpg",
    source: "https://aglasiangranito.com/catalogue/Bathware.pdf",
    sourceLabel: "AGL bathware catalogue"
  },
  {
    id: "agl-concealed-cistern-range",
    name: "Concealed Cistern & Actuator Range",
    brand: "AGL",
    category: "bathware",
    subcategory: "Cisterns & flushing",
    description: "Concealed and ceramic cistern options with actuator plates listed in the AGL bathware range.",
    specs: ["Concealed / ceramic options", "Actuator plates", "Ask for compatibility"],
    badge: "Bathware",
    image: "https://aglasiangranito.com/media/aw_blog/Blog_june_11_2021.jpg",
    source: "https://aglasiangranito.com/catalogue/Bathware.pdf",
    sourceLabel: "AGL bathware catalogue"
  },
  {
    id: "agl-health-faucet-range",
    name: "Health Faucet Range",
    brand: "AGL",
    category: "bathware",
    subcategory: "Bathroom fittings",
    description: "Handheld health faucet options for household bathroom use from the AGL bathware range.",
    specs: ["Multiple series", "Finish options", "Ask for model"],
    badge: "Bathroom",
    image: "https://aglasiangranito.com/media/aw_blog/Blog_june_11_2021.jpg",
    source: "https://aglasiangranito.com/catalogue/Bathware.pdf",
    sourceLabel: "AGL bathware catalogue"
  },
  {
    id: "agl-kitchen-sink-range",
    name: "Kitchen Sink Range",
    brand: "AGL",
    category: "bathware",
    subcategory: "Kitchen",
    description: "Kitchen sink options listed in AGL’s bathware catalogue; ask for bowl style and size availability.",
    specs: ["Kitchen sink range", "Style options", "Ask for size"],
    badge: "Kitchen",
    image: "https://aglasiangranito.com/media/aw_blog/Blog_june_11_2021.jpg",
    source: "https://aglasiangranito.com/catalogue/Bathware.pdf",
    sourceLabel: "AGL bathware catalogue"
  },
  {
    id: "sonata-corner-urinal",
    name: "Corner Urinal",
    brand: "Sonata",
    category: "bathware",
    subcategory: "Sanitaryware",
    description: "Space-saving ceramic corner urinal from Sonata’s sanitaryware assortment.",
    specs: ["Corner mounted", "White ceramic", "Bulk supply"],
    badge: "Project range",
    image: "https://cpimg.tistatic.com/03554131/b/4/Corner-Urinal.jpg",
    source: "https://www.sonataceramicind.com/",
    sourceLabel: "Sonata range"
  },
  {
    id: "leo-mac-domestic-booster",
    name: "MAC Domestic Booster Pump",
    brand: "LEO",
    category: "pumps",
    subcategory: "Home water pressure",
    description: "Permanent-magnet intelligent booster for domestic water supply and pressure boosting.",
    specs: ["Domestic application", "Pressure boosting", "Ask for model selection"],
    badge: "Home essential",
    image: "https://leopump.com/en/bocupload/2023/07/18/MAC-permanent-magnet-intelligent-booster.png",
    source: "https://leopump.com/en/products/permanent-magnet-intelligent-booster-mac.html",
    sourceLabel: "LEO product"
  },
  {
    id: "goldmedal-gati-ceiling-fan",
    name: "Gati 400 Neo Ceiling Fan",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Home fans",
    description: "Three-blade household ceiling fan with 1200 mm sweep from the Goldmedal Gati range.",
    specs: ["1200 mm sweep", "3 blades", "Ask for colour"],
    badge: "Home electricals",
    image: "https://lntsufin.com/storage/mediafiles/catalog/live/17064-1048/original/17064-1048_image_0.jpg",
    source: "https://lntsufin.com/product/goldmedal-gati-400-neo-1200-mm-3-blades-50-w-blue-ceiling-fans/17064-1048",
    sourceLabel: "Product details"
  },
  {
    id: "goldmedal-logica-spike-guard",
    name: "Logica 4×1 Spike Guard",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Home power accessories",
    description: "Four-socket household spike guard with master switch, reset switch and heavy-duty cord.",
    specs: ["4 international sockets", "2 m cord", "Surge protection"],
    badge: "Home electricals",
    image: "https://www.jiomart.com/images/product/original/rva2dqg5ox/goldmedal-logica-4x1-spike-guard-product-images-orva2dqg5ox-p601709869-0-202305230602.png?im=Resize%3D%281000%2C1000%29",
    source: "https://portal.goldmedalindia.com/experience-centre",
    sourceLabel: "Goldmedal product range"
  },
  {
    id: "goldmedal-i-strip-spike-guard",
    name: "i-Strip 6×1 LED Spike Guard",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Home power accessories",
    description: "Six-socket extension and surge-protection strip for household electronics and appliances.",
    specs: ["6 international sockets", "LED indicator", "Ask for cable length"],
    badge: "Home electricals",
    image: "https://www.bbassets.com/media/uploads/p/l/40311158_5-goldmedal-i-strip-6x1-led-spike-guard.jpg",
    source: "https://www.goldmedalindia.com/accessories",
    sourceLabel: "Goldmedal accessories"
  },
  {
    id: "goldmedal-atom-downlight",
    name: "Atom Neo LED Downlight",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Home lighting",
    description: "Recessed LED downlight for general household interior lighting; confirm wattage and cut-out size.",
    specs: ["Atom Neo range", "Recessed lighting", "Ask for wattage"],
    badge: "Home electricals",
    image: "https://static1.industrybuying.com/products/led-lights/led-down-light/round-led-down-lights/LED.ROU.326442121_1719401010561.webp",
    source: "https://www.goldmedalindia.com/experience-centre",
    sourceLabel: "Goldmedal lighting"
  },
  {
    id: "goldmedal-aura-led-batten",
    name: "Aura LED Batten",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Home lighting",
    description: "Ambient LED batten from Goldmedal’s lighting range for household rooms and corridors.",
    specs: ["Aura range", "General lighting", "Ask for length / wattage"],
    badge: "Home electricals",
    image: "https://static1.industrybuying.com/products/led-lights/led-down-light/round-led-down-lights/LED.ROU.326442121_1719401010561.webp",
    source: "https://portal.goldmedalindia.com/experience-centre",
    sourceLabel: "Goldmedal lighting"
  },
  {
    id: "goldmedal-zyro-doorbell",
    name: "Zyro MP3 Doorbell",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Home accessories",
    description: "Household doorbell with built-in storage, selectable melodies and volume control.",
    specs: ["128 MB built-in storage", "Selectable melody", "Volume control"],
    badge: "Home electricals",
    image: "https://ecx.images-amazon.com/images/I/31wIi6fudJL.jpg",
    source: "https://www.goldmedalindia.com/video",
    sourceLabel: "Goldmedal product"
  },
  {
    id: "goldmedal-intense-immersion-rod",
    name: "Intense Immersion Rod",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Water heating",
    description: "Portable bucket water heater with moulded plug, power indicator and protective bucket guard.",
    specs: ["ISI-certified plug", "Power indicator", "Ask for wattage"],
    badge: "Home electricals",
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/NI_CATALOG/IMAGES/ciw/2025/11/18/bb46596c-f2af-4e45-b415-0a25f0a2b6b5_NPI-060293_1_20251118_083514.png",
    source: "https://portal.goldmedalindia.com/experience-centre",
    sourceLabel: "Goldmedal product"
  },
  {
    id: "goldmedal-iconiq-water-heater",
    name: "Iconiq Storage Water Heater",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Water heating",
    description: "Goldmedal storage water heater for home bathrooms, with a vitreous enamel-coated tank and temperature control.",
    specs: ["10 L model shown", "5-star model range", "Ask for capacity"],
    badge: "Home electricals",
    image: "https://lntsufin.com/storage/mediafiles/catalog/live/17493-1302/original/17493-1302_image_1.jpg",
    source: "https://lntsufin.com/product/goldmedal-iconiq-10-l-5-star-storage-geysers/17493-1302",
    sourceLabel: "Product details"
  },
  {
    id: "goldmedal-curve-universal-socket",
    name: "Curve 6A Universal Socket",
    brand: "Goldmedal",
    category: "electricals",
    subcategory: "Modular switches & sockets",
    description: "Modular universal socket for household charging and appliance connections in a compatible switch plate.",
    specs: ["6A", "Curve series", "Ask for plate / colour"],
    badge: "Home electricals",
    image: "https://mykit.in/crm/public/uploads/product_images_1000x1000/curve6auniversalsocketgrey.jpg",
    source: "https://mykit.in/public/goldmedal-curve-6a-universal-socket-2m-metallic-grey",
    sourceLabel: "Product details"
  }
];

const CATEGORY_LABELS = {
  piping: "Pipes & fittings",
  bathware: "Bathware",
  pumps: "Pumps",
  electricals: "Electricals"
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const productById = new Map(PRODUCTS.map(product => [product.id, product]));
let currentCategory = "all";
let searchTerm = "";
let currentBrand = "all";
let toastTimeout;
let quotePayload = null;
let currentProductId = null;
let detailOpenedFromPage = false;

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("flowline-quote-list") || "{}");
    return Object.fromEntries(Object.entries(saved).filter(([id, quantity]) => productById.has(id) && Number(quantity) > 0).map(([id, quantity]) => [id, Math.floor(Number(quantity))]));
  } catch {
    return {};
  }
}

let cart = readCart();

function saveCart() {
  localStorage.setItem("flowline-quote-list", JSON.stringify(cart));
}

function productMatches(product) {
  const categoryMatch = currentCategory === "all" || product.category === currentCategory;
  const brandMatch = currentBrand === "all" || product.brand === currentBrand;
  const haystack = `${product.name} ${product.brand} ${product.description} ${product.subcategory} ${product.specs.join(" ")}`.toLowerCase();
  const searchMatch = !searchTerm || haystack.includes(searchTerm.toLowerCase());
  return categoryMatch && brandMatch && searchMatch;
}

function shareUrl(product) {
  const url = new URL(window.location.href);
  url.hash = `product-${product.id}`;
  return url.href;
}

function whatsappUrl(message) {
  const destination = SHOP.whatsapp ? `https://wa.me/${SHOP.whatsapp}` : "https://wa.me/";
  return `${destination}?text=${encodeURIComponent(message)}`;
}

function shareProduct(product) {
  const message = `Hello ${SHOP.name}, I’m enquiring about ${product.name} by ${product.brand}.\n\nProduct: ${shareUrl(product)}\nPlease share wholesale pricing and availability.`;
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

function renderProductCard(product) {
  const isInCart = Boolean(cart[product.id]);
  return `
    <article class="product-card" id="product-${product.id}">
      <div class="product-media">
        <span class="product-badge">${product.badge}</span>
        <button class="share-product" type="button" aria-label="Ask about ${product.name} on WhatsApp" data-share="${product.id}" title="Ask about this product on WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"/><path d="M9 8.3c.3-.5.6-.5.9-.5.2 0 .4 0 .6.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.2.2-.1.4 0 .6.5.8 1.2 1.5 2.1 2 .2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.2.4.3.4.5 0 .3-.2.8-.6 1.1-.4.4-1 .6-1.6.5-1.1-.2-2.4-.8-3.7-2-1.1-1-1.8-2.1-2-3.2-.1-.7.1-1.4.5-2Z"/></svg>
        </button>
        <button class="product-open" type="button" data-view-product="${product.id}" aria-label="View details for ${product.name}">
          <img src="${product.image}" alt="${product.brand} ${product.name}" loading="lazy" onerror="this.onerror=null;this.style.display='none';this.closest('.product-media').classList.add('image-fallback')" />
        </button>
        <span class="image-fallback-label" aria-hidden="true">${product.brand}</span>
      </div>
      <div class="product-info">
        <div class="product-topline"><span class="product-brand">${product.brand}</span><span class="product-category">${product.subcategory}</span></div>
        <h3 class="product-name"><button class="product-title-button" type="button" data-view-product="${product.id}" title="View product details">${product.name}</button></h3>
        <p class="product-description">${product.description}</p>
        <div class="product-specs">${product.specs.map(spec => `<span>${spec}</span>`).join("")}</div>
        <div class="product-bottom">
          <a class="source-link" href="${product.source}" target="_blank" rel="noreferrer">${product.sourceLabel} ↗</a>
          ${isInCart ? `
            <div class="product-quote-controls" aria-label="${product.name} quantity controls">
              <div class="product-qty-control" aria-label="Quantity ${cart[product.id]}">
                <button type="button" data-qty="${product.id}" data-delta="-1" aria-label="Decrease ${product.name} quantity; removes at one">−</button>
                <span>${cart[product.id]}</span>
                <button type="button" data-qty="${product.id}" data-delta="1" aria-label="Increase ${product.name} quantity">+</button>
              </div>
              <button class="product-remove" type="button" data-remove="${product.id}" aria-label="Remove ${product.name} from quote list" title="Remove from quote list">Remove</button>
            </div>` : `
            <button class="product-add" type="button" data-add="${product.id}" aria-label="Add ${product.name} to quote list">
              <svg class="add-plus" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>
              <span>Add to quote</span>
            </button>`}
        </div>
      </div>
    </article>`;
}

function renderProductDetails(productId) {
  const product = productById.get(productId);
  if (!product) return;
  const selected = Boolean(cart[productId]);
  const totalUnits = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  $("#detailCartCount").textContent = totalUnits;
  $("#productDetailContent").innerHTML = `
    <div class="product-detail-breadcrumb"><a href="#catalog" data-detail-back>Products</a><span>/</span><span>${CATEGORY_LABELS[product.category] || product.category}</span><span>/</span><strong>${product.name}</strong></div>
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <span class="product-detail-image-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.brand} ${product.name}" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('image-fallback')" />
        <span class="image-fallback-label" aria-hidden="true">${product.brand}</span>
      </div>
      <div class="product-detail-copy">
        <div class="product-detail-kicker"><span>${product.brand}</span><i></i><span>${product.subcategory}</span></div>
        <h1>${product.name}</h1>
        <p class="product-detail-description">${product.description}</p>
        <div class="product-detail-actions">
          ${selected ? `
            <div class="product-qty-control detail-qty-control" aria-label="Quantity ${cart[productId]}">
              <button type="button" data-qty="${productId}" data-delta="-1" aria-label="Decrease ${product.name} quantity; removes at one">−</button>
              <span>${cart[productId]}</span>
              <button type="button" data-qty="${productId}" data-delta="1" aria-label="Increase ${product.name} quantity">+</button>
            </div>
            <button class="product-remove detail-remove" type="button" data-remove="${productId}">Remove from quote</button>` : `
            <button class="button button-primary" type="button" data-detail-add="${productId}">Add to quote <span aria-hidden="true">+</span></button>`}
          <button class="button detail-whatsapp" type="button" data-detail-share="${productId}">Ask on WhatsApp <span aria-hidden="true">↗</span></button>
        </div>
        <p class="product-detail-note">Wholesale pricing and availability are confirmed by the trade desk. Add a quantity to your quote list to request pricing.</p>
      </div>
    </div>
    <section class="product-detail-info" aria-label="Product information">
      <div class="detail-overview-panel">
        <span class="eyebrow"><span class="eyebrow-line"></span> PRODUCT OVERVIEW</span>
        <h2>Product details</h2>
        <p>${product.description}</p>
        <p class="detail-overview-note">Use the supplier reference for the manufacturer's full product information, available sizes, finishes and installation requirements.</p>
      </div>
      <div class="detail-specification-panel">
        <span class="eyebrow"><span class="eyebrow-line"></span> SPECIFICATIONS</span>
        <h2>At a glance</h2>
        <dl>
          <div><dt>Brand</dt><dd>${product.brand}</dd></div>
          <div><dt>Category</dt><dd>${CATEGORY_LABELS[product.category] || product.category}</dd></div>
          <div><dt>Product type</dt><dd>${product.subcategory}</dd></div>
        </dl>
        <div class="product-detail-specs">${product.specs.map(spec => `<span>${spec}</span>`).join("")}</div>
        <a class="detail-source-link" href="${product.source}" target="_blank" rel="noreferrer">${product.sourceLabel} <span aria-hidden="true">↗</span></a>
      </div>
    </section>`;
}

function syncProductRoute() {
  const productId = window.location.hash.startsWith("#product-") ? window.location.hash.slice("#product-".length) : "";
  if (productById.has(productId)) {
    const detailView = $("#productDetailView");
    if (currentProductId !== productId) detailView.scrollTop = 0;
    currentProductId = productId;
    detailView.hidden = false;
    detailView.classList.add("open");
    detailView.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    renderProductDetails(productId);
    return;
  }
  currentProductId = null;
  const detailView = $("#productDetailView");
  detailView.classList.remove("open");
  detailView.hidden = true;
  detailView.setAttribute("aria-hidden", "true");
  if (!$("#cartDrawer").classList.contains("open") && !$("#quoteModal").classList.contains("open")) {
    document.body.classList.remove("no-scroll");
  }
}

function openProductDetails(productId) {
  if (!productById.has(productId)) return;
  const targetHash = `#product-${productId}`;
  if (window.location.hash !== targetHash) {
    detailOpenedFromPage = true;
    history.pushState({ productId }, "", targetHash);
  }
  syncProductRoute();
}

function closeProductDetails() {
  if (!currentProductId) return;
  if (detailOpenedFromPage) {
    detailOpenedFromPage = false;
    history.back();
    return;
  }
  history.replaceState(null, "", "#catalog");
  syncProductRoute();
}

function renderProducts() {
  const filteredProducts = PRODUCTS.filter(productMatches);
  const productGrid = $("#productGrid");
  productGrid.innerHTML = filteredProducts.map(renderProductCard).join("");
  $("#emptyState").hidden = filteredProducts.length > 0;
  productGrid.hidden = filteredProducts.length === 0;
  renderActiveFilters();
}

function renderActiveFilters() {
  const active = $("#activeFilters");
  const chips = [];
  if (currentCategory !== "all") chips.push(`<button type="button" class="filter-chip" data-clear-filter="category">${CATEGORY_LABELS[currentCategory]} <span>×</span></button>`);
  if (currentBrand !== "all") chips.push(`<button type="button" class="filter-chip" data-clear-filter="brand">${currentBrand} <span>×</span></button>`);
  if (searchTerm) chips.push(`<button type="button" class="filter-chip" data-clear-filter="search">“${escapeHtml(searchTerm)}” <span>×</span></button>`);
  active.innerHTML = chips.join("");
  active.hidden = chips.length === 0;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function updateCart({ refreshQuote = true } = {}) {
  saveCart();
  const ids = Object.keys(cart);
  const totalUnits = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  $("#cartCount").textContent = totalUnits;
  $("#drawerCount").textContent = `(${ids.length})`;
  $("#drawerItemTotal").textContent = `${ids.length} product${ids.length === 1 ? "" : "s"} · ${totalUnits} unit${totalUnits === 1 ? "" : "s"}`;
  $("#cartEmpty").classList.toggle("show", ids.length === 0);
  $("#drawerFooter").classList.toggle("hidden", ids.length === 0);
  $("#clearCart").style.visibility = ids.length ? "visible" : "hidden";
  $("#cartItems").innerHTML = ids.map(id => {
    const product = productById.get(id);
    return `<div class="cart-row" data-cart-row="${id}">
      <div class="cart-row-image"><img src="${product.image}" alt="" onerror="this.style.display='none'" /></div>
      <div class="cart-row-meta"><span class="cart-row-brand">${product.brand}</span><h3 class="cart-row-title">${product.name}</h3><div class="qty-control"><button type="button" data-qty="${id}" data-delta="-1" aria-label="Decrease ${product.name} quantity; removes at one">−</button><span>${cart[id]}</span><button type="button" data-qty="${id}" data-delta="1" aria-label="Increase ${product.name} quantity">+</button></div></div>
      <div class="cart-row-actions"><button type="button" class="remove-item" data-remove="${id}" aria-label="Remove ${product.name} from quote list" title="Remove from quote list">×</button></div>
    </div>`;
  }).join("");
  renderProducts();
  if (refreshQuote) renderQuoteProducts();
  if (currentProductId) renderProductDetails(currentProductId);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
  const product = productById.get(id);
  showToast(`${product.name} added to your quote list`);
}

function changeQuantity(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  updateCart();
}

function setQuantity(id, value) {
  if (!cart[id]) return;
  const quantityField = $$("#quoteProductList [data-quote-qty]").find(input => input.dataset.quoteQty === id);
  const quantity = Math.floor(Number(value));
  if (!Number.isFinite(quantity) || quantity < 1) {
    showToast("Enter a quantity of at least 1, or remove the product");
    if (quantityField) quantityField.value = cart[id];
    return;
  }
  cart[id] = quantity;
  if (quantityField) quantityField.value = quantity;
  updateCart({ refreshQuote: false });
}

function removeFromCart(id) {
  delete cart[id];
  updateCart();
}

function openCart() {
  $("#overlay").classList.add("open");
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  $("#overlay").classList.remove("open");
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  if (!$("#quoteModal").classList.contains("open") && !currentProductId) document.body.classList.remove("no-scroll");
}

function openQuoteModal() {
  if (!Object.keys(cart).length) {
    showToast("Add at least one product to start a quote");
    closeQuoteModal();
    closeCart();
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
    return;
  }
  closeCart();
  $("#quoteForm").hidden = false;
  $("#quoteSuccess").hidden = true;
  renderQuoteProducts();
  $("#quoteModal").classList.add("open");
  $("#quoteModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  setTimeout(() => $("#quoteModal input[name='name']").focus(), 200);
}

function closeQuoteModal() {
  $("#quoteModal").classList.remove("open");
  $("#quoteModal").setAttribute("aria-hidden", "true");
  if (!currentProductId && !$("#cartDrawer").classList.contains("open")) document.body.classList.remove("no-scroll");
}

function renderQuoteProducts() {
  if (!$("#quoteProductList")) return;
  const ids = Object.keys(cart);
  $("#quoteProductCount").textContent = ids.length;
  $("#quoteProductList").innerHTML = ids.length ? ids.map(id => {
    const product = productById.get(id);
    return `<div class="quote-product-row">
      <div class="quote-product-name"><span>${product.brand}</span><strong>${product.name}</strong></div>
      <label class="quote-quantity-field">Qty<input type="number" min="1" step="1" required inputmode="numeric" value="${cart[id]}" data-quote-qty="${id}" aria-label="Quantity for ${product.name}" /></label>
      <button class="quote-product-remove" type="button" data-quote-remove="${id}" aria-label="Remove ${product.name} from quote">Remove</button>
    </div>`;
  }).join("") : `<p class="quote-no-products">No products selected. Close this form and add products to your quote list.</p>`;
}

function buildQuotePayload(formData) {
  return {
    shop: SHOP.name,
    customer: {
      name: formData.get("name").trim(),
      mobile: formData.get("phone").trim(),
      email: formData.get("email").trim(),
      pincode: formData.get("pincode").trim(),
      area: formData.get("area").trim(),
      notes: formData.get("notes").trim()
    },
    items: Object.entries(cart).map(([id, quantity]) => {
      const product = productById.get(id);
      return { id, name: product.name, brand: product.brand, quantity, category: product.category, productUrl: shareUrl(product) };
    }),
    submittedAt: new Date().toISOString()
  };
}

// Future backend integration point: replace this local-only response with fetch('/api/quotes', ...).
function submitQuote(payload) {
  quotePayload = payload;
  const firstName = payload.customer.name.split(/\s+/)[0] || "there";
  $("#successMessage").textContent = `Thanks, ${firstName}. This preview has prepared your request, but it isn’t connected to the backend yet. Continue on WhatsApp to send it to the trade desk.`;
  $("#quoteForm").hidden = true;
  $("#quoteSuccess").hidden = false;
}

function quoteMessage(payload) {
  const lines = payload.items.map(item => `• ${item.quantity} × ${item.brand} ${item.name}\n  ${item.productUrl}`).join("\n");
  const customer = payload.customer;
  return `Hello ${SHOP.name}, please prepare a wholesale quote for this project.\n\n${lines}\n\nName: ${customer.name}\nMobile: ${customer.mobile}\nEmail: ${customer.email}\nDelivery pincode: ${customer.pincode}${customer.area ? `\nArea: ${customer.area}` : ""}${customer.notes ? `\nNotes: ${customer.notes}` : ""}`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function setCategory(category) {
  currentCategory = category;
  $$(".category-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === category));
  renderProducts();
}

function clearFilters() {
  currentCategory = "all";
  currentBrand = "all";
  searchTerm = "";
  $("#productSearch").value = "";
  $("#brandFilter").value = "all";
  $$(".category-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === "all"));
  renderProducts();
}

function init() {
  $("#currentYear").textContent = new Date().getFullYear();
  $("#allProductCount").textContent = PRODUCTS.length;
  $("#phoneDisplay").textContent = SHOP.phoneDisplay;
  $("#callLink").href = `tel:${SHOP.phoneLink}`;
  $("#emailDisplay").textContent = SHOP.email;
  $("#emailLink").href = `mailto:${SHOP.email}`;
  $("#whatsappContact").href = whatsappUrl(`Hello ${SHOP.name}, I have a wholesale enquiry.`);

  const brands = [...new Set(PRODUCTS.map(product => product.brand))];
  $("#brandFilter").insertAdjacentHTML("beforeend", brands.map(brand => `<option value="${escapeHtml(brand)}">${escapeHtml(brand)}</option>`).join(""));

  renderProducts();
  updateCart();

  $("#productSearch").addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    renderProducts();
  });
  $("#brandFilter").addEventListener("change", event => {
    currentBrand = event.target.value;
    renderProducts();
  });
  $$(".category-tab").forEach(tab => tab.addEventListener("click", () => setCategory(tab.dataset.category)));
  $("#productGrid").addEventListener("click", event => {
    const addButton = event.target.closest("[data-add]");
    const shareButton = event.target.closest("[data-share]");
    const quantityButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");
    const detailsButton = event.target.closest("[data-view-product]");
    const productCard = event.target.closest(".product-card");
    if (addButton) addToCart(addButton.dataset.add);
    if (shareButton) shareProduct(productById.get(shareButton.dataset.share));
    if (quantityButton) changeQuantity(quantityButton.dataset.qty, Number(quantityButton.dataset.delta));
    if (removeButton) removeFromCart(removeButton.dataset.remove);
    if (detailsButton) openProductDetails(detailsButton.dataset.viewProduct);
    else if (productCard && !event.target.closest("button,a,input,select,textarea")) openProductDetails(productCard.id.slice("product-".length));
  });
  $("#cartItems").addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");
    if (quantityButton) changeQuantity(quantityButton.dataset.qty, Number(quantityButton.dataset.delta));
    if (removeButton) removeFromCart(removeButton.dataset.remove);
  });
  $("#quoteProductList").addEventListener("change", event => {
    const quantityInput = event.target.closest("[data-quote-qty]");
    if (quantityInput) setQuantity(quantityInput.dataset.quoteQty, quantityInput.value);
  });
  $("#quoteProductList").addEventListener("click", event => {
    const removeButton = event.target.closest("[data-quote-remove]");
    if (removeButton) removeFromCart(removeButton.dataset.quoteRemove);
  });
  $("#productDetailView").addEventListener("click", event => {
    const backButton = event.target.closest("[data-detail-back]") || event.target.closest("#detailBack");
    const addButton = event.target.closest("[data-detail-add]");
    const shareButton = event.target.closest("[data-detail-share]");
    const quantityButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");
    if (backButton) {
      event.preventDefault();
      closeProductDetails();
    }
    if (addButton) addToCart(addButton.dataset.detailAdd);
    if (shareButton) shareProduct(productById.get(shareButton.dataset.detailShare));
    if (quantityButton) changeQuantity(quantityButton.dataset.qty, Number(quantityButton.dataset.delta));
    if (removeButton) removeFromCart(removeButton.dataset.remove);
  });
  $("#detailCart").addEventListener("click", openCart);
  window.addEventListener("popstate", () => {
    detailOpenedFromPage = false;
    syncProductRoute();
  });
  $("#activeFilters").addEventListener("click", event => {
    const clearButton = event.target.closest("[data-clear-filter]");
    if (!clearButton) return;
    if (clearButton.dataset.clearFilter === "category") setCategory("all");
    if (clearButton.dataset.clearFilter === "brand") { currentBrand = "all"; $("#brandFilter").value = "all"; renderProducts(); }
    if (clearButton.dataset.clearFilter === "search") { searchTerm = ""; $("#productSearch").value = ""; renderProducts(); }
  });

  $("#openCart").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeCart);
  $("#overlay").addEventListener("click", closeCart);
  $("#clearCart").addEventListener("click", () => { cart = {}; updateCart(); showToast("Quote list cleared"); });
  $("#browseProducts").addEventListener("click", () => { closeCart(); document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" }); });
  $("#openQuote").addEventListener("click", openQuoteModal);
  $("#tradeQuote").addEventListener("click", openQuoteModal);
  $("#heroQuote").addEventListener("click", () => {
    if (Object.keys(cart).length) openQuoteModal();
    else { showToast("Choose products first and we’ll build the quote together"); document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" }); }
  });
  $("#closeQuote").addEventListener("click", closeQuoteModal);
  $("#doneQuote").addEventListener("click", closeQuoteModal);
  $("#quoteModal").addEventListener("click", event => { if (event.target === $("#quoteModal")) closeQuoteModal(); });
  $("#quoteForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!Object.keys(cart).length) {
      showToast("Add at least one product to your quote");
      return;
    }
    if (!event.currentTarget.reportValidity()) return;
    submitQuote(buildQuotePayload(new FormData(event.currentTarget)));
  });
  $("#sendWhatsAppQuote").addEventListener("click", () => {
    if (quotePayload) window.open(whatsappUrl(quoteMessage(quotePayload)), "_blank", "noopener,noreferrer");
  });
  $("#clearFilters").addEventListener("click", clearFilters);
  $$("[data-jump-category]").forEach(card => card.addEventListener("click", () => setCategory(card.dataset.jumpCategory)));
  $("#mobileSearchToggle").addEventListener("click", () => {
    $("#productSearch").focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  detailOpenedFromPage = false;
  syncProductRoute();
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      if ($("#quoteModal").classList.contains("open")) closeQuoteModal();
      else if ($("#cartDrawer").classList.contains("open")) closeCart();
      else if (currentProductId) closeProductDetails();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => $("#productSearch").focus(), 100);
    }
  });
}

init();
