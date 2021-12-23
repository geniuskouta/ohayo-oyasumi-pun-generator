let index = 0;

export function otsukarePun(): string {
    const ohayoArray = [
        'おつかれーらいす',
        'おつかれーとうしょくひん',
        'おつかれさまー',
    ];

    if(index < ohayoArray.length - 1) {
        index++;
    } else {
        index = 0;
    }

    return ohayoArray[index];
}
