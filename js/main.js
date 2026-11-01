// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email button
document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;
    const original = button.textContent;

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
    } catch {
      // Older browsers: select the address so it can be copied by hand
      window.prompt("Copy this email address:", text);
    }

    setTimeout(() => {
      button.textContent = original;
    }, 2000);
  });
});