export interface Data {
    id: number;
    name: string;
}

export interface DataList<T, V> extends Data {
    subfolders: T[];
    files: V[];
}
