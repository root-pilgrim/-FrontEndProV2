"use strict";

const formEl = document.querySelector(".todo-form");

const nameEl = document.querySelector('[name="name"]');
const ownerEl = document.querySelector('[name="owner"]');
const statusEl = document.querySelector('[name="status"]');

const tableEl = document.querySelector(".todo-table");
const tableBodyEl = tableEl.querySelector("tbody");
// const tableFooterEl = tableEl.querySelector("tfoot");
const tableFooterEl = document.getElementById("counter");

// FORM LISTENERS
formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	const name = nameEl.value;
	const owner = ownerEl.value;
	const status = statusEl.value;

	const nameFieldIsValid = validateField(nameEl, /^[a-zA-Z]/);
	const ownerFieldIsValid = validateField(
		ownerEl,
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	);
	const statusFieldIsValid = validateField(statusEl, /^[a-zA-Z]/);

	
	if (nameFieldIsValid && ownerFieldIsValid && statusFieldIsValid) {
		appendToTable({
			name,
			owner,
			status,
		});
		if( status === 'completed'){
			counter.add();
		}
	}
});

formEl.addEventListener("reset", (e) => {
	e.preventDefault();
	clearForm();
	counter.reset();
});

function clearForm() {
	tableBodyEl.querySelectorAll("tr").forEach((e) => {
		tableBodyEl.removeChild(e)
		})
}

function isEmpty(value) {
	return value.trim().length === 0;
}

function validateField(el, regex) {
	const value = el.value;
	const result = regex.test(value);
	if (!result) {
		el.classList.add("error");
	} else {
		el.classList.remove("error");
	}
	return result;
}

nameEl.addEventListener("change", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

nameEl.addEventListener("blur", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

ownerEl.addEventListener("change", (e) => {
	validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

ownerEl.addEventListener("blur", (e) => {
	validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

statusEl.addEventListener("blur", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

// TABLE

function createTableItem(obj) {
	const trEl = document.createElement("tr");
	Object.entries(obj).forEach(([key, value]) => {
		const tdEl = document.createElement("td");
		tdEl.innerText = value;
		trEl.appendChild(tdEl);
	});
	const removeButtonEl = createRemoveButton();
	trEl.appendChild(removeButtonEl);
	return trEl;
}

function appendToTable(obj) {
	tableBodyEl.appendChild(createTableItem(obj));
}

function createRemoveButton() {
	const tdEl = document.createElement("td");
	const buttonEl = document.createElement("button");
	buttonEl.innerText = "Remove";
	tdEl.appendChild(buttonEl);

	function handleClickRemoveButton() {
		buttonEl.removeEventListener("click", handleClickRemoveButton);
		const tdEl = this.parentElement.parentElement;
		const tableBody = tdEl.parentElement;
		const searchCompletedStatus = tdEl.querySelectorAll('td')[2].innerHTML;
		if (searchCompletedStatus === 'completed'){
			tableBody.removeChild(tdEl);
			counter.rem();
		}else {
			tableBody.removeChild(tdEl);
		}
		
		// *** //
	}

	buttonEl.addEventListener("click", handleClickRemoveButton);

	return tdEl;
}


let counter = {
	count: 0,
	text: 'Completed tasks: ',
	add: function() {
		this.count += 1;
		return tableFooterEl.innerHTML = this.result();
	},

	rem: function() {
		if( this.count > 0){
			this.count -= 1;
			return tableFooterEl.innerHTML = this.result();
		}
		return this.count;		
	}, 

	reset: function() {
		this.count = 0;
		return tableFooterEl.innerHTML = this.result();
	},
	result: function() {
		return this.text + this. count;
	}
}

