// like interface, note we should use interface to decribe a shape 
export type Alias4 = {
    a: number;
    b: number;
}

// we should use alias to describe union or intersection
export type Alias1 = string | string[] | null;
export type Alias2<T> = T[];