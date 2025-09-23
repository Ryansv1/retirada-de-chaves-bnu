import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Usuarios
 *
 */
export type UsuariosModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuariosPayload>;
export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
export type UsuariosMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    matricula: string | null;
};
export type UsuariosMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    matricula: string | null;
};
export type UsuariosCountAggregateOutputType = {
    id: number;
    nome: number;
    matricula: number;
    _all: number;
};
export type UsuariosMinAggregateInputType = {
    id?: true;
    nome?: true;
    matricula?: true;
};
export type UsuariosMaxAggregateInputType = {
    id?: true;
    nome?: true;
    matricula?: true;
};
export type UsuariosCountAggregateInputType = {
    id?: true;
    nome?: true;
    matricula?: true;
    _all?: true;
};
export type UsuariosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: Prisma.UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType;
};
export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuarios[P]> : Prisma.GetScalarType<T[P], AggregateUsuarios[P]>;
};
export type UsuariosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuariosWhereInput;
    orderBy?: Prisma.UsuariosOrderByWithAggregationInput | Prisma.UsuariosOrderByWithAggregationInput[];
    by: Prisma.UsuariosScalarFieldEnum[] | Prisma.UsuariosScalarFieldEnum;
    having?: Prisma.UsuariosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuariosCountAggregateInputType | true;
    _min?: UsuariosMinAggregateInputType;
    _max?: UsuariosMaxAggregateInputType;
};
export type UsuariosGroupByOutputType = {
    id: string;
    nome: string;
    matricula: string;
    _count: UsuariosCountAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuariosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]>;
}>>;
export type UsuariosWhereInput = {
    AND?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    OR?: Prisma.UsuariosWhereInput[];
    NOT?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    id?: Prisma.StringFilter<"Usuarios"> | string;
    nome?: Prisma.StringFilter<"Usuarios"> | string;
    matricula?: Prisma.StringFilter<"Usuarios"> | string;
    EmprestimosSolicitados?: Prisma.EmprestimoListRelationFilter;
    EmprestimosDevolvidos?: Prisma.EmprestimoListRelationFilter;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosListRelationFilter;
};
export type UsuariosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    EmprestimosSolicitados?: Prisma.EmprestimoOrderByRelationAggregateInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoOrderByRelationAggregateInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosOrderByRelationAggregateInput;
};
export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    matricula?: string;
    AND?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    OR?: Prisma.UsuariosWhereInput[];
    NOT?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    nome?: Prisma.StringFilter<"Usuarios"> | string;
    EmprestimosSolicitados?: Prisma.EmprestimoListRelationFilter;
    EmprestimosDevolvidos?: Prisma.EmprestimoListRelationFilter;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosListRelationFilter;
}, "id" | "matricula">;
export type UsuariosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    _count?: Prisma.UsuariosCountOrderByAggregateInput;
    _max?: Prisma.UsuariosMaxOrderByAggregateInput;
    _min?: Prisma.UsuariosMinOrderByAggregateInput;
};
export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuariosScalarWhereWithAggregatesInput | Prisma.UsuariosScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuariosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuariosScalarWhereWithAggregatesInput | Prisma.UsuariosScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Usuarios"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Usuarios"> | string;
    matricula?: Prisma.StringWithAggregatesFilter<"Usuarios"> | string;
};
export type UsuariosCreateInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosSolicitados?: Prisma.EmprestimoCreateNestedManyWithoutUsuarioSolicitanteInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoCreateNestedManyWithoutUsuarioDevolucaoInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosCreateNestedManyWithoutAutorizadoInput;
};
export type UsuariosUncheckedCreateInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosSolicitados?: Prisma.EmprestimoUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoUncheckedCreateNestedManyWithoutUsuarioDevolucaoInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUncheckedCreateNestedManyWithoutAutorizadoInput;
};
export type UsuariosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosSolicitados?: Prisma.EmprestimoUpdateManyWithoutUsuarioSolicitanteNestedInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoUpdateManyWithoutUsuarioDevolucaoNestedInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUpdateManyWithoutAutorizadoNestedInput;
};
export type UsuariosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosSolicitados?: Prisma.EmprestimoUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoUncheckedUpdateManyWithoutUsuarioDevolucaoNestedInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUncheckedUpdateManyWithoutAutorizadoNestedInput;
};
export type UsuariosCreateManyInput = {
    id: string;
    nome: string;
    matricula: string;
};
export type UsuariosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UsuariosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UsuariosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
};
export type UsuariosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
};
export type UsuariosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
};
export type UsuariosScalarRelationFilter = {
    is?: Prisma.UsuariosWhereInput;
    isNot?: Prisma.UsuariosWhereInput;
};
export type UsuariosNullableScalarRelationFilter = {
    is?: Prisma.UsuariosWhereInput | null;
    isNot?: Prisma.UsuariosWhereInput | null;
};
export type UsuariosCreateNestedOneWithoutEmprestimosSolicitadosInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosSolicitadosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosSolicitadosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutEmprestimosSolicitadosInput;
    connect?: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosCreateNestedOneWithoutEmprestimosDevolvidosInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosDevolvidosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosDevolvidosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutEmprestimosDevolvidosInput;
    connect?: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosUpdateOneRequiredWithoutEmprestimosSolicitadosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosSolicitadosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosSolicitadosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutEmprestimosSolicitadosInput;
    upsert?: Prisma.UsuariosUpsertWithoutEmprestimosSolicitadosInput;
    connect?: Prisma.UsuariosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuariosUpdateToOneWithWhereWithoutEmprestimosSolicitadosInput, Prisma.UsuariosUpdateWithoutEmprestimosSolicitadosInput>, Prisma.UsuariosUncheckedUpdateWithoutEmprestimosSolicitadosInput>;
};
export type UsuariosUpdateOneWithoutEmprestimosDevolvidosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosDevolvidosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosDevolvidosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutEmprestimosDevolvidosInput;
    upsert?: Prisma.UsuariosUpsertWithoutEmprestimosDevolvidosInput;
    disconnect?: Prisma.UsuariosWhereInput | boolean;
    delete?: Prisma.UsuariosWhereInput | boolean;
    connect?: Prisma.UsuariosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuariosUpdateToOneWithWhereWithoutEmprestimosDevolvidosInput, Prisma.UsuariosUpdateWithoutEmprestimosDevolvidosInput>, Prisma.UsuariosUncheckedUpdateWithoutEmprestimosDevolvidosInput>;
};
export type UsuariosCreateNestedOneWithoutChaves_UsuariosInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutChaves_UsuariosInput, Prisma.UsuariosUncheckedCreateWithoutChaves_UsuariosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutChaves_UsuariosInput;
    connect?: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosUpdateOneRequiredWithoutChaves_UsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutChaves_UsuariosInput, Prisma.UsuariosUncheckedCreateWithoutChaves_UsuariosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutChaves_UsuariosInput;
    upsert?: Prisma.UsuariosUpsertWithoutChaves_UsuariosInput;
    connect?: Prisma.UsuariosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuariosUpdateToOneWithWhereWithoutChaves_UsuariosInput, Prisma.UsuariosUpdateWithoutChaves_UsuariosInput>, Prisma.UsuariosUncheckedUpdateWithoutChaves_UsuariosInput>;
};
export type UsuariosCreateWithoutEmprestimosSolicitadosInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosDevolvidos?: Prisma.EmprestimoCreateNestedManyWithoutUsuarioDevolucaoInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosCreateNestedManyWithoutAutorizadoInput;
};
export type UsuariosUncheckedCreateWithoutEmprestimosSolicitadosInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosDevolvidos?: Prisma.EmprestimoUncheckedCreateNestedManyWithoutUsuarioDevolucaoInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUncheckedCreateNestedManyWithoutAutorizadoInput;
};
export type UsuariosCreateOrConnectWithoutEmprestimosSolicitadosInput = {
    where: Prisma.UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosSolicitadosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosSolicitadosInput>;
};
export type UsuariosCreateWithoutEmprestimosDevolvidosInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosSolicitados?: Prisma.EmprestimoCreateNestedManyWithoutUsuarioSolicitanteInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosCreateNestedManyWithoutAutorizadoInput;
};
export type UsuariosUncheckedCreateWithoutEmprestimosDevolvidosInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosSolicitados?: Prisma.EmprestimoUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUncheckedCreateNestedManyWithoutAutorizadoInput;
};
export type UsuariosCreateOrConnectWithoutEmprestimosDevolvidosInput = {
    where: Prisma.UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosDevolvidosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosDevolvidosInput>;
};
export type UsuariosUpsertWithoutEmprestimosSolicitadosInput = {
    update: Prisma.XOR<Prisma.UsuariosUpdateWithoutEmprestimosSolicitadosInput, Prisma.UsuariosUncheckedUpdateWithoutEmprestimosSolicitadosInput>;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosSolicitadosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosSolicitadosInput>;
    where?: Prisma.UsuariosWhereInput;
};
export type UsuariosUpdateToOneWithWhereWithoutEmprestimosSolicitadosInput = {
    where?: Prisma.UsuariosWhereInput;
    data: Prisma.XOR<Prisma.UsuariosUpdateWithoutEmprestimosSolicitadosInput, Prisma.UsuariosUncheckedUpdateWithoutEmprestimosSolicitadosInput>;
};
export type UsuariosUpdateWithoutEmprestimosSolicitadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosDevolvidos?: Prisma.EmprestimoUpdateManyWithoutUsuarioDevolucaoNestedInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUpdateManyWithoutAutorizadoNestedInput;
};
export type UsuariosUncheckedUpdateWithoutEmprestimosSolicitadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosDevolvidos?: Prisma.EmprestimoUncheckedUpdateManyWithoutUsuarioDevolucaoNestedInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUncheckedUpdateManyWithoutAutorizadoNestedInput;
};
export type UsuariosUpsertWithoutEmprestimosDevolvidosInput = {
    update: Prisma.XOR<Prisma.UsuariosUpdateWithoutEmprestimosDevolvidosInput, Prisma.UsuariosUncheckedUpdateWithoutEmprestimosDevolvidosInput>;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutEmprestimosDevolvidosInput, Prisma.UsuariosUncheckedCreateWithoutEmprestimosDevolvidosInput>;
    where?: Prisma.UsuariosWhereInput;
};
export type UsuariosUpdateToOneWithWhereWithoutEmprestimosDevolvidosInput = {
    where?: Prisma.UsuariosWhereInput;
    data: Prisma.XOR<Prisma.UsuariosUpdateWithoutEmprestimosDevolvidosInput, Prisma.UsuariosUncheckedUpdateWithoutEmprestimosDevolvidosInput>;
};
export type UsuariosUpdateWithoutEmprestimosDevolvidosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosSolicitados?: Prisma.EmprestimoUpdateManyWithoutUsuarioSolicitanteNestedInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUpdateManyWithoutAutorizadoNestedInput;
};
export type UsuariosUncheckedUpdateWithoutEmprestimosDevolvidosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosSolicitados?: Prisma.EmprestimoUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput;
    Chaves_Usuarios?: Prisma.Chaves_UsuariosUncheckedUpdateManyWithoutAutorizadoNestedInput;
};
export type UsuariosCreateWithoutChaves_UsuariosInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosSolicitados?: Prisma.EmprestimoCreateNestedManyWithoutUsuarioSolicitanteInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoCreateNestedManyWithoutUsuarioDevolucaoInput;
};
export type UsuariosUncheckedCreateWithoutChaves_UsuariosInput = {
    id: string;
    nome: string;
    matricula: string;
    EmprestimosSolicitados?: Prisma.EmprestimoUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoUncheckedCreateNestedManyWithoutUsuarioDevolucaoInput;
};
export type UsuariosCreateOrConnectWithoutChaves_UsuariosInput = {
    where: Prisma.UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutChaves_UsuariosInput, Prisma.UsuariosUncheckedCreateWithoutChaves_UsuariosInput>;
};
export type UsuariosUpsertWithoutChaves_UsuariosInput = {
    update: Prisma.XOR<Prisma.UsuariosUpdateWithoutChaves_UsuariosInput, Prisma.UsuariosUncheckedUpdateWithoutChaves_UsuariosInput>;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutChaves_UsuariosInput, Prisma.UsuariosUncheckedCreateWithoutChaves_UsuariosInput>;
    where?: Prisma.UsuariosWhereInput;
};
export type UsuariosUpdateToOneWithWhereWithoutChaves_UsuariosInput = {
    where?: Prisma.UsuariosWhereInput;
    data: Prisma.XOR<Prisma.UsuariosUpdateWithoutChaves_UsuariosInput, Prisma.UsuariosUncheckedUpdateWithoutChaves_UsuariosInput>;
};
export type UsuariosUpdateWithoutChaves_UsuariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosSolicitados?: Prisma.EmprestimoUpdateManyWithoutUsuarioSolicitanteNestedInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoUpdateManyWithoutUsuarioDevolucaoNestedInput;
};
export type UsuariosUncheckedUpdateWithoutChaves_UsuariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    EmprestimosSolicitados?: Prisma.EmprestimoUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput;
    EmprestimosDevolvidos?: Prisma.EmprestimoUncheckedUpdateManyWithoutUsuarioDevolucaoNestedInput;
};
/**
 * Count Type UsuariosCountOutputType
 */
