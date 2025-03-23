const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);


        let totalSum = 0;
        let allprices = document.querySelectorAll('.price')
        for (let t of allprices) {
            totalSum += parseFloat(t.textContent)
        }

        const getSum = () => {
            let table = document.querySelector('table')
            let row = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            td1.innerText = 'Total price'
            td2.innerText = totalSum;
			td2.setAttribute('id','ans')
            row.append(td1,td2);
            table.append(row);
        };



        getSumBtn.addEventListener("click", getSum);
