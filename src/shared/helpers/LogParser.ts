import fs from 'fs'

import Log, { Game } from '@shared/types/Log';

import { extractKillInfo } from './ExtractKillInfo';


export const logParser = (path: string) => {
    const fileData = fs.readFileSync(path, 'utf8');

    const gameData: Log = {}

    const lines = fileData.split('\n');

    let game: Game = { kills: {}, players: [], total_kills: 0}

    lines.forEach((line) => {
        if (line.includes('InitGame')) {
            game = { kills: {}, players: [], total_kills: 0}
        }

        if (line.includes('Kill:')) {
            const infos = extractKillInfo(line)

            game.total_kills += 1
            
            if (infos.killer !== '<world>' && !game.players.includes(infos.killer)) {
                game.players.push(infos.killer)
                game.kills[infos.killer] = 1
            }

            if (!game.players.includes(infos.victim)) {
                game.players.push(infos.victim)
                game.kills[infos.victim] = 0

            }

            if (infos.killer === '<world>') {
                game.kills[infos.victim] -= 1
            }
        }

        if (line.includes('ShutdownGame')) {
            gameData[`game${Object.keys(gameData).length + 1}`] = game
        }
    });

    return gameData;
}
