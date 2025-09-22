const headerHTML = `
<header>
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="navbar-brand">SIAM JKUAT</a>
            <div class="menu-icon">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="join.html">Join Us</a></li>
            </ul>
        </div>
    </nav>
</header>
`;

document.getElementById('header-placeholder').innerHTML = headerHTML;
