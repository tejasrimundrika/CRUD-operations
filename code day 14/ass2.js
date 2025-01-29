let employees = [
    {
        empid: 1,
        empname: "tej",
        empcompany: "abc",
        empsalary: 50000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "kammeta"
        }
    },
    {
        empid: 2,
        empname: "sona",
        empcompany: "amazon",
        empsalary: 50000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "chevella"
        }
    },
    {
        empid: 3,
        empname: "chinnu",
        empcompany: "micro",
        empsalary: 80000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "shankerpally"
        }
    },
    {
        empid: 4,
        empname: "akshu",
        empcompany: "Accen",
        empsalary: 100000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "gollaguda"
        }
    },
    {
        empid: 5,
        empname: "shyam",
        empcompany: "hcl",
        empsalary: 80000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "chilukuru"
        }
    }
];

let store = document.getElementById("store");

employees.forEach(emp => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${emp.empid}</td>
        <td>${emp.empname}</td>
        <td>₹${emp.empsalary}</td>
        <td>${emp.empcompany}</td>
        <td>${emp.empaddress.empcity}</td>
        <td>${emp.empaddress.emparea}</td>
    `;
    store.appendChild(row); // Use "store" instead of "tableBody"
});
