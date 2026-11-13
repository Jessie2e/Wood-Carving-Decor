// Add another category here after its straight-on scene, transparent product image,
// verified dimensions, and placement measurements have been supplied.
window.WCD_PROPORTION_GUIDES = [
  {
    id: 'lion-corbel',
    label: 'Lion corbel',
    unit: 'in',
    sizes: [10, 12, 14, 16],
    defaultSize: 14,
    status: size => `Showing two ${size}-inch lion corbels`,
    instruction: 'Choose a height to compare two matching lion corbels beneath the mantel in the same room setting.',
    scene: {
      src: 'assets/Blank Fireplace for Corbel Overlay.png',
      alt: 'Cream mantel above a flat wall and fireplace, with two lion corbel overlays beneath the shelf',
      width: 1671,
      height: 941
    },
    product: {
      src: 'assets/Ornate Carved Lion Corbel Bracket Overlay.png',
      width: 1536,
      height: 1024,
      referenceSize: 16
    },
    // Positions are percentages of the scene, so responsive scaling preserves alignment.
    // referenceHeightPx is the product's image height at referenceSize in this scene.
    placements: [
      {x: 55.236385, y: 36.663124, referenceHeightPx: 221, rotation: 0},
      {x: 90.783962, y: 31.030818, referenceHeightPx: 265, rotation: 0}
    ],
    reference: {
      src: 'assets/island-post-cap-wooden-lion-corbel-dimensions-front-1600-1200.jpg',
      alt: 'Supplied lion corbel size chart showing 10, 12, 14, and 16 inch heights and corresponding widths',
      width: 1600,
      height: 1200
    }
  }
];
