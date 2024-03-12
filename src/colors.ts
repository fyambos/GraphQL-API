interface RGB {
  r: number;
  g: number;
  b: number;
}

interface ColorData {
  group: string;
  name: string;
}

type ColorsData = Record<string, ColorData>;

const hexToRGB = (hex: string): RGB => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const colorDistance = (color1: RGB, color2: RGB): number => {
  const dr = color1.r - color2.r;
  const dg = color1.g - color2.g;
  const db = color1.b - color2.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
};

export const findClosestColor = (targetColor: string, colorsData: ColorsData): string | null => {
  const targetRGB = hexToRGB(targetColor);

  const colorKeys = Object.keys(colorsData);

  if (colorKeys.length === 0) {
    return null;
  }

  let closestColorKey = colorKeys[0];
  let minDistance = colorDistance(targetRGB, hexToRGB(closestColorKey));

  for (let i = 1; i < colorKeys.length; i++) {
    const currentColorKey = colorKeys[i];
    const currentRGB = hexToRGB(currentColorKey);
    const distance = colorDistance(targetRGB, currentRGB);

    if (distance < minDistance) {
      minDistance = distance;
      closestColorKey = currentColorKey;
    }
  }

  return closestColorKey;
};
