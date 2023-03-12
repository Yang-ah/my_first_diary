//styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontColor: string;
    primaryColor: string;
    thirdColor?: string;
    pointColor: string;
    backgroundColor: string;
    icon: string;

    work: {
      firstColor: string;
      secondColor: string;
      thirdColor: string;
      fourthColor: string;
    };

    plan: {
      firstColor: string;
      secondColor: string;
      thirdColor: string;
      fourthColor: string;
    };
  }
}
