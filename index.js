function data(){
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let gmail = document.getElementById("gmail").value;
  let number = document.getElementById("pNumber").value;
  let password = document.getElementById("subject").value;
  let cPassword = document.getElementById("optional").value;

  if (fName == "" || lName == "" || gmail == "" || number == "" ||  password == "" || cPassword == "") {
    alert("All Fields are mendatory");
    return false;
  } else if (number.length < 10 || number.length > 10) {
    alert("Number should of be 10 Digits ! Please enter valid Number");
    return false;
  } else if (isNaN(number)) {
    alert("Only numbers are allowed ! Please enter valid Number");
    return false;
  } else if (isNaN(number)) {
    alert("Only numbers are allowed ! Please enter valid Number");
    return false;
  } else if (password != cPassword) {
    alert("Please Enter same password");
    return false;
  } else {
    true;
  }
}
