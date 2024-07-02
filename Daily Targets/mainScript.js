const container = document.getElementById('container')
const months = ['september 2023', 'october 2023', 'november 2023', 'december 2023',
                'january 2024', 'february 2024', 'march 2024', 'april 2024',
                'may 2024', 'june 2024', 'july 2024']

for (let month in months) {
    container.innerHTML += `
        <div class="project">
            <div class="line">
                <h2>${month.split(" ")[0]}</h2>
                <a href="${month}.html">
                    <button type="button">View Projects</button>
                </a>
            </div>
        </div>
    `
}