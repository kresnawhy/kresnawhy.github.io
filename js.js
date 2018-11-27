 function javascriptruwet()
      {
        let anchors = $('a[href^="#"][class*="link"]');
        let positions = [];
        let hashes = [];
        anchors.each(function(index, item)
        {
          let hash = item.hash;
          let position = $(hash).position().top;
          hashes.push(hash);
          positions.push(position);
        });
        $(window).scroll(function()
        {
          let window_position = $(window).scrollTop();
          let current_hash = window.location.hash;
          let deltas = positions.map(x => Math.abs(
            x - window_position 
          ));
          let min = Math.min(...deltas);
          let index = deltas.indexOf(min);
          let new_hash = hashes[index];
          $('.topnav-right a[href="' + new_hash + '"]').addClass('active');
          $('.topnav-right a[href!="' + new_hash + '"]').removeClass('active'); 
          if (new_hash != current_hash)
          {
            history.pushState(null, null, new_hash);
          }
        });
      }
      $(window).on('load', javascriptruwet);

$(document).ready(
function() {
  var modalanggota = document.getElementById('anggota');
  var modalumum = document.getElementById('umum');

// ini tombol batennya pak
var btnanggota= document.getElementById("btnanggota");
var btnumum= document.getElementById("btnumum");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];

// pokok user ngeklik modalnya keluar
btnanggota.onclick = function() {
    modalanggota.style.display = "block";
}

btnumum.onclick = function() {
    modalumum.style.display = "block";
}

//terus ini kalo mencet silang ya keluar lah
span.onclick = function() {
    modalanggota.style.display = "none";
}
span1.onclick = function() {
    modalumum.style.display = "none";
}

// kalo males mencet silang dipencet diluar boxnya ya ilang boxnya

window.onclick = function(event) {
    if (event.target == modalanggota) {
        modalanggota.style.display = "none";
    }
    if (event.target == modalumum) {
        modalumum.style.display = "none";
    }
}
}
  );
