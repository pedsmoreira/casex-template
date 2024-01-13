export type CasexTemplatePatternType = "static" | "singular" | "plural";

export interface CasexTemplatePattern {
  readonly type: CasexTemplatePatternType;
  readonly casexPattern: string;
}
