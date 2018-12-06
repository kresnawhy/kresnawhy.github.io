function terimaInput(){
	var x=document.forms['biodata']['nama'].value;
	var y=document.forms['biodata']['tanggal lahir'].value;
	var z=document.forms['biodata']['tempat lahir'].value;
	var a=document.forms['biodata']['NIP'].value;
	var b=document.forms['biodata']['Golongan'].value;
	var c=document.forms['biodata']['Instansi'].value;
	var d=document.forms['biodata']['Alamat Kantor'].value;
	var e=document.forms['biodata']['Alamat Rumah'].value;
	var f=document.forms['biodata']['hp'].value;
	var g=document.forms['biodata']['email'].value;
	var h=document.forms['biodata']['password'].value;
	var i=document.forms['biodata']['status'].value;
	
	var tabel = document.getElementById("tabelinput");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11)

	cell1.innerHTML = x;
	cell2.innerHTML = y;
	cell3.innerHTML = z;
	cell4.innerHTML = a;
	cell5.innerHTML = b;
	cell6.innerHTML = c;
	cell7.innerHTML = d;
	cell8.innerHTML = e;
	cell9.innerHTML = f;
	cell10.innerHTML = g;
	cell11.innerHTML = h;
	cell12.innerHTML = i;

	alert('data berhasil di entry');
}