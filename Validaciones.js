db.createCollection("Cvs", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['presentacion', 'archivo', 'estado', 'experiencia_Cv', 'idiomas_Cv', 'habilidades_Cv', 'Aspirante'],
      properties: {
        presentacion: {
          bsonType: 'string',
          description: 'La presentación debe ser una cadena de texto'
        },
        archivo: {
          bsonType: 'string',
          description: 'El nombre del archivo debe ser una cadena de texto'
        },
        estado: {
            enum: ['ACEPTADO', 'NO ACEPTADO'],
            description: 'Los valores permitidos son ACEPTADO o NO ACEPTADO'
        },
        experiencia_Cv: {
          bsonType: 'object',
          required: ['sector_laboral', 'descripcion_Experiencia', 'duracion'],
          properties: {
            sector_laboral: {
              bsonType: 'string',
              description: 'El sector laboral debe ser una cadena de texto'
            },
            descripcion_Experiencia: {
              bsonType: 'string',
              description: 'La descripción de la experiencia debe ser una cadena de texto'
            },
            duracion: {
              bsonType: 'string',
              description: 'La duración debe ser una cadena de texto'
            }
          }
        },
        idiomas_Cv: {
          bsonType: 'object',
          required: ['idioma'],
          properties: {
            idioma: {
              bsonType: 'string',
              description: 'El idioma debe ser una cadena de texto'
            }
          }
        },
        habilidades_Cv: {
          bsonType: 'object',
          required: ['habilidades'],
          properties: {
            habilidades: {
              bsonType: 'array',
              description: 'Las habilidades deben ser un arreglo de cadenas de texto',
              items: {
                bsonType: 'string'
              }
            }
          }
        },
        Aspirante: {
          bsonType: 'objectId',
          description: 'El ID del Aspirante debe ser un ObjectId'
        }
      }
    }
  }
})



db.Cvs.insertOne({
  presentacion: 'Soy un desarrollador web con experiencia en tecnologías front-end y back-end.',
  archivo: 'cv_desarrollador_web.pdf',
  estado: 'ACEPTADO',
  experiencia_Cv: {
    sector_laboral: 'Tecnologia',
    descripcion_Experiencia: 'Desarrollador Web en Empresa A (2018-2020) - Desarrollo y mantenimiento de aplicaciones web.',
    duracion: '2 años'
  },
  idiomas_Cv: {
    idioma: 'Ingles'
  },
  habilidades_Cv: {
    habilidades: ['HTML', 'JavaScript', 'CSS']
  },
  Aspirante: ObjectId("65610df7bc89fbc8e9567934")
});










db.createCollection("Aspirantes", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombres', 'apellidos', 'edad', 'direccion', 'telefono', 'TipoTrabajo'],
      properties: {
        nombres: {
          bsonType: 'string',
          description: 'El nombre debe ser una cadena de texto'
        },
        apellidos: {
          bsonType: 'string',
          description: 'Los apellidos deben ser una cadena de texto'
        },
        edad: {
          bsonType: 'int',
          description: 'La edad debe ser un número entero'
        },
        direccion: {
          bsonType: 'string',
          description: 'La dirección debe ser una cadena de texto'
        },
        telefono: {
          bsonType: 'string',
          description: 'El teléfono debe ser una cadena de texto'
        },
        TipoTrabajo: {
          bsonType: 'object',
          required: ['tipo', 'descripcion'],
          properties: {
            tipo: {
              bsonType: 'string',
              description: 'El tipo de trabajo debe ser una cadena de texto'
            },
            descripcion: {
              bsonType: 'string',
              description: 'La descripción del trabajo debe ser una cadena de texto'
            }
          },
         
        }
      }
    }
  }
})
