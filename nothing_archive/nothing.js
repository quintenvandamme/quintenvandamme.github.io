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
    var tableBody = document.querySelector('#checksumsTable tbody');
    tableBody.innerHTML = ''; // Clear existing table data

    var files = json.result;

    for (var i = 0; i < files.length; i++) {
        var nameLong = files[i].name;
		
		const pieces = nameLong.split('/')
		const name = pieces[pieces.length - 1]
		
		if (name.endsWith('.zip')) {
        var size = parseInt(files[i].size);
        var sha1 = files[i].sha1;

        var newRow = tableBody.insertRow(tableBody.rows.length);
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