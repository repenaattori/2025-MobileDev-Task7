import { fireEvent, render, screen, userEvent, within } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

jest.mock('expo-font', ()=>{   
    const module = {
        ...jest.requireActual("expo-font"),
        isLoaded: jest.fn(()=>true)
    }
    return module;
});

describe('Flatlist tests', () => {
    it('Flatlist is used', async () => {
        jest.useFakeTimers()
        render(<App/>);        
        const dom = JSON.stringify(screen.toJSON());
        expect(dom).toEqual(expect.stringMatching(/RCTScrollView/));
    });
   
});

