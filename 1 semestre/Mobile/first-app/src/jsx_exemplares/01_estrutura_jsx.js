import {Text,View} from "React_Native"

export function EstruturaJSX() {
    return(
        <View>
            <Text>Exemplo de retorno único</Text>
        
            <View>
             <>
                <Text></Text>
                {/* Exemplo SelfClose */}
                <View/>
             </>
            </View>
        
        </View>

    )
}