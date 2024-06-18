document.addEventListener("DOMContentLoaded", function () {
        const button = document.getElementById("klik-disini");

        button.addEventListener("click", function () {
          const page1 = document.getElementById("page-1");
          const body = document.body;

          // Tambahkan class untuk slide up
          page1.classList.add("slide-up");

          // Ubah background color menjadi hitam selama transisi
          body.style.backgroundColor = "black";

          // Tunggu animasi selesai
          setTimeout(function () {
            // Redirect ke halaman halaman2.html setelah animasi selesai
            window.location.href = "halaman2.html";
          }, 1000); // Sesuaikan dengan durasi transisi CSS (1s dalam hal ini)
        });
      });