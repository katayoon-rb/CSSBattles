const container = document.getElementById('container')
let list = [
    "01 Tanzania",
    "02 Kuwait",
    "03 Iceland",
    "04 Bahrain",
    "05 Brazil",
    "06 India",
    "07 South Korea",
    "08 Guernsey"
]


for (let i = 0; i < list.length; i++) {
    container.innerHTML += `
        <div class="project">
            <div class="line">
                <h2>${list[i].split(" ")[1]}</h2>
                <a href="${list[i]}/index.html">
                    <button type="button">Go to Site</button>
                </a>
            </div>
            <img src="${list[i]}/screen.jpg" />
        </div>
    `
}

