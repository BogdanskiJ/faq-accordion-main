const questionHandler = document.querySelectorAll(".question");

questionHandler.forEach((q) =>
	q.addEventListener("click", () => handleQuestionClick(q)),
);

const handleQuestionClick = (q) => {
	let answer = q.querySelector(".answer");
	let button = q.querySelector("img");

	answer.classList.toggle("answerToggle");
	button.classList.toggle("open");

	if (button.classList.contains("open")) {
		button.src = "./assets/images/icon-minus.svg";
	} else {
		button.src = "./assets/images/icon-plus.svg";
	}
};
