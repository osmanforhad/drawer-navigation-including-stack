import { StyleSheet } from "react-native";

const DrawerContentStyle = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13,
        lineHeight: 14,
        // color: '#6e6e6e',
        width: '100%',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        borderBottomWidth: 0,
        borderBottomColor: '#dedede',
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#dedede',
        borderTopWidth: 1,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContentStyle;