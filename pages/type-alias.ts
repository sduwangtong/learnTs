// like interface, note we should use interface to decribe a shape 
type Alias4 = {
    a: number;
    b: number;
}

// we should use alias to describe union or intersection
type Alias1 = string | string[] | null;
type Alias2<T> = T[];