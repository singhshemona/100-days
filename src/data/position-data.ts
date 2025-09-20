import type { LatLngTuple } from 'leaflet';

export const POSITION_CENTER: LatLngTuple = [
  40.45705334145753, -79.94261026101759,
];

export const TYPES_OF_THINKING = [
  'everything',
  'efficient',
  'innovative',
  'pleasured',
  'elegant',
  'intelligent',
  'nostalgic',
  'seduce',
  'love',
  'innocent',
  'proud',
  'honest',
  'laugh',
  'innovate',
];

export const MARKER_COLORS: Record<string, string> = {
  all: '#666666',
  efficient: '#4CAF50',
  innovative: '#2196F3',
  pleasured: '#FF9800',
  elegant: '#9C27B0',
  intelligent: '#3F51B5',
  nostalgic: '#795548',
  seduce: '#E91E63',
  love: '#F44336',
  innocent: '#FFC107',
  proud: '#673AB7',
  honest: '#009688',
  laugh: '#FF5722',
  innovate: '#00BCD4',
};

export const POSITIONS_ALL = [
  {
    date: '08-26',
    lat: 40.443309509072265,
    lng: -79.94209706101826,
    title: 'Entropy+',
    typeOfThinking: 'efficient',
    why: `As CMUs primary convenience store, Entropy+ embodies efficiency through its spatial 
          organization that prioritizes quick navigation, grab-and-go accessibility, and 
          streamlined checkout processes.`,
  },
  {
    date: '08-27',
    lat: 40.442379652561755,
    lng: -79.94681449964521,
    title: 'TechSpark',
    typeOfThinking: 'innovative',
    why: `TechSparks maker-space environment encourages creative experimentation through 
          flexible layouts, modular workstations, and technology integration that adapts to 
          various project needs.`,
  },
  {
    date: '08-28',
    lat: 40.443040328223994,
    lng: -79.94581964935432,
    title: 'La Prima Espresso Company',
    typeOfThinking: 'pleasured',
    why: `The café's intimate seating arrangements and aromatic environment create a sensory 
          experience designed to enhance the pleasure of coffee consumption and social 
          interaction.`,
  },
  {
    date: '08-29',
    lat: 40.442953819521236,
    lng: -79.94660714668582,
    title: 'Wild Blue Sushi',
    typeOfThinking: 'elegant',
    why: `The restaurant's clean lines, minimalist aesthetic, and carefully curated presentation 
          counter exemplify elegance through refined spatial composition and visual restraint.`,
  },
  {
    date: '08-30',
    lat: 40.44306410007853,
    lng: -79.94667971402104,
    title: 'Biomedical Engineering Lab',
    typeOfThinking: 'intelligent',
    why: `The lab's sophisticated equipment layout and sterile design communicate scientific rigor 
          and intellectual pursuit through purposeful organization of complex technological 
          systems.`,
  },
  {
    date: '08-31',
    lat: 40.46136581693344,
    lng: -79.94817477265927,
    title: 'White Whale Bookstore',
    typeOfThinking: 'nostalgic',
    why: `The independent bookstore's cozy, intimate spaces with worn wooden shelves and reading 
          nooks evoke nostalgic feelings of traditional literary culture and contemplative 
          browsing.`,
  },
  {
    date: '09-01',
    lat: 40.46218187744937,
    lng: -79.94950560334571,
    title: "Gryphon's Tea",
    typeOfThinking: 'seduce',
    why: `The tea shop's warm lighting, rich textures, and layered spatial arrangements create an 
          inviting atmosphere that seductively draws visitors into a slower, more contemplative 
          experience.`,
  },
  {
    date: '09-02',
    lat: 40.462670128045545,
    lng: -79.94609739992565,
    title: 'Friendship Parklet',
    typeOfThinking: 'love',
    why: `This community space fosters connection and care through inclusive design elements like 
          accessible seating and open layouts that encourage social bonding and neighborhood 
          gathering.`,
  },
  {
    date: '09-03',
    lat: 40.46028948607216,
    lng: -79.92280876101742,
    title: 'Cinnaholic',
    typeOfThinking: 'innocent',
    why: `The bakery's bright, clean aesthetic with playful color schemes and open display cases 
          creates an atmosphere of pure, uncomplicated joy around sweet indulgence.`,
  },
  {
    date: '09-04',
    lat: 40.44150901080421,
    lng: -79.94386484937652,
    title: 'Hunt Library',
    typeOfThinking: 'intelligent',
    why: `Hunt Library's four floors of organized collections and specialized research areas 
          demonstrate intelligent spatial hierarchy that supports different modes of scholarly 
          inquiry and knowledge discovery.`,
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
    lat: 40.44116718373999,
    lng: -79.95796233218253,
    title: 'CAVA',
    typeOfThinking: 'efficient',
    why: `CAVA's assembly-line layout and clear visual menu organization optimize the fast-casual 
          dining experience through streamlined ordering and preparation workflows.`,
  },
  {
    date: '09-07',
    lat: 40.45015988351104,
    lng: -79.95781631976344,
    title: 'Pittsburgh Bus',
    typeOfThinking: 'honest',
    why: `Port Authority buses feature straightforward, functional design with clear signage and 
          utilitarian seating that honestly communicates their purpose as public transportation 
          without unnecessary ornamentation.`,
  },
  {
    date: '09-08',
    lat: 40.4623141544175,
    lng: -79.95046278985312,
    title: 'Emilichka',
    typeOfThinking: 'elegant',
    why: `The upscale restaurant's sophisticated interior design with carefully chosen materials 
          and refined spatial proportions creates an elegant dining atmosphere through 
          restrained luxury.`,
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
    lat: 40.44256047667357,
    lng: -79.93973935916755,
    title: 'De Fer (Resnik Hall)',
    typeOfThinking: 'innovate',
    why: `The dining facility's modern design incorporates flexible seating configurations and 
          interactive ordering systems that innovatively adapt to changing student dining patterns.`,
  },
  {
    date: '09-11',
    lat: 40.46862841019188,
    lng: -79.95175821868871,
    title: 'St. Mary Cemetery',
    typeOfThinking: 'nostalgic',
    why: `The cemetery's historic landscaping, traditional monuments, and quiet pathways create a 
          contemplative space that evokes nostalgia for Pittsburgh's historical community.`,
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
    lat: 40.464530398081735,
    lng: -79.96636451868885,
    title: 'Mikkusu Matcha Tea House',
    typeOfThinking: 'seduce',
    why: `The tea house's intimate lighting, textured surfaces, and carefully composed zen-like spaces 
          seduce visitors into a meditative state through sensory design elements.`,
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
    lat: 40.46507972194982,
    lng: -79.93656983218132,
    title: 'Third Space Bakery',
    typeOfThinking: 'laugh',
    why: `The bakery's playful signage, whimsical product names, and casual seating arrangements 
          inject humor into the everyday ritual of coffee and pastry consumption through 
          lighthearted design choices.`,
  },
  {
    date: '09-16',
    lat: 40.46105146871568,
    lng: -79.92506147450995,
    title: 'East Liberty Church',
    typeOfThinking: 'proud',
    why: `The church's imposing architecture and prominent community presence embody spiritual and 
          civic pride through traditional religious design elements that command respect and 
          reverence.`,
  },
  {
    date: '09-17',
    lat: 40.46391390392825,
    lng: -79.936813745674,
    title: 'The Octopus Garden',
    typeOfThinking: 'laugh',
    why: `This quirky venue's playful name and eclectic design elements use unexpected spatial 
          arrangements and whimsical decorative choices to inject humor into the typical retail 
          experience.`,
  },
  {
    date: '09-18',
    lat: 40.464395876188746,
    lng: -79.93301390334561,
    title: 'Pittsburgh Glass Center',
    typeOfThinking: 'innovate',
    why: `The glass center's specialized studios and exhibition spaces innovatively combine functional 
          workshop areas with display galleries, creating dynamic spaces that blur the line 
          between production and presentation.`,
  },
  {
    date: '09-19',
    lat: 40.44467124198362,
    lng: -79.91690981868983,
    title: 'Five Points Bakeshop',
    typeOfThinking: 'honest',
    why: `The local cornershop bakery's open kitchen design and simple storefront honestly showcase the 
          artisanal baking process, creating trust through transparency and authentic craftsmanship 
          display.`,
  },
  {
    date: '09-20',
    lat: 40.461514918143706,
    lng: -79.93003853033083,
    title: 'Enright Community Garden',
    typeOfThinking: 'nostalgic',
    why: `This little green oasis in the city evokes nostalgia through its traditional garden layout,
    wooden benches, and community-centric design that recalls simpler times and neighborhood togetherness.`,
  },
];
