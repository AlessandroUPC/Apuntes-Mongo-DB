Ejercicios Mongo

Mostrar todas las ventas:
db.ventas.find()


Mostrar las ventas realizadas en línea:
db.ventas.find({ tipo: "en línea" })


Mostrar las ventas realizadas en línea y en la ubicación de Denver:
db.ventas.find({ tipo: "en línea", ubicacion: "Denver" })


Mostrar las ventas realizadas en Denver o Seattle:
db.ventas.find({ ubicacion: { $in: ["Denver", "Seattle"] } })


Mostrar por cada venta solo el lugar donde se realizó:
db.ventas.find({}, { _id: 0, ubicacion: 1 })

Mostrar por cada venta el género y la edad del cliente:
db.ventas.find({}, { _id: 0, genero_cliente: 1, edad_cliente: 1 })

Mostrar las ventas cuyos clientes tengan una edad mayor a 30:
db.ventas.find({ edad_cliente: { $gt: 30 } })


Mostrar las ventas realizadas en Denver o Seattle, y cuyos clientes tengan una edad menor a 50:
db.ventas.find({
  ubicacion: { $in: ["Denver", "Seattle"] },
  edad_cliente: { $lt: 50 }
})


Indicar la cantidad de ventas realizadas en Denver o Seattle, y cuyos clientes tengan una edad menor a 50:
db.ventas.count({
  ubicacion: { $in: ["Denver", "Seattle"] },
  edad_cliente: { $lt: 50 }
})

Mostrar las distintas ubicaciones de venta:
db.ventas.distinct("ubicacion")


Escribir una consulta que permita mostrar la cantidad de inspecciones realizadas por cada ciudad.
db.inspections.aggregate(
[
{$group: {
_id: "$city",
quantity: {$count:{}}
}}
]
);

Escribir una consulta que permita mostrar la cantidad de
inspecciones realizadas por cada resultado obtenido solo para la ciudad de NEW
YORK.
db.inspections.find({city:"NEW YORK"}).count()
