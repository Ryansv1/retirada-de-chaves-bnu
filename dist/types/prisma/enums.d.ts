export declare const TipoEmprestimo: {
    readonly ADMINISTRATIVO: "ADMINISTRATIVO";
    readonly NORMAL: "NORMAL";
};
export type TipoEmprestimo = (typeof TipoEmprestimo)[keyof typeof TipoEmprestimo];
export declare const Status: {
    readonly PENDENTE: "PENDENTE";
    readonly DEVOLVIDO: "DEVOLVIDO";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const TipoChave: {
    readonly ARMARIO: "ARMARIO";
    readonly AMBIENTE: "AMBIENTE";
};
export type TipoChave = (typeof TipoChave)[keyof typeof TipoChave];
export declare const TipoAmbiente: {
    readonly LABORATORIO: "LABORATORIO";
    readonly SALA_DE_AULA: "SALA_DE_AULA";
    readonly SALA_ADMINISTRATIVA: "SALA_ADMINISTRATIVA";
    readonly AUDITORIO: "AUDITORIO";
};
export type TipoAmbiente = (typeof TipoAmbiente)[keyof typeof TipoAmbiente];
export declare const Localizacao: {
    readonly SNO: "SNO";
    readonly VELHA: "VELHA";
};
export type Localizacao = (typeof Localizacao)[keyof typeof Localizacao];
//# sourceMappingURL=enums.d.ts.map