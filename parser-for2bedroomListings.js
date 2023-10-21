javascript:(function(){
    function noCommas(s) {
        return s.replaceAll(',',';');
    }
    function getData() {
        const datas = [];
        const children = document.getElementById('map_table').children;

        for (let i=0;i<children.length;) {
            const parent = children[i].children[0].children[0].children[0].children;
            const price = noCommas(parent[1].children[0].innerText);
            const title = noCommas(parent[2].innerText);
            
            const detailList = parent[3].children[0].children[0].children;
            const amens = {
                'Fully_Furnished': false,
                'Utilities_Included': false,
                'Pets_Welcome': false,
                '3_bedroom': false,
                '2_bedroom': false,
            };
            for (let j=0;j<detailList.length;) {
                const item = detailList[j].innerText.replaceAll(' ','_');
                amens[item] = true;
                j++;
            }

            datas.push({ title, price, amens });

            i++;
        }
        
        let csvCollection = '';

        for (let j=0;j<datas.length;j++) {
            const d = datas[j];
            let csvLine = '' + j + ',' ;
            for (var key in d) {
                if (d.hasOwnProperty(key)) {
                    if (typeof d[key] === 'string') {csvLine = csvLine + d[key] + ',' ;}
                    if (typeof d[key] === 'object') {
                        for (var amen in d[key]) {
                            if (d[key].hasOwnProperty(amen)) {
                                csvLine = csvLine + d[key][amen] + ',' ;
                            }
                        }
                    }
                    
                }
            }
            csvCollection = csvCollection + csvLine + '\n';
        }
        
        console.log(csvCollection);
    }
    getData();
})();
