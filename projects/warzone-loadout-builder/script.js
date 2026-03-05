const button = document.getElementById("buildBtn");
const weaponSelect = document.getElementById("weaponSelect");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const weapon = weaponSelect.value;

  if (weapon === "") {
    result.innerHTML = "⚠️ Select a weapon first!";
    return;
  }

  result.innerHTML = `
        🔫 Recommended Loadout<br><br>
        Primary Weapon: <strong>${weapon}</strong><br>
        Optic: Aim OP-V4<br>
        Barrel: High Velocity Barrel<br>
        Underbarrel: Commando Foregrip
    `;
});
