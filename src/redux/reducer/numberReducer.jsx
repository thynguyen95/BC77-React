export const numberReducer = (number = 200, action) => {
    // console.log("action: ", action);
    //xử lý logic
    const { type, payload } = action;
    if (type === "CHANGE_QUALITY") {
        number += payload;
    }

    return number;
};
