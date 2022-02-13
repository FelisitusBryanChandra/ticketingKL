import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = (onSuccess = () => {}, onError = () => {}) => {
    return async dispatch =>{
        try{
            const user = 'myapp_user'
            const userRes = await AsyncStorage.getItem(user);
            const users = userRes ? JSON.parse(userRes) : [];

            dispatch({
                type: CONFIRM_NAME,
                inputValue: value
            });
            onSuccess();
        }
        catch (err){
            console.log(err);
            onError()
        }
    }
}

export const createUser = (value, onSuccess=()=>{}, onError = () => {})=>{
    return async dispatch =>{
    try{
        const newUser = {
            value,
            id: Math.random()
        }
    const user = 'myapp_user'
    const {form} = getState().form
    
    const formCopy = [...form]
    formCopy.push(newUser);

    await AsyncStorage.setItem(user, JSON.stringify(formCopy))

    this.props.navigation.navigate('Home', {
    name: DATA.name});
    console.log('data sent: ', DATA)
    console.log('All Data: ', DATA2)
    
    dispatch({
        type:CONFIRM_NAME,
        inputValue: value
    });
    onSuccess();
    }
    catch(err){
        console.log(err);
        onError();
        }
    }
}
