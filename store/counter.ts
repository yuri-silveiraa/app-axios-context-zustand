import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { persist, createJSONStorage} from "zustand/middleware"

type CounterStore = {
    count: number,
    increment: () => void,
    decrement: () => void,
    setCount: (newCount: number) => void
}

export const useCounter = create<CounterStore>()((persist(
    (set) => ({
        count: 0,
        increment: () => set(state => ({ count: state.count + 1 })),
        decrement: () => set(state => ({ count: state.count - 1 })),
        setCount: (newCount: number) => set({ count: newCount })
    }),
    {
        name: 'counter',
        storage: createJSONStorage(() => AsyncStorage)
    }
)))