function getData() {
    let name = document.getElementById('name').value
    let startDate = document.getElementById('start').value
    let endDate = document.getElementById('end').value
    let description = document.getElementById('description').value
    let check1 = document.getElementById('nodejs').checked
    let check2 = document.getElementById('php').checked
    let check3 = document.getElementById('java').checked
    let check4 = document.getElementById('laravel').checked
    let image = document.getElementById('file').files

    document.getElementById("alert").style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById("alert").style.color = "rgb(255, 255, 255)";

    if (name == "") {
        document.getElementById("alert").innerHTML = "Project Name cannot be empty";
    } else if (startDate == "") {
        document.getElementById("alert").innerHTML = "Start Date cannot be empty";
    } else if (endDate == "") {
        document.getElementById("alert").innerHTML = "End Date cannot be empty";
    } else if (description == "") {
        document.getElementById("alert").innerHTML = "Description cannot be empty";
    } else if (check1 == false && check2 == false && check3 == false && check4 == false) {
        document.getElementById("alert").innerHTML = "Technology cannot be empty";
    } else if (image.length == 0) {
        document.getElementById("alert").innerHTML = "Image cannot be empty";
    } else {
        image = URL.createObjectURL(image[0]);
    }
}