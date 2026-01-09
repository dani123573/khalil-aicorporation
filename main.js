// Add your custom functionality here for sidebar buttons

document.getElementById('btn1').addEventListener('click', () => {
    // Write your code here
});

document.getElementById('btn2').addEventListener('click', () => {
    // Write your code here
});

document.getElementById('btn3').addEventListener('click', () => {
    // Write your code here
});

document.getElementById('btn4').addEventListener('click', () => {
    // Write your code here
});
// Sidebar button functionality — empty for now
for(let i = 1; i <= 14; i++){
    document.getElementById('btn' + i).addEventListener('click', () => {
        // Add your code here
        // Example: load different content in the main area
        console.log("Button " + i + " clicked");
    });
}

const buttons = document.querySelectorAll('.side-btn');
const content = document.querySelector('.content');
// Function to load page content based on button index
function loadPage(pageIndex) {
    switch(pageIndex) {
        case 0:
            content.innerHTML = `
                <h1>Welcome to Khalil Corporation Dashboard</h1>
                <p>This is your main dashboard page. Here you can see your overview, stats, or widgets. Enjoy your visit!</p>
            `;
            break;
        case 1:
            content.innerHTML = `
                <h1>FILES</h1>
                <p>Download your files here:</p>
                <ul>
                    <li><a href="YOUR_LINK_HERE" download>File 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>File 2</a></li>
                    <li><a href="YOUR_LINK_HERE" download>File 3</a></li>
                </ul>
            `;
            break;
        case 2:
            content.innerHTML = `
                <h1>CONTENT</h1>
                <p>Download content here:</p>
                <ul>
                    <li><a href="YOUR_LINK_HERE" download>Content 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Content 2</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Content 3</a></li>
                </ul>
            `;
            break;
        case 3:
            content.innerHTML = `
                <h1>CHEATS</h1>
                <p>Download cheats here:</p>
                <ul>
                    <li><a href="YOUR_LINK_HERE" download>Cheat 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Cheat 2</a></li>
                </ul>
            `;
            break;
        case 4:
            content.innerHTML = `
                <h1>WORKS</h1>
                <p>Download work files here:</p>
                <ul>
                    <li><a href="YOUR_LINK_HERE" download>Work 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Work 2</a></li>
                </ul>
            `;
            break;
        case 5:
            content.innerHTML = `
                <h1>DOWNLOADS</h1>
                <p>Download general resources:</p>
                <ul>
                    <li><a href="https://gofile.io/d/BzZJX6" download>Download 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Download 2</a></li>
                </ul>
            `;
            break;
        case 6:
            content.innerHTML = `
                <h1>RESOURCES</h1>
                <p>Access resources here:</p>
                <ul>
                    <li><a href="YOUR_LINK_HERE" download>Resource 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Resource 2</a></li>
                </ul>
            `;
            break;
        case 7:
            content.innerHTML = `
                <h1>HELP</h1>
                <p>Download help guides:</p>
                <ul>
                    <li><a href="YOUR_LINK_HERE" download>Guide 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Guide 2</a></li>
                </ul>
            `;
            break;
        case 8:
            content.innerHTML = `
                <h1>CONTACT US</h1>
                <p>Download our contact info:</p>
                <ul>
                    <li><a href="YOUR_LINK_HERE" download>Contact 1</a></li>
                    <li><a href="YOUR_LINK_HERE" download>Contact 2</a></li>
                </ul>
            `;
            break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
            content.innerHTML = `
                <h1>COMING SOON</h1>
                <p>This feature will be uploaded soon.</p>
            `;
            break;
        default:
            content.innerHTML = `<h1>Unknown Page</h1>`;
    }

    // Fade-in animation
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.transition = "opacity 0.5s ease-in";
        content.style.opacity = 1;
    }, 10);
}

    

    // Fade-in animation
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.transition = "opacity 0.5s ease-in";
        content.style.opacity = 1;
    }, 10);


// Load default dashboard (first button) on page load
window.addEventListener('DOMContentLoaded', () => {
    loadPage(0);
});

// Add click listeners to all buttons
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        loadPage(index);
    });
});

    // Add more else if blocks for other buttons as needed

    // Fade-in animation
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.transition = "opacity 0.5s ease-in";
        content.style.opacity = 1;
    }, 10);


// Load main dashboard by default on page load
window.addEventListener('DOMContentLoaded', () => {
    loadPage(0); // First button = dashboard
});

// Add click listeners for all buttons
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        loadPage(index);
    });
});
