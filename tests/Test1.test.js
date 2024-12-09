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
        console.log(screen.getByTestId('flat'));
        
        const dom = JSON.stringify(screen.toJSON());
        expect(dom).toEqual(expect.stringMatching(/RCTScrollView/));
    });
    it('Flatlist texts are added', async () => {
        jest.useFakeTimers();
        render(<App/>);

        const elem = screen.getByPlaceholderText('message');
        const button = screen.getByRole('button');

        fireEvent(elem,'onChangeText', 'Football');
        fireEvent(button, 'onPress');
        fireEvent(elem,'onChangeText', 'Ice hockey');
        fireEvent(button, 'onPress');
        fireEvent(elem,'onChangeText', 'Running');
        fireEvent(button, 'onPress');
        
        const flatlist = screen.getByTestId('flatlist');

        expect(within(flatlist).getByText('Football')).toBeOnTheScreen();
        expect(within(flatlist).getByText('Ice hockey')).toBeOnTheScreen();
        expect(within(flatlist).getByText('Running')).toBeOnTheScreen();
        
    });
});

