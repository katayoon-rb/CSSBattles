const container = document.getElementById('container')
let list = [
    "01 Striped Triangle",
    "02 Icecream Sticks",
    "03 Triangle Hook",
    "04 Power Chip",
    "05 Modern Fence",
    "06 Abstract Firefly"
]


for (let i = 0; i < list.length; i++) {
    let name = list[i].split(" ")[1] + ' ' +  list[i].split(" ")[2]
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
    `
}
