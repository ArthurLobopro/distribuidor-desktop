import create from 'zustand'

interface menuState {
    mode: "dist" | "name" | "numat"
    setMode: (mode: string) => void
}

interface resultStateContent {
    result: any[],
    setResult: (result: any[]) => void,
    filterResult: (result: any[]) => any[]
}

type alert = {
    title: string
    text: string
    center?: boolean
    animation?: boolean
}

export interface alertStateContent {
    alert: (object | alert)
    setAlert: (alert: alert | object) => void
}

const useMenu = create<menuState>(set => ({
    mode: 'dist',
    setMode: (mode: string) => set(state => ({ mode }))
}))

const resultState = create<resultStateContent>(set => ({
    result: [],
    setResult: result => set(state => ({ result: state.filterResult(result) })),
    filterResult: (result: any[]) => result.filter( res => res.content !== undefined)
}))

const alertState = create<alertStateContent>(set => ({
    alert: {},
    setAlert: (alert: alert | object) => set(state => ({ alert }))
}))

export { useMenu, resultState, alertState }