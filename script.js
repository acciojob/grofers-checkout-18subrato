const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


getSumBtn.addEventListener("click", cal);
const getSum = () => {
let sum  = 0;
	let priceNodeList=document.querySelectorAll('.price');
	for(let t of priceNodeList){
		sum+=parseInt(t.innerText);
	}

	return sum;
  
};

function cal(){
	let totalPrice = getSum();
	let table = document.querySelector('table');
	let row = document.createElement('tr')
	let col = document.createElement('td')

	col.innerText = `Total Price ${totalPrice}`;
	row.append(col);
	table.append(row);
}


