export type AssetSource = "tunibois" | "hardydeck" | "piskorski" | "owner-local";

export type SiteAsset = {
  id: string;
  src: string;
  alt: string;
  source: AssetSource;
  sourceUrl: string;
};

export const assets: Record<string, SiteAsset> = {
  logo: {
    id: "logo",
    src: "/assets/brand/tunibois-logo.png",
    alt: "Tunibois",
    source: "owner-local",
    sourceUrl: "local Tunibois-logo.png",
  },
  heroIndustrialWood: {
    id: "heroIndustrialWood",
    src: "/assets/tunibois/hero-industrial-wood.jpg",
    alt: "Ligne industrielle de transformation du bois",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/04/0b358acb56449242cf62366ecc324d84_L.jpg",
  },
  factoryTransformation: {
    id: "factoryTransformation",
    src: "/assets/tunibois/factory-transformation.jpg",
    alt: "Production et transformation du bois",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/04/usine-transformation-bois.jpg",
  },
  factoryTechnology: {
    id: "factoryTechnology",
    src: "/assets/tunibois/factory-technology.jpg",
    alt: "Technologie industrielle pour composants bois",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/04/technologie.jpg",
  },
  woodenPallets: {
    id: "woodenPallets",
    src: "/assets/tunibois/wooden-pallets-main.png",
    alt: "Palettes en bois pour usage industriel et export",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/10/vente-palettes-en-bois-Tunisie-Tunibois.png",
  },
  euroPallet: {
    id: "euroPallet",
    src: "/assets/tunibois/euro-pallet.jpg",
    alt: "Palette bois de type Europe",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/10/Palette-Europe-%E2%80%93-EPAL.jpg",
  },
  cpPallet: {
    id: "cpPallet",
    src: "/assets/tunibois/cp-pallet.jpg",
    alt: "Palette bois CP pour flux industriels",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/10/Palette-en-bois-CP.jpg",
  },
  industrialCrates: {
    id: "industrialCrates",
    src: "/assets/tunibois/industrial-crates-palox.jpg",
    alt: "Caisses bois et palox industriels",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/10/Caisses-en-Bois-et-Palox.jpg",
  },
  pellets: {
    id: "pellets",
    src: "/assets/tunibois/wood-pellets.jpg",
    alt: "Pellets et granulés de bois",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/04/Pellets-de-Bois.jpg",
  },
  pelletsBags: {
    id: "pelletsBags",
    src: "/assets/piskorski/pellets-bags.jpg",
    alt: "Sacs de granulés de bois sur palette",
    source: "piskorski",
    sourceUrl: "https://www.piskorski-bois-energie.fr/605-large_default/granules-de-bois-isko-sacs-15kg-pellets.jpg",
  },
  briquettes: {
    id: "briquettes",
    src: "/assets/piskorski/wood-briquettes-palette.jpg",
    alt: "Briquettes de bois conditionnées sur palette",
    source: "piskorski",
    sourceUrl: "https://www.piskorski-bois-energie.fr/797-large_default/briquettes-100-hetre-palette.jpg",
  },
  stirrers: {
    id: "stirrers",
    src: "/assets/tunibois/wooden-coffee-stirrers.jpg",
    alt: "Agitateurs de café en bois",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/04/agitateur-bois-1000.jpg",
  },
  iceCreamSticks: {
    id: "iceCreamSticks",
    src: "/assets/tunibois/ice-cream-sticks.jpg",
    alt: "Bâtonnets en bois pour glaces",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2025/06/Hf033be774d104ba5a8badd535ac12659W.jpg",
  },
  woodenCutlery: {
    id: "woodenCutlery",
    src: "/assets/tunibois/wooden-cutlery.jpg",
    alt: "Couverts en bois pour restauration et usage professionnel",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/04/couvert-en-bois.jpg",
  },
  toothpicks: {
    id: "toothpicks",
    src: "/assets/tunibois/toothpicks.jpg",
    alt: "Cure-dents en bois",
    source: "tunibois",
    sourceUrl: "https://www.tunibois.tn/wp-content/uploads/2024/04/cure-dent.jpg",
  },
  woodBoards: {
    id: "woodBoards",
    src: "/assets/hardydeck/wood-boards-teck.jpg",
    alt: "Planches de bois rabotées",
    source: "hardydeck",
    sourceUrl: "https://hardydeck.com/wp-content/uploads/2021/04/planche-teck.jpg",
  },
  outdoorTiles: {
    id: "outdoorTiles",
    src: "/assets/hardydeck/outdoor-wood-tiles.jpg",
    alt: "Dalles bois pour terrasses et extérieur",
    source: "hardydeck",
    sourceUrl: "https://hardydeck.com/wp-content/uploads/2024/08/dalles-bois-ipe-90x60cm.jpg",
  },
  hardwoodJoists: {
    id: "hardwoodJoists",
    src: "/assets/hardydeck/hardwood-joists.jpg",
    alt: "Lambourdes et pièces longues en bois dur",
    source: "hardydeck",
    sourceUrl: "https://hardydeck.com/wp-content/uploads/2022/11/lambourde-bois-dur.jpg",
  },
};

export function asset(id: keyof typeof assets) {
  return assets[id];
}
