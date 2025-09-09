const readline = require("readline");

// Konstanta dasar
const MM_PER_CM = 10.0;
const MM_PER_DM = 100.0;
const MM_PER_M = 1000.0;
const MM_PER_DAM = 10000.0;
const MM_PER_HM = 100000.0;
const MM_PER_KM = 1000000.0;
const MM_PER_HAMMER_UNIT = 25.4; // 1 HU = 25.4 mm

// Konversi input ke mm
function toMm(value, unit) {
  switch (unit) {
    case "mm": return value;
    case "cm": return value * MM_PER_CM;
    case "dm": return value * MM_PER_DM;
    case "m": return value * MM_PER_M;
    case "dam": return value * MM_PER_DAM;
    case "hm": return value * MM_PER_HM;
    case "km": return value * MM_PER_KM;
    default: throw new Error("Satuan tidak valid: " + unit);
  }
}

// Konversi mm ke Hammer Unit
function mmToHammerUnit(mm) {
  return mm / MM_PER_HAMMER_UNIT;
}

// Program utama
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Metric to Hammer Unit Converter ===");
console.log("Satuan yang tersedia: mm, cm, dm, m, dam, hm, km");

rl.question("Masukkan satuan: ", (unitInput) => {
  const unit = unitInput.trim().toLowerCase();

  rl.question("Masukkan jumlah: ", (valueInput) => {
    const value = parseFloat(valueInput);

    try {
      const mmValue = toMm(value, unit);
      const hu = mmToHammerUnit(mmValue);

      console.log(`${value} ${unit} = ${hu} HU`);
    } catch (err) {
      console.log(err.message);
    }

    rl.close();
  });
});
