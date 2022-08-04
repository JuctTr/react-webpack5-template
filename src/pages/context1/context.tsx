import { createContext, useContext } from 'react';

class globalStore {
    tztoken = '';
    loading = true;
    canvasConfig = [];
    showQuestionLayer = false;
    showRule = false;
    posterPopup = {
        show: false,
        imgUrl: '',
    };
    userInfoData = {
        isShowLayer: false,
    };
    isPPMSError = false;
}

const globalContext = createContext(null);
const useGlobalContext = () => useContext(globalContext);

export { globalContext, globalStore, useGlobalContext };
