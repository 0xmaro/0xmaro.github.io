/** The slice of @shuding/opentype.js (satori's own font engine) that og.ts uses. */
declare module '@shuding/opentype.js' {
  interface Font {
    /** Advance width in px, measured after Arabic contextual shaping. */
    getAdvanceWidth(text: string, fontSize: number): number;
  }
  const opentype: { parse(buffer: ArrayBuffer): Font };
  export default opentype;
}
