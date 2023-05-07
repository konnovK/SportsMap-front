import '../src/client/styles/index.css';
import { addDecorator } from '@storybook/react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator((story) => <div className="light_theme">{story()}</div>);
