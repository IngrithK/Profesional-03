
var nomServicios = [
                        {
                            servicio 	: 	"Trae todas las tareas",
                            urlServicio	: 	"getAllTask",
                            metodo		: 	"GET"
                        },
                        {
                            servicio 	: 	"Crear una nueva tarea",
                            urlServicio	: 	"createTask",
                            metodo		: 	"POST"
                        },
                        {
                            servicio 	: 	"Editar una tarea",
                            urlServicio	: 	"updateTask",
                            metodo		: 	"PUT"
                        },
                        {
                            servicio 	: 	"Eliminar Tarea",
                            urlServicio	: 	"deleteTask",
                            metodo		: 	"DELETE"
                        },
                        {
                            servicio 	: 	"Trae una sola tarea",
                            urlServicio	: 	"getTask",
                            metodo		: 	"GET"
                        }
                    ];

var consumeServicios = function(tipo, val, callback)
{
    var servicio = {
                        url 	: nomServicios[tipo - 1].urlServicio,
                        metodo	: nomServicios[tipo - 1].metodo,
                        datos 	: ""
                    };
    if(tipo === 4 || tipo === 5)
    {
        servicio.url += "/" + val;
    }
    else
    {
        servicio.datos = val !== "" ? JSON.stringify(val) : "";
    }
    //Invocar el servicio...
    $.ajax(
    {
        url 		: servicio.url,
        type 		: servicio.metodo,
        data 		: servicio.datos,
        dataType 	: "json",
        contentType: "application/json; charset=utf-8"
    }).done(function(data)
    {
        callback(data);
    });
};


$(function() {
    var i = Number(localStorage.getItem('todo-counter')) + 1,
        j = 0,
        k,
        $form = $('#form'),
        $removeLink = $('#lista li a'),
        $itemList = $('#lista'),
        $editable = $('.editable'),
        $newTodo = $('#todo'),
        order = [],
        orderList;

    orderList = localStorage.getItem('todo-orders');
    orderList = orderList ? orderList.split(',') : [];
    
    for( j = 0, k = orderList.length; j < k; j++) {
        $itemList.append(
            "<li id='" + orderList[j] + "'>"
            + "<span class='editable'>" 
            + localStorage.getItem(orderList[j]) 
            + "</span> <a href='#'>X</a></li>"
        );
    }
        
  //agrega
    $form.submit(function(e) {
        e.preventDefault();
        $.publish('/add/', []);
    });

    // elimina
    $itemList.delegate('a', 'click', function(e) {
        var $this = $(this);
        
        e.preventDefault();
        $.publish('/remove/', [$this]);
    });
    
    // actualiza
    $itemList.sortable({
        revert: true,
        stop: function() {
            $.publish('/regenerate-list/', []);
        }
    });
    
    // edita
    $editable.inlineEdit({
        save: function(e, data) {
                var $this = $(this);
                localStorage.setItem(
                    $this.parent().attr("id"), data.value
                );
            }

    });

   
    $itemList.delegate('li', 'mouseover mouseout', function(event) {
        var $this = $(this).find('a');
        
        if(event.type === 'mouseover') {
          $this.stop(true, true).fadeIn();
        } else {
            $this.stop(true, true).fadeOut();
        }
    });
       
    $.subscribe('/add/', function() {
        if ($newTodo.val() !== "") {
            localStorage.setItem( 
                "todo-" + i, $newTodo.val() 
            );
            
            localStorage.setItem('todo-counter', i);
            
            // nuevo item
            $itemList.append(
                "<li id='todo-" + i + "'>"
                + "<span class='editable'>"
                + localStorage.getItem("todo-" + i) 
                + " </span><a href='#'>x</a></li>"
            );

            $.publish('/regenerate-list/', []);

            $("#todo-" + i)
                .css('display', 'false')
                .fadeIn();
            
            $newTodo.val("");
            
            i++;
        }
    });
    
      $.subscribe('/remove/', function($this) {
     var parentId = $this.parent().attr('id');
        
    confirm("desea eliminar el registro");
    localStorage.removeItem(
            "'" + parentId + "'"
        );
        
        $this.parent().fadeOut(function() { 
            $this.parent().remove();
            
            $.publish('/regenerate-list/', []);
        });

    /*    swal({
  title: "Are you sure?",
  text: "You will not be able to recover this imaginary file!",
  type: "warning",
  showCancelButton: true,
  confirmButtonClass: "btn-danger",
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel plx!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm) {
  if (isConfirm) {
    swal("Deleted!", "Your imaginary file has been deleted.", "success");
         var parentId = $this.parent().attr('id');
        localStorage.removeItem(
            "'" + parentId + "'"
        );
        
        $this.parent().fadeOut(function() { 
            $this.parent().remove();
            
            $.publish('/regenerate-list/', []);
        });

    
  } else {
    swal("Cancelled", "Your imaginary file is safe :)", "error");
  }
});*/
});   
      
  $.subscribe('/regenerate-list/', function() {
        var $todoItemLi = $('#lista li');
        order.length = 0;
        
        $todoItemLi.each(function() {
            var id = $(this).attr('id');
            order.push(id);
        });
        
        localStorage.setItem(
            'todo-orders', order.join(',')
        );
    });
  
});