export type UsuariosCountOutputType = {
    EmprestimosSolicitados: number;
    EmprestimosDevolvidos: number;
    Chaves_Usuarios: number;
};
export type UsuariosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    EmprestimosSolicitados?: boolean | UsuariosCountOutputTypeCountEmprestimosSolicitadosArgs;
    EmprestimosDevolvidos?: boolean | UsuariosCountOutputTypeCountEmprestimosDevolvidosArgs;
    Chaves_Usuarios?: boolean | UsuariosCountOutputTypeCountChaves_UsuariosArgs;
};
/**
 * UsuariosCountOutputType without action
 */
export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: Prisma.UsuariosCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UsuariosCountOutputType without action
 */
export type UsuariosCountOutputTypeCountEmprestimosSolicitadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmprestimoWhereInput;
};
/**
 * UsuariosCountOutputType without action
 */
export type UsuariosCountOutputTypeCountEmprestimosDevolvidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmprestimoWhereInput;
};
/**
 * UsuariosCountOutputType without action
 */
export type UsuariosCountOutputTypeCountChaves_UsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Chaves_UsuariosWhereInput;
};
export type UsuariosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    matricula?: boolean;
    EmprestimosSolicitados?: boolean | Prisma.Usuarios$EmprestimosSolicitadosArgs<ExtArgs>;
    EmprestimosDevolvidos?: boolean | Prisma.Usuarios$EmprestimosDevolvidosArgs<ExtArgs>;
    Chaves_Usuarios?: boolean | Prisma.Usuarios$Chaves_UsuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuarios"]>;
