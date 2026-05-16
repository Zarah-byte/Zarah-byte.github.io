const projects = document.querySelectorAll(".projects li");
const mobileCheck = window.matchMedia("(max-width: 768px)");

const observer = new IntersectionObserver(function (entries) {
	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			entry.target.classList.add("is-active");
		} else {
			entry.target.classList.remove("is-active");
		}
	});
}, {
	rootMargin: "-40% 0 -40% 0"
});

function updateProjectScrollEffect() {
	projects.forEach(function (project) {
		if (mobileCheck.matches) {
			observer.observe(project);
		} else {
			observer.unobserve(project);
			project.classList.remove("is-active");
		}
	});
}

updateProjectScrollEffect();
mobileCheck.addEventListener("change", updateProjectScrollEffect);