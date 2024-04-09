
const regex = /Kill: \d+ \d+ \d+: (.+) killed (.+) by (.+)/;

export const extractKillInfo = (logLine: string) => {
    const match = logLine.match(regex);

    if (match) {
        const killer = match[1];
        const victim = match[2];
        const weapon = match[3];

        return { killer, victim, weapon };
    } else {
        return null;
    }
}