export type UsuariosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    matricula?: boolean;
}, ExtArgs["result"]["usuarios"]>;
export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    matricula?: boolean;
}, ExtArgs["result"]["usuarios"]>;
export type UsuariosSelectScalar = {
    id?: boolean;
    nome?: boolean;
    matricula?: boolean;
};
export type UsuariosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "matricula", ExtArgs["result"]["usuarios"]>;
export type UsuariosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    EmprestimosSolicitados?: boolean | Prisma.Usuarios$EmprestimosSolicitadosArgs<ExtArgs>;
    EmprestimosDevolvidos?: boolean | Prisma.Usuarios$EmprestimosDevolvidosArgs<ExtArgs>;
    Chaves_Usuarios?: boolean | Prisma.Usuarios$Chaves_UsuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuariosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuarios";
    objects: {
        EmprestimosSolicitados: Prisma.$EmprestimoPayload<ExtArgs>[];
        EmprestimosDevolvidos: Prisma.$EmprestimoPayload<ExtArgs>[];
        Chaves_Usuarios: Prisma.$Chaves_UsuariosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        matricula: string;
    }, ExtArgs["result"]["usuarios"]>;
    composites: {};
};
export type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuariosPayload, S>;
export type UsuariosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuariosCountAggregateInputType | true;
};
export interface UsuariosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'];
        meta: {
            name: 'Usuarios';
        };
    };
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     *
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UsuariosFindManyArgs>(args?: Prisma.SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     *
     */
    create<T extends UsuariosCreateArgs>(args: Prisma.SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     *
     */
    delete<T extends UsuariosDeleteArgs>(args: Prisma.SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UsuariosUpdateArgs>(args: Prisma.SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: Prisma.SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(args?: Prisma.Subset<T, UsuariosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuariosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Prisma.Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>;
    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UsuariosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuariosGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuariosGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Usuarios model
     */
    readonly fields: UsuariosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Usuarios.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    EmprestimosSolicitados<T extends Prisma.Usuarios$EmprestimosSolicitadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuarios$EmprestimosSolicitadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    EmprestimosDevolvidos<T extends Prisma.Usuarios$EmprestimosDevolvidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuarios$EmprestimosDevolvidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Chaves_Usuarios<T extends Prisma.Usuarios$Chaves_UsuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuarios$Chaves_UsuariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Usuarios model
 */
export interface UsuariosFieldRefs {
    readonly id: Prisma.FieldRef<"Usuarios", 'String'>;
    readonly nome: Prisma.FieldRef<"Usuarios", 'String'>;
    readonly matricula: Prisma.FieldRef<"Usuarios", 'String'>;
}
/**
 * Usuarios findUnique
 */
export type UsuariosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * Filter, which Usuarios to fetch.
     */
    where: Prisma.UsuariosWhereUniqueInput;
};
/**
 * Usuarios findUniqueOrThrow
 */
export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * Filter, which Usuarios to fetch.
     */
    where: Prisma.UsuariosWhereUniqueInput;
};
/**
 * Usuarios findFirst
 */
export type UsuariosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: Prisma.UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Usuarios.
     */
    cursor?: Prisma.UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Usuarios.
     */
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
/**
 * Usuarios findFirstOrThrow
 */
export type UsuariosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: Prisma.UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Usuarios.
     */
    cursor?: Prisma.UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Usuarios.
     */
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
/**
 * Usuarios findMany
 */
export type UsuariosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: Prisma.UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Usuarios.
     */
    cursor?: Prisma.UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
/**
 * Usuarios create
 */
export type UsuariosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * The data needed to create a Usuarios.
     */
    data: Prisma.XOR<Prisma.UsuariosCreateInput, Prisma.UsuariosUncheckedCreateInput>;
};
/**
 * Usuarios createMany
 */
export type UsuariosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: Prisma.UsuariosCreateManyInput | Prisma.UsuariosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Usuarios createManyAndReturn
 */
export type UsuariosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * The data used to create many Usuarios.
     */
    data: Prisma.UsuariosCreateManyInput | Prisma.UsuariosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Usuarios update
 */
export type UsuariosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * The data needed to update a Usuarios.
     */
    data: Prisma.XOR<Prisma.UsuariosUpdateInput, Prisma.UsuariosUncheckedUpdateInput>;
    /**
     * Choose, which Usuarios to update.
     */
    where: Prisma.UsuariosWhereUniqueInput;
};
/**
 * Usuarios updateMany
 */
export type UsuariosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: Prisma.XOR<Prisma.UsuariosUpdateManyMutationInput, Prisma.UsuariosUncheckedUpdateManyInput>;
    /**
     * Filter which Usuarios to update
     */
    where?: Prisma.UsuariosWhereInput;
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number;
};
/**
 * Usuarios updateManyAndReturn
 */
