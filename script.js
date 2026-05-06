function pay(method) {
  const box = document.getElementById("paymentBox");
  const methodText = document.getElementById("method");

  box.classList.remove("hidden");
  methodText.innerHTML = "Metode: " + method;

  // efek sparkle lucu
  for (let i = 0; i < 20; i++) {
    let s = document.createElement("div");
    s.classList.add("sparkle");

    s.style.left = Math.random() * window.innerWidth + "px";
    s.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(s);

    setTimeout(() => s.remove(), 1500);
  }
}

function copyNumber() {
  navigator.clipboard.writeText("085855195379");
  alert("Nomor berhasil disalin!");
}
