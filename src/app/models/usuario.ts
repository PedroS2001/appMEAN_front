export class Usuario {
    nombre!: String;
    email!: String;
    password!: String;
    imagen!: String;

    constructor(nombre: String, email: String, password: String, imagen: String) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.imagen = imagen;
    }

    public getNombre(){
        return this.nombre;
    }
}
