import { Colors, Scale, Matrics } from '.'

const AppStyle = {
    shadowOpt: {
        color: "#000",
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: 5 }
    },
    headerTitleStyle: {
        color: Colors.WHITE,
        fontSize: Scale(16)
    },
    headerStyle: {
        backgroundColor: Colors.PRIMARY_COLOR
    }
}

export default AppStyle;