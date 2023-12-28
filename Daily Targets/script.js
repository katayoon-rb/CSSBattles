// const sepContainer = document.getElementById('sepContainer')
// const octContainer = document.getElementById('octContainer')
// const novContainer = document.getElementById('novContainer')
// const decContainer = document.getElementById('decContainer')
let day = 1


function makeMonth(container, month, start, end) {
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
    // if (month == 'Sep') { sepContainer.innerHTML = output }
    // else if (month == 'Oct') { octContainer.innerHTML = output }
    // else if (month == 'Nov') { novContainer.innerHTML = output }
    // else if (month == 'Dec') { decContainer.innerHTML = output }
}

if ( document.getElementById('sepContainer') ) {
    const sepContainer = document.getElementById('sepContainer')
    makeMonth(sepContainer, 'Sep', 8, 31)
}

// makeMonth('Oct', 1, 32) 
// makeMonth('Nov', 1, 31)
// makeMonth('Dec', 1, 29)   // CHANGE //
