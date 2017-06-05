var gindex=0;
function firstone() {
    var Fname = document.getElementById("FirstName").value;
    var Lname = document.getElementById("LastName").value;
    var Email = document.getElementById("Email").value;
    var table = document.getElementById("maintable");

    atpos = Email.indexOf("@");
    dotpos = Email.indexOf(".");

    if (Fname.length < 3 || Fname.length > 20 || Fname == null || Fname == "") {
        alert("Please enter the First Name");
    }
    else if (Lname.length < 3 || Lname.length > 20 || Lname == null || Lname == "") {
        alert("Please enter the correct Last Name");
    }
    else if (Email == -1 || atpos < 1 || dotpos - atpos < 2) {
        alert("Please enter the correct email id");
        
    }
    
   else if (gindex==0) {

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        row.insertCell(0).innerHTML = Fname;
        row.insertCell(1).innerHTML = Lname;
        row.insertCell(2).innerHTML = Email;
        row.insertCell(3).innerHTML = '<input type="button" value = "Update" onclick="update(' + rowCount + ')">';

        document.getElementById("FirstName").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Email").value = "";
    
    }

    else {
            var table = document.getElementById("maintable");
            var rowCount = table.rows.length;

            var first = document.getElementById("FirstName").value;
            var second = document.getElementById("LastName").value;
            var third = document.getElementById("Email").value;

            table.rows[gindex].children[0].innerHTML = first;
            table.rows[gindex].children[1].innerHTML = second;
            table.rows[gindex].children[2].innerHTML = third;
            gindex=0;

            document.getElementById("FirstName").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Email").value = "";
        }
        

    }

function update(index) {
    var table = document.getElementById("maintable");
    var rowCount = table.rows.length;
    var updatedfname = table.rows[index].children[0].innerHTML;
    var updatedlname = table.rows[index].children[1].innerHTML;
    var updatedemail = table.rows[index].children[2].innerHTML;
    gindex=index;
    document.getElementById("FirstName").value = updatedfname;
    document.getElementById("LastName").value = updatedlname;
    document.getElementById("Email").value = updatedemail;
}
