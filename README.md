

# Trackgenix App

Aplicacion desarollada para Trackgenin SA con el fin de permitir a la misma la gestion de RRHH, generacion de reportes , carga de horas, con el fin de potenciar la productividad y mejorar la toma de decisiones .

Dentro del sistema se encuentran diferentes roles con diferentes funcionalidades. Estos roles son: Employee, Project Manager (PM), Admin, SuperAdmin

###  SuperAdmin 
Encargado de administrar la alta y baja de los Admins, esto quiere decir que puede agregarlos y eliminarlos, pero no modificarlos. Para el rol de SuperAdmin no existe un proceso de signup sino que dicho usuario se crea desde base de datos. 

### Admin 
Persona encargada de orquestar los diferentes proyectos, esto quiere decir, agregarlos, editarlos y eliminarlos. Además, va a ser quien agregue usuarios a cada proyecto y el que determine quién va a tener el rol de PM en el mismo. Para dar de alta un proyecto es requerido que previamente se designe un PM. Por otra parte, el Admin puede generar reportes de cada uno de los proyectos y también puede eliminar un Employee del equipo.

Para el rol de Admin no existe un proceso de signup sino que dicho usuario es creado por el SuperAdmin. Una vez que el admin es creado, este puede hacer login en el sistema y puede gestionar todos los proyectos existentes, como también así a todos los Employees y PMs. 

### Project Manager o PM 
 Persona encargada de administrar uno o más proyectos en los cuales esté involucrado pudiendo agregar y eliminar a los miembros (Employees) de los mismos y aprobar o editar las horas semanales cargadas por los Employees. También puede ver reportes y es responsable de cargar su carga horaria.
Cuando un Project Manager desea comenzar a utilizar el sistema, se debe crear una cuenta desde el signup completando nombre, apellido, email y contraseña. Una vez creada la cuenta, el PM puede hacer login en el sistema pero no podrá realizar tareas de PM hasta que un Admin le de el rol de PM que lo habilite. Luego de tener ese rol, puede ver los proyectos en los cuales está involucrado, puede agregar y quitar los miembros de los equipos, puede ver las horas cargadas en los proyectos para aprobarlas o editarlas, y también visualizar reportes. Al finalizar la semana se deben poder enviar esa planilla con los datos y los horarios para que Recursos Humanos pueda efectuar el pago mensual de sus empleados.

### Employee
Cuando un Employee desea comenzar a utilizar el sistema, se debe crear una cuenta desde el signup completando nombre, apellido, email y contraseña. Una vez creada la cuenta, el Employee puede hacer login en el sistema y visualizar los proyectos en los cuales está involucrado. También puede observar su timesheet personal, en la cual podrá cargar las horas trabajadas de cada día de la semana. También puede visualizar y actualizar sus datos personales.
La pantalla de carga de horas permitirá a los Employees indicar la cantidad de horas por día que trabajaron y a medida que los Employees suban las cargas diarias se podrá visualizar el conteo semanal de horas trabajadas.

Dentro de cada proyecto se pueden asignar diferentes roles que ya están preestablecidos (por ejemplo: Developer, QA, TL, etc). 
Estos roles sólo existen en cada proyecto y son asignados a cada miembro del equipo. También se debe cargar el rate (precio por hora) de cada Employee en cada proyecto. Un mismo Employee puede estar en más de un proyecto y tener un rate distinto en cada uno. Por otra parte el que esté asignado como PM solo puede ser PM, no puede tener otro rol. El rate es cargado y visualizado solo por el Admin.
