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

        // Set the cell to span across the table and display the total price
        totalCell.setAttribute("colspan", 2);
        totalCell.textContent = `Total Price: ₹${ans}`;
        newRow.appendChild(totalCell);
		
       
        document.querySelector("table").appendChild(newRow);
        };



        getSumBtn.addEventListener("click", getSum);
