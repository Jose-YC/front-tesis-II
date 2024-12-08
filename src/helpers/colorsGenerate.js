export const generateBalancedColor = () => {
    const randomValue = () => Math.floor(Math.random() * (200 - 55) + 55); // Valores entre 55 y 200
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
};

export const generateBalancedColors = (count) => {
return Array.from({ length: count }, () => generateBalancedColor());
};