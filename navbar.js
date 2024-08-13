document.addEventListener('DOMContentLoaded', function() {
    const navContent = `
        <nav>
            <div class="nav-wrapper" style="background-color: #32022B; display: flex; justify-content: center; padding: 0 20px;">
                <div style="display: flex; gap: 20px;">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="org-structure.html" class="nav-link">Org Structure</a>
                    <a href="get-involved.html" class="nav-link">Get Involved!</a>
                    <a href="meet-the-organizers.html" class="nav-link">Meet the Organizers</a>
                </div>
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navContent);
});

// Adding CSS for the links
const style = document.createElement('style');
style.innerHTML = `
    .nav-link {
        color: #fff;
        font-size: 1.2em;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #4A035A;
        border-radius: 8px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .nav-link:hover {
        background-color: #6A037B;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    .nav-link:active {
        background-color: #8A039C;
    }
`;
document.head.appendChild(style);
