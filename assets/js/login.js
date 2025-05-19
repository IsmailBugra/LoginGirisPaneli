let Kullanıcıİsmi = "eyede erdoğan";
let KullanıcıŞifresi = "0408";

function giris() {
  let ismi = prompt("Kullanıcı adınızı girin:");
  let şifresi = prompt("Şifrenizi girin:");

  if (ismi === Kullanıcıİsmi && şifresi === KullanıcıŞifresi) {
    let ad = prompt("Adınızı girin:");
let soyad = prompt("Soyadınızı girin:");
let role = prompt("Rolünüzü girin:");
    alert(`Hoşgeldinnn ${role} - ${ad} ${soyad}`);
  }

if (ismi == Kullanıcıİsmi || şifresi !== KullanıcıŞifresi) {
let tekrar = prompt("Kullanıcı adı veya şifre hatalı. Tekrar denemek ister misin? (E/H)");
if (tekrar.toUpperCase() === "E") 
{giris(); }

if (tekrar.toUpperCase() === "H") 
{alert("Giriş yapılamadı, sistemden çıkış yapılıyor."); }}}

giris();
