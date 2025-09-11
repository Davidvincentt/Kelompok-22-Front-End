// Konstanta satuan dasar
const MM_PER_CM = 10.0;
const MM_PER_DM = 100.0;
const MM_PER_M = 1000.0;
const MM_PER_DAM = 10000.0;
const MM_PER_HM = 100000.0;
const MM_PER_KM = 1000000.0;
const MM_PER_HAMMER_UNIT = 25.4;

// Fungsi konversi ke mm
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

// Fungsi ubah mm ke Hammer Unit
function mmToHammerUnit(mm) {
  return mm / MM_PER_HAMMER_UNIT;
}

// Fungsi utama convert
function convert() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(value)) {
    resultDiv.innerText = "Masukkan angka yang valid!";
    return;
  }

  try {
    const mmValue = toMm(value, unit);
    const hu = mmToHammerUnit(mmValue);
    resultDiv.innerText = `${value} ${unit} = ${hu.toFixed(4)} HU`;
  } catch (err) {
    resultDiv.innerText = err.message;
  }
}