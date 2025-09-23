import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Chaves_Usuarios
 *
 */
export type Chaves_UsuariosModel = runtime.Types.Result.DefaultSelection<Prisma.$Chaves_UsuariosPayload>;
export type AggregateChaves_Usuarios = {
    _count: Chaves_UsuariosCountAggregateOutputType | null;
    _min: Chaves_UsuariosMinAggregateOutputType | null;
    _max: Chaves_UsuariosMaxAggregateOutputType | null;
};
export type Chaves_UsuariosMinAggregateOutputType = {
    id: string | null;
    chaveId: string | null;
    usuarioId: string | null;
};
export type Chaves_UsuariosMaxAggregateOutputType = {
    id: string | null;
    chaveId: string | null;
    usuarioId: string | null;
};
export type Chaves_UsuariosCountAggregateOutputType = {
    id: number;
    chaveId: number;
    usuarioId: number;
    _all: number;
};
export type Chaves_UsuariosMinAggregateInputType = {
    id?: true;
    chaveId?: true;
    usuarioId?: true;
};
export type Chaves_UsuariosMaxAggregateInputType = {
    id?: true;
    chaveId?: true;
    usuarioId?: true;
};
export type Chaves_UsuariosCountAggregateInputType = {
    id?: true;
    chaveId?: true;
    usuarioId?: true;
    _all?: true;
};
export type Chaves_UsuariosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Chaves_Usuarios to aggregate.
     */
    where?: Prisma.Chaves_UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chaves_Usuarios to fetch.
     */
    orderBy?: Prisma.Chaves_UsuariosOrderByWithRelationInput | Prisma.Chaves_UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Chaves_UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chaves_Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chaves_Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Chaves_Usuarios
    **/
    _count?: true | Chaves_UsuariosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Chaves_UsuariosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Chaves_UsuariosMaxAggregateInputType;
};
export type GetChaves_UsuariosAggregateType<T extends Chaves_UsuariosAggregateArgs> = {
    [P in keyof T & keyof AggregateChaves_Usuarios]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChaves_Usuarios[P]> : Prisma.GetScalarType<T[P], AggregateChaves_Usuarios[P]>;
};
export type Chaves_UsuariosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Chaves_UsuariosWhereInput;
    orderBy?: Prisma.Chaves_UsuariosOrderByWithAggregationInput | Prisma.Chaves_UsuariosOrderByWithAggregationInput[];
    by: Prisma.Chaves_UsuariosScalarFieldEnum[] | Prisma.Chaves_UsuariosScalarFieldEnum;
    having?: Prisma.Chaves_UsuariosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Chaves_UsuariosCountAggregateInputType | true;
    _min?: Chaves_UsuariosMinAggregateInputType;
    _max?: Chaves_UsuariosMaxAggregateInputType;
};
export type Chaves_UsuariosGroupByOutputType = {
    id: string;
    chaveId: string;
    usuarioId: string;
    _count: Chaves_UsuariosCountAggregateOutputType | null;
    _min: Chaves_UsuariosMinAggregateOutputType | null;
    _max: Chaves_UsuariosMaxAggregateOutputType | null;
};
type GetChaves_UsuariosGroupByPayload<T extends Chaves_UsuariosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Chaves_UsuariosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Chaves_UsuariosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Chaves_UsuariosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Chaves_UsuariosGroupByOutputType[P]>;
}>>;
export type Chaves_UsuariosWhereInput = {
    AND?: Prisma.Chaves_UsuariosWhereInput | Prisma.Chaves_UsuariosWhereInput[];
    OR?: Prisma.Chaves_UsuariosWhereInput[];
    NOT?: Prisma.Chaves_UsuariosWhereInput | Prisma.Chaves_UsuariosWhereInput[];
    id?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
    chaveId?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
    usuarioId?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
    Autorizado?: Prisma.XOR<Prisma.UsuariosScalarRelationFilter, Prisma.UsuariosWhereInput>;
    Chave?: Prisma.XOR<Prisma.ChaveScalarRelationFilter, Prisma.ChaveWhereInput>;
};
export type Chaves_UsuariosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chaveId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    Autorizado?: Prisma.UsuariosOrderByWithRelationInput;
    Chave?: Prisma.ChaveOrderByWithRelationInput;
};
export type Chaves_UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.Chaves_UsuariosWhereInput | Prisma.Chaves_UsuariosWhereInput[];
    OR?: Prisma.Chaves_UsuariosWhereInput[];
    NOT?: Prisma.Chaves_UsuariosWhereInput | Prisma.Chaves_UsuariosWhereInput[];
    chaveId?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
    usuarioId?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
    Autorizado?: Prisma.XOR<Prisma.UsuariosScalarRelationFilter, Prisma.UsuariosWhereInput>;
    Chave?: Prisma.XOR<Prisma.ChaveScalarRelationFilter, Prisma.ChaveWhereInput>;
}, "id">;
export type Chaves_UsuariosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chaveId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    _count?: Prisma.Chaves_UsuariosCountOrderByAggregateInput;
    _max?: Prisma.Chaves_UsuariosMaxOrderByAggregateInput;
    _min?: Prisma.Chaves_UsuariosMinOrderByAggregateInput;
};
export type Chaves_UsuariosScalarWhereWithAggregatesInput = {
    AND?: Prisma.Chaves_UsuariosScalarWhereWithAggregatesInput | Prisma.Chaves_UsuariosScalarWhereWithAggregatesInput[];
    OR?: Prisma.Chaves_UsuariosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Chaves_UsuariosScalarWhereWithAggregatesInput | Prisma.Chaves_UsuariosScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Chaves_Usuarios"> | string;
    chaveId?: Prisma.StringWithAggregatesFilter<"Chaves_Usuarios"> | string;
    usuarioId?: Prisma.StringWithAggregatesFilter<"Chaves_Usuarios"> | string;
};
export type Chaves_UsuariosCreateInput = {
    id: string;
    Autorizado: Prisma.UsuariosCreateNestedOneWithoutChaves_UsuariosInput;
    Chave: Prisma.ChaveCreateNestedOneWithoutChaves_UsuariosInput;
};
export type Chaves_UsuariosUncheckedCreateInput = {
    id: string;
    chaveId: string;
    usuarioId: string;
};
export type Chaves_UsuariosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Autorizado?: Prisma.UsuariosUpdateOneRequiredWithoutChaves_UsuariosNestedInput;
    Chave?: Prisma.ChaveUpdateOneRequiredWithoutChaves_UsuariosNestedInput;
};
export type Chaves_UsuariosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chaveId?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Chaves_UsuariosCreateManyInput = {
    id: string;
    chaveId: string;
    usuarioId: string;
};
export type Chaves_UsuariosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Chaves_UsuariosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chaveId?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Chaves_UsuariosListRelationFilter = {
    every?: Prisma.Chaves_UsuariosWhereInput;
    some?: Prisma.Chaves_UsuariosWhereInput;
    none?: Prisma.Chaves_UsuariosWhereInput;
};
export type Chaves_UsuariosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Chaves_UsuariosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chaveId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type Chaves_UsuariosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chaveId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type Chaves_UsuariosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chaveId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type Chaves_UsuariosCreateNestedManyWithoutAutorizadoInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput> | Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyAutorizadoInputEnvelope;
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
};
export type Chaves_UsuariosUncheckedCreateNestedManyWithoutAutorizadoInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput> | Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyAutorizadoInputEnvelope;
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
};
export type Chaves_UsuariosUpdateManyWithoutAutorizadoNestedInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput> | Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput[];
    upsert?: Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutAutorizadoInput | Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutAutorizadoInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyAutorizadoInputEnvelope;
    set?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    disconnect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    delete?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    update?: Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutAutorizadoInput | Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutAutorizadoInput[];
    updateMany?: Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutAutorizadoInput | Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutAutorizadoInput[];
    deleteMany?: Prisma.Chaves_UsuariosScalarWhereInput | Prisma.Chaves_UsuariosScalarWhereInput[];
};
export type Chaves_UsuariosUncheckedUpdateManyWithoutAutorizadoNestedInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput> | Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput[];
    upsert?: Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutAutorizadoInput | Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutAutorizadoInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyAutorizadoInputEnvelope;
    set?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    disconnect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    delete?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    update?: Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutAutorizadoInput | Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutAutorizadoInput[];
    updateMany?: Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutAutorizadoInput | Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutAutorizadoInput[];
    deleteMany?: Prisma.Chaves_UsuariosScalarWhereInput | Prisma.Chaves_UsuariosScalarWhereInput[];
};
export type Chaves_UsuariosCreateNestedManyWithoutChaveInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput> | Prisma.Chaves_UsuariosCreateWithoutChaveInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyChaveInputEnvelope;
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
};
export type Chaves_UsuariosUncheckedCreateNestedManyWithoutChaveInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput> | Prisma.Chaves_UsuariosCreateWithoutChaveInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyChaveInputEnvelope;
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
};
export type Chaves_UsuariosUpdateManyWithoutChaveNestedInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput> | Prisma.Chaves_UsuariosCreateWithoutChaveInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput[];
    upsert?: Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutChaveInput | Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutChaveInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyChaveInputEnvelope;
    set?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    disconnect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    delete?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    update?: Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutChaveInput | Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutChaveInput[];
    updateMany?: Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutChaveInput | Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutChaveInput[];
    deleteMany?: Prisma.Chaves_UsuariosScalarWhereInput | Prisma.Chaves_UsuariosScalarWhereInput[];
};
export type Chaves_UsuariosUncheckedUpdateManyWithoutChaveNestedInput = {
    create?: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput> | Prisma.Chaves_UsuariosCreateWithoutChaveInput[] | Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput[];
    connectOrCreate?: Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput | Prisma.Chaves_UsuariosCreateOrConnectWithoutChaveInput[];
    upsert?: Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutChaveInput | Prisma.Chaves_UsuariosUpsertWithWhereUniqueWithoutChaveInput[];
    createMany?: Prisma.Chaves_UsuariosCreateManyChaveInputEnvelope;
    set?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    disconnect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    delete?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    connect?: Prisma.Chaves_UsuariosWhereUniqueInput | Prisma.Chaves_UsuariosWhereUniqueInput[];
    update?: Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutChaveInput | Prisma.Chaves_UsuariosUpdateWithWhereUniqueWithoutChaveInput[];
    updateMany?: Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutChaveInput | Prisma.Chaves_UsuariosUpdateManyWithWhereWithoutChaveInput[];
    deleteMany?: Prisma.Chaves_UsuariosScalarWhereInput | Prisma.Chaves_UsuariosScalarWhereInput[];
};
export type Chaves_UsuariosCreateWithoutAutorizadoInput = {
    id: string;
    Chave: Prisma.ChaveCreateNestedOneWithoutChaves_UsuariosInput;
};
export type Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput = {
    id: string;
    chaveId: string;
};
export type Chaves_UsuariosCreateOrConnectWithoutAutorizadoInput = {
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput>;
};
export type Chaves_UsuariosCreateManyAutorizadoInputEnvelope = {
    data: Prisma.Chaves_UsuariosCreateManyAutorizadoInput | Prisma.Chaves_UsuariosCreateManyAutorizadoInput[];
    skipDuplicates?: boolean;
};
export type Chaves_UsuariosUpsertWithWhereUniqueWithoutAutorizadoInput = {
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
    update: Prisma.XOR<Prisma.Chaves_UsuariosUpdateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedUpdateWithoutAutorizadoInput>;
    create: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutAutorizadoInput>;
};
export type Chaves_UsuariosUpdateWithWhereUniqueWithoutAutorizadoInput = {
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
    data: Prisma.XOR<Prisma.Chaves_UsuariosUpdateWithoutAutorizadoInput, Prisma.Chaves_UsuariosUncheckedUpdateWithoutAutorizadoInput>;
};
export type Chaves_UsuariosUpdateManyWithWhereWithoutAutorizadoInput = {
    where: Prisma.Chaves_UsuariosScalarWhereInput;
    data: Prisma.XOR<Prisma.Chaves_UsuariosUpdateManyMutationInput, Prisma.Chaves_UsuariosUncheckedUpdateManyWithoutAutorizadoInput>;
};
export type Chaves_UsuariosScalarWhereInput = {
    AND?: Prisma.Chaves_UsuariosScalarWhereInput | Prisma.Chaves_UsuariosScalarWhereInput[];
    OR?: Prisma.Chaves_UsuariosScalarWhereInput[];
    NOT?: Prisma.Chaves_UsuariosScalarWhereInput | Prisma.Chaves_UsuariosScalarWhereInput[];
    id?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
    chaveId?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
    usuarioId?: Prisma.StringFilter<"Chaves_Usuarios"> | string;
};
export type Chaves_UsuariosCreateWithoutChaveInput = {
    id: string;
    Autorizado: Prisma.UsuariosCreateNestedOneWithoutChaves_UsuariosInput;
};
export type Chaves_UsuariosUncheckedCreateWithoutChaveInput = {
    id: string;
    usuarioId: string;
};
export type Chaves_UsuariosCreateOrConnectWithoutChaveInput = {
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput>;
};
export type Chaves_UsuariosCreateManyChaveInputEnvelope = {
    data: Prisma.Chaves_UsuariosCreateManyChaveInput | Prisma.Chaves_UsuariosCreateManyChaveInput[];
    skipDuplicates?: boolean;
};
export type Chaves_UsuariosUpsertWithWhereUniqueWithoutChaveInput = {
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
    update: Prisma.XOR<Prisma.Chaves_UsuariosUpdateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedUpdateWithoutChaveInput>;
    create: Prisma.XOR<Prisma.Chaves_UsuariosCreateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedCreateWithoutChaveInput>;
};
export type Chaves_UsuariosUpdateWithWhereUniqueWithoutChaveInput = {
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
    data: Prisma.XOR<Prisma.Chaves_UsuariosUpdateWithoutChaveInput, Prisma.Chaves_UsuariosUncheckedUpdateWithoutChaveInput>;
};
export type Chaves_UsuariosUpdateManyWithWhereWithoutChaveInput = {
    where: Prisma.Chaves_UsuariosScalarWhereInput;
    data: Prisma.XOR<Prisma.Chaves_UsuariosUpdateManyMutationInput, Prisma.Chaves_UsuariosUncheckedUpdateManyWithoutChaveInput>;
};
export type Chaves_UsuariosCreateManyAutorizadoInput = {
    id: string;
    chaveId: string;
};
export type Chaves_UsuariosUpdateWithoutAutorizadoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Chave?: Prisma.ChaveUpdateOneRequiredWithoutChaves_UsuariosNestedInput;
};
export type Chaves_UsuariosUncheckedUpdateWithoutAutorizadoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chaveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Chaves_UsuariosUncheckedUpdateManyWithoutAutorizadoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chaveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Chaves_UsuariosCreateManyChaveInput = {
    id: string;
    usuarioId: string;
};
export type Chaves_UsuariosUpdateWithoutChaveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Autorizado?: Prisma.UsuariosUpdateOneRequiredWithoutChaves_UsuariosNestedInput;
};
export type Chaves_UsuariosUncheckedUpdateWithoutChaveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Chaves_UsuariosUncheckedUpdateManyWithoutChaveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Chaves_UsuariosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chaveId?: boolean;
    usuarioId?: boolean;
    Autorizado?: boolean | Prisma.UsuariosDefaultArgs<ExtArgs>;
    Chave?: boolean | Prisma.ChaveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chaves_Usuarios"]>;
