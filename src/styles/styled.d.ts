import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    BODY: string;
    TEXT: string;
    GRADIENT: string;
    SUCCESS: string;
    PRIMARY: string;
    SECONDARY: string;
    TERTIARY: string;
    INFO: string;
    ERROR: string;
    WARNING: string;
    CARD_BODY: string;
  }
}
