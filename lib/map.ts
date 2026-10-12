const tileSize = 256;

export interface MapTile {
  src: string;
  left: number;
  top: number;
}

/**
 * OpenStreetMap raster tiles around a point, offset in pixels from an anchor
 * at which the point sits exactly. Covers at least 1024 pixels left of the
 * anchor, 768 right of it and 256 above and below.
 */
export function osmTiles(latitude: number, longitude: number, zoom: number): MapTile[] {
  const scale = 2 ** zoom;
  const latRad = (latitude * Math.PI) / 180;
  const x = ((longitude + 180) / 360) * scale;
  const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * scale;
  const tileX = Math.floor(x);
  const tileY = Math.floor(y);
  const tiles: MapTile[] = [];
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -4; dx <= 3; dx++) {
      tiles.push({
        src: `https://tile.openstreetmap.org/${zoom}/${tileX + dx}/${tileY + dy}.png`,
        left: Math.round((tileX + dx - x) * tileSize),
        top: Math.round((tileY + dy - y) * tileSize),
      });
    }
  }
  return tiles;
}

export const mapTileSize = tileSize;
