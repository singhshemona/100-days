import type { LatLngTuple } from 'leaflet';
import type { Position } from '../types';

export const POSITION_CENTER: LatLngTuple = [
  40.449126547583056, -79.93879904745783,
];

export const TYPES_OF_THINKING = [
  'think',
  'innovative',
  'elegant',
  'nostalgic',
  'proud',
  'honest',
] as const;

export const MARKER_COLORS: Record<string, string> = {
  innovative: '#92CFF2',
  elegant: '#81B29A',
  nostalgic: '#F2CC8F',
  proud: '#E07A5F',
  honest: '#5A6087',
};

export const POSITIONS_ALL: Position[] = [
  {
    date: '08-26',
    lat: 40.46028948607216,
    lng: -79.92280876101742,
    title: 'Cinnaholic',
    typeOfThinking: 'honest',
    why: `The bakery's open display cases and transparent ingredient presentation honestly showcase 
          the customizable dessert creation process through straightforward, unpretentious design.`,
  },
  {
    date: '08-27',
    lat: 40.45590615329833,
    lng: -79.97708104745756,
    title: 'Blumengarten',
    typeOfThinking: 'elegant',
    why: `The florist's carefully curated displays and refined presentation of
          botanical arrangements demonstrate elegance through delicate composition and
          attention to visual harmony in spatial design.`,
  },
  {
    date: '08-28',
    lat: 40.464395876188746,
    lng: -79.93301390334561,
    title: 'Pittsburgh Glass Center',
    topFive: true,
    typeOfThinking: 'innovative',
    why: `The glass center's specialized studios and exhibition spaces innovatively combine functional 
          workshop areas with display galleries, creating dynamic spaces that blur the line 
          between production and presentation.`,
  },
  {
    date: '08-29',
    lat: 40.46507972194982,
    lng: -79.93656983218132,
    title: 'Third Space Bakery',
    typeOfThinking: 'innovative',
    why: `The bakery innovatively combines artisanal baking with community gathering space 
          through flexible design that adapts from morning café to evening social venue.`,
  },
  {
    date: '08-30',
    lat: 40.453029378771134,
    lng: -79.98236727728863,
    title: "Grandpa Joe's Candy Shop",
    typeOfThinking: 'nostalgic',
    why: `The two-floor candy shop's floor-to-ceiling vintage candy displays and retro
          theming transport visitors back to childhood through deliberate spatial design
          that evokes old-fashioned candy stores.`,
  },
  {
    date: '08-31',
    lat: 40.46218187744937,
    lng: -79.94950560334571,
    title: "Gryphon's Tea",
    typeOfThinking: 'elegant',
    why: `The tea shop's refined textiles, carefully controlled lighting, and layered spatial 
          arrangements embody elegance through sophisticated atmospheric design.`,
  },
  {
    date: '09-01',
    lat: 40.44256047667357,
    lng: -79.93973935916755,
    title: 'De Fer (Resnik Hall)',
    typeOfThinking: 'innovative',
    why: `The cafe's welcoming staff and flexible seating configurations allow an option for 
          students that does not feel like a traditional dining hall.`,
  },
  {
    date: '09-02',
    lat: 40.462670128045545,
    lng: -79.94609739992565,
    title: 'Friendship Parklet',
    typeOfThinking: 'honest',
    why: `This community space's accessible seating and open layout honestly communicate inclusive 
          public design that welcomes neighborhood gathering without barriers.`,
  },
  {
    date: '09-03',
    lat: 40.44467124198362,
    lng: -79.91690981868983,
    title: 'Five Points Bakeshop',
    typeOfThinking: 'honest',
    why: `The local cornershop bakery's open kitchen design and simple storefront honestly showcase the 
          artisanal baking process, creating trust through transparency and authentic craftsmanship 
          display.`,
  },
  {
    date: '09-04',
    lat: 40.44150901080421,
    lng: -79.94386484937652,
    title: 'Hunt Library',
    typeOfThinking: 'innovative',
    why: `Hunt Library innovatively integrates technology and traditional collections through 
          flexible spaces that adapt to evolving research and collaborative study needs.`,
  },
  {
    date: '09-05',
    lat: 40.444721731931374,
    lng: -79.95328384937639,
    title: 'Cathedral of Learning',
    typeOfThinking: 'proud',
    why: `Standing at 535 feet as the tallest educational building in the Western Hemisphere, 
          this Gothic Revival tower embodies institutional pride through its monumental scale 
          and vertical aspiration.`,
  },
  {
    date: '09-06',
    lat: 40.45754924935277,
    lng: -79.96579914852055,
    title: 'Kaibur Coffee',
    typeOfThinking: 'honest',
    why: `The small neighborhood café's transparent approach to specialty coffee preparation
          and straightforward vegan menu presentation embodies honesty through unpretentious
          spatial design and authentic community focus.`,
  },
  {
    date: '09-07',
    lat: 40.45015988351104,
    lng: -79.95781631976344,
    title: 'Pittsburgh Bus',
    typeOfThinking: 'honest',
    why: `Pittsburgh buses feature functional design with clear signage and 
          utilitarian seating that honestly communicates their purpose as public transportation 
          without unnecessary ornamentation.`,
  },
  {
    date: '09-08',
    lat: 40.4623141544175,
    lng: -79.95046278985312,
    title: 'Emilichka',
    typeOfThinking: 'elegant',
    why: `This nursery's sophisticated interior design with carefully chosen materials 
          and refined spatial proportions creates an elegant outdoor atmosphere.`,
  },
  {
    date: '09-09',
    lat: 40.464391286243064,
    lng: -79.95338778985302,
    title: "Jak's Bakery",
    typeOfThinking: 'honest',
    why: `The neighborhood bakery's transparent production areas and straightforward display cases 
          honestly showcase the baking process and fresh products without pretense.`,
  },
  {
    date: '09-10',
    lat: 40.461514918143706,
    lng: -79.93003853033083,
    title: 'Enright Community Garden',
    typeOfThinking: 'nostalgic',
    why: `This little green oasis in the city evokes nostalgia through its traditional garden layout,
    wooden benches, and community-centric design that recalls simpler times and neighborhood togetherness.`,
  },
  {
    date: '09-11',
    lat: 40.46105146871568,
    lng: -79.92506147450995,
    title: 'East Liberty Church',
    typeOfThinking: 'proud',
    why: `The church's imposing architecture and prominent community presence embody spiritual and 
          civic pride through traditional religious design elements that command respect and 
          reverence.`,
  },
  {
    date: '09-12',
    lat: 40.44408076558122,
    lng: -79.948951245675,
    title: 'Carnegie Museum of Art',
    typeOfThinking: 'elegant',
    why: `The museum's classical architecture and carefully proportioned galleries demonstrate elegance 
          through timeless spatial relationships that enhance artwork presentation and visitor 
          circulation.`,
  },
  {
    date: '09-13',
    lat: 40.452446952651705,
    lng: -79.9824713897867,
    title: 'Yinzers in the Burgh',
    typeOfThinking: 'proud',
    why: `The Pittsburgh sports merchandise store celebrates local identity through bold displays
          of team colors and memorabilia that spatially communicate civic pride and regional loyalty`,
  },
  {
    date: '09-14',
    lat: 40.46109094675969,
    lng: -79.92651131683834,
    title: 'Carnegie Library - East Liberty',
    typeOfThinking: 'proud',
    why: `The renovated library's bold contemporary architecture and prominent community positioning 
          demonstrate civic pride through confident public design that celebrates learning and 
          literacy.`,
  },
  {
    date: '09-15',
    lat: 40.44116718373999,
    lng: -79.95796233218253,
    title: 'CAVA',
    typeOfThinking: 'innovative',
    why: `The fast-casual restaurant innovatively combines assembly-line service with 
          Mediterranean cuisine through modernized ordering and customization systems.`,
  },
  {
    date: '09-16',
    lat: 40.4558882806367,
    lng: -79.9315512204704,
    title: 'Buenatarde',
    typeOfThinking: 'nostalgic',
    why: `The intimate café's casual lighting and informal seating embody 
          a family sports bar through a relaxed atmosphere that elevates fast casual food.`,
  },
  {
    date: '09-17',
    lat: 40.443309509072265,
    lng: -79.94209706101826,
    title: 'Entropy+',
    typeOfThinking: 'innovative',
    why: `The convenience store innovatively integrates campus life through strategic location 
          and adaptive inventory that responds to student needs and schedules.`,
  },
  {
    date: '09-18',
    lat: 40.45853930117728,
    lng: -79.9630423149251,
    title: 'Melwood Avenue Overlook',
    typeOfThinking: 'proud',
    why: `This gathering space with panoramic city views embodies civic pride through elevated 
          perspective that celebrates Pittsburgh's architectural and natural landscape.`,
  },
  {
    date: '09-19',
    lat: 40.45099524168032,
    lng: -79.89608606464809,
    title: 'Ascend',
    typeOfThinking: 'innovative',
    why: `The climbing gym's modular wall systems and dynamic route-setting spaces
          innovatively transform vertical architecture into interactive recreational
          environments that constantly evolve.`,
  },
  {
    date: '09-20',
    lat: 40.46862841019188,
    lng: -79.95175821868871,
    title: 'St. Mary Cemetery',
    typeOfThinking: 'nostalgic',
    why: `The cemetery's historic landscaping, traditional monuments, and quiet pathways create a 
          contemplative space that evokes nostalgia for Pittsburgh's historical community.`,
  },
  {
    date: '09-21',
    lat: 40.434802922729176,
    lng: -79.92306507670973,
    title: 'Meccha Matcha',
    typeOfThinking: 'elegant',
    why: `The minimalist tea bar's zen-inspired design and natural materials embody elegance 
          through restrained aesthetic that honors traditional tea culture.`,
  },
  {
    date: '09-22',
    lat: 40.455167173524046,
    lng: -79.97152918793817,
    title: 'West Penn Park',
    typeOfThinking: 'honest',
    why: `The neighborhood playground's simple recreational equipment and open design honestly 
          communicate accessible public space without unnecessary ornamentation.`,
  },
  {
    date: '09-23',
    lat: 40.44973800164247,
    lng: -79.92554380328042,
    title: 'James Laughlin Music Hall',
    typeOfThinking: 'elegant',
    why: `The concert hall's refined acoustical design and carefully proportioned performance 
          space embody elegance through architectural sophistication that enhances musical 
          experience.`,
  },
  {
    date: '09-24',
    lat: 40.46136581693344,
    lng: -79.94817477265927,
    title: 'White Whale Bookstore',
    typeOfThinking: 'nostalgic',
    why: `The independent bookstore's cozy, intimate spaces with worn wooden shelves and reading 
          nooks evoke nostalgic feelings of traditional literary culture and contemplative 
          browsing.`,
  },
  {
    date: '09-25',
    lat: 40.43802865098028,
    lng: -79.92052804930684,
    title: 'Kyo Matcha',
    typeOfThinking: 'elegant',
    why: `The Japanese tea house's refined minimalist aesthetic and precise spatial proportions
          embody elegance through restrained design that honors traditional tea ceremony principles.`,
  },
  {
    date: '09-26',
    lat: 40.45259912098113,
    lng: -79.9820494186222,
    title: 'S&D Polish Deli',
    typeOfThinking: 'honest',
    why: `The authentic deli's straightforward counter service and visible food preparation
          areas honestly showcase traditional Polish culinary practices through transparent,
          no-frills spatial organization.`,
  },
  {
    date: '09-27',
    lat: 40.4592911601821,
    lng: -79.94457776095089,
    title: 'Bloomfield Saturday Market',
    typeOfThinking: 'honest',
    why: `The weekly farmers market's open-air layout and direct vendor interactions authentically 
          represent local food cultures through transparent, community-focused design.`,
  },
  {
    date: '09-28',
    lat: 40.464530398081735,
    lng: -79.96636451868885,
    title: 'Mikkusu Matcha Tea House',
    typeOfThinking: 'elegant',
    why: `The tea house's carefully composed zen-like spaces and textured surfaces embody 
          elegance through refined Japanese design principles and meditative atmosphere.`,
  },
  {
    date: '09-29',
    lat: 40.43407686035492,
    lng: -79.92320637629405,
    title: 'Allegro Bakery',
    topFive: true,
    typeOfThinking: 'honest',
    why: `The neighborhood bakery's open baking stations and simple display cases present
          artisanal bread-making through transparency that builds trust with customers.`,
  },
  {
    date: '09-30',
    lat: 40.442953819521236,
    lng: -79.94660714668582,
    title: 'Wild Blue Sushi',
    typeOfThinking: 'elegant',
    why: `The cafe's speed, minimalist aesthetic, and carefully curated presentation 
          counter exemplify elegance through refined spatial composition and visual restraint.`,
  },
  {
    date: '10-01',
    lat: 40.43652430372065,
    lng: -79.90761246641084,
    title: 'Frick Environmental Center',
    typeOfThinking: 'innovative',
    why: `The LEED Platinum building innovatively demonstrates sustainable design through 
          visible environmental systems and educational exhibits integrated into architecture.`,
  },
  {
    date: '10-02',
    lat: 40.442379652561755,
    lng: -79.94681449964521,
    title: 'TechSpark',
    typeOfThinking: 'innovative',
    why: `TechSpark's maker-space environment encourages creative experimentation through
          flexible layouts, modular workstations, and technology integration that adapts to
          various project needs.`,
  },
  {
    date: '10-03',
    lat: 40.46391390392825,
    lng: -79.936813745674,
    title: 'The Octopus Garden',
    typeOfThinking: 'innovative',
    why: `This quirky outdoor space transforms how it feels to be in a garden through eclectic design and 
          unexpected color combinations that challenge conventional nature design.`,
  },
  {
    date: '10-04',
    lat: 40.443040328223994,
    lng: -79.94581964935432,
    title: 'La Prima Espresso Company',
    typeOfThinking: 'elegant',
    why: `The café's refined Italian aesthetic and carefully composed seating arrangements 
          embody elegance through sophisticated coffee culture and intimate atmosphere.`,
  },
  {
    date: '10-05',
    lat: 40.44565640761068,
    lng: -79.9933056186226,
    title: "Eide's Entertainment",
    typeOfThinking: 'nostalgic',
    why: `The comic book and gaming store's vintage memorabilia displays and traditional
    shop layout evoke nostalgic feelings of classic geek culture and specialized
    collecting communities.`,
  },
  {
    date: '10-06',
    lat: 40.4352536531001,
    lng: -79.92260944561006,
    title: "Dobra's Tea",
    typeOfThinking: 'elegant',
    why: `The multi-room tea house's richly layered textiles and cushioned seating embody 
          elegance through sophisticated global design that creates immersive atmosphere.`,
  },
  {
    date: '10-07',
    lat: 40.44306410007853,
    lng: -79.94667971402104,
    title: 'Nano Lab',
    typeOfThinking: 'innovative',
    why: `The lab innovatively houses cutting-edge nanotechnology research through spotless 
          design and advanced equipment integration.`,
  },
  {
    date: '10-08',
    lat: 40.45439143728165,
    lng: -79.97955601862215,
    title: 'Kindred Cycles',
    typeOfThinking: 'honest',
    why: `The community bike shop's open repair area and workspace honestly showcase cycling 
          knowledge through transparent, accessible design that demystifies bike maintenance.`,
  },
  {
    date: '10-09',
    lat: 40.45195615384435,
    lng: -79.93234870328033,
    title: 'Jitters',
    typeOfThinking: 'honest',
    why: `The neighborhood café's to-the-point service, simple seating arrangements, and
    unpretentious atmosphere communicate its purpose as a functional coffee shop
    without unnecessary embellishment.`,
  },
  {
    date: '10-10',
    lat: 40.42898803599787,
    lng: -79.96480265037795,
    title: 'Hofbräuhaus Pittsburgh',
    typeOfThinking: 'proud',
    why: `The massive Bavarian beer hall's authentic architecture,
    imported decorative elements, and grand communal tables embody cultural
    pride through confident celebration of German heritage and tradition.`,
  },
  {
    date: '10-11',
    lat: 40.42757653440887,
    lng: -79.96523761669081,
    title: "Jeni's Ice Cream",
    typeOfThinking: 'elegant',
    why: `The ice cream shop's clean aesthetic, carefully curated flavor displays,
    and refined presentation embody elegance through minimalist design that
    elevates the artisanal ice cream experience.`,
  },
  {
    date: '10-12',
    lat: 40.4503576267833,
    lng: -79.98749999454853,
    title: 'City Grows',
    typeOfThinking: 'honest',
    why: `The plant shop's visible growing spaces and educational programming demonstrate 
          sustainable agriculture through transparent community food production.`,
  },
  {
    date: '10-13',
    lat: 40.45157704410084,
    lng: -79.93414110341142,
    title: 'Amazing Books and Records',
    typeOfThinking: 'nostalgic',
    why: `The used bookstore's floor-to-ceiling shelves, vintage vinyl displays,
    and maze-like layout evoke nostalgic feelings of traditional browsing
    culture and analog media discovery`,
  },
  {
    date: '10-14',
    lat: 40.4516865166816,
    lng: -79.98352722153524,
    title: "Lucy's Handmade Souvenirs",
    typeOfThinking: 'honest',
    why: `The gift shop's authentic handcrafted displays honestly present local artisan work through 
          genuine neighborhood craft presentation without pretense.`,
  },
  {
    date: '10-15',
    lat: 40.448755397103085,
    lng: -79.92641103396437,
    title: 'Jennie King Mellon Library',
    typeOfThinking: 'innovative',
    why: `The specialized music library innovatively combines score collections with acoustically 
          designed spaces that support both research and performance preparation.`,
  },
  {
    date: '10-16',
    lat: 40.45067648552763,
    lng: -79.98443000328032,
    title: 'Novaria',
    typeOfThinking: 'innovative',
    why: `This cafe's origin story and cozy layout are a work of art, adapting to showcase diverse product
    categories through modular design.`,
  },
  {
    date: '10-17',
    lat: 40.45156239062346,
    lng: -79.93358281677385,
    title: 'Kendra Scott',
    typeOfThinking: 'elegant',
    why: `The jewelry boutique's refined lighting, minimalist fixtures, and
    carefully composed display cases embody elegance through sophisticated
    spatial design that showcases products as precious objects.`,
  },
  {
    date: '10-18',
    lat: 40.452293347918854,
    lng: -79.98292148793834,
    title: "Mery's Gifts and Craft",
    typeOfThinking: 'honest',
    why: `The local gift shop's open displays and handmade products communicate 
          genuine neighborhood hospitality through unpretentious presentation.`,
  },
  {
    date: '10-19',
    lat: 40.45101352764681,
    lng: -79.9863069186223,
    title: "Heiber's Pharmacy",
    typeOfThinking: 'nostalgic',
    why: `The neighborhood pharmacy's history remains unchanged in the design, with a
    traditional apothecary styling, and operations that
    communicate trustworthy healthcare delivery through familiar design.`,
  },
  {
    date: '10-20',
    lat: 40.443217870656696,
    lng: -79.92674988978719,
    title: 'Wightman Park',
    typeOfThinking: 'honest',
    why: `The neighborhood park's playground equipment and open spaces  
          provide accessible recreation through functional, welcoming public design.`,
  },
  {
    date: '10-21',
    lat: 40.46072371996541,
    lng: -79.899420351479,
    title: 'The Hindu Jain Temple',
    typeOfThinking: 'proud',
    why: `The temple's ornate architecture, traditional carved elements,
    and prominent community position embody spiritual and cultural pride
    through confident expression of Hindu and Jain identity. (This is in reality
    more towards the east, but placed here to be within the map viewing range).`,
  },
  {
    date: '10-22',
    lat: 40.45141626257258,
    lng: -79.98351641862233,
    title: 'Pennsylvania Macaroni Company',
    typeOfThinking: 'nostalgic',
    why: `The Italian market's vintage signage, old-world product displays,
    and traditional deli counter evoke nostalgic feelings of immigrant
    heritage and classic Strip District shopping culture.`,
  },
  {
    date: '10-23',
    lat: 40.449330658632164,
    lng: -79.93879904745788,
    title: 'Shadyside Presbyterian Church',
    typeOfThinking: 'proud',
    why: `The historic church's Gothic Revival architecture and prominent
    corner location embody institutional pride through traditional religious
    design that commands respect and spiritual reverence.`,
  },
  {
    date: '10-24',
    lat: 40.45202267430673,
    lng: -79.98501093211578,
    title: 'Novo Asian Food Hall',
    typeOfThinking: 'innovative',
    why: `The food hall brings together diverse Asian cuisines through shared 
          seating and multiple vendor concepts in adaptive market design.`,
  },
  {
    date: '10-25',
    lat: 40.45141697614656,
    lng: -79.98581996095132,
    title: 'The Terminal',
    typeOfThinking: 'innovative',
    why: `The adaptive reuse of industrial space into creative studios and
    retail innovatively transforms warehouse architecture through flexible
    design that celebrates each place's uniqueelements.`,
  },
  {
    date: '10-26',
    lat: 40.4519897950756,
    lng: -79.98326291492546,
    title: 'Reyna Foods',
    typeOfThinking: 'honest',
    why: `The Latin American grocery's product displays and
    authentic ingredient selection showcase cultural food
    traditions through unpretentious marketplace design.`,
  },
  {
    date: '10-27',
    lat: 40.45113558364727,
    lng: -79.93400108793838,
    title: 'Apple Shadyside',
    typeOfThinking: 'elegant',
    why: `The Apple Store's minimalist white interior, precisely arranged
    product tables, and seamless integration of technology embody
    elegance through refined simplicity and spatial restraint.`,
  },
  {
    date: '10-28',
    lat: 40.43786995400669,
    lng: -79.92362814305763,
    title: 'Jewish Community Center',
    typeOfThinking: 'honest',
    why: `The community center's multipurpose spaces and welcoming design communicates 
          inclusive programming through transparent, accessible architecture.`,
  },
  {
    date: '10-29',
    lat: 40.45101299702894,
    lng: -79.98444145037102,
    title: 'Penn Avenue Pottery',
    typeOfThinking: 'innovative',
    why: `The ceramic studio's visible production areas and interactive
    workshop spaces innovatively blend retail with education through
    transparent design that demystifies the pottery-making process.`,
  },
  {
    date: '10-30',
    lat: 40.453157648261055,
    lng: -79.93185102100486,
    title: 'Blick Art Materials',
    typeOfThinking: 'innovative',
    why: `The art supply store innovatively organizes diverse creative materials through 
          intuitive categorization that supports artistic exploration and discovery.`,
  },
  {
    date: '10-31',
    lat: 40.451021963386985,
    lng: -79.98497777444484,
    title: 'The PA Market',
    typeOfThinking: 'nostalgic',
    why: `The historic public market's traditional vendor stalls and preserved
    architectural details evoke nostalgic feelings of old Pittsburgh commerce
    and neighborhood market culture.`,
  },
  {
    date: '11-01',
    lat: 40.45353554021122,
    lng: -79.92264587641161,
    title: "Darcy's Apartment",
    typeOfThinking: 'nostalgic',
    why: `This thoughtfully crafted living space reflects a welcoming 
          atmosphere through genuine touches that embrace individuality.`,
  },
  {
    date: '11-02',
    lat: 40.45165085458623,
    lng: -79.9332835167739,
    title: 'Patagonia',
    typeOfThinking: 'honest',
    why: `The outdoor retailer's transparent sustainability messaging, durable
    product displays, and mission-driven spatial design communicates
    environmental values through authentic brand expression.`,
  },
  {
    date: '11-03',
    lat: 40.45230383570468,
    lng: -79.98281475037058,
    title: "Roxanne's Dried Flowers",
    typeOfThinking: 'elegant',
    why: `The floral studio's carefully arranged botanical displays and refined
    presentation of preserved arrangements embody elegance through delicate
    composition and natural beauty celebration.`,
  },
  {
    date: '11-04',
    lat: 40.46605351838929,
    lng: -79.95576010327963,
    title: 'Constellation Coffee',
    typeOfThinking: 'elegant',
    why: `The specialty coffee shop's refined lighting and intimate seating arrangements embody 
          elegance through sophisticated spatial design and curated atmosphere.`,
  },
  {
    date: '11-05',
    lat: 40.45091688460389,
    lng: -79.9351184186223,
    title: 'Glassworks',
    typeOfThinking: 'innovative',
    why: `The glass art studio's visible furnaces and demonstration areas
     transforms the industrial processes into a public spectacle through workshops and galleries.`,
  },
  {
    date: '11-06',
    lat: 40.45207246652384,
    lng: -79.98304364560933,
    title: 'Pennsylvania Libations',
    typeOfThinking: 'innovative',
    why: `The liquor store innovatively presents Pennsylvania-made products through curated 
          selections that celebrate local distilling and brewing traditions.`,
  },
  {
    date: '11-07',
    lat: 40.45417574445829,
    lng: -79.91757580071665,
    title: 'Udipi Cafe',
    typeOfThinking: 'honest',
    why: `The South Indian restaurant's straightforward cafeteria-style service
    and visible kitchen operations honestly showcase authentic vegetarian cuisine
    through unpretentious functional design. (This is in reality
    more towards the east, but placed here to be within the map viewing range).`,
  },
  {
    date: '11-08',
    lat: 40.43736698700295,
    lng: -79.92283948978745,
    title: 'Manor Theater',
    typeOfThinking: 'nostalgic',
    why: `The historic neighborhood cinema's preserved Art Deco details and
    classic marquee evoke nostalgic feelings of golden-age moviegoing through
    authentic architectural preservation.`,
  },
  {
    date: '11-09',
    lat: 40.451141383622,
    lng: -79.98659631862225,
    title: 'Puttshack',
    typeOfThinking: 'innovative',
    why: `The tech-enhanced mini-golf venue cleverly gamifies traditional putting through 
          digital scoring systems and interactive obstacles that transform competitive play.`,
  },
  {
    date: '11-10',
    lat: 40.451130598935386,
    lng: -79.93491516095135,
    title: 'Kawaii Gifts',
    typeOfThinking: 'honest',
    why: `The Japanese gift shop's authentic character displays present genuine cultural 
          products through straightforward, joyful presentation.`,
  },
  {
    date: '11-11',
    lat: 40.46612544237034,
    lng: -79.9491255419118,
    title: 'APTEKA',
    typeOfThinking: 'innovative',
    why: `The plant-based restaurant's creative menu presentation and
    adaptive reuse of pharmacy space innovatively transforms Eastern
    European cuisine with a modern vegan interpretation.`,
  },
  {
    date: '11-12',
    lat: 40.459440351774184,
    lng: -79.91921488978636,
    title: "Trader Joe's",
    typeOfThinking: 'innovative',
    why: `This beloved, no frills grocery store maximizes joy in the shopping experience
          through creative seasonal products and a warm, inviting atmosphere.`,
  },
  {
    date: '11-13',
    lat: 40.4531305829149,
    lng: -79.98114994560926,
    title: 'WFH Oriental Market',
    typeOfThinking: 'honest',
    why: `The Asian grocery's clear product organization and authentic
    ingredient selection present cultural food traditions through
    functional marketplace design.`,
  },
  {
    date: '11-14',
    lat: 40.46780050195639,
    lng: -79.95901931677308,
    title: 'Carnegie Library - Lawrenceville',
    typeOfThinking: 'innovative',
    why: `The renovated library blends historic architecture with contemporary 
          programming spaces that adapt to diverse community learning needs.`,
  },
  {
    date: '11-15',
    lat: 40.45052543581201,
    lng: -79.98712390143194,
    title: 'OnPar Now',
    typeOfThinking: 'innovative',
    why: `The indoor entertainment venue combines multiple game formats through 
          flexible spaces that allow for different recreational activities and group sizes.`,
  },
  {
    date: '11-16',
    lat: 40.43651966133368,
    lng: -79.92277813211652,
    title: 'Paititi Inti',
    typeOfThinking: 'elegant',
    why: `The Peruvian gift shop's refined presentation, carefully
    composed product displays, and culturally rich atmosphere embody elegance
    through thoughtful details.`,
  },
  {
    date: '11-17',
    lat: 40.44589497397625,
    lng: -79.94852718609026,
    title: 'Irish Design Center',
    typeOfThinking: 'proud',
    why: `The cultural shop's traditional Celtic displays and heritage
    product presentation embody cultural pride through confident celebration
    of Irish design and craft traditions.`,
  },
  {
    date: '11-18',
    lat: 40.450530697723636,
    lng: -79.98771465205267,
    title: 'Posman Books',
    typeOfThinking: 'elegant',
    topFive: true,
    why: `The independent bookstore's curated selections, refined display
    systems, and sophisticated interior design embody elegance through
    literary taste and spatial refinement.`,
  },
  {
    date: '11-19',
    lat: 40.44001671573614,
    lng: -79.99093202338739,
    title: "Brother Andre's Cafe",
    typeOfThinking: 'honest',
    why: `The pay-what-you-can café's transparent pricing model and inclusive design 
          communicates community-focused values through barrier-free access.`,
  },
  {
    date: '11-20',
    lat: 40.45796780263562,
    lng: -79.91078621862196,
    title: 'KLVN Coffee Lab',
    typeOfThinking: 'innovative',
    why: `The experimental coffee shop's laboratory-inspired equipment displays
    and scientific brewing methods innovatively transform coffee preparation
    into visible technical craft.`,
  },
  {
    date: '11-21',
    lat: 40.44741457052745,
    lng: -79.90204415725466,
    title: 'Car and Carriage Museum',
    typeOfThinking: 'nostalgic',
    topFive: true,
    why: `The museum's vintage vehicle displays and history walkthroughs
    evoke nostalgic feelings of transportation through remarkable
    preservation and contextual presentation.`,
  },
  {
    date: '11-22',
    lat: 40.438187603554866,
    lng: -79.92017554560992,
    title: 'Blue Monkey Tea Pittsburgh',
    typeOfThinking: 'elegant',
    why: `The tea shop's carefully curated tea collection and refined presentation 
          embody elegance through a sophisticated take on beverage customization.`,
  },
  {
    date: '11-23',
    lat: 40.44356364220907,
    lng: -79.9901948139251,
    title: 'Boy Scouts of America',
    typeOfThinking: 'proud',
    why: `The scout headquarters' statue display and merit
    badge showcase embody organizational pride through celebration of
    achievement and service-oriented values.`,
  },
  {
    date: '11-24',
    lat: 40.4506451549232,
    lng: -79.89849147920663,
    title: 'Pittsburgh Center for Creative Reuse',
    typeOfThinking: 'innovative',
    why: `The nonprofit's floor-to-ceiling salvaged material displays
    transform waste into creative resources through organized
    chaos that celebrates sustainable reimagining.`,
  },
  {
    date: '11-25',
    lat: 40.43979474267151,
    lng: -79.99995393211636,
    title: 'Pittsburgh Playhouse',
    typeOfThinking: 'proud',
    why: `The theater's prominent architectural presence and traditional
    performance spaces are filled with institutional pride through a confident celebration
    of dramatic arts and cultural programming.`,
  },
  {
    date: '11-26',
    lat: 40.45206360490302,
    lng: -79.93288718597125,
    title: 'Sephora',
    typeOfThinking: 'elegant',
    why: `The beauty retailer's dramatic lighting, mirror-lined walls, and carefully composed 
          displays embody a chic shopping experience through luxury.`,
  },
  {
    date: '11-27',
    lat: 40.43763950548518,
    lng: -80.00082665222368,
    title: "Bill and Walt's Hobby Shop",
    typeOfThinking: 'nostalgic',
    why: `The independent hobby shop's vintage toy displays, model train
    layouts, and classic storefront evoke nostalgic feelings of traditional
    play culture and specialized retail.`,
  },
  {
    date: '11-28',
    lat: 40.43299603489829,
    lng: -79.92698781677474,
    title: 'Pigeon Bagels',
    typeOfThinking: 'honest',
    why: `The bagel shop's baking operations and menu
    presentation showcase traditional bagel-making as a craft through transparent
    production and simple design.`,
  },
  {
    date: '11-29',
    lat: 40.44148207172844,
    lng: -80.00226703026789,
    title: 'love,',
    typeOfThinking: 'honest',
    why: `The shop's straightforward approach to retail and welcoming atmosphere 
          communicates authentic connection through unpretentious, femininedesign.`,
  },
  {
    date: '11-30',
    lat: 40.4505668714428,
    lng: -79.9871657474578,
    title: 'Sandbox VR',
    typeOfThinking: 'innovative',
    why: `The virtual reality experience center innovatively transforms physical
    space into immersive digital worlds through cutting-edge technology integration
    and multi-sensory environmental design.`,
  },
  {
    date: '12-01',
    lat: 40.443638350124886,
    lng: -79.99564504560975,
    title: 'African American Cultural Center',
    typeOfThinking: 'proud',
    topFive: true,
    why: `The cultural center's exhibition spaces and programming areas embody
    community pride through a confident celebration of African American heritage
    and cultural contributions.`,
  },
  {
    date: '12-02',
    lat: 40.44836976886476,
    lng: -79.895461274445,
    title: 'East End Food Co-op',
    typeOfThinking: 'honest',
    why: `The cooperative grocery's transparent member-owned model and community boards 
          shows shared values through authentic, mission-driven design.`,
  },
  {
    date: '12-03',
    lat: 40.44437328308911,
    lng: -79.9890420916356,
    title: 'Energy Innovation Center',
    typeOfThinking: 'innovative',
    why: `This multi-use building has been the spot for all kinds of grand events, from
      weddings to conferences, showing the versatility of its layout.`,
  },
];
