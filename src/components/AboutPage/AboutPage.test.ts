import { render } from '@testing-library/vue';
import AboutPage from './AboutPage.vue';

test('renders TopMenu', () => {
  const { debug, getByText } = render(AboutPage);
  debug();

  getByText('Vite');
});
