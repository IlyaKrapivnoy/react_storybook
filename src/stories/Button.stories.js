import Button from '../components/Button';

export default {
    title: 'Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind();
Red.args = {
    backgroundColor: 'red',
    label: 'Press me',
    size: 'md',
};

export const Green = Template.bind();
Green.args = {
    backgroundColor: 'green',
    label: 'Press me',
    size: 'md',
};

export const Gray = Template.bind();
Gray.args = {
    backgroundColor: 'gray',
    label: 'Press me',
    size: 'md',
};
