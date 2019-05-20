const double = (n) => n * 2;
const increment = (n) => n + 1;

export const pipelineValue = 5 |> double |> double |> increment |> double;

export class X {
  f1 = 123;
  #f2 = 321;
  
  async test() {
    return 123;
  }
}
