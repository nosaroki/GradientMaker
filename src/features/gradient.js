import { createSlice } from "@reduxjs/toolkit";
import getGradientCSSValue from "../utils/getGradientCSSValue";

// console.log(getGradientCSSValue({
//     colors: [
//         {
//             id: 1,
//             value: "#f66b22",
//             position: 20
//         },
//         {
//             id: 2,
//             value: "#ee478f",
//             position: 50
//         }
//     ],
//     pickedColorId: 1,
//     angle: 60
// })
// )

const initialState = {
    colors: [
        {
            id: 1,
            value: "#f66b22",
            position: 20
        },
        {
            id: 2,
            value: "#ee478f",
            position: 50
        }
    ],
    pickedColorId: 1,
    angle: 60
}

export const gradientSlice = createSlice({ // Objet retourné par createslice qui contient toutes les infos reducer/createur d'actions etc
    name: "gradient",
    initialState,
    reducers: {
         updateColorValue: (state, action) => {
            const currentColor = state.colors.find(color => color.id === action.payload.id)
            currentColor.value = action.payload.value
    },
        addColor: (state, action) => {
            if(state.colors.length === 5) {
                return
            }
            else {
                state.colors.push({
                    id: state.colors[state.colors.length - 1].id + 1, // on créé l'idée de la nouvelle couleur en incrémentant en fonction de l'id précédent
                    value: "#111111",
                    position: state.colors[state.colors.length - 1].position + 0.1 * state.colors[state.colors.length - 1].position
                })
            }
        },
        removeColor: (state, action) => {
            if (state.colors.length === 2) {
                return
            }
            else {
                state.colors.pop()
            }
        },
        updateAngle: (state, action) => {
            state.angle = action.payload
        },
        pickColor: (state, action) => {
            state.pickedColorId = action.payload
        },
        updateColorPosition: (state, action) => {
            state.colors.find(color => color.id === state.pickedColorId).position = action.payload
        }
    }
})

export const {
    updateColorValue,
    addColor,
    removeColor,
    updateAngle,
    pickColor,
    updateColorPosition
} = gradientSlice.actions

export default gradientSlice.reducer