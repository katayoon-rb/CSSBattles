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
}

if ( document.getElementById('sepContainer') ) {
    makeMonth( document.getElementById('sepContainer'), 'Sep', 8, 31 )
}
else if ( document.getElementById('octContainer') ) {
    makeMonth( document.getElementById('octContainer'), 'Oct', 1, 32 )
}
else if ( document.getElementById('novContainer') ) {
    makeMonth( document.getElementById('novContainer'), 'Nov', 1, 31 )
}
else if ( document.getElementById('decContainer') ) {
    makeMonth( document.getElementById('decContainer'), 'Dec', 1, 29 )  // CHANGE //
}
