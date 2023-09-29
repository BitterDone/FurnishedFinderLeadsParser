javascript:(function(){
    function getChildText(el) {
        return el.children[1].innerText;
    }
    
    function getData() {
        const datas = [];
        if (children.length % 2 !== 0) { console.log('Odd length of results?'); }
        else { 
            for (let i=0;i<children.length-1;) {
                const outerRow = children[i];
                const innerRow = children[i+1];
                const innerRowTable = innerRow.children[0].children[0].getElementsByClassName('row p-2 m-0')[0];
    
                let name = outerRow.children[1].children[0].children[0].innerText.replaceAll(',',';');
                let unitId = getChildText(innerRowTable.children[2]).replaceAll(',',';');
                let location = getChildText(innerRowTable.children[3]).replaceAll(',',';');
                let dates = getChildText(innerRowTable.children[4]).replaceAll(',',';');
                let travelers = getChildText(innerRowTable.children[5]).replaceAll(',',';');
                let beds = getChildText(innerRowTable.children[6]).replaceAll(',',';');
                let job = getChildText(innerRowTable.children[7]).replaceAll(',',';');
                let pets = getChildText(innerRowTable.children[8]).replaceAll(',',';');
                let facility = getChildText(innerRowTable.children[9]).replaceAll(',',';');
                let staffCo = getChildText(innerRowTable.children[10]).replaceAll(',',';');
                let budget = getChildText(innerRowTable.children[11]).replaceAll(',',';');
                let propType = getChildText(innerRowTable.children[12]).replaceAll(',',';');
                let reqs = getChildText(innerRowTable.children[14]).replaceAll(',',';');
                let notes = getChildText(innerRowTable.children[15]).replaceAll(',',';');
                let notesForSelf = getChildText(innerRowTable.children[16]).replaceAll(',',';');
                let submitted = getChildText(innerRowTable.children[17]).replaceAll(',',';');
    
                const data = {  name, unitId, location, dates, travelers, beds, job, pets, facility, staffCo, budget, propType, reqs, notes, notesForSelf, submitted };
                datas.push(data);
    
                i += 2;
            }

            var csvCollection = '';
    
            for (let j=0;j<datas.length-1;j++) {
                const d = datas[j];
                let csvLine = '' + j + ',' ;
                for (var key in d) {
                    if (d.hasOwnProperty(key)) {
                        csvLine = csvLine + d[key] + ',' ;
                    }
                }
                csvCollection = csvCollection + csvLine + '\n';
            }
            
            console.log(csvCollection);
        }
    }
    getData();
})();
