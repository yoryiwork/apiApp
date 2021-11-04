export interface Usuario {
    IdUsuario?:         number;
    DocumentoIdentidad: string;
    Nombres:            string;
    Telefono:           string;
    Correo:             string;
    Ciudad:             string;
    FechaRegistro?:      Date;
    UltimaModificacion?: Date;
}
