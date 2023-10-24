function insert_Row() {
let v = document.createElement("TR");
	let  b=document.createElement("td");
	b.innerText("New Cell1");
	let  f=document.createElement("td");
	f.innerText("New Cell2");
	v.appendChild(b);
	v.appendChild(f);
 let table = document.getElementById("sampleTable");


    if (table) {
        table.insertBefore(v, table.firstChild);
    }
}
