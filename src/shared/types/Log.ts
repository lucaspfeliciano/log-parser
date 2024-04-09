export interface Game {
    players: string[]
    kills: Record<string, number>
    total_kills: number
}

interface Log {
    [key: string]: Game
}

export default Log