export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * The data used to update Usuarios.
     */
    data: Prisma.XOR<Prisma.UsuariosUpdateManyMutationInput, Prisma.UsuariosUncheckedUpdateManyInput>;
    /**
     * Filter which Usuarios to update
     */
    where?: Prisma.UsuariosWhereInput;
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number;
};
/**
 * Usuarios upsert
 */
export type UsuariosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: Prisma.UsuariosWhereUniqueInput;
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: Prisma.XOR<Prisma.UsuariosCreateInput, Prisma.UsuariosUncheckedCreateInput>;
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UsuariosUpdateInput, Prisma.UsuariosUncheckedUpdateInput>;
};
/**
 * Usuarios delete
 */
export type UsuariosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    /**
     * Filter which Usuarios to delete.
     */
    where: Prisma.UsuariosWhereUniqueInput;
};
/**
 * Usuarios deleteMany
 */
export type UsuariosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: Prisma.UsuariosWhereInput;
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number;
};
/**
 * Usuarios.EmprestimosSolicitados
 */
export type Usuarios$EmprestimosSolicitadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: Prisma.EmprestimoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: Prisma.EmprestimoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmprestimoInclude<ExtArgs> | null;
    where?: Prisma.EmprestimoWhereInput;
    orderBy?: Prisma.EmprestimoOrderByWithRelationInput | Prisma.EmprestimoOrderByWithRelationInput[];
    cursor?: Prisma.EmprestimoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmprestimoScalarFieldEnum | Prisma.EmprestimoScalarFieldEnum[];
};
/**
 * Usuarios.EmprestimosDevolvidos
 */
