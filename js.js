 function diklik() {
  var x = document.getElementById("opo");
    if (x.className == "topnav-right") {

      x.className += " responsive";
    } else {
      x.className = "topnav-right";
    }


  }

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
      var modaljasa = document.getElementById('jasa');
      var modalsp1 = document.getElementById('sp1');
      var modalsp2 = document.getElementById('pinjaman');
      var modalsp3 = document.getElementById('lebaran');
      var modaltk1 = document.getElementById('produk');

// ini tombol batennya pak
var btnanggota= document.getElementById("btnanggota");
var btnumum= document.getElementById("btnumum");
var btnjs1= document.getElementById("btnjs1");
var btnsp1= document.getElementById("btnsp1");
var btnsp2 = document.getElementById('btnsp2');
var btnsp3 = document.getElementById('btnsp3');
var btntk1 = document.getElementById('btntk1');

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];

// pokok user ngeklik modalnya keluar
btnanggota.onclick = function() {
  modalanggota.style.display = "block";
}

btnumum.onclick = function() {
  modalumum.style.display = "block";
}

btnjs1.onclick = function() {
  modaljasa.style.display = "block";
}

btnsp1.onclick = function() {
  modalsp1.style.display = "block";
}

btnsp2.onclick = function() {
  modalsp2.style.display = "block";
}

btnsp3.onclick = function() {
  modalsp3.style.display = "block";
}

btntk1.onclick = function() {
  modaltk1.style.display = "block";
}

//terus ini kalo mencet silang ya keluar lah
span.onclick = function() {
  modalanggota.style.display = "none";
}
span1.onclick = function() {
  modalumum.style.display = "none";
}
span2.onclick = function() {
  modaljasa.style.display = "none";
}
span3.onclick = function() {
  modalsp1.style.display = "none";
}
span4.onclick = function() {
  modalsp2.style.display = "none";
}
span5.onclick = function() {
  modalsp3.style.display = "none";
}
span6.onclick = function() {
  modaltk1.style.display = "none";
}

// kalo males mencet silang dipencet diluar boxnya ya ilang boxnya

window.onclick = function(event) {
  if (event.target == modalanggota) {
    modalanggota.style.display = "none";
  }
  if (event.target == modalumum) {
    modalumum.style.display = "none";
  }
  if (event.target == modaljasa) {
    modaljasa.style.display = "none";
  }
  if (event.target == modalsp1) {
    modalsp1.style.display = "none";
  }
  if (event.target == modalsp2) {
    modalsp2.style.display = "none";
  }
  if (event.target == modalsp3) {
    modalsp3.style.display = "none";
  }
  if (event.target == modaltk1) {
    modaltk1.style.display = "none";
  }
}
}
); 
