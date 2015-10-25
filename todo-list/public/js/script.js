$(window).load(function(){
function appendTaskToList(val) {
    $('#list').append($("<li id='task-' + i >  <img src=./img/ok.png onclick= 'done-btn'class='done-btn'href='#' />" +" " + val  +
     "  <img src=./img/delete.png onclick='cancel-btn' class='cancel-btn'/></li>").data("erdem", "12"));
}

if (localStorage['tasks']) {
    var tasks = JSON.parse(localStorage['tasks']);
}else {
    var tasks = [];
}

for(var i=0;i<tasks.length;i++) {
    appendTaskToList(tasks[i]);

}

var addTask = function(){
    var val = $('#name').val();
    tasks.push(val);
    localStorage["tasks"] = JSON.stringify(tasks);
    appendTaskToList(val);
    $('#name').val("").focus();
};

localStorage.username = $('#add-btn').click(addTask);
$('#name').keyup(function(e){
    if (e.keyCode === 13) {
        addTask();
    }
});

$(document).delegate('.done-btn', 'click', function() {
    $(this).parent('li').addClass('done');
    return false;
});

$(document).delegate('.cancel-btn', 'click', function() {
    $(this).parent('li').remove();
    localStorage.removeItem($(this).parent('li').remove());
});
  });
 