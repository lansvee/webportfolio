document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for main header
    const typingElement = document.getElementById("typing");
    if (typingElement) {
        const text = "I'm your Full Stack Developer and Web-Engineering Wizard 😊!";
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.textContent += text[index];
                index++;
                setTimeout(type, 80); // Adjust speed
            }
        }
        typingElement.textContent = ""; // Clear initial content
        type();
    }

    // Typing effect for contact section
    const typingElementContact = document.getElementById("typing-contact");
    if (typingElementContact) {
        const contactText = "Let's bring your vision to life!";
        let indexContact = 0;

        function typeContact() {
            if (indexContact < contactText.length) {
                typingElementContact.textContent += contactText[indexContact];
                indexContact++;
                setTimeout(typeContact, 100); // Adjust speed
            }
        }

        // Observer to detect when the element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (typingElementContact.textContent === "") {
                        typeContact();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(typingElementContact);
    }
});
