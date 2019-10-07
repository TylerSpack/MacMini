let biglist = [];

$("#classList").sortable();

$("#classList").css("font-size", "4em");

function seth1Text(){
    $("#container h1").html($("#container input").val());
}

function addListItem(event){
    switch(event.which){
        case 13:
            let listText = $("#container input").val();
            $("#container input").val("");
            let tempobj = {};
            tempobj.listname = listText;
            tempobj.liscol = [];
            biglist.push(tempobj);
            printmypage();
    }
}

function printmypage(){
    for (let i = 0; i < biglist.length; i++)
    {
        $("#classList").html("");
        $("#classList").append(`<div class="list">
                                    <i class="fas fa-trash" onclick="removeList(this)"></i>
                                    <span>${biglist[i].listname}</span> 
                                </div>`);
    }
}

function removeList(el){
    $(el).parent().remove();
}