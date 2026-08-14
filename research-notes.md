# Research notes — ten-country expansion

## Scope selected

The ten additional country states are Thailand, South Korea, Cambodia, Laos, Indonesia, Malaysia, Singapore, India, Sri Lanka, and Nepal. The existing states remain Vietnam, China, and Japan.

## Initial source findings

### Thailand

The Tourism Authority of Thailand groups cultural travel around historical parks, temples, museums, royal palaces, and regional destinations such as Chiang Mai and Ayutthaya. The visual direction for the site can therefore use a Lanna-inspired timber roof, layered temple eaves, warm saffron/vermillion accents, and a sense of historical routes without reducing the country to a single landmark.

Source: [Tourism Authority of Thailand — Art, Culture, Heritage & Architecture](https://www.tourismthailand.org/Experiences/Details/art,-culture,-heritage-&-architecture/22)

### South Korea

UNESCO describes Hahoe and Yangdong as historic clan villages shaped by Joseon-era social systems, with timber-framed houses, pavilions, study halls, Confucian academies, mud-walled and thatched-roof houses, and landscapes of mountains, trees, and water. The visual direction can use a restrained hanok roofline, timber structure, mountain-and-water framing, and muted celadon/ink tones.

Source: [UNESCO — Historic Villages of Korea: Hahoe and Yangdong](https://whc.unesco.org/en/list/1324/)

### Cambodia

UNESCO describes Angkor as a large archaeological landscape containing successive Khmer capitals, with Angkor Wat, Bayon, Preah Khan, and Ta Prohm as examples of Khmer architecture tied to geography and symbolic meaning. The visual direction can use a sandstone/terracotta palette, stepped temple massing, sculptural stone detail, and surrounding forest rather than copying one exact monument.

Source: [UNESCO — Angkor](https://whc.unesco.org/en/list/668/)

### Laos

UNESCO characterizes Luang Prabang as a carefully preserved fusion of traditional Lao architecture and 19th–20th century European colonial structures. Wooden buildings, richly decorated Buddhist temples, brick colonial houses, the Mekong, and Mount Phousi form a coherent visual system. The collage direction can combine layered temple roofs, carved gold details, wood grain, river blue, and soft colonial masonry.

Source: [UNESCO — Town of Luang Prabang](https://whc.unesco.org/en/list/479/)

### Indonesia

UNESCO describes Borobudur as a Buddhist monument organized through a pyramidal base, square terraces, circular platforms, openwork stupas, and extensive low reliefs. The visual direction can use a stepped volcanic-stone silhouette, terraced geometry, misty mountain atmosphere, and a restrained indigo/earth palette.

Source: [UNESCO — Borobudur Temple Compounds](https://whc.unesco.org/en/list/592/)

### Singapore

Singapore’s URA identifies shophouses as two- to three-storey contiguous blocks with common party walls, pitched clay-tile roofs, timber structures, airwells, covered five-foot ways, shutters, and layered facades. The collage direction can focus on a narrow pastel streetscape, repeated arcades, tiled roof rhythm, timber shutters, and a humid tropical shadow pattern.

Source: [Urban Redevelopment Authority — Understanding the Shophouse](https://www.ura.gov.sg/conservation/conservation-resources/understanding-the-shophouse/)

### Nepal

UNESCO describes Kathmandu Valley through Newar urban settlements, Durbar Squares, stupas, Hindu temple precincts, tiered temples, fired brick with mud mortar, timber structures, terracotta roof tiles, gilded brass, and carved windows/struts. The collage direction can combine a brick-and-timber temple silhouette, whitewashed stupa, brass ornament, prayer flags, and deep mineral blue.

Source: [UNESCO — Kathmandu Valley](https://whc.unesco.org/en/list/121/)

### India

The official Incredible India architectural tour highlights Victorian Gothic stone carving and soaring turrets in Mumbai, rock-cut temples and sculptures at Ellora, historic caves, forts, and craft traditions. The collage direction can use a carved sandstone/rock-cut architectural fragment, arched openings, warm saffron stone, and a restrained maroon accent.

Source: [Incredible India — Architectural Tour](https://www.incredibleindia.gov.in/en/trips/trip-listing/architectural-tour)

### Sri Lanka

UNESCO presents Kandy as a sacred Buddhist city tied to the Temple of the Tooth Relic and the long Sinhala court tradition. Sigiriya adds a strong counter-motif: a granite peak rising from jungle, with brick-and-plaster galleries and stairways emerging from a monumental lion form. The collage direction can combine temple roof planes, warm lantern light, granite rock, jungle green, and a small vermilion monastic accent.

Sources: [UNESCO — Sacred City of Kandy](https://whc.unesco.org/en/list/450/) [UNESCO — Ancient City of Sigiriya](https://whc.unesco.org/en/list/202/)

### Malaysia

UNESCO describes Melaka and George Town as historic Straits of Malacca trading cities shaped by Malay, Chinese, Indian, Portuguese, Dutch, British, and wider Asian/European exchanges. Their living multicultural heritage is visible in religious buildings, ethnic quarters, shophouses, townhouses, squares, and layered colonial townscapes. The collage direction can combine pastel shophouse facades, tiled roofs, port-city textures, and a restrained coral/teal palette.

Source: [UNESCO — Melaka and George Town](https://whc.unesco.org/en/list/1223/)

## Data contract for every country

Each country state will keep one canonical object containing: `name`, `country`, `phonetic`, `title`, `description`, `aside`, `image`, and `marker`. Hero, caption, side controls, destination card, and direct card selection must derive from the same active object.
