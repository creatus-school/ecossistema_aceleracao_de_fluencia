document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach((otherItem) => {
                const otherAnswer = otherItem.querySelector(".faq-answer");

                otherItem.classList.remove("active");

                if (otherAnswer) {
                    otherAnswer.style.maxHeight = "0px";
                }
            });

            if (!isActive) {
                item.classList.add("active");

                // Aguarda o padding/classe active ser aplicado
                requestAnimationFrame(() => {
                    answer.style.maxHeight = `${answer.scrollHeight}px`;
                });
            }
        });
    });
});
