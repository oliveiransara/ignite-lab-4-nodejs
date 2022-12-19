// exportando tipo Replace helper-function do typescript que pode receber duas tipagens
export type Replace<T, R> = Omit<T, keyof R> & R;
