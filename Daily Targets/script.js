function makeMonth( container, day, month, end = 32, start = 1 ) {
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

if ( document.getElementById('sep2023Container') ) {
    makeMonth( document.getElementById('sep2023Container'), 1, 'Sep', 31, 8 )
}
else if ( document.getElementById('oct2023Container') ) {
    makeMonth( document.getElementById('oct2023Container'), 24, 'Oct' )
}
else if ( document.getElementById('nov2023Container') ) {
    makeMonth( document.getElementById('nov2023Container'), 55, 'Nov', 31 )
}
else if ( document.getElementById('dec2023Container') ) {
    makeMonth( document.getElementById('dec2023Container'), 84, 'Dec' )
}
else if ( document.getElementById('jan2024Container') ) {
    makeMonth( document.getElementById('jan2024Container'), 115, 'Jan' )
}
else if ( document.getElementById('feb2024Container') ) {
    makeMonth( document.getElementById('feb2024Container'), 146, 'Feb', 30 )
}
else if ( document.getElementById('mar2024Container') ) {
    makeMonth( document.getElementById('mar2024Container'), 175, 'Mar' )
}
else if ( document.getElementById('apr2024Container') ) {
    makeMonth( document.getElementById('apr2024Container'), 206, 'Apr', 31 )
}
else if ( document.getElementById('may2024Container') ) {
    makeMonth( document.getElementById('may2024Container'), 236, 'May' )
}
else if ( document.getElementById('june2024Container') ) {
    makeMonth( document.getElementById('june2024Container'), 267, 'Jun', 31 )
}
else if ( document.getElementById('july2024Container') ) {
    makeMonth( document.getElementById('july2024Container'), 297, 'Jul' )
}
else if ( document.getElementById('august2024Container') ) {
    makeMonth( document.getElementById('august2024Container'), 328, 'Aug' )
}
else if ( document.getElementById('sep2024Container') ) {
    let today = parseInt(Date().split(' ')[2]) + 1
    makeMonth( document.getElementById('sep2024Container'), 328, 'Aug', today )
}

// End Day:
// if 31 days => no entry for end
// if 30 days => 31
// if 29 days => 30