export type Chaves_UsuariosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chaveId?: boolean;
    usuarioId?: boolean;
    Autorizado?: boolean | Prisma.UsuariosDefaultArgs<ExtArgs>;
    Chave?: boolean | Prisma.ChaveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chaves_Usuarios"]>;
export type Chaves_UsuariosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chaveId?: boolean;
    usuarioId?: boolean;
    Autorizado?: boolean | Prisma.UsuariosDefaultArgs<ExtArgs>;
    Chave?: boolean | Prisma.ChaveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chaves_Usuarios"]>;
export type Chaves_UsuariosSelectScalar = {
    id?: boolean;
    chaveId?: boolean;
    usuarioId?: boolean;
};
export type Chaves_UsuariosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chaveId" | "usuarioId", ExtArgs["result"]["chaves_Usuarios"]>;
export type Chaves_UsuariosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Autorizado?: boolean | Prisma.UsuariosDefaultArgs<ExtArgs>;
    Chave?: boolean | Prisma.ChaveDefaultArgs<ExtArgs>;
};
export type Chaves_UsuariosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Autorizado?: boolean | Prisma.UsuariosDefaultArgs<ExtArgs>;
    Chave?: boolean | Prisma.ChaveDefaultArgs<ExtArgs>;
};
export type Chaves_UsuariosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Autorizado?: boolean | Prisma.UsuariosDefaultArgs<ExtArgs>;
    Chave?: boolean | Prisma.ChaveDefaultArgs<ExtArgs>;
};
export type $Chaves_UsuariosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Chaves_Usuarios";
    objects: {
        Autorizado: Prisma.$UsuariosPayload<ExtArgs>;
        Chave: Prisma.$ChavePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        chaveId: string;
        usuarioId: string;
    }, ExtArgs["result"]["chaves_Usuarios"]>;
    composites: {};
};
export type Chaves_UsuariosGetPayload<S extends boolean | null | undefined | Chaves_UsuariosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload, S>;
export type Chaves_UsuariosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Chaves_UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Chaves_UsuariosCountAggregateInputType | true;
};
export interface Chaves_UsuariosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Chaves_Usuarios'];
        meta: {
            name: 'Chaves_Usuarios';
        };
    };
    /**
     * Find zero or one Chaves_Usuarios that matches the filter.
     * @param {Chaves_UsuariosFindUniqueArgs} args - Arguments to find a Chaves_Usuarios
     * @example
     * // Get one Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Chaves_UsuariosFindUniqueArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Chaves_Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Chaves_UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Chaves_Usuarios
     * @example
     * // Get one Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Chaves_UsuariosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Chaves_Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_UsuariosFindFirstArgs} args - Arguments to find a Chaves_Usuarios
     * @example
     * // Get one Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Chaves_UsuariosFindFirstArgs>(args?: Prisma.SelectSubset<T, Chaves_UsuariosFindFirstArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Chaves_Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_UsuariosFindFirstOrThrowArgs} args - Arguments to find a Chaves_Usuarios
     * @example
     * // Get one Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Chaves_UsuariosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Chaves_UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Chaves_Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.findMany()
     *
     * // Get first 10 Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const chaves_UsuariosWithIdOnly = await prisma.chaves_Usuarios.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Chaves_UsuariosFindManyArgs>(args?: Prisma.SelectSubset<T, Chaves_UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Chaves_Usuarios.
     * @param {Chaves_UsuariosCreateArgs} args - Arguments to create a Chaves_Usuarios.
     * @example
     * // Create one Chaves_Usuarios
     * const Chaves_Usuarios = await prisma.chaves_Usuarios.create({
     *   data: {
     *     // ... data to create a Chaves_Usuarios
     *   }
     * })
     *
     */
    create<T extends Chaves_UsuariosCreateArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosCreateArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Chaves_Usuarios.
     * @param {Chaves_UsuariosCreateManyArgs} args - Arguments to create many Chaves_Usuarios.
     * @example
     * // Create many Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Chaves_UsuariosCreateManyArgs>(args?: Prisma.SelectSubset<T, Chaves_UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Chaves_Usuarios and returns the data saved in the database.
     * @param {Chaves_UsuariosCreateManyAndReturnArgs} args - Arguments to create many Chaves_Usuarios.
     * @example
     * // Create many Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Chaves_Usuarios and only return the `id`
     * const chaves_UsuariosWithIdOnly = await prisma.chaves_Usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Chaves_UsuariosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Chaves_UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Chaves_Usuarios.
     * @param {Chaves_UsuariosDeleteArgs} args - Arguments to delete one Chaves_Usuarios.
     * @example
     * // Delete one Chaves_Usuarios
     * const Chaves_Usuarios = await prisma.chaves_Usuarios.delete({
     *   where: {
     *     // ... filter to delete one Chaves_Usuarios
     *   }
     * })
     *
     */
    delete<T extends Chaves_UsuariosDeleteArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosDeleteArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Chaves_Usuarios.
     * @param {Chaves_UsuariosUpdateArgs} args - Arguments to update one Chaves_Usuarios.
     * @example
     * // Update one Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Chaves_UsuariosUpdateArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosUpdateArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Chaves_Usuarios.
     * @param {Chaves_UsuariosDeleteManyArgs} args - Arguments to filter Chaves_Usuarios to delete.
     * @example
     * // Delete a few Chaves_Usuarios
     * const { count } = await prisma.chaves_Usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Chaves_UsuariosDeleteManyArgs>(args?: Prisma.SelectSubset<T, Chaves_UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Chaves_Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Chaves_UsuariosUpdateManyArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Chaves_Usuarios and returns the data updated in the database.
     * @param {Chaves_UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Chaves_Usuarios.
     * @example
     * // Update many Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Chaves_Usuarios and only return the `id`
     * const chaves_UsuariosWithIdOnly = await prisma.chaves_Usuarios.updateManyAndReturn({
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
    updateManyAndReturn<T extends Chaves_UsuariosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Chaves_Usuarios.
     * @param {Chaves_UsuariosUpsertArgs} args - Arguments to update or create a Chaves_Usuarios.
     * @example
     * // Update or create a Chaves_Usuarios
     * const chaves_Usuarios = await prisma.chaves_Usuarios.upsert({
     *   create: {
     *     // ... data to create a Chaves_Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chaves_Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends Chaves_UsuariosUpsertArgs>(args: Prisma.SelectSubset<T, Chaves_UsuariosUpsertArgs<ExtArgs>>): Prisma.Prisma__Chaves_UsuariosClient<runtime.Types.Result.GetResult<Prisma.$Chaves_UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Chaves_Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_UsuariosCountArgs} args - Arguments to filter Chaves_Usuarios to count.
     * @example
     * // Count the number of Chaves_Usuarios
     * const count = await prisma.chaves_Usuarios.count({
     *   where: {
     *     // ... the filter for the Chaves_Usuarios we want to count
     *   }
     * })
    **/
    count<T extends Chaves_UsuariosCountArgs>(args?: Prisma.Subset<T, Chaves_UsuariosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Chaves_UsuariosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Chaves_Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chaves_UsuariosAggregateArgs>(args: Prisma.Subset<T, Chaves_UsuariosAggregateArgs>): Prisma.PrismaPromise<GetChaves_UsuariosAggregateType<T>>;
    /**
     * Group by Chaves_Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_UsuariosGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Chaves_UsuariosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Chaves_UsuariosGroupByArgs['orderBy'];
    } : {
        orderBy?: Chaves_UsuariosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Chaves_UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaves_UsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Chaves_Usuarios model
     */
    readonly fields: Chaves_UsuariosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Chaves_Usuarios.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Chaves_UsuariosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Autorizado<T extends Prisma.UsuariosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuariosDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Chave<T extends Prisma.ChaveDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChaveDefaultArgs<ExtArgs>>): Prisma.Prisma__ChaveClient<runtime.Types.Result.GetResult<Prisma.$ChavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Chaves_Usuarios model
 */
export interface Chaves_UsuariosFieldRefs {
    readonly id: Prisma.FieldRef<"Chaves_Usuarios", 'String'>;
    readonly chaveId: Prisma.FieldRef<"Chaves_Usuarios", 'String'>;
    readonly usuarioId: Prisma.FieldRef<"Chaves_Usuarios", 'String'>;
}
/**
 * Chaves_Usuarios findUnique
 */
export type Chaves_UsuariosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chaves_Usuarios to fetch.
     */
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
};
/**
 * Chaves_Usuarios findUniqueOrThrow
 */
export type Chaves_UsuariosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chaves_Usuarios to fetch.
     */
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
};
/**
 * Chaves_Usuarios findFirst
 */
export type Chaves_UsuariosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chaves_Usuarios to fetch.
     */
    where?: Prisma.Chaves_UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chaves_Usuarios to fetch.
     */
    orderBy?: Prisma.Chaves_UsuariosOrderByWithRelationInput | Prisma.Chaves_UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Chaves_Usuarios.
     */
    cursor?: Prisma.Chaves_UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chaves_Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chaves_Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Chaves_Usuarios.
     */
    distinct?: Prisma.Chaves_UsuariosScalarFieldEnum | Prisma.Chaves_UsuariosScalarFieldEnum[];
};
/**
 * Chaves_Usuarios findFirstOrThrow
 */
export type Chaves_UsuariosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chaves_Usuarios to fetch.
     */
    where?: Prisma.Chaves_UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chaves_Usuarios to fetch.
     */
    orderBy?: Prisma.Chaves_UsuariosOrderByWithRelationInput | Prisma.Chaves_UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Chaves_Usuarios.
     */
    cursor?: Prisma.Chaves_UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chaves_Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chaves_Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Chaves_Usuarios.
     */
    distinct?: Prisma.Chaves_UsuariosScalarFieldEnum | Prisma.Chaves_UsuariosScalarFieldEnum[];
};
/**
 * Chaves_Usuarios findMany
 */
export type Chaves_UsuariosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chaves_Usuarios to fetch.
     */
    where?: Prisma.Chaves_UsuariosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chaves_Usuarios to fetch.
     */
    orderBy?: Prisma.Chaves_UsuariosOrderByWithRelationInput | Prisma.Chaves_UsuariosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Chaves_Usuarios.
     */
    cursor?: Prisma.Chaves_UsuariosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chaves_Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chaves_Usuarios.
     */
    skip?: number;
    distinct?: Prisma.Chaves_UsuariosScalarFieldEnum | Prisma.Chaves_UsuariosScalarFieldEnum[];
};
/**
 * Chaves_Usuarios create
 */
export type Chaves_UsuariosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Chaves_Usuarios.
     */
    data: Prisma.XOR<Prisma.Chaves_UsuariosCreateInput, Prisma.Chaves_UsuariosUncheckedCreateInput>;
};
/**
 * Chaves_Usuarios createMany
 */
export type Chaves_UsuariosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chaves_Usuarios.
     */
    data: Prisma.Chaves_UsuariosCreateManyInput | Prisma.Chaves_UsuariosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Chaves_Usuarios createManyAndReturn
 */
export type Chaves_UsuariosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chaves_Usuarios
     */
    select?: Prisma.Chaves_UsuariosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Chaves_Usuarios
     */
    omit?: Prisma.Chaves_UsuariosOmit<ExtArgs> | null;
    /**
     * The data used to create many Chaves_Usuarios.
     */
    data: Prisma.Chaves_UsuariosCreateManyInput | Prisma.Chaves_UsuariosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Chaves_UsuariosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Chaves_Usuarios update
 */
export type Chaves_UsuariosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Chaves_Usuarios.
     */
    data: Prisma.XOR<Prisma.Chaves_UsuariosUpdateInput, Prisma.Chaves_UsuariosUncheckedUpdateInput>;
    /**
     * Choose, which Chaves_Usuarios to update.
     */
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
};
/**
 * Chaves_Usuarios updateMany
 */
