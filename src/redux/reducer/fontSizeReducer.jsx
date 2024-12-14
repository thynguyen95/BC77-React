export const fontSizeReducer = (fontSize = 50, action) => {
    // console.log("action: ", action);
    const { type, payload } = action;

    if (type === "CHANGE_FONT_SIZE") {
        fontSize += payload;
    }

    return fontSize;
};
