function loadJSONAndPopulateTable(jsonPath) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseJSONAndPopulateTable(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", jsonPath, true);
    xhttp.send();
}

function parseJSONAndPopulateTable(json) {
	var otaTable = document.querySelector('#OTAchecksumsTable tbody');
	var bootTable = document.querySelector('#BOOTchecksumsTable tbody');
	var fastbootTable = document.querySelector('#FASTBOOTchecksumsTable tbody');

	otaTable.innerHTML = '';
	bootTable.innerHTML = '';
	fastbootTable.innerHTML = '';

    var files = json.result;

    for (var i = 0; i < files.length; i++) {
        var nameLong = files[i].name;
		
		const pieces = nameLong.split('/')
		const name = pieces[pieces.length - 1]
		
		if (name.endsWith('.zip')) {
			var size = parseInt(files[i].size);
			var sha1 = files[i].sha1;

			var newRow = otaTable.insertRow(otaTable.rows.length);
			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);

			var sizeMB = convertBytesToMB(size);
			var sizeGB = convertBytesToGB(size);

			cell1.innerHTML = name;
			cell2.innerHTML = sha1;
			cell3.innerHTML = sizeMB.toFixed(2) + ' MB';
		}
		
		if (name.endsWith('.img')) {
			var size = parseInt(files[i].size);
			var sha1 = files[i].sha1;

			var newRow = bootTable.insertRow(bootTable.rows.length);
			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);

			var sizeMB = convertBytesToMB(size);
			var sizeGB = convertBytesToGB(size);

			cell1.innerHTML = name;
			cell2.innerHTML = sha1;
			cell3.innerHTML = sizeMB.toFixed(2) + ' MB';
		}

		if (name.endsWith('.rar') || name.endsWith('.7z')) {
			var size = parseInt(files[i].size);
			var sha1 = files[i].sha1;

			var newRow = fastbootTable.insertRow(fastbootTable.rows.length);
			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);

			var sizeMB = convertBytesToMB(size);
			var sizeGB = convertBytesToGB(size);

			cell1.innerHTML = name;
			cell2.innerHTML = sha1;
			cell3.innerHTML = sizeMB.toFixed(2) + ' MB';
		}
    }
}

function convertBytesToMB(bytes) {
    return bytes / (1024 * 1024);
}

function convertBytesToGB(bytes) {
    return bytes / (1024 * 1024 * 1024);
}