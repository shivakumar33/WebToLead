console.log("web to lead form..");

function beforeSubmitHandler(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    
    console.log("i/p date" + inputdate.value);

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
    console.log("o/p date" + outputdate.value);
}