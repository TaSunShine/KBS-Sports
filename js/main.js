document.addEventListener('DOMContentLoaded', function() {
    const switches = document.querySelectorAll('.switch');
    const buys = document.querySelectorAll('.buy');

    switches.forEach(switchElement => {
        switchElement.addEventListener('click', function() {
            // Hide all .buy elements
            buys.forEach(buyElement => {
                buyElement.style.display = 'none';
            });

            // Show the targeted .buy element
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.style.display = 'block';
            }
        });
    });
});