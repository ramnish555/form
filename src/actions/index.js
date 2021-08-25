export const onInput = (name, value) => {
    return {
        type: "UPDATE",
        payload: {
            name,
            value
        }
    }
}