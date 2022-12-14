document.querySelectorAll("a").forEach((a) => {
  // Jika di klik, maka jalankan fungsi ini
  a.addEventListener("click", (e) => {
    computerChoice(e);
    // console.log("success");
  });
});

function computerChoice(e) {
  // Ambil nilai dari a yang di klik
  let pilihanUser = e.target.innerText;

  // menangkap element pilihan komputer
  let pilihanKomputer = document.querySelector("#result");

  // Membuat array untuk pilihan komputer
  let choices = ["Rock", "Paper", "Scissors"];

  // Pilihan komputer secara random
  pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
  pilihanKomputer = pilihanKomputer.innerHTML;

  if (pilihanUser == pilihanKomputer) {
    // alert("Draw");
    setTimeout(() => alert("Draw"), 500);
  }

  if (pilihanKomputer == "Paper" && pilihanKomputer == "Rock") {
    setTimeout(() => alert("Computer Win"), 500);
  } else if (pilihanKomputer == "Rock" && pilihanUser == "Scissors") {
    setTimeout(() => alert("Computer Winn"), 500);
  } else if (pilihanKomputer == "Scissors" && pilihanUser == "Paper") {
    setTimeout(() => alert("Computer Winnn"), 500);
  }

  if (pilihanUser == "Paper" && pilihanKomputer == "Rock") {
    setTimeout(() => alert("User Win"), 500);
  } else if (pilihanUser == "Rock" && pilihanKomputer == "Scissors") {
    setTimeout(() => alert("User Winn"), 500);
  } else if (pilihanUser == "Scissors" && pilihanKomputer == "Paper") {
    setTimeout(() => alert("User Winnn"), 500);
  }
}
