// Konstanta dasar
const MM_PER_CM = 10.0;
const MM_PER_DM = 100.0;
const MM_PER_M = 1000.0;
const MM_PER_DAM = 10000.0;
const MM_PER_HM = 100000.0;
const MM_PER_KM = 1000000.0;

// 1 m = 52.5 HU → 1 HU = 19.0476 mm
const MM_PER_HAMMER_UNIT = 1000.0 / 52.5;

// Konversi metric ke mm
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

// Konversi mm ke HU
function mmToHU(mm) {
  return mm / MM_PER_HAMMER_UNIT;
}

// Konversi HU ke mm
function huToMm(hu) {
  return hu * MM_PER_HAMMER_UNIT;
}

// Toggle input satuan (matikan kalau HU → Metric)
function toggleInputs() {
  const mode = document.getElementById("mode").value;
  const unitWrapper = document.getElementById("unitWrapper");
  unitWrapper.style.display = mode === "HUToMetric" ? "none" : "block";
}

// Fungsi utama convert
function convert() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const mode = document.getElementById("mode").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(value)) {
    resultDiv.innerText = "Masukkan angka yang valid!";
    return;
  }

  try {
    if (mode === "metricToHU") {
      // Metric → HU
      const mmValue = toMm(value, unit);
      const hu = mmToHU(mmValue);
      resultDiv.innerText = `${value} ${unit} = ${hu.toFixed(4)} HU`;
    } else {
      // HU → Metric
      const mmValue = huToMm(value);
      const cm = mmValue / MM_PER_CM;
      const dm = mmValue / MM_PER_DM;
      const m = mmValue / MM_PER_M;
      const dam = mmValue / MM_PER_DAM;
      const hm = mmValue / MM_PER_HM;
      const km = mmValue / MM_PER_KM;

      resultDiv.innerHTML = `
        ${value} HU = <br>
        ${mmValue.toFixed(2)} mm<br>
        ${cm.toFixed(2)} cm<br>
        ${dm.toFixed(2)} dm<br>
        ${m.toFixed(4)} m<br>
        ${dam.toFixed(5)} dam<br>
        ${hm.toFixed(6)} hm<br>
        ${km.toFixed(7)} km
      `;
    }
  } catch (err) {
    resultDiv.innerText = err.message;
  }
}
