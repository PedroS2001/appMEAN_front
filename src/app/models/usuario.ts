export class Usuario {
    private nombre!: String;
    private email!: String;
    private password!: String;
    private imagen!: String;

    constructor(email: String, password: String, nombre: String, imagen: String = '') {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.imagen = imagen;
    }

    public getNombre() {
        return this.nombre;
    }
    public getEmail() {
        return this.email;
    }
    public getPassword() {
        return this.password;
    }
    public getImagen() {
        return this.imagen;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public setEmail(email: string) {
        this.nombre = email;
    }
    public setPassword(password: string) {
        this.nombre = password;
    }
    public setImagen(imagen: string) {
        this.nombre = imagen;
    }
}
