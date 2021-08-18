var connectGuestEl = document.querySelector(".connectGuest");
var inputGuestEl = document.querySelector("#inputGuest");
const HOA_DON_NHA_DAN = 4.5;
const DICH_VU_NHA_DAN = 20.5;
const KENH_NHA_DAN = 7.5;
// ==
const HOA_DON_DOANH_NGHIEP = 15;
const DICH_VU_DOANH_NGHIEP = 75;
const KENH_DOANH_NGHIEP = 50;
const PHI_KET_NOI = 5;
// ==
function showDropdown() {
  if (inputGuestEl.value === "2") {
    connectGuestEl.style.display = "block";
  } else {
    connectGuestEl.style.display = "none";
  }
}

function tinhTienCap() {
  var kenhCaoCap = parseInt(document.querySelector("#soKenhCaoCap").value);
  var doanhNgiepKetNoi = parseInt(document.querySelector("#company").value);
  var maKhachHang = document.querySelector("#idGuest").value;
  var tongtienCap = 0;

  if (!kenhCaoCap) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }
  if (inputGuestEl.value === "0") {
    alert("Vui lòng chọn khách hàng");
    return;
  } else if (inputGuestEl.value === "1") {
    tongtienCap = HOA_DON_NHA_DAN + DICH_VU_NHA_DAN + kenhCaoCap * KENH_NHA_DAN;
  } else {
    // const phiDichVu =
    //   doanhNgiepKetNoi > 10
    //     ? DICH_VU_DOANH_NGHIEP + (doanhNgiepKetNoi - 10) * PHI_KET_NOI
    //     : DICH_VU_DOANH_NGHIEP;
    if (doanhNgiepKetNoi > 10) {
      var phiDichVu = 0;
      phiDichVu = DICH_VU_DOANH_NGHIEP + (doanhNgiepKetNoi - 10) * PHI_KET_NOI;
    } else {
      phiDichVu = DICH_VU_DOANH_NGHIEP;
    }
    tongtienCap =
      HOA_DON_DOANH_NGHIEP + kenhCaoCap * KENH_DOANH_NGHIEP + phiDichVu;
  }
  console.log(tongtienCap);
  document.querySelector("#txtCap").innerHTML =
    "Mã khách hàng: " +
    maKhachHang +
    "<br>Tiền cáp: " +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(tongtienCap);
}
