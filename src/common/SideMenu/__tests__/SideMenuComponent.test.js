import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SideMenuComponent from '../SideMenuComponent';

Enzyme.configure({ adapter: new Adapter() });

const sideMenuComponent = (<SideMenuComponent />);

describe('The appearance and functionality of the side menu component', () => {
  const container = mount(sideMenuComponent);

  it('Matches the SideMenuComponent snapshot', () => {
    const tree = renderer.create(sideMenuComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains the master nav container with the correct attributes', () => {
    expect(container.childAt(0).hasClass('sideMenuContainer')).toBe(true);
    expect(container.childAt(0).name()).toBe('nav');
  });

  it('Displays the Tracmobility branding correctly', () => {
    expect(container.childAt(0).childAt(0).hasClass('tracBrand')).toBe(true);
    expect(container.find('.tracBrand').childAt(0).name()).toBe('FontAwesomeIcon');
    expect(container.find('.tracBrand').childAt(1).text()).toBe('TRACMOBILITY');
  });

  it('Contains all of the empty links for other functionality', () => {
    const taskManagementSection = container.find('.taskManagementSection');
    expect(taskManagementSection.childAt(1).prop('href')).toBe('#');
    expect(taskManagementSection.childAt(2).prop('href')).toBe('#');
    expect(taskManagementSection.childAt(3).prop('href')).toBe('#');
    expect(taskManagementSection.childAt(4).prop('href')).toBe('#');
  });

  it('Displays the Operation Menu Dropdown to contain working links for navigation', () => {
    const operationMenuDropdown = container.find('.operationMenuDropdown');
    expect(operationMenuDropdown.childAt(0).prop('href')).toBe('/');
    expect(operationMenuDropdown.childAt(1).prop('href')).toBe('/vehicle-map')
  })
})