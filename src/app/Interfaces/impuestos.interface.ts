export interface Impuesto {
    impuesto?:    string;
    descrip:      string;
    valor?:       number;
    usuario:      string;
    tasa:         string;
    tasaCuota:    string;
    tipoImpuesto: string;
    bloqueado?:   number;
}