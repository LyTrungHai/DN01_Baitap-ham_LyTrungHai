const PHAN_TRAM_THUE_1 = 0.05;
const PHAN_TRAM_THUE_2 = 0.1;
const PHAN_TRAM_THUE_3 = 0.15;
const PHAN_TRAM_THUE_4 = 0.2;
const PHAN_TRAM_THUE_5 = 0.25;
const PHAN_TRAM_THUE_6 = 0.3;
const PHAN_TRAM_THUE_7 = 0.35;

function tienTruocThue(luong1Nam, nguoiPhuThuoc, phanTram) {
  const thuNhapChiuThue = luong1Nam - 4e6 - nguoiPhuThuoc * 1600000;
  var tienThue = thuNhapChiuThue * phanTram;
  return tienThue;
}

function tinhTienThue() {
  var luong1Nam = parseInt(document.getElementById("totalSalary").value);
  var nguoiPhuThuoc = parseInt(
    document.getElementById("inputDepend").value || 0
  );
  var tenNguoiDongThue = document.getElementById("inputName1").value;

  if (luong1Nam > 0 && luong1Nam <= 6e7) {
    var ketQuaThue = tienTruocThue(luong1Nam, nguoiPhuThuoc, PHAN_TRAM_THUE_1);
    if (ketQuaThue <= 0) {
      alert("Số tiền thu nhập không hợp lệ");
      return;
    }
  } else if (luong1Nam > 6e7 && luong1Nam <= 12e7) {
    ketQuaThue = tienTruocThue(luong1Nam, nguoiPhuThuoc, PHAN_TRAM_THUE_2);
  } else if (luong1Nam > 12e7 && luong1Nam <= 21e7) {
    ketQuaThue = tienTruocThue(luong1Nam, nguoiPhuThuoc, PHAN_TRAM_THUE_3);
  } else if (luong1Nam > 21e7 && luong1Nam <= 384e6) {
    ketQuaThue = tienTruocThue(luong1Nam, nguoiPhuThuoc, PHAN_TRAM_THUE_4);
  } else if (luong1Nam > 384e6 && luong1Nam <= 624e6) {
    ketQuaThue = tienTruocThue(luong1Nam, nguoiPhuThuoc, PHAN_TRAM_THUE_5);
  } else if (luong1Nam > 624e6 && luong1Nam <= 960e6) {
    ketQuaThue = tienTruocThue(luong1Nam, nguoiPhuThuoc, PHAN_TRAM_THUE_6);
  } else if (luong1Nam > 960e6) {
    ketQuaThue = tienTruocThue(luong1Nam, nguoiPhuThuoc, PHAN_TRAM_THUE_7);
  } else {
    alert("Số tiền thu nhập không hợp lệ");
    return;
  }

  document.getElementById("txtThue").innerHTML =
    "Họ Tên: " +
    tenNguoiDongThue +
    "<br> Tiền thuế thu nhập cá nhân: " +
    new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
    }).format(ketQuaThue);
}

// document.getElementById("btnThue").onclick = tinhTienThue;
