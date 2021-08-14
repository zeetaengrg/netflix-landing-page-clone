const faqQuestion = document.querySelectorAll(".faq-questions");
const faqAnswer = document.querySelectorAll(".faq-answer");

function selectContent(e) {
    showAnswer();
    hideAnswer();

    // this.classList.
}

function hideAnswer() {
    faqAnswer.forEach(item => {
        item.classList.remove("faq-answer");
    });
}

function showAnswer() {
    faqAnswer.forEach(item => {
        item.classList.add("faq-answer");
    });
}

// Listen for faq-question button click
faqAnswer.forEach(item => {
    item.addEventListener("click", selectContent);
});
