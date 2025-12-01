// Simple blockies-style avatar generator for Ethereum addresses
export function createBlockiesAvatar(address) {
  if (!address) return null;
  
  const canvas = document.createElement('canvas');
  const size = 8;
  const scale = 4;
  canvas.width = canvas.height = size * scale;
  
  const ctx = canvas.getContext('2d');
  const hash = address.toLowerCase().slice(2);
  
  // Generate colors from hash
  const hue = parseInt(hash.slice(0, 8), 16) % 360;
  const saturation = (parseInt(hash.slice(8, 16), 16) % 40) + 60;
  const lightness = (parseInt(hash.slice(16, 24), 16) % 20) + 50;
  
  const bgColor = `hsl(${hue}, ${saturation}%, ${lightness - 30}%)`;
  const fgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw symmetric pattern
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size / 2; x++) {
      const index = y * size + x;
      const byte = parseInt(hash.slice(index % hash.length, (index % hash.length) + 1), 16);
      
      if (byte % 2 === 0) {
        ctx.fillStyle = fgColor;
        ctx.fillRect(x * scale, y * scale, scale, scale);
        ctx.fillRect((size - 1 - x) * scale, y * scale, scale, scale);
      }
    }
  }
  
  return canvas.toDataURL();
}