export type Usuarios$EmprestimosDevolvidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: Prisma.EmprestimoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: Prisma.EmprestimoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmprestimoInclude<ExtArgs> | null;
    where?: Prisma.EmprestimoWhereInput;
    orderBy?: Prisma.EmprestimoOrderByWithRelationInput | Prisma.EmprestimoOrderByWithRelationInput[];
    cursor?: Prisma.EmprestimoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmprestimoScalarFieldEnum | Prisma.EmprestimoScalarFieldEnum[];
};
/**
 * Usuarios.Chaves_Usuarios
 */
export type Usuarios$Chaves_UsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chaves_Usuarios
     */
    select?: Prisma.Chaves_UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chaves_Usuarios
     */
    omit?: Prisma.Chaves_UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Chaves_UsuariosInclude<ExtArgs> | null;
    where?: Prisma.Chaves_UsuariosWhereInput;
    orderBy?: Prisma.Chaves_UsuariosOrderByWithRelationInput | Prisma.Chaves_UsuariosOrderByWithRelationInput[];
    cursor?: Prisma.Chaves_UsuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Chaves_UsuariosScalarFieldEnum | Prisma.Chaves_UsuariosScalarFieldEnum[];
};
/**
 * Usuarios without action
 */
export type UsuariosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Usuarios.d.ts.map