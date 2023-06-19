function getHexFieldPosition(row: number, col: number): [number, number, number] {
    const distance = 1.5;
    const x = col * distance;
    const z = row * distance * Math.sqrt(3) / 2 - (col % 2) * (distance * Math.sqrt(3) / 4);
    return [x, 0, z];
}

export { getHexFieldPosition};
