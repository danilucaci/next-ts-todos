import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: {
        page: string;
      };
      text: {
        default: string;
      };
    };
  }
}
