var express 	= 	require("express"),
	app			= 	express(),
	cons 		=	require("consolidate"),
	puerto 		= 	process.env.PORT || 8081,
	bodyParser 	= 	require('body-parser'),
	mysql   	= 	require('mysql');

//Realizar la conexión a la base de datos Mysql.....
var conexion = mysql.createConnection({
  host     	: '127.0.0.1',
  user     	: 'root',
  password 	: '',
  database 	: 'trivia'
});
conexion.connect();

//consolidate integra swig con express...
app.engine("html", cons.swig); //Template engine...
app.set("view engine", "html");
app.set("views", __dirname + "/vistas");
app.use(express.static('public'));
//Para indicar que se envía y recibe información por medio de Json...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res)
{
	res.render("index");
});
//Servicios REST...
app.get('/getQuestions', function(req, res)
{
	//Traer todas las preguntas de manera aleatoria
	var sql = "select numpregunta, pregunta, opcion1, opcion2, opcion3, opcion4 from preguntas order by rand()";
	queryMysql(sql, function(err, data){
		if (err) throw err;
		res.json(data);
	});
});

//valida la respuesta
app.post('/isValid', function (req, res)
{
	//se busca la respuesta correcta
	var sql = "select correcta from preguntas where numpregunta = " + req.body.numPregunta;
	var respuestaUsuario = req.body.respuesta;
	queryMysql(sql, function(err, data)
	{
		if (err) throw err;
		res.json({
					respuestaCorrecta : data[0].correcta,
					correcto	: data[0].correcta === respuestaUsuario ? true : false
		});
	});
});

//Para cualquier url que no cumpla la condición...
app.get("*", function(req, res)
{
	res.status(404).send("Página no encontrada :( en el momento");
});
// realiza la consulta
var queryMysql = function(sql, callback)
{
	conexion.query(sql, function(err, rows, fields)
	{
		if (err) throw err;
		callback(err, rows);
	});
};
app.listen(puerto);
console.log("Express server iniciado en el " + puerto);

/*

connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
connection.end();
//http://uno-de-piera.com/api-rest-con-node-js-express-y-mysql/
//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
	{ 
		host: 'localhost', 
		user: 'root',  
		password: '', 
		database: 'Trivia'
	}
);
 
//creamos un objeto para ir almacenando todo lo que necesitemos
var Triviabd = {};
 //todas
Triviabd.getbd = function(callback)
{
	if (connection) 
	{
		connection.query('SELECT * FROM Preguntas ORDER BY Id', function(error, rows) {
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, rows);
			}
		});
	}
}
 //por id
Triviabd.get = function(Id,callback)
{
	if (connection) 
	{
		var sql = 'SELECT * FROM users WHERE id = ' + connection.escape(Id);
		connection.query(sql, function(error, row) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}
 
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = Triviabd;
*/
