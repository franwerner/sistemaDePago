export const retrasoTest = (test, segundos = 0) => {
    return new Promise((resolve) => setTimeout(() => resolve(), segundos * 1000))
        .then(() => test)
};