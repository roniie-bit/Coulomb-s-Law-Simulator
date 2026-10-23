const K = 8.99e9;
const controls = {
  q1: document.getElementById("q1"),
  q2: document.getElementById("q2"),
  distance: document.getElementById("distance")
};
const outputs = {
  q1: document.getElementById("q1Out"),
  q2: document.getElementById("q2Out"),
  distance: document.getElementById("distanceOut")
};

const forceOutput = document.getElementById("force");
const forceType = document.getElementById("forceType");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const distanceLabel = document.getElementById("distanceLabel");
const directionLabel = document.getElementById("directionLabel");
const explanationTitle = document.getElementById("explanationTitle");
const explanationText = document.getElementById("explanationText");
const charge1 = document.getElementById("charge1");
const charge2 = document.getElementById("charge2");
const sign1 = document.getElementById("sign1");
const sign2 = document.getElementById("sign2");
const glow1 = document.getElementById("glow1");
const glow2 = document.getElementById("glow2");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

function signed(value, digits = 1) {
  const n = Number(value);
  return `${n > 0 ? "+" : n < 0 ? "−" : ""}${Math.abs(n).toFixed(digits)}`;
}
function scientific(value) {
  if (!Number.isFinite(value)) return "Indefinida";
  if (value === 0) return "0";
  const exponent = Math.floor(Math.log10(Math.abs(value)));
  const mantissa = value / Math.pow(10, exponent);
  return `${mantissa.toFixed(2)} × 10<sup>${exponent}</sup>`;
}
function update() {
  const q1 = Number(controls.q1.value);
  const q2 = Number(controls.q2.value);
  const r = Number(controls.distance.value);
  const force = K * Math.abs(q1 * q2) / (r * r);
  const neutral = q1 === 0 || q2 === 0;
  const attractive = q1 * q2 < 0;

  outputs.q1.textContent = `${signed(q1)} C`;
  outputs.q2.textContent = `${signed(q2)} C`;
  outputs.distance.textContent = `${r.toFixed(1)} m`;
  forceOutput.innerHTML = scientific(force);
  label1.textContent = `q₁ = ${signed(q1)} C`;
  label2.textContent = `q₂ = ${signed(q2)} C`;
  distanceLabel.textContent = `r = ${r.toFixed(1)} m`;

  if (neutral) {
    forceType.textContent = "Fuerza eléctrica nula";
    forceType.style.color = "#d1d5db";
    forceType.style.background = "#30343c";
    forceType.style.borderColor = "#484e5a";
    directionLabel.textContent = "Una carga es cero";
    explanationTitle.textContent = "¿Por qué la fuerza es cero?";
    explanationText.textContent = "En este modelo, si cualquiera de las cargas vale cero, el producto q₁q₂ es cero y no hay fuerza eléctrica entre ellas.";
  } else if (attractive) {
    forceType.textContent = "Fuerza atractiva";
    forceType.style.color = "#b8d5ff";
    forceType.style.background = "#20324d";
    forceType.style.borderColor = "#2c4c78";
    directionLabel.textContent = "Las cargas se atraen";
    explanationTitle.textContent = "Las cargas se atraen";
    explanationText.textContent = "Los signos son opuestos. Cada carga experimenta una fuerza dirigida hacia la otra. Al duplicar la distancia, la fuerza se reduce a una cuarta parte.";
  } else {
    forceType.textContent = "Fuerza repulsiva";
    forceType.style.color = "#ffc4a8";
    forceType.style.background = "#472b24";
    forceType.style.borderColor = "#704132";
    directionLabel.textContent = "Las cargas se repelen";
    explanationTitle.textContent = "Las cargas se repelen";
    explanationText.textContent = "Los signos son iguales. Cada carga experimenta una fuerza dirigida en sentido contrario a la otra. Al duplicar la distancia, la fuerza se reduce a una cuarta parte.";
  }

  sign1.textContent = q1 > 0 ? "+" : q1 < 0 ? "−" : "0";
  sign2.textContent = q2 > 0 ? "+" : q2 < 0 ? "−" : "0";
  const radius1 = 22 + Math.min(Math.abs(q1), 5) * 2.5;
  const radius2 = 22 + Math.min(Math.abs(q2), 5) * 2.5;
  charge1.setAttribute("r", radius1);
  charge2.setAttribute("r", radius2);
  glow1.setAttribute("r", radius1 + 17);
  glow2.setAttribute("r", radius2 + 17);
  glow1.setAttribute("fill", q1 >= 0 ? "#3184f5" : "#b17cff");
  glow2.setAttribute("fill", q2 >= 0 ? "#38c982" : "#b17cff");
  charge1.setAttribute("fill", q1 < 0 ? "#9462df" : q1 === 0 ? "#7c8492" : "url(#blueGradient)");
  charge2.setAttribute("fill", q2 < 0 ? "#9462df" : q2 === 0 ? "#7c8492" : "url(#greenGradient)");

  const separation = 135 + (r - 0.5) / 9.5 * 145;
  const x1 = 280 - separation / 2;
  const x2 = 280 + separation / 2;
  [charge1, glow1, sign1].forEach(el => el.setAttribute("cx", x1));
  [charge2, glow2, sign2].forEach(el => el.setAttribute("cx", x2));
  label1.setAttribute("x", x1);
  label2.setAttribute("x", x2);
  document.querySelectorAll("#diagram line").forEach(el => {
    if (el.getAttribute("y1") === "238" || el.getAttribute("y2") === "246") {
      const isLeftTick = el.getAttribute("x1") === "180" || el.getAttribute("x2") === "180";
      const isRightTick = el.getAttribute("x1") === "380" || el.getAttribute("x2") === "380";
      if (isLeftTick) { el.setAttribute("x1", x1); el.setAttribute("x2", x1); }
      if (isRightTick) { el.setAttribute("x1", x2); el.setAttribute("x2", x2); }
      if (el.getAttribute("y1") === "238" && el.getAttribute("y2") === "238") {
        el.setAttribute("x1", x1); el.setAttribute("x2", x2);
      }
    }
  });

  const mid = (x1 + x2) / 2;
  [line1, line2, line3].forEach((el, i) => {
    const y = 140;
    const offset = [ -42, 42, 0 ][i];
    el.setAttribute("d", `M${x1} ${y} C${x1 + separation*.25} ${y+offset} ${x2-separation*.25} ${y+offset} ${x2} ${y}`);
    el.setAttribute("stroke", neutral ? "#697386" : attractive ? "#4e91ed" : "#e8a078");
    el.setAttribute("opacity", neutral ? ".08" : ".28");
  });

  const inward = attractive || neutral;
  leftArrow.setAttribute("d", inward
    ? `M${x1 + radius1 + 18} 105 l-13 -8 v16 z`
    : `M${x1 - radius1 - 18} 105 l13 -8 v16 z`);
  rightArrow.setAttribute("d", inward
    ? `M${x2 - radius2 - 18} 105 l13 -8 v16 z`
    : `M${x2 + radius2 + 18} 105 l-13 -8 v16 z`);
  leftArrow.setAttribute("fill", neutral ? "#737b89" : attractive ? "#5597ff" : "#f0a078");
  rightArrow.setAttribute("fill", neutral ? "#737b89" : attractive ? "#5597ff" : "#f0a078");
}

Object.values(controls).forEach(input => input.addEventListener("input", update));
document.getElementById("reset").addEventListener("click", () => {
  controls.q1.value = 1;
  controls.q2.value = -3;
  controls.distance.value = 4;
  update();
});
update();
