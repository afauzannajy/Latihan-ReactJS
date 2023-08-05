function getPilihanKomputer() {
  const komp = Math.random();

  if (komp < 0.34) return "gajah";
  if (komp >= 0.34 && komp < 0.67) return "orang";
  return "semut";
}

function getHasil(komp, pemain) {
  if (komp == pemain) return "SERI !";
  if (komp == "gajah") return pemain == "orang" ? "KALAH !" : "MENANG !";
  if (komp == "semut") return pemain == "gajah" ? "KALAH !" : "MENANG !";
  if (komp == "orang") return pemain == "semut" ? "KALAH !" : "MENANG !";
}

function acak() {
  const imgKomp = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      return;
    }
    imgKomp.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPemain = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPemain);

    acak();
    setTimeout(function () {
      const imgKomp = document.querySelector(".img-komputer");
      imgKomp.setAttribute("src", "img/" + pilihanKomputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

function Header() {
  return <h1>Game Suwit Jawa</h1>;
}

function Computer(props) {
  return (
    <div className="area-komputer">
      <img
        src={"img/" + props.pilihan + ".png"}
        alt=""
        className="img-komputer"
      />
    </div>
  );
}

function Info(props) {
  return <div className="info">{props.status}</div>;
}

function Player(props) {
  const gambar = ["gajah", "orang", "semut"];
  return (
    <div className="area-pemain">
      <ul>
        {gambar.map((g) => {
          return (
            <li key={g}>
              <img
                src={"img/" + g + ".png"}
                alt={g}
                className={g}
                onClick={props.click}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Content() {
  function getPilihanKomputer() {
    const komp = Math.random();
    if (komp < 0.34) return "gajah";
    if (komp >= 0.34 && komp < 0.67) return "orang";
    return "semut";
  }

  function getHasil(komp, pemain) {
    if (komp == pemain) return "SERI !";
    if (komp == "gajah") return pemain == "orang" ? "KALAH !" : "MENANG !";
    if (komp == "semut") return pemain == "gajah" ? "KALAH !" : "MENANG !";
    if (komp == "orang") return pemain == "semut" ? "KALAH !" : "MENANG !";
  }

  function acak() {
    const imgKomp = document.querySelector(".img-komputer");
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
      if (new Date().getTime() - waktuMulai > 1000) {
        return;
      }
      imgKomp.setAttribute("src", "img/" + gambar[i++] + ".png");
      if (i == gambar.length) i = 0;
    }, 100);
  }

  const [komputer, setKomputer] = React.useState("gajah");
  const [info, setInfo] = React.useState(null);

  function handleClick(e) {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPemain = e.target.className;
    const hasil = getHasil(pilihanKomputer, pilihanPemain);
    acak();
    setTimeout(function () {
      setKomputer(pilihanKomputer);
      setInfo(hasil);
    }, 1000);
  }
  return (
    <div className="container">
      <Computer pilihan={komputer} />
      <Info status={info} />
      <Player click={handleClick} />
    </div>
  );
}

function MyApp() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
