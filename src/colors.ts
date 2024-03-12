interface RGB {
  r: number;
  g: number;
  b: number;
}

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

export const findClosestColor = (targetColor: string, colorArray: string[]): string | null => {
  const targetRGB = hexToRGB(targetColor);

  if (colorArray.length === 0) {
    return null;
  }

  let closestColor = colorArray[0];
  let minDistance = colorDistance(targetRGB, hexToRGB(closestColor));

  for (let i = 1; i < colorArray.length; i++) {
    const currentColor = colorArray[i];
    const currentRGB = hexToRGB(currentColor);
    const distance = colorDistance(targetRGB, currentRGB);

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = currentColor;
    }
  }

  return closestColor;
};
