document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const allCheckbox = document.querySelectorAll('[data-item="todoCheckbox"]');

  // Check Checked
  allCheckbox.forEach((item) => {
    const status = item.getAttribute("data-status");
    const whenCheckedVal = item.getAttribute("data-when-checked");
    if (status === whenCheckedVal) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });

  allCheckbox.forEach((item) =>
    item.addEventListener("change", function () {
      const todoId = this.getAttribute("data-value");
      if (!todoId) return;
      window.location.href = `/task/${todoId}/update/status`;
      console.log();
    })
  );
});
