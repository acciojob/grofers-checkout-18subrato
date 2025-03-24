const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);


        let totalSum = 0;
        let allprices = document.querySelectorAll('.price')
        for (let t of allprices) {
            totalSum += parseFloat(t.textContent)
        }

        const getSum = () => {
             const newRow = document.createElement("tr");
        const totalCell = document.createElement("td");

        // Set the cell to span across the table and display the total price
        totalCell.setAttribute("colspan", 2);
        totalCell.textContent = `Total Price: ₹${totalSum}`;
        newRow.appendChild(totalCell);
		newRow.id = "ans"

        // Add the new row to the table
        document.querySelector("table").appendChild(newRow);
        };



        getSumBtn.addEventListener("click", getSum);
