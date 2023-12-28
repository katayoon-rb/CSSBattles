const container = document.getElementById('container')
let day = 1


function makeMonth(month, start, end) {
    for (let i = start; i < end; i++) {
        day = day < 10? `0${day}`: day
        const date = `${month}${i < 10? `0${i}`: i}`

        if (date == 'Nov05') { continue }
        else {
            container.innerHTML += `
                <div class="project">
                    <div class="line">
                        <h2>${date}</h2>
                        <a href="${day} ${date}/index.html">
                            <button type="button">Go to Site</button>
                        </a>
                    </div>
                    <img src="${day} ${date}/screen.jpg" />
                </div>
            `
            day++
        }
    }
}


makeMonth('Sep', 8, 31)
makeMonth('Oct', 1, 32) 
makeMonth('Nov', 1, 31)
makeMonth('Dec', 1, 29)   // CHANGE //
