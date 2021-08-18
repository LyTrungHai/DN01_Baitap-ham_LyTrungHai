function checkZone() {
  var takeZone = +document.getElementById("inputZone").value;

  return takeZone;
}

function checkSubJect() {
  var takeSubject = +document.getElementById("inputSubject").value;

  return takeSubject;
}

function tinhDiem() {
  var diemChuan = parseFloat(document.getElementById("basisPoint").value) || 0;
  var diem1 = parseFloat(document.getElementById("inputScore1").value);
  var diem2 = parseFloat(document.getElementById("inputScore2").value);
  var diem3 = parseFloat(document.getElementById("inputScore3").value);

  var khuVuc = checkZone();

  var doiTuong = checkSubJect();

  var tong3Diem = diem1 + diem2 + diem3 + doiTuong + khuVuc;
  console.log(tong3Diem);

  var thongBao = document.getElementById("txtScore");

  if (!diem1 || !diem2 || !diem3) {
    thongBao.innerHTML = "Bạn đã rớt , do có điểm nhỏ hơn hoặc bằng 0.";
    return;
  }

  if (tong3Diem >= diemChuan) {
    thongBao.innerHTML = "Bạn đã đậu , điểm của bạn là: " + tong3Diem;
  } else {
    thongBao.innerHTML = "Bạn đã rớt , điểm của bạn là: " + tong3Diem;
  }
}

document.getElementById("btnScore").onclick = tinhDiem;