export type Chaves_UsuariosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Chaves_Usuarios.
     */
    data: Prisma.XOR<Prisma.Chaves_UsuariosUpdateManyMutationInput, Prisma.Chaves_UsuariosUncheckedUpdateManyInput>;
    /**
     * Filter which Chaves_Usuarios to update
     */
    where?: Prisma.Chaves_UsuariosWhereInput;
    /**
     * Limit how many Chaves_Usuarios to update.
     */
    limit?: number;
};
/**
 * Chaves_Usuarios updateManyAndReturn
 */
export type Chaves_UsuariosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chaves_Usuarios
     */
    select?: Prisma.Chaves_UsuariosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Chaves_Usuarios
     */
    omit?: Prisma.Chaves_UsuariosOmit<ExtArgs> | null;
    /**
     * The data used to update Chaves_Usuarios.
     */
    data: Prisma.XOR<Prisma.Chaves_UsuariosUpdateManyMutationInput, Prisma.Chaves_UsuariosUncheckedUpdateManyInput>;
    /**
     * Filter which Chaves_Usuarios to update
     */
    where?: Prisma.Chaves_UsuariosWhereInput;
    /**
     * Limit how many Chaves_Usuarios to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Chaves_UsuariosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Chaves_Usuarios upsert
 */
export type Chaves_UsuariosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Chaves_Usuarios to update in case it exists.
     */
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
    /**
     * In case the Chaves_Usuarios found by the `where` argument doesn't exist, create a new Chaves_Usuarios with this data.
     */
    create: Prisma.XOR<Prisma.Chaves_UsuariosCreateInput, Prisma.Chaves_UsuariosUncheckedCreateInput>;
    /**
     * In case the Chaves_Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Chaves_UsuariosUpdateInput, Prisma.Chaves_UsuariosUncheckedUpdateInput>;
};
/**
 * Chaves_Usuarios delete
 */
export type Chaves_UsuariosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Chaves_Usuarios to delete.
     */
    where: Prisma.Chaves_UsuariosWhereUniqueInput;
};
/**
 * Chaves_Usuarios deleteMany
 */
export type Chaves_UsuariosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Chaves_Usuarios to delete
     */
    where?: Prisma.Chaves_UsuariosWhereInput;
    /**
     * Limit how many Chaves_Usuarios to delete.
     */
    limit?: number;
};
/**
 * Chaves_Usuarios without action
 */
export type Chaves_UsuariosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Chaves_Usuarios.d.ts.map