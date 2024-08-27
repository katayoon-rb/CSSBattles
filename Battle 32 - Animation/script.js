const container = document.getElementById("container");
let list = [
  "01 Wolverine",
  "02 Deadpool",
  "03 Magnetos helmet",
  "04 Punisher",
  "05 Green Lantern logo",
  "06 Hulk fist"
];

for (let i = 0; i < list.length; i++) {
  let name =
    list[i].split(" ")[1] +
    (list[i].split(" ")[2] ? ` ${list[i].split(" ")[2]}` : "");
  container.innerHTML += `
        <div class="project">
            <div class="line">
                <h2>${name}</h2>
                <a href="${list[i]}/index.html">
                    <button type="button">Go to Site</button>
                </a>
            </div>
            <img src="${list[i]}/screen.jpg" />
        </div>
    `;
}
