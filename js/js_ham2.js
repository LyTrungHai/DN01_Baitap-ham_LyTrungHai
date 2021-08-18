const SOTHU_1 = 500; //50Kw đầu
const SOTHU_2 = 650; // 50kw kế
const SOTHU_3 = 850; // 100kw kế
const SOTHU_4 = 1100; //150kw kế
const SOTHU_5 = 1300; // từ 150kw trở đi

function tinhTienDien() {
  var guestName = document.getElementById("inputName").value;
  var soKw = parseInt(document.getElementById("inputKw").value);
  var tienDien = 0;
  //so dau:
  if (soKw > 0 && soKw <= 50) {
    tienDien = soKw * SOTHU_1;
  }
  // so thu hai
  else if (soKw > 50 && soKw <= 100) {
    tienDien = 50 * SOTHU_1 + (soKw - 50) * SOTHU_2;
  }
  //so thu ba
  else if (soKw > 100 && soKw <= 200) {
    tienDien = 50 * SOTHU_1 + 50 * SOTHU_2 + (soKw - 100) * SOTHU_3;
  }
  //so thu tu
  else if (soKw > 200 && soKw <= 350) {
    tienDien =
      50 * SOTHU_1 + 50 * SOTHU_2 + 100 * SOTHU_3 + (soKw - 200) * SOTHU_4;
  }
  //so thu 5
  else if (soKw > 350) {
    tienDien =
      50 * SOTHU_1 +
      50 * SOTHU_2 +
      100 * SOTHU_3 +
      150 * SOTHU_4 +
      (soKw - 350) * SOTHU_5;
  }
  //
  else {
    alert("Số Kw không chính xác");
    return;
  }

  document.getElementById("txtElectric").innerHTML =
    "tên khách hàng: " +
    guestName +
    "<br> tiền điện: " +
    new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
    }).format(tienDien);
}

document.getElementById("btnKw").onclick = tinhTienDien;
