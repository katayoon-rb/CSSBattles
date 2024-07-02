const container = document.getElementById('container')
const months = ['September 2023', 'October 2023', 'November 2023', 'December 2023',
                'January 2024', 'February 2024', 'March 2024', 'April 2024',
                'May 2024', 'June 2024', 'July 2024']

for (let i in months) {
    container.innerHTML += `
        <div class="project">
            <div class="line">
                <h2>${months[i].split(" ")[0]}</h2>
                <a href="${months[i].toLowerCase()}.html">
                    <button type="button">View Projects</button>
                </a>
            </div>
        </div>
    `
}
