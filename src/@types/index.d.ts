declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}
  
declare module '*.png' {
    const src: string;
    export default src;
}

type AppState {

    alert: object,
    result: {
        index: number,
        content: JSX.Element[]
    }[]
    
}