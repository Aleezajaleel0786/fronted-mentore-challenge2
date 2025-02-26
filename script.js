document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let queryType = document.querySelector('input[name="queryType"]:checked');
    let consent = document.getElementById("consent").checked;

    if (!queryType) {
        alert("Please select a query type.");
        return;
    }

    alert (Thankyou,$ firstName! Your message has been received.);

    // Form reset
    document.getElementById("contactForm").reset();
});