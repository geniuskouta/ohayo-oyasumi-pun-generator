export function otsukarePun(): string {
    const index = Math.floor(Math.random() * 3);
    const ohayoArray = [
        'おつかれーらいす',
        'おつかれーとうしょくひん',
        'おつかれさまー',
    ];
    return ohayoArray[index];
}
