//styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
    fourthColor: string;
  }
}
