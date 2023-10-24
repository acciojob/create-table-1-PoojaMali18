function insert_Row() {
let v = document.createElement("TR");
	let  b=document.createElement("td");
	b.innerText("New Cell1");
	let  f=document.createElement("td");
	f.innerText("New Cell2");
	v.appendChild(b);
	b.appendChild(f);
tr.appendChild(v);
}
