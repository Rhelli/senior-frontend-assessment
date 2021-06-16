import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TopNavigation from '../TopNavigation';

Enzyme.configure({ adapter: new Adapter() });

const topNavigation = (<TopNavigation />);

describe('The appearance and functionality of the top navigation component', () => {
  const container = mount(topNavigation);

  it('Matches the previous snapshot of the Top Navigation Component', () => {
    const tree = renderer.create(topNavigation).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains the correct master container with the correct attributes', () => {
    expect(container.childAt(0).name()).toBe('header');
    expect(container.childAt(0).hasClass('topNavigationContainer')).toBe(true);
  });

  it('Contains the search bar', () => {
    const navSearch = container.find('.topNavSearch');
    expect(navSearch.childAt(0).name()).toBe('input');
    expect(navSearch.childAt(0).props().placeholder).toBe('Search For..');
    expect(navSearch.childAt(1).name()).toBe('button');
  });

  it('Contains the notification and message buttons', () => {
    const navProfileButtons = container.find('.topNavProfileButtons');
    expect(navProfileButtons.childAt(0).name()).toBe('button');
    expect(navProfileButtons.childAt(0).childAt(0).name()).toBe('FontAwesomeIcon');
    expect(navProfileButtons.childAt(1).name()).toBe('button');
    expect(navProfileButtons.childAt(1).childAt(0).name()).toBe('FontAwesomeIcon');
  });

  it('Should display the users profile image and name', () => {
    const userProfileSection = container.find('.topNavUserProfile');
    expect(userProfileSection.childAt(0).text()).not.toBe(undefined);
    expect(userProfileSection.childAt(1).prop('src')).toBe('profileImg.jpeg');
  });
})