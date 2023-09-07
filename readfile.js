let jsonData;
const csvFile = 'Table_Input.csv';
fetch(csvFile)
        .then(response => response.text())
        .then(data => {displayjson(data);
                        displaytable1(data);
                        displaytable2(data);
        })
        .catch(error => console.error('Error:', error));


function displaytable2(data){
    let data2=displayjson(data);
    console.log("table2");
    // console.log(data2);
    let A5Value
    let A20Value
    let A15Value
    let A7Value
    let A13Value
    let A12Value
    
    data2.forEach(e => {
        // console.log(e);
        switch(e["Index #"]){
            case "A5":
                console.log("a5 found")
                // console.log(e["Value"])
                A5Value=parseInt(e["Value"]);
                break;
            case "A20":
                console.log("A20 found")
                // console.log(e["Value"])
                A20Value=parseInt(e["Value"])
                break;
            case "A15":
                console.log("A15 found")
                A15Value=parseInt(e["Value"])
                break;
            case "A7":
                console.log("A7 found")
                A7Value =parseInt(e["Value"])
                break;
            case "A13":
                console.log("A13 found")
                A13Value=parseInt(e["Value"])
                break;
            case "A12":
                console.log("A12 found")
                A12Value=parseInt(e["Value"])
                break;
            default:
                console.log("not found")
        }
    });
    function Alpha(num1,num2){
        console.log("Alpha");
        // console.log(num1);
        // console.log(num2);
        let result=num1+num2;
        console.log(result);
        return result;        
    }
    function Beta(num1,num2){
        console.log("Beta");
        // console.log(num1);
        // console.log(num2);
        let result=num1/num2;
        console.log(result);
        return result;
    }
    function Charlie(num1,num2){
        console.log("Charlie");
        // console.log(num1);
        // console.log(num2);
        let result=num1*num2;
        console.log(result);
        return result;
    }
    const alphaResult = Alpha(A5Value, A20Value);
    const betaResult = Beta(A15Value, A7Value);
    const charlieResult = Charlie(A13Value, A12Value);
    ////////////////////////////////Table2/////////////////////////////////////////////
    
    const table = document.getElementById('dataTable2');
    table.innerHTML = '';
    // const table2=["Category","Value","Alpha",Alpha(A5Value,A20Value),"Beta", Beta(A15Value,A7Value),"Charlie",Charlie(A13Value,A12Value)]
    const table2 = [
        ["Category", "Value"],
        ["Alpha", alphaResult],
        ["Beta", betaResult],
        ["Charlie", charlieResult]
    ];
    console.log(table2);
    //////////////////////////////////HEADER////////////////////////////////////////////////
    const headerRow = document.createElement('tr');
    for (i = 0; i < 2; i++) {
        const th = document.createElement('th');
        th.textContent = table2[0][i];
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    //////////////////////////////////HEADER//////////////////////////////////////////////////

    //////////////////////////////////DATA////////////////////////////////////////////////////
    // console.log(table2.slice(2));
    for (let i = 1; i < table2.length; i++) {
        const dataRow = document.createElement('tr');
        for (let j = 0; j < 2; j++) {
            const dataCell = document.createElement('td');
            dataCell.textContent = table2[i][j];
            dataRow.appendChild(dataCell);
        }
        table.appendChild(dataRow);
    }
    /////////////////////////////////////////////////////////////////////////////////////////
   

    /////////////////////////////////Table2//////////////////////////////////////////////////
}
function displaytable1(data){
    let data1=displayjson(data);
    console.log("table1");
    // console.log(data1[0]);
    // console.log(data1[1]);
    const table = document.getElementById('dataTable1');
    table.innerHTML = '';
    ///////////////////////////HEADER////////////////////////////////////////////////////////////
    const header=data1[0];
    const headerRow = document.createElement('tr');
    // console.log(header["Index #"]);
    // console.log(header["Value"]);
    Object.keys(header).forEach(e => {
        // console.log(e);
        const th = document.createElement('th');
        th.textContent = e;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    ////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////DATA/////////////////////////////////////////////////////////////
    // slice the first row(header)
    data1.slice(1).forEach(e => {
        // console.log(e);
        const row = document.createElement('tr');
        Object.keys(e).forEach(key => {
            // console.log(key);//loop all keys
            // console.log(e[key]); //loop all key's values
            const datacell = document.createElement('td');
            datacell.textContent = e[key];
            row.appendChild(datacell);
        });
        table.appendChild(row);
    });
    ////////////////////////////////////////////////////////////////////////////////////////////
}
   
function displayjson(data){
    // console.log(data);
    const row =data.split('\r\n');
    // console.log(row);
    const headers = row[0].split(',');
    // console.log(headers);
    const jsonData = [];
    row.forEach(e => {
        // console.log(e);
        const content = e.split(',');
        // console.log(content);
        if(content.length === headers.length){
            const obj = {};
            headers.forEach((header, i) => {
                obj[header] = content[i];
            });
            jsonData.push(obj);
        }
    });
    // console.log(jsonData);
    return jsonData
}