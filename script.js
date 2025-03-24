const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);


        let ans = 0;
        let allprices = document.querySelectorAll('.price')
        for (let t of allprices) {
            ans += parseFloat(t.textContent)
        }

        const getSum = () => {
             const newRow = document.createElement("tr");
        const totalCell = document.createElement("td");

       
        totalCell.textContent = `Total Price: ₹${ans}`;
        newRow.append(totalCell);
		table.setAttribute("id","ans")
       
        document.querySelector("table").append(newRow);
        };



        getSumBtn.addEventListener("click", getSum);
