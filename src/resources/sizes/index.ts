interface ISIZES {
  [key: string]: string
}

export const SIZES: ISIZES = {
  maxWidth: '360px',
  sideMargin: '10%',
  interval: '30%',
}

export interface IDiv {
  width?: string
  margin?: string
  interval?: string
